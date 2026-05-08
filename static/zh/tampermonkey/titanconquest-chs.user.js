// ==UserScript==
// @name         titanconquest-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.7
// @description  TitanConquest (https://titanconquest.com/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://titanconquest.com/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/titanconquest-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/titanconquest-chs.user.js
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
    "(Magic & Wires LLC)": "（Magic & Wires 有限责任公司）",
    "A light-weight, mobile, futuristic Mythology-themed text RPG.  Create your Hero, explore, battle enemies, find loot, get gear and more!": "一款轻量级、可移动、未来派神话主题的文字角色扮演游戏。 创建你的英雄，探索，与敌人战斗，寻找战利品，获得装备等等！",
    "About / Updates": "关于/更新",
    "Bless this immunity.": "保佑这种免疫力。",
    "Close Actions": "关闭操作",
    "Custom": "自定义",
    "Forgot your Password?": "忘记密码了吗？",
    "Game Screenshots": "游戏截图",
    "Game Stats": "游戏统计",
    "Game Wiki": "游戏维基",
    "Generation": "世代",
    "Global Chat": "全球聊天",
    "Help / FAQ": "帮助/常见问题解答",
    "Let's Get Started": "让我们开始吧",
    "Login to see chat!  We have an extremely friendly and helpful community of players.": "登录查看聊天！ 我们有一个非常友好和乐于助人的玩家社区。",
    "Login to your Account": "登录到您的帐户",
    "Made of": "作者",
    "magic and wires": "magic and wires",
    "Navigation": "导航",
    "New Today": "今日新闻",
    "Players": "玩家",
    "Privacy Policy": "隐私政策",
    "Register to Play": "注册并开始玩",
    "Story:": "故事：",
    "Titan Conquest for Android": "泰坦征服 安卓版",
    "Titan Conquest for iOS": "泰坦征服 iOS版",
    "View Game Screenshots": "查看游戏截图",
    "I am made of magic and wires...": "我是由魔法和电线组成的...",
    "Back": "后退",
    "Code of Conduct": "行为守则",
    "Email": "电子邮件",
    "Forgot Password?": "忘记密码？",
    "Keep it clean! Have fun, this is a game.  Don't cause trouble and all will be well.  Please keep your username appropriate, clean, etc, no bad words.": "保持卫生！ 玩得开心，这是一个游戏。 不要惹麻烦，一切都会好起来的。 请保持您的用户名适当、干净等，不要说脏话。",
    "Let's do this! Login now and start playing!": "我们开工吧！ 立即登录并开始游戏！",
    "Login": "登录",
    "Password": "密码",
    "Password Again": "再次输入密码",
    "Please note this game uses cookies to store your login session info.": "请注意此游戏使用 cookie 来存储您的登录会话信息。",
    "Register Account": "注册账户",
    "This game is played online by multiple players at the same time. By registering you agree to our": "该游戏由多个玩家同时在线玩。 注册即表示您同意我们的",
    "Username": "用户名",
    "Usernames must be 30 chars or less": "用户名不得超过 30 个字符",
    "OK": "确定",
    "Welcome!": "欢迎！",
    "You may now login!": "您现在可以登录了！",
    "My Messages": "我的消息",
    "Welcome to the game! You need to create your first Hero. Jump over to Hero creation next.": "欢迎来到本游戏！ 您需要创建您的第一个英雄。 接下来跳转到英雄创建。",
    "Welcome:": "欢迎:",
    "Chat": "聊天",
    "Community Forum": "社区论坛",
    "Create a Hero": "创建英雄",
    "Home": "首页",
    "Leaderboards": "排行榜",
    "My Profile": "我的个人资料",
    "My Settings": "我的设置",
    "Warrior": "战士",
    "NOTICE:": "注意:",
    "New player tips": "新玩家提示",
    "Augur": "占卜师",
    "Gender": "性别",
    "Giant": "巨人",
    "Female": "女",
    "Male": "男",
    "5% more Attack and bonus LP*": "增加 5% 攻击力和额外 位置点*",
    "5% more HP and Defense": "增加 5% 生命 和 防御",
    "5% more XP and Drachma": "增加 5% 经验 和 德拉克马",
    "    \n\t\t\t\t\t    * Location Points (LP) allow you to go to new locations. Each Class unlocks different Subclass abilities at level 5.  Currently, Race does not affect gameplay.": "\n\t\t\t\t\t * 位置点 (LP) 可让您前往新位置。 每个职业在 5 级解锁不同的子职业能力。目前，种族不影响游戏玩法。",
    "[CLAIM]": "[领取]",
    "Class": "职业",
    "Athenian": "雅典",
    "Corinthian": "哥林多",
    "Race": "种族",
    "Spartan": "斯巴达",
    "Create Character": "创建角色",
    "Tutorial": "教程",
    "You can unlock Cards for display on your Profile.  To earn them, Patrol & kill enemies.  You can check on your Card progress anytime from Home.": "您可以解锁卡片以显示在您的个人资料中。 为了赢得他们，巡逻并杀死敌人。 您可以随时从主页查看您的卡片进度。",
    "You will start out on Earth in The Acropolis. First check out the various vendors before setting out anywhere else.  You should buy some gear from the Vanguard to give yourself a little defense.  Don't fight naked!": "您将从雅典卫城开始在地球上的生活。 在前往其他任何地方之前，请先检查各种供应商。 你应该从 Vanguard 那里买一些装备来给自己一点防御。 不要光着身子战斗！",
    "When you Patrol in a location, you will see a list of enemies nearby.  Select any of them to start a battle with that enemy.  As you battle, keep an eye on your HP and their HP and run if you have to!  If you die, you respawn in The Acropolis, but you can always go back and battle.": "当您在某个位置巡逻时，您会看到附近的敌人列表。 选择其中任何一个与该敌人开始战斗。 在战斗时，请注意您的 HP 和他们的 HP 并在必要时逃跑！ 如果你死了，你会在雅典卫城重生，但你总是可以回去战斗。",
    "Earning a high Card Rank against a particular enemy can increase the amount of XP and Drachma you earn from that enemy in battle.": "赢得针对特定敌人的高卡片等级可以增加您在战斗中从该敌人那里获得的 XP 和德拉克马的数量。",
    "Start out by going to Earth > Gaea Vastlands > The Grottos, you will then be Patrolling.": "开始前往地球 > 盖亚浩瀚之地 > 石窟，然后你将进行巡逻。",
    "When you are ready to patrol select \"Go Somewhere Else\" or you can select your Current Location to go to the \"Change Location\" section.": "当您准备好巡逻时，选择“去其他地方”，或者您可以选择您的当前位置以转到“更改位置”部分。",
    "As you play you may get Memories from enemies or Missions.  You can take these to the Codebreaker in The Acropolis to decode them into Gear.  Decoded Gear have perks that can help you get stronger.": "在玩游戏时，您可能会从敌人或任务中获得记忆。 您可以将这些带到雅典卫城的密码破解器中，将它们解码成装备。 解码装备 具有可以帮助您变得更强壮的特性。",
    "Besides Drachma, some vendors take other currencies.  Ancient Coins are accepted by Borgen, who appears in The Acropolis on Fridays, Saturdays and Sundays.  Borgen sells rare items.": "除了德拉克马，一些供应商还使用其他货币。 博尔根接受古钱币，他每周五、周六和周日出现在雅典卫城。 Borgen 出售稀有物品。",
    "Gear can be upgraded with Infusion if you have the right materials.  As you play more, you will start acquiring these materials.": "如果您有合适的材料，可以使用 注入 升级装备。 随着您玩得更多，您将开始获取这些材料。",
    "Some enemies will have a skull icon by them.  These are Titans (aka Bosses) and can be particularly challenging, but also can drop rare Memories or items.": "一些敌人旁边会有一个骷髅图标。 这些是泰坦（又名 Boss），可能特别具有挑战性，但也可能掉落稀有的记忆或物品。",
    "Use the \"Change Location\" section to move around the world of Titan Conquest.  You will start out on Earth, but with enough Drachma (aka Money) you can buy a Lightship to go to the Moon, Venus, Mars and beyond.": "使用“更改位置”部分在 泰坦征服 的世界中移动。 您将从地球开始，但只要有足够的德拉克马（又名金钱），您就可以购买一艘灯塔飞船前往月球、金星、火星和更远的地方。",
    "Vanguard Marks are given to you whenever you complete a mission. These are accepted by the Vanguard Quartermaster in The Acropolis for special gear.": "每当您完成一项任务时，您就会获得先锋印记。 这些被雅典卫城的先锋军需官接受用于特殊装备。",
    "Game Progress": "游戏进度",
    "Go to Cards": "前往卡牌",
    "My Hero": "我的英雄",
    "My Gear": "我的装备",
    "My Clan": "我的家族",
    "My Inventory": "我的仓库",
    "new players. Be sure to check out the": "新玩家。 请务必查看",
    "Postmaster": "邮递员",
    "Patrolling": "巡逻",
    "Welcome": "欢迎",
    "Warrior Vanguard": "战士先锋",
    "Top Damage Dealers:": "顶级伤害经销商：",
    "Sometimes you will find memories when you defeat enemies.  Memories can be decoded into new Gear to make your Hero stronger.": "有时你会在击败敌人时找到记忆。 记忆可以解码成新的装备，让你的英雄更强大。",
    "You don't have any memories to decode.": "你没有任何记忆可以解码。",
    "What do you want to do?": "你想做什么？",
    "Weapon Shop": "武器店",
    "Mat/Booster Shop": "垫子/助推器商店",
    "Go to My Gear": "前往 我的装备",
    "Go somewhere else": "去别的地方",
    "Go back to The Acropolis": "回到雅典卫城",
    "Go Patrol and kill enemies!": "去巡逻并杀死敌人！",
    "Gear": "装备",
    "Available Vendors": "可用供应商",
    "Daily Rewards": "日常奖励",
    "Cards": "卡牌",
    "Close Tutorial": "关闭教程",
    "Highest Attack Made": "达到的最高攻击",
    "Items Sold": "出售的物品",
    "Items Used": "使用的物品",
    "Location Points": "位置点",
    "LP": "位置点（LP）",
    "Locations": "位置",
    "Locations Visited": "到过的位置",
    "Master Zemos": "Zemos 大师",
    "Max HP": "最大生命值",
    "Missions Complete": "任务完成",
    "No Bikes Yet": "还没有自行车",
    "No Chest Armor Equipped": "未装备胸甲",
    "No Class Item Equipped": "未装备职业物品",
    "No Gauntlets Equipped": "无装备护手",
    "No Heavy Equipped": "无重型装备",
    "No Ships Yet": "还没有船",
    "No Leg Armor Equipped": "未装备腿甲",
    "No Heroes Avenged yet": "未为英雄报仇",
    "No Helmet Equipped": "未装备头盔",
    "Player Profile": "玩家个人资料",
    "PvE Information": "PvE 信息",
    "Reset Hero": "重置英雄",
    "Stats": "属性",
    "Ships": "船",
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
    "bolt_fill": "bolt_fill",
    "chevron_down": "chevron_down",
    "close_round": "close_round",
    "reload_round_fill": "reload_round_fill",
    "flag_fill": "flag_fill",
    "world": "world",
    "star_fill": "star_fill",
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
    "\t\t\t\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t\t",
    "\t\t\t\t\t\t\t\t    ": "\t\t\t\t\t\t\t\t    ",
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t\t": "\t\t",
    "\t": "\t",
    "\n": "\n",
    "The year is 2378. The gods of Olympus have returned to our universe and have challenged Earth. In order for Earth to continue to exist, the finest Heroes from every corner must face a legion of Titans across the galaxy and, ultimately, face the gods to prove their might. Create your hero now, and help Earth conquest over the Titans!": "这一年是 2378 年。奥林匹斯山的众神已经回到我们的宇宙并向地球发起挑战。 为了让地球继续存在，来自各个角落的最优秀的英雄必须面对银河系中的泰坦军团，并最终面对众神来证明他们的力量。 现在就创造你的英雄，帮助地球战胜泰坦！",
    "XP to ": "经验到达 ",
    "Unlocks at Lv ": "解锁于等级 ",
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
    "\n\t\t\t\t\t\t\t\t": "\n\t\t\t\t\t\t\t\t",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "We will send you a link to reset it!": "我们将向您发送重置链接！",
    " claimed a free Defense Booster!": " 领取了一个免费的防御助推器！",
    " just registered!  Welcome!": " 刚刚注册了！欢迎！",
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
    /^([\d\.]+):([\d\.]+):([\d\.]+) PM$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+) AM$/,
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
    [/^(.+) Game Version (.+)$/, '$1 游戏版本 $2'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Next Event on (.+)!$/, '下一场活动将于 $1 举行！'],
    [/^(.+) just won (.+) Ancient Coins from the lottery!$/, '$1 刚刚从彩票中赢得了 $2 古币！'],
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
    [/^Spartan Warrior ([\d\.,]+)$/, '斯巴达战士 $1'],
    [/^Season ([\d\.,]+)  \- Level ([\d\.,]+)$/, '赛季 $1 \- 等级 $2'],
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