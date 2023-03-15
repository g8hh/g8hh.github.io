// ==UserScript==
// @name         torn-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.10
// @description  Simple MMO（https://web.simple-mmo.com/）游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @match        *://*/*
// @include      *https://www.torn.com/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com/zh/tampermonkey/torn-chs.user.js
// @downloadURL    https://g8hh.com/zh/tampermonkey/torn-chs.user.js
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
    "Milking": "挤奶",
    "Loading...": "加载中...",
    "Open user menu": "打开用户菜单",
    "Chat": "聊天",
    "Battle": "战斗",
    "Close": "关闭",
    "Dismiss": "解雇",
    "EXP": "经验",
    "Hide": "隐藏",
    "Events": "事件",
    "Announcement": "公告",
    "Help": "帮助",
    "Logout": "登出",
    "here": "这里",
    "Events": "事件",
    "Job": "工作",
    "Jail": "监狱",
    "Information": "信息",
    "Messages": "消息",
    "Missions": "任务",
    "New Players": "新玩家",
    "Rules": "规则",
    "this week": "本周",
    "Item Market": "物品市场",
    "Home": "家",
    "Skill Levels": "技能等级",
    "Speed": "速度",
    "Skip to content": "跳转到内容",
    "Skip to navigation menu": "跳转到导航菜单",
    "Strength": "力量",
    "to learn more.": "了解更多。",
    "Total": "总计",
    "Trade": "交易",
    "Tutorial": "教程",
    "View Profile": "查看个人资料",
    "Working Stats": "工作统计",
    "You do not have any special skills currently": "您目前没有任何特殊技能",
    "TORN uses cookies to ensure you get the best experience. Go": "TORN 使用 cookie 来确保您获得最佳体验。 去",
    "TORN uses cookies to ensure you get the best experience. Please see our": "TORN 使用 cookie 来确保您获得最佳体验。 请查看我们的",
    "This is your home, you can get here at any time by clicking it on the navigation panel. It shows most of your details, for instance your attacking stats and the property you are living in. If you ever need information about yourself, here's where to come.": "这是您的家，您可以随时在导航面板上点击它到达这里。 它显示了您的大部分详细信息，例如您的攻击统计数据和您居住的房产。如果您需要有关您自己的信息，请点击这里。",
    "Settings": "设置",
    "Auto theft": "汽车盗窃",
    "Casino": "赌场",
    "City": "城市",
    "Cost": "费用",
    "Defense": "防御",
    "Dexterity": "敏捷",
    "Drug deals": "面粉交易",
    "Enemies": "敌人",
    "Energy": "能量",
    "energy": "能量",
    "every": "每",
    "Education": "教育",
    "Education:": "教育:",
    "Endurance": "耐力",
    "Criminal Record": "犯罪记录",
    "Computer crimes": "计算机犯罪",
    "Company": "公司",
    "Forums": "论坛",
    "Hospital": "医院",
    "Hall of Fame": "名人堂",
    "Recruit Citizens": "招募市民",
    "Dark Mode": "深色模式",
    "Age": "年龄",
    "Battle Stats": "战斗统计",
    "Casino points": "赌场积分",
    "Calendar": "日历",
    "Areas": "区域",
    "Crimes": "犯罪",
    "Days in faction": "帮派天数",
    "Dealer": "经销商",
    "Desktop View": "桌面视图",
    "Equipped Weapons & Armor": "装备的武器和盔甲",
    "Faction": "帮派",
    "Fees": "费用",
    "Faction Information": "帮派信息",
    "FULL": "已满",
    "Fraud crimes": "诈骗",
    "Gain access to Advanced Search, a Notebook and an Exclusive Forum by becoming a donator today. Click here!": "立即成为捐赠者，获得对高级搜索、笔记本和独家论坛的访问权限。 点击这里！",
    "General Information": "常规信息",
    "Gym": "健身房",
    "Happy": "快乐",
    "Help Torn thrive by becoming a donator! Help us pay for our servers, hosting fees, developers, and advertising.": "成为捐赠者，帮助 Torn 茁壮成长！ 帮助我们支付服务器费用、托管费用、开发人员费用和广告费用。",
    "It's nearly time for St Patrick's Day, when all alcohol effects are doubled and Green Stout spawns on the city map.": "快到圣帕特里克节了，届时所有酒精效果都会翻倍，并且城市地图上会出现绿色烈性黑啤酒。",
    "Items": "物品",
    "Job Information": "工作信息",
    "Intelligence": "智力",
    "Level": "等级",
    "Life": "生命值",
    "Lists": "列表",
    "Loan Shark": "高利贷",
    "Log": "日志",
    "Money": "钱",
    "Marital status": "婚姻状况",
    "Manual labor": "手工劳作",
    "Murder": "谋杀",
    "Name": "名称",
    "Name:": "姓名:",
    "Networth": "净资产",
    "Other": "其它",
    "News Ticker": "新闻行情",
    "None": "无",
    "Properties": "属性",
    "Rank": "段位",
    "Server:": "服务器:",
    "Shack": "棚屋",
    "Theft": "盗窃",
    "User's Name / ID": "用户名 / ID",
    "was posted": "已发布",
    "Text based RPG - TORN": "基于文字的RPG - TORN",
    "Single": "单身",
    "Become a subscriber today to gain donator status, points, and special monthly rewards! Click here!": "立即成为订阅者以获得捐赠者身份、积分和特别月度奖励！ 点击这里！",
    "Credits": "鸣谢",
    "Home Tutorial": "家园教程",
    "Illegal products": "违禁品",
    "minutes": "分钟",
    "Newspaper": "报纸",
    "Forum posts": "论坛帖子",
    "Friends": "好友",
    "Income": "收入",
    "increased by": "提高",
    "Latest Attacks": "最近攻击",
    "Latest Messages": "最近消息",
    "Latest Events": "最近事件",
    "life": "生命值",
    "Merits": "优点",
    "Personal stats": "个人统计",
    "Places": "位置",
    "Points": "积分",
    "privacy policy": "隐私政策",
    "Property": "物业",
    "Refills": "重填",
    "Property Information": "物业信息",
    "Staff": "人员",
    "If you have an issue and you're not sure who to contact, please follow": "如果您遇到问题并且不确定与谁联系，请关注",
    "In Training": "训练中",
    "Need more points?": "需要更多积分？",
    "Quality Assurance": "质量保证",
    "Moderating User Content": "审核用户内容",
    "Staff Members": "工作人员",
    "A donator pack will give you 50 points on top of other great benefits. Buy now!": "捐赠者礼包除了其他好处外，还会为您提供 50 点积分。 立即购买！",
    "Below are the staff of Torn City. There are": "以下是 Torn City 的工作人员。 有",
    "Assisting users / Public moderation": "协助用户/公共审核",
    "All": "全部",
    "All Events": "全部事件",
    "ALL EVENTS (": "全部事件 (",
    "attacked and hospitalized you [": "攻击了你并让你住院 [",
    "attacked you [": "攻击了你 [",
    "attacked you but lost [": "攻击了但是输了 [",
    "Cancel": "取消",
    "Check All": "全选",
    "Delete": "删除",
    "Delete selected": "删除所选",
    "Events Tutorial": "事件教程",
    "Here you can view your events. Events are things that have happened to you, for instance if someone attacks you, a notification will be displayed here. You can share your events with others by sending them, you can also save events so they are never deleted in the future.": "在这里您可以查看您的事件。 事件是发生在你身上的事情，例如如果有人攻击你，这里会显示一条通知。 您可以通过发送事件与他人分享您的事件，您还可以保存事件，这样它们就不会在将来被删除。",
    "Please allow up to 5 seconds...": "请最多等待 5 秒...",
    "Please enable Cookies and reload the page": "请启用 Cookie 并重新加载页面",
    "Redirecting...": "重定向…",
    "This process is automatic. Your browser will redirect to your requested content shortly.": "这个过程是自动的。 您的浏览器将很快重定向到您请求的内容。",
    "Checking your browser before accessing www.torn.com.": "在访问 www.torn.com 之前检查您的浏览器。",
    "error code: 1020": "错误代码: 1020",
    "Nerve": "勇气",
    "OVER": "超出",
    "RECEIVED (": "收到的 (",
    "Save selected": "保存已选择",
    "SAVED (": "已保存 (",
    "SEND": "发送",
    "Send Event": "发送事件",
    "Uncheck All": "反选全部",
    "User ID:": "用户 ID:",
    "view": "查看",
    "You have full": "你有完整的",
    "Use your Refills": "使用你的重填",
    "Use your Merits": "使用你的优点",
    "You have over full": "你已经满了",
    "Here you can self-exclude yourself from the Casino. This will prevent you from being able to\naccess any casino games, or use any Lottery Voucher items. Longer self-exclusion durations\nwill become available to you after the completion of previous sessions. This should still\nonly be used as a last resort, and will not affect the missions you receive, which can still\nbe related to the Casino.": "在这里，您可以自行将自己排除在赌场之外。 这将阻止您\n访问任何赌场游戏，或使用任何彩票代金券项目。 在完成之前的会话后，\n您将可以使用更长的自我排除期限。 这仍应\n用作最后的手段，并且不会影响您收到的任务，这些任务仍\n可能与赌场有关。",
    "Honor Names:": "荣誉称号：",
    "Manage Bazaar": "管理集市",
    "Manage Display Case": "管理陈列柜",
    "Melee": "混战",
    "mobile phone number": "手机号码",
    "more day until 0.": "更多天，直到 0。",
    "No one": "没有人",
    "NO": "否",
    "Off": "关闭",
    "Ok": "是",
    "Organized Crimes": "有组织的犯罪",
    "Pawn Shop": "当铺",
    "Personal Stats": "个人统计",
    "Personal Details": "个人详细信息",
    "Personal details": "个人详细信息",
    "Pharmacy": "药店",
    "Please, provide valid link properties": "请提供有效的链接属性",
    "Lottery": "抽奖",
    "Jewelry Store": "珠宝店",
    "Job Listings": "工作清单",
    "Insert": "插入",
    "Icon placement:": "图标摆放：",
    "Icon settings": "图标设置",
    "Go to": "前往",
    "?\nThis is irreversible.": "?\n这是不可逆的。",
    ".\nWe highly recommend you keep this information up to date in order to ensure the security of your account, and the ability to recover it if you should ever\nlose access.": ".\我们强烈建议您保持此信息为最新，以确保您的帐户安全，并在您失去访问权限时能够恢复它。",
    "[use]": "[使用]",
    "Blackjack": "二十一点",
    "Bookie": "赌徒",
    "Bugs & Issues": "错误&问题",
    "Casino self-exclusion": "赌场自我排除",
    "Change email": "更改邮箱",
    "CHANGE EMAIL ADDRESS": "更改电子邮件地址",
    "Change gender": "更改性别",
    "Change password": "更改密码",
    "Change name": "更改名称",
    "Change your navigation settings": "更改您的导航设置",
    "Christmas Town": "圣诞小镇",
    "Chronicle Archives": "编年史档案",
    "City Bank": "城市银行",
    "City Hall": "市政厅",
    "City:": "城市:",
    "Community Events": "社区活动",
    "Company Forum": "公司论坛",
    "Company Funds": "公司资金",
    "Competitions": "比赛",
    "Country:": "国家：",
    "Craps": "掷骰子",
    "Current Links": "当前链接",
    "date of birth": "生日",
    "Cyber Force": "网军",
    "Default order anchored": "锚定的默认订单",
    "Docks": "码头",
    "Emails will be sent to:": "电子邮件将发送至：",
    "Email subscriptions": "电子邮件订阅",
    "Edit": "编辑",
    "Format": "格式",
    "You have finished the education course you were taking! Click": "您已经完成了正在学习的教育课程！ 点击",
    "You have no recent attacks.": "你没有最近的攻击。",
    "You have no recent messages.": "你没有最近的消息。",
    "Dealer at the Casino": "赌场的经销商",
    "Male": "男",
    "Strength: (I.e. Power) Increases the damage you make to your opponent by adding pure power to your melee & fist blows, and toughening up your stance with guns for clean & precise hits.": "力量：（即力量）通过为近战和拳击增加纯粹的力量来增加你对对手造成的伤害，并用枪支加强你的姿态以获得干净和精确的命中。",
    "! You walk into the gym and begin browsing the exercises available.": "！ 您走进健身房，开始浏览可用的练习。",
    "Ability to evade an attack": "躲避攻击的能力",
    "Ability to withstand damage": "承受伤害的能力",
    "available to use.": "可用。",
    "Chance of hitting opponent": "击中对手的几率",
    "Damage you make on impact": "你在击中时造成的伤害",
    "energy per train": "能量每次训练",
    "Gym Tutorial": "健身房教程",
    "nerve": "勇气",
    "of total": "总计",
    "You have": "你有",
    "Premier Fitness": "高级健身",
    "St Patrick's Day begins at noon on the 16th, providing a 2x boost to the nerve gains from Alcohol.": "圣帕特里克节从 16 日中午开始，提供 2 倍的酒精刺激神经增益。",
    "TRAIN": "训练",
    "Training your stats in Torn is imperative. They strongly influence your success during attacking, and a player with higher stats is more feared.\nTo unlock new gyms all you have to do is train. You'll slowly gain gym EXP which will allow you to access new and better gyms. The next gym will be available for you to join once you have the required gym EXP.": "在 Torn 中训练您的属性势在必行。 它们会极大地影响您在进攻过程中的成功率，并且更害怕具有更高统计数据的球员。\n要解锁新道馆，您所要做的就是训练。 您将慢慢获得健身房 经验，这将使您能够使用新的更好的健身房。 拥有所需的健身房 经验 后，您就可以加入下一个健身房。",
    "Welcome to": "欢迎来到",
    "What would you like to train today?": "你今天想训练什么？",
    "Membership cost - $": "会员费用 - $",
    "per train": "每次训练",
    "Silver Gym": "银级健身房",
    "Woody's Workout Club": "伍迪健身俱乐部",
    "Energy usage -": "能量消耗 -",
    "Lightweight": "轻量级",
    "Prepare yourself for the forthcoming St Patrick's Day event, which will double the effects of all Alcohol items.": "为即将到来的圣帕特里克节活动做好准备，这将使所有酒类物品的效果翻倍。",
    "rise in value up to": "价值上升到",
    "You do not have enough energy left": "你没有足够的能量了",
    "You managed to complete 1 minute in a beginners boxing session throwing 1 punch": "您成功完成了 1 分钟的初学者拳击训练，打出了 1 拳",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "#3 Inexperienced Nudist": "#3 经验不足的裸体主义者",

    //原样
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",
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
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "\n": "\n",
    "You have logged on ": "你当前登录的用户名是 ",
    "Personal Perks ": "个人特权 ",
    "Someone mugged you and stole $": "有人抢劫了你并偷走了 $",
    "Outstanding loan of $": "未偿还的贷款 $",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^\[([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^Wed ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+) \- ([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^(.+) ([\d\.]+):([\d\.]+):([\d\.]+) \- ([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
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
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数���的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Patch list \#(.+)$/, '补丁列表 #$1'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Welcome back! You've received (.+) special refills for your (.+) days of inactivity!$/, '欢迎回来！ 由于 $2 天不事件，您已收到 $1 次特别补充！'],
    [/^Your loan fees have increased by (.+) to a total of (.+). You can pay them by visiting the$/, '您的贷款费用增加了 $1，总计 $2。 您可以通过访问'],
    [/^You managed to complete (.+) minute in a beginners boxing session throwing (.+) punches$/, '您成功完成了 $1 分钟的初学者拳击训练，打出了 $2 拳'],
    [/^You managed to complete (.+) minute in a spinning class at resistance level: (.+)$/, '您成功完成了 $1 分钟的的动感单车课程，阻力级别是: $2'],
    [/^You managed to complete (.+) move in a yoga class at level (.+) difficulty$/, '您在 $2 级难度的瑜伽课程中成功完成了 $1 个动作'],
    [/^You managed to complete (.+) bicep curls using the (.+) dumbbells$/, '您成功地使用 $1 的哑铃完成了 $2 个二头肌弯举'],
    [/^You gained (.+) strength$/, '你获得了 $1 力量'],
    [/^You gained (.+) speed$/, '你获得了 $1 速度'],
    [/^You gained (.+) dexterity$/, '你获得了 $1 敏捷'],
    [/^You gained (.+) defense$/, '你获得了 $1 防御'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\+ ([\d\.]+)\% damage$/, '+$1% 伤害'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) days$/, '$1 天'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

var CNITEM_DEBUG = 0;
function cnItemByTag(text, itemgroup, node, textori){
	for (let i in itemgroup){
		if (i[0] == '.') { //匹配节点及其父节点的class
			let current_node = node;
			while (current_node){
				if ( current_node.classList && current_node.classList.contains(i.substr(1)) ){
					return itemgroup[i];
				}
				else if( current_node.parentElement && current_node.parentElement != document.documentElement ) {
					current_node = current_node.parentElement;
				}
				else {
					break;
				}
			}
		}
		else if (i[0] == '#'){ //匹配节点及其父节点的id
			let current_node = node;
			while (current_node){
				if ( current_node.id == i.substr(1) ){
					return itemgroup[i];
				}
				else if( current_node.parentElement && current_node.parentElement != document.documentElement ) {
					current_node = current_node.parentElement;
				}
				else {
					break;
				}
			}
		}
		else if (i[0] == '$'){	//执行document.querySelector
			if (document.querySelector(i.substr(1)) != null){
				return itemgroup[i];
			}
		}
		else if (i[0] == '*'){	//搜索原始文本
			if ( textori.includes(i.substr(1)) ){
				return itemgroup[i];
			}
		}
		// and more ...
		else{
			CNITEM_DEBUG && console.log({text, itemgroup, dsc:"不识别的标签" + i})
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
        if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])){
			return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
		} else if ( typeof(cnItems[i]) == "object" && text == i ){
			let result = cnItemByTag(i, cnItems[i], node, textori);
			if (result != null){
				return text_prefix + result + text_reg_exclude_postfix + text_postfix;
			} else {
				CNITEM_DEBUG && console.log({text:i, cnitem:cnItems[i], node});
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
            if (mutation.target.nodeName === "SCRIPT"|| mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
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
    window.cnItems=cnItems
}();
