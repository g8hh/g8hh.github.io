// ==UserScript==
// @name         Stellar Odyssey 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.4
// @description  网页游戏 Stellar Odyssey (https://game.stellarodyssey.app/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Stellar Odyssey.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://game.stellarodyssey.app/favicon.ico
// @license      MIT
// @include      *https://game.stellarodyssey.app/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/stellar-odyssey-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/stellar-odyssey-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/03/27 11:31
 * Author: guoba
 * View: https://www.gityx.com/
 * ---------------------------
 */
//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //设置
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
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "... and begin your space adventure exploring the Wonders of the Universe.": "...开始你的太空冒险，探索宇宙的奇迹。",
    "Don't have an account?": "还没有账号？",
    "Enter your username and password to start the adventure...": "输入您的用户名和密码开始冒险...",
    "Forgot your password?": "忘记密码？",
    "Guest": "游客身份游戏",
    "or play as": "或者以",
    "Remember me": "记住我",
    "Log in": "登录",
    "Prepare your journey through unexplored galaxies, push the limits of space...": "准备好您的旅程，通过未探索的星系，推动空间的极限...",
    "Sign up": "注册",
    "Welcome adventurer!": "欢迎你，冒险者！",
    "Already have an account?": "已经有账户了？",
    "and": "和",
    "By selecting Register, you acknowledge that you have read and agree to our": "选择注册即表示您已阅读并同意我们的",
    "game rules.": "游戏规则。",
    "Great, go back to": "太好了，回去",
    "Login": "登录",
    "privacy policy": "隐私政策",
    "Recover password": "找回密码",
    "Recover your password. Type your email and we will send you a recovery code.": "恢复您的密码。输入您的电子邮件，我们将给您发送一个恢复代码。",
    "Register": "注册",
    "Register a new account to start playing": "注册一个新账号开始游戏",
    "Sign in": "登录",
    "You remembered your password?": "你还记得密码吗？",
    "I agree that there is a risk of losing account info without registering.": "我同意在未注册的情况下存在丢失帐户信息的风险。",
    "Play as Guest": "以游客身份进行游戏",
    "Play as Guest and try the game without registering. Game features are limited.": "以游客身份游玩，无需注册即可体验游戏。游戏功能有限。",
    "This field is required": "这是必填项",
    "GATHERING": "采集",
    "Gathering": "采集",
    "Gas Planet": "气体行星",
    "Gas type": "气体类型",
    "Gathering nodes": "采集节点",
    "Gathering statistics": "采集统计",
    "Level:": "等级:",
    "Lvl:": "等级:",
    "Lvl": "等级",
    "Main": "首页",
    "Maneuverability:": "机动能力:",
    "laser": "激光",
    "Laser": "激光",
    "Laboratory": "实验室",
    "Reward:": "奖励:",
    "Rewards:": "奖励:",
    "ruby": "红宝石",
    "Send": "发送",
    "shield": "护盾",
    "Shield": "护盾",
    "Search player": "搜索玩家",
    "search": "搜索",
    "Screenshot:": "截屏:",
    "Rocky type": "岩石类型",
    "Actions:": "行动:",
    "Sensors": "传感器",
    "ADMIN |": "管理员 |",
    "BATTLING": "战斗",
    "Battling": "战斗",
    "Base Building": "基础建筑",
    "Buy droid": "购买机器人",
    "Chat": "聊天",
    "copper": "铜",
    "Crafting": "制作",
    "Crystal type": "晶体类型",
    "Currencies by node types": "按节点类型划分货币",
    "dark matter": "暗物质",
    "diamond": "钻石",
    "Destroyed": "摧毁",
    "Market": "市场",
    "Next action in:": "距离下一次行动:",
    "Node type:": "节点类型:",
    "Patch notes": "更新日志",
    "Taxed:": "扣税:",
    "Trophy Room": "奖杯室",
    "Upgrade": "升级",
    "Whispers": "私聊",
    "XP:": "经验值:",
    "Version:": "版本:",
    "System:": "系统:",
    "Stop gathering": "停止采集",
    "Stellar Odyssey": "行星奥德赛",
    "Status:": "状态:",
    "Starter guide": "新手指南",
    "Storage:": "存储:",
    "Social Hub": "社交中心",
    "Squadron": "中队",
    "Survived": "幸存",
    "Trade": "贸易",
    "Level up in:": "距离升级:",
    "Not Battling": "未战斗",
    "Player": "玩家",
    "Playing:": "在线玩家:",
    "Premium store": "会员商店",
    "Privacy Policy": "隐私政策",
    "Quality:": "品质:",
    "Rankings": "排行榜",
    "Records per page:": "每页显示:",
    "Recruit": "招募",
    "Atlas": "地图集",
    "drops hard": "困难掉落",
    "Exploring": "探索",
    "Amount:": "数量:",
    "Resource:": "资源:",
    "Fuel:": "燃料:",
    "Experience:": "经验值:",
    "Galaxy Map": "银河地图",
    "Game info": "游戏信息",
    "Game Rules": "游戏规则",
    "gas": "气体",
    "Report Bug": "报告错误",
    "Icy type": "寒冰类型",
    "Help": "帮助",
    "Efficiency:": "效率:",
    "Droids": "机器人",
    "Replenish": "重新补满",
    "Droids statistics from last gathering action": "上次采集行动的机器人统计",
    "close": "关闭",
    "Available nodes in your current system. Go to the Atlas or Galaxy Map to travel to other system and find other nodes.": "当前系统中的可用节点。去地图集或银河地图旅行到其他系统和寻找其他节点。",
    "Gathering:": "采集:",
    "Efficiency": "效率",
    "Purchase": "购买",
    "Cancel": "取消",
    "Confirm upgrades": "确认升级",
    "Total Upgrade Costs:": "升级总成本:",
    "Increases droid chance to accomplish gathering task without dying.": "增加机器人在不死亡的情况下完成收集任务的几率。",
    "Increases droids carrying capacity": "增加机器人的承载能力",
    "Enhances laser and probes efficiency.": "增强激光和探头的效率。",
    "Storage": "存储",
    "Logout": "登出",
    "Profile": "个人资料",
    "Reset password": "重置密码",
    "Registered:": "注册时间:",
    "Max Fuel:": "最大燃料:",
    "Max Actions:": "最大行动:",
    "User information": "用户信息",
    "Update password": "更新密码",
    "Username:": "用户名:",
    "Security": "安全",
    "Secure your account with a strong password with at least 8 characters": "使用至少8个字符的强密码保护您的帐户",
    "Normal - Uncommon - Rare - Epic - Legendary": "普通 - 罕见 - 稀有 - 史诗 - 传说",
    "Disabled": "已禁用",
    "Email:": "邮箱:",
    "Enable": "已启用",
    "Enable or disable two factor authentication.": "启用或禁用双因素身份验证。",
    "Current user information and email address.": "当前用户信息和电子邮件地址。",
    "Check your subscription status here.": "在这里查看您的订阅状态。",
    "Guest account:": "游客账户:",
    "Premium Subscription": "会员订阅",
    "Stats": "属性",
    "Points:": "点数:",
    "Player Damage:": "玩家伤害:",
    "Player Health:": "玩家生命值:",
    "Power": "力量",
    "Precision": "精准",
    "Evasion": "Evasion",
    "engine": "引擎",
    "Engine": "引擎",
    "Damage Bonuses:": "伤害加成:",
    "Clones Health:": "克隆体生命值:",
    "Battle rounds log:": "战斗回合日志:",
    "Bonuses:": "加成:",
    "Buy Clone": "购买克隆体",
    "Clear": "清除",
    "Currencies:": "货币:",
    "damage.": "伤害.",
    "Drops:": "掉落:",
    "Crit. Chance:": "暴击几率:",
    "Crit. Damage:": "暴击伤害:",
    "Dual Shot:": "双重射击:",
    "misses hit on": "未命中",
    "hits": "击中",
    "Inventory": "库存",
    "incendiary": "燃烧弹",
    "menu": "菜单",
    "Not Gathering": "未采集",
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
    "methane": "甲烷",
    "silver": "银",
    "sapphire": "蓝宝石",
    "silicon": "硅",
    "sulfur": "硫",
    "water": "水",
    "weapon": "武器",
    "hydrogen": "氢",
    "nitrogen": "氮",
    "platinum": "铂",
    "carbon": "碳",
    "cobalt": "钴",
    "ammonia": "氨",
    "argon": "氩",
    "helium": "氦",
    "emerald": "翡翠",
    "dawn:": "dawn:",
    "Maliciousism:": "Maliciousism:",
    "Bisloy:": "Bisloy:",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "error": "error",
    "visibility_on": "visibility_on",
    "visibility_off": "visibility_off",
    "arrow_drop_down": "arrow_drop_down",
    "chevron_left": "chevron_left",
    "chevron_right": "chevron_right",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    ":": ":",
    "/": "/",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
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
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    "Gityx": "Gityx",
    "Gz": "Gz",
    "O": "O",
    'Jan': '1月',
    'Feb': '2月',
    'Mar': '3月',
    'Apr': '4月',
    'May': '5月',
    'Jun': '6月',
    'Jul': '7月',
    'Aug': '8月',
    'Sep': '9月',
    'Oct': '10月',
    'Nov': '11月',
    'Dec': '12月',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}


//需处理的前缀
var cnPrefix = {
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
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Lvl: ": "等级: ",
    "Blueprints: ": "蓝图: ",
    "Version: ": "版本: ",
    "carbon: ": "碳: ",
    "nitrogen: ": "氮: ",
    "methane: ": "甲烷: ",
    "silver: ": "银: ",
    "sapphire: ": "蓝宝石: ",
    "silicon: ": "硅: ",
    "sulfur: ": "硫: ",
    "water: ": "水: ",
    "weapon: ": "武器: ",
    "hydrogen: ": "氢: ",
    "nitrogen: ": "氮: ",
    "platinum: ": "铂: ",
    "carbon: ": "碳: ",
    "cobalt: ": "钴: ",
    "ammonia: ": "氨: ",
    "argon: ": "氩: ",
    "incendiary: ": "燃烧弹: ",
    "helium: ": "氦: ",
    "emerald: ": "翡翠: ",
    "energy: ": "能量: ",
    "Droids dodge chance: ": "机器人闪避几率: ",
    "electromagnetic: ": "电磁: ",
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
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "/sec)": "/秒)",
    "% bonus": "% 奖励",
    " day(s)": " 天",
    " /hour": " /小时",
    "% quality": "% 品质",
    " /day": " /天",
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
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)h$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^(.+) \/ (.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^\[([\d\.,]+)\/([\d\.,]+) ([\d\.,]+):([\d\.,]+)\]$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = []

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Hit: (.+) Dodge: (.+)$/, '命中: $1 闪避: $2'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 4 月 $1, $3:$4'],
    [/^May ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 12 月 $1, $3:$4'],
    [/^Jan ([\d\.,]+) ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '$2 年 1 月 $1, $3:$4'],
    [/^Feb ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '2 月 $1, $3:$4'],
    [/^Mar ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '3 月 $1, $3:$4'],
    [/^Apr ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '4 月 $1, $3:$4'],
    [/^May ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '5 月 $1, $3:$4'],
    [/^Jun ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '6 月 $1, $3:$4'],
    [/^Jul ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '7 月 $1, $3:$4'],
    [/^Aug ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '8 月 $1, $3:$4'],
    [/^Sep ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '9 月 $1, $3:$4'],
    [/^Oct ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '10 月 $1, $3:$4'],
    [/^Nov ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '11 月 $1, $3:$4'],
    [/^Dec ([\d\.,]+), ([\d\.,]+):([\d\.,]+)$/, '12 月 $1, $3:$4'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) credits$/, '$1 信用点'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) upgrades$/, '$1 升级'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) precision ([\d\.,]+) evasion ([\d\.,]+) hull$/, '$1 精准 $2 闪避 $3 船体'],
    [/^([\d\.,]+) minutes ([\d\.,]+) seconds$/, '$1 分 $2 秒'],
    [/^Upgrade Droid ([\d\.,]+)$/, '升级 机器人 $1'],
    [/^Droid ([\d\.,]+)$/, '机器人 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Next fight in: (.+) seconds.$/, '距离下次战斗还有：$1 秒。'],
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
                        }
                    }
                }
            }
        }
        transTaskMgr.doTask();
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
    window.cnItems = cnItems
}();