// ==UserScript==
// @name         farmgame-chs
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.12
// @description  FarmGame (https://farmgame.live/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://farmgame.live/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/farmgame-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/farmgame-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2023/08/21 18:21.
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
    "XP:": "经验值:",
    "*Email optional and exclusively": "*电子邮件可选且唯一",
    "/each": "/每个",
    "ANIMALS": "动物",
    "Bamboo Seeds": "竹子",
    "BARN": "谷仓",
    "Barn Capacity": "谷仓容量",
    "Barn Rate": "谷仓率",
    "Barn Yields": "谷仓产量",
    "Beet Seeds": "甜菜种子",
    "Blueberry Seeds": "蓝莓种子",
    "BUY": "购买",
    "Carrot Seeds": "胡萝卜种子",
    "Cauliflower Seeds": "花椰菜种子",
    "Chicken": "鸡",
    "COOP": "鸡舍",
    "Coop Capacity": "鸡舍容量",
    "Coop Rate": "鸡舍率",
    "Coop Yields": "鸡舍产量",
    "Corn": "玉米",
    "Corn Seeds": "玉米种子",
    "Cow": "奶牛",
    "Create Account": "创建账户",
    "Crop Growth Time": "作物生长时间",
    "Crop Harvests": "农作物收成",
    "Crop Yields": "农作物产量",
    "DELUXE": "豪华",
    "Deluxe Crops": "高级作物",
    "Duck": "鸭子",
    "Email:": "电子邮件：",
    "EXOTIC": "珍稀",
    "Exotic Animals": "珍稀动物",
    "Flora": "植物群",
    "for 'forgot password'": "对于“忘记密码”",
    "Forgot password": "忘记密码",
    "Forgot password?": "忘记密码？",
    "Goat": "山羊",
    "Grape Seeds": "葡萄籽",
    "Guest": "游客",
    "Hops Seeds": "啤酒花种子",
    "Kiwi": "奇异果",
    "Llama": "骆驼",
    "Login": "登录",
    "Login?": "登录？",
    "Melon Seeds": "西瓜种子",
    "New User?": "新用户？",
    "Oat Seeds": "燕麦种子",
    "Ostrich": "鸵鸟",
    "Parsnip Seeds": "防风草种子",
    "Password:": "密码：",
    "PERMIT": "许可",
    "Potato Seeds": "马铃薯种子",
    "Privacy Policy": "隐私政策",
    "Pumpkin Seeds": "南瓜种子",
    "Quail": "鹌鹑",
    "SEEDS": "种子",
    "Sheep": "羊",
    "Strawberry Seeds": "草莓种子",
    "strawberry Seed": "草莓种子",
    "strawberry seed": "草莓种子",
    "TIER": "等级",
    "UNAVAILABLE": "不可用",
    "update notes": "更新日志",
    "UPGRADE": "升级",
    "UPGRADES": "升级",
    "Username:": "用户名：",
    "Yak": "牦牛",
    "Yam Seeds": "山药种子",
    "You need to enable JavaScript to run this app.": "您需要启用 JavaScript 才能运行此应用程序。",
    "/each yesterday": "/每个昨天",
    "bamboo": "竹子",
    "Barn Management": "谷仓管理",
    "beet": "甜菜",
    "blueberry": "蓝莓",
    "Capacity:": "容量：",
    "carrot": "胡萝卜",
    "cauliflower": "菜花",
    "chicken": "鸡",
    "chicken_egg": "鸡蛋",
    "Coop Management": "鸡舍管理",
    "corn": "玉米",
    "cow_milk": "牛奶",
    "duck_egg": "鸭蛋",
    "goat_milk": "羊奶",
    "grape": "葡萄",
    "Hates": "讨厌",
    "hops": "啤酒花",
    "kiwi_egg": "猕猴桃蛋",
    "llama_wool": "骆驼毛",
    "Loves": "喜欢",
    "Machines (coming soon)": "机器（即将推出）",
    "melon": "甜瓜",
    "oats": "燕麦",
    "ostrich_egg": "鸵鸟蛋",
    "parsnip": "防风草",
    "potato": "土豆",
    "pumpkin": "南瓜",
    "quail_egg": "鹌鹑蛋",
    "Release": "放生",
    "SELL": "出售",
    "SELL ALL": "全部出售",
    "sheep_wool": "羊毛",
    "strawberry": "草莓",
    "yak_milk": "牦牛奶",
    "yam": "山药",
    "Log out": "退出",
    ": I am an undergrad studying computer science at UMass Amherst who enjoys programming in their free time, and made this website initially as a summer 2023 project. It's done in React and hosted with various Azure services. I wrote all of the code and made all of the images. I'm no artist, but when they're pixel images, there's only so many combinations of wrong before you get it right. Hope you enjoy playing!": "：我是一名在麻省大学阿默斯特分校学习计算机科学的本科生，喜欢在空闲时间编程，最初将这个网站作为 2023 年夏季项目制作。 它是在 React 中完成的，并由各种 Azure 服务托管。 我编写了所有代码并制作了所有图像。 我不是艺术家，但当它们是像素图像时，只有这么多错误的组合才能得到正确的结果。 希望您玩得开心！",
    "About": "关于",
    "ALL TIME": "所有时间",
    "Balance:": "余额：",
    "Bamboo": "竹子",
    "Beet": "甜菜",
    "Blueberries": "蓝莓",
    "Buy seeds and new animals at the shop. You can also purchase upgrades that make your animals and plants more bountiful.": "在商店购买种子和新动物。 您还可以购买升级，使您的动物和植物更加丰富。",
    "Carrot": "胡萝卜",
    "Cauliflower": "菜花",
    "Check it out to see your global position in individual goods!": "检查一下，看看您在个别商品中的全球地位！",
    "Chicken Egg": "鸡蛋",
    "Cookie Policy": "Cookie 政策",
    "Cow Milk": "牛奶",
    "Duck Egg": "鸭蛋",
    "FARMING": "农业",
    "Find the Orders board button in your profile.": "在您的个人资料中找到“订单板”按钮。",
    "GearTech": "齿轮技术",
    "Goat Milk": "羊奶",
    "Grapes": "葡萄",
    "Grow crops and raise animals to harvest goods to sell in the market. Different crops and animals take different amounts of time to produce their goods, and crops may be multi-harvest.": "种植农作物并饲养动物以收获商品并在市场上出售。 不同的农作物和动物需要不同的时间来生产它们的产品，并且农作物可能会多次收获。",
    "Here you can also buy permits to handle rarer animals and plants that produce more expensive goods.": "在这里您还可以购买许可证来处理生产更昂贵商品的稀有动植物。",
    "High yield, short growth time": "产量高、生长时间短",
    "Hops": "酒花",
    "HOW TO PLAY": "怎么玩",
    "Joemama": "乔妈妈",
    "Kiwi Egg": "猕猴桃蛋",
    "LEADERBOARD": "排行榜",
    "Llama Wool": "骆驼毛",
    "Log out": "登出",
    "MARKET": "市场",
    "Medium yield, medium growth time": "中等产量，中等生长时间",
    "Melon": "甜瓜",
    "Money": "钱",
    "Oats": "燕麦",
    "Once animals have produced, they will show you by holding their produce: click them to collect. Feeding animals can increase their happiness, and happier animals have a higher chance of producing extra goods.": "一旦动物生产完毕，它们就会拿着它们的产品向您展示：点击它们即可收集。 喂养动物可以增加它们的幸福感，而幸福的动物有更高的机会生产额外的物品。",
    "ORDER BOARD": "订单板",
    "ORDERS": "命令",
    "Orders Board": "订单板",
    "Ostrich Egg": "鸵鸟蛋",
    "Other": "其他",
    "Parsnip": "防风草",
    "PLACEHOLDER": "占位符",
    "Potato": "土豆",
    "Profile info": "个人资料",
    "Pumpkin": "南瓜",
    "Quail Egg": "鹌鹑蛋",
    "REWARD": "报酬",
    "Sheep Wool": "绵羊毛",
    "SHOP": "商店",
    "Strawberry": "草莓",
    "Terms and Conditions": "条款和条件",
    "The all time leaderboard contains the current richest players' balances, which decrease as money is spent. Everything else are all time totals: even if you sell your goods.": "历史排行榜包含当前最富有的玩家的余额，随着金钱的消耗而减少。 其他一切都是时间总计：即使您出售商品。",
    "The leaderboard tracks all crops and produce harvested by all players, with weekly and all time boards. It also tracks the richest players.": "排行榜跟踪所有玩家收获的所有农作物和农产品，包括每周和所有时间板。 它还追踪最富有的玩家。",
    "The market is where you sell your produce. It is a dynamic pricing model: the prices change at midnight, and are based on the volume of each good sold by all players the previous day.": "市场是您出售产品的地方。 这是一种动态定价模型：价格在午夜发生变化，并且基于前一天所有玩家销售的每种商品的数量。",
    "The more something is sold, supply drives price down, and the less something is sold, demand drives the price up. Deluxe and exotic goods receive a sell price bonus.": "售出的东西越多，供应推动价格下跌，售出的东西越少，需求推动价格上涨。 豪华和异国情调的商品可以获得售价奖励。",
    "The order board requests specific goods and can be filled by harvesting them. They reward gold and XP. You can keep the goods after you fill an order!": "订单板需要特定的货物，可以通过收获来填充。 他们奖励金币和经验值。 下单后您可以保留商品！",
    "These are the farming leaderboards! Positions refresh every hour.": "这些是农业排行榜！ 职位每小时刷新一次。",
    "They contain the total crop and animal produce farmed over the past week and all time.": "它们包含过去一周和所有时间种植的农作物和动物产品的总量。",
    "Total Harvests": "总收成",
    "Total Produce": "总产量",
    "WEEKLY": "每周",
    "Weekly leaderboard resets 11:59PM Sunday (UTC), and all time leaderboards never reset.": "每周排行榜将于周日晚上 11:59 (UTC) 重置，并且所有时间排行榜都不会重置。",
    "Yak Milk": "牦牛奶",
    "Yam": "山药",
    "YellewMarker": "黄色标记",
    "You:": "你：",
    "Youkuri": "尤库里",
    "duck": "鸭子",
    "sheep": "绵羊",
    "cow": "奶牛",
    "High yield, medium growth time": "高产、中等生长时间",
    "Low yield, long growth time": "产量低、生长时间长",
    "New Name:": "新名称：",
    "Produce": "生产",
    "MAX CAPACITY": "容量上限",
    "Low yield, very long growth time": "产量低，生长时间长",
    "Hello! Welcome to my gaming website. This is a farming videogame. There is lots of content and things to do. Raise animals, grow crops, and compete in global leaderboards! As you progress in the game, more things will be unlocked and you can do more. There is a lot of content I coded and drew the art for all by myself! Lots of content. I am afraid right now that my site is being rejected for Google Adsense because a site crawling bot does not understand what type of site this is. If you go to https://farmgame.live/howtoplay you will see tons of info about how to play! Please Google Adsense bot do not reject my site because you do not understand what it is.": "你好！ 欢迎来到我的游戏网站。 这是一款农场放置游戏。 有很多内容和要做的事情。 饲养动物，种植农作物，并在全球排行榜上竞争！ 随着你在游戏中的进步，更多的东西将会被解锁，你可以做更多的事情。 有很多内容都是我自己编码和画图的！ 内容很多。 我现在担心我的网站被 Google Adsense 拒绝，因为网站抓取机器人不了解这是什么类型的网站。 如果您访问 https://farmgame.live/howtoplay，您将看到大量有关如何玩的信息！ 请 Google Adsense 机器人不要拒绝我的网站，因为您不明白它是什么。",
    "Artisan Goods": "工艺品",
    "Artisan goods can be sold for a fixed price. Higher quality artisan goods sell for more. There are normal, bronze, silver, and gold quality artisan goods.": "手工艺品可以按固定价格出售。 品质越高的手工艺品售价越高。 有普通、青铜、银、金品质的工艺品。",
    "BOUGHT": "已购买",
    "Build": "建造",
    "BUILD": "建造",
    "Build up to 6 machines with money and parts.  Machines convert animal produce into artisan goods. Each ingredient put into a machine will produce 1 of it's respective artisan good.": "用金钱和零件建造最多 6 台机器。 机器将动物产品转化为工艺品。 放入机器中的每种成分都会产生一种相应的工匠商品。",
    "Buy me a coffee": "给我买杯咖啡",
    "CHEESE": "奶酪",
    "CLOTH": "衣服",
    "Community Discord": "社区Discord",
    "Community Discord!: https://discord.gg/jrxWrgNCHw": "社区Discord！：https://discord.gg/jrxWrgNCHw",
    "Find machine parts in your field when harvesting crops. All crops have a small chance of giving you a random part (1-3%) when harvested. Quicker growth crops have lower drop chances.": "收割庄稼时在田地里寻找机器零件。 所有农作物在收获时都有很小的几率为您提供随机部分（1-3%）。 生长较快的农作物掉落的几率较低。",
    "Game Discord": "游戏Discord",
    "High yield, high initial growth time with short regrowth": "产量高、初始生长时间长、再生时间短",
    "How To Play": "怎么玩",
    "livefarmgame@gmail.com": "livefarmgame@gmail.com",
    "MAXED": "最大",
    "MAYONNAISE": "蛋黄酱",
    "Medium yield, long growth time": "产量中等，生长时间长",
    "Parts": "部分",
    "Sell Artisan Goods:": "出售工匠商品：",
    "Upgrade": "升级",
    "Upgrade machines using parts and money to give them higher capacities, quicker processing times, and a higher chance of better artisan goods.": "使用零件和金钱升级机器，使其具有更高的产能、更快的加工时间以及更高的机会获得更好的工艺品。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Squirrel": "Squirrel",
    "McRibIsBack": "McRibIsBack",
    "medsaidbeta": "medsaidbeta",
    "Lukenzo": "Lukenzo",
    "LushMustache": "LushMustache",
    "thyril": "thyril",
    "Cornissa": "Cornissa",
    "DarkaLT": "DarkaLT",
    "EdRu": "EdRu",
    "Gabby": "Gabby",

    //原样
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",
    "-": "-",
    "X": "X",
    "*": "*",
    "<": "<",
    ">": ">",
    "O": "O",
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
    "Contact: ": "联系：",
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
    " Cow Milk produced! Someone clearly doesn't like Cow Milk.": " 牛奶出产了！ 显然有人不喜欢牛奶。",
    " Kiwi Eggs produced! Someone clearly doesn't like Kiwi Eggs.": " 猕猴桃蛋出产了！ 显然有人不喜欢猕猴桃蛋。",
    " Sheep Wool produced! Someone clearly doesn't like Sheep Wool.": " 羊毛出产了！ 显然有人不喜欢羊毛。",
    " best Corn farmer!": " 最好的 玉米 农夫！",
    " best Yam farmer!": " 最好的 山药 农夫！",
    " best Carrot farmer!": " 最好的 胡萝卜 农夫！",
    " best Grapes farmer!": " 最好的 葡萄 农夫！",
    " best Kiwi Egg farmer!": " 最好的 猕猴桃蛋 农夫！",
    " best Llama Wool farmer!": " 最好的 骆驼毛 农夫！",
    " best Bamboo farmer!": " 最好的 竹子 农夫！",
    " best Blueberries farmer!": " 最好的 蓝莓 农夫！",
    " best Strawberry farmer!": " 最好的 草莓 农夫！",
    " best Beet farmer!": " 最好的 甜菜 农夫！",
    " best Potato farmer!": " 最好的 土豆 农夫！",
    " best Oats farmer!": " 最好的 燕麦 农夫！",
    " best Duck Egg farmer!": " 最好的 鸭蛋 农夫！",
    " best Cauliflower farmer!": " 最好的 菜花 农夫！",
    " best Ostrich Egg farmer!": " 最好的 鸵鸟蛋 农夫！",
    " best Cow Milk farmer!": " 最好的 牛奶 农夫！",
    " best Parsnip farmer!": " 最好的 防风草 农夫！",
    " best Pumpkin farmer!": " 最好的 南瓜 农夫！",
    " best Melon farmer!": " 最好的 甜瓜 农夫！",
    " best Hops farmer!": " 最好的 啤酒花 农夫！",
    " best Yak Milk farmer!": " 最好的 牛奶 农夫！",
    " best Chicken Egg farmer!": " 最好的 鸡蛋 农夫！",
    " best Quail Egg farmer!": " 最好的 鹌鹑蛋 农夫！",
    " best Goat Milk farmer!": " 最好的 羊奶 农夫！",
    " best Sheep Wool farmer!": " 最好的 羊毛 农夫！",
    " Goat Milk produced! Someone clearly doesn't like Goat Milk.": " 羊奶出产了！ 显然有人不喜欢羊奶。",
    " Yams produced! Someone clearly doesn't like Yams.": " 山药出产了！ 显然有人不喜欢山药。",
    " Quail Eggs produced! Someone clearly doesn't like Quail Eggs.": " 鹌鹑蛋出产了！ 显然有人不喜欢鹌鹑蛋。",
    " Beets produced! Someone clearly doesn't like Beets.": " 甜菜出产了！ 显然有人不喜欢甜菜。",
    " Grapes produced! Someone clearly doesn't like Grapes.": " 葡萄出产了！ 显然有人不喜欢葡萄。",
    " Duck Eggs produced! Someone clearly doesn't like Duck Eggs.": " 鸭蛋出产了！ 显然有人不喜欢鸭蛋。",
    " Hops produced! Someone clearly doesn't like Hops.": " 啤酒花产出了！ 显然有人不喜欢啤酒花。",
    " Parsnips produced! Someone clearly doesn't like Parsnips.": " 防风草出产了！ 显然有人不喜欢防风草。",
    " Potatoes produced! Someone clearly doesn't like Potatoes.": " 土豆出产了！ 显然有人不喜欢土豆。",
    " Blueberries produced! Someone clearly doesn't like Blueberries.": "蓝莓出产了！ 显然有人不喜欢蓝莓。",
    " Carrots produced! Someone clearly doesn't like Carrots.": "胡萝卜出产了！ 显然有人不喜欢胡萝卜。",
    " Cauliflowers produced! Someone clearly doesn't like Cauliflowers.": " 花椰菜出产了！ 显然有人不喜欢花椰菜。",
    " Yak Milk produced! Someone clearly doesn't like Yak Milk.": " 牦牛奶出炉了！ 显然有人不喜欢牦牛奶。",
    " richest player in the game.": " 游戏中最富有的玩家。",
    " Strawberries produced! Someone clearly doesn't like Strawberries.": " 草莓出产了！ 显然有人不喜欢草莓。",
    " Pumpkins produced! Someone clearly doesn't like Pumpkins.": " 南瓜出产了！ 显然有人不喜欢南瓜。",
    " Llama Wool produced! Someone clearly doesn't like Llama Wool.": " 骆驼毛出产了！ 显然有人不喜欢骆驼毛。",
    " Melons produced! Someone clearly doesn't like Melons.": " 甜瓜出产了！ 显然有人不喜欢甜瓜。",
    " Bamboo produced! Someone clearly doesn't like Bamboo.": " 竹子出产了！ 显然有人不喜欢竹子。",
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
    /^([\d\.,]+)th$/,
    /^([\d\.,]+)st$/,
    /^([\d\.,]+)rd$/,
    /^([\d\.,]+)nd$/,
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
    [/^([\d\.,]+) XP$/, '$1 经验值'],
    [/^([\d\.,]+)xp$/, '$1 经验值'],
    [/^Only ([\d\.,]+) Goat Milk ever produced!$/, '有史以来只生产过 $1 羊奶!'],
    [/^Only ([\d\.,]+) Ostrich Egg ever produced!$/, '有史以来只生产过 $1 鸵鸟蛋!'],
    [/^Only ([\d\.,]+) Duck Egg ever produced!$/, '有史以来只生产过 $1 鸭蛋!'],
    [/^Only ([\d\.,]+) Yak Milk ever produced!$/, '有史以来只生产过 $1 牦牛奶!'],
    [/^Only ([\d\.,]+) Sheep Wool ever produced!$/, '有史以来只生产过 $1 羊毛!'],
    [/^Only ([\d\.,]+) Cow Milk ever produced!$/, '有史以来只生产过 $1 牛奶!'],
    [/^Only ([\d\.,]+) Chicken Egg ever produced!$/, '有史以来只生产过 $1 鸡蛋！'],
    [/^([\d\.,]+) Corn produced!$/, '出产了 $1 玉米!'],
    [/^([\d\.,]+) Grapes produced!$/, '出产了 $1 葡萄!'],
    [/^([\d\.,]+) Beets produced!$/, '出产了 $1 甜菜!'],
    [/^([\d\.,]+) Cauliflowers produced!$/, '出产了 $1 花椰菜!'],
    [/^([\d\.,]+) Duck Eggs produced!$/, '出产了 $1 鸭蛋!'],
    [/^([\d\.,]+) Bamboo produced!$/, '出产了 $1 竹子!'],
    [/^([\d\.,]+) Strawberries produced!$/, '出产了 $1 草莓!'],
    [/^([\d\.,]+) Chicken Eggs produced!$/, '出产了 $1 鸡蛋!'],
    [/^([\d\.,]+) Cow Milk produced!$/, '出产了 $1 牛奶!'],
    [/^([\d\.,]+) Goat Milk produced!$/, '出产了 $1 羊奶!'],
    [/^([\d\.,]+) Ostrich Eggs produced!$/, '出产了 $1 鸵鸟蛋!'],
    [/^([\d\.,]+) Carrots produced!$/, '出产了 $1 胡萝卜!'],
    [/^([\d\.,]+) Oats produced!$/, '出产了 $1 燕麦!'],
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