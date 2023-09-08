// ==UserScript==
// @name         mafiaorder-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.7
// @description  Mafia Order (https://www.mafiaorder.com/page/register&ref=2728) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://www.mafiaorder.com/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/mafiaorder-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/mafiaorder-chs.user.js
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
    "Shop": "商店",
    "I accept": "我同意",
    "International online role-playing mafia game": "国际在线角色扮演黑手党游戏",
    "Links": "链接",
    "None": "无",
    "Play": "开始",
    "PLAY": "开始",
    "Logout": "登出",
    "Play Mafia Order!": "玩黑手党秩序！",
    "Privacy Policy.": "隐私政策。",
    "Refer Friends": "邀请好友",
    "Settings": "设置",
    "Subscribe": "订阅",
    "This game requires the use of cookies, to find out how we use them please see our": "此游戏需要使用 cookie，要了解我们如何使用它们，请参阅我们的",
    "Connect With Us": "联系我们",
    "Account Settings!": "账户设置！",
    "Confirm Password": "确认密码",
    "New Password": "新密码",
    "Old Password": "旧密码",
    "Update Your Password": "更新你的密码",
    "Forgot Password?": "忘记密码？",
    "No, I'll skip it!": "不，我会跳过它！",
    "Login": "登录",
    "Please log into your account.": "登录您的帐户。",
    "Register": "注册",
    "Welcome Back!": "欢迎回来！",
    "Sign in using Facebook": "使用 Facebook 登录",
    "Welcome to the game": "欢迎来到本游戏",
    "Yes please!": "是的，继续！",
    "You can always view the tutorial again by clicking on the tutorial icon in the sidebar!": "您随时可以通过单击侧边栏中的教程图标再次查看教程！",
    "Would you like to view the quick tutorial so that you can get your bearings?": "您想查看快速教程，以便了解您的方位吗？",
    "Home": "首页",
    "Enter your email address below.": "在下面输入您的电子邮件地址。",
    "Login Using Email": "使用电子邮件登录",
    "Register using Facebook": "使用 Facebook 注册",
    "and": "和",
    "Do you agree to the": "您是否同意",
    "jewelry": "饰品",
    "Please register your account.": "请注册您的帐户。",
    "Rules": "规则",
    "Welcome!": "欢迎！",
    "No Family": "无家族",
    "#General": "#常规",
    "Bank": "银行",
    "Backfire": "回火",
    "City Map": "城市地图",
    "Coaching": "训练",
    "Cyber": "网络",
    "Health": "生命",
    "Hospital": "医院",
    "Failed": "失败",
    "Family": "家族",
    "Family Crime": "家族犯罪",
    "Game Sound": "游戏声音",
    "Game": "游戏",
    "Mail": "邮件",
    "Success": "成功",
    "Train Station": "火车站",
    "User Info": "用户信息",
    "Turtle": "乌龟",
    "War": "战争",
    "Washington": "华盛顿",
    "Attack": "攻击",
    "Attack Logs": "攻击日志",
    "Attack Power": "攻击力",
    "Auction House": "拍卖行",
    "Action": "行动",
    "All Families": "所有家族",
    "Bought": "购买",
    "Casino": "赌场",
    "Character": "角色",
    "Ready": "就绪",
    "Search": "搜索",
    "Stock Exchange": "证券交易所",
    "Stocks": "股票",
    "Newest Player": "新玩家",
    "Money Earned": "赚取的钱",
    "Staff": "人员",
    "Hideout": "藏身处",
    "Hey, welcome to MO. If you need any help just shout me": "嘿，欢迎来到 黑手党秩序。 如果你需要任何帮助就喊我",
    "ON ": "开启 ",
    "OFF ": "关闭 ",
    "Latest Death": "最近死亡",
    "Last Rank Up": "最近排名",
    "attacking": "攻击了",
    "Attacks": "攻击",
    "Backfire status": "回火状态",
    "Inventory": "库存",
    "ready to claim!": "准备领取！",
    "Reset Everything": "重置一切",
    "Scarfo": "围巾",
    "Sidebar": "侧边栏",
    "Update": "更新",
    "Events": "事件",
    "Expired": "已到期",
    "Edit Profile": "编辑个人资料",
    "Defense Power": "防御力",
    "Detectives": "侦探",
    "Hitlist": "暗杀名单",
    "Jail": "监狱",
    "Jail Busts": "监狱破坏者",
    "Life Insurance status": "人寿保险状况",
    "News & Events": "新闻 & 事件",
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
    "May": "5月",

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
    "Youtube": "Youtube",
    "Gityx": "Gityx",
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
    "                            ": "                            ",
    "                                            ": "                                            ",
    "                               ": "                               ",
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
    "\t\t\t\t\t\t": "\t\t\t\t\t\t",
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t\t": "\t\t",
    "\t": "\t",
    "\n": "\n",
    "\t                    ": "\t                    ",
    "Scum": "败类",
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
    "Username is already taken by someone!": "用户名已被他人使用！",
    "To earn extra rewards use this link when inviting people": "要赚取额外奖励，请在邀请他人时使用此链接",
    "Mafia Order is a free-to-play online role-playing mafia game!": "黑手党秩序 是一款免费的在线角色扮演黑手党游戏！",
    "Game Rules": "游戏规则",
    "Privacy Policy ": "隐私策略 ",
    "You have been logged out!": "你已退出登录！",
    "Reset Password": "重置密码",
    "Select the": "请选择",
    "You hear a commotion across the road, you see": "你听到马路对面的骚动，你看到了",
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
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^\[X\](.+)$/,
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
    [/^(.+) Users Online(.+)Registered(.+)$/, '$1 用户在线 $2 已注册账户'],
    [/^(.+)Scum \(([\d\.,]+)\)$/, '$1人渣（$2）'],
    [/^(.+)Version ([\d\.]+) \- Day ([\d\.,]+)$/, '$1版本 $2 \- 天数 $3'],
    [/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\+([\d\.]+)\% Reputation$/, '\+$1\% 名气'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^Day ([\d\.,]+)$/, '天 $1'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) days ago$/, '$1 天前'],
    [/^([\d\.,]+) minutes ago$/, '$1 分钟前'],
    [/^([\d\.,]+) minutes  ago$/, '$1 分钟前'],
    [/^([\d\.,]+) hours ago$/, '$1 小时前'],
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