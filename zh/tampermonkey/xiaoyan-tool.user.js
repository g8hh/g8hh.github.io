// ==UserScript==
// @name         萧炎助手
// @namespace    xyidle-local
// @version      1.16.9
// @description  全自动比较修为丹与挂机收益，按剩余火种评估升级；无切页刷新
// @match        https://cloryyh.github.io/XYidle/*
// @run-at       document-idle
// @sandbox      JavaScript
// @grant        GM_info
// @grant        unsafeWindow
// @updateURL    https://g8hh.cn/zh/tampermonkey/xiaoyan-tool.user.js
// @downloadURL    https://g8hh.cn/zh/tampermonkey/xiaoyan-tool.user.js
// @noframes
// ==/UserScript==

(() => {
  'use strict';
  if (location.origin !== 'https://cloryyh.github.io' || !location.pathname.startsWith('/XYidle/')) return;
  const panelId = 'xyidle-auto-alchemy';
  if (document.getElementById(panelId)) return;

  const realms = ['斗之气', '斗者', '斗师', '大斗师', '斗灵', '斗王', '斗皇', '斗宗', '斗尊', '半圣', '斗圣', '斗帝'];
  const talents = new Map([['meridian1', '经脉初通'], ['meridian2', '百脉贯通']]);
  const extra = { pursuit: false, waitRefine: false, refineMode: false, huntCores: false, herbEvent: false, gardenEvent: false, residualEvent: false, auctionEvent: false, merchantOrders: false, breakPills: false, merchantBreak: false, travelerEvent: false, autoUpgrade: false, autoSeclusion: false, autoSquads: true, unlockSquad: true, unlockPuppet: true, evolvePuppet: true, lateFlames: true, autoGifts: true };
  const runtimeKey = 'xyidle-auto-alchemy:runtime:v1';
  function readRuntime() {
    try {
      const value = JSON.parse(localStorage.getItem(runtimeKey));
      return {
        alchemy: value?.alchemy === true,
        challenge: value?.challenge === true,
        mode: value?.mode === true,
      };
    } catch (error) {
      console.warn('助手开关读取失败', error);
      return { alchemy: false, challenge: false, mode: false };
    }
  }

  const runtime = readRuntime();
  const uiKey = 'xyidle-auto-alchemy:ui:v1';
  let view = {};
  try { view = JSON.parse(localStorage.getItem(uiKey)) || {}; } catch (_) {}
  let paused = view.paused === true;
  function saveView() {
    try { localStorage.setItem(uiKey, JSON.stringify(view)); }
    catch (error) { console.warn('面板状态保存失败', error); }
  }
  // Only invoke existing rendering functions. Game actions still go through buttons.
  const game = typeof unsafeWindow === 'undefined' ? window : unsafeWindow;
  function refreshGame(names) {
    if (!names.every(name => typeof game[name] === 'function')) return false;
    for (const name of names) game[name](false);
    return true;
  }

  function saveRuntime(name, enabled) {
    runtime[name] = enabled;
    try {
      localStorage.setItem(runtimeKey, JSON.stringify(runtime));
    } catch (error) {
      console.warn('助手开关保存失败', error);
    }
  }

  const extraKey = 'xyidle-auto-alchemy:extras:v1';
  try {
    const saved = JSON.parse(localStorage.getItem(extraKey));
    for (const key of Object.keys(extra)) if (typeof saved?.[key] === 'boolean') extra[key] = saved[key];
  } catch (error) {
    console.warn('助手设置读取失败', error);
  }
  let alchemyMode = '';
  let restoringRefineMode = false;
  let coreRecoveryUntil = 0;

  const challengeKey = 'xyidle-auto-alchemy:challenge:v1';
  const storyKey = 'xyidle-auto-alchemy:story:v1';
  const rankLabels = '零一二三四五六七八九';
  const page = selector => document.querySelector(selector);
  const recipeButtons = () => [...document.querySelectorAll('#recipeList .recipe button[data-craft]')];
  const pillName = button => button?.closest('.recipe')?.querySelector('.nm')?.firstChild?.textContent.trim();

  function loadStorySettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(storyKey));
      if (saved && typeof saved.enabled === 'boolean' && Number.isFinite(saved.threshold) &&
          saved.threshold >= 0 && saved.threshold <= 100) return saved;
    } catch (error) {
      console.warn('剧情炼丹设置读取失败', error);
    }
    return { enabled: true, threshold: 50 };
  }

  const story = loadStorySettings();

  function getStoryRecipe(body, buttons) {
    if (!body) return null;
    const lines = body.split(/\n+/).map(line => line.trim()).filter(Boolean);
    for (const button of buttons) {
      const recipe = button.closest('.recipe');
      if (!recipe?.querySelector('.eff')?.textContent.includes('剧情道具')) continue;
      const name = pillName(button);
      if (!name) continue;
      const missing = lines.some(line => {
        if (!line.includes(name) || /已满足|已备齐|已拥有|已提交|已交付|已炼制|已取得|无需/.test(line)) return false;
        return /缺少|缺失|未获得|未拥有|未炼制|不足|未备齐|尚无|需要|所需|需炼制|需提交|需交付|要求|前置|条件|需\s*[「『【：:]|[（(]\s*(?:未|缺)|(?:^|[^\d])0\s*[/／]\s*[1-9]/.test(line);
      });
      if (missing) return button;
    }
    return null;
  }

  function getStoryChance(button) {
    const cost = button.closest('.recipe')?.querySelector('.cost')?.textContent || '';
    const match = cost.match(/成丹率\s*[:：]?\s*(\d+(?:\.\d+)?)\s*[%％]/);
    return match ? Number(match[1]) : null;
  }

  let running = runtime.alchemy;
  let nextCraftAt = 0;
  let attempts = 0;

  function readRealm(text) {
    const compact = (text || '').replace(/\s+/g, '');
    const tier = realms.findIndex(name => compact.startsWith(name));
    if (tier < 0) return null;
    const suffix = compact.slice(realms[tier].length);
    if (!suffix) return { tier, star: 0 };
    const rank = suffix.match(/^([一二三四五六七八九1-9])[星段]$/);
    if (!rank) return null;
    return { tier, star: Number(rank[1]) || rankLabels.indexOf(rank[1]) };
  }

  const host = document.createElement('div');
  host.id = panelId;
  Object.assign(host.style, { position: 'fixed', bottom: '14px', right: '14px', zIndex: '2147483000' });
  const ui = host.attachShadow({ mode: 'open' });
  ui.innerHTML = `
<style>
  :host {
    --ink: #253b32;
    --muted: #52665c;
    --green: #245340;
    --line: #ced9ce;
    --surface: #fcfbf6;
    --tint: #eef4ed;
    color: var(--ink);
    font: 14px/1.45 system-ui, sans-serif;
  }
  * { box-sizing: border-box; }
  [hidden] { display: none !important; }
  .panel {
    width: min(440px, calc(100vw - 28px));
    max-height: 70vh;
    max-height: 70dvh;
    overflow: auto;
    overscroll-behavior: contain;
    scrollbar-gutter: stable;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: 12px;
    box-shadow: 0 6px 24px #192d252c;
  }
  summary { cursor: pointer; font-weight: 650; }
  .title {
    position: sticky;
    top: 0;
    z-index: 2;
    padding: 10px 12px;
    background: var(--green);
    color: white;
    line-height: 22px;
  }
  #badge {
    float: right;
    padding: 0 8px;
    border-radius: 12px;
    background: #ffffff23;
    font-size: 12px;
  }
  .nav {
    position: sticky;
    top: 42px;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 6px;
    padding: 8px 10px;
    border-bottom: 1px solid var(--line);
    background: var(--surface);
  }
  section { padding: 10px; }
  p { margin: 0; color: var(--muted); }
  .overview, .recommendation, .group {
    margin: 0 0 8px;
    border: 1px solid var(--line);
    border-radius: 8px;
  }
  .overview, .recommendation { padding: 8px 10px; background: var(--tint); }
  .overview p { margin-top: 5px; }
  #realm { color: var(--muted); font-variant-numeric: tabular-nums; }
  .bar, .fields { display: flex; flex-wrap: wrap; align-items: center; gap: 6px 10px; }
  .bar { justify-content: space-between; }
  .fields { margin-top: 6px; }
  label { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 5px; }
  small { display: block; margin-top: 5px; color: var(--muted); font-size: 12px; }
  #plan-note, #upgrade-status { white-space: pre-line; }
  button, select, input[type=number] {
    min-height: 29px;
    max-width: 100%;
    padding: 3px 7px;
    border: 1px solid #b9c9bd;
    border-radius: 6px;
    background: #fff;
    color: inherit;
    font: inherit;
  }
  button { cursor: pointer; }
  .panel:not([open]) { width: 210px; scrollbar-gutter: auto; overflow: hidden; }
  .toolbar { padding: 8px 10px; border-bottom: 1px solid var(--line); display:flex; align-items:center; justify-content:space-between; gap:8px; }
  .toolbar small { margin:0; }
  #pause-all { min-height:34px; flex-shrink:0; }
  #health { margin:8px 10px; padding:8px; background:#fff0d9; color:#70470e; border-radius:6px; }
  #status, #challenge-status, #mode-status { min-height:2.9em; overflow-wrap:anywhere; font-variant-numeric:tabular-nums; }
  .rule { padding:10px 8px; margin:6px 0; border:1px solid var(--line); border-radius:8px; background:#fff; }
  .fields label { flex:1 1 140px; }
  .fields select { flex:1; min-width:0; }
  .nav button { min-height:36px; }
  @media(max-width:480px) { .panel { max-height:78dvh; } button, select, input[type=number] { min-height:36px; } }

  button:disabled { cursor: default; opacity: .55; }
  button[aria-pressed=true], button.primary { background: var(--green); color: white; }
  input[type=checkbox] { accent-color: var(--green); }
  :focus-visible { outline: 2px solid #956116; outline-offset: 2px; }
  fieldset { min-width: 0; margin: 0 0 8px; padding: 4px 8px 7px; border: 1px solid var(--line); border-radius: 6px; }
  legend { padding: 0 4px; font-weight: 650; }
  fieldset label, .settings label { display: flex; margin: 3px 0; }
  .group summary { padding: 7px 9px; }
  .content { padding: 0 9px 8px; }
  .content fieldset:last-child { margin-bottom: 0; }
  .inline { border-width: 1px 0 0; border-radius: 0; margin: 8px 0 0; }
  .inline summary { padding: 6px 0 0; }
  .rule { padding: 7px 0; border-bottom: 1px solid var(--line); }
  #add { margin-top: 7px; }
  .plan-table { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 12px; }
  .plan-table th, .plan-table td { padding: 4px; border-bottom: 1px solid var(--line); text-align: left; }
  .plan-table th:last-child, .plan-table td:last-child { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .plan-table tr[data-selected] { background: #dceadd; font-weight: 700; }

  .help-text { cursor:help; text-decoration:underline dotted #9aac9f; text-underline-offset:4px; }
  .help-text[aria-expanded=true] { color:var(--green); }
  .help-popup { position:fixed; z-index:2147483647; width:330px; max-width:calc(100vw - 24px); max-height:55vh; overflow:auto; padding:12px 14px; background:#fcfbf6; color:var(--ink); border:1px solid #a8bba9; border-radius:10px; box-shadow:0 6px 26px #182e3240; white-space:pre-line; font-size:13px; line-height:1.65; }
  .help-popup p { margin:0; color:inherit; }
  #plan-current { margin:8px 0; color:var(--green); font-weight:600; }
</style>
<details class="panel" open>
<summary class="title">萧炎助手 <span id="badge">· 暂停</span></summary>
<div class="nav" aria-label="助手功能">
<button type="button" id="alchemy-tab" aria-pressed="true">全自动修炼</button>
<button type="button" id="challenge-tab" aria-pressed="false">自动剧情</button>
<button type="button" id="mode-tab" aria-pressed="false">挂机切换</button></div>
<div class="toolbar"><small>v1.16.9 · 保留当前游戏页面</small><button type="button" id="pause-all">全部暂停</button></div>
<p id="health" role="status" hidden></p>
<section id="challenge-panel" hidden>
<div class="overview">
<label><input type="checkbox" id="challenge-enabled">启用自动剧情</label>
<div class="fields"><label>胜率至少 <input id="challenge-threshold" type="number" min="0" max="100" step="any" style="width:5em"> % 才挑战</label></div>
<div class="fields"><label><input type="checkbox" id="turn-enabled" checked>自动打回合战</label>
<label>最低战况 <select id="turn-threshold"><option>翻掌可定</option><option>胜券在握</option><option>势均力敌</option><option>凶多吉少</option><option>九死一生</option></select></label></div>
<small>首章和可跳过的战斗直接进入。回合战按战况入场，战败后等待调息，再按门槛重试。</small>
<p id="challenge-status" role="status" style="margin-top:10px"></p></div>
<details class="group"><summary>奇遇与追兵</summary>
<div class="content">
<fieldset><legend>奇遇</legend>
<label><input type="checkbox" id="herbEvent">自动处理药株与魔兽</label>
<label>最低战况 <select id="herb-outlook"><option>翻掌可定</option><option>胜券在握</option><option>势均力敌</option><option>凶多吉少</option><option>九死一生</option></select></label>
<small>达到设定战况就挑战，否则绕路离开。奇遇开关独立生效；全部暂停可同时停止。</small></fieldset>
<fieldset><legend>异火残焰</legend>
<label><input type="checkbox" id="residualEvent">自动处理异火残焰</label>
<label>处理方式 <select id="residual-choice"><option value="direct">直接吞噬</option><option value="absorb">按成功率吸收</option><option value="touch">灵魂力量触碰</option></select></label>
<label id="residual-limit" hidden>成功率至少 <input id="residual-threshold" type="number" min="0" max="100" step="any" style="width:5em"> % 才吸收</label>
<small id="residual-status"></small></fieldset>
<fieldset><legend>拍卖会与旅人</legend>
<label><input type="checkbox" id="auctionEvent">自动处理拍卖会</label>
<label>竞拍方式 <select id="auction-policy"><option value="auctionGiveup">放弃</option><option value="auctionLow">低价试探（药材）</option><option value="auctionBig">重金竞拍（10 火晶）</option></select></label>
<small>资源不足时放弃。</small>
<label><input type="checkbox" id="travelerEvent">自动救治旅人、收下回报</label>
<small>材料不足时离开。</small></fieldset>
<fieldset><legend>古药园禁制</legend>
<label><input type="checkbox" id="gardenEvent">自动处理古药园</label>
<label>胜率至少 <input id="garden-threshold" type="number" min="0" max="100" step="any" style="width:5em"> % 才破阵</label>
<small>低于门槛时只采外围。</small></fieldset>
<fieldset><legend>魂殿追兵</legend>
<label><input type="checkbox" id="pursuit">自动迎战、出招并结算</label>
<small id="pursuit-status"></small></fieldset>
</div></details>
</section>
<section id="mode-panel" hidden>
<div class="overview"><label><input type="checkbox" id="mode-enabled">启用自动切换</label>
<small>采集解锁后优先采集，采集未解锁时优先历练。</small>
<p id="mode-status" role="status"></p></div>
<fieldset><legend>商会小队与傀儡</legend>
<label><input type="checkbox" id="autoSquads">自动调度商会小队</label>
<label><input type="checkbox" id="lateFlames">斗圣九星起优先派小队寻找缺失异火</label>
<label><input type="checkbox" id="unlockSquad">材料充足时自动解锁第二小队</label>
<label><input type="checkbox" id="unlockPuppet">自动炼制初级傀儡、解锁傀儡自动炼丹</label>
<label><input type="checkbox" id="evolvePuppet">自动积累丹雷并进化傀儡，含北王</label>
<label><input type="checkbox" id="autoGifts">自动把小礼物送给同行且好感未满的人物</label>
<small>独立运行，受“全部暂停”控制；材料支出前保留炼丹用料。后期仍缺奇遇异火时会把已派遣小队转为寻火；收齐后恢复原任务。剧情条件仍需满足。</small>
<small>送礼只消耗小礼物，不用药材、魔核或突破丹；优先减少好感溢出。</small>
<small>傀儡只解锁功能，不自动开启它的挂机切换，以免与助手争抢模式。</small>
<small id="support-status" style="white-space:pre-line"></small></fieldset></section>
<section id="alchemy-panel">
<div class="overview"><div class="bar"><label><input type="checkbox" id="alchemy-enabled">启用全自动修炼</label>
<span id="realm"></span></div><p id="status" role="status"></p></div>
<fieldset class="recommendation"><legend>策略对比</legend>
<p>自动比较全部可炼修为丹与挂机方式，无需配置规则。</p><small id="flame-horizon"></small>
<label><input type="checkbox" id="autoSeclusion">自动闭关（进入后无法主动退出）</label>
<small>闭关不能主动退出，按游戏规则出关；关闭此项仍显示闭关参考收益。</small>
<small id="economy-status" style="white-space:pre-line">开启全自动后比较收益；衰减丹药仍参与。</small>
<small id="dynamic-status"></small>
<details class="group inline"><summary>丹道升级收益</summary>
<label><input type="checkbox" id="autoUpgrade">自动评估战力与丹道升级</label>
<small id="upgrade-status" style="white-space:pre-line">按剩余火种评估；火种耗尽不再购买升级</small></details></fieldset>
<details class="group"><summary>剧情丹与挂机联动</summary>
<div class="content settings">
<label><input type="checkbox" id="story-enabled">优先炼剧情所需丹药</label>
<label>剧情丹成丹率大于 <input id="story-threshold" type="number" min="0" max="100" step="any" style="width:4.5em"> %</label>
<small id="story-status"></small>
<label><input type="checkbox" id="waitRefine">手动策略：等药力炼化</label>
<label><input type="checkbox" id="refineMode">允许切练功加速炼化</label>
<label><input type="checkbox" id="huntCores">缺魔核时切历练</label></div></details>
<details class="group"><summary>突破丹与商会委托</summary>
<div class="content">
<fieldset><legend>突破丹</legend>
<label><input type="checkbox" id="breakPills">突破胜率低时自动补丹</label>
<label>库存目标 <input id="break-stock" type="number" min="1" max="20" step="1" style="width:4em"> 枚</label>
<label>成丹率至少 <input id="break-craft-rate" type="number" min="0" max="100" step="any" style="width:4em"> %</label>
<small>使用游戏「自动服用突破丹」的胜率门槛。优先炼当前可炼、加成最高的突破丹。</small></fieldset>
<fieldset><legend>黑皇商会</legend>
<label><input type="checkbox" id="merchantOrders">自动接单并交付修为丹</label><small>随自动炼丹启停。仅刷新委托数据，不切换游戏页签。</small>
<label>成丹率至少 <input id="merchant-chance" type="number" min="0" max="100" style="width:4em"> %</label>
<label><input type="checkbox" id="merchantBreak">提交库存突破丹</label>
<label>每种突破丹保留 <input id="merchant-reserve" type="number" min="0" step="1" style="width:4em"> 枚</label>
<small id="merchant-status" role="status"></small></fieldset>
</div></details>
</section>
</details>
  `;
  document.body.append(host);

  // Build contextual help once. Existing controls and status nodes retain their identities.
  const helpPopup=document.createElement('div');
  helpPopup.className='help-popup';helpPopup.id='context-help';helpPopup.hidden=true;
  helpPopup.setAttribute('role','region');helpPopup.setAttribute('aria-label','选项说明');
  const helpText=document.createElement('p');
  helpPopup.append(helpText);ui.append(helpPopup);
  let activeHelp=null,helpPinned=false,helpTimer=0;
  function closeHelp(){
    clearTimeout(helpTimer);
    if(activeHelp)activeHelp.button.setAttribute('aria-expanded','false');
    activeHelp=null;helpPinned=false;helpPopup.hidden=true;
  }
  function showHelp(entry,pinned=false){
    clearTimeout(helpTimer);
    if(activeHelp&&helpPinned&&activeHelp!==entry&&!pinned)return;
    if(activeHelp&&activeHelp!==entry)activeHelp.button.setAttribute('aria-expanded','false');
    activeHelp=entry;helpPinned=helpPinned||pinned;
    helpText.textContent=entry.source.textContent.trim();helpPopup.hidden=false;
    entry.button.setAttribute('aria-expanded','true');
    const r=entry.button.getBoundingClientRect(),box=helpPopup.getBoundingClientRect();
    helpPopup.style.left=Math.max(12,Math.min(r.right-box.width,innerWidth-box.width-12))+'px';
    helpPopup.style.top=Math.max(12,Math.min(r.bottom+6,innerHeight-box.height-12))+'px';
  }
  const deferHelp=()=>{clearTimeout(helpTimer);helpTimer=setTimeout(()=>{if(!helpPinned)closeHelp();},180);};
  const helpEntries=new WeakMap();
  function addHelp(source,anchor,title){
    if(helpEntries.has(anchor)){
      const existing=helpEntries.get(anchor);
      existing.source.textContent+='\n'+source.textContent.trim();source.hidden=true;return;
    }
    const label=anchor.matches('label')?anchor:[...anchor.querySelectorAll('label')].at(-1);
    let button=anchor;
    if(label){
      button=document.createElement('span');
      const words=[...label.childNodes].filter(n=>n.nodeType===3&&n.textContent.trim());
      if(!words.length)return;
      words[0].before(button);for(const word of words)button.append(word);
    }
    button.classList.add('help-text');button.tabIndex=0;button.setAttribute('role','button');
    button.setAttribute('aria-controls','context-help');button.setAttribute('aria-expanded','false');
    let wrapper=anchor;
    source.hidden=true;
    const entry={button,source};helpEntries.set(wrapper,entry);
    button.addEventListener('mouseenter',()=>showHelp(entry));button.addEventListener('mouseleave',deferHelp);
    button.addEventListener('focus',()=>showHelp(entry));button.addEventListener('blur',deferHelp);
    button.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();if(activeHelp===entry&&helpPinned)closeHelp();else showHelp(entry,true);});
    button.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();button.click();}});
  }
  for(const source of [...ui.querySelectorAll('section small:not([id]),section .recommendation > p:not([id])')]){
    let anchor=source.previousElementSibling;
    // Consecutive paragraphs belong to the same option group.
    while(anchor?.hidden||anchor?.classList.contains('help-button'))anchor=anchor.previousElementSibling;
    if(anchor)addHelp(source,anchor,'查看相关说明');
  }
  const economyText=ui.getElementById('economy-status');
  const planCurrent=document.createElement('p');planCurrent.id='plan-current';
  economyText.before(planCurrent);addHelp(economyText,planCurrent,'查看策略收益对比与计算说明');
  helpPopup.addEventListener('mouseenter',()=>clearTimeout(helpTimer));helpPopup.addEventListener('mouseleave',deferHelp);
  ui.addEventListener('keydown',e=>{if(e.key==='Escape')closeHelp();});
  document.addEventListener('pointerdown',e=>{if(!e.composedPath().includes(helpPopup)&&!e.composedPath().includes(activeHelp?.button))closeHelp();},true);
  ui.querySelector('.panel').addEventListener('scroll',closeHelp,{passive:true});
  ui.querySelector('.panel').addEventListener('toggle',closeHelp);
  for(const button of ui.querySelectorAll('.nav button'))button.addEventListener('click',closeHelp);
  window.addEventListener('resize',closeHelp,{passive:true});

  const control = id => ui.getElementById(id);
  function setText(id, value) {
    const element = control(id);
    if (element.textContent !== value) element.textContent = value;
    if(id==='economy-status'){
      const headline=String(value).split('\n')[0];
      if(planCurrent.textContent!==headline)planCurrent.textContent=headline;
    }
    if(activeHelp?.source===element&&helpText.textContent!==value)helpText.textContent=value;
  }

  const battleOutlooks = ['翻掌可定', '胜券在握', '势均力敌', '凶多吉少', '九死一生'];
  const challenge = { enabled: runtime.challenge, threshold: 95, turns: true, outlook: battleOutlooks[0] };
  try {
    const saved = JSON.parse(localStorage.getItem(challengeKey));
    if (saved && Number.isFinite(saved.threshold) && saved.threshold >= 0 && saved.threshold <= 100) {
      challenge.threshold = saved.threshold;
    }
    if (typeof saved?.turns === 'boolean') challenge.turns = saved.turns;
    if (battleOutlooks.includes(saved?.outlook)) challenge.outlook = saved.outlook;
  } catch (error) {
    console.warn('自动剧情设置读取失败', error);
  }

  function getChallengeDecision(label, odds) {
    if (label === '跳过战斗') return { ready: true, message: '战力达标，跳过战斗' };
    if (label !== '挑战') return { ready: false, message: '等待常规剧情挑战' };
    if (/^[-—–－]$/.test(odds)) return { ready: true, message: '直接进入剧情' };
    if (/^\d+(?:\.\d+)?\s*[%％]$/.test(odds)) {
      const value = parseFloat(odds);
      return { ready: value <= 100 && value >= challenge.threshold, message: '剧情胜率 ' + odds + '，门槛 ' + challenge.threshold + '%' };
    }
    const outlook = battleOutlooks.indexOf(odds);
    if (outlook === -1) return { ready: false, message: '等待识别剧情胜率或战况' };
    return {
      ready: challenge.turns && outlook <= battleOutlooks.indexOf(challenge.outlook),
      message: challenge.turns ? '战况 · ' + odds : '等待手动进入回合战',
    };
  }

  function chooseBattleAction(modal) {
    const actions = [...modal.querySelectorAll('.battle-actions button[data-battle]:enabled')].map(button => ({
      button,
      name: button.querySelector('b')?.textContent.trim() || '',
      description: button.querySelector('.ba-desc')?.textContent.trim() || '',
    }));
    const ownHp = parseFloat(modal.querySelector('.battle-hpbar:not(.enemy) span')?.textContent);
    const enemyHp = parseFloat(modal.querySelector('.battle-hpbar.enemy span')?.textContent);
    const intent = modal.querySelector('.battle-intent')?.textContent || '';
    const normalAttack = actions.find(action => action.button.dataset.battle === 'A');
    const named = names => names.map(name => actions.find(action => action.name === name)).find(Boolean);
    const find = pattern => actions.find(action => pattern.test(action.description));
    const dodge = () => named(['三千雷幻身']) || find(/闪避|躲避/);

    // 「蓄力」通常是在准备下一回合；有明确的准备提示时保留防御。
    const preparing = /正在蓄力|准备蓄力|蓄力准备|蓄力中/.test(intent);
    const burst = !preparing && /蓄力|重击|爆发|猛攻/.test(intent);
    if (burst) {
      const defense = named(['火铠', '帝印诀', '招架']) ||
        actions.find(action => !/下回合|下一回合/.test(action.description) &&
          /护盾|吸收.{0,10}伤害|伤害减免|减伤|降低.{0,10}受到.{0,6}伤害|受到.{0,6}伤害降低|无敌/.test(action.description));
      const interrupt = find(/敌人.{0,8}眩晕|使敌.{0,8}眩晕|敌.{0,10}无法行动|敌.{0,8}无法反击/);
      const answer = defense || dodge() || interrupt;
      if (answer) return answer.button;
    }

    const log = modal.querySelector('.battle-log')?.textContent || '';
    if (ownHp <= 35 && enemyHp > 25 && !/药力将在接下来三回合/.test(log)) {
      const heal = actions.find(action => /恢复生命|回复生命/.test(action.description) &&
        /服药|丹药|疗伤/.test(action.name));
      if (heal) return heal.button;
    }
    if (intent.includes('躲藏')) {
      const pierce = named(['焰分噬浪尺']) || find(/无视.{0,8}躲藏/) || named(['三千雷幻身']);
      if (pierce) return pierce.button;
    }

    // 在实际抽到的攻击招式中比较描述标出的倍率，含多段与斩杀效果。
    let best = normalAttack;
    let bestDamage = normalAttack ? 100 : 0;
    for (const action of actions) {
      const description = action.description;
      if (/反噬|凝莲失败|下一回合|下回合|回合后/.test(description)) continue;
      const damage = description.match(/(?:造成\s*)?(?:(\d+)\s*段\s*)?(\d+(?:\.\d+)?)\s*%\s*(?:攻击(?:力|伤害)?|伤害)/);
      if (!damage) continue;
      let score = Number(damage[1] || 1) * Number(damage[2]);
      if (action.name === '黄泉天怒') score += 80;
      if (action.name === '大造化掌' && enemyHp < 30) score *= 2;
      if (score > bestDamage) {
        best = action;
        bestDamage = score;
      }
    }
    return best?.button;
  }

  let lastChallenge = '';
  let nextChallengeAt = 0;
  let lastRound = '';

  const battleResultsHandled = new WeakSet();
  function confirmBattleResult(modal) {
    const button=modal.querySelector('.battle-final button[data-battle-confirm="1"]');
    if(!button)return false;
    if(!button.disabled&&!battleResultsHandled.has(button)){
      battleResultsHandled.add(button);
      button.click();
    }
    return true;
  }

  let pursuitRound = '';
  const pursuitClicks = new WeakSet();
  function handlePursuit() {
    const modal = page('#modalRoot');
    const title = !modal || modal.hidden ? '' : modal.querySelector('#modalTitle')?.textContent.trim();
    if (!['魂殿追兵', '击退追兵', '不敌追兵'].includes(title)) {
      pursuitRound = '';
      setText('pursuit-status', extra.pursuit ? '等待追兵' : '已关闭');
      return false;
    }
    if (!extra.pursuit) return true;
    if(confirmBattleResult(modal)){
      pursuitRound='';
      setText('pursuit-status','已确认追兵战斗结果');
      return true;
    }
    const round = modal.querySelector('.battle-round')?.textContent;
    if (round) {
      const action = chooseBattleAction(modal);
      if (action && round !== pursuitRound) {
        pursuitRound = round;
        action.click();
      }
      setText('pursuit-status', round);
      return true;
    }
    pursuitRound = '';
    const label = title === '魂殿追兵' ? '迎战' : '继续';
    const button = [...modal.querySelectorAll('button:enabled')].find(item =>
      (item.querySelector('b')?.textContent || item.textContent).trim() === label);
    if (button && !pursuitClicks.has(button)) {
      pursuitClicks.add(button);
      button.click();
      setText('pursuit-status', label === '迎战' ? '已迎战' : title);
    }
    return true;
  }

  const herbButtonsHandled = new WeakSet();
  function handleHerbEvent() {
    const modal = page('#modalRoot');
    if (!extra.herbEvent || !modal || modal.hidden ||
        modal.querySelector('#modalTitle')?.textContent.trim() !== '药株与魔兽') return false;
    const buttons = [...modal.querySelectorAll('button[data-herb]:enabled')];
    const label = button => button.querySelector('b')?.textContent.trim();
    const fight = buttons.find(button => label(button) === '挑战魔兽');
    const odds = oddsLabels.findIndex(name => fight?.textContent.includes(name));
    const limit = oddsLabels.indexOf(control('herb-outlook').value);
    const choice = odds >= 0 && limit >= 0 && odds <= limit ? fight :
      buttons.find(button => label(button) === '绕路离开');
    if (choice && !herbButtonsHandled.has(choice)) {
      herbButtonsHandled.add(choice);
      choice.click();
    }
    return true;
  }


  function handleGardenEvent() {
    const modal = page('#modalRoot');
    if (!extra.gardenEvent || !modal || modal.hidden ||
        modal.querySelector('#modalTitle')?.textContent.trim() !== '古药园禁制') return false;
    const buttons = [...modal.querySelectorAll('button:enabled')];
    const find = name => buttons.find(button => button.querySelector('b')?.textContent.trim() === name);
    const fight = find('尝试破阵');
    const chance = Number(fight?.textContent.match(/胜率\s*[:：]?\s*(\d+(?:\.\d+)?)\s*%/)?.[1]);
    const threshold = Number(control('garden-threshold').value);
    const chosen = Number.isFinite(chance) && chance >= threshold ? fight : find('只采外围');
    if (chosen && !herbButtonsHandled.has(chosen)) {
      herbButtonsHandled.add(chosen);
      chosen.click();
    }
    return true;
  }

  const residualSettings = { choice:'direct', threshold:50 };
  const residualKey = 'xyidle-auto-alchemy:residual:v1';

  function handleResidualEvent() {
    const modal = page('#modalRoot');
    if (!extra.residualEvent || !modal || modal.hidden ||
        modal.querySelector('#modalTitle')?.textContent.trim() !== '异火残焰') return false;
    const buttons = [...modal.querySelectorAll('#modalBody button:enabled')];
    const find = label => buttons.find(button => button.querySelector('b')?.textContent.trim() === label);
    const absorb = find('本源火种吸收');
    const rate = Number(absorb?.textContent.match(/成功率\s*[:：]?\s*(\d+(?:\.\d+)?)\s*[%％]/)?.[1]);
    const absorbReady = Number.isFinite(rate) && rate <= 100 && rate >= residualSettings.threshold;
    const direct = find('直接吞噬');
    const choice = residualSettings.choice === 'touch' ? find('灵魂力量触碰') :
      residualSettings.choice === 'absorb' && absorbReady ? absorb : direct;
    if (choice && !herbButtonsHandled.has(choice)) {
      herbButtonsHandled.add(choice);
      const reason = residualSettings.choice === 'absorb' && choice === direct ?
        (Number.isFinite(rate) ? ' · 成功率 ' + rate + '% 低于门槛' : ' · 未读到吸收成功率') : '';
      setText('residual-status', '已选 ' + choice.querySelector('b').textContent.trim() + reason);
      choice.click();
    }
    return true;
  }

  function handleAuctionOrTraveler() {
    const modal = page('#modalRoot');
    if (!modal || modal.hidden) return false;
    const title = modal.querySelector('#modalTitle')?.textContent.trim();
    let button;
    if (title === '拍卖会' && extra.auctionEvent) {
      const policy = control('auction-policy').value;
      button = modal.querySelector('button[data-herb="' + policy + '"]:enabled') ||
        modal.querySelector('button[data-herb="auctionGiveup"]:enabled');
    } else if (title === '旅人' && extra.travelerEvent) {
      button = modal.querySelector('button[data-herb="travelerHelp"]:enabled') ||
        modal.querySelector('button[data-herb="travelerLeave"]:enabled');
    } else if (title === '旅人的回报' && extra.travelerEvent) {
      const actions = [...modal.querySelectorAll('#modalActions button[data-modal]')];
      if (actions.length === 1 && !actions[0].disabled && actions[0].textContent.trim() === '收下') {
        button = actions[0];
      }
    } else return false;
    if (button && !herbButtonsHandled.has(button)) {
      herbButtonsHandled.add(button);
      button.click();
    }
    return true;
  }

  const storyNoticeActions = new Map([
    ['佛怒火莲 · 初战', '记下了'],
    ['焚诀 · 青莲', '继续'],
    ['风雷阁追杀', '继续'],
    ['黑皇商会', '收下令牌'],
    ['父女相认', '抱抱她'],
    ['天火三玄变 · 第一重', '收下残卷'],
    ['焚炎谷 · 天火三玄变', '收下功法'],
    ['天火三玄变 · 最后口诀', '记下口诀'],
    ['魔炎谷 · 傀儡秘法', '收下秘法'],
    ['北龙王 · 傀儡材料', '收下龙躯'],
    ['丹界 · 地心魂髓', '继续'],
    ['丹会 · 灵魂法诀', '继续'],
    ['魂殿 · 灵魂光团', '继续'],
    ['天墓 · 灵魂本源', '继续'],
    ['菩提心', '收下菩提心'],
    ['斗帝 · 万火归一', '继续留在这一世'],
  ]);
  const storyNoticesHandled = new WeakSet();
  function acknowledgeProgressNotice(){
    if(!running&&!challenge.enabled&&!modeToggle.checked&&!Object.values(extra).some(Boolean))return false;
    const modal=page('#modalRoot:not([hidden])');
    if(!modal)return false;
    const title=modal.querySelector('#modalTitle')?.textContent.trim();
    const names=new Map([
      ['解锁 · 历练','知道了'],['解锁 · 采集','知道了'],['解锁 · 闭关','知道了'],
      ['灵魂初醒','开始感知'],['火种 · 暗红','知道了'],['轮回 · 侵蚀','明白了']
    ]);
    const label=names.get(title)||(extra.residualEvent&&title==='空宇之火'?'知道了':null);
    const buttons=[...modal.querySelectorAll('#modalActions button[data-modal]')];
    if(!label||buttons.length!==1||buttons[0].disabled||buttons[0].textContent.trim()!==label)return false;
    if(!storyNoticesHandled.has(buttons[0])){storyNoticesHandled.add(buttons[0]);buttons[0].click();}
    return true;
  }

  function tickChallenge() {
    if (paused) return setText('challenge-status', '全部暂停中');
    if (acknowledgeProgressNotice()) return;
    if (handleAuctionOrTraveler()) return;
    if (handleResidualEvent()) return;
    if (handleGardenEvent()) return;
    if (handleHerbEvent()) return;
    if (handlePursuit()) return;
    const report = message => setText('challenge-status', message);
    if (!challenge.enabled) return report('已暂停');
    const modal = page('#modalRoot');
    if (modal && !modal.hidden) {
      const title = modal.querySelector('#modalTitle')?.textContent.trim();
      const noticeAction = storyNoticeActions.get(title);
      if (noticeAction) {
        const actions = [...modal.querySelectorAll('#modalActions button[data-modal]')];
        const button = actions[0];
        if (actions.length === 1 && !button.disabled && button.textContent.trim() === noticeAction &&
            !storyNoticesHandled.has(button)) {
          storyNoticesHandled.add(button);
          button.click();
          return report('已确认 · ' + title);
        }
      }
      if (title === '剧情战斗' && challenge.turns) {
        if(confirmBattleResult(modal)){lastRound='';return report('已确认剧情战斗结果');}
        const round = modal.querySelector('.battle-round')?.textContent;
        const action = chooseBattleAction(modal);
        if (!round || !action || round === lastRound) return report('等待回合更新');
        lastRound = round;
        action.click();
        return report(round + ' · 已出招');
      }
      if (title === '战斗胜利' || title === '战斗失败') {
        const next = [...modal.querySelectorAll('#modalActions button[data-modal]:enabled')]
          .find(button => button.textContent.trim() === '继续');
        if (!next) return report('等待战斗结算');
        next.click();
        lastRound = '';
        return report(title === '战斗失败' ? '战败已结算，等待调息后重试' : '战斗胜利，已继续');
      }
      return report('等待处理弹窗 · ' + (title || '游戏弹窗'));
    }
    lastRound = '';
    const body = page('#storyBody');
    const button = body?.querySelector('#challengeBtn');
    const why = body?.querySelector('#storyWhy');
    if (!button || button.disabled || body.querySelector('#storyBadge')?.textContent.trim() !== '可挑战') {
      return report(why && !why.hidden ? why.textContent.trim() : '等待剧情可挑战');
    }
    const cooldown = page('#storyCooldown');
    if (cooldown && !cooldown.hidden) return report('等待剧情调息');
    const decision = getChallengeDecision(button.textContent.trim(), body.querySelector('#nodeWin')?.textContent.trim() || '');
    if (!decision.ready) return report(decision.message);
    const stage = [page('#cycleLabel')?.textContent, page('#storyProgress')?.textContent,
      body.querySelector('.story-name')?.textContent].join('|');
    if (stage === lastChallenge && performance.now() < nextChallengeAt) return report('等待同一关的重试间隔');
    lastChallenge = stage;
    nextChallengeAt = performance.now() + 10000;
    button.click();
    report('已点击 · ' + decision.message);
  }

  const oddsLabels = ['翻掌可定', '胜券在握', '势均力敌', '凶多吉少', '九死一生'];
  function amount(text) {
    const m = String(text || '').replace(/[,，]/g, '').match(/(\d+(?:\.\d+)?)\s*([万亿]?)/);
    return m ? Number(m[1]) * ({万: 1e4, 亿: 1e8}[m[2]] || 1) : NaN;
  }

  function readRecipeCost(row, action, reduced) {
    const primary = row?.querySelector('.cost')?.textContent || '';
    const visible = row?.textContent || '';
    const reducedLine = visible.match(/减料\s*[:：]\s*药材[^%％]*[%％]/)?.[0];
    const parse = text => ({
      h: amount(text?.match(/药材\s*([\d.,]+\s*[万亿]?)/)?.[1]),
      c: amount(text?.match(/(?:魔|兽)核\s*([\d.,]+\s*[万亿]?)/)?.[1]),
      p: amount(text?.match(/成丹率\s*([\d.]+)\s*[%％]/)?.[1]) / 100,
    });
    const cost = parse(reduced ? reducedLine : primary.split(/减料s*[:：]/)[0]);
    return Number.isFinite(cost.h + cost.c + cost.p) ? cost : parse(reduced ? action.title : primary);
  }

  function tick() {
    updateSummary();
    if (paused) return setText('status', '全部暂停中 · 保留各功能设置');
    return runAlchemy();
  }

  let nextDataRefresh = 0;
  let nextMerchantCheck = 0;
  let merchantHold = null;

  function runMerchant(buttons) {
    const status = message => setText('merchant-status', message);
    if (!running || !extra.merchantOrders) {
      merchantHold = null;
      status(running ? '已关闭自动委托' : '自动炼丹已暂停，委托同步暂停');
      return false;
    }
    if (page('#modalRoot:not([hidden])')) return false;
    const tab = page('#tabs button[data-tab="merchant"]');
    if (!tab || tab.disabled || tab.classList.contains('locked')) {
      merchantHold = null;
      status('等待解锁黑皇商会');
      return false;
    }
    const now = Date.now();
    if (now < nextMerchantCheck) {
      if (merchantHold?.needsCore && extra.huntCores) alchemyMode = 'explore';
      return merchantHold !== null;
    }
    // Respect local craft backoff before rebuilding merchant rows.
    if (performance.now() < nextCraftAt) {
      merchantHold = {needsCore:false};
      nextMerchantCheck = now + Math.max(500, nextCraftAt - performance.now());
      status('为委托等待丹炉冷却');
      return true;
    }
    // The game refreshes visible merchant rows itself. Do not steal focus from its controls.
    if (!tab.classList.contains('on') && !refreshGame(['renderMerchant'])) {
      merchantHold = null;
      nextMerchantCheck = now + 5000;
      status('游戏刷新接口不可用，自动委托已暂缓');
      return false;
    }


    const reserve = Math.max(Number(merchantReserve.value), extra.breakPills ? breakConfig.target : 0);
    const recipes = new Map(buttons.map(button => [pillName(button), button]));
    const orders = () => [...document.querySelectorAll('#merchantBody button[data-act^="merchant-deliver-"]')]
      .map(button => ({button, row: button.closest('.merchant-slot')}))
      .filter(order => order.row)
      .sort((a, b) => Number(b.row.classList.contains('mystery')) - Number(a.row.classList.contains('mystery')));

    {
      let waitingForFurnace = false;
      let reason = '';
      let materials = null;
      let stockRecipe = null;
      for (const {button, row} of orders()) {
        const action = button.textContent.trim();
        const name = row.querySelector('.merchant-order-name')?.textContent.replace(/\s*[×x]\s*\d+\s*$/, '').trim();
        if (!name) continue;
        if (action === '从丹囊提交') {
          const count = Number(row.textContent.match(/丹囊现有\s*(\d+)\s*枚/)?.[1]);
          if (!extra.merchantBreak) {
            reason ||= name + ' · 未开启突破丹委托';
            continue;
          }
          if (!(count > reserve)) {
            const recipe = recipes.get(name);
            const chance = recipe ? getStoryChance(recipe) : null;
            if (chance === null || chance < Number(merchantChance.value)) {
              reason ||= name + ' · 补炼成丹率未达委托门槛或尚未读到';
            } else if (recipe.title === '丹炉未冷' || performance.now() < nextCraftAt) {
              waitingForFurnace = true;
            } else if (!recipe.disabled) {
              stockRecipe ||= {recipe, name};
            } else if (/药材不足|(?:魔|兽)核不足/.test(recipe.title)) {
              materials ||= {name, shortage:recipe.title, needsCore:/(?:魔|兽)核不足/.test(recipe.title)};
            } else {
              reason ||= name + ' · ' + (recipe.title || '暂不可补炼');
            }
            continue;
          }
        } else if (action === '接单炼制') {
          const recipe = recipes.get(name);
          const chance = recipe && getStoryChance(recipe);
          if (chance == null || chance < Number(merchantChance.value)) {
            reason ||= name + ' · 成丹率未达门槛或尚未读到';
            continue;
          }
          if (button.disabled && (recipe.title === '丹炉未冷' || performance.now() < nextCraftAt)) {
            waitingForFurnace = true;
          }
          if (button.disabled) {
            const shortage = recipe.title || '';
            if (/药材不足|(?:魔|兽)核不足/.test(shortage)) {
              materials ||= { name, shortage, needsCore: /(?:魔|兽)核不足/.test(shortage) };
            }
            reason ||= name + ' · ' + (shortage || '暂不可接单');
            continue;
          }
        } else continue;

        if (button.disabled) {
          reason ||= name + ' · 暂不可交付';
          continue;
        }
        merchantHold = null;
        const actionId = button.dataset.act;
        button.click();
        if (action === '接单炼制') { nextCraftAt = performance.now() + 1500; attempts++; }
        nextMerchantCheck = now + 1500;
        const remaining = orders().some(order => order.button.dataset.act === actionId);
        status((remaining ? '已尝试，订单待完成 · ' : '已交付 · ') + name);
        return true;
      }
      if (stockRecipe && stockRecipe.recipe.isConnected) {
        merchantHold = { needsCore:false };
        stockRecipe.recipe.click();
        attempts++;
        nextCraftAt = performance.now() + 1500;
        nextMerchantCheck = now + 1500;
        status('为委托补炼 · ' + stockRecipe.name);
        return true;
      }
      if (waitingForFurnace) {
        merchantHold = { needsCore: false };
        nextMerchantCheck = now + 1000;
        status('为委托等待丹炉冷却');
        return true;
      }
      if (materials) {
        merchantHold = materials;
        nextMerchantCheck = now + 2000;
        if (materials.needsCore && extra.huntCores) alchemyMode = 'explore';
        status('为委托攒材料 · ' + materials.name + ' · ' + materials.shortage);
        return true;
      }
      merchantHold = null;
      nextMerchantCheck = now + 5000;
      status(reason || '暂无委托，等待商会刷新');
      return false;
    }
  }

  function selectBreakRecipe(buttons, bag, chance, threshold, target, minimumCraftChance) {
    if (!(chance < threshold) || target < 1) return null;
    const recipes = buttons.flatMap(button => {
      const effect = button.closest('.recipe')?.querySelector('.eff')?.textContent || '';
      const boost = Number(effect.match(/突破成功率\s*\+\s*(\d+(?:\.\d+)?)\s*[%％]/)?.[1]);
      return boost > 0 ? [{button, boost}] : [];
    });
    const total = recipes.reduce((count, {button}) => count + (bag.get(button.dataset.craft) || 0), 0);
    if (total >= target) return null;
    return recipes.filter(({button}) => {
      const rate = getStoryChance(button);
      return !button.disabled && rate !== null && rate >= minimumCraftChance;
    }).sort((a, b) => b.boost - a.boost)[0]?.button || null;
  }

  function refillBreakPills(buttons) {
    if (!extra.breakPills || !page('#swPill')?.classList.contains('on')) return null;
    const bagElement = page('#pillBag');
    const threshold = Number(page('#pillThreshold')?.value);
    const chance = Number(page('#breakInfo')?.textContent.match(/成功率\s*[:：]?\s*(\d+(?:\.\d+)?)\s*[%％]/)?.[1]);
    if (!bagElement || !Number.isFinite(chance) || !(threshold >= 1 && threshold <= 100) ||
        readRealm(page('#realmLabel')?.textContent)?.tier === realms.indexOf('斗帝')) return null;
    const bag = new Map([...bagElement.querySelectorAll('.pill-chip button[data-use]')].map(button => [
      button.dataset.use, Number(button.closest('.pill-chip')?.querySelector('b')?.textContent.match(/\d+/)?.[0]) || 0,
    ]));
    return selectBreakRecipe(buttons, bag, chance, threshold, breakConfig.target, breakConfig.chance);
  }

  // A read-only snapshot: never assign S, change modes, or trial-buy upgrades to estimate them.
  function economicSnapshot() {
    try {
      return JSON.parse(game.eval(`JSON.stringify((() => {
        const b=bonuses(), gs=gatherStats(), es=exploreStats();
        const mult=timeGainMult()*injuredMult(), cult=cultBase(S.level)*b.qi*mult;
        const origin=originFlameQiPerSec();
        const boost=Math.max(0,S.timeBuff||0), wick=Math.max(0,S.wick||0);
        const flameSeconds=Math.min(boost,wick/2)+Math.max(0,wick-2*boost);
        const cur=nextNode()||NODES[Math.max(0,S.story-1)],prev=S.story>0?NODES[S.story-1]:cur;
        const danleiWin=winChance(power(),Math.round((nodeEnemy(cur)+nodeEnemy(prev))/2));
        let rates=[
          {mode:'cultivate',qi:cult*.92+origin,herb:0,core:0},
          {mode:'gather',qi:cult*.276+origin,herb:gs.herb*mult,core:gs.core*mult},
          {mode:'explore',qi:cult*.34*es.w+origin,herb:es.herb*.3*mult,core:es.core*mult},
          {mode:'seclusion',qi:cult*1.656*fireCultSeclusionMult()+origin,herb:0,core:0}
        ].filter(r=>modeUnlocked(r.mode));
        // Integrate known flame-phase, timed boost and injury changes over the remaining wick.
        // Region, realm, companions and random events are held constant until the next snapshot.
        if(flameSeconds>0){
          const timeFor=spent=>Math.min(boost,Math.max(0,spent)/2)+Math.max(0,spent-2*boost);
          const points=[0,flameSeconds,boost,S.injured||0,
            timeFor(wick-S.wickMax*(1-PHASE_1)),timeFor(wick-S.wickMax*(1-PHASE_2))]
            .filter(t=>t>=0&&t<=flameSeconds).sort((a,b)=>a-b);
          let sum=0,exploreSum=0;
          for(let i=1;i<points.length;i++){
            const duration=points[i]-points[i-1],t=(points[i]+points[i-1])/2;
            const left=wick-t-Math.min(t,boost),spent=1-left/S.wickMax;
            const pm=left<=0?.2:spent<PHASE_1?1:spent<PHASE_2?.8:.2;
            const futurePower=(power()-puppetPowerBonus())*(spent<PHASE_1?1:.8)/phasePowerMult()+puppetPowerBonus();
            const scale=pm/phaseMult()*(t<boost?3:1)/timeGainMult()*(t<(S.injured||0)?.5:1)/injuredMult();
            sum+=duration*scale;exploreSum+=duration*scale*winChance(futurePower,es.E)/es.w;
          }
          rates=rates.map(r=>{const factor=(r.mode==='explore'?exploreSum:sum)/flameSeconds;
            return {...r,qi:(r.qi-origin)*factor+origin,herb:r.herb*factor,core:r.core*factor};});
        }
        const lockedSeclusion=S.level>=MAX_LEVEL || (S.level>=90&&!storyDone('古帝洞府')) || phase()==='ash';
        const phaseLeft=phase()==='orange'?S.wick-S.wickMax*(1-PHASE_1):phase()==='red'?S.wick-S.wickMax*(1-PHASE_2):Infinity;
        return {level:S.level,rank:S.alchemyLevel,mode:S.mode,qi:S.qi,herbs:S.herbs,cores:S.cores,
          cycle:S.cycle,region:S.region,flameSeconds,danleiWin,north:isNorthPuppet(),batch:!!S.batchCraft,
          competing:!!(S.puppet?.autoOn||(AUTO_CRAFT_ENABLED&&S.auto.craft)),
          remaining:S.pillDebuff,noDebuff:noPillDebuff(),cooldown:CRAFT_CD,craftLeft:S.tm.craft,
          refineSpeed:flameSeconds>0?1+2*Math.min(boost,flameSeconds)/flameSeconds:1,refund:hasTree('refund1')?.4:0,
          phase:phase(),phaseLeft:phaseLeft/(S.timeBuff>0?2:1),timeLeft:S.timeBuff||0,injuryLeft:S.injured||0,
          need:gainNeed(S.level),bonus:gainNeed(S.level)*alchemyYieldPct(),
          yieldMult:hasOriginFlame('guling')?1.5:1,origin,rates,lockedSeclusion,
          merchant:merchantUnlocked(),squads:S.merchant?.squads||[],squadCost:squadUnlockCost(),
          squadRates:{herb:gs.herb*.5,core:gs.core*.5},puppet:S.puppet,
          puppetCost:puppetCraftCost(),puppetAutoCost:PUPPET_AUTO_COST,evolveCost:puppetEvolveCost(),
          fireDefs:FIRE_CULT_DEFS,alchDefs:ALCH_UPGRADE_DEFS,
          fire:S.fireCult,alch:S.alchemyUpgrade,
          powerWin:winChance((power()-puppetPowerBonus())*(1+.03/b.specialPow)+puppetPowerBonus(),es.E)/es.w,
          fireCosts:Object.fromEntries(Object.keys(FIRE_CULT_DEFS).map(id=>[id,fireCultCost(id)])),
          fireUnlocked:Object.fromEntries(Object.keys(FIRE_CULT_DEFS).map(id=>[id,fireCultUnlocked(id)])),
          alchCosts:Object.fromEntries(Object.keys(ALCH_UPGRADE_DEFS).map(id=>[id,alchUpgradeCost(id)])),
          danleiPills:PILLS.filter(p=>p.tier>=7&&S.alchemyLevel>=Math.max(1,p.tier-(p.type==='key'?2:1))&&
            !(p.type==='key'&&S.storyCrafted?.[p.id])).map(p=>({
            id:p.id,name:p.name,tier:p.tier,type:p.type,full:0,over:false,
            base:baseCraftChance(p),cost:pillCost(p),frugal:pillCostFrugal(p)
          })),
          pills:PILLS.filter(p=>p.type==='qi'&&S.alchemyLevel>=Math.max(1,p.tier-1)).map(p=>({
            id:p.id,name:p.name,tier:p.tier,over:p.maxLevel!==undefined&&S.level>p.maxLevel,
            full:(gainNeed(S.level)*p.pct+(p.flatQi||0))*(p.maxLevel!==undefined&&S.level>p.maxLevel?.2:1)*fireCultPillMult()*alchemyHerbEffectMult(),
            base:baseCraftChance(p),cost:pillCost(p),frugal:pillCostFrugal(p)
          }))};
      })())`));
    } catch (error) { return null; }
  }

  const modeNames = {cultivate:'练功',gather:'采集',explore:'历练',seclusion:'闭关'};
  let economic = null, economicPlans = [], nextEconomyAt = 0, nextSupportAt = 0;
  let nextInvestmentAt = 0, pendingSeclusion = false;
  let lastEconomicModeAt = -Infinity, nextEconomicCraftAt = 0, pendingAutoPill = false;
  let economicEpoch = '';
  function selectEconomicPlan(s,plans) {
    const growth=puppetGrowthPlan(s,plans);
    if(growth)return growth;
    if(s.level>=90){
      const rates=s.rates.filter(r=>s.mode==='seclusion'?r.mode==='seclusion':r.mode!=='seclusion');
      const rate=rates.slice().sort((a,b)=>b.core-a.core||b.herb-a.herb)[0];
      if(rate)return {kind:'idle',rate,score:rate.qi,goal:'late-resources',label:'斗圣九星起停止日常斗气炼丹 · '+modeNames[rate.mode]+'积累成长材料'};
    }
    const ready=plans.filter(p=>p.kind==='pill'&&!p.wait&&s.herbs>=p.cost.herb&&s.cores>=p.cost.core).map(p=>{
      const gain=p.freq>0?(p.score-p.rate.qi)/p.freq:0;
      const freq=1/(s.cooldown*p.tries);
      return {...p,fast:true,freq,score:p.rate.qi+freq*gain,label:p.label+' · 库存加速'};
    }).filter(p=>Number.isFinite(p.score)).sort((a,b)=>b.score-a.score);
    const idle=plans.filter(p=>p.kind==='idle').sort((a,b)=>b.score-a.score)[0];
    if(ready.length&&(!idle||ready[0].score>idle.score))return ready[0];
    const best=plans[0];if(!best)return null;
    const current=plans.find(p=>p.rate.mode===s.mode);
    const needsMaterials=current?.kind==='pill'&&(s.herbs<current.cost.herb||s.cores<current.cost.core);
    if(current&&!needsMaterials&&best.rate.mode!==s.mode&&
      (best.score<=current.score*1.03||performance.now()-lastEconomicModeAt<10000))return current;
    return best;
  }
  function puppetGrowthPlan(s,plans) {
    const puppet=s.puppet;
    if(!extra.evolvePuppet||!puppet?.built||puppet.tier>=3||s.competing||s.batch)return null;
    const need=puppet.tier===1?2:7, left=Math.max(0,need-(puppet.danlei||0));
    const reserve=s.level>=90&&left>0?0:(s.evolveCost||0);
    const stock={herb:s.herbs,core:Math.max(0,s.cores-reserve)};
    const income=rate=>{
      const result={herb:rate.herb,core:rate.core};
      for(const q of s.squads)if(q.unlocked&&result[q.task]!==undefined)result[q.task]+=s.squadRates[q.task];
      return result;
    };
    if(!left){
      const rates=s.rates.filter(r=>s.mode==='seclusion'?r.mode==='seclusion':r.mode!=='seclusion');
      const rate=s.cores>=reserve?rates.find(r=>r.mode===s.mode)||rates[0]:rates.slice().sort((a,b)=>income(b).core-income(a).core)[0];
      return rate?{kind:'idle',rate,score:rate.qi,goal:'puppet-ready',label:'丹雷已达标 · '+(s.cores>=reserve?'等待傀儡进化':'积累进化所需魔核')}:null;
    }
    if(!(s.danleiWin>=.95))return null;
    const growthPlans=s.danleiPills?economicChoices(s,false,true):plans;
    const candidates=growthPlans.filter(p=>p.kind==='pill'&&p.p.tier>=7&&!p.wait&&(s.mode==='seclusion'||p.rate.mode!=='seclusion')).map(p=>{
      const thunder=p.p.tier===7?.3:.6;
      const survival=1-thunder*(1-s.danleiWin);
      const successes=left*survival/(thunder*s.danleiWin);
      const inc=income(p.rate);
      const wait=(cost,have,rate)=>cost<=have?0:rate>0?(cost-have)/rate:Infinity;
      const seconds=Math.max(successes*p.tries*s.cooldown,
        wait(successes*p.expected.herb,stock.herb,inc.herb),wait(successes*p.expected.core,stock.core,inc.core),
        wait(reserve,s.cores,inc.core));
      return {...p,seconds,reserve,goal:'puppet-danlei',freq:1/(s.cooldown*p.tries),
        label:'傀儡丹雷 '+(puppet.danlei||0)+'/'+need+' · '+p.p.name+' · '+(p.reduced?'减料':'普通')+' / '+modeNames[p.rate.mode]};
    }).filter(p=>Number.isFinite(p.seconds)).sort((a,b)=>{
      const ac=a.expected.core/(a.p.tier===7?.3:.6),bc=b.expected.core/(b.p.tier===7?.3:.6);
      // Spend scarce cores on the cheapest expected successful danlei, not on qi.
      // When cost differs only by rounding, prefer fewer attempts / less waiting.
      if(Math.abs(ac-bc)>Math.max(ac,bc)*.01)return ac-bc;
      return a.seconds-b.seconds||a.expected.herb-b.expected.herb;
    });
    // A feasible danlei attempt takes priority over waiting for a more expensive
    // recipe's projected full-upgrade throughput. Re-evaluate after every attempt.
    const affordable=candidates.filter(p=>s.herbs>=p.cost.herb&&s.cores>=reserve+p.cost.core);
    return affordable[0]||candidates[0]||null;
  }

  function economicHorizon(s) {
    return Math.max(1,Number.isFinite(s.flameSeconds)?s.flameSeconds:0);
  }
  function eligiblePills(s) {
    return s.pills.filter(p=>Number.isFinite(p.full)&&p.full>0&&p.base>0&&
      (p.tier<7||s.north||s.danleiWin>=.95));
  }
  function economicChoices(s, includeClosed=false, forDanlei=false) {
    const horizon=economicHorizon(s);
    const inventory=s.flameSeconds>0?1:0;
    const squad={herb:0,core:0};
    for(const q of s.squads) if(q.unlocked&&squad[q.task]!==undefined) squad[q.task]+=s.squadRates[q.task];
    const modes=s.rates.filter(r=>s.mode==='seclusion'?r.mode==='seclusion':r.mode!=='seclusion'||
      (!s.lockedSeclusion&&(includeClosed||extra.autoSeclusion)));
    const choices=modes.map(rate=>({kind:'idle',rate,score:rate.qi,label:'直接'+modeNames[rate.mode],horizon}));
    const recipes=forDanlei?(s.danleiPills||[]).filter(p=>p.base>0&&(s.north||s.danleiWin>=.95)):eligiblePills(s);
    for(const p of recipes) for(const reduced of [false,true]) {
      if(reduced&&!s.alch.frugal)continue;
      const cost=reduced?p.frugal:p.cost;
      const chance=Math.min(1,Math.max(.05,p.base*(reduced?.5:1)));
      const thunder=p.tier<7?0:p.tier===7?.3:.6;
      const survival=s.north?1:1-thunder*(1-s.danleiWin);
      const p0=chance*survival,p1=Math.min(1,chance*1.5)*survival;
      const tries=1+(1-p0)/p1;
      const loss0=chance*thunder*(1-(s.north?1:s.danleiWin));
      const loss1=Math.min(1,chance*1.5)*thunder*(1-(s.north?1:s.danleiWin));
      const materials=tries-(1-chance)*s.refund-loss0*(s.refund+.3)-
        (1-p0)/p1*((1-Math.min(1,chance*1.5))*s.refund+loss1*(s.refund+.3));
      const expected={herb:cost.herb*materials,core:cost.core*materials};
      const thunderBonus=1+.1*thunder*(s.north?1:s.danleiWin)/survival;
      for(const rate of modes) {
        // Half-power chaining and waiting for full refinement are distinct recurring policies.
        for(const wait of s.noDebuff?[false]:[false,true]) {
          const available={herb:inventory*s.herbs/horizon+rate.herb+squad.herb,core:inventory*s.cores/horizon+rate.core+squad.core};
          const minInterval=Math.max(s.cooldown*tries,wait?90/(s.refineSpeed*(rate.mode==='cultivate'?3:1)):0);
          const freq=Math.min(1/minInterval,expected.herb?available.herb/expected.herb:Infinity,
            expected.core?available.core/expected.core:Infinity);
          const gain=p.full*(s.noDebuff||wait?1:.5)*thunderBonus+s.bonus;
          if(!(freq>0&&Number.isFinite(freq*gain)))continue;
          const waitFor=(need,stock,income)=>need<=stock?0:income>0?(need-stock)/income:Infinity;
          const firstWait=Math.max(s.craftLeft||0,waitFor(cost.herb,s.herbs,rate.herb+squad.herb),waitFor(cost.core,s.cores,rate.core+squad.core));
          if(s.flameSeconds>0&&firstWait>=horizon)continue;
          if(s.flameSeconds<=0&&firstWait===Infinity)continue;
          choices.push({kind:'pill',p,reduced,wait,rate,cost,expected,freq,horizon,tries,
            score:rate.qi+freq*gain,label:p.name+(p.over?'（两成）':'')+' · '+(reduced?'减料':'普通')+' · '+(wait?'等满效':'连续炼')+' / '+modeNames[rate.mode]});
        }
      }
    }
    return choices.sort((a,b)=>b.score-a.score);
  }

  function investmentChoices(s) {
    const baseline=economicChoices(s)[0];
    if(!baseline)return [];
    const list=[];
    for(const fire of [false,true]) for(const [id,def] of Object.entries(fire?s.fireDefs:s.alchDefs)) {
      const level=(fire?s.fire:s.alch)[id]||0;
      if(level>=def.max||(fire&&!s.fireUnlocked[id]))continue;
      const after=JSON.parse(JSON.stringify(s));
      const cost=(fire?s.fireCosts:s.alchCosts)[id];
      if(fire) {
        if(id==='alchemy') after.pills.forEach(p=>p.base+=.012);
        else if(id==='pill')after.pills.forEach(p=>p.full*= (1+.02*(level+1))/(1+.02*level));
        else if(id==='seclusion')after.rates.filter(r=>r.mode==='seclusion').forEach(r=>r.qi=(r.qi-s.origin)*(1+.03*(level+1))/(1+.03*level)+s.origin);
        else if(id==='power')after.rates.filter(r=>r.mode==='explore').forEach(r=>{r.qi=(r.qi-s.origin)*s.powerWin+s.origin;r.herb*=s.powerWin;r.core*=s.powerWin});
        else {list.push({name:def.name,reason:'战斗收益尚不能可靠折算为斗气，保留手动',payback:Infinity});continue;}
      } else if(id==='yield') after.bonus=s.need*(.008+.002*(level+1))*s.yieldMult;
      else if(id==='frugal')after.alch.frugal=1;
      else {
        const field=id==='herb'?'herb':'core', discounts=id==='herb'?[0,.1,.2]:[0,.15,.25];
        const ratio=(1-discounts[level+1])/(1-discounts[level]);
        after.pills.forEach(p=>{for(const c of [p.cost,p.frugal])c[field]=Math.max(field==='herb'?1:0,Math.round(c[field]*ratio))});
      }
      // Charge materials to inventory before recomputing throughput. Do not treat stocked
      // resources as hours of lost cultivation: that incorrectly rejects profitable upgrades.
      after.herbs=Math.max(0,after.herbs-(cost.herb||0));
      after.cores=Math.max(0,after.cores-(cost.core||0));
      const best=economicChoices(after)[0];
      const delta=best.score-baseline.score;
      const payback=delta>0?cost.qi/delta:Infinity;
      list.push({id,fire,name:def.name,level,cost,delta,payback,
        affordable:s.qi>=cost.qi&&s.herbs>=(cost.herb||0)&&s.cores>=(cost.core||0)});
    }
    return list.sort((a,b)=>a.payback-b.payback);
  }

  function lateInvestmentChoices(s){
    const list=[],goal=puppetGrowthPlan(s,economicChoices(s));
    for(const fire of [true,false])for(const [id,def] of Object.entries(fire?s.fireDefs:s.alchDefs)){
      const level=(fire?s.fire:s.alch)[id]||0;
      if(level>=def.max||(fire&&!s.fireUnlocked[id]))continue;
      const cost=(fire?s.fireCosts:s.alchCosts)[id];
      const affordable=s.qi>=cost.qi&&s.herbs>=(cost.herb||0)&&s.cores>=(cost.core||0);
      let useful=false,reason='当前成长目标无需此项';
      if(fire&&id==='power'){
        useful=cost.qi<=s.qi*.01;
        reason=useful?'只消耗少量现有斗气，提高战力':'暂缓：单次消耗超过现有斗气的1%';
      }else if(fire&&id==='lotus')reason='暂缓：火莲战斗收益尚未量化，保留魔核用于傀儡';
      else if(fire&&id==='seclusion')reason='暂缓：当前不以闭关与斗气积累为目标';
      else if(fire&&id==='pill'||!fire&&id==='yield')reason='暂缓：当前不以斗气积累为目标';
      else if(goal?.goal==='puppet-danlei'&&['herb','core'].includes(id)&&!fire){
        const discounts=id==='herb'?[0,.1,.2]:[0,.15,.25];
        const fraction=1-(1-discounts[level+1])/(1-discounts[level]);
        const remaining=Math.max(0,(s.puppet.tier===1?2:7)-(s.puppet.danlei||0));
        const thunder=goal.p.tier===7?.3:.6;
        const expected=remaining*goal.expected[id]/(thunder*s.danleiWin);
        const saved=expected*fraction;
        useful=saved>(cost[id]||0)&&cost.qi<=s.qi*.01;
        reason=useful?'预计剩余丹雷需求可收回材料支出':'暂缓：剩余丹雷预计节省材料少于升级成本';
      }else if(fire&&id==='alchemy')reason='暂缓：当前优先使用已高成丹率的低成本丹方';
      else reason='暂缓：当前没有可核算的材料回收收益';
      const materialSafe=!(cost.core||cost.herb)||!goal?.cost||s.cores-(cost.core||0)>=goal.cost.core+(goal.reserve||0)&&s.herbs-(cost.herb||0)>=goal.cost.herb;
      list.push({id,fire,name:def.name,cost,affordable,useful:useful&&materialSafe,reason:!materialSafe&&useful?'暂缓：需先保留当前丹雷丹方材料':reason});
    }
    return list;
  }

  let nextUpgradeReview=0;
  function refreshEconomy() {
    const live=game.__XY__?.S;
    if(live&&economic&&(live.level!==economic.level||live.cycle!==economic.cycle||live.mode!==economic.mode||
      live.region!==economic.region||Boolean(live.batchCraft)!==economic.batch||Boolean(live.puppet?.autoOn)!==economic.puppet?.autoOn||live.puppet?.tier!==economic.puppet?.tier||live.puppet?.danlei!==economic.puppet?.danlei))nextEconomyAt=0;
    if(performance.now()<nextEconomyAt)return false;
    nextEconomyAt=performance.now()+(document.hidden?10000:5000);
    economic=economicSnapshot();
    if(!economic){
      setText('economy-status','无法读取实时收益数据；动态策略暂缓，不切页试探。');
      return false;
    }
    setText('flame-horizon',economic.flameSeconds>0?'剩余火种约 '+Math.ceil(economic.flameSeconds/60)+' 分钟 · 自动作为评估期限':economic.level>=90?'斗圣九星起以傀儡与战力成长为目标':'火种已耗尽 · 只比较可持续收益，暂停自动升级');
    economicPlans=economicChoices(economic);
    const best=selectEconomicPlan(economic,economicPlans);
    const closed=economicChoices(economic,true).find(p=>p.rate.mode==='seclusion');
    const lines=economicPlans.filter((p,i,all)=>i===all.findIndex(x=>x.rate.mode===p.rate.mode)).map(p=>p.label+'：约 '+Math.round(p.score*60).toLocaleString('zh-CN')+' 斗气/分');
    const practice=economic.rates.find(r=>r.mode==='cultivate');
    if(practice)lines.push('直接练功（不炼丹）：'+Math.round(practice.qi*60).toLocaleString('zh-CN')+' 斗气/分');
    const secluded=economic.rates.find(r=>r.mode==='seclusion');
    if(secluded)lines.push('直接闭关（不炼丹）：'+Math.round(secluded.qi*60).toLocaleString('zh-CN')+' 斗气/分'+(economic.lockedSeclusion?' · 当前禁止进入':''));
    if(!extra.autoSeclusion&&closed)lines.push('闭关参考：约 '+Math.round(closed.score*60).toLocaleString('zh-CN')+' 斗气/分（自动闭关未开启）');
    setText('economy-status',(best?'推荐 '+best.label:'等待可用策略')+(best?.fast?'\n库存加速预计约 '+Math.round(best.score*60).toLocaleString('zh-CN')+' 斗气/分（材料充足期间）；以下为长期供应估算：':'')+'\n'+lines.join('\n')+
      '\n按剩余火种与当前产量滚动估算；计入衰减、炼化、保底、返料及丹雷。未取得北王时，仅自动选择丹雷承接胜率至少95%的高品丹。');
    const reviewVisible=control('autoUpgrade').closest('details').open;
    if((!extra.autoUpgrade&&!reviewVisible)||performance.now()<nextUpgradeReview)return false;
    nextUpgradeReview=performance.now()+10000;
    const late=economic.level>=90;
    const upgrades=late?lateInvestmentChoices(economic):investmentChoices(economic);
    setText('upgrade-status',upgrades.map(u=>u.name+'：'+(late?u.reason+(u.affordable?'':' · 材料不足'):Number.isFinite(u.payback)?'约 '+(u.payback/60).toFixed(1)+' 分钟回本'+(u.affordable?'':' · 材料不足'):u.reason||'当前策略下暂无可量化增益')).join('\n')||'已圆满或暂未解锁');
    if((!late&&(best?.goal||economic.flameSeconds<=0))||!extra.autoUpgrade||economic.competing||economic.batch||performance.now()<nextInvestmentAt)return false;
    const choice=late?upgrades.find(u=>u.affordable&&u.useful):upgrades.find(u=>u.affordable&&u.payback<economicHorizon(economic)&&supportBudget(economic,u.cost));
    if(!choice)return false;
    refreshGame([choice.fire?'renderFireCult':'renderAlchemyUpgrades']);
    const button=page('[data-act="'+(choice.fire?'fc-':'alch-')+choice.id+'"]');
    if(!button||button.disabled)return false;
    button.click();
    nextInvestmentAt=performance.now()+3000;nextEconomyAt=0;nextUpgradeReview=nextInvestmentAt;
    setText('upgrade-status','已提升 '+choice.name+' · '+(late?choice.reason:'预计 '+(choice.payback/60).toFixed(1)+' 分钟回本'));
    return true;
  }

  function applyEconomicPlan(report) {
    if(!economic)return report('等待实时收益数据，暂缓全自动炼丹');
    if(economic.competing||economic.batch){alchemyMode='';return report('检测到游戏或傀儡自动炼丹，暂让其执行，避免争抢材料与模式');}
    const epoch=economic.cycle+'|'+economic.level+'|'+(economic.puppet?.tier||0)+'|'+(economic.puppet?.danlei||0);
    if(epoch!==economicEpoch){economicEpoch=epoch;nextEconomicCraftAt=0;lastEconomicModeAt=-Infinity;}
    const live=game.__XY__?.S;
    const best=selectEconomicPlan(economic,economicPlans);
    if(!best)return report('等待可用收益方案');
    // Honor the current plan across short intervals instead of bouncing back to gather.
    alchemyMode=best.rate.mode;
    restoringRefineMode=false;previousMode=null;
    if((live?.mode||economic.mode)!==best.rate.mode) return report('收益比较选择 '+best.label+'，等待切换模式');
    if(best.kind==='idle')return report(best.goal?best.label:best.label+'收益更高，暂不消耗材料炼丹');
    if(best.goal==='puppet-danlei'){
      if(best.p.type==='key'&&live?.storyCrafted?.[best.p.id]){nextEconomyAt=0;return report('该剧情丹本周目已炼，重新选择丹雷丹方');}
      const missingCore=Math.max(0,best.reserve+best.cost.core-(live?.cores??economic.cores));
      const missingHerb=Math.max(0,best.cost.herb-(live?.herbs??economic.herbs));
      if(missingCore||missingHerb)return report(best.label+' · 还缺 '+[missingCore?Math.ceil(missingCore).toLocaleString('zh-CN')+' 魔核':'',missingHerb?Math.ceil(missingHerb).toLocaleString('zh-CN')+' 药材':''].filter(Boolean).join('、'));
    }
    if(best.wait&&!economic.noDebuff&&(live?.pillDebuff??economic.remaining)>0)return report(best.p.name+' · 等待药力炼化');
    if((live?.tm?.craft??economic.craftLeft)>0||performance.now()<nextCraftAt)return report(best.p.name+' · 等待丹炉冷却');
    const selector=best.reduced?'data-craft-frugal':'data-craft';
    const button=page('#recipeList button['+selector+'="'+best.p.id+'"]');
    if(!button||button.disabled)return report(best.p.name+' · '+(button?.title||'等待材料或丹方'));
    pendingAutoPill=true;
    button.click();attempts++;
    nextCraftAt=performance.now()+economic.cooldown*1000;
    nextEconomicCraftAt=nextCraftAt;
    nextEconomyAt=0;
    report('已炼制 '+best.p.name+' · 冷却后继续'+(best.p.over?' · 已计入两成药效':''));
  }

  function supportBudget(s,cost) {
    // Keep one current-rule recipe and one eligible merchant recipe in reserve.
    const picks=eligiblePills(s);
    const best=economicPlans.find(p=>p.kind==='pill');
    let herb=best?.cost.herb||0,core=best?.cost.core||0;
    if(extra.merchantOrders)for(const p of s.pills){
      if(page('#merchantBody')?.textContent.includes(p.name)){herb=Math.max(herb,p.cost.herb);core=Math.max(core,p.cost.core)}
    }
    for(const button of recipeButtons()) {
      const name=pillName(button);
      const needed=(extra.merchantOrders&&page('#merchantBody')?.textContent.includes(name))||
        (story.enabled&&page('#storyBody')?.textContent.includes(name));
      if(!needed)continue;
      const cost=readRecipeCost(button.closest('.recipe'),button,false);
      if(Number.isFinite(cost.h+cost.c)){herb=Math.max(herb,cost.h);core=Math.max(core,cost.c)}
    }
    if(!best&&picks.length){herb=picks[0].cost.herb;core=picks[0].cost.core;}
    return s.herbs-(cost.herb||cost.herbs||0)>=herb&&s.cores-(cost.core||cost.cores||0)>=core&&s.qi>=(cost.qi||0);
  }
  let supportModal=null, nextGiftAt=0;
  function supportSnapshot() {
    try { return JSON.parse(game.eval(`JSON.stringify({
      cycle:S.cycle,level:S.level,qi:S.qi,herbs:S.herbs,cores:S.cores,
      merchant:merchantUnlocked(),squads:S.merchant?.squads||[],squadCost:squadUnlockCost(),
      squadRates:{herb:gatherStats().herb*.5,core:gatherStats().core*.5},
      puppet:S.puppet,puppetCost:puppetCraftCost(),puppetAutoCost:PUPPET_AUTO_COST,
      evolveCost:puppetEvolveCost(),northCost:NORTH_PUPPET_COST,
      missingEncounterFlames:flamePoolUnseen().length+flamePoolLost().length,
      gifts:S.gifts||0,partners:PARTNERS.filter(p=>p.romance&&S.partners.includes(p.id)).map(p=>({id:p.id,name:p.name,affinity:S.affinity[p.id]||0})),
      pills:[],flameSeconds:Math.max(0,S.wick),north:isNorthPuppet(),danleiWin:0
    })`)); } catch (_) { return null; }
  }
  function ownSupportModal() {
    const modal=page('#modalRoot');
    if(modal&&!modal.hidden)supportModal={title:modal.querySelector('#modalTitle')?.textContent,
      body:modal.querySelector('#modalBody')?.innerHTML};
  }
  function acknowledgeSupportModal() {
    if(!supportModal)return false;
    const modal=page('#modalRoot');
    if(!modal||modal.hidden){supportModal=null;return false;}
    if(modal.querySelector('#modalTitle')?.textContent!==supportModal.title||
      modal.querySelector('#modalBody')?.innerHTML!==supportModal.body){supportModal=null;return false;}
    const buttons=[...modal.querySelectorAll('#modalActions button')];
    if(buttons.length!==1||buttons[0].disabled||!['继续','知道了','拥她入怀'].includes(buttons[0].textContent.trim()))return false;
    supportModal=null;buttons[0].click();return true;
  }
  function giftTarget(s) {
    return s.partners.filter(p=>p.affinity>=0&&p.affinity<100).sort((a,b)=>
      Math.min(14,100-b.affinity)-Math.min(14,100-a.affinity)||a.affinity-b.affinity||a.id.localeCompare(b.id))[0];
  }
  function supportAction(selector,renderer,message) {
    if(!refreshGame([renderer]))return false;
    const button=page(selector);
    if(!button||button.disabled)return false;
    button.click();ownSupportModal();nextEconomyAt=0;nextSupportAt=performance.now()+2000;
    setText('support-status',message);return true;
  }
  function tickSupport() {
    if(paused)return;
    if(acknowledgeSupportModal())return;
    if(performance.now()<nextSupportAt||page('#modalRoot:not([hidden])'))return;
    nextSupportAt=performance.now()+(document.hidden?15000:5000);
    if(!extra.autoSquads&&!extra.unlockSquad&&!extra.unlockPuppet&&!extra.evolvePuppet&&!extra.autoGifts)return;
    const s=supportSnapshot();
    if(!s)return setText('support-status','等待读取商会、傀儡与人物状态');
    const notes=[];
    // At most one resource-spending action per pass; always re-read before the next.
    if(extra.evolvePuppet&&s.puppet?.built&&s.puppet.tier<4){
      if(s.puppet.tier<3){
        const ready=s.puppet.danlei>=(s.puppet.tier===1?2:7);
        if(ready&&s.cores>=s.evolveCost&&
          supportAction('[data-act="puppet-evolve"]','renderPuppet','已执行傀儡进化'))return;
        notes.push(ready?'傀儡进化：等待魔核':'傀儡丹雷 '+(s.puppet.danlei||0)+'/'+(s.puppet.tier===1?2:7)+' · '+(!running?'需启用全自动修炼以积累丹雷':economic?.danleiWin<.95?'承接胜率不足95%，暂不主动引雷':s.level>=90?'优先用材料补丹雷，不预留进化魔核；丹雷达标后再攒进化材料':'优先所有可炼高品丹积累丹雷；无安全可用丹方时继续修炼'));
      }else if(s.puppet.northUnlocked){
        if(supportBudget(s,s.northCost)&&supportAction('[data-act="puppet-north"]','renderPuppet','已炼制北王'))return;
        notes.push('北王：等待斗气与魔核');
      }else notes.push('北王：等待剧情条件');
    }
    if(extra.unlockPuppet){
      if(!s.puppet?.unlocked)notes.push('傀儡：等待通关魔炎谷');
      else if(!s.puppet.built){
        if(supportBudget(s,s.puppetCost)&&supportAction('[data-act="puppet-craft"]','renderPuppet','已炼制初级傀儡'))return;
        notes.push('傀儡：等待建造材料与炼丹预留');
      }else if(!s.puppet.autoUnlocked){
        if(supportBudget(s,s.puppetAutoCost)&&supportAction('[data-act="puppet-auto-unlock"]','renderPuppet','已解锁傀儡自动炼丹'))return;
        notes.push('傀儡：等待自动炼丹解锁材料');
      }
    }
    if(extra.autoGifts){
      const target=giftTarget(s);
      if(s.gifts>0&&target&&performance.now()>=nextGiftAt){
        // Use the game's existing gift action; never open partner cards to automate gifts.
        const api=game.__XY__;
        if(typeof api?.gift==='function'&&typeof api?.save==='function'){
          const result=api.gift(target.id,'token');
          if(result?.ok){
            api.save();ownSupportModal();nextGiftAt=performance.now()+2000;nextSupportAt=nextGiftAt;nextEconomyAt=0;
            if(page('#tabs button.on')?.dataset.tab==='gallery')refreshGame(['renderPartners']);
            notes.push('已送小礼物给'+target.name+' · 好感 '+target.affinity+' → '+Math.min(100,target.affinity+14));
          }
        }else notes.push('送礼接口不可用，暂缓');
      }else notes.push(!target?'同行人物好感已满或暂无可送礼对象':s.gifts?'等待赠礼间隔':'小礼物已用完');
    }
    if(!s.merchant)return setText('support-status',[...notes,'商会：等待剧情解锁'].join('\n'));
    if(extra.unlockSquad&&!s.squads[1]?.unlocked){
      if(supportBudget(s,s.squadCost)&&supportAction('[data-act="squad-unlock-1"]','renderMerchant','已解锁第二支商会小队'))return;
      notes.push('第二小队：等待招募材料与炼丹预留');
    }
    if(extra.autoSquads){
      const hunt=extra.lateFlames&&s.level>=90&&s.missingEncounterFlames>0;
      const record=view.squadOverrides&&view.squadOverrides.cycle===s.cycle?view.squadOverrides:{cycle:s.cycle,tasks:{}};
      view.squadOverrides=record;
      const planned=economicPlans.find(p=>p.kind==='pill');
      let herbs=s.squadRates.herb*s.squads.filter(q=>q.unlocked&&q.task==='herb').length;
      let cores=s.squadRates.core*s.squads.filter(q=>q.unlocked&&q.task==='core').length;
      for(let i=0;i<s.squads.length;i++){
        const sq=s.squads[i];if(!sq.unlocked)continue;
        let task=sq.task;
        if(hunt&&sq.task!=='flame'){
          record.tasks[i]=sq.task;task='flame';
        }else if(!hunt&&Object.hasOwn(record.tasks,i)){
          // Only restore assignments that this helper changed, not manually replaced tasks.
          if(sq.task==='flame')task=record.tasks[i];delete record.tasks[i];
        }
        if(!task){
          const hNeed=planned?.expected.herb||1,cNeed=planned?.expected.core||1;
          const horizon=Math.max(60,s.flameSeconds);
          task=(s.herbs+herbs*horizon)/hNeed<(s.cores+cores*horizon)/cNeed?'herb':'core';
          if(task==='herb')herbs+=s.squadRates.herb;else cores+=s.squadRates.core;
        }
        if(task===sq.task)continue;
        // If the user is editing a squad control, defer instead of replacing that control.
        if(document.activeElement?.matches?.('[data-squad-task]'))continue;
        if(typeof game.setSquadTask!=='function'){notes.push('小队接口不可用');break;}
        game.setSquadTask(i,task);nextEconomyAt=0;
        notes.push('第'+(i+1)+'小队 → '+({flame:'寻找异火',herb:'采集药草',core:'追猎魔兽',trade:'行商交易'}[task]||task));
      }
      const serialized=JSON.stringify(record);
      if(serialized!==lastSquadRecord){lastSquadRecord=serialized;saveView();}
      notes.push(hunt?'后期寻火优先：尚缺 '+s.missingEncounterFlames+' 种可奇遇收集的异火':'小队按材料需求工作；剧情专属异火仍需推进剧情');
    }
    setText('support-status',notes.join('\n'));
  }
  let lastSquadRecord='';


  function runAlchemy() {
    setText('dynamic-status', running ? '所有可用修为丹自动参与比较' : '开启全自动修炼后执行');
    alchemyMode = '';
    const realmText = page('#realmLabel')?.textContent.trim() || '';
    setText('realm', realmText || '读取境界中');
    updateSummary();
    setText('story-status', story.enabled ? '剧情丹优先检查中' : '剧情炼丹已关闭');
    const report = message => setText('status', ((message) + " · 已尝试 " + (attempts) + " 次"));
    if (!running) {
      if (story.enabled) setText('story-status', '开始炼丹后检查剧情需求');
      runMerchant(recipeButtons());
      return report('已暂停');
    }
    const modal = page('#modalRoot');
    if (modal && !modal.hidden) {
      const title=modal.querySelector('#modalTitle')?.textContent.trim();
      if(title==='药老 · 丹雷') {
        const b=[...modal.querySelectorAll('#modalActions button')].find(b=>b.textContent.trim()==='记下了');
        if(b&&!b.disabled)b.click();
      }else if(title==='丹雷降世'&&pendingAutoPill){
        const b=modal.querySelector('[data-herb="danleiResist"]');
        if(b&&!b.disabled){pendingAutoPill=false;b.click();nextEconomyAt=0;}
      }
      return report('等待游戏弹窗处理');
    }
    if (performance.now() >= nextDataRefresh) {
      refreshGame(['renderAlchemyHead', 'renderRecipes', 'renderPillBag', 'updateAffordable']);
      nextDataRefresh = performance.now() + 2000;
    }
    const buttons = recipeButtons();
    if (refreshEconomy()) return report('已执行收益升级，下一轮重新计算');
    if(!economic)return report('等待读取游戏数据，暂缓自动支出');
    if(economic.competing||economic.batch)return report('游戏或傀儡正在自动炼丹，助手暂缓支出与切换');
    if (story.enabled) {
      const body = page('#storyBody');
      // textContent also works when the cultivation tab is hidden.
      const missing = body?.querySelector('button[data-act="makekey"][data-key]');
      const candidate = missing ? buttons.find(button => button.dataset.craft === missing.dataset.key)
        : body?.querySelector('#nodeKey.ok') ? null : getStoryRecipe(body?.textContent || '', buttons);
      if (candidate) {
        const name = pillName(candidate);
        const chance = getStoryChance(candidate);
        const reason = chance === null ? '成丹率未知'
          : chance <= story.threshold ? '成丹率 ' + chance + '%，未超过门槛'
          : candidate.disabled ? candidate.title || '暂不可炼' : '';
        setText('story-status', '剧情需要 ' + name + (reason ? ' · ' + reason : ' · 成丹率 ' + chance + '%'));
        if (chance !== null && chance > story.threshold &&
            (!reason || /丹炉未冷|药材不足|魔核不足|兽核不足/.test(reason))) return craft(candidate, report);
      } else {
        setText('story-status', '未识别到剧情缺丹');
      }
    }
    if (economic.level>=90||puppetGrowthPlan(economic,economicPlans)) return applyEconomicPlan(report);
    if (runMerchant(buttons)) return report(control('merchant-status').textContent);
    const breakPill = refillBreakPills(buttons);
    if (breakPill) return craft(breakPill, message => report('补突破丹 · ' + message));
    return applyEconomicPlan(report);
  }

  function craftShortage(button) {
    const reason = button.title || '暂不可炼';
    if (!/药材不足|(?:魔|兽)核不足/.test(reason)) return reason;
    const row = button.closest('.recipe');
    const cost = readRecipeCost(row, button, Boolean(button.dataset.craftFrugal));
    const needs = [
      ['药材', cost.h - amount(page('#herbVal')?.textContent), amount(page('#idleHerb')?.textContent)],
      ['魔核', cost.c - amount(page('#coreVal')?.textContent), amount(page('#idleCore')?.textContent)],
    ].filter(([, missing]) => Number.isFinite(missing) && missing > 0);
    if (!needs.length) return reason;
    const list = needs.map(([name, missing]) => Math.ceil(missing).toLocaleString('zh-CN') + ' ' + name).join('、');
    if (needs.some(([, , rate]) => !(rate > 0))) return reason + ' · 还差约 ' + list + ' · 当前挂机模式未产出所缺材料';
    const minutes = Math.ceil(Math.max(...needs.map(([, missing, rate]) => missing / rate)) / 60);
    return reason + ' · 还差约 ' + list + ' · 按当前基础产量约 ' + minutes + ' 分钟';
  }

  function craft(button, report) {
    const qi = /丹成即服/.test(button.closest('.recipe')?.querySelector('.eff')?.textContent || '') ||
      ['zhuji', 'juqi'].includes(button.dataset.craft);
    const refining = page('#pillDebuff');
    const realm = realms.indexOf(page('#realmLabel')?.textContent.trim().split(/\s+/)[0]);
    const owns = id => page('#treeGrid button[data-tree="' + id + '"]')?.closest('.node')?.classList.contains('owned');
    const immunity = realm < 0 ? '' :
      realm < realms.indexOf('斗皇') && owns('meridian2') ? talents.get('meridian2') :
      realm < realms.indexOf('大斗师') && owns('meridian1') ? talents.get('meridian1') : '';
    const debuff = refining && !refining.hidden && !immunity;
    let wait = extra.waitRefine;
    let practise = extra.refineMode;
    if (wait && qi && debuff) {
      if (practise) {
        alchemyMode = 'cultivate';
        restoringRefineMode = true;
      }
      return report('等待药力炼化 ' + (page('#pillDebuffLeft')?.textContent.trim() || ''));
    }
    if (isRestoringRefineMode()) return report('药力已炼化，等待恢复挂机');
    if (extra.huntCores && button.disabled && /(?:魔|兽)核不足/.test(button.title)) {
      alchemyMode = 'explore';
      coreRecoveryUntil = performance.now() + 3500;
    }
    const name = pillName(button) || button.dataset.craft || button.dataset.craftFrugal;
    if (button.disabled) return report(name + ' · ' + craftShortage(button));
    if (performance.now() < nextCraftAt) return report(((name) + " · 等待丹炉冷却"));
    // 游戏按钮负责检查实际材料、冷却、成丹率和存档。
    button.click();
    attempts++;
    nextCraftAt = performance.now() + 1500;
    report(((name) + " · 已提交炼制"));
  }

  const storyToggle = control('story-enabled');
  const storyThreshold = control('story-threshold');
  storyToggle.checked = story.enabled;
  storyThreshold.value = story.threshold;
  function saveStorySettings() {
    try {
      localStorage.setItem(storyKey, JSON.stringify(story));
    } catch (error) {
      console.warn('剧情炼丹设置保存失败', error);
    }
    tick();
  }
  storyToggle.onchange = () => {
    story.enabled = storyToggle.checked;
    saveStorySettings();
  };
  storyThreshold.onchange = () => {
    const value = storyThreshold.valueAsNumber;
    if (Number.isFinite(value)) story.threshold = Math.min(100, Math.max(0, value));
    storyThreshold.value = story.threshold;
    saveStorySettings();
  };

  const challengeToggle = control('challenge-enabled');
  const challengeThreshold = control('challenge-threshold');
  challengeToggle.checked = challenge.enabled;
  challengeThreshold.value = challenge.threshold;
  challengeToggle.onchange = () => {
    challenge.enabled = challengeToggle.checked;
    saveRuntime('challenge', challenge.enabled);
    lastRound = '';
    tickChallenge();
  };
  challengeThreshold.onchange = () => {
    const value = challengeThreshold.valueAsNumber;
    if (Number.isFinite(value)) challenge.threshold = Math.min(100, Math.max(0, value));
    challengeThreshold.value = challenge.threshold;
    saveChallengeSettings();
  };
  const turnToggle = control('turn-enabled');
  const turnThreshold = control('turn-threshold');
  turnToggle.checked = challenge.turns;
  turnThreshold.value = challenge.outlook;
  turnToggle.onchange = () => {
    challenge.turns = turnToggle.checked;
    lastRound = '';
    saveChallengeSettings();
  };
  turnThreshold.onchange = () => {
    challenge.outlook = turnThreshold.value;
    saveChallengeSettings();
  };

  function saveChallengeSettings() {
    try {
      localStorage.setItem(challengeKey, JSON.stringify({
        threshold: challenge.threshold, turns: challenge.turns, outlook: challenge.outlook,
      }));
    } catch (error) {
      console.warn('自动剧情设置保存失败', error);
    }
    tickChallenge();
  }

  function getPreferredMode(buttons, order = [['gather', '采集'], ['explore', '历练']]) {
    for (const [id, name] of order) {
      const button = buttons.find(item => item.dataset.mode === id || item.textContent.trim() === name);
      if (button && !button.disabled && button.getAttribute('aria-disabled') !== 'true' &&
          !button.classList.contains('locked') && !button.classList.contains('feature-locked') &&
          !/解锁|锁定|未开放/.test(button.title || '')) return { id, name, button };
    }
    return null;
  }

  const modeToggle = control('mode-enabled');
  let lastModeAttempt = '';
  let nextModeAttemptAt = 0;
  let modeCycle = '';
  let previousMode = null;
  function isRestoringRefineMode() { return restoringRefineMode && previousMode !== null; }
  const acknowledgedUnlocks = new WeakSet();
  function acknowledgeModeUnlock(modal) {
    const title = modal.querySelector('#modalTitle')?.textContent.trim() || '';
    const unlock = /^解锁\s*[·•・:：]\s*(历练|采集|闭关)$/.exec(title);
    if (!unlock) return null;
    const actions = [...modal.querySelectorAll('#modalActions button[data-modal]')];
    if (actions.length !== 1) return null;
    const button = actions[0];
    if (button.disabled || button.textContent.trim() !== '知道了' || acknowledgedUnlocks.has(button)) return null;
    acknowledgedUnlocks.add(button);
    button.click();
    return unlock[1];
  }

  function tickMode() {
    if (paused) return setText('mode-status', '全部暂停中');
    const report = message => setText('mode-status', message);
    if(running&&(economic?.competing||economic?.batch))return report('游戏或傀儡正在自动炼丹，助手暂缓模式切换');
    const modal = page('#modalRoot');
    if (pendingSeclusion && modal && !modal.hidden) {
      const title = modal.querySelector('#modalTitle')?.textContent.trim();
      if (title === '确认闭关' && extra.autoSeclusion && running) {
        const accept = [...modal.querySelectorAll('#modalActions button')].find(b => b.textContent.trim() === '确认闭关');
        if (accept && !accept.disabled) { pendingSeclusion=false; accept.click(); nextEconomyAt=0; return report('已按收益策略进入闭关'); }
      } else pendingSeclusion=false;
    }
    if (modal && !modal.hidden && (modeToggle.checked || running || challenge.enabled)) {
      const unlock = acknowledgeModeUnlock(modal);
      if (unlock) return report('已确认解锁 · ' + unlock);
    }
    if (!modeToggle.checked && !alchemyMode && !previousMode) return report('已暂停');
    if (modal && !modal.hidden) return report('等待游戏弹窗关闭');
    const cycle = page('#cycleLabel')?.textContent.trim() || '';
    if (cycle !== modeCycle) {
      modeCycle = cycle;
      previousMode = null;
      restoringRefineMode = false;
      coreRecoveryUntil = 0;
      lastModeAttempt = '';
      nextModeAttemptAt = 0;
    }
    const segment = page('#modeSeg');
    const buttons = [...(segment?.querySelectorAll('button') || [])];
    const activeSelector = '.on, .active, .selected, [aria-pressed="true"], [aria-selected="true"]';
    const order = [['gather', '采集'], ['explore', '历练'], ['cultivate', '练功'], ['seclusion', '闭关']];
    if (alchemyMode && alchemyMode !== lastModeAttempt) nextModeAttemptAt = 0;
    const recovering = running && extra.huntCores && performance.now() < coreRecoveryUntil;
    const modeRequest = isRestoringRefineMode() && alchemyMode !== 'cultivate' ? '' :
      alchemyMode || (recovering ? 'explore' : '');
    const requested = order.find(([id]) => id === modeRequest);
    let target;
    if (requested) {
      target = getPreferredMode(buttons, [requested]);
      const current = getPreferredMode(buttons.filter(button => button.matches(activeSelector)), order);
      if (target && !previousMode && current?.id !== target.id) {
        previousMode = current || getPreferredMode(buttons);
      }
    } else if (previousMode) {
      target = modeToggle.checked ? getPreferredMode(buttons) :
        getPreferredMode(buttons, [[previousMode.id, previousMode.name]]);
      if (!target || target.button.matches(activeSelector)) {
        previousMode = null;
        restoringRefineMode = false;
      }
    } else if (modeToggle.checked) {
      target = getPreferredMode(buttons);
    }
    if (!target) {
      lastModeAttempt = '';
      return report('等待历练或采集解锁');
    }
    const active = target.button.matches('.on, .active, .selected, [aria-pressed="true"], [aria-selected="true"]');
    if (active) return report('当前模式 · ' + target.name);
    if (lastModeAttempt === target.id && performance.now() < nextModeAttemptAt) {
      return report('已请求切换 · ' + target.name);
    }
    lastModeAttempt = target.id;
    nextModeAttemptAt = performance.now() + 3000;
    if(target.id === 'seclusion') pendingSeclusion=true;
    if(running&&alchemyMode)lastEconomicModeAt=performance.now();
    target.button.click();
    nextEconomyAt=0;
    report('已请求切换 · ' + target.name);
  }

  modeToggle.checked = runtime.mode;
  modeToggle.onchange = () => {
    saveRuntime('mode', modeToggle.checked);
    lastModeAttempt = '';
    tickMode();
  };


  const tabs = ['alchemy', 'challenge', 'mode'];

  function showTab(name) {
    for (const tab of tabs) {
      control(tab + '-tab').setAttribute('aria-pressed', String(tab === name));
      control(tab + '-panel').hidden = tab !== name;
    }
  }

  for (const tab of tabs) {
    control(tab + '-tab').onclick = () => { showTab(tab); view.tab = tab; saveView(); };
  }
  for (const key of Object.keys(extra)) {
    const input = control(key);
    input.checked = extra[key];
    input.onchange = () => {
      extra[key] = input.checked;
      nextEconomyAt=0;nextSupportAt=0;nextUpgradeReview=0;
      try {
        localStorage.setItem(extraKey, JSON.stringify(extra));
      } catch (error) {
        console.warn('助手设置保存失败', error);
      }
      tick();
      tickMode();
      tickChallenge();
    };
  }
  function readJsonSetting(key, label) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      console.warn(label + '读取失败', error);
      return null;
    }
  }

  function writeJsonSetting(key, value, label) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(label + '保存失败', error);
    }
  }

  const breakConfig = {target: 2, chance: 60};
  const breakKey = 'xyidle-auto-alchemy:break-pills:v1';
  const breakStock = control('break-stock');
  const breakCraftRate = control('break-craft-rate');
  {
    const saved = readJsonSetting(breakKey, '突破丹设置');
    if (Number.isInteger(saved?.target) && saved.target >= 1 && saved.target <= 20) breakConfig.target = saved.target;
    if (Number.isFinite(saved?.chance) && saved.chance >= 0 && saved.chance <= 100) breakConfig.chance = saved.chance;
  }
  function syncBreakControls() {
    breakStock.value = breakConfig.target;
    breakCraftRate.value = breakConfig.chance;
  }
  syncBreakControls();
  breakStock.onchange = breakCraftRate.onchange = () => {
    if (Number.isFinite(breakStock.valueAsNumber)) breakConfig.target = Math.max(1, Math.min(20, Math.floor(breakStock.valueAsNumber)));
    if (Number.isFinite(breakCraftRate.valueAsNumber)) breakConfig.chance = Math.max(0, Math.min(100, breakCraftRate.valueAsNumber));
    syncBreakControls();
    writeJsonSetting(breakKey, breakConfig, '突破丹设置');
    tick();
  };

  const auctionPolicy = control('auction-policy');
  const merchantChance = control('merchant-chance');
  const merchantReserve = control('merchant-reserve');
  const tradeKey = 'xyidle-auto-alchemy:trade:v1';
  const trade = { auction:'auctionGiveup', chance:90, reserve:1 };
  {
    const saved = readJsonSetting(tradeKey, '商会和拍卖设置');
    if (['auctionGiveup','auctionLow','auctionBig'].includes(saved?.auction)) trade.auction = saved.auction;
    if (Number.isFinite(saved?.chance)) trade.chance = Math.max(0, Math.min(100, saved.chance));
    if (Number.isInteger(saved?.reserve)) trade.reserve = Math.max(0, saved.reserve);
  }
  auctionPolicy.value = trade.auction;
  merchantChance.value = trade.chance;
  merchantReserve.value = trade.reserve;
  auctionPolicy.onchange = merchantChance.onchange = merchantReserve.onchange = () => {
    trade.auction = auctionPolicy.value;
    if (Number.isFinite(merchantChance.valueAsNumber)) trade.chance = Math.max(0, Math.min(100, merchantChance.valueAsNumber));
    if (Number.isFinite(merchantReserve.valueAsNumber)) trade.reserve = Math.max(0, Math.floor(merchantReserve.valueAsNumber));
    merchantChance.value = trade.chance;
    merchantReserve.value = trade.reserve;
    writeJsonSetting(tradeKey, trade, '商会和拍卖设置');
    nextMerchantCheck = 0;
  };

  const residualChoice = control('residual-choice');
  const residualThreshold = control('residual-threshold');
  const residualOptions = ['direct', 'absorb', 'touch'];
  {
    const saved = readJsonSetting(residualKey, '异火残焰设置');
    if (residualOptions.includes(saved?.choice)) residualSettings.choice = saved.choice;
    if (Number.isFinite(saved?.threshold)) residualSettings.threshold = Math.min(100, Math.max(0, saved.threshold));
  }
  residualChoice.value = residualSettings.choice;
  residualThreshold.value = residualSettings.threshold;
  control('residual-limit').hidden = residualSettings.choice !== 'absorb';
  residualChoice.onchange = residualThreshold.onchange = () => {
    residualSettings.choice = residualChoice.value;
    const threshold = residualThreshold.valueAsNumber;
    if (Number.isFinite(threshold)) residualSettings.threshold = Math.min(100, Math.max(0, threshold));
    residualThreshold.value = residualSettings.threshold;
    control('residual-limit').hidden = residualSettings.choice !== 'absorb';
    writeJsonSetting(residualKey, residualSettings, '异火残焰设置');
    tickChallenge();
  };
  const gardenSetting = control('garden-threshold');
  const gardenKey = 'xyidle-auto-alchemy:garden-threshold';
  gardenSetting.value = 90;
  try {
    const saved = localStorage.getItem(gardenKey);
    if (saved !== null && Number.isFinite(Number(saved))) gardenSetting.value = Math.min(100, Math.max(0, Number(saved)));
  } catch (error) {
    console.warn('古药园门槛读取失败', error);
  }
  gardenSetting.onchange = () => {
    const value = Number.isFinite(gardenSetting.valueAsNumber) ? gardenSetting.valueAsNumber : 90;
    gardenSetting.value = Math.min(100, Math.max(0, value));
    try { localStorage.setItem(gardenKey, gardenSetting.value); }
    catch (error) { console.warn('古药园门槛保存失败', error); }
    tickChallenge();
  };
  const herbSetting = control('herb-outlook');
  try {
    const odds = localStorage.getItem('xyidle-auto-alchemy:herb-outlook');
    if (oddsLabels.includes(odds)) herbSetting.value = odds;
  } catch (error) {
    console.warn('奇遇门槛读取失败', error);
  }
  herbSetting.onchange = () => {
    try {
      localStorage.setItem('xyidle-auto-alchemy:herb-outlook', herbSetting.value);
    } catch (error) {
      console.warn('奇遇门槛保存失败', error);
    }
    tickChallenge();
  };


  const alchemyToggle = control('alchemy-enabled');
  alchemyToggle.checked = running;
  alchemyToggle.onchange = () => {
    running = alchemyToggle.checked;
    saveRuntime('alchemy', running);
    tick();
  };
  function updateSummary() {
    const events = ['pursuit','herbEvent','gardenEvent','residualEvent','auctionEvent','travelerEvent'].some(key => extra[key]);
    const count = [running, challenge.enabled, modeToggle.checked, events, extra.autoSquads||extra.unlockSquad||extra.unlockPuppet||extra.evolvePuppet||extra.autoGifts].filter(Boolean).length;
    setText('badge', paused ? '全部暂停' : count ? count + ' 项运行' : '待机');
    setText('pause-all', paused ? '恢复运行' : '全部暂停');
    control('pause-all').setAttribute('aria-pressed', String(paused));
  }
  control('pause-all').onclick = () => {
    paused = !paused;
    view.paused = paused;
    saveView();
    if (paused) { alchemyMode = ''; pendingSeclusion=false; }
    updateSummary();
    tick(); tickChallenge(); tickMode();
  };
  showTab(tabs.includes(view.tab) ? view.tab : 'alchemy');
  for (const [index, details] of [...ui.querySelectorAll('details')].entries()) {
    const id = 'details-' + index;
    if (typeof view[id] === 'boolean') details.open = view[id];
    details.addEventListener('toggle', () => { view[id] = details.open; saveView(); if(details.contains(control('autoUpgrade'))){nextUpgradeReview=0;nextEconomyAt=0;} });
  }
  const failures = new Map();
  function safely(name, task) {
    const failed = failures.get(name);
    if (failed && performance.now() < failed.retryAt) return;
    try { task(); failures.delete(name); }
    catch (error) {
      console.warn('萧炎助手 · ' + name, error);
      failures.set(name, {retryAt:performance.now() + 5000});
    }
  }
  let nextModeTick = 0;
  function schedule() {
    if (!host.isConnected) return;
    safely('炼丹', tick);
    safely('剧情与奇遇', tickChallenge);
    safely('小队与傀儡', tickSupport);
    if (performance.now() >= nextModeTick) {
      safely('挂机切换', tickMode);
      nextModeTick = performance.now() + 1000;
    }
    control('health').hidden = failures.size === 0;
    setText('health', failures.size ? [...failures.keys()].join('、') + '暂时异常，5 秒后重试；可先全部暂停。' : '');
    const delay=paused?1500:document.hidden?1000:(running||challenge.enabled||extra.pursuit?250:1000);
    setTimeout(schedule, delay);
  }
  schedule();
})();
