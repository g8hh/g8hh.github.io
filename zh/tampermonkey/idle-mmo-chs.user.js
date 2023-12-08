// ==UserScript==
// @name         idle-mmo-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.26
// @description  Idle MMO（https://web.idle-mmo.com/）游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://web.idle-mmo.com/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/idle-mmo-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/idle-mmo-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2023/12/08 09:32
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
    "* required": "* 必需的",
    "© 2023 Galahad Creative Ltd. All rights reserved.": "© 2023 加拉哈德创意有限公司。保留所有权利。",
    "<": "<",
    "<<": "<<",
    ">": ">",
    ">>": ">>",
    "Agree to our": "同意我们的",
    "Agree to receiving": "同意接收",
    "Already have an account?": "已经有帐户？",
    "Already have an account?": "已有帐户？",
    "An": "一个",
    "and": "和",
    "Back": "返回",
    "Character Name": "角色名字",
    "Checking...": "正在检查...",
    "Class": "职业",
    "Code of Conduct": "行为准则",
    "Company": "公司",
    "Cookie Policy": "Cookie 政策",
    "Cookie Policy": "Cookie 策略",
    "Effects": "效果",
    "Equipment": "装备",
    "Forsaken": "被遗忘者",
    "From the creators of SimpleMMO": "来自 SimpleMMO 的创建者",
    "Galahad Creative Ltd.": "加拉哈德创意有限公司",
    "Go on an epic adventure, hunt diverse enemies, embark on dungeons expeditions and defeat world bosses even while taking a nap!": "踏上史诗般的冒险，追捕不同的敌人，踏上地下城探险之旅，甚至在小睡的时候也能击败世界首领！",
    "I have a referral code": "我有推荐码",
    "idle": "放置",
    "Join Us On Discord": "加入我们的 Discord",
    "Log in": "登录",
    "Login": "登录",
    "Marketing Emails": "营销电子邮件",
    "Master of Archery and Dexterity.": "射箭和敏捷大师。",
    "Master of Daggers and Speed.": "匕首与速度大师。",
    "Master of Strength.": "力量大师。",
    "MMORPG experience": "大型多人在线角色扮演游戏体验",
    "Next": "下一个",
    "Play Now": "开始游戏",
    "Play the game on hard mode.": "在困难模式下玩游戏。",
    "Privacy Policy": "隐私政策",
    "Privacy Policy": "隐私政策",
    "Publishing deep and extensive digital products under the veneer of an effortless user experience since 2020.": "自 2020 年以来，在轻松的用户体验的幌子下发布深入而广泛的数字产品。",
    "Ranger": "游侠",
    "Read more.": "阅读更多。",
    "Shadowblade": "暗影之刃",
    "Starting Skin": "起始皮肤",
    "Talents": "人才",
    "Terms of Service": "服务条款",
    "Terms of Service": "服务条款",
    "The open beta is now available!": "公开测试版现已推出！",
    "This is what your character will be known as. It must be unique and alphanumeric only.": "这就是您的角色的名称。 它必须是唯一的且仅由字母数字组成。",
    "This name is available": "该名称可用",
    "Warrior": "战士",
    "Wiki": "维基",
    "The name field must be at least 4 characters.": "名称字段必须至少包含 4 个字符。",
    "The name field must only contain letters and numbers.": "名称字段只能包含字母和数字。",
    "Alchemy": "炼金术",
    "ALT + .": "ALT + .",
    "ALT + /": "ALT+/",
    "BETA": "测试版",
    "Campaign": "活动",
    "Character": "角色",
    "Character ID": "角色ID",
    "Click to copy": "点击复制",
    "Close sidebar": "关闭侧边栏",
    "Community": "社区",
    "community is ready to assist. Join us there, and benefit from the support and advice of our friendly and knowledgeable player base.": "社区已准备好提供协助。 加入我们，并从我们友好且知识渊博的玩家群的支持和建议中受益。",
    "Cooking": "烹饪",
    "Feed": "喂养",
    "Fishing": "钓鱼",
    "For every friend you refer, you will receive": "您推荐的每一位朋友，您都会收到",
    "Forge": "锻造",
    "Friends": "朋友",
    "Getting Started": "入门",
    "here": "这里",
    "How many do you want to use?": "您想使用多少个？",
    "Inventory": "仓库",
    "Invite your friends and receive rewards": "邀请好友并获得奖励",
    "It looks like you have no friends.": "看上去你还没有朋友。",
    "Leaderboard": "排行榜",
    "Log out": "登出",
    "Map": "地图",
    "Market": "市场",
    "Membership": "会员",
    "Mining": "采矿",
    "More": "更多",
    "No Friends": "暂无朋友",
    "Open profile": "打开个人资料",
    "Pets": "宠物",
    "Play": "玩",
    "Please enter 3 or more characters.": "请输入 3 个或更多字符。",
    "Press": "按",
    "Press and hold to drag": "按住可拖动",
    "Received": "已收到",
    "Refer a friend": "邀请好友",
    "Sent": "已发送",
    "Settings": "设置",
    "Should you need further assistance or find the guide lacking, our": "如果您需要进一步帮助或发现缺少指南，我们的",
    "Skills": "技能",
    "Smelting": "冶炼",
    "Switch Character": "切换角色",
    "The rewards will be distributed when your friend has confirmed their email address.": "当您的朋友确认了他们的电子邮件地址后，奖励将会发放。",
    "to get started.": "开始。",
    "to help you get started. is essentially a straightforward manual that covers many of the need-to-knows.": "帮助您入门。 本质上是一本简单明了的手册，涵盖了许多需要了解的内容。",
    "Vendor": "商店",
    "View notifications": "查看通知",
    "We're excited to announce the launch of the IdleMMO beta! Our team has put in tremendous effort to craft this game, and we can't wait for you to dive into it.": "我们很高兴地宣布推出 IdleMMO 测试版！ 我们的团队为制作这款游戏付出了巨大的努力，我们迫不及待地想让您投入其中。",
    "We've created a handy": "我们创建了一个方便的",
    "Welcome!": "欢迎！",
    "Woodcutting": "伐木",
    "You": "你",
    "You don't have any food items in your inventory.": "您的库存中没有任何食品。",
    "You have no notifications": "您没有任何通知",
    "Your friends will also receive": "您的好友也会收到",
    "Your invitation link:": "您的邀请链接：",
    "Your referral code:": "您的邀请码：",
    "Account": "帐户",
    "Adjust your profile settings.": "调整您的个人资料设置。",
    "Any settings you adjust here only apply to your current character": "您在此处调整的任何设置仅适用于您当前的角色",
    "Appear Offline": "显示为离线",
    "Character Preferences": "角色偏好",
    "Character Settings": "角色设定",
    "Display Active Action": "显示主动动作",
    "Display the amount of tokens you have on your profile.": "显示您的个人资料中拥有的代币数量。",
    "Display Tokens": "显示代币",
    "Enable/disable membership boosts.": "启用/禁用会员提升。",
    "Have your status display as offline.": "将您的状态显示为离线。",
    "Membership Boosts": "会员提升",
    "Profile": "个人资料",
    "Show/hide your active action on your profile to other players.": "在您的个人资料中向其他玩家显示/隐藏您的主动操作。",
    "About": "关于",
    "Accuracy": "准确度",
    "Active Effects": "主动效果",
    "Activity": "活动",
    "Additional Stats": "附加统计数据",
    "Agility": "敏捷",
    "All Time": "整天",
    "Attack Power": "攻击力",
    "Bartering": "物物交换",
    "Combat": "战斗",
    "Combat Level": "战斗等级",
    "Core Stats": "核心统计数据",
    "Critical Chance": "暴击几率",
    "Critical Damage": "暴击伤害",
    "Daily Reward": "每日奖励",
    "Damage": "伤害",
    "Defence": "防御",
    "Dexterity": "灵巧",
    "Dexterity increases your accuracy.": "敏捷性可以提高你的准确性。",
    "Edit": "编辑",
    "EXP until next level": "经验值到达下一级",
    "Felling Axe": "伐木斧",
    "Fishing Rod": "钓竿",
    "Gold": "黄金",
    "Health": "生命值",
    "Hunting Mastery": "狩猎精通",
    "Level": "等级",
    "Movement Speed": "移动速度",
    "No Data": "无数据",
    "Obtained via Class": "通过职业获得",
    "of": "",
    "Online": "在线",
    "Permanent": "永久",
    "Pickaxe": "镐子",
    "Protection": "防护",
    "Quick Heal": "快速治愈",
    "Redeem": "领取",
    "Redeem Daily Reward": "领取每日奖励",
    "Shadow Mastery": "暗影精通",
    "Simple Felling Axe": "简易伐木斧",
    "Simple Fishing Rod": "简易钓鱼竿",
    "Simple Pickaxe": "简单的镐",
    "Skins": "皮肤",
    "Speed": "速度",
    "Speed increases your agility.": "速度可以提高你的敏捷性。",
    "Status": "状态",
    "Strength": "力量",
    "This character has no bio.": "该角色没有简介。",
    "This character has not played enough for their data to be tracked.": "该角色游戏时长太短，无法追踪其数据。",
    "This decreases your damage you receive against opponents.": "这会减少对手对你造成的伤害。",
    "This increases your damage against opponents.": "这会增加你对对手的伤害。",
    "Tokens": "代币",
    "Update Bio": "更新简介",
    "Your daily reward is ready.": "您的每日奖励已准备好。",
    "Yule Mastery": "圣诞精通",
    "Cancel": "取消",
    "EXP": "经验值",
    "Inspect Item": "查看物品",
    "Items Gathered": "收集的物品",
    "Next item in": "下个物品还有",
    "Seconds": "秒",
    "Start": "开始",
    "strength": "力量",
    "Time Spent": "花费的时间",
    "Total Experience": "总经验",
    "woodcutting": "伐木",
    "You have started cutting Oak Log.": "您已开始切割橡木原木。",
    "Your Progress": "您的进度",
    "(including": "（包括",
    "% tax on every item sold.": "每件售出商品的税费百分比。",
    "% tax)": "％ 税）",
    "Actions": "行动",
    "Create Market Listing": "创建市场列表",
    "Create Purchase Order": "创建收购订单",
    "Duration": "持续时间",
    "Each": "每个",
    "Extremely Common": "极其常见",
    "Gathered via Mining": "通过采矿收集",
    "How Much": "多少钱",
    "Information": "信息",
    "It looks like no items have been placed on the market.": "市场上似乎还没有任何商品。",
    "Listed by": "卖家",
    "listings.": "清单。",
    "Market Listings": "市场清单",
    "Max": "最大限度",
    "NO ITEM TIER HAS BEEN SET.": "尚未设置任何物品等级。",
    "No Listings": "没有清单",
    "Ore": "矿石",
    "Price": "价格",
    "Purchase Orders": "收购订单",
    "purchase orders.": "收购订单。",
    "Quality": "质量",
    "Quantity": "数量",
    "Rarity": "稀有度",
    "Standard": "标准",
    "This listing will incur a": "此清单将产生",
    "Tier": "等级",
    "Total Cost": "总成本",
    "Type": "类型",
    "Vendor Value": "商店价值",
    "View more listings": "查看更多清单",
    "You can create a maximum of": "您最多可以创建",
    "Your Character": "你的角色",
    "A bustling and opulent metropolis filled with towering spires, grand architecture, and vibrant markets. The city is a hub of culture, commerce, and diverse inhabitants.": "一座繁华富丽的大都市，充满了高耸的尖塔、宏伟的建筑和充满活力的市场。 这座城市是文化、商业和多元化居民的中心。",
    "A dense and enchanted forest shrouded in mystery. The trees seem to whisper secrets, and magical creatures dwell within. The atmosphere is ethereal and filled with wonders.": "一片茂密而迷人的森林笼罩在神秘之中。 树木似乎在低声诉说秘密，神奇的生物居住在其中。 气氛空灵而充满奇迹。",
    "A hidden sanctuary nestled deep within a mystical desert, where a shimmering pool reflects the moonlight, granting eternal life and bestowing visitors with rejuvenating magic.": "一个隐藏在神秘沙漠深处的圣地，波光粼粼的水池反射着月光，赋予游客永恒的生命，并赋予游客恢复活力的魔法。",
    "A humble and peaceful countryside farm. It is filled with green fields, a cozy farmhouse, and friendly farm animals.": "一个简陋而宁静的乡村农场。 这里充满了绿色的田野、舒适的农舍和友善的农场动物。",
    "A mystical island enveloped in perpetual fog. Eerie whispers and strange apparitions can be encountered here, hinting at ancient secrets and hidden treasures.": "一座永远笼罩在迷雾之中的神秘岛屿。 在这里可以遇到令人毛骨悚然的低语和奇怪的幽灵，暗示着古老的秘密和隐藏的宝藏。",
    "A remote mountaintop observatory where the player can gaze into the cosmos. It offers a mesmerizing view of the stars, planets, and other celestial phenomena.": "一个偏远的山顶天文台，玩家可以在那里凝视宇宙。 它提供了恒星、行星和其他天体现象的迷人视角。",
    "A subterranean wonderland adorned with glittering crystals of various colors. The caves are home to luminescent creatures and rare minerals, creating a breathtaking sight.": "一个地下仙境，装饰着各种颜色的闪闪发光的水晶。 这些洞穴是发光生物和稀有矿物的家园，创造出令人惊叹的景象。",
    "A towering mountain peak that scrapes the heavens. Climbing it is a challenge, but reaching the summit rewards the player with breathtaking views of the world below.": "一座高耸入云的山峰。 攀登它是一项挑战，但到达顶峰后玩家可以欣赏到下面世界的壮丽景色。",
    "Air Elemental": "空气元素",
    "An ethereal realm suspended in the sky, where lush, vibrant gardens hover amidst wisps of mist, their radiant flora nourished by the mystical energy of the floating islands.": "这是一个悬浮在天空中的空灵境界，郁郁葱葱、生机勃勃的花园盘旋在缕缕薄雾中，它们的光彩照人的植物群受到漂浮岛屿的神秘能量的滋养。",
    "An immense fortress floating high above the clouds, accessible only by airships or powerful magic. It serves as a seat of power for the realm's rulers and houses a repository of arcane knowledge.": "一座巨大的堡垒漂浮在云层之上，只能通过飞艇或强大的魔法才能进入。 它是王国统治者的权力宝座，也是神秘知识的宝库。",
    "Arboreal Labyrinth": "树栖迷宫",
    "Bank": "银行",
    "Basillisk": "蛇怪",
    "Black Bear": "黑熊",
    "Bloodmoon Manor": "血月庄园",
    "Boar": "公猪",
    "Buffalo": "水牛",
    "Celestial Enclave": "天界",
    "Chromite Ore": "铬铁矿矿",
    "Copper Ore": "铜矿",
    "Crystal Forge": "水晶熔炉",
    "Cultist": "邪教徒",
    "Cursed Asylum": "被诅咒的庇护所",
    "Deer": "鹿",
    "Distance": "距离",
    "Djinn": "神灵",
    "Duck": "鸭子",
    "Dungeons": "地下城",
    "Dwarven Warrior": "矮人战士",
    "Earth Elemental": "土元素",
    "Eden's Embrace": "伊甸园的拥抱",
    "Elephant": "大象",
    "Elk": "麋鹿",
    "Enemies": "敌人",
    "ENOZI": "伊诺兹",
    "Fire Elemental": "火元素",
    "Forgotten Archives": "被遗忘的档案",
    "Frostbite Spire": "霜冻尖塔",
    "Goblin": "哥布林",
    "Goblin King": "哥布林王",
    "Golem": "魔像",
    "Gorgon": "戈尔贡",
    "Griffon": "狮鹫",
    "Harpy": "鹰身女妖",
    "Iron Ore": "铁矿",
    "Isadora": "伊莎多拉",
    "Lion": "狮子",
    "Lurka Stonefist": "卢卡·石拳",
    "Malgazar": "马尔加扎尔",
    "Minotaur": "牛头怪",
    "Mirage Citadel": "幻影城堡",
    "Moose": "驼鹿",
    "Nethrax": "奈斯拉克斯",
    "Ogre": "食人魔",
    "Petrok the Guardian": "守护者佩特洛克",
    "Reaper": "收割者",
    "Recommended Level": "推荐等级",
    "Rogoth": "罗戈特",
    "Ruins of Old Ranhor": "老兰霍尔遗址",
    "Serayne2": "塞雷恩2",
    "Shadow Beast": "暗影兽",
    "Shadowmire": "暗影泥沼",
    "Siren": "警笛",
    "Skarn the Dreadwake": "恐惧之痕斯卡恩",
    "Skeleton Warrior": "骷髅战士",
    "Skill Items": "技能物品",
    "Slimeball": "粘液球",
    "Spectre": "幽灵",
    "Sylvan Sanctum": "森林圣所",
    "Teleport for": "传送成本",
    "Thal'guth": "萨尔古斯",
    "The Nexus": "枢纽",
    "Time to Travel": "旅行时间",
    "Tloc": "特洛克",
    "Travel": "旅行",
    "Undead Knight": "不死骑士",
    "Verdant Veil": "翠绿面纱",
    "Vineyard Labyrinth": "葡萄园迷宫",
    "Volcanic Depths": "火山深处",
    "Voragor": "沃拉戈尔",
    "Water Elemental": "水元素",
    "Werewolf": "狼人",
    "Whispering Catacombs": "低语地下墓穴",
    "WinterRose": "冬日玫瑰",
    "Witch": "巫婆",
    "Wizard of the South": "南方巫师",
    "Wolf": "狼",
    "World Bosses": "世界首领",
    "Wraith": "幽灵",
    "Xeen": "西恩",
    "Zenith's Sanctum": "天顶圣殿",
    "Zombie": "僵尸",
    "Travelling": "旅行中",
    "The daily reward has been redeemed.": "每日奖励已领取。",
    "Bow": "弓",
    "Bar": "锭",
    "Boots": "靴子",
    "Chestplate": "胸甲",
    "Dagger": "匕首",
    "Gauntlets": "护手",
    "Greaves": "护腿",
    "Helmet": "头盔",
    "Shield": "盾",
    "Sword": "剑",
    "Banyan Bow": "榕木弓",
    "Birch Bow": "桦木弓",
    "Mahogany Bow": "桃花心木弓",
    "Maple Bow": "枫木弓",
    "Mystical Bow": "神秘弓",
    "Oak Bow": "橡木弓",
    "Requirements": "要求",
    "Spruce Bow": "云杉木弓",
    "times.": "次。",
    "Willow Bow": "柳木弓",
    "Yew Bow": "紫杉木弓",
    "You can perform this skill": "你可以施展这个技能",
    "You have": "你有",
    "Cooked ": "煮熟的",
    "Thank you for verifing your account.": "感谢您验证您的帐户。",
    "s": "秒",
    "m": "分",
    "h": "小时",
    "d": "天",
    "Eldritch Bait": "怪异诱饵",
    "Elemental Bait": "元素诱饵",
    "Tanished Bait": "",
    "The bio field format is invalid.": "简介字段格式无效，不能用中文。",
    "You have arrived at your destination.": "您已到达目的地。",
    "Accuracy determines your chance of landing successive hits against your opponent": "准确度决定了你连续击中对手的机会",
    "Dungeons Nearby": "附近的地下城",
    "Enemies Nearby": "附近的敌人",
    "Hunt": "狩猎",
    "Primary Stats": "主要统计数据",
    "Secondary Stats": "次要统计数据",
    "Start a hunt to find nearby enemies.": "开始狩猎寻找附近的敌人。",
    "Start Hunt": "开始狩猎",
    "Stats": "统计数据",
    "The amount of damage that is applied on the end of every attack regardless of stats.": "每次攻击结束时施加的伤害量，无论统计数据如何。",
    "The bonus that is applied when you land a critical strike.": "当你造成致命一击时应用的奖励。",
    "The chance that you will hit a critical strike.": "你受到致命一击的几率。",
    "The total attack power from your equipment and strength.": "总攻击力来自于你的装备和力量。",
    "This determines how many enemies you encounter after a successful hunt. You can increase this by completing hunts.": "这决定了成功狩猎后您遇到的敌人数量。 您可以通过完成狩猎来增加这一点。",
    "This dictates how fast you can travel and hunt.": "这决定了你旅行和狩猎的速度。",
    "World Bosses Nearby": "附近的世界首领",
    "You can increase up your combat level by defeating enemies.": "你可以通过击败敌人来提高你的战斗等级。",
    "Your agility gained from your speed skill and equipment.": "你的敏捷是从你的速度技能和装备中获得的。",
    "Your total protection gained from your defence skill and equipment.": "你的总计防护来自于你的防御技能和装备。",
    "You have successfully updated your bio.": "您已成功更新您的个人简介。",
    "Log": "原木",
    "Gathered via Woodcutting": "通过伐木收集",
    "List on Market": "上架到市场",
    "Sell to Vendor": "出售给商店",
    "Empty": "空",
    "Equipped": "已装备",
    "Select an item": "选择一个物品",
    "Chest": "宝箱",
    "Hands": "手部",
    "Head": "头部",
    "Legs": "腿部",
    "Missing Boots": "缺少靴子",
    "Missing Chest": "缺少胸甲",
    "Missing Hands": "缺少手部",
    "Missing Head": "缺少头部",
    "Missing Legs": "缺少腿部",
    "Missing Off Hand": "缺少副手",
    "Missing Primary Hand": "缺少主手",
    "Off Hand": "副手",
    "Primary Hand": "主手",
    "Please travel to a city to access your bank.": "请前往一个城市才能访问您的银行。",
    "There are no banks nearby.": "附近没有银行。",
    "All": "全部",
    "Bait": "诱饵",
    "Amulet Upgrade Stone": "护身符升级石",
    "Anglers Essence Crystal": "垂钓精华水晶",
    "Boar Tusk": "野猪獠牙",
    "Cheap Bait": "便宜的诱饵",
    "Cheap Vial": "便宜的小瓶",
    "Fish": "鱼",
    "Hat": "帽子",
    "Item Type": "物品类型",
    "Listings": "订单",
    "Maximum Price": "最高价",
    "Minimum Price": "最低价",
    "Maximum Tier": "最高层级",
    "Minimum Tier": "最低层级",
    "Metal Bar": "金属锭",
    "Pet Egg": "宠物蛋",
    "Search": "搜索",
    "Potion": "药水",
    "Skin": "皮肤",
    "Special": "特殊",
    "Upgrade Stone": "升级石",
    "Swamp Juice": "沼泽果汁",
    "Snakes Head": "蛇头",
    "Smelting Essence Crystal": "熔炼精华水晶",
    "Shelly Egg": "雪莉蛋",
    "Recipe": "配方",
    "Ruined Robes": "破损的长袍",
    "Not Equipable": "未装备",
    " Recipe": "配方",
    "Crown": "王冠",
    "Pouch": "小袋",
    "Scraps": "废料",
    "Totem": "图腾",
    "Aquastar Egg": "海星蛋",
    "Campaign Item": "活动物品",
    "Crafting Material": "工艺材料",
    "Djinn's Bottle": "巨灵之瓶",
    "Ducks Mouth": "鸭嘴",
    "Essence Crystal": "精华水晶",
    "Essence of Shadows": "暗影精华",
    "Filter": "筛选",
    "Food": "食物",
    "Lucky Rabbit Foot": "幸运兔脚",
    "to": "到",
    "Totem": "图腾",
    "Vial": "瓶子",
    "Yours": "你的",
    "Aquarion Egg": "阿奎里翁蛋",
    "Attack Power Potion Recipe": "攻击力药水配方",
    "Battle Potion": "战斗药水",
    "Bladeburst Elixir Recipe": "剑刃爆裂药剂配方",
    "Bone Fragment": "骨头碎片",
    "Boots Upgrade Stone": "靴子升级石",
    "Buffalo Horn": "水牛角",
    "Chefs Essence Crystal": "厨师精华水晶",
    "Chest of Scraps": "废料箱",
    "Chestplate Upgrade Stone": "胸甲升级石",
    "Cursed Talisman": "被诅咒的护身符",
    "Deer Antler": "鹿茸",
    "Dungeon Potion": "地牢药水",
    "Felling Essence Recipe": "伐木精华配方",
    "Fluffy Egg": "蓬松的鸡蛋",
    "Forbidden Tome": "禁书",
    "Fortified Protection Recipe": "强化防护配方",
    "Gauntlets Upgrade Stone": "护手升级石",
    "Greaves Upgrade Stone": "护腿升级石",
    "Helmet Upgrade Stone": "头盔升级石",
    "Improved Pickaxe": "改进的镐",
    "Improved Pickaxe Recipe": "改进的镐配方",
    "Ironclad Tonic Recipe": "铁定补品配方",
    "Long Forgotten Necklace": "被遗忘已久的项链",
    "Lumberjack Essence Crystal": "伐木工精华水晶",
    "Merfolk Essence Recipe": "人鱼精华配方",
    "Miners Essence Crystal": "矿工精华水晶",
    "Molten Core Tonic Recipe": "熔火之心补品配方",
    "Oreseeker Potion Recipe": "矿石探索者药水配方",
    "Parchment": "羊皮纸",
    "Pirates Code": "海盗法典",
    "Precision Potion Recipe": "精准药水配方",
    "Protection Potion Recipe": "防护药水配方",
    "Quickstep Potion Recipe": "快步药水配方",
    "Raw Onion": "生洋葱",
    "Rivertamer": "里弗塔默",
    "Rivertamer Recipe": "河驯者配方",
    "Seasong's Lure Recipe": "季节的诱饵配方",
    "Shield Upgrade Stone": "盾牌升级石",
    "Slime Extract": "史莱姆提取物",
    "Spicefinder Potion Recipe": "香料发现者药水配方",
    "Timberfall Essence Crystal": "木落精华水晶",
    "Timberfall Talon": "伐木之爪",
    "Timberfall Talon Recipe": "伐木之爪配方",
    "Titan Power Brew Recipe": "泰坦能量酿造配方",
    "Token": "代币",
    "Vial of Spectre Ectoplasm": "一瓶幽灵灵质",
    "Vortex Brew Recipe": "涡旋酿造配方",
    "Weapon Upgrade Stone": "武器升级石",
    "Wildwood Chopper Recipe": "野木切碎机配方",
    "Hammerfell Essence Crystal": "落锤精华水晶",
    "Venom Extract": "毒液提取物",
    "By @": "卖家 @",
    "Seller": "卖家",
    "Purchase Item": "购买物品",
    "It looks like you have no friend requests.": "您没有收到好友请求。",
    "No Friend Requests": "无好友请求",
    "Idling": "放置中",
    "It looks like you have not sent any friend requests.": "您没有发送过好友请求。",
    "Activate": "激活",
    "At the farm festival, folks gather for good tunes, tasty food, and a bit of dancing between the cornrows. As night falls, everyone chills under the stars, swapping stories and enjoying the simple joys of farm life.": "在农场节日期间，人们聚集在一起聆听美妙的音乐、享用美味的食物，并在玉米穗间跳舞。 夜幕降临，大家在星空下闲聊，交换故事，享受农家生活的简单乐趣。",
    "Bluebell Festival": "蓝铃花节",
    "Chest of Upgrade Stones": "升级石宝箱",
    "Daily": "日常",
    "Divinius Skin": "迪维尼斯皮肤",
    "Item": "物品",
    "Monthly": "月常",
    "Points": "点数",
    "Preview": "预览",
    "Progress:": "进度：",
    "Seraphina Skin": "塞拉菲娜皮肤",
    "Switch Campaign": "切换战役",
    "Tasks": "任务",
    "Time Limited": "限时",
    "Weekly": "周常",
    "Whispers of Daybreak Background": "黎明的低语背景",
    "Yule Fest": "圣诞节",
    "Hunting": "狩猎中",
    "Hunting Enemies": "狩猎敌人",
    "The hunt begins.": "狩猎开始了。",
    "Pro Tip:": "专家提示：",
    "in total).": "总计).",
    "enemies (": "敌人 (",
    "Hunt Again": "再试一次",
    "You can chain an additional": "您可以链接额外",
    "Potential Drops": "潜在掉落",
    "Experience": "经验值",
    "Run Away": "逃离",
    "The battle has started": "战斗开始了",
    "Join Lobby": "加入大厅",
    "Cost": "成本",
    "Success Chance": "成功几率",
    "You are not a high enough level to do this.": "你的等级还不够高，没法这样做。",
    "The action has been cancelled.": "该动作已被取消。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "defence": "防御",
    "mining": "采矿",
    "dexterity": "灵巧",
    "forge": "锻造",
    "cooking": "烹饪",
    "fishing": "钓鱼",
    "Bluebell Hollow": "蓝铃洞（Bluebell Hollow）",
    "Celestial Observatory": "天体观测站（Celestial Observatory）",
    "Crystal Caverns": "水晶洞（Crystal Caverns）",
    "Eldoria": "埃尔多利亚（Eldoria）",
    "Enchanted Oasis": "魔法绿洲（Enchanted Oasis）",
    "Floating Gardens of Aetheria": "埃瑟里亚漂浮花园（Floating Gardens of Aetheria）",
    "Isle of Whispers": "低语岛（Isle of Whispers）",
    "Skyreach Peak": "通天峰（Skyreach Peak）",
    "The Citadel": "城堡（The Citadel）",
    "Whispering Woods": "低语森林（Whispering Woods）",

    //原样
    'Twitter': 'Twitter',
    "Discord": "Discord",
    "Facebook": "Facebook",
    "Instagram": "Instagram",
    "gityxcom": "gityxcom",
    "Footer": "Footer",
    "Wiki": "Wiki",
    "gityx": "gityx",
    "Gityx": "Gityx",
    "O": "O",
    "IMMO2266": "IMMO2266",
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
    "Lv.": "等级",
    "https://web.idle-mmo.com?ref=": "https://web.idle-mmo.com?ref=",
    "Iron ": "铁",
    "Copper ": "铜",
    "Tin ": "锡",
    "Uranium ": "铀",
    "Steel ": "钢",
    "Mystic ": "神秘",
    "Mercury ": "汞",
    "Chromite ": "铬",
    "Goblin ": "哥布林",
    "Lead ": "铅",
    "You arrived at ": "您已抵达",
    "You have embarked on your journey to ": "你已经踏上了旅程前往",
    "Improved Fishing Rod": "改进的钓鱼竿",
    "Improved Felling axe": "改进的伐木斧",
    "Veinseeker": "寻血者",
    "Galeforce Speed Elixir": "烈风速度药剂",
    "Herculean Strength Elixir": "大力神力量药剂",
    "Bastion Elixir": "堡垒药剂",
    "Falcon's Grace Elixir": "猎鹰的恩典万能药剂",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "\n": "\n",
    "/s": "/秒",
    "Banyan Log": "榕树原木",
    "Willow Log": "柳树原木",
    "Birch Log": "桦树原木",
    "Oak Log": "橡树原木",
    "Yew Log": "红豆杉原木",
    "Coal Ore": "煤矿石",
    "Salmon": "三文鱼",
    "Sardines": "沙丁鱼",
    "Obsidianus": "黑曜石",
    "Mystic Ore": "神秘矿石",
    "Mystical Log": "神秘原木",
    "Maple Log": "枫木原木",
    "Mercury Ore": "汞矿石",
    "Millstone Mines": "磨石矿",
    "Mahogany Log": "桃花心木原木",
    "Pirate": "海盗",
    "Polar Bear": "北极熊",
    "Rabbit": "兔子",
    "Raccoon": "狸",
    "Spruce Log": "云杉树原木",
    "Steel Ore": "钢矿石",
    "Stingray": "黄貂鱼",
    "Tin Ore": "锡矿石",
    "Trout": "鳟鱼",
    "Tuna": "金枪鱼",
    "Turtle": "海龟",
    "Uranium Ore": "铀矿石",
    "Crab": "螃蟹",
    "Cod": "鳕鱼",
    "Lobster": "龙虾",
    "Lead Ore": "铅矿石",
    "Lantern Fish": "灯笼鱼",
    "Herring": "鲱鱼",
    "Great White Shark": "大白鲨",
    "Perch": "鲈鱼",
    "": "",
    "": "",
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
    /^([\d\.,]+)\n$/,
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
    [/^You have started mining (.+) Ore.$/, '你已开始开采 $1 矿石。'],
    [/^Patch list \#(.+)$/, '补丁列表 #$1'],
    [/^You have started cutting (.+).$/, '你开始砍伐 $1。'],
    [/^(.+) has sent you a friend request.$/, '$1 向你发送了一条好友请求。'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.]+)m$/, '$1 分钟'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\+([\d\.]+)\% Strength EXP$/, '\+$1\% 力量经验'],
    [/^\+([\d\.]+)\% Efficiency$/, '\+$1\% 效率'],
    [/^\+([\d\.]+)\% Wait Length Efficiency$/, '\+$1\% 等待时间效率'],
    [/^([\d\.,]+) minutes ago$/, '$1 分钟前'],
    [/^Hunt (.+) Duck$/, '狩猎 $1 鸭子'],
    [/^Use the Cooking skill (.+) times$/, '使用 $1 次烹饪技能'],
    [/^Buy ([\d\.,]+) items from the market$/, '从市场购买 $1 物品'],
    [/^Defeat ([\d\.,]+) enemies$/, '击败 $1 敌人'],
    [/^Upgrade ([\d\.,]+) items$/, '升级 $1 物品'],
    [/^Given ([\d\.,]+) damage$/, '造成 $1 伤害'],
    [/^Received ([\d\.,]+) damage$/, '受到 $1 伤害'],
    [/^([\d\.,]+) Mission credits$/, '$1 任务分'],
    [/^([\d\.,]+) Mission credits\?$/, '$1 任务分?'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^\+([\d\.,]+) EXP$/, '\+$1 经验值'],
    [/^\+([\d\.,]+) Protection$/, '\+$1 防护'],
    [/^\+([\d\.,]+) Attack Power$/, '\+$1 攻击能量'],
    [/^([\d\.,]+) Days Membership Pack$/, '$1 天会员包'],
    [/^([\d\.,]+)x\nTokens$/, '$1x\n代币'],
    [/^([\d\.,]+) days from now$/, '$1 天后'],
    [/^([\d\.,]+) Rewards$/, '$1 奖励'],
    [/^([\d\.,]+) Points$/, '$1 点数'],
    [/^([\d\.,]+) Tokens$/, '$1 代币'],
    [/^([\d\.,]+) Day$/, '$1 天'],
    [/^([\d\.,]+) likes$/, '$1 赞'],
    [/^([\d\.,]+) hours$/, '$1 小时'],
    [/^([\d\.,]+) Months$/, '$1 月'],
    [/^([\d\.,]+) Hours$/, '$1 小时'],
    [/^([\d\.,]+) Days$/, '$1 天'],
    [/^([\d\.,]+) days$/, '$1 天'],
    [/^([\d\.,]+) Playing$/, '$1 玩家在线'],
    [/^([\d\.,]+) Remaining$/, '$1 剩余'],
    [/^([\d\.,]+) tokens$/, '$1 代币'],
    [/^([\d\.,]+) tokens.$/, '$1 代币。'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Players Here$/, '$1 玩家在这里'],
    [/^([\d\.,]+) hour ago$/, '$1 小时前'],
    [/^([\d\.,]+) hours ago$/, '$1 小时前'],
    [/^([\d\.,]+) minute ago$/, '$1 分钟前'],
    [/^([\d\.,]+) minutes ago$/, '$1 分钟前'],
    [/^([\d\.,]+) second ago$/, '$1 秒前'],
    [/^([\d\.,]+) seconds ago$/, '$1 秒前'],
    [/^([\d\.,]+) Playing Right Now\n$/, '$1 玩家在线'],
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