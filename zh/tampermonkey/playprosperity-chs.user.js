// ==UserScript==
// @name         playprosperity-chs
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.12
// @description  PlayProsperity (http://www.playprosperity.ca/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *http://www.playprosperity.ca/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/playprosperity-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/playprosperity-chs.user.js
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
    "against": "反对",
    "Archers": "弓箭手",
    "Archers:": "弓箭手：",
    "asc": "升序",
    "CAD": "计算机辅助设计",
    "Change Password": "更改密码",
    "Chat Settings": "聊天设置",
    "Days worth of food stored": "储存食物的天数",
    "Debug": "调试",
    "desc": "描述",
    "Donations": "捐款",
    "Edit Profile": "编辑个人资料",
    "Game Log": "游戏日志",
    "Game Paused.": "游戏暂停。",
    "Game Settings": "游戏设置",
    "Game Speed:": "游戏速度：",
    "Gamesave Id:": "游戏保存 ID：",
    "General Settings": "常规设置",
    "Hello": "你好",
    "Hello gityx": "你好，吉蒂克斯",
    "Icons and images courtesy of LunarTyde": "图标和图像由 LunarTyde 提供",
    "Loading": "加载中",
    "Monthly Budget": "每月预算",
    "Notification Settings": "通知设置",
    "Objectives": "目标",
    "online:": "在线：",
    "Places": "地点",
    "Resume": "恢复",
    "Save Game": "保存游戏",
    "Saved.": "已保存。",
    "Saving...": "正在保存...",
    "Sign out": "登出",
    "Sort: ": "排序：",
    "Warriors": "勇士",
    "Warriors:": "勇士：",
    "Change your password": "更改您的密码",
    "Current Password": "当前密码",
    "New Password": "新密码",
    "Password Changed Successfully. You can close this page now": "密码修改成功。 您现在可以关闭此页面",
    "Save Password": "保存密码",
    "Verify Password": "确认密码",
    "Loading": "加载中",
    "Are you sure you want to delete this save?": "您确定要删除此保存吗？",
    "Edit Email": "编辑邮箱",
    "Load Game": "加载游戏",
    "Load Special": "加载特殊",
    "Loading Game...": "加载游戏...",
    "Sign Out": "登出",
    "\"Couldn't even bother to finish the job eh, what did you do?\" asked Oakend": "“甚至懒得完成这项工作，呃，你做了什么？” Oakend 问道",
    "\"I am Ishna, and this is my husband Oakend,\" said the woman, \"What is your name?\"": "“我是 Ishna，这是我的丈夫 Oakend，”女人说，“你叫什么名字？”",
    "\"You're in a small autonomous community between Altona and Kitsilano,\" explained Ishna. \"You don't look like a woodsman, what was your profession?\"": "“你位于阿尔托纳和基斯兰诺之间的一个小型自治社区，”Ishna 解释道。 “你看起来不像樵夫，你是做什么职业的？”",
    "Answer": "回答",
    "Battle": "战斗",
    "Bread": "面包",
    "Building Unlock": "建筑解锁",
    "Cheese": "奶酪",
    "Construction": "建造",
    "Contracts": "合同",
    "Diseases": "疾病",
    "Fire": "火",
    "Firewood": "木柴",
    "Fish": "鱼",
    "Food": "食物",
    "Fruit": "水果",
    "Fur": "毛皮",
    "I slipped and fell": "我滑倒了",
    "I was a commander (Base strength increased by 20%)": "我是一名指挥官（基础强度增加20%）",
    "I was a mason (Start with an extra mason for making buildings)": "我是一名泥瓦匠（从额外的泥瓦匠开始建造建筑物）",
    "I was a merchant (Better prices when buying/selling goods)": "我是一名商人（购买/出售商品时价格更优惠）",
    "I was a scholar (25% faster level up for workers)": "我是一名学者（工人的升级速度快 25%）",
    "I was being chased by minions of The Warlord": "我被军阀的爪牙追赶",
    "I was left to die by an execution squad": "我被行刑队留下等死",
    "Long story... where am I?": "说来话长……我在哪儿？",
    "Look around": "环视四周",
    "Lumber": "木材",
    "Meat": "肉",
    "Merchants": "商家",
    "Messages": "留言",
    "Mining": "采矿",
    "Money": "钱",
    "Monthly Finances": "每月财务",
    "Reach out for them": "向他们请求帮助",
    "Setting up the game ...": "设置游戏...",
    "Storyline": "故事情节",
    "Tech": "科技",
    "They crouch over you, the woman cradled your head as the man offered you a cup of water, you caught a glimpse of your reflection": "他们蹲在你身上，女人抱着你的头，男人给你一杯水，你瞥见了自己的倒影",
    "USD": "美元",
    "Vegetable": "蔬菜",
    "Warehouse Capacity": "仓库容量",
    "Winter": "冬天",
    "Wood": "木头",
    "You are dizzy, everything hurts, the world is out of focus": "你头晕目眩，浑身疼痛，世界失去焦点",
    "You are in a small room, on a soft bed. A couple is whispering inaudibly to each other": "你在一个小房间里，躺在一张柔软的床上。 一对情侣正在窃窃私语",
    "\"Fine job, none of us are here, we could learn something from you perhaps,\" said Oakend": "“干得好，我们都不在这里，也许我们可以从你那里学到一些东西，”Oakend 说",
    "\"Herbs from the forest, I guess you're not a woodsman, or you would've known. What is your profession?\" inquired Ishna": "“森林里的草药，我猜你不是樵夫，不然你就会知道。你的职业是什么？”Ishna 问道",
    "\"Is that how you got all these gashes eh? Don't worry Gityx, we won't hurt you.\" said Oakend": "“这就是你身上所有这些伤口的原因吗？别担心，Gityx，我们不会伤害你。”奥肯德说",
    "\"This is our home, we live in a little community between Altona and Kitsilano, away from warlords and lieges,\" explained Ishna. She applied some balm on your leg wound.": "“这是我们的家，我们住在阿尔托纳和基斯兰诺之间的一个小社区，远离军阀和领主，”Ishna 解释道。 她在你腿上的伤口上涂了一些药膏。",
    "Thank you": "谢谢",
    "What is that?": "那是什么？",
    "Where am I?": "我在哪里？",
    "Idling": "放置",
    "Construction of Granary complete (+300 Civil Exp)": "粮仓建设完成（+300 经验）",
    "Construction of Warehouse complete (+300 Civil Exp)": "仓库建设完成（+300 经验）",
    "A master mason has taken up residence in your settlement, says he can help create buildings for you": "一位泥瓦匠大师已在您的定居点居住，并表示他可以帮助您建造建筑物",
    "You have unlocked Builder's Hut! Go find it in the Civil tab in the mason's guild": "您已解锁建造者小屋！ 去泥瓦匠行会的“民事”选项卡中找到它",
    "You have unlocked Firewood Camp! Go find it in the Industrial tab in the mason's guild": "您已解锁柴火营地！ 去泥瓦匠行会的工业选项卡中找到它",
    "You have unlocked Hovel! Go find it in the Housing tab in the mason's guild": "您已经解锁了小屋！ 去泥瓦匠行会的“住房”选项卡中找到它",
    "You have unlocked Hunting Lodge! Go find it in the Food tab in the mason's guild": "您已解锁狩猎小屋！ 去泥瓦匠公会的“食物”选项卡中找到它",
    "You have unlocked Logging Camp! Go find it in the Industrial tab in the mason's guild": "您已解锁伐木营地！ 去泥瓦匠行会的工业选项卡中找到它",
    "You have unlocked Town Center! Go find it in the Special tab in the mason's guild": "您已解锁市中心！ 去泥瓦匠公会的特殊选项卡中找到它",
    "You stay hidden. When the door finally broke down, Oakend charged at the attackers. Ishna handed you Abby to help her husband fight off the soldiers, but she too was soon overwhelmed. With their hands cuffed, you saw men in armour throw them onto a cart.": "你保持隐藏。 当门最终被打破时，奥肯德向袭击者发起冲锋。 伊什娜（Ishna）让艾比（Abby）帮助她的丈夫击退士兵，但她很快也不知所措。 他们的双手被铐住，你看到身穿盔甲的人将他们扔到一辆马车上。",
    "female": "女",
    "- As a commander, your ability to lead troops are enhanced, allowing them to perform better in combat, which will aid your liberation/take-over campaigns": "- 作为指挥官，你领导部队的能力得到增强，让他们在战斗中表现得更好，这将有助于你的解放/接管战役",
    ", they will happily join us, if there is room. We should build some": "，如果有空间的话，他们会很乐意加入我们。 我们应该建立一些",
    ". If you shelter me, you will have my eternal gratitude and my service.": "。 如果您庇护我，我将永远感激您并为您服务。",
    ". If you visit the": "。 如果您访问",
    "\"Is that how you got all these gashes eh? Don't worry gityx, we won't hurt you.\" said Oakend": "“这就是你身上所有这些伤口的原因吗？别担心，gityx，我们不会伤害你。”奥肯德说",
    "\"Let her sleep, Abby,\" urged Ishna": "“让她睡吧，艾比，”伊什纳催促道",
    "\"There is a cellar to the back, its almost impossible to see at night. We will hide there if we have to,\" said Ishna as she tightly held Abby.": "“后面有一个地窖，晚上几乎看不到。有必要的话我们就躲在那里。”伊什娜紧紧地抱着艾比说道。",
    "\"Well, if you would like to lead a simpler life, I'm sure your skillset can come in handy in the woods,\" said Oakend": "“好吧，如果你想过一种简单的生活，我相信你的技能在树林里会派上用场，”奥肯德说",
    "*laugh manically* (you monster)": "*疯狂地笑*（你这个怪物）",
    "A lodge for hunters to work in": "供猎人工作的小屋",
    "A working ground for lumberjacks to cut trees and process wood": "伐木工人砍伐树木和加工木材的工作场地",
    "A-Z": "A-Z",
    "Abby held your hand, \"Where's mom and dad?\"": "艾比握着你的手，“爸爸妈妈呢？”",
    "About You:": "关于你：",
    "Actions": "行动",
    "An area designated as the town center with a few housing spots, this marks the land as a permanent settlement": "指定为镇中心的区域，有一些住宅区，这标志着该土地成为永久定居点",
    "and hunt. I never liked": "和狩猎。 我从来不喜欢",
    "Animals": "动物",
    "As the medicine started to take effect, you felt drowsy. As your consciousness slipped, you saw a little girl looking at you with wonder.": "当药效开始发挥作用时，你感到昏昏欲睡。 意识一晃，就看见一个小女孩正用惊讶的眼神看着你。",
    "as well as": "也",
    "Auto-hire up to": "自动雇用最多",
    "Awesome": "惊人的",
    "Basic housing, rather ugly, but has 4 walls and a roof... sometimes.": "基本的住房，相当丑陋，但有 4 堵墙和一个屋顶……有时。",
    "Breakdown:": "分解：",
    "Builder's Hut": "建造者的小屋",
    "Builder's Hut. Are you sure?\n\t": "建造者的小屋。 你确定吗？\n\t",
    "builders": "建设者",
    "Building projects are queued up here": "建筑项目在这里排队",
    "Buildings": "建筑物",
    "Builds various things as directed by Masons": "按照梅森的指示建造各种东西",
    "by trade. I have worked many years, helping turn hamlets into cities, but I am now being hunted by": "用于贸易。 我工作了很多年，帮助把小村庄变成了城市，但现在我却遭到了追捕",
    "Camp": "营",
    "Cancel": "取消",
    "Chop Wood": "伐木",
    "City Space": "城市空间",
    "Civil": "民用",
    "Click to view each building": "点击查看各建筑",
    "Climb out of the cellar": "爬出地窖",
    "Commander": "指挥官",
    "Cost": "成本",
    "Current Level:": "当前水平：",
    "Current status:": "当前状态：",
    "No bowyers": "没有弓箭手",
    "No Foresters": "没有护林员",
    "No Gatherers": "没有采集者",
    "No hunters": "没有猎人",
    "No Log Splitters": "没有木头切割工",
    "No lumberjacks": "没有伐木工人",
    "cut trees": "砍树",
    "Description": "描述",
    "Discard overflow": "丢弃溢出",
    "Dried wood in easy to move packages - ideal for burning": "干燥的木材装在易于移动的包装中 - 非常适合燃烧",
    "Each building plan details how many people it needs to work on something.": "每个建筑计划都详细说明了某项工作需要多少人。",
    "Effects": "效果",
    "Efficiency:": "效率：",
    "Excellent crafting material: sturdy, flexible, woody": "优秀的制作材料：坚固、柔韧、木质",
    "Field Space": "场域空间",
    "Firewood Camp": "柴火营",
    "Firewood Camp. Are you sure?\n\t": "柴火营。 你确定吗？\n\t",
    "for efficiency.": "为了效率。",
    "Forest Space": "森林空间",
    "Get up and help Ishna": "站起来帮助伊什纳",
    "Get up and help Oakend": "站起来帮助奥肯德",
    "Go to the Mason's Guild and make a hovel": "前往泥瓦匠公会并建造一间小屋",
    "Good for trading or used for keeping warm": "适合交易或保暖",
    "Good idea": "好主意",
    "Good Spirits Bonus": "良好精神奖金",
    "Greetings gityx, I have come to your camp seeking work, I am": "问候 gitx，我来到你们的营地寻找工作，我是",
    "Hey!": "嘿！",
    "Houses construction workers, which increases the speed of construction": "为建筑工人提供住所，从而提高施工速度",
    "Housing": "住房",
    "Hovel": "小屋",
    "Hovel. Are you sure?\n\t": "小屋。 你确定吗？\n\t",
    "hovels": "小屋",
    "Hunt": "打猎",
    "hunting": "打猎",
    "Hunting Lodge": "狩猎小屋",
    "Hunting Lodge. Are you sure?\n\t": "狩猎小屋。 你确定吗？\n\t",
    "I don't know": "我不知道",
    "I set up this shack as the base of operations for all things related to buildings.": "我把这个小屋作为所有与建筑物有关的事情的运作基地。",
    "If this job runs out of room for storing the goods, automatically discard extras": "如果此作业没有足够的空间来存储货物，则自动丢弃多余的东西",
    "Industrial": "工业的",
    "Information": "信息",
    "Land usage:": "土地用途：",
    "Log Splitters make firewood from wood here, which is needed as fuel for many industrial tasks": "劈木工在这里用木材制造木柴，这是许多工业任务所需的燃料",
    "Logging Camp": "伐木营",
    "Logging Camp. Are you sure?\n\t": "伐木营。 你确定吗？\n\t",
    "mason": "泥瓦匠",
    "Mason": "泥瓦匠",
    "masons": "泥瓦匠",
    "Masons": "泥瓦匠",
    "Masons Guild": "泥瓦匠公会",
    "Minimum number of builders": "最小建造者数量",
    "Monty": "蒙蒂",
    "My dad used to take me through the forest to": "我爸爸常常带我穿过森林",
    "Name of Camp:": "营地名称：",
    "Next Level:": "下一级：",
    "No contracts yet, just you wait, they'll show up.": "还没有合同，只要你等，他们就会出现。",
    "No problem": "没问题",
    "Now, buildings take time to construct, and resources, but very importantly - we need": "现在，建筑物的建造需要时间和资源，但非常重要的是 - 我们需要",
    "Now, let's start building!": "现在，让我们开始构建吧！",
    "Other Space": "其他空间",
    "Profession:": "职业：",
    "Prosperity": "繁荣",
    "Quit the job if it is the wrong season": "如果季节不对就辞职",
    "Requirements:": "要求：",
    "Saplings": "树苗",
    "Seed Bundles": "种子束",
    "Settlement": "定居",
    "Smile and fall asleep": "微笑着入睡",
    "Sneak out the back": "从后面偷偷溜出来",
    "Special": "特殊",
    "Split Wood": "切割木头",
    "Spread the seeds, maybe they will grow into something. Can only be obtained from manually chopping trees until the sustainability upgrade is learned": "传播种子，也许它们会长成一些东西。 只能通过手动砍伐树木获得，直到学会可持续性升级为止",
    "Stay hidden": "保持隐藏",
    "Sturdy and flexible building material, required for many buildings": "许多建筑物都需要坚固且灵活的建筑材料",
    "Thank you, you are most kind. I know there are others seeking refuge from": "谢谢你，你真是太善良了。 我知道还有其他人寻求庇护",
    "The health of the forest, as well as weather conditions, can affect how many saplings make it to maturity.": "森林的健康状况以及天气条件会影响成熟的树苗数量。",
    "The Warlord": "军阀",
    "There's also this project queue. Basically, you can queue up a bunch of buildings, if you have the resources, and they will be done in order. You can of course change the order (by dragging and dropping).": "还有这个项目队列。 基本上，如果你有资源，你可以排列一堆建筑物，它们会按顺序完成。 您当然可以更改顺序（通过拖放）。",
    "This is a notification, click to dismiss it": "这是一条通知，点击即可关闭",
    "This pane displays information about saplings in the forest. A sapling takes 360 days to mature into a tree. Here they are divided into 36 groups so that you can see how many are at each stage": "此窗格显示有关森林中树苗的信息。 一棵树苗需要360天才能长成大树。 这里将它们分为 36 组，以便您可以看到每个阶段有多少个",
    "though, poor animals! But, I did plant a seed once and it's a sapling now. Please don't ever cut it down, it's my tree...": "不过，可怜的动物们！ 但是，我曾经种过一颗种子，现在它是一棵树苗了。 请不要砍倒它，它是我的树...",
    "Town Center": "市中心",
    "Town Center. Are you sure?\n\t": "市中心。 你确定吗？\n\t",
    "Trees": "树木",
    "Unemployed": "失业",
    "Used up to store goods, increase by building more houses or warehouses": "用于储存货物，通过建造更多房屋或仓库来增加",
    "We have only a little food... are there more food in the forest we can get? I don't like being hungry...": "我们只有一点食物……森林里还有更多食物吗？ 我不喜欢挨饿...",
    "We'll find out": "我们会发现",
    "We'll see": "我们拭目以待",
    "Welcome aboard": "欢迎登机",
    "Where's your tree? I'm going to chop it down for firewood": "你的树在哪里？ 我要把它砍下来当柴火",
    "Workers": "工人",
    "You are about to destroy": "你即将毁灭",
    "You can come any time, and look at what we can build. Over time, we will get new buildings we can build in each of the categories.": "您可以随时来，看看我们可以建造什么。 随着时间的推移，我们将获得可以在每个类别中建造的新建筑物。",
    "You muffled Abby's cries and snuck out the back of the house and down the cellar Ishna mentioned. There, you waited... and eventually the sounds of conflict died out.": "你捂住了艾比的哭声，偷偷溜出了房子后面，来到了伊什纳提到的地窖。 你在那里等待……最终冲突的声音消失了。",
    "You saw stacks of smoke from burnt homes. Not a whimper could be heard...": "你看到被烧毁的房屋冒出浓烟。 听不到任何呜咽声……",
    "You will find a number of buildings we can start making right away.": "您会发现我们可以立即开始建造许多建筑物。",
    "You woke to the sound of fighting. Ishna was bundling up Abby while Oakend guarded the door.": "你是被战斗的声音吵醒的。 伊什娜正在把艾比捆起来，奥肯德则守在门口。",
    "You... you monster! I'm never going to tell you! ever ever ever!": "你……你这个怪物！ 我永远不会告诉你！ 永远永远永远！",
    "A travelling merchant has some stuff to sell": "旅行商人有一些东西要卖",
    "A travelling trader wishes to purchase goods from you": "旅行商人希望向您购买商品",
    "Agriculture": "农业",
    "Ask your masons (very nicely) to multitask, slowing production by 33% but doubling the number of active projects masons can handle": "让你的泥瓦匠（非常友善地）执行多项任务，将生产速度降低 33%，但泥瓦匠可以处理的活动项目数量增加了一倍",
    "Awesome, we should explore it!": "太棒了，我们应该探索一下！",
    "Better management of resources leads to more builders being able to work on the same project to finish it faster": "更好的资源管理使更多的构建者能够在同一项目上工作以更快地完成它",
    "Book Keeping": "记账",
    "Complete Contract": "完成合同",
    "Crafts": "工艺",
    "Creating a local trading house will give you better prices when selling or buying goods, as they have more negotiating power": "创建本地贸易公司将为您在销售或购买商品时提供更好的价格，因为他们有更多的谈判能力",
    "Dirt Road": "泥路",
    "Does work for you, you must have buildings for workers to stay at or they will not come": "是否为您工作，您必须有建筑物供工人居住，否则他们不会来",
    "Each batch requires 10 Wood and produces 15 Firewood": "每批次需要 10 木材并生产 15 木柴",
    "Employment Center": "就业中心",
    "Forestry": "林业",
    "Get better prices at the market by knowing the market, note this tech does not affect prices out of the market (i.e. contractors)": "通过了解市场在市场上获得更好的价格，请注意，该技术不会影响市场外的价格（即承包商）",
    "Guess what gityx? I found this biiiiiggg field with lots of wild flowers, you really should see it!": "猜猜什么是 gitx？ 我发现了这个biiiiiggg田野，有很多野花，你真的应该看看！",
    "Having an actual road rather than a trail, even if it's made out of dirt. Caravan Speed +1": "拥有一条真正的道路而不是小径，即使它是由泥土制成的。 商队速度 +1",
    "Homeopathic Medicine": "顺势疗法医学",
    "I hate squash! But sometimes it's tasty. This looks like a good place for a good garden, full of tastier things! Can we grow sweets? Oh oh, look, berries! Lets pick some and bring them back!": "我讨厌南瓜！ 但有时也很好吃。 这看起来是一个好花园的好地方，里面充满了更美味的东西！ 我们可以种植糖果吗？ 哦哦，看，浆果！ 让我们挑选一些并将它们带回来吧！",
    "Ick!": "恶心！",
    "Independent Contractors": "独立承包商",
    "Interesting...": "有趣的...",
    "Mason Multitasking": "梅森多任务处理",
    "Medicine": "药品",
    "Military": "军队",
    "Mom had a little garden by our house where she grew vegetables.": "妈妈在我们家旁边有一个小花园，她在那里种植蔬菜。",
    "Musical Melodies": "音乐旋律",
    "No Beekeepers": "没有养蜂人",
    "No Butchers": "没有屠夫",
    "No cheese makers": "没有奶酪制造商",
    "No harvesters": "没有收割机",
    "No millers": "没有磨坊主",
    "No orchardists": "没有果园",
    "No ranchers": "没有牧场主",
    "No vegetable harvesters": "没有蔬菜收割机",
    "People {{peopleInTab>0?'('+peopleInTab+')':''}}": "人 {{peopleInTab>0?'('+peopleInTab+')':''}}",
    "Please remember to subscribe to www.reddit.com/r/ProsperityGame": "请记得订阅www.reddit.com/r/ProsperityGame",
    "Prerequisites not met": "不满足先决条件",
    "Random bits of space here and there that isn't really zoned, but exists anyway in strange manner of shapes. Good for the more ambitious buildings that can work with various terrain types": "到处都是随机的空间，它们并没有真正分区，但无论如何都以奇怪的形状存在。 适用于可适应各种地形类型的更雄心勃勃的建筑",
    "Reinforcement Material": "增强材料",
    "Reject": "拒绝",
    "Reward:": "报酬：",
    "Space available in the City type. This is prime real estate where most people live and work": "城市类型中的可用空间。 这是大多数人生活和工作的黄金地段",
    "Space available in the forest. Please note that although trees are technically not buildings, they do take up space too": "森林中的可用空间。 请注意，虽然从技术上讲树木不是建筑物，但它们也占用空间",
    "Space zoned for agricultural practices, these lands are especially fertile, and good for growing crops and graze land": "这些土地被划分为农业实践区，特别肥沃，有利于种植农作物和牧场",
    "Splits logs into smaller pieces that are ideal for burning": "将原木分成更适合燃烧的小块",
    "Standard Measurements": "标准测量",
    "Standardizing measurements means far fewer confusion between builders, leading to a performance improvement for speed of making buildings": "标准化测量意味着建筑商之间的混淆会大大减少，从而提高建筑速度的性能",
    "This bonus is earned when you have consecutive days where your total Awesome is consistently the same or improving": "当您连续几天的总棒值始终相同或有所提高时，即可获得此奖金",
    "Trading House": "贸易行",
    "Unlocks the Employment Tab in the ": "解锁就业选项卡",
    "Unlocks the music player (bottom of the screen) and provides +5 Entertainment Awesomeness": "解锁音乐播放器（屏幕底部）并提供 +5 娱乐体验",
    "Using reinforcing material on buildings to stand the test of time. This will cut down on repairs needed by improving the expected life of a building by 50%": "在建筑物上使用加固材料可以经受时间的考验。 这将使建筑物的预期寿命提高 50%，从而减少所需的维修工作",
    "Welcome to Prosperity the Game": "欢迎来到繁荣游戏",
    "Better Reinforcements": "更好的增援",
    "Better Shelving": "更好的货架",
    "Chance of buildings catching fire reduced by 50%": "建筑物着火的几率降低 50%",
    "Diluted malignifestations to cure you of whatever, whenever... 99.999999999999999999% pond water": "稀释后的恶性肿瘤可以治愈您的任何疾病，无论何时... 99.999999999999999999% 池塘水",
    "Granite is a rare resource, recycling techniques will reduce the need for new granite in repair tasks by 75%": "花岗岩是一种稀有资源，回收技术将使修复任务中对新花岗岩的需求减少 75%",
    "Granite Recycling": "花岗岩回收",
    "Gravel Road": "碎石路",
    "Gravel roads are a little better than dirt, especially during wet season. Caravan Speed +2": "碎石路比土路好一点，尤其是在雨季。 商队速度 +2",
    "Invent better shelves for superior vertical storage, increases the capacity of warehouses and granaries by 50%": "发明更好的货架，实现卓越的垂直存储，将仓库和粮仓的容量增加 50%",
    "Marble is a rare resource, recycling techniques will reduce the need for new marble in repair tasks by 75%": "大理石是一种稀有资源，回收技术将使修复任务中对新大理石的需求减少 75%",
    "Marble Recycling": "大理石回收",
    "Not enough points": "没有足够的点数",
    "Water Tank": "水箱",
    "Whenever a building is repaired, the mason will patch and reinforce weak points, therefore increasing the building's resistance each time it is repaired": "每当建筑物被修复时，泥瓦匠都会修补和加固薄弱点，因此每次修复时都会增加建筑物的抵抗力",
    "Game server has been disconnected...": "游戏服务器已断开...",
    "system": "系统",
    "...and we're back!": "...我们回来了！",
    "Got it": "知道了",
    "Arrow Dynamics": "箭动力学",
    "Better tools to increase the rate of cutting trees by 10%": "更好的工具使砍伐树木的速度提高 10%",
    "Construction Wood": "建筑木材",
    "Construction Wood II": "建筑木材 II",
    "Double Bit Axe": "双头斧",
    "Forest Management": "森林管理",
    "Fruit Trees": "果树",
    "Fur Hunter": "毛皮猎人",
    "Game server has been disconnected...": "游戏服务器已断开...",
    "Greatly improve the amount of fur you get per animal hunted (+50%)": "大大提高每只猎杀动物获得的毛皮数量（+50%）",
    "Hand Saw": "手锯",
    "Hunting Dogs": "猎犬",
    "Hunting Seasons": "狩猎季节",
    "Increases the time it takes to hunt in Spring by 50% in return for faster animal growth year round": "将春季狩猎所需的时间增加 50%，以换取动物全年更快的生长",
    "Lumberjacks will collect seeds from every tree cut (4 Seed Bundles)": "伐木工人将从每棵砍伐的树上收集种子（4 种子包）",
    "Lumberjacks will leave aside construction-grade wood for the lumber mill, leading to 20% faster lumber production": "伐木工人将为木材厂留下建筑级木材，从而使木材生产速度提高 20%",
    "Raise hunting dogs to help your hunters be more effective (Hunting speed +": "饲养猎犬以帮助你的猎人更高效（狩猎速度+",
    "Tree Planters": "树木种植者",
    "Two blades is better than one, at least when it comes to having to sit down and take time to sharpen the blade. Increases Log Splitter and Lumberjack rates by 15%": "两把刀片比一把好，至少在需要坐下来花时间磨刀片的时候。将伐木工和伐木工人的率提高 15%",
    "Unlocks and builds a Lumber Mill, where workers can create Lumber, which is needed for some of the more advanced buildings": "解锁并建造木材厂，工人们可以在那里制造木材，这是一些更先进的建筑所需要的",
    "Unlocks bowyers, who makes longbows and quivers of arrows for archers and creates a fletcher workshop": "解锁弓箭手，他们为弓箭手制造长弓和箭袋，并创建箭匠工作室",
    "Unlocks the Orchard building (provides fruit) and builds a free Orchard": "解锁果园建筑（提供水果）并建造一个免费的果园",
    "Unlocks the Tree Nursery, where foresters can help the forest grow": "解锁苗圃，护林员可以帮助森林生长",
    "Unlocked": "已解锁",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Undefended": "Undefended",

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
    "Slots: ": "槽位: ",
    "City Space: ": "城市空间: ",
    "Curfew: ": "宵禁：",
    "Current status: ": "当前状态：",
    "Forest Space: ": "森林空间：",
    "Fur: ": "毛皮：",
    "Hunter slots: ": "猎人槽位：",
    "Meat: ": "肉: ",
    "Money: ": "钱: ",
    "Morality: ": "道德：",
    "Queued: ": "队列：",
    "Lumberjack slots: ": "伐木工人槽位：",
    "Log Splitter slots: ": "木头切割工槽位：",
    "Wood: ": "木头：",
    "Built: ": "建成：",
    "Warehouse Capacity: ": "仓库容量：",
    "Worker Capacity: ": "工人容量：",
    "Worker Morale: ": "工人士气：",
    "Builder slots: ": "建造工槽位：",
    "Attractiveness: ": "吸引力：",
    "Gender: ": "性别: ",
    "Gamesave Id: ": "游戏保存 Id: ",
    ": Used ": ": 已使用 ",
    "Base: ": "基础: ",
    "Level ": "等级 ",
    "Contracts ": "合同 ",
    "Available for work: ": "可用工人：",
    "Points to spend: ": "可用点数：",
    "Number of livestock: ": "牲畜数量: ",
    "": "",
    "": "",
    "": "",
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
    "Auto-save": "自动保存",
    "Browser Notifications": "浏览器通知",
    "Display Tutorials": "显示教程",
    "Do Not Automatically Connect to Chat": "不自动连接到聊天",
    "Enable Particle Animations": "启用粒子动画",
    "Hide Worker Progress Bars (for slower PCs)": "隐藏工作进程进度条（对于速度较慢的电脑）",
    "Show Timestamps on Chat Messages": "在聊天消息上显示时间戳",
    "Use only cu for currency": "仅使用 cu 作为货币",
    "Use Profanity Filter": "使用脏话过滤器",
    "New Game": "新游戏",
    "Yes": "是",
    "No": "否",
    "Player": "玩家",
    "Pause": "暂停",
    "Places": "位置",
    "Council Hall": "议会厅",
    "Markets": "市场",
    "Mason's Guild": "梅森公会",
    "Military Council": "军事委员会",
    "The Drunken Mule": "醉骡子",
    "The Field": "田野",
    "The Forest": "森林",
    "The Mine": "矿山",
    "The Porcelain Tower": "瓷塔",
    "The Wall": "墙",
    " in Queue]": " 在队列里]",
    "Mason Monty": "梅森·蒙蒂",
    "available to work": "可以工作",
    "Abby": "艾比",
    "Builder": "建筑工",
    "Idle Workers": "空闲工人",
    "Log Splitter": "木头切割工",
    "Lumberjack": "伐木工",
    "Wheeeeee, a big empty field, you'll get a chance to build stuff here eventually. meanwhile, enjoy this!": "哇哦，一片空旷的土地，你最终将有机会在这里建造东西。 同时，享受这个吧！",
    " Homeopathic Medicine": " 顺势疗法药物",
    "Construction of Granary complete (+300 Civil Exp)": "粮仓建设完成（+300 民用经验）",
    "Construction of Warehouse complete (+300 Civil Exp)": "仓库建设完成（+300 民用经验）",
    "A master mason has taken up residence in your settlement, says he can help create buildings for you": "一位泥瓦匠大师已在您的定居点居住，并表示他可以帮助您建造建筑物",
    "You have unlocked Builder's Hut! Go find it in the Civil tab in the mason's guild": "您已解锁建造者小屋！ 去泥瓦匠行会的“民事”选项卡中找到它",
    "You have unlocked Firewood Camp! Go find it in the Industrial tab in the mason's guild": "您已解锁柴火营地！ 去泥瓦匠行会的工业选项卡中找到它",
    "You have unlocked Hovel! Go find it in the Housing tab in the mason's guild": "您已经解锁了小屋！ 去泥瓦匠行会的“住房”选项卡中找到它",
    "You have unlocked Hunting Lodge! Go find it in the Food tab in the mason's guild": "您已解锁狩猎小屋！ 去泥瓦匠公会的“食物”选项卡中找到它",
    "You have unlocked Logging Camp! Go find it in the Industrial tab in the mason's guild": "您已解锁伐木营地！ 去泥瓦匠行会的工业选项卡中找到它",
    "You have unlocked Town Center! Go find it in the Special tab in the mason's guild": "您已解锁市中心！ 去泥瓦匠公会的特殊选项卡中找到它",
    "New Contract: A travelling trader wishes to purchase goods from you": "新合同：旅行商人希望向您购买商品",
    "Construction of Firewood Camp complete (+100 Civil Exp)": "木柴营地建设完成（+100 民用经验）",
    "New Contract: A travelling merchant has some stuff to sell": "新合同：旅行商人有一些东西要卖",
    "Construction of Logging Camp complete (+100 Civil Exp)": "伐木场建设完成（+100 民用经验）",
    "You've unlocked Independent Contractors!": "您已经解锁了独立承包商！",
    "You've unlocked Standard Measurements!": "您已解锁标准测量！",
    ", I'm hungry. Can we go hunting for food? Dad never let me go hungry before.": "，我饿了。我们可以去打猎吗？爸爸以前从来不让我挨饿。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^活了(.+)$/,
    /^当前(.+)$/,
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
    /^([\d\.,]+), $/,
    /^([\d\.,]+)th$/,
    /^([\d\.,]+)st$/,
    /^([\d\.,]+)rd$/,
    /^([\d\.,]+)nd$/,
    /^\$([\d\.,]+)$/,
    /^([\d\.,]+) $/,
    /^\[([\d\.,]+)\]$/,
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
    [/^\"Well met, (.+),\" replied Ishna. \"We brought you here from the stream, looks like you had quite a fall\"$/, '“很高兴见到你，$1，”Ishna 回答道。 “我们把你从溪流里抱到这里来了，看来你摔得很厉害”'],
    [/^(.+)\t\t\tHello (.+)!\n\t\t\t(.+)\t$/, '$1\t\t\t你好 $2!\n\t\t\t$3\t'],
    [/^(.+) Day of (.+) Moon, (.+) \-$/, '$2 月 $1 日，$3 \-'],
    [/^: (.+) \| Builders: (.+) \| Total: (.+)$/, ': $1 \| Builders: $2 \| Total: $3'],
    [/^(.+)Expires in (.+) days$/, '$1还有 $2 天过期'],
    [/^(.+)Name: (.+)$/, '$1名称：$2'],
    [/^(.+)Camp of (.+)$/, '$1 $2 的营地'],
    [/^Unlock \((.+) point\)$/, '解锁 \($1 点数\)'],
    [/^Tech Tree \((.+) Points\)$/, '科技树 \($1 点数\)'],
    [/^(.+)New Civil Point! \((.+) unspent\)$/, '$1新的民用点！ \($2 未使用\)'],
    [/^New Civil Point! \((.+) unspent\)$/, '新的民用点！ \($1 未使用\)'],
    [/^Camp of (.+)$/, '$1 的营地'],
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
    [/^([\d\.,]+) days old$/, '活了 $1 天'],
    [/^([\d\.,]+) Workers$/, '$1 工人'],
    [/^([\d\.,]+) Town Center$/, '$1 镇中心'],
    [/^([\d\.,]+) workers away$/, '$1 工人离开了'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) online:$/, '$1 在线：'],
    [/^([\d\.,]+) XP$/, '$1 经验值'],
    [/^([\d\.,]+) coins$/, '$1 金币'],
    [/^([\d\.,]+) months ([\d\.,]+) days$/, '$1 月 $2 天'],
    [/^Lucky ([\d\.,]+)$/, '幸运 $1'],
    [/^trade level ([\d\.,]+)$/, '交易等级 $1'],
    [/^combat level ([\d\.,]+)$/, '战斗等级 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Friends: (.+)$/, '朋友：$1'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Cost: (.+) Wood, (.+) Firewood$/, '成本：$1 木头，$2 木柴'],
    [/^Cost: (.+) Firewood, (.+) Wood$/, '成本：$1 木柴，$2 木头'],
    [/^Cost: (.+) Fur$/, '成本：$1 毛皮'],
    [/^Cost: (.+)ag (.+)cu$/, '成本：$1银币 $2铜币'],
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