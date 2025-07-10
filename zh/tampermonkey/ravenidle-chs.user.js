// ==UserScript==
// @name         Ravenidle 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.3
// @description  网页游戏 Ravenidle (https://game.ravenidle.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Ravenidle.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://game.ravenidle.com/favicon.ico
// @license      MIT
// @include      *https://game.ravenidle.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/07/04 23:31
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
    "Our Munk is hard at work! This page is getting some upgrades.": "我们的蒙克在努力工作！此页面正在进行一些升级。",
    "This page is under maintenance 🛠️": "此页面正在维护中 🛠️",
    "An Archetype said to have originated from ancient vampiric cults, Witchcraft users mix occult powers with the ability to gain strength from the weaknesses of others. There is no one better than a Witchcraft user at finding an enemy’s flaw and exploiting it to their advantage… which makes them incredibly dangerous foes.": "一个原型据说起源于古老的吸血鬼崇拜，巫术使用者将神秘的力量与从他人的弱点中获得力量的能力结合在一起。没有人比巫术玩家更擅长发现敌人的弱点，并将其转化为自己的优势，这让他们成为非常危险的敌人。",
    "Bending the elements to their will, Wizardry users harness the power of Ice and Fire to devastate their enemies. Whether igniting foes in flames or ensnaring them in ice, Wizardry users call upon powerful single-target and area spells to deal massive amounts of damage on the battlefield. With the potential to single-handedly shift the tide of battle, a user of this Archetype is truly an arcane force to be reckoned with.": "魔法使用者将元素转化为自己的意志，利用冰与火的力量来毁灭敌人。无论是在火焰中点燃敌人还是在冰中诱捕敌人，巫师使用者都可以使用强大的单目标和区域法术在战场上造成巨大的伤害。拥有单枪匹马改变战斗潮流的潜力，这个原型的使用者确实是一个不可忽视的奥术力量。",
    "Channeling the restorative light of the Dawn, White Magic is the primary healing Archetype in the world of RavenQuest. While this Archetype focuses on keeping its user and their allies alive on the field of battle, the full power of the Dawn should not be underestimated… skilled users can call down its holy force to smite their enemies where they stand.": "在《RavenQuest》的世界中，白色魔法是主要的治疗原型，引导着黎明的恢复之光。虽然这个原型专注于让它的用户和他们的盟友在战场上存活下来，但黎明的全部力量不应该被低估，熟练的用户可以召唤它的神圣力量来打击他们的敌人。",
    "Strong-footed and brave, these users never lose their unbreakable spirit in the heat of battle. The preferred Archetype of the mighty Ravenguard, users of Protection are often found in the vanguard of armies, defending their allies and bashing in the skulls of their enemies. Their morale in battle is legendary, a powerful force which affects friend and foe alike.": "这些人身强力壮，勇敢无畏，在激烈的战斗中从不失去坚不可摧的精神。作为强大的乌鸦守卫的首选原型，使用保护技能的人经常出现在军队的先锋中，保护他们的盟友并打击敌人的头骨。他们在战斗中的士气是传奇的，这是一种影响朋友和敌人的强大力量。",
    "Users of the Spiritual Archetype have a supernatural calm, able to focus intensely upon the invisible threads that tie the world together. With a honed mind, they can summon these forces to aid their allies—protecting them with barriers of wind, hastening their movements, and refreshing their dwindling stores of mana. An adept of Spiritual Magic is an invaluable member to any team.": "精神原型的使用者有一种超自然的平静，能够强烈地专注于将世界联系在一起的看不见的线索。经过磨练的头脑，他们可以召唤这些力量来帮助他们的盟友——用风的屏障保护他们，加速他们的行动，并补充他们日益减少的魔法储备。一个精通精神魔法的人对任何团队来说都是无价的。",
    "Using the shadows as a cloak, users of this Archetype prefer to extinguish the lives of their victims without ever being seen. The Shadow Archetype makes use of toxins and deception to weaken targets before dealing a fatal blow. Shadow users are heralds of death—by the time you’ve seen one, you’re already dead.": "使用阴影作为斗篷，这种原型的使用者更喜欢在不被发现的情况下消灭受害者的生命。暗影原型在对目标进行致命一击之前，利用毒素和欺骗来削弱目标。暗影使用者是死亡的先驱者——当你看到一个的时候，你已经死了。",
    "With a ravenous appetite for bloodshed, Warfare is the favored Archetype of orcs and barbarians. Users of this Archetype specialize in brute force combat, able to draw upon the lifeblood they’ve spilled to heal themselves and strengthen their savage attacks. A Warfare user in the throes of bloodlust and hatred is a terrible sight to behold.": "战争对流血有着贪婪的欲望，是兽人和野蛮人最喜欢的原型。这个原型的使用者专门从事蛮力战斗，能够利用他们溢出的生命来治疗自己并加强他们的野蛮攻击。一个战争使用者在嗜血和仇恨的阵痛中是一种可怕的景象。",
    "With the eyes of a hawk and the swiftness of a falcon, Archery users outpace their opponents with speed and vision. Ranged combat is this Archetype’s specialty, empowering its users with an array of deadly arrows to be shot from afar. And if an enemy gets too close—an Archery user can draw upon disengage abilities to slow their opponent and create enough separation for a killing shot. The Rohna Brotherhood has been able to evade the Ravenguard for decades, largely due to the strength of this Archetype.": "拥有鹰的眼睛和鹰的敏捷，弓箭手在速度和视野上超过对手。远程战斗是这个原型的专长，赋予它的用户从远处射出的致命箭阵。如果敌人靠得太近，弓箭玩家可以利用脱离技能来减缓对手，并创造足够的距离来进行致命一击。几十年来，罗赫纳兄弟会一直能够躲避乌鸦守卫，很大程度上是由于这个原型的力量。",
    "Archery": "射箭",
    "Create your Character": "创建你的角色",
    "Holy": "神圣",
    "Next Step": "下一步",
    "Protection": "保护",
    "Select Your Archetype": "选择你的原型",
    "Shadow": "暗影",
    "Spiritual": "精神",
    "Warfare": "战争",
    "Witchcraft": "巫术",
    "Wizardry": "魔法",
    ", and also applies a": "，也适用于",
    ", and reduces": "，并减少",
    ", applying a": "，应用",
    ", applying a Pulse stack.\n\nEach stack of Pulse reduces target's": "，应用脉冲堆栈。每一叠脉冲减少目标的伤害",
    ", applying a stack of fireball.\n\nEach stack of fireball deals": "，应用一堆火球。\n\每一堆火球造成",
    ", up to": "，一直到",
    ".\n\nDeals": ".\n\n造成",
    ".\n\nEvery third": "。\n\n每三",
    ". Every subsequent stack will refresh the duration.\n\nEvery third Fireball, deals an additional": "。每个后续堆栈将刷新持续时间。每隔第三个火球，造成额外伤害",
    ". Every third": "。每三",
    "(Attack Power)": "（攻击力）",
    "(Defense Power)": "（防御力）",
    "(Weapon Defense)": "（武器防御）",
    "additional damage.": "额外伤害。",
    "and": "和",
    "and applies": "并应用",
    "and reduces target's": "降低目标的",
    "and reduces the target's": "并减少目标的",
    "Applies a Curse that deals": "施放一个造成伤害的诅咒",
    "Arcane Pulse": "神秘的脉冲",
    "Arcane Torrent": "神秘的洪流",
    "Bash": "重击",
    "bleed": "流血",
    "Brutal Strike": "野蛮打击",
    "by": "由",
    "Casts a cyclone dealing": "释放旋风攻击",
    "Channeling": "通灵",
    "Concussive Shot": "震荡射击",
    "Cooldown:": "冷却时间:",
    "critical hit": "重击",
    "Curse": "诅咒",
    "Cyclone": "旋风",
    "Dawn's Light": "黎明之光",
    "deals": "造成",
    "Deals": "造成",
    "deals an additional": "额外造成1次",
    "Erupt": "爆发",
    "every": "每一个",
    "every turn for": "每一个回合",
    "Fireball": "火球",
    "fires an additional Wind Arrow at": "额外发射一支风箭",
    "Flash Heal": "闪电治愈",
    "for": "用于",
    "Frostbolt": "冰箭",
    "Guillotine": "斩首",
    "has a guaranteed chance to": "有一定几率吗",
    "healing": "治疗",
    "Heals": "治疗",
    "heals a bonus": "额外治疗",
    "Heals the target for": "治疗目标",
    "heals you for": "治愈你",
    "Heals yourself by": "治愈自己",
    "Mana Cost:": "法力消耗:",
    "more damage per Pulse stack on target.": "每个脉冲叠加对目标造成更多伤害。",
    "of Deep Burning on target.\n\nEach Deep Burning stack deals": "深度燃烧击中目标。每个深度燃烧堆栈都有效果",
    "other targets.": "其他的目标。",
    "per turn for": "每回合",
    "per turn to a target for": "每回合到一个目标为",
    "Quick Slash": "快速削减",
    "Range:": "范围:",
    "received by": "收到",
    "Regenerate": "回复",
    "Shadow Blind": "暗影致盲",
    "Shadowstrike": "暗影打击",
    "Shieldbreak": "破盾",
    "Shoots a frostbolt that deals": "射出冰箭，造成伤害",
    "Shoots an arrow that deals": "射出的箭能起作用",
    "Shoots fireball at target that deals": "向目标发射火球",
    "Skill Points:": "技能点:",
    "Slashes the target, dealing": "斩击目标，造成伤害",
    "slowing": "减速",
    "slows": "减速",
    "Smite": "击杀",
    "Smiting Smash": "锤击粉碎",
    "snares": "陷阱",
    "Spirits Resolve": "精神解决",
    "Stabs the target, dealing": "刺向目标，造成伤害",
    "Swings your weapon with force, dealing": "用力挥舞你的武器，造成",
    "that deals": "这个交易",
    "the target by": "目标为",
    "the target for": "目标为",
    "them by": "他们通过",
    "Throws a shadow net that": "投下阴影的网",
    "to all targets hit.": "击中所有目标。",
    "to all targets, lowering their": "对所有目标，降低他们的",
    "to the all targets every": "到所有的目标",
    "to the main target and": "到主要目标和",
    "to the other targets, causing": "对其他目标，造成",
    "to the target and applies poison that deals": "对目标施放造成伤害的毒药",
    "to the target for": "到目标",
    "to the target.": "瞄准目标。",
    "to the target.\n\nEvery third cast bounces off to": "瞄准目标。\n\每三次投射就会反弹到",
    "to the target. Every third": "瞄准目标。每三",
    "up to": "直到",
    "Viper Arrow": "毒蛇箭",
    "Whirlwind": "旋风",
    "will deal": "将造成",
    "Wind Arrow": "风箭",
    "Back": "返回",
    "Cancel": "取消",
    "Gender": "性别",
    "Choose Your Name": "选择你的游戏名称",
    "OK": "确定",
    "Referral Code (Optional)": "推荐代码（可选）",
    "Start the game": "开始游戏",
    "Try again later.": "请稍后再试。",
    "Unable to perform action.": "无法执行操作。",
    "Attack Power": "攻击力",
    "Battle Pass": "战斗通行证",
    "Character": "角色",
    "Cooldown": "冷却时间",
    "Crafting": "制作",
    "Critical Chance": "暴击率",
    "Critical Damage": "暴击伤害",
    "Defense Power": "防御力",
    "Dexterity": "灵巧",
    "Dungeons": "地下城",
    "Equipment": "装备",
    "Gameplay": "游戏玩法",
    "Gathering": "采集",
    "Gender": "性别",
    "Gladiator Arena": "角斗士竞技场",
    "Haste": "急速",
    "Healing Power": "治疗之力",
    "Health Regeneration": "生命回复",
    "Infusion": "灌注",
    "Intelligence": "智力",
    "Inventory": "背包",
    "Land": "土地",
    "Leaderboard": "排行榜",
    "Magic Attack": "魔法攻击",
    "Magic Defense": "魔法防御",
    "Mana Regeneration": "法力回复",
    "Max Health": "最大生命值",
    "Max Mana": "最大法力值",
    "Merchant": "商人",
    "Might": "实力",
    "Miscellaneous": "杂项",
    "Monsters": "怪物",
    "Munk Shop": "蒙克商店",
    "NO CLASS": "暂无职业",
    "Physical Attack": "物理攻击",
    "Physical Defense": "物理防御",
    "Points": "积分",
    "Primary Attributes": "主要属性",
    "Prize Pool": "奖池",
    "Professions": "职业",
    "Progression": "进展",
    "Referral Code (Optional)": "推荐代码（可选）",
    "RESET": "重置",
    "SAVE": "保存",
    "Secondary Attributes": "次要属性",
    "Skill Tree": "技能树",
    "Start the game": "开始游戏",
    "Tradepacks": "交易礼包",
    "Trophies": "奖杯",
    "Try again later.": "请稍后再试。",
    "Unable to perform action.": "无法执行操作。",
    "UNLOCK 6 SLOTS": "解锁6个槽位",
    "Utilities (optional)": "实用工具（可选）",
    "Vitality": "活力",
    "Wisdom": "智慧",
    "Woof!\nDouble click here to equip this item!": "汪！双击这里装备这个物品！",
    "You": "你",
    "Alchemy": "炼金",
    "Blacksmithing": "锻造",
    "Carpentry": "木工",
    "Cooking": "烹饪",
    "Weaving": "编织",
    "Incredible!\nClick here to start crafting!": "不可思议！\n点击这里开始制作！",
    "Next": "下一个",
    "CRAFT": "制作",
    "xp": "经验值",
    "Rock": "石头",
    "Rewards": "奖励",
    "Salt": "盐",
    "Required Level": "要求等级",
    "Legs": "腿部",
    "Leave": "离开",
    "Leather": "皮革",
    "Level": "等级",
    "Level Up": "升级",
    "Let's go": "出发",
    "Linking": "链接",
    "Loot": "战利品",
    "medium": "中",
    "Mining": "采矿",
    "mining": "采矿",
    "Mining Volume": "采矿音量",
    "Cooking Volume": "烹饪音量",
    "Woodcutting Volume": "伐木音量",
    "minutes": "分钟",
    "Name": "名称",
    "Normal": "正常",
    "On": "开",
    "Rats": "老鼠",
    "hard": "困难",
    "Head": "头部",
    "Iron Ore": "铁矿石",
    "Battle": "战斗",
    "Bee": "蜜蜂",
    "Basic": "基础",
    "Base": "基础",
    "Beetle": "甲虫",
    "$QUEST Tokens": "$任务代币",
    "Boots": "脚部",
    "Bow": "弓",
    "Boosters": "助推器",
    "Boost": "提升",
    "Back to the game": "返回游戏",
    "attack speed": "攻击速度",
    "Armor": "盔甲",
    "Copper Ore": "铜矿石",
    "Confirm": "确认",
    "onfirm New Password": "确认新密码",
    "days": "天",
    "Fishing": "钓鱼",
    "Food": "食物",
    "hours": "小时",
    "Munk Coins,": "蒙克币，",
    "No class": "无职业",
    "Potions": "药水",
    "Profile": "个人资料",
    "Position": "位置",
    "Recent Loot": "最近战利品",
    "Referrals": "邀请",
    "Your Referral Link": "你的邀请链接",
    "Your Referral Code": "你的邀请码",
    "Woodcutting": "伐木",
    "Vampires": "吸血鬼",
    "Sounds": "声音",
    "Stone": "石头",
    "Save Changes": "保存更改",
    "seconds": "秒",
    "easy": "简单",
    "E-mail": "电子邮箱",
    "Effects": "效果",
    "Elephants": "大象",
    "Dungeon Key": "地下城钥匙",
    "Dungeon Memory Tome": "地下城记忆卷轴",
    "Enabled": "启用",
    "Experience": "经验",
    "xperience Gained": "经验增益",
    "Lands": "土地",
    "Last invites": "最近邀请",
    "Account Name or Email": "帐户名称或电子邮件",
    "Back to login": "返回登录",
    "By logging in, you agree with the": "登录即表示您同意",
    "Code of Conduct": "行为准则",
    "Confirm Password": "确认密码",
    "Content Update": "内容更新",
    "Create Account": "创建账户",
    "Create new account": "创建新帐户",
    "Email Address": "电子邮件地址",
    "Follow us": "关注我们",
    "Forgot Password": "忘记密码",
    "I agree to the": "我同意",
    "Login to my account": "登录我的账号",
    "News": "新闻",
    "Password": "密码",
    "RavenIdle Season 0 Launch - July 4th": "RavenIdle第0赛季发布- 7月4日",
    "Recover my password": "找回我的密码",
    "Remember account name": "记住账户名",
    "Seu navegador não suporta a tag de vídeo.": "Seu navigador n<e:1>不支持一个标签vídeo。",
    "Sign in to my account": "登录我的账户",
    "Subscribe to our mailing list": "订阅我们的邮件列表",
    "Telegram": "电报",
    "Terms of Service": "服务条款",
    "This field is required": "这个字段是必需的。",
    "TOTAL IDLERS": "挂机总人数",
    "Username": "用户名",
    "Logout": "登出",
    "Patch notes": "更新日志",
    "You have no content available here.": "这里没有可用的内容。",
    "Content Update Notes": "内容更新日志",
    "Play Now!": "开始游戏！",
    "Your Legend Continues, Even When You're Away": "即使你不在，你的传说仍在继续",
    "Content Update Notes are brief announcements that summarize new features, improvements, and bug fixes added to the game. They help players quickly understand what's new and what's changed. Each update keeps the community informed and engaged.": "内容更新说明是简短的公告，总结了新功能，改进和bug修复添加到游戏中。它们能够帮助玩家快速理解什么是新的，什么是改变的。每次更新都会让社区了解情况并参与其中。",
    "Class": "职业",
    "Cobalt Ore": "钴矿石",
    "Clear Messages": "清除消息",
    "common wheel": "普通车轮",
    "Crafting Hat": "制作帽子",
    "Crafting Mode": "制作模式",
    "Gathering (Drop Down)": "采集 (下拉)",
    "Crafting (Drop Down)": "制作 (下拉)",
    "Current Password": "当前密码",
    "Titanium Ore": "钛矿石",
    "Tin Ore": "锡矿石",
    "Total Time": "物品总数",
    "Total Items": "总时间",
    "time": "时间",
    "Snow Spiders": "雪蜘蛛",
    "Username": "用户名",
    "Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key": "按空格键开始拖动。当拖动时，您可以使用方向键来移动项目，并使用Esc键来取消。\n某些屏幕阅读器可能需要您处于对焦模式或使用直通键",
    "100% of Net Revenue from Battle Pass and Munk Coin purchases grow the Season 0 Prizepool for everyone!": "从战斗通行证和芒克币购买的100%净收入增加了每个人的第0赛季奖品池！",
    "A Premium Battle Pass is required to participate in the Season Prizepool.": "参加赛季奖金池需要高级战斗通行证。",
    "Add a": "添加一个",
    "Add New Archetype": "添加新原型",
    "and you unlock rewards when they purchase the Battle Pass.": "当玩家购买战斗通行证时，你便能够获得奖励。",
    "archetype to add one of your active archetypes.": "原型，以添加您的一个活动原型。",
    "Authenticator Code": "身份验证代码",
    "Authenticator Secret": "认证者密钥",
    "Authorize ravenquest Linking": "授权渡鸦任务链接",
    "Blacksmithing": "锻造",
    "Blacksmithing Volume": "锻造音量",
    "Blizzard Beasts": "暴风雪兽",
    "Boost your Leaderboard Points in the prize pool. The more Leaderboard Points you have, more rewards you get!": "在奖金池中提高你的积分。你在排行榜上获得的积分越多，获得的奖励就越多！",
    "brigands": "强盗",
    "Brigands": "强盗",
    "buff for 8 turns.": "获得Buff，持续8回合。",
    "carpentry": "木工",
    "Carpentry": "木工",
    "Carpentry Volume": "木工音量",
    "Cave Spiders": "洞穴蜘蛛",
    "Change Password": "更改密码",
    "Character Name": "角色名称",
    "Choose Your Archetype": "选择你的原型",
    "Coarse Thread": "粗螺纹",
    "Collect ores and gems from mining nodes.": "从采矿节点采集矿石和宝石。",
    "Combat Volume": "战斗音量",
    "Combo": "组合",
    "Complete the Infusion tutorial": "完成灌注教程",
    "Complete the Land tutorial": "完成土地教程",
    "Complete the Premium Battle Pass to get Double Battle Pass Ravenpacks!": "购买高级通行证可获得双倍战斗通行证渡鸦礼包！",
    "Consumables": "消耗品",
    "Cosmetics": "化妆品",
    "Do you want to stop it and start combat?": "你想停止它，开始战斗吗？",
    "DOUBLE battle pass Experience": "双倍通行证经验",
    "DOUBLE battle pass RAVENPACKS": "双倍通行证渡鸦包",
    "Enable two-factor": "启用双因素",
    "Enable Two-Factor Authentication": "启用双因素身份验证",
    "Fantastic!\nSave your archetype skill!\nYou're becoming a true hero!": "太棒了！保存你的原型技能！你正在成为一个真正的英雄！",
    "Frolls": "书卷",
    "Frostbound Drakes": "冷若冰霜的龙",
    "Gathering Hat": "采集帽",
    "Gathering Mode": "采集模式",
    "Gathering Time Booster": "采集时间加成",
    "General Notifications": "一般的通知",
    "Get Premium Pass": "获得高级通行证",
    "Herbalism": "草药学",
    "Here’s a summary of your run:": "以下是你的比赛总结：",
    "Higher-level nodes yield rarer materials.": "更高级别的节点产生更稀有的材料。",
    "Hookmask": "钩形面罩",
    "Inactive": "不活跃",
    "Increases Experience, Silver and Loot from Creatures by 100% for 6 hours.": "增加来自生物的经验，银币和战利品100%，持续6小时。",
    "Increases Gathering Speed by 100% for 6 hours.": "采集速度提升100%，持续6小时",
    "Increases Spell Power and Healing Power": "增加法术威力和治疗威力",
    "Increases the speed you run tradepacks by 100% for 6 hours.": "使你运行交易包的速度提高100%，持续6小时。",
    "Increases Weapon Power and Weapon Defense": "增加武器威力和武器防御",
    "Incredible!\nClick here to start crafting!": "不可思议！\ n点击这里开始制作！",
    "Infusion XP": "灌注经验",
    "Interface": "界面",
    "Internal Error.": "内部错误。",
    "invalid request": "无效的请求",
    "knotted sceptre": "结节权杖",
    "Landowners": "土地所有者",
    "Latest Crafting Items": "最新制作物品",
    "Latest Gathering Items": "最新采集项目",
    "Leaderboard Points": "排行榜积分",
    "Lyderian Armor": "利德尔盔甲",
    "Lyderian Boots": "利德尔靴",
    "Lyderian Helmet": "利德尔头盔",
    "Lyderian Legs": "利德尔腿",
    "Manage Skill Order": "管理技能订单",
    "Marsh Shrooms": "沼泽蘑菇",
    "Master Volume": "主音量",
    "Materials": "材料",
    "Menu Notifications": "菜单通知",
    "Monster Booster": "怪物助推器",
    "Monsters List": "怪物列表",
    "Music Volume": "音乐音量",
    "mystic staff": "神秘之杖",
    "New Password": "新密码",
    "NFT Land": "NFT土地",
    "NFT RavenPacks": "NFT渡鸦包",
    "No items gathered yet": "暂未采集到物品",
    "Nodes are collected every 45 seconds and can be gathered while idle for up to 12 hours.": "节点每45秒采集一次，放置挂机时可以采集长达12小时。",
    "Notifications": "通知",
    "oakwood bow": "橡木弓",
    "Oakwood Bow": "橡木弓",
    "One monster spawns. Ideal for quick battles and single-target attacks.": "一个怪物产生。适合快速战斗和单目标攻击。",
    "Outfits": "服装",
    "Perfect!\nClick here to select your item!": "完美！点击这里选择您的物品！",
    "Permanently increases the speed you craft items by 50%.": "永久提高你制造物品的速度50%。",
    "Permanently increases the speed you gather items by 25%.": "永久提高你采集物品的速度25%。",
    "Permanently increases your daily dungeon attempts by 1. This item may be purchased up to 4 times.": "永久增加你每日地下城尝试次数1。此物品最多可购买4次。",
    "Play & Earn": "玩&赚",
    "Please contact support!": "请联系技术支持！",
    "Possible Rewards": "可能的奖励",
    "Premium Battle Pass Required": "需要高级战斗通行证",
    "Pro Tips & Requirements": "专业技巧和要求",
    "Provides 10 Experience to a piece of Equipment when Infused into it.": "给装备注入10点经验值。",
    "RavenQuest Linking": "RavenQuest链接",
    "Refer a Friend": "推荐朋友",
    "Refer friends! They get": "推荐朋友！他们得到",
    "Referral Rewards": "推荐奖励",
    "Referrals": "推荐",
    "refined plank": "精制木板",
    "Remember to save your Recovery Code on a safe place! The code is used in case you lose access to your Authenticator Application.": "记得把你的恢复代码保存在一个安全的地方！该代码用于防止您失去对验证器应用程序的访问。",
    "Remember your last dungeon run, starting 10 floors below your last run, instead of starting from floor 1.": "记住你的最后一次地下城跑，从比上一次跑低10层的地方开始，而不是从第1层开始。",
    "Required Level": "要求等级",
    "rough plank": "粗糙的木板",
    "Rough Plank": "粗糙的木板",
    "Select Difficulty": "选择难度",
    "Set Bonus -": "套装加成 -",
    "Sign In with immutable": "使用不可变登录",
    "Silver Cost:": "消耗银币：",
    "Skill Order": "技能顺序",
    "Skill/Attributes": "技能/属性",
    "Small Log": "小原木",
    "Summary": "总结",
    "The Prize Pool Grows": "奖金池不断扩大",
    "There is an active gathering": "有一个活跃的聚会",
    "This outfits page will be available soon!": "这个服装页面将很快可用！",
    "Tradepack Booster": "贸易包助推器",
    "Transport": "运输",
    "Two-Factor Form": "双因子形式",
    "Two-Handed": "双手",
    "Unlocks on August 1st. Requires a Premium Battle Pass.": "8月1日解锁。需要高级战斗通行证。",
    "Used in various recipes. Unpolished and rugged.": "用于各种食谱。未经抛光和粗糙。",
    "viper's bow": "毒蛇弓",
    "Wallet Linking": "钱包绑定",
    "Weaving": "编织",
    "Weaving Volume": "编织音量",
    "When to use drinks and foods?": "什么时候用饮料和食物？",
    "When to use health potions?": "何时使用生命药水？",
    "Wolves": "狼",
    "wooden buckler": "木制盾牌",
    "wooden bulwark": "木墙",
    "Woof woof!\nClick here to navigate to the character page!\nTime to get stronger!": "汪汪汪!点击这里导航到角色页面！是时候变得更坚强了！",
    "Woof woof!\nClick here to navigate to the skill tree!\nTime to choose your destiny!": "汪汪汪!点击这里导航到技能树！是时候选择你的命运了！",
    "WOOF WOOF!\nClick here to start crafting!": "汪汪汪!点击这里开始制作！",
    "WOOF WOOF! Let's continue your adventure!": "汪汪汪!让我们继续你的冒险吧！",
    "Woof! You're on your own now, I'll be back later! Good luck!": "汪！你自己去吧，我一会儿就回来！好运！",
    "Yornishs": "约克郡",
    "You are not in a battle at the moment, so you do not have any loot.": "你现在没有在战斗中，所以你没有任何战利品。",
    "You are not in a crafting at the moment, so you do not have any loot.": "你现在还没有进入制作阶段，所以你没有任何战利品。",
    "You have chosen the": "你选择了",
    "You have no content available here.": "这里没有可用的内容。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "s": "",
    "s]": "]",
    "of": "of",
    "": "",
    "": "",
    "": "",
    "": "",
    ":": ":",
    "/": "/",
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
    'II': 'I',
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
    "Gityx": "Gityx",
    "Gz": "Gz",
    "O": "O",
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


//需造成的前缀
var cnPrefix = {
    "\n": "\n",
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
    "  ": " ",
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
    "Requires Level": "要求等级",
    "You have leveled up to level legacy ": "你已经升级到遗产等级 ",
    "ARCHETYPE ": "原型 ",
    "You archetype Archery leveled up to level ": "你的原型射箭升级到了等级 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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

//需造成的后缀
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
    " (Weapon Power) weapon damage": " (武器力量) 武器伤害",
    " (Weapon Power) health": " (武器力量) 生命值",
    " (Weapon Power)": " (武器力量)",
    " (Weapon Defense)": " (武器防御)",
    " (Healing Power) health": " (治疗力量) 生命值",
    " (Spell Power)": " (法术力量)",
    " (Spell Power) spell damage": " (法术力量) 法术伤害",
    "% slow": "% 减慢",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
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
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)\+$/,
    /^([\d\.,]+)\-([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
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
    [/^([\d\.]+)\% damage$/, '$1\% 伤害'],
    [/^([\d\.]+)\% Critical Chance$/, '$1\% 暴击率'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) stacks$/, '$1 堆叠'],
    [/^([\d\.]+) turns$/, '$1 回合'],
    [/^([\d\.]+) Attack$/, '$1 攻击'],
    [/^([\d\.]+) Friends$/, '$1 朋友'],
    [/^([\d\.]+) Friend$/, '$1 朋友'],
    [/^([\d\.]+) Defense$/, '$1 防御'],
    [/^([\d\.]+) minutes ago$/, '$1 分钟前'],
    [/^([\d\.]+) days ago$/, '$1 天前'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
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
    //造成前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //造成后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }
    //造成正则后缀
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