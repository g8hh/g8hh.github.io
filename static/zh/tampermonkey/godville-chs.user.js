// ==UserScript==
// @name         godville-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.3
// @description  Godville (https://godvillegame.com/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://godvillegame.com/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/godville-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/godville-chs.user.js
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
    "Shield": "盾牌",
    "shield": "盾牌",
    "Set Sail": "扬帆启航",
    "": "",
    ". Here you can do literally nothing, while your character progresses on his own, writing a story on the go. Or you could show this mortal your will and control him (unsuccessfully). Either way, it'll be lots of fun. And puns. Lots of them.": "。 在这里，你实际上什么都不做，而你的角色会自行进步，随时随地写故事。 或者你可以向这个凡人展示你的意志并控制他（不成功）。 不管怎样，这都会很有趣。 还有双关语。 他们有很多。",
    "\tIt's a parody take on MMORPG, inspired by the well known": "\t这是对 MMORPG 的模仿，灵感来自于著名的",
    "A Feat to Remember": "值得记住的壮举",
    "and desktop web browsers.": "和桌面网络浏览器。",
    "Android": "安卓",
    "blog": "博客",
    "Contact us:": "联系我们：",
    "Create a hero!": "创造英雄！",
    "Create new account": "建立新帐户",
    "David Okula": "大卫·奥库拉",
    "Double Pack News": "双包新闻",
    "Enter the Cloud": "进入云端",
    "For Clarity Sake": "为了清楚起见",
    "For those who can read": "对于那些能够阅读的人",
    "God's name or email:": "上帝的名字或电子邮件：",
    "gods are among us": "诸神就在我们中间",
    "GODVILLE": "上帝之城",
    "godwiki": "上帝维基",
    "iPhone/iPad": "iPhone/iPad",
    "Keep logged in": "保持登录状态",
    "main  |": "主页 |",
    "newspaper": "报纸",
    "Password recovery": "找回密码",
    "Password:": "密码：",
    "Progress Quest": "进度任务",
    "Quick Glance": "快速浏览",
    "Recent News": "最近的新闻",
    "register": "登记",
    "Something to React": "需要反应的东西",
    "support@godvillegame.com": "support@godvillegame.com",
    "Unbelievably fun. Zero gameplay, but so much game.": "令人难以置信的乐趣。 零游戏玩法，但游戏太多。",
    "Welcome to a self-playing comedy game about gods, heroes, and lack of subordination. Want to be a deity? A hero of yours is totally ready to ignore your wishes.": "欢迎来到这款关于诸神、英雄和摆脱从属关系的自玩喜剧游戏。 想成为神吗？ 你的英雄已经做好了无视你的愿望的准备。",
    "You can play via": "您可以通过以下方式玩",
    "a game of words": "文字游戏",
    "Jim Sterling (GamesRadar.com)": "吉姆·斯特林 (GamesRadar.com)",
    "Not playing videogames has never been this much fun.": "不玩电子游戏从来没有这么有趣过。",
    "FAQ": "常见问题",
    "The world of Godville is vast — it has plenty of towns, fields, forests and rivers for your hero to explore. You can oversee the traveling of your champion on the map (tap on the milestone icon to open it if playing on a phone). Sometimes a hero learns about certain promising points in the area and puts them on the map. Upon reaching such point he usually finds something useful.": "上帝之城的世界广阔——有大量的城镇、田野、森林和河流供你的英雄探索。 您可以在地图上监督您的英雄的旅行（如果在手机上玩，请点击里程碑图标将其打开）。 有时，英雄会了解到该地区某些有希望的地点并将其放在地图上。 当达到这样的程度时，他通常会发现一些有用的东西。",
    "'Human Gnome Project' folder": "“人类侏儒项目”文件夹",
    "“Searching for the right path via...”": "“通过……寻找正确的道路”",
    "“Through the mires and swamps...”": "“穿过泥沼和沼泽……”",
    "(a typo, a grammatical error or a phrase that just doesn't sound right)": "（拼写错误、语法错误或听起来不正确的短语）",
    "(optional):": "（选修的）：",
    "(similar to the one your hero{|ine} has now):": "（类似于你的英雄{|ine}现在拥有的）：",
    "(singular gender-neutral name, starts with a capital letter):": "（单数中性名称，以大写字母开头）：",
    "(will be written by hero{|ine} once quest is complete):": "（任务完成后将由 Hero{|ine} 编写）：",
    "* Monster name": "* 怪物名称",
    "* Quest title": "* 任务标题",
    "1-up mushroom": "1层蘑菇",
    "a diary phrase": "日记短语",
    "a duel chronicle": "决斗编年史",
    "a dungeon chronicle": "地牢编年史",
    "a monster": "一个怪兽",
    "a phrase for newspaper": "报纸上的一个短语",
    "a quest": "一个追求",
    "a sail chronicle": "航海编年史",
    "Accumulate": "积累",
    "ACME supply crate": "ACME 供应箱",
    "Actions left: 0": "剩余行动：0",
    "ads": "广告",
    "Age": "年龄",
    "Alex Star": "亚历克斯·斯塔",
    "an artifact": "一件神器",
    "an awesome idea": "一个很棒的主意",
    "an earthly news": "地球上的新闻",
    "Anville (355), good trading, cheap stuff": "安维尔 (355)，交易良好，东西便宜",
    "appear": "出现",
    "Ark": "方舟",
    "ark repair": "方舟修理",
    "arms": "武器",
    "Arms": "武器",
    "Artifact name": "神器名称",
    "Aura": "光环",
    "Automatic badaboom": "自动巴达布",
    "available directions": "可用方向",
    "Bad Gateway (502), lavish parties and good savings": "糟糕的网关 (502)、奢华的派对和丰厚的储蓄",
    "Bag of conspiracy nuts": "一袋阴谋坚果",
    "Bag of knuckle crackers": "一袋指节饼干",
    "Bag of unicorn flakes": "一袋独角兽片",
    "battle end": "战斗结束",
    "battle flee": "战斗逃跑",
    "battle start": "战斗开始",
    "Become the 28th member of the guild “The Wheel of Time”": "成为“时空之轮”公会第28位成员",
    "Beerburgh (35), lavish parties and good savings, weaker prayers": "比尔堡（35），奢华的派对和良好的储蓄，祈祷较弱",
    "body": "身体",
    "Body": "身体",
    "bonus room": "奖金室",
    "booty hint": "战利品提示",
    "booty/manimal/fenimal": "战利品/动物/动物",
    "boss encounter": "boss 遭遇",
    "boss hit": "boss 命中",
    "boss miss": "boss 未命中",
    "boss nearby hint": "boss附近提示",
    "Bosswell (157), cheap parties and bad savings": "Bosswell (157)，廉价的派对和糟糕的储蓄",
    "Bricks for Temple": "寺庙用砖",
    "broadcast": "播送",
    "broken news": "突发新闻",
    "Bumchester (15), quicker healing, lavish parties and good savings": "Bumchester (15)，更快的康复，奢华的派对和丰厚的储蓄",
    "Can of 'greener grass' paint": "一罐“绿草如茵”油漆",
    "Charge": "收费",
    "Charges:": "收费：",
    "Class action suit": "集体诉讼",
    "Collect 50 bricks for temple": "为寺庙收集 50 块砖",
    "Dear Devs, I'd like to suggest:": "亲爱的开发者，我想建议：",
    "death (no loot)": "死亡（没有战利品）",
    "death (with loot)": "死亡（带战利品）",
    "Death Count": "死亡人数",
    "descend into dungeon": "下降到地牢",
    "Dessertown (1070), cheap skills": "甜品城 (1070)，廉价技能",
    "Deville (666), weaker prayers": "德维尔 (666)，较弱的祈祷",
    "Disarming smile": "令人放松的微笑",
    "dismiss": "解雇",
    "Dogville (287), quicker healing, better prayers": "Dogville (287)，更快的康复，更好的祈祷",
    "Drop to Dungeon": "掉落到地牢",
    "duel end": "决斗结束",
    "duel start": "决斗开始",
    "during a fight with a monster": "在与怪物的战斗中",
    "during temple construction": "寺庙建造期间",
    "Egopolis (199), expensive stuff, expensive skills": "Egopolis (199)，昂贵的东西，昂贵的技能",
    "El Herado (82), expensive stuff, lavish parties and good savings": "El Herado (82)，昂贵的东西，奢华的派对和丰厚的储蓄",
    "Email or godname": "电子邮件或神名",
    "empty island": "空岛",
    "empty room": "空房间",
    "encourage": "鼓励",
    "Encourage": "鼓励",
    "encourage influence response": "鼓励影响反应",
    "Enemy": "敌人",
    "Enter the corrected version of the same text.": "输入相同文本的更正版本。",
    "equipment": "装备",
    "Equipment": "装备",
    "Explanation:": "解释：",
    "Explore Datamine": "探索数据矿井",
    "famous heroes": "著名英雄",
    "Farewell, Virtual Realtor. You were truly a magnificent beast. And this is a truly magnificent heart of gold.": "再见，虚拟房地产经纪人。 你真是一头伟大的野兽。 这是一颗真正宏伟的金子般的心。",
    "Fighting at 1261st milestone": "战斗在第 1261 个里程碑",
    "Find more info on this and other aspects of heroes' lives in the": "查找有关英雄生活的这一点和其他方面的更多信息",
    "fishing": "钓鱼",
    "food supplies": "粮食供应",
    "for a hero-trader": "对于英雄交易者来说",
    "forecast": "预报",
    "forums": "论坛",
    "Found a piece of a map with a marked spot among the wreckage left after the battle. Maybe I should check it out.": "在战斗后留下的残骸中发现了一张带有标记点的地图。 也许我应该检查一下。",
    "Found a typo, a grammatical error or a weird phrase on this page? Select it with your mouse and press Ctrl+Enter to offer a correction.": "在此页面上发现拼写错误、语法错误或奇怪的短语？ 用鼠标选择它并按 Ctrl+Enter 进行更正。",
    "Friends": "朋友们",
    "Game News": "游戏新闻",
    "god voice": "神音",
    "Godpower": "神力",
    "Godville (0), capital": "戈德维尔 (0), 首都",
    "Godvillewood (222), slower healing, better prayers": "Godvillewood (222)，较慢的愈合，更好的祈祷",
    "Gold": "金子",
    "Great One, is that you I see in the sky? Those clouds look like a face... or maybe I just need glasses.": "伟大的一位，我在天空中看到的就是你吗？ 那些云看起来像一张脸……或者也许我只是需要眼镜。",
    "Greetings, Gityx!": "问候，Gityx！",
    "Guild": "公会",
    "guild miracle in town": "镇上的公会奇迹",
    "guild spotlight (end)": "公会聚光灯（完）",
    "guild spotlight (start)": "公会聚光灯（开始）",
    "Guitar shredder": "吉他粉碎机",
    "Had the breakfast of champions. Hope they don't find out who ate it.": "吃过冠军早餐。 希望他们不知道是谁吃的。",
    "head": "头",
    "Head": "头",
    "header/footnote": "页眉/脚注",
    "Healiopolis (174), quicker healing, expensive stuff": "Healiopolis (174)，更快的治疗，昂贵的东西",
    "Health": "健康",
    "Heart of gold": "善良的心",
    "Heisenburg (969), good trading": "海森堡 (969)，交易良好",
    "help": "帮助",
    "here": "这里",
    "Here": "这里",
    "hero": "英雄",
    "Hero": "英雄",
    "hero hit": "英雄命中",
    "hero miss": "英雄小姐",
    "hero-trader: trading": "英雄交易者：交易",
    "hero-trader: waiting": "英雄交易者：等待",
    "Hero, 1261 ms.": "英雄，1261 毫秒。",
    "Hero's Diary": "英雄日记",
    "heroes move to": "英雄搬到",
    "Herolympus (253), lavish parties and good savings, cheap skills": "Herolympus (253)，奢华的派对和良好的储蓄，廉价的技能",
    "Herostan (1317), cheap stuff, better prayers": "Herostan (1317)，便宜的东西，更好的祈祷",
    "Herowin (67), good trading, lavish parties and good savings": "Herowin (67)，良好的交易，奢华的派对和良好的储蓄",
    "hint room": "提示室",
    "I can't decide if The Trans-Astral Highway looks better in the summer sun or the winter snow.": "我无法决定跨星体高速公路在夏天的阳光下还是冬天的雪地里看起来更好。",
    "Iago “Clumsy” ❌": "伊阿古“笨拙”❌",
    "ideabox": "想法盒",
    "Ideabox": "创意盒",
    "Ideabox Manual": "创意盒手册",
    "Ideabox news": "创意盒新闻",
    "If your change needs an explanation, feel free to add it here.": "如果您的更改需要解释，请随时在此处添加。",
    "Inventory": "存货",
    "Invites (5)": "邀请 (5)",
    "knocked out (59h 59m left)": "被淘汰（还剩59小时59米）",
    "Last Resort (22), cheap parties and bad savings, better prayers": "最后的手段（22），便宜的聚会和糟糕的储蓄，更好的祈祷",
    "legs": "腿",
    "Legs": "腿",
    "Level": "等级",
    "lighthouse": "灯塔",
    "Lightning shield": "闪电盾",
    "Loading friend list...": "正在加载好友列表...",
    "logout": "登出",
    "Los Adminos (128), quicker healing, lavish parties and good savings": "洛斯行政区 (128)，更快的康复，奢华的派对和丰厚的储蓄",
    "Los Demonos (74), cheap stuff, weaker prayers": "Los Demonos (74)，廉价的东西，较弱的祈祷",
    "Lostway (757), good trading, cheap parties and bad savings": "迷失之路 (757)，良好的交易，便宜的聚会和糟糕的储蓄",
    "Magnum opus": "代表作",
    "making a brick with an influence": "做有影响力的砖",
    "Map": "地图",
    "Map and Points": "地图和地点",
    "Message": "信息",
    "Milestones Passed": "里程碑已过",
    "miracle": "奇迹",
    "Miracle": "奇迹",
    "miracle influence response": "奇迹影响反应",
    "Monsterdam (5), slower healing, expensive skills": "怪物大坝 (5)，治疗速度较慢，技能昂贵",
    "Monsters Defeated": "击败怪物",
    "Monstro City (404), slower healing, cheap skills": "怪物城（404），治疗速度较慢，技能廉价",
    "Motivational sneaker": "励志运动鞋",
    "Motto": "座右铭",
    "My submissions": "我的意见",
    "Name": "姓名",
    "neutral": "中性的",
    "New Achievement - \"Builder, 3rd rank\"!": "新成就 - “建设者，第三级”！",
    "New Ork (120), cheap skills, occasional welcome gifts": "新兽人 (120)，廉价技能，偶尔有欢迎礼物",
    "Newland (1499), lavish parties and good savings, better prayers": "纽兰（1499），奢华的聚会和良好的储蓄，更好的祈祷",
    "Next Station (27), bad trading, cheap stuff": "下一站 (27)，糟糕的交易，便宜的东西",
    "No special skills have been learned yet.": "还没有学到任何特殊技能。",
    "Nothingham (146), good trading": "Nothingham (146)，交易良好",
    "NS": "NS",
    "Oh my god!": "我的天啊！",
    "Ok": "好的",
    "on arrival to town": "抵达城镇后",
    "on aura end": "在光环末端",
    "on death from the monster": "死于怪物之时",
    "on defeating the monster": "打败怪物时",
    "on depositing savings": "关于存款储蓄",
    "on donation/sacrifice while praying in town": "关于在城里祈祷时的捐赠/牺牲",
    "on finishing selling off the loot": "出售战利品后",
    "on fleeing from the monster": "逃离怪物时",
    "on getting a new quest": "接到新任务时",
    "on ignoring the god voice": "忽视神的声音",
    "on loss of the artifact": "遗失文物时",
    "on meeting a strong monster": "遇到强大的怪物时",
    "on resurrection": "论复活",
    "on selling of an expensive artifact": "出售昂贵的文物",
    "on spending gold in a town": "在城镇里花费黄金",
    "on turning back to town (to heal)": "回到城镇（治愈）",
    "on turning back to town (to sell)": "转身回城（出售）",
    "other": "其他",
    "Our heroes met each other. Maybe this is the beginning of a beautiful friendship.": "我们的英雄相遇了。 也许这就是一段美好友谊的开始。",
    "page settings": "页面设置",
    "pantheons": "万神殿",
    "Pantheons": "万神殿",
    "Peace meal": "和平餐",
    "Personality": "性格",
    "Pet": "宠物",
    "Phrase of interest:": "感兴趣的短语：",
    "Pirate's eye patch": "海盗眼罩",
    "Please write the phrase exactly as you saw it (so we can find it).": "请准确地写出您所看到的短语（以便我们可以找到它）。",
    "Pointed out to the Last Chancellor that it would never see me again once it's dead. It quickly grabbed my weapon and ended its own life, leaving a bag of unicorn flakes and 26 coins.": "向末代议长指出，一旦它死了，它就再也见不到我了。 它很快夺走了我的武器，结束了自己的生命，留下了一袋独角兽碎片和26枚硬币。",
    "pray shrine": "祈祷神社",
    "Pretending it didn't hurt...": "假装不痛...",
    "profile": "轮廓",
    "punish": "惩治",
    "Punish": "惩治",
    "punish influence response": "惩罚影响反应",
    "Put into Ark": "放入方舟",
    "Quest": "寻求",
    "Quest completion phrase": "任务完成短语",
    "Quirkytown (111), bad trading, better prayers": "古怪小镇 (111)，糟糕的交易，更好的祈祷",
    "random phrase": "随机短语",
    "rare random event": "罕见的随机事件",
    "reaction to a god voice": "对神的声音的反应",
    "Remote Control": "遥控",
    "remote control action response": "远程控制动作响应",
    "Remote controls are disabled during the first two steps of the fight...": "在战斗的前两步中，远程控制被禁用......",
    "response to a god voice": "对神的声音的回应",
    "Restore": "恢复",
    "Resurrect": "复活",
    "sail end": "航行结束",
    "sail start": "起航",
    "San Satanos (42), weaker prayers": "圣萨塔诺斯 (42)，较弱的祈祷",
    "Savings": "储蓄",
    "Screen Slaver": "屏幕奴隶",
    "Searching for hero in pantheons...": "在万神殿中寻找英雄......",
    "searching for the hero": "寻找英雄",
    "Select a phrase type": "选择短语类型",
    "Select news type": "选择新闻类型",
    "Send to Arena": "发送到竞技场",
    "Side Job": "副业",
    "significant otter": "重要的水獭",
    "Simpletown (93), good trading, expensive skills": "简单小镇 (93)，良好的交易，昂贵的技能",
    "Skills": "技能",
    "Sleep in a town 5 times": "在城镇里睡5次",
    "Sober view": "清醒的看法",
    "Somersault squatting": "空翻蹲",
    "Something interesting,": "有趣的事情，",
    "Something interesting, 1303 ms.": "一些有趣的事情，1303 毫秒。",
    "Spar a Friend": "与朋友切磋",
    "Special loot": "特别战利品",
    "Species": "物种",
    "Status": "地位",
    "Stumbled upon a verse:\n    A brick I need \n    So find a shovel \n    Dig with greed \n    or find a hovel": "偶然发现一首诗：\n我需要一块砖\n所以找到一把铲子\n贪婪地挖掘\n或找到一个小屋",
    "Suggested correction/improvement:": "建议的修正/改进：",
    "talisman": "护符",
    "Talisman": "护符",
    "The E-Bowler's soul triggered its ejector seat, and shot out of its body. I salvaged a peace meal and 7 coins from the wreckage.": "电子保龄球的灵魂触发了弹射座椅，从身体中射出。 我从残骸中救出了一份和平餐和 7 个硬币。",
    "The hero has no pet at the moment.": "英雄目前没有宠物。",
    "They say that dull weapons hurt more, so I attacked the Last Chancellor with my personality.": "他们说迟钝的武器更伤人，所以我用我的个性攻击了末代宰相。",
    "This fight for your hero is over.": "这场为你的英雄而战的战斗已经结束。",
    "Tin throat": "锡喉",
    "to fix a bug": "修复错误",
    "To heal this pet your hero needs to have 2500 coins during a town prayer": "为了治愈这只宠物，你的英雄需要在城镇祈祷期间拥有 2500 个金币",
    "today": "今天",
    "Tradeburg (101), good trading, cheap stuff": "Tradeburg (101)，交易好，东西便宜",
    "Traded with the Son of a Gun: received 31 gold coins and a motivational sneaker in exchange for a fatal blow.": "与枪之子交易：获得31金币和励志球鞋，换取致命一击。",
    "Transmogrifier": "变形者",
    "trap room": "陷阱室",
    "treasure room": "宝藏室",
    "Trollbridge (57), bad trading, cheap skills": "Trollbridge (57)，糟糕的交易，廉价的技能",
    "Twos of Every Kind": "各种二人组",
    "Underwhere (599), bad trading, occasional welcome gifts": "Underwhere (599)，糟糕的交易，偶尔的欢迎礼物",
    "Uninvited guestbook": "不速之客留言簿",
    "Unpleasantville (239), cheap parties and bad savings, occasional welcome gifts": "Unpleasantville (239)，便宜的派对和糟糕的储蓄，偶尔有欢迎礼物",
    "Unsettlement (48), cheap parties and bad savings, better prayers": "不安定（48），廉价的聚会和糟糕的储蓄，更好的祈祷",
    "Unspecifiedistan (911), cheap stuff": "未指定istan (911)，便宜的东西",
    "use of a skill": "使用某项技能",
    "voice from own god": "来自自己神的声音",
    "voice from some other god": "来自其他神的声音",
    "vortex": "涡流",
    "waiting for arena/dungeon/sail/datamine": "等待竞技场/地下城/航行/数据矿井",
    "Waiting for pantheons to update...": "等待万神殿更新...",
    "WALL-E's tracks": "WALL-E 的曲目",
    "wanted artifact": "想要的神器",
    "wanted monster": "通缉怪物",
    "Warning! A pet name can be changed only once. Names that don't conform to the Game Rules will be rolled back (and rename ability will be lost).": "警告！ 宠物名只能更改一次。 不符合游戏规则的名称将被回滚（并且将失去重命名能力）。",
    "We place great value on user contributions and regret that we are unable to respond to each submission personally.": "我们非常重视用户的贡献，但很遗憾我们无法亲自回复每个提交的内容。",
    "weapon": "武器",
    "Weapon": "武器",
    "while defeating a monster": "在打败怪物的同时",
    "while fighting a monster": "当与怪物战斗时",
    "while fishing": "钓鱼时",
    "while fleeing from fight": "当逃离战斗时",
    "while healing": "愈合时",
    "while hero is dead": "当英雄死了",
    "while hit by the monster": "当被怪物击中时",
    "while hitting the monster": "在击中怪物的同时",
    "while meeting a monster": "当遇到怪物时",
    "while praying": "祈祷时",
    "while resting": "休息时",
    "while resting in a town": "在城镇休息时",
    "while returning to a town": "返回城镇时",
    "while selling loot": "在出售战利品的同时",
    "while sleeping": "睡觉时",
    "while trading": "交易时",
    "while traveling": "旅行时",
    "while travelling": "旅行时",
    "while waiting for an arena opponent": "在等待竞技场对手时",
    "while waiting for resurrection": "在等待复活的时候",
    "Wings of unflappability": "镇定之翼",
    "Wins / Losses": "胜利/失败",
    "Witt's End (1202), quicker healing, occasional welcome gifts": "维特的结局 (1202)，更快的治疗，偶尔的欢迎礼物",
    "Wood for Ark": "方舟木材",
    "Yay, something to get excited about! Check the news": "是的，有令人兴奋的事情！ 查看新闻",
    "Yesterday, all my troubles seemed so far away. I guess today you're back from vacation, my Lord?": "昨天，所有的烦恼似乎都离我那么遥远。 我想您今天度假回来了，陛下？",
    "you can generate pictures for Godville monsters.": "您可以为戈德维尔怪物生成图片。",
    "you can suggest an ending for an existing quest.": "您可以为现有任务建议一个结局。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^([\d\.]+)\/([\d\.,]+)$/,
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
    [/^([\d\.,]+) coins$/, '$1 金币'],
    [/^([\d\.,]+) months ([\d\.,]+) days$/, '$1 月 $2 天'],
    [/^Lucky ([\d\.,]+)$/, '幸运 $1'],
    [/^trade level ([\d\.,]+)$/, '交易等级 $1'],
    [/^combat level ([\d\.,]+)$/, '战斗等级 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Friends: (.+)$/, '朋友：$1'],
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