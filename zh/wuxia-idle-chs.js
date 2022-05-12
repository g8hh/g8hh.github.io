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
    "Achievements": "成就",
    "Agility": "敏捷",
    "Alchemy": "炼金术",
    "Auction House": "拍卖行",
    "Blacksmithing": "锻造",
    "Brush": "刷子",
    "Changelog": "变更日志",
    "Chest": "胸部",
    "Cooking": "烹饪",
    "Cultivator": "修炼者",
    "Daos": "道",
    "Dark": "深色",
    "Dexterity": "灵巧",
    "Eternal Fire": "永恒之火",
    "Experience": "经验",
    "Explore": "探索",
    "Feet": "脚",
    "Fishing": "钓鱼",
    "Fishing Rod": "钓竿",
    "Gloves": "手套",
    "Hammer": "锤子",
    "Head": "头",
    "Health": "健康",
    "Herbalism": "草药学",
    "Herbalism Gloves": "草药手套",
    "Inscription": "制符",
    "Intelligence": "智力",
    "Legs": "腿",
    "Level": "等级",
    "Logout": "登出",
    "Luck": "运气",
    "Main hand": "主手",
    "Mining": "矿业",
    "Mining Pickaxe": "采矿镐",
    "mode": "模式",
    "Off hand": "随手可得",
    "Pill Furnace": "炼丹炉",
    "Profession": "职业",
    "Professions": "职业",
    "Qi": "气",
    "Rankings": "排名",
    "Realm": "领域",
    "Ring 1": "戒指 1",
    "Ring 2": "戒指 2",
    "Sect": "宗派",
    "Settings": "设置",
    "Social": "社交",
    "Spatial Storage": "空间存储",
    "Spirit Pet": "灵宠",
    "Stamina": "耐力",
    "Stat": "统计",
    "Statistics": "统计数据",
    "Strength": "力量",
    "Techniques": "技术",
    "Value": "价值",
    "Woodcutting": "伐木",
    "Woodcutting Axe": "伐木斧",
    "WuxiaIdle": "武侠放置",
    "Close": "关闭",
    "Off Hand": "副手",
    "You unfortunately don't have any of this equipment type to equip!": "不幸的是，您没有任何此类装备可供装备！",
    ":: On the 1st day of creation, The Golden Lobster created Qi, Dopamine, and Butter. ::                                                          Passage taken from The Great Golden One.": ":: 在创作的第一天，金龙虾创造了气、多巴胺和黄油。 :: 取自 伟大的金一 的段落。",
    ") - Currency gained": ") - 获得的货币",
    "Trees everywhere for you to practice on": "随处可见的树木供您练习",
    "Turtle": "龟",
    "Turtles are life. Immortal life. Follow the turtle, seek enlightenment, attain true immortality.": "海龟是生命。不朽的生命。追随乌龟，寻求启蒙，获得真正的长生不老。",
    "UI to show daos information - not yet implemented": "显示 道 信息的 UI - 尚未实现",
    "UI to show techniques information - not yet implemented": "显示技术信息的 UI - 尚未实现",
    "Unholy Mageblade": "邪恶魔刃",
    "Usable": "可用",
    "veton": "否决权",
    "View existing orders on the Auction House or use your inventory to add ones that don't exist yet.": "查看拍卖行上的现有订单或使用您的库存添加尚不存在的订单。",
    "View sects": "查看教派",
    "Vox": "声音",
    "Walmart losin.": "沃尔玛输了。",
    "Western Lustful Temptations": "西方淫荡的诱惑",
    "Whale": "鲸",
    "When the world began, there was heaven and earth. Heaven mated with the earth and gave birth to everything in the world.": "当世界开始时，有天堂和地球。天地相合，生出世间万物。",
    "Widow Maker": "寡妇制造者",
    "WithoutContext": "没有上下文",
    "Wobbly axe": "摇摆不定的斧头",
    "Wolf tooth": "狼牙",
    "woodcutting": "木刻",
    "Woodcutting experience": "木刻体验",
    "Woodcutting Training Grounds": "伐木训练场",
    "You can have a single Dao active while exploring and doing other activities. Set it below.": "您可以在探索和进行其他活动时激活单个道。设置在下面。",
    "You can have up to four active skills to use while exploring. Set them below.": "在探索过程中，您最多可以使用四种主动技能。将它们设置在下面。",
    "You can't even tell what type of tree this came from.": "你甚至无法分辨这是来自什么类型的树。",
    "You chopped a Common Tree with your bare hands!": "你徒手砍了一棵普通树！",
    "You found a nice looking tree.. you decide to try and use your hands to chop it.": "你找到了一棵漂亮的树……你决定试着用手去砍它。",
    "You have finished exploring.": "你已经完成了探索。",
    "You leveled up 1 time!": "你升级了 1 次！",
    "You ran out of exploring time.": "你的探索时间用完了。",
    "You try woodcutting with your hands but can't seem to punch with the right angle.": "您尝试用手进行木刻，但似乎无法以正确的角度打孔。",
    "Zone": "区",
    "Zone Achievements": "区域成就",
    "Zone Information": "区域信息",
    "Zuzu": "祖祖",
    "Purchase for": "购买",
    "Rat tail": "鼠尾",
    "Reach realm level 10.": "达到境界等级 10。",
    "Realm Buster Pill": "灭界丹",
    "Realm Buster Pill Recipe": "境界克星丹配方",
    "Realm destroyer": "境界毁灭者",
    "Realm experience": "境界体验",
    "Recommended Level": "推荐等级",
    "Recruiting active, high level players.": "招募活跃的高水平球员。",
    "Reed": "芦苇",
    "Remorse": "悔恨",
    "Rewards": "奖励",
    "Ryathimus": "里亚蒂莫斯",
    "Ryathimus's fireball book": "Ryathimus的火球书",
    "Sale value": "销售价值",
    "Seal": "海豹",
    "Seal the Heavens, Become immortal.": "封天，成仙。",
    "Sect master": "宗主",
    "Sects": "教派",
    "Shadow Forest": "暗影森林",
    "ShaSeng": "沙僧",
    "Shield of Qi": "齐盾",
    "Shield of Strength": "力量之盾",
    "Shield of Thought": "思想之盾",
    "Show completed": "显示完成",
    "Show in progress": "显示进行中",
    "Show not started": "节目未开始",
    "Shredded fireball spell scroll": "碎火球法术卷轴",
    "Silent Gold Protector": "沉默的黄金保护者",
    "Silent Gold Protector +2": "沉默的黄金保护者+2",
    "Silly Potion": "愚蠢的药水",
    "Silly Potion Recipe": "愚蠢的药水配方",
    "Silver Bar": "银条",
    "Silver Bar Recipe": "银条配方",
    "Silver ore": "银矿石",
    "Skeleton bone": "骷髅骨头",
    "Small Fish": "小鱼",
    "Snake skin": "蛇皮",
    "Snake venom": "蛇毒",
    "Something Profound": "深奥的东西",
    "Soon": "很快",
    "Sort items by": "排序项目",
    "Sort sects by": "按分区排序",
    "Special Mining Pickaxe": "特殊采矿镐",
    "Spiky Balloon Fish": "尖刺气球鱼",
    "Squigly wiggly": "弯弯扭扭的",
    "Stone": "石头",
    "Stop exploring": "停止探索",
    "Success!": "成功！",
    "Sum Ting Wong": "沉廷黄",
    "Sum Ting Wong Hia": "沉庭黄喜",
    "Sunfish": "翻车鱼",
    "Sunplant": "太阳植物",
    "SuperFluffyGame": "超级蓬松游戏",
    "Surely you will uncover some grandmist": "你肯定会发现一些大雾",
    "Swamp": "沼泽",
    "Take a break": "休息一下",
    "Technique Tree": "技术树",
    "The Arching Tombs": "拱形墓葬",
    "The Ashen Vertex": "灰烬顶点",
    "The Bleak Point": "荒凉点",
    "The chance to encounter a monster.": "遇到怪物的机会。",
    "The chance to find a spot for fishing.": "有机会找到钓鱼的地方。",
    "The chance to find resources to gather.": "找到收集资源的机会。",
    "The chance to find some herbs to gather.": "有机会找到一些草药来收集。",
    "The chance to harvest Leaf": "收获叶子的机会",
    "The Cold Catacombs": "寒冷的地下墓穴",
    "The creator of the world.": "世界的创造者。",
    "The Dank Depths": "潮湿的深渊",
    "The Elder Dimension": "上古维度",
    "The Ghostly Tundra": "幽灵苔原",
    "The Golden Key": "金钥匙",
    "The Grand Myriad Dragon Dao Palace is the enlightened choice for choosey immortals. Join us and break through the gate of reality.": "太上万龙道宫，是挑仙的开悟之选。加入我们，突破现实之门。",
    "The Guardian Dimension": "守护者维度",
    "The Hibernator": "冬眠者",
    "The Mount Hua Sect": "华山派",
    "The Possessed Tower": "被占有的塔",
    "The Unknown Forest": "未知的森林",
    "The Viking Helmet": "维京头盔",
    "The Volcanic Garden": "火山花园",
    "The Wind Bringer": "送风者",
    "The Wind Pusher": "风推者",
    "The Wind Shaker": "震风者",
    "This is not implemented yet.": "这还没有实现。",
    "Thorny plant": "带刺的植物",
    "Titanium Shooter": "钛射手",
    "Toxic Paper": "有毒纸",
    "Toxic Paper Recipe": "有毒纸配方",
    "Toxic wood": "有毒木材",
    "Training Sword": "训练剑",
    "Inventory": "存货",
    "Iron axe": "铁斧",
    "Iron Bar": "铁条",
    "Iron Bar Recipe": "铁棒食谱",
    "Iron ore": "铁矿",
    "Item": "物品",
    "Item Achievements": "项目成就",
    "Jellyfish": "海蜇",
    "Jianchi": "剑池",
    "Jonathis": "乔纳西斯",
    "Journey to the West. Welcoming the Best.": "西游记。欢迎最好的。",
    "Large Fish": "大鱼",
    "Leaf": "叶子",
    "Learn how to make some common paper": "学习如何制作一些普通纸",
    "Learn how to make this silly potion, you're not even sure if it does anything.": "学习如何制作这种愚蠢的药水，你甚至不确定它是否有任何作用。",
    "Learn how to take your stones and make them into big hot stones.": "学习如何把你的石头做成热的大石头。",
    "Learned Daos": "学道",
    "Learned Techniques": "学到的技术",
    "Leftright plant": "左右植物",
    "Level not high enough": "级别不够高",
    "Level Required": "要求等级",
    "Levels": "级别",
    "Little Red Torpedo": "小红鱼雷",
    "Loading...": "正在加载...",
    "Lobster": "龙虾",
    "Lobster Lobster Lobster": "龙虾龙虾龙虾",
    "Loot (": "战利品（",
    "Lowlands": "低地",
    "Mace": "锤",
    "Magical Book": "魔法书",
    "Malice": "恶意",
    "Materials": "材料",
    "Medium Fish": "中型鱼",
    "Members": "成员",
    "Militaristic sect created with the sole purpose of combating and suppressing the Silent Night": "以打击和镇压平安夜为唯一目的而创建的军国主义教派",
    "Military Chopper": "军用直升机",
    "Mining Training Grounds": "采矿训练场",
    "Minus T E N million coins": "减去 T E N 百万硬币",
    "Missing materials": "缺少材料",
    "Mithril Bar": "秘银锭",
    "Mithril Bar Recipe": "秘银棒配方",
    "Mithril ore": "秘银矿石",
    "Money gone": "钱没了",
    "Monster": "怪物",
    "Monster Achievements": "怪物成就",
    "Monster stats": "怪物数据",
    "Muz": "穆兹",
    "Mysterious box": "神秘盒子",
    "Mystical Armor": "神秘盔甲",
    "Mystical Bar": "神秘酒吧",
    "Mystical Bar Recipe": "神秘酒吧食谱",
    "Mystical ore": "神秘矿石",
    "Name": "姓名",
    "Named after the mountain it was built, on the sects martial arts focus on the sword and the plum blossoms that propagate the mountain": "因建山而得名，门派武术重在剑，梅花传山",
    "Nameless": "无名",
    "NoKnownIP": "未知IP",
    "none": "没有",
    "Northern Heavenly Sect": "北天宗",
    "Ocean lily": "海洋百合",
    "Octopus": "章鱼",
    "Orc liver": "兽人肝脏",
    "owentr": "中心",
    "Personal recipes": "个人食谱",
    "Phantom Strike": "幻影打击",
    "Pits of the Mourning Bear": "丧熊坑",
    "Plain axe": "普通斧头",
    "Plain Blacksmith Hammer": "普通铁匠锤",
    "Plain Boots": "纯色靴子",
    "Plain Brush": "普通刷",
    "Plain Fields": "平原领域",
    "Plain Fire": "平原火",
    "Plain Pill Furnace": "普通炼丹炉",
    "Plain Gloves": "普通手套",
    "Copper coins": "铜币",
    "Crab": "螃蟹",
    "Crafting Achievements": "制作成就",
    "Create a sect": "创建教派",
    "Cultivator Achievements": "修炼者成就",
    "Curvy Wurvy": "弯曲弯曲",
    "daeday": "大日子",
    "Dagger Sword": "匕首剑",
    "Dao Tree": "道树",
    "Decent Sword": "像样的剑",
    "Demon Immortal Sect": "魔仙宗",
    "DESC": "倒序",
    "Dragon egg": "龙蛋",
    "Dragon plant": "龙植物",
    "Dragon's Lair": "龙巢",
    "Driftwood Bow": "浮木弓",
    "Enchant": "附魔",
    "Equipment": "设备",
    "Events": "活动",
    "Events encountered": "遇到的事件",
    "Experience gained": "获得的经验",
    "Exploration Log -": "探索日志 -",
    "Exploration log (last 100": "探索日志（最后 100",
    "Faceslappers": "打脸者",
    "Fern": "蕨类",
    "Fire Paper": "防火纸",
    "Fire Paper Recipe": "防火纸食谱",
    "Fire wood": "火木",
    "Fish Deboner": "鱼去骨机",
    "Fishing Training Grounds": "钓鱼训练场",
    "Flamespire Cave": "火焰尖塔洞穴",
    "Flimsy Whip": "脆弱的鞭子",
    "Flying plant": "飞行植物",
    "Foothills": "山麓",
    "for every face, we have two palms ready": "对于每一张脸，我们都准备好两只手掌",
    "Forest of Spirits": "精灵之森",
    "Frozen Paper": "冷冻纸",
    "Frozen Paper Recipe": "冷冻纸配方",
    "Frozen wood": "冷冻木材",
    "Gathering Achievements": "收集成就",
    "Gathering events": "收集活动",
    "Genius sect": "天才宗派",
    "Glitter Picker": "闪光选择器",
    "Glitter Shield": "闪光盾",
    "Global recipes": "全球食谱",
    "Goblin underwear": "地精内衣",
    "God plant": "神植",
    "Gold Bar": "金条",
    "Gold Bar Recipe": "金条食谱",
    "Gold Fishing Rod": "黄金钓竿",
    "Gold ore": "金矿",
    "Golden arrow": "金箭",
    "Golden axe": "金斧",
    "Golden Lobster": "金龙虾",
    "Grand Myriad Dragon Dao Palace": "大万龙道宫",
    "Green Meadows": "绿色草地",
    "Green plant": "绿色植物",
    "Grieving Ravager": "悲伤的破坏者",
    "Hammerhead Shark": "双髻鲨",
    "Heartstring": "心弦",
    "Herbalism Training Grounds": "草药学训练场",
    "Herbs everywhere for you to practice on": "到处都是草药供您练习",
    "Highlands": "高地",
    "History": "历史",
    "Home Depot": "家得宝",
    "HonkyTonk": "鸣人",
    "HungLow": "挂低",
    "I will rule the heavns with a big mac and a mcflurry, my whoper will cause the 13 galaxy chocolate bars to trenble.Join now and gut 10 purcent of ur nekst purchas off big Rocks. 200 iq minmum to aply.": "我将用一个巨无霸和一个 麦旋风 统治天堂，我的主人将使 13 个银河巧克力棒成为高音。现在加入并从大岩石中掏出 10% 的你的 nekst 购买。 200 智商最低申请。",
    "Ice and Fire": "冰与火",
    "Immortal Turtle": "不死龟",
    "inscription": "题词",
    "Amuhn": "阿穆恩",
    "Ancient Book": "古书",
    "Apply": "申请",
    "Argrave": "阿格雷夫",
    "Arrow Fish": "箭鱼",
    "ASC": "正序",
    "Back": "后退",
    "Bandit's glass eye": "强盗的玻璃眼",
    "Basic Health Pill": "基本保健丸",
    "Basic Health Pill Recipe": "基本保健药方",
    "Basic Qi Pill": "元气丸",
    "Basic Qi Pill Recipe": "基本气丸配方",
    "Basic Spear": "基本长矛",
    "Bear pelt": "熊皮",
    "Become the sect master of your own sect!": "成为自己宗门的宗主！",
    "Beginner": "初学者",
    "Better Leaf": "更好的叶子",
    "Big Arrow Mister Fish": "大箭鱼先生",
    "Big Hot Stone": "大热石",
    "Big Hot Stone Recipe": "大热石食谱",
    "Black White Sect": "黑白派",
    "blacksmithing": "锻造",
    "Blurpy": "模糊",
    "Book of the Dead": "死者之书",
    "BookaDookaShooka": "BookaDookaShooka",
    "BookaDookaShooka. Name by db himself": "BookaDookaShooka。 db自己的名字",
    "Boxy plant": "方形植物",
    "Browse existing sects to join and rise up the ranks!": "浏览现有教派加入并提升行列！",
    "Bush": "衬套",
    "Can inscribe 2": "可以刻2",
    "Caveman axe": "穴居人斧头",
    "Chenmo": "陈沫",
    "Cherry Paper": "樱桃纸",
    "Cherry Paper Recipe": "樱桃纸食谱",
    "Cherry plant": "樱桃厂",
    "Cherry wood": "樱桃木",
    "Chieftain Spear": "酋长矛",
    "Common Herbalism Gloves": "普通草药手套",
    "Common Paper": "普通纸",
    "Common Paper Recipe": "普通纸配方",
    "Common Whip": "普通鞭子",
    "Common wood": "普通木材",
    "Confusion Pill": "迷惑丸",
    "Confusion Pill Recipe": "迷惑丸配方",
    "Cooked Arrow Fish": "煮熟的箭鱼",
    "Cooked Arrow Fish Recipe": "煮熟的箭鱼食谱",
    "Cooked Big Arrow Mister Fish": "熟大箭鱼先生",
    "Cooked Big Arrow Mister Fish Recipe": "煮熟的大箭鱼先生食谱",
    "Cooked Crab": "熟蟹",
    "Cooked Crab Recipe": "熟蟹食谱",
    "Cooked Hammerhead Shark": "煮熟的双髻鲨",
    "Cooked Hammerhead Shark Recipe": "熟双髻鲨食谱",
    "Cooked Jellyfish": "熟水母",
    "Cooked Jellyfish Recipe": "熟水母食谱",
    "Cooked Large Fish": "煮熟的大鱼",
    "Cooked Large Fish Recipe": "熟大鱼食谱",
    "Cooked Little Red Torpedo": "煮熟的小红鱼雷",
    "Cooked Little Red Torpedo Recipe": "煮熟的小红鱼雷食谱",
    "Cooked Lobster Recipe": "熟龙虾食谱",
    "Cooked Medium Fish": "熟中鱼",
    "Cooked Medium Fish Recipe": "熟中鱼食谱",
    "Cooked Octopus": "熟章鱼",
    "Cooked Octopus Recipe": "熟章鱼食谱",
    "Cooked Seal": "熟海豹",
    "Cooked Seal Recipe": "熟海豹食谱",
    "Cooked Small Fish": "煮熟的小鱼",
    "Cooked Small Fish Recipe": "煮熟的小鱼食谱",
    "Cooked Spiky Balloon Fish": "煮熟的尖刺气球鱼",
    "Cooked Spiky Balloon Fish Recipe": "煮熟的尖刺气球鱼食谱",
    "Cooked Sunfish": "熟翻车鱼",
    "Cooked Sunfish Recipe": "熟翻车鱼食谱",
    "Cooked Turtle": "煮熟的乌龟",
    "Cooked Turtle Recipe": "熟龟食谱",
    "Cooked Whale": "熟鲸",
    "Cooked Whale Recipe": "熟鲸食谱",
    "A sect filled with temptations and lust for your avid XianXia and Wuxia peeps": "一个对你狂热的仙侠和武侠偷窥充满诱惑和欲望的宗派",
    "alchemy": "炼金术",
    "Explore here": "探索这里",
    "exploring": "探索",
    "herbalism": "草药学",
    "Herbalism experience": "草药学经验",
    "Monster loot": "怪物战利品",
    "Monsters": "怪物",
    "Not much danger lurks in these fields.": "在这些领域潜伏的危险并不多。",
    "The chance to catch Small Fish.": "抓住小鱼的机会。",
    "The chance to chop Common wood": "砍伐普通木材的机会",
    "The chance to encounter the Goblin monster.": "有机会遇到哥布林怪物。",
    "The chance to encounter the Snake monster.": "遇到蛇怪的机会。",
    "The chance to find some ore to mine.": "有机会找到一些矿石来开采。",
    "The chance to find some trees to chop for wood.": "有机会找到一些树木砍伐木材。",
    "The chance to harvest Green plant": "收获绿色植物的机会",
    "The chance to mine Stone": "开采石头的机会",
    "You found some sacred herbs.. you decide to try and pluck them with just your hands (wait isn't that what you're supposed to do!?": "你找到了一些神圣的草药......你决定试着用手采摘它们（等等，这不是你应该做的吗！？",
    "You plucked a Leaf with your bare hands!": "你徒手摘了一片叶子！",
    "You thought it looked pretty, so you put it in a pot.": "你觉得它看起来很漂亮，所以你把它放在锅里。",
    "You try gathering the herbs with your hands but can't seem to pull them out.": "您尝试用手收集草药，但似乎无法将它们拔出。",
    "You're currently": "你当前",
    "deaths": "死亡",
    "event": "事件",
    "fishing": "钓鱼",
    "Fishing experience": "钓鱼体验",
    "Goblin": "地精",
    "herbalism": "草药学",
    "Herbalism experience": "草药经验",
    "Item Information": "项目信息",
    "kills and": "杀死和",
    "Material": "材料",
    "mining": "矿业",
    "Mining experience": "采矿经验",
    "monster": "怪物",
    "Monster loot": "怪物战利品",
    "Monsters": "怪物",
    "Not much danger lurks in these fields.": "在这些领域潜伏的危险并不多。",
    "Not sure why you're collecting this.": "不知道你为什么要收集这个。",
    "Quantity": "数量",
    "Rat": "老鼠",
    "Sell": "出售",
    "Sell (": "出售 （",
    "Snake": "蛇",
    "The chance to catch Small Fish.": "抓住小鱼的机会。",
    "The chance to find some ore to mine.": "有机会找到一些矿石来开采。",
    "The chance to harvest Bush": "收获布什的机会",
    "Type": "类型",
    "Very descriptive plant.": "非常具有描述性的植物。",
    "Why didn't you throw this back?": "你为什么不把这个扔回去？",
    "Why..": "为什么..",
    "You found a mineral node.. you decide to try and break it apart.": "你找到了一个矿物节点……你决定试着把它拆开。",
    "You plucked a Stone with your bare hands!": "你徒手拔了一块石头！",
    "You thought it looked pretty, so you put it in a pot.": "你觉得它看起来很漂亮，所以你把它放在锅里。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "Price: ": "价格: ",
    "Steel axe": "钢斧",
    "The Golden Dagger": "金色匕首",
    "The Golden Poker": "金色扑克",
    "Ironbark Bolter": "铁皮爆矢枪",
    "Plain Fishing Rod": "普通钓鱼竿",
    "Plain Mining Pickaxe": "普通采矿镐",
    "Plain Ring": "普通戒指",
    "Dawn, Conqueror of Dismay": "黎明，沮丧的征服者",
    "Deathraze": "灭亡",
    "Enhancement Scroll ": "强化卷轴 ",
    "Frozen Dagger": "冰冻匕首",
    "Golden Shield": "金色护盾",
    "Golden Skull": "金色骷髅",
    "Heavy Armor": "重甲",
    "Black iron axe": "黑铁斧",
    "Braintickler": "痒痒挠",
    "Bright Fire": "明火",
    "Bronze axe": "青铜斧",
    "Combat Trousers": "战斗裤",
    "Common Beast Core ": "普通野兽核心 ",
    "Common Robe": "普通礼服",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)\:(\d+)\:(\d+)$/,
    /^(\d+)$/,
    /^(.+) PM$/,
    /^(.+) PM$/,
    /^(.+) AM$/,
    /^欢迎 (.+) 来到 放置大陆！$/,
    /^\[(\d+),(\d+)\]$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)\-([\d\.,]+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
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
    [/^Current\:(.+) \/ Next\: (.+)$/, '当前\: $1 \/ 下一个\: $2'],
    [/^spent (.+) gold here!$/, '在这里花了 $1 金币！'],
    [/^(\d+) Scroll\(s$/, '$1 卷轴'],
    [/^(\d+) hours$/, '$1 小时'],
    [/^(\d+) Recipe$/, '$1 配方'],
    [/^The Rat \#(\d+) attacked you(.+) for (.+) damage.$/, '老鼠 \#$1 攻击你 $2 造成 $3 点伤害。'],
    [/^The Snake \#(\d+) attacked you(.+) for (.+) damage.$/, '蛇 \#$1 攻击你 $2 造成 $3 点伤害。'],
    [/^The Rat \#(\d+)\'s attack is puny and did no damage to you.$/, '老鼠 \#$1 的攻击很微弱，对你没有任何伤害。'],
    [/^The Snake \#(\d+)\'s attack is puny and did no damage to you.$/, '蛇 \#$1 的攻击很微弱，对你没有任何伤害。'],
    [/^You attacked the Rat \#(.+) for (.+) damage.$/, '你攻击了 老鼠 \#$1 造成 $2 点伤害。'],
    [/^You attacked the Snake \#(.+) for (.+) damage.$/, '你攻击了 蛇 \#$1 造成 $2 点伤害。'],
    [/^You regenerated health at a rate of (.+) health\/second, you now have (.+) health.$/, '你以 $1 生命值\/秒的速度恢复生命值，现在你有 $2 生命值。'],
    [/^You encountered a Rat \#(\d+) and Snake \#(\d+)!$/, '你遇到了 老鼠 \#$1 和 蛇 \#$2！'],
    [/^You encountered a Rat \#(\d+)!$/, '你遇到了 老鼠 \#$1！'],
    [/^You killed the Rat \#(\d+)!$/, '你杀死了 老鼠 \#$1！'],
    [/^You killed the Snake \#(\d+)!$/, '你杀死了 蛇 \#$1！'],
    [/^Your attack is puny and did no damage to the Snake \#(\d+).$/, '你的攻击是微不足道的，并没有对 蛇 \#$1 造成伤害。'],
    [/^Your attack is puny and did no damage to the Rat \#(\d+).$/, '你的攻击是微不足道的，并没有对 老鼠 \#$1 造成伤害。'],
    [/^Time spent in zone: (.+) minutes, (.+) seconds$/, '在区域中花费的时间：$1 分 $2 秒'],
    [/^Touched (\d+) times$/, '触碰 $1 次'],
    [/^CON \+(\d+)$/, '体质 \+$1'],
    [/^HP \+(\d+)$/, '生命值 \+$1'],
    [/^INT \+(\d+)$/, '智力 \+$1'],
    [/^STR \+(\d+)$/, '力量 \+$1'],
    [/^GOLD \+(\d+)$/, '金币 \+$1'],
    [/^You have (.+) ILP$/, '你有 $1 ILP'],
    [/^Buy for (.+) gold$/, '购买需要 $1 金币'],
    [/^(.+) has (.+) stamina$/, '$1 有 $2 耐力'],
    [/^Your next upgrade costs (.+) ILP. Total upgrades\: (.+).$/, '您的下一次升级费用为 $1 ILP。 升级总数：$2。'],
    [/^You are a level (\d+)\/(\d+) Generalist. Your adventure will begin in Norkos.$/, '您是一个$1\/$2级的全能玩家。 您的冒险之旅将在诺科斯开始。'],
    [/^Generalize \((\d+) Stamina$/, '一般化 \($1 耐力'],
    [/^Current\: (\d+) ILP \/ Next\: (\d+) ILP$/, '当前\: $1 ILP / 下一个\: $2 ILP'],
    [/^Current\: (\d+)q \/ Next\: (\d+)q$/, '当前\: $1q / 下一个\: $2q'],
    [/^Current\: (.+)s \/ Next\: (.+)s$/, '当前\: $1s / 下一个\: $2s'],
    [/^Current\: (\d+) Lv. \/ Next\: (\d+) Lv.$/, '当前\: $1 级 / 下一个\: $2 级'],
    [/^Current\: (.+)\% \/ Next\: (.+)$/, '当前\: $1\% \/ 下一个\: $2'],
    [/^You can make a guild for (.+) gold.$/, '您可以花费 $1 金币建立1个公会。'],
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
}();
