// ==UserScript==
// @name         torn-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.29
// @description  Torn（https://www.torn.com/）游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
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
    "Casino": "堵场",
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
    "Casino points": "堵场积分",
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
    "Happy": "幸福度",
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
    "Money": "现金",
    "Marital status": "婚姻状况",
    "Manual labor": "体力劳动",
    "Murder": "谋杀",
    "Name": "名称",
    "Name:": "姓名:",
    "Networth": "净资产",
    "Other": "其它",
    "News Ticker": "新闻行情",
    "None": "无",
    "Properties": "房产",
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
    "Property": "房产",
    "Refills": "重填",
    "Property Information": "房产信息",
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
    "Here you can self-exclude yourself from the Casino. This will prevent you from being able to\naccess any casino games, or use any Lottery Voucher items. Longer self-exclusion durations\nwill become available to you after the completion of previous sessions. This should still\nonly be used as a last resort, and will not affect the missions you receive, which can still\nbe related to the Casino.": "在这里，您可以自行将自己排除在堵场之外。 这将阻止您\n访问任何堵场游戏，或使用任何彩票代金券物品。 在完成之前的会话后，\n您将可以使用更长的自我排除期限。 这仍应\n用作最后的手段，并且不会影响您收到的任务，这些任务仍\n可能与堵场有关。",
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
    "Casino self-exclusion": "堵场自我排除",
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
    "Dealer at the Casino": "堵场的经销商",
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
    "Back": "返回",
    "Biology": "生物学",
    "Here you can take courses in the local college to increase your working stats. Some courses even allow you to do new crimes, unlock new areas, provide unique skills, and make special abilities available. Courses will often take several weeks to complete and cost money.": "在这里，您可以参加当地大学的课程，以提高您的工作统计数据。 有些课程甚至允许您进行新的犯罪活动、解锁新的区域、提供独特的技能并提供特殊能力。 课程通常需要数周才能完成并且需要花钱。",
    "Business": "商业",
    "Combat Training": "战斗训练",
    "Computer Science": "计算机科学",
    "Education Tutorial": "教育教程",
    "General Studies": "通识教育",
    "Health & Fitness": "健康与健身",
    "History": "历史",
    "just defeated": "刚刚被击败",
    "Law": "法律",
    "Mathematics": "数学",
    "NNGO Blood Money": "非政府组织血钱",
    "Pod1": "Pod1",
    "Points see a": "分看一个",
    "Psychology": "心理学",
    "Self Defense": "自卫",
    "Sports Science": "运动学",
    "The Red Knights": "红色骑士团",
    "to secure the Gold I rank in a gruelling 3 day war involving 5,700 attacks": "在一场涉及 5,700 次攻击的艰苦 3 天战争中获得金牌 I 排名",
    "This area is unavailable while you're in hospital.": "当您在医院时，该区域不可用。",
    "Here you can view all of the items you own. You can look up information about the items, use them or send them to people. If one of your items is a weapon or armor, you can equip it by clicking the relevant icon next to it. You can use up to four different types of weapons when attacking, Primary (A rifle or big gun), Secondary (A pistol, smaller gun or specialist launcher), Melee (A hand-to-hand weapon) and Temporary (Throwable or Utility item).": "在这里您可以查看您拥有的所有物品。 您可以查找有关这些物品的信息、使用它们或将它们发送给其他人。 如果你的其中一件物品是武器或盔甲，你可以通过点击它旁边的相关图标来装备它。 攻击时最多可以使用四种不同类型的武器，主要武器（步枪或大枪）、次要武器（手枪、小型枪支或专用发射器）、近战武器（徒手武器）和临时武器（可投掷或实用） 物品）。",
    "                                              Equip": "装备",
    "                                              Unequip": "脱下",
    "                                            Equip": "装备",
    "                                            this\n                                        Item": "这个\n物品",
    "                                            Unequip": "脱下",
    "            Open": "打开",
    "            Sell": "出售",
    "            Send": "发送",
    "            Take": "拿走",
    "            Trash": "丢垃圾",
    "            Use": "使用",
    "All tab is full": "所有选项卡已满",
    "Ammo": "弹药",
    "Bag of Bon Bons": "一袋糖果",
    "Bag of Chocolate Kisses": "一袋巧克力之吻",
    "Baseball Bat": "棒球棒",
    "Bolt Cutters": "断线钳",
    "Box of Sweet Hearts": "一盒甜心",
    "Dagger": "匕首",
    "Ecstasy": "迷魂药",
    "First Aid Kit": "急救箱",
    "Gold Watch": "金表",
    "Item іMarket": "物品市场",
    "Items Tutorial": "物品教程",
    "Jewelry": "珠宝",
    "Leather Pants": "皮裤",
    "Load more All items": "加载更多 全部物品",
    "Loadout #1": "装载 #1",
    "Lollipop": "棒棒糖",
    "Lottery Voucher": "彩票代金券",
    "Pack of Cuban Cigars": "一包古巴雪茄",
    "Primary": "初级",
    "Ruger 57": "Ruger 57",
    "Small First Aid Kit": "小型急救箱",
    "this Item": "这个物品",
    "Trades": "交易",
    "Trainers": "运动鞋",
    "Xanax": "Xanax",
    "Your items -": "您的物品 -",
    "Equip this Item": "装备此物品",
    "Send this Item": "送出此物品",
    "Supply Packs": "补给包",
    "Take": "拿走",
    "Trash this Item": "丢弃此物品",
    "Use": "使用",
    "All Properties": "所有房产",
    "Happiness": "幸福度",
    "Here you are able to control what happens to your houses. You may wish to sell them to someone else by putting them on the real estate market, or rent them out to someone for a set price and length by clicking 'Lease'. You can also upgrade and furnish your houses by buying a swimming pool, or filling it with plasma screen TVs by upgrading the interior. You can only customize your house if you are the owner and living in it. You can not upgrade or share shacks. If you rent a property or your spouse owns properties, they will appear on the list below, you will have to move in to them to actually live in them.": "在这里，您可以控制房屋发生的事情。 您可能希望通过将它们投放到房地产市场来将它们出售给其他人，或者通过单击“租赁”以固定价格和期限将它们出租给某人。 您还可以通过购买游泳池来升级和装修您的房屋，或者通过升级内部装饰来装满等离子电视。 只有当您是业主并居住在其中时，您才能定制您的房子。 您不能升级或共享棚屋。 如果您租用房产或您的配偶拥有房产，它们将出现在下面的列表中，您必须搬进去才能真正居住。",
    "Market price": "市场价",
    "Property Tutorial": "房产教程",
    "Owner": "拥有者",
    "You are living here": "你住在这里",
    "Upkeep": "保养",
    "Staff cost": "员工成本",
    "Upkeep is charged daily and can be paid via the upkeep panel on each property. You will only be charged upkeep if the property is in use. For example, if you are living in it, or your spouse is living in a property you own; you will be charged the upkeep.": "维护费用每天收取，可通过每处房产的维护面板支付。 只有在使用中，您才需要支付维护费用。 例如，如果您住在其中，或者您的配偶住在您拥有的房产中； 您将被收取维修费用。",
    "Hospitalized by": "把你打进医院的人是 ",
    "Hospital Tutorial": "医院教程",
    "This is the hospital. People who get attacked or fail a crime may be sent here to recover. If you train hard in the medical profession and reach the top job rank, you earn the ability to revive people from hospital.": "这是医院。 被袭击或犯罪失败的人可能会被送到这里康复。 如果你在医疗行业刻苦训练并达到最高职位，你将获得从医院救人的能力。",
    "You are in hospital for another": "你还需要在医院待 ",
    "You better stay and rest.": "你最好留下来休息。",
    "People are": "人在",
    "Time": "时间",
    "Reason": "原因",
    "Overdosed on Xanax": "过量服用 Xanax",
    "Everyone": "所有人",
    "Members": "成员",
    "Full": "满",
    "Create": "创建",
    "Create a Faction": "创建一个帮派",
    "Faction Name": "帮派名称",
    "Factions": "帮派",
    "You will meet the criteria for more factions as you increase your battle stats": "随着战斗属性的增加，您将满足更多帮派的标准",
    "": "",
    "It will cost": "花费",
    "Please enter faction name below:": "请在下方输入帮派名称：",
    "to": "去",
    "to make a Faction.": "去创建一个帮派。",
    "Factions looking for members": "正在招人的帮派",
    "You've not applied to this faction yet": "你还没有申请加入这个帮派",
    "View": "查看",
    "Applied": "状态",
    "10% bonus to museum point rewards": "10% 的博物馆积分奖励",
    "A variety of different Easter eggs will appear at random throughout Torn. Pick them up to add them into your inventory, then consume them at your leisure to receive their powerful effects.": "各种不同的复活节彩蛋将在整个 Torn 中随机出现。 捡起它们将它们添加到您的库存中，然后在闲暇时食用它们以获得它们的强大效果。",
    "Alcohol effects are doubled & Green Stout appears in city": "酒精效果加倍，绿色黑啤酒出现在城市",
    "Black Friday": "黑色星期五",
    "Awareness Awareness Week": "提高认识周",
    "Citizens compete in our annual popularity contest to see who can gain the most votes and be crowned Mr and Ms Torn.  Upvote your favourites or enter your own image and cripple your self-confidence using the judgement of strangers": "公民们参加我们一年一度的人气竞赛，看谁能获得最多的选票并加冕为 Torn 先生和 Torn 女士。 给你最喜欢的人投票或输入你自己的形象，用陌生人的判断削弱你的自信",
    "Dress up and attack others to fill your basket with treats": "装扮并攻击他人，用零食装满你的篮子",
    "Double racing points & racing skill": "双倍赛车积分和赛车技巧",
    "Dog Tags": "狗牌",
    "Beer items are five times more effective": "啤酒产品的功效高出五倍",
    "Valentine's Day": "情人节",
    "Tourism Day": "旅游日",
    "International Beer Day": "国际啤酒日",
    "Job points received tripled & training effects tripled": "工作积分获得三倍 & 培训效果三倍",
    "EXP gained while attacking is doubled": "攻击时获得的经验值翻倍",
    "Energy drink effects are doubled": "能量饮料效果加倍",
    "Counterfeiting": "伪造",
    "Crimes Tutorial": "犯罪教程",
    "Crime": "犯罪",
    "Doing crimes can earn you money and items. The more crimes you do, the more experience you will gain, making it easier for you to do harder crimes. Make sure you understand that being caught for your crimes could greatly reduce your crime experience, making it even harder to do crimes. As you advance, you will be able to do even more crimes, earning you big money.": "犯罪可以为您赚取金钱和物品。 你犯的罪越多，你获得的经验就越多，让你更容易犯下更严重的罪行。 确保您了解因犯罪被捕会大大减少您的犯罪经历，使犯罪更加困难。 随着您的进步，您将能够犯下更多罪行，从而赚取大笔金钱。",
    "So, you're in need of some quick cash? You sit down and begin thinking of ways you could get a little richer.\nThe more crimes you do, the easier you will be able to do them. The crimes are listed in order from easy to hard.\nDon't try the hard ones too quickly or you could find yourself in jail!": "所以，你需要一些快速的现金？ 您坐下来开始思考可以变得更富有的方法。\n您犯罪的次数越多，您就越容易犯下这些罪行。 罪行按从易到难的顺序列出。\n不要太快尝试困难的罪行，否则你可能会进监狱！",
    "NEXT STEP": "下一步",
    "Grand Theft Auto": "侠盗猎车手",
    "Hacking": "黑客攻击",
    "Kidnapping": "绑架",
    "Larceny": "偷窃",
    "Pickpocket Someone": "扒手",
    "Search for Cash": "搜索现金",
    "Plant a Computer Virus": "植入计算机病毒",
    "Shoplift": "商店0元购",
    "Sell Copied Media": "出售复制媒体",
    "Transport Drugs": "运输药品",
    "Bombings": "爆炸",
    "Assassination": "暗杀",
    "Arson": "纵火",
    "Arms Trafficking": "武器贩运",
    "Armed Robberies": "武装抢劫",
    "Faction Description": "帮派介绍",
    "You successfully initiated a raid against": "您成功发起了针对",
    "Type in your application below to send a request to the leadership of SMTH - Trisolary.": "在下方输入您的申请，向 SMTH - Trisolary 的领导层发送请求。",
    "Version changes can only enjoy bonuses and use items 72 hours after joining factions.": "改版只能在加入帮派72小时后才能享受加成和使用道具。",
    "VIEW APPLICATION": "查看申请",
    "Travel capacity - max number of items you can bring back increased by 9": "旅行容量 - 您可以带回的最大物品数量增加 9",
    "Toleration": "容忍度",
    "We do not accept applications!": "我们不接受申请！",
    "No active chain": "无活动链",
    "New rule: after 3 days of inactivity, we will kick you. Exceptions are made, case by case.": "新规则：3 天不活动后，我们将踢你。 有例外，视情况而定。",
    "Our little faction try to treat everyone equally. We don't care if you have your own Private Island with maxed out banking with spare cash in vaults and offshore accounts... or if you just starting playing a few months ago and are still learning the ropes. You will be a welcomed members, we can learn from each other. When it is time to upgrade, we always ask our group what direction they want to take and pursue a common course.": "我们的小帮派试图平等对待每个人。 我们不在乎您是否拥有自己的私人岛屿，银行业务和离岸账户中的备用现金已用完……或者您是否几个月前才开始玩游戏并且仍在学习技巧。 你将是一个受欢迎的成员，我们可以互相学习。 当需要升级时，我们总是询问我们的团队他们想要采取什么方向并追求共同的路线。",
    "Reduces drug addiction gain by 50%": "减少 50% 的吸毒成瘾",
    "Reduces the side effects of drugs and increases addiction mitigation by 30%": "减少药物的副作用并增加 30% 的成瘾缓解",
    "RESPECT:": "",
    "SUBMIT FACTION APPLICATION": "提交帮派申请",
    "THIS FACTION IS NOT IN A WAR": "这个帮派不在战争中",
    "[upgrade]": "[升级]",
    "Advertise here": "在此处投放广告",
    "Daily Dime": "每日硬币",
    "There are no bounties up at this time": "目前没有悬赏",
    "Unicorn": "独角兽",
    "Tell your story": "讲述你的故事",
    "Newspaper Tutorial": "报纸教程",
    "The newspaper offers access to a wide range of useful areas and is also the hub for news delivered by Torn's community reporters.": "该报纸提供了对广泛有用领域的访问，也是 Torn 社区记者发布新闻的中心。",
    "An Illustrated Weekly Newspaper": "插图周报",
    "Casino Tutorial": "堵场教程",
    "Holy Grail": "圣杯",
    "This is the Torn City Casino, where you can gamble your money and hope to win big! As you level higher, even more casino games become available to you. Have a play around with a few of the games and see which ones you get lucky on! You are given 75 casino tokens every day to use here. A token will be used every time you play against a casino dealer, however Poker, Russian Roulette and the Bookie will not use tokens.": "这是 Torn City 堵场，您可以在这里赌博并希望赢得大奖！ 随着您级别的提高，您可以玩更多的堵场游戏。 试玩几款游戏，看看您在哪些游戏中走运！ 您每天会获得 75 个堵场代币，可以在这里使用。 每次与堵场荷官对战时都会使用代币，但扑克、俄罗斯轮盘和庄家不会使用代币。",
    "LOCKED": "未解锁",
    "HIGH-LOW": "高 - 低",
    "CRAPS": "掷骰子",
    "LOTTERY": "彩票",
    "RUSSIAN ROULETTE": "俄罗斯轮盘赌",
    "POKER": "扑克",
    "SLOTS": "老虎机",
    "SPIN THE WHEEL": "旋转轮盘",
    "BLACKJACK": "二十一点",
    "football match": "足球比赛",
    "at the bookie today after SSC Napoli won in the": "在 SSC Napoli 赢得比赛后，今天在菠菜公司",
    "has won": "赢了",
    "Level Up": "升级",
    "Increase life to": "增加生命值到",
    "Article": "文章",
    "Double Crime, Paddy's Time!": "双倍犯罪，帕迪的时间！",
    "SILVER HAND REACHES DIAMOND RANK!": "白银之手达到钻石等级！",
    "Tear Gas": "催泪弹",
    "The forum thread": "论坛主题",
    "The market value of": "市值",
    "was published": "发表了",
    "Basic Information": "基础信息",
    "Civilian": "平民",
    "Country": "国家",
    "Awards": "奖励",
    "A combined": "一个组合",
    "Actions": "动作",
    "Competition Status": "比赛状态",
    "Last action": "最后动作",
    "Okay": "好的",
    "Medals": "奖牌",
    "Personal Information": "个人信息",
    "Nudist": "裸体主义者",
    "Now": "现在",
    "Status": "状态",
    "Real name": "真实姓名",
    "Profile pages show everything about a player including name, player ID, level, rank, age, gender and current status. From this page you can choose to attack, message, chat with, send money to, and trade with them.": "个人资料页面显示有关玩家的所有信息，包括姓名、玩家 ID、级别、排名、年龄、性别和当前状态。 在此页面上，您可以选择攻击、消息、聊天、汇款和交易。",
    "Role": "角色",
    "There is no active competition": "没有活跃的竞争",
    "uploaded images": "上传的图片",
    "User Information": "用户信息",
    "What would you like to do?": "你想做什么？",
    "Faction Warfare": "帮战",
    "successfully revived you.": "成功将你复活。",
    "There are no events on this page": "此页面上没有事件",
    "Are you sure you want to quit your job?": "你确定要辞掉你的工作吗？",
    "Casino Points:": "堵场积分:",
    "Casino President": "堵场总裁",
    "Casino Manager": "堵场经理",
    "Casino Points to upgrade.": "堵场积分去升级。",
    "Choose Collect tips": "选择收集提示",
    "Collect tips": "收集提示",
    "Count cards": "算牌",
    "daily.": "每天。",
    "DO SPECIAL": "做特别的",
    "endurance and": "耐力和",
    "Endurance:": "耐力:",
    "Gaming Consultant": "菠菜顾问",
    "Get Promoted": "获得晋升",
    "Having a job in Torn City is one of the easiest ways to make money. Jobs use your working stats (Manual labor, intelligence and endurance), increasing them will allow you to progress through the job ranks to earn more money and get extra bonuses. Sometime later in life, you may wish to join a person's company or even create your own. Working stats will make you work better in companies, pleasing your employer.": "在 Torn City 找到一份工作是最简单的赚钱方式之一。 工作使用您的工作统计数据（体力劳动、智力和耐力），增加这些数据将使您在工作等级中取得进步，从而赚取更多的钱并获得额外的奖金。 在以后的生活中，您可能希望加入某人的公司，甚至创建自己的公司。 工作统计数据将使您在公司中工作得更好，取悦您的雇主。",
    "Income:": "收入:",
    "intelligence,": "智力，",
    "Intelligence:": "智力:",
    "Job Tutorial": "工作教程",
    "Jobs": "工作",
    "Manual Labor:": "体力劳动：",
    "manual labor,": "体力劳动",
    "Manual:": "手动:",
    "No, go back.": "不，回去。",
    "Marketing Manager": "市场经理",
    "Pocket tokens": "袖珍代币",
    "per day": "每天",
    "point": "积分",
    "Quit Job": "退出工作",
    "Rank & Benefits": "职级与福利",
    "Rank:": "职级:",
    "Revenue Manager": "营收经理",
    "Specials": "特殊",
    "Stats Needed": "属性要求",
    "Stats Needed:": "属性要求:",
    "Steal cash": "偷现金",
    "Yes, quit!": "是的，退出！",
    "You also get": "你也得到了",
    "You currently work at the Casino. You receive": "您目前在堵场工作。 你收到",
    "You have enough working stats to be promoted to Gaming Consultant! It will cost": "您有足够的工作属性可以晋升为菠菜顾问！ 这将花费",
    "casino": "堵场",
    "casino points.": "堵场积分。",
    "MAN:": "人:",
    "Real Madrid v Liverpool": "皇家马德里 v 利物浦",
    "Type in the amount of casino points you would like to use on collecting tips.": "输入您想用于收集小费的堵场积分数。",
    "You currently have": "你当前有",
    "points": "积分",
    "has decreased by": "减少了",
    "Choose Pocket tokens": "选择口袋代币",
    "/ INT:": "/ 智力:",
    "/ END:": "/ END:",
    "Speed up recovery times and boost your maximum energy bar to 150. Buy a donator pack here!": "加快恢复时间并将您的最大能量条提高到 150。在这里购买捐赠包！",
    "You have enough working stats to be promoted to Marketing Manager! It will cost": "您有足够的工作属性可以晋升为营销经理！ 这将花费",
    "Low Energy?": "低能量？",
    "You have enough working stats to be promoted to Revenue Manager! It will cost": "您有足够的工作属性可以晋升为收益经理！ 这将花费",
    "Continue": "继续",
    "casino points!": "堵场积分！",
    "Choose Steal cash": "选择窃取现金",
    "in high stakes craps using": "在高额堵注中使用",
    "You managed to convince several players to tip you": "你设法说服了几个玩家给你小费",
    "in": "在",
    "Average Joes": "匀速慢跑",
    "Beach Bods": "沙滩有氧",
    "Description:": "描述：",
    "Biology Modules": "生物学模块",
    "It will cost you": "这将花费你",
    "It's time to start learning about the world of medicine, when to use it, how to administer it, and finally its synthesis.": "是时候开始了解医学世界了，什么时候使用它，如何管理它，最后是它的合成。",
    "JOIN COURSE": "加入课程",
    "Parameters:": "参数：",
    "Prerequisites:": "先决条件：",
    "Are you sure you want to join the": "您确定要加入",
    "Are you the missing link? At the end of this course you'll know more about Neanderthal man than the Discovery Channel.": "你是缺失的一环吗？ 在本课程结束时，您将比探索频道更了解尼安德特人。",
    "Back to Education": "返回教育",
    "You are ready to take this course.": "您已准备好学习本课程。",
    "You have completed this course!": "您已完成本课程！",
    "You do not meet the requirements for this course. Please complete the prerequisites first.": "您不符合本课程的要求。 请先完成先决条件。",
    "You've seen it on TV. Now find out how to do it in real life.": "你在电视上看到过。 现在找出如何在现实生活中做到这一点。",
    "We don't just wear them. Learn about their chemical structure and composition here.": "我们不只是穿它们。 在这里了解它们的化学结构和成分。",
    "We all know how to strike a nerve with someone. Here you'll learn which nerve will have your opponent on the floor crying like a 5 year old girl.": "我们都知道如何激怒某人。 在这里，您将了解哪条神经会让您的对手在地板上哭得像一个 5 岁的女孩。",
    "Vaginal Didelphys to start, followed by a course of DNA synthesis, finished off with a crash course in mitosis. The most exciting introduction in science.": "Vaginal Didelphys 开始，接着是 DNA 合成课程，最后是有丝分裂速成课程。 科学界最激动人心的介绍。",
    "to join and will take": "加入并接受",
    "to complete.": "以完成。",
    "The foot bone is connected to the ankle bone, The ankle bone is connected to the leg bone, The leg bone is connected to the hip bone, and so on...": "脚骨与踝骨相连，踝骨与腿骨相连，腿骨与髋骨相连，等等……",
    "Starting with the dark world of narcotics and the recreational use of drugs, and finishing with making your own pain killers, you'll learn all there is to know about medicine.": "从毒品的黑暗世界和毒品的消遣性使用开始，到自制止痛药结束，您将学到有关医学的所有知识。",
    "Put that fear of needles behind you by learning how to successfully administer a blood transfusion.": "通过学习如何成功地进行输血，消除对针头的恐惧。",
    "Gain a 1% damage bonus to all weapons": "所有武器获得 1% 的伤害加成",
    "Gain a 10% damage increase when hitting an opponent's throat": "击中对手喉咙时伤害增加 10%",
    "Gain a 3% chance increase of achieving a critical hit": "获得暴击的几率增加 3%",
    "Gain a bonus of 10% to medical item effectiveness": "获得 10% 的医疗物品效果加成",
    "Gain a further 10% bonus to medical item effectiveness": "获得额外 10% 的医疗物品效果加成",
    "Gain the ability to equip steroids in your temporary slot and unlock the pharmacy": "获得在临时插槽中装备类固醇并解锁药房的能力",
    "in Achievements has received": "在成就中获得",
    "Learning outcomes:": "学习成果：",
    "SIGN ME UP!": "我要报名！",
    "To end your degree in biology you will learn about hormones and neurotransmitters.": "为了结束您的生物学学位，您将了解激素和神经递质。",
    "course?": "课程？",
    "Increase of working stats": "提高工作属性",
    "Back to Crimes": "回到犯罪",
    "Criminal record": "犯罪记录",
    "DO CRIME": "犯罪",
    "Search the Bins": "搜索垃圾筒",
    "Search the Dumpsters": "搜索垃圾箱",
    "Search the Movie Theater": "搜索电影院",
    "Search the Train Station": "搜索火车站",
    "Search the Water Fountain": "搜索喷泉",
    "Search Under the Old Bridge": "搜索旧桥下",
    "Searching the streets for cash? Not the quickest way of making money, but that depends on the place you search!": "满大街找钱？ 不是最快的赚钱方式，但这取决于您搜索的地方！",
    "Result": "结果",
    "The share price of": "股价",
    "Torn & Shanghai Banking": "Torn & 上海银行",
    "TRY AGAIN": "再试一次",
    "CHANGE CRIME": "改变罪行",
    "Selling copied media may be easy, but making a large profit all depends on what the people like. If you copy a good type of media on to a CD or DVD, more people are going to buy it!": "出售复制媒体可能很容易，但要赚大钱全看人们喜欢什么。 如果您将一种好的媒体复制到 CD 或 DVD 上，就会有更多人购买！",
    "Genres": "类型",
    "You begin recording copies of the movie you are going to sell at the local market.": "您开始录制要在当地市场上出售的电影的副本。",
    "You buy a pack of recordable DVDs to rip the latest action movie on to and hop on your PC.": "您购买一包可刻录的 DVD，将最新的动作片翻录到您的 PC 上。",
    "You set up the stall and wait for customers.": "您设置摊位并等待顾客。",
    "Which shop would you like to shoplift at? Make your choice wisely as different shops are harder than others!": "你想在哪家商店行窃？ 明智地做出选择，因为不同的商店比其他商店更难！",
    "Clothes Shop": "服装店",
    "Sweet Shop": "糖果店",
    "has increased by": "增加了",
    "Jewelry Shop": "珠宝店",
    "Market Stall": "市场摊位",
    "Shops": "商店",
    "Which item would you like to steal from the clothes shop?": "你想从服装店偷什么东西？",
    "Tank Top": "背心",
    "Jacket": "夹克",
    "Item": "物品",
    "You see police enter the main door, you drop the clothing and run for the back door. Luckily you get out and escape the police.": "你看到警察进入正门，你脱下衣服跑向后门。 幸运的是你逃脱了警察的追捕。",
    "You head down to the TC clothes shop and walk through the door.": "您前往 TC 服装店，然后走进门。",
    "You grab a jacket from the shelf and begin taking off the tag.": "从架子上拿了一件夹克，开始取下标签。",
    "A guard spots you on the cameras and alerts the police.": "名警卫在摄像机上发现了您并通知了警察。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "January": "1月",
    "February": "2月",
    "March": "3月",
    "April": "4月",
    "May": "5月",
    "June": "6月",
    "July": "7月",
    "August": "8月",
    "September": "9月",
    "October": "10月",
    "November": "11月",
    "December": "12月",
    "Wed": "三",
    "Mon": "一",
    "Tue": "二",
    "Thu": "四",
    "Sun": "日",
    "Sat": "六",
    "Fri": "五",
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
    "Congratulations! You upgraded your level to ": "恭喜！ 你升级了你的等级到 ",
    "mugged you and stole $": "抢劫了你并偷走了 $",
    "with the message: ": "带有消息：",
    "Length: ": "时长: ",
    "Cost: $": "成本: $",
    "Tier: ": "阶段: ",
    "You search the train station from top to bottom and find $": "您从上到下搜索火车站并找到 $",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "Congratulations! You have been promoted to Gaming Consultant!": "恭喜！ 您已晋升为菠菜顾问！",
    "You have enough working stats to be promoted to Marketing Manager!  It will cost": "您有足够的工作属性可以晋升为营销经理！ 这将花费",
    "Congratulations! You have been promoted to Marketing Manager!": "恭喜！ 您已晋升为营销经理！",
    "You have enough working stats to be promoted to Revenue Manager!  It will cost": "您有足够的工作属性可以晋升为收益经理！ 这将花费",
    "Congratulations! You have been promoted to Revenue Manager!": "恭喜！ 您已晋升为收益经理！",
    "Oh, Sorry. You are unable to be promoted at this time as you do not have the correct stats.": "噢，抱歉。 您目前无法晋升，因为您没有正确的属性。",
    "Ability to withdraw and deliver blood": "抽取和输送血液的能力",
    "Advanced Biochemistry": "高级生物化学",
    "Evolution": "进化",
    "Bachelor of Biology": "生物学学士",
    "Chromosomes and Gene Functions": "染色体和基因功能",
    "Forensic Science": "法医学",
    "Fundamentals of Neurobiology": "神经生物学基本原理",
    "Intermediate Biochemistry": "中级生物化学",
    "Intravenous Therapy": "静脉注射疗法",
    "Introduction to Biochemistry": "生物化学概论",
    "Anatomy": "解剖学",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    [/^You have (.+) casino tokens and a current streak of$/, '您有 $1 堵场代币并且当前连续赢了'],
    [/^Welcome back! You've received (.+) special refills for your (.+) days of inactivity!$/, '欢迎回来！ 由于 $2 天不事件，您已收到 $1 次特别补充！'],
    [/^Your loan fees have increased by (.+) to a total of (.+). You can pay them by visiting the$/, '您的贷款费用增加了 $1，总计 $2。 您可以通过访问'],
    [/^You managed to complete (.+) minute in a beginners boxing session throwing (.+) punches$/, '您成功完成了 $1 分钟的初学者拳击训练，打出了 $2 拳'],
    [/^You managed to complete (.+) minutes in a beginners boxing session throwing (.+) punches$/, '您成功完成了 $1 分钟的初学者拳击训练，打出了 $2 拳'],
    [/^You managed to complete (.+) minute in a spinning class at resistance level: (.+)$/, '您成功完成了 $1 分钟的的动感单车课程，阻力级别是: $2'],
    [/^You managed to complete (.+) minutes in a spinning class at resistance level: (.+)$/, '您成功完成了 $1 分钟的的动感单车课程，阻力级别是: $2'],
    [/^You managed to complete (.+) move in a yoga class at level (.+) difficulty$/, '您在 $2 级难度的瑜伽课程中成功完成了 $1 个动作'],
    [/^You managed to complete (.+) bicep curls using the (.+) dumbbells$/, '您成功地使用 $1 的哑铃完成了 $2 个二头肌弯举'],
    [/^You were sent (.+)x Small First Aid Kit from$/, '您收到了 $1x 小型急救箱 来自'],
    [/^has been rewarded to (.+) lucky citizens when Real Madrid won in the$/, '皇马夺冠已奖励 $1 位幸运市民'],
    [/^You need (.+) to start this course. You only have (.+).$/, '您需要 $1 才能开始这门课程。 你当前只有 $2。'],
    [/^You were sent (.+) from$/, '你获得了 $1 来自'],
    [/^You gained (.+) strength$/, '你获得了 $1 力量'],
    [/^You gained (.+) speed$/, '你获得了 $1 速度'],
    [/^You gained (.+) dexterity$/, '你获得了 $1 敏捷'],
    [/^You gained (.+) defense$/, '你获得了 $1 防御'],
    [/^has put a bounty on you with a (.+) reward. This cost has been added to your fees.$/, '已悬赏 $1 给您。 此费用已添加到您的费用中。'],
    [/^\$(.+) per day$/, '\$ $1 每天'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You manage to sell (.+) earning you (.+)!$/, '您成功卖出了 $1，赚取 $2！'],
    [/^Gain ([\d\.,]+) endurance upon completion$/, '完成时获得 $1 耐力'],
    [/^Gain ([\d\.,]+) intelligence upon completion$/, '完成时获得 $1 智力'],
    [/^Gain ([\d\.,]+) manual labor upon completion$/, '完成时获得 $1 体力劳动'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) days, ([\d\.]+) hours and ([\d\.]+) minutes$/, '$1 天 $2 小时 $2 分钟'],
    [/^([\d\.]+) minutes and ([\d\.]+) seconds$/, '$1 分钟 $2 秒'],
    [/^Decrease an opponent's stealthiness by ([\d\.]+)$/, '降低对手的隐蔽性 $1'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\+ ([\d\.]+)\% damage$/, '+$1% 伤害'],
    [/^\-([\d\.]+) Nerve$/, '-$1 勇气'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) casino points \& (.+)$/, '$1 堵场积分 和 $2'],
    [/^([\d\.,]+) casino point$/, '$1 堵场积分'],
    [/^([\d\.,]+) casino tokens$/, '$1 堵场代币'],
    [/^([\d\.,]+) likes$/, '$1 赞'],
    [/^([\d\.,]+) hours$/, '$1 小时'],
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
