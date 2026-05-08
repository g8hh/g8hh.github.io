/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴、冬天的雨
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：

    'SAVE': '保存',
    "Custom Match": "自定义匹配",
    "Replays": "回放",
    "Report a bug": "报告错误",
    "Fullscreen (Alt+F": "全屏 (Alt+F",
    "Demo Mode": "演示模式",
    "Ok": "确定",
    "Main Menu": "主菜单",
    "Russia": "俄罗斯",
    "Russian Tesla Tanks fire a short range Tesla Bolt that can short circuit enemy vehicles and even arc over enemy walls.": "俄罗斯特斯拉坦克发射短程特斯拉螺栓，可以使敌方车辆短路，甚至在敌方墙壁上形成电弧。",
    "You've been disconnected from the server": "您已与服务器断开连接",
    "Tesla Tank": "特斯拉坦克",
    "You can report any bugs you find on our Discord server": "您可以在我们的 Discord 服务器上报告发现的任何错误",
    "Play a singleplayer match against a training dummy": "与训练假人进行单人比赛",
    "Play back a recording of a previously played game": "回放之前玩过的游戏的录像",
    "Options": "选项",
    "\"Chrono Divide\" is a non-profit fan project and is in no way affiliated with Electronic Arts Inc.": "\"Chrono Divide\" 是一个非盈利的粉丝项目，与美国Electronic Arts公司没有任何关联。",
    "Connecting...": "正在连接...",
    "DISCLAIMER": "免责声明",
    "Downloading game files... (": "正在下载游戏文件...（",
    "Game instance not found": "找不到游戏实例",
    "Loading...": "正在加载...",
    "No copyright infringement is intended. All rights are held by their respective owners.": "没有侵犯版权的目的。 所有权利均归其各自所有者所有。",
    "Quit": "退出",
    "Reconnect": "重新连接",
    "Would you like to reconnect to your previous game?": "您想重新连接到之前的游戏吗？",
    "Please make sure your browser is using a dedicated graphics card (e.g. NVIDIA, ATI). For common setups, you can follow": "请确保您的浏览器使用的是专用显卡（例如 NVIDIA、ATI）。 对于常见的设置，您可以按照",
    "these instructions": "这些说明",
    "Unsupported graphics card detected.": "检测到不支持的显卡。",
    "You may ignore this warning, but performance will be greatly degraded.": "您可以忽略此警告，但性能会大大降低。",
    "WESTWOOD STUDIOS IS AN ELECTRONIC ARTS BRAND": "WESTWOOD STUDIOS™ 是 ELECTRONIC ARTS™ 品牌",
    "Quick Match": "快速匹配",
    "Prefetching assets...": "预取资源...",
    "Available Games": "可玩的游戏",
    "Back": "返回",
    "Available players.": "在线玩家。",
    "Change server": "切换服务器",
    "Create Game": "当前服务器",
    "Europe": "欧洲",
    "Having trouble with a command? Type /help to": "命令有问题？ 输入 /help 去",
    "Join a lobby to select an opponent": "加入大厅选择对手",
    "Join an existing multiplayer game.": "加入现有的多人游戏。",
    "Join Game": "加入游戏",
    "learn more about it.": "了解更多。",
    "Login": "登录",
    "Messages from other players are listed here.": "此处列出了来自其他玩家的消息。",
    "New Account": "注册新账户",
    "Nickname": "昵称",
    "Observe": "观战",
    "Password": "密码",
    "Observe an existing multiplayer game": "观战现有的多人游戏",
    "Players": "玩家",
    "Re-enter Password": "再次输入密码",
    "Server": "服务器",
    "Set up a game automatically": "自动设置游戏",
    "South-East Asia": "东南亚",
    "This server is hosted by a PvPGN user": "此服务器由 PvPGN 用户托管",
    "Type /language to switch translation.": "输入 /language 切换翻译。",
    "Type your message here and hit enter.": "在此处输入您的消息并按回车键。",
    "You have no mail.": "你没有邮件。",
    "You joined channel USA Command": "你加入了美国司令部频道",
    "Your password must be 8 letters long.": "您的密码长度必须为 8 位。",
    "Add Select Team": "添加选择团队",
    "Adjust game difficulty, audio / visual settings, and controls.": "调整游戏难度、音频/视觉设置和控件。",
    "© 2000 ELECTRONIC ARTS INC. ALL RIGHTS RESERVED": "© 2000 ELECTRONIC ARTS INC. 保留所有权利",
    "Alliance": "联盟",
    "Ambient Volume": "环境音量",
    "Center Base": "居中基地",
    "Center Team": "居中团队",
    "Center View": "居中视角",
    "Cheer": "欢呼",
    "Combatant Select": "战斗员选择",
    "Commands": "命令",
    "Create Team": "创建团队",
    "Credits Volume": "积分音量",
    "Current Hotkey": "当前快捷键",
    "Defense Tab": "防御选项卡",
    "Delete": "删除",
    "Deploy Object": "部署对象",
    "Description": "描述",
    "Follow": "跟随",
    "Goto Radar Event": "转到雷达事件",
    "Health Navigation": "健康导航",
    "Guard": "守卫",
    "Keyboard": "键盘",
    "Master Volume": "主音量",
    "Music Volume": "音乐音量",
    "Previous Object": "上一个对象",
    "Next Object": "下一个对象",
    "Num": "数量",
    "Page User": "页面用户",
    "Place Beacon": "放置信标",
    "Repair Mode": "维修模式",
    "Scatter": "分散",
    "Scroll Rate": "滚动速度",
    "Select Infantry Tab": "选择步兵选项卡",
    "Select Team": "选择团队",
    "Select Vehicle Tab": "选择车辆选项卡",
    "Sell Mode": "出售模式",
    "SFX Volume": "音效音量",
    "Set Bookmark": "设置书签",
    "Sidebar Down": "侧边栏向下",
    "Sidebar PageDown": "侧边栏向下翻页",
    "Sidebar PageUp": "侧边栏向上翻页",
    "Sidebar Up": "侧边栏向上",
    "Stop Object": "停止对象",
    "Sound": "声音",
    "Structure Tab": "结构选项卡",
    "Taunt": "嘲讽",
    "Toggle alliance with owner of selected object.": "与选定对象的所有者切换联盟。",
    "Toggle FPS": "切换 FPS",
    "Toggle full screen mode": "切换全屏模式",
    "Type Select": "类型选择",
    "UI Volume": "界面音量",
    "Veterancy Navigation": "老兵导航",
    "View Bookmark": "查看书签",
    "Voice Volume": "语音音量",
    "Waypoints": "路标",
    "America": "美国",
    "Battle\n\nCold War (2-": "战斗\n\n冷战（2-",
    "Build Off Ally ConYards": "建立盟友建造厂",
    "Cancel": "取消",
    "Closed": "关闭",
    "Crates Appear": "板条箱出现",
    "Creates a new multiplayer game.": "创建一个新的多人游戏。",
    "Credits": "积分",
    "Cuba": "古巴",
    "Customize Battle": "自定义战斗",
    "Export": "导出",
    "Exports a raw replay file that can be imported later in a compatible client.": "导出原始回放文件，稍后可以在兼容客户端中导入该文件。",
    "France": "法国",
    "Game Speed": "游戏速度",
    "Germany": "德国",
    "Great Britain": "大不列颠",
    "Host Screen": "主机屏幕",
    "Import": "导入",
    "Iraq": "伊拉克",
    "Keep": "保留",
    "Korea": "朝鲜",
    "Libya": "利比亚",
    "Load": "加载",
    "MCV Repacks": "MCV 重新包装",
    "Permanently stores the replay, preventing it from being automatically deleted when new replays are created": "永久存储回放，防止在创建新回放时自动删除",
    "Play on another game server or region": "在其他游戏服务器或地区玩",
    "Praifon": "普拉丰",
    "Random (???": "随机 (???",
    "Return to previous menu.": "返回上一级菜单。",
    "Return to the Main Menu.": "返回主菜单。",
    "Select replay": "选择回放",
    "Short Game": "短游戏",
    "Skirmish Game": "小冲突游戏",
    "Start Game": "开始游戏",
    "Superweapons": "超级武器",
    "Training dummy": "训练假人",
    "Unit Count": "单位数",
    "Use this to select a battlefield.": "使用它来选择一个战场。",
    "Displays a satellite image of the chosen battlefield.": "显示所选战场的卫星图像。",
    "Player's national flag.": "玩家的旗帜。",
    "Player's nationality.": "玩家的国籍。",
    "Players have the ability to move their ConYard.": "玩家可以移动他们的 建造厂。",
    "Starts the game with the options you have selected.": "使用您选择的选项开始游戏。",
    "'Open' allows a player to join. 'Closed' locks players out.": "“开放”允许玩家加入。 “关闭”将玩家锁定。",
    "Battle": "战斗",
    "Check to allow players to build near their allies' buildings.": "检查以允许玩家在其盟友的建筑物附近建造。",
    "Check to allow super weapons to be built.": "选中以允许制造超级武器。",
    "Controls the cash available at the start of the game.": "控制游戏开始时可用的现金。",
    "Controls the number of starting units.": "控制起始单元的数量。",
    "Controls unit speed and build times.": "控制单位速度和建造时间。",
    "Fight in one of these battle types.": "在这些战斗类型之一中战斗。",
    "Fight on one of these battlefields.": "在这些战场之一上战斗。",
    "Free For All": "所有人免费",
    "Game Map": "游戏地图",
    "Game Type": "游戏类型",
    "Meat Grinder": "绞肉机",
    "Player's color.": "玩家的颜色。",
    "Players win when all enemy buildings are destroyed.": "当所有敌方建筑被摧毁时，玩家获胜。",
    "Random Power-Up Crates will appear.": "将出现随机上电箱。",
    "Return to the Battle Creation Menu.": "返回战斗创建菜单。",
    "Select Engagement": "选择参与",
    "Unholy Alliance": "邪恶联盟",
    "Use Map": "使用地图",
    "Use the currently selected battlefield.": "使用当前选择的战场。",
    "The games you can join.": "你可以加入的游戏。",
    "Paradrop": "伞降",
    "Player": "玩家",
    "The USA has the best paratroopers in the world. Build an Airforce Command Center to drop paratroopers anywhere on the battlefield.": "美国拥有世界上最好的伞兵。 建立一个空军指挥中心，在战场上的任何地方投放伞兵。",
    "cilck": "点击",
    "Invalid": "无效",
    "Observer": "观战",
    "Open": "打开",
    "Open Observer": "打开观战",
    "Satellite view of the battlefield you have selected.": "您选择的战场的卫星视图。",
    "Select a battlefield.": "选择战场。",
    "Starts the game. Everyone must check in first.": "开始游戏。 每个人都必须先登记。",
    "Type your message here and hit return.": "在此处输入您的消息并按回车键。",
    "pvpgn)    Set your language to get another translation": "pvpgn) 设置您的语言以获得另一个翻译",
    "pvpgn) /lang [code]": "pvpgn) /lang 语言名称",
    "Return to the Network Lobby Menu.": "返回网络大厅菜单。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
//    地图
    "Dirty_Harry": "肮脏的哈里",
    "A Path Beyond II (2-": "超越之路 II (2-",
    "Anytown, Amerika (2-": "美国，任何镇 (2-",
    "Cold War (2-": "冷战 (2-",
    "DEFCON 6 (2-": "防御 6 (2-",
    "Heck Freezes Over (2-": "见鬼冻结了 (2-",
    "Isle of War (": "战争之岛 (",
    "Montana DMZ (2-": "蒙大拿非军事区 (2-",
    "Official Tournament Map (": "官方比赛地图（",
    "Official Tournament Map A (": "官方比赛地图A（",
    "Paris Revisited (2-": "重游巴黎 (2-",
    "The Alamo (": "阿拉莫 (",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",


    //原样
    '': '',
    '': '',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "								": "",
    "						": "",
    "			": "",
    "	": "",
    "\n": "",
    "Catches: ": "抓到: ",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "							": "",
    "			": "",
    "     ": "",
    "     ": "",
    "	": "",
    " ": "",
    "\n": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^pvpgn\) (.+) has been kicked by (.+).$/, 'pvpgn) $1 被 $2 踢了.'],
    [/^Hello (.+), welcome to PvPGN Realm!$/, '你好 $1，欢迎来到 PvPGN 领域！'],
    [/^and (.+) users playing (.+) games and chatting in (.+) channels.$/, '和 $1 个用户玩 $2 个游戏并在 $3 个频道中聊天。'],
    [/^Running version PvPGN (.+).$/, '运行版本 PvPGN $1。'],
    [/^There are (.+) user accounts on this server.$/, '此服务器上有 $1 个用户帐户。'],
    [/^There are currently (.+) users in (.+) games of Red Alert 2,$/, '红警2 的 $2 个游戏房间目前有 $1 个用户，'],
    [/^(.+) Max Mana$/, '$1 魔力上限'],
    [/^(.+)\/(.+) online.$/, '$1\/$2 在线。'],
    [/^(.+) Quest Points$/, '$1 任务点'],
    [/^Requires level (.+) mining to obtain.$/, '需要$1级采矿才能获得。'],
    [/^Wed (\d+)$/, '周三 $1'],
    [/^Thu (\d+)$/, '周四 $1'],
    [/^Fri (\d+)$/, '周五 $1'],
    [/^Sat (\d+)$/, '周六 $1'],
    [/^Sun (\d+)$/, '周日 $1'],
    [/^(.+) - (.+) Stardust.$/, '$1 - $2 星尘.'],
    [/^([\d\.,]+) seconds$/, '$1 秒'],
    [/^([\d\.,]+) energy$/, '$1 能量'],
    [/^([\d\.,]+) APPLES$/, '$1 苹果'],
    [/^([\d\.,]+) magic required.$/, '$1 魔法需求。'],
    [/^([\d\.,]+) damage.$/, '$1 伤害。'],
    [/^([\d\.,]+) health.$/, '$1 生命。'],
    [/^([\d\.,]+) donor coins.$/, '$1 捐助硬币。'],
    [/^([\d\.,]+) coins.$/, '$1 硬币。'],
    [/^([\d\.,]+)h of Offline Time$/, '$1小时 离线时间'],
    [/^([\d\.,]+) xp$/, '$1 经验'],
    [/^([\d\.,]+) XP$/, '$1 经验'],
    [/^([\d\.,]+) heat$/, '$1 热'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return "";

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix];
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length - text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return arguments[0];
        }
    }

    //尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

transTaskMgr = {
    tasks: [],
    addTask: function (node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function () {
        let task = null;
        while (task = this.tasks.pop())
            task.node[task.attr] = task.text;
    },
}

function TransSubTextNode(node) {
    if (node.childNodes.length > 0) {
        for (let subnode of node.childNodes) {
            if (subnode.nodeName === "#text") {
                let text = subnode.textContent;
                let cnText = cnItem(text);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    //console.log(subnode);
                } else {
                    TransSubTextNode(subnode);
                }
            } else {
                // do nothing;
            }
        }
    }
}

! function () {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };
    let targetNode = document.body;
    //汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();
    //监听页面变化并汉化动态内容
    let observer = new MutationObserver(function (e) {
        //window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "TEXTAREA") continue;
            if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                mutation.target.innerText = cnItem(mutation.target.innerText);
            } else if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || node.childNodes.length == 0) {
                            node.innerText = cnItem(node.innerText);
                        } else {
                            TransSubTextNode(node);
                            transTaskMgr.doTask();
                        }
                    }
                }
            }
        }
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);


}();
