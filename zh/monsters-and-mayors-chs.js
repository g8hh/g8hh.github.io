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
    "Be Asshole": "做个混蛋",
    "Export": "导出",
    "Discord": "Discord",
    "Changelog": "更新日志",
    "Change Name": "修改名称",
    "Game": "游戏",
    "Grapes": "葡萄",
    "Help": "帮助",
    "Import": "导入",
    "Infinity": "无限",
    "[DEFAULT]": "[默认]",
    "More Fair Game": "更公平的游戏",
    "Options": "选项",
    "Points": "点数",
    "Power": "力量",
    "Send": "发送",
    ", Ranged": ", 远程",
    ". Each one is strong or weak against another.": ".每个人都对另一个人强或弱。",
    "A game by": "一场比赛",
    "A list of towns ordered by rank.": "按等级排序的城镇列表。",
    "Adventurers are gathering...": "冒险者们聚集...",
    "Adventurers have different rarity levels represented by the color of their card. Keep an eye out for unusual looking cards, they'll be more powerful.": "冒险家有不同的稀有度等级，由他们的卡牌颜色代表。留意不寻常的卡牌，它们会更强大。",
    "Adventurers possess one of three types, Melee": "冒险者拥有三种类型之一，近战",
    "Adventurers you recruit have their apartments here. This is where they rest, eat and spend their time when they're not down at the tavern.": "你招募的冒险者在这里有他们的公寓。当他们不在小酒馆时，这是他们休息、吃饭和消磨时间的地方。",
    "Ækashics": "埃卡西克斯",
    "Alexanden, fumbling Bard": "亚历山大，笨手笨脚的巴德",
    "All adventurers are busy.": "所有冒险者都很忙。",
    "Allows for more adventurers to gather in the tavern at the same time.": "允许更多冒险者同时聚集在酒馆。",
    "An adventurer has gathered in your Tavern !": "冒险者聚集在您的酒馆！",
    "and build a": "并建立一个",
    "and Melee": "和近战",
    "are available next to each screens title banner.": "每个屏幕标题横幅旁边都有。",
    "Are you sure you wish to dismiss": "您确定要解雇吗",
    "Arena": "竞技场",
    "As mayor it is up to you to make this town prosper by attracting new citizens and building new amenities. Gather adventurers to battle the dangers roaming outside these walls and expand your city's influence and prestige.": "作为市长，您有责任通过吸引新市民和建设新设施来让这个小镇繁荣起来。召集冒险家与在这些城墙外漫游的危险作斗争，并扩大您城市的影响力和声望。",
    "Assign quest": "分配任务",
    "Barracks": "兵营",
    "Battle other towns": "与其他城镇作战",
    "Bigger barracks allows the town to host more adventurers.": "更大的军营可以让小镇容纳更多的冒险者。",
    "Build": "建造",
    "Build a Treasury": "建立财政部",
    "busy": "忙碌的",
    "Cancel": "取消",
    "Cannot dismiss the last adventurer.": "不能解散最后一个冒险者。",
    "Capacity": "容量",
    "Capacity +1": "容量+1",
    "Capacity +5": "容量+5",
    "Card backgrounds": "卡牌背景",
    "Card illustrations": "卡牌插图",
    "Caution !": "小心！",
    "Certain rare adventurers have a super type, which gives them an additional advantage against enemies of the same type.": "某些稀有的冒险者拥有超级类型，这使他们在对抗同类型的敌人时具有额外的优势。",
    "Change password": "更改密码",
    "city view": "城市景观",
    "Claytonin, nimble Archer": "克莱托宁，敏捷的弓箭手",
    "Click on Level up": "点击升级",
    "click on the \"Confirm\" button.": "单击“确认”按钮。",
    "Click on the \"Gather\" button": "点击“收集”按钮",
    "Click on the \"Scout\" button.": "单击“侦察兵”按钮。",
    "Click on the gathered adventurer.": "点击聚集的冒险者。",
    "Click on your adventurer.": "点击你的冒险家。",
    "Complete": "完成",
    "Completed": "已完成",
    "Confirm": "确认",
    "CONFIRM BARRACKS UPGRADE TO LEVEL": "确认兵营升级到等级",
    "Confirm gather for": "确认收集",
    "Confirm new password": "确认新密码",
    "Confirm quest": "确认任务",
    "Confirm rare gather for": "确认稀有收集",
    "Conflict": "冲突",
    "Council Chamber": "理事会会议厅",
    "Create co-op quest": "创建合作任务",
    "Create quest": "创建任务",
    "credits": "学分",
    "Credits": "学分",
    "Daily free gather in": "每日免费聚会",
    "Daily free scout in": "每日免费侦察",
    "Davin, nimble Archer": "达文，敏捷的弓箭手",
    "Deactivate notifications": "停用通知",
    "Delapouite": "德拉普特",
    "Detects 10 new foes to assign to quests.": "检测到 10 个新敌人以分配给任务。",
    "Developing the town hall expands your town's influence and allows for rarer adventurers to gather in the tavern.": "开发市政厅可以扩大您城镇的影响力，并允许稀有的冒险者聚集在酒馆中。",
    "Dieter Steffmann": "迪特·斯特夫曼",
    "Dismiss": "解雇",
    "Each slot has the following probabilities to be filled by an adventurer of the given rarity level.": "每个插槽有以下概率被给定稀有度的冒险家填补。",
    "Empty password": "空密码",
    "Eon Cire": "Eon Cire",
    "Equipment": "设备",
    "Erecting a new building gives you access to it.": "建造一座新建筑可以让你进入它。",
    "Feliam, meek Wizard": "费利亚姆，温顺的巫师",
    "Foes that have been reported are also listed on this page for you to examine.": "已报告的敌人也列在此页面上供您检查。",
    "Font Awesome": "字体真棒",
    "Fonts": "字体",
    "For example, a Super Melee": "例如，超级近战",
    "Forge": "锻造",
    "Frankenstein": "科学怪人",
    "Freepik": "自由派",
    "From this screen you can either train or dismiss your adventurer if you no longer require it's services.": "如果您不再需要冒险家的服务，您可以在此屏幕上训练或解雇冒险家。",
    "Game manual": "游戏手册",
    "Game-icons.net": "游戏图标网",
    "Gather": "收集",
    "Gathering adventurers": "召集冒险家",
    "gityx": "gityx",
    "Gnome": "侏儒",
    "Go back to the Tavern.": "回到酒馆。",
    "Go to the Scout Tower.": "前往侦察塔。",
    "Go to the Tavern.": "前往酒馆。",
    "Go to your": "前往你的",
    "Goblin": "地精",
    "Good luck !": "祝你好运 ！",
    "Head to the Tavern to gather more adventurers.": "前往酒馆聚集更多的冒险者。",
    "Higher level adventurers are able to tackle stronger and fiercer foes. They are also more efficient at gathering taxes for some reason.": "更高级别的冒险家能够应对更强大和更凶猛的敌人。出于某种原因，他们在征税方面也更有效率。",
    "Hunte, nimble Bard": "亨特，敏捷的吟游诗人",
    "Icons": "图标",
    "If you need help, game manuals": "如果您需要帮助，游戏手册",
    "Inventory": "仓库",
    "It's good to see you again ! Here are a few gifts we hope you'll enjoy.": "很高兴再次见到你 ！以下是我们希望您喜欢的一些礼物。",
    "It's up to you to make your town thrive now.": "现在由你决定让你的城镇繁荣起来。",
    "Item icons": "项目图标",
    "Join a council": "加入理事会",
    "Kaidan": "凯丹",
    "Kobold": "狗头人",
    "Language": "语言",
    "Leaderboard": "排行榜",
    "Let's gather adventurers.": "召集冒险者吧。",
    "Let's scout for foes.": "让我们侦察敌人。",
    "Level": "等级",
    "Level up": "升级",
    "Lorc": "洛克",
    "Lvl": "等级",
    "Mark Poussard": "马克·普萨德",
    "Max": "最大限度",
    "Max rarity": "最大稀有度",
    "Max rarity +1": "最大稀有度 +1",
    "Mayor": "市长",
    "Natanael Gama": "纳塔内尔·伽马",
    "New password": "新密码",
    "New password does not match confirmation": "新密码与确认不符",
    "New password must be at least 6 characters long": "新密码的长度必须至少为 6 个字符",
    "Not enough XP.": "经验不足。",
    "Ok": "好的",
    "On-going": "进行中",
    "Once you've reviewed the newly scouted foes,": "一旦你回顾了新发现的敌人，",
    "or Magic": "或魔术",
    "or your": "或者你的",
    "Outside the town dangerous foes prowl. The scout tower is of primary importance in detecting those creatures, quests can then be created to send adventurers to battle them.": "城外危险的敌人四处游荡。侦察塔对于探测这些生物至关重要，然后可以创建任务以派遣冒险家与它们作战。",
    "Password": "密码",
    "Planted on the town main square, the quest board is often surrounded by groups of adventurers carefully planning their next quest.": "放置在城镇主广场上的任务板经常被一群冒险者包围，他们仔细计划着他们的下一个任务。",
    "Prestige": "声望",
    "Pumpkin": "南瓜",
    "Quest": "任务",
    "Quest Board": "任务板",
    "Quest done": "任务完成",
    "Quest duration": "任务时长",
    "Quest won !": "任务获胜！",
    "Rank": "秩",
    "Rare gather": "稀有采集者",
    "Rarity": "稀有度",
    "Rates": "概率",
    "Recruit": "招募",
    "Recruits an adventurer to join your town, this will allow you to send the adventurer on quests.": "招募冒险家加入您的城镇，这将允许您派遣冒险家执行任务。",
    "Reduce quest time": "减少任务时间",
    "Rename town": "重命名城镇",
    "Renews the adventurers available to recruit from the tavern.": "更新可从酒馆招募的冒险者。",
    "Reward": "报酬",
    "Rusted": "生锈的",
    "sbed": "床位",
    "Scout": "侦察",
    "Scout Tower": "侦察塔",
    "Scouting foes": "侦察敌人",
    "Scouting in progress...": "侦察进行中...",
    "Scouting result": "侦察结果",
    "Screen backgrounds": "屏幕背景",
    "Select a maximum of 5 adventurers that will attempt this pre-defined quest.": "选择最多 5 名冒险者来尝试这个预定义的任务。",
    "Select a maximum of 5 foes and a maximum of 5 adventurers to create a quest.": "选择最多 5 名敌人和最多 5 名冒险家来创建任务。",
    "Select a town to challenge to a quest with a maximum of 5 foes. Rewards will be gained by both the distant town and your town.": "选择一个城镇以挑战最多 5 个敌人的任务。遥远的城镇和你的城镇都会获得奖励。",
    "Select adventurers": "选择冒险家",
    "Settings": "设置",
    "Skip": "跳过",
    "Slime": "史莱姆",
    "Stables": "马厩",
    "Store items": "存放物品",
    "Store money": "存钱",
    "Super type": "超级类型",
    "Tavern": "酒馆",
    "The heart of town, this place is where all the governing and decision making happens. Here you can build and upgrade your town buildings. It is also where you'll find all the details on this town and surrounding ones.": "镇中心，这个地方是所有管理和决策发生的地方。在这里，您可以建造和升级您的城镇建筑。您还可以在这里找到有关这个城镇和周边城镇的所有详细信息。",
    "The quality of adventurers equipment impacts their performances.": "冒险者装备的质量会影响他们的表现。",
    "The super types are recognizable by these icons": "这些图标可以识别超级类型",
    "There's a great number of foes to battle, your single adventurer might need a bit of help to take care of them.": "有很多敌人要战斗，你的单身冒险者可能需要一些帮助来照顾他们。",
    "Thief": "窃贼",
    "This gather will attract rarer and more powerful adventurers to your tavern.": "这次聚会将吸引更稀有和更强大的冒险家来到您的酒馆。",
    "This is where adventurers passing through town gather.": "这里是路过城镇的冒险者聚集的地方。",
    "This is where you'll be able to gather and meet with adventurers from around the world as they come into town for a rest between quests. You may want to hire some powerful adventurers to help deal with local nuisances.": "在这里，您可以聚集并与来自世界各地的冒险家会面，因为他们会在任务间隙进城休息。您可能想聘请一些强大的冒险家来帮助处理当地的麻烦事。",
    "This is where you'll be able to review your adventurers.": "在这里您可以查看您的冒险家。",
    "This is where you'll be able to scout for dangerous foes that roam outside the city walls.": "在这里，您可以侦察在城墙外游荡的危险敌人。",
    "Thony, able Brawler": "托尼，能干的斗士",
    "Title": "称号",
    "To be built": "待建",
    "to continue accumulating money.": "继续积累资金。",
    "To ensure your town's safety, it's always a good idea to scout for foes when you can.": "为了确保您所在城镇的安全，尽可能侦察敌人总是一个好主意。",
    "To recruit the adventurer you would click on the \"Recruit\" button.": "要招募冒险者，您可以点击“招募”按钮。",
    "town hall": "市政厅",
    "Town Hall": "市政厅",
    "Town name should be at least 4 characters and no more than 15. Alphabetical, space, '-' or ''' characters only.": "城镇名称应至少为 4 个字符且不超过 15 个字符。仅可按字母、空格、“-”或“”字符。",
    "Town quest": "城镇任务",
    "Town Quest": "城镇探索",
    "Track lairs": "追踪巢穴",
    "Trackers Cabin": "追踪者小屋",
    "Treasury": "财政部",
    "Type": "类型",
    "type is effective against both Ranged": "类型对远程都有效",
    "types.": "类型。",
    "Undead Dragon": "亡灵龙",
    "Upgrade": "升级",
    "Upgrade equipment": "升级装备",
    "Viscious Speed": "粘性速度",
    "Welcome back !": "欢迎回来 ！",
    "Welcome to": "欢迎来到",
    "Welcome to the Barracks": "欢迎来到军营",
    "Welcome to the Barracks !": "欢迎来到军营！",
    "Welcome to the Quest Board": "欢迎来到任务板",
    "Welcome to the Scout Tower": "欢迎来到侦察塔",
    "Welcome to the Scout Tower !": "欢迎来到侦察塔！",
    "Welcome to the Tavern": "欢迎来到酒馆",
    "Welcome to the Tavern !": "欢迎来到酒馆！",
    "Welcome to the Town Hall": "欢迎来到市政厅",
    "Willdabeast": "意志野兽",
    "Win estimate": "胜率",
    "Witch": "巫婆",
    "Worn": "磨损",
    "You can review available adventurers and if one catches your eye you can recruit them to join your town.": "您可以查看可用的冒险者，如果有一个引起您的注意，您可以招募他们加入您的城镇。",
    "You have reached the maximum amount of money your town can hold without a": "你已经达到了你的城镇在没有",
    "You will receive": "您将收到",
    "You'll be able to create quests at the Quest Board so team of adventurers can handle them.": "您将能够在任务板上创建任务，以便冒险者团队可以处理它们。",
    "You've scouted quite a number of impressive foes !": "你已经发现了许多令人印象深刻的敌人！",
    "—Area Zero's mayor": "——零区市长",
    "—Fakengay's mayor": "——法肯盖市长",
    "—PoneyVille's mayor": "——波尼维尔市长",
    "—Utopia's mayor": "——乌托邦市长",
    "60+ adventurer classes and infinite variations.": "60 多个冒险家课程和无限的变化。",
    "a newly founded settlement and shape it into a flourishing city.": "一个新建立的定居点，并将其塑造成一个繁荣的城市。",
    "Ad available in": "广告可在",
    "adventurers from all over the kingdom to fight for you.": "来自全国各地的冒险者为你而战​​。",
    "against thousands of other mayors to become the all-ruling Monarch.": "反对成千上万的其他市长，成为无所不能的君主。",
    "Back": "后退",
    "Become mayor": "成为市长",
    "bold": "大胆的",
    "By a friend": "通过朋友",
    "Click on the": "点击",
    "Collect": "搜集",
    "Compete": "竞争",
    "Confirm password": "确认密码",
    "Connect": "连接",
    "Continue": "继续",
    "Cool little game, love it!": "很酷的小游戏，喜欢！",
    "Craft the perfect town name": "制作完美的城镇名称",
    "Create": "创造",
    "dice icon for another name.": "另一个名称的骰子图标。",
    "Do you have any comments to add ?": "你有什么意见要补充吗？",
    "Enter a password": "输入密码",
    "Enter a town name": "输入城镇名称",
    "epic quests and send your heroes to conquer them.": "史诗般的任务并派你的英雄去征服他们。",
    "Facebook": "Facebook",
    "Feeling lucky": "感觉很幸运",
    "Fingers crossed": "手指交叉",
    "Fortune favours the": "财富青睐",
    "Gacha": "嘎查",
    "Hidden away in a narrow alley, the lucky shop deals in all things associated with luck. Here you can acquire lucky gems": "这家幸运店隐藏在一条狭窄的小巷里，经营着所有与幸运有关的事物。在这里您可以获得幸运宝石",
    "How did you hear of Monsters & Mayors ?": "你是怎么听说怪兽与市长的？",
    "How old are you ?": "你今年多大 ？",
    "I already have a town": "我已经有了一个小镇",
    "I forgot my password": "我忘记了我的密码",
    "I've really enjoyed this game :) Thank you for all the time and effort you've put into it!": "我真的很喜欢这个游戏 :) 感谢您投入的所有时间和精力！",
    "Idle": "闲置的",
    "Improve": "提升",
    "Incremental": "增加的",
    "Instagram": "Instagram",
    "It's a great game, sucks you in and keeps you hooked!": "这是一款很棒的游戏，让你沉迷其中！",
    "Join 4,000+ players": "加入 4,000 多名玩家",
    "Kind words from our mayors": "我们市长的客气话",
    "Lucky Shop": "幸运店",
    "Man": "男人",
    "Manage": "管理",
    "Management": "管理",
    "Mayors": "市长",
    "Monarchy rules": "君主制规则",
    "Monsters": "怪物",
    "Monsters & Mayors is a free online browser game, playable on any device.": "Monsters & Mayors 是一款免费的在线浏览器游戏，可在任何设备上玩。",
    "of your own Heroic Fantasy village": "你自己的英雄幻想村",
    "Or let us generate one for you": "或者让我们为您生成一个",
    "Password does not match confirmation": "密码与确认不符",
    "Password must be at least 6 characters long": "密码必须至少有6个字符长",
    "Play now": "现在播放",
    "Please send as much information about your town (name, gold, xp, luck, nbr of adventurers, level of each buildings, last connected, etc...) to": "请尽可能多地发送有关您所在城镇的信息（名称、金币、经验值、运气、冒险者的数量、每个建筑物的等级、最后连接的时间等...）",
    "Puzzle": "谜",
    "Quest lost": "任务丢失",
    "Reddit": "红迪网",
    "RPG": "角色扮演游戏",
    "scouting parties to uncover dangerous foes & monsters roaming the land.": "侦察小队以发现在这片土地上漫游的危险敌人和怪物。",
    "Sign up": "注册",
    "Simulation": "模拟",
    "Strategy": "战略",
    "support@monsters-and-mayors.com": "support@monsters-and-mayors.com",
    "This game's the first thing I open every morning and the last I visit before going to sleep!": "这个游戏是我每天早上打开的第一件事，也是我睡觉前最后一次访问！",
    "Town Name": "城镇名称",
    "Twitter": "推特",
    "Vote": "投票",
    "Watch a sponsored advertisement video to gain 1": "观看赞助广告视频获得 1",
    "Watch ad": "观看广告",
    "Welcome to the Lucky Shop": "欢迎来到幸运商店",
    "What game genres are you interested in ?": "您对哪些游戏类型感兴趣？",
    "What's your gender ?": "什么是你的性别 ？",
    "which possess extraordinary properties.": "拥有非凡的属性。",
    "Woman": "女士",
    "your town and tax your growing population.": "你的城镇并对你不断增长的人口征税。",
    "Select foes": "选择敌人",
    "Silandrew": "西兰德鲁",
    "Flynden": "比目鱼",
    "Aidaniel": "艾达尼尔",
    "Desmon": "恶魔",
    "Name": "名称",
    "Population": "人口",
    "Ander": "安德",
    "Daily reward": "每日奖励",
    "Day": "天",
    "Gather available": "收集可用",
    "Lelan, fumbling Archer": "勒兰，笨手笨脚的弓箭手",
    "Next reward in": "下一个奖励",
    "Not enough gold.": "金币不够。",
    "Scout available": "侦察兵可用",
    "Week": "星期",
    "Zandre": "赞德雷",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "v0.1.24-b49a4a4": "v0.1.24-b49a4a4",
    "Gityx": "Gityx",
    'ID': 'ID',
    'h': 'h',
    'm': 'm',
    "gityx": "gityx",
    'vs': 'vs',
    'Vs': 'Vs',
    'X': 'X',
    'm ': 'm ',
    'h ': 'h ',
    's': 's',
    'VS': 'VS',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
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
    ": ": "： ",
    "\n           ": "\n           ",
    "\n          ": "\n          ",
    "\n         ": "\n         ",
    "\n        ": "\n        ",
    " ": "",
    "↓  ": "↓  ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Norkos Dungeon -": "诺科斯地牢-",
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
    ", novice Cleric": "，新手牧师",
    ", meek Wizard": "，温柔的法师",
    ", nimble Archer": "，敏捷的弓箭手",
    ", clever Cleric": "，聪明的牧师",
    ", able Fighter": "，能干的战士",
    ", meek Cleric": "，温顺的牧师",
    "": "",
    "x Rare adventurer": "x 稀有冒险家",
    "x Unique adventurer": "x 独特冒险家",
    "x foes": "x 敌人",
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
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
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
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
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
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+) \/ ([\d\.]+) XP$/, '$1 \/ $2 经验值'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)s Attack Speed$/, '$1秒 攻击速度'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^\+([\d\.,]+)\% Woodcutting Speed$/, '\+$1\% 伐木速度'],
    [/^\+([\d\.,]+)\% Mining Speed$/, '\+$1\% 采矿速度'],
    [/^\+([\d\.,]+)\% Fishing Speed$/, '\+$1\% 钓鱼速度'],
    [/^([\d\.,]+)\% Woodcutting Speed$/, '$1\% 伐木速度'],
    [/^([\d\.,]+)\% Mining Speed$/, '$1\% 采矿速度'],
    [/^([\d\.,]+)\% Fishing Speed$/, '$1\% 钓鱼速度'],
    [/^([\d\.,]+)\% Speed$/, '$1\% 速度'],
    [/^\+([\d\.,]+) Health$/, '\+$1 生命值'],
    [/^\+([\d\.,]+) Damage$/, '\+$1 伤害'],
    [/^\+([\d\.,]+) Defense$/, '\+$1 防御'],
    [/^([\d\.,]+) Wood Pickaxe$/, '$1 木镐'],
    [/^([\d\.,]+) Listings$/, '$1 队列'],
    [/^Lv. ([\d\.,]+)$/, '等级 $1'],
    [/^([\d\.,]+) free gather$/, '$1 免费收集'],
    [/^([\d\.,]+) free gathers$/, '$1 免费收集'],
    [/^([\d\.,]+) free scout$/, '$1 免费侦查'],
    [/^([\d\.,]+) free scouts$/, '$1 免费侦查'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
]);

//2.采集新词
//20190320@JAR

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

    //调整收录的词锭，0=收录原文，1=收录去除前后缀的文本
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
}();
