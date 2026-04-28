// ==UserScript==
// @name         Planes Of Tlessa 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Planes Of Tlessa (https://planesoftlessa.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Planes Of Tlessa.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://planesoftlessa.com/pwa-images/tlessa-icons/tlessa-icon-192.png
// @license      MIT
// @include      *https://planesoftlessa.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/planes-of-tlessa-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/planes-of-tlessa-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/08/16 09:04
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
    "The Guide consists of three parts: Requirements, Story, and Instructions for mobile or desktop, depending on your device. Follow this guide, engage in chat, ask questions, and share feedback. Together, Tlessa will grow and become one of the best PBBGs out there!": "该指南由三部分组成：需求，故事和说明，移动或桌面，取决于您的设备。遵循这个指南，参与聊天，提出问题，并分享反馈。在一起，特莱莎 将成长为最好的pbbg之一！",
    "Tlessa offers players a variety of activities, including events that unlock new planes of existence. These activities are available for all levels, providing opportunities for epic loot and quests that advance the game's story. Don't worry about missing out—these events repeat regularly!": "特莱莎 为玩家提供了各种各样的活动，包括解锁新的存在层的活动。这些活动适用于所有关卡，提供史诗战利品和推进游戏故事的任务的机会。不要担心错过——这些活动定期重复！",
    "When you are new, you should use Attack, this attacks with your weapons, later on you can change up your attack based on your class, for example: Heretics will eventually want one of the Cast attacks: Cast, Cast and Attack or Attack and Cast.": "当你是新手时，你应该使用攻击，这种攻击与你的武器，之后你可以根据你的职业改变你的攻击，例如：异教徒最终会想要一种施法攻击：施法，施法和攻击或攻击和施法。",
    "While fighting, players will find randomly enchanted gear, similar to what you would get in other games like Diablo or Path of Exile. As you start progressing, you will want to craft your own gear, starting with shop gear and advancing beyond what the shop sells around level 200 of the crafting type.": "在战斗过程中，玩家会发现随机的魔法装备，类似于你在《暗黑破坏神》或《流放之路》等其他游戏中所获得的装备。当你开始进步时，你会想要制作自己的装备，从商店装备开始，并在200级左右的锻造类型中超越商店出售的装备。",
    ", which advance the main storyline and unlock features like leveling beyond 1,000, accessing different planes, walking on water or liquid surfaces, and more.": "，这将推进主要的故事情节，并解锁一些功能，如升级到1000以上，进入不同的位面，在水面或液体表面行走等等。",
    ". As you progress through these systems, you will be able to take on stronger and tougher creatures, gaining more rewards, gold, and other currencies for mid and end-game crafting.": "。当你在这些系统中前进时，你将能够接受更强大和更强硬的生物，获得更多奖励，金币和其他货币用于游戏中期和后期的制作。",
    "and": "和",
    "and depth in its systems from character advancement to kingdom management and more.": "以及从角色发展到王国管理等系统的深度。",
    "Buy": "购买",
    "Character Sheet": "角色表",
    "Characters": "角色",
    "Click/Tap to make larger": "点击/轻按放大",
    "Completed Guide Quests": "完成指南任务",
    "Completed Quests": "完成任务",
    "comprehensive help": "全面的帮助",
    "craft": "工艺",
    "Crafting and Enchanting": "锻造和附魔",
    "Donate": "捐赠",
    "enchant": "附魔",
    "Event Calendar": "活动日历",
    "features": "功能",
    "fight": "战斗",
    "fighting": "战斗",
    "Fighting": "战斗",
    "Fighting is done by selecting a monster and clicking attack to initiate the battle.": "战斗是通过选择一个怪物并点击攻击来开始战斗。",
    "From here we can select one of the five attack types: Attack, Cast, Cast and Attack, Attack and Cast or Defend.": "从这里我们可以选择五种攻击类型中的一种：攻击，施法，施法和攻击，攻击和施法或防御。",
    "From there, you will want to enchant your gear with specific enchantments, which you can see": "从那里，你会想要用特定的附魔来附魔你的装备，你可以看到",
    "Game": "游戏",
    "General Shop (Uses Gold)": "通用商店（使用金币）",
    "Gityx": "Gityx",
    "Goblin Shop (Uses Gold Bars)": "哥布林商店（消耗金条）",
    "Guide Quests": "引导任务",
    "Guide system": "引导系统",
    "Help I am stuck!": "救命，我被卡住了！",
    "Help, I'm Stuck!": "救命，我被卡住了！",
    "here": "在这里",
    "Hero of Tlessa": "特莱莎的英雄",
    "Into the World We Go!": "走进我们去的世界！",
    "Let’s go, adventurer!": "走吧，冒险家！",
    "Logout": "登出",
    "Market": "市场",
    "monsters to gain loot to take on stronger critters. The core game loop of Tlessa is simple:": "怪物获得战利品，以采取更强大的生物。《特莱莎》的核心游戏循环很简单：",
    "Next": "下一个",
    "Planes of Tlessa": "特莱莎位面",
    "Planes of Tlessa is about": "特莱莎位面",
    "Quest Log": "任务日志",
    "quests": "任务",
    "Quests to Unlock Progression": "解锁进程的任务",
    "Raids, Temporary Planes, and Weekly Events!": "突袭、临时飞机和每周活动！",
    "section as well as the": "节以及",
    "Sell": "出售",
    "Shop": "商店",
    "There's so much to explore and do. The game might seem overwhelming at first, but don’t worry—I’ve got you covered! When you start, you'll see a modal called The Guide.": "有太多的东西可以探索和做。游戏一开始可能会让你不知所措，但别担心——我已经帮你搞定了！当你开始时，你会看到一个叫做The Guide的模态。",
    "Tlessa also offers a": "特莱莎也提供了一个",
    "Tlessa also offers a variety of": "特莱莎还提供各种",
    "Tlessa doesn't lock features behind cash shops. Players can earn all game features at their own pace, based on their play style.": "特莱莎不会在现金商店后面锁定功能。玩家可以根据自己的游戏风格，以自己的速度获得所有游戏功能。",
    "Tlessa offers": "特莱莎提供",
    "to make better gear.": "为了制造更好的装备。",
    "Tops": "顶部",
    "Visit Market": "去市场",
    "Welcome to Tlessa": "欢迎来到特莱莎",
    "Who's Online?": "谁在线?",
    "You can learn more about the various attack types": "您可以进一步了解各种攻击类型",
    "Your Listings": "你的清单",
    "Upon resetting your account we delete everythig about your account except your user profile. This means you lose all kingdoms, enchanted items,\n        currencies, skills, everything. You keep and carry over nothing. You start from level one again.": "重置您的帐户后，我们将删除除您的用户配置文件以外的有关您帐户的所有内容。这意味着你将失去所有的王国，魔法物品，\n货币，技能，一切。你什么也保留不了。重新从第1层开始。",
    "Please be aware that the Guide quest will be enabled for all characters and there no way to disabled them.\n        You will restart your progress in sdaid guide quests when you re-roll your character.": "请注意，指南任务将为所有角色启用，并且没有办法禁用它们。当你重掷你的角色时，你会重新开始你的任务。",
    "If you are slightly under geared and head to Shadow Plane, select the last option to get the gear you want. Remember, any item\n                            and any affix can drop in combination in the Shadow Plane as long as the creature is 10 levels higher than you.": "如果你稍微低于装备和头部的阴影位面，选择最后一个选项，以获得你想要的装备。记住，只要生物比你高10级，任何物品和任何词缀都可以在暗影位面同时掉落。",
    "Enabling the guide can only be done while you are level 10 or below. Once enabled, The Guide cannot be disabled. You can ignore it, it's just a button up in the\n        navigation that you can click (Green button states: Guide Quests), follow the story and the quests to learn more about the game. Completely optional, but comes with rewards.": "只有当你是10级或以下级别时才能启用向导。一旦启用，指南将无法被禁用。你可以忽略它，它只是导航栏上的一个按钮，你可以点击（绿色按钮表示：指南任务），跟随故事和任务来了解更多关于游戏的信息。完全可选，但有奖励。",
    "By selecting this you are asking to be guided through the game. The idea of The Guide is we do not hand hold you. We give you\n                    enough to get going and to complete the quest objectives. It is up to you, while interacting with the features the quest want's you to, to then click the help\n                    links and read more about the feature.": "通过选择这一选项，你将要求在游戏中得到引导。《指南》的理念是我们不牵着你的手。我们给你足够的时间去完成任务目标。这取决于你，在与任务需要的功能交互时，点击帮助链接并阅读有关该功能的更多信息。",
    "By selecting this, you are stating you want to be alerted of xp gained for yuor current classes masteries. These includes things like using a weapon and gaining XP towards the mastery of using weapons. you can learn more about this through:": "通过选择这个，你声明你想要提醒你当前的职业精通所获得的经验。这包括使用武器和获得使用武器的经验值等内容。你可以通过以下途径了解更多：",
    ", disenchant quest drops as they cannot be disenchanted or destroyed.": "，解除附魔任务掉落，因为它们不能被解除附魔或摧毁。",
    ". This also includes your": "。这也包括你的",
    "Account Deletion or Reset": "删除或重置帐号",
    "Account Settings": "帐户设置",
    "After enabling this, you cannot disable the guide. See below for why.": "启用后，不能禁用该向导。请看下面的原因。",
    "All details about you will be deleted, including: Email and Password": "有关您的所有详细信息将被删除，包括：电子邮件和密码",
    "All kingdoms will be given to the NPC who holds kingdoms.": "所有王国都将被给予拥有王国的NPC。",
    "All market listings will be deleted.": "所有市场上架将被删除。",
    "Ancestral Items": "祖传物品",
    "Arcane Alchemist": "奥术炼金师",
    "Are you sure you want to do this? There is no going back, accept to create a new account.": "你确定要这么做吗？没有回头路，接受创建一个新帐户。",
    "Are you sure you want to do this? There is no going back.": "你确定要这么做吗？没有回头路。",
    "ATTN!": "注意!",
    "Auto Disenchant Amount": "自动解除附魔数量",
    "Auto Disenchant Settings": "自动解除附魔设置",
    "Auto disenchant will work across planes - but": "自动解除附魔将跨位面工作-但是",
    "Auto Disenchant?": "是否自动解除附魔？",
    "Auto Sell?": "是否自动出售？",
    "Blacksmith": "铁匠",
    "Building Upgrades": "建筑升级",
    "Buildings Rebuilt": "建筑重建",
    "By selecting any of these options your character will be re-rolled with them. You can reset your account as many times as you want, however, realise you": "通过选择这些选项中的任何一个，你的角色将被重新滚动。您可以随时重置您的帐户，但请注意",
    "By selecting Enable Guide, we will not show you the initial popup, instead: Click the Guide Quest in  the top navigation after resetting the account.": "通过选择启用向导，我们不会向您显示初始弹出窗口，而是：在重置帐户后单击顶部导航中的向导任务。",
    "By selecting this you are saying you want to auto disenchant items as they drop instead of collecting them.": "通过选择这个，你说你想要自动解除道具，因为他们掉落，而不是收集他们。",
    "By selecting this you are saying you want to auto sell items you cannot disenchant because you are Gold Dust capped.": "通过选择这个，你说你想要自动出售物品，你不能解除附魔，因为你是金尘封顶。",
    "By selecting this, you are saying you want server message notifications about building upgrades for all kingdoms.": "通过选择此选项，您表示希望所有王国的构建升级的服务器消息通知。",
    "By selecting this, you are saying you want server message notifications about buildings that finished being rebuilt, for all kingdoms.": "通过选择此选项，您表示希望服务器消息通知关于所有王国完成重建的建筑物。",
    "By selecting this, you are saying you want server message notifications about unit recruitment for all kingdoms.": "通过选择这个，你说你想要关于所有王国的单位招募的服务器消息通知。",
    "By selecting this, you are saying you want server message notifications for when the hourly reset happens.": "通过选择此选项，您表示希望在每小时重置发生时发送服务器消息通知。",
    "By selecting this, you are stating you want to be alerted (crystal) shards you gain per kill.": "通过选择这个，你声明你想要每次击杀获得提醒（水晶）碎片。",
    "By selecting this, you are stating you want to be alerted copper coins you gain per kill.": "通过选择这个选项，你是在声明你想要每次击杀获得的铜币。",
    "By selecting this, you are stating you want to be alerted gold dust you gain per kill.": "通过选择这个，你是在说你想要被提醒你每次杀死获得的金粉。",
    "By selecting this, you are stating you want to be alerted gold you gain per kill.": "通过选择这个选项，你是在声明你想要每次击杀获得奖励。",
    "By selecting this, you are stating you want to be alerted of an items skill kill count when fighting. This only applies to": "通过选择此选项，您表示希望在战斗时收到物品技能杀死计数的提醒。这只适用于",
    "By selecting this, you are stating you want to be alerted of gaining points for": "通过选择这个，你是在说你想要被提醒获得积分",
    "By selecting this, you are stating you want to be alerted of xp gained during exploration. This will be a total of the xp given to you based on the number of creatures you killed.": "通过选择此选项，您声明希望在探索期间获得xp的提醒。这将是基于你杀死的生物数量而给予你的经验值。",
    "By selecting this, you are stating you want to be alerted of xp gained for the current skill you have in": "通过选择这个选项，你是在声明你想要获得当前技能所获得的经验值提醒",
    "By selecting this, you are stating you want to be alerted of xp gained for your": "通过选择此选项，您表示希望收到为您的任务获得的经验的提醒",
    "By selecting this, you are stating you want to be alerted of xp gained for your character when leveling your": "通过选择这个选项，你是在声明你想要在升级时提醒你的角色获得的经验值",
    "By selecting this, you are stating you want to be alerted of xp gained out side of exploration on a per kill basis.": "通过选择这个选项，你是在声明你想要在每次击杀的基础上获得探索之外的经验值。",
    "By selecting this, you are stating you want to be alerted, via the Server Message tab, when a monster is to low level for you.": "通过选择这个选项，当一个怪物对你来说是低级别时，你就表示你想要通过服务器消息选项卡得到提醒。",
    "Centaur": "半人马",
    "Change name": "改变名称",
    "Character Name": "角色名称",
    "Choose a class": "选择职业",
    "Choose a Race": "选择一个种族",
    "Choosing": "选择",
    "class rank": "职业排名",
    "Class Ranks": "职业排名",
    "class skill": "职业技能",
    "Close": "关闭",
    "Dancer": "舞娘",
    "Dark Dwarf": "暗矮人",
    "Delete Account": "删除账户",
    "Deleting your account to start over? Click Reset Account instead. You won't lose your account.": "删除你的帐户重新开始？请单击“重置帐户”。你不会失去你的账户的。",
    "Disenchant All": "使不抱幻想所有",
    "Drow": "卓尔精灵",
    "Dryad": "树妖",
    "Enable Guide": "启用指南",
    "equiped class specials": "装备职业特殊技能",
    "explicit": "明确的",
    "Faction Loyalty": "派系忠诚",
    "factions": "派系",
    "Fighter": "斗士",
    "for adventures.\n                We will": "冒险。\n我们会",
    "Genie": "精灵",
    "Gibberling": "胡言乱语",
    "Githyanki": "吉斯洋基人",
    "Guide": "指南",
    "Guide Quests will take roughly 1 hour to complete, sometimes much less - such as at the begining. If a quest should take longer\n        then it will explicitly state as such.": "指南任务大约需要1个小时完成，有时会更少——比如一开始。如果一个任务需要更长的时间，那么它会明确地说明。",
    "Guide Settings": "指南设置",
    "Gunslinger": "火枪手",
    "have the option to enable the guide quest system.": "可以选择启用向导任务系统。",
    "Here you can manage what notifications you see in the Server Messages. Some are off by default, because they can get annoying.": "在这里，您可以管理在服务器消息中看到的通知。有些是默认关闭的，因为它们很烦人。",
    "Here you may set up your auto disenchanting. This is useful for high level characters\n                who can get to the Shadow Plane and receive large amounts of drops.": "在这里你可以设置自动解除附魔。这对于能够到达暗影位面并获得大量掉落物的高级角色来说非常有用。",
    "Heretic": "异教徒",
    "High Elf": "高精灵",
    "Home": "首页",
    "Hourly Kingdom Notices": "每小时王国通知",
    "Human": "人类",
    "I am very sad to see you go, but I understand. If you are sure this is what you want to do, please know the following:": "看到你走，我很难过，但我能理解。如果您确定这是您想要做的，请了解以下内容：",
    "instructions help you through the features of the game.": "说明帮助您通过游戏的功能。",
    "Is an NPC who, through a series of stories and": "是一个NPC，通过一系列的故事和",
    "Keep items with value of 1 Billion": "保留价值10亿的物品",
    "Keep items With Value of 1 Billion Gold (useful for Shadow Plane)": "保留价值10亿金币的物品（对暗影位面有用）",
    "lose a lot\n            of progression when you do that": "当你这么做的时候，你会失去很多进度",
    "Monster to low level message": "怪物到低级信息",
    "never, ever": "永远不要",
    "New players are advised to not enable this as the low level drops can be useful to you": "建议新玩家不要启用此功能，因为低级掉落对你很有用",
    "not": "不是",
    "One second before you go ...": "在你离开之前的一秒钟……",
    "Optional - Choose new Race and Class.": "可选-选择新的种族和职业。",
    "Orc": "兽人",
    "Players who reset their account": "重置帐户的玩家",
    "Please select": "请选择",
    "Please Select (Optional)": "请选择（可选）",
    "Prophet": "先知",
    "Ranger": "远程",
    "Reset Account": "重置帐户",
    "Resetting your account, allows you to pick a new race and class. You can change your name at the top of Account Settings.": "重置你的帐户，允许你选择一个新的种族和职业。您可以在帐户设置的顶部更改您的名称。",
    "Server Message Settings": "服务器消息设置",
    "Show (Crystal) Shards Gained Per Kill": "显示每次击杀获得的碎片（水晶）",
    "Show Copper Coins Gained Per Kill": "显示每次击杀获得的铜币",
    "Show Faction Loyalty XP Gain": "显示派系忠诚经验值",
    "Show Faction Point Gain": "显示派系点数",
    "Show Gold Dust Per Kill": "每次击杀显示金粉",
    "Show Gold Gained Per Kill": "显示每次击杀获得的金币",
    "Show Item Skill Kill Count": "显示物品技能击杀计数",
    "Show Training Skill XP Gain": "显示训练技能的经验增益",
    "Show xp gained during exploration": "显示在探索过程中获得的经验",
    "Show xp gained for class masteries": "显示职业精通获得的经验值",
    "Show xp gained for class ranks": "显示职业等级获得的经验值",
    "Show xp gained for equipped class specials": "显示装备职业特殊技能获得的经验值",
    "Show xp gained per kill": "显示每次击杀获得的经验值",
    "The": "",
    "The idea here is to help new players slowly get a grasp of the game. You will be rewarded with XP and currency for each quest you\n        complete.": "这里的理念是帮助新玩家慢慢掌握游戏。每完成一个任务，你都会得到XP和货币奖励。",
    "Thief": "小偷",
    "training": "训练",
    "Unit Recruitment": "单位招聘",
    "Update Auto Disenchant Settings.": "更新自动解除魔咒设置。",
    "Update Guide Settings.": "更新指南设置。",
    "Update Server Message Settings.": "更新服务器消息设置。",
    "Vampire": "吸血鬼",
    "What is The Guide": "什么是指南",
    "will ignore the items value and just disenchant it.": "将忽略物品的价值，只是解除它的魔法。",
    "will only keep items who's item cost with combined affixes\n                            is or is above 1 Billion Gold.": "只会保留物品的组合词缀\n是或超过10亿黄金的物品。",
    "Yes. I am sure": "是。我确信",
    "You can review your completed guide quests by opening the sidebar,\n                    clicking Quest Log and clicking on Completed guide quests.": "您可以通过打开侧边栏，单击任务日志并单击已完成的指南任务来查看已完成的指南任务。",
    "you have equipped.": "你已经装备好了。",
    "You will also receive one last email confirming that we have cleaned up your account.": "您还将收到最后一封电子邮件，确认我们已经清理了您的帐户。",
    "You have been walking for days. You left your home in search of adventure, leaving your mother and father to tend to the farm. Carrying with you the memories of running through the fields as a small child, the sun's warmth slowly browning your skin as you played with your friends in the local pond that everyone swam in on hot days.": "你已经走了好几天了。你离开家去寻找冒险，离开父母去照料农场。带着儿时在田野里奔跑的记忆，和朋友们在当地的池塘里玩耍，阳光的温暖慢慢地把你的皮肤晒成棕色，在炎热的日子里，每个人都在池塘里游泳。",
    "These types of Guide Quests only pop up during special events or when new features are unlocked at specific levels. You can continue your regular guide quests once you finish this one and any \"child\" quests that might folow after it.": "这些类型的指南任务只会在特殊事件或特定关卡解锁新功能时出现。你可以继续你的常规向导任务，一旦你完成了这个任务和任何“子”任务，可能会紧随其后。",
    "You can click the top right button in the header called Guide Quests to re-open this modal. You can also see previous Guide Quests by opening the top left menu, selecting Quest Log and then selecting Completed Guide Quests.": "你可以在标题栏中点击右上角的“指南任务”按钮重新打开这个模态框。你也可以通过打开左上角菜单，选择任务日志，然后选择完成的向导任务来查看以前的向导任务。",
    "For now, focus on using the attack. Later on, when you are more established, your class will determine the type of attack you select. For example, Heretics love Cast, while Prophets love Cast and Attack (or Attack and Cast).": "现在，专注于使用攻击。稍后，当您更成熟时，您的类将决定您选择的攻击类型。例如，异教徒喜欢施法，而先知喜欢施法和攻击（或攻击和施法）。",
    "I want you to get yourself to level 2. For this, you will gain an additional 10XP per kill (until you reach level 2). It will take roughly ten kills (maybe less) to achieve this goal.": "我要你爬到第二层。因此，每次击杀将额外获得10点经验（直到等级2）。大约需要10次击杀（也许更少）才能达到这个目标。",
    "- Click the attack button.": "-点击攻击按钮。",
    "- Click the first attack button.": "-点击第一个攻击按钮。",
    "- Repeat until level 2.": "-重复到第2级。",
    "- Select a monster from the list behind this modal (start with Sewer Rat and work your way down)": "-从这个模式后面的列表中选择一个怪物（从下水道老鼠开始，然后向下工作）",
    ", as you will see when fighting a monster:": "，就像你在与怪物战斗时看到的那样：",
    "Attack (uses both weapons equipped)": "攻击（同时使用两种武器）",
    "Attack and Cast (uses the spell in spell slot 2 and the left-handed weapon)": "攻击和施法（使用法术槽2中的法术和左手武器）",
    "attacks": "攻击",
    "Cancel": "取消",
    "Cast (Uses both spells equipped)": "施法（同时使用两种法术）",
    "Cast and Attack (Uses the spell in spell slot 1 and the right-handed weapon)": "施法和攻击（使用法术槽1中的法术和右手武器）",
    "Defend (Uses your shields and armor to defend)": "防御（使用你的盾牌和盔甲进行防御）",
    "Desktop Instructions": "桌面说明",
    "Gold Reward": "金币奖励",
    "Hand in": "上交",
    "Information": "信息",
    "Level your character to": "将你的角色升级到",
    "Now, you stand on a path with ravaging creatures, foul beasts before you. It's time to fight, to survive, to conquer.": "现在，你站在一条小路上，面前是凶残的野兽。是时候去战斗，去生存，去征服。",
    "One moment ... [GUIDE QUEST]": "等一下……(引导探索)",
    "Required to complete": "需要完成",
    "Rewards": "奖励",
    "Story": "故事",
    "The Hand in button will become available when you meet the requirements. Unless exploration is running.": "满足条件后，即可使用“上交”按钮。除非勘探正在进行。",
    "There are various": "有各种各样的",
    "To do this:": "要做到这一点：",
    "Toggle Dark Mode": "切换深色模式",
    "View Quests": "查看任务",
    "Welcome to Tlessa [GUIDE QUEST]": "欢迎来到 特莱莎 [指南任务]",
    "Xp Reward": "经验奖励",
    "XP": "经验值",
    "X/Y:": "X/Y:",
    "Name": "名称",
    ". Tlessa and I deeply appreciate your contribution in keeping this amazing game alive!": "。特莱莎和我深深感谢你的贡献，让这个令人惊叹的游戏保持活力！",
    "Active Boons": "主动福利",
    "Agility": "敏捷",
    "Announcements": "公告",
    "Attack": "攻击",
    "Back": "回来",
    "Character on Plane:": "位面角色：",
    "Charisma": "魅力",
    "Chat": "聊天",
    "Chat Tabs": "聊天选项卡",
    "Class": "职业",
    "Conjure": "召唤",
    "Copper Coins": "铜币",
    "Craft/Enchant": "制作/附魔",
    "Crystal Shards": "水晶碎片",
    "Desktop Crafting": "桌面制作",
    "Desktop Fighting": "桌面战斗",
    "Desktop Game": "桌面游戏",
    "Dexterity": "灵巧",
    "Durability": "耐久",
    "East": "东",
    "Event Schedule which you can see in game via the left hand sidebar": "你可以在游戏的左手边栏看到活动时间表",
    "Exploration": "探索",
    "Focus": "专注",
    "Gold": "金币",
    "Gold Dust": "金尘",
    "Health": "生命值",
    "Intelligence": "智力",
    "Kingdoms": "王国",
    "Learn more here": "点击这里了解更多",
    "Level": "等级",
    "Mobile Crafting": "手机制作",
    "Mobile Fighting": "手机战斗",
    "Mobile Game": "手机游戏",
    "North": "北",
    "Plane:": "位面：",
    "Please select a monster": "请选择一个怪物",
    "from Twisted Memories Plane": "来自扭曲的记忆位面",
    "Quests": "任务",
    "mobile will require you to scroll": "手机将需要你滚动",
    "Race": "种族",
    "Send": "发送",
    "Server Message": "服务器消息",
    "Set Sail": "启航",
    "Settle Kingdom": "定居王国",
    "Slots": "槽位",
    "South": "南",
    "Strength": "力量",
    "Submit Bug/Suggestions": "提交Bug /建议",
    "Surface": "表面",
    "Teleport": "传送",
    "The map is how we can move our character around!": "地图是我们如何移动我们的角色！",
    "Tlessa needs your help to survive. Please, consider donating to support the continued development of Planes of Tlessa.": "特莱莎需要你的帮助才能活下去。请考虑捐款来支持《特莱莎位面》的持续发展。",
    "Tlessa needs your help,": "特莱莎需要你的帮助",
    "To the game!": "去比赛！",
    "Traverse": "穿梭",
    "View Location Details": "查看位置详细信息",
    "West": "西",
    "Will use your armour and shields equipped to block damage. Some class specials and the class Vampire, once more established, will make use of this to deal more damage, fire off special abilities and so on.": "将使用你装备的盔甲和盾牌来阻挡伤害。一些职业特殊技能和吸血鬼职业，一旦建立，将利用它来造成更多伤害，发射特殊技能等等。",
    "You can see a complete breakdown of your AC if you go to Character Sheet tab and click \"Show Additional Information\". From here you can see a complete break down of everything that goes into your AC by clicking on the \"Ac\" stat title. If you are on mobile, you go to your Character Sheet Tab and expand the top section (Character Details) and then click the \"Show Additional Information\" button.": "如果你进入角色表并点击\“显示附加信息\”，你可以看到防御职业的完整细分。从这里，你可以通过点击“防御职业 \”属性标题来看到防御职业中所有内容的完整细分。如果你是在手机上，你进入你的角色表标签页并展开顶部部分（角色详情），然后点击\“显示附加信息\”按钮。",
    "You can see a complete breakdown of your Health/Modded Durability if you go to Character Sheet tab and click \"Show Additional Information\". From here you can see a complete break down of everything that goes into your Health by clicking on the \"Health\" stat title. If you want to know what goes into your durability, click the Modded Durability stat. If you are on mobile, you go to your Character Sheet Tab and expand the top section (Character Details) and then click the \"Show Additional Information\" button.": "如果你进入角色表选项卡并点击\“显示附加信息\”，你可以看到你的生命值/修改持久性的完整细分。从这里你可以看到一个完整的细分，所有进入你的生命值通过点击“生命值”属性标题。如果你想知道你的持久性，点击修改的持久性属性。如果你是在手机上，你去你的角色表标签并展开顶部部分（角色详情），然后点击\“显示附加信息\”按钮。",
    "You can see a complete breakdown of your various attacks if you go to Character Sheet tab and click \"Show Additional Information\". From here you can see a complete break down of everything that goes into your specified attack by clicking on the attack stat title (ie, weapon damage, ring damage, spell damage and healing amount). If you are on mobile, you go to your Character Sheet Tab and expand the top section (Character Details) and then click the \"Show Additional Information\" button.": "如果你进入角色表选项卡并点击\“显示附加信息\”，你可以看到你的各种攻击的完整细分。从这里，你可以通过点击攻击属性标题（即武器伤害，戒指伤害，法术伤害和治疗量）看到所有与特定攻击相关的内容的完整细分。如果你是在手机上，你去你的角色表标签，展开顶部部分（角色详细信息），然后点击“显示附加信息”按钮。",
    "As well as your characters attack stat, which can be seen on the character sheet in the Top Left called: Damage Stat. If you are on mobile you can see this by going to the character sheet tab and expanding the top section (Character Details).": "还有你的角色攻击属性，可以在左上角的角色表中看到：伤害属性。如果你是在手机上，你可以通过打开角色表标签并展开顶部部分（角色详细信息）来查看。",
    ", skills and so on - including": "技能等等——包括",
    ", that increase the AC on top. There are also": "，这样可以增加顶部的防御职业。也有",
    "AC Help": "防御职业帮助",
    "Armour Class, or AC, is calculated by taking all items that give a Base AC, like Body, Helmet and so on and adding them together. We then apply any": "防御职业（AC），是通过所有给予基础防御职业的物品，如身体，头盔等，并将它们加在一起来计算的。然后我们应用",
    "Armour Class, or AC, is the amount of damage you will block when the enemy attacks.": "装甲等级，或AC，是当敌人攻击时你将阻挡的伤害数量。",
    "as well as": "同样地",
    "Astral Celestial Being": "星界天体",
    "Astral Hell God": "星界地狱神",
    "Attack and Cast": "攻击与施放",
    "Attack Help": "攻击帮助",
    "Attack is the culmination of your weapons, rings and spells equipped.": "攻击是你的武器，戒指和法术装备的高潮。",
    "Attack, 1 of 5.": "攻击，1 / 5。",
    "Automation is running. You can cancel it below.": "自动化正在运行。你可以在下面取消它。",
    "Baby Green Dragon": "小绿龙",
    "Black Mage of Theo": "西奥的黑法师",
    "Blood Thirsty Ranger": "嗜血游侠",
    "Bloody Reaper": "血腥收割者",
    "Cast": "施法",
    "Cast and Attack": "施法和攻击",
    "Celestial Entity": "天体",
    "class skills that effect this as well.": "职业技能也会影响这一点。",
    "class skills.": "职业技能。",
    "class specials": "职业特惠",
    "Close Exploration": "近距离探索",
    "Conjured Fiend": "被召唤的恶魔",
    "Craft": "制造",
    "Dark Cultist": "黑暗教徒",
    "Dark Shadow": "暗影",
    "Dead Priest": "死去的牧师",
    "Death": "死亡",
    "Death's Horsemen": "死亡骑士",
    "Death's Minion": "死神的仆从",
    "Defend": "捍卫",
    "Demon Imp": "小恶魔",
    "Demon Prince": "恶魔王子",
    "Demonic Warlord of T'all": "恶魔领主",
    "Demonized Baby Elf": "妖魔化小精灵",
    "Deranged Cleric": "疯狂的牧师",
    "Durability or Dur is the calculation of all enchantments that effect this stat - also known as Modded Durability.": "耐久性或Dur是所有影响此属性的附魔的计算-也称为修改耐久性。",
    "Emerald Dragon": "翡翠龙",
    "Emotionless Servant": "无情的仆人",
    "Enchant": "附魔",
    "Enchanted Blacksmith": "附魔铁匠",
    "enchantments": "附魔",
    "Explore": "探索",
    "Faceless Man": "无脸人",
    "Fetching Action Data ...": "获取动作数据…",
    "Fetching character sheet ...": "获取角色表…",
    "Fetching Kingdom Data ...": "获取王国数据…",
    "Fetching Map Data ...": "获取地图数据…",
    "Fetching Quest Data ...": "获取任务数据…",
    "Fire Elemental": "火元素",
    "Floating Knives": "浮刀",
    "for more details.": "了解更多详情。",
    "For more help please the": "如需更多帮助，请",
    "Gem Crafting": "宝石制作",
    "Goblin": "哥布林",
    "Goblin Warlord": "哥布林战神",
    "God of the Lizardkin": "蜥蜴之神",
    "God of Winter": "凛冬之神",
    "Great White Dragon": "大白龙",
    "Hated Ice Fiend": "憎恨冰魔",
    "Health Help": "生命帮助",
    "Health is calculated by taking your durability, applying all": "生命值是用你的耐久值计算的",
    "Health is how much HP you have, how much damage you can take before dying.": "生命值是指你有多少生命值，你在死亡前能承受多少伤害。",
    "Hell Dragon": "地狱龙",
    "help docs.": "帮助文档。",
    "Hopeless Cleric": "绝望的牧师",
    "Jester Of Beleth": "贝勒斯的小丑",
    "Labyrinth Fiend": "迷宫魔神",
    "Lady of the Grave": "坟墓之女",
    "left": "剩余",
    "Litch": "利奇",
    "Loading game ...": "正在加载游戏…",
    "Lonesome Soldier": "孤独的士兵",
    "minute(s)": "分钟",
    "Moss Covered Skeleton": "青苔骷髅",
    "Move down the list (optional)": "向下移动列表（可选）",
    "option Attack, selected.": "选项 攻击, 已选中。",
    "option Sewer Rat, selected.": "选项 下水道老鼠, 已选中。",
    "Peasant": "农民",
    "Pirate Master": "海盗王",
    "Please Select": "请选择",
    "Please select attack type": "请选择攻击类型",
    "Please select length of time": "请选择时间长度",
    "Please Select Monster": "请选择怪物",
    "Possessed Maid": "附身女仆",
    "Raging Faceless Thought": "狂怒的无面思想",
    "Red Wood Demonic Tree": "红木魔树",
    "Regardless of your attack type, other aspects that effect your attack include:": "不管你的攻击类型是什么，影响你攻击的其他方面包括：",
    "Ruby Fiend": "红宝石魔神",
    "Satanic Cult Leader": "撒旦教主",
    "Screaming Corpse": "尖叫的尸体",
    "See Exploration Help": "查看探索帮助",
    "Seer of O'cal": "奥卡尔先知",
    "Sewer Rat": "下水道老鼠",
    "Sewer Rat, 2 of 60.": "下水道老鼠，60只中的2只。",
    "Shade of Light": "光之阴影",
    "Shadow of the Night": "暗夜之影",
    "Shamanic Dust Devil": "萨满尘魔",
    "Solar": "太阳能",
    "Soldier of Solace": "慰藉之兵",
    "Soulless Archer": "没有灵魂的弓箭手",
    "Stop Exploration": "停止探索",
    "The exploration will begin in 4 minutes. Every 4 minutes you will encounter the enemy up to a maximum of 50 times in a single \"encounter\"": "探索将在4分钟后开始。每4分钟你将在一次“遭遇战”中遭遇敌人最多50次。",
    "There are 5 attack types in the game: Attack, Cast, Attack and Cast, Cast and Attack and Defend. Each will use a different aspect of your equipped weapons.": "游戏中有5种攻击类型：攻击，施法，攻击和施法，施法和攻击和防御。每个人都将使用你装备的武器的不同方面。",
    "Thunderous Fiend": "雷鸣般的恶魔",
    "to it and any": "对它和任何",
    "Treasure Box Of Horrors": "恐怖宝盒",
    "Trinketry": "饰品",
    "Umbering Spirit Lord": "暗灵领主",
    "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu, press Tab to select the option and exit the menu.": "使用上下键选择选项，按Enter键选择当前关注的选项，按Escape键退出菜单，按Tab键选择该选项并退出菜单。",
    "will use spell slot 1 and then your right hand weapon.": "将使用法术槽1，然后你的右手武器。",
    "will use spells in both of your spell slots.": "将使用法术在你的法术槽。",
    "will use weapons in both of your hands.": "两手都拿着武器。",
    "will use your left hand weapon and your spell slot 2.": "将使用你的左手武器和你的法术槽2。",
    "Witch's Demon": "女巫的恶魔",
    "Account Deletion": "删除账户",
    "Banned Unfairly?": "非法封禁？",
    "Child! Countless adventures await us!": "孩子！无数的冒险在等着我们！",
    "E-Mail Address": "电子邮件地址",
    "Forgot Your Password?": "忘记密码？",
    "Login": "登录",
    "Login!": "登录!",
    "Password": "密码",
    "Register": "注册",
    "Test Dark Mode": "尝试深色模式",
    "Welcome back!": "欢迎回来!",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Armour Class": "防御职业",
    "AC": "防御职业",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "×": "×",
    "/": "/",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "+": "+",
    ".": ".",
    "…": "…",
    ":": ":",
    "-": "-",
    "|": "|",
    "(": "(",
    ")": ")",
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
    'II': 'II',
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
    "                   ": "                   ",
    "                  ": "                  ",
    "                 ": "                 ",
    "                ": "                ",
    "               ": "               ",
    "              ": "              ",
    "             ": "             ",
    "            ": "            ",
    "           ": "           ",
    "          ": "          ",
    "         ": "         ",
    "        ": "        ",
    "       ": "       ",
    "      ": "      ",
    "     ": "     ",
    "    ": "    ",
    "   ": "   ",
    "  ": "  ",
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
    "Animations: ": "动画: ",
    "Current Endgame: ": "当前终局: ",
    "Space Background: ": "太空背景: ",
    "Version: ": "版本: ",
    "Quests - ": "任务 — ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)$/,
    /^×([\d\.]+)$/,
    /^x([\d\.]+)$/,
    /^v([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
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
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+) Sp$/,
    /^([\d\.]+) Oc$/,
    /^([\d\.]+) Dc$/,
    /^([\d\.]+) UDc$/,
    /^([\d\.]+) No$/,
    /^([\d\.]+) Sx$/,
    /^([\d\.]+) QaDc$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^×([\d\.,]+)$/,
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
    [/^([\d\.,]+) levels$/, '$1 级'],
    [/^([\d\.,]+) results available.$/, '$1 结果可用。'],
    [/^([\d\.,]+) Hour\(s\)$/, '$1 小时'],
    [/^([\d\.,]+) Hour\(s\), ([\d\.,]+) of ([\d\.,]+).$/, '$1 小时, $2 / $3.'],
    [/^Please Select, ([\d\.,]+) of ([\d\.,]+).$/, '请选择, $1 / $2.'],
    [/^option ([\d\.,]+) Hour\(s\), selected.$/, '选项 $1小时，已选中。'],
    [/^option ([\d\.,]+) Levels, selected.$/, '选项 $1级，已选中。'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
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