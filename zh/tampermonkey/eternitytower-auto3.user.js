// ==UserScript==
// @name         《永恒之塔》自动化脚本-多标签页版（一个标签页只做一件事）
// @namespace    https://www.gityx.com/
// @version       0.0.33.15
// @description  Eternity Tower (http://tower.bluesky.site) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @icon         http://tower.bluesky.site/favicon.png
// @license      MIT
// @include      *http://tower.bluesky.site*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/eternitytower-auto3.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/eternitytower-auto3.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2023/09/24 00:05
 * Author: guoba
 * View: http://www.gityx.com
 * ---------------------------
 */

/**
 * 更新日志
 * 0.0.x
 * ·种地：自定义种子没了的情况下，应该要自动种其它种子；
 * 0.0.33
 * ·战斗技能：1技能放治疗技能的话，当生命值低于80%就会给自己加血。
 * 0.0.32
 * ·战斗：默认关闭“死亡通知”，不然组队的时候会一直弹框，很恶心。
 * 0.0.31
 * ·修复自动切换黑色主题的问题；
 * 0.0.30
 * ·能量：修复由于作者改动导致的自动吃能量食物的问题；
 * 0.0.29
 * ·种地：优化种地判断，以空地块图片作为判断依据，避免点击多次种子
 * 0.0.28
 * ·种地：收获时间改为自定义，不再根据种子生长时间设定，防止时间冲突浪费一轮。
 * 0.0.27.14
 * ·切战斗界面：加上判断，如果没启用战斗，就不跳转战斗界面
 * 0.0.27.7
 * ·无人值守模式：加个按钮，当你要睡觉、出门的时候自己启动。防止多开标签页的情况下所有页面都默认启动脚本了。
 * 0.0.27.6
 * ·自动记录配置：由于作者经常半夜重启服务器，影响咱们通宵挂机，特加上记录配置的功能，页面刷新时自动加载你上次的设置，避免影响挂机进度。
 * 0.0.26
 * ·种地：页面停留时间从12秒加到20秒，防止时间短了没种完地；
 * 0.0.25
 * ·判断手机上吃食物、种地改为点两次，点一次只是弹出介绍，优化了一下；
 * 0.0.24
 * ·挖矿：鉴于后期精华太难遇到，加上判断界面上是否有精华矿石，有的话优先挖（似乎没生效）；
 * 0.0.22
 * ·农场：修复有1个未成熟作物，导致其它空地无法种植的情况；
 * 0.0.21
 * ·单人战斗：战斗判定间隔从5秒改为10秒，防止卡顿导致残血开战。
 * 0.0.20
 * ·单人战斗：停止战斗默认血量判断从10%改为30%
 * ·自动吃吃柠檬：默认能量判断从30改为20
 * 0.0.19
 * ·挖矿：之前挖宝石、自定义矿石后，剩余能量没地方用，有点浪费；现在挖完宝石、自定义矿后，自动触发挖所有矿石，消耗所有能量，确保能量不浪费。
 * 0.0.18
 * ·种地：先切回到第一个Tab，防止因为停留在“商店”界面导致种地失败；
 * ·挖矿：先切回到第一个Tab，防止因为停留在“装备”、“工人”界面导致种地失败；
 * ·种地、挖矿时，停留时长从8秒延长到12秒，尽可能避免种地、采矿进行到一半就切页面了。
 */

! function () {
    var content = '';
    content += '<!-- 脚本动态内容 开始 -->';
    content += '<style>.main-im{position:fixed;right:10px;bottom:50px;line-height:normal;z-index:9999}.main-im .qq-a{display:block;width:106px;height:116px;font-size:14px;color:#0484cd !important;text-align:center;position:relative;}.main-im .qq-a span{bottom:5px;position:absolute;width:90px;left:10px;}.main-im .qq-hover-c{width:70px;height:70px;border-radius:35px;position:absolute;left:18px;top:10px;overflow:hidden;z-index:9;}.main-im .qq-container{z-index:99;position:absolute;width:109px;height:118px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:1px solid #dddddd;background-image:url("//g8hh.com.cn/static/images/kf/qq-icon-bg.png");background-position:center 8px;background-repeat:no-repeat;}.main-im .img-qq{max-width:60px;display:block;position:absolute;left:6px;top:3px;-webkit-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s;}.main-im .im-qq:hover .img-qq{max-width:70px;left:1px;top:8px;position:absolute;color:#ff0000 !important;}.main-im .im_main{background-color:#F9FAFB !important;border:1px solid #dddddd;border-radius:10px;background-color:#F9FAFB !important;display:none;z-index:999;}.main-im .im_main .im-tel{color:#000000 !important;text-align:center;width:109px;height:105px;border-bottom:1px solid #dddddd;}.main-im .im_main .im-tel div{font-weight:bold;font-size:12px;margin-top:6px;}.main-im .im_main .im-tel .tel-num{font-family:Arial;font-weight:bold;}.main-im .im_main .im-tel .tel-num a{color:#e66d15 !important;}.main-im .im_main .im-tel:hover{background-color:#fafafa !important;}.main-im .im_main .weixing-container{width:55px;height:47px;border-right:1px solid #dddddd;background-color:#f5f5f5 !important;border-bottom-left-radius:10px;background-image:url("//g8hh.com.cn/static/images/kf/weixing-icon.png");background-position:center;background-repeat:no-repeat;float:left;}.main-im .im_main .weixing-show{width:670px;height:400px;background-color:#ffffff;border-radius:10px;border:1px solid #dddddd;position:absolute;left:-680px;top:-354px;overflow-y:auto;}.main-im .im_main .weixing-show .weixing-sanjiao{width:0;height:0;border-style:solid;border-color:transparent transparent transparent #ffffff;border-width:6px;left:112px;top:134px;position:absolute;z-index:2;}.main-im .im_main .weixing-show .weixing-sanjiao-big{width:0;height:0;border-style:solid;border-color:transparent transparent transparent #dddddd;border-width:8px;left:112px;top:132px;position:absolute;}.main-im .im_main .weixing-show .weixing-ma{width:104px;height:103px;padding-left:5px;padding-top:5px;}.main-im .im_main .weixing-show .weixing-txt{position:absolute;top:110px;left:7px;width:100px;margin:0 auto;text-align:center;color:#000 !important;}.main-im .im_main .weixing-show .weixing-txt a,.main-im .im_main .weixing-show .weixing-txt a:hover,.main-im .im_main .im-tel .tel-num a:hover{color:#ff0000 !important;}.main-im .im_main .go-top{width:50px;height:47px;background-color:#f5f5f5;border-bottom-right-radius:10px;background-image:url("//g8hh.com.cn/static/images/kf/totop-icon.png");float:right;background-position:center center;background-repeat:no-repeat;}.main-im .im_main .go-top a{display:block;width:52px;height:47px;}.main-im .close-im{position:absolute;right:-10px;top:-12px;z-index:100;width:24px;height:24px;}.main-im .close-im a{display:block;width:24px;height:24px;background-image:url("//g8hh.com.cn/static/images/kf/close_im.png") !important;text-decoration:none;background-position:left top;background-repeat:no-repeat;}.main-im .close-im a:hover{text-decoration:none;}.main-im .open-im{cursor:pointer;margin-left:68px;width:30px;height:30px;background-image:url("//g8hh.com.cn/static/images/kf/open_im.png");background-repeat:no-repeat;background-position:left top;cursor:pointer;background-size:100%;z-index:100;position:fixed;right:10px;bottom:320px;}@media screen and (max-width:480px){.main-im{display:none;}}.JB-form{padding:10px;color:#000;}.JB-form *{margin:5px;font-size:13px;}.JB-form .tit{font-weight:bold;}.JB-form input{width:100px;height:30px;line-height:30px;text-align:center;}.JB-form input#minTime,.JB-form input#famingTime{width:50px;}.JB-form button{width:50px;height:30px;}#nofood,#noseed,#noSkill{opacity:0;color:red;}#nofood.show,#noseed.show,#noSkill.show{opacity:1;}.JB-form input[type=checkbox]{width:auto;vertical-align: middle;}.JB-form label{user-select: none;margin-left:0;}</style>';
    content += '<div class="main-im">';
    content += '<div id="open_im" class="open-im">&nbsp;</div>  ';
    content += '<div class="im_main" id="im_main">';
    content += '<div id="close_im" class="close-im"><a href="javascript:void(0);" title="点击关闭">&nbsp;</a></div>';
    content += '<div class="qq-container"></div>';
    content += '<div class="qq-hover-c"><img class="img-qq" src="//g8hh.com.cn/static/images/kf/qq.png"></div>';
    content += '<a href="https://qm.qq.com/cgi-bin/qm/qr?k=g-yVu_Uf_rCUbHOVbLHy-ko0G7nJl1nI&jump_from=webapi" target="_blank" class="im-qq qq-a" title="点击加入 - 永恒之塔交流群:867979275">';
    content += '<span>点击加群</span>';
    content += '</a>';
    content += '<div class="im-tel">';
    content += '<div>QQ群号:</div>';
    content += '<div class="tel-num">867979275</div>';
    content += '<div>更多同类游戏:</div>';
    content += '<div class="tel-num"><a href="http://www.gityx.com" target="_blank" title="我们有域名啦~">Git游戏</a><a href="https://gityx.com/notify/447.html" target="_blank" style="margin-left:5px;" title="点击查看游戏攻略">论坛</a><a href="http://g8hh.com.cn/" target="_blank" style="margin-left:5px;" title="锅巴汉化">锅巴汉化</a></div>';
    content += '</div>';
    content += '<div class="im-footer" style="position:relative">';
    content += '<div class="weixing-container">';
    content += '<div class="weixing-show">';
    //无人值守-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">无人值守模式（适合睡觉、出门时启用挂机，当服务器更新时，实现自动重启脚本）</div>';
    content += '* 首次使用需配置好需要的各项条件，然后手动点击其后面的“启动”按钮一次，完成后再启动这个 →';
    content += '<button id="nobodyStart" type="primary" >启动</button>';
    content += '<button id="nobodyStop" type="danger" disabled>停止</button>';
    content += '</div>';
    //无人值守-结束
    //吃食物-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">吃食物（必须在战斗界面启用；包里没有的食物不要选） - 《<a href="https://shimo.im/sheets/ypTrXqgyP6Cg3vDg/forrm/" target="_blank">攻略</a>》</div>';
    content += '想回血/回能量必填<input id="username" type="text" value="" placeholder="输入你的用户名"  autocomplete="on"/>';
    content += '<br/>';
    content += '生命值低于<select id="minHP">';
    content += '<option value="1">1%</option>';
    content += '<option value="5">5%</option>';
    content += '<option value="10">10%</option>';
    content += '<option value="20">20%</option>';
    content += '<option value="30" selected>30%</option>';
    content += '<option value="40">40%</option>';
    content += '<option value="50">50%</option>';
    content += '<option value="60">60%</option>';
    content += '<option value="70">70%</option>';
    content += '<option value="80">80%</option>';
    content += '<option value="90">90%</option>';
    content += '</select>时吃';
    content += '<select id="Food1">';
    content += '<option value="watermelon" selected>西瓜-回200血-持续10秒</option>';
    content += '<option value="carrot">胡萝卜-回350血-持续10秒</option>';
    content += '<option value="banana">香蕉-回650血-持续13秒</option>';
    content += '<option value="acaiBerry" >巴西莓-回300血-持续25秒</option>';
    content += '<option value="pear" >梨-回150血-持续25秒</option>';
    content += '<option value="redApple" >红苹果-回185血-持续30秒</option>';
    content += '<option value="lettice" >生菜-回75血-持续30秒</option>';
    content += '<option value="grapeFruit" >葡萄柚-回150血-持续45秒</option>';
    content += '<option value="pineapple">菠萝-回550血-持续80秒</option>';
    content += '<option value="orange" >橙子-回750血-持续80秒</option>';
    content += '<option value="potato" >土豆-回2700血-持续900秒</option>';
    content += '<option value="tamarindHoney" >罗望子蜂蜜-回18000血-持续900秒</option>';
    content += '<option value="rockmelon">哈密瓜-秒回900生命；回5能量和360生命-持续120秒</option>';
    content += '<option value="dragonfruit">火龙果-秒回450生命；回2能量和300生命-持续120秒</option>';
    content += '<option value="eventVDchocolate">巧克力-秒回1000生命；回4能量和1500生命-持续20秒</option>';
    content += '</select>';
    content += '<button id="startEatFood" type="primary" >启动</button>';
    content += '<button id="stopEatFood" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '能量值低于<select id="minEnergy">';
    content += '<option value="5">5</option>';
    content += '<option value="10">10</option>';
    content += '<option value="15">15</option>';
    content += '<option value="20" selected>20</option>';
    content += '<option value="25">25</option>';
    content += '<option value="30">30</option>';
    content += '<option value="35">35</option>';
    content += '</select>时吃';
    content += '<select id="Food2">';
    content += '<option value="lemon" selected>柠檬-回9能量-冷却300秒</option>';
    content += '<option value="rockmelon">哈密瓜-秒回900生命；回5能量和360生命-持续120秒</option>';
    content += '<option value="dragonfruit">火龙果-秒回450生命；回2能量和300生命-持续120秒</option>';
    content += '<option value="eventVDchocolate">巧克力-秒回1000生命；回4能量和1500生命-持续20秒</option>';
    content += '<option value="lemonade">柠檬汽水-秒回20能量</option>';
    content += '<option value="lemonHoney">柠檬蜂蜜-回30能量-持续60秒</option>';
    content += '</select>';
    content += '<button id="startEatEnergyFood" type="primary" >启动</button>';
    content += '<button id="stopEatEnergyFood" type="danger" disabled>停止</button>';
    content += '<div id="nofood">你没有这种食物，去农场种一些吧~</div>';
    content += '</div>';
    //吃食物-结束
    //选择技能-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">自动放技能（T技能是选目标的，不需要点）</div>';
    content += '<input type="checkbox" id="check1" checked><label for="check1">1技能</label>';
    content += '<input type="checkbox" id="check2" checked><label for="check2">2技能</label>';
    content += '<input type="checkbox" id="check3" checked><label for="check3">3技能</label>';
    content += '<input type="checkbox" id="check4" checked><label for="check4">4技能</label>';
    content += '<input type="checkbox" id="check5" checked><label for="check5">5技能</label>';
    content += '<button id="startSkill" type="primary" >启动</button>';
    content += '<button id="stopSkill" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '自动回血，1技能放治疗技能，低于80%血就会自动回血。1技能不是治疗技能时不要启动';
    content += '<br/>';
    content += '<button id="autoHeal" type="primary">开启</button>';
    content += '<button id="stopHeal" type="danger" disabled>关闭</button>';
    content += '<br/>';
    content += '优先攻击最右位置的怪物（部分怪物会召唤小弟）需先启动自动技能';
    content += '<button id="attLeft" type="primary">开启</button>';
    content += '<button id="attRight" type="danger" disabled>关闭</button>';
    content += '</div>';
    //选择技能-结束
    //单人战斗-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">单人战斗（Solo）</div>';
    content += '生命值低于<select id="fightMinHP">';
    content += '<option value="1">1%</option>';
    content += '<option value="5" >5%</option>';
    content += '<option value="10">10%</option>';
    content += '<option value="20">20%</option>';
    content += '<option value="30" selected>30%</option>';
    content += '<option value="40">40%</option>';
    content += '<option value="50">50%</option>';
    content += '<option value="60">60%</option>';
    content += '<option value="70">70%</option>';
    content += '<option value="80">80%</option>';
    content += '<option value="90">90%</option>';
    content += '</select>时停止战斗；';
    content += '能量值低于<select id="fightMinEnergy">';
    content += '<option value="1" >1</option>';
    content += '<option value="3" >3</option>';
    content += '<option value="5" selected>5</option>';
    content += '<option value="10">10</option>';
    content += '<option value="15">15</option>';
    content += '<option value="20">20</option>';
    content += '<option value="25">25</option>';
    content += '<option value="30">30</option>';
    content += '<option value="35">35</option>';
    content += '</select>时停止战斗';
    content += '<br/>';
    content += '间隔 <input id="soloFightTime" type="text" value="10" placeholder="输入整数数字" autocomplete="on"/> 秒自动开启战斗一次。';
    content += '<br/>';
    content += '刷固定楼层';
    content += '<button id="startSolo" type="primary" >启动</button>';
    content += '<button id="stopSolo" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '自动爬楼层';
    content += '<button id="startSoloUp" type="primary" >启动</button>';
    content += '<button id="stopSoloUp" type="danger" disabled>停止</button>';
    content += '</div>';
    //单人战斗-结束
    //组队战斗-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">组队战斗（爬塔）</div>';
    content += '组队战斗';
    content += ' 间隔 <input id="fightTime" type="text" value="60" placeholder="输入整数数字" autocomplete="on"/> 秒自动开启战斗一次。';
    content += '<button id="startGroupFight" type="primary" >启动</button>';
    content += '<button id="stopGroupFight" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '（建议设久一点，防止残血开战导致惨败）';
    content += '<br/>';
    content += '<br/>';
    content += '队长功能：队友（能量低于2、没吃东西、没开自动吃能量食物脚本）时自动踢人，防止无法继续战斗</label>';
    content += '<button id="startTi" type="primary" >启动</button>';
    content += '<button id="stopTi" type="danger" disabled>停止</button>';
    content += '</div>';
    //组队战斗-结束
    //冒险（AFK）-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">冒险（AFK）</div>';
    content += '自动添加冒险到队列里';
    content += '<button id="startAFK" type="primary" >启动</button>';
    content += '<button id="stopAFK" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '每60秒检测一次，自动收集已完成的冒险；按冒险时长（从短到长）自动添加冒险到队列。';
    content += '</div>';
    //冒险（AFK）-结束
    //挖矿-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">挖矿（优先挖宝石，然后挖选择的，如果两者都没有，则挖其它矿。默认30秒挖一次）</div>';
    content += '定时自动挖 ';
    content += '<select id="MingType">';
    content += '<option value="coalCluster" selected>煤簇</option>';
    content += '<option value="stoneCluster">石头簇</option>';
    content += '<option value="silverCluster">银簇</option>';
    content += '<option value="ironCluster">铁簇</option>';
    content += '<option value="copperCluster">铜簇</option>';
    content += '<option value="goldCluster">黄金簇</option>';
    content += '<option value="bronzeCluster">青铜簇</option>';
    content += '<option value="tinCluster">锡簇</option>';
    content += '<option value="steelCluster">钢簇</option>';
    content += '<option value="carbonCluster">碳簇</option>';
    content += '<option value="titaniumCluster">钛簇</option>';
    content += '<option value="platinumCluster">铂簇</option>';
    content += '<option value="obsidianCluster">黑曜石簇</option>';
    content += '<option value="mithrilCluster">秘银簇</option>';
    content += '<option value="cursedCluster">诅咒簇</option>';
    content += '<option value="adamantiumCluster">埃德曼合金簇</option>';
    content += '<option value="orichalcumCluster">星陨石簇</option>';
    content += '<option value="fairySteelCluster">仙女钢簇</option>';
    content += '<option value="coal">煤</option>';
    content += '<option value="stone">石头</option>';
    content += '<option value="copper">铜</option>';
    content += '<option value="bronze">青铜</option>';
    content += '<option value="tin">锡</option>';
    content += '<option value="iron">铁</option>';
    content += '<option value="silver">银</option>';
    content += '<option value="gold">黄金</option>';
    content += '<option value="steel">钢</option>';
    content += '<option value="carbon">碳</option>';
    content += '<option value="titanium">钛</option>';
    content += '<option value="platinum">铂</option>';
    content += '<option value="ruby">红宝石</option>';
    content += '<option value="tungsten">钨</option>';
    content += '<option value="cobalt">钴</option>';
    content += '<option value="obsidian">黑曜石</option>';
    content += '<option value="mithril">秘银</option>';
    content += '<option value="emerald">翡翠</option>';
    content += '<option value="adamantium">埃德曼合金</option>';
    content += '<option value="lapislazuli">天青石</option>';
    content += '<option value="orichalcum">星陨石</option>';
    content += '<option value="meteorite">陨石</option>';
    content += '<option value="fairySteel">仙女钢</option>';
    content += '<option value="elvenSteel">精灵钢</option>';
    content += '<option value="cursed">诅咒石</option>';
    content += '<option value="darksteel">暗钢</option>';
    content += '<option value="astral">星芒石</option>';
    content += '<option value="tanzanite">坦桑石</option>';
    content += '<option value="titanfoil">钛箔石</option>';
    content += '<option value="relicrock">冰岩</option>';
    content += '<option value="fireOpal">火蛋白石</option>';
    content += '<option value="silverEssence">银精华</option>';
    content += '<option value="goldEssence">黄金精华</option>';
    content += '<option value="steelEssence">钢精华</option>';
    content += '<option value="carbonEssence">碳精华</option>';
    content += '<option value="platinumEssence">铂精华</option>';
    content += '<option value="tungstenEssence">钨精华</option>';
    content += '<option value="titaniumEssence">钛精华</option>';
    content += '<option value="obsidianEssence">黑曜石精华</option>';
    content += '<option value="cobaltEssence">钴精华</option>';
    content += '<option value="mithrilEssence">秘银精华</option>';
    content += '<option value="adamantiumEssence">埃德曼合金精华</option>';
    content += '<option value="meteoriteEssence">陨石精华</option>';
    content += '<option value="cursedEssence">诅咒精华</option>';
    content += '</select> ';
    content += '挖矿间隔 <input id="minTime" type="text" value="30" placeholder="输入整数数字" autocomplete="on"/> 秒；';
    content += '<br/>';
    content += '挖矿能量低于<select id="MingEnergy">';
    content += '<option value="5">5%</option>';
    content += '<option value="10" selected>10%</option>';
    content += '<option value="20">20%</option>';
    content += '<option value="30" >30%</option>';
    content += '<option value="40">40%</option>';
    content += '<option value="50">50%</option>';
    content += '<option value="60">60%</option>';
    content += '<option value="70">70%</option>';
    content += '<option value="80">80%</option>';
    content += '<option value="90">90%</option>';
    content += '</select>时停止挖矿；';
    content += '<button id="startMing" type="primary" >启动</button>';
    content += '<button id="stopMing" type="danger" disabled>停止</button>';
    content += '</div>';
    //挖矿-结束

    //种地-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">自动种地</div>';
    content += '定时自动种植 <select id="FoodSeed">';
    content += '<option value="letticeSeed">生菜-回75血-持续30秒-需要种植1级-生长需1分钟</option>';
    content += '<option value="grapeFruitSeed" >葡萄柚-回150血-持续45秒-需要种植3级</option>';
    content += '<option value="redAppleSeed" >红苹果-回185血-持续30秒-需要种植5级-生长需10分钟</option>';
    content += '<option value="pearSeed" >梨-回150血-持续25秒-需要种植8级</option>';
    content += '<option value="pineappleSeed" >菠萝-回550血-持续80秒-需要种植10级</option>';
    content += '<option value="watermelonSeed">西瓜-回200血-持续10秒-需要种植15级-生长需15分钟</option>';
    content += '<option value="carrotSeed">胡萝卜-回350血-持续10秒-需要种植20级-生长需10分钟</option>';
    content += '<option value="potatoSeed" >土豆-回2700血-持续900秒-需要种植20级</option>';
    content += '<option value="acaiBerrySeed" >巴西莓-回300血-持续25秒-需要种植30级</option>';
    content += '<option value="orangeSeed" >橙子-回750血-持续80秒-需要种植35级</option>';
    content += '<option value="bananaSeed">香蕉-回650血-持续13秒-需要种植40级-生长需10分钟</option>';
    content += '<option value="sweetPotatoSeed" >甘薯-回4050血-持续900秒-需要种植35级</option>';
    content += '<option value="lemonSeed">柠檬-回9能量-冷却300秒-需要种植2级-生长需5分钟</option>';
    content += '<option value="rockmelonSeed" selected>哈密瓜-秒回900生命；回5能量和360生命-持续120秒-需要种植50级-生长需17分钟</option>';
    content += '<option value="snowberrySeed">雪莓-秒回3500生命；额外回复100生命-持续60秒-需要种植50级-生长需8分钟</option>';
    content += '<option value="dragonfruitSeed">火龙果-秒回450生命；回2能量和300生命-持续120秒-需要种植25级</option>';
    content += '<option value="grapesSeed">葡萄-秒回1500生命；额外回复500生命-持续20秒-需要种植65级-生长需15分钟</option>';
    content += '<option value="strawberrySeed">草莓-秒回300生命；额外回复1200生命-持续15秒-需要种植70级-生长需10分钟</option>';

    content += '<option value="marigoldSeed" >万寿菊-可以卖钱-需要种植9级-生长需15分钟</option>';
    content += '<option value="blueRoseSeed" >蓝玫瑰-可以卖钱-需要种植19级-生长需15分钟</option>';
    content += '<option value="chrysanthemumSeed" >菊花-可以卖钱-需要种植19级</option>';
    content += '<option value="pinkHydrangeaSeed" >粉红色的绣球花-可以卖钱-需要种植29级</option>';
    content += '<option value="hydrangeaSeed" >绣球花-可以卖钱-需要种植39级</option>';
    content += '<option value="poppySeed" >罂粟-可以卖钱-需要种植49级</option>';
    content += '<option value="redHydrangeaSeed" >红色绣球花-可以卖钱-需要种植49级</option>';
    content += '<option value="sunburstHydrangeaSeed" >阳光绣球花-可以卖钱-需要种植59级-生长需15分钟</option>';
    content += '<option value="zinniaSeed" >百日菊-可以卖钱-需要种植59级-生长需8小时</option>';
    content += '<option value="crimsonHydrangeaSeed" >深红色绣球花-可以卖钱-需要种植69级-生长需8小时</option>';
    content += '<option value="tulipSeed" >郁金香-可以卖钱-需要种植69级-生长需8小时</option>';
    content += '<option value="lilySeed" >百合-可以卖钱-需要种植79级-生长需15分钟</option>';
    content += '<option value="orchidSeed" >兰花-可以卖钱-需要种植79级-生长需8小时</option>';
    content += '<option value="gardeniaSeed" >栀子花-可以卖钱-需要种植89级-生长需4小时</option>';
    content += '<option value="poenySeed" >牡丹-可以卖钱-需要种植89级-生长需15分钟</option>';

    content += '<option value="rubiaFlowerSeed" >茜草花-可以用来铭刻-需要种植2级-生长需2分钟</option>';
    content += '<option value="basilSeed" >蓬蒿-可以用来铭刻-需要种植4级</option>';
    content += '<option value="pinkRoseSeed" >粉红玫瑰-可以用来铭刻-需要种植5级</option>';
    content += '<option value="endiveSeed" >莴苣-可以用来铭刻-需要种植6级</option>';
    content += '<option value="juniperSeed" >杜松-可以用来铭刻-需要种植7级-生长需10分钟</option>';
    content += '<option value="agrimonySeed" >仙鹤草-可以用来铭刻-需要种植12级</option>';


    content += '<option value="chiliSeed" >辣椒-可以用来铭刻-打怪掉落-需要种植15级</option>';
    content += '<option value="celerySeed" >芹菜-可以用来铭刻-打怪掉落-需要种植20级</option>';
    content += '<option value="cardoonSeed" >刺棘蓟-可以用来铭刻-打怪掉落-需要种植25级</option>';
    content += '<option value="feverfewSeed" >小白菊-可以用来铭刻-打怪掉落-需要种植74级-生长需24分钟</option>';
    content += '<option value="garlicSeed" >大蒜-可以用来铭刻-需要种植90级</option>';

    content += '<option value="pineSeed" >松树-可以获得种植技能经验-需要种植1级-生长需8小时</option>';
    content += '<option value="beechSeed" >榉木-可以获得种植技能经验-需要种植5级-生长需8小时</option>';
    content += '<option value="ashSeed" >岑树-可以获得种植技能经验-需要种植10级-生长需8小时</option>';
    content += '<option value="oakSeed" >橡木-可以获得种植技能经验-需要种植15级</option>';
    content += '<option value="mapleSeed" >枫树-可以获得种植技能经验-需要种植20级</option>';
    content += '<option value="walnutSeed" >核桃树-可以获得种植技能经验-需要种植25级</option>';
    content += '<option value="cherrySeed" >樱桃木-可以获得种植技能经验-需要种植30级</option>';
    content += '<option value="mahoganySeed" >红木-可以获得种植技能经验-需要种植35级</option>';
    content += '<option value="elkSeed" >榆树-可以获得种植技能经验-需要种植40级</option>';
    content += '<option value="blackSeed" >黑木-可以获得种植技能经验-需要种植45级</option>';
    content += '<option value="blueGumSeed" >蓝桉树-可以获得种植技能经验-需要种植50级</option>';
    content += '<option value="cedarSeed" >雪松-可以获得种植技能经验-需要种植55级-生长需8小时</option>';
    content += '<option value="kenafSeed" >红麻-可以获得种植技能经验-需要种植56级-生长需30分钟</option>';
    content += '<option value="denyaSeed" >加蓬盘豆木-可以获得种植技能经验-需要种植60级-生长需8小时</option>';
    content += '<option value="juteSeed" >黄麻-可以获得种植技能经验-需要种植66级-生长需30分钟</option>';
    content += '<option value="larchSeed" >落叶松-可以获得种植技能经验-需要种植75级-生长需8小时</option>';
    content += '<option value="flaxSeed" >亚麻-可以获得种植技能经验-需要种植76级-生长需30分钟</option>';
    content += '<option value="poplarSeed" >非洲菠萝格树-可以获得种植技能经验-需要种植80级-生长需8小时</option>';
    content += '<option value="taliSeed" >非洲菠萝格树-可以获得种植技能经验-需要种植85级-生长需8小时</option>';
    content += '<option value="sisalSeed" >剑麻-可以获得种植技能经验-需要种植86级-生长需30分钟</option>';
    content += '<option value="willowSeed" >柳树-可以获得种植技能经验-需要种植90级-生长需8小时</option>';
    content += '<option value="teakSeed" >柚木-可以获得种植技能经验-需要种植95级-生长需8小时</option>';
    content += '<option value="raffiaSeed" >拉菲草-可以获得种植技能经验-需要种植96级-生长需2小时</option>';

    content += '<option value="cactusSeed" >仙人掌-看起来很有用-需要种植6级-生长需1小时</option>';
    content += '<option value="reedSeed" >芦苇-看起来很有用-需要种植16级</option>';
    content += '<option value="papyrusSeed" >纸莎草-看起来很有用-需要种植26级</option>';
    content += '<option value="bambooSeed" >竹子-看起来很有用-需要种植36级</option>';
    content += '<option value="palmSeed" >棕榈-看起来很有用-需要种植46级</option>';

    content += '</select>';
    content += '<br/>';
    content += ' 生长需要 <input id="famingTime" type="text" value="17" placeholder="" disabled/> 分钟；';
    content += ' 每隔 <input id="myFamingTime" type="text" value="2" placeholder=""/> 分钟自动检测一次成熟；';
    content += '<button id="startFarming" type="primary" >启动</button>';
    content += '<button id="stopFarming" type="danger" disabled>停止</button>';
    content += '<div id="noseed">你没有这种植物种子，去商店买一些吧~</div>';
    content += '</div>';
    //种地-结束

    content += '</div>';
    content += '</div>';
    content += '<div class="go-top"><a href="javascript:;" title="返回顶部"></a> </div>';
    content += '<div style="clear:both"></div>';
    content += '</div>';
    content += '</div>';
    content += '</div>';
    content += '<!-- 脚本动态内容 结束 -->';

    //渲染脚本
    $("body").append(content);

    //关闭小球
    $('#close_im').bind('click', function () {
        $('#main-im').css("height", "0");
        $('#im_main').hide();
        $('#open_im').show();
    });

    //展开小球
    $('#open_im').bind('click', function (e) {
        $('#main-im').css("height", "272");
        $('#im_main').show();
        $(this).hide();
    });

    //页面回到顶部
    $('.go-top').bind('click', function () {
        $(window).scrollTop(0);
    });
    //获取时间
    function nowTime() {
        var d = new Date();
        var my_hours = d.getHours();
        var my_minutes = d.getMinutes();
        var my_seconds = d.getSeconds();
        return my_hours + ":" + my_minutes + ":" + my_seconds
    }
    // 初始化时自动启用上次的脚本配置
    setTimeout(function () {
        // 自动攻击右边敌人
        if (localStorage.getItem('autoFill2') == 'true') {
            $('#nobodyStart').trigger('click');
        }
        // 禁用死亡通知
        $('.disable-combat-deaths').trigger('click');
    }, 5000);
    // 1分钟检测一次页面是否刷新过
    var autoFill2;
    //启动无人值守模式
    var autoSoloUpFight;
    $("#nobodyStart").click(function () {
        autoFill2 = setInterval(autoLoad2, 5000)
        localStorage.setItem('autoFill2', true);
        $(this).attr("disabled", true);
        $("#nobodyStop").attr("disabled", false);
    });

    //停止无人值守模式
    $("#nobodyStop").click(function () {
        clearInterval(autoFill2);
        localStorage.setItem('autoFill2', false);
        $("#nobodyStart").attr("disabled", false);
        $("#nobodyStop").attr("disabled", true);
    });
    var url = window.location.href;
    function autoLoad2() {
        var username = $('#username').val();
        if (username == '') {
            // 如果用户名为空，先尝试从本地读取
            if (localStorage.getItem('username')) {
                username = localStorage.getItem('username');
                //   从本地存储里面取出用户名，填入文本框
                $('#username').val(username)
            }
            // 自动回血
            if (localStorage.getItem('autoEate') == 'true') {
                //   从本地存储里面取出时间间隔，填入文本框
                var minHP = parseInt(localStorage.getItem('minHP'));
                $('#minHP').val(minHP)
                var Food1 = localStorage.getItem('Food1');
                $('#Food1').val(Food1)
                $('#startEatFood').trigger('click');
            }
            // 自动回能量
            if (localStorage.getItem('autoEateEnergy') == 'true') {
                //   从本地存储里面取出时间间隔，填入文本框
                var minEnergy = parseInt(localStorage.getItem('minEnergy'));
                $('#minEnergy').val(minEnergy)
                var Food2 = localStorage.getItem('Food2');
                $('#Food2').val(Food2)
                $('#startEatEnergyFood').trigger('click');
            }
            // 自动放技能
            if (localStorage.getItem('autoSkill') == 'true') {
                $('#startSkill').trigger('click');
            }
            // 自动放回血技能
            if (localStorage.getItem('autoHeal') == 'true') {
                $('#autoHeal').trigger('click');
            }
            // 自动攻击右边敌人
            if (localStorage.getItem('attLeft') == 'true') {
                $('#attLeft').trigger('click');
            }
            // 如果用户在组队战斗，则继续战斗
            if (localStorage.getItem('groupBattle') == 'true') {
                //   从本地存储里面取出时间间隔，填入文本框
                var fightTime = parseInt(localStorage.getItem('fightTime'));
                $('#fightTime').val(fightTime)
                $('#startGroupFight').trigger('click');
            }
            // 如果用户在组队战斗时选了自动踢人，则继续战斗
            if (localStorage.getItem('groupTiRen') == 'true') {
                if ($('.me').parent().parent().find('.justify-content-center img.mr-1').length == 1) {
                    $('#startTi').trigger('click');
                }
            }
            // 如果用户在AFK战斗，则继续战斗
            if (localStorage.getItem('afkBattle') == 'true') {

                if (url == 'http://tower.bluesky.site/battle') {
                    $('#startAFK').trigger('click');
                }
            }
            // 如果用户在solo固定战斗，则继续战斗
            if (localStorage.getItem('soloBattle') == 'true') {
                //   从本地存储里面取出时间间隔，填入文本框
                var fightMinHP = parseInt(localStorage.getItem('fightMinHP'));
                $('#fightMinHP').val(fightMinHP);
                var fightMinEnergy = parseInt(localStorage.getItem('fightMinEnergy'));
                $('#fightMinEnergy').val(fightMinEnergy);
                // 单人战斗时间间隔
                var soloFightTime = parseInt(localStorage.getItem('soloFightTime'));
                $('#soloFightTime').val(soloFightTime);
                if (url == 'http://tower.bluesky.site/battle') {
                    $('#startSolo').trigger('click');
                }
            }
            // 如果用户在solo爬楼战斗，则继续战斗
            if (localStorage.getItem('soloUpBattle') == 'true') {
                var fightMinHP = parseInt(localStorage.getItem('fightMinHP'));
                $('#fightMinHP').val(fightMinHP);
                var fightMinEnergy = parseInt(localStorage.getItem('fightMinEnergy'));
                $('#fightMinEnergy').val(fightMinEnergy);
                // 单人战斗时间间隔
                var soloFightTime = parseInt(localStorage.getItem('soloFightTime'));
                $('#soloFightTime').val(soloFightTime);
                if (url == 'http://tower.bluesky.site/battle') {
                    $('#startSoloUp').trigger('click');
                }
            }
            // 自动采矿
            if (localStorage.getItem('autoMing') == 'true') {
                //   从本地存储里面取出时间间隔，填入文本框
                var minTime = parseInt(localStorage.getItem('minTime'));
                $('#minTime').val(minTime)
                var MingType = localStorage.getItem('MingType');
                $('#MingType').val(MingType)
                var MingEnergy = parseInt(localStorage.getItem('MingEnergy'));
                $('#MingEnergy').val(MingEnergy)
                if (url == 'http://tower.bluesky.site/mining') {
                    $('#startMing').trigger('click');
                }
            }
            // 自动种地
            if (localStorage.getItem('autoFarm') == 'true') {
                //   从本地存储里面取出时间间隔，填入文本框
                var FoodSeed = localStorage.getItem('FoodSeed');
                $('#FoodSeed').val(FoodSeed)
                var myFamingTime = parseInt(localStorage.getItem('myFamingTime'));
                $('#myFamingTime').val(myFamingTime)
                var famingTime = parseInt(localStorage.getItem('famingTime'));
                $('#famingTime').val(famingTime)
                if (url == 'http://tower.bluesky.site/farming') {
                    $('#startFarming').trigger('click');
                }
            }
        }
    }

    //获取种植的植物
    var growTime = 1;
    $('#FoodSeed').change(function () {
        var ok = getElementByAttr('img', 'src', $(this).val(), 'svg');
        if (ok.length == 0) {
            //没有种子
            $('#noseed').addClass('show');
        } else {
            $('#noseed').removeClass('show');
        }
        var seed = $(this).val();
        switch (seed) {
            case 'bananaSeed':
                growTime = 10;
                break;
            case 'redAppleSeed':
                growTime = 10;
                break;
            case 'pearSeed':
                growTime = 5;
                break;
            case 'watermelonSeed':
                growTime = 15;
                break;
            case 'carrotSeed':
                growTime = 10;
                break;
            case 'acaiBerrySeed':
                growTime = 5;
                break;
            case 'letticeSeed':
                growTime = 1;
                break;
            case 'grapeFruitSeed':
                growTime = 5;
                break;
            case 'pineappleSeed':
                growTime = 15;
                break;
            case 'orangeSeed':
                growTime = 15;
                break;
            case 'potatoSeed':
                growTime = 10;
                break;
            case 'lemonSeed':
                growTime = 5;
                break;
            case 'rockmelonSeed':
                growTime = 17;
                break;
            case 'dragonfruitSeed':
                growTime = 20;
                break;
            case 'sweetPotatoSeed':
                growTime = 10;
                break;
            case 'chilliSeed':
                growTime = 60;
                break;
            case 'snowberrySeed':
                growTime = 8;
                break;
            case 'grapesSeed':
                growTime = 15;
                break;
            case 'strawberrySeed':
                growTime = 10;
                break;
                //卖钱
            case 'marigoldSeed':
                growTime = 15;
                break;
            case 'blueRoseSeed':
                growTime = 15;
                break;
            case 'chrysanthemumSeed':
                growTime = 480;
                break;
            case 'pinkHydrangeaSeed':
                growTime = 15;
                break;
            case 'hydrangeaSeed':
                growTime = 15;
                break;
            case 'redHydrangeaSeed':
                growTime = 15;
                break;
            case 'poppySeed':
                growTime = 240;
                break;
            case 'sunburstHydrangeaSeed':
                growTime = 15;
                break;
            case 'zinniaSeed':
                growTime = 480;
                break;
            case 'tulipSeed':
                growTime = 480;
                break;
            case 'crimsonHydrangeaSeed':
                growTime = 480;
                break;
            case 'lilySeed':
                growTime = 15;
                break;
            case 'orchidSeed':
                growTime = 480;
                break;
            case 'poenySeed':
                growTime = 15;
                break;
            case 'gardeniaSeed':
                growTime = 240;
                break;
                //铭刻
            case 'rubiaFlowerSeed':
                growTime = 2;
                break;
            case 'basilSeed':
                growTime = 5;
                break;
            case 'pinkRoseSeed':
                growTime = 5;
                break;
            case 'endiveSeed':
                growTime = 5;
                break;
            case 'juniperSeed':
                growTime = 10;
                break;
            case 'agrimonySeed':
                growTime = 60;
                break;
            case 'garlicSeed':
                growTime = 60;
                break;
                //打怪掉落
            case 'chiliSeed':
                growTime = 60;
                break;
            case 'celerySeed':
                growTime = 60;
                break;
            case 'cardoonSeed':
                growTime = 15;
                break;
            case 'feverfewSeed':
                growTime = 24;
                break;
                //树-经验
            case 'pineSeed':
                growTime = 480;
                break;
            case 'beechSeed':
                growTime = 480;
                break;
            case 'ashSeed':
                growTime = 480;
                break;
            case 'oakSeed':
                growTime = 480;
                break;
            case 'mapleSeed':
                growTime = 480;
                break;
            case 'walnutSeed':
                growTime = 480;
                break;
            case 'cherrySeed':
                growTime = 480;
                break;
            case 'mahoganySeed':
                growTime = 480;
                break;
            case 'elkSeed':
                growTime = 480;
                break;
            case 'blackSeed':
                growTime = 480;
                break;
            case 'cedarSeed':
                growTime = 480;
                break;
            case 'poplarSeed':
                growTime = 480;
                break;
            case 'taliSeed':
                growTime = 480;
                break;
            case 'kenafSeed':
                growTime = 30;
                break;
            case 'larchSeed':
                growTime = 480;
                break;
            case 'sisalSeed':
                growTime = 30;
                break;
            case 'willowSeed':
                growTime = 480;
                break;
            case 'raffiaSeed':
                growTime = 120;
                break;
            case 'teakSeed':
                growTime = 480;
                break;
                //杂项
            case 'cactusSeed':
                growTime = 60;
                break;
            case 'reedSeed':
                growTime = 15;
                break;
            case 'palmSeed':
                growTime = 15;
                break;
            case 'papyrusSeed':
                growTime = 30;
                break;
            case 'bambooSeed':
                growTime = 60;
                break;
            case 'denyaSeed':
                growTime = 480;
                break;
            case 'juteSeed':
                growTime = 30;
                break;
            case 'flaxSeed':
                growTime = 30;
                break;
        }
        $('#famingTime').val(growTime)
        localStorage.setItem('famingTime', growTime);

    });

    var autoSkill;
    var c1, c2, c3, c4, c5, c6, c7, c8;
    //    var bb;
    //启用放技能
    $('#startSkill').click(function () {
        // 标识开始自动放技能
        localStorage.setItem('autoSkill', true);
        c1 = $('#check1').is(':checked');
        c2 = $('#check2').is(':checked');
        c3 = $('#check3').is(':checked');
        c4 = $('#check4').is(':checked');
        c5 = $('#check5').is(':checked');
        var skillTime = 500;
        autoSkill = setInterval(skills, skillTime);
        $(this).attr("disabled", true);
        $("#stopSkill").attr("disabled", false);
    });

    //停止放技能
    $('#stopSkill').click(function () {
        // 标识停止自动放技能
        localStorage.setItem('autoSkill', false);
        clearInterval(autoSkill);
        $(this).attr("disabled", true);
        $("#startSkill").attr("disabled", false);
    });
    //启用放回血技能
    var isAutoHeal = false
    $('#autoHeal').click(function () {
        // 标识开始自动放技能
        localStorage.setItem('autoHeal', true);
        isAutoHeal = true;
        $(this).attr("disabled", true);
        $("#stopHeal").attr("disabled", false);
    });

    //停止放回血技能
    $('#stopHeal').click(function () {
        // 标识停止自动放技能
        localStorage.setItem('autoHeal', false);
        isAutoHeal = false
        $(this).attr("disabled", true);
        $("#autoHeal").attr("disabled", false);
    });
    //执行事件
    function doSkill(e) {
        if ($('.ability-icon-container:nth-child(' + e + ') .cooldown-text').length > 0) {
            //            console.log(e + '技能冷却中~');
        } else {
            $('.ability-icon-container:nth-child(' + e + ')').trigger("click");
            //            console.log('施放' + e + '技能~');
        }
    }

    //优先打最右边的怪，防止召唤小弟
    var attObj = 0;
    $('#attLeft').click(function () {
        // 标识开始攻击右边敌人
        localStorage.setItem('attLeft', true);
        attObj = 1;
        $(this).attr("disabled", true);
        $("#attRight").attr("disabled", false);
    });
    $('#attRight').click(function () {
        // 标识停止攻击右边敌人
        localStorage.setItem('attLeft', false);
        attObj = 0;
        $(this).attr("disabled", true);
        $("#attLeft").attr("disabled", false);
    });

    //放技能
    function skills() {
        //是否在战斗
        if ($('.forfeit-battle').length > 0) {
            //默认自动放全部技能
            //$('.ability-icon-container').trigger("click");
            //选择目标
            //$('.battle-unit-container .battle-unit').trigger("click");
            if (attObj == 1) {
                //优先打最后一个怪，防止召唤小弟
                $('.battle-units-container+.col .flex-row .flex-column:last-child img').trigger("click");
            }
            if (c1) {
                doSkill(2);
                // 1技能放加血技能，给自己加血
                var minWid2 = ($('.me').parent().parent().find('.health-bar .progress-bar').width() / $('.me').parent().parent().find('.progress.health-bar').width()) * 100;
                if (isAutoHeal && minWid2 < 80) {
                    setTimeout(function() {
                        $('.me').parent().find('.battle-unit').trigger('click'); 
                     },50)
                }
            }
            if (c2) {
                    doSkill(3)
            }
            if (c3) {
                    doSkill(4)
            }
            if (c4) {
                    doSkill(5)
            }
            if (c5) {
                    doSkill(6)
            }
            return
        } else {
            //            console.log('您已离开战斗界面~不执行操作');
            return;
        }
    }


    var autoFarming;
    //启动种地
    $("#startFarming").click(function () {
        //自动切换到种地界面
        $('.navbar-nav .nav-item:nth-child(5) a').trigger('click');
        var p = $('#FoodSeed').val();
        // 标识种植的种子
        localStorage.setItem('FoodSeed', p);
        // 标识启动种植
        localStorage.setItem('autoFarm', true);
        // 标识检测成熟的间隔
        var myFamingTime = $('#myFamingTime').val();
        localStorage.setItem('myFamingTime', myFamingTime);
        var ok = getElementByAttr('img', 'src', p, 'svg');
        //判断有无种子
        if (ok.length == 0) {
            //没有种子
            $('#noseed').addClass('show');
            return;
        } else {
            $('#noseed').removeClass('show');
            // var gTime = parseInt($('#famingTime').val());
            var gTime = parseInt($('#myFamingTime').val());
            //先执行一次
            farming();
            //延后3秒
            // gTime = ((gTime * 60) + 30) * 1000;
            gTime = (gTime * 60) * 1000;
            autoFarming = setInterval(farming, gTime);
            $(this).attr("disabled", true);
            $("#stopFarming").attr("disabled", false);
        }

    });

    //停止种地
    $("#stopFarming").click(function () {
        // 标识停止种植
        localStorage.setItem('autoFarm', false);
        clearInterval(autoFarming);
        $(this).attr("disabled", true);
        $("#startFarming").attr("disabled", false);
    });

    //自动种地
    function farming() {
        //自动切换到种地界面
        $('.navbar-nav .nav-item:nth-child(5) a').trigger('click');
        //延时2秒执行操作，避免页面未加载完
        setTimeout(function () {
            // 点第一个tab，防止当前界面非地块
            $('.nav-tabs .nav-item:nth-child(1) a').trigger('click');
            var p = $('#FoodSeed').val();
            var ok = getElementByAttr('img', 'src', p, 'svg');
            //成熟时执行收获
            $('.collect-plants').trigger("click");
            // console.log('植物成熟了，割割割~ ' + nowTime());
            //种地
            setTimeout(function () {
                // 判断当前有几块地可以种植
                // 有空地有class：drop-abutted
                // 成熟有：
                var di = $('.farm-space-container.inactive').length
                var v = 5;
                // 如果花宝石解锁额外两块，多循环两次
                if (di < 1) {
                    v = 7
                }
                // 判断是否有空地,有空地时执行种地
                for (var x = 0; x <= v; x++) {
                    // 获取各块地是否是空的
                    var src = $('.farm-space-container:nth-child(' + (x + 1) + ') img.ore-icon').attr('src');
                    // 如果是空地，则执行种植
                    if (src.indexOf('emptyFarmSpace') > -1) {
                        setTimeout(function () {
                            ok[0].click();
                            // 如果是手机，还需要再点一次
                            if ($(window).width() < 800) {
                                setTimeout(function () {
                                    ok[0].click();
                                }, 310)
                            }
                        }, 800);
                        // console.log('种地~ ' + nowTime())
                    }
                }
            }, 1500);

        }, 2000);
    }

    var autoMing;
    //启动挖矿
    $("#startMing").click(function () {
        var minTime = parseInt($('#minTime').val());
        if (minTime == '') {
            minTime = 30;
        }
        //多留5秒
        minTime = minTime * 1000;
        autoMing = setInterval(getGem, minTime);
        // 标识启动采矿
        localStorage.setItem('autoMing', true);
        $(this).attr("disabled", true);
        $("#stopMing").attr("disabled", false);
    });

    //停止挖矿
    $("#stopMing").click(function () {
        // 标识停止采矿
        localStorage.setItem('autoMing', false);
        clearInterval(autoMing);
        $(this).attr("disabled", true);
        $("#startMing").attr("disabled", false);
    });
    //挖其它矿
    function getElementByAttr2(tag, dataAttr, item) {
        var aElements = document.getElementsByTagName(tag);
        var aEle = [];
        for (var i = 0; i < aElements.length; i++) {
            var ele = aElements[i].getAttribute(dataAttr);
            if (ele == item) {
                aEle.push(aElements[i]);
            }
        }
        return aEle;
    }

    //挖自定义矿石
    function getElementByAttr3(tag, lei, dataAttr, item, fomat) {
        var aElements = document.getElementsByTagName(tag);
        var aEle = [];
        for (var i = 0; i < aElements.length; i++) {
            var ele = aElements[i].getAttribute(dataAttr);
            var leis = aElements[i].getAttribute(lei);
            var src = '/icons/' + item + '.' + fomat;
            if (leis == 'ore-icon') {
                if (ele == src) {
                    aEle.push(aElements[i]);
                }
            }
        }
        return aEle;
    }
    //挖矿
    function getGem() {
        //自动切换到采矿界面
        $('.navbar-nav .nav-item:nth-child(3) a').trigger('click');
        // 标识启动采矿
        var minTime = parseInt($('#minTime').val());
        localStorage.setItem('minTime', minTime);
        //延时3秒执行操作，避免页面未加载完
        setTimeout(function () {
            // 点第一个tab，防止当前界面非矿坑
            $('.nav-tabs .nav-item:nth-child(1) a').trigger('click');
            var mingEn = $('#MingEnergy').val();
            // 标识采矿最低能量
            localStorage.setItem('MingEnergy', mingEn);
            //判断能量百分比，大于指定百分比才执行挖矿。
            var minWid = ($('.progress-bar').width() / $('.progress').width()) * 100;
            if (minWid > mingEn) {
                //获取优先要挖的矿石
                var ks = 'gem';
                var jh = 'Essence';
                //获取带宝石的矿
                var ores = getElementByAttr('img', 'src', ks, 'png');
                var jhs = getElementByAttrEssence('img', 'src', jh, 'png');
                if (ores.length >= 1) {
                    //优先采宝石矿
                    for (var i = 0; i <= ores.length; i++) {
                        ores[i].click();
                        // 如果是手机，还需要再点一次
                        if ($(window).width() < 1000) {
                            ores[i].click();
                        }
                    }
                    // 自定义矿挖完时，采其它矿
                    setTimeout(function () {
                        var o = getElementByAttr2('img', 'class', 'ore-icon');
                        for (var i = 0; i <= o.length; i++) {
                            o[i].click();
                            // 如果是手机，还需要再点一次
                            if ($(window).width() < 800) {
                                o[i].click();
                            }
                        }
                    }, 1500)
                    // console.log('发现宝石了，挖挖挖~ ' + nowTime());
                } else if (jhs.length >= 1) {
                    //优先采精华矿
                    for (var i = 0; i <= jhs.length; i++) {
                        jhs[i].click();
                        // 如果是手机，还需要再点一次
                        if ($(window).width() < 1000) {
                            jhs[i].click();
                        }
                    }
                    // 自定义矿挖完时，采其它矿
                    setTimeout(function () {
                        var o = getElementByAttr2('img', 'class', 'ore-icon');
                        for (var i = 0; i <= o.length; i++) {
                            o[i].click();
                            // 如果是手机，还需要再点一次
                            if ($(window).width() < 800) {
                                o[i].click();
                            }
                        }
                    }, 1500)
                    // console.log('发现宝石了，挖挖挖~ ' + nowTime())

                }

                //获取自定义的矿
                var myOre = $('#MingType').val();
                // 标识启动采矿
                localStorage.setItem('MingType', myOre);
                var myOres = getElementByAttr3('img', 'class', 'src', myOre, 'png');
                if (myOres.length >= 1) {
                    //挖自定义的矿石
                    for (var i = 0; i <= myOres.length; i++) {
                        myOres[i].click();
                        // 如果是手机，还需要再点一次
                        if ($(window).width() < 1000) {
                            myOres[i].click();
                        }
                    }
                    // 自定义矿挖完时，采其它矿
                    setTimeout(function () {
                        var o = getElementByAttr2('img', 'class', 'ore-icon');
                        for (var i = 0; i <= o.length; i++) {
                            o[i].click();
                            // 如果是手机，还需要再点一次
                            if ($(window).width() < 800) {
                                o[i].click();
                            }
                        }
                    }, 1500)
                    // console.log('发现自定义矿石，挖挖挖~ ' + nowTime())
                } else {
                    //没有宝石矿时，采其它矿
                    var o = getElementByAttr2('img', 'class', 'ore-icon');
                    for (var i = 0; i <= o.length; i++) {
                        o[i].click();
                        // 如果是手机，还需要再点一次
                        if ($(window).width() < 800) {
                            o[i].click();
                        }
                    }
                    // console.log('采集其它矿石，挖挖挖~ ' + nowTime())
                }
            } else {
                // console.log('挖矿能量低于设定值:' + mingEn + '% ，不执行操作~ ' + nowTime())
                return
            }
        }, 3000);
    }

    //单人Solo-开始战斗
    //固定层、自动放技能
    var autoSoloFight;
    $("#startSolo").click(function () {
        var soloFightTime = parseInt($('#soloFightTime').val());
        var times = soloFightTime * 1000;
        // 标识启动个人固定战斗
        localStorage.setItem('soloBattle', true);
        localStorage.setItem('soloFightTime', soloFightTime);
        autoSoloFight = setInterval(soloFight, times);
        $(this).attr("disabled", true);
        $("#stopSolo").attr("disabled", false);
        $("#startSoloUp").attr("disabled", true);
        $("#stopSoloUp").attr("disabled", true);
        $("#stopGroupFight").attr("disabled", true);
        $("#startGroupFight").attr("disabled", true);
        $("#startAFK").attr("disabled", true);
    });

    //单人Solo-停止战斗
    $("#stopSolo").click(function () {
        // 标识停止个人固定战斗
        localStorage.setItem('soloBattle', false);
        clearInterval(autoSoloFight);
        $(this).attr("disabled", true);
        $("#startSolo").attr("disabled", false);
        $("#startSoloUp").attr("disabled", false);
        $("#stopSoloUp").attr("disabled", true);
        $("#stopGroupFight").attr("disabled", true);
        $("#startGroupFight").attr("disabled", false);
        $("#startAFK").attr("disabled", false);
    });


    //单人Solo-开始战斗
    //自动切换最高层、自动放技能
    var autoSoloUpFight;
    $("#startSoloUp").click(function () {
        var soloFightTime = parseInt($('#soloFightTime').val());
        var times = soloFightTime * 1000;
        // 标识启动个人爬楼战斗
        localStorage.setItem('soloUpBattle', true);
        localStorage.setItem('soloFightTime', soloFightTime);
        autoSoloUpFight = setInterval(soloUpFight, times);
        $(this).attr("disabled", true);
        $("#stopSoloUp").attr("disabled", false);
        $("#startSolo").attr("disabled", true);
        $("#stopSolo").attr("disabled", true);
        $("#stopGroupFight").attr("disabled", true);
        $("#startGroupFight").attr("disabled", true);
        $("#startAFK").attr("disabled", true);
    });

    //单人Solo-停止战斗
    $("#stopSoloUp").click(function () {
        // 标识停止个人爬楼战斗
        localStorage.setItem('soloUpBattle', false);
        clearInterval(autoSoloUpFight);
        $(this).attr("disabled", true);
        $("#startSoloUp").attr("disabled", false);
        $("#startSolo").attr("disabled", false);
        $("#stopGroupFight").attr("disabled", true);
        $("#startGroupFight").attr("disabled", false);
        $("#startAFK").attr("disabled", false);
        $("#stopSolo").attr("disabled", true);
    });


    var autoEatFood;
    //启动吃食物-回血
    $("#startEatFood").click(function () {
        // 标识开始自动开始吃血
        localStorage.setItem('autoEate', true);
        var username = $('#username').val();
        if (username == '') {
            // 如果用户名为空，先尝试从本地读取
            if (localStorage.getItem('username')) {
                username = localStorage.getItem('username');
            } else {
                alert('请输入你的用户名');
            }
        } else {
            //获取自己信息
            lead();
            autoEatFood = setInterval(eatFood, 3000);
            $(this).attr("disabled", true);
            $("#stopEatFood").attr("disabled", false);
        }
    });

    //停止吃食物-回血
    $("#stopEatFood").click(function () {
        // 标识开始自动停止吃血
        localStorage.setItem('autoEate', false);
        clearInterval(autoEatFood);
        $(this).attr("disabled", true);
        $("#startEatFood").attr("disabled", false);
    });

    var autoEnergy;
    //启动吃食物-回能量
    $("#startEatEnergyFood").click(function () {
        // 标识开始自动开始能量
        localStorage.setItem('autoEateEnergy', true);
        var username = $('#username').val();
        if (username == '') {
            // 如果用户名为空，先尝试从本地读取
            if (localStorage.getItem('username')) {
                username = localStorage.getItem('username');
            } else {
                alert('请输入你的用户名');
            }
        } else {
            //获取自己信息
            lead();
            //踢人判断状态
            $(this).addClass('tempStatus');
            autoEnergy = setInterval(eatLemon, 5000);
            $(this).attr("disabled", true);
            $("#stopEatEnergyFood").attr("disabled", false);
        }
    });

    //停止吃食物-回能量
    $("#stopEatEnergyFood").click(function () {
        // 标识开始自动停止吃能量
        localStorage.setItem('autoEateEnergy', false);
        clearInterval(autoEnergy);
        $(this).attr("disabled", true);
        $("#startEatEnergyFood").attr("disabled", false);
        $(this).removeClass('tempStatus');
    });

    //组队-开始战斗
    var autoGroupFight;
    $("#startGroupFight").click(function () {
        // 标识启动组队战斗
        localStorage.setItem('groupBattle', true);
        var username = $('#username').val();
        if (username == '') {
            // 如果用户名为空，先尝试从本地读取
            if (localStorage.getItem('username')) {
                username = localStorage.getItem('username');
            } else {
                alert('请输入你的用户名');
            }
        } else {
            //获取自己信息
            lead();
            var fightTime = parseInt($('#fightTime').val());
            var times = fightTime * 1000;
            autoGroupFight = setInterval(groupFight, times);
            $(this).attr("disabled", true);
            $("#startSoloUp").attr("disabled", true);
            $("#stopSoloUp").attr("disabled", true);
            $("#startSolo").attr("disabled", true);
            $("#stopSolo").attr("disabled", true);
            $("#startAFK").attr("disabled", true);
            $("#stopGroupFight").attr("disabled", false);
        }
    });
    //组队-停止战斗
    $("#stopGroupFight").click(function () {
        // 标识停止组队战斗
        localStorage.setItem('groupBattle', false);
        clearInterval(autoGroupFight);
        $(this).attr("disabled", true);
        $("#startGroupFight").attr("disabled", false);
        $("#startSoloUp").attr("disabled", false);
        $("#stopSoloUp").attr("disabled", true);
        $("#startSolo").attr("disabled", false);
        $("#startAFK").attr("disabled", false);
        $("#stopSolo").attr("disabled", true);

    });

    //冒险（AFK）-开始战斗
    //自动切换最高层、自动放技能
    var autoAFK;
    $("#startAFK").click(function () {
        // 标识启动AFK战斗
        localStorage.setItem('afkBattle', true);
        //获取自己信息
        lead();
        autoAFK = setInterval(afkFight, 60000);
        $(this).attr("disabled", true);
        $("#startSoloUp").attr("disabled", true);
        $("#stopSoloUp").attr("disabled", true);
        $("#startSolo").attr("disabled", true);
        $("#stopSolo").attr("disabled", true);
        $("#stopGroupFight").attr("disabled", true);
        $("#startGroupFight").attr("disabled", true);
        $("#startAFK").attr("disabled", true);
        $("#stopAFK").attr("disabled", false);
    });
    //冒险（AFK）-停止战斗
    $("#stopAFK").click(function () {
        // 标识启动AFK战斗
        localStorage.setItem('afkBattle', false);
        clearInterval(autoAFK);
        $(this).attr("disabled", true);
        $("#startGroupFight").attr("disabled", false);
        $("#startSoloUp").attr("disabled", false);
        $("#stopSoloUp").attr("disabled", true);
        $("#startSolo").attr("disabled", false);
        $("#stopSolo").attr("disabled", true);
        $("#startAFK").attr("disabled", false);
        $("#stopAFK").attr("disabled", true);

    });

    //冒险（AFK）--自动收集奖励、添加冒险任务到队列
    function afkFight() {
        // 进入战斗界面
        $('.navbar-nav .nav-item:nth-child(2) a').trigger('click');
        //已完成的任务，先收集奖励
        if ($('.collect-adventure-btn.btn-success').length > 0) {
            //收集已完成任务奖励
            $('.collect-adventure-btn.btn-success').trigger('click');
        }
        // 按冒险时间长短，依次加入队列
        var block0 = $(document).find('.d-flex.flex-row.flex-wrap').eq(0).find('.adventure-item-container');
        var block1 = $(document).find('.d-flex.flex-row.flex-wrap').eq(1).find('.adventure-item-container');
        var block2 = $(document).find('.d-flex.flex-row.flex-wrap').eq(2).find('.adventure-item-container');
        var block3 = $(document).find('.d-flex.flex-row.flex-wrap').eq(3).find('.adventure-item-container');
        // 判断队列里面冒险数量，如果超过1个，则不执行，防止时间长的冒险堵塞队列
        if (block0.length < 1) {
            if (block1.length > 0) {
                //默认全部加到队列
                // block1.find('.start-adventure-btn').trigger("click");
                //默认只加第一个冒险到队列
                $(document).find('.d-flex.flex-row.flex-wrap').eq(1).first('.adventure-item-container').find('.start-adventure-btn').trigger("click");
            } else if (block2.length > 0) {
                //默认全部加到队列
                // block2.find('.start-adventure-btn').trigger("click");
                //默认只加第一个冒险到队列
                $(document).find('.d-flex.flex-row.flex-wrap').eq(2).first('.adventure-item-container').find('.start-adventure-btn').trigger("click");
            } else if (block3.length > 0) {
                //默认全部加到队列
                // block3.find('.start-adventure-btn').trigger("click");
                //默认只加第一个冒险到队列
                $(document).find('.d-flex.flex-row.flex-wrap').eq(3).first('.adventure-item-container').find('.start-adventure-btn').trigger("click");
                return
            }
        }
    }

    //组队打怪
    function groupFight() {
        // 进入战斗界面
        $('.navbar-nav .nav-item:nth-child(2) a').trigger('click');
        // 存储组队战斗时间间隔
        localStorage.setItem('fightTime', $('#fightTime').val());
        //本次战斗未完成，继续战斗
        if ($('.forfeit-battle').length > 0) {
            //            console.log('正在战斗中~')
            return
        } else {
            //自动need第一个物品
            //                        $('.table-bordered tr:nth-child(2) td .ng-selector-need').trigger("click");

            // var fightTime = parseInt($('fightTime').text());
            // setTimeout(function () {
            //获取自己信息
            lead();
            var minHp = $('#fightMinHP').val();
            var minEnergy = $('#fightMinEnergy').val();
            // 标识
            localStorage.setItem('fightMinHP', minHp);
            localStorage.setItem('fightMinEnergy', minEnergy);
            //判断自己血量、能量
            var energy = parseInt($('.me').parent().parent().find('.energy-bar .energy-bar').text())
            var minWid1 = ($('.me').parent().parent().find('.health-bar .progress-bar').width() / $('.me').parent().parent().find('.progress.health-bar').width()) * 100;
            if ((energy <= minEnergy) || (minWid1 < minHp)) {
                //能量/生命值小于指定值，则不执行战斗
                // console.log('能量值/生命值过低，吃点东西恢复点能量吧~')
                return
            } else {
                //能量充足，继续下一次战斗
                //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。
                var minWid2 = ($('.me').parent().parent().find('.health-bar .progress-bar').width() / $('.me').parent().parent().find('.progress.health-bar').width()) * 100;
                if (minWid2 > minHp) {
                    //队长AFK时队员可以开战
                    $(".battle-btn").trigger("click");
                    //判断自己是队长才开战
                    //                        if ($('.me').parent().parent().find('.mr-1').length > 0) {
                    //                            $(".battle-btn").trigger("click");
                    //
                    //                        } else {
                    //                            console.log('不是队长，等待队长开战~')
                    //                            return;
                    //                        }
                } else {
                    //生命值小于，则不执行战斗
                    // console.log('生命值过低，暂停战斗，回回血吧~')
                    return
                }
            }
            // }, fightTime * 1000);
        }
    }


    //自动踢能量值过低，并且没吃柠檬的人
    function tiren() {
        $(".energy-bar .progress-bar .health-bar").each(function () {
            var username2 = $('#username').val();
            var person = $(this).parents('.flex-column.d-flex').children().find('.battle-unit-name').text().replace(/(^\s*)|(\s*$)/g, "");
            var statusLenth = $('.tempStatus').length;
            var penergy = parseInt($(this).text());
            var isEating = $(this).parents('.battle-unit-container').children().find('.justify-content-center img').length;
            //判断自己之外的人、能量值低于2、没有在吃柠檬
            if ((person != username2) && (penergy < 2) && (isEating == 0)) {
                //踢人
                // console.log($(this).parents('.flex-column.d-flex').children().find('.btn-kick').html())
                $(this).parents('.flex-column.d-flex').children().find('.btn-kick').trigger('click');
            } else {
                return;
            }
        });
    }

    //获取自己信息
    function lead() {
        var leads = $('#username').val();
        if (leads != '') {
            // 如果用户名不是空的，保存用户名存到本地
            localStorage.setItem('username', leads);
        }
        $(".battle-unit-name").each(function () {
            if ($(this).text().replace(/(^\s*)|(\s*$)/g, "") == leads) {
                $(this).addClass('me');
            } else {
                return;
            }
        });
    }
    //自动踢人-开始
    var autoTiren;
    $('#startTi').click(function () {
        // 标识开始自动踢人
        localStorage.setItem('groupTiRen', true);
        var username = $('#username').val();
        if (username == '') {
            // 如果用户名为空，先尝试从本地读取
            if (localStorage.getItem('username')) {
                username = localStorage.getItem('username');
            } else {
                alert('请输入你的用户名');
            }
        } else {
            //获取自己信息
            lead();
            //判断自己是否是队长
            if ($('.me').parent().parent().find('.justify-content-center img.mr-1').length == 1) {
                autoTiren = setInterval(tiren, 5000);
                $(this).attr("disabled", true);
                $("#stopTi").attr("disabled", false);
            } else {
                $(".battle-unit-name").removeClass('me');
                $(this).attr('checked', false);
                alert('你不是队长，请不要启用。')
                return;
            }
        }
    });
    //自动踢人-结束
    $('#stopTi').click(function () {
        // 标识开始自动踢人
        localStorage.setItem('groupTiRen', false);
        $(".battle-unit-name").removeClass('me');
        clearInterval(autoTiren);
        $(this).attr("disabled", true);
        $("#startTi").attr("disabled", false);
    });

    //刷单人固定楼Solo--自动打怪
    function soloFight() {
        // 进入战斗界面
        $('.navbar-nav .nav-item:nth-child(2) a').trigger('click');
        //能量最小值
        var fightMinHP = $('#fightMinHP').val();
        var fightMinEnergy = $('#fightMinEnergy').val();
        //本次战斗未完成，继续战斗
        if ($('.forfeit-battle').length > 0) {
            //            console.log('正在战斗中~')
            return
        } else {
            //当前层没刷完，则继续刷当前层
            var energy = parseInt($('.me').parent().parent().find('.energy-bar .energy-bar').text())
            if (energy <= fightMinEnergy) {
                //能量小于指定值，则不执行战斗
                // console.log('能量值过低，休息一下，吃个柠檬吧~')
                return
            } else {
                //能量充足，继续下一次战斗
                //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                var hpWid = ($('.health-bar .progress-bar').width() / $('.progress.health-bar').width()) * 100;
                if (hpWid > fightMinHP) {
                    $(".battle-btn").trigger("click");
                } else {
                    //生命值小于，则不执行战斗
                    // console.log('生命值过低，暂停战斗，回回血吧~')
                    return
                }
            }
        }
    }

    //刷单人爬楼Solo--自动打怪
    function soloUpFight() {
        var minHp = $('#fightMinHP').val();
        var minEnergy = $('#fightMinEnergy').val();
        //本次战斗未完成，继续战斗
        if ($('.forfeit-battle').length > 0) {
            //            console.log('正在战斗中~')
            return
        } else {
            //当前层刷完时，自动切换下一层
            if ($('.energyUse-dropdown').length > 0) {
                //刷完则自动切换新的一层
                $('.level-dropdown .btn-secondary+.dropdown-menu a:first-child').trigger("click");
                // console.log('本层已清理完毕，继续下一层吧~ ' + nowTime())
                var energy1 = parseInt($('.me').parent().parent().find('.energy-bar .energy-bar').text())
                if (energy1 <= minEnergy) {
                    //能量小于指定值，则不执行战斗
                    // console.log('能量值过低，休息一下，吃个柠檬吧~')
                    return
                } else {
                    //能量充足，继续下一次战斗
                    //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                    var hpWid = ($('.health-bar .progress-bar').width() / $('.progress.health-bar').width()) * 100;
                    if (hpWid > minHp) {
                        $(".battle-btn").trigger("click");
                    } else {
                        //生命值小于，则不执行战斗
                        // console.log('生命值过低，暂停战斗，回回血吧~')
                        return
                    }

                }

            } else {
                //当前层没刷完，则继续刷当前层
                //继续下一次战斗
                var energy2 = parseInt($('.me').parent().parent().find('.energy-bar .energy-bar').text())
                if (energy2 <= minEnergy) {
                    //能量小于指定值，则不执行战斗
                    // console.log('能量值过低，休息一下，吃个柠檬吧~')
                    return
                } else {
                    //能量充足，继续下一次战斗
                    //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                    var hpWid = ($('.health-bar .progress-bar').width() / $('.progress.health-bar').width()) * 100;
                    if (hpWid > minHp) {
                        $(".battle-btn").trigger("click");
                    } else {
                        //生命值小于，则不执行战斗
                        // console.log('生命值过低，暂停战斗，回回血吧~')
                        return
                    }
                }
            }
        }
    }


    //获取要吃的食物
    function getElementByAttr(tag, dataAttr, item, fomat) {
        var aElements = document.getElementsByTagName(tag);
        var aEle = [];
        for (var i = 0; i < aElements.length; i++) {
            var ele = aElements[i].getAttribute(dataAttr);
            var src = '/icons/' + item + '.' + fomat;
            if (ele == src) {
                aEle.push(aElements[i]);
            }
        }
        return aEle;
    }
    //获取界面上是否有精华矿石
    function getElementByAttrEssence(tag, dataAttr, item, fomat) {
        var aElements = document.getElementsByTagName(tag);
        var aEle = [];
        for (var i = 0; i < aElements.length; i++) {
            var ele = aElements[i].getAttribute(dataAttr);
            if (ele.indexOf('item') > -1) {
                aEle.push(aElements[i]);
            }
        }
        return aEle;
    }


    //自动吃柠檬恢复能量
    function eatLemon() {
        //获取自己信息
        lead();
        var minEnergy = $("#minEnergy").val();
        var energyFood = $("#Food2").val();
        // 标识吃东西时能量百分比、回能量食物
        localStorage.setItem('minEnergy', minEnergy);
        localStorage.setItem('Food2', energyFood);
        //获取食物对象
        var lemon = getElementByAttr('img', 'src', energyFood, 'svg');
        //寻找自己的血量条
        //能量低于30就开始吃柠檬，柠檬冷却时间300秒
        var num = parseInt($('.me').parent().parent().find('.energy-bar .energy-bar').text())
        if (num < minEnergy) {
            //判断在不在战斗状态时才提示
            if ($('.forfeit-battle').length <= 0) {
                //没有对应食物，则不执行吃食物操作
                if (lemon.length <= 0) {
                    $('#nofood').addClass('show');
                } else {
                    $('#nofood').removeClass('show');
                }
            }
            //判断自己是否是队长，因为图片会影响判断
            if ($('.me').parent().parent().find('.mr-1').length > 0) {
                //判断是否正在吃柠檬，
                if ($('.me').parent().parent().find('.justify-content-center img:nth-child(2)').length <= 0 && $('.battle-btn').length > 0) {
                    //没吃柠檬，则点击柠檬
                    for (var i = 0; i <= lemon.length; i++) {
                        lemon[i].click();
                        // 如果是手机，还需要再点一次
                        if ($(window).width() < 1000) {
                            lemon[i].click();
                        }
                    }
                    // console.log('没能量了，吃个柠檬~ ' + nowTime())
                } else {
                    //正在吃柠檬，不执行操作
                    // console.log('正在吃东西~ ' + nowTime())
                    return
                }
            } else {
                //不是队长
                //判断是否正在吃柠檬，
                if ($('.me').parent().parent().find('.justify-content-center img').length == 0 && $('.battle-btn').length > 0) {
                    //没吃柠檬，则点击柠檬
                    for (var i = 0; i <= lemon.length; i++) {
                        lemon[i].click();
                        // 如果是手机，还需要再点一次
                        if ($(window).width() < 1000) {
                            lemon[i].click();
                        }
                    }
                    // console.log('没能量了，吃个柠檬~ ' + nowTime())
                } else {
                    //正在吃柠檬，不执行操作
                    // console.log('正在吃东西~ ')
                    return
                }
            }
        }
    }

    //自动吃食物回血
    function eatFood() {
        //获取自己信息
        lead();
        var minHP = $("#minHP").val();
        var hpFood = $("#Food1").val();
        // 标识吃东西时血量百分比、回血食物
        localStorage.setItem('minHP', minHP);
        localStorage.setItem('Food1', hpFood);
        //获取食物对象
        //胡萝卜-10秒内回350血
        var eatItem = getElementByAttr('img', 'src', hpFood, 'svg');
        //判断在不在战斗状态时才提示
        if ($('.forfeit-battle').length <= 0) {
            //没有对应食物，则不执行吃食物操作
            if (eatItem.length <= 0) {
                $('#nofood').addClass('show');
                return
            } else {
                $('#nofood').removeClass('show');
            }
        } else {
            //                console.log('战斗中，不能吃东西~')
            return;
        }
        //生命低于指定百分比，就吃食物回血。默认是：30%
        if ($('.me').parent().parent().find('.health-bar .progress-bar').width() < minHP) {
            //生命值小于指定值，则吃食物回血
            //判断自己是否是队长，因为图片会影响判断
            if ($('.me').parent().parent().find('.justify-content-center img.mr-1').length > 0) {
                //判断是否正在吃食物
                if ($('.me').parent().parent().find('.justify-content-center img:nth-child(2)').length == 0) {
                    //没吃食物，则点击食物
                    for (var i = 0; i <= eatItem.length; i++) {
                        eatItem[i].click();
                        // 如果是手机，还需要再点一次
                        if ($(window).width() < 1000) {
                            eatItem[i].click();
                        }
                    }
                    // console.log('生命值低于设定值，吃点东西回回血~ ' + nowTime())
                } else {
                    //正在东西，不执行操作
                    // console.log('正在吃东西~')
                    return
                }
            } else {
                //判断是否正在吃食物
                if ($('.me').parent().parent().find('.justify-content-center img').length <= 0) {
                    //没吃食物，则点击食物
                    for (var i = 0; i <= eatItem.length; i++) {
                        eatItem[i].click();
                        // 如果是手机，还需要再点一次
                        if ($(window).width() < 1000) {
                            eatItem[i].click();
                        }
                    }
                    // console.log('生命值低于设定值，吃点东西回回血~ ' + nowTime())
                } else {
                    //正在吃食物，不执行操作
                    // console.log('正在吃东西~')
                    return
                }
            }
        }
    }

    // console.log("加载自动化脚本 " + nowTime());
}();


/**
 * ---------------------------
 * Time: 2023/09/24 00:03.
 * Author: guoba
 * View: http://www.gityx.com
 * ---------------------------
 */