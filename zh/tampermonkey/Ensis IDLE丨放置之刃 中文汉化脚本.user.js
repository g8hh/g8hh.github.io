// ==UserScript==
// @name         Ensis IDLE丨放置之刃 中文汉化脚本
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  中文汉化脚本，安装即可用，带开关汉化的菜单（要在油猴菜单开关）
// @author       技术支持：麦子、JAR、小蓝、好阳光的小锅巴   翻译君：林雷丨LinLei_Baruch
// @match        https://cerbion.net/ensis-idle/
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // ================= 开关控制 =================
    const isEnabled = GM_getValue('translation_enabled', true);
    GM_registerMenuCommand(isEnabled ? "🟢 汉化已开启 (点击关闭)" : "🔴 汉化已关闭 (点击开启)", () => {
        GM_setValue('translation_enabled', !isEnabled);
        location.reload();
    });

    const isBgRunEnabled = GM_getValue('background_run_enabled', false);
    GM_registerMenuCommand(isBgRunEnabled ? "🟢 后台挂机已开启 (点击关闭)" : "🔴 后台挂机已关闭 (点击开启)", () => {
        GM_setValue('background_run_enabled', !isBgRunEnabled);
        location.reload();
    });

    // ================= 后台挂机注入 =================
    if (isBgRunEnabled) {
        // 1. 媒体播放法：通过播放极低音量的循环音频，欺骗浏览器保持后台活跃 (解决浏览器底层的节流休眠)
        const startBackgroundAudio = () => {
            if (window.__bgAudioStarted) return;
            const audio = new Audio('https://download.samplelib.com/mp3/sample-9s.mp3');
            audio.loop = true;
            audio.volume = 0.01; // 音量极低，不影响正常使用

            audio.play().then(() => {
                window.__bgAudioStarted = true;
                console.log("🟢 锅巴汉化：后台挂机音频已启动，浏览器防休眠已激活！");
            }).catch(() => {
                // 如果被浏览器自动播放策略拦截，静默等待用户交互
            });
        };

        // 尝试在页面加载时立即播放
        startBackgroundAudio();

        // 监听用户交互以绕过浏览器的自动播放限制（只要玩家点了一下页面，立刻启动挂机）
        const initAudioOnInteract = () => {
            startBackgroundAudio();
            if (window.__bgAudioStarted) {
                document.removeEventListener('click', initAudioOnInteract);
                document.removeEventListener('keydown', initAudioOnInteract);
            }
        };
        document.addEventListener('click', initAudioOnInteract);
        document.addEventListener('keydown', initAudioOnInteract);

        // 2. 页面可见性劫持：防止某些游戏自带的代码检测到切换标签页而自动暂停
        const bgScript = document.createElement('script');
        bgScript.textContent = `
            (function() {
                try {
                    Object.defineProperty(document, 'hidden', { get: () => false });
                    Object.defineProperty(document, 'webkitHidden', { get: () => false });
                    Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });

                    const events = ['visibilitychange', 'webkitvisibilitychange', 'blur', 'focus', 'pagehide'];
                    for (let ev of events) {
                        document.addEventListener(ev, e => e.stopImmediatePropagation(), true);
                        window.addEventListener(ev, e => e.stopImmediatePropagation(), true);
                    }
                    console.log("🟢 锅巴汉化：游戏防暂停劫持已激活！");
                } catch (e) {}
            })();
        `;
        if (document.head || document.documentElement) {
            (document.head || document.documentElement).appendChild(bgScript);
            bgScript.remove(); // 保持DOM整洁
        }
    }

    if (!isEnabled) {
        console.log("汉化注入器已关闭。");
        return;
    }

    // ================= 后台挂机注入 =================
    if (isBgRunEnabled) {
        const bgScript = document.createElement('script');
        bgScript.textContent = `
            (function() {
                try {
                    // 获取原生的 hidden 属性 getter
                    const hiddenGetter = Object.getOwnPropertyDescriptor(Document.prototype, 'hidden')?.get;

                    // 强制覆盖页面的可见性状态，欺骗游戏
                    Object.defineProperty(document, 'hidden', { get: () => false });
                    Object.defineProperty(document, 'webkitHidden', { get: () => false });
                    Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });

                    // 在捕获阶段拦截可见性变化和失焦事件
                    const events = ['visibilitychange', 'webkitvisibilitychange', 'blur', 'focus', 'pagehide'];
                    for (let ev of events) {
                        document.addEventListener(ev, e => e.stopImmediatePropagation(), true);
                        window.addEventListener(ev, e => e.stopImmediatePropagation(), true);
                    }

                    // 劫持 requestAnimationFrame，后台时降级为 setTimeout，防止游戏循环彻底停止
                    const originalRAF = window.requestAnimationFrame;
                    const originalCAF = window.cancelAnimationFrame;
                    window.requestAnimationFrame = function(cb) {
                        const isHidden = hiddenGetter ? hiddenGetter.call(document) : false;
                        if (isHidden) {
                            return setTimeout(() => cb(performance.now()), 1000 / 60);
                        } else {
                            return originalRAF(cb);
                        }
                    };
                    window.cancelAnimationFrame = function(id) {
                        clearTimeout(id);
                        originalCAF(id);
                    };
                    console.log("🟢 锅巴汉化：后台挂机防暂停模式已激活");
                } catch (e) {
                    console.error("后台挂机脚本注入失败:", e);
                }
            })();
        `;
        // 注入到页面环境中以绕过沙盒限制
        if (document.head || document.documentElement) {
            (document.head || document.documentElement).appendChild(bgScript);
            bgScript.remove(); // 保持DOM整洁
        }
    }

    if (!isEnabled) {
        console.log("汉化注入器已关闭。");
        return;
    }

    // ================= 字典数据 =================
    const cnItems = {

        //弹窗
        'Rebuilding Yourself': '重塑自身',
        'Even if your Clones are somewhat crude, they can help you build a new body for you much more efficiently. Doing it this way, is also very enlightening: you can immediately spot flaws in your designs and the way you shape the Ash.': '即便你的分身尚显粗糙，也能帮你高效得多重塑一副全新躯体。以这种方式蜕变，亦极具启悟意义：你能立刻发现自身设计中的缺陷，以及凝塑灰烬之力时存在的疏漏。',
        'Start Over': '重新开始',
        'Limits of your Mind': '心智局限',
        'Molding the Ash is second nature to you by now, you have done it time and time again. But creating body parts with just your mind is getting inefficient, so you decide to start creating secondary bodies, like Clones, of yourself to improve yourself further.': '如今凝塑灰烬对你已是本能，你早已反复践行无数次。但单凭心智塑造躯体部件的效率日渐低下，于是你决定创造属于自己的次级躯体，也就是分身，以此实现更进一步的自我蜕变。',
        'Start Cloning': '开始克隆',
        'First Obliteration': '初次湮灭',
        'Your first attempts were crude, faulty even, but you are slowly getting the hang of this. Forming the Ash using your mind is still a strange feeling, but you are getting more and more proficient at it. You decide to start from scratch, to create better body parts and generate even more Ash.': '你的初次尝试十分粗糙，甚至漏洞百出，但你正慢慢渐入佳境。仅凭意念凝塑灰烬依旧有种奇异的感觉，可你对此已然愈发熟练。你决定从头再来，打造更完美的躯体部件，凝练更多的灰烬。',
        'Start over': '重新开始',
        'Mysterious Structure': '神秘构筑物',
        'The giant structure has a strange allure, whatever it is, it seems to be completely distinct from the rest of the world. Something isn\'t quite right about it, but you can\'t quite make out what.': '这座巨型构筑物散发着奇异的吸引力，无论它究竟是什么，都与世间万物格格不入。这里透着一股莫名的违和感，却又说不清到底哪里不对劲。',
        'But you feel curious enough to investigate it further, maybe it can be of use to you?': '但强烈的好奇心驱使你想要深入探查一番，或许它能为你带来意想不到的收获？',
        'Investigate ???': '探索???',

        //Settings 设置
        'Return to Game': '返回游戏',
        'Settings': '设置',
        'Customize your experience, all settings are saved automatically to your device.': '自定义您的体验，所有设置会自动保存到您的设备。',
        'Number Notation': '计数法',
        'Standard': '标准',
        'Short': '简短',
        'Scientific': '科学',
        'Engineering': '工程',
        'Audio': '音频',
        'Sound Effects': '音效',
        'Music': '音乐',
        'Visual': '视觉',
        'Floating Numbers': '浮动数字',
        'Show damage numbers when clicking': '点击时显示伤害数字',
        'Theme': '主题',
        'Light': '浅色',
        'Dark': '深色',
        'System': '系统',
        'Confirmations': '确认提示',
        'Obliteration': '湮灭',
        'Show a confirmation dialog before Obliterating': '在湮灭前显示确认对话框',
        'Form Body': '重塑躯体',
        'Show a confirmation dialog before Forming Body': '在重塑躯体前显示确认对话框',
        'Savegame': '游戏存档',
        'Auto-Save Interval': '自动保存间隔',
        '1 min': '1分钟',
        '10 min': '10分钟',
        '1 hour': '1小时',
        'Save Now': '立即保存',
        'Export Save to Clipboard': '导出存档到剪贴板',
        'Import Save': '导入存档',
        'Danger Zone': '危险区域',
        'Reset Game Progress': '重置游戏进度',
        'Delete all game progress, irreversibly. Settings will remain.': '不可逆转地删除所有游戏进度。设置将保留。',
        'Wipe': '清除',
        'Reset Settings': '重置设置',
        'Restore all settings to default values, irreversibly. Game progress will remain.': '不可逆转地将所有设置恢复为默认值。游戏进度将保留。',
        'All settings are automatically saved to your device': '所有设置会自动保存到您的设备',
        'Reset': '重置',
        'Game saved!':'游戏已保存！',
        'Game saved': '游戏已保存',
        'Game saved manually':'游戏已手动保存',
        'Made with ♥ by': '（汉化：LinLei_Baruch丨林雷） 用心制作 ♥ 来自',
        'Support Ensis on ko-fi': '在 Ko-fi 上支持 Ensis',
        'Manual': '手动保存',
        'Export to Clipboard': '导出到剪贴板',
        'Download as .txt': '下载为 .txt 文件',
        'Import from text': '从文本导入',
        'Import from File': '从文件导入',
        'HP Display': '生命值显示',
        'Show HP as absolute values or percentage': '以数值或百分比显示生命值',
        'Fancy effects': '华丽特效',
        'Show fancy special effects like animated backgrounds and particles': '展示动态背景、粒子等精美特效',
        'Portal Jump': '传送跃迁',
        'Show a confirmation dialog before Portal Jump': '传送跃迁前弹出确认窗口',
        'Delete Item': '删除物品',
        'Show a confirmation dialog before deleting gear': '删除装备前弹出确认窗口',

        //About 关于
        'About': '关于',
        'Project attribution and metadata': '项目归属与元数据',
        'Creator': '创作者',
        'Inspiration': '灵感',
        'Icons': '图标',
        'Logo/Banner/Favicon': 'Logo/横幅/网站图标',
        'Material Icons': 'Material 图标',
        'AI Disclosure': 'AI 披露',
        'LLMs were used during development within the IDE workflow. No Story, Imagery or Audio was generated using generative AI.': '在 IDE 工作流开发期间使用了大语言模型。未使用生成式 AI 生成故事、图像或音频。',
        'Creation date': '创建日期',
        'February 19th 2026': '2026.2.19',
        'Supporters': '支持者',
        'Branding': '外观标识',
        'Ko-fi backers supporting the project! (': '赞助本项目的Ko-fi支持者！(',
        '✦ Soul Tier ✦': '✦ 灵魂赞助等级 ✦',
        '◆ Crystal Tier ◆': '◆ 水晶赞助等级 ◆',
        '- Ash Tier -': '- 灰烬赞助等级 -',
        'No supporters yet': '暂无支持者',
        'The game can be played fully offline in the browser, it leverages IndexedDB and LocalStorage so a modern Browser is required.': '这款游戏可在浏览器中完全离线游玩，游戏使用了 IndexedDB 和本地存储技术，因此需要使用现代浏览器运行。',
        'This project was created to explore and practice game development in a modern tech stack using React.': '本项目旨在探索并实践基于 React 现代技术栈的游戏开发。',

        //Statistics 统计
        'Upgrades & Training': '升级与训练',
        'Statistics': '统计',
        'Resources': '资源',
        'Highest Ash': '最高灰烬',
        'Total Clicks': '总点击次数',
        'Highest Runes':'最高符文',
        'Playtime': '游戏时长',
        'Total Playtime': '总游戏时长',
        'Time in Current Obliteration': '当前湮灭时长',
        'Time in Current Body': '当前重塑躯体时长',
        'Progression': '进度',
        'Total Obliterations': '总湮灭次数',
        'Highest Obliteration':'最高湮灭次数',
        'Bodies Formed': '已重塑躯体',
        'Highest Body Formed':'最高已重塑躯体',
        'Upgrades Bought': '已购买升级',
        'Highest Clones (Base)':'最高分身 (基础)',
        'Highest Clones (with Multipliers)':'最高分身 (含倍数)',
        'Highest Perk Points':'最高天赋点',
        'Exploration': '探索',
        'Explorations Completed': '已完成探索',
        'Nothing Events': '无事发生事件',
        'Area Completions Recorded': '记录的区域完成次数',
        'Buildings Built': '已建造建筑',
        'Time Spent Exploring': '探索耗时',
        'Time Spent Traveling': '旅行耗时',
        'Total Runes Found':'发现的符文总数',
        'Highest Runes found':'发现的最高符文数',
        'Highest Wood found':'发现的最高木材数',
        'Highest Stone found':'发现的最高石头数',
        'Highest Metal found':'发现的最高金属数',
        'Highest Crystal found':'发现的最高水晶数',
        'Current Body': '当前躯体',
        'Current Obliteration': '当前湮灭',
        'Started playing': '开始游戏时间',
        'Total Damage Dealt': '总造成伤害',
        'Total Damage Taken': '总受到伤害',
        'Total Souls': '总灵魂数量',
        'Total Vortex Essence Gained': '累计获得漩涡精华',
        'Total times Collected': '累计收集次数',
        'Current Portal': '当前传送门',
        'Enemies Killed': '击杀敌人数量',
        'Items Found': '拾取物品数量',
        'Highest Damage Dealt': '单次最高造成伤害',
        'Highest Damage Survived': '单次最高承受存活伤害',
        'Times Defeated': '战败次数',
        'Body Parts & Training': '躯体部件与修炼',
        'Portal Jumps': '传送跃迁次数',
        'Body Parts Bought': '已购买躯体部件',

        //Upgrades 升级
        'Realm': '领域',
        'This Ash can be formed into something...':'这份灰烬可以被塑造成某种东西……',
        'You are learning to shape the Ash, but there is more to discover.':'你正在学习塑造灰烬，但还有更多等待发现。',
        'Your body is taking shape, but it\'s not good enough...':'你的身体正在重塑，但还不够好…',
        'Your bodyless mind is adrift, Ash surrounds you...':'你失去躯体的意识在四处飘荡，灰烬环绕着你……',
        'The world seems to respond to your presence...':'世界似乎在回应你的存在…',
        'Body Parts': '躯体部位',
        'Improve your body to collect more Ash.': '强化你的躯体，收集更多灰烬。',
        '(from': '(来自',
        '/s': '/秒',
        'Obliterations': '湮灭',
        'OBLITERATION': '湮灭',
        'Formed Bodies': '重塑躯体',
        '% ASH': '% 灰烬',
        'Ash': '灰烬',
        'Tip: You can hold this, instead of clicking a lot!': '提示：您可以按住它，而不需要频繁点击！',
        'Tip: Hover over this button to collect!': '提示：将鼠标悬停在此按钮上即可收集！',
        'Runes': '符文',
        'Obliterate?':'湮灭？',
        'You will lose all your current Ash and Ash upgrades, but will be reborn stronger.':'你将失去当前所有的灰烬及灰烬升级，但重生后会变得更强。',
        'You will lose all your current Ash and Body Parts, but will be reborn stronger.':'你将失去当前所有灰烬与躯体器官，但会以更强的姿态重生。',
        'Upcoming Unlocks:':'即将解锁：',
        'Form Body?':'重塑躯体？',
        'This will wipe': '这将清除',
        'your Ash, Body Parts and Obliterations': '你的灰烬、躯体器官和湮灭',
        '! Clones, Trainings, Perks and later Features will persist.': '！克隆、训练、特权以及后续功能将被保留。',
        'The next Body Forming will unlock a':'下一次重塑躯体将解锁',
        'new Training':'一项新训练',
        'You\'ve unlocked all Trainings for now.':'您已解锁目前所有的训练。',
        'Cancel':'取消',
        'Confirm':'确认',
        'Auto-buy upgrades': '自动购买升级',
        'Next auto-upgrade buy:': '下一次自动购买升级:',
        'Upgrades': '升级',
        'MAX LEVEL': '满级',
        'Total:': '总计:',
        'TOTAL:': '总计:',
        'Buy': '购买',
        'Max': '最大',
        'Max All': '购买所有升级',
        'Buy upgrades to increase Ash production.': '购买升级以增加灰烬产量。',
        'COLLECT': '收集',
        'Offline Progress': '离线进度',
        'You were away for': '您离开了',
        'Your Laboratory is idle — you can start a new Research.': '你的实验室处于闲置状态——可以开始一项新的研究。',
        'Ash earned': '灰烬获得',
        'Perk Points': '天赋点',
        'Offline Runes':'离线符文',
        'Training Progress': '训练进度',
        'Materials earned':'获得的材料',
        'Progress +':'进度 +',
        'Continue':'继续',
        'Ashen Hand': '灰烬之手',
        'Increases Ash collection by': '每次点击使灰烬收集量增加',
        'per click.': '',
        'Aura':'光环',
        'Passively generates': '每秒被动生成',
        'Ash per second.': '灰烬。',
        'Ash per second': '灰烬。',
        'Skeleton': '骨骼',
        'Boosts all Ash production by': '将所有灰烬产量提升',
        'Organs': '器官',
        'Decrease cost of all Upgrades by': '所有升级的成本降低',
        ', cannot gain bonus levels.': '，无法获得额外等级。',
        'Muscles': '肌肉',
        'Increase Ash collection by': '增加灰烬收集量',
        'Skin': '皮肤',
        'Passively generate': '每秒被动生成',
        'of click value per second.': '的点击收益.',
        'Senses': '感官',
        'Increases base Ash collection from Ashen Hand by': '使来自灰烬之手的基础灰烬收集量增加',
        'Reflexes': '反射',
        'Each Muscle level increases total Ash production by': '每个肌肉等级使总灰烬产量增加',
        'Soul': '灵魂',
        'Increases max level of all other upgrades by 1.': '使所有其他升级的最高等级增加1。',
        'Instinct': '本能',
        'Increases base Ash production from your Aura by 8.': '使你的光环的基础灰烬产量增加8。',
        'Digestion': '消化',
        'Total upgrade levels boost Ash production by': '总升级等级使灰烬产量提升',
        'Accurate Memory': '精确记忆',
        'Keep 1 level of all other upgrades on Obliteration.': '保留“湮灭”上所有其他升级的1个等级。',
        'Intimidating Presence': '威慑气场',
        'Core Strength': '核心力量',
        'Further boost Ash production by': '进一步将灰烬产量提升',
        'Complex Nervous System': '复杂神经系统',
        'Grants 1 bonus level to every other upgrade, cannot gain bonus levels.': '为其他所有升级提供1个额外等级，无法获得额外等级。',
        'Void Resonator': '虚空共鸣器',
        'Reduces the cost of Obliteration by': '使湮灭的成本降低',
        'Shared Workload': '分担负重',
        'Increases Ash production by': '每创造一个分身，灰烬产量增加',
        'per Clone created.': '',
        'Corporeal Transference': '实体转移',
        'Retain 1 level of all other upgrades on Form Body.': '保留“重塑躯体”上所有其他升级的1级。',
        'Increases base Ash production from your Aura by': '提升光环的基础灰烬产出量',
        'Increases Instinct\'s Aura bonus by': '每提升 1 级本能等级，光环加成增加',
        'per Instinct level.': '',
        'Req: Obliteration': '需求：湮灭 ',
        'Auto-buy': '自动购买',
        'in:': '倒计时：',

        //Training 训练
        'Assign clones to other tasks or leave them idle here to generate points.':'将分身分配给其他任务，或者让它们在这里闲置以生成天赋点。',
        'Training': '训练',
        'Create ashen clones, allocate them to train for you. Idle clones create perk points.': '创造灰烬分身，分配它们为你训练。闲置的分身会产生天赋点。',
        'Refund': '返还升级',
        'Ashen Clones:': '灰烬分身:',
        'Creating ~': '正在创造 ~',
        'Creating': '正在创造 ',
        'Clones...': '个分身',
        'Clone...': '个分身',
        'Req:': '需求：',
        'Perk Point Generation': '天赋点生成',
        'idle clones are generating': '个闲置分身每秒产生',
        'idle': '',
        'Clones are generating': '个闲置分身正在每秒生成',
        'per second...': '…',
        'of a Perk Point': '天赋点',
        'Available': '可用',
        'Total': '总计',
        'Allocate:': '分配:',
        'ALL': '全部',
        'Recall': '召回',
        'Clones': '分身',
        'create clone':'创造分身',
        'Create Clone':'创造分身',
        'Perk Point Speed': '天赋点速度',
        'Automatic Cloning':'自动创造分身',
        'Your Clones are training everything simultaneously.':'你的分身正在同时训练一切。',
        'Increases the speed of creating perk points by 20%': '生成天赋点的速度提高20%',
        'Ash Production': '灰烬生成',
        'Increases total Ash production by 10%': '灰烬总产量增加10%',
        'Upgrade Bonus Levels': '升级奖励等级',
        'Grant 2% of each Upgrade level as bonus to that Upgrade': '将每个升级等级的2%作为加成赋予该升级',
        'Obliteration Cost Reduction': '湮灭成本降低',
        'Decreases the cost of obliteration by 10%': '降低10%的湮灭成本',
        'Upgrade Limit': '升级限制',
        'Increases the maximum level of all Ash Upgrades by 1 (except Soul)': '所有灰烬升级的最高等级提升1（灵魂除外）',
        'Cloning Cost Reduction': '分身成本降低',
        'Decreases Cost for new clones by 20%': '新分身成本降低20%',
        'Training Speed': '训练速度',
        'Increase the speed for training by 20%': '将训练速度提高20%',
        'Clones creating Clones': '分身创造分身',
        'Increase the total amount of Clones by 2.5% per level (compounding)': '每级增加2.5%的分身总数（复利）',
        'Cloning Speed': '分身速度',
        'Increases the speed of creating clones by 10%': '创造分身的速度提升10%',
        'Form Body Efficiency': '重塑躯体效率',
        'Decrease the amount of Clones needed to form a Body by 0.5%': '将重塑躯体所需的分身数量减少0.5%',
        'Perks': '天赋',
        'Unlock persistent upgrades that survive Obliteration': '解锁在湮灭后依然保留的永久升级',
        'Unlock persistent powers that survive Obliteration':'解锁可在湮灭后保留的永久能力',
        'Unlocked': '已获得',
        'Double your Ash production': '使你的灰烬产量翻倍',
        'Permanently produce 10000 Ash per second passively': '永久被动每秒产生10000灰烬',
        'Always retain 10 levels of Organs (stacks with other Boni)': '始终保留10级器官（与其他加成叠加）',
        'Decreases cloning cost by 90%': '分身成本降低90%',
        'Each training level increases Ash production by 1%': '每个训练等级使灰烬产量增加1%',
        'Double the bonus to 100% per Obliteration': '将每次湮灭的加成翻倍至100%',
        'Upgrade cost is halved': '升级成本减半',
        'Clones are automatically bought when affordable': '买得起时自动购买分身',
        'Each formed Body grants +200% Ash production': '每次重塑躯体将提供+200%灰烬产量',
        'You can Obliterate multiple times at once with enough Ash': '如果有足够的灰烬，你可以一次进行多次湮灭',
        'Unlock three new Upgrades': '解锁三个新升级',
        'Attempts to autobuy upgrades once every 10 seconds': '每10秒尝试自动购买一次升级',
        'Unspent Perk Points grant 1% to Ash production each': '每个未使用的天赋点提供1%的灰烬产量加成',
        'Reduce Clone cost scaling from 25% to 10% per level': '将分身成本递增幅度从每级25%降低至10%',
        'Raises the Obliteration bonus to the power of 1.5': '将湮灭加成提高至1.5次方',
        'Unlock the ability to explore your surroundings': '解锁探索周围环境的能力',
        'Rune Perks':'符文天赋',
        'Potent effects, unlocked during Exploration and unleashed with the power of Runes':'强大的效果，在探索中解锁，并借助符文的力量释放',
        'Autobuy uses Max All instead of +1 to all':'自动购买使用“购买所有升级”而不是“购买升级 +1”',
        'Buying Ash Upgrades does not spend Ash':'购买灰烬升级不消耗灰烬。',
        'Training time is raised to the power of 0.9':'训练时间提升至0.9次方',
        'Obliteration is free, automatic and does not reset anything. Triggers with auto-buy.':'湮灭是免费且自动的，并且不会重置任何内容。随自动购买触发。',
        'Cloning cost is raised to the power of 0.9':'分身成本提升至0.9次方',
        'Clones always work on all Trainings simultaneously':'分身始终同时在所有训练上工作',
        'Perk Point generation time is raised to the power of 0.9':'天赋点生成时间变为0.9次幂',
        'All Building levels decrease Training time by 5% each':'所有建筑等级各减少5%的训练时间',

        'Increases total Ash production by 5%': '灰烬总产出提升5%',
        'Grant 2% of each Body Part level as bonus to that Body Part': '每躯体部位等级的2%将作为该躯体部位额外加成',
        'Increases the maximum level of all Body Parts by 1 (except Soul)': '所有躯体部位等级上限+1（灵魂除外）',
        'Always retain 10 more levels of Organs': '器官等级永久多保留10级',
        'Body Part cost is halved': '躯体部位成本减半',
        'Increase Form Body Ash bonus from 20% to 30%': '重塑躯体灰烬加成从20%提升至30%',
        'Unlock the Void Resonator Body Part': '解锁虚空共鸣器躯体部位',
        'Attempts to autobuy Body parts once every 10 seconds': '每10秒自动尝试购买躯体部位',
        'Unlock the Shared Workload Body Part': '解锁分担负重躯体部位',
        'Unlock the Corporeal Transference Body Part': '解锁实体转移躯体部位',
        'Increase the effect of Organs to 10%': '器官效果提升至10%',
        'Corporeal Transference and Accurate Memory can gain bonus levels': '实体转移与精准记忆可获得额外等级加成',

        'Body Part Bonus Levels': '躯体部位额外等级',
        'Body Part Limit': '躯体部位等级上限',
        'Buying Body Parts does not spend Ash':'购买躯体部位无需消耗灰烬',

        //Exploration 探索
        'Exploration': '探索',
        'Fully explored.': '已完成探索该区域。（建筑、遗物已发现）',
        'You are here.': '你在这里。',
        'Click to travel here (': '点击旅行至此 (',
        'Click to fast travel': '点击快速旅行',
        'areas in': '个区域用时',
        'Exploring…': '探索中… 剩余',
        's remaining': ' 秒',
        'Traveling to': '正在前往',
        'Too far to travel.': '距离过远，无法前往。',
        'Venture into the unknown, beyond the Ash.': '踏入未知，前往灰烬之外。',
        'There is more to find here.': '这里还有更多东西可以发现。',
        'You completed this area.':'你完美探索了该区域。（建筑、遗物已发现并且遗物已满级）',
        'Unknown Area':'未知区域',
        'Current Location':'当前位置',
        'Discovery Progress:':'发现进度：',
        'You\'ve explored this area': '你已经探索该区域',
        'times': '次',
        'times.': '次。',
        ', reducing your exploration time by': '，使你的探索时间减少了',
        '(maxed out)': '(已达上限)',
        'Clones currently not exploring.': '分身当前未在探索。',
        'Clones are exploring this area...': '分身正在探索这个区域…',
        'Explore': '探索',
        'You feel like there is more to find here...': '你感觉这里还有更多值得探索的东西……',
        'It feels like you explored everything in this area.': '看起来你已经把这片区域探索得差不多了。',
        'You\'re trying to find a path to a distant point of interest...':'你正在寻找一条通往远处目标点的路径……',
        'You found a safe path to':'你找到了一条通往',
        '! You can now travel there, if you wish.':' 的安全路线！现在只要你愿意，就可以前往那里。',
        'storage is full, some was lost.': '存储空间已满，部分物品已丢失。',
        'Traveling': '旅行',
        'to': '至',

        'stone': '石材',
        'Stone': '石材',
        'metal':'金属',
        'Metal':'金属',
        'crystal':'水晶',
        'Crystal':'水晶',
        'wood':'木材',
        'Wood':'木材',

        'Mud Cavern': '泥浆洞穴',
        'A muddy, sprawling cave system with several small chambers.': '一个泥泞、四处延伸的洞穴系统，包含几个小洞室。',
        'Dead Forest':'死亡森林',
        'A sparse, lifeless forest, littered with branches and stumps, did the Ash cause this?':'一片稀疏、毫无生气的森林，到处散落着树枝和树桩，这是灰烬造成的吗？',
        'Ashen Camp':'灰烬营地',
        'Ashen Fields':'灰烬原野',
        'The heart of your operations. A vast field of nothing but Ash.':'你的行动核心。一片除了灰烬别无他物的广阔原野。',
        'Stone Wave Cliffs':'石浪悬崖',
        'Giant columnar joints tower against the sea of Ash, you feel like a great tragedy happened here, once.':'巨大的柱状节理屹立于灰烬之海前，你感觉这里曾经发生过一场巨大的悲剧。',
        'Lonely River':'孤独的河流',
        'A slow-moving, dark winding river cutting through the forest.':'一条缓慢流动的幽暗蜿蜒河流穿过森林。',
        'Silent Lake':'寂静之湖',
        'A mysterious lake at the end of the river, the water is dark and calm, no signs of life.':'位于河流尽头的神秘湖泊，湖水幽暗平静，没有任何生命迹象',
        'Crumbling Ruins':'崩塌遗迹',
        'Barely identifiable remains of what used to be a settlement or fortress, most walls have crumbled enough to be easily traversed.':'曾经的聚落或要塞留下的几乎无法辨认的遗迹，大部分墙壁已经坍塌，可以轻易穿行。',
        'Old Battleground':'古战场',
        'Place of a great battle, long ago. Rusted weaponry and crushed bones litter the area.':'很久以前的一场大战遗址。该地区到处散落着生锈的武器和碎裂的骨头。',
        'Mountainside Path':'山腰小路',
        'A narrow and dangerous path beyond the rocky cliffs, rocks and debris make the trail treacherous.':'一条位于岩石悬崖之外的狭窄险路，岩石和碎石使得这条小径危险重重。',
        'Frozen Mine':'冰封矿井',
        'A deep mine carved into the mountain, it\'s frozen over, but still accessible. You can see something glimmering inside.':'一座开凿在山中的深邃矿井，虽然已经结冰，但仍然可以进入。你能看到里面有东西在闪闪发光。',
        'Hidden Plateau':'隐秘高地',
        'A secluded section of the mountain, shrouded in mist. This place seems to have been used as a hideout once.':'山中一处僻静的区域，笼罩在迷雾之中。这里似乎曾经被用作藏身之处。',
        'Snowdrift Ridge':'积雪岭',
        'The plateau gives way to a cold, icy slope, leading down the mountain. The air is freezing and the crackling of ice is ever present.':'高原变成了一道寒冷结冰的斜坡，通向山下。空气冰冷刺骨，冰层碎裂的声响不绝于耳。',
        'Borean Woodland':'北风林地',
        'A dense pine forest, covered in ice and snow, and traces of magic litter the area.':'一片茂密的松林，被冰雪覆盖，这片区域到处散落着魔法的痕迹。',
        'Poison Marsh':'毒沼泽',
        'A murky swampland filled with poisonous flora and sharp rocks, it\'s extremely difficulty to navigate and you feel like you should not linger here for too long.':'一片充满有毒植物和尖锐岩石的幽暗沼泽地，这里极难穿行，让你感觉不应该在此逗留太久。',
        'Lush Valley':'葱郁山谷',
        'The sight is breathtaking, you still see traces of Ash, but this place is teeming with life, enormous trees, vibrant flowers and sprawling undergrowth.':'景色令人叹为观止，你依然能看到灰烬的痕迹，但这里生机盎然，到处是巨大的树木、鲜艳的花朵和蔓生的灌木丛。',
        'Cursed Shore':'诅咒海岸',
        'A desolate rocky beach, with several large shipwrecks scattered around. The ocean beyond is dark and calm, the Ash is still present here, even if less prominent.': '一片荒凉的岩石海滩，散布着几艘巨大的沉船残骸。远处的海洋黑暗而平静，灰烬依然存在于此，尽管没那么明显。',
        'Giant Structure': '巨型构筑物',
        'An impossibly large upright ring made out of Metal with embedded Crystals. It has weird, glowing engravings all over, but you have no idea what they mean. The air feels weird around this structure and no plant or even the wind seems to cross its perimeter.': '一座庞大得超乎常理的竖立圆环，由金属铸就，内嵌水晶。通体布满奇异的发光纹路，却无人知晓其含义。构筑物周遭的空气透着异样，草木不生，就连风也仿佛无法越过它的边界。',

        '. It\'s yours now.': '。现在它是你的了。',
        'Runes, a valuable find!': '符文，宝贵的发现！',
        'Runes, nice!': '符文，太棒了！',
        'Runes.': '符文。',
        'Runes!': '符文！',
        'Runes and pocket them.':'符文并将它们收入囊中。',
        'Runes and add them to your collection.':'符文，并将它们加入了你的收藏。',
        'Runes, nice! are yours now, after scouring the area.':'符文，真不错！在搜刮该区域后，现在归你所有了。',
        'Making sure to carefully scavenge the vicinity. Your efforts pay off as you discover':'确保仔细搜刮附近区域。你的努力得到了回报，你发现了',
        '. Not bad.':'。不错。',

        'Unique Events':'特殊事件',
        'Your most profound discoveries in this world.':'你在这个世界中最重大的发现。',
        'just now!':'刚刚！',
        'The expanse of the lake gives you a few ideas how to improve your Ash production.':'广阔的湖面给了你一些关于如何提高灰烬产量的启发。',
        'Ash Silo Unlocked':'灰烬筒仓已解锁',
        'One of the biggest and most luxurious buildings must have been a treasury, maybe building one yourself would be a good idea.':'最大、最豪华的建筑之一想必就是宝库，也许亲自建造一座是个好主意。',
        'Treasury Unlocked':'宝库已解锁',
        'Broken spears, torn armor and rusted swords are all that remain of a fierce battle. To avoid the same fate, you decide to set up a training ground to better prepare yourself and your Clones.':'折断的长矛、残破的盔甲和生锈的剑是一场激战留下的全部。为了避免遭遇同样的命运，你决定建立一个训练场，让你和你的分身做好更充分的准备。',
        'Training Grounds Unlocked':'训练场已解锁',
        'Nothing more than a crack in the mountain side, you fit through and discover a vein of ore, you could set up a mining shaft here.':'只不过是山腰上的一个裂缝，你穿过去后发现了一条矿脉，你可以在这里建立一个矿井。',
        'Mine Unlocked':'矿井已解锁',
        'Inside the icy cavern you find mineral veins that reflect light like a gem, you decide to set up a mining station here to gather these crystals.':'在冰冷的洞穴中，你发现了如宝石般反射着光芒的矿脉，你决定在这里建立一个采矿站来收集这些水晶。',
        'Crystal Mine Unlocked':'水晶矿井已解锁',
        'Some tools and materials were left behind and give you an idea how to improve building construction.':'一些遗留下来的工具和材料为你改进建筑施工提供了灵感。',
        'Workshop Unlocked':'建造工坊已解锁',
        'Scouting difficult terrain like this is exhausting; You decide to set up a dedicated building to help you prepare yourself and your Clones on your expeditions.':'侦察如此困难的地形令人筋疲力尽；你决定建造一座专门的建筑，来帮助你和你的分身为探险做好准备。',
        'Outrider Post Unlocked':'先遣哨所已解锁',
        'Making your way through the snow you suddenly find an enormous area of what used to be a research facility. Burnt books, broken equipment and faded magic circles are all that remain, you decided to try recreate the research and experiments in your base.':'在雪地中前行时，你突然发现了一大片曾经是研究设施的区域。烧毁的书籍、损坏的设备和褪色的魔法阵是仅存的一切，你决定尝试在你的基地中重现这些研究和实验。',
        'Laboratory Unlocked':'实验室已解锁',
        'This area of the Ashen Fields seems suitable for construction, you decide to set up a camp here.':'灰烬平原的这片区域似乎很适合建造，你决定在这里建立营地。',
        'Base Tab Unlocked':'基地选项卡已解锁',
        'This area was once a lush thicket, you ponder on ways to restore the forest and gather more wood for construction.':'这片区域曾经是一片茂密的灌木丛，你思考着恢复森林的方法，并收集更多木材用于建筑。',
        'Forestry Unlocked':'林场已解锁',
        'Following the winding river each time is tedious, you need some kind of vantage point, maybe you can build one.':'每次沿着蜿蜒的河流走太乏味了，你需要某种制高点，也许你可以建造一个。',
        'Watchtower Unlocked':'瞭望塔已解锁',
        'Although the cavern is very muddy, the walls seem to be made out of a very pristine stone, you make plans to gather it.':'虽然洞穴内泥泞不堪，但岩壁似乎由极为纯净的石料构成，你计划开采这些石料。',
        'Quarry Unlocked':'采石场已解锁',
        'The hexagonal rock formations are a tough terrain to conquer, it would be easier with more clones, you have some ideas how to improve your base.':'六边形岩层是一片难以攻克的险峻地形，拥有更多分身会让一切变得轻松许多，你已经有了一些完善基地的思路。',
        'Barracks Unlocked':'兵营已解锁',
        'Sawmill Unlocked':'锯木厂已解锁',
        'This swamp is impossible to get through, but there is a lot of wood here, maybe creating a path out of wood would help.':'这片沼泽根本无法通行，但这里木材资源丰富，或许用木材开辟一条道路会有所帮助。',
        'Smelter Unlocked': '熔炉已解锁',
        'Cutting through the thick plantlife is extremely difficult with your current set of tools, you decide to improve upon them.': '使用当前的这套工具砍穿茂密的植物极其困难，你决定对它们进行改进。',
        'Masonry Unlocked': '石匠屋已解锁',
        'The water has eroded the stones on the shore to such a degree that they seem unreal, you get inspired to improve your own stone processing.': '水流将岸边的石头侵蚀到了令人难以置信的程度，你受到启发，改进了自己的石材加工技术。',
        'Auto-Exploring Unlocked':'自动探索已解锁',
        'All these uncharted areas, countless relics and other hidden secrets take forever to explore. But your Clones could probably help you with that, even if they are not as efficient as yourself.':'所有这些未探索的区域、无数的遗迹以及其他隐藏的秘密，需要耗费无尽的时间去探索。但你的分身或许能在这方面帮助你，即使它们的效率不如你自己。',
        'Fast Travel Unlocked':'快速旅行已解锁',
        'Seems you will be traveling a lot between different areas, you make plans on how to get through explored regions faster.':'看来你将要在不同区域间频繁穿梭，你已经规划好了如何更快地穿越已探索区域。',
        'Strange Scroll': '奇异卷轴',
        'You come across a strange scroll, unlike most others it still contains a few legible words, hinting at something extremely important. You feel the urge to investigate this, it could be important to your operation. The only thing you can make out is something about a large settlement beyond a rocky cliff, is this referencing the Crumbling Ruins?': '你偶然发现了一卷奇异卷轴，与其他残破卷轴不同，其上仍留存着几处可辨认的文字，隐隐暗示着某件至关重要的事。你心生前去探查的念头，这或许对你的训练布局意义重大。你唯一能读懂的内容，只提及岩石悬崖之外有一处大型聚居地，这说的会不会是崩塌遗迹？',
        'Old War Map': '古老战图',
        'Scouring for hours through the ruins you finally find another piece of information: an old war map, showing a marked location, something of great importance near a place of great conflict.': '你在遗迹中搜寻数小时，终于又发现一条线索：一张古老战图，上面标注了一处地点，在一处古战场附近藏有极为重要的事物。',
        'Torn Insignias': '残破徽记',
        'Following the old war map has led you back here, and you notice some old, torn insignias resemble something circular, swirling, maybe water? You remember the Silent Lake being very circular and decide to check it out.': '循着古老战图的指引，你再次来到此地。你发现一些破旧残缺的徽记，纹路呈环形涡旋状，看上去像是水流的形态。你想起寂静之湖的轮廓恰好是正圆形，便决定前去一探究竟。',
        'Waterlogged Journal': '浸水日志',
        'Just as you thought, this was just a waste of time, you find a barely intact journal, soaked in water and mud, but you can clearly make out a symbol on the back that reminds you of the research institute you came across once...': '果不其然，这次探寻纯属白费功夫。你找到了一本残破不堪的日志，被泥水浸泡得湿透，但封面背面有一个清晰的印记，让你想起曾经偶遇过的那座实验室……',
        'Hidden Room': '隐秘密室',
        'You finally find your way back to the research facility, and after exploring it again for more information you find a hidden room behind a bookshelf, with a few notes about a far away region in the south west with vibrant plant life.': '你终于重返这座实验室，再次四处搜寻线索后，在书架后方发现了一间隐秘密室。里面留有几则手记，记载着西南方向一处遥远地域，那里草木繁盛、生机盎然。',
        'Destroyed Mural': '破损壁画',
        'Using the notes of the research facility, you end up following a hidden trail through the thick vegetation of the valley, after what seems to be hours, you finally find a clearing with a half destroyed stone mural. What little is left depicts something like a cage, and ships, sailing somewhere.': '你依照研究所留下的手记，沿着山谷茂密植被中的隐秘小径前行。历经数小时跋涉后，终于在一处空地发现了一幅损毁过半的石质壁画。残存的画面依稀描绘出类似牢笼的轮廓，还有几艘船只正驶向远方。',
        'Giant Structure near the Old Battleground': '古战场旁的巨型建筑',
        'You never walked this long along the coast, but you finally see it in the distance, a giant structure emerging at the edge of the continent, but it must be right where the Old Battleground is, there must be a way to reach it!': '你从未沿着海岸走这么远的路，终于在远方望见了目标——一座巨型建筑伫立在大陆尽头，而它的位置恰好就在古战场所在之处，一定有办法能够抵达那里！',
        'Jeweler Unlocked': '珠宝匠已解锁',
        'Around the structure are various Crystals cut into peculiar shapes, a similar process could be useful to improve the production of Crystals.': '构筑物四周散落着各式切割成奇特造型的水晶，效仿这种工艺或许能提升水晶的产出效率。',
        '??? Tab Unlocked': '??? 标签页已解锁',
        'You have spend quite some time around this enormous structure, and you have the feeling that there is more to it, and decide to investigate it further.': '你已在这座巨型构筑物周边逗留许久，隐约察觉到它另有玄机，于是决定进一步深入探查。',

        //Base 基地
        'Base':'基地',
        'Construct and upgrade structures to improve your base.': '建造并升级建筑来提升你的基地。',
        'Buildings': '建筑',
        'No effect yet':'还没有效果',
        'Effect:': '效果：',
        'MAXED':'已满级',
        'At level': '下个等级',
        'Cost:':'成本：',
        'Build time': '建造时间',
        'Building…': '正在建造中…',
        'remaining': '剩余用时',
        'Not enough Materials':'材料不足',
        'Auto Exploration enabled':'自动探索已启用',
        'Start building your base...':'开始建造你的基地...',
        'Atop a smooth hill, with a lot of space to build, you decide to set up your base of operations. Looking around, all you can see are the neverending dunes of Ash, this world is certainly difficult to explore, but constructing buildings will make it easier.':'在一座平缓的山丘顶上，有着充足的建造空间，你决定建立你的行动基地。环顾四周，你所能看到的只有无尽的灰烬沙丘，这个世界无疑很难探索，但建造建筑会使这一切变得容易些。',
        'Base Name':'基地名称',
        'Establish Base':'建立基地',
        'Change the name of your base and home area on the map.':'在地图上更改你的基地和家园区域的名称。',
        'Rename':'重新命名',
        'Saved!': '已保存！',

        'Fort': '堡垒',
        'Your headquarters, built amidst the Ash. It increases your capabilities to expand.': '你的总部，建于灰烬之中。它提升了你的扩张能力。',
        'Barracks': '兵营',
        'Trains your Clones more efficiently, reducing the Ash cost of creating new Clones.': '更高效地训练你的分身，降低创造新分身所需的灰烬成本。',
        'Watchtower':'瞭望塔',
        'A tall vantage point that improves scouting efficiency, reducing Travel time.':'一个高处的观察点，可提高侦察效率，缩短旅行时间。',
        'Wood Pile': '木材堆',
        'Neatly stacked collection of Wood for building, upgrading allows you to store more Wood.': '整齐堆放的建筑用木材，升级可让你储存更多木材。',
        'Forestry': '林场',
        'Harvest and replant trees to gather Wood.': '砍伐并重新种植树木以收集木材。',
        'Stone Depot': '石材仓库',
        'A sizable pile of Stone for construction, upgrading increases your Stone storage capacity.': '大量用于建筑的石材，升级可提升你的石材储存容量。',
        'Quarry': '采石场',
        'A suitable spot to gather Stone for construction.': '适合采集建筑用石材的地点。',
        'Metal Storage': '金属仓库',
        'Carefully organized section for Metal parts, upgrading increases your Metal storage capacity.': '精心整理的金属零件存放区，升级可提升你的金属储存容量。',
        'Ash Silo':'灰烬筒仓',
        'Store Ash and improve your Ash production by optimizing logistics.':'储存灰烬，并通过优化物流来提高灰烬产量。',
        'Mine': '矿井',
        'A narrow shaft leading into the Mountain that yields a lot of Metal ore': '通向山脉深处的狭窄竖井，出产大量金属矿石。',
        'Crystal Vault': '水晶仓库',
        'A secured area to store all your Crystals in.': '一个用于存放你所有水晶的安全区域。',
        'Crystal Mine': '水晶矿井',
        'Extract valuable crystals to enhance your resources and capabilities.': '开采珍贵的水晶以增强你的资源和能力。',
        'Treasury': '宝库',
        'Store your Runes and let Clones help collect more. Ensuring you always collect more Runes if you find some.': '存放你的符文，让分身帮忙收集更多。确保你在找到符文时总是能收集得更多。',
        'Training Grounds': '训练场',
        'Let your clones train more effectively, increasing the training speed.': '让你的分身更高效地训练，提升训练速度。',
        'Construction Workshop': '建造工坊',
        'Special tools, prepared materials and everything else you need to improve the speed of constructing buildings.': '特殊工具、预备材料以及提升建筑建造速度所需的一切。',
        'Outrider Post': '先遣哨所',
        'Your Clones assemble here to plan and execute expeditions to distant places. This enables auto exploration.': '你的分身在此集结，计划并执行前往遥远之地的探险。这将启用自动探索。',
        'Laboratory':'实验室',
        'Study and research new ways to improve your capabilities. Each level increases research speed.':'学习和研究提升能力的新方法。每一级都会提高研究速度。',
        'Sawmill':'锯木厂',
        'Metal saws, axes and sawblades can vastly accelerate your Wood production.':'金属锯、斧头和锯片能大幅加快你的木材生产。',
        'Masonry': '石匠屋',
        'Using advanced techniques you can shape Stone extremely efficiently and precisely with custom made chisel heads, cut from pure Crystal.': '使用先进的技术，你可以使用由纯水晶切割而成的定制凿头，极其高效且精准地加工石头。',
        'Smelter': '熔炉',
        'Using the best wood as fuel will allow you to create the purest and most durable Metal parts.': '使用最好的木材作为燃料，将使你能够制造出最纯净、最耐用的金属部件。',
        'Phylactery Hall': '护魂殿堂',
        'A pristine hall dedicated to the study and display of your Relics. It will grant you the ability to benefit more from certain Relics.': '一座精致肃穆的殿堂，用于研究与陈列你的遗物。它能让你从特定遗物中获得更高收益。',
        'to selected Relic': '所选遗物效果提升',
        'Jeweler': '珠宝匠',
        'With the right tools and your best sharpening Stones you can polish your Crystals to perfection in a more efficient way.': '借助合适的工具与精良的磨石，你可以更高效地将水晶打磨至完美品质。',

        'Relics': '遗物',
        'Collecting items increases your knowledge and morale, boosting your efficiency.': '收集物品会增加你的知识和士气，从而提升你的效率。',
        'Completed Collections:': '已完成的收藏: ',
        'Completion bonus:': '完成奖励:',
        'collected': '已收集',
        'found': '已发现',
        'Maxed Relics:': '满级遗物: ',
        'Not yet discovered.':'尚未发现。',
        'Max all Relics in this set for a reward!':'将此收藏内的所有遗物升至满级即可获得奖励！',
        'Peculiar Remnants': '奇异残骸',
        'Strange bones and fragments found among the Ashen Fields.': '在灰烬平原中发现的奇怪骨骼与碎片。',
        'Gnarly Bone': '扭曲的骨头',
        '+5% Ash production': '+5% 灰烬产量',
        'Odd Skull': '古怪的头骨',
        '-1% Upgrade cost': '-1% 升级成本',
        'Sharpened Splinter': '锋利的骨片',
        '-1% Obliteration cost': '-1% 湮灭成本',
        'Gilded Collarbone': '镀金锁骨',
        '+1% Upgrade bonus levels': '+1% 升级加成等级',
        'Forest Curios': '森林奇物',
        'The Dead Forest bears a lot of curiosities, some worth studying.': '死亡森林孕育了许多奇物，其中一些值得研究。',
        'Ashen Leaf': '灰烬之叶',
        '+5% Perk Point speed': '+5% 技能点获取速度',
        'Crystalized Berry': '结晶浆果',
        '+1 Bonus level on all Trainings': '+1 所有训练奖励等级',
        'Petrified Twig': '石化树枝',
        '-2% Training time': '-2% 训练时间',
        'Obscure Objects': '神秘物品',
        'A handful of very strange trinkets from the Stone Wave Cliffs.': '一些来自石浪悬崖的非常奇怪的小饰品。',
        'Shiny Rock': '闪亮岩石',
        '-1% Travel time': '-1% 旅行时间',
        'Golden Ink Bottle': '金色墨水瓶',
        '+3% Runes found': '+3% 发现的符文',
        'Ancient Lamp': '古老提灯',
        '+2% Materials found': '+2% 发现的材料',
        'A collarbone wrapped in thin strips of tarnished gold leaf. Someone valued this once.': '一根包裹着暗淡金箔细条的锁骨。曾经有人很珍视它。',
        'A long sliver of bone ground to a fine point. Crude but effective.': '一根磨得极尖的长条碎骨。粗糙但有效。',
        'A perfectly preserved leaf, covered in a fine layer of Ash. How did it stay so intact?': '一片保存完好的树叶，表面覆盖着一层薄薄的灰烬。它是如何保持得如此完整的？',
        'A skull with too many cavities. Hard to tell what creature it belonged to.': '一个布满空洞的头骨。很难分辨它属于什么生物。',
        'A small, smooth rock that inspires hope, you kind of want to name it.': '一块小巧光滑的石头，能带来希望，你都有点想给它起个名字了。',
        'A twisted, warped bone of unknown origin. Still surprisingly sturdy.': '一根扭曲变形且来历不明的骨头。依然出奇地坚固。',
        'Nearly perfect straight and an arms length, this twig could almost be used as a weapon.': '几乎笔直且有一臂长，这根树枝简直可以当作武器。',
        'Perfectly round, glossy and hard like a gem, this berry is an odd find even in the Dead Forest.': '浑圆、光滑且坚如宝石，即使在死亡森林中，这颗浆果也是个奇特的发现。',
        'Though it\'s light faded, you can tell this lamp was masterfully crafted.': '尽管光芒已经黯淡，你仍能看出这盏灯的工艺极为精湛。',
        'Very old and completely empty, this small bottle with intricate golden patterns once contained an inky substance.': '十分古老且空空如也，这个带有复杂金色图案的小瓶子曾装过某种墨黑色的物质。',
        'River Trinkets': '河流饰品',
        'The River is full of oddities, but some are more interesting than others.': '河里充满了稀奇古怪的东西，但有些比其他的更有趣。',
        'Perfect Pebble': '完美鹅卵石',
        'Small yet a perfectly round pebble, polished to perfection by the river\'s flow.': '一颗虽小却十分圆润的鹅卵石，被河水打磨得完美无瑕。',
        '+10% Ash production per 1000 Clone': '每 1000 个分身 +10% 灰烬产量',
        'Rusty Ring': '生锈的戒指',
        'Barely holding together, this oxidized ring has seen better days, you wonder how it ended up in the river.': '几乎快要碎裂，这枚氧化的戒指也曾有过光辉岁月，你很好奇它是怎么落入河中的。',
        '-3% Clone cost': '-3%分身成本',
        'Fancy Feather': '华丽的羽毛',
        'This is no ordinary feather, whatever being this is from it must be both large and majestic, the colors are mesmerizing.': '这不是普通的羽毛，不管它来自什么生物，那个生物一定既庞大又威严，这色彩令人着迷。',
        '+1% Total clones': '+1%总分身',
        'Artifacts of the Old': '旧日遗物',
        'Scavenging in the Crumbling Ruins has unearthed some truly impressive items.': '在摇摇欲坠的废墟中拾荒，发掘出了一些真正令人惊叹的物品。',
        'Delicate Chisel': '精致的凿子',
        'Gorgeous designs are etched into this chisel, this was not a tool for precision and art.': '这把凿子上刻有华丽的图案，这不是一件为了精密与艺术而生的工具。',
        '-1% Building material cost': '-1% 建筑材料消耗',
        'Ornate Mold': '华丽的模具',
        'This piece of an old mold not just looks impressive, but it\'s precision is unmatched, no rough edges or imperfections anywhere.': '这件旧模具不仅看起来令人惊叹，而且其精度更是无与伦比，没有任何粗糙的边缘或瑕疵。',
        '+5% Resource production': '+5% 资源产量',
        'Forgotten Necklace': '被遗忘的项链',
        'Adorned with some sort of gem, this piece of jewelry is still in good shape and beautiful to behold.': '这件首饰上装饰着某种宝石，依然保存完好，美丽动人。',
        'Triskelion Key': '三螺旋钥匙',
        'A somewhat worn key with a triskelion symbol on the handle, it emanates an aura of importance.': '一把略显磨损的钥匙，手柄上带有三螺旋符号，散发着非凡的气息。',
        '+0.5% chance for extra relic drop': '+0.5% 额外遗物掉落几率',
        'Advanced Tools': '高级工具',
        'Various equipment that has been used in the Ice Mine in the past, examining them could improve your own.': '过去在冰矿中曾使用过的各种设备，研究它们可以改进你自己的设备。',
        'Old Axe': '旧斧头',
        'An Axe that was probably used for preparing wood for the beams and supports inside the mine.': '一把可能曾用于处理木材，以制作矿井内横梁和支撑物的斧头。',
        '+3% Wood production': '+3% 木材产量',
        'Broken Shovel': '破损的铲子',
        'If the blade was still attached to the handle, this would be a perfectly good shovel to unearth all kinds of things with.': '如果铲头还连在铲柄上，这会是一把用来挖掘各种东西的完美铲子。',
        '+3% Stone production': '+3% 石材产量',
        'Splintered Pickaxe': '碎裂的镐',
        'Some parts of the mountain must have brought this pickaxe to its end, very little remains of this once sturdy tool.': '大山的某些部分肯定让这把镐迎来了它的终结，这把曾经坚固的工具如今已所剩无几。',
        '+2% Metal production': '+2% 金属产量',
        'Crystal Shard': '水晶碎片',
        'This piece of a crystal seems to have been shaped in some way or form, like it was used to be embedded into something.': '这块水晶似乎被以某种方式或形态塑造过，就像曾经被用来镶嵌在某物中一样。',
        '+1% Crystal production': '+1% 水晶产量',
        'Mystical': '神秘',
        'A bunch of wonderous things found in the Borean Woodlands, each brimming with old magic.': '在北风林地发现的一堆奇妙物品，每一件都蕴含着古老的魔法。',
        'Quill of the Scribe': '抄写员的羽毛笔',
        'This old piece of writing equipment was used quite a lot, you can almost feel the weight of knowledge it helped put to paper.': '这件古老的书写工具曾被频繁使用，你几乎能感受到它所写下的知识的分量。',
        '-1% Research time': '-1% 研究时间',
        'Strange Tome': '奇异典籍',
        'No markings, no title, from the outside it just looks like a regular old book, but it contains vast amounts of arcane texts, most of it unintelligible, sadly.': '没有标记，没有书名，从外面看它只是一本普通的旧书，但里面却包含大量奥术文本，遗憾的是，其中大部分都无法理解。',
        '-1% Research cost': '-1% 研究成本',
        'Brass Scales': '黄铜天平',
        'One of the few remaining flasks that haven\'t been shattered or severely cracked. The liquid inside is long gone, but coloration indicates it wasn\'t just water.': '少数未被粉碎或严重开裂的烧瓶之一。里面的液体早已干涸，但残留的颜色表明它装的不仅仅是水。',
        '+2% Treasury effect': '+2% 宝库效果',
        'Coastal Loot':'海岸战利品',
        'A bunch of shiny treasure washed up on the Cursed Shore.':'一堆闪闪发光的宝藏被冲上了灰烬海岸。',
        '+2% Resource production': '+2% 资源产量',
        'Carpenter\'s Square': '木工角尺',
        'This must have been for measuring and precisely aligning construction materials. Not in perfect shape, but this could prove useful.': '这一定是用来测量和精确对齐建筑材料的。虽然状态不佳，但这可能会派上用场。',
        '-2% Building time': '-2% 建造时间',
        'Earthen Enigmas': '大地之谜',
        'A few very mysterious items found deep inside the Mud Caves.': '在泥土洞穴深处发现的一些非常神秘的物品。',
        'Spiral Root': '螺旋根',
        'A twisted root that looks like a helix, a prime example of how strange and interesting trees can be.': '一根状似螺旋的扭曲树根，完美展现了树木可以有多么奇特和有趣。',
        '+1 extra Wood': '+1 额外木材',
        'Glowing Mushroom': '发光蘑菇',
        'Bioluminescent fungi growing directly on a few rocks, the rocks must contain a lot of minerals to support this kind of growth.': '直接生长在一些岩石上的生物发光真菌，这些岩石必定含有大量矿物质，才能维持这种生长。',
        '+1 extra Stone': '+1 额外石头',
        'Triskelion Emblem': '三螺旋徽章',
        'A somewhat worn emblem with a triskelion symbol, it emanates an aura of importance.': '一枚带有三螺旋符号、略显磨损的徽章，散发出一种非同寻常的气息。',
        'Pearl': '珍珠',
        'A shiny, pitch black pearl, not sure how it ended up here on the shore. It serves as a good luck charm.': '一颗闪亮的漆黑珍珠，不知道它是怎么落在这片海岸上的。它可作为幸运符使用。',
        '+1 Extra Runes': '+1 额外符文',
        'New Rune Perk unlocked!':'新符文天赋已解锁！',

        'Ash production': '灰烬产量',
        'Cloning cost': '分身成本',
        'Construction time': '建造时间',
        'Exploration time': '探索时间',
        'Research speed': '研究速度',
        'Training speed': '训练速度',
        'Travel time': '旅行时间',
        'dropped Runes': '掉落的符文',
        'production': '产量',
        'Building Maxlevel:': '建筑最大等级：',
        'Crystal': '水晶',
        'Metal': '金属',
        'Notifications alt+T': '通知（快捷键 Alt+T）',
        'Stone': '石材',
        'Wood': '木材',

        '-2% Body Part cost': '躯体部位成本减少2%',
        '+1% Body Part bonus levels': '躯体部位额外等级提升1%',
        'Building: Phylactery Hall': '建筑：护魂殿堂',
        'Phylactery Focus:': '护魂聚焦：',
        'No relic selected!': '未选择任何遗物！',
        'Click to focus Phylactery Hall on this relic.': '点击将护魂殿堂聚焦到此遗物。',
        'Boosted': '已增幅',

        'RETURN': '返回',
        'Rune Perk: Auto Obliteration': '符文天赋：自动湮灭',
        'Rune Perk: Autobuy Max': '自动拉满购买',
        'Rune Perk: Buildings Improve Training': '建筑增幅训练效率',
        'Rune Perk: Cloning Cost Reduction': '分身成本减免',
        'Rune Perk: Free Body Parts': '免费躯体部位',
        'Rune Perk: Perk Point Time Reduction': '天赋点产出提速',
        'Rune Perk: Simultaneous Training': '同步修炼',
        'Rune Perk: Training Time Reduction': '训练时间缩减',

        //Research 研究
        'Build the Laboratory to begin researching.': '建造实验室以开启研究。',
        'Locked': '已锁定',
        'Research':'研究',
        'Use the inert magical power of your Runes to study, experiment, and develop enhancements to your operations.': '利用符文的惰性魔力进行研究、实验，并开发对你运营的强化。',
        'Duration:': '研究用时：',
        'Researching:':'研究中：',
        'Researching…':'研究中……',
        'Start Research': '开始研究',
        'Cancel Research': '取消研究',
        'Not enough Runes. Need': '符文不足，需要',
        'Lv': '等级',
        's':'秒',
        'Cancel the current research first.':'请先取消当前的研究。',
        'research speed from Laboratory level': '来自实验室等级的研究速度 当前实验室等级：',
        'Structural Analysis of Ash': '灰烬的结构分析',
        'Research your most basic Resource to increase its production.': '研究你最基础的资源以提高其产量。',
        'Optimized Topology': '优化拓扑',
        'Experiment with different ways to arrange Ash more efficiently, reducing the cost of Upgrades.': '尝试以更高效的不同方式排列灰烬，从而降低升级成本。',
        'Production Acceleration': '生产加速',
        'Work on methods to increase the rate of production of your buildings.': '致力于寻找提高建筑生产率的方法。',
        'Local Surveying': '局部测绘',
        'Map out and catalog every point of interest and details of the terrain to reduce the time it takes to explore.': '绘制地图并记录每一个兴趣点及地形细节，以减少探索所需的时间。',
        'Construction Streamlining': '简化建造',
        'Parallelize workflows and carefully coordinate building projects to decrease the time it takes to finish construction.': '并行化工作流程并仔细协调建筑项目，以减少完成建造所需的时间。',
        'Rune Synthesis': '符文合成',
        'With enough Runes you can surely discover a way to create more, allowing you to passively produce them. The production rate is based on the highest amount of Runes you ever found.': '拥有足够的符文，你一定能发现创造更多符文的方法，让你能够被动地生产它们。生产速率取决于你曾发现过的符文最高数量。',
        'Experiment with different ways to arrange Ash more efficiently, reducing the cost of Body Parts.': '尝试以不同方式更高效调配灰烬，降低躯体部位的升级消耗。',

        //Portal 传送门
        'A mysterious structure, what could be its purpose?': '一座神秘的构筑物，它究竟有何用途？',
        'The giant structure is powered by Rune infused Crystals': '这座巨型构筑物由灌注符文的水晶供能',
        'Whatever this structure may have been, it seems completely destroyed. It would be a good idea to look around this place and find out more.':'无论这座建筑曾经是什么模样，如今已然彻底损毁。不妨在此四处探查，挖掘更多线索。',
        'Step':'阶段',
        'Initial Survey':'初步勘察',
        'Investigate':'调查探索',
        'Time depends on Exploration speed.':'耗时取决于探索速度。',
        'Investigating…': '调查中……',
        'Getting closer and looking around the Debris, you spot countless parts that have been shattered and broken off from the main structure. If you can find and collect the broken parts you might be able to understand what all of this was and how it got destroyed this severely.': '走近并环顾这片残骸，你发现无数从主体结构上碎裂脱落的部件。若能找到并收集这些残碎构件，或许就能弄清这里原本是什么，以及为何会损毁得如此彻底。',
        'Search': '搜寻',
        'Broken Parts': '残破构件',
        'Collecting broken parts...': '正在收集残破构件……',
        'You\'ve collected most of the pieces, some are almost intact and seem to be infused with Runes, while others look they have been burst apart. You could try forging replacement parts out of the Metal you found in the mountains.': '你已收集到大部分构件，部分几乎完好无损，似乎还灌注了符文，而另一些则像是被炸裂开来。你可以尝试用在山中找到的金属锻造替换部件。',
        'Forge': '锻造',
        'Part Replacement': '部件替换',
        'Casting and Smelting replacement parts...': '正在铸造熔炼替换部件……',
        'Infusion': '符文灌注',
        'The quality of the replacement parts is not on par with the originals, but it should do the trick, now you need to replicate their infusions, which could take a while... and a lot of Runes.': '替换部件的品质不及原版，但勉强可以使用。现在你需要复刻其上的符文灌注效果，这会耗费不少时间……以及大量符文。',
        'Infuse Parts': '灌注部件',
        'Infusing parts...': '正在灌注部件……',
        'After countless attempts and a great number of spent Runes, you finally manage to infuse the parts. Now you have to find a way to assemble it back together and connect all the parts.': '经过无数次尝试并消耗大量符文后，你终于成功完成了部件灌注。接下来你需要想办法将所有部件重新组装拼接起来。',
        'Part Assembly': '部件组装',
        'Replace Parts': '更换部件',
        'Replacing broken parts...': '正在更换破损部件……',
        'Crystals': '水晶',
        'Cut Crystals': '切割水晶',
        'Having placed all the replacement parts where they need to be and reconnected them, the structure still seems to miss something. You noticed some pieces have cut crystals embedded in them, you might have to replace those too.': '你将所有替换部件归位并重新连接完毕，但这座构筑物依旧缺失关键之物。你留意到部分构件中镶嵌有切割水晶，看来你也需要将这些水晶一并替换。',
        'Cutting crystals...': '正在切割水晶……',
        'Final Repairs': '最终修缮',
        'Repair': '修缮',
        'Most Parts look good, the crystals are cut, now you need to fit the crystals and make final repairs to the structure.': '大部分部件状态良好，水晶也已切割完毕，现在你需要镶嵌水晶，并对这座构筑物进行最后的修缮。',
        'Repairing...': '正在修缮中……',
        'Structural Problems': '结构故障',
        'Fix Parts': '修复部件',
        'Something is not right, some parts might have been at the wrong place or not connected properly. A few of the crystals were also not cut just right, you will have to redo a few things, but it should be quicker this time.': '情况有些不对劲，部分部件可能安放错位或衔接不当。还有一些水晶的切割尺寸也存在偏差，你需要重新返工部分工序，不过这次应该会快很多。',
        'Fixing parts...': '正在修复部件……',
        'Study and Analyze': '研究与解析',
        'Study': '研究',
        'The structure seems complete, but you need to further study it to understand how all the parts interact with each other and how to operate it.': '构筑物看似已修复完整，但你还需要进一步研究，弄清楚各个部件之间的联动原理以及它的启动方式。',
        'Studying and analyzing...': '正在研究与解析……',
        'It\'s... a Portal of some kind? You are still unsure where exactly it would lead, but you are sure that it was used at least once, and that the tremendous amount of runic power was probably the cause of its current state. You feel like you learned enough to try and power it on.': '这居然是……某种传送门？你尚且无法确定它会通往何处，但可以肯定它至少被启用过一次，而海量的符文能量过载，或许就是它损毁至此的原因。你已经掌握了足够信息，可以尝试为它充能启动了。',
        'Current Ash': '当前灰烬',
        'Fort Level': '堡垒等级',
        'Charge': '充能',
        'Overcharged!': '能量过载！',
        'Portal': '传送门',
        'Energy Level': '能量等级',

        'Portal Jump?': '是否进行传送跃迁？',
        'Are you sure that you want to do this? You will have to leave most things behind and you have no idea what awaits on the other side.': '你确定要这么做吗？你将不得不舍弃大部分事物，且完全未知彼岸等待着你的是什么。',
        'This will reset': '以下内容将会重置',
        'Ash, Body Parts, Obliterations, Form Bodies, Clones, Training, Perks, Perk Points, Runes, Buildings, Relics, Rune Perks, and Materials': '灰烬、躯体部位、湮灭次数、重塑躯体、分身、训练进度、天赋、天赋点、符文、建筑、遗物、符文天赋以及各类材料',
        'You will gain': '你将会获得',

        'The Other Side': '彼岸',
        'You step through the portal and feel yourself being torn apart, every second is agonizing and you feel the power of the runes surge through you.': '你踏入传送门，身躯仿佛被撕扯开来，每一秒都痛苦万分，符文的力量在体内汹涌奔涌。',
        'Finally you emerge on the other side, you are back at the Ashen Fields, but your base and everything else is gone. The world seems different, somehow... you don\'t get the chance to think about it as an entity approaches from beyond the Fog...': '最终你出现在彼岸，重回灰烬荒原，但你的据点与所有物资都已消失无踪。这个世界莫名变得截然不同……还没等你细想，一道身影正从迷雾深处缓缓逼近……',
        'It\'s a humanoid figure, but the body seems to burn in dark flames and every step feels like it could crumble the ground beneath. It suddenly starts speaking:': '那是一道人形身影，周身燃烧着漆黑烈焰，每一步落下都仿佛要震碎脚下大地。它忽然开口说道：',
        '"Who are you foul creature? This domain is forbidden to anyone!"': '“你这污秽之物是谁？此地禁止任何人踏入！”',
        'Your Name': '你的名号',
        'Ashen One': '灰烬行者',
        'Shout your name': '报上名号',
        '"That is impossible..."': '“这不可能……”',
        'Without another word, the creature summons a giant floating spear that seems to be steeped in dark magic, it suddenly shoots towards you!': '那魔物不再多言，凭空召唤出一柄悬浮的巨型长枪，枪身萦绕着浓郁的黑暗魔力，骤然朝你疾射而来！',
        'No time to react, no way to dodge or block, your body is impaled and torn into pieces, your mind fades...': '你来不及反应，无从闪避也无法格挡，身躯被长枪贯穿、撕裂成碎片，意识渐渐消散……',
        '... what was this? Do you really have to start over? Whatever this creature is, it seems to have vanished. But you need to become stronger, if you ever want to face it again, you have to be prepared to fight.': '……刚刚那是什么？难道真的要从头再来吗？那神秘魔物已然消失不见。但你必须变得更强，若想再次与它对峙，就必须做好战斗的准备。',
        'Rise Again': '再度重生',

        //Powers 能力
        'Powers': '能力',
        'Harness the innate properties of Vortex Essence to become stronger': '驾驭漩涡精粹的本源特性，借此变得更强',
        'Vortex Essence:': '漩涡精粹：',
        'Vortex Essence': '漩涡精粹',
        'Increase': '增幅',
        'Ash Infusion': '灰烬灌注',
        'Use Vortex Essence to infuse your Ash production.': '利用漩涡精粹增幅灰烬产出',
        'Vortex Potency': '漩涡效能',
        'Increase potency of gained Vortex Essence after each Jump.': '每次跃迁后，提升获取漩涡精粹的效果',
        'Obliteration Echo': '湮灭回响',
        'Echoes of past Obliterations make future ones quicker.': '过往湮灭的余韵，让后续湮灭进程变得更快',
        'Research Proficiency': '研究精通',
        'The Vortex can teach you a lot about the world and its secrets.': '漩涡能为你揭示这个世界的诸多奥秘',
        'Clone Surge': '分身增幅',
        'Make sure a few Clones are strong enough to survive the Portal Jump.': '强化部分分身，使其足以在传送跃迁中存活',
        'Rune Attraction': '符文引力',
        'Attract more Runes when exploring.': '探索时可以吸引获取更多符文',
        'Material Expertise': '材料专精',
        'Having built a lot of structures can make it easier to rebuild them in the future.': '建造过大量建筑后，未来重建建筑会更加轻松',
        'Form Body Optimization': '重塑躯体优化',
        'Forming a new Body can be made more efficient with Vortex Essence.': '借助漩涡精粹，大幅提升重塑躯体的效率',
        'Expanded Inventory': '背包扩容',
        'Increase your inventory capacity to carry more items.': '提升背包容量，可携带更多物品',
        'Encounter Time': '遇敌间隔',
        'Decreases the time it takes to find another enemy to fight.': '缩短搜寻下一个战斗敌人的等待时间',
        'Relic Retention': '遗物留存',
        'Use the power of Vortex Essence to keep some of your Relics after a Portal Jump.': '借助漩涡精粹的力量，跃迁后保留部分遗物',
        'Tactical Retreat': '战术撤退',
        'Retreat more carefully from fights, allowing you to lose less progress in an area when you recover.': '更稳妥地从战斗中撤退，复活后损失的区域进度更少',
        'Advanced Delegation': '高阶委派',
        'Organize your Clones more efficiently to let them explore faster and more thoroughly.': '更高效地调度分身，使其探索更快、搜寻更全面',
        'Creative Construction': '匠心建造',
        'Having overseen the construction of so many buildings has made you quite good at it, letting your Clones build much faster.': '经手无数建筑建造后技艺娴熟，让分身的建造速度大幅提升',
        'Soul Absorption': '灵魂汲取',
        'Absorb the souls of your defeated enemies to gain powerful bonuses.': '汲取被击败敌人的灵魂，获得强力加成',
        'Obliterations do not reset when Forming Body and -50% Clones required': '重塑躯体时湮灭次数不会重置，且所需分身 -50%',
        'keep all Relics on Portal Jump': '传送跃迁时保留全部圣物',
        'instant encounter time': '即时遇敌时间',
        'MAX': '满级',
        'Maxed': '已满级',

        //Combat 战斗
        'Combat': '战斗',
        'Souls': '灵魂',
        'Battle': '战斗',
        'Fight enemies for fortune and glory.': '征战强敌，赢取财富与荣耀。',
        'Area Level': '区域等级',
        'kills': '击杀数',
        'Auto-fight:': '自动战斗：',
        'FIGHT': '战斗',
        'HEAL': '恢复生命',
        '— No enemy —': '—— 无敌人 ——',
        'Dynamic Area Level': '动态区域等级',
        'kills until +': '击杀即可获得 +',
        'bonus.': '额外加成。',
        'Returning to base resets your streak.': '返回据点将会重置连杀进度。',
        'Start a new encounter in the selected area': '在所选区域开启新的战斗遭遇',
        'Instantly restore 20 HP. 10s cooldown.': '立即恢复20点生命值，冷却时间10秒。',
        'Return to base and restore HP at 1% / second.': '返回据点，以每秒1%的速度恢复生命值。',
        'Resets your area kill streak.': '重置当前区域的连杀进度。',
        'V': '对',
        'S': '战',
        '(CRIT!)': '（暴击！）',
        '(auto-trashed)':'（已自动丢弃）',
        'VICTORIOUS': '战斗胜利',
        'Next encounter in': '下次遇敌倒计时',
        'miss': '未命中',
        'missed': '闪避',
        'You hit': '你对',
        'attacked you but': '对你发起攻击但',
        'hit you for': '对你造成',
        'Resting at Base': '据点休憩',
        'You were defeated': '你已战败',
        'defeated! +': ' 已击败！ +',
        'for': '造成',
        'Currently fighting…': '战斗中……',
        'Cooldown:': '冷却时间：',
        'Found:': '获得：',
        'You attacked': '你发起攻击',
        'but': '但是对方',

        'Ashen Ghoul': '灰烬食尸鬼',
        'Living Rock':'活岩',
        'Slime':'史莱姆',
        'Gnarly Creature':'畸形魔物',
        'Bane Ivy':'灾厄藤蔓',
        'Nurian':'努里安人',
        'Soul Eater':'噬魂者',
        'Giant Spider':'巨型蜘蛛',
        'Ice Imp':'冰霜小鬼',
        'Foul Beast':'污秽巨兽',

        'Gear': '装备',
        'Equipment': '装备',
        'Equipment Stats': '装备属性',
        'Attributes': '基础属性',
        'Vitality': '体力',
        'Endurance': '耐力',
        'Speed': '速度',
        'Strength': '力量',
        'Dexterity': '敏捷',
        'Intelligence': '智力',
        'Precision': '精准',
        'Ferocity': '狂暴',
        'Survivability': '生存能力',
        'Accuracy': '命中率',
        'Evasion': '闪避率',
        'HP': '生命',
        'HP Regen': '生命回复',
        'Armor': '护甲',
        'Damage': '伤害',
        'Atk/s': '每秒攻击',
        'Crit': '暴击率',
        'Crit Dmg': '暴击伤害',
        'Life Leech': '吸血',
        'Avg. Dodge Chance': '平均闪避几率',
        'Avg. Hit Chance': '平均命中几率',
        'Misc': '其他加成',
        'Item Find': '物品掉率',
        'Building': '建筑成本',
        'Ash Prod': '灰烬产出',

        'Armor:': '护甲：',
        'Damage:': '伤害：',
        'Attack Speed:': '每秒攻击：',
        'Crit Chance:': '暴击率',

        'Inventory': '背包',
        'Auto-Trash Filters': '自动垃圾过滤',
        'Drops matching these filters are automatically discarded.': '匹配筛选条件的掉落物将自动丢弃。',
        'Trash Rarity:': '垃圾稀有度：',
        'Junk': '垃圾物品',
        'Common or lower': '普通及以下',
        'Rare or lower': '稀有及以下',
        'Exotic or lower': '异域及以下',
        'Epic or lower': '史诗及以下',
        'Sort by item level': '按物品等级排序',
        'Sort by name': '按名称排序',
        'Sort by rarity': '按稀有度排序',
        'Sort by type': '按类型排序',
        'Delete by rarity': '按稀有度删除',
        'Min item level:': '最低物品等级：',
        'Off': '关闭',
        'Equipped': '装备',
        'Double-click to': '双击即可',
        'unequip': '卸下装备',
        'equip': '穿戴装备',

        'Affects your maximum health.': '影响你的最大生命值。',
        'Governs your damage reduction.': '决定你的伤害减免效果。',
        'How fast your Attacks are.': '决定你的攻击速度。',
        'Weapon scaling, primarily for magic weapons.': '武器属性成长，主要适配魔法武器。',
        'Weapon scaling, primarily for melee weapons.': '武器属性成长，主要适配近战武器。',
        'Weapon scaling, primarily for ranged weapons.': '武器属性成长，主要适配远程武器。',
        'Increases your HP regeneration.': '提升你的生命值回复速度。',
        'Increases your critical strike chance.': '提升你的暴击几率。',
        'Impacts your chance to hit enemies.': '影响命中敌人的概率。',
        'Amplifies your critical strike damage.': '增幅你的暴击伤害。',
        'Higher values increase the chance of dodging enemy attacks.': '数值越高，闪避敌方攻击的几率越大。',
        'Spend Souls to level up or learn powerful abilities': '消耗灵魂进行升级或习得强力技能',
        'Next Point': '下一点属性',
        'Reallocate': '重置加点',
        'Player Name': '玩家名称',
        'Change your character\'s name.': '更改你的角色名称。',
        'Total Attributes': '总属性点',
        'Soul Perks': '灵魂天赋',
        'Active': '已激活',
        'Enable Cost': '激活消耗',
        'Enable': '开启',
        'Disable': '关闭',
        'Improved Heal': '强化恢复',
        'The Heal skill additionally heals 5% of your maximum Health.': '恢复技能额外回复5%最大生命值。',
        'Stun': '眩晕',
        'Unlocks the ability to stun an enemy for 1s.': '解锁技能，可使敌人眩晕1秒。',
        'Automation': '自动化',
        'Auto Trash Rarity': '自动丢弃稀有度',
        'Automatically trashes items of lower rarity.': '自动丢弃低稀有度物品。',
        'Auto Trash Item Level': '自动丢弃物品等级',
        'Automatically trashes items below a certain level.': '自动丢弃低于指定等级的物品。',
        'Recursive Research': '循环研究',
        'Unlock a new Research that reduces the cost of researching.': '解锁全新研究，降低研究消耗。',
        'Catalyzed Cloning': '催化分身',
        'Unlock a new Research that reduces the amount of time Cloning takes.': '解锁全新研究，缩短分身耗时。',
        'Vortex Volatility': '漩涡增幅',
        'Unlock a new Research that increases Vortex efficiency.': '解锁全新研究，提升漩涡效率。',
        'Memory': '记忆',
        'Cartographer': '制图师',
        'Remember all Exploration nodes after portal jump.': '传送跃迁后保留所有探索节点进度。',

        'Common': '普通',
        'Magic': '稀有',
        'Rare': '异域',
        'Epic': '史诗',

        'Head': '头部',
        'Hands': '手部',
        'Chest': '胸甲',
        'Main Hand': '主手',
        'Belt': '腰带',
        'Off Hand': '副手',
        'Legs': '腿部',
        'Feet': '脚部',
        'item level:': '物品等级：',
        '· Melee': '· 近战',

        'Helmet': '头盔',
        'Gauntlets': '护手',
        'Chestplate': '胸甲',
        'Sword': '长剑',
        'Shield': '盾牌',
        'Greaves': '护腿',
        'Boots': '靴子',

        //TIP 提醒
        'In Development!': '开发中！',
        'This feature is still very new, there might be bugs and balance issues.': '该功能还很新，可能存在 bug 和平衡性问题。',
        'If you feel like something is not working right, or balanced poorly, please report it on our': '如果您觉得有什么地方运行不正常，或者平衡性不佳，请反馈至我们的 ',
        'or Discord server (see below).': '或 Discord 服务器（见下文）。',
        'Thanks for your understanding and support!': '感谢您的理解与支持！',

        //Changelog 更新日志
        'NEW!':'最新！',
        'Changelog':'更新日志',
        'Added':'新增',
        'Changed':'更改',
        'Removed':'移除',
        'Fixed':'修复',

        //2026.4.1 更新日志
        'UNIQUE EVENTS ARE RESET! As some of these changelogs get quite long, I will start omitting some of the entries that are just smaller Tweaks and Adjustments without or little gameplay impact.': '特殊事件已重置！由于部分更新日志内容过长，我将开始省略一些仅为小幅优化与调整、对游戏玩法几乎没有影响的条目。',
        '3 new areas to explore': '新增 3 个可探索区域',
        '3 new buildings': '新增 3 座建筑',
        '2 new collections of Relics (4 total)': '新增 2 组圣物收藏（总计 4 组）',
        '3 new Researches': '新增 3 项研究',
        'Runes can now be gained offline with Auto Exploration on': '开启自动探索后，现在可离线获取符文',
        'Clone allocation amount can now be edited directly': '现在可直接编辑分身分配数量',
        'Unique events are now categorized separately in the event list': '特殊事件现已在事件列表中单独分类',
        'Increased Material production Research from +2% to +5% per level':'材料产量研究的每级加成从 +2% 提高至 +5%',
        'Increased Upgrade cost Research from -5% to -10% per level':'升级消耗研究的每级效果从 -5% 提高至 -10%',
        'Conway/Guy (Short) notation now works up to e300 instead of e99':'Conway/Guy（简短）记数法的上限现在从 e99 提高至 e300',
        'Short notation now uses PascalCase for units (e.g. QaVg instead of Qavg)':'短记数法的单位现在使用大驼峰命名法（PascalCase）（例如 QaVg 而非 Qavg）',
        'Increased Building production multiplier from +25% to +40% per level':'建筑产量倍率的每级加成从 +25% 提高至 +40%',
        'Increased effect of Barracks from -10% to -20% per level':'兵营效果的每级加成从 -10% 提高至 -20%',
        'Balanced most building costs and scalings':'平衡了大多数建筑的消耗与花费递增比例',
        'Hardcap for Exploration from 0.2s to 0.1s':'探索时间硬上线从 0.2 秒缩短至 0.1 秒',
        'Rebalanced all Relics':'重新平衡了所有遗物',
        'Triskelion Key and Forgotten Necklace have been moved to a different collection':'三曲枝钥匙和遗忘项链已移至另一个收藏集中',
        'Extra Unique event from Stone Wave Cliffs that was used for testing':'移除了石浪悬崖中原本用于测试的额外特殊事件',
        'Non-Unique events from save-game decreasing savegame size substantially':'存档中的非特殊事件已移除，大幅减小了存档文件体积',
        'Max All button not accounting for Research when checking available Upgrades':'检查可用升级时，“购买所有升级”按钮未将研究计算在内',
        'Upgrade cost description effect':'升级成本描述效果',
        'Exponent not showing in Standard and Short notation':'标准和简短计数法中未显示指数',
        'Upgrades not unlocking correctly after Obliteration':'湮灭后升级未正确解锁',
        'Some occasionas where the exact amount of materials are met but building remains unaffordable':'在某些情况下，即使刚好满足材料数量要求，建筑仍然显示材料不足',

        //2026.4.6 更新日志
        'Last content patch before v0.5! WARNING: Auto exploration has to be unlocked again, just explore a bit!':'v0.5 之前的最后一个内容补丁！警告：必须重新解锁自动探索，只需稍微探索一下即可！',
        '4 new Rune Perks':'4个新符文天赋',
        'Highlighting when a collection is completed':'收集完成时高亮显示',
        'Toggle for auto cloning':'自动创造分身开关',
        'Map can now be panned':'现在可以拖动地图',
        'More statistics':'更多统计数据',
        'You can name your base now':'现在可以为你的基地命名了',
        'Decreased effect of Carpenter\'s Square from 2% to 0.5%':'木工角尺的效果从 2% 降低至 0.5%',
        'Decreased Construction Streamlining Research from 5% to 2.5% per level':'建筑精简研究的效果从每级 5% 降低至 2.5%',
        'Upgrades are now unlocked more evenly each Obliteration':'每次湮灭后升级的解锁现在更加均匀',
        'Rune Synthesis Research now works differently':'符文合成研究现在的运作方式有所不同',
        'Decrease effect of Perfect Pebble from 0.1% to 0.01%':'完美鹅卵石的效果从 0.1% 降低至 0.01%',
        'Perfect Pebble effect scales additively now':'完美鹅卵石的效果现在按加法叠加',
        'Decreased cost/scaling for some buildings':'降低了部分建筑的成本/成本递增率',
        'Auto Exploration is now unlocked far earlier':'自动探索现在的解锁时间大大提前',
        'Outrider Post effect now starts at level 1 not 2':'先遣哨所的效果现在从 1 级而不是 2 级开始',
        'Increased Pearl effect from 1 to 2':'珍珠效果从 1 增加至 2',
        'Pearl effect is now applied before Golden Ink Bottle':'珍珠效果现在在金色墨水瓶之前应用',
        'Rebalanced early game progression':'重新平衡了游戏前期的进度',
        'Cursed Shore being named Ashen Shore in the map':'地图中“诅咒海岸”被命名为“灰烬海岸”的问题',
        'Rune Perks refundable (they shouldn\'t be)':'符文天赋可返还的问题（它们本不应可返还）',
        'Cursed shore description':'诅咒海岸的描述问题',
        'Description for the unique event in Lush Valley':'繁茂山谷中独特事件的描述问题',
        'Relic effect value rounding':'遗物效果数值的四舍五入问题',
        'Crystal Storage Lv2 not buyable':'水晶仓库Lv2无法购买的问题',
        'Minor UI issues on smaller screens':'较小屏幕上的轻微UI问题',
        'New areas falsely showing as completed':'新区域错误显示为已完成的问题',
        'Unique event order resetting on reload':'重新加载时独特事件顺序重置的问题',

        //2026.4.9 更新日志
        'Perk Generation does not list the Clones as idle anymore, with the Simultaneous Training Rune Perk':'拥有同步训练符文天赋后，天赋生成界面不再将分身显示为闲置状态',
        'Simultaneous Training still not working correctly in some cases':'同步训练在部分情况下仍无法正常生效',
        'Settings page layout issues on smaller screens':'小屏幕上设置页面存在布局问题',
        'Spiral Root and Glowing Mushroom effect applying after Ancient Lamp':'螺旋根与发光蘑菇的效果在古老提灯之后才生效',

        //2026.4.8 更新日志
        'Option to export and import a .txt file':'新增导出与导入 .txt 文件的选项',
        'Cancel option for Traveling':'新增旅行取消选项',
        'Fast Travel (unlocked with a unique event)':'快速旅行（通过特殊事件解锁）',
        'Materials overview above the map on smaller screens':'小屏幕下地图上方显示材料概览',
        'Auto Exploration malus is now x5 instead of x10':'自动探索惩罚系数现在为 ×5，而非 ×10',
        'Building effect/cost now uses icons':'建筑 效果/成本 现在使用图标显示',
        'Layout of Statistics page':'统计页面布局优化',
        'Layout of Settings page':'设置页面布局优化',
        'In Development warning from Research page':'研究页面新增 “开发中” 提示',
        'Simultaneous Training Rune Perk not working for Trainings that had no allocated clones':'同步训练符文天赋对未分配分身的训练项目无效',
        'Perk Refund still refunding Rune Perks':'天赋返还仍会退还符文天赋点',
        'Building effect not using notation for large numbers':'建筑效果未对大数值使用简化标注',
        'Hand/Aura not updating when buying their improvements':'购买 手部/光环 强化后未实时刷新数值',
        'Total Playtime naming in stats':'统计中总游戏时长命名问题修复',
        'Organs and Void Resonator now show as 1/x if their numbers get too close to -100%':'器官与虚空谐振器数值接近 -100% 时，现在显示为 1/x',
        'Void Resonator not benefitting from bonus levels':'虚空谐振器不享受等级加成效果',
        'Upgrade totals not including all bonuses':'升级总属性未计入全部加成',
        'Casing for Upgrade level & totals':'升级等级与总属性的外框样式调整',
        'Perk Point generation speed at high levels with the Rune Perk':'高等级下符文天赋对天赋点生成速度的影响',
        'Collecting Relics not updating Ash production until after reload':'收集圣物后灰烬产量不会立即更新，需重载后方生效',

        //2026.4.30 更新日志
        'COMBAT UPDATE! This is a big update, expect bugs and balance issues, but I hope you enjoy it regardless!': '战斗系统大更新！本次为重大版本更新，可能存在漏洞与数值平衡问题，但仍希望大家游玩愉快！',
        'COMBAT Feature': '战斗特性',
        'Area dependent travel and exploration times':'区域差异型旅行与探索耗时',
        '1 new area to explore...?':'新增1个可探索区域',
        'A unique event to unlock the last area':'专属特殊事件，解锁最终区域',
        '2 new buildings':'新增2座建筑',
        '2 new Perks plus 2 more from splitting an existing one':'新增2个天赋，另有2个天赋由原有天赋拆分而来',
        'Story modals for important events':'重要事件新增剧情弹窗',
        'Notifications can now be dismissed':'通知现已支持关闭清除',
        'Hide/Show for Collect/Obliteration/Form Body buttons':'收集/湮灭/塑体按钮支持隐藏/显示切换',
        'Link to ko-fi if you want to support development :)':'新增Ko-fi赞助链接，可支持游戏开发',
        'Stat rows are now hidden until they are non-zero, to prevent spoilers':'数值条目在数值为零期间自动隐藏，防止剧透',
        'Several new Statistics are tracked':'新增多项可统计数据',
        'Cloud Saving for galaxy.click, it\'s enabled by default':'galaxy.click 开启云存档功能，默认启用',
        'COLLECT button now only requires hover/tap and no more holding/clicking':'收集按钮现仅需悬停/轻点，无需长按或重复点击',
        'Improved Performance especially on low-end devices':'优化运行性能，低配设备提升尤为明显',
        'Ash Upgrades are now called Body Parts':'灰烬升级系统更名为躯体部件',
        'Training tab is now called Clones':'训练标签页更名为分身',
        'Save notification is now 2s instead of 4s':'存档提示时长由4秒缩短为2秒',
        'Perk Point cost has been adjusted':'天赋点数消耗已重新调整',
        'Form Body now also needs Obliterations':'塑体操作现在额外需要湮灭值',
        'Internal handling of Perks, THIS WILL RESET THEM':'天赋内部机制重构，本次更新会重置所有天赋',
        'Increased Carpenter\'s Square effect from 0.5% to 1%':'木工方矩效果从0.5%提升至1%',
        'Form Body now grants +20% Ash multiplicative':'重塑躯体现在提供20%灰烬乘法加成',
        'The Perk that grants 200% Ash Production (additive) per FB inceases the multiplicative bonus to 30% now instead':'原本每层重塑躯体提供200%灰烬产量加法加成的天赋，现已改为提供30%乘法加成',
        'Rebalanced a lot of Body Parts to make early game a bit slower':'大量躯体部件数值重做平衡，放缓前期游戏节奏',
        'Welcome Back screen now only shows Trainings if they actually leveled up':'回归界面仅在训练项目实际升级时才展示',
        'Reduced effect of Clones Creating Clones from 2.5% to 2% per level':'克隆衍生克隆天赋每级效果从2.5%下调至2%',
        'Decimals for main Resources':'主资源数值新增小数显示',
        'Perk refund':'新增天赋点返还功能',
        'LMB+RMB collect exploit':'修复左右键同时点击一键收集漏洞',
        'Spacing issues of navigation for smaller screens':'修复小屏设备导航栏间距错乱问题',
        'Icons for Building and Research notification':'建筑与研究通知新增专属图标',
        'Some collections not properly displaying their reward':'修复部分收集项目奖励展示异常问题',

        //2026.5.1 更新日志
        '1 new Power':'新增1项能力',
        'Inventory items are now compared to equipped items on hover':'悬停背包物品时可与已装备物品进行属性对比',
        'Average item level above equipment view':'装备界面上方显示平均物品等级',
        'Option to sort inventory by item level':'新增背包按物品等级排序选项',
        'Reduced size of Main buttons (Collect/OB/FB)':'缩小收集/湮灭/重塑躯体主按钮尺寸',
        'Battle log shows [item level: x] instead of [ilvl: x] for clarity':'战斗日志将缩写ilvl改为完整物品等级显示，更通俗易懂',
        'Text for portal investigation 9 to make more sense':'优化第九重虚空探索的文案表述，逻辑更通顺',
        'Increased base Inventory size from 10 to 20':'背包基础容量由10格提升至20格',
        'Reduced Evasion and Accuracy of Gnarly Creature a little bit':'略微降低畸形怪物的闪避与命中属性',
        'Increased stats and level requirements of later enemies':'提升后期敌人的属性强度与等级门槛',
        'Increased default drop rate from 5% to 10%':'默认物品掉落率由5%提升至10%',
        'Relic completion reward is always visible after first portal jump':'首次跃迁后，遗物完成奖励永久可见',
        'Max All Body Parts button is now retained after portal jump':'虚空跃迁后保留一键拉满全部躯体部件按钮',
        'Auto fighting can now be disabled while healing':'回血状态下可关闭自动战斗',
        'Obliteration/Form Body buttons stay visible after portal jump':'传送跃迁后湮灭、重塑躯体按钮保持显示',
        'Basic Body Parts stay visible after portal jump':'传送跃迁后基础躯体部件保持显示',
        'Drop rates being far higher than they should be (55% instead of 5%)':'修复掉落率异常bug（实际掉率错误达到55%而非设定5%）',
        'Portal Jump being accessible before finishing the investigation':'修复未完成探索即可进行传送跃迁的问题',
        'Rune Synthesis immediately generating Runes after portal jump':'修复传送跃迁后符文合成不即时产出符文的问题',
        'Form Body button stating Clones as cost instead of requirement':'修复重塑躯体按钮文案错误，将需求错误显示为消耗',
        'Enemies not granting more souls on higher levels':'修复高等级敌人不额外产出灵魂的bug',
        'Text about all trainings unlocked stopping at FB6 instead of FB10':'修复全部训练解锁提示文案提前在重塑躯体6级终止，未到重塑躯体10级的问题',
        'Phylactery focus not resetting when portal jumping':'修复传送跃迁后魂匣专注度不重置的问题',
        'Ash production being only 10% of what they should be':'修复灰烬产出仅为正常数值10%的异常问题',
        'Player combat level is now correctly calculated when encountering events':'修复遭遇事件时玩家战斗等级计算错误问题',
        'Portal graphic overlapping Resource bar':'修复传送跃迁图标与资源栏画面重叠问题',
        'Shield not providing innate armor':'修复护盾无法提供固有护甲值的bug',

        //2026.5.4 更新日志
        'The new Prestige Layer offers a lot of cool stuff, but it was a bit too grindy to reach and the rewards didn\'t make it faster enough to be worth it, so both the required amount and rewards are adjusted. Enjoy!':'全新威望层级新增大量趣味内容，但原本解锁门槛刷取负担过重、奖励提速收益不足，现已同步下调需求数量并优化奖励回馈，尽情体验吧！',
        '2 new Powers':'新增2项能力',
        'Capped Materials are now highlighted in red':'已达上限的资源现在会标红高亮显示',
        'Drastically reduced the amount of power needed to charge/overcharge the portal':'大幅降低传送跃迁充能、超额充能所需的能量值',
        'Lowered required Fort level for the portal quest chain from 15 to 13':'传送跃迁任务线所需堡垒等级从15级下调至13级',
        'Reduced required amount of Ash for Fort Level 1 from 1e42 to 1e40':'1级堡垒所需灰烬从1e42下调至1e40',
        'Increased effect of Ash Infusion Power':'提升灰烬灌注能力的效果强度',
        'Decreased the cost of Vortex Potency Power':'降低漩涡精华能力成本',
        'Collections now properly display their rewards':'修复收集项目奖励展示异常问题',
        'Improved spacing on a lot of UI elements':'优化大量UI界面元素的间距布局',
        'Global Unique Events can now also happen in Ashen Fields':'全域专属事件现在也会在灰烬原野触发',
        'Increased Relic drop chances everywhere':'全场景提升遗物掉落概率',
        'Crash when building Treasury':'修复建造国库时游戏崩溃的问题',
        'A lore text implying Runes are needed to charge the portal':'修复剧情文案错误，错误暗示传送跃迁需要符文',
        'Last 4 Rune perks all requiring River Trinkets instead of their intended collections':'修复最后4个符文天赋需求错误，本应消耗指定收集品却全部误设为河流饰品',
        'COLLECT tooltip overlapping some elements':'修复收集按钮提示框与部分界面元素重叠问题',
        'Switching to a different area pauses fighting even with auto-fight enabled':'修复开启自动战斗后，切换区域仍会暂停战斗的问题',
        'Returning to base to recover did not correctly end the current fight':'修复返回基地回血时无法正常结束当前战斗的问题',

        //2026.5.7 更新日志
        'Thanks BiggestAstolfoSimp for becoming a Crystal Tier supporter on ko-fi! ♥':'感谢玩家 BiggestAstolfoSimp 成为 Ko-fi 水晶级支持者！♥',
        '3 new Powers':'新增3项能力',
        'Tooltip to Power sections':'为能力板块添加悬浮提示说明',
        'Indicator for the unique event chain to log':'新增专属事件链进度记录指示器',
        'Reworked Vortex Potency power to be multiplicative':'重做漩涡精华能力，改为乘法加成机制',
        'Increased threshold needed for Vortex Essence from 310 to 320':'漩涡精华所需解锁门槛由310提升至320',
        'Reduced Enemy Soul reward gain from +20% to +10% per level':'敌人灵魂奖励每级加成由20%下调至10%',
        'Perks are now partially visible before being able to unlock them':'未解锁的天赋现在可提前预览部分信息',
        'Reduced Cost for Portal investigations to better fit the new requirements':'降低虚空探索消耗，适配全新数值需求',
        'Logo has now a slightly glow on dark mode, to make it more visible':'深色模式下logo新增微光特效，提升辨识度',
        'Moved the Cancel button for exploring, to make it easier to speedclick':'调整探索取消按钮位置，更便于快速连点操作',
        'Crash after importing a savegame and navigating to Exploration tab':'修复导入存档后进入探索页面游戏崩溃问题',
        'Battle only actively running while inside the Combat section':'仅处于战斗页面时，战斗流程才会正常运行',
        'Vortex Essence gain bonus not reflected in portal jump reward preview':'修复跃迁奖励预览不显示漩涡精华加成的问题',
        'Item tooltips not disappearing when hovering over them':'修复物品悬浮提示无法自动消失的bug',
        'Portal charge jumping between values':'修复跃迁充能数值来回跳动异常问题',
        'Portal charge showing 100% before being fully charged':'修复跃迁未充满却提前显示100%充能的问题',
        'Fully Charged text moving the layout':'修复充能完成提示文字导致界面排版移位的问题',
        'Portal not disabling again after jumping':'修复传送跃迁完成后未自动重置禁用状态的问题',
        'Portal area being accessible before finishing the investigation':'修复未完成探索即可进入跃迁区域的漏洞',
        'Event Chain to unlock the portal not properly unlocking':'修复解锁跃迁的事件链无法正常完成解锁的问题',
        'Rounding errors in Gear stat overview':'修复装备总属性概览存在数值四舍五入误差的问题',

        //2025.5.8 更新日志
        'Soul Perks - check the Attributes page!':'灵魂天赋现已上线，可前往属性页面查看',
        '4 new item modifiers':'新增4条物品词缀',
        '2 more levels of Clone Surge':'分身涌动天赋额外开放2级上限',
        'Performance for Exploration':'优化探索玩法运行性能',
        'Lifted hardcap for Exploration speed':'解除探索速度硬性上限限制',
        'Renamed the enemy Nuren to Nurian':'将怪物名称 Nuren 更改为 Nurian',
        'Increased enemy evasion and accuracy scaling':'上调怪物闪避与命中的成长倍率',
        'Improved performance when building':'优化建造操作时的游戏性能',
        'Increase value and price for higher levels of Clone Surge':'提升克隆涌动高等级的效果数值与升级花费',
        'Rarity names for Magic -> Rare and Rare -> Exotic':'物品稀有度名称调整：魔法级改为稀有级、稀有级改为异域级',
        'Fixed Item Rarity, it now works as intended':'修复物品稀有度机制，现已正常生效',
        'Disabled legendary rarity for now':'暂时关闭传说级稀有度掉落',
        'Reduced Attack Speed modifier scaling from 1.5% to 1%':'攻速词缀成长幅度由1.5%下调至1%',
        'Reduced Base Damage modifier scaling from 2 to 1':'基础伤害词缀成长倍率由2下调至1',
        'Save game wiping when refreshing before auto save triggers':'修复自动存档触发前刷新页面导致存档丢失的问题',
        'Map recentering automatically after an exploration is finished':'探索结束后地图将自动回归居中视角',
        'Auto-Exploration becoming unavailable after portal jump until reloading':'修复传送跃迁后自动探索失效，需重载才能恢复的问题',
        'Max All button being off-center without Auto-Buy or Obliterations':'修复未开启自动购买、湮灭功能时，一键满级按钮排版偏移问题',
        'Crystalized Berry not applying its effect to Form Body cost without reload':'修复结晶浆果减免重塑躯体消耗的效果需重载才生效的问题',
        'Vortex Essence stat tracking only tracking the base value without bonuses':'修复漩涡精华统计只计算基础值、不包含加成的问题',
        'Starting Clones and retained Relics not applying their bonus after a portal jump until reloading':'修复传送跃迁后初始克隆、保留遗物加成失效，需重载才恢复的问题',

        // 过滤不需要汉化的文本
        'I': 'I',
        'II': 'I',
        'III': 'III',
        'IV': 'IV',
        'VI': 'VI',
        'VII': 'VII',
        'VIII': 'VIII',
        'X': 'X',
        'XI': 'XI',
        'XII': 'XII',
        'XIII': 'XIII',
        'XIV': 'XIV',
        'XV': 'XV',
        'XVI': 'XVI',
        'A': 'A',
        'B': 'B',
        'C': 'C',
        'D': 'D',
        'E': 'E',
        'F': 'F',
        'G': 'G',
        'H': 'H',
        'I': 'I',
        'J': 'J',
        'K': 'K',
        'L': 'L',
        'M': 'M',
        'N': 'N',
        'O': 'O',
        'P': 'P',
        'Q': 'Q',
        'R': 'R',
        'T': 'T',
        'U': 'U',
        'W': 'W',
        'X': 'X',
        'Y': 'Y',
        'Z': 'Z',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
    };

    //需处理的前缀，此处可以截取语句开头部分的内容进行汉化
    const cnPrefix = {
        "\n": "\n",
        "                   ": "",
        "                  ": "",
        "                 ": "",
        "                ": "",
        "               ": "",
        "              ": "",
        "             ": "",
        "            ": "",
        "           ": "",
        "          ": "",
        "         ": "",
        "        ": "",
        "       ": "",
        "      ": "",
        "     ": "",
        "    ": "",
        "   ": "",
        "  ": " ",
        " ": " ",
        //树游戏
        "\t\t\t": "\t\t\t",
        "\n\n\t\t": "\n\n\t\t",
        "\n\t\t": "\n\t\t",
        "\t": "\t",
        "Show Milestones: ": "显示里程碑：",
        "Autosave: ": "自动保存: ",
        "Offline Prod: ": "离线生产: ",
        "Completed Challenges: ": "完成的挑战: ",
        "High-Quality Tree: ": "高质量树贴图: ",
        "Offline Time: ": "离线时间: ",
        "Theme: ": "主题: ",
        "Anti-Epilepsy Mode: ": "抗癫痫模式：",
        "In-line Exponent: ": "直列指数：",
        "Single-Tab Mode: ": "单标签模式：",
        "Time Played: ": "已玩时长：",
        "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
        "Level:": "等级:",
        'OBLITERATE':'湮灭',
        'FORM BODY':'重塑躯体',
        "REQ:": "需求:",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
    };

    //需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
    //例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
    //可以在这里汉化结尾：" Coin":" 金币"
    const cnPostfix = {
        "                   ": "",
        "                  ": "",
        "                 ": "",
        "                ": "",
        "               ": "",
        "              ": "",
        "             ": "",
        "            ": "",
        "           ": "",
        "          ": "",
        "         ": "",
        "        ": "",
        "       ": "",
        "      ": "",
        "     ": "",
        "    ": "",
        "   ": "",
        "  ": "  ",
        " ": " ",
        "\n": "\n",
        "\n\t\t\t": "\n\t\t\t",
        "\t\t\n\t\t": "\t\t\n\t\t",
        "\t\t\t\t": "\t\t\t\t",
        "\n\t\t": "\n\t\t",
        "\t": "\t",
        'ASH': '灰烬',
        "CLONES": "分身",
        "LV": "等级",
        "XP": "经验",
    };

    //需排除的，正则匹配
    const cnExcludeWhole = [
        /^(\d+)$/, /^\s*$/, /^([\d\.]+):([\d\.]+)$/, /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
        /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/, /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
        /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/, /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
        /^([\d\.]+)e(\d+)$/, /^([\d\.]+)$/, /^\(([\d\.]+)\)$/, /^([\d\.]+)\%$/,
        /^([\d\.]+)\/([\d\.]+)$/, /^\(([\d\.]+)\/([\d\.]+)\)$/, /^成本(.+)$/,
        /^\(([\d\.]+)\%\)$/, /^([\d\.]+)K$/, /^([\d\.]+)M$/, /^([\d\.]+)B$/,
        /^([\d\.]+) K$/, /^([\d\.]+) M$/, /^([\d\.]+) B$/, /^([\d\.]+)s$/,
        /^([\d\.]+)x$/, /^x([\d\.]+)$/, /^([\d\.,]+)$/, /^\+([\d\.,]+)$/,
        /^\-([\d\.,]+)$/, /^([\d\.,]+)x$/, /^x([\d\.,]+)$/, /^([\d\.,]+) \/ ([\d\.,]+)$/,
        /^([\d\.]+)e([\d\.,]+)$/, /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
        /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/, /^([\d\.]+)e\+([\d\.,]+)$/,
        /^e([\d\.]+)e([\d\.,]+)$/, /^x([\d\.]+)e([\d\.,]+)$/, /^([\d\.]+)e([\d\.,]+)x$/,
        /^[\u4E00-\u9FA5]+$/
    ];

    const cnExcludePostfix = [];

    //正则替换，带数字的固定格式句子
    //纯数字：(\d+)
    //逗号：([\d\.,]+)
    //小数点：([\d\.]+)
    //原样输出的字段：(.+)
    //换行加空格：\n(.+)
    const cnRegReplace = new Map([
        [/^LEVEL: (\d+) \(MAX\)$/, '等级：$1 （满级）'],
        [/^LEVEL: (\d+) \(MAX\) \+ (\d+)$/, '等级：$1 （满级） + $2'],
        [/^LEVEL:\s*(\d+)\s*\/\s*(\d+)$/, '等级：$1 / $2'],
        [/^LEVEL:\s*(\d+)\s*\/\s*(\d+)\s*\+\s*(\d+)$/, '等级：$1 / $2 + $3'],
        [/^Level ([+\-\d\.,%]+)$/, '等级 $1'],
        [/^([+\-\d\.,%]+) stone$/, '$1 石材'],
        [/^([+\-\d\.,%]+) metal$/, '$1 金属'],
        [/^([+\-\d\.,%]+) crystal$/, '$1 水晶'],
        [/^([+\-\d\.,%]+) wood$/, '$1 木材'],
        [/^Lv([+\-\d\.,%]+)$/,'等级$1'],
        [/^Building Maxlevel: ([+\-\d\.,%]+)$/, '建筑最高等级：$1'],
        [/^Upgrade to level ([+\-\d\.,%]+)$/, '升级至等级 $1'],
        [/^([+\-\d\.,%]+) Cloning cost$/, '$1 分身成本'],
        [/^([+\-\d\.,%]+) Training speed$/, '$1 训练速度'],
        [/^([+\-\d\.,%]+) Construction time$/, '$1 建造时间'],
        [/^([+\-\d\.,%]+) dropped Runes$/, '$1 掉落的符文'],
        [/^([+\-\d\.,%]+) Exploration time$/, '$1 探索时间'],
        [/^([+\-\d\.,%]+) Research speed$/, '$1 研究速度'],
        [/^Max Wood: ([+\-\d\.,%]+)$/, '最大木材： $1'],
        [/^Max Stone: ([+\-\d\.,%]+)$/, '最大石材： $1'],
        [/^Max Metal: ([+\-\d\.,%]+)$/, '最大金属： $1'],
        [/^Max Crystals: ([+\-\d\.,%]+)$/, '最大水晶： $1'],
        [/^([+\-\d\.,%]+)\/s Wood$/, '$1/秒 木材'],
        [/^([+\-\d\.,%]+)\/s Stone$/, '$1/秒 石材'],
        [/^([+\-\d\.,%]+)\/s Metal$/, '$1/秒 金属'],
        [/^([+\-\d\.,%]+)\/s Crystal$/, '$1/秒 水晶'],
        [/^Exploring takes ([+\-\d\.,%]+) seconds$/, '探索耗时 $1 秒'],
        [/^Exploring takes ([+\-\d\.,%]+) seconds \(([+\-\d\.,%]+)x longer\)$/, '探索耗时 $1 秒 (耗时增加 $2x)'],
        [/^Lv ([+\-\d\.,%]+)$/, '等级 $1'],
        [/^OBLITERATION ([+\-\d\.,%]+)$/, '湮灭 $1'],
        [/^OBLITERATION (\d+) > (\d+)$/, '湮灭 $1 > $2'],
        [/^Increases base Ash production from your Aura by ([+\-\d\.,%]+)$/, '使你光环产生的基础灰烬产量提高 $1'],
        [/^Fast traveling via ([+\-\d\.,%]+) areas$/, '通过 $1 个区域快速旅行'],
        [/^Level (\d+) \+ (\d+) \((\d+)\)$/, '等级 $1 + $2 （$3）'],

        [/^([+\-\d\.,%]+) Ash production$/, '$1 灰烬产量'],
        [/^([+\-\d\.,%]+) Upgrade cost$/, '$1 升级成本'],
        [/^([+\-\d\.,%]+) Obliteration cost$/, '$1 湮灭成本'],
        [/^([+\-\d\.,%]+) Upgrade bonus levels$/, '$1 升级加成等级'],
        [/^([+\-\d\.,%]+) Perk Point speed$/, '$1 天赋点获取速度'],
        [/^([+\-\d\.,%]+) Bonus level on all Trainings$/, '$1 所有训练奖励等级'],
        [/^([+\-\d\.,%]+) Travel time$/, '$1 训练时间'],
        [/^([+\-\d\.,%]+) Training time$/, '$1 旅行时间'],
        [/^([+\-\d\.,%]+) Runes found$/, '$1 发现的符文'],
        [/^([+\-\d\.,%]+) Materials found$/, '$1 发现的材料'],
        [/^([+\-\d\.,%]+) Ash production per 1000 Clones$/, '每 1000 个分身 $1 灰烬产量'],
        [/^([+\-\d\.,%]+) Clone cost$/, '$1 分身成本'],
        [/^([+\-\d\.,%]+) Total clones$/, '$1 总分身'],
        [/^([+\-\d\.,%]+) Building material cost$/, '$1 建筑材料消耗'],
        [/^([+\-\d\.,%]+) extra relic chance$/, '$1 遗物掉落几率'],
        [/^([+\-\d\.,%]+) Wood production$/, '$1 木材产量'],
        [/^([+\-\d\.,%]+) Stone production$/, '$1 石材产量'],
        [/^([+\-\d\.,%]+) Metal production$/, '$1 金属产量'],
        [/^([+\-\d\.,%]+) Crystal production$/, '$1 水晶产量'],
        [/^([+\-\d\.,%]+) Resource production$/, '$1 资源产量'],
        [/^([+\-\d\.,%]+) Rune production$/, '$1 符文产量'],
        [/^([+\-\d\.,%]+) Research time$/, '$1 研究时间'],
        [/^([+\-\d\.,%]+) Research cost$/, '$1 研究成本'],
        [/^([+\-\d\.,%]+) Treasury effect$/, '$1 宝库效果'],
        [/^([+\-\d\.,%]+) Building time$/, '$1 建造时间'],
        [/^([+\-\d\.,%]+) extra Wood found$/, '额外找到 $1 个木材'],
        [/^([+\-\d\.,%]+) extra Stone found$/, '额外找到 $1 个石头'],
        [/^([+\-\d\.,%]+) extra Runes found$/, '额外找到 $1 个符文'],
        [/^([+\-\d\.,%]+) Material production from Buildings$/, '$1 材料产量提升'],
        [/^([+\-\d\.,%]+) Building construction time$/, '$1 建筑建造时间'],
        [/^([+\-\d\.,%]+) of Treasury bonus per second$/, '$1 每秒宝库收益加成'],
        [/^([+\-\d\.,%]+) Body Part cost$/, '躯体部位成本减少 $1'],
        [/^([+\-\d\.,%]+) Body Part bonus levels$/, '躯体部位额外等级提升 $1'],
        [/^([+\-\d\.,%]+) to selected Relic$/, '所选遗物效果提升 $1'],
        [/^([+\-\d\.,%]+) minutes ago$/, '$1 分钟前'],
        [/^([+\-\d\.,%]+) hours ago$/, '$1 小时前'],
        [/^([+\-\d\.,%]+) hour ago$/, '$1 小时前'],
        [/^([+\-\d\.,%]+) day ago$/, '$1 天前'],
        [/^([+\-\d\.,%]+) days ago$/, '$1 天前'],
        [/^If focused \(\+(\d+)%\)$/, '已聚焦（增幅+$1%）'],

        [/^Stone Depot completed \(Level (\d+)\)$/, '石材仓库已建造完成 （等级 $1）'],
        [/^Metal Storage completed \(Level (\d+)\)$/, '金属仓库已建造完成 （等级 $1）'],
        [/^Wood Pile completed \(Level (\d+)\)$/, '木材堆已建造完成 （等级 $1）'],
        [/^Fort completed \(Level (\d+)\)$/, '堡垒已建造完成 （等级 $1）'],
        [/^Barracks completed \(Level (\d+)\)$/, '兵营已建造完成 （等级 $1）'],
        [/^Watchtower completed \(Level (\d+)\)$/, '瞭望塔已建造完成 （等级 $1）'],
        [/^Forestry completed \(Level (\d+)\)$/, '林场已建造完成 （等级 $1）'],
        [/^Quarry completed \(Level (\d+)\)$/, '采石场已建造完成 （等级 $1）'],
        [/^Ash Silo completed \(Level (\d+)\)$/, '灰烬筒仓已建造完成 （等级 $1）'],
        [/^Mine completed \(Level (\d+)\)$/, '矿井已建造完成 （等级 $1）'],
        [/^Crystal Vault completed \(Level (\d+)\)$/, '水晶仓库已建造完成 （等级 $1）'],
        [/^Crystal Mine completed \(Level (\d+)\)$/, '水晶矿井已建造完成 （等级 $1）'],
        [/^Treasury completed \(Level (\d+)\)$/, '宝库已建造完成 （等级 $1）'],
        [/^Training Grounds completed \(Level (\d+)\)$/, '训练场已建造完成 （等级 $1）'],
        [/^Construction Workshop completed \(Level (\d+)\)$/, '建造工坊已建造完成 （等级 $1）'],
        [/^Outrider Post completed \(Level (\d+)\)$/, '先遣哨所已建造完成 （等级 $1）'],
        [/^Laboratory completed \(Level (\d+)\)$/, '实验室已建造完成 （等级 $1）'],
        [/^Sawmill completed \(Level (\d+)\)$/, '锯木厂已建造完成 （等级 $1）'],
        [/^Masonry completed \(Level (\d+)\)$/, '石匠屋已建造完成 （等级 $1）'],
        [/^Smelter completed \(Level (\d+)\)$/, '熔炉已建造完成 （等级 $1）'],
        [/^Phylactery Hall completed \(Level (\d+)\)$/, '护魂殿堂已建造完成 （等级 $1）'],
        [/^Jeweler completed \(Level (\d+)\)$/, '珠宝匠已建造完成 （等级 $1）'],

        [/^([+\-\d\.,%]+) per level multiplicatively$/, '每级 $1（乘法叠加）'],
        [/^([+\-\d\.,%]+) per level additively$/, '每级加算 $1'],
        [/^Research complete: Structural Analysis of Ash \(Level (\d+)\)$/, '研究完成：灰烬的结构分析 （等级 $1）'],
        [/^Research complete: Optimized Topology \(Level (\d+)\)$/, '研究完成：优化拓扑 （等级 $1）'],
        [/^Research complete: Production Acceleration \(Level (\d+)\)$/, '研究完成：生产加速 （等级 $1）'],
        [/^Research complete: Local Surveying \(Level (\d+)\)$/, '研究完成：局部测绘 （等级 $1）'],
        [/^Research complete: Construction Streamlining \(Level (\d+)\)$/, '研究完成：简化建造 （等级 $1）'],
        [/^Research complete: Rune Synthesis \(Level (\d+)\)$/, '研究完成：符文合成 （等级 $1）'],

        [/^\s*([+\-\d\.,%]+)d\s+([+\-\d\.,%]+)h\s+([+\-\d\.,%]+)m\s+([+\-\d\.,%]+)s\s*$/, '$1天 $2时 $3分 $4秒'],
        [/^\s*([+\-\d\.,%]+)h\s+([+\-\d\.,%]+)m\s+([+\-\d\.,%]+)s\s*$/, '$1时 $2分 $3秒'],
        [/^\s*([+\-\d\.,%]+)m\s+([+\-\d\.,%]+)s\s*$/, '$1分 $2秒'],
        [/^\s*([+\-\d\.,%]+)s\s*$/, '$1秒'],

        [/^\+(\d+) starting Clone after each Portal Jump$/, '每次传送跃迁后，初始分身 +$1'],
        [/^\+(\d+) starting Clones after each Portal Jump$/, '每次传送跃迁后，初始分身 +$1'],
        [/^\+(\d+) inventory slots$/, '背包格位数 +$1'],
        [/^-(\d+)% building costs$/, '建筑成本 -$1%'],
        [/^-(\d+)% construction time$/, '建造时间 -$1%'],
        [/^-(\d+)% Clones required to Form Body$/, '重塑躯体所需分身 -$1%'],
        [/^-(\d+)% encounter time$/, '遭遇耗时 -$1%'],
        [/^Earn (\d+)% more Vortex Essence$/, '漩涡精华获取量 +$1%'],
        [/^Gain \+(\d+)% more Souls from defeated foes$/, '击杀怪物灵魂获取量 +$1%'],
        [/^Lose (\d+)% of area progress when recovering$/, '复活时损失区域进度 $1%'],
        [/^Obliteration costs reduced by (\d+)%$/, '湮灭成本降低 $1%'],
        [/^Research costs reduced by (\d+)%$/, '研究成本降低 $1%'],
        [/^Time modifier for Auto-Exploration: ([+\-\d\.,%]+)x -> ([+\-\d\.,%]+)x$/, '自动探索时间倍率：$1倍 → $2倍'],
        [/^keep (\d+)% of Relics on Portal Jump$/, '传送跃迁保留 $1% 遗物'],

        [/^\[item lvl: (\d+)\]$/, '[物品等级：$1]'],
        [/^Average item level: ~(\d+)$/, '平均物品等级： ~$1'],

        [/^\+(\d+\.\d+) SRV$/, '+$1 生存能力'],
        [/^\+(\d+\.\d+) SPD$/, '+$1 速度'],
        [/^\+(\d+\.\d+)% to Critical Strike Chance$/, '暴击率 +$1%'],
        [/^\+(\d+\.\d+) PRC$/, '+$1 暴击伤害'],
        [/^-(\d+)% Building Cost$/, '建筑成本 -$1%'],
        [/^\+(\d+) EVA$/, '+$1 闪避'],
        [/^\+(\d+)% Increased Damage$/, '伤害增加 +$1%'],
        [/^\+(\d+)% increased Item Rarity$/, '物品掉率 +$1%'],
        [/^\+(\d+)% Ash Production$/, '灰烬产出 +$1%'],
        [/^\+(\d+\.\d+)% to Critical Strike Damage$/, '暴击伤害 +$1%'],
        [/^\+(\d+) VIT$/, '+$1 体力'],
        [/^Regenerate (\d+\.\d+) Life per second$/, '每秒恢复生命 $1'],
        [/^-(\d+)% Research Cost$/, '研究成本 -$1%'],
        [/^(\d+\.\d+)% of Damage Leeched as Life$/, '吸血 $1%'],

    ]);

    // ================= 核心翻译逻辑 =================
    function cnItemByTag(text, itemgroup, node, textori){
        for (let i in itemgroup){
            if (i[0] == '.') {
                let current_node = node;
                while (current_node){
                    if ( current_node.classList && current_node.classList.contains(i.substr(1)) ) return itemgroup[i];
                    else if( current_node.parentElement && current_node.parentElement != document.documentElement ) current_node = current_node.parentElement;
                    else break;
                }
            }
            else if (i[0] == '#'){
                let current_node = node;
                while (current_node){
                    if ( current_node.id == i.substr(1) ) return itemgroup[i];
                    else if( current_node.parentElement && current_node.parentElement != document.documentElement ) current_node = current_node.parentElement;
                    else break;
                }
            }
            else if (i[0] == '$'){
                if (document.querySelector(i.substr(1)) != null) return itemgroup[i];
            }
            else if (i[0] == '*'){
                if ( textori.includes(i.substr(1)) ) return itemgroup[i];
            }
        }
        return null;
    }

    function cnItem(text, node) {
        if (typeof (text) != "string") return text;
        let textori = text;

        let text_prefix = "";
        for (let prefix in cnPrefix) {
            if (text.startsWith(prefix)) {
                text_prefix += cnPrefix[prefix];
                text = text.substr(prefix.length);
            }
        }

        let text_postfix = "";
        for (let postfix in cnPostfix) {
            if (text.endsWith(postfix)) {
                text_postfix = cnPostfix[postfix] + text_postfix;
                text = text.substr(0, text.length - postfix.length);
            }
        }

        let text_reg_exclude_postfix = "";
        for (let reg of cnExcludePostfix) {
            let result = text.match(reg);
            if (result) {
                text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
                text = text.substr(0, text.length - result[0].length);
            }
        }

        for (let reg of cnExcludeWhole) {
            if (reg.test(text)) return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }

        for (let [key, value] of cnRegReplace.entries()) {
            if (key.test(text)) return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }

        for (let i in cnItems) {
            if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])){
                return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
            } else if ( typeof(cnItems[i]) == "object" && text == i ){
                let result = cnItemByTag(i, cnItems[i], node, textori);
                if (result != null) return text_prefix + result + text_reg_exclude_postfix + text_postfix;
            }
        }

        // 移除了原版收集生词的逻辑，直接返回原词，提升性能
        return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    // 采用 TreeWalker 替代原版递归，极大提升性能
    function translateNode(rootNode) {
        let walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);
        let textNode;
        let tasks = [];
        while (textNode = walker.nextNode()) {
            let parent = textNode.parentNode;
            if (parent && (parent.nodeName === 'SCRIPT' || parent.nodeName === 'STYLE' || parent.nodeName === 'TEXTAREA')) continue;

            let originalText = textNode.nodeValue;
            let translatedText = cnItem(originalText, textNode);
            if (originalText !== translatedText) {
                tasks.push({ node: textNode, text: translatedText });
            }
        }
        // 统一修改 DOM，避免边遍历边修改造成的重绘卡顿
        for (let task of tasks) {
            task.node.nodeValue = task.text;
        }
    }

    // ================= 启动与监听 =================
    console.log("加载汉化模块...");
    translateNode(document.body);

    const observer = new MutationObserver(function (mutations) {
        let tasks = [];
        for (let mutation of mutations) {
            if (mutation.type === 'childList') {
                for (let node of mutation.addedNodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        let originalText = node.nodeValue;
                        let translatedText = cnItem(originalText, node);
                        if (originalText !== translatedText) tasks.push({ node: node, text: translatedText });
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                            translateNode(node);
                        }
                    }
                }
            } else if (mutation.type === 'characterData') {
                let originalText = mutation.target.nodeValue;
                let translatedText = cnItem(originalText, mutation.target);
                if (originalText !== translatedText) tasks.push({ node: mutation.target, text: translatedText });
            }
        }
        for (let task of tasks) {
            task.node.nodeValue = task.text;
        }
    });

    observer.observe(document.body, { childList: true, subtree: true, characterData: true });

})();