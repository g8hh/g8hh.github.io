/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "ATK": "攻",
    "Close": "关闭",
    "DEF": "防",
    "Don't show again": "不再显示",
    "EXP": "经验值",
    "HP": "生命值",
    "Inventory": "仓库",
    "LEVEL": "等级",
    "GOLD": "金币",
    "React RPG is now on iOS and Android!": "玩 React RPG 的 iOS 和 Android 版本！",
    "View Source": "源码",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "Are you sure you want to quit? You will lose all progress...": "你确定你要退出吗？ 你将失去所有的进度......",
    "attack": "攻击",
    "No": "否",
    "Yes": "是",
    "Un-equip": "脱下",
    "Return to Menu": "返回到菜单",
    "Endless Mode": "无尽模式",
    "Explore Dungeon": "探索地下城",
    "Explore the dark dungeon, full of monsters and gear!": "探索充满怪物和装备的黑暗地牢！",
    "Greetings, Traveler. Please, explore one of our dungeons...": "问候，旅行者。 请探索我们的地牢之一......",
    "Story Mode": "故事模式",
    "Up for a challenge..? These randomly generated dungeons will run you into oblivion.": "准备挑战..？ 这些随机生成的地牢会让你被遗忘。",
    "As you enter the dungeon, you start coughing from the putrid scent...": "当你进入地牢时，你开始因为腐烂的气味而咳嗽......",
    "ATTACK": "攻击",
    "Attack": "攻击",
    "Chest Loot!": "宝箱！",
    "Continue": "继续",
    "Drop": "脱下",
    "Equip": "装备",
    "Exp": "经验值",
    "Gained": "获得",
    "Game Controls": "游戏控制",
    "Gold": "金币",
    "Hp": "生命值",
    "Level": "等级",
    "MOVEMENT": "移动",
    "Okay": "确定",
    "You try to ignore the smell as you recall your quest: Speak with the Old Spirit at his resting place.": "当你回忆起你的任务时，你试图忽略气味：在老灵魂的安息之地与他交谈。",
    "Game Over!": "游戏结束！",
    "New Game": "新游戏",
    "You are a weak mortal...": "你是个软弱的凡人……",
    "Now who will save the princess?": "现在谁来拯救公主？",
    "Not that strong after all...": "毕竟没那么强……",
    "Pick Up": "捡起",
    "defence": "防御",
    "Are you sure you want to buy HP Potion for 40 gold ?": "您确定要花费 40 金币 购买 生命药水 吗？",
    "As you inspect the walls, you notice a faint purple glow. Something definitely seemed off about those rats...": "当您检查墙壁时，您会注意到微弱的紫色光芒。 那些老鼠似乎有些不对劲……",
    "Buy": "购买",
    "Buy Item": "购买物品",
    "Cancel": "取消",
    "heal": "治疗",
    "hp": "生命值",
    "Leave": "离开",
    "next": "下一页",
    "previous": "上一页",
    "Sell": "出售",
    "Shop": "商店",
    "slots": "插槽",
    "Up ahead, you notice a group of small humanoid creatures...": "在前面，你注意到一群小型人形生物......",
    "Welcome traveler! Please, come in...": "欢迎你，游客！ 请进...",
    "Heal": "治疗",
    "Sell Item": "出售物品",
    "\"AS LONG AS OUR SPIRITS RESIDE IN THESE WALLS, THE OLD SPIRIT REMAINS OUR PRISONER...\"": "\“只要我们的精神还存在于这些墙上，旧的精神就会成为我们的囚徒......\”",
    "You notice the walls are now a vibrant blue. But before you can do anything, a deep voice is heard from every direction.": "您会注意到墙壁现在是充满活力的蓝色。 但在你做任何事情之前，一个低沉的声音从四面八方传来。",
    "Are you sure you want to use your HP Potion?": "您确定要使用 生命药水 吗？",
    "\"JOURNEY ONE HUNDRED FLOORS AND ALL WILL BE GRANTED\"": "\“旅程一百层，一切都将被授予\”",
    "As you stare into the dark dungeon, it greets you with a cold chill... and a message...": "当你凝视着黑暗的地牢时，它向你招手，寒意袭来……还有一条信息……",
    "FLOOR": "层",
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
    "": "",
    "": "",
    "": "",
    "": "",

    //原样
    "React RPG": "React RPG",
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

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ": ": "： ",
    " ": "",
    "Made with ♥ by Andrew Steinheiser -": "由 Andrew Steinheiser 用 ♥ 制作 -",
    "GOT NEW ITEM: ": "获得新物品：",
    "LOST AN ITEM: ": "失去一件物品：",
    "Are you sure you want to buy ": "你确定要购买 ",
    "Are you sure you want to sell your ": "你确定要出售你的 ",
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
    "Broad Sword": "阔剑",
    "Diamond Ring": "钻石戒指",
    "Dragons Bane": "龙祸",
    "Great HP Potion": "强大的生命药水",
    "Lich Bane": "巫妖灾星",
    "Steel Armor": "钢甲",
    "Steel Boots": "钢靴",
    "Steel Gloves": "钢手套",
    "Steel Helm": "钢盔",
    "Steel Pants": "钢裤",
    "VS. dragon": "对. 龙",
    "VS. lich": "对. 巫妖",
    "Leather Pants": "皮裤",
    "Leather Boots": "皮靴",
    "Leather Armor": "皮甲",
    "Rusty Sword": "生锈的剑",
    "Backpack Upgrade": "背包升级",
    "HP Potion": "生命药水",
    "Leather Cap": "皮帽",
    "Leather Gloves": "皮手套",
    "Old Ring": "旧戒指",
    "Steel Sword": "钢剑",
    "Amethyst Ring": "紫水晶戒指",
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
    " ": " ",
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
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\~(\d+)s$/,
    /^\~(\d+)m$/,
    /^\~(\d+)h$/,
    /^\~(\d+)ms$/,
    /^ (\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^x([\d\.]+)$/,
    /^x([\d\.,]+)$/,
    /^(\d+)\-(\d+)$/,
    /^Fixed a (.+)$/,
    /^v(\d+).(\d+).(\d+) \- (.+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^(\d+) minute (\d+) seconds$/, '$1 分 $2 秒'],
    [/^(\d+) minutes (\d+) seconds$/, '$1 分 $2 秒'],
    [/^(\d+) hr (\d+) min (\d+) sec$/, '$1 小时 $2 分 $3 秒'],
    [/^(\d+) days (\d+) hr (\d+) min (\d+) sec$/, '$1 天 $2 小时 $3 分钟 $4 秒'],
    [/^(\d+) min (\d+) sec$/, '$1 分 $2 秒'],
    [/^(\d+) hours (\d+) minutes (\d+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^ for (\d+) gold \?$/, ' 花费 $1 金币？'],
    [/^  for (\d+) gold \?$/, ' 花费 $1 金币？'],
    [/^Thu (\d+)$/, '周四 $1'],
    [/^Thu (\d+)$/, '周四 $1'],
    [/^Fri (\d+)$/, '周五 $1'],
    [/^Sat (\d+)$/, '周六 $1'],

]);

//2.采集新词
//20190320@JAR

var CNITEM_DEBUG = 0;

function cnItemByTag(text, itemgroup, node, textori) {
    for (let i in itemgroup) {
        if (i[0] == '.') { //匹配节点及其父节点的class
            let current_node = node;
            while (current_node) {
                if (current_node.classList && current_node.classList.contains(i.substr(1))) {
                    return itemgroup[i];
                } else if (current_node.parentElement && current_node.parentElement != document.documentElement) {
                    current_node = current_node.parentElement;
                } else {
                    break;
                }
            }
        } else if (i[0] == '#') { //匹配节点及其父节点的id
            let current_node = node;
            while (current_node) {
                if (current_node.id == i.substr(1)) {
                    return itemgroup[i];
                } else if (current_node.parentElement && current_node.parentElement != document.documentElement) {
                    current_node = current_node.parentElement;
                } else {
                    break;
                }
            }
        } else if (i[0] == '$') { //执行document.querySelector
            if (document.querySelector(i.substr(1)) != null) {
                return itemgroup[i];
            }
        } else if (i[0] == '*') { //搜索原始文本
            if (textori.includes(i.substr(1))) {
                return itemgroup[i];
            }
        }
        // and more ...
        else {
            CNITEM_DEBUG && console.log({
                text, itemgroup, dsc: "不识别的标签" + i
            })
        }
    }
    return null;
}

//2.采集新词
//20190320@JAR  rewrite by 麦子
var cnItem = function (text, node) {

    if (typeof (text) != "string")
        return text;
    let textori = text;
    //处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;;
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
        if (typeof (cnItems[i]) == "string" && (text == i || text == cnItems[i])) {
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
        } else if (typeof (cnItems[i]) == "object" && text == i) {
            let result = cnItemByTag(i, cnItems[i], node, textori);
            if (result != null) {
                return text_prefix + result + text_reg_exclude_postfix + text_postfix;
            } else {
                CNITEM_DEBUG && console.log({
                    text: i,
                    cnitem: cnItems[i],
                    node
                });
            }
        } else {
            // continue;
        }
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg ? text : textori;
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    if (cnItems._OTHER_.length < 1000) {
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    //开启生词打印
    CNITEM_DEBUG && console.log(
        '有需要汉化的英文：', text
    );

    //返回生词字串
    return text_prefix + text + text_reg_exclude_postfix + text_postfix;
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
                let cnText = cnItem(text, subnode);
                cnText !== text && transTaskMgr.addTask(subnode, 'textContent', cnText);
                //console.log(subnode);
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text, subnode);
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
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
            if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
            } else if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent, node);
                        //console.log(node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || node.childNodes.length == 0) {
                            if (node.innerText)
                                node.innerText = cnItem(node.innerText, node);
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
