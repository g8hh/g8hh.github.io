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
    "Attempting to connect...": "正在尝试连接...",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "Buy": "购买",
    "Cake": "蛋糕",
    "CamBam": "坎巴姆",
    "Cambo": "坎博",
    "can't not": "不能不",
    "can't wait to burble enhance": "迫不及待地想加强",
    "Cancel": "取消",
    "Character Name": "角色名字",
    "Chat": "聊天",
    "Cheese": "奶酪",
    "Cheesesmithing": "奶酪制造",
    "CheezyPezza": "芝士披萨",
    "Classic": "经典",
    "Coin": "金币",
    "Collect": "收集",
    "ColorfulPanda": "炫彩熊猫",
    "Combat": "战斗",
    "Combat Stats": "战斗数据",
    "Combat Style": "战斗风格",
    "Confirm Password": "确认密码",
    "congrats to KO on first millionaire": "恭喜KO成为第一位百万富翁",
    "Consumables": "消耗品",
    "Contratjulationz KO!": "反差 KO！",
    "Cooking": "烹饪",
    "cool": "凉爽的",
    "Cow": "奶牛",
    "Cowculator designed for ironcow tbh": "专为 ironcow tbh 设计的 Cowculator",
    "Create only 1 account per person.": "每人仅创建 1 个帐户。",
    "Crimson": "赤红",
    "Cupcake": "纸杯蛋糕",
    "Currencies": "货币",
    "Current Password": "当前密码",
    "Damn than azure is better XP compared to burble": "与 burble 相比，该死的比 azure 更好的 XP",
    "Dconz": "康兹",
    "Defense": "防御",
    "Defense Coffee": "防御咖啡",
    "Discord": "Discord",
    "do it soon and then go afk for 9 hours": "尽快做，然后去 afk 9 小时",
    "Do not abuse game bugs or exploits to your advantage. Please report them on Discord.": "不要滥用游戏错误或漏洞来为您谋取利益。请在 Discord 上报告他们。",
    "Do not give excessive gifts to another player, giving them an unfair advantage over others. (Small gifts between friends or to help new players are fine": "不要给其他玩家过多的礼物，让他们比其他玩家拥有不公平的优势。 （朋友之间的小礼物或帮助新玩家都可以",
    "Do not link or discuss illegal activities or overly sexual topics.": "不要链接或讨论非法活动或过度色情的话题。",
    "Do not share account with other players.": "不要与其他玩家共享帐户。",
    "Do not spam the chat with large number of unnecessary messages, overuse of CAPSLOCK, or beg others for free items.": "不要在聊天中发送大量不必要的信息、过度使用 CAPSLOCK 或向他人乞求免费物品。",
    "Do not trade items or services within Milky Way Idle for anything outside of the game.": "请勿在 Milky Way Idle 内用物品或服务交换游戏外的任何东西。",
    "Do not use any automation that plays the game for you.": "不要使用任何为您玩游戏的自动化。",
    "Do not use deception or scamming to gain items from other players. Actions will be taken against scammers given sufficient evidence. However, items lost to scams will not be refunded.": "不要使用欺骗或诈骗从其他玩家那里获得物品。如果有足够的证据，将对诈骗者采取行动。但是，因诈骗而丢失的物品将不予退还。",
    "Do not use slurs, slangs, or any offensive phrases that targets any person or group of people.": "不要使用诽谤、俚语或任何针对任何人或群体的攻击性短语。",
    "Does the extra action give XP": "额外的动作是否会给 XP",
    "does this idle offline?": "这是闲置离线吗？",
    "Don't remind me": "不要提醒我",
    "don't use the market": "不要使用市场",
    "Donut": "甜甜圈",
    "Dragon Fruit": "火龙果",
    "Dragon Fruit Gummy": "火龙果软糖",
    "Dragon Fruit Yogurt": "火龙果酸奶",
    "Drink": "喝",
    "Drinks": "饮料",
    "Drop Rate": "掉率",
    "Egg": "蛋",
    "eh they're all up for 5 mins or so": "嗯，他们都起床了 5 分钟左右",
    "Email": "电子邮件",
    "Enhancer": "增强剂",
    "Enhancing": "增强",
    "enhancing xp": "增强XP",
    "Equipment": "装备",
    "Everything you need to know is in tooltips": "您需要知道的一切都在工具提示中",
    "Ew, Far is at the top of combat LBs now. Who slacked off and allowed that?": "Ew，Far 现在处于战斗 LB 的顶端。谁懈怠并允许这样做？",
    "Excelsa Coffee Bean": "Excelsa 咖啡豆",
    "Expire Time": "过期时间",
    "Eye": "眼睛",
    "Eyes": "眼睛",
    "Farmland": "农田",
    "Fate": "命运",
    "Fieriosa Coffee Bean": "Fieriosa 咖啡豆",
    "Fight": "斗争",
    "Fighting": "斗争",
    "Fly": "飞",
    "Food": "食物",
    "Foods": "食品",
    "Foraging": "觅食",
    "Frogger": "蛙人",
    "fuckyoufuckfuckb": "操你妈的",
    "Gary": "盖瑞",
    "Gather": "收集",
    "Gator Vest": "鳄鱼背心",
    "Gauntlets": "护手",
    "GBatro": "巴特罗",
    "get me +3 crimson shears": "给我+3深红色剪刀",
    "gityx": "gityx",
    "give me money ko": "给我钱ko",
    "Gobo Planet": "图案星球",
    "god burble prices insane": "上帝的价格疯狂",
    "Got some unique gear.": "得到了一些独特的装备。",
    "grats KO": "恭喜KO",
    "Grats KO": "格拉茨 KO",
    "grats KO!": "恭喜 KO！",
    "Grizzly Bear": "大灰熊",
    "Grizzly Bear Shoes": "灰熊鞋",
    "Gummy": "软糖",
    "The rules for Milky Way Idle are designed to ensure an enjoyable and fair experience for all players. Breaking the rules would result in appropriate penalties dependent on the type and severity of the offense. Penalties include verbal warning, mute, item removal, trading ban, or account ban.": "Milky Way Idle 的规则旨在确保为所有玩家提供愉快和公平的体验。 违反规则将根据罪行的类型和严重程度受到适当的处罚。 处罚包括口头警告、禁言、删除物品、禁止交易或禁止账户。",
    "Unmute": "取消静音",
    "up": "向上",
    "up for": "为",
    "Update": "更新",
    "Use Respectful Language": "使用尊重的语言",
    "use that champ": "使用那个冠军",
    "Username": "用户名",
    "Usernames should not be offensive, sexual, or impersonating others. Inappropriate name may result in mutes or forced name change.": "用户名不应具有攻击性、性或冒充他人。不恰当的名称可能会导致静音或强制更改名称。",
    "Vampire Fang Dirk": "吸血鬼方德克",
    "Verdant": "葱茏",
    "Vision Helmet": "视觉头盔",
    "Vision Shield": "视觉护盾",
    "Was about to say, you work out so you must have some form of self hatred": "正要说，你锻炼了，所以你一定有某种形式的自恨",
    "wat": "笏",
    "Werewolf Slasher": "狼人斩杀者",
    "what enhance david": "什么增强了大卫",
    "whats your price on a +2 khaz?": "+2 khaz 的价格是多少？",
    "whats your tag lol": "你的标签是什么哈哈",
    "Wheat": "小麦",
    "WHOA": "哇",
    "whoa junkz": "哇，垃圾",
    "why the fuck are people launching fireworks": "为什么他妈的人们会放烟花",
    "will buy junkz": "会买junkz",
    "working on yogurts first": "先做酸奶",
    "would be expensive champ": "将是昂贵的冠军",
    "WTB 8+ crimsom brushes": "WTB 8+ 深红色刷子",
    "WTB 8x crimsom brush": "WTB 8x 深红色刷子",
    "WTB crimson brush @": "WTB深红刷@",
    "WTB egg wheat sugar": "WTB鸡蛋小麦糖",
    "xD": "xD",
    "XP And Loot": "XP和战利品",
    "Yeah, at crimson is about when the enhances really start to be worth it": "是的，在深红是关于何时增强真正开始值得",
    "yo dibs": "哟迪斯",
    "prob around": "周围的问题",
    "Produce": "生产",
    "Rainbow": "彩虹",
    "Reason": "原因",
    "Registered User": "注册用户",
    "Requires": "需要",
    "Resources": "资源",
    "rip": "撕裂",
    "Robusta Coffee Bean": "罗布斯塔咖啡豆",
    "Role": "角色",
    "Rules": "规则",
    "Run Away": "逃跑",
    "ryryry": "来来回回",
    "Scripts and Extensions": "脚本和扩展",
    "sdyt": "sdyt",
    "Select an item from your inventory to enhance": "从您的库存中选择一个项目来增强",
    "Self-love is the best love": "自爱是最好的爱",
    "sell it to him at": "卖给他",
    "Shears": "剪",
    "Shimmering Lake": "波光粼粼的湖",
    "Shop": "商店",
    "Should coordinate stuff like that via discord until we get pms": "应该通过不和谐来协调这样的事情，直到我们得到 pms",
    "Silly Cow Valley": "傻牛谷",
    "Single Account Only": "仅限单一账户",
    "Slash Accuracy": "斜线精度",
    "Slash Damage": "斩击伤害",
    "Slash Evasion": "斩击闪避",
    "Smash": "粉碎",
    "Smash Accuracy": "粉碎精度",
    "Smash Damage": "粉碎伤害",
    "Smash Evasion": "粉碎逃避",
    "Snail Shell Helmet": "蜗牛壳头盔",
    "Snake Fang Dirk": "蛇牙德克",
    "so Icecream is best love?": "所以冰淇淋是最好的爱情？",
    "So the answer is yes, but with the loss of enchants.": "所以答案是肯定的，但会失去附魔。",
    "Sold": "卖",
    "Someone can place a higher buy order and get it": "有人可以下更高的买单并得到它",
    "soon": "很快",
    "Spaceberry": "太空莓",
    "Spaceberry Cake": "太空莓蛋糕",
    "Spaceberry Donut": "太空莓甜甜圈",
    "Spacia Coffee Bean": "Spacia咖啡豆",
    "Spatula": "抹刀",
    "Spear": "矛",
    "Special": "特别的",
    "Stab Accuracy": "刺准确度",
    "Stab Damage": "刺伤",
    "Stab Evasion": "刺回避",
    "Stamina": "耐力",
    "Stamina Coffee": "耐力咖啡",
    "Star Fruit": "杨桃",
    "Star Fruit Gummy": "杨桃软糖",
    "Star Fruit Yogurt": "杨桃酸奶",
    "Status": "状态",
    "still think early levels are too easy": "仍然认为早期的水平太容易了",
    "Strawberry": "草莓",
    "Strawberry Cake": "草莓蛋糕",
    "Strawberry Donut": "草莓甜甜圈",
    "Sugar": "糖",
    "suggestion: i have yet to see a \"cowabunga\" pun, it should be added in": "建议：我还没有看到“cowabunga”双关语，应该添加",
    "Super Attack Coffee": "超级攻击咖啡",
    "Super Defense Coffee": "超级防御咖啡",
    "Super Intelligence Coffee": "超智能咖啡",
    "Super Power Coffee": "超能咖啡",
    "Super Stamina Coffee": "超级耐力咖啡",
    "Swamp Essence": "沼泽精华",
    "Swevik": "斯维克",
    "Swiftness Coffee": "迅捷咖啡",
    "Sword": "剑",
    "sword dirk, mace shield, mace dirk which one is the best?": "剑短刀，狼牙盾，狼牙刀哪个最好？",
    "Tax Taken": "税款",
    "That's why Champ and I don't get along": "这就是为什么我和 Champ 相处不来",
    "That's why you gotta care for yourself": "这就是为什么你要照顾好自己",
    "The #1 chat rule is to respect other players. While occasional use of curse words is not against the rule, please don't do so excessively, especially when directed at other players.": "#1 聊天规则是尊重其他玩家。虽然偶尔使用脏话并不违反规则，但请不要过度使用，尤其是针对其他玩家时。",
    "the problem with +4 or higher is that people are going to start leveling out of crimson": "+4或更高的问题是人们将开始从深红色开始升级",
    "the reality is, u gonna suffer in life": "现实是，你会在生活中受苦",
    "they go for 8.5k??": "他们要8.5k？？",
    "this game has a better levelling curve for sure": "这个游戏肯定有更好的练级曲线",
    "Thx cola": "谢谢可乐",
    "Thx forbuying": "谢谢购买",
    "times.": "次。",
    "to Champ: ¯\\_(ツ)_/¯": "到冠军：¯\\_(ツ)_/¯",
    "to upgrade once rainbow comes": "彩虹来了就升级",
    "Total": "全部的",
    "Total Levels": "总水平",
    "Trading": "贸易",
    "tristo": "特里斯托",
    "Tritium": "氚",
    "true :/": "真的 ：/",
    "try": "尝试",
    "trying to get 2 +": "试图获得 2 +",
    "Turtle Shell Body": "龟壳体",
    "Turtle Shell Legs": "龟壳腿",
    "TwoCon": "双控",
    "ty": "泰",
    "Ty brush seller": "TY刷卖家",
    "Type": "类型",
    "U have idlescape AC?": "你有idlescape AC吗？",
    "Hammer": "锤子",
    "Inventory": "仓库",
    "Amount": "数量",
    "Account": "账号",
    "Abilities": "能力",
    "Logout": "登出",
    "Lucky Coffee": "幸运咖啡",
    "Milking": "挤牛奶",
    "Items": "物品",
    "Intelligence": "智力",
    "Brewing": "冲泡",
    "Level": "等级",
    "Leaderboard": "排行榜",
    "Max HP": "最大生命值",
    "Max MP": "最大法力值",
    "Marketplace": "市场",
    "Any scripts or extensions must not take any actions for the player (send any requests to server). You are allowed to use them purely for information display purposes or UI improvements. (ex: Display combat summary, track drops, move buttons to different location": "任何脚本或扩展都不得对玩家执行任何操作（向服务器发送任何请求）。 您可以纯粹将它们用于信息显示或 UI 改进。 （例如：显示战斗总结、追踪掉落、将按钮移动到不同位置",
    "Ability Books": "能力书",
    "Ability Slot": "技能槽",
    "Ability Slots": "技能槽",
    "Account Type": "帐户类型",
    "Active Players": "活跃玩家",
    "Age 13+ Only": "仅限 13 岁以上",
    "All": "全部",
    "AndromedaGalaxy": "仙女座星系",
    "Angelarius": "安吉拉留斯",
    "Apple": "苹果",
    "Apple Gummy": "苹果软糖",
    "Apple Yogurt": "苹果酸奶",
    "Aqua Planet": "水上星球",
    "Arabica Coffee Bean": "阿拉比卡咖啡豆",
    "Armor": "盔甲",
    "Asteroid Belt": "小行星带",
    "Attack": "攻击",
    "Attack Coffee": "攻击咖啡",
    "Attack Interval": "攻击间隔",
    "averagebones": "平均骨骼",
    "Azure": "天蓝色",
    "Ban": "禁止",
    "Ban Duration": "禁令期限",
    "Ban Reason": "禁止原因",
    "Bans": "禁令",
    "be nice to zoomba": "对zoomba好一点",
    "Beach": "海滩",
    "Bear With It": "忍受它",
    "Best to race two of the same item if you want a high enhance level": "如果您想要高增强级别，最好参加两个相同的项目",
    "big": "大的",
    "big cooker man": "大炊具人",
    "Black Bear": "黑色的熊",
    "Black Bear Shoes": "黑熊鞋",
    "Blackberry": "黑莓",
    "Blueberry": "蓝莓",
    "Blueberry Cake": "蓝莓蛋糕",
    "Blueberry Donut": "蓝莓甜甜圈",
    "Body": "身体",
    "Boots": "靴子",
    "Bots, Scripts, And Extensions": "机器人、脚本和扩展",
    "Braeden": "布雷登",
    "bruh": "布鲁赫",
    "Brush": "刷子",
    "Brutal savage recked": "残暴的野蛮人",
    "Buckler": "圆环",
    "Buffs": "爱好者",
    "Bugs and Exploits": "错误和漏洞",
    "building up the stack": "建立堆栈",
    "Bulwark": "堡垒",
    "Burble": "窃笑",
    "Burple Cheese": "Burple 奶酪",
    "But abilities that hit multiple enemies are always good in group combat, regardless of weapon choice": "但是，无论选择何种武器，击中多个敌人的技能在群体战斗中总是不错的",
    "but instead of hurting my lungs i'd be hurting my wallet": "但与其伤害我的肺，我会伤害我的钱包",
    "but now it should level out a bit": "但现在它应该会平稳一点",
    "but u cant be mod and be mean": "但你不能做模范和刻薄",
    "Buy bottled water and keep in fridge, I used to drink so little, almost a guarantee I smash an entire one as soon as I get home from work now": "买瓶装水放冰箱里，我以前喝的很少，几乎保证我现在下班回家就把一整瓶",
    "buying @": "购买@",
    "buys orders up on all that shit": "购买所有这些狗屎的订单",
    "can anyone fill a crim brush order": "任何人都可以填写卷毛刷订单吗",
    "Can't just ask \"So how am I getting out of here?\" at a wedding lol": "不能在婚礼上问“那我怎么离开这里？”哈哈",
    "Challenge accepted": "已接受的挑战",
    "champ": "冠军",
    "Champ": "冠军",
    "champ buy?": "冠军购买？",
    "Lovelies": "可爱的",
    "Mace": "锤",
    "Mace can power level power": "狼牙棒能级功率",
    "Mag on the way to gobos": "玛格在去图案片的路上",
    "Mage": "法师",
    "Magnus": "马格努斯",
    "Main Hand": "主手",
    "making cow cakes now": "现在做牛蛋糕",
    "Mana Over Time": "法力随时间变化",
    "Market Listings": "市场清单",
    "Marsberry": "火星莓",
    "Marsberry Cake": "火星莓蛋糕",
    "Marsberry Donut": "火星莓甜甜圈",
    "Master the skill of picking up things.": "掌握捡东西的技巧。",
    "mathematico": "数学家",
    "maybe u forgot it on the enhancing tab onouris": "也许你在增强标签 onouris 上忘记了它",
    "Milk": "牛奶",
    "milk milk milk, milk.": "牛奶牛奶牛奶，牛奶。",
    "Misty Forest": "迷雾森林",
    "Moderator": "版主",
    "Moderators": "版主",
    "Mods are allowed to troll in good spirit": "允许模组以良好的精神进行巨魔",
    "Monsters": "怪物",
    "moo mods best mods": "moo mods 最好的 mods",
    "Mooberry": "哞莓",
    "Mooberry Cake": "莫莓蛋糕",
    "Mooberry Donut": "Mooberry 甜甜圈",
    "more cheap mooberry cakes up": "更便宜的mooberry蛋糕了",
    "MP Regen": "MP再生",
    "Mute": "沉默的",
    "Mute Duration": "静音时间",
    "Mute Reason": "静音原因",
    "Mutes": "静音",
    "My Listings": "我的清单",
    "My Stuff": "我的东西",
    "NatureMage": "自然法师",
    "New Password": "新密码",
    "next tool is 35,": "下一个工具是 35，",
    "nice": "好的",
    "Nice I just hit 50 milking, cheesesmithing not too far behind": "很好，我刚挤了 50 次挤奶，奶酪锻造也不落后",
    "nice.": "好的。",
    "No": "不",
    "No Account Sharing": "没有帐户共享",
    "No Boosting": "没有提升",
    "No Botting": "没有机器人",
    "No Bug Abusing": "没有错误滥用",
    "No Discrimination": "没有歧视",
    "No Illegal or Sexual Topics": "没有非法或性话题",
    "No Inappropriate Username": "没有不适当的用户名",
    "No Real World Trading / Cross-Trading": "没有真实世界的交易/交叉交易",
    "No Scamming": "没有诈骗",
    "No Spamming": "没有垃圾邮件",
    "Nom Nom": "标称 标称",
    "Not at all. Just need to make sure you have enough accuracy": "一点也不。只需要确保你有足够的准确性",
    "not bad sqwunk": "还不错",
    "now i have this": "现在我有这个",
    "o im trolling": "o 我在拖钓",
    "Off Hand": "副手",
    "oh dang if an enhance fails it wipes all of the +?": "哦，天哪，如果增强失败，它会擦除​​所有的+？",
    "ok so far good tips: cut sugars, no more energy drink and keep a glass of water near me": "好的，到目前为止好的提示：减少糖分，不要再喝能量饮料，在我附近放一杯水",
    "Olympus Mons": "奥林匹斯山",
    "Onouris": "奥努里斯",
    "or sugar at 3 ?": "还是 3 的糖？",
    "Orange": "橙子",
    "Orange Gummy": "橙色软糖",
    "Orange Yogurt": "橙酸奶",
    "Otherwise there'd be far fewer of us": "否则我们的人数会少得多",
    "Outputs": "输出",
    "Panda": "熊猫",
    "Panda Gloves": "熊猫手套",
    "Peach": "桃",
    "Peach Gummy": "桃胶",
    "Peach Yogurt": "桃酸奶",
    "PharmerPhrog": "药剂师Phrog",
    "Pincer Gloves": "钳形手套",
    "Planet Of The Eyes": "眼睛星球",
    "Plate Body": "板体",
    "Plate Legs": "板腿",
    "Plum": "李子",
    "Plum Gummy": "梅子软糖",
    "Plum Yogurt": "梅子酸奶",
    "plum yogurt buy offers all gone?": "梅子酸奶团购优惠全没了？",
    "Polar Bear": "北极熊",
    "Polar Bear Shoes": "北极熊鞋",
    "pope parents don't": "教皇父母不",
    "popemichael": "波迈克尔",
    "Pot": "锅",
    "Pouch": "袋子",
    "Power": "力量",
    "Power Coffee": "强力咖啡",
    "Price": "价格",
    "Purranormal": "超自然",
    "Rank 36 milking now": "排名 36 正在挤奶",
    "Recked": "冲撞",
    "right now im trying new stuff, but cheese b": "现在我在尝试新东西，但是奶酪 b",
    "same item, but unenchanted?": "相同的物品，但未附魔？",
    "same, and I think the \"click inventory\" is a button too lmao": "同样，我认为“点击库存”也是一个按钮 lmao",
    "Legs": "腿部",
    "Experience": "经验",
    "Ask Price": "询价",
    "Life Steal": "生命偷取",
    "AFTER 500 KILLS": "500 次击杀后",
    "Vampire": "吸血鬼",
    "Zombie": "僵尸",
    "Select Abilities": "选择能力",
    "Select Consumables": "选择消耗品",
    "Sell": "卖",
    "Sell Price": "售价",
    "New Buy Listing": "新购买清单",
    "New Sell Listing": "新销售清单",
    "Learned Abilities": "学习能力",
    "Liberica Coffee Bean": "利比里卡咖啡豆",
    "In compliance with COPPA(Children's Online Privacy Protection Act), you must be at least age 13+ to register and play.": "根据 COPPA（儿童在线隐私保护法），您必须年满 13 岁才能注册和玩游戏。",
    "Increases max HP by 10 per level. You gain experience mainly from taking damage and slightly from avoiding damage.": "每级增加 10 点最大生命值。 您主要通过受到伤害获得经验，并从避免伤害中获得少量经验。",
    "Increases max MP by 10 per level. You gain experience when consuming mana while using abilities.": "每级增加 10 点最大 MP。 使用技能时消耗法力可以获得经验。",
    "Increases your accuracy, giving you a higher chance to land your attacks. You gain experience when dealing melee damage.": "提高你的准确性，让你有更高的机会发动攻击。 你在造成近战伤害时获得经验。",
    "Increases your evasion, allowing you to dodge enemy attacks.  You gain experience when dodging or mitigating damage.": "增加你的闪避，让你躲避敌人的攻击。 你在躲避或减轻伤害时获得经验。",
    "Increases your maximum damage. You gain experience proportional to your max damage on each melee attack attempt.": "增加你的最大伤害。 你在每次近战攻击尝试中获得的经验与你的最大伤害成正比。",
    "Instant Heal": "即时愈合",
    "Instant Mana": "即时法力",
    "Intelligence Coffee": "智能咖啡",
    "Make your equipment more powerful.": "让你的装备更强大。",
    "Slimy": "史莱姆",
    "Smelly Planet": "史莱姆星球",
    "Swamp Planet": "沼泽星球",
    "Unicow": "独角牛",
    "Yogurt": "Yogurt",
    "Zombie": "僵尸",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    'Loading...': '加载中...',
    'ON': '打开',
    'OFF': '关闭',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    " ": " ",
    ": ": "： ",
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
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "Cheese ": "奶酪",
    "Burble ": "泡泡",
    "Crimson ": "深红",
    "Blackberry ": "黑莓",
    "Azure ": "天蓝",
    "Holy ": "神圣",
    "Rainbow ": "彩虹",
    "Verdant ": "翠绿",
    "Combat: ": "战斗：",
    "Milking: ": "挤牛奶：",
    "Total Experience": "总经验",
    "Total Level": "总等级",
    "Type: ": "类型：",
    "Stamina Level: ": "耐力等级：",
    "Power Level: ": "力量等级：",
    "Requires: ": "要求：",
    "MP Regen: ": "法力回复：",
    "MP Restore: ": "法力恢复：",
    "Intelligence Level: ": "智力等级：",
    "Defense Level: ": "防御等级：",
    "Exp to Level Up": "升级经验",
    "Attack Level: ": "攻击等级：",
    "": "",
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
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
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
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
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
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
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
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+) minutes$/, '$1 分钟'],
    [/^([\d\.,]+) days$/, '$1 天'],
    [/^([\d\.,]+) years$/, '$1 年'],
    [/^([\d\.,]+) year$/, '$1 年'],
    [/^([\d\.,]+) hours$/, '$1 小时'],
    [/^([\d\.,]+) Coins$/, '$1 金币'],
    [/^Unlock at Lv. (.+) INT$/, '解锁于 $1 级 智力'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
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

    if (cnItems._OTHER_.length < 1000) {
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