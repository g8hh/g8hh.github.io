// ==UserScript==
// @name         overlord-chs
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.63
// @description  Overlord (https://overlord.gg/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://overlord.gg/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/overlord-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/overlord-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2024/07/25 14:19
 * Author: guoba
 * View: http://www.gityx.com
 * ---------------------------
 */
//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //
    "Create Character": "创建角色",
    "Dwarf": "矮人",
    "Elf": "精灵",
    "How should we call you?": "我们该怎么称呼你?",
    "Human": "人类",
    "Login": "登录",
    "Orc": "兽人",
    "Overlord": "霸主增量",
    "Time to create your character! Please choose the desired name and race. Race benefits you with permanent bonuses to certain attributes.": "是时候创建你的角色了!请选择您想要的名字和种族。种族对你的某些属性有永久的加成。",
    "Attack": "攻击",
    "Attacks": "攻击",
    "Armory": "装备",
    "Base": "基地",
    "Bank": "银行",
    "Battles": "战斗",
    "City": "城市",
    "Description": "描述",
    "Defense": "防御",
    "Dark Mode": "深色模式",
    "Cost": "成本",
    "Dungeons": "地下城",
    "Energy": "能量",
    "Food": "食物",
    "Gems": "宝石",
    "Gold": "黄金",
    "Hero": "英雄",
    "Level": "等级",
    "Market": "市场",
    "Messages": "消息",
    "Metal": "金属",
    "Misc": "杂项",
    "Multiplier": "乘数",
    "No Notifications": "无通知",
    "Notifications": "通知",
    "Population": "人口",
    "Rewards": "奖励",
    "Settings": "设置",
    "Shards": "碎片",
    "Social": "社交",
    "Spells": "法术",
    "Trades": "交易",
    "Travel": "旅行",
    "Upgrades": "升级",
    "This journey starts with managing your population. Every day a daily update occurs and you receive an untrained population. You can train the citizens into either soldiers, horsemen or workers.": "这段旅程始于管理你的人口。每天都会发生每日更新，您会收到未经训练的人群。你可以把公民训练成士兵、骑兵或工人。",
    "section and train some of your untrained population to any category.": "菜单并将你的一些未经训练的人口训练为任意职业。",
    "Not Enough Resources": "资源不足",
    "City Shrine has been activated on level": "城市神殿激活了！等级",
    "Chance to land a critical hit with increased damage.": "造成暴击并增加伤害的几率。",
    "Chance to avoid losing resources and soldiers in battles.": "战斗中避免损失资源和士兵的几率。",
    "Affects the maximum energy capacity.": "影响最大能量上限。",
    "Affects the amount of wood you gain from workers.": "影响你从工人那里获得的 木材 数量。",
    "Achievements": "成就",
    "Action": "动作",
    "Affects the amount of energy you regenerate.": "影响你的能量再生。",
    "Affects the amount of EXP hero gains while training.": "影响英雄训练时获得的经验值。",
    "Affects the amount of food you gain from workers.": "影响你从工人那里获得的 食物 数量。",
    "Affects the amount of gold you gain from workers.": "影响你从工人那里获得的 黄金 数量。",
    "Affects the amount of metal you gain from workers.": "影响你从工人那里获得的 金属 数量。",
    "Affects the amount of loot from PvP.": "影响PvP中战利品的数量。",
    "Affects the amount of power on critical hits.": "影响暴击伤害。",
    "Logout": "登出",
    "Artifact": "神器",
    "Artifacts": "神器",
    "Auction": "拍卖",
    "Developments": "进展",
    "Finance": "金融",
    "Game Guide": "游戏指南",
    "Guilds": "公会",
    "Headquarters": "总部",
    "Membership": "会员",
    "Power": "战力",
    "Rank": "排名",
    "Ranking": "排行榜",
    "Resources": "资源",
    "Wood": "木头",
    "View All": "查看所有",
    "You have reached maximum energy! (": "你已经达到了能量上限!（",
    "START": "开始",
    "population": "人口",
    "Players": "玩家",
    "Previous": "上一页",
    "Next": "下一页",
    "Loading...": "加载中...",
    "Name": "姓名",
    "HOURS": "时",
    "SECONDS": "秒",
    "MINUTES": "分",
    "Next Big Update": "下一次大更新",
    "Now": "现在",
    "Guild": "公会",
    "Online Players": "在线玩家",
    "Donate": "捐赠",
    "Completed": "已完成",
    "Race": "种族",
    "Soldiers": "士兵",
    "Search:": "搜索:",
    "Global": "全球",
    "Decreases energy regeneration.": "降低能量再生。",
    "Event": "事件",
    "Energy Crisis": "能源危机",
    "Affects spells uptime duration.": "影响法术正常施放时间。",
    "Dungeon Energy": "地下城能量",
    "Chance to avoid losing resources and soldiers when attacked and lost. (50% cap)": "有几率避免在被攻击时失去资源和士兵。(50%上限)",
    "Close": "关闭",
    "Collect": "收集",
    "Combat": "战斗",
    "Daily Reward": "日常奖励",
    "Go to Guide": "查看指南",
    "Gold Gathering": "黄金收集",
    "Horsemen": "骑士",
    "Mystery Box": "神秘盒子",
    "Newbie Protection": "新手保护",
    "Pending": "等待",
    "Powers": "战力",
    "Production": "生产",
    "Protection": "受保护",
    "Quests (": "任务 (",
    "Resource": "资源",
    "Spells Duration": "法术持续时间",
    "Workers": "工人",
    "We highly recommend to read the game guide.": "我们强烈建议你阅读游戏指南。",
    "Wood Gathering": "收集木材",
    "You are protected from being attacked.": "你被保护起来不受攻击。",
    "You haven't redeemed your daily reward.": "你还没有领取你的日常奖励。",
    "Cancel": "取消",
    "Chance to land a critical hit on enemies and gain extra power. (70% cap)": "有几率对敌人造成暴击，并获得额外力量。(70%上限)",
    "Increases your power when landing a critical hit.": "暴击时增加你的力量。",
    "No": "否",
    "OK": "好的",
    "Owned": "拥有",
    "Reward has been collected.": "奖励已经收集。",
    "Success!": "成功！",
    "Rune": "符文",
    "Runes": "符文",
    "No Runes Found": "没有找到符文",
    "Heroes": "英雄",
    "Available Runes": "可用符文",
    "Power of the Gods": "诸神之力",
    "Supreme Plunderer": "至高无上的掠夺者",
    "Sylva the Timberlord": "森林领主西尔瓦",
    "Tree of Energy": "能量之树",
    "Unleashed Wealth": "释放财富",
    "No Rune Selected": "没有选择符文",
    "Increase spells duration by": "增加法术持续时间",
    "Increase PvP loot by": "增加PvP战利品",
    "Increase attack power by": "增加攻击力",
    "Increase defense power by": "增加防御力",
    "Increase energy regeneration by": "增加能量回复",
    "Increase gold production by": "增加黄金生产",
    "Increase hero EXP by": "增加英雄的经验值",
    "Guardian of Heavens": "天之守护者",
    "Ferra the Ironclad": "铁甲费拉",
    "Drako the Fierce": "凶猛的德拉科",
    "Double Time": "双倍时间",
    "Defense Power": "防御力",
    "Ceres the Abundant": "富饶的谷神星",
    "Blessing of Arcana": "奥秘祝福",
    "Aurum the Prosperous": "富贵的欧拉姆",
    "Attack Power": "攻击力",
    "Arcana the Wise": "智者奥卡纳",
    "Aegis the Defender": "勇者圣盾",
    "Avatars": "头像",
    "Changes saved successfully.": "已成功保存更改。",
    "Connect": "连接",
    "Customization": "自定义",
    "Not connected": "未连接",
    "Status": "状态",
    "Titles": "头衔",
    "Affordable": "经济实惠",
    "Death Staff": "死亡法杖",
    "Destruction Axe": "毁灭之斧",
    "Divine Holster": "神圣枪套",
    "Emerald Staff": "翡翠法杖",
    "Enchanted Dagger": "附魔匕首",
    "Golden Crossbow": "黄金弩",
    "Iron Mace": "铁锤",
    "Staff of Blood": "血之法杖",
    "Stealthy Dagger": "潜行匕首",
    "Assassin Hoodie": "刺客帽衫",
    "Bronze Armor": "青铜盔甲",
    "Golden Helmet": "金色头盔",
    "Golden Shield": "金色的盾",
    "Items": "物品",
    "Leather Boots": "皮靴",
    "Leather Trousers": "皮裤",
    "Metal Armor": "金属盔甲",
    "Power Cloak": "力量披风",
    "Space": "空间",
    "Stats": "统计",
    "Warrior Gauntlet": "勇者护手",
    "Attacker": "攻击者",
    "Battles History": "战斗历史",
    "Defender": "防御者",
    "entries": "条",
    "Loot": "战利品",
    "No data available in table": "暂无数据",
    "Show": "显示",
    "Time": "时间",
    "Distribute Workers": "分配工人",
    "Horsemen contribute 65% power compared to soldiers, but they cannot be enslaved on battles.": "骑兵的战斗力比士兵高65%，但不能在战斗中被奴役。",
    "Soldiers increase your power multiplier. Soldiers can be enslaved when losing battles.": "士兵增加你的战力乘数。士兵在战败时可以被奴役。",
    "Split Workers": "拆分工人",
    "Withdraw Workers": "撤离工人",
    "Workers can be distributed to factories and generate resources for you. You can always reassign them on different factories.": "工人可以被分配到工厂，为你生产资源。你可以在不同的工厂重新分配它们。",
    "Assassin's Hideout": "刺客的藏身处",
    "Benji's Den": "班吉的巢穴",
    "Devil's Abyss": "恶魔深渊",
    "Eldritch Lair": "恶灵巢穴",
    "Grimdark Sanctum": "格里姆密室",
    "Hero Levels": "英雄等级",
    "Knight's Citadel": "骑士的城堡",
    "Monk's Temple": "僧庙",
    "Necromancer's Lair": "死灵法师的巢穴",
    "Orc Warlord's Fortress": "兽人战神要塞",
    "Requirements": "要求",
    "Skeleton King's Tomb": "骷髅王之墓",
    "Spider's Den": "蜘蛛巢穴",
    "Stonemaw's Crypt": "石女墓",
    "The Abomination's Lair": "憎恶者的巢穴",
    "The Infernal Vault": "地狱金库",
    "The Malice Pit": "恶意之坑",
    "The Ogre's Bastion": "食人魔的堡垒",
    "The Silent Abyss": "寂静的深渊",
    "Voidscale Lair": "虚空之穴",
    "Equipped Artifacts": "已装备神器",
    "No Artifact Selected": "未选择神器",
    "No Artifacts Found": "未发现神器",
    "Current City": "当前城市",
    "Darkspire": "黑暗尖塔",
    "Grimrock": "魔岩",
    "Level Too Low": "等级不足",
    "Power ": "战力 ",
    "Ravenhold": "鸦堡",
    "Resource ": "资源",
    "Travel (": "旅行(",
    "Activate hero ultimates.": "激活英雄终极技能。",
    "Attack enemy players.": "攻击敌方玩家。",
    "Buy items from the armory.": "从军械库购买物品。",
    "Buy runes from the auction house.": "从拍卖行购买符文。",
    "Cast Spells.": "施法。",
    "Collect daily rewards.": "收集日常奖励。",
    "Complete daily quests.": "完成每日任务。",
    "Deposit resources in the bank.": "把资源存入银行。",
    "Dodge enemy attacks.": "躲避敌人的攻击。",
    "Donate gold to city shrines.": "向城市神殿捐赠黄金。",
    "Enhance rune rarity.": "增强符文稀有性。",
    "Enhance upgrade or developments.": "加强升级或发展。",
    "Enslave enemy soldiers in battles.": "在战斗中奴役敌方士兵。",
    "Gather food by workers.": "收集工人的食物。",
    "Gather gold by workers.": "由工人收集黄金。",
    "Gather metal by workers.": "由工人收集金属。",
    "Gather wood by workers.": "由工人收集木材。",
    "Land critical hits in battles.": "在战斗中打出暴击。",
    "Level up heroes.": "升级英雄。",
    "LOCKED": "未解锁",
    "Recruit population.": "招募人口。",
    "Salvage hero runes or artifacts.": "打捞英雄符文或神器。",
    "Spend energy on dungeons.": "在地下城中消耗能量。",
    "Unlock heroes.": "解锁英雄。",
    "Win against enemy players in battles.": "在战斗中战胜敌方玩家。",
    "OR": "或",
    "Sign In": "登录",
    "Sign Up": "注册",
    "Terms": "条款",
    "ACCOUNT VIOLATIONS": "账号违规",
    "No Real Money Trading, this includes any kind of trade including, but not limited to a real-world currency, real-world item exchanges, another game currency, or anything that is not included within the game mechanics.": "没有真钱交易，这包括任何类型的交易，包括但不限于现实世界的货币、现实世界的道具交换、另一种游戏货币或任何不包含在游戏机制中的东西。",
    "Our game is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.": "我们的游戏不适合13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果我们发现我们收集了13岁以下儿童的个人信息，我们将采取措施删除这些信息。",
    "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.": "我们可能会不时更新本隐私政策。如有任何更改，我们将在本页公布新的隐私政策并更新生效日期。建议您定期查看本隐私政策。",
    "We take reasonable measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no security system is impenetrable, and we cannot guarantee the security of your data.": "我们采取合理措施保护您的信息免遭未经授权的访问、更改、披露或破坏。然而，没有任何安全系统是牢不可破的，我们无法保证您的数据安全。",
    "Welcome to Overlord (\"we\", \"our\", \"us\"). We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the game.": "欢迎来到Overlord(“我们”，“我们的”，“我们”)。我们致力于保护和尊重您的隐私。本隐私政策解释了我们如何在您使用游戏时收集、使用、披露和保护您的信息。",
    "Access": "访问",
    "Already a member? Please enter your email and password to continue.": "已经是会员了吗?请输入您的电子邮件和密码以继续。",
    "By signing up, you accept our": "通过注册，您接受我们的",
    "Changes to This Privacy Policy": "本隐私政策的变更",
    "CHEATING/EXPLOITING BUGS/UNINTENTIONAL GAME MECHANICS": "作弊/利用漏洞/无意的游戏机制",
    "Children's Privacy": "孩子们的隐私",
    "Correction:": "更正:",
    "Data Security": "数据安全",
    "Deletion:": "删除:",
    "Each individual is allowed only a single account. Any additional account will result in a permanent user ban for all accounts.": "每个人只能有一个账户。任何额外的账户都将导致所有账户被永久封禁。",
    "For legal reasons:": "由于法律原因:",
    "Game Data:": "游戏数据:",
    "How We Use Your Information": "我们如何使用您的信息",
    "Information We Collect": "我们收集的信息",
    "Introduction": "介绍",
    "New here? Join now and start your journey to glory!": "新来的?现在加入，开始你的荣耀之旅!",
    "No aggravated harassment, bullying, or having a disregard for respecting another player.": "没有严重的骚扰，欺凌，或不尊重其他球员。",
    "No attempting to have someone else use, cheats or exploits as well as sharing any found cheats or exploits to anyone, excluding staff/admins.": "没有试图让别人使用，作弊或漏洞，以及分享任何发现的作弊或漏洞给任何人，不包括员工/管理员。",
    "No Buying, Selling, or Trading accounts, this includes sharing an account with another user.": "没有购买、销售或交易账户，这包括与其他用户共享一个账户。",
    "No discrimination allowed (including, but not limited to, ethnicity, sex, sexual orientation, disability, and nationality). This includes slurs or blatantly offensive communication.": "禁止歧视(包括但不限于种族、性别、性取向、残疾和国籍)。这包括辱骂或公然冒犯的交流。",
    "No Evading a ban, creating another account if banned will not be allowed.": "不允许逃避禁令，如果被禁止，将不允许创建另一个帐户。",
    "No exploiting bugs or unintentional gameplay mechanics (users are expected to report bugs found to staff for further investigation).": "不要利用漏洞或无意的游戏机制(用户应该向工作人员报告发现的漏洞，以便进一步调查)。",
    "No flooding or purposely trying to overload the server to bother players and staff.": "没有洪水或故意试图超载服务器来打扰玩家和工作人员。",
    "No refunds are eligible for in-game purchases.": "游戏内购买不能退款。",
    "No sharing or advertising of other games was not appropriate.": "其他游戏的分享或广告都是不合适的。",
    "No sharing or seeking out another player's personal information including, but not limited to, impersonating admin/staff.": "不得分享或寻找其他玩家的个人信息，包括但不限于冒充管理员/员工。",
    "No sharing or using explicit resources or content that would not be deemed suitable for other players and environments.": "禁止分享或使用不适合其他玩家和环境的明确资源或内容。",
    "No sharing passwords or account information for any reason.": "不得因任何原因共享密码或帐户信息。",
    "No using or sharing scripts that compromise gameplay fairness, including but not limited to macros, pulling player information, or circumventing captcha.": "禁止使用或分享危及游戏公平性的脚本，包括但不限于宏、提取玩家信息或规避验证码。",
    "PAYMENTS AND IN-GAME TRANSACTIONS": "支付和游戏内交易",
    "Personal Information:": "个人信息:",
    "PLAYER SOCIAL RULES": "玩家社交规则",
    "Privacy Policy": "隐私政策",
    "Sharing Your Information": "分享你的信息",
    "Sign in with Google": "登录谷歌",
    "Sign up with Google": "注册谷歌",
    "Technical Data:": "技术数据:",
    "Text-based, online, base management, tick-based PvP idle game! Your objective is to maintain and enhance your base, gain power, and climb the ranks.": "基于文本，在线，基地管理，基于tick的PvP放置游戏!你的目标是维持和提高你的基地，获得力量，并提升等级。",
    "To communicate with you:": "与您沟通:",
    "To enforce our terms:": "为执行我们的条款:",
    "To ensure compliance with our terms of service and other policies.": "确保遵守我们的服务条款和其他政策。",
    "To exercise these rights, please contact us.": "要行使这些权利，请与我们联系。",
    "To improve our game:": "为了改进我们的游戏:",
    "To manage your account, provide customer support, and ensure the proper functioning of our game.": "管理您的帐户，提供客户支持，并确保我们的游戏正常运行。",
    "To provide and maintain our game:": "提供和维护我们的游戏:",
    "To send you updates, notifications, and other information related to your account and gameplay.": "向您发送有关您的帐户和游戏玩法的更新、通知和其他信息。",
    "To understand how players use our game and to make improvements.": "了解玩家如何使用我们的游戏并做出改进。",
    "We collect data related to your gameplay, such as your in-game actions and interactions with other players.": "我们收集与您的游戏玩法相关的数据，例如您在游戏中的行为以及与其他玩家的互动。",
    "We collect information about the device you use to access our game, including your IP address, browser type, and operating system.": "我们收集有关您用于访问我们游戏的设备的信息，包括您的IP地址、浏览器类型和操作系统。",
    "We do not sell or rent your personal information to third parties. We may share your information in the following situations:": "我们不会将您的个人信息出售或出租给第三方。我们可能会在以下情况下共享您的信息:",
    "We may collect the following types of information:": "我们可能会收集以下类型的信息:",
    "We may disclose your information if required to do so by law or in response to valid requests by public authorities.": "如果法律要求或应公共当局的有效要求，我们可能会披露您的信息。",
    "We may share your information with third-party service providers who perform services on our behalf, such as hosting and data analysis.": "我们可能会与代表我们执行服务(如托管和数据分析)的第三方服务提供商共享您的信息。",
    "We use the information we collect for the following purposes:": "我们将收集到的信息用于以下目的:",
    "Welcome to Overlord": "欢迎来到 Overlord（霸主增量）",
    "When you register for an account, we may collect personal information such as email address and username.": "当您注册一个帐户时，我们可能会收集个人信息，如电子邮件地址和用户名。",
    "With service providers:": "与服务提供商:",
    "You can request access to the personal information we hold about you.": "您可以要求查阅我们所持有的有关您的个人信息。",
    "You can request that we correct or update your personal information.": "您可以要求我们更正或更新您的个人信息。",
    "You can request that we delete your personal information, subject to certain exceptions.": "除某些例外情况外，您可以要求我们删除您的个人信息。",
    "You have the following rights regarding your personal information:": "您对您的个人信息享有以下权利:",
    "Your Choices": "你的选择",
    "Read More": "了解更多",
    "Looking for membership bonuses?": "正在寻找会员加成?",
    "armory": "装备",
    "Assign All Workers": "分配所有工人",
    "Power & ": "战力 & ",
    "section and assign workers to any factory you would like.": "菜单并将工人分配到你想要的任何工厂。",
    "section and buy any item.": "菜单并购买任何物品。",
    "Workers have been distributed.": "工人已被分配。",
    "Items have been bought.": "物品已购买。",
    "upgrades": "升级",
    "section and upgrade any attribute.": "菜单并升级你的属性。",
    "Upgrade": "升级",
    "How many developments would you like to progress?": "你希望取得多少进展?",
    "Upgrade Development": "升级进展",
    "Develop": "升级",
    "Developments have been increased successfully.": "已成功升级了进展。",
    "section and unlock any hero.": "菜单并解锁任意英雄。",
    "heroes": "英雄",
    "Confirm": "确认",
    "Recruit Hero": "招募英雄",
    "Hero has been recruited.": "英雄招募成功。",
    "Loadouts": "预设",
    "Training": "训练",
    "section and send your hero to training.": "菜单并把你的英雄送去训练。",
    "You can return your hero from training only after the next update.": "你只能在下次更新后才能从训练中返回你的英雄。",
    "You can send your hero to train and gain EXP to level up. During training, you won't benefit from the hero's buffs nor its equipped runes. When training, your energy per update increases by 100%.": "你可以让你的英雄去训练并获得升级的经验。在训练期间，你不会受益于英雄的buff和他所装备的符文。训练时，每次更新的能量增加100%。",
    "Activate": "激活",
    "Active Hero": "激活英雄",
    "PvP and Combat": "PvP 和 战斗",
    "ranking": "排行榜",
    "section and attack any player.": "菜单并攻击任意玩家。",
    "Drought": "干旱",
    "Decreases food production.": "减少粮食产量。",
    "Donate to Shrine": "捐献到神殿",
    "Latest Battles": "最近战斗",
    "Lost": "负",
    "Profile": "个人资料",
    "Rating": "星级",
    "Result": "结果",
    "Win Rate": "胜率",
    "Won": "胜",
    "No Records Found": "暂无记录",
    "has leveled up to Lv.": "已经升级到了等级",
    "View profile": "查看资料",
    "bot": "电脑",
    "Win": "胜",
    "Actions": "动作",
    "New Loadout": "新预设",
    "How much gold would you like to donate?": "你想捐献多少黄金?",
    "You have donated to the shrine successfully.": "你已经成功地向神殿捐款了。",
    "Withdraw": "取款",
    "Resources have been successfully deposited.": "资源已成功存入。",
    "Resources have been successfully withdrawn.": "资源已成功取出。",
    "Box": "宝箱",
    "Buyable": "可购买",
    "Exchange": "交换",
    "From": "从",
    "Price": "价格",
    "Ratio": "比率",
    "To": "到",
    "Vendor": "供应商",
    "You can use gems to purchase mystery boxes that contain different rewards.": "你可以使用宝石购买包含不同奖励的神秘盒子。",
    "No Active Listings": "暂无在售清单",
    "Mystery Boxes": "神秘盒子",
    "You can exchange resources from the vendor using gold in hand.": "你可以用手中的金币从供应商那里交换资源。",
    "Available": "可用",
    "Quantity": "数量",
    "Seller": "卖家",
    "Expiry": "到期时间",
    "Enter": "进入",
    "Dungeons History": "地下城历史",
    "Dungeon": "地下城",
    "Recent Dungeons": "最近地下城",
    "Enter Dungeon": "进入地下城",
    "How much energy would you like to use?": "你想使用多少能量?",
    "Active": "活跃",
    "Active Dungeon": "活跃地下城",
    "Dungeon has started!": "地下城冒险开始了!",
    "Started just now": "刚刚开始",
    "Quit Dungeon": "离开地下城",
    "Cooldown": "冷却时间",
    ". You received": "。你得到了",
    "has been completed.": "已经完成。",
    "Common": "普通",
    "Equip": "装备",
    "List": "上架",
    "Lock": "锁定",
    "Salvage": "摧毁",
    "Are you sure you want to cast this ultimate?": "确定释放该必杀技吗?",
    "Cast Ultimate": "释放必杀技",
    "Unequip": "脱下",
    "Salvage Rune": "摧毁符文",
    "Are you sure you want to salvage this rune?": "你确定要摧毁这个符文吗?",
    "Oops!": "糟糕！",
    "Loss": "败",
    "How many upgrades would you like to progress?": "您想进行多少次升级?",
    "Upgrade Power": "升级战力",
    "Upgrades have been increased successfully.": "升级成功。",
    "Population has been trained.": "人口已训练完毕。",
    "Decreases attack power.": "降低攻击力。",
    "Shrine": "神殿",
    "War Tensions": "战势紧张",
    "section and equip a rune.": "菜单并装备一个符文。",
    "hero": "英雄",
    "Runes & Auction House": "符文&拍卖行",
    "an hour ago": "一小时前",
    "dungeons": "地下城",
    "section start a dungeon.": "菜单并开始一次地下城冒险。",
    "dungeon has been completed.": "地下城冒险已完成。",
    "All Rarities": "所有品质",
    "Ascending": "升序",
    "Auction House": "拍卖行",
    "Available with Membership": "会员专属",
    "Bid": "报价",
    "Bonus Amount": "加成数量",
    "Buyout": "买断",
    "Category": "类别",
    "Created": "创建时间",
    "Epic": "史诗",
    "Descending": "降序",
    "Filters": "过滤",
    "Legendary": "传说",
    "Listings": "市场挂单",
    "Order By": "排序方式",
    "Ordering": "排序",
    "Quality": "质量",
    "Rare": "稀有",
    "Rarity": "稀有度",
    "Runes Bonus": "符文加成",
    "Uncommon": "罕见",
    "Add Bid": "增加报价",
    "How much gold would you like to bid?": "你想出价多少黄金?",
    "Remove item": "移除物品",
    "Guild ranks update daily, based on members power among all cities.": "公会排名每日更新，基于所有城市成员的力量。",
    "Create Guild": "创建公会",
    "Leaderboard": "排行榜",
    "Leader": "会长",
    "Request to Join": "请求加入",
    "Total Power": "总战力",
    "Member": "成员",
    "Player": "玩家",
    "Role": "角色",
    "Guilds List": "公会列表",
    "Deputy": "副会长",
    "Active Trades": "进行中的交易",
    "Completed Trades": "已完成的交易",
    "No Active Trades": "暂无交易",
    "No Completed Trades": "未完成的交易",
    "Create": "创建",
    "Create Trade": "创建交易",
    "Please enter a player name.": "请输入玩家名称。",
    "Error: Player name is invalid.": "错误:玩家名无效。",
    "Average ratio of gold per unit of every resource. Data updates every big update.": "每单位资源的平均黄金比率。每次大的更新都会更新数据。",
    "Blacksmith Box": "铁匠箱子",
    "How many units would you like to sell?": "你想出售多少单位的资源?",
    "List Resources": "上架资源",
    "Market listings are being used by resources in your bank only. The exchanged resources will be stored to your bank.": "市场列表只被你银行的资源使用。交换的资源将存储到您的银行。",
    "Market Ratio": "市场比率",
    "Wizard Chest": "巫师宝箱",
    "gems.": "宝石。",
    "quest has been completed. You've received": "任务已经完成。你收到了",
    "Dodge": "闪避",
    "/ Month": "/ 月",
    "+20% permanent hero EXP bonus": "+20%永久英雄经验奖励",
    "10 max listings": "最多上架10个",
    "10 max loadouts": "10最大负载",
    "10/11": "10/11",
    "12 hours auction expiry": "12小时拍卖到期",
    "12 hours market expiry": "12小时市场到期",
    "24 hours market expiry": "24小时市场到期",
    "3 daily quests": "3 日常任务",
    "400 Gems on first buy": "首次购买可获得400个宝石",
    "5 daily quests": "5 日常任务",
    "5 max deposits": "5 最大存款",
    "5 max listings": "最多5个上架列表",
    "5 max loadouts": "5 预设上限",
    "6 hours auction expiry": "6小时拍卖截止",
    "7 max deposits": "7 最大存款",
    "Buy Plan": "购买计划",
    "Cool name decoration and animation": "酷的名字装饰和动画",
    "Current Plan": "当前方案",
    "Enabled auction filtering": "启用拍卖过滤",
    "Free Package": "免费礼包",
    "Members Package": "会员礼包",
    "No additional gems": "没有额外的宝石",
    "No auction filtering": "无拍卖过滤",
    "No hero EXP bonus": "没有英雄经验奖励",
    "No name decorations": "没有名字装饰",
    "Popular": "最受欢迎",
    "Affects your attack power.": "影响你的攻击力。",
    "Cast Spells": "施放法术",
    "Ultimate has been activated!": "必杀技已激活!",
    "yesterday": "昨天",
    "Patch Notes": "更新日志",
    "Community": "社区",
    "Food Gathering": "食物收集",
    "Attack Players": "攻击玩家",
    "Collected": "已收集",
    "Information": "信息",
    "Duration": "持续时间",
    "Aspect": "外观",
    "Chaos": "混乱",
    "Camps": "营地",
    "Guide": "指南",
    "Type": "类型",
    "Purity": "纯净",
    "This camp obtains you with a randomly different rune with the same level of quality.": "这个营地可以让你获得一个随机不同的符文，但质量相同。",
    "This camp offers the ultimate gamble, completely randomizing both the type and quality of your rune.": "这个营地提供了终极抽奖，完全随机化你的符文的类型和质量。",
    "This camp randomizes the quality of your item, potentially improving or diminishing its power, while keeping the rune type unchanged.": "这个营地随机化你的物品的质量，潜在地提高或减少它的力量，同时保持符文类型不变。",
    "Are you sure you want to cast this spell?": "你确定你想要施展这个法术吗?",
    "bank": "银行",
    "Beginner's Gift": "新手赠礼",
    "Cast": "施法",
    "Cast Spell": "施放法术",
    "section and deposit any resource.": "菜单并存放任何资源。",
    "Spell has been cast successfully.": "法术已成功施放。",
    "and completed the tutorial! Best of luck!": "并完成了教程!祝你好运!",
    "Are you sure you want to open this box?": "你确定要打开这个盒子吗?",
    "Metal Gathering": "金属收集",
    "Open Box": "打开宝箱",
    "Title": "头衔",
    "You have completed": "你已完成",
    "Battle Results": "战果",
    "Increases energy regeneration.": "提升能量回复。",
    "Energy Surge": "能量涌动",
    "one minute ago": "一分钟前",
    "No History": "无记录",
    "Camp History": "营地记录",
    "Active Camp": "活跃营地",
    "Exit Camp": "退出营地",
    "Rune Selection": "选择符文",
    "Start": "开始",
    "You have entered the camp.": "你已经进入了营地。",
    "camp expedition has been completed.": "营地探险已经完成。",
    "Changes": "变化",
    "FOOD": "食物",
    "SPELL": "法术",
    "Win Battles": "战斗胜利",
    "just now": "刚刚",
    "GOLD": "黄金",
    "DEF": "防御",
    "Please enter the guild name.": "请输入公会名称。",
    "May be 3-32 characters long and contain letters, numbers and spaces.": "长度为3-32个字符，包含字母、数字和空格。",
    "Go to Guild": "前往公会",
    "Guild has been created!": "公会已经创建!",
    "Edit Speech": "编辑公告",
    "The guild has no speech.": "公会暂无公告。",
    "Taxes": "税收",
    "Leave Guild": "退出公会",
    "Chat": "聊天",
    "Set Taxes": "设置税收",
    "Taxes have been changed successfully.": "税收变更成功。",
    "Taxes have been set to": "税收已经设为",
    "Save": "保存",
    "Please confirm this action.": "请确认此动作。",
    "Taxes have been paid successfully.": "税款已顺利缴纳。",
    "Paid taxes": "已交税",
    "has contribued": "贡献了",
    "gold": "黄金",
    "EXP": "经验",
    "Contribution": "贡献",
    "No Data": "无数据",
    "Raid": "突袭",
    "Unequip All": "全部脱下",
    "Active Boss": "当前Boss",
    "Are you sure you want to attack?": "您确定要发起进攻？",
    "Attack Boss": "攻击Boss",
    "Attack has been initiated.": "已发起攻击。",
    "Boss Raid": "Boss突袭",
    "Guild boss has spawned": "公会Boss已出现",
    "Guild has leveled up to": "公会升级到了等级",
    "Defeated": "已击败",
    "Guild boss has been defeated": "公会Boss被击败了",
    "Guild boss has been defeated!": "公会Boss被击败了！",
    "Each member can spend energy and food to participate the boss raid. When defeated, the boss will grant all guild members a random buff for 8 hours.": "每个成员都可以消耗能量和食物来参与boss突袭。当被击败时，Boss将给予所有公会成员一个随机Buff，持续8小时。",
    "Active Buffs": "当前Buff",
    "WOOD": "木头",
    "Increases metal production.": "提高金属产量。",
    "Metal Boom": "金属繁荣",
    "New Trade": "发起交易",
    "Send trade requests to other players. Resources transfered via trade will be taxed by 5%.": "向其他玩家发送交易请求。通过交易转移的资源将被征收5%的税。",
    "You have received a new artifact:": "您获得了新的神器:",
    "List Rune": "上架符文",
    "Please choose the minimum gold bid": "请选择最低黄金出价",
    "Sell Items": "出售物品",
    "Sell": "出售",
    "Items have been sold.": "物品已售出。",
    "Affects your defense power.": "影响你的防御力。",
    "Player is Protected": "玩家受保护",
    "Deny": "拒绝",
    "Accept": "同意",
    "has joined the guild": "加入了公会",
    "Did not pay taxes": "未交税",
    "Kick": "踢出",
    "Add Deputy": "设为副会长",
    "ATT": "攻击",
    "EREG": "闪避",
    "METAL": "金属",
    "Timeless Wand": "永恒魔杖",
    "G. EXP": "公会经验",
    "Player is inactive": "玩家不活跃",
    "C.DMG": "暴击伤害",
    "Request has been accepted successfully.": "申请已成功接受。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Frostwarden's Helm": "寒霜头盔",
    "Rune of Destruction": "毁灭符文",
    "Rune of Endurance": "耐力符文",
    "Gem of Eternal Flames": "永恒之火宝石",
    "Amulet of Agility": "敏捷护身符",
    "Rune of Evasion": "闪避符文",
    "Rune of Prosperity": "繁荣符文",
    "Rune of Vitality": "活力符文",
    "Brightwood": "亮木镇",
    "Rune of Fury": "愤怒符文",
    "Rune of Abundance": "丰饶符文",
    "Rune of Timber": "木之符文",
    "Rune of Plunder": "掠夺符文",
    "Rune of Fortitude": "坚韧符文",

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
    "bolt_fill": "bolt_fill",
    "chevron_down": "chevron_down",
    "close_round": "close_round",
    "reload_round_fill": "reload_round_fill",
    "flag_fill": "flag_fill",
    "world": "world",
    "star_fill": "star_fill",
    "Gityx": "Gityx",
    "O": "O",
    "Kingdom": "Kingdom",
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
    "                                                    ": "                                                    ",
    "                                ": "                                ",
    "                            ": "                            ",
    "             ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "              ",
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
    "\t\t\t\t\t\t\t\t\t": "\t\t\t\t\t\t\t\t\t",
    "\t\t\t\t\t\t\t\t    ": "\t\t\t\t\t\t\t\t    ",
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t\t": "\t\t",
    "\t": "\t",
    "\n": "\n",
    "The year is 2378. The gods of Olympus have returned to our universe and have challenged Earth. In order for Earth to continue to exist, the finest Heroes from every corner must face a legion of Titans across the galaxy and, ultimately, face the gods to prove their might. Create your hero now, and help Earth conquest over the Titans!": "这一年是 2378 年。奥林匹斯山的众神已经回到我们的宇宙并向地球发起挑战。 为了让地球继续存在，来自各个角落的最优秀的英雄必须面对银河系中的泰坦军团，并最终面对众神来证明他们的力量。 现在就创造你的英雄，帮助地球战胜泰坦！",
    "XP to ": "经验到达 ",
    "Unlocks at Lv ": "解锁于等级 ",
    "Tutorial: ": "教程: ",
    "Event: ": "事件: ",
    "Hero: ": "英雄: ",
    "Race: ": "种族: ",
    "Shrine: ": "神殿: ",
    "Wood: ": "木头: ",
    "Food: ": "食物: ",
    "Base: ": "基础: ",
    "Guild: ": "公会: ",
    "Total: ": "总计: ",
    "Metal: ": "金属: ",
    "Gold: ": "黄金: ",
    "Duration: ": "持续时间: ",
    "Cooldown: ": "冷却时间: ",
    "Workers (FREE: ": "工人 (空闲: ",
    "Population (Available: ": "人口 (可用: ",
    "Players: ": "玩家: ",
    "EXP: ": "经验值: ",
    "EXP/Update: ": "经验值/更新: ",
    "Levels up in ~": "距离升级还有 ~",
    "(Tier ": "(层级 ",
    "Loadouts (": "预设 (",
    "Deposit (": "存款 (",
    "Vendor: ": "供应商: ",
    "Artifact Chance: ": "神器掉率: ",
    "You don't have this amount of workers (": "你没有这么多工人 (",
    "Rank #": "排名 #",
    "Full in ~": "回满大约 ~",
    "Not Enough Food (": "食物不足 (",
    "Not Enough Energy (": "能量不足 (",
    "Please choose the amount of gold (Max: ": "请选择黄金的数量 (最多:",
    "Pay Taxes": "支付税收",
    "Attack (": "攻击 (",
    "Grade: ": "品质: ",
    "Requests (": "申请 (",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "\n\t\t\t\t\t\t\t\t": "\n\t\t\t\t\t\t\t\t",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "We will send you a link to reset it!": "我们将向您发送重置链接！",
    " claimed a free Defense Booster!": " 领取了一个免费的防御助推器！",
    " just registered!  Welcome!": " 刚刚注册了！欢迎！",
    "% Workers Gold": "% 工人黄金",
    "% Workers Metal": "% 工人金属",
    "% Workers Wood": "% 工人木材",
    "% PvP Loot": "% PvP 战利品",
    "% Dodge Chance": "% 闪避几率",
    "% Energy Regen": "% 能量回复",
    "% Energy Capacity": "% 能量上限",
    "% Attack Power": "% 攻击力",
    "% Defense Power": "% 防御力",
    "% Hero EXP": "% 英雄经验",
    "Crit. Damage": "暴击伤害",
    "Crit. Chance": "暴击几率",
    "Dodge Chance": "闪避几率",
    "Energy Regen": "能量回复",
    "Energy Capacity": "能量上限",
    "Hero EXP": "英雄经验值",
    "PvP Loot": "PvP 战利品",
    "Workers Food": "工人食物",
    "Workers Gold": "工人黄金",
    "Workers Metal": "工人金属",
    "Workers Wood": "工人木头",
    "Go to the": "前往",
    "Welcome to Overlord! Your main goal is to maintain and enhance your base while gaining power and control.": "欢迎来到霸主增量!你的主要目标是维持和加强你的基地，同时获得权力和控制。",
    "Soldiers and horsemen will increase your attack and defense power, contributing directly to your rank, while workers will help generate resources necessary for your development.": "士兵和骑兵将增加你的攻击和防御能力，直接贡献你的等级，而工人将帮助产生必要的资源，为你的发展。",
    "Armory": "装备",
    "Modifiers": "词缀",
    "Total": "总计",
    "Upgrades": "升级",
    " / day": " / 天",
    "Chief of Staff": "参谋长",
    "Daily Routine": "日常生活",
    "Deadly Attacker": "致命的攻击者",
    "Dodge Master": "闪避大师",
    "Educated": "训练有素",
    "Energizer": "劲量",
    "Experienced Leader": "经验丰富的领导者",
    "Food Provider": "食物供应者",
    "Generous Donator": "慷慨的捐赠者",
    "Gold Hoarder": "黄金囤积者",
    "Hungry for Power": "渴望权力",
    "Lucky Bastard": "幸运的混蛋",
    "Master Recruiter": "招募高手",
    "Metal Gatherer": "金属采集师",
    "Milestone Achiever": "里程碑达成者",
    "Most Effective": "最有效的",
    "Power Surge": "电涌",
    "Resource Protector": "资源保护者",
    "Rune Disposer": "符文碎渣机",
    "Rune Enchanter": "符文法师",
    "Soldiers Capturer": "士兵捕获者",
    "Triumphant": "凯旋",
    "Unleashed Spender": "挥霍无度者",
    "Wizard": "巫师",
    "Wood Collector": "木材收藏家",
    "s / Energy": "秒 / 能量",
    "Workers are crucial for resource production. You can assign workers to various factories such as gold, wood, metal, and food. The number of workers you assign to each factory, along with the factory's upgrade level and your city's attributes, will determine your resource income per update, which occurs every 15 minutes.": "工人对资源生产至关重要。你可以分配工人到不同的工厂，如黄金，木材，金属和食品。你分配给每个工厂的工人数量，以及工厂的升级级别和你的城市属性，将决定你每次更新的资源收入，每15分钟发生一次。",
    "Your rank in the game is determined by your total power, which is an average of your attack and defense stats. Increasing your power can be done through the armory, where you can buy items that boost your attack or defense. You can buy multiple items, and each will permanently increase your power. Beware that the amount of items you can buy is capped by the amount of soldiers that you own.": "你在游戏中的排名是由你的总战力决定的，这是你攻击和防御属性的平均值。增加你的战力可以通过装备，在那里你可以购买道具，提高你的攻击或防御。你可以购买多种道具，每一种道具都将永久提升你的战力。注意，你可以购买的物品数量是由你拥有的士兵数量限制的。",
    "Upgrades are vital for enhancing your power and resource production. You can upgrade power attributes and resources production in exchange for resources. As you progress, moving to higher-level cities will provide better game modifiers and overall benefits.": "升级对于提高你的力量和资源生产是至关重要的。你可以通过升级能量属性和资源生产来换取资源。随着你的进步，搬到更高等级的城市将提供更好的游戏修改和整体利益。",
    "Heroes provide permanent buffs to various aspects of the game. You can unlock different types of heroes using gems. Each hero offers unique bonuses that will help you in your journey. You can always change which hero is active at any given time.": "英雄为游戏的各个方面提供永久的buff。你可以使用宝石解锁不同类型的英雄。每个英雄提供独特的奖励，将帮助你在你的旅程。你可以随时改变哪个英雄处于活动状态。",
    " / update": " / 更新",
    "Heroes gain experience (EXP) any tick if they have been sent on training. However, while a hero is training, their buffs will not be active. Once they level up, the bonuses they provide will increase permanently.": "如果英雄被送去训练，他们会获得经验值(EXP)。然而，当英雄在训练时，他们的buff将不会被激活。一旦他们升级，他们提供的奖励将永久增加。",
    "You can attack other players in your city using food and energy that is replenished every tick. Winning battles can loot resources and enslave the defender's soldiers, turning them into your workers, up to 5 times a day per player.": "你可以使用食物和能量攻击城市中的其他玩家。赢得战斗可以掠夺资源和奴役防守方的士兵，将他们变成你的工人，每个玩家每天最多5次。",
    "Dodge Modifier": "闪避词缀",
    "Crit. Modifier": "暴击词缀",
    "  Shards": "碎片",
    "  Bonus": "加成",
    "  Quality": "质量",
    " missing).": " 消失了).",
    "Runes provide various bonuses when equipped to heroes. They can be found in battles or bought from the auction house. Runes come in different rarities, affecting their strength. You can also salvage runes for shards to upgrade others.": "当英雄装备符文时，符文提供各种加成。它们可以在战斗中找到或从拍卖行购买。符文有不同的稀有性，影响它们的强度。你也可以用摧毁符文的碎片来升级其它符文。",
    "Open the spells on top menu and cast any spell.": "打开顶部菜单上的法术并施放任何法术。",
    "Spells give temporary buffs and can be cast using gems. Each spell has a duration and a cooldown period. You can cast multiple spells simultaneously if you have enough gems and the spells are not on cooldown.": "法术提供临时buff，可以使用宝石施放。每个法术都有持续时间和冷却时间。如果你有足够的宝石并且这些法术没有冷却时间，你可以同时施放多个法术。",
    "You can use energy to enter dungeons. Each dungeon requires a minimum level of hero levels (total level of all heroes) and required total power. The amount of energy spent sets the duration and the resources you get. Dungeons have cooldowns and have a chance to drop artifacts, which adds different modifiers to your player.": "你可以使用能量进入地下城。每个地下城都需要最低的英雄等级(所有英雄的总等级)和总能量。消耗的能量决定了持续时间和获得的资源。地下城有冷却时间，并且有机会掉落神器，这为玩家添加了不同的修饰。",
    "  Title": "头衔",
    "  Spells Duration": "法术持续时间",
    "  Resources": "资源",
    "  Attack Power": "攻击力",
    "  Artifact": "神器",
    "  Rune": "符文",
    "Support the developers and get sweet benefits!": "支持开发人员并获得甜蜜的利益!",
    "   Available Forges": "可用锻造",
    "The bank is a secure place to deposit your resources. Depositing resources protects them from being looted in PvP battles and gains interest every big update. You can deposit up to 50% of any resource, and your deposits are limited. Utilizing the bank efficiently can help you accumulate resources safely over time.": "银行是存放你财产的安全地方。储存资源可以防止他们在PvP战斗中被掠夺，并在每次大更新中获得利益。您可以存入任何资源的50%，并且您的存款是有限的。随着时间的推移，有效利用银行可以帮助你安全地积累资源。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^([\d\.]+):([\d\.]+):([\d\.]+) PM$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+) AM$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^(.+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+) \- ([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^(.+) ([\d\.]+):([\d\.]+):([\d\.]+) \- ([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\%$/,
    /^\+([\d\.]+)\%$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^\~([\d\.]+)h$/,
    /^\~([\d\.]+)d$/,
    /^\~([\d\.]+)m$/,
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
    /^([\d\.]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+) \/ ([\d\.]+)M$/,
    /^([\d\.]+)K \/ ([\d\.]+)K$/,
    /^([\d\.]+)K \/ ([\d\.]+)M$/,
    /^([\d\.]+)M \/ ([\d\.]+)M$/,
    /^([\d\.]+) \/ ([\d\.]+)K$/,
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
    [/^(.+) Game Version (.+)$/, '$1 游戏版本 $2'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Are you sure you want to recruit this hero for (.+) gems\?$/, '你确定要用 $1 宝石招募这个英雄吗?'],
    [/^Dungeon will last (.+) minutes for (.+) energy.$/, '地下城将持续 $1 分钟，消耗 $2 能量。'],
    [/^Spend (.+) energy on dungeons.$/, '在地下城消耗 $1 能量。'],
    [/^Win (.+) battles.$/, '获胜 $1 次战斗。'],
    [/^Cast (.+) spells.$/, '施放 $1 次法术。'],
    [/^Gather (.+) gold.$/, '收集 $1 黄金。'],
    [/^Gather (.+) metal.$/, '收集 $1 金属。'],
    [/^Gather (.+) food.$/, '收集 $1 食物。'],
    [/^Attack players (.+) times.$/, '攻击玩家 $1 次。'],
    [/^Gather (.+) wood.$/, '收集 $1 木头。'],
    [/^Donate (.+) gold to shrine.$/, '捐献 $1 黄金到神殿。'],
    [/^Gather (.+) gold.$/, '收集 $1 黄金。'],
    [/^Started (.+) minutes ago$/, '开始于 $1 分钟前'],
    [/^Showing (.+) to (.+) of (.+) entries$/, '显示 $1 到 $2 条  总计: $3'],
    [/^Next Event on (.+)!$/, '下一场活动将于 $1 举行！'],
    [/^(.+) just won (.+) Ancient Coins from the lottery!$/, '$1 刚刚从彩票中赢得了 $2 古币！'],
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
    [/^([\d\.]+) \/ ([\d\.,]+) EXP$/, '$1 \/ $2 经验值'],
    [/^([\d\.,]+)h$/, '$1 小时'],
    [/^([\d\.,]+)m$/, '$1 分钟'],
    [/^([\d\.,]+)d$/, '$1 天'],
    [/^([\d\.,]+) minutes ago$/, '$1 分钟前'],
    [/^([\d\.,]+) hours ago$/, '$1 小时前'],
    [/^([\d\.,]+) days ago$/, '$1 天前'],
    [/^([\d\.,]+) Hour$/, '$1 小时'],
    [/^([\d\.,]+) Hours$/, '$1 小时'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) gems to unlock$/, '花费 $1 宝石以解锁'],
    [/^\+(.+) Random Resource$/, '\+$1 随机资源'],
    [/^\+([\d\.,]+) Random Rune$/, '\+$1 随机符文'],
    [/^\+([\d\.,]+) Population$/, '\+$1 人口'],
    [/^\+([\d\.,]+) DEF$/, '\+$1 防御'],
    [/^\+([\d\.,]+)\% SPELL$/, '\+$1\% 法术'],
    [/^\+([\d\.,]+)\% C.DMG$/, '\+$1\% 暴击伤害'],
    [/^\+([\d\.,]+)\% ECAP$/, '\+$1\% 能量上限'],
    [/^\+([\d\.,]+)\% WOOD$/, '\+$1\% 木头'],
    [/^\+([\d\.,]+)\% EREG$/, '\+$1\% 能量回复'],
    [/^\+([\d\.,]+)\% FOOD$/, '\+$1\% 食物'],
    [/^\+([\d\.,]+)\% GOLD$/, '\+$1\% 黄金'],
    [/^\+([\d\.,]+)\% METAL$/, '\+$1\% 金属'],
    [/^\+([\d\.,]+)\% DODGE$/, '\+$1\% 闪避'],
    [/^\+([\d\.,]+)\% DEF$/, '\+$1\% 防御'],
    [/^\+([\d\.,]+)\% ATT$/, '\+$1\% 攻击'],
    [/^\+([\d\.,]+)\% PVP$/, '\+$1\% PVP'],
    [/^\+([\d\.,]+) ATT$/, '\+$1 攻击'],
    [/^\+([\d\.,]+) Gems$/, '\+$1 宝石'],
    [/^\+([\d\.,]+) Shards$/, '\+$1 碎片'],
    [/^Spartan Warrior ([\d\.,]+)$/, '斯巴达战士 $1'],
    [/^Season ([\d\.,]+)  \- Level ([\d\.,]+)$/, '赛季 $1 \- 等级 $2'],
    [/^Purity Forge Camp ([\d\.,]+)$/, '纯净锻造营地 $1'],
    [/^Aspect Forge Camp ([\d\.,]+)$/, '外观锻造营地 $1'],
    [/^Chaos Forge Camp ([\d\.,]+)$/, '混乱锻造营地 $1'],
    [/^Lv. ([\d\.,]+)$/, '等级 $1'],
    [/^Day ([\d\.,]+)$/, '第 $1 天'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
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