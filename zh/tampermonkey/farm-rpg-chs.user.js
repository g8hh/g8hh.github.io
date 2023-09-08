// ==UserScript==
// @name         farm-rpg-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.3
// @description  Farm Rpg (https://farmrpg.com/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://farmrpg.com/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/farm-rpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/farm-rpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2023/02/24 17:52.
 * Author: guoba
 * View: http://www.gityx.com
 * ---------------------------
 */
//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //设置
    "Save": "保存",
    "Export": "导出",
    "Import": "导入",
    "Loading...": "加载中...",
    "Open user menu": "打开用户菜单",
    "Chat": "聊天",
    "Battle": "战斗",
    "Close": "关闭",
    "Dismiss": "解雇",
    " Farm RPG is a game about choice and making money. There are many ways to invest and grow your farm to increase your profits. The community loves to help players in terms of how to play, best things to do first, and more.": "Farm RPG 是一款关于选择和赚钱的游戏。 有很多方法可以投资和发展您的农场来增加您的利润。 社区乐于帮助玩家了解如何玩、最先做的事情等等。",
    "Farm RPG is a simple, menu-based farming role playing game / MMO. As you play, a lot of fun things unlock for you to do on a daily basis. There's a world to explore with townsfolk to help and a community of players to work with and trade.": "Farm RPG 是一款简单的基于菜单的农场角色扮演游戏/MMO。 在您玩游戏的过程中，您每天都会解锁许多有趣的事情。 有一个世界可以与城镇居民一起探索以提供帮助，还有一个玩家社区可以与之合作和交易。",
    "  Home": "首页",
    "  Playing Now": "开始游戏",
    "100% Ad-Free. Totally F2P friendly. Contains optional IAPs to support game development.": "100% 无广告。 完全 F2P 友好。 包含可选的 IAP 以支持游戏开发。",
    "About": "关于",
    "About Farm RPG": "关于农场角色扮演游戏",
    "Amazing Community, hang out with thousands of other players. Chat, trade, work together, etc.": "惊人的社区，与成千上万的其他玩家一起出去玩。 聊天、交易、一起工作等。",
    "Choose your Username or use a Referral Code": "选择您的用户名或使用推荐码",
    "Code of Conduct": "行为守则",
    "Cross-platform, playable on Mobile devices and Desktop with the same account.": "跨平台，可使用同一帐户在移动设备和桌面设备上播放。",
    "Dark Mode option if you can't stand all the brightness!": "如果您无法忍受所有的亮度，请选择暗模式选项！",
    "Enjoy tons of content and activities with new features and updates weekly.": "享受海量内容和活动以及每周的新功能和更新。",
    "Features": "特征",
    "Forgot your Password?": "忘记密码了吗？",
    "Giveaways": "赠品",
    "Global": "全局",
    "Help": "帮助",
    "Join our Community": "加入我们的社区",
    "Let's Get Started": "让我们开始吧",
    "Login to your Account": "登录到您的帐户",
    "Navigation": "导航",
    "Play Now!": "开始游戏！",
    "Privacy Policy": "隐私政策",
    "Register an Account": "注册一个帐户",
    "reload_round_fill": "reload_round_fill",
    "Skip Registration and start playing!": "跳过注册并开始游戏！",
    "Support": "支持",
    "Terms & Conditions": "条款和条件",
    "Trade": "贸易",
    "Trivia": "琐事",
    "View Screenshots": "查看截图",
    "Welcome to Farm RPG! This is a simple, mobile-friendly, farming RPG game where you start a farm, fish, craft and explore the world of the game.": "欢迎来到农场角色扮演游戏！ 这是一款简单、适合移动设备的农场角色扮演游戏，您可以在其中开垦农场、钓鱼、制作工艺品并探索游戏世界。",
    "30 chars or less": "30 个字符或更少",
    "and our": "和我们的",
    "Back": "返回",
    "By registering you agree to our": "注册即表示您同意我们的",
    "Email": "电子邮件",
    "If another player referred": "如果其他玩家提到",
    "Not required": "不需要",
    "OK": "好的",
    "Password": "密码",
    "Please try a different Username.": "请尝试不同的用户名。",
    "Referral Code": "推荐码",
    "Register Account": "注册账户",
    "Register to play": "注册可玩",
    "Sorry!": "抱歉！",
    "This game is played online by multiple players at the same time. By registering you agree to our": "该游戏由多个玩家同时在线玩。 注册即表示您同意我们的",
    "Username": "用户名",
    "Welcome! Making an account is easy and email is NOT required. Jump in and please be nice!": "欢迎！ 创建一个帐户很容易，不需要电子邮件。 跳进去，请保持友善！",
    "you, enter their code here.": "你，在这里输入他们的邀请码。",
    "Forgot Password?": "忘记密码？",
    "We will send you a link to reset it!": "我们将向您的邮箱发送重置密码链接！",
    "Invalid username and email.": "用户名和电子邮件无效。",
    "Let's do this! Login now and start farming.": "让我们开始吧！ 立即登录并开始耕种。",
    "Login": "登录",
    "Trouble remembering": "麻烦记住",
    "your password": "你的密码",
    "Invalid username or password.": "无效的用户名或密码。",
    "  About / Updates": "关于/更新",
    "  Library": "图书馆",
    "  Logout": "登出",
    "  My Friends": "我的朋友",
    "  My Inventory": "我的库存",
    "  My Mailbox": "我的邮箱",
    "  My Messages": "我的消息",
    "  My Profile": "我的简历",
    "  My Settings": "我的设置",
    "Chat will unlock once you reach Farming Level 5.": "达到农场等级 5 后，聊天将解锁。",
    "Crafting": "制作",
    "Daily Chores": "日常家务",
    "Exploring": "探索",
    "Farming": "农业",
    "Farming Level 20 Required": "需要 20 级耕种",
    "Fishing": "钓鱼",
    "Hey farmer! The very first thing you should do is start your farm. Click 'Start a Farm' below to do that.": "嘿农夫！ 你应该做的第一件事就是开始你的农场。 单击下面的“开始农场”即可。",
    "Home": "家",
    "LOCKED": "锁定",
    "My skills": "我的技能",
    "Start a Farm": "开办农场",
    "Start a Farm first": "先开农场",
    "Switch to Light Mode": "切换到灯光模式",
    "Unlock Perks": "解锁津贴",
    "Welcome gityx!": "欢迎您！",
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
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",
    "© 2023 Magic & Wires, LLC": "© 2023 Magic & Wires, LLC",
    "-": "-",
    "": "",
    "": "",
    "": "",
    "": "",
}


//需处理的前缀
var cnPrefix = {
    "                            ": "                            ",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "              ",
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
    "  ": "",
    " ": " ",
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t\t": "\t\t",
    "\t": "\t",
    "\n": "\n",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
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
    "  ": "",
    " ": " ",
    "\t": "\t",
    "\n                      \n                      ": "\n                      \n                      ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
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
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^(.+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+) \- ([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^(.+) ([\d\.]+):([\d\.]+):([\d\.]+) \- ([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^([\d\.,]+) $/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^BI([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = []

//正则替换，带数���的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

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
            CNITEM_DEBUG && console.log({ text, itemgroup, dsc: "不识别的标签" + i })
        }
    }
    return null;
}

//2.采集新词
//20190320@JAR  rewrite by 麦子
var cnItem = function(text, node) {

    if (typeof(text) != "string")
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
        if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])) {
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
        } else if (typeof(cnItems[i]) == "object" && text == i) {
            let result = cnItemByTag(i, cnItems[i], node, textori);
            if (result != null) {
                return text_prefix + result + text_reg_exclude_postfix + text_postfix;
            } else {
                CNITEM_DEBUG && console.log({ text: i, cnitem: cnItems[i], node });
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
            function(a, b) {
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
    addTask: function(node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function() {
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

! function() {
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
    let observer = new MutationObserver(function(e) {
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
    window.cnItems = cnItems
}();