// ==UserScript==
// @name         Idle Artisan 简中汉化脚本（优化完善中1.4.6）
// @namespace    https://www.g8hh.com.cn/
// @version      1.4.6
// @description  网页游戏 Idle Artisan (https://idleartisan.com/) 的简体中文汉化脚本。处理包含HTML的文本内容+
// @author       好阳光的小锅巴 & 麦子 & ღ人生若只如初
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://idleartisan.com/logo.png
// @license      MIT
// @include      *https://idleartisan.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/idle-artisan-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/idle-artisan-chs.user.js
// ==/UserScript==

/**
 * ---------------------------
 * Time: 2025/06/15 21:19
 * Author: guoba
 * View: https://www.gityx.com/
 * ---------------------------
 */

// 1.汉化杂项
var cnItems = {
    _OTHER_: [],
    // 界面文本 - 需要翻译
    "Close": "关闭",
    "Gain since reset": "重置后增益",
    "Gain/day": "每日增益",
    "Gain/hr": "每小时增益",
    "Gain/tick": "每tick增益",
    "Rare finds": "稀有发现",
    "Rare finds/hr": "每小时稀有发现",
    "Ticks spent": "花费ticks",
    "Time spent": "花费时间",
    "Time to Lvl": "升级所需时间",
    "Time to storage cap": "达到存储上限时间",
    "XP/day": "每日经验",
    "XP/hr": "每小时经验",
    "XP/tick": "每tick经验",
    // 弩箭相关统计 - 需要翻译
    "Bolts left": "弩箭剩余",
    "Time to deplete Bolts": "弩箭耗尽时间",
    // 鳗鱼发现统计 - 需要翻译
    "Eel finds": "深渊鳗鱼发现",
    "Eel finds/hr": "每小时深渊鳗鱼发现",
    "[Eat 1 Jerky]": "[食用1个肉干]",
    "[Hide]": "[隐藏]",
    "Block List": "屏蔽列表",
    "Enter one username per line to hide their messages in the Global chat window. Blocking is case-insensitive (blocking 'player1' will also block 'Player1').":
    "每行输入一个用户名以在全局聊天窗口中隐藏他们的消息。屏蔽不区分大小写（屏蔽'player1'也会屏蔽'Player1'）。",
    "Global Chat": "全局聊天",
    "Save Block List": "保存屏蔽列表",
    "Sigil Of Mending": "修复印记",
    "[Unhide]": "[取消隐藏]",

    // 竞赛信息 - 需要翻译
    "Todays competition is Dungeon Completions non mandatory discord link https://discord.gg/3W8Hyq9f":
    "今日竞赛是地下城完成数，非强制性的 Discord 链接：https://discord.gg/3W8Hyq9f",
    "Gain since reset:": "重置后增益:",
    // 2-4: 竞赛排名奖牌
    "🥇 1st": "🥇 第一名",
    "🥈 2nd": "🥈 第二名",
    "🥉 3rd": "🥉 第三名",

    // 5-8: 时间显示（已经是中文，保持原样）
    "36分钟": "36分钟",
    "37分钟": "37分钟",
    "38分钟": "38分钟",
    "39分钟": "39分钟",

    // 9: 竞赛类型
    "Competition Type": "竞赛类型",
    "Farm Goods & Dungeon Foods": "农场产品 & 地下城食物",

    // 界面文本 - 需要翻译
    "Dismiss Forever": "永久关闭",
    "Next": "下一页",
    "Page 1 of 5": "第 1 页，共 5 页",
    "Page 2 of 5": "第 2 页，共 5 页",
    "Page 3 of 5": "第 3 页，共 5 页",
    "Page 4 of 5": "第 4 页，共 5 页",
    "Page 5 of 5": "第 5 页，共 5 页",
    "Previous": "上一页",
    "Reopen Tutorial": "重新打开教程",
    "Scroll Of Mastery": "精通卷轴",

    // 10-12: 秘密竞赛提示
    "❄️Winter❄️": "❄️冬季❄️",
    "The Winter Solstice - 12/1/2025": "冬至庆典 - 2025年12月1日",
    "A notice from the Mayor's office: Preparations are underway for the first annual Winter Solstice celebration. The festivities are set to begin on the first of December, 2025.": "来自市长办公室的通知：首届冬至庆典的准备工作正在进行中。庆祝活动定于2025年12月1日开始。",
    "There are no contracts available at this time. The next contract will be posted in:": "当前没有可用的合同。下一个合同将在：",
    "Only the Mayor knows how these points are earned! Hint: Even the POORest of items still have value.": "只有市长才知道这些点数是如何获得的！提示：即使是最劣质的物品也仍有价值。",
    "Only the Mayor knows how these points are earned! Hint: To gain you must lose.": "只有市长才知道这些点数是如何获得的！提示：欲得必失（每被小偷偷走一个物品得250积分）。",
    "Only the Mayor knows how these points are earned! Hint: Waste not, want not.": "只有市长才知道这些点数是如何获得的！提示：不浪费，不匮乏。",
    "A new path to power has been revealed through the art of Inscription": "通过铭文艺术揭示了一条新的力量之路",
    ". By dedicating time to this new skill, artisans can craft powerful scrolls": "。通过投入时间学习这项新技能，工匠可以制作强大的卷轴",
    "Your choices are not set in stone. You can reset all of your mastery points at any time to be refunded 90% of the total SOMs you have spent.": "您的选择并非一成不变。您可以随时重置所有精通点数，并获得已花费总精通卷轴的90%返还。",
    "To support this new endeavor, the community can construct The Order of the Quill. Each level of this building increases the success rate and experience gained in the art of Inscription.": "为了支持这项新事业，社区可以建造羽笔会。该建筑的每个等级都会提高铭文艺术的成功率和获得的经验值。",
    "Total Mastery": "总精通等级",
    "Total Spent": "总花费",
    "Woodcutting Power Boost": "伐木力量提升",
    "-1.0%": "-1.0%",
    "-4.0%": "-4.0%",
    ". By dedicating time to this new skill, artisans can craft powerful": "。通过投入时间学习这项新技能，工匠可以制作强大的",
    ". These scrolls can be spent on the new \"Mastery\" tab to permanently enhance your core abilities.": "。这些卷轴可以在新的\"精通\"标签页中使用，永久增强您的核心能力。",
    "(Capped between 25% and 90%)": "（在25%和90%之间封顶）",
    "A new path to power has been revealed through the art of": "通过",
    "Apply": "应用",
    "Base Fail Chance": "基础失败几率",
    "Battler Power Boost": "战斗者力量提升",
    "Current Level: 0 (+0%)": "当前等级: 0 (+0%)",
    "Dagda": "Dagda", // 玩家名或NPC名
    "Each level of mastery provides a +1% bonus to its respective power (for gathering/combat skills) or throughput (for refining). The cost in SOMs increases with each level you purchase.": "每级精通提供+1%的相应力量加成（对于采集/战斗技能）或产量加成（对于精炼）。每次购买等级所需的精通卷轴数量都会增加。",
    "Final Fail Chance: 85.0%": "最终失败几率: 85.0%",
    "Fishing Power Boost": "钓鱼力量提升",
    "Hunting Power Boost": "狩猎力量提升",
    "Inscription": "铭文",
    "Inscription (Level": "铭文 (等级",
    "Inscription Details": "铭文详情",
    "Magna_Dreadmoor": "Magna_Dreadmoor", // 玩家名保持原样
    "Mastery": "精通",
    "Mastery Boosts": "精通加成",
    "Mastery Boosts & Inscription": "精通加成 & 铭文",
    "Mining Power Boost": "采矿力量提升",
    "Refining Thruput Boost": "精炼产量提升",
    "Reset All Masteries": "重置所有精通",
    "Reset All Masteries for # SOMs": "重置所有精通，花费 # 精通卷轴",
    "Resetting Mastery": "重置精通中",
    "Scroll of Mastery": "精通卷轴",
    "Scrolls of Mastery (SOMs)": "精通卷轴 (SOMs)",
    "SOMs": "精通卷轴",
    "Spend your Scrolls of Mastery (SOMs) to permanently boost your skills. Each boost level provides a +1% increase to its respective power or throughput. The cost to upgrade increases with each level. Refining throughput boosts the output of all personal refining buildings. You can reset all of your masteries at any time using the 'Reset All Masteries' button. This will set all boosts back to level 0 and refund 90% of the total SOMs you have spent, rounded up to the nearest whole number. The max boost level is determined by the level of each skill (ex: Mining Level 45 can boost up to Level 45).": "使用您的精通卷轴(SOMs)永久提升您的技能。每个提升等级提供+1%的相应力量或产量加成。升级成本随等级增加而增加。精炼产量提升增加所有个人精炼建筑的产出。您可以随时使用'重置所有精通'按钮重置所有精通。这将把所有加成重置为0级，并返还您已花费总精通卷轴的90%，向上取整到最接近的整数。最大提升等级由每个技能的等级决定（例如：采矿等级45最高可提升至45级）。",
    "A daily competition between all Conclaves to see who can harvest the most crops. Each harvested crop earns 1 point. At the end of the day, the top 3 Conclaves will win an infusion of resources, which will be automatically contributed to their most-voted-for building project. The event resets daily at 00:00 UTC.":
    "所有公会之间的每日竞赛，看谁能收获最多的作物。每收获一株作物获得1点。在每天结束时，前三名的公会将赢得资源注入，这些资源将自动贡献给他们投票最多的建筑项目。活动每日在00:00 UTC重置。",
    // 界面文本
    "Crops Harvested": "收获作物",
    "Target Level": "目标等级",
    "The Order of the Quill": "羽笔会",

    // 14: 未知状态
    "Unknown": "未知",
    "Consume up to 4 Jerky to restore hunger": "",
    // 在 cnItems 对象中添加：
    "You will never find rare Conclave resources (Starfall Ore, Glimmerwood Sap, Crystallized Anima, Oceanic Essence, Antlers)": "您将永远不会找到稀有的公会资源（星落矿石、微光树液、生命结晶、海洋精华、鹿角）",

    // 引用文本
    "\"Even the sharpest blade can be made keener. A larger share ensures better loyalty.\"": "\"即使是最锋利的刀刃也能变得更锐利。更大的份额确保更好的忠诚度。\"",

    // 雇佣兵相关文本
    "Increases your reward split to": "将您的奖励分成提高至",
    "Your reward split from mercenary-led combat events is": "您从雇佣兵领导的战斗事件中的奖励分成为",

    // 经验值统计模板
    "XP/tick: 0.0  •  XP/hr: 0  •  XP/day: 0  •  Time to Lvl: DDd:HHh:MMm:SSs": "每tick经验：0.0  •  每小时经验：0  •  每日经验：0  •  升级所需时间：DD天:HH时:MM分:SS秒",
    // ====== 【新增：知识库中缺失的关键条目】 ======
    "Even the sharpest blade can be made keener. A larger share ensures better loyalty.": "即便是最锋利的刀刃，也能磨得更锐利。更大的份额可确保更高的忠诚度。",
    "[独特] 学问之盔 勘探者 (等级 5)": "[独特] 学问之盔 勘探者 (等级 5)",
    "+5% damage against special enemies": "+5% 对特殊敌人的伤害",
    "100 Lunar Essence": "100 月华精华",
    "Enhance Mercenary Post": "强化雇佣兵哨站",
    "Grants +10% Fishing Catch Chance and Hunting Hit Chance for 288 minutes.": "提供+10%钓鱼捕获几率和狩猎命中几率，持续288分钟。",
    "In the heat of battle, true mastery shines brightest.": "在激烈的战斗中，真正的技艺闪耀得最明亮。",
    "Patience reveals the hidden treasures of the earth.": "耐心揭示大地隐藏的宝藏。",
    "The ocean keeps its treasures deep. This sanctuary sings a song that calls them to the surface.": "海洋将其宝藏深藏。这个保护区唱着一首歌，将它们召唤到水面。",
    "The sea is generous to those who respect its tides.": "大海对尊重潮汐的人慷慨。",
    "The work of one strengthens the hands of many.": "一人的工作强化众人的双手。",
    // 新的市长描述
    "The Mayor has commissioned this secret competition type. He recommends that players explore the town to find out how these points can be earned. At the end of the day, a massive infusion of resources will be awarded to the most-voted-for building project of the top 3 Conclaves. The event resets daily at 00:00 UTC.": "市长委托了这种秘密竞赛类型。他建议玩家探索城镇以了解这些点数如何获得。在每天结束时，前三名的公会投票最多的建筑项目将获得大量资源注入。活动每日在00:00 UTC重置。",

    // 升级时间显示
    "Time to Lvl: —": "升级所需时间：—",
    "Time to Lvl: ": "升级所需时间：",
    // 基础资源增益惩罚/奖励
    "-5% to base resource gains (Iron Ore, Logs, Gold, Fish, Game Carcass).": "-5% 基础资源获得（铁矿石、木头、金币、鱼、猎物尸体）。",
    "+20% to base resource gains (Iron Ore, Logs, Gold, Fish, Game Carcass).": "+20% 基础资源获得（铁矿石、木头、金币、鱼、猎物尸体）。",

    // 拾荒效果扩展
    ". You also find a small amount of Raw Fish (0.1) and Game Carcass (0.1) while not fishing or hunting.": "。当不钓鱼或狩猎时，你还会发现少量生鱼（0.1）和猎物尸体（0.1）。",
    "Each tick also generates 5% of your gathered amount as other primary raw resources. While fishing and hunting, the strength of this effect is determined by your": "每个tick还会生成你采集量的5%作为其他主要原始资源。钓鱼和狩猎时，此效果的强度取决于你的",
    "Dungeon foods are considered a simple food. As such, the crafting success rate is 100%, and it is always crafted at normal quality.": "地下城食物被视为简单食物。因此，制作成功率为100%，并且总是以普通品质制作。",
    "The Mayor says: \"Crafting will be added to the information panel at a later date\".": "市长说：\"制作将在稍后日期添加到信息面板中。\"",
    "A--": "A--",
    "Date": "日期",
    "Place Awarded": "授予名次",
    "Recent Competition Results": "近期竞赛结果",
    "Reset": "重置",
    "Tool Level and Power": "工具等级和力量",
    "Information Panel": "信息面板",
    "Grants +10% Fishing Catch Chance and Hunting Hit Chance.": "提供+10%钓鱼捕获几率和狩猎命中几率。",
    "Pickaxe, Axe, Sword, Fishing Rod, Crossbow": "镐、斧、剑、鱼竿、弩",
    "Butcher's Block: Level": "屠宰台: 等级",
    "You have learned all available cooking recipes!": "您已经学会了所有可用的烹饪食谱！",
    // 界面文本
    "Hit Chance": "命中几率",
    "Marketplace": "市场",
    // 竞赛描述更新（包含鹿角）
    "A challenge of perception and luck. Conclaves earn 1 point for every rare resource (Starfall Ore, Glimmerwood Sap, Crystallized Anima, Oceanic Essence, Antlers) found by their members.": "对洞察力和运气的挑战。公会根据成员发现的每个稀有资源（星落矿石、微光树液、生命结晶、海洋精华、鹿角）获得1点。",

    // 秘密竞赛相关
    "Active Conclave Competition: Secret": "活跃公会竞赛：秘密",
    "Unknown Points": "未知点数",

    // 秘密竞赛描述
    "The Mayor has commissioned this secret competition type. He recommends that players explore the town to find out these points can be earned. At the end of the day, the top 3 Conclaves will win an infusion of resources, which will be automatically contributed to their most-voted-for building project. The event resets daily at 00:00 UTC.": "市长委托了这种秘密竞赛类型。他建议玩家探索城镇以了解这些点数如何获得。在每天结束时，前三名的公会将赢得资源注入，这些资源将自动贡献给他们投票最多的建筑项目。活动每日在00:00 UTC重置。",

    // 猎人相关文本
    "\"The wind is right, and the tracks are fresh. A good day for a hunt.\"": "\"风向正好，踪迹新鲜。今天是狩猎的好日子。\"",

    // 狩猎事件加成
    "and you get 1 extra Hunting XP during this event.": "并且在此活动期间您将获得1点额外狩猎经验值。",

    // 猎人收获活动
    "Hunter's Harvest": "猎人收获",

    // 狩猎命中几率说明
    "Your chance to hit while hunting is": "您在狩猎时的命中几率为",

    // 竞赛系统相关
    "Only the Mayor knows how these points are earned!": "只有市长才知道这些点数是如何获得的！",
    "Secret": "秘密",

    // 狩猎系统产出
    "Produces 10.50 Meat per tick.": "每tick产出10.50个肉。",

    // 竞赛系统描述（更新版本）
    "To foster a spirit of friendly rivalry, the Mayor has decreed a daily competition between all Conclaves. Each day at midnight (UTC), the Mayor randomly selects one of several challenges for the Conclaves to compete in for the next 24 hours": "为了培养友好竞争精神，市长颁布了所有公会之间的每日竞赛。每天午夜（UTC），市长随机选择若干挑战之一，供公会在接下来的24小时内竞争",

    // 鹿角数量显示
    "2.31 Antlers": "2.31 鹿角",

    // 弩相关操作
    //     "Crossbow (Level 1)": "弩（等级 1）",
    "Enhance Crossbow": "强化弩",
    "Sharpen Crossbow": "打磨弩",

    // 建筑组合
    "Seismic Quarry, Amber Mill, Anima Collector, Coral Sanctuary, & Fletcher's Cooperative": "地震采石场、琥珀磨坊、生命收集器、珊瑚保护区和制箭师合作社",

    // 弩箭耗尽消息
    "You have run out of Bolts! Switching to Battling.": "您的弩箭已用尽！切换到战斗活动。",

    // 狩猎系统相关
    "Consumes 100 Game Carcass per tick.": "每tick消耗100个猎物尸体。",
    "Jerky is considered a simple food. As such, the crafting success rate is 100%, and it is always crafted at normal quality.": "肉干被视为简单食物。因此，制作成功率为100%，并且总是以普通品质制作。",

    // 狩猎命中几率显示
    "(Hit Chance: 27.3%)": "（命中几率：27.3%）",

    // 建筑等级显示

    // 狩猎系统核心文本
    ", increases your base hit chance while Hunting and provides bonus Hunting XP per tick.": "，提高狩猎时的基础命中几率，并且每tick提供额外的狩猎经验值。",
    ", now roams the land as part of the Special Bosses event rotation. Join the hunt to earn": "，现在作为特殊Boss事件轮换的一部分在土地上徘徊。加入狩猎以获得",
    ", which applies a": "，这会施加一个",
    "\"A rustic, smoke-filled cabin where seasoned trappers trade stories and techniques. The air smells of pine, cured leather, and the quiet confidence of those who know the land's secrets.\"": "\"一个质朴的、烟雾缭绕的小屋，经验丰富的猎人在此交流故事和技巧。空气中弥漫着松木、鞣制皮革的味道，以及那些了解土地秘密的人们沉稳的自信。\"",
    "\"The forest provides for those who know its paths. We honor the hunt, and the hunt honors us.\"": "\"森林为知晓其路径的人提供所需。我们尊重狩猎，而狩猎也尊重我们。\"",
    // 羽笔会描述
    "\"Ink and intention, bound by skill. Here, words are given weight, and scrolls hold the power to shape an artisan's destiny.\"":
    "\"墨水与意念，由技艺相连。在此，言语被赋予重量，卷轴拥有塑造工匠命运的力量。\"",

    // 界面按钮和状态
    "[Eat Jerky]": "[食用肉干]",
    "+0 Hunting XP per tick": "+0 狩猎经验值每tick",
    "+0% Hunting Hit Chance": "+0% 狩猎命中几率",
    "and grant Hunting XP.": "并授予狩猎经验值。",

    // 弩箭制作说明
    "as ammunition. You can craft Bolts from Planks and Gold Bars using the \"Fletch Bolts\" refining activity. The amount of bolts you can craft per tick is based on your Crafting Table level.": "作为弹药。您可以使用\"制作弩箭\"精炼活动，用木板和金锭制作弩箭。每tick可以制作的弩箭数量基于您的合成台等级。",

    // 建筑相关
    "Community Support": "社区支持",
    "Crossbow Power Bonus": "弩力量加成",

    // 狩猎属性
    "Hunting Hit Chance": "狩猎命中几率",
    "while Hunting.": "当狩猎时。",

    // 饥饿度系统
    "If your hunger bar empties, you will become": "如果您的饥饿度条空了，您将变得",
    "Starving": "饥饿",
    "You have no Jerky": "您没有肉干",
    "Your hunger depletes over 8 hours, both online and offline. Eat Jerky to restore it.": "您的饥饿度会在8小时内（在线或离线）消耗。食用肉干以恢复它。",
    // 页面信息
    "Page 1 of 1": "第 1 页，共 1 页",
    "Room": "房间",
    // 秘密竞赛类型
    "Secret4": "秘密4",

    // 等级（基础）
    "Level": "等级",

    // 建筑效果说明
    "Each level increases the base hit chance for Hunting by +1% (multiplicative) and grants +1 Hunting XP per tick.": "每个等级增加狩猎基础命中几率+1%（乘算），并且每tick提供+1狩猎经验值。",
    "Note: Auto-consumption only triggers while you are actively in a dungeon.": "注意：自动消耗仅在您活跃地在地下城中时触发。",
    "A sturdy block for processing game. The level of your Butcher's Block determines how efficiently you can refine Game Carcasses into Meat.": "一个用于处理猎物的坚固砧板。您的屠宰台等级决定了您将猎物尸体精炼成肉的效率。",
    "Grow crops on your personal farm.": "在您的个人农场种植作物。",
    "Hunt wild creatures for Game Carcasses.": "猎杀野生动物获取猎物尸体。",
    // 自动消耗设置
    "Auto-consume when available": "可用时自动消耗",
    "Auto-consume when available (Leader only)": "可用时自动消耗（仅限队长）",
    "Auto-Dungeon Consumables": "自动地下城消耗品",
    "Auto-eat prefs": "自动食用偏好",
    "Disabled": "禁用",

    // 增益描述片段
    "buff for Fishing and a": "钓鱼增益和",
    "buff for Hunting.": "狩猎增益。",
    "buff to Mining, Woodcutting, and Battling. It also provides a": "采矿、伐木和战斗增益。它还提供",

    // 新社区建筑
    "The new community building, the": "新的社区建筑，",

    // 惩罚效果
    "to all Gathering, Refining, and Combat effectiveness.": "对所有采集、精炼和战斗效果。",

    // 竞赛系统更新
    "To foster a spirit of friendly rivalry, the Mayor has decreed a daily competition between all Conclaves. Each day at midnight (UTC), the Mayor randomly selects one of five challenges for the Conclaves to compete in for the next 24 hours": "为了培养友好竞争精神，市长颁布了所有公会之间的每日竞赛。每天午夜（UTC），市长随机选择五个挑战之一，供公会在接下来的24小时内竞争",

    // 特殊符号（保持原样）
    "−": "−",
    " Crossbow": " 弩",
    "Expired": "已过期",
    "-25% penalty": "-25% 惩罚",
    "A chilling howl echoes across the plains, silencing the birds and sending a shiver down your spine. The Alpha Wolf has begun its hunt, and all who dwell in the wild are now its prey.": "一声令人毛骨悚然的嚎叫回荡在平原上，使鸟儿沉默，让你脊背发凉。狼王已开始狩猎，所有居住在野外的生物现在都是它的猎物。",
    "The Alpha Wolf endured the assault! A 25% consolation prize has been distributed.": "狼王承受住了攻击！25%的安慰奖已分配。",
    "The Alpha Wolf event has ended! You contributed 58 ticks and earned a score of 58, earning you 8.94 Lunar Essence!": "狼王事件已结束！你贡献了58 ticks并获得了58的分数，因此你获得了8.94月华精华！",
    ", a rare resource. The chance to find Antlers is exclusively controlled by your Conclave's": "，一种稀有资源。发现鹿角的几率完全由您的公会",
    ", a valuable material used for late-game enhancements.": "，一种用于后期强化的宝贵材料。",
    ", now roams the land. Join the hunt to earn": "，现在在土地上徘徊。加入狩猎以获得",
    ". Eating Jerky is the primary way to restore your Hunger.": "。食用肉干是恢复饥饿度的主要方式。",
    ". Use this tool to begin the \"Hunting\" activity on the Main tab. Successful hunts will yield": "。使用此工具在主标签页开始\"狩猎\"活动。成功的狩猎将产出",
    ". Used for late-game enhancements.": "。用于后期强化。",
    "(Boss Fight, Ancient Treant, Runic Golem, The Leviathan, Alpha Wolf) - All players can join to deal damage to a powerful world boss and earn a share of special resources.": "（Boss战、远古树人、符文魔像、利维坦、狼王）- 所有玩家都可以加入对强大的世界Boss造成伤害，并获得特殊资源的份额。",
    "(Hit Chance: 26.5%)": "（命中几率：26.5%）",
    "(Mining, Woodcutting, Battling, Hunting) - These events provide a temporary boost to their respective gathering skills, doubling resource gains and granting bonus XP.": "（采矿、伐木、战斗、狩猎）- 这些事件为其各自的采集技能提供临时提升，使资源获取翻倍并奖励额外经验值。",
    "A new world boss, the": "一个新的世界Boss，",
    "A rare essence earned from defeating the": "一种通过击败获得的稀有精华",
    "All artisans now have a Hunger bar, which depletes over 8 hours (online or offline). If it empties, you will suffer a": "所有工匠现在都有一个饥饿度条，会在8小时内（在线或离线）消耗。如果它空了，您将遭受",
    "Alpha Wolf": "狼王",
    "Ammunition": "弹药",
    "Antlers": "鹿角",
    "as ammunition. You can craft 10 Bolts from 1 Plank and 1 Gold Bar using the \"Fletch Bolts\" refining activity.": "作为弹药。您可以使用\"制作弩箭\"精炼活动，用1个木板和1个金锭制作10支弩箭。",
    "Bolts": "弩箭",
    "Build a personal": "建造一个个人",
    "building.": "建筑。",
    "Butcher Carcass": "屠宰尸体",
    "Butcher's Block": "屠宰台",
    "Butcher's Block Level": "屠宰台等级",
    "Cooking for Survival": "生存烹饪",    
    "Every artisan receives a basic": "每位工匠都会获得一个基本的",
    "Fletch Bolts": "制作弩箭",
    "Fletcher's Cooperative": "制箭师合作社",
    "Conclave Strongbox": "公会储物箱",
    "To Inv: 1x": "移至库存: 1x",
    "To Inv: 5x": "移至库存: 5x",
    "To Locker: 1x": "移至储物柜: 1x",
    "To Locker: 5x": "移至储物柜: 5x",
    "To Strongbox: 1x": "移至公会储物箱: 1x",
    "To Strongbox: 5x": "移至公会储物箱: 5x",
    "Conclave only": "仅限公会",
    "Default to Conclave Only": "默认仅限公会",
    "Total spent": "总花费",
    "A secure container to protect your valuable items from the town's thief. It can be crafted and upgraded from the \"Main\" tab. Each level increases its capacity by 4 item stacks. You can manage your locker's contents from the \"Inventory\" tab.": "一个安全的容器，用于保护您的贵重物品免受城镇小偷的侵害。它可以在\"主界面\"标签页制作和升级。每个等级增加4个物品堆叠的容量。您可以在\"库存\"标签页管理储物柜的内容。",
    "A shared inventory for your Conclave. All deposits and withdrawals are logged on the Conclave tab.": "为您的公会提供的共享库存。所有存入和取出操作都会记录在公会标签页中。",
    "\"More than a chest of wood and iron, this is the vault of our shared legacy. May its contents fuel our rise.\"": "\"这不仅是木铁打造的箱子，更是我们共同传承的宝库。愿其中的珍藏助我们崛起。\"",
    "Game Carcass": "猎物尸体",
    "Game Carcasses": "猎物尸体",
    "Getting Started": "入门指南",
    "Hunger": "饥饿度",
    "Hunting": "狩猎",
    "Hunting & Provisions": "狩猎与补给",
    "Hunting Level": "狩猎等级",
    "Hunting requires": "狩猎需要",
    "Jerky": "肉干",
    "Lunar Essence": "月华精华",
    "Meat": "肉",
    "Mercenary Post Enhancements": "雇佣兵哨站强化",
    "Processing Your Kill": "处理您的猎物",
    "skill, a new gathering activity focused on tracking and taking down creatures of the wild. Here's how all the new systems work together": "技能，一种新的采集活动，专注于追踪和猎杀野外生物。以下是所有新系统如何协同工作",
    "The Great Hunt": "大型狩猎",
    "The Hunger System": "饥饿度系统",
    "The Hunter's Path - New Features Guide": "猎人之路 - 新功能指南",
    "This expansion introduces the": "此扩展引入了",
    "to all gathering, refining, and combat effectiveness.": "对所有采集、精炼和战斗效果。",
    "To craft better Crossbows, you'll need": "要制作更好的弩，您需要",
    "to refine Game Carcasses into": "将猎物尸体精炼成",
    "Trapper's Cabin": "猎人小屋",
    "Upgrading Your Gear": "升级您的装备",
    "Use the Kitchen to cook 10 Meat into 1": "使用厨房将10个肉烹饪成1个",
    "You can now use Lunar Essence to enhance your Mercenary Post, increasing your share of the rewards from mercenary-led combat events.": "您现在可以使用月华精华来强化您的雇佣兵哨站，增加您从雇佣兵领导的战斗事件中获得的奖励份额。",
    // Boss名称 - 已在之前的对话中翻译过，确认存在
    "Leviathan from the Depths v2": "深渊利维坦 v2",
    "A daily competition between all Conclaves to see who can complete the most dungeons. At the end of the day, the top 3 Conclaves will win an infusion of resources, which will be automatically contributed to their most-voted-for building project. The event resets daily at 00:00 UTC.":
    "所有公会之间的每日竞赛，看谁能完成最多的地下城。在每天结束时，前三名的公会将赢得资源注入，这些资源将自动贡献给他们投票最多的建筑项目。活动每日在00:00 UTC重置。",
    "Active Conclave Competition: Dungeon Completions":
    "活跃公会竞赛：地下城完成数",

    // 游戏文本
    "\"The Mayor asks for your help to defend the town from these powerful foes!\"":
    "\"市长请求您帮助保卫城镇，抵御这些强大的敌人！\"",

    "A powerful boss has appeared! Join other artisans to defeat it.":
    "一个强大的Boss出现了！加入其他工匠一起击败它。",

    "Base Pool": "基础奖励池",

    "Boss Event v2": "Boss事件 v2",
    // Boss名称
    "Ancient Treant v2": "远古树人 v2",
    "There is no active auction.": "当前没有活跃的拍卖。",

    "grows with the number of participants! Rewards are split based on damage and time contributed.":
    "随着参与者数量的增加而增长！奖励根据造成的伤害和贡献的时间分配。",

    "Special Bosses": "特殊Boss",

    "The total reward pool of": "总奖励池的",

    "Your damage is a measure of your total power in the chosen skill.":
    "您的伤害是您在选定技能中总实力的衡量标准。",

    // 界面文本（已翻译过）
    "Leave Special Bosses": "离开特殊Boss",
    "MOTD: Fight event stress test extended until 1:00 server time, whoopsie :)":
    "今日消息：战斗事件压力测试已延长至服务器时间 1:00，哎呀 :)",
    "character": "角色",
    "Todays competition is Dungeon Completions": "今日竞赛是地下城完成数",

    // 界面文本
    "Join Special Bosses": "加入特殊Boss",

    // 服务器公告
    "MOTD: There will be a stress test of the new fight events until 00:30... ish :)":
    "今日消息：新战斗事件的压力测试将持续到00:30左右... :)",

    // 市场物品（已经是中文，不需要翻译）
    "[独特] 凶猛印记 (等级 7)": "[独特] 凶猛印记 (等级 7)",
    "Runic Golem v2": "符文魔像 v2",
    "Heals the party for 10% of their maximum health.": "治疗全队10%的最大生命值。",
    "You exchanged 100 {resource} and learned the recipe for {recipe}!": "你交换了100个{resource}并学会了{recipe}的配方！",

    // 玩家名称和公会名称 - 通常不汉化，但可以添加一些通用规则
    "[🍁Idle Squatches🍁]jamminTheDev": "[🍁Idle Squatches🍁]jamminTheDev",
    "[💀Gold Goblins💀]Dardas": "[💀Gold Goblins💀]Dardas",
    "[Idle Squatches]jamminTheDev": "[Idle Squatches]jamminTheDev",
    "[💀Gold Goblins💀]cornflash12": "[💀Gold Goblins💀]cornflash12",
    "[🍁Idle Squatches🍁]RiggedyRekt": "[🍁Idle Squatches🍁]RiggedyRekt",
    "[⚜️Redmane Castle⚜️]KUSANG": "[⚜️Redmane Castle⚜️]KUSANG",
    "[⚜️Redmane Castle⚜️]tropicleaf": "[⚜️Redmane Castle⚜️]tropicleaf",
    "[🍁Idle Squatches🍁]BigFoot": "[🍁Idle Squatches🍁]BigFoot",
    "[🍁Idle Squatches🍁]Piper": "[🍁Idle Squatches🍁]Piper",
    "[🍁Idle Squatches🍁]Vexx": "[🍁Idle Squatches🍁]Vexx",
    "[💀Gold Goblins💀]Madvlad": "[💀Gold Goblins💀]Madvlad",
    "[💀Gold Goblins💀]AkraxD": "[💀Gold Goblins💀]AkraxD",
    "[💀Gold Goblins💀]dauntlee": "[💀Gold Goblins💀]dauntlee",
    "[💀Gold Goblins💀]Gold Goblins": "[💀Gold Goblins💀]Gold Goblins",
    "[💀Gold Goblins💀]Hwcd1992": "[💀Gold Goblins💀]Hwcd1992",
    "[💀Gold Goblins💀]ZackFair": "[💀Gold Goblins💀]ZackFair",
    "[✨Boom✨]BoodaBooda": "[✨Boom✨]BoodaBooda",
    "[✨PeepoHappy✨]": "[✨PeepoHappy✨]",
    "[✨PeepoHappy✨]Uetora": "[✨PeepoHappy✨]Uetora",
    "[💧Boom💧]BoodaBooda": "[💧Boom💧]BoodaBooda",
    "[💧CH.Msinc💧]dauntlee" : "[💧CH.Msinc💧]dauntlee",
    "[⚔️Universal⚔️]": "[⚔️Universal⚔️]",
    "[🍁Idle Squatches🍁]": "[🍁Idle Squatches🍁]",
    "[🏹Idle Squatches🏹]": "[🏹Idle Squatches🏹]",
    "[🧌Idle Squatches🧌]adouuu": "[🧌Idle Squatches🧌]adouuu",
    "AreYouSerious?": "AreYouSerious?",
    "MyGO!!!!!": "MyGO!!!!!",
    "[🍁Idle Squatches🍁]MafiosoPlays": "[🍁Idle Squatches🍁]MafiosoPlays",
    "[💀Gold Goblins💀]blibla": "[💀Gold Goblins💀]blibla",
    "[💀Gold Goblins💀]Mintoure": "[💀Gold Goblins💀]Mintoure",
    "[💀Gold Goblins💀]TRIGGERED": "[💀Gold Goblins💀]TRIGGERED",
    "[Redmane Castle]Neuroclastys": "[Redmane Castle]Neuroclastys",
    "Ambix": "Ambix",
    "Canggou": "Canggou",
    "GagoLagadao": "GagoLagadao",
    "Lavender": "Lavender",
    "Sabotage": "Sabotage",
    "Shalima": "Shalima",
    "Steak": "Steak",
    "Uetora": "Uetora",
    "Val": "Val",
    '[CH.Msinc]': '[CH.Msinc]', 
    "imkz": "imkz",
    "TheAnvilGuard": "TheAnvilGuard",
    "Mintoure": "Mintoure",
    "MafiosoPlays": "MafiosoPlays",
    "[CH.Msinc]imkz": "[CH.Msinc]imkz",
    "[CH.Msinc]msinc": "[CH.Msinc]msinc",
    "[Chiggas]": "[Chiggas]",
    "[Gold Goblins]": "[Gold Goblins]",
    "[Hero]": "[Hero]",
    "[Idle Squatches]": "[Idle Squatches]",
    "[MyGO!!!!!]sion": "[MyGO!!!!!]sion",
    "[Redmane Castle]": "[Redmane Castle]",
    "[Redmane Castle]UYK123": "[Redmane Castle]UYK123",
    "[TheAnvilGuard]": "[TheAnvilGuard]",
    "[TheAnvilGuard]Ravendious": "[TheAnvilGuard]Ravendious",
    "[Universal]": "[Universal]",
    "[Universal]NooN": "[Universal]NooN",
    "[zed.city]": "[zed.city]",
    "[zed.city]baka": "[zed.city]baka",
    "[zed.city]Rol": "[zed.city]Rol",
    "[zed.city]Taoist": "[zed.city]Taoist",
    "[zed.city]leng0917": "[zed.city]leng0917",
    "[Idle Squatches]BigFoot": "[Idle Squatches]BigFoot",
    "Redmane Castle": "Redmane Castle",
    "Universal": "Universal",
    "Levorko": "Levorko",
    "Manandezo": "Manandezo",
    "Little1Steve": "Little1Steve",
    "sylvfi": "sylvfi",
    "Kura": "Kura",
    "Fab123654df": "Fab123654df",
    "ccrot": "ccrot",
    "weichin": "weichin",
    "Fio": "Fio",
    "FireballTK": "FireballTK",
    "gannman": "gannman",
    "Crheascent": "Crheascent",
    "DoTheFlap": "DoTheFlap",
    "Enzo": "Enzo",
    "killerofmany": "killerofmany",
    "kyuunashino": "kyuunashino",
    "leviosa": "leviosa",
    "tigas420": "tigas420",
    "Dragnarock15": "Dragnarock15",
    "Zdaz": "Zdaz",
    "catgirllucy": "catgirllucy",
    "Jowzer": "Jowzer",
    "TrashcanKiller": "TrashcanKiller",
    "Varga": "Varga",
    "[✨PeepoHappy✨]Roshi77": "[✨PeepoHappy✨]Roshi77",
    "Azura": "Azura",
    "BigFootfirst": "BigFootfirst",
    "Bum": "Bum",
    "GarthCo": "GarthCo",
    "Hakotora": "Hakotora",
    "JoeDalton": "JoeDalton",
    "Lunokai": "Lunokai",
    "Madrobots": "Madrobots",
    "Vlad": "Vlad",
    "BogusFocus": "BogusFocus",
    "Catgenova": "Catgenova",
    "Cole": "Cole",
    "cweluch": "cweluch",
    "Frogpaste": "Frogpaste",
    "Green": "Green",
    "Marchris": "Marchris",
    "Notch": "Notch",
    "Roshi77": "Roshi77",
    "SapheraKurenai": "SapheraKurenai",
    "Seromonth": "Seromonth",
    "candleKing": "candleKing",
    "Refe": "Refe",
    "Gold Goblins": "Gold Goblins",
    "Idle Squatches": "Idle Squatches",
    "zed.city": "zed.city",
    "listpro": "listpro",
    "Aaebruh": "Aaebruh",
    "Aditare": "Aditare",
    "adouuu": "adouuu",
    "adskjads": "adskjads",
    "AkraxD": "AkraxD",
    "Alatis": "Alatis",
    "albert89": "albert89",
    "AM": "AM",
    "Arquen": "Arquen",
    "b984982794": "b984982794",
    "baka": "baka",
    "Barbus": "Barbus",
    "bbknight": "bbknight",
    "Beager": "Beager",
    "BigFoot": "BigFoot",
    "blibla": "blibla",
    "CH.Msinc": "CH.Msinc",
    "Cheese": "Cheese",
    "choiha123": "choiha123",
    "cornflash12": "cornflash12",
    "d3c0d3dPT": "d3c0d3dPT",
    "Dardas": "Dardas",
    "Dashie": "Dashie",
    "Deu": "Deu",
    "DoodMang": "DoodMang",
    "EmCz": "EmCz",
    "Enhed": "Enhed",
    "EsricGodbear": "EsricGodbear",
    "FurryKing": "FurryKing",
    "Goodknight": "Goodknight",
    "goodluckz": "goodluckz",
    "GweneX": "GweneX",
    "gy812578617": "gy812578617",
    "hanini": "hanini",
    "Homelander": "Homelander",
    "Hooptie": "Hooptie",
    "jamminTheDev": "jamminTheDev",
    "Jerokhna": "Jerokhna",
    "Jinyou": "Jinyou",
    "jokerandspade": "jokerandspade",
    "KUSANG": "KUSANG",
    "LazyCat": "LazyCat",
    "leng0917": "leng0917",
    "Lorrow35": "Lorrow35",
    "Madvlad": "Madvlad",
    "MafiosoPlays": "MafiosoPlays",
    "magenthogany": "magenthogany",
    "MagicOutlaw": "MagicOutlaw",
    "Miku0o": "Miku0o",
    "minpo19": "minpo19",
    "Mintoure": "Mintoure",
    "mjz19910": "mjz19910",
    "mothman2112": "mothman2112",
    "moz420": "moz420",
    "msinc": "msinc",
    "mzdw": "mzdw",
    "N00B16": "N00B16",
    "Neuroclastys": "Neuroclastys",
    "NooN": "NooN",
    "oOAshOo": "oOAshOo",
    "Piper": "Piper",
    "plierpuller": "plierpuller",
    "Rasanshia": "Rasanshia",
    "Ravendious": "Ravendious",
    "red": "red",
    "RiggedyRekt": "RiggedyRekt",
    "Rol": "Rol",
    "sam0719": "sam0719",
    "SamScamander": "SamScamander",
    "sion": "sion",
    "skyler": "skyler",
    "songonkwac": "songonkwac",
    "superidler": "superidler",
    "sx753951": "sx753951",
    "Sylxter": "Sylxter",
    "Tana": "Tana",
    "Taoist": "Taoist",
    "teejay": "teejay",
    "tropicleaf": "tropicleaf",
    "TXJ123": "TXJ123",
    "UYK123": "UYK123",
    "Vaicine": "Vaicine",
    "Vexx": "Vexx",
    "vickyovgp": "vickyovgp",
    "Wheesel": "Wheesel",
    "Windi": "Windi",
    "y596125561": "y596125561",
    "Zetter": "Zetter",
    "zibba": "zibba",
    "zyw64681404": "zyw64681404",
    "emon": "emon",
    "sandromatic": "sandromatic",
    "Ackron": "Ackron",
    "binbomsj": "binbomsj",
    "BoodaBooda": "BoodaBooda",
    "Fang": "Fang",
    "Mickey": "Mickey",
    "Nice": "Nice",
    "novaccl2020": "novaccl2020",
    "panLing": "panLing",
    "QiRefiner": "QiRefiner",
    "Secret3": "Secret3",
    "Sofu": "Sofu",
    "Sosibius": "Sosibius",
    "Spyder": "Spyder",
    "Spyfly": "Spyfly",
    "willywonka": "willywonka",
    "ZackFair": "ZackFair",
    "AsrielDreemurr": "AsrielDreemurr",
    "autumnrain": "autumnrain",
    "Bilko": "Bilko",
    "LosPolos": "LosPolos",
    "STMachine": "STMachine",
    "taz": "taz",

    // 新增翻译项
    "1st Place": "第一名",
    "2nd Place": "第二名",
    "3rd Place": "第三名",
    "Competitions": "竞赛",
    "Conclave Competitions": "公会竞赛",
    // 活动名称（不完整）- 需要翻译
    "Butcher Carcass (Hunting Level": "屠宰尸体 (狩猎等级",
    "Prepare Fish (Cooking Level": "烹制鱼 (烹饪等级",
    // 界面和描述文本 - 需要翻译
    "Process raw materials into more valuable components.": "将原材料加工成更有价值的组件。",
    "Refining Level": "精炼等级",
    "skill also increases throughput.": "技能也会增加产量。",

    // 建筑强化描述 - 需要翻译
    "these buildings using rare resources found via their Conclave. Each enhancement level provides a +20% bonus to the building's throughput. The cost to enhance scales with both the building's level and its current enhancement level, requiring Starfall Ore (Ironforge), Glimmerwood Sap (Sawmill), or Crystallized Anima (Goldforge). The new":
    "这些建筑使用通过公会找到的稀有资源。每个强化等级提供建筑产量+20%的奖励。强化成本随建筑等级和当前强化等级而增加，需要星落矿石（铁熔炉）、微光树液（锯木厂）或生命结晶（金熔炉）。新的",
    // 农场系统相关
    "Farm": "农场",
    "Farming": "耕种",
    "Farm Goods": "农场产品",
    "Core Materials": "核心材料",
    "Currencies": "货币",
    "Special & Event Resources": "特殊 & 事件资源",
    "General": "通用",
    "Empty": "空",
    "The Artisan's Farm": "工匠农场",
    "Harvest All 🚜": "全部收获 🚜",
    "Remove All 🗑️": "全部移除 🗑️",
    "Time to grow new crops": "种植新作物时间",
    "Food Buff": "食物增益",

    // 作物和产品
    "Apples": "苹果",
    "Apple Cider": "苹果酒",
    "Corn": "玉米",
    "Cornbread": "玉米面包",
    "Potatoes": "土豆",
    "Potato-Blaster": "土豆爆破器",
    "Potato Blaster": "土豆爆破器",

    // 种植操作
    "Plant 🌽: 1": "种植 🌽: 1",
    "Plant 🌽: All": "种植 🌽: 全部",
    "Plant 🍎: 1": "种植 🍎: 1",
    "Plant 🍎: All": "种植 🍎: 全部",
    "Plant 🥔: 1": "种植 🥔: 1",
    "Plant 🥔: All": "种植 🥔: 全部",

    // 地下城消耗品
    "Consumables": "消耗品",
    "Dungeon Consumables": "地下城消耗品",
    "Party Leader": "队伍领袖",
    // 公会竞赛标题和状态
    "Active Conclave Competition: Donation Points": "活跃公会竞赛：捐赠点数",
    "Bountiful Harvest": "丰收庆典",
    "Donation Drive": "捐赠活动",
    "Donation Points": "捐赠点数",
    "Dungeon Delve": "地下城探索",
    "Loading today's competition details...": "加载今日竞赛详情...",
    "Today's Competition": "今日竞赛",

    // 玩家名称保持原样
    "exu92661": "exu92661",
    // 哥布林防御竞赛相关
    "Active Conclave Competition: Goblin Defense": "活跃公会竞赛：哥布林防御",
    "Defense Ticks": "防御点数",
    // 公会竞赛相关
    "A daily competition between all Conclaves to see who can find the most rare resources (Starfall Ore, Glimmerwood Sap, Crystallized Anima, Oceanic Essence). Each rare find earns 1 point. At the end of the day, the top 3 Conclaves will win an infusion of resources, which will be automatically contributed to their most-voted-for building project. The event resets daily at 00:00 UTC.":
    "所有公会之间的每日竞赛，看谁能找到最多的稀有资源（星落矿石、微光树液、生命结晶、海洋精华）。每个稀有发现获得1点。在每天结束时，前三名的公会将赢得资源注入，这些资源将自动贡献给他们投票最多的建筑项目。活动每日在00:00 UTC重置。",

    "Active Conclave Competition: Rare Finds":
    "活跃公会竞赛：稀有发现",

    // 地下城失败消息
    "The party has been defeated! The room resets.": "队伍已被击败！房间重置。",

    // 错误消息
    "Could not load party details (network error).": "无法加载队伍详情（网络错误）。",
    "No conclaves have points yet.": "尚无公会有分数。",

    // 服务器消息
    "MOTD: The Goblin Defense competition type seems to have a bug, so I changed today's Comp to Rare Finds":
    "今日消息：哥布林防御竞赛类型似乎存在错误，因此我将今天的竞赛改为稀有发现",

    // 哥布林防御竞赛描述
    "A daily competition between all Conclaves to see who can contribute the most to defending the town. Each tick spent building defenses earns 1 point. Points get updated in batches of 60. At the end of the day, the top 3 Conclaves will win an infusion of resources, which will be automatically contributed to their most-voted-for building project. The event resets daily at 00:00 UTC.": "所有公会之间的每日竞赛，看谁能对城镇防御贡献最多。每个用于建造防御的tick获得1点。点数每60个批次更新一次。在每天结束时，前三名的公会将赢得资源注入，这些资源将自动贡献给他们投票最多的建筑项目。活动每日在00:00 UTC重置。",

    "But you are not alone. Join a Conclave to compete in daily challenges, or form a party to delve into perilous dungeons. Test your mettle against epic world bosses, fulfill lucrative contracts for the Harbormaster, and command the player-driven market. All the while, a relentless goblin horde threatens the town's defenses, requiring every artisan to stand together to protect the community you've all worked so hard to build.":
    "但你并不孤单。加入公会参与日常挑战，或组建队伍深入危险的地下城。与世界Boss较量测试你的勇气，为港务长完成利润丰厚的合同，并掌控玩家驱动的市场。与此同时，无情的哥布林部落威胁着城镇的防御，需要每位工匠团结一致，保护你们共同努力建立的社区。",

    "Forgot your password? Enter your username and we'll send a reset link to the email associated with your account. Or, if you remember your current password, you can change it below.":
    "忘记密码？输入您的用户名，我们会向与您帐户关联的电子邮件发送重置链接。或者，如果您记得当前密码，可以在下方更改。",

    "Welcome to Idle Artisan, a world where your skill and dedication can turn humble resources into legendary artifacts. Begin your journey by gathering materials, honing your skills, and tending your own farm. Master the art of the forge and the kitchen, creating powerful tools and food buffs that will set you apart. Customize your gear with unique Glyphs and Sigils to perfect your craft.":
    "欢迎来到《工匠放置》，在这个世界中，您的技能和奉献可以将卑微的资源转化为传说神器。通过收集材料、磨练技能和照料自己的农场开始您的旅程。掌握锻造和烹饪的艺术，制作强大的工具和食物增益，使您脱颖而出。使用独特的符文和印记自定义您的装备，以完善您的工艺。",
    // 竞赛描述
    "A celebration of agricultural prowess. Conclaves gain points for each crop harvested from their members' farms.": "对农业技能的庆祝。公会根据成员农场收获的每株作物获得点数。",
    "A challenge of perception and luck. Conclaves earn 1 point for every rare resource (Starfall Ore, Glimmerwood Sap, Crystallized Anima, Oceanic Essence) found by their members.": "对洞察力和运气的挑战。公会根据成员发现的每个稀有资源（星落矿石、微光树液、生命结晶、海洋精华）获得1点。",
    "A measure of bravery and teamwork. Conclaves score points for every dungeon successfully cleared by their members.": "对勇气和团队合作的衡量。公会根据成员成功通关的每个地下城获得点数。",
    "A test of civic duty. Conclaves earn points for every tick their members contribute to building the town's defenses against the goblin attack.": "对公民责任的考验。公会根据成员为建造城镇防御对抗哥布林攻击贡献的每个tick获得点数。",
    "A test of generosity and resource management. Conclaves earn points for every resource contributed to their shared projects.": "对慷慨和资源管理的考验。公会根据贡献给共享项目的每个资源获得点数。",
    "To foster a spirit of friendly rivalry, the Mayor has decreed a daily competition between all Conclaves. Each day at midnight (UTC), the Mayor randomly selects one of three challenges for the Conclaves to compete in for the next 24 hours": "为了培养友好竞争精神，市长颁布了所有公会之间的每日竞赛。每天午夜（UTC），市长随机选择三个挑战之一，供公会在接下来的24小时内竞争",

    // 消耗品描述
    "A potent brew that grants a party-wide buff for 30 seconds: +25% damage dealt and +25% damage taken. This item can only be used by the party leader and cannot be used if the buff is already active.": "一种强效酿造物，为全队提供30秒增益：+25%造成的伤害和+25%受到的伤害。此物品只能由队伍领袖使用，且增益已激活时无法使用。",

    "A surprisingly effective explosive that deals damage to the enemy equal to 10% of its maximum health.": "一种出奇有效的爆炸物，对敌人造成等于其最大生命值10%的伤害。",

    "Heals the entire party for 10% of their maximum health. Does not overheal.": "治疗全队10%的最大生命值。不会过量治疗。",

    "Craftable, tradeable, and usable items that provide a temporary advantage in dungeons. Each of the three foods has its own independent 30-second cooldown per player. Recipes are unlocked in the \"Exchange\" tab by spending 100 of the respective farm good.": "可制作、可交易、可使用的物品，在地下城中提供临时优势。三种食物各有独立的30秒冷却时间（每位玩家）。配方在\"交易所\"标签页通过消耗100个相应的农场产品解锁。",

    "The fields are watched over by the Soilwarden. A solemn protector, she ensures the earth remains fertile. Follow her teachings: work the land, and it will reward you. Each harvest provides 100 Farming XP, and with each level, you are entrusted with another plot. Your growing skill also shortens the 4-hour growth cycle, a sign of her approval.": "田地由土壤守护者看管。她是一位庄严的保护者，确保土地保持肥沃。遵循她的教导：耕种土地，它会回报你。每次收获提供100点耕种经验值，每升一级，你会获得另一块土地。你的种植技能也会缩短4小时的生长周期，这是她认可的标志。",

    // 玩家名称和符号保持原样
    "error503": "error503",
    "---||---": "---||---",
    "🍞": "🍞",
    "🧃": "🧃",
    "🧨": "🧨",
    "⚜️": "⚜️",
    "🎖️": "🎖️",
    "🏆": "🏆",
    "💠": "💠",
    "🥇": "🥇",
    "🧱": "🧱",
    "⚔️": "⚔️",
    "🏰": "🏰",
    "🏹": "🏹",
    "💀": "💀",
    "📌": "📌",
    "🩸": "🩸",
    "🛡️": "🛡️",
    "⚡": "⚡",
    "🌀": "🌀",
    "🌊": "🌊",
    "🌳": "🌳",
    "🍁": "🍁",
    "🧌": "🧌",
    "✅": "✅",
    "🎯": "🎯",
    "🛠️": "🛠️",
    "⚔️": "⚔️",
    "✨": "✨",
    "⚜️": "⚜️",
    "🏹": "🏹",
    // 作物表情符号保持原样
    "🌽": "🌽",
    "🍎": "🍎",
    "🥔": "🥔",
    "•": "•",
    // 农场技能和操作
    "Farming (4)": "耕种 (4)",
    "Harvest 🌽": "收获 🌽",
    "Harvest 🍎": "收获 🍎",
    "Harvest 🥔": "收获 🥔",

    // 符文名称
    "Glyph Of Laborer": "劳动者符文",

    ". These magical symbols can be socketed into your tools to provide unique bonuses and trade-offs, allowing for deeper specialization of your craft. You can also purchase": "。这些魔法符号可以插入您的工具中，提供独特的加成和权衡，让您能够更深入地专精技艺。您还可以购买",

    "here, a consumable used to safely unsocket a Glyph from a tool.": "这里，一种用于安全从工具中移除符文的消耗品。",

    "A daily competition between all Conclaves to see who can contribute the most to their projects. At the end of the day, the top 3 Conclaves with the most donation points will win an infusion of resources, which will be automatically contributed to their most-voted-for building project. The event resets daily at 00:00 UTC.": "所有公会之间的每日竞赛，看谁能为其项目贡献最多。在每天结束时，捐赠点数前三的公会将赢得资源注入，这些资源将自动贡献给他们投票最多的建筑项目。活动每日在 UTC 00:00 重置。",

    "Current Tithe Rate": "当前税率",
    "Icons are unlocked based on total donation points. The founder can select which icon to display.": "图标根据总捐赠点数解锁。创始人可以选择要显示的图标。",

    // 描述文本
    "A personal building that allows you to hire a sellsword. Each level allows you to hire them for one additional hour, up to a maximum of 8 hours. You can hire them for one of two tasks: to automatically join combat events (Boss, Treant, Golem, Leviathan) or to automatically start dungeon runs for you. Be warned: this sellsword is lazy and will only fight while you are actively overseeing your workshop. As payment for joining combat events, they take a steep 80% cut of all event rewards.": "一个允许您雇佣佣兵的个人建筑。每升一级允许您多雇佣他们1小时，最多8小时。您可以雇佣他们执行两项任务之一：自动加入战斗事件（Boss、树人、魔像、利维坦）或自动为您开始地下城运行。警告：这个佣兵很懒，只会在您亲自监督工坊时战斗。作为加入战斗事件的报酬，他们会抽取所有事件奖励的80%。",

    "A thief may steal a random tool (pickaxe, axe, sword) or a single cooked food from one player's inventory. This can be countered by the": "小偷可能会从玩家的库存中随机偷取一件工具（镐子、斧子、剑）或一份熟食。这可以通过",

    "buff. This increases your damage dealt in all cooperative combat events and also enhances the effectiveness in dungeons.": "增益效果来对抗。这会增加您在所有合作战斗事件中造成的伤害，并提高在地下城中的效果。",
    // 数字格式 - 保持原样或根据需求翻译
    "787.2k": "787.2k",

    // 署名/作者信息
    "By": "由",

    // 游戏内消息需要汉化
    "You feel a strange pull on your line and reel in a shimmering Abyssal Eel!": "你感觉到鱼线被奇怪地拉扯，收线时钓上了一条闪烁的深渊鳗鱼！",

    // 邮箱地址保持原样
    "[email protected]": "[email protected]",
    // 资源数量显示
    "100,000 Gold Bars": "100,000 金锭",
    "100,000 Iron Bars": "100,000 铁锭",
    "100,000 Planks": "100,000 木板",

    // 界面文本
    "Act": "行动",
    "Establish a new Conclave and become its founder.": "建立一个新的公会并成为其创始人。",
    "None.": "无。",
    "Not available yet": "尚未可用",

    // 设置
    "Could not load party details.": "无法加载队伍详情。",
    "Attempting to join": "正在尝试加入",
    "Save": "保存",
    "Export": "导出",
    "Import": "导入",
    "Settings": "设置",
    "Achievements": "成就",
    "Statistics": "统计",
    "Changelog": "更新日志",
    "Hotkeys": "快捷键",
    "ALL": "全部",
    "Default": "默认",
    "AUTO": "自动",
    "default": "默认",
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal": "目标",
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
    "Battler Level": "战斗者等级",
    "Battler": "战斗者",
    "Axe": "斧子",
    "All Items": "全部物品",
    "Action": "行动",
    "Active Buildings": "个人建筑",
    "Ancient Treant": "远古树人",
    "Total Level": "总等级",
    "Tip": "提示",
    "Time": "时间",
    "View Listings": "查看清单",
    "Username": "用户名",
    "Uncommon": "罕见",
    "Town Watch": "城镇守卫",
    "Town Watch Level": "城镇守卫等级",
    "Item": "物品",
    "Item Quality (Rarity)": "物品质量（稀有度）",
    "Iron Ore": "铁矿石",
    "Ironforge": "铁熔炉",
    "Iron Bars": "铁锭",
    "Gold Bars": "金锭",
    "Iron Bars remaining": "铁锭剩余",
    "Inventory": "库存",
    "Idle Artisan": "工匠放置",
    "Helm of Learning": "学问之盔",
    "CraftCrossbow": "手工弩",
    "Gold.": "金币。", // 先定义带句号的
    "with a bid of": "以出价",
    "Contract awarded to": "合同授予",
    "Gold": "金币", // 通用的放在后面
    "Goblin Siege": "哥布林围攻",
    "Gather Logs.": "采集木头。",
    "Gather Iron Ore.": "采集铁矿石。",
    "Gathering": "采集",
    "Fight": "战斗",
    "Fight enemies to earn Gold.": "与敌人战斗以获得金币。",
    "For any questions, contact us by sending an email to": "如有任何问题，请发送电子邮件至",
    "For the purpose of maintaining game security and a fair environment for all users, the following information about users is collected (username, IP address, browser information, email address, game actions). This game also uses cookies to ensure that only authenticated users can perform game actions. This data will not be shared with any third parties, except as required by law or court order. This data is not used for marketing purposes. This game utilizes reasonable, industry standard mechanisms for protection of this information. Any users who have concerns should not create an account and play this game.": "为了维护游戏安全和所有用户的公平环境，我们收集以下用户信息（用户名、IP地址、浏览器信息、电子邮件地址、游戏操作）。该游戏还使用cookie来确保只有经过身份验证的用户才能执行游戏操作。除法律或法院命令要求外，这些数据不会与任何第三方共享。此数据不用于营销目的。本游戏利用合理的行业标准机制来保护这些信息。任何有顾虑的用户都不应该创建帐户并玩这个游戏。",
    "Fair Play": "公平竞争",
    "Experience": "经验值",
    "Event": "事件",
    "Equipped Items": "已装备物品",
    "Epic": "史诗",
    "Enhance": "强化",
    "Delete Account": "删除账户",
    "Delete My Account": "删除我的账户",
    "Select All": "全选",
    "Scrap All": "全部回收",
    "Select None": "未选择",
    "Sell Items": "出售物品",
    "Server-Wide Events": "服务器级事件",
    "Stats": "统计",
    "Status Log": "状态日志",
    "Storage Barn Level": "仓库等级",
    "Storage Barn": "仓库",
    "Storage Locker": "储物柜",
    "Items stored in the locker are safe from being stolen by the Thief. The storage holds 4 quantity per level.": "存储在储物柜中的物品不会被小偷偷走。每级储物柜可存储4个物品堆叠。",
    "Storage Locker Level": "储物柜等级",
    "Conclave Strongbox:": "公会储物箱：",
    "Refining Level": "精炼等级",
    "Refining Level ": "精炼等级 ",
    "Sword": "剑",
    "Woodcutting": "伐木",
    "Crafting": "制作",
    "Crafting Level": "制作等级",
    "Crafting Table": "合成台",
    "Crafting (Level": "制作 (等级",
    "Craft": "制作",
    "Core Skills": "核心技能",
    "Confirm your password": "确认你的密码",
    "Buy All": "购买全部",
    "Buy": "购买",
    "Community": "社区",
    "Join Event": "加入事件",
    "Join the": "加入",
    "Leaderboard": "排行榜",
    "Log Out": "登出",
    "Logs": "木头",
    "Craft Attempts": "制作次数",
    "Dark Mode (Beta)": "深色模式 (测试)",
    "Game Ticks": "游戏时刻(Tick)",
    "Gold Bars remaining": "金锭剩余",
    "item quality": "物品品质",
    "Market": "市场",
    "Max": "最大",
    "Merchant": "商人",
    "Min": "最小",
    "Mining": "采矿",
    "Mining Level": "采矿等级",
    "No bonus or penalty.": "没有奖励或惩罚。",
    "[Common]": "[普通]",
    "Battler's Bar": "战斗者酒吧",
    "Battler's Bar Level": "战斗者酒吧等级",
    "Account Security": "账户安全",
    "Battling": "战斗",
    "Battling Bonus": "战斗加成",
    "Category": "类型",
    "Boss Fight": "Boss对抗",
    "Boss Tokens": "Boss代币",
    "Bug Exploitation": "漏洞利用",
    "Choose your activity": "选择你的活动",
    "Community Buildings": "社区建筑",
    "Contribute": "贡献",
    "Cooperative Fights": "合作作战",
    "Crafting Table Level": "合成台等级",
    "A Guide to Success and Quality": "成功和质量指南",
    "Each player is permitted to own and operate only one account. Creating multiple accounts (\"alts\") to gain an unfair advantage, bypass restrictions, or interact with your main account is strictly prohibited. If your household has more than one player, ensure that those accounts do not interact with each other (market trading or otherwise).": "每个玩家只能拥有和操作一个账号。严格禁止创建多个帐户（\"alt\"）以获得不公平的优势，绕过限制或与您的主帐户交互。如果你的家庭有多个玩家，确保这些账户不相互影响（市场交易或其他）。",
    "Goldforge Level": "金熔炉等级",
    "Goldforge": "金熔炉",
    "Good luck, and happy gaming!": "祝你好运，游戏愉快！",
    "Guild of Alchemists": "炼金师公会",
    "Guild of Alchemists Level": "炼金师公会等级",
    "Helm": "头盔",
    "If your craft succeeds, the game then determines the item's quality, ranging from Poor to Epic. This is determined by a \"Quality Score\" calculated on every craft. Your score is influenced by your Crafting Level (which adds a bonus), the item's level (which adds a penalty), and the server-wide bonus from the": "如果你的制作成功了，游戏就会决定道具的质量，从差到史诗。这是由每个工艺计算的\"质量分数\"决定的。你的分数受到你的锻造等级（会增加奖励）、道具等级（会增加惩罚）和服务器范围内的奖励的影响",
    "Refresh": "刷新",
    "Respectful Conduct": "尊重他人",
    "Rune Shards": "符文碎片",
    "Runic Golem": "符文魔像",
    "Rules": "规则",
    "Ironforge Level": "铁熔炉等级",
    "Lumberjack Shack": "伐木工小屋",
    "Lumberjack Shack Level": "伐木工小屋等级",
    "Main": "主界面",
    "Pickaxe": "镐子",
    "Planks": "木板",
    "Planks remaining": "木板剩余",
    "Play fair and respect the spirit of the game. The game staff reserves the right to take action against any behavior deemed harmful to the game or its community, even if not explicitly listed here.": "公平竞争，尊重比赛精神。游戏工作人员保留对任何被认为对游戏或社区有害的行为采取行动的权利，即使这里没有明确列出。",
    "Players that choose to \"cross-trade\" with another game do so at their own risk.": "选择与另一款游戏\"交叉交易\"的玩家需要自担风险。",
    "Poor": "劣质",
    "[Poor]": "[劣质]",
    "Post To Market": "发布到市场",
    "Price": "价格",
    "Price/Item (Gold)": "价格/物品 (金币)",
    "Privacy Policy": "隐私政策",
    "Prospector's Lodge": "勘探者小屋",
    "Prospector's Lodge Level": "勘探者小屋等级",
    "Quantity": "数量",
    "Quartermaster's Workshop": "军需工坊",
    "Quartermaster's Workshop Level": "军需工坊等级",
    "Reduces the resource costs of tools, refining buildings, and community buildings by 1.5% per level.": "每级降低1.5%的工具、精炼建筑和社区建筑的资源成本。",
    "Refine materials and create items.": "精炼材料，制作道具",
    "Welcome to the Game!": "欢迎来到游戏！",
    "Treant Resin": "树人树脂",
    "Total Game Ticks Played": "游戏时刻(Tick)总数",
    "Woodcutting Bonus": "伐木加成",
    "Hunter's Harvest!": "猎人收获！",
    "Woodcutting Level": "伐木等级",
    "You have no active listings.": "你没有可用清单。",
    "Your": "你的",
    "Your Active Listings": "你的上架清单",
    "You are responsible for the security of your own account. Do not share your password with anyone. Game staff will never ask for your password.": "您对自己的帐户安全负责。不要与任何人分享你的密码。游戏工作人员永远不会问你的密码。",
    "Your goal is to become the most skilled and wealthiest player by leveling up your skills, crafting powerful gear, and mastering the player-driven market. This guide covers the core mechanics to get you started.": "你的目标是通过升级你的技能，制作强大的装备，并掌握玩家驱动的市场，成为最熟练和最富有的玩家。本指南涵盖了让您入门的核心机制。",
    "Your journey is defined by four core skills. You gain experience (XP) by performing related activities, which you can select on the \"Main\" tab.": "你的人生旅程由四项核心技能决定。您可以通过执行相关的活动来获得经验（XP），您可以在\"主界面\"选项卡上选择。",
    "your Pickaxe, Axe, or Sword, permanently increasing its power.": "你的镐子、斧头或剑，永久增加其威力。",
    "Select the categories you want displayed in the Status Log": "选择要在状态日志中显示的类别",
    "Leave Event": "离开事件",
    "Place Bid": "出价",
    "Thief Event": "盗贼事件",
    "Thief": "盗贼",
    "To ensure Idle Artisan remains a fair and enjoyable experience for everyone, all players are expected to adhere to the following rules. Violations may result in temporary or permanent suspension of your account.": "为了确保 Idle Artisan 对每个人来说都是一个公平和愉快的体验，所有玩家都应该遵守以下规则。违规可能会导致您的帐户暂时或永久封号。",
    "(Boss Fight, Ancient Treant, Runic Golem) - All players can join to deal damage to a powerful world boss and earn a share of special resources.": "（Boss战，远古树人，符文魔像）-所有玩家可以加入对一个强大的世界Boss造成伤害，并获得一份特殊资源。",
    "(Mining, Woodcutting, Battling, Crafting) - For a short time, all XP gains for the specific skill are doubled.": "（采矿，伐木，战斗，制作）-在短时间内，所有的经验所得的特定技能加倍。",
    "(Purchasing Agent, Tax Season, Trade Ship) - These events temporarily change the rules of the market, creating new opportunities for savvy traders.": "（采购代理，税收季节，贸易船）-这些事件暂时改变了市场规则，为精明的交易者创造了新的机会。",
    ", and then, if successful, a roll for": "，然后，如果成功了，就掷出",
    ", which grants bonus XP to any skill when equipped.": "，当装备时，任何技能都能获得额外的经验值。",
    "; hitting the cap shows the resource in": "; 点击上限显示资源在",
    "red": "; 红色",
    "\"Community\"": "\"社区\"",
    "Sawmill": "锯木厂",
    "Sawmill Level": "锯木厂等级",
    "Rune Shards remaining": "符文碎片剩余",
    "Crafted a Level": "制作了一个等级",
    "! You gained": "！你获得了",
    "Crafting XP (event +1 XP, helm +5 XP). It has been placed in your inventory.": "点制作经验值（事件+1经验值，头盔+5经验值）。它已被放入你的库存中。",
    // 品质基础名称
    "Poor": "劣质",
    "Common": "普通",
    "Uncommon": "罕见",
    "Rare": "稀有",
    "Epic": "史诗",
    "Legendary": "传说",
    "Unique": "独特",
    "[Unique]": "[独特]",

    // 工具基础名称
    "Sword": "剑",
    "Axe": "斧子",
    "Pickaxe": "镐子",
    "Fishing Rod": "鱼竿",
    "Crossbow": "弩",

    // 符文基础名称
    "Glyph of Scavenging": "拾荒符文",
    "Glyph of the Duelist": "决斗者符文",
    "Glyph of the Laborer": "劳动者符文",
    "Glyph of the Philanthropist": "慈善家符文",
    "Glyph of the Prospector": "勘探者符文",
    "Glyph Of Prospector": "勘探者符文",
    "Glyph of Frugality": "节俭符文",
    "Glyph of Gluttony": "饕餮符文",
    "none": "无",

    // 公会名称 - 保持原样
    "[💀Gold Goblins💀]": "[💀Gold Goblins💀]",

    // 地下城相关
    "Default Dungeon Role": "默认地下城角色",
    "Start New Party (Custom)": "创建新队伍（自定义）",
    "Start New Party (Defaults)": "创建新队伍（默认）",

    // 玩家名称 - 保持原样
    "BIngle": "BIngle",
    "Zed09": "Zed09",
    "qwe78887978": "qwe78887978",

    // 物品拥有数量显示
    " - Have:": " - 拥有：",
    "Skill Bonus Events": "技能加成事件",
    "Special Resources & Item Enhancement": "特殊资源 & 物品强化",
    "success or failure": "成功或失败",
    "Success vs. Failure": "成功或失败",
    "tab allows all players to contribute resources to upgrade shared buildings that provide powerful, permanent bonuses to everyone on the server.": "标签页允许所有玩家贡献资源来升级共享建筑，为服务器上的每个人提供强大的永久加成。",
    "The": "",
    "The game features a cycle of automated events that provide unique opportunities and challenges for all players.": "游戏的特点是自动事件循环，为所有玩家提供独特的机会和挑战。",
    "The same player, still at Crafting Level 20, attempts to craft a Level 25 Pickaxe. Because the item is a higher level than their skill, the chance of failure is significant. If they do succeed, their Quality Score will have a penalty, making it more likely they will create a Common or Poor item, but a lucky roll could still result in something great.": "同一名玩家，仍然在制作20级，试图制作25级的镐。因为道具的等级高于玩家的技能等级，所以玩家的失败几率也非常大。如果他们成功了，他们的质量分数将受到惩罚，这将使他们更有可能创造一个普通或劣质的道具，但幸运的投掷仍然可能导致一些伟大的东西。",
    "The use of scripts, bots, macros, or any form of automation to play the game is forbidden. All actions must be performed manually by the player.": "禁止使用脚本、机器人、宏或任何形式的自动化来玩游戏。所有动作必须由玩家手动执行。",
    "This game is intended for users that are over 18 years of age. We do not knowingly collect information from users below this age.": "这个游戏是为18岁以上的用户准备的。我们不会故意收集这个年龄以下用户的信息。",
    "This will permanently delete your account. This cannot be undone.": "这将永久删除您的帐户。这是无法挽回的。",
    "to chat with other players and give feedback on the game.": "与其他玩家聊天并提供游戏反馈。",
    "Earned from the": "获得自",
    "Economic Events": "经济事件",
    "Equip": "装备",
    "Cross-trade guidance": "买空卖空的指导",
    "Crafting is the most rewarding way to acquire powerful gear, but it comes with both risk and opportunity. Every crafting attempt is a two-step process: first, a check for": "锻造是获得强大装备的最有价值的方式，但它同时伴随着风险和机会。每次制作尝试都有两个步骤：首先，检查",
    "At any time, and for any reason, you can delete your account which will permanently delete all of this information from the server. This action can be completed under the in-game Options menu.": "在任何时候，出于任何原因，您可以删除您的帐户，这将从服务器上永久删除所有这些信息。这个动作可以在游戏内的选项菜单下完成。",
    "A thief may steal a random item from one player's inventory. This can be countered by the": "小偷可以从一个玩家的物品清单中随机窃取一个物品。这可以通过",
    "A server-wide auction for a single tool. A great way to spend your Gold!": "针对单个工具的服务器范围拍卖。一个伟大的方式来花你的金币！",
    "A player with Crafting Level 20 attempts to make a Level 5 Pickaxe. Their high skill level gives them a very high chance of success. For item quality, their skill advantage provides a large bonus to their Quality Score, making it much more likely they will create a Rare or even Epic tool.": "锻造等级20的玩家尝试制作5级的镐子。他们的高技能等级使他们有很高的成功机会。就道具质量而言，他们的技能优势为他们的质量分数提供了巨大的奖励，使他们更有可能创造稀有甚至史诗工具。",
    "Nothing Equipped": "未装备",
    "No Botting or Automation": "没有机器人或自动化",
    "One Account Per Person": "一人一帐户",
    "Rev History": "版本日志",
    "Many features in the game have tooltips. You can click or tap an item to get more information about it.": "游戏中的许多功能都有工具提示。您可以单击或轻敲某个项目以获取有关该项目的更多信息。",
    "Masterwork Atelier": "杰作工作室",
    "Masterwork Atelier Level": "杰作工作室等级",
    "Conclave Strongbox": "公会储物箱",
    "If your Crafting Level is higher than the item's level, your chance of success is high. If you try to craft an item that is a much higher level than your own skill, the chance of failure increases significantly. A failed craft will consume your resources, so be mindful of the risks!": "如果你的制造等级高于道具等级，你成功的几率就会很高。如果你试图制作一个比你自己的技能等级高得多的道具，那么失败的几率就会大大增加。失败的飞船会消耗你的资源，所以要注意风险！",
    "In addition to standard materials, you can acquire special resources from cooperative events. These are used to craft and improve the most powerful items in the game.": "除了标准材料外，您还可以从合作活动中获取特殊资源。这些工具用于制作和改进游戏中最强大的道具。",
    "Intentionally exploiting a bug, glitch, or loophole for personal gain is not allowed. If you discover a bug, please report it to the game staff immediately through the": "不允许故意利用错误、故障或漏洞谋取个人利益。如果你发现了bug，请立即通过",
    "is the most important factor in this process. When you attempt to craft an item, the game compares your skill level to the level of the item you want to create.": "是这个过程中最重要的因素。当你尝试制作道具时，游戏会将你的技能等级与你想要制作的道具等级进行比较。",
    "Harassment, hate speech, threats, or any form of abusive behavior towards other players or staff will not be tolerated. Keep all interactions respectful and constructive.": "对其他玩家或工作人员的骚扰、仇恨言论、威胁或任何形式的虐待行为都是不被容忍的。保持所有的互动都是尊重和建设性的。",
    "Game Rules & Code of Conduct": "游戏规则和行为准则",
    "event. Required to craft the unique": "事件。需要制作独特的",
    "event. Used to": "事件。用于",
    "event. Required to contribute to high-level Community Buildings.": "事件。需要为高级社区建筑做出贡献。",
    "A cooperative defense event where all players must protect a community building from being pillaged.": "一个合作防御事件，所有玩家必须保护社区建筑不被掠夺。",
    "A new version is available. Please refresh to get the latest updates.": "有新版本。请刷新以获取最新更新。",
    "10x more storage for all resources (except gold) per level. Base capacity is": "每级增加10倍所有资源的存储空间（金币除外）。基础容量为",
    "+1 bonus per level to an item's \"Quality Score\" when it is crafted.": "当物品制作时，每级增加1点\"质量分数\"。",
    "+2% chance per level to arrest the Thief (caps at 100%). Also grants +1% damage per level in all cooperative combat events.": "每级+2%的机会逮捕盗贼（上限为100%）。同时在所有协同战斗事件中每级增加1%的伤害。",
    "Refining": "精炼",
    "Example 1: An Easy Craft": "例子1：简单的制作",
    "Example 2: A Risky Craft": "例子2：有风险的制作",
    "community building. A higher Quality Score gives you a better chance at rolling a high-rarity item. Each rarity provides a different bonus to the tool's final power": "社区建设。质量分数越高，你掷出稀有物品的几率就越大。每一件稀有性都为工具的最终力量提供了不同的加成",
    '"Sap-hardened, edge-sharpened. The forest remembers."': '"树液硬化，棱角锋利。森林会记得的。"',
    "TradeShip": "贸易船",
    "Trade Ship": "贸易船",
    "Mining Bonus": "采矿加成",
    '"Did I just see a shadow?\"': '"我刚才是不是看到了一个影子？"',
    "Arrest Chance": "逮捕几率",
    "The thief is known to steal tools from people when they're not paying attention...": "众所周知，这个小偷会在人们不注意的时候偷走工具...",
    '"The crowd roars; glory and gold await.\"': '"人群怒吼着；荣耀和金币在等着你。"',
    "and you get 1 extra Battler XP during this event.": "在此活动期间，您将获得1个额外的战斗者经验。",
    "Gold gain is": "金币增益是",
    '"Hands steady, hearts keen, masterpieces are made today.\"': '"双手坚定，心灵敏锐，今日成就杰作。"',
    "Crafting Bonus": "制作加成",
    "Refining and crafting give 1 extra XP during this event.": "精炼和制作在此活动中给予1额外的经验值。",
    '"Who said I got this item from the Thief? You can\'t prove anything..."': '"谁说我从小偷那里得到这个东西的？你什么都证明不了..."',
    "Adds +0.25 to base power and +0.10 to rarity multiplier.": "增加+0.25基础力量和+0.10稀有度乘数。",
    "Enhance Axe": "强化斧头",
    "Enhance Pickaxe": "强化镐子",
    "Not enough Treant Resin.": "没有足够的树人树脂。",
    "Purchasing Agent": "采购代理",
    "The agent's motives are unknown, but their coin is always good.": "代理人的动机是未知的，但他们的金币总是好的。",
    "The Purchasing Agent will buy a random quantity of a random resource from one seller on the market.": "采购代理将从市场上的一个卖家那里购买随机数量的随机资源。",
    "Tax Season": "税收季节",
    "Scrap Value (per item)": "回收价值 (单个物品)",
    "This is a sidegrade.": "这个装备和你身上的一样。",
    "Equipped": "已装备",
    '"Sap flows quick and axes sing."': '"汁液流得快，斧子唱得响。"',
    "and you get 1 extra Woodcutting XP during this event.": "在此活动期间，您将获得额外1伐木经验。",
    "Adds a bonus to your \"Crafting Quality Score\" for every item you make. A higher score directly increases the chance of creating high-rarity items.": "为你制作的每件物品增加一个奖励到你的\"制作质量分数\"。分数越高，创造稀有道具的机会就越高。",
    "Beakers bubble; yields rise.": "烧杯泡沫;收益率上升。",
    "Current Capacity": "当前容量",
    "Current Effect": "当前效果",
    "Each level reduces the resource costs for crafting personal items, refining buildings, and community buildings by 1.5%.": "每升一级，制作个人物品、精炼建筑和社区建筑的资源成本降低1.5%。",
    "Enhance Sword": "加强剑",
    "Gain +1% Gold per level.": "每升一级+1%金币",
    "Gain +1% Iron Ore per level.": "每升一级+1%的铁矿石。",
    "Gain +1% Logs per level.": "每升一级增加1%的木头。",
    "Gain +1% refining output (Iron Bars, Planks, Gold Bars) per level; inputs unchanged.": "每升一级增加1%精炼产量（铁锭，木板，金锭）；投入不变。",
    "Increase all storage 10x per level.": "每级增加10倍的存储空间。",
    "Next Level": "下一级",
    "Smells like fresh pine and bold plans.": "闻起来像新鲜的松木和大胆的计划。",
    "Tales grow taller with every mug raised.": "杯子越盛，故事越长。",
    "The heart of communal prosperity.": "共同繁荣的核心。",
    "Where good becomes great - we craft with finesse.": "在善变得伟大的地方，我们用技巧来制作。",
    "Where miners trade secrets over a hearty stew.": "矿工们一边吃着丰盛的炖菜一边交换秘密。",
    "With eyes on every corner, thieves mind their step.": "小偷的眼睛监视着每一个角落，小心脚下。",
    "Logs gain is": "木头增益",
    "doubled": "翻倍",
    '"Steel sings, shields break. Stand together or fall alone."': '"钢铁会唱歌，盾牌会破裂。要么并肩作战，要么独自倒下。"',
    "<-- !! Building under Goblin Siege !! -->": "<-- !! 哥布林围攻中的建筑 !! -->",
    "Build Barricades": "建造路障",
    "Community (Siege!)": "社区 (围攻!)",
    "grows with the number of participants!": "随着参与者数量的增加而增长！",
    "Join to deal battle damage based on your Battling power. The total reward pool of Boss Tokens": "加入并根据你的战斗能力造成战斗伤害。Boss代币的总奖励池",
    "Reinforce Walls": "加固城墙",
    "Rewards are split based on damage and time contributed. The base pool starts at 100 and increases by 1% on each success.": "奖励是根据伤害和时间分配的。基本池从100开始，每次成功增加1%。",
    "Sharpen Swords": "磨剑",
    "Town Watch Bonus": "城镇守卫加成",
    "This is an upgrade.": "这个装备比你身上的好。",
    "This is a downgrade.": "这个装备比你身上的差。",
    "Seller": "卖家",
    "Rank": "排名",
    "\"A nail saved is a nail earned. Here, we waste nothing.\"": "\"省一颗钉子就是赚一颗钉子。在这里，我们什么也不浪费。\"",
    "Benefit": "增益",
    "\"Its roots are deep and its patience endless. Bring axes and allies.\"": "\"它的根是深的，它的耐心是无穷的。带上斧头和盟友。\"",
    "Join to deal chop damage based on your Woodcutting power. The total reward pool of Treant Resin": "加入并造成砍伤基于你的伐木力量。树人树脂的总奖励池",
    "\"Magic gave it form, but stone is still stone. Find the cracks, and shatter its core.\"": "\"魔法赋予了它形体，但石头还是石头。找到裂缝，打碎它的核心。\"",
    "Join to deal pick damage based on your Mining power. The total reward pool of Rune Shards": "加入并根据你的采矿能力造成采集伤害。符文碎片的总奖励池",
    "Rewards are split based on damage and time contributed. The base pool starts at 1000 and increases by 1% on each success.": "奖励是根据伤害和时间分配的。基本池从1000开始，每次成功增加1%。",
    "and you get 1 extra Mining XP during this event.": "并且在此活动中您将获得1额外的采矿经验值。",
    "\"The veins run rich; swing while fortune smiles.\"": "\"矿脉丰富；时来运转。\"",
    "Iron Ore gain is": "铁矿石增益",
    "--Crafting Active--": "--正在制作--",
    "But you are not alone. Join forces with the entire server to contribute to massive community buildings that grant permanent bonuses to all. Band together to defend the town from the relentless Goblin Siege, take down epic world bosses for unique rewards, and outbid your rivals in server-wide auctions for one-of-a-kind items. Whether you're crafting the sword that turns the tide or placing the winning bid on it, your actions will shape the history of this world.": "但你并不孤单。与整个服务器联合起来，为大规模的社区建筑做出贡献，为所有人提供永久的奖励。团结起来保卫小镇免受无情的地精围攻，拿下史诗般的世界boss以获得独特的奖励，并在服务器范围内拍卖独一无二的物品。无论你是在制作一把扭转乾坤的剑，还是在竞标中胜出，你的行动都将塑造这个世界的历史。",
    "Idle Artisan is an Idle PBBG (persistent browser-based game) where your skill and strategy shape your destiny. Begin your journey as a humble gatherer, mastering the arts of Mining, Woodcutting, and Battling to collect valuable resources. Refine these materials and hone your Crafting skill to create powerful tools and gear, or trade your goods on a dynamic, player-driven market to build your fortune. Will you become a legendary crafter, a wealthy merchant, or a renowned warrior?": "《工匠放置》Idle Artisan 是一款基于网页的持久化PBBG游戏，你的技能和策略决定了你的命运。作为一个卑微的采集者开始你的旅程，掌握采矿、木刻和战斗的艺术来收集有价值的资源。精炼这些材料，磨练你的锻造技能，创造强大的工具和装备，或者在一个动态的、玩家驱动的市场上交易你的商品来积累你的财富。你会成为一个传说的工匠，一个富有的商人，还是一个著名的战士？",
    "Change Password": "修改密码",
    "Change your password by entering your username, current password, and a new password.": "通过输入用户名、当前密码和新密码来更改密码。",
    "Confirm New Password": "确认新密码",
    "Confirm Password": "确认密码",
    "Create Account": "创建账户",
    "Current Password": "当前密码",
    "Email": "电子邮件",
    "Forgot your password?": "忘记密码了？",
    "Forgot your password? Enter your username and we'll send a reset link to the email associated with your account. Or, if you remember your current password, you can change it below.": "忘记密码了？输入您的用户名，我们将发送一个重置链接到与您的帐户相关联的电子邮件。或者，如果您记得当前的密码，您可以在下面更改它。",
    "Log in or create an account to begin.": "登录或创建一个帐户开始。",
    "Login": "登录",
    "New Password": "新密码",
    "Password": "密码",
    "Register": "注册",
    "Rules and Privacy Policy": "规则及私隐政策",
    "Send Reset Email": "发送重置邮件",
    "Welcome to Idle Artisan": "欢迎来到 工匠放置（Idle Artisan）",
    "\"You wanna buy or not? I ain't got all day.\"": "\"你到底买不买？我可没那么多时间。\"",
    "A ship arrives with a full cargo bay and offers to sell a single resource on the market at a discount.": "一艘船满载货舱抵达，并在市场上以折扣价出售一种资源。",
    "Place the highest bid to win! Your gold will be returned if you are outbid.": "出价最高即可获胜！如果出价高于你，你的金币将被退还。",
    "Minimum Bid": "最低出价",
    ", paid by the buyer.": "，由买方支付。",
    "\"The crown demands its due. Best to pay up.\"": "\"王权自有其分。最好还是付钱吧。\"",
    "All purchases from the player market are subject to a": "所有从玩家市场购买的物品都将受到限制",
    "Cancel": "取消",
    "A community building is under attack! All players must work together to defend it. Check the Community tab to see which building is targeted and how you can help.": "社区建筑遭到袭击！所有玩家必须齐心协力守护它。查看社区选项卡，查看目标建筑以及您可以如何提供帮助。",
    "Fight information (goblins, boss, treant, golem)": "战斗信息（哥布林，Boss，树人，魔像）",
    "input resources to produce": "输入资源生产",
    "Ironforge, Sawmill, & Goldforge": "铁熔炉，锯木厂 & 金熔炉",
    "output resources per tick.": "输出资源每刻(Tick)。",
    "Personal Buildings": "个人建筑",
    "The level of the crafting table determines the maximum level of personal buildings and tools you are able to craft. You cannot craft an item or building of a level higher than your Crafting Table's level.": "合成台的等级决定了你能够合成的个人建筑和工具的最高等级。你不能制造高于你的合成台等级的物品或建筑。",
    "The output of these buildings is further increased by the server-wide": "这些建筑的输出在服务器范围内进一步增加",
    "These are buildings you craft for yourself on the \"Main\" tab. Upgrading them increases your personal production capabilities and unlocks higher-level crafting recipes.": "这些是你在\"主界面\"选项卡上为自己制作的建筑。升级它们可以提高你的个人生产能力并解锁更高等级的制作配方。",
    "These buildings refine raw materials into crafting components. Their efficiency scales linearly with their level": "这些建筑将原材料提炼成制作组件。他们的效率与他们的等级成线性关系",
    "building consumes": "建筑消耗",
    "Allows creation of level 1 refining buildings and items.": "可以创建1级精炼建筑和道具。",
    "Buy Max": "购买最大",
    "Costs": "成本",
    "Distant War Drums": "遥远的战鼓",
    "Effect at this Level": "此等级效果",
    "Failure Chance": "失败几率",
    "per tick to any skill.": "每刻(Tick)到任何技能。",
    "Rarity Chances (on success)": "稀有度几率 (成功时)",
    "rarity.": "稀有度.",
    "This item has a": "这个物品有一个",
    "Unique": "独特",
    "When equipped, it will grant": "当装备好后，它会授予",
    "Helm of Learning Level": "学问之盔等级",
    "\"A low, rhythmic thumping that grows louder with every passing moment. \"": "\"一种低沉的、有节奏的砰砰声，随着时间的流逝而变得越来越响。\"",
    "The Town Watch reports the sound of goblin war drums echoing from the hills. They estimate that the goblins are about 30 seconds away.": "城镇守卫报告说，小山间回荡着妖精的战鼓声。他们估计半兽人大约30秒就到。",
    "\"To arms! The green tide is upon us!\"": "\"拿起武器！绿潮正在向我们袭来！\"",
    "Highest Bid": "最高报价",
    "\"Knowledge is the sharpest tool. Every page turned, every lesson learned, strengthens us all.\"": "\"知识是最锋利的工具。翻开的每一页，学到的每一课，都让我们更加强大。\"",
    "(Mining, Woodcutting, Battling, Crafting) - For a short time, 1 extra XP is awarded for the associated activity.": "（采矿，伐木，战斗，制作）-在短时间内，1额外的经验奖励相关活动。",
    "Each level of the Grand Library grants +1 bonus XP per tick to all gathering skills (Mining, Woodcutting, and Battling).": "每升一级大图书馆，所有收集技能（采矿、伐木和战斗）每刻(Tick)增加1点经验值。",
    "Gain +1% Gold per level and +1 Battler XP per tick per level.": "每级+1%金币，每级+1战斗经验.",
    "Gain +1% Iron Ore per level and +1 Mining XP per tick per level.": "每级+1%铁矿石，每级+1采矿经验.",
    "Gain +1% Logs per level and +1 Woodcutting XP per tick per level.": "每级+1%木头，每级+1伐木经验.",
    "The Grand Library Level": "大图书馆等级",
    "Dark Mode": "深色模式",
    "XP": "经验值",
    "On failure, 25% of the resources will be refunded.": "如果失败，将退还25%的资源。",
    "+1% Gold gathered per level and +1 Battler XP per tick per level.": "每级+1%金币采集，每级+1每刻(Tick)的战斗经验。",
    "+1% Logs gathered per level and +1 Woodcutting XP per tick per level.": "每级+1%木头采集，每级+1每刻(Tick)的伐木经验。",
    "+1% Iron Ore gathered per level and +1 Mining XP per tick per level.": "每级+1%铁矿石采集，每级+1每刻(Tick)的采矿经验。",
    "Each level grants +1 bonus XP per tick to all gathering skills (Mining, Woodcutting, and Battling).": "每一等级给予所有收集技能（采矿，伐木和战斗）每刻(Tick) +1额外经验值。",
    "If your Crafting Level is higher than the item's level, your chance of success is high. If you try to craft an item that is a much higher level than your own skill, the chance of failure increases significantly. If a craft fails, 25% of the resources used in the attempt will be refunded to you.": "如果你的制造等级高于物品的等级，那么你的成功几率就会很高。如果你试图制作一个比自己的技能水平高得多的物品，失败的几率就会大大增加。如果制作失败，将会返还25%的制作资源。",
    "A cooperative defense event where all players must protect a community building from being pillaged. All participants receive a temporary gathering buff at the end of the event: a 10% bonus for a victory ('Victorious Morale') or a 5% bonus for a defeat ('Defender's Resolve').": "一个合作防御事件，所有玩家必须保护社区建筑不被掠夺。所有参与者在活动结束时都会获得一个临时的收集buff：胜利获得10%的奖励（\"胜利的士气\"），失败获得5%的奖励（\"防御者的决心\"）。",
    "The Grand Library": "大图书馆",
    "These buildings also grant bonus Crafting XP per tick, equal to their level minus one (e.g., a Level 6 building grants +5 bonus XP per tick).": "这些建筑每刻（Tick）给予玩家额外的锻造经验值，等于其等级减1（例如，6级建筑每刻（Tick）给予玩家+5额外经验值）。",
    "your Pickaxe, Axe, or Sword, permanently increasing its power by adding +0.25 to its base power and +0.10 to its rarity multiplier.": "你的镐子、斧子或剑，通过增加+0.25的基础力量和+0.10的稀有乘数永久提高其力量。",
    "\"Though the defenses were breached, the town's spirit remains unbroken. We will rebuild, stronger than before.\"": "\"虽然防御工事已被攻破，但小镇的精神依然坚不可摧。我们将重建，比以前更强大。\"",
    "Enhanced": "已强化",
    "Defender's Resolve": "防守者的决心",
    "\"The town celebrates its heroes! For a short time, every swing of the axe and strike of the pick feels lighter.\"": "\"这个小镇庆祝它的英雄！\"有那么一小段时间，每挥动一次斧头，每敲击一次镐头，都感觉更轻了。\"",
    "Victorious Morale": "胜利士气",
    "-These new power levels apply to tools created after version 1.07 is released.": "-这些新的功能等级适用于1.07版本发布后创建的工具。",
    "Doubles the speed of refining materials (consuming double the input for double the output) and provides a significant bonus to item quality when crafting tools, making it a prime time to create high-rarity gear.": "精炼材料的速度翻倍（消耗双倍的投入产出双倍的产出），并在制作工具时提供显著的物品质量奖励，使其成为创造高稀有装备的黄金时间。",
    "Gathering Bonus Events": "采集加成事件",
    "(Mining, Woodcutting, Battling) - These events provide a temporary boost to their respective gathering skills, doubling resource gains and granting bonus XP.": "（采矿，伐木，战斗）-这些事件提供了一个暂时的提高他们各自的收集技能，加倍的资源收益和给予额外的经验。",
    "Scholar's Study": "学者书房",
    "(Currently: 1 hour)": "（当前：1小时）",
    "Scholar's Study Level": "学者书房等级",
    "A quiet room for contemplation, filled with scrolls, maps, and ledgers. Each level represents a deeper understanding of logistics and planning, allowing you to manage your affairs for longer while you are away. Each level provides 1 hour offline time, with a max level of 10.": "一个安静的房间，里面摆满了卷轴、地图和账本。每一层代表了对后勤和计划的更深入的理解，允许你在离开时管理你的事务更长的时间。每一级提供1小时的离线时间，最高等级为10级。",
    //公会相关
    "Conclave Icon Unlocks": "公会图标解锁",
    "Points": "分数",
    "Select an icon to display next to your Conclave's name. Icons are unlocked based on total donation points.": "选择一个图标显示在您的公会名称旁。图标根据总捐赠点数解锁。",
    "Your Pending Applications": "你的待处理申请",
    "Apply to Join": "申请加入",
    "Apply to join an existing Conclave.": "申请加入一个现有的公会。",
    "Available Conclaves": "可用的公会",
    "Conclave Name": "公会名称",
    "Establish a new Conclave and become its founder. This will allow you to invite other players to join you.": "建立一个新的公会，并成为它的创始人。这将允许你邀请其他玩家加入你。",
    "Found a Conclave": "寻找一个公会",
    "Found Conclave": "创建公会",
    "Join a Conclave": "加入一个公会",
    "Conclave": "公会",
    "Cost to Found": "创建成本",
    "Cost (this enhance)": "成本 (本次强化)",
    "Costs increase by 10x after each enhancement.": "每次强化后成本增加10倍。",
    "Current Enhancements": "当前强化",
    "Each enhancement adds +0.25 to base power and +0.10 to rarity multiplier.": "每次强化增加 +0.25 基础力量，稀有度乘数 +0.10。",
    "Contribute resources to upgrade the Artisan's Conclave and increase the member limit.": "贡献资源升级公会，提升成员上限。",
    "No pending applications.": "暂无待处理申请。",
    "Artisan's Conclave": "工匠公会",
    "Fletcher's Cooperative": "制箭师合作社",
    "Applications": "同意",
    "Leave Conclave": "离开公会",
    "Last Online": "最近在线",
    "Members": "成员",
    "Name": "名称",
    "Reject": "拒绝",
    "max": "最大",
    "Kick": "踢出",
    "Accept": "同意",
    "Buildings": "建筑",
    "Just now": "刚刚",
    "Founder": "创始人",
    "\"A gathering of masters, a union of ambition. Here, legacies are forged not in iron, but in fellowship.\"": "\"大师之聚，志气之合。在这里，传承不是靠铁，而是靠友情。\"",
    "Each level increases the maximum number of members who can join the Conclave.": "每升一级，就会提升公会的成员上限。",
    "Current Member Cap": "当前成员上限",
    "Next Level Cap": "下一级成员上限",
    "Amber Mill": "琥珀磨坊",
    "A single-use item that permanently upgrades an equipped tool by one rarity level (e.g., from Rare to Epic). A Level X stone can be used on a tool of Level X or lower. Each tool can only be sharpened once. Sharpened tools are marked with an `[S]`.": "一种一次性使用的道具，可以将装备的工具永久升级一个稀有等级（例如，从Rare升级到Epic）。X级宝石可用于X级或更低等级的工具。每件工具只能磨一次。磨过的工具上标有\"S\"。",
    "Anima Collector": "生命收集器",
    "Seismic Quarry": "地震采石场",
    "Glimmerwood Sap": "微光树液",
    "Glimmerwood Sap,": "微光树液，",
    "Starfall Ore": "星落矿石",
    "Starfall Ore,": "星落矿石，",
    "Status": "状态",
    "Stone Level": "石头等级",
    "Sharpen": "打磨",
    "Sharpen Axe": "打磨斧子",
    "Sharpen Pickaxe": "打磨镐子",
    "Sharpen Sword": "打磨剑",
    "Sharpening Stone": "磨刀石",
    "while Mining.": "当采矿时。",
    "while Woodcutting.": "当伐木时。",
    "while Battling.": "当战斗时。",
    "Exchange": "转换",
    "can find": "可发现",
    ". Work together with your fellow artisans to upgrade shared buildings that provide unique benefits to all members.": "。与你的工匠同伴一起升级共享的建筑，为所有成员提供独特的利益。",
    "\"Edge honed, spirit tuned.\"": "\"棱角磨砺，精神调剂。\"",
    "\"The earth holds secrets older than any kingdom. We need only listen.\"": "\"地球蕴藏着比任何王国都古老的秘密。我们只需要倾听。\"",
    "\"The echo of a fierce battle never truly fades. It can be captured, if one has the will.\"": "\"激烈战斗的回声永远不会真正消失。如果一个人有意志，它可以被捕获。\"",
    "\"Time itself is trapped within the wood. We merely set it free.\"": "\"时间本身被困在木头里。我们只是让它自由了。\"",
    "10 * Level of each: Starfall Ore, Glimmerwood Sap, Crystallized Anima.": "10 *各等级：星落矿石、微光树液、生命结晶",
    "A Level N stone can sharpen tools of level N or lower.": "N级石头可以打磨N级及以下的工具",
    "chance per tick to find": "几率每刻（Tick）找到",
    "Conclaves & The Exchange": "公会 & 转换",
    "Crystallized Anima": "生命结晶",
    "Eligible Tool Levels": "合格工具等级",
    "items cannot be sharpened. Each tool can be sharpened only once.": "物品不能打磨。每件工具只能打磨一次。",
    "Players can now band together by founding or joining a": "玩家现在可以通过建立或加入一个",
    "Rare Finds": "稀有发现",
    "Requires a Sharpening Stone with level >= 9.": "需要一个磨刀石，等级 >= 9。",
    "Seismic Quarry, Amber Mill, & Anima Collector": "地震采石场，琥珀磨坊，和生命收集器",
    "tab to purchase powerful items.": "选项卡购买强大的道具。",
    "The heart of your Conclave. Each level increases the maximum number of members who can join by 2.": "你们秘密会议的核心。每个等级增加2个可以加入的成员的最大数量。",
    "These new rare resources can be traded on the player market or used at the new": "这些新的稀有资源可以在玩家市场上交易，也可以在新平台上使用",
    "These specialized buildings grant all members a chance to find new rare resources while gathering. Each level increases the chance of a discovery by 0.01%.": "这些特殊的建筑使所有成员都有机会在收集时找到新的稀有资源。每升一级，发现的机会增加0.01%。",
    "Upgrades an equipped Pickaxe, Axe, or Sword by one rarity level.": "可使装备的镐子、斧、剑的稀有度提升1级",
    "Upgrades this tool's rarity by one step. Epic items cannot be sharpened. Can only be done once per tool.": "可将该工具的稀有度提升一级史诗物品不能磨。每个工具只能操作一次",
    "You do not have a Sharpening Stone of sufficient level.": "您没有足够等级的磨刀石",
    "Levels": "等级",
    "Grants a": "授予",
    "Profiles": "个人资料",
    "User Profiles": "用户个人资料",
    "Select an account to view their public profile.": "选择一个玩家以查看其个人资料。",
    "Display Profile": "显示个人资料",
    "Total Ticks": "总时刻(Tick)",
    "Loading profile...": "加载个人资料...",
    "Loading users...": "加载用户...",
    "(Obtained by sharpening an Epic tool)": "(通过打磨史诗工具获得)",
    "A single-use item that permanently upgrades an equipped tool by one rarity level, up to the ultimate Legendary tier (e.g., Epic -> Legendary). A Level X stone can be used on a tool of Level X or lower. Each tool can only be sharpened once. Sharpened tools are marked with an `[S]`.": "一种一次性使用的道具，可以将装备的工具永久升级一个稀有等级，直到最终的传说级别（例如 史诗 -> 传说）。X级宝石可用于X级或更低级别的工具。每件工具只能磨一次。磨过的工具上标有\"S\"。",
    "You have no active buy orders.": "你没有活跃的购买订单。",
    "Your Active Buy Orders": "你的活跃购买订单",
    "Your Active Sell Orders": "你的活跃出售订单",
    "\"The forges roar day and night! The Great Smeltdown is upon us. Contribute to the central pyre to maintain the intense heat needed for purification. The process is unstable, but a perfect crystal may form in the crucible.\"": "\"熔炉日夜咆哮！\"大熔炉就要来了。为中央火堆出力，以保持净化所需的高温。这个过程是不稳定的，但在坩埚中可以形成完美的晶体。\"",
    "\"The forge burns hotter, the anvil rings truer. Now is the time to create a masterpiece.\"": "\"锻炉烧得更热，铁砧响得更准。\"现在是创作杰作的时候了。\"",
    "The Great Smeltdown": "大熔炉",
    "Contribute a large sum of the requested raw material to the central pyre. The intense heat has a chance to purify it into a rare essence, but the process is unstable and may yield nothing.": "向中央火堆贡献大量所需的原材料。高温有机会将它净化成一种稀有的精华，但这个过程不稳定，可能什么也得不到。",
    "Doubles refining speed, consuming double the input materials for double the output. Also adds a +10 bonus to your Quality Score when crafting tools.": "双倍的精炼速度，消耗双倍的原料产出双倍的产品。在制作工具时也增加了+10的质量分数。",
    "Public Buy Orders": "公开购买订单",
    "Public Sell Orders": "公开出售订单",
    "Buy Orders": "购买订单",
    "Buyer": "买家",
    "Fill Max": "填满",
    "Max Price": "最高价",
    "Max Price (Gold)": "最高价 (金币)",
    "Total Reserved": "总计预留",
    "Post Buy Order": "发布购买订单",
    "A Level X stone can sharpen tools of level X or lower.": "X级的石头可以磨X级或X级以下的工具。",
    "Upgrades an equipped Pickaxe, Axe, or Sword by one rarity level, up to Legendary.": "升级一件装备的镐子、斧头或剑，使其稀有度提升一级，最高可提升至传说级别。",
    "Upgrades this tool's rarity by one step, up to Legendary. Can only be done once per tool.": "将该工具的稀有度提升一级，最高可提升至传说。每个工具只能完成一次。",
    "Each tool can be sharpened only once.": "每件工具只能打磨一次。",

    // 基础文本
    '- Battler': '- 战斗者',
    ', or': '，或',
    ', paid by the buyer. Listings will automatically expire after 2 days, returning the items or gold to the original poster. Keep an eye out for the "Tax-Free Weekend" event, during which the market tax is temporarily removed!': '，由买方支付。挂单将在2天后自动过期，物品或金币将返还给原始发布者。留意"免税周末"活动，在此期间市场税暂时取消！',
    '??????': '??????',
    '. Higher quality food provides a longer-lasting buff.': '。更高质量的食物提供更持久的增益效果。',
    '. Higher skill and a better Kitchen reduce the chance of burning food and increase the chance of a high-quality result.': '。更高的技能和更好的厨房减少烤焦食物的几率，增加高质量结果的几率。',
    '. Required to craft high-level Fishing Rods.': '。制作高级鱼竿所需。',
    '. This allows you to request a specific tool or food item from other crafters at a price you set. Your gold is reserved until another player fills your order, or until the order is canceled or expires.': '。这允许您以设定的价格向其他工匠请求特定工具或食物。您的金币将被保留，直到其他玩家完成您的订单，或订单被取消或过期。',
    '. Work together with your fellow artisans to upgrade shared buildings that provide unique benefits to all members. The founder can set a': '。与您的工匠同伴一起升级共享建筑，为所有成员提供独特利益。创始人可以设置',
    '(0-10%) to automatically collect a portion of members\' gathered raw materials (from Mining, Woodcutting, and Battling). These materials are converted to refined resources and contributed to the Conclave\'s most-voted project(s) after every': '(0-10%) 自动收集成员采集的原材料的一部分（来自采矿、伐木和战斗）。这些材料被转化为精炼资源，并在每次',
    '(1 minute).': '(1分钟)后贡献给公会最受欢迎的项目。',
    '(Boss Fight, Ancient Treant, Runic Golem, The Leviathan) - All players can join to deal damage to a powerful world boss and earn a share of special resources.': '（Boss战、远古树人、符文魔像、利维坦）- 所有玩家都可以加入对强大的世界Boss造成伤害，并获得特殊资源的份额。',
    '(Catch Chance: 36.2%)': '（捕获几率：36.2%）',
    '(Purchasing Agent, Tax-Free Weekend, Trade Ship) - These events temporarily change the rules of the market, creating new opportunities for savvy traders.': '（采购代理、免税周末、贸易船）- 这些事件暂时改变市场规则，为精明的交易者创造新机会。',
    '(Votes: 0)': '（投票：0）',
    '(Votes: 1)': '（投票：1）',
    '(Votes: 3)': '（投票：3）',
    '(Votes: 4)': '（投票：4）',
    '[Burnt]': '[烤焦]',
    '[Burnt] Fish Stew': '[烤焦] 鱼汤',
    '[Exquisite]': '[精美]',
    '[Exquisite] Fish Stew': '[精美] 鱼汤',
    '[Exquisite] Grilled Fish': '[精美] 烤鱼',
    '[Normal] Fish Stew': '[普通] 鱼汤',
    '[Normal] Grilled Fish': '[普通] 烤鱼',
    '+0.5% per level': '每级+0.5%',
    '+1% chance to catch fish per level and +1% chance to find Abyssal Eels per level, and +1 Fishing XP per tick per level.': '每级+1%钓鱼几率，每级+1%发现深渊鳗鱼几率，每级每tick+1钓鱼经验值。',
    '+10% Catch Chance': '+10% 捕获几率',
    '+25% Gathering Yield': '+25% 采集产量',
    '0.5 hour': '0.5小时',
    '1 hour': '1小时',
    '1.5 hours': '1.5小时',
    '1.5x multiplier': '1.5倍乘数',
    '2 hours': '2小时',
    '2.5 hours': '2.5小时',
    '3 hours': '3小时',
    '3.5 hours': '3.5小时',
    '30 gathering actions': '30次采集行动',
    '4 hours': '4小时',
    '4.5 hours': '4.5小时',
    '5 hours': '5小时',
    '5.5 hours': '5.5小时',
    '6 hours': '6小时',
    '6.5 hours': '6.5小时',
    '7 hours': '7小时',
    '7.5 hours': '7.5小时',
    '8 hours': '8小时',
    'A discreet accounting firm that generates a "surplus" of resources equal to': '一家谨慎的会计公司，产生等于',
    'A new challenge awaits! The Harbormaster has authorized expeditions into newly discovered dungeons. Form a party with up to five other artisans and delve into 25 rooms of escalating danger. Work together to defeat the monsters within and face the formidable Goblin King at the end!': '新的挑战等待着！港务长已授权对新发现的地下城进行探险。与最多五名其他工匠组队，深入25个日益危险的房间。共同努力击败其中的怪物，并在最后面对强大的哥布林王！',
    'A new personal building that allows you to hire a sellsword. Each level allows you to hire them for one additional hour, up to a maximum of 8 hours. When a contract is active, the mercenary will automatically join combat events (Boss, Treant, Golem, Leviathan) on your behalf. Be warned: this sellsword is lazy and will only fight while you are actively overseeing your workshop. As payment, they take a steep 80% cut of all event rewards earned.': '一个新的个人建筑，允许您雇佣佣兵。每级允许您多雇佣他们1小时，最多8小时。当合同激活时，佣兵将自动代表您加入战斗事件（Boss、树人、魔像、利维坦）。警告：这个佣兵很懒，只会在您亲自监督工作室时战斗。作为报酬，他们会抽取所有获得的事件奖励的80%。',
    'A new, persistent threat has emerged! The': '一个新的持续威胁出现了！',
    'A personal workspace for preparing food. The level of your Kitchen, along with your Cooking skill, directly impacts the quality of the food you create. A higher-level Kitchen also allows you to refine Raw Fish into Prepared Fish more efficiently.': '一个用于准备食物的个人工作空间。您的厨房等级以及烹饪技能直接影响您制作食物的质量。更高级的厨房还允许您更有效地将生鱼加工成熟鱼。',
    'A rare essence found while Fishing, empowered by your Conclave\'s': '钓鱼时发现的稀有精华，由您的',
    'Absence': '缺席',
    'Abyssal Eel': '深渊鳗鱼',
    'Active Parties': '活跃队伍',
    'An order can be filled using an item that meets or': '订单可以使用满足或',
    'and your': '和您的',
    'Anvil': '铁砧',
    'Artisan\'s Marks': '工匠印记',
    'Artisan\'s Palette': '工匠调色板',
    'Auto-Dungeon Role': '自动地下城角色',
    'Battle Log': '战斗日志',
    'Be warned: the tunnels are unstable. Your party has only 30 seconds to defeat the monster in each room before you become exhausted and must regroup. As a reward for beta testing this new feature, you can earn permanent cosmetic username colors by completing dungeons. Check the Dungeons tab to see the rewards!': '警告：隧道不稳定。您的队伍只有30秒时间击败每个房间的怪物，否则会变得疲惫并必须重新组队。作为测试此新功能的奖励，您可以通过完成地下城获得永久的装饰性用户名颜色。查看地下城标签页了解奖励！',
    'buff for Fishing.': '钓鱼增益。',
    'buff to Mining, Woodcutting, and Battling, and a separate': '采矿、伐木和战斗增益，以及单独的',
    'buff, increasing your damage dealt in all cooperative combat events (Boss, Treant, Golem, Leviathan).': '增益，增加您在所有合作战斗事件（Boss、树人、魔像、利维坦）中造成的伤害。',
    'Buffs': '增益效果',
    'Build Defenses (0)': '建造防御（0）',
    'Burnt': '烤焦',
    'Catch Raw Fish and other rare aquatic life.': '捕获生鱼和其他稀有水生生物。',
    'Choose a Username': '选择用户名',
    'Choose your role': '选择您的角色',
    'Conclave Chat': '公会聊天',
    'Configuration': '配置',
    'Cooking': '烹饪',
    'Cooking (Level': '烹饪（等级',
    'Cooking & Food Buffs': '烹饪与食物增益',
    'Cooking allows you to turn fish and other ingredients into powerful consumables that grant temporary buffs. The quality of the food you cook is determined by your': '烹饪允许您将鱼和其他原料转化为强大的消耗品，提供临时增益。您烹饪的食物质量由您的',
    'Cooking Skill Level': '烹饪技能等级',
    'Coral Sanctuary': '珊瑚保护区',
    'Crafting Orders': '制作订单',
    'Create a Permanent Account': '创建永久账户',
    'Doubles your chance to catch fish and grants bonus Fishing XP.': '双倍钓鱼几率并奖励额外钓鱼经验值。',
    'Dungeon': '地下城',
    'Dungeon Level': '地下城等级',
    'Dungeon Run in Progress...': '地下城运行中...',
    'Dungeons': '地下城',
    'Dungeons (Beta)': '地下城（测试版）',
    'Dungeons Completed': '已完成的地下城',
    'Duration': '持续时间',
    'E0 (None)': 'E0（无）',
    'E1': 'E1',
    'E10': 'E10',
    'E2': 'E2',
    'E3': 'E3',
    'E4': 'E4',
    'E5': 'E5',
    'E6': 'E6',
    'E7': 'E7',
    'E8': 'E8',
    'E9': 'E9',
    'Earned from': '获得自',
    'Eat': '食用',
    "Combat Damage": "战斗伤害",
    'Eel Broth': '鳗鱼汤',
    'Enhancement Level': '强化等级',
    'event. Used at the Exchange to learn new, powerful cooking recipes.': '事件。在交易所用于学习新的强大烹饪配方。',
    'Every cooking attempt results in one of four qualities': '每次烹饪尝试会产生四种品质之一',
    'exceeds': '超过',
    'Exquisite': '精美',
    'Feature coming soon...': '功能即将推出...',
    'Fight information (goblins, boss, treant, golem, leviathan)': '战斗信息（哥布林、Boss、树人、魔像、利维坦）',
    'Fill': '填单',
    'Filter by Item': '按物品筛选',
    'Fine': '优良',
    'Fish Stew': '鱼汤',
    'Fisherman\'s Wharf': '渔人码头',
    'Fishing': '钓鱼',
    'Fishing Frenzy': '钓鱼狂潮',
    'Fishing Level': '钓鱼等级',
    'Food': '食物',
    'Food Buff Active (+25%)': '食物增益激活（+25%）',
    'Food Quality': '食物质量',
    'Form a party with other artisans and delve into dangerous dungeons for unique rewards! Changing activities while in a dungeon will remove you from the party.': '与其他工匠组队，深入危险的地下城获取独特奖励！在地下城中切换活动将使您离开队伍。',
    'From the desk of the Founder': '来自创始人的办公桌',
    'Gathering Yield': '采集产量',
    'Goblin Attack': '哥布林攻击',
    'Goblin Defense': '哥布林防御',
    'Gold Bars: 25.00': '金锭：25.00',
    'Gold Gain': '金币获得',
    'Gold per tick': '每tick金币',
    'Grilled Fish': '烤鱼',
    'Highest Dungeon Completed': '完成的最高地下城',
    'Hire for Boss Events': 'Boss事件雇佣',
    'Hire for Dungeons': '地下城雇佣',
    'In addition to buying and selling on the open market, you can now post': '除了在公开市场买卖外，您现在可以发布',
    'Iron Ore per tick': '每tick铁矿石',
    'is an always-on event where the town\'s defenses are constantly under pressure. A global \'Town Defenses\' timer is visible at the top of the screen, slowly ticking down. All artisans can help by choosing to \'Build Defenses\', which adds time back to the timer. If the timer ever reaches zero, the goblin horde will raid the community building with the most contributed resources and steal 20% of its stores! Work together to keep the town safe.': '是一个持续事件，城镇防御持续受到压力。屏幕顶部显示全局"城镇防御"计时器，缓慢倒计时。所有工匠都可以通过选择"建造防御"来帮助，这会为计时器增加时间。如果计时器归零，哥布林部落将袭击贡献资源最多的社区建筑并偷走其20%的库存！共同努力保护城镇安全。',
    'Join as Battler': '以战斗者身份加入',
    'Join as Miner': '以矿工身份加入',
    'Join as Woodcutter': '以伐木工身份加入',
    "Join as Hunter": "以猎人身份加入",
    "Join as Fisher": "以渔夫身份加入",
    'Join Dungeon Party': '加入地下城队伍',
    'Join Selected Party': '加入选定队伍',
    "Join Party (Defaults)": "加入队伍（默认）",
    "Join Party (Custom)": "加入队伍（自定义）",
    'Kitchen': '厨房',
    'Kitchen Level': '厨房等级',
    'Learn': '学习',
    'Learn Cooking Recipes': '学习烹饪配方',
    'Leave Party': '离开队伍',
    'Level 1 [S]': '等级 1 [S]',
    'Leviathan Scale': '利维坦鳞片',
    'Leviathan Scales': '利维坦鳞片',
    'Loading party details...': '加载队伍详情...',
    'Logs per tick': '每tick木头',
    'Many features in the game have tooltips. Hover your mouse over an item or label to get more information about it.': '游戏中的许多功能都有工具提示。将鼠标悬停在物品或标签上以获取更多信息。',
    'Mercenary': '雇佣兵',
    'Mercenary Post': '雇佣兵哨站',
    'Mercenary Post Level': '雇佣兵哨站等级',
    'Min Level': '最低等级',
    'Min Quality': '最低质量',
    'Min Rarity': '最低品质',
    'Miner': '矿工',
    'No matching items': '无匹配物品',
    'Note': '注意',
    'Oceanic Essence': '海洋精华',
    'on all gathered Iron Ore, Logs, Gold, and Rune Shards. This surplus is automatically contributed to the most-voted community project(s) every 10 minutes.': '在所有采集的铁矿石、木头、金币和符文碎片上。这个盈余每10分钟自动贡献给最受欢迎的社区项目。',
    'Options tab': '选项标签页',
    'Orders': '订单',
    'Party Details': '队伍详情',
    'Party ID': '队伍ID',
    'Post a Crafting Order': '发布制作订单',
    'Post Food Order': '发布食物订单',
    'Post Tool Order': '发布工具订单',
    'Prepare Fish': '烹制鱼',
    'Prepare food that provides powerful, temporary buffs.': '准备提供强大临时增益效果的食物。',
    'Prepared Fish': '加工鱼',
    'Provides a': '提供',
    'Public Crafting Orders': '公共制作订单',
    'Raw Fish': '生鱼',
    'Recipe Exchange': '配方交换',
    'Recruitment Message': '招募信息',
    'Register Account': '注册账户',
    'Relic': '遗物',
    'Request a specific item from other crafters. Your gold will be reserved until the order is filled, canceled, or expires.': '向其他工匠请求特定物品。您的金币将被保留，直到订单完成、取消或过期。',
    'Request a Tool': '请求工具',
    'Request Food': '请求食物',
    'Results': '结果',
    'Save Message': '保存信息',
    'Secure your progress by creating a full account. Your items, levels, and resources will be saved.': '通过创建完整账户来保护您的进度。您的物品、等级和资源将被保存。',
    'Select': '选择',
    'Selected': '已选择',
    'Send': '发送',
    'Set a Password': '设置密码',
    'Set Rate': '设置税率',
    'Sigil': '印记',
    'Sigils': '印记',
    'Simulated Item': '模拟物品',
    'Start a New Dungeon Party': '开始新的地下城队伍',
    'Start as Battler': '以战斗者开始',
    'Start as Miner': '以矿工开始',
    'Start as Woodcutter': '以伐木工开始',
    'Start New Party': '创建新队伍',
    'Success in the dungeons requires teamwork and a balanced party. Each artisan chooses a role': '在地下城中成功需要团队合作和平衡的队伍。每个工匠选择一个角色',
    'Test your designs on the anvil before you commit precious resources. A wise artisan measures twice and strikes once.': '在投入宝贵资源之前，先在铁砧上测试您的设计。明智的工匠测量两次，敲击一次。',
    'The Anvil': '铁砧',
    'The Counting House': '会计所',
    'The harbormaster recommends a price of': '港务长推荐价格为',
    'The Harbormaster says: "I\'ve seen strange things come from those new dungeons... echoes of battles that don\'t add up. We\'ll be keeping a close watch on them. For now, any artisan brave enough to delve into these unproven depths will earn a mark on their name—a permanent splash of color to prove you were here from the start. More substantial rewards will be available once my ledgers are balanced and I\'m certain there\'s no funny business."': '港务长说："我见过那些新地下城中出现的奇怪事物...不合常理的战斗回响。我们会密切关注它们。目前，任何勇敢探索这些未经证实的深处的工匠都将在他们的名字上获得标记——永久的颜色飞溅，证明您从一开始就在这里。一旦我的账目平衡并且我确定没有可疑行为，将提供更实质性的奖励。"',
    'The Leviathan from the Depths': '深渊中的利维坦',
    'The Marketplace': '市场',
    'The party\'s healer, using their Pickaxe and Mining level to restore the party\'s shared health pool.': '队伍的治疗者，使用镐子和采矿等级恢复队伍的共享生命池。',
    'The party\'s tank, using their Axe and Woodcutting level to reflect "thorns" damage back at any monster that attacks the party.': '队伍的坦克，使用斧头和伐木等级将"荆棘"伤害反弹给任何攻击队伍的怪物。',
    'The player-driven marketplace is the hub of commerce. All purchases made from other players are subject to a': '玩家驱动的市场是商业中心。所有从其他玩家处购买的物品都要缴纳',
    'the requested level and quality/rarity. Sellers will receive the price offered by the buyer, even if a superior item is used to fill the order.': '请求的等级和质量/品质。卖家将收到买家提供的价格，即使使用更优质的物品来完成订单。',
    'There are several types of food buffs. You can have one of each type active at the same time, and eating more of the same food will stack the duration up to a maximum of 8 hours.': '有几种类型的食物增益。您可以同时激活每种类型的一个增益，食用更多相同食物将叠加持续时间，最多8小时。',
    'This message is only visible to Conclave members.': '此消息仅对公会成员可见。',
    'This message will be shown to players who are not in a Conclave.': '此消息将显示给不在公会中的玩家。',
    'Time left': '剩余时间',
    'Time Left': '剩余时间',
    'Tithe Rate': '缴纳税率',
    'Title Color': '标题颜色',
    'to create a permanent account and secure your progress!': '创建永久账户并保护您的进度！',
    'to your chance of finding rare resources.': '到您发现稀有资源的几率。',
    'Tool': '工具',
    'Tool Level': '工具等级',
    "No public crafting orders found.": "未找到公共制作订单。",

    // 工具基础名称
    "Sigil of Barbs": "荆棘印记",
    "Sigil of Ferocity": "凶猛印记",
    "Sigil Of Ferocity": "凶猛印记", // 处理大小写变体
    "Sigil of Mending": "修复印记",
    "Sigil of Resilience": "坚韧印记",
    // 在 cnItems 中添加所有印记相关的翻译
    "Sigil": "印记",
    "Sigil of Barbs": "荆棘印记",
    "Sigil of Ferocity": "凶猛印记",
    "Sigil of Mending": "修复印记",
    "Sigil of Resilience": "坚韧印记",

    // 印记等级格式
    "[Unique] Sigil of Barbs (Level 1)": "[独特] 荆棘印记 (等级 1)",
    "[Unique] Sigil of Ferocity (Level 1)": "[独特] 凶猛印记 (等级 1)",
    "[Unique] Sigil of Mending (Level 1)": "[独特] 修复印记 (等级 1)",
    "[Unique] Sigil of Resilience (Level 1)": "[独特] 坚韧印记 (等级 1)",

    // 资源名称
    "Crystallized Anima": "生命结晶",
    "Starfall Ore": "星落矿石",
    "Glimmerwood Sap": "微光树液",
    "Oceanic Essence": "海洋精华",
    "Abyssal Eel": "深渊鳗鱼",

    // 活动名称
    "mining": "采矿",
    "woodcutting": "伐木",
    "battling": "战斗",
    "fishing": "钓鱼",

    // 符文类型
    "Prospector": "勘探者",
    "Scavenging": "拾荒",
    "the Duelist": "决斗者",
    "the Laborer": "劳动者",
    "the Philanthropist": "慈善家",
    "Frugality": "节俭",
    "Gluttony": "饕餮",
    "(Due to Glyph of the Duelist)": "（由于决斗者符文）",
    "Member of Idle Squatches": "Idle Squatches 成员",

    // 确保符文名称存在
    "Glyph of the Duelist": "决斗者符文",

    // 树游戏
    " (1x).": " (1次)。",
    "Resources": "资源",
    "Items": "物品",
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
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z',
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

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "gamemaster@idleartisan.com": "gamemaster@idleartisan.com",
    "Gityx": "Gityx",
    "+": "+",
    ".": ".",
    "…": "…",
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
    "Mlarnak": "Mlarnak",
    "TowJoinery": "TowJoinery",
    "Zenphos": "Zenphos",

    // 哥布林围攻相关
    "\"Don't let the fires of our forges be extinguished by the green tide!\"": "\"不要让我们的熔炉之火被绿潮熄灭！\"",
    "Build Defenses": "建造防御",
    "Every moment you spend on the walls adds": "您在城墙上度过的每一刻都为",
    "If We Fail": "如果我们失败",
    "Lend Your Aid": "伸出援手",
    "Rally Together": "团结一致",
    "The goblin war drums beat endlessly. Their horde pushes against our walls, and our defenses are weakening. Without your help, the town will be overrun!": "哥布林的战鼓无休止地敲响。他们的部落冲击着我们的城墙，我们的防御正在减弱。没有您的帮助，城镇将被攻破！",
    "The goblins will breach the walls and pillage the most-funded community project, stealing 20% of its resources.": "哥布林将突破城墙并掠夺资金最多的社区项目，偷走其20%的资源。",
    "The more artisans who answer the call, the faster our defenses are rebuilt!": "响应号召的工匠越多，我们的防御重建得越快！",

    //烹饪相关
    "Active Buffs": "激活增益",
    "Grilled Fish Bonus": "烤鱼加成",

    // 地下城相关
    "Be warned: the tunnels are unstable. Your party has only 30 seconds to defeat the monster in each room before you become exhausted and must regroup. As a reward for your bravery, you can earn permanent cosmetic username colors by completing dungeons. Check the Dungeons tab to see the rewards!": "警告：隧道不稳定。您的队伍只有30秒时间击败每个房间的怪物，否则会变得疲惫并必须重新组队。作为您勇敢的奖励，您可以通过完成地下城获得永久的装饰性用户名颜色。查看地下城标签页了解奖励！",
    "No active parties found.": "未找到活跃队伍。",
    "Select a party to view details.": "选择一个队伍以查看详情。",
    "The primary damage dealer, using their Sword and Battler level to strike down foes.": "主要伤害输出者，使用剑和战斗等级击倒敌人。",
    "From the blackest depths, it rises. Its scales hold the secrets of the abyss.": "从最黑暗的深渊中，它升起。它的鳞片承载着深渊的秘密。",
    "Source": "来源",
    "!": "!",
    "- Miner": "- 矿工",
    "(i)": "(i)",
    "[Community]": "[社区]",
    "Invalid auto-dungeon level preference received.": "收到了无效的自动地下城等级偏好设置。",

    //颜色相关
    "Forest Green": "森林绿",
    "Royal Blue": "皇家蓝",
    "Deep Amethyst": "深紫水晶",
    "Artisan's Copper": "工匠铜色",
    "Crimson Red": "绯红色",
    "Steel Blue": "钢蓝色",
    "Verdant Emerald": "翠绿翡翠",
    "Goldenrod": "金黄色",
    "Vibrant Magenta": "洋红色",
    "Deep Teal": "深蓝绿色",
    "Fiery Orange": "炽热橙",
    "Sky Blue": "天蓝色",
    "aqua": "水色",
    "Rose Gold": "玫瑰金",
    "Chartreuse": "查特酒绿",
    "Indigo": "靛蓝色",
    "Hot Pink": "亮粉色",
    "Olive Drab": "橄榄褐色",
    "Electric Violet": "电光紫",
    "Leyline Underline": "地脉下划线",
    "Rainbow": "彩虹",
    "Shadow-forged": "暗影锻造",

    // 符文相关
    "Glyph": "符文",
    "Glyph of Scavenging": "拾荒符文",
    "Glyph of the Duelist": "决斗者符文",
    "Glyph of the Laborer": "劳动者符文",
    "Glyph of the Philanthropist": "慈善家符文",
    "Glyph of the Prospector": "勘探者符文",
    "Glyph Of Frugality": "节俭符文",
    "Glyph of Gluttony": "饕餮符文",
    "Laborer": "劳动者",
    "Philanthropist": "慈善家",
    "Prospector": "勘探者",
    "Scavenging": "拾荒",
    "Select a tool to socket": "选择要插入的工具",
    "Socket Glyph": "插入符文",
    "Purchase powerful Glyphs to socket into your tools, providing unique bonuses and trade-offs. A Level X Glyph can be socketed into a tool of Level X or lower. Each tool can only have one Glyph at a time.": "购买强大的符文插入您的工具，提供独特的奖励和权衡。X级符文可以插入X级或更低等级的工具。每个工具一次只能有一个符文。",
    "The Guild Runemaster says: \"These glyphs draw upon volatile, untested magic. Their power is undeniable, but their balance is... fluid. To ensure fairness across the trades, the Council has authorized me to 're-attune' their magical properties as needed. Consider their current percentages a preliminary finding, not a final decree.\"": "公会符文大师说：\"这些符文利用了不稳定、未经测试的魔法。它们的力量不可否认，但它们的平衡是...流动的。为了确保各行业的公平，公会授权我根据需要'重新调整'它们的魔法属性。将当前的百分比视为初步发现，而不是最终法令。\"",

    // 其他界面文本
    "% per tick": "% 每tick",
    "+25% Damage": "+25% 伤害",
    "/ 5": "/ 5",
    "23 days ago": "23 天前",
    "4 seconds": "4 秒",
    "479:58 (100%)": "479:58 (100%)",
    "479:59 (100%)": "479:59 (100%)",
    "480:00 (100%)": "480:00 (100%)",
    "Artisan's Mark Exchange (Beta)": "工匠印记交易所（测试版）",
    "Catch Chance": "捕获几率",
    "into": "为",
    "leaderboard category!": "排行榜类别！",
    "Normal": "普通",
    "Scrap 1": "回收 1",
    "Tax-Free Weekend": "免税周末",
    "1 months ago": "1个月前",

    //信息文本
    "+1% refining output (Iron Bars, Planks, Gold Bars, Prepared Fish) per level; inputs unchanged.": "每级增加1%精炼产量（铁锭、木板、金锭、加工鱼）；投入不变。",

    // 食物品质
    "[Burnt] Eel Broth": "[烤焦] 鳗鱼汤",
    "[Fine] Eel Broth": "[优良] 鳗鱼汤",
    "[Normal] Eel Broth": "[普通] 鳗鱼汤",
    "[Poor]": "[劣质]",
    "[Fine]": "[优良]",
    "[Normal]": "[普通]",
    "[Uncommon]": "[罕见]",
    "[Rare]": "[稀有]",
    "Epic": "史诗",
    "[Epic]": "[史诗]",
    "Legendary": "传说",
    "[Legendary]": "[传说]",
    "Rare": "稀有",
    // 武器后缀

    // 游戏说明文本 - 新增翻译
    "Your journey is defined by eight core skills. You gain experience (XP) by performing related activities, which you can select on the \"Main\" tab.": "您的旅程由八项核心技能定义。您可以通过执行相关活动来获得经验值（XP），您可以在\"主界面\"选项卡上选择。",


    // 百分比和限制
    "(capped at 95%)": "（上限为95%）",
    "(Catch Chance: 72.4%)": "（捕获几率：72.4%）",
    "+0.160%": "+0.160%",
    "+1.5%": "+1.5%",
    "+1.7%": "+1.7%",
    "+8.0%": "+8.0%",
    "Total: 0.273%": "总计：0.273%",
    "Total: 72.4%": "总计：72.4%",

    // 钓鱼相关
    "Abyssal Eel Chance": "深渊鳗鱼几率",
    "Base Chance": "基础几率",
    "Fishing Catch Chance": "钓鱼捕获几率",
    "Fishing Frenzy!": "钓鱼狂潮！",
    "Rod Power Bonus": "鱼竿力量奖励",
    "while Fishing.": "当钓鱼时。",


    // 界面文本
    "Loading chat...": "加载聊天中...",
    "Tool Rarity": "工具品质",
    "Tool Type": "工具类型",
    "TRIGGERED": "TRIGGERED",
    "Vote": "投票",
    "Voted": "已投票",
    "Waiting for combat to begin...": "等待战斗开始...",
    "Welcome to Idle Artisan!": "欢迎来到工匠放置！",
    "While in dungeon, do not automatically join fight events": "在地下城中，不要自动加入战斗事件",
    "Woodcutter": "伐木工",

    // 技能和教程
    "You are playing as an Apprentice. Visit the": "您正在以学徒身份游戏。访问",
    "You can see how your efforts stack up against other players on the new": "您可以在新的",
    "You have no active crafting orders.": "您当前没有正在进行的制作订单。",
    "You have not learned any cooking recipes.": "您还没有学习任何烹饪食谱。",
    "Your Active Crafting Orders": "您的活跃制作订单",
    "Your Email": "您的电子邮件",
    "Your journey is defined by six core skills. You gain experience (XP) by performing related activities, which you can select on the \"Main\" tab.": "您的旅程由六项核心技能定义。您可以通过执行相关活动来获得经验（XP），您可以在\"主界面\"选项卡上选择。",
    "Your Mining Level": "您的采矿等级",

    // 雇佣兵描述
    "\"Be warned: this sellsword is prone to napping on the job. They will only engage in battle while you are actively overseeing your workshop and will fall asleep at their post if you are away.\"": "\"警告：这个雇佣兵容易在工作时打盹。他们只会在你亲自监督工作室时参与战斗，如果你离开，他们会在岗位上睡着。\"",

    // 事件消息 - 使用正则处理
    "Error: Invalid dungeon level.": "错误：无效的地下城等级。",
    "Aid Requested": "已请求援助",

    // 经验值和基础属性
    "+1 bonus XP": "+1 奖励经验值",

    // 雇佣兵哨站描述
    "The Mercenary Post can be": "雇佣兵哨站可以",
    "Allows you to hire a mercenary for up to 1 hour to automatically join combat events or start dungeon runs. When joining combat events, the mercenary takes an 80% cut of all rewards as payment.": "允许你雇佣一个佣兵，最多持续1小时，自动加入战斗事件或开始地下城运行。当加入战斗事件时，雇佣兵会抽取80%的奖励作为报酬。",
    "Allows you to hire a mercenary for up to 8 hours to automatically join combat events or start dungeon runs. When joining combat events, the mercenary takes an 80% cut of all rewards as payment.": "允许你雇佣一个佣兵，最多持续8小时，自动加入战斗事件或开始地下城运行。当加入战斗事件时，雇佣兵会抽取80%的奖励作为报酬。",


    // 地下城增益效果
    "Increases all damage you deal by 1.5% while in a dungeon if your role is Battler.": "当角色为战斗者时，在地下城中造成的所有伤害增加1.5%。",
    "Increases all healing you do by 1.5% while in a dungeon if your role is Miner.": "当角色为矿工时，在地下城中进行的所有治疗增加1.5%。",
    "Increases the amount of your personal Health contributed to the party's maximum HP by 1.5% while in a dungeon (all roles).": "在地下城中，将您个人生命值贡献给队伍最大生命值的量增加1.5%（所有角色）。",
    "Increases your thorns damage by 1.5% while in a dungeon if your role is Woodcutter.": "当角色为伐木工时，在地下城中的荆棘伤害增加1.5%。",

    //地下城类

    // 哥布林怪物名称
    // 哥布林怪物名称 - 带定冠词
    "The Goblin Wolfrider": "哥布林狼骑兵",
    "The Goblin Taskmaster": "哥布林监工",
    "The Goblin Cutthroat": "哥布林割喉者",
    "The Goblin Spearman": "哥布林长矛兵",
    "The Goblin Guard": "哥布林守卫",
    "The Goblin Brawler": "哥布林搏斗者",
    "The Goblin Rock-Slinger": "哥布林投石者",
    "The Goblin Skirmisher": "哥布林散兵",
    "The Goblin Soldier": "哥布林士兵",
    "The Goblin Brute": "哥布林蛮兵",
    "The Goblin King": "哥布林国王",

    // 哥布林怪物名称 - 不带定冠词
    "Goblin Wolfrider": "哥布林狼骑兵",
    "Goblin Taskmaster": "哥布林监工",
    "Goblin Cutthroat": "哥布林割喉者",
    "Goblin Spearman": "哥布林长矛兵",
    "Goblin Guard": "哥布林守卫",
    "Goblin Brawler": "哥布林搏斗者",
    "Goblin Rock-Slinger": "哥布林投石者",
    "Goblin Skirmisher": "哥布林散兵",
    "Goblin Soldier": "哥布林士兵",
    "Goblin Brute": "哥布林蛮兵",
    "Goblin King": "哥布林国王",

    // 其他属性
    "Increases the chance to craft high-quality food.": "增加制作高质量食物的几率。",
    "Next enhance cost: 240.00 Treant Resin": "下次强化成本：240.00 树人树脂",
    "quality. Soulbound on equip.": "品质。装备后绑定。",
    "Sharpen Fishing Rod": "打磨鱼竿",
    "This tool has already been sharpened.": "这个工具已经被打磨过了。",
    "Enhance Fishing Rod": "强化鱼竿",

    // 负面效果
    "-10% to base gathering amount.": "-10% 基础采集量。",
    "-10% to base resource gains (Iron Ore, Logs, Gold, Fish).": "-10% 基础资源获得（铁矿石、木头、金币、鱼）。",
    "-7.5% ": "-7.5% ",

    // 拾荒效果
    ". You also find a small bite of fish (0.1) while not fishing.": "。当不钓鱼时，你还会发现一小口鱼（0.1）。",

    // 引用文本
    "\"A master cook never stops learning. Some secrets are only found in the belly of the beast.\"": "\"大师厨师从不停止学习。有些秘密只能在野兽的肚子里找到。\"",
    "\"In the heat of battle, true mastery shines brightest.\"": "\"在激烈的战斗中，真正的技艺闪耀得最明亮。\"",
    "\"Patience reveals the hidden treasures of the earth.\"": "\"耐心揭示大地隐藏的宝藏。\"",
    "\"The numbers don't lie... but they can be persuaded.\"": "\"数字不会说谎……但可以被说服。\"",
    "\"The ocean keeps its treasures deep. This sanctuary sings a song that calls them to the surface.\"": "\"海洋将其宝藏深藏。这个保护区唱着一首歌，将它们召唤到水面。\"",
    "\"The sea is generous to those who respect its tides.\"": "\"大海对尊重潮汐的人慷慨。\"",
    "\"The work of one strengthens the hands of many.\"": "\"一人的工作强化众人的双手。\"",
    "\"Waste not, want not. Every speck of dust has its purpose.\"": "\"不浪费，不匮乏。每一粒尘埃都有其用途。\"",
    "\"Why search for the perfect stone when a hundred will do?\"": "\"既然一百块石头就够用，为何还要寻找完美的那一块？\"",

    // 百分比增益
    "(+0.01": "(+0.01",
    "A discreet accounting firm with a reputation for... creative bookkeeping. Their auditors have an uncanny ability to uncover \"miscellaneous revenue\" and \"unclaimed assets\" from across the land, which are then funneled into community projects.": "一家以...创意记账闻名的谨慎会计师事务所。他们的审计师有着不可思议的能力，能从各地发现\"杂项收入\"和\"无人认领资产\"，然后将其注入社区项目。",
    "Applies to": "适用于",
    "Automatically deducts 5% of all raw resources you gather (from Mining, Woodcutting, and Battling) and donates them to the most-voted Community Building(s).": "自动扣除您采集的所有原始资源（来自采矿、伐木和战斗）的5%，并将其捐赠给投票最多的社区建筑。",
    "Each tick also generates 2.5% of your gathered amount as other primary raw resources. While fishing, the strength of this effect is determined by your": "每个tick还会生成您采集量的2.5%作为其他主要原始资源。钓鱼时，此效果的强度取决于您的",
    "Fishing Level and Rod Power": "钓鱼等级和鱼竿强度",
    "Gain +1% chance to catch fish per level and +1% chance to find Abyssal Eels per level, and +1 Fishing XP per tick per level.": "每级获得+1%捕获鱼的几率和+1%发现深渊鳗鱼的几率，以及每tick +1钓鱼经验值每级。",
    "Generates a surplus of": "生成盈余",
    "In return, you gain +10% bonus XP for that gathering skill.": "作为回报，您获得该采集技能+10%额外经验值。",
    "Leviathan Scales are earned by defeating the \"Leviathan from the Depths\" world boss.": "利维坦鳞片通过击败世界Boss\"深渊利维坦\"获得。",
    "on all gathered Iron Ore, Logs, Gold, and Rune Shards.": "在所有采集的铁矿石、木头、金币和符文碎片上。",
    "Permanently learn new Cooking recipes by exchanging Leviathan Scales.": "通过交换利维坦鳞片永久学习新的烹饪配方。",
    "Pickaxe, Axe, Sword": "镐、斧、剑",
    "Pickaxe, Axe, Sword, Fishing Rod": "镐、斧、剑、鱼竿",
    "This tool's scrap value becomes 0.": "此工具的废料价值变为0。",
    "- Woodcutter": "- 伐木工",
    "Your Battler Level": "你的战斗等级",
    "Your Woodcutting Level": "你的伐木等级",
    "to our defenses.": "到我们的防御。",
    "YOUR TOWN NEEDS YOU!": "你的城镇需要你！",
    "Max Level Reached": "已达最高等级",
    "Your Skill Level": "你的技能等级",
    "Contribute 1,000,000 Gold": "贡献1,000,000金币",
    "8% (2% per level, caps at 100%)": "8%（每级2%，上限100%）",
    // 标题注释------------------------------------------------------------------------------------------
    "\"The crown looks the other way. Don't get caught!\"": "\"王冠看向另一边。别被抓到！\"",
    "\"The fish are practically jumping into the boats!\"": "\"鱼儿简直要跳进船里了！\"",
    "\"From the blackest depths, it rises. Its scales hold the secrets of the abyss.\"": "\"自至暗深渊，它崛起。其鳞片承载着深渊的奥秘。\"",
    "+2 bonus XP": "+2 额外经验值",
    "All purchases from the player market are": "所有玩家市场购买都是",
    "and you get 1 extra Fishing XP during this event.": "并且在此事件期间您获得1点额外钓鱼经验值。",
    "tax-free": "免税",
    "The chance to catch fish is": "捕获鱼的几率是",
    "Request Aid": "请求援助",
    "Note: Each auto-dungeon level is unlocked by completing 100 dungeons (e.g., 100 for Level 1, 200 for Level 2, etc.).": "注意：每个自动地下城等级需要通过完成100个地下城来解锁（例如，等级1需要100个，等级2需要200个，以此类推）。",
    "- OR -": "- 或 -",
    "Start as an Apprentice": "以学徒身份开始",
    "What is an Apprentice account?": "什么是学徒帐户？",
    "Forgot your password? Enter your username and we'll send a reset link to the email associated with your account. Or, if you remember your current password, you can change it below.": "忘记密码？输入您的用户名，我们会向与您帐户关联的电子邮件发送重置链接。或者，如果您记得当前密码，可以在下方更改。",
    "Try the game instantly without an email or password. Your progress is saved on the server. You can create a permanent account later from the in-game Options menu to secure your progress and unlock all features (like the Market and Conclaves).": "无需电子邮件或密码即可立即试玩游戏。您的进度保存在服务器上。您稍后可以从游戏内选项菜单创建永久帐户，以保护您的进度并解锁所有功能（如市场和工匠协会）。",
    "Welcome to Idle Artisan, a world where your skill and dedication can turn humble resources into legendary artifacts. Begin your journey by gathering materials, honing your skills in Mining, Woodcutting, and more, and crafting ever-more-powerful tools. Master the art of the forge and the kitchen, creating gear and powerful food buffs that will set you apart as a true master of your trade.": "欢迎来到《空闲工匠》，在这个世界中，您的技能和奉献可以将卑微的资源转化为传说神器。通过收集材料开始您的旅程，磨练您的采矿、伐木等技能，并制作越来越强大的工具。掌握锻造和烹饪的艺术，制作装备和强大的食物增益，使您成为真正的大师。",
    "But you are not alone. Join a Conclave to collaborate with fellow artisans on massive projects, or test your mettle against epic world bosses. The player-driven market is yours to command, but be warned—a relentless goblin horde constantly threatens the town's defenses, requiring all artisans to stand together to protect the community you've all worked so hard to build.": "但您并不孤单。加入工匠协会与同行合作完成大型项目，或与世界Boss较量来测试您的勇气。玩家驱动的市场由您指挥，但请注意——无情的地精部落不断威胁着城镇的防御，需要所有工匠团结一致，保护你们共同努力建立的社区。",
    // 精准匹配翻译
    "5 hours ago": "5小时前",
    "No public buy orders.": "没有公开购买订单。",
    "Increases max offline time to 1 hour.": "将最大离线时间增加到1小时。",

    "Join to fight the beast with your Fishing skill. The total reward pool of Leviathan Scales": "使用你的钓鱼技能加入对抗这头野兽。利维坦鳞片的总奖励池",
    "Join to fight the beast with your Mining skill. The total reward pool of Rune Shards": "使用你的采矿技能加入对抗这头野兽。符文碎片的总奖励池",
    "Join to fight the beast with your Woodcutting skill. The total reward pool of Treant Resin": "使用你的伐木技能加入对抗这头野兽。树人树脂的总奖励池",
    "Join to fight the beast with your Battling skill. The total reward pool of Boss Tokens": "使用你的战斗技能加入对抗这头野兽。Boss代币的总奖励池",



    // 新增汉化内容
    "Artisan's Mark Exchange": "工匠印记交易所",
    "Conclaves": "工匠公会",
    "Glyphs": "符文",
    "Sharpening Stones": "磨刀石",
    "The Exchange": "交易所",
    "Rare Resource Exchange": "稀有资源交易所",
    "Market Log": "市场日志",
    "Cooking Attempts": "烹饪尝试次数",

    // 游戏机制描述
    "Artisan's Marks": "工匠印记",
    "Artisan's Mark Exchange (Beta)": "工匠印记交易所（测试版）",
    "Purchase powerful Glyphs to socket into your tools, providing unique bonuses and trade-offs. Glyphs can be socketed into a tool of the same level or lower (ex: level 15 glyph can socket into a level 15 or lower tool, but a level 15 glyph cannot be socketed into a level 16 or higher tool). Each tool can only have one Glyph at a time. Glyph benefits (and trade-offs) are only applied to a given tool while using that tool.": "购买强大的符文插入您的工具，提供独特的奖励和权衡。符文可以插入相同等级或更低等级的工具（例如：15级符文可以插入15级或更低等级的工具，但15级符文不能插入16级或更高等级的工具）。每个工具一次只能有一个符文。符文的好处（和权衡）仅在使用该工具时应用。",
    "The Exchange is a special shop where you can trade unique, non-marketable currencies for powerful items and recipes. These currencies are earned by participating in specific game activities.": "交易所是一个特殊的商店，您可以在那里交易独特的、不可市场化的货币来获取强大的物品和配方。这些货币通过参与特定的游戏活动获得。",
    "Trade the rare resources found via your Conclave's buildings (Starfall Ore, Glimmerwood Sap, Crystallized Anima) for": "通过您的公会建筑找到的稀有资源（星落矿石、微光树液、生命结晶）可以交易",
    "these buildings using rare resources found via their Conclave. Each enhancement level provides a +20% bonus to the building's throughput. The cost to enhance scales with both the building's level and its current enhancement level, requiring Starfall Ore (Ironforge), Glimmerwood Sap (Sawmill), or Crystallized Anima (Goldforge).": "使用通过公会找到的稀有资源来强化这些建筑。每个强化等级提供建筑吞吐量+20%的奖励。强化成本随建筑等级和当前强化等级而增加，需要星落矿石（铁熔炉）、微光树液（锯木厂）或生命结晶（金熔炉）。",
    "to permanently increase its fish preparation throughput by +20% per enhancement level.": "永久增加其鱼类准备吞吐量，每个强化等级+20%。",
    "using": "使用",
    "Dedicated artisans can now": "专注的工匠现在可以",
    "In addition to tools, master artisans can forge powerful": "除了工具，大师工匠还可以锻造强大的",
    ". These unique artifacts are crafted from a combination of refined materials and rare boss components. When equipped, a Sigil provides a significant, role-specific bonus within Dungeons, enhancing a player's effectiveness as a damage dealer, healer, or tank. Sigils are always of": "。这些独特的神器由精炼材料和稀有Boss组件组合而成。装备时，印记在地下城中提供显著的、特定角色的奖励，增强玩家作为伤害输出者、治疗者或坦克的效果。印记始终是",
    "quality and become soulbound once equipped.": "品质，并且一旦装备就绑定。",
    ". These single-use items permanently upgrade an equipped tool by one rarity level, up to the ultimate Legendary tier.": "。这些一次性使用的物品永久地将装备的工具提升一个稀有等级，最高可达最终的传说级别。",
    ". These magical symbols can be socketed into your tools to provide unique bonuses and trade-offs, allowing for deeper specialization of your craft.": "。这些魔法符号可以插入您的工具中，提供独特的奖励和权衡，允许更深入的专业化您的工艺。",
    "your tools and to craft the": "您的工具和制作",
    "event. Required for high-level Community Buildings and to craft the": "事件。高级社区建筑所需，并用于制作",
    "event. Used at the Exchange to learn cooking recipes and to craft the": "事件。在交易所用于学习烹饪配方和制作",
    "Be warned: the tunnels are unstable. Your party has only 30 seconds to defeat the monster in each room before you become exhausted and must regroup. As a reward for your bravery, you will earn": "警告：隧道不稳定。您的队伍只有30秒时间击败每个房间的怪物，否则会变得疲惫并必须重新组队。作为您勇敢的奖励，您将获得",
    "for each room cleared, with a large bonus for defeating the final boss. These marks can be traded at the Exchange for powerful Glyphs. You can also earn permanent cosmetic username colors by completing dungeons. Check the Dungeons tab and Exchange tab to see the rewards!": "每个清理的房间，击败最终Boss有大量奖励。这些印记可以在交易所交易强大的符文。您还可以通过完成地下城获得永久的装饰性用户名颜色。查看地下城标签页和交易所标签页了解奖励！",
    "Like other refining buildings, the Kitchen can be": "像其他精炼建筑一样，厨房可以",
    "The Ironforge, Sawmill, Goldforge, Kitchen, and Butcher's Block can also be socketed with special refining Glyphs. These provide powerful trade-offs to specialize your production.": "铁熔炉、锯木厂、金熔炉、厨房和屠宰台也可以插入特殊的精炼符文。这些符文提供了强大的权衡，以专业化您的生产。",
    "+1% chance to catch fish per level and a": "每级+1%捕获鱼的几率和",
    "to your chance of finding Abyssal Eels per level. Also grants +1 Fishing XP per tick per level.": "每级发现深渊鳗鱼的几率。同时每级每tick获得+1钓鱼经验值。",
    "and the": "和",
    "(0-10%) to automatically collect a portion of members' gathered raw materials (from Mining, Woodcutting, and Battling) and Rune Shards (from the Runic Golem event). These materials are converted to refined resources and contributed to the Conclave's most-voted project(s) after every": "(0-10%) 自动收集成员采集的原材料的一部分（来自采矿、伐木和战斗）和符文碎片（来自符文魔像事件）。这些材料被转化为精炼资源，并在每次",
    "Clear": "清除",
    "Trade": "交易",
    "Learned": "已学习",
    "No market activity to display.": "无市场活动可显示。",

    // 食物相关
    "[Burnt] Grilled Fish": "[烤焦] 烤鱼",
    "[Fine] Grilled Fish": "[优良] 烤鱼",

    // 角色描述
    "Battler (Sword/Battler Level)": "战斗者（剑/战斗等级）",
    "Miner (Pickaxe/Mining Level)": "矿工（镐子/采矿等级）",
    "Woodcutter (Axe/Woodcutting Level)": "伐木工（斧/伐木等级）",

    // 其他界面文本
    "✔️": "✔️",
    "⭐": "⭐",
    "🔒": "🔒",
    "×": "×",
    "[☄️Gold Goblins☄️]SuperBooster": "[☄️Gold Goblins☄️]SuperBooster",
    "[☄️Gold Goblins☄️]TRIGGERED": "[☄️Gold Goblins☄️]TRIGGERED",
    "[⚜️Redmane Castle⚜️]goodluckz": "[⚜️Redmane Castle⚜️]goodluckz",
    "[⚜️Redmane Castle⚜️]Lorrow35": "[⚜️Redmane Castle⚜️]Lorrow35",
    "[⚜️Redmane Castle⚜️]Neuroclastys": "[⚜️Redmane Castle⚜️]Neuroclastys",
    "[⚜️Redmane Castle⚜️]UYK123": "[⚜️Redmane Castle⚜️]UYK123",
    "[🌟Universal🌟]KUSANG": "[🌟Universal🌟]KUSANG",
    "[🌟Universal🌟]NooN": "[🌟Universal🌟]NooN",
    "[🌟Universal🌟]Wheesel": "[🌟Universal🌟]Wheesel",
    "[💧CH.Msinc💧]": "[💧CH.Msinc💧]",
    "[💧CH.Msinc💧]CH.Msinc": "[💧CH.Msinc💧]CH.Msinc",
    "[💧CH.Msinc💧]imkz": "[💧CH.Msinc💧]imkz",
    "[💧CH.Msinc💧]msinc": "[💧CH.Msinc💧]msinc",
    "[💧CH.Msinc💧]Hwcd1992": "[💧CH.Msinc💧]Hwcd1992",
    "[🩸Idle Squatches🩸]": "[🩸Idle Squatches🩸]",
    "[🩸Idle Squatches🩸]BigFoot": "[🩸Idle Squatches🩸]BigFoot",
    "[🩸Idle Squatches🩸]jamminTheDev": "[🩸Idle Squatches🩸]jamminTheDev",
    "[🩸Idle Squatches🩸]MafiosoPlays": "[🩸Idle Squatches🩸]MafiosoPlays",
    "[🩸Idle Squatches🩸]RiggedyRekt": "[🩸Idle Squatches🩸]RiggedyRekt",
    "[🩸Idle Squatches🩸]Vexx": "[🩸Idle Squatches🩸]Vexx",
    "[☄️Gold Goblins☄️]": "[☄️Gold Goblins☄️]",
    "[🌟Universal🌟]": "[🌟Universal🌟]",
    "[zed.city]TXJ123": "[zed.city]TXJ123",
    "ninja-wzhg": "ninja-wzhg",
    "☀️": "☀️",
    "☄️": "☄️",
    "🌙": "🌙",
    "🌟": "🌟",
    "🌿": "🌿",
    "💧": "💧",
    "🔥": "🔥",
    "🪨": "🪨",
    "🪵": "🪵",
    "555.0k": "555.0k",
    "aLone": "aLone",
    "Cat": "Cat",
    "ck36": "ck36",
    "diyifengge": "diyifengge",
    "eden": "eden",
    "justmeandapear": "justmeandapear",
    "kill3000": "kill3000",
    "Kotorii": "Kotorii",
    "LavaBoss": "LavaBoss",
    "Leiche": "Leiche",
    "LongEyes": "LongEyes",
    "Matqeua": "Matqeua",
    "Maximum": "Maximum",
    "megalith": "megalith",
    "MkeeLIU": "MkeeLIU",
    "Ozlotl": "Ozlotl",
    "rilence": "rilence",
    "Shrike": "Shrike",
    "SuperBooster": "SuperBooster",
    "wjykka": "wjykka",
    "xiaozhu": "xiaozhu",
    "zhanggp1": "zhanggp1",
    "BoskiGG": "BoskiGG",
    "kakyo120": "kakyo120",
    "[zed.city]Maximum": "[zed.city]Maximum",
    "Hwcd1992": "Hwcd1992",
    "Kill_Casey": "Kill_Casey",
    "lordzapharos": "lordzapharos",
    "[Idle Squatches]MafiosoPlays": "[Idle Squatches]MafiosoPlays",
    "[⚜️Redmane Castle⚜️]": "[⚜️Redmane Castle⚜️]",
    "[🌟Hero🌟]": "[🌟Hero🌟]",
    "[🌟Universal🌟]NooN - Battler": "[🌟Universal🌟]NooN - Battler",
    "[MyGO!!!!!]eden": "[MyGO!!!!!]eden",
    "[🌟Hero🌟]cornflash12": "[🌟Hero🌟]cornflash12",
    "[🪨TheAnvilGuard🪨]Ravendious": "[🪨TheAnvilGuard🪨]Ravendious",
    "lumsen": "lumsen",
    "Redpanda15w": "Redpanda15w",
    "2x multiplier": "2倍乘数",
    "(Currently: 6 hours)": "（当前：6小时）",
    "+10% multiplier": "+10% 乘数",
    "1,000,000 pts": "1,000,000 点数",
    "1,000,000,000 pts": "1,000,000,000 点数",
    "10,000 pts": "10,000 点数",
    "10,000,000 pts": "10,000,000 点数",
    "10,000,000,000 pts": "10,000,000,000 点数",
    "100,000 pts": "100,000 点数",
    "100,000,000 pts": "100,000,000 点数",
    "100,000,000,000 pts": "100,000,000,000 点数",
    "Join Tournament": "加入锦标赛",
    "Total Points": "总点数",
    "Artisan Tournament": "工匠锦标赛",
    ". For artisan skills, it is your": "。对于工匠技能，它是你的",
    "\"Let the record show who is truly the master of their craft!\"": "\"让记录显示谁是真正的手艺大师！\"",
    "(Today's reward: Crystallized Anima)": "（今日奖励：生命结晶）",
    "[Exquisite] Eel Broth": "[精美] 鳗鱼汤",
    "1st Place: 10 Rare Resources": "第一名：10个稀有资源",
    "2nd Place: 5 Rare Resources": "第二名：5个稀有资源",
    "3rd Place: 2.5 Rare Resources": "第三名：2.5个稀有资源",
    "By order of the Mayor, a tournament is declared to honor the town's finest artisans!": "根据市长的命令，宣布举办锦标赛以表彰镇上最优秀的工匠！",
    "dauntlee": "dauntlee", // 玩家名称保持原样
    "Leave Tournament": "离开锦标赛",
    "Multiplies rare find chance by 1.5x for 360 minutes.": "将稀有发现几率提高1.5倍，持续360分钟。",
    "No participants yet.": "尚无参与者。",
    "Player": "玩家",
    "Rewards": "奖励",
    "Score": "分数",
    "Skill Level × Building Level": "技能等级 × 建筑等级",
    "Skill Level × Tool Power": "技能等级 × 工具威力",
    "Your score is a measure of your total power in the chosen skill. For gathering, this is your": "你的分数衡量了你在选定技能中的总实力。对于采集技能，这是你的",
    "Reserved Gold": "预留金币",
    "Revoke": "撤销",
    "-5% to base resource gains (Iron Ore, Logs, Gold, Fish).": "-5% 基础资源获得（铁矿石、木头、金币、鱼）。",
    "[Fine] (1 avail)": "[优良] (1可用)",
    "AshTempest": "AshTempest", // 玩家名称保持原样
    "Each tick also generates 5% of your gathered amount as other primary raw resources. While fishing, the strength of this effect is determined by your": "每个tick还会生成你采集量的5%作为其他主要原始资源。钓鱼时，此效果的强度取决于你的",
    "gujiwuwen": "gujiwuwen", // 玩家名称保持原样
    "jerryhxc": "jerryhxc", // 玩家名称保持原样
    "The Artisan's Collection Box": "工匠收集箱",
    "You have no items to collect.": "你没有可收集的物品。",
    "Your filled crafting orders are kept safe here. A faint warmth emanates from the box—a simple charm that keeps meals hot and tools ready for use. You have 24 hours to collect your items before they are automatically sent to your inventory.": "你完成的制作订单安全地存放在这里。盒子散发出微弱的热量——一个简单的咒语，让餐点保持温热，工具随时可用。你有24小时的时间来收集物品，之后它们会自动发送到你的库存中。",
    "\tLoading contracts...\n ": "\t加载合同中...\n ",
    ". Other players cannot see your bid amount, and you are free to update your bid as many times as you like before the 12-hour bidding window closes. Your first bid must be equal to or lower than the starting price. If you win, you have 24 hours to gather or craft the required items and fulfill the contract to receive your gold reward. Be warned: the Harbormaster does not suffer broken promises. Failing to fulfill a contract on time will cause your crafting skill to be reduced by 1.": "。其他玩家无法看到你的出价金额，在12小时的投标窗口关闭之前，你可以自由更新出价任意次数。你的首次出价必须等于或低于起始价格。如果你获胜，你有24小时的时间来收集或制作所需物品并履行合同以接收金币奖励。警告：港务长不容忍违约。未能按时履行合同将导致你的制作技能降低1级。",
    "A contract can be fulfilled using an item that meets or": "合同可以使用满足或超过要求的物品来履行",
    "Contracts": "合同",
    "Loading contracts...": "加载合同中...",
    "lowest bid wins": "最低出价获胜",
    "Maximum Bid": "最高出价",
    "The Harbormaster periodically posts high-value contracts for skilled artisans. This is a sealed-bid, reverse auction where the": "港务长定期为熟练工匠发布高价值合同。这是一个密封投标的逆向拍卖，其中",
    "the requested level and quality/rarity.": "请求的等级和质量/稀有度。",
    "You have not placed a bid.": "你尚未出价。",
    "Your Bid": "你的出价",
    "Your Bid (Lowest Wins)": "你的出价（最低获胜）",
    "Bidding Open": "投标开放",
    "Bidding Closed": "投标关闭",
    "Contract Fulfilled": "合同已完成",
    "Contract Expired": "合同已过期",
    "Contract Failed": "合同失败",
    "Current Bidders": "当前出价者",
    "Bidding Open (ends in Expired)": "投标开放 (已过期)",
    "Time Remaining": "剩余时间",
    //    "with a bid of": "出价为",
    "pk90536": "pk90536",
    "+5 ": "+5 ",
    "2% ": "2% ",
    "8% ": "8% ",

    // 数量倍数
    " (2x).": " (2次)。",
    " (3x).": " (3次)。",

    // 玩家名称和公会标签 - 保持原样
    "[⚜️Redmane Castle⚜️]Arquen": "[⚜️Redmane Castle⚜️]Arquen",
    "[🏆Universal🏆]": "[🏆Universal🏆]",
    "[AreYouSerious?]Jerokhna": "[AreYouSerious?]Jerokhna",
    "Chenxixi931022": "Chenxixi931022",
    "[🧌Idle Squatches🧌]": "[🧌Idle Squatches🧌]",

    // 玩家名称 - 保持原样
    "Farmerbot_05": "Farmerbot_05",

    // 公会创始人/成员身份
    "Founder of Gold Goblins": "Gold Goblins 创始人",
    "Founder of Idle Squatches": "Idle Squatches 创始人",
    "Member of Redmane Castle": "Redmane Castle 成员",
    "Not enough Lunar Essence.": "月华精华不足。",

    // 工具状态
    "Sharpened": "已打磨",
    "Socketed": "已插入符文",
    "This tool has been sharpened once (+1 rarity).": "这个工具已经打磨过一次（+1稀有度）。",

    // 符文效果描述---1
    "Reduces the input resource cost of a refining job by 20%, but also reduces the output by 10%.": "减少精炼作业的输入资源成本20%，但同时减少输出10%。",
    "Increases the input resource cost of a refining job by 20%, but also increases the output by 10%.": "增加精炼作业的输入资源成本20%，但同时增加输出10%。",
    "it with a new glyph (which scraps the old one for a 25% refund of its Artisan's Mark cost), or by using": "用新的符文覆盖（将旧的符文回收，返还其工匠印记成本的25%），或者使用",
    // 符文相关新内容
    "A socketed refining glyph can be removed in two ways: by": "已插入的精炼符文可以通过两种方式移除：",
    "overwriting": "覆盖",
    "to safely return it to your inventory.": "安全地将其返回到您的库存中。",
    // ---2
    "\"Feed the forge, and the forge will feed you.\"": "\"喂养熔炉，熔炉也会喂养你。\"",
    "\"The forge can be fed with a whisper of ore, if one knows the right words.\"": "\"如果懂得正确的咒语，只需低语矿石之名便能喂养熔炉。\"",

    // 建筑列表
    "Ironforge, Sawmill, Goldforge, Kitchen": "铁熔炉、锯木厂、金熔炉、厨房",

    // 大熔炼事件提示
    "The materials are consumed by the intense heat, but nothing forms.": "材料被高温消耗了，但是什么都没有形成。",
    "You successfully craft an item!": "你成功制作了一个物品！",
    "The event has started!": "事件已开始！",
    // 精炼建筑符文说明
    "The Ironforge, Sawmill, Goldforge, and Kitchen can also be socketed with special refining Glyphs. These provide powerful trade-offs to specialize your production.": "铁熔炉、锯木厂、金熔炉和厨房也可以插入特殊的精炼符文。这些符文提供了强大的权衡，以专业化您的生产。",

    // 地下城设置
    "Default Dungeon Level": "默认地下城等级",
    "Dungeon Preferences": "地下城偏好设置",

    // 新符文类型
    "Glyph of Frugality": "节俭符文",
    "Glyph of Gluttony": "饕餮符文",

    // 特殊消耗品--反符文介绍
    "\"A delicate touch to undo what was once bound.\"": "\"轻柔一触，解绑曾经束缚之物。\"",

    // 物品描述
    "A one-time use consumable that can safely unsocket a Glyph from an equipped tool, returning the Glyph to your inventory.": "一次性使用的消耗品，可以安全地从已装备工具中移除符文，将符文返回到您的库存中。",

    // 时间格式
    "24 days ago": "24天前",
    // 新增汉化内容
    ", earned from completing Dungeons, to purchase powerful": "，通过完成地下城获得，用于购买强大的",
    ", earned from defeating The Leviathan, to permanently learn new cooking recipes.": "，通过击败利维坦获得，用于永久学习新的烹饪配方。",

    // 引用文本
    "\"A master artisan knows their workshop is never truly finished. There is always room for refinement.\"": "\"大师工匠知道他们的工坊永远不会真正完成。总有改进的空间。\"",

    // 建筑和强化相关
    //     "+5 ": "+5 ",
    //     "+4 ": "+4 ",
    "+50% multiplier to find Abyssal Eels": "+50% 发现深渊鳗鱼的乘数",
    //     "2% ": "2% ",
    //     "8% ": "8% ",


    // 界面文本
    "Current Level": "当前等级",
    "E0": "E0",
    "Next Level (E1)": "下一等级（E1）",
    // 资源类型描述
    "for Iron Ore, Logs, and Gold": "用于铁矿石、木头和金币",
    "for Rune Shards": "用于符文碎片",

    // 增益效果描述
    "Generates a surplus on all gathered resources": "在所有采集的资源上生成盈余",
    "Grants +25% Combat Damage.": "提供+25%战斗伤害。",

    // 技能描述
    "Gain +1% chance to catch fish per level and a": "每级获得+1%捕获鱼的几率和",

    // 错误消息
    "Not enough Glimmerwood Sap.": "微光树液不足。",
    "Not enough Oceanic Essence.": "海洋精华不足。",
    "Not enough Starfall Ore.": "星落矿石不足。",
    "Not enough Game Carcass. ": "猎物尸体不足。",

    // 技能等级
    "Your Fishing Level": "你的钓鱼等级",
    // 新增汉化内容
    "(Votes: 5)": "（投票：5）",
    // 事件消息
    "[Fine] Fish Stew": "[优良] 鱼汤",
    // 属性加成
    "+4% Damage": "+4% 伤害",
    // 时间显示
    "6 hours ago": "6小时前",


    // 2代汉化
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

};

// 需处理的前缀
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

    // 树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Hiring...": "雇佣中...",
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
    "Active Players: ": "活跃玩家: ",
    "Time Left: ": "剩余时间: ",
    "Crafting XP: ": "制作经验: ",
    "Crafting: ": "制作: ",
    "Power: ": "力量: ",
    "Sharpen Swords: +": "磨剑: +",
    "Total Power: ": "总力量: ",
    "- Quantity: ": "- 数量: ",
    "[NPC]": "[NPC]",
    "Minimum bid: ": "最低报价: ",
    "Current bid: ": "当前报价: ",
    "Current Pool": "当前奖励池",
    "New min bid: ": "新的最低报价: ",
    "This tool has been empowered with Treant Resin": "这个工具已经用树人树脂进行了强化",
    "Profile for: ": "个人资料关于: ",
    // 在 cnPrefix 对象中添加：

    "Hunger: ": "饥饿度：",
    "Hunting: ": "狩猎：",
    "Hunting Hit Chance: ": "狩猎命中几率：",
}

// 需处理的后缀
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
    ":": ":",
    // 在 cnPostfix 对象中添加：

    " Hunting XP per tick": " 狩猎经验值每tick",
    "% Hunting Hit Chance": "% 狩猎命中几率",

    "Switched to Battling.": "已经切换到战斗。",
    "Switched to Woodcutting.": "已经切换到伐木。",
    "Switched to IronBars.": "切换到铁锭。",
    "Switched to Hunting.": "切换到狩猎。",

    "Not enough Logs. Switched to Woodcutting.": "没有足够的原木。已切换为伐木。",
    "bonus to your Quality Score on every craft": " 质量分数加成到你的每次制作",
    " max per resource (except gold)": " 每种资源容量上限 (除了金币)",
    "resource costs for crafting personal items, refining buildings, and community buildings": "资源消耗对于制作个人物品，精炼建筑和社区建筑",
    "chance per level for the thief to be arrested (caps at 100% at level 50). Also +1% damage vs Boss, Ancient Treant, and Runic Golem per level.": "的几率抓到盗贼（每级）（50级时几率上限为100%）。每升1级对Boss，远古树人和符文魔像的伤害增加1%。",
    "chance to arrest the thief during their visit": "几率在小偷来访时，将其抓获",
    "You do not have enough gold to place that bid.": "您的金币不足，无法出价。",
    "% tax": "% 税",
    "The town watch reports the distant sound of goblin war drums!": "城镇守卫报告远处传来哥布林的战鼓声！",
    "The Runic Golem has left the area.": "符文魔像已经离开了这个区域。",
    "Not enough Iron Ore. ": "没有足够的铁矿石。",
    "You already have a listing for this item.": "你已经在市场上架了此物品。",
    "Not enough Logs. ": "木头不足。",
    "The Ancient Treant has left the area.": "远古树人已离开该区域。",
    "Not enough Gold. ": "金币不足。",
    "The goblin horde has been defeated! The community buildings are safe!": "哥布林部落已被击败！社区建筑安全了！",
    "Listing not found.": "挂单未找到。",
    "Welcome to the game!": "欢迎来到游戏！",
    "AJAX Error getting market listings: error -": "AJAX获取市场列表错误：错误-",
    "AJAX Error changing activity: error -": "AJAX错误更改活动：错误-",
    "The goblin siege has been repelled! The defenses held!": "哥布林的围攻被击退了！防御工事守住了！",
    "Invalid bid. Please enter an amount greater than 0.": "无效的出价。请输入大于0的金额。",
    "There is no active auction to bid on.": "目前没有可以竞价的拍卖。",
    " Your bid extended the auction by 10 seconds.": "你的出价延长了 10 秒竞拍时间。",
    "% per level)": "% 每级)",
    "AJAX Error getting buy orders: error -": "AJAX获取购买订单错误：错误-",

}

// 需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^\(\d+:\d+\)$/, // 匹配 (126:30) 这种格式
    /^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]$/, // 匹配时间戳格式
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    //    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^(\d+):(\d+):(\d+):(\d+)$/,//纯数字格式
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
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
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
    /^\[([\d\.,]+)\]$/,
    /^([\d\.,]+)x$/,
    /^\[([\d\.,]+)\-([\d\.,]+)\-([\d\.,]+) ([\d\.,]+):([\d\.,]+):([\d\.,]+)\] $/,
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
    /^([\u4E00-\u9FA5]+)$/
];

var cnExcludePostfix = [
]
// 正则替换，带数字的固定格式句子
var cnRegReplace = new Map([
    // 1. 制作配方 - 放在最前面，确保先匹配
    [/^Craft (.+?) \(Level (\d+)\)$/, function(match, itemName, level) {
        const craftMap = {
            // 主界面制作名称
            "Mercenary Post": "雇佣兵哨站",
            "Axe": "斧子",
            "Sword": "剑",
            "Pickaxe": "镐子",
            "Fishing Rod": "鱼竿",
            "Crossbow": "弩",
            "Helm of Learning": "学问之盔",
            "Butcher's Block": "屠宰台",
            "Crafting Table": "合成台",
            "Ironforge": "铁熔炉",
            "Sawmill": "锯木厂",
            "Goldforge": "金熔炉",
            "Scholar's Study": "学者书房",
            "Kitchen": "厨房",
            "Storage Locker": "储物柜",
            "Sigil of Barbs": "荆棘印记",
            "Sigil of Ferocity": "凶猛印记",
            "Sigil of Mending": "修复印记",
            "Sigil of Resilience": "坚韧印记",
        };
        return "制作" + (craftMap[itemName] || itemName) + "（等级 " + level + "）";
    }],
    [/^Gain since reset: ([\d,]+)$/, '重置后增益: $1'],
    [/^Bolts left: ([\d,]+)  •  Time to deplete Bolts: (\d+)d:(\d+)h:(\d+)m:(\d+)s$/,
     '弩箭剩余：$1 • 耗尽时间：$2天$3小时$4分$5秒'],

    // 2.库存带稀有度的装备显示
    [/^\[(Poor|Common|Uncommon|Rare|Epic|Legendary|Unique)\] (.+?) \(Level (\d+)\)$/,
     function(match, rarity, itemName, level) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特",
         };

         const itemMap = {
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };

         return "[" + (rarityMap[rarity] || rarity) + "] " +
             (itemMap[itemName] || itemName) + "（等级 " + level + "）";
     }],

    // 3. 工具和物品名称（带等级和强化）
    [/^(.+?) \(Level (\d+)\)$/, function(match, buildingName, level) {
        const buildingMap = {
            "Battler's Bar": "战斗者酒吧",
            "Butcher's Block": "屠宰台",
            "Crafting Table": "合成台",
            "Fisherman's Wharf": "渔人码头",
            "Goldforge": "金熔炉",
            "Guild of Alchemists": "炼金师公会",
            "Ironforge": "铁熔炉",
            "Kitchen": "厨房",
            "Lumberjack Shack": "伐木工小屋",
            "Masterwork Atelier": "杰作工作室",
            "Mercenary Post": "雇佣兵哨站",
            "Prospector's Lodge": "勘探者小屋",
            "Quartermaster's Workshop": "军需工坊",
            "Sawmill": "锯木厂",
            "Scholar's Study": "学者书房",
            "Storage Barn": "仓库",
            "The Counting House": "会计所",
            "The Grand Library": "大图书馆",
            "The Order of the Quill": "羽笔会",
            "Town Watch": "城镇守卫",
            "Community Building": "社区建筑",
            "Storage Locker": "储物柜",
            "Conclave Strongbox": "公会储物箱",
            "Fletcher's Cooperative": "制箭师合作社",
            "Coral Sanctuary": "珊瑚保护区",
            "Anima Collector": "生命收集器",
            "Amber Mill": "琥珀磨坊",
            "Seismic Quarry": "地震采石场",
            "Artisan's Conclave": "工匠公会",
            // 市场印记
            "Sigil of Ferocity": "凶猛印记",
            "Sigil of Mending": "修复印记",
            "Sigil of Barbs": "荆棘印记",
            "Sigil of Resilience": "坚韧印记",
            // 工具 - 这些应该被工具规则匹配，但作为后备
            "Axe": "斧子",
            "Sword": "剑",
            "Pickaxe": "镐子",
            "Fishing Rod": "鱼竿",
            "Crossbow": "弩",
            "Helm of Learning": "学问之盔",
            "CraftCrossbow": "手工弩",
            //工匠印记符文提示名称
            "Glyph of the Prospector": "勘探者符文",
            "Glyph of the Laborer": "劳动者符文",
            "Glyph of Scavenging": "拾荒符文",
            "Glyph of the Philanthropist": "慈善家符文",
            "Glyph of the Duelist": "决斗者符文",
            "Glyph of Frugality": "节俭符文",
            "Glyph of Gluttony": "饕餮符文",
        };
        return (buildingMap[buildingName] || buildingName) + "（等级 " + level + "）";
    }],
    //=========== Boss事件 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Boss Event v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d,]+\.?\d*) Boss Tokens!$/,
     function(match, timestamp, ticks, score, tokens) {
         return "[" + timestamp + "] [事件] Boss事件 v2 已结束！您贡献了 " + ticks + " ticks 并获得了 " + score + " 的分数，因此您获得了 " + tokens + " Boss代币！";
     }],
    //     [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Boss Event v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d.E+]+) Boss Tokens!$/,
    //      function(match, timestamp, ticks, score, tokens) {
    //          return "[" + timestamp + "] [事件] Boss事件 v2 已结束！您贡献了 " + ticks + " ticks 并获得了 " + score + " 的分数，因此您获得了 " + tokens + " Boss代币！";
    //      }],
    //     [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Boss Event v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d.E+]+) Boss Tokens!$/,
    //      function(match, timestamp, ticks, score, tokens) {
    //          return "[" + timestamp + "] [事件] Boss事件 v2 已结束！您贡献了 " + ticks + " ticks 并获得了 " + score + " 的分数，因此您获得了 " + tokens + " Boss代币！";
    //      }],
    //     [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Boss Event v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d.E+]+) Boss Tokens!$/,
    //      "[$1] [事件] Boss事件 v2 已结束！您贡献了 $2 ticks 并获得了 $3 的分数，因此您获得了 $4 Boss代币！"],
    //     [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The boss has been defeated! You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) battle damage, earning ([\d,]+\.\d+) Boss Tokens\.$/,
    //      function(match, timestamp, ticks, damage, tokens) {
    //          return "[" + timestamp + "] [事件] Boss已被击败！你贡献了" + ticks + " ticks并造成了" + damage + "战斗伤害，获得了" + tokens + " Boss代币。";
    //      }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The boss was defeated by ([\d,]+) participants?! Rewards have been distributed\.$/,
     function(match, timestamp, participants) {
         return "[" + timestamp + "] [事件] Boss被" + participants + "名参与者击败！奖励已分配。";
     }],
    // ========== 狼王事件 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A chilling howl echoes across the plains, silencing the birds and sending a shiver down your spine\. The Alpha Wolf has begun its hunt, and all who dwell in the wild are now its prey\.$/,
     "[$1] [事件] 一声令人毛骨悚然的嚎叫回荡在平原上，使鸟儿寂静，让你脊背发凉。狼王已开始狩猎，所有居住在野外的人现在都是它的猎物。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Alpha Wolf, its hunt proving fruitless, melts back into the shadows of the forest\. It will return, hungrier than before\.$/,
     "[$1] [事件] 狼王的狩猎徒劳无功，它融回森林的阴影中。它会回来，比之前更加饥饿。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] With a final, mournful howl that echoes across the plains, the Alpha Wolf falls! ...$/,
     '[$1] [事件] 随着一声最终凄厉的嚎叫声...'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] With a final, mournful howl that echoes across the plains, the Alpha Wolf falls! The Great Hunt is over, and its lunar-touched essence is shared among the victorious hunters\.$/,
     "[$1] [事件] 随着一声最终、悲哀的嚎叫回荡在平原上，狼王倒下了！大型狩猎结束了，其月华精华被分享给胜利的猎人们。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Alpha Wolf endured the assault! A ([\d.]+)% consolation prize has been distributed\.$/,
     "[$1] [事件] 狼王承受住了攻击！$2% 的安慰奖已分配。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Alpha Wolf event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d.]+) Lunar Essence!$/,
     "[$1] [事件] 狼王事件已结束！您贡献了 $2 ticks 并获得了 $3 的分数，因此您获得了 $4 月华精华！"],

    // ========== 远古树人事件 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The ancient forest groans\. A colossal Treant, its bark as thick as a castle wall and its branches like siege weapons, has awoken! Its heartwood thrums with a primal power, challenging all who would dare to swing an axe\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [事件] 古老的森林在呻吟。一个巨大的树人，树皮厚如城堡墙壁，树枝如同攻城武器，已经苏醒！它的心材脉动着原始力量，挑战所有敢于挥斧之人。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] With a rustle of a thousand leaves, the Ancient Treant withdraws its roots, its ancient form melting back into the forest\. It will slumber and grow stronger\.$/,
     "[$1] [事件] 随着千叶的沙沙声，远古树人收回了它的根须，古老的身形融回森林。它将沉睡并变得更加强大。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A deafening crack echoes through the forest as the Ancient Treant finally falls! Its heartwood splinters, releasing a wave of life-giving energy and rewarding the woodcutters who brought it down\.$/,
     "[$1] [事件] 随着远古树人最终倒下，震耳欲聋的破裂声在森林中回荡！它的心材碎裂，释放出一波赋予生命的能量，奖励了将其砍倒的伐木工们。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Ancient Treant v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d.]+) Treant Resin!$/,
     "[$1] [事件] 远古树人 v2 事件已结束！您贡献了 $2 ticks 并获得了 $3 的分数，因此您获得了 $4 树人树脂！"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Ancient Treant v2 endured the assault! A (\d+)% consolation prize has been distributed\.$/,
     '[$1] [事件] 远古树人 v2 承受住了攻击！$2%的安慰奖已分配。'],

    //========== 深渊利维坦 ============
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A monstrous shadow darkens the coastal waters\. The Leviathan, a beast of myth and legend, has returned! Its scales shimmer with the wealth of the abyss, a tempting prize for the fleet of fishers who dare to face it\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [事件] 一个巨大的阴影使沿海水域变得黑暗。利维坦，一个神话传说中的野兽，已经回归！它的鳞片闪烁着深渊的财富，对于敢于面对它的渔船队来说是一个诱人的奖赏。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Leviathan has been defeated! You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) fishing damage, earning ([\d,]+\.\d+) Leviathan Scales\.$/,
     function(match, timestamp, ticks, damage, scales) {
         return "[" + timestamp + "] [事件] 利维坦已被击败！你贡献了" + ticks + " ticks并造成了" + damage + "钓鱼伤害，获得了" + scales + "利维坦鳞片。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] With a flick of its colossal tail, the Leviathan dives back into the crushing dark of the abyss, its treasures safe for now\. It will return when the tides are right\.$/,
     '[$1] [事件] 随着它巨大的尾巴一甩，利维坦潜回压迫的黑暗深渊中，它的宝藏暂时安全了。它将在潮汐合适时返回。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The great beast thrashes one last time before succumbing to the combined might of the fishing fleet! The Leviathan is defeated, and its precious scales are distributed among the victors\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [事件] 这头巨兽在屈服于渔船队的联合力量之前最后一次猛烈挣扎！利维坦被击败了，它珍贵的鳞片被分配给了胜利者。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Leviathan was defeated by ([\d,]+) participants?! Rewards have been distributed\.$/,
     function(match, timestamp, participants) {
         return "[" + timestamp + "] [事件] 利维坦被" + participants + "名参与者击败！奖励已分配。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Leviathan has left the area\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [事件] 利维坦已离开该区域。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Leviathan has returned to the depths, unchallenged\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [事件] 利维坦无人挑战，已返回深渊。";
     }],


    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The (.+?) was (.+?)! You contributed (\d+) ticks and dealt ([\d,]+\.\d+) (.+?) damage, earning ([\d,]+\.\d+) (.+?)\.$/,
     function(match, timestamp, bossName, action, ticks, damage, damageType, amount, resource) {
         // Boss名称映射
         const bossMap = {
             "Ancient Treant": "远古树人",
             "Runic Golem": "符文魔像",
             "Leviathan": "利维坦",
             "boss": "Boss"
         };

         // 动作映射
         const actionMap = {
             "felled": "砍倒",
             "shattered": "击碎",
             "defeated": "击败",
             "slain": "击杀"
         };

         // 伤害类型映射
         const damageTypeMap = {
             "chop": "砍击",
             "pick": "镐击",
             "fishing": "钓鱼",
             "battle": "战斗"
         };

         // 资源名称映射
         const resourceMap = {
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片",
             "Boss Tokens": "Boss代币"
         };

         const translatedBoss = bossMap[bossName] || bossName;
         const translatedAction = actionMap[action] || action;
         const translatedDamageType = damageTypeMap[damageType] || damageType;
         const translatedResource = resourceMap[resource] || resource;

         return "[" + timestamp + "] [事件] " + translatedBoss + "被" + translatedAction + "！你贡献了 " + ticks + " ticks并造成了 " + damage + " 点" + translatedDamageType + "伤害，获得了 " + amount + " 点" + translatedResource + "。";
     }],
    // ========== 符文魔像事件 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A low hum echoes from the quarry\. The earth trembles as a Runic Golem, larger and more powerful than any seen before, rises from the depths! Its core pulses with raw energy, daring artisans to test their mettle\.$/,
     "[$1] [事件] 采石场回荡着低沉的嗡鸣声。大地震颤，一个比以往任何都更巨大、更强大的符文魔像从深处升起！它的核心脉动着原始能量，挑战工匠们测试他们的勇气。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] With a final, resounding crack, the Runic Golem shatters! Its core explodes in a shower of arcane energy, rewarding the brave miners for their efforts\.$/,
     "[$1] [事件] 随着最后一声响亮的破裂声，符文魔像粉碎了！它的核心爆炸成一阵奥术能量雨，奖励了勇敢的矿工们的努力。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Runic Golem v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d,]+\.?\d*) Rune Shards!, tithed ([\d,]+\.?\d*)$/,
     function(match, timestamp, ticks, score, shards, tithed) {
         return "[" + timestamp + "] [事件] 符文魔像 v2 事件已结束！您贡献了 " + ticks + " ticks 并获得了 " + score + " 的分数，因此您获得了 " + shards + " 符文碎片！，税费扣除 " + tithed;
     }],
    //     [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Runic Golem v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d,]+\.\d+) Rune Shards!, tithed ([\d,]+\.\d+)$/,
    //      function(match, timestamp, ticks, score, shards, tithed) {
    //          return "[" + timestamp + "] [事件] 符文魔像 v2 事件已结束！您贡献了 " + ticks + " ticks 并获得了 " + score + " 的分数，因此您获得了 " + shards + " 符文碎片！，税费扣除 " + tithed;
    //      }],
    //     [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Runic Golem v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d.]+) Rune Shards!, tithed ([\d.]+)$/,
    //      function(match, timestamp, ticks, score, shards, tithed) {
    //          return "[" + timestamp + "] [事件] 符文魔像 v2 事件已结束！您贡献了 " + ticks + " ticks 并获得了 " + score + " 的分数，因此您获得了 " + shards + " 符文碎片！，税率扣除 " + tithed;
    //      }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Runic Golem v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d,]+\.?\d*) Rune Shards!$/,
     function(match, timestamp, ticks, score, shards) {
         return "[" + timestamp + "] [事件] 符文魔像 v2 事件已结束！您贡献了 " + ticks + " ticks 并获得了 " + score + " 的分数，因此您获得了 " + shards + " 符文碎片！";
     }],
    //     [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Runic Golem v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d\.]+) Rune Shards!$/,
    //      "[$1] [事件] 符文魔像 v2 事件已结束！您贡献了 $2 ticks 并获得了 $3 的分数，因此您获得了 $4 符文碎片！"],

    // ========== 利维坦事件 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A monstrous shadow darkens the coastal waters\. The Leviathan, a beast of myth and legend, has returned! Its scales shimmer with the wealth of the abyss, a tempting prize for the fleet of fishers who dare to face it\.$/,
     '[$1] [事件] 一个巨大的阴影笼罩了沿海水域。利维坦，神话传说中的野兽，已经回归！它的鳞片闪烁着深渊的财富，对于敢于面对它的渔夫船队来说，这是一个诱人的奖赏。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The great beast thrashes one last time before succumbing to the combined might of the fishing fleet! The Leviathan is defeated, and its precious scales are distributed among the victors\.$/,
     "[$1] [事件] 这头巨兽在屈服于渔船队的联合力量之前最后一次猛烈挣扎！利维坦被击败了，它珍贵的鳞片被分配给了胜利者。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The great beast thrashes one last time before succumbing to the combined might of the fishing fleet! The Leviathan is defeated, and its precious scales are distributed among the victors\.$/,
     '[$1] [事件] 这头巨兽在屈服于钓鱼船队的联合力量前最后一次猛烈挣扎！利维坦被击败了，其珍贵的鳞片在胜利者之间分配。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Leviathan from the Depths v2 event has ended! You contributed (\d+) ticks? and earned a score of ([\d,]+), earning you ([\d.]+) Leviathan Scale!$/,
     "[$1] [事件] 深渊利维坦 v2 事件已结束！您贡献了 $2 ticks 并获得了 $3 的分数，因此您获得了 $4 利维坦鳞片！"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The defenses have fallen! Goblins swarmed into town and pillaged (.+?), making off with 20% of its stores: \((.+?)\)\. We will rebuild as they return to their dank caves\.$/,
     function(match, timestamp, buildingName, stolenResources) {
         const buildingMap = {
             "Storage Barn": "仓库",
             "The Grand Library": "大图书馆",
             "Guild of Alchemists": "炼金师公会",
             "Masterwork Atelier": "杰作工作室"
         };

         let translatedResources = stolenResources
         .replace(/Iron bars/g, "铁锭")
         .replace(/Planks/g, "木板")
         .replace(/Gold bars/g, "金锭")
         .replace(/Rune shards/g, "符文碎片");

         return "[" + timestamp + "] [事件] 防御已崩溃！哥布林涌入城镇并洗劫了" +
             (buildingMap[buildingName] || buildingName) + "，带走了其20%的库存：(" +
             translatedResources + ")。我们将在他们返回潮湿洞穴时重建。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The outer walls have been breached! Town Defenses are at (\d+)%!$/,
     function(match, timestamp, defensePercent) {
         return timestamp + ' [事件] 外围城墙已被攻破！城镇防御力剩余 ' + defensePercent + '%。';
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The goblin horde is pushing forward! Town Defenses are at (\d+)%\.$/,
     function(match, timestamp, defensePercent) {
         return timestamp + ' [事件] 哥布林部落正在推进！城镇防御力剩余 ' + defensePercent + '%。';
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The town is in peril! Town Defenses have fallen to ([\d\.]+)%!$/,
     function(match, timestamp, defensePercent) {
         return "[" + timestamp + "] [事件] 城镇处于危险中！城镇防御力已降至" + defensePercent + "%！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You start to rebuild the town defenses$/,
     function(match, timestamp) {
         return timestamp + ' 你开始重建城镇防御工事';
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] Town Defenses restored to (\d+)%\.$/,
     function(match, timestamp, percent) {
         return "[" + timestamp + "] [事件] 城镇防御已恢复到" + percent + "%。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A thief is lurking in the shadows\.\.\.$/,
     '[$1] [事件] 一个小偷正在阴影中潜伏...'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] (A thief is lurking in the shadows\.\.\.|The Thief searched for valuable targets but couldn't find any, so he went home for the night\.|The Town Watch arrested the Thief! No items were stolen\.)$/,
     function(match) {
         const timestamp = match[1];
         const message = match[2];

         const messageMap = {
             'A thief is lurking in the shadows...': '一个小偷正在阴影中潜伏...',
             'The Thief searched for valuable targets but couldn\'t find any, so he went home for the night.': '小偷搜寻了有价值的目标但一无所获，于是他回家过夜了。',
             'The Town Watch arrested the Thief! No items were stolen.': '城镇守卫逮捕了小偷！没有物品被偷走。'
         };

         return `${timestamp} [事件] ${messageMap[message]}`;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Thief struck! A \[(.*?)\] (.+?) \(Lvl (\d+)\) was stolen from (.+)'s inventory!$/,
     function(match, timestamp, rarity, itemName, level, playerName) {
         const rarityMap = { "Poor": "劣质", "Common": "普通", "Uncommon": "罕见", "Rare": "稀有", "Epic": "史诗", "Legendary": "传说", "Unique": "独特", };
         const itemMap = { "Sword": "剑", "Pickaxe": "镐子", "Axe": "斧子", "Fishing Rod": "鱼竿", "Helm of Learning": "学问之盔", "CraftCrossbow": "手工弩", "Crossbow": "弩", };
         return "[" + timestamp + "] [事件] 小偷袭击！一件[" + (rarityMap[rarity] || rarity) + "]" + (itemMap[itemName] || itemName) + "（等级 " + level + "）从" + playerName + "的库存中被偷走了！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Thief struck! A \[(.*?)\] (.+?) was stolen from (.+)'s inventory!$/,
     function(match, timestamp, quality, itemName, playerName) {
         const qualityMap = { "Burnt": "烤焦", "Normal": "普通", "Fine": "优良", "Exquisite": "精美" };
         const foodMap = { "Grilled Fish": "烤鱼", "Fish Stew": "鱼汤", "Eel Broth": "鳗鱼汤" };
         return "[" + timestamp + "] [事件] 小偷袭击！一个[" + (qualityMap[quality] || quality) + "]" + (foodMap[itemName] || itemName) + "从" + playerName + "的库存中被偷走了！";
     }],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A Purchasing Agent has arrived at the market\.\.\.$/,
     '[$1] [事件] 一位采购代理已到达市场...'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Merchant has arrived! A (\[[^\]]+\]) ([^\(]+) \(Lvl (\d+)\) is up for auction!$/, function (match, timestamp, quality, itemType, level) {
        const qualityMap = {
            "[Poor]": "[劣质]",

        };
        const itemMap = {
            "Pickaxe": "镐子",
            "Axe": "斧子",
            "Sword": "剑",
            "Fishing Rod": "鱼竿",
        };

        const translatedQuality = qualityMap[quality] || quality;
        const translatedItem = itemMap[itemType.trim()] || itemType;

        return timestamp + ' [事件] 商人已到达！一件' + translatedQuality + translatedItem + '（等级' + level + '）正在拍卖！';
    }
    ],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Merchant has left\. The item was not sold\.$/,
     "[$1] [事件] 商人已离开。物品未售出。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A trade ship has arrived at the port! The captain is selling (.+) on the market\.$/,
     function(match, timestamp, resource) {
         const resourceMap = {
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Iron Bars": "铁锭",
             "Gold Bars": "金锭",
             "Planks": "木板",
             "Rune Shards": "符文碎片",
             "Prepared Fish": "加工鱼"
         };
         return timestamp + ' [事件] 一艘贸易船已抵达港口！船长正在市场上出售' + (resourceMap[resource] || resource) + '。';
     }],
    // 处理贸易船离开消息
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The trade ship has sailed away\.$/,
     "[$1] [事件] 贸易船已驶离。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Purchasing Agent was looking for (.+?) but couldn't find any within his price range\.$/,
     function(match, timestamp, resourceName) {
         const resourceMap = {
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭",
             "Planks": "木板",
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Boss Tokens": "Boss代币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片"
         };
         return "[" + timestamp + "] [事件] 采购代理正在寻找" + (resourceMap[resourceName] || resourceName) + "，但在他的价格范围内没有找到任何商品。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Purchasing Agent purchased (.+?) from (\d+) (?:different )?(seller|sellers), spending a total of ([\d,]+\.\d+) gold\.$/,
     function(match, timestamp, resource, sellerCount, sellerWord, totalGold) {
         const resourceMap = {
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭",
             "Planks": "木板",
             "Prepared Fish": "加工鱼"
         };
         const sellerText = sellerCount === "1" ? "个卖家" : "个不同的卖家";
         return timestamp + ' [事件] 采购代理从 ' + sellerCount + sellerText + '处购买了 ' + (resourceMap[resource] || resource) + '，总共花费了 ' + totalGold + ' 金币。';
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Purchasing Agent purchased (.+?) from (\d+) seller, spending a total of ([\d,]+\.\d+) gold\.$/,
     function(match, timestamp, resource, sellerCount, totalGold) {
         const resourceMap = {
             "Gold Bars": "金锭",
             "Planks": "木板",
             "Iron Ore": "铁矿石",
             "Iron Bars": "铁锭",
             "Rune Shards": "符文碎片",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Game Carcass": "猎物尸体",
             "Meat": "肉",
             "Jerky": "肉干",
             "Bolts": "弩箭",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Abyssal Eel": "深渊鳗鱼",
             "Antlers": "鹿角",
             "Leviathan Scales": "利维坦鳞片",
             "Treant Resin": "树人树脂",
             "Boss Tokens": "Boss代币",
             "Artisan's Marks": "工匠印记",
             "Lunar Essence": "月华精华"
         };
         const translatedResource = resourceMap[resource] || resource;
         return "[" + timestamp + "] [事件] 采购代理从" + sellerCount + "个卖家处购买了" + translatedResource + "，总共花费了" + totalGold + "金币。";
     }],

    // ========== 军阀事件 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] A war horn, deeper and more menacing than any heard before, sounds from the wastelands\. A legendary Warlord and their elite guard have appeared, seeking to challenge the town's greatest champions!$/,
     "[$1] [事件] 一声比以往任何都更深沉、更具威胁的战号从荒原响起。一位传奇军阀和他们的精英卫队已经出现，寻求挑战镇上最伟大的勇士！"],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] (A powerful boss has appeared!|An Ancient Treant emerges!|A Runic Golem awakens!|The Leviathan from the Depths has been sighted!) Join (?:the fight to earn rewards!|to harvest Treant Resin!|to shatter it for Rune Shards!)?$/,
     function(match) {
         const timestamp = match[1];
         const message = match[2];

         const messageMap = {
             'A powerful boss has appeared!': '一个强大的Boss出现了！',
             'An Ancient Treant emerges!': '一个远古树人出现了！',
             'A Runic Golem awakens!': '一个符文魔像苏醒了！',
             'The Leviathan from the Depths has been sighted!': '深渊利维坦已被发现！'
         };

         const joinMap = {
             'A powerful boss has appeared!': '加入战斗获取奖励！',
             'An Ancient Treant emerges!': '加入以收获树人树脂！',
             'A Runic Golem awakens!': '加入以击碎它获取符文碎片！',
             'The Leviathan from the Depths has been sighted!': '加入战斗获取奖励！'
         };

         return `${timestamp} [事件] ${messageMap[message]}${joinMap[message]}`;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Warlord falls! Their banner is torn, and their guard scatters\. The champions of the town have proven their strength and are rewarded with the spoils of war\.$/,
     "[$1] [事件] 军阀倒下了！他们的旗帜被撕裂，卫队四散而逃。镇上的勇士们证明了他们的力量，并获得了战利品作为奖励。"],

    // ========== 通用特殊Boss事件 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Boss Event v2 endured the assault! A (\d+)% consolation prize has been distributed\.$/,
     "[$1] [事件] Boss事件 v2 承受住了攻击！$2%的安慰奖已分配。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Runic Golem v2 endured the assault! A (\d+)% consolation prize has been distributed\.$/,
     '[$1] [事件] 符文魔像 v2 承受住了攻击！$2%的安慰奖已分配。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Leviathan from the Depths v2 endured the assault! A (\d+)% consolation prize has been distributed\.$/,
     '[$1] [事件] 深渊利维坦 v2 承受住了攻击！$2%的安慰奖已分配。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Ancient Treant v2 endured the assault! A (\d+)% consolation prize has been distributed\.$/,
     '[$1] [事件] 远古树人 v2 承受住了攻击！$2%的安慰奖已分配。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] You ready your gear and begin the journey to the front lines\.$/,
     "[$1] [事件] 你准备好装备，开始前往前线。"],

    //========================================🚩锦标赛🚩=========================================================
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Artisan's Tournament has begun! The chosen skill is (.+)\.$/,
     function(match, timestamp, skill) {
         const skillMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Cooking": "烹饪",
             "Crafting": "制作",
             "Hunting": "狩猎",
         };
         const translatedSkill = skillMap[skill] || skill;
         return "[" + timestamp + "] [事件] 工匠锦标赛已经开始！选定技能是" + translatedSkill + "。";
     }],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The (.+) Tournament has ended! Congratulations to the winners: (.+)$/,
     function(match, timestamp, skill, winners) {
         const skillMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Cooking": "烹饪",
             "Crafting": "制作",
             "Hunting": "狩猎",
         };
         const translatedSkill = skillMap[skill] || skill;
         return "[" + timestamp + "] [事件] " + translatedSkill + "锦标赛已结束！恭喜获胜者：" + winners;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The (.+?) Tournament has ended! There were no participants\. The mayor is furious!$/,
     function(match, timestamp, skill) {
         const skillMap = {
             "Crafting": "制作",
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Cooking": "烹饪"
         };

         const translatedSkill = skillMap[skill] || skill;

         return "[" + timestamp + "] [事件] " + translatedSkill + "锦标赛已结束！没有参与者。市长非常愤怒！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] Congratulations! You placed #(\d+) in the (.+?) Tournament, earning ([\d,]+\.?\d*) (.+?)!$/,
     function(match, timestamp, rank, skill, amount, resource) {
         const skillMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Cooking": "烹饪",
             "Crafting": "制作",
             "Hunting": "狩猎",
         };
         const resourceMap = {
             "Crystallized Anima": "生命结晶",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片",
             "Boss Tokens": "Boss代币",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Oceanic Essence": "海洋精华",
             "Artisan's Marks": "工匠印记",
             "Abyssal Eel": "深渊鳗鱼",
             "Lunar Essence": "月华精华",
         };

         const translatedSkill = skillMap[skill] || skill;
         const translatedResource = resourceMap[resource] || resource;

         return "[" + timestamp + "] [事件] 恭喜！你在" + translatedSkill + "锦标赛中获得了第" + rank + "名，赢得了" + amount + "个" + translatedResource + "！";
     }],
    //=====================================================🔥大熔炼🔥================================================================================
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Great Smeltdown has begun! The master smiths are calling for (.+?) to fuel the pyre!$/,
     function(match, timestamp, resource) {
         const resourceMap = {
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Logs": "木头",
             "Planks": "木板",
             "Iron Bars": "铁锭",
             "Gold Bars": "金锭"
         };
         const translatedResource = resourceMap[resource] || resource;
         return "[" + timestamp + "] [事件] 大熔炼已经开始！大师铁匠们正在征集" + translatedResource + "来为火堆添燃料！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Great Smeltdown has ended\. The forges cool and fall silent\.$/,
     '[$1] [事件] 大熔炼已结束。熔炉冷却并陷入寂静。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Great Smeltdown has begun! The master smiths are calling for (.+) to fuel the pyre!$/, function (match, timestamp, resource) {
        const resourceMap = {
            "Iron Ore": "铁矿石",
            "Gold": "金币",
            "Logs": "木头",
            "Planks": "木板",
            "Rune Shards": "符文碎片"
        };

        const translatedResource = resourceMap[resource] || resource;

        return timestamp + ' [事件] 大熔炼已经开始！大师铁匠们正在召唤' + translatedResource + '来为熔炉提供燃料！';
    }
    ],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] You contribute ([\d,]+) Gold to the Great Smeltdown\.$/,
     function(match, timestamp, goldAmount) {
         return "[" + timestamp + "] [事件] 你向大熔炼贡献了" + goldAmount + "金币。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] As the crucible cools, you discover a glimmer of pure Crystallized Anima! You received ([\d,]+)!$/,
     function(match, timestamp, amount) {
         return "[" + timestamp + "] [事件] 当坩埚冷却时，你发现了一缕纯净的生命结晶！你获得了" + amount + "个！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] You contribute ([\d,]+) Logs to the Great Smeltdown\.$/,
     function(match, timestamp, logsAmount) {
         return "[" + timestamp + "] [事件] 你向大熔炼贡献了" + logsAmount + "木头。";
     }],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] As the crucible cools, you discover a glimmer of pure Glimmerwood Sap! You received ([\d,]+)!$/,
     function(match, timestamp, amount) {
         return "[" + timestamp + "] [事件] 当坩埚冷却时，你发现了一缕纯净的微光树液！你获得了" + amount + "个！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] You contribute ([\d,]+) Iron Ore to the Great Smeltdown\.$/,
     function(match, timestamp, ironAmount) {
         return "[" + timestamp + "] [事件] 你向大熔炼贡献了" + ironAmount + "铁矿石。";
     }],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] As the crucible cools, you discover a glimmer of pure Starfall Ore! You received ([\d,]+)!$/,
     function(match, timestamp, amount) {
         return "[" + timestamp + "] [事件] 当坩埚冷却时，你发现了一缕纯净的星落矿石！你获得了" + amount + "个！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The materials are consumed by the intense heat, but nothing forms\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [事件] 材料被高温消耗了，但是什么都没有形成。";
     }],

    // ========== 特殊Boss：加入/离开 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] Attempting to join Special Bosses\.\.\. Your activity will update on the next tick\.$/,
     "[$1] [事件] 正在尝试加入特殊Boss... 您的活动将在下一个tick更新。"],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] Attempting to join (Boss Fight|Runic Golem|Ancient Treant|Leviathan)\.\.\.$/,
     function (match, timestamp, bossType) {
         const bossMap = {
             "Boss Fight": "Boss战",
             "Runic Golem": "符文魔像",
             "Ancient Treant": "远古树人",
             "Leviathan": "利维坦"
         };
         return timestamp + ' [事件] 正在尝试加入' + (bossMap[bossType] || bossType) + '...';
     }],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] Attempting to join the (.+?) fight\.\.\.$/,
     function (match, timestamp, bossType) {
         const bossMap = {
             "Boss": "Boss",
             "Runic Golem": "符文魔像",
             "Ancient Treant": "远古树人",
             "Leviathan": "利维坦"
         };
         const translatedBoss = bossMap[bossType] || bossType;
         return timestamp + ' [事件] 正在尝试加入' + translatedBoss + '战斗...';
     }],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] Attempting to join (.+?)\.\.\.$/,
     function (match, timestamp, bossType) {
         const bossMap = {
             "Boss Fight": "Boss战",
             "Runic Golem": "符文魔像",
             "Ancient Treant": "远古树人",
             "Leviathan": "利维坦"
         };
         const translatedBoss = bossMap[bossType] || bossType;
         return timestamp + ' [事件] 正在尝试加入' + translatedBoss + '...';
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] Leaving Special Bosses\.\.\. Your activity will update on the next tick\.$/,
     "[$1] [事件] 正在离开特殊Boss... 您的活动将在下一个tick更新。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Special Bosses event is not active\. Your join request was ignored\.$/,
     "[$1] [事件] 特殊Boss事件未激活。您的加入请求已被忽略。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Returning to prior activity: (.+)$/,
     function(match, timestamp, activity) {
         const activityMap = {
             "BuildDefenses": "建造防御工事",
             "Fishing": "钓鱼",
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗"
             // 可以添加更多活动映射
         };

         const translatedActivity = activityMap[activity] || activity;
         return timestamp + ' 返回先前活动: ' + translatedActivity;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Returning to prior activity: (.+)$/,
     function(match, timestamp, activity) {
         const activityMap = {
             "BuildDefenses": "建造防御工事",
             "Fishing": "钓鱼",
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗"
         };
         return timestamp + ' 返回先前活动: ' + (activityMap[activity] || activity);
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Switched to (.+)\.$/,
     function(match, timestamp, activity) {
         const activityMap = {
             "Fishing": "钓鱼",
             "IronBars": "铁锭",
             "Planks": "木板",
             "GoldBars": "金锭",
             "Hunting": "狩猎",
             "PrepareFish": "烹制鱼",
             "FletchBolts": "制作弩箭",
             "Pickaxe": "镐子",
         };
         const translatedActivity = activityMap[activity] || activity;
         return timestamp + ' 切换到' + translatedActivity + '。';
     }],
    // 完成他人订单消息
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Orders\] You filled an order for (.+) for (\d+) x \[(Poor|Common|Uncommon|Rare|Epic|Legendary|Unique)\] (.+) \(Lvl (\d+)\) and received ([\d,]+\.\d+) gold \(after ([\d,]+\.\d+) tax\)\.$/,
     function(match, timestamp, playerName, quantity, rarity, itemName, level, receivedGold, taxAmount) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         const itemMap = {
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] [订单] 您完成了 " + playerName + " 的订单，提供了 " + quantity + " x [" + translatedRarity + "] " + translatedItem + "（等级 " + level + "），获得了 " + receivedGold + " 金币（扣除 " + taxAmount + " 税费后）。";
     }],
    // 制作订单完成消息 - 包含订单标签和玩家名称，非常具体
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Orders\] Your crafting order was filled by (.+) for (\d+) x \[(Poor|Common|Uncommon|Rare|Epic|Legendary|Unique)\] (.+) \(Lvl (\d+)\)\. It is now available for pickup in the Orders tab\.$/,
     function(match, timestamp, playerName, quantity, rarity, itemName, level) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         const itemMap = {
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] [订单] 您的制作订单已被 " + playerName + " 完成，物品为 " + quantity + " x [" + translatedRarity + "] " + translatedItem + "（等级 " + level + "）。现在可以在订单标签页中领取。";
     }],

    // 磨刀成功消息 - 包含磨刀石和工具等级，比较具体
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Sharpened your Level (\d+) \[(Poor|Common|Uncommon|Rare|Epic|Legendary|Unique)\] (.+) using a Sharpening Stone \(Level (\d+)\)\.$/,
     function(match, timestamp, toolLevel, rarity, toolName, stoneLevel) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         const toolMap = {
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩"
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedTool = toolMap[toolName] || toolName;

         return "[" + timestamp + "] 使用磨刀石（等级 " + stoneLevel + "）打磨了您的 等级 " + toolLevel + " [" + translatedRarity + "] " + translatedTool + "。";
     }],

    // 制作成功消息 - 包含制作经验和加成详情
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Crafted a Level (\d+) \[(Common|Uncommon|Rare|Epic|Legendary)\] (.+?)! You gained (\d+) Crafting XP \((.+?)\)\. It has been placed in your inventory\.$/,
     function(match, timestamp, level, rarity, itemName, xp, bonusDetail) {
         const rarityMap = {
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说"
         };

         const itemMap = {
             "Axe": "斧子",
             "Sword": "剑",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };

         // 翻译加成描述
         const bonusMap = {
             "helm": "头盔",
             "building": "建筑",
             "event": "事件"
         };

         // 处理加成描述中的装备名称
         let translatedBonus = bonusDetail;
         for (const [en, cn] of Object.entries(bonusMap)) {
             translatedBonus = translatedBonus.replace(en, cn);
         }

         return "[" + timestamp + "] 制作了一个 等级" + level + " [" + (rarityMap[rarity] || rarity) + "] " +
             (itemMap[itemName] || itemName) + "！你获得了 " + xp + " 制作经验值（" +
             translatedBonus + "）。它已被放入你的背包。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Moved (\d+) x \[(Poor|Common|Uncommon|Rare|Epic|Legendary|Unique)\] (.+) \(Lvl (\d+)\) from the strongbox to your inventory\.$/,
     function(match, timestamp, quantity, rarity, itemName, level) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         const itemMap = {
             "Fishing Rod": "鱼竿",
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };

         return "[" + timestamp + "] 从储物箱移动了 " + quantity + " x [" + (rarityMap[rarity] || rarity) + "] " + (itemMap[itemName] || itemName) + "（等级 " + level + "）到您的库存。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Moved (\d+) x (\[.*?\]) (.+?) to your locker\.$/,
     function(match, timestamp, quantity, quality, itemName) {
         // 翻译食物品质
         const qualityMap = {
             "[Exquisite]": "[精美]",
             "[Fine]": "[优良]",
             "[Normal]": "[普通]",
             "[Burnt]": "[烤焦]"
         };

         // 翻译食物名称
         const foodMap = {
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Eel Broth": "鳗鱼汤",
             "Jerky": "肉干"
         };

         const translatedQuality = qualityMap[quality] || quality;
         const translatedFood = foodMap[itemName] || itemName;

         return "[" + timestamp + "] 已将 " + quantity + " x " + translatedQuality + " " + translatedFood + " 移动到您的储物柜。";
     }],

    // 自动拆解消息 - 包含拆解和资源获取
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Auto-scrapped old (.+?) and received (.+)\.$/,
     function(match, timestamp, itemName, resources) {
         const itemMap = {
             "Axe": "斧子",
             "Sword": "剑",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };

         // 翻译资源名称
         const resourceMap = {
             "Gold Bars": "金锭",
             "Planks": "木板",
             "Iron Ore": "铁矿石",
             "Iron Bars": "铁锭",
             "Rune Shards": "符文碎片",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Game Carcass": "猎物尸体",
             "Meat": "肉",
             "Jerky": "肉干",
             "Bolts": "弩箭",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Abyssal Eel": "深渊鳗鱼",
             "Antlers": "鹿角",
             "Leviathan Scales": "利维坦鳞片",
             "Treant Resin": "树人树脂",
             "Boss Tokens": "Boss代币",
             "Artisan's Marks": "工匠印记",
             "Lunar Essence": "月华精华"
         };

         // 翻译资源列表
         let translatedResources = resources;
         for (const [en, cn] of Object.entries(resourceMap)) {
             translatedResources = translatedResources.replace(new RegExp(en, 'g'), cn);
         }

         return "[" + timestamp + "] 自动拆解了旧 " + (itemMap[itemName] || itemName) + " 并获得了 " + translatedResources + "。";
     }],

    // 装备消息 - 相对通用但仍包含装备动作
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Equipped Level (\d+) \[(Unique|Common|Uncommon|Rare|Epic|Legendary)\] (.+)\.$/,
     function(match, timestamp, level, rarity, itemName) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         const itemMap = {
             "Helm of Learning": "学问之盔",
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Resilience": "坚韧印记",
         };

         return "[" + timestamp + "] 装备了 等级" + level + " [" + (rarityMap[rarity] || rarity) + "] " +
             (itemMap[itemName] || itemName) + "。";
     }],

    // 物品可用消息 - 通用格式，放在较后位置
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[(Poor|Common|Uncommon|Rare|Epic|Legendary|Unique)\] Lvl (\d+) \((\d+) avail\)$/,
     function(match, timestamp, rarity, level, quantity) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         return "[" + timestamp + "] [" + (rarityMap[rarity] || rarity) + "] 等级 " + level + " (" + quantity + "可用)";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Refining\] You refined ([\d,]+\.\d+) (.+?) into ([\d,]+\.\d+) (.+?) and gained ([\d,]+\.\d+) Crafting XP \((.+)\)\.$/,
     function(match, timestamp, inputAmount, inputResource, outputAmount, outputResource, totalXP, xpDetails) {
         const resourceMap = {
             "Gold": "金币",
             "Gold Bars": "金锭",
             "Iron Ore": "铁矿石",
             "Iron Bars": "铁锭",
             "Logs": "木头",
             "Planks": "木板",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Game Carcass": "猎物尸体",
             "Meat": "肉"
         };

         // 翻译资源名称
         const translatedInput = resourceMap[inputResource] || inputResource;
         const translatedOutput = resourceMap[outputResource] || outputResource;

         // 翻译经验值加成详情
         let translatedDetails = xpDetails
         .replace(/event \+(\d+) XP/gi, "事件 +$1 经验值")
         .replace(/helm \+(\d+) XP/gi, "头盔 +$1 经验值")
         .replace(/building \+(\d+) XP/gi, "建筑 +$1 经验值")
         .replace(/, /g, "，");

         return "[" + timestamp + "] [精炼] 您将 " + inputAmount + " " + translatedInput + " 精炼成 " + outputAmount + " " + translatedOutput + "，并获得了 " + totalXP + " 制作经验值（" + translatedDetails + "）。";
     }],

    // 购买磨刀石消息 - 简单购买动作
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Purchased a Sharpening Stone \(Level (\d+)\)\.$/,
     "[$1] 购买了一个磨刀石（等级 $2）。"],
    [/^Level (\d+) \[(.*)\]$/,
     function(match, level, attributes) {
         return "等级 " + level + " [" + attributes + "]";
     }],
    [/^Multiplies rare find chance by (\d+)x$/,
     function(match, multiplier) {
         return "稀有物品发现几率提高 " + multiplier + " 倍";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Crafting\] You fletched ([\d,]+\.\d+) Bolts and gained (\d+) Crafting XP\.$/,
     "[$1] [制作] 你制作了 $2 弩箭并获得了 $3 制作经验值。"],
    // 装备失败消息 - 错误消息，放在最后
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Equip failed: item was not found in your inventory\. It may have been moved or removed\.$/,
     "[$1] 装备失败：物品未在您的库存中找到。它可能已被移动或移除。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Community\] The Order of the Quill reached Level (\d+)! Votes have been cleared for this building type\.$/,
     "[$1] [社区] 羽笔会 达到 $2 级！此建筑类型的投票已清除。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Finished crafting queue for Scroll of Mastery\.$/,
     "[$1] 完成精通卷轴制作队列。"],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Crafting\] Your inscription failed, but you recovered ([\d,]+) Planks and gained ([\d,]+) Inscription XP\.$/,
     "[$1] [制作] 你的铭文制作失败了，但你回收了 $2 木板并获得了 $3 铭文经验。"],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Crafting\] You successfully crafted a Scroll of Mastery and gained ([\d,]+) Inscription XP\.$/,
     "[$1] [制作] 你成功制作了一个精通卷轴并获得了 $2 铭文经验。"],
    // 精通升级成功消息
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Mastery\] Successfully upgraded (.+) power to Level (\d+) for (\d+) SOMs\.$/,
     function(match, timestamp, skillType, level, cost) {
         const skillMap = {
             "Battler": "战斗者",
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Fishing": "钓鱼",
             "Hunting": "狩猎",
             "Refining": "精炼"
         };

         return "[" + timestamp + "] [精通] 成功将" + (skillMap[skillType] || skillType) + "力量提升到等级 " + level + "，消耗 " + cost + " 精通卷轴。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon\] Joined party #([\d,]+) as (.+)\.$/,
     function(match, timestamp, partyId, role) {
         const roleMap = {
             "battler": "战斗者",
             "miner": "矿工",
             "woodcutter": "伐木工",
             "Hunter": "猎人",
             "Fisher": "渔夫",
         };

         return "[" + timestamp + "] [地下城] 加入队伍 #" + partyId + " 作为 " + (roleMap[role] || role) + "。";
     }],
    // 处理未知错误消息
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Unknown error$/,
     "[$1] 未知错误"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Error: Unknown error$/,
     "[$1] 错误: 未知错误"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] There is no active auction\.$/, '[$1] 当前没有活跃的拍卖。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon\] Party not found\.$/,
     "[$1] [地下城] 队伍未找到。"],
    [/^Each level provides (\d+) shared item slots for the Conclave\.$/,
     "每个等级为公会提供 $1 个共享物品栏位。"],
    // 储物柜功能描述正则规则
    [/^Provides (\d+) slots to store items, keeping them safe from the Thief\.$/,
     "提供 $1 个栏位来存放物品，保护它们免受小偷的侵害。"],
    // 公会消息数量显示
    [/^Conclave \((\d+)\)$/,
     "公会 ($1)"],
    [/^Marketplace \((\d+)\)$/, '市场 ($1)'],
    [/^\(Requires (\d+) completions\)$/, "（需要完成$1次）"],
    [/^Inscription Lvl (\d+)$/, "铭文 等级$1"],
    [/^Order of the Quill Lvl (\d+)$/, "羽笔会 等级$1"],
    // 当前等级显示
    [/^Current Level: (\d+) \(\+(\d+)%\)$/,
     "当前等级: $1 (+$2%)"],
    // 重置精通消耗显示
    [/^Reset All Masteries for (\d+) SOMs$/,
     "重置所有精通，花费 $1 精通卷轴"],
    // ========== 时间格式 ==================================================================================================================

    // 时间相关正则规则排序（从具体到通用）

    // 1. 最具体的完整格式（带标签和完整时间）
    [/^(\d+)d:(\d+)h:(\d+)m:(\d+)s$/, '$1天$2时$3分$4秒'],
    [/^Time to storage cap: (\d+)d:(\d+)h:(\d+)m:(\d+)s$/,
     "达到存储上限时间: $1天:$2时:$3分:$4秒"],

    [/^Time to Lvl: (\d+)d:(\d+)h:(\d+)m:(\d+)s$/,
     "升级时间: $1天:$2时:$3分:$4秒"],

    [/^XP\/tick: ([\d,]+(?:\.\d+)?)  •  XP\/hr: ([\d,]+)  •  XP\/day: ([\d,]+)  •  Time to Lvl: (\d+)d:(\d+)h:(\d+)m:(\d+)s$/,
     '每刻经验：$1 • 每小时经验：$2 • 每日经验：$3 • 升级时间：$4天$5小时$6分$7秒'],

    // 2. 带标签的复杂格式
    [/^Time spent: (\d+d):(\d+h):(\d+m):(\d+s)  •  Ticks spent: ([\d,]+)$/,
     function(_, days, hours, minutes, seconds, ticks) {
         return `花费时间：${days.replace('d', '天')}:${hours.replace('h', '时')}:${minutes.replace('m', '分')}:${seconds.replace('s', '秒')}  •  花费ticks：${ticks}`;
     }],

    [/^Time to deplete input: (\d+d:\d+h:\d+m:\d+s)$/,
     function(_, time) {
         return "输入耗尽时间：" + time.replace(/(\d+)d:(\d+)h:(\d+)m:(\d+)s/, '$1天:$2时:$3分:$4秒');
     }],

    // 3. 带标签的中等复杂度格式
    [/^Time to Lvl: (\d+)h:(\d+)m:(\d+)s$/,
     "升级时间: $1时:$2分:$3秒"],

    [/^Time to Lvl: (\d+)m:(\d+)s$/,
     "升级时间: $1分:$2秒"],

    [/^Time to Lvl: (\d+)h (\d+)m$/,
     "升级时间: $1小时$2分钟"],

    [/^Time to Lvl: (\d+)\s*h\s*(\d+)\s*m$/,
     "升级时间: $1小时$2分钟"],

    // 4. 带标签的简单格式
    [/^Time to Lvl: (\d+)h$/,
     "升级时间: $1小时"],

    [/^Time to Lvl: (\d+)m$/,
     "升级时间: $1分"],

    [/^Time to Lvl: (\d+)s$/,
     "升级时间: $1秒"],

    [/^Time to Lvl: —$/,
     "升级时间: —"],

    [/^Time to storage cap: DDd:HHh:MMm:SSs$/,
     '达到存储上限时间：DD天:HH时:MM分:SS秒'],

    // 5. 时间描述格式
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/,
     '$1 小时 $2 分钟 $3 秒'],

    [/^Wait\.\.\.(\d+)$/,
     '等待...$1'],

    [/^Last updated: (.+)$/,
     function(match, timestamp) {
         return "最后更新：" + timestamp;
     }],

    // 6. 时间间隔格式
    [/^(\d+) seconds? ago$/,
     function(match, seconds) {
         return seconds + "秒前";
     }],

    [/^(\d+) minutes? ago$/,
     function(match, minutes) {
         return minutes + "分钟前";
     }],

    [/^(\d+) hours? ago$/,
     function(match, hours) {
         return hours + "小时前";
     }],

    [/^(\d+) days? ago$/,
     function(match, days) {
         return days + "天前";
     }],

    [/^(\d+) days ago$/,
     '$1天前'],

    // 时间格式 - 从复杂到简单排列
    [/^(\d+)d (\d+)h (\d+)m (\d+)s$/,
     "$1天$2小时$3分$4秒"],

    [/^(\d+)d (\d+)h (\d+)m$/,
     "$1天$2小时$3分"],

    [/^(\d+)d (\d+)h$/,
     "$1天$2小时"],

    [/^(\d+)h (\d+)m (\d+)s$/,
     "$1小时$2分$3秒"],

    [/^(\d+)h (\d+)m$/,
     "$1小时$2分"],

    [/^(\d+)m (\d+)s$/,
     "$1分$2秒"],

    [/^(\d+)d$/,
     "$1天"],

    [/^(\d+)h$/,
     "$1小时"],

    [/^(\d+)m$/,
     "$1分"],

    [/^(\d+)s$/,
     "$1秒"],

    // 中文单位格式（已经汉化的格式）
    [/^(\d+)小时(\d+)分钟$/,
     "$1小时$2分钟"],

    [/^(\d+)分(\d+)秒$/,
     "$1分$2秒"],

    // 8. 通用时间单位替换（作为后备，放在最后）
    [/ (\d+)d:/g, " $1天:"],
    [/ (\d+)h:/g, " $1时:"],
    [/ (\d+)m:/g, " $1分:"],
    [/ (\d+)s$/g, " $1秒"],
    [/ (\d+)d$/g, " $1天"],
    [/ (\d+)h$/g, " $1时"],
    [/ (\d+)m$/g, " $1分"],

    // ========== 点数与精灵 ==========
    [/^([+-]?[\d.]+)%$/, '$1%'],
    [/^\/ (\d+)$/, '/ $1'], // 实际上这个不需要翻译，保持原样
    [/^\+([\d.]+)% Fishing Catch Chance & Hunting Hit Chance$/, '+$1% 钓鱼捕获几率 & 狩猎命中几率'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You scavenged ([\d\.]+) (.+?), ([\d\.]+) (.+?), ([\d\.]+) (.+?), and ([\d\.]+) (.+)\.$/,
     function(match, a1, r1, a2, r2, a3, r3, a4, r4) {
         const map = {
             "Iron Ore": "铁矿石",
             "Logs": "木头",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Game Carcass": "猎物尸体"
         };
         const t = (r) => map[r] || r;
         return `你拾荒获得了 ${a1} ${t(r1)}, ${a2} ${t(r2)}, ${a3} ${t(r3)}, 和 ${a4} ${t(r4)}。`;
     }],

    // 添加拾荒消息的汉化
    [/^You scavenged ([\d\.]+) Logs, ([\d\.]+) Gold, and ([\d\.]+) Raw Fish\.$/,
     function(match, logsAmount, goldAmount, fishAmount) {
         return "你拾荒获得了 " + logsAmount + " 木头, " + goldAmount + " 金币, 和 " + fishAmount + " 生鱼。";
     }],

    // 通用的拾荒消息正则表达式（处理可能的资源组合变化）
    [/^You scavenged ([\d\.]+) (.+?), ([\d\.]+) (.+?), and ([\d\.]+) (.+)\.$/,
     function(match, amount1, resource1, amount2, resource2, amount3, resource3) {
         // 资源名称映射
         const resourceMap = {
             "Logs": "木头",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Iron Ore": "铁矿石"
         };

         const translatedResource1 = resourceMap[resource1] || resource1;
         const translatedResource2 = resourceMap[resource2] || resource2;
         const translatedResource3 = resourceMap[resource3] || resource3;

         return "你拾荒获得了 " + amount1 + " " + translatedResource1 + ", " + amount2 + " " + translatedResource2 + ", 和 " + amount3 + " " + translatedResource3 + "。";
     }],

    // 处理只有两种资源的拾荒消息
    [/^You scavenged ([\d\.]+) (.+?) and ([\d\.]+) (.+)\.$/,
     function(match, amount1, resource1, amount2, resource2) {
         const resourceMap = {
             "Logs": "木头",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Iron Ore": "铁矿石"
         };

         const translatedResource1 = resourceMap[resource1] || resource1;
         const translatedResource2 = resourceMap[resource2] || resource2;

         return "你拾荒获得了 " + amount1 + " " + translatedResource1 + " 和 " + amount2 + " " + translatedResource2 + "。";
     }],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+(?:\.\d+)?) (Iron Bars|Planks|Gold Bars|Boss Tokens|Treant Resin|Rune Shards|Starfall Ore|Glimmerwood Sap|Crystallized Anima|Oceanic Essence|Leviathan Scales|Gold|Antlers|Artisan's Marks|Lunar Essence)$/,
     function(match, amount, resource) {
         const resourceMap = {
             "Iron Bars": "铁锭",
             "Planks": "木板",
             "Gold Bars": "金锭",
             "Gold": "金币",
             "Boss Tokens": "Boss代币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Leviathan Scales": "利维坦鳞片",
             "Antlers": "鹿角",
             "Artisan's Marks": "工匠印记",
             "Lunar Essence": "月华精华",
         };
         return amount + " " + (resourceMap[resource] || resource);
     }],
    [/^Scrap Value$/, '回收价值'],
    [/^([\d,]+\.\d+) Starfall Ore, ([\d,]+\.\d+) Glimmerwood Sap, ([\d,]+\.\d+) Crystallized Anima$/,
     function(match, starfallOre, glimmerwoodSap, crystallizedAnima) {
         return starfallOre + " 星落矿石, " + glimmerwoodSap + " 微光树液, " + crystallizedAnima + " 生命结晶";
     }],
    // 特殊消耗品---反符文
    // 整数格式的稀有资源组合（没有小数点）
    [/^(\d+) Starfall Ore, (\d+) Glimmerwood Sap, (\d+) Crystallized Anima$/,
     function(match, starfallOre, glimmerwoodSap, crystallizedAnima) {
         return starfallOre + " 星落矿石, " + glimmerwoodSap + " 微光树液, " + crystallizedAnima + " 生命结晶";
     }],

    // 混合格式的稀有资源组合（有些有小数点，有些没有）
    [/^([\d,]+(?:\.\d+)?) Starfall Ore, ([\d,]+(?:\.\d+)?) Glimmerwood Sap, ([\d,]+(?:\.\d+)?) Crystallized Anima$/,
     function(match, starfallOre, glimmerwoodSap, crystallizedAnima) {
         return starfallOre + " 星落矿石, " + glimmerwoodSap + " 微光树液, " + crystallizedAnima + " 生命结晶";
     }],

    // ========== 欢迎与离线消息 ==========
    [/^Welcome back, (.+). The scribes are reviewing the workshop's logs to account for your time away. Please wait...$/, '欢迎回来，$1。抄写员正在查看研讨会的日志以记录你离开的时间。请稍等…'],
    [/Increases max offline time to (\d+) hours?\./, '将最大离线时间增加到$1小时。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Welcome back, (.*?)! Your workshop ran for (.+?) in your absence\.$/,
     function(match, timestamp, playerName, timeExpression) {
         const timeUnitMap = {
             "minute": "分钟",
             "minutes": "分钟",
             "hour": "小时",
             "hours": "小时",
             "day": "天",
             "days": "天"
         };
         let translatedTime = timeExpression.replace(/(\d+)\s*(minutes?|hours?|days?)/g,
                                                     function(match, number, unit) {
             const translatedUnit = timeUnitMap[unit] || unit;
             return number + translatedUnit;
         });
         translatedTime = translatedTime.replace(/\s+and\s+/g, "");
         translatedTime = translatedTime.replace(/,/g, "");
         translatedTime = translatedTime.replace(/\s+/g, "");
         return "[" + timestamp + "] 欢迎回来，" + playerName + "！您的工作室在您离开期间运行了 " + translatedTime + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Welcome back, (.+)! Your workshop ran for (\d+) hours in your absence\.$/,
     function(match, timestamp, playerName, hours) {
         return "[" + timestamp + "] 欢迎回来，" + playerName + "！你的工坊在你离开期间运行了 " + hours + " 小时。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Welcome back, (.+)! Your workshop ran for (\d+) hours and (\d+) minutes in your absence\.$/,
     function(match, timestamp, playerName, hours, minutes) {
         return "[" + timestamp + "] 欢迎回来，" + playerName + "！你的工坊在你离开期间运行了 " + hours + " 小时 " + minutes + " 分钟。";
     }],
    // 在 cnRegReplace 中添加：
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Error: You already have an active order for this item type\.$/,
     '[$1] 错误：您已经有一个此物品类型的活跃订单。'],

    // ========== 贡献与资源 ==========
    [/^Contribute (.+) Logs$/, '贡献 $1 木头'],
    [/^Contribute (.+) Iron Ore$/, '贡献 $1 铁矿石'],
    [/^Antlers: ([\d\.]+)$/, "鹿角: $1"],
    // ========== 后缀与资源 ==========
    [/^([\d\.,]+)\/sec$/, '$1/秒'],
    [/^([\d,]+\.?\d*)k$/i, '$1千'],
    [/^(\d+) pts$/, "$1 分"],
    [/^(\d+) gathering actions$/, '$1次采集行动'],
    [/^([\d,]+) pts$/,
     function(match, points) {
         return points + " 点数";
     }],
    [/^([\d,]+) pts$/, '$1 点数'],

    [/^(Base Power|Planks|Gold Bars|Iron Bars|Oceanic Essence|Iron Ore|Logs|Gold|Treant Resin|Rune Shards|Boss Tokens|Leviathan Scales|Starfall Ore|Glimmerwood Sap|Crystallized Anima|Prepared Fish|Raw Fish|Antlers|Game Carcass|Meat|Jerky|Bolts): ([\d,]+(?:\.\d+)?)$/,
     function(match, resource, amount) {
         const resourceMap = {
             "Base Power": "基础力量",
             "Planks": "木板",
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭",
             "Oceanic Essence": "海洋精华",
             "Iron Ore": "铁矿石",
             "Logs": "木头",
             "Gold": "金币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Boss Tokens": "Boss代币",
             "Leviathan Scales": "利维坦鳞片",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Prepared Fish": "加工鱼",
             "Raw Fish": "生鱼",
             "Antlers": "鹿角",
             "Game Carcass": "猎物尸体",
             "Meat": "肉",
             "Jerky": "肉干",
             "Bolts": "弩箭"
         };
         return (resourceMap[resource] || resource) + ": " + amount;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Orders\] Your crafting order for (.*?) has expired\. Your ([\d,]+\.\d+) gold has been refunded\.$/,
     function(match, timestamp, itemDescription, refundAmount) {
         // 处理物品描述中的品质和名称
         let translatedItem = itemDescription;

         // 尝试匹配带等级的物品格式 [品质] 物品名 (Lvl 等级)
         const itemMatchWithLevel = itemDescription.match(/^\[(.*?)\] (.+?) \(Lvl (\d+)\)$/);
         if (itemMatchWithLevel) {
             const [_, quality, itemName, level] = itemMatchWithLevel;

             const qualityMap = {
                 "Epic": "史诗",
                 "Legendary": "传说",
                 "Rare": "稀有",
                 "Uncommon": "罕见",
                 "Common": "普通",
                 "Poor": "劣质",
                 "Unique": "独特",
                 "Burnt": "烤焦",
                 "Normal": "普通",
                 "Fine": "优良",
                 "Exquisite": "精美"
             };

             const itemMap = {
                 "Pickaxe": "镐子",
                 "Axe": "斧子",
                 "Sword": "剑",
                 "Fishing Rod": "鱼竿",
                 "Helm of Learning": "学问之盔",
                 "CraftCrossbow": "手工弩",
                 "Crossbow": "弩",
                 "Grilled Fish": "烤鱼",
                 "Fish Stew": "鱼汤",
                 "Eel Broth": "鳗鱼汤",
                 "Cornbread": "玉米面包",
                 "Apple Cider": "苹果酒",
                 "Potato Blaster": "土豆爆破器",
                 "Potato-Blaster": "土豆爆破器"
             };

             const translatedQuality = qualityMap[quality] || quality;
             const translatedItemName = itemMap[itemName] || itemName;

             translatedItem = "[" + translatedQuality + "]" + translatedItemName + "（等级 " + level + "）";
         } else {
             // 尝试匹配不带等级的物品格式 [品质] 物品名
             const itemMatchWithoutLevel = itemDescription.match(/^\[(.*?)\] (.+?)$/);
             if (itemMatchWithoutLevel) {
                 const [_, quality, itemName] = itemMatchWithoutLevel;

                 const qualityMap = {
                     "Epic": "史诗",
                     "Legendary": "传说",
                     "Rare": "稀有",
                     "Uncommon": "罕见",
                     "Common": "普通",
                     "Poor": "劣质",
                     "Unique": "独特",
                     "Burnt": "烤焦",
                     "Normal": "普通",
                     "Fine": "优良",
                     "Exquisite": "精美"
                 };

                 const itemMap = {
                     "Pickaxe": "镐子",
                     "Axe": "斧子",
                     "Sword": "剑",
                     "Fishing Rod": "鱼竿",
                     "Helm of Learning": "学问之盔",
                     "CraftCrossbow": "手工弩",
                     "Crossbow": "弩",
                     "Grilled Fish": "烤鱼",
                     "Fish Stew": "鱼汤",
                     "Eel Broth": "鳗鱼汤",
                     "Cornbread": "玉米面包",
                     "Apple Cider": "苹果酒",
                     "Potato Blaster": "土豆爆破器",
                     "Potato-Blaster": "土豆爆破器"
                 };

                 const translatedQuality = qualityMap[quality] || quality;
                 const translatedItemName = itemMap[itemName] || itemName;

                 translatedItem = "[" + translatedQuality + "]" + translatedItemName;
             }
         }

         return "[" + timestamp + "] [订单] 您的制作订单 " + translatedItem + " 已过期。您的 " + refundAmount + " 金币已退还。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Orders\] Canceled crafting order for (\d+)x \[(.*?)\] (.+?)\. Refunded ([\d,]+\.\d+) gold\.$/,
     function(match, timestamp, quantity, quality, itemName, refundAmount) {
         // 品质映射
         const qualityMap = {
             "Exquisite": "精美",
             "Fine": "优良",
             "Normal": "普通",
             "Burnt": "烤焦",
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         // 物品名称映射
         const itemMap = {
             "Eel Broth": "鳗鱼汤",
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Resilience": "坚韧印记",
         };

         const translatedQuality = qualityMap[quality] || quality;
         let translatedItem = itemMap[itemName] || itemName;

         // 处理带等级的物品名称
         const levelMatch = itemName.match(/\(Lvl (\d+)\)/);
         if (levelMatch) {
             const baseName = itemName.replace(/ \(Lvl \d+\)/, '');
             const level = levelMatch[1];
             const translatedBaseName = itemMap[baseName] || baseName;
             translatedItem = translatedBaseName + "（等级 " + level + "）";
         }

         return "[" + timestamp + "] [订单] 已取消制作订单，取消 " + quantity + "x [" + translatedQuality + "]" + translatedItem + "。退还 " + refundAmount + " 金币。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Orders\] You have placed a crafting order for (\d+)x \[(.*?)\] (.+?)\. Reserved ([\d,]+\.\d+) gold\.$/,
     function(match, timestamp, quantity, quality, itemName, reservedAmount) {
         // 品质映射
         const qualityMap = {
             "Exquisite": "精美",
             "Fine": "优良",
             "Normal": "普通",
             "Burnt": "烤焦",
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         // 物品名称映射
         const itemMap = {
             "Eel Broth": "鳗鱼汤",
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Resilience": "坚韧印记",
         };

         const translatedQuality = qualityMap[quality] || quality;
         let translatedItem = itemMap[itemName] || itemName;

         // 处理带等级的物品名称
         const levelMatch = itemName.match(/\(Lvl (\d+)\)/);
         if (levelMatch) {
             const baseName = itemName.replace(/ \(Lvl \d+\)/, '');
             const level = levelMatch[1];
             const translatedBaseName = itemMap[baseName] || baseName;
             translatedItem = translatedBaseName + "（等级 " + level + "）";
         }

         return "[" + timestamp + "] [订单] 您已下制作订单：" + quantity + "x [" + translatedQuality + "]" + translatedItem + "。预留 " + reservedAmount + " 金币。";
     }],

    [/^([\d,]+) Gold\.?$/,
     function(match, amount) {
         return amount + " 金币";
     }],
    [/^(\d{1,3}(?:,\d{3})*) of each contribution resource(?: \((.*?)\))?$/,
     function(match, amount, resources) {
         const resourceMap = {
             "Iron Bars": "铁锭",
             "Planks": "木板",
             "Gold Bars": "金锭",
             "Rune Shards": "符文碎片",
             "Iron Bars, Planks, Gold Bars, and Rune Shards": "铁锭、木板、金锭和符文碎片"
             // 可以继续添加其他资源组合
         };

         if (resources) {
             // 如果有具体资源列表，翻译资源名称
             const translatedResources = resourceMap[resources] || resources;
             return "每种贡献资源" + amount + "（" + translatedResources + "）";
         } else {
             // 如果没有具体资源列表，只翻译基础格式
             return "每种贡献资源" + amount;
         }
     }],
    [/^([\d\.]+) Antlers$/, "$1 鹿角"],
    [/^([\d\.]+) Leviathan Scale$/, "$1 利维坦鳞片"],
    [/^([A-Za-z\s]+): ([\d\.]+)$/,
     function(_, resourceName, amount) {
         const resourceMap = {"Antlers":"鹿角","Starfall Ore":"星落矿石","Glimmerwood Sap":"微光树液","Crystallized Anima":"生命结晶","Oceanic Essence":"海洋精华","Leviathan Scale":"利维坦鳞片","Treant Resin":"树人树脂","Rune Shards":"符文碎片","Boss Tokens":"Boss代币"};
         return `${resourceMap[resourceName] || resourceName}: ${amount}`;
     }],

    // ========== 经验值增益 ==========
    [/^Grants (.+) bonus XP per tick.$/, '每刻(Tick)增加 $1 点经验值。'],
    [/^Grants (.+) Crafting XP per tick.$/, '每刻(Tick)增加 $1 点 制作 经验值。'],
    [/^Grants (.+) Battler XP per tick.$/, '每刻(Tick)增加 $1 点 战斗 经验值。'],
    [/^Grants (.+) Woodcutting XP per tick.$/, '每刻(Tick)增加 $1 点 伐木 经验值。'],
    [/^Grants (.+) Mining XP per tick.$/, '每刻(Tick)增加 $1 点 采矿 经验值。'],
    [/^and you get 1 extra (.+?) XP during this event\.$/,
     function(_, skill) {
         const skillMap = {"Hunting":"狩猎","Mining":"采矿","Woodcutting":"伐木","Battling":"战斗","Fishing":"钓鱼","Cooking":"烹饪","Farming":"耕种"};
         return `并且在此活动期间您将获得1点额外${skillMap[skill] || skill}经验值。`;
     }],
    [/^Grants \+(\d+) bonus Cooking XP per tick\.$/, "每tick授予 +$1 额外烹饪经验值。"],
    // 1. 经验值增益
    [/^(\+[\d\.]+) (Battler|Fishing|Mining|Woodcutting) XP per tick$/g, function(match, value, skill) {
        const skillMap = {
            "Battler": "战斗者",
            "Fishing": "钓鱼",
            "Mining": "采矿",
            "Woodcutting": "伐木"
        };
        return value + " " + (skillMap[skill] || skill) + "经验值每tick";
    }],

    // 2. 所有采集技能经验值
    [/^(\+[\d\.]+) XP to all gathering skills$/g, "$1 所有采集技能经验值"],

    // 3. 百分比增益
    [/^(\+[\d\.]+%) (chance to catch fish|chance to find Abyssal Eels|Gold gathered|Iron Ore gathered|Logs gathered|damage against special enemies)$/g,
     function(match, percentage, effect) {
         const effectMap = {
             "chance to catch fish": "捕获鱼的几率",
             "chance to find Abyssal Eels": "发现深渊鳗鱼的几率",
             "Gold gathered": "金币收集",
             "Iron Ore gathered": "铁矿石收集",
             "Logs gathered": "木头收集",
             "damage against special enemies": "对特殊敌人的伤害"
         };
         return percentage + " " + (effectMap[effect] || effect);
     }],

    // 4. 倍数增益
    [/^(\d+x) to rare resource find chance\.$/g, "$1稀有资源发现几率。"],
    [/Grants \+(\d+) (Cooking|Mining|Woodcutting|Battler|Fishing|Hunting|Farming) XP per tick\./,
     function(match, amount, skill) {
         const skillMap = {
             "Cooking": "烹饪",
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battler": "战斗者",
             "Fishing": "钓鱼",
             "Hunting": "狩猎",
             "Farming": "耕种"
         };
         return "每tick获得+" + amount + (skillMap[skill] || skill) + "经验值。";
     }],
    // 更通用的正则表达式，处理各种格式：
    [/Next enhance cost: ([\d,]+\.\d+) (.+)/,
     function(match, cost, resource) {
         const resourceMap = {
             "Leviathan Scale": "利维坦鳞片",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Boss Tokens": "Boss代币",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Lunar Essence": "月华精华"
         };
         return "下次强化成本：" + cost + " " + (resourceMap[resource] || resource);
     }],

    // 处理带HTML标签的版本：
    [/<small>Next enhance cost: ([\d,]+\.\d+) (.+)<\/small>/,
     function(match, cost, resource) {
         const resourceMap = {
             "Leviathan Scale": "利维坦鳞片",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Boss Tokens": "Boss代币",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Lunar Essence": "月华精华"
         };
         return "<small>下次强化成本：" + cost + " " + (resourceMap[resource] || resource) + "</small>";
     }],

    // ========== 建筑功能与说明 ==========
    [/^Allows creation of level (.+) refining buildings and items.$/, '允许创建 $1 级精炼建筑和物品。'],
    [/^Consumes (.+) Gold per tick.$/, '消耗 $1 金币 每刻(Tick).'],
    [/^Consumes (.+) Logs per tick.$/, '消耗 $1 木板 每刻(Tick).'],
    [/^Consumes (.+) Iron Ore per tick.$/, '消耗 $1 铁矿石 每刻(Tick).'],
    [/^Produces (.+) Gold Bars per tick.$/, '生产 $1 金锭 每刻(Tick)。'],
    [/^Produces (.+) Iron Bars per tick.$/, '生产 $1 铁锭 每刻(Tick)。'],
    [/^Produces (.+) Planks per tick.$/, '生产 $1 木板 每刻(Tick)。'],
    [/^Produces ([\d\.]+) Meat per tick\.$/, "每tick产出$1个肉。"],
    [/^Produces ([\d\.]+) (.+?) per tick\.$/,
     function(_, amount, resource) {
         const resourceMap = {"Meat":"肉","Jerky":"肉干","Bolts":"弩箭","Planks":"木板","Iron Bars":"铁锭","Gold Bars":"金锭","Prepared Fish":"加工鱼"};
         return `每tick产出${amount}个${resourceMap[resource] || resource}。`;
     }],
    [/^Consumes ([\d,]+) (.+?) per tick\.$/,
     function(_, amount, resource) {
         const resourceMap = {"Game Carcass":"猎物尸体","Bolts":"弩箭","Planks":"木板","Gold Bars":"金锭","Iron Bars":"铁锭","Iron Ore":"铁矿石","Gold":"金币","Logs":"木头","Raw Fish": "生鱼"};
         return `每tick消耗${amount}个${resourceMap[resource] || resource}。`;
     }],
    [/^Cost: (.+)$/,
     function(match, costText) {
         const resourceMap = {
             "Boss Tokens": "Boss代币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片",
             "Corn": "玉米",
             "Potatoes": "土豆",
             "Apples": "苹果",
         };

         let translatedCost = costText;
         for (const [en, cn] of Object.entries(resourceMap)) {
             translatedCost = translatedCost.replace(new RegExp(en, 'g'), cn);
         }

         return "消耗: " + translatedCost;
     }],
    [/^([\d,]+\.?\d*) (Leviathan Scale)$/,
     function(match, amount, resource) {
         return amount + " 利维坦鳞片";
     }],
    [/^Special Consumables$/, '特殊消耗品'],
    [/^The Anti-Glyph$/, '反符文'],
    [/^Use The Anti-Glyph$/, '使用反符文'],
    [/^Refines ([\d\.]+) Game Carcass into ([\d\.]+) Meat per tick\.$/,
     "每tick将$1个猎物尸体精炼成$2个肉。"],
    [/^Refines ([\d\.]+) (.+?) into ([\d\.]+) (.+?) per tick\.$/,
     function(_, inputAmount, inputResource, outputAmount, outputResource) {
         const resourceMap = {"Game Carcass":"猎物尸体","Meat":"肉","Iron Ore":"铁矿石","Iron Bars":"铁锭","Logs":"木头","Planks":"木板","Gold":"金币","Gold Bars":"金锭","Raw Fish":"生鱼","Prepared Fish":"加工鱼"};
         return `每tick将${inputAmount}个${resourceMap[inputResource] || inputResource}精炼成${outputAmount}个${resourceMap[outputResource] || outputResource}。`;
     }],
    [/Refines ([\d,]+\.?\d*) (.+?) into ([\d,]+\.?\d*) (.+?) per tick\./,
     function(match, inputAmount, inputResource, outputAmount, outputResource) {
         const resourceMap = {
             "Iron Ore": "铁矿石",
             "Iron Bars": "铁锭",
             "Logs": "木头",
             "Planks": "木板",
             "Gold": "金币",
             "Gold Bars": "金锭",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Game Carcass": "猎物尸体",
             "Meat": "肉"
         };

         return "每tick将" + inputAmount + (resourceMap[inputResource] || inputResource) +
             "精炼成" + outputAmount + (resourceMap[outputResource] || outputResource) + "。";
     }],
    [/^Fletches ([\d\.]+) Bolts per tick from ([\d\.]+) Planks and ([\d\.]+) Gold Bars\.$/,
     "每tick使用$2个木板和$3个金锭制作$1支弩箭。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Enhanced your Level (\d+) \[(.*?)\] (.+?) to \[(.*?)\] using ([\d,]+\.\d+) Treant Resin\.$/,
     function(match, timestamp, level, rarity, itemName, enhanceLevel, resinAmount) {
         // 品质翻译映射
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特",
         };

         // 物品名称翻译映射
         const itemMap = {
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;
         const translatedResin = "树精树脂";

         return "[" + timestamp + "] 已将你的等级 " + level + " [" + translatedRarity + "]" + translatedItem + " 强化至 [" + enhanceLevel + "]，使用了 " + resinAmount + " " + translatedResin + "。";
     }],
    [/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] You enhanced your Mercenary post to Level \[E(\d+)\] for ([\d,]+) Lunar Essence!$/,
     "[$1] 你将雇佣兵哨站强化到等级 [E$2]，消耗了 $3 月华精华！"],
    [/^Requires a Sharpening Stone with level >= (\d+)\.$/,
     function(match, level) {
         return "需要一个磨刀石，等级 >= " + level + "。";
     }],
    [/^\+(\d+) Inscription XP per craft$/, "+$1 铭文经验每制作"],
    [/^\+(\d+)% Inscription success chance$/, "+$1% 铭文成功率"],
    [/^Each level grants \+(\d+) Inscription XP per craft and increases Inscription success chance by \+(\d+)%\.$/,
     "每级提供+$1铭文经验每制作，并提高铭文成功率+$2%。"],
    [/^Final Fail Chance: ([\d.]+)%$/, '最终失败几率: $1%'],
    // 生命值显示
    [/^Health: ([\d,]+) \/ ([\d,]+)$/,
     "生命值: $1 / $2"],
    // ========== 建筑与等级显示 ==========
    [/^([A-Za-z\s']+) \(Level (\d+)\)$/,
     function(match, buildingName, level) {
         const buildingMap = {
             "Butcher's Block": "屠宰台",
             "Prospector's Lodge": "勘探者小屋",
             "Scholar's Study": "学者书房",
             "Amber Mill": "琥珀磨坊",
             "Anima Collector": "生命收集器",
             "Artisan's Conclave": "工匠公会",
             "Battler's Bar": "战斗者酒吧",
             "Coral Sanctuary": "珊瑚保护区",
             "Fisherman's Wharf": "渔人码头",
             "Fletcher's Cooperative": "制箭师合作社",
             "Guild of Alchemists": "炼金师公会",
             "Lumberjack Shack": "伐木工小屋",
             "Masterwork Atelier": "杰作工作室",
             "Quartermaster's Workshop": "军需工坊",
             "Seismic Quarry": "地震采石场",
             "Trapper's Cabin": "猎人小屋",
             "Mercenary Post": "雇佣兵哨站",
             "Community Building": "社区建筑",
             "Conclave Strongbox": "公会储物箱",
         };
         return (buildingMap[buildingName] || buildingName) + "（等级 " + level + "）";
     }],

    [/^Artisan Tournament \((.+)\)$/,
     function(match, skill) {
         const skillMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Hunting": "狩猎",
             "Cooking": "烹饪",
             "Crafting": "制作",
         };
         return "工匠锦标赛 (" + (skillMap[skill] || skill) + ")";
     }],

    // 处理多个效果的规则
    [/^Grants \+([\d\.]+)% ([A-Za-z\s]+) and ([A-Za-z\s]+) for ([\d\.]+) minutes?\.$/, function(match, percent, effect1, effect2, minutes) {
        const effectMap = {
            "Fishing Catch Chance": "钓鱼捕获几率",
            "Hunting Hit Chance": "狩猎命中几率",
            "Catch Chance": "捕获几率",
            "Hit Chance": "命中几率",
            "Damage": "伤害",
            "Healing": "治疗",
            "Gathering Yield": "采集产量",
            "Combat Damage": "战斗伤害",
            "Gold Gain": "金币获得",
            "Rare Find Chance": "稀有发现几率",
            "Refining Output": "精炼产出",
        };

        const translatedEffect1 = effectMap[effect1] || effect1;
        const translatedEffect2 = effectMap[effect2] || effect2;
        return `提供 +${percent}% ${translatedEffect1}和${translatedEffect2}，持续 ${minutes} 分钟。`;
    }],
    [/Gain \+(\d+)% refining output \(Iron Bars, Planks, Gold Bars, Prepared Fish\) per level; inputs unchanged\./, '每级获得+$1%精炼产出（铁锭、木板、金锭、加工鱼）；投入不变。'],
    [/^\+(\d+)% (Iron Ore|Logs|Gold|refining output|chance to catch fish|chance to find Abyssal Eels) per level$/,
     function(match, percentage, resource) {
         const resourceMap = {
             "Iron Ore": "铁矿石",
             "Logs": "木头",
             "Gold": "金币",
             "refining output": "精炼产出",
             "chance to catch fish": "捕获鱼的几率",
             "chance to find Abyssal Eels": "发现深渊鳗鱼的几率"
         };

         const translatedResource = resourceMap[resource] || resource;
         return "每级+" + percentage + "% " + translatedResource;
     }],
    [/^\+(\d+)% to all personal damage or healing done in cooperative fight events and in dungeons\.$/,
     function(match, percentage) {
         return "+" + percentage + "% 在合作战斗事件和地下城中的所有个人伤害或治疗。";
     }],
    [/^(.+?) Lvl (\d+)$/,
     function(_, buildingName, level) {
         const buildingMap = {"Trapper's Cabin":"猎人小屋","Fletcher's Cooperative":"制箭师合作社","Butcher's Block":"屠宰台,","Conclave Strongbox": "公会储物箱",};
         return `${buildingMap[buildingName] || buildingName} 等级${level}`;
     }],
    [/^(Axe|Crossbow|Fishing Rod|Helm of Learning|Pickaxe|Sword) \(Level (\d+)\)$/, "$1（等级 $2）"],
    [/^(Pickaxe|Axe|Sword|Fishing Rod|CraftCrossbow|Crossbow|Helm of Learning) \(Lvl (\d+)\)$/,
     function(match, tool, level) {
         const toolMap = {
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };
         return (toolMap[tool] || tool) + "（等级 " + level + "）";
     }],
    [/^Level (\d+) Bonus$/, '等级 $1 奖励'],
    [/^Wharf Lvl (\d+) Multiplier$/, '码头等级 $1 乘数'],
    [/^Next enhance cost: ([\d,]+\.\d+) Treant Resin$/, '下次强化成本：$1 树人树脂'],
    [/^Wharf Lvl (\d+) Bonus$/, '码头等级 $1 乘数'],
    [/Bidding Open \(ends in (\d+)h (\d+)m\)/,
     function(match, hours, minutes) {
         return "投标开放 (剩余时间 " + hours + "小时" + minutes + "分钟)";
     }],
    [/Bidding Open \(ends in (\d+)m\)/,
     function(match, minutes) {
         return "投标开放 (剩余时间 " + minutes + "分钟)";
     }],
    [/^Dungeon contract active for: ([\d:]+)$/, "地下城合同剩余时间：$1"],
    [/Boss event contract active for: ([\d:]+)/, 'Boss事件合同剩余时间：$1'],
    [/Dungeon event contract active for: ([\d:]+)/, '地下城事件合同剩余时间：$1'],

    // ========== 精炼与公会加成 ==========
    [/\((\d+) base \+ ([\d.]+) from Alchemist Guild\) × ([\d.]+) from Mastery/, '($1 基础 + $2 来自炼金师公会) × $3 来自精通'],
    [/^\((.+) base \+ (.+) from Alchemist Guild\)$/, '（$1 基础 + $2 来自 炼金术士公会）'],
    [/^\+([\d\.]+)% refining output \(Iron Bars, Planks, Gold Bars, Prepared Fish\)$/, "+$1%精炼产量（铁锭、木板、金锭、加工鱼）"],
    [/^Grants \+(\d+)% Refining Output\.$/, '提供+$1%精炼产出。'],
    [/^Increases the input resource cost of a refining job by ([\d.]+)%, but also increases the output by ([\d.]+)%\.$/,
     function(match, costIncrease, outputIncrease) {
         return "增加精炼作业的输入资源成本" + costIncrease + "%，但同时增加输出" + outputIncrease + "%。";
     }],
    [/^Reduces the input resource cost of a refining job by ([\d.]+)%, but also reduces the output by ([\d.]+)%\.$/,
     function(match, costReduction, outputReduction) {
         return "减少精炼作业的输入资源成本" + costReduction + "%，但同时减少输出" + outputReduction + "%。";
     }],

    // ========== 物品等级计算 ==========
    [/^Adds (.+) to the item's base level, then multiplies the result by (.+).$/, '物品的基础等级增加 $1，然后乘以 $2。'],
    [/^Subtracts (.+) from the item\'s base level, then multiplies the result by (.+).$/, '从物品的基础等级中减去 $1，然后乘以 $2。'],

    // ========== 吞吐量与乘数 ==========
    [/^\+([\d.]+)% Throughput \(Total: \+([\d.]+)%\)$/, "+$1% 吞吐量 (总计: +$2%)"],
    [/^([\d\.]+)% Throughput \(Total: ([\d\.]+)%\)$/, '$1% 吞吐量（总计：$2%）'],
    [/^E(\d+) \(\+([\d\.]+)% Throughput\)$/, 'E$1（+$2% 吞吐量）'],
    [/^(\d+) \[E(\d+)\]$/, "$1 [E$2]"],
    [/^Enhancement \[E(\d+)\]$/, "强化等级 [E$1]"],
    [/^Next Level \(E(\d+)\)$/, '下一等级（E$1）'],
    [/^×([\d\.]+) \(\+([\d\.]+)%\)$/, '×$1（+$2%）'],

    // ========== 钓鱼 ==========
    [/^Your Fishing Level$/, '你的钓鱼等级'],
    [/^Your Hunting Level$/, "你的狩猎等级"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Upgraded to Level (\d+) (.+?)! You gained ([\d,]+) Crafting XP\.$/,
     function(match, timestamp, level, buildingName, xpAmount) {
         // 建筑名称映射
         const buildingMap = {
             "Sawmill": "锯木厂",
             "Ironforge": "铁熔炉",
             "Goldforge": "金熔炉",
             "Kitchen": "厨房",
             "Crafting Table": "合成台",
             "Storage Barn": "仓库",
             "Lumberjack Shack": "伐木工小屋",
             "Prospector's Lodge": "勘探者小屋",
             "Battler's Bar": "战士酒吧",
             "Town Watch": "城镇守卫",
             "Guild of Alchemists": "炼金师公会",
             "Masterwork Atelier": "杰作工作室",
             "Quartermaster's Workshop": "军需工坊",
             "Fisherman's Wharf": "渔人码头",
             "Scholar's Study": "学者书房",
             "Mercenary Post": "雇佣兵哨站",
             "Coral Sanctuary": "珊瑚保护区",
             "The Counting House": "会计所",
             "Community Building": "猎人小屋",
             "Trapper's Cabin": "猎人小屋",
             "Fletcher's Cooperative": "制箭师合作社",
             "Butcher's Block": "屠宰台",
             "Conclave Strongbox": "公会储物箱",
             "Storage locker": "储物柜",
         };

         const translatedBuilding = buildingMap[buildingName] || buildingName;

         return "[" + timestamp + "] 升级到等级 " + level + " " + translatedBuilding + "！你获得了 " + xpAmount + " 点制作经验值。";
     }],
    [/Upgraded to Level (\d+) Crafting Table! You gained ([\d,]+) Crafting XP\./, '升级到$1级合成台！你获得了$2制作经验值。'],
    [/Your Crafting skill has increased to level (\d+)!/, '你的制作技能已提升到$1级！'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Your (.+) skill has increased to level (\d+)!$/,
     function(match, timestamp, skillName, level) {
         const skillMap = { "Mining": "采矿", "Woodcutting": "伐木", "Fishing": "钓鱼", "Combat": "战斗", "Cooking": "烹饪", "Crafting": "制作", "Hunting": "狩猎", "Farming": "耕种", "Inscription": "铭文", "Battler": "战斗者" };
         return timestamp + ' 你的' + (skillMap[skillName] || skillName) + '技能已提升到等级 ' + level + '！';
     }],
    [/^(\d+\.\d+)% \(for ([\d\.]+) fish\)$/, '$1%（对应$2鱼）'],
    [/^Grants \+(\d+)% Catch Chance\.$/, '提供+$1%捕获几率。'],
    [/^Grants \+(\d+)% Catch Chance for (\d+) minutes\.$/, "提供 +$1% 捕捉几率，持续 $2 分钟。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Nothing seems to be biting... You gained ([\d,]+\.?\d*) Fishing XP for your patience(?: \((.+)\))?\.$/,
     function(match, timestamp, xpAmount, bonusText) {
         let xpBonusText = "";
         if (bonusText) {
             // 解析加成文本
             const bonuses = [];
             const bonusPattern = /(event|helm|building) \+(\d+) XP/g;
             let bonusMatch;

             while ((bonusMatch = bonusPattern.exec(bonusText)) !== null) {
                 const type = bonusMatch[1];
                 const value = bonusMatch[2];

                 const typeMap = {
                     "event": "事件",
                     "helm": "头盔",
                     "building": "建筑"
                 };

                 bonuses.push(typeMap[type] + "+" + value + "经验值");
             }

             if (bonuses.length > 0) {
                 xpBonusText = "（" + bonuses.join(", ") + "）";
             }
         }

         return "[" + timestamp + "] 似乎没有鱼上钩...你因耐心获得了 " + xpAmount + " 钓鱼经验值" + xpBonusText + "。";
     }],

    // 同样修复成功捕获的版本
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You caught ([\d,]+\.?\d*) Raw Fish and gained ([\d,]+\.?\d*) Fishing XP(?: \((.+)\))?\.$/,
     function(match, timestamp, amount, xpAmount, bonusText) {
         let xpBonusText = "";
         if (bonusText) {
             // 解析加成文本
             const bonuses = [];
             const bonusPattern = /(event|helm|building) \+(\d+) XP/g;
             let bonusMatch;

             while ((bonusMatch = bonusPattern.exec(bonusText)) !== null) {
                 const type = bonusMatch[1];
                 const value = bonusMatch[2];

                 const typeMap = {
                     "event": "事件",
                     "helm": "头盔",
                     "building": "建筑"
                 };

                 bonuses.push(typeMap[type] + "+" + value + "经验值");
             }

             if (bonuses.length > 0) {
                 xpBonusText = "（" + bonuses.join(", ") + "）";
             }
         }

         return "[" + timestamp + "] 你捕获了 " + amount + " 生鱼，并获得了 " + xpAmount + " 钓鱼经验值" + xpBonusText + "。";
     }],
    [/^\[(.*?)\] You feel a strange pull on your line and reel in a shimmering Abyssal Eel!$/,
     function(match, rarity) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         return "[" + (rarityMap[rarity] || rarity) + "] 你感觉到鱼线被奇怪地拉扯，收线时钓上了一条闪烁的深渊鳗鱼！";
     }],
    [/^\[(.*?)\] You found (\d+) (.+?) while (.+?)!$/,
     function(match, rarity, amount, resource, activity) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };
         const resourceMap = {
             "Crystallized Anima": "生命结晶",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Oceanic Essence": "海洋精华",
             "Abyssal Eel": "深渊鳗鱼",
             "Antlers": "鹿角",
         };
         const activityMap = {
             "mining": "采矿",
             "woodcutting": "伐木",
             "battling": "战斗",
             "fishing": "钓鱼",
             "hunting": "狩猎",
         };
         return "[" + (rarityMap[rarity] || rarity) + "] 你在" +
             (activityMap[activity] || activity) + "时发现了" + amount + "个" +
             (resourceMap[resource] || resource) + "！";
     }],

    // ========== 采集与通用增益 ==========
    [/^Grants \+(\d+)% Gathering Yield\.$/, '提供+$1%采集产量。'],
    [/^([+-]\d+)% to base resource gains \(Iron Ore, Logs, Gold, Fish\)\.$/,
     function(match, percentage) {
         return percentage + "% 基础资源获得（铁矿石、木头、金币、鱼）。";
     }],
    [/^Grants \+(\d+)% Gathering Yield gain for (\d+) minutes\.$/, "提供 +$1% 采集产量增益，持续 $2 分钟。"],
    [/^Grants \+(\d+)% Gold Gain\.$/, '提供+$1%金币获得。'],
    [/^Grants \+(\d+)% Damage\.$/, '提供+$1%伤害。'],
    [/^\+(\d+)% Damage$/, '+$1% 伤害'],
    [/^\+([\d\.]+)% Hit Chance$/, '+$1% 命中几率'],
    [/^\+([\d\.]+)% Combat Damage$/, "+$1% 战斗伤害"],
    [/^\+[\d.]+%$/, function(match) { return match; }],
    [/^[☀️☄️⚪✨🌙🌟🌿💧🔥🪨🪵]$/, function(match) { return match; }],
    [/^\+(\d+) (bonus XP|Crafting XP|Mining XP|Woodcutting XP|Fishing XP|Battler XP|Cooking XP)$/,
     function(match, value, description) {
         const descriptionMap = {
             "bonus XP": "额外经验值",
             "Crafting XP": "制作经验值",
             "Mining XP": "采矿经验值",
             "Woodcutting XP": "伐木经验值",
             "Fishing XP": "钓鱼经验值",
             "Battler XP": "战斗经验值",
             "Cooking XP": "烹饪经验值"
         };

         const translatedDesc = descriptionMap[description] || description;
         return "+" + value + " " + translatedDesc;
     }],
    [/^\+(\d+)% (Combat Damage|Gathering Yield|Catch Chance|Gold Gain)$/,
     function(match, percentage, effect) {
         const effectMap = {
             "Combat Damage": "战斗伤害",
             "Gathering Yield": "采集产量",
             "Catch Chance": "捕获几率",
             "Gold Gain": "金币获得"
         };

         const translatedEffect = effectMap[effect] || effect;
         return "+" + percentage + "% " + translatedEffect;
     }],
    [/^\+(\d+) bonus XP$/,
     function(match, amount) {
         return "+" + amount + " 额外经验值";
     }],
    [/^\+[\d.]+%$/, function(match) { return match; }],
    [/^Error loading (.*?)\.$/,
     function(match, item) {
         const itemMap = {
             "orders": "订单",
             "your orders": "您的订单",
             "market data": "市场数据",
             "profile": "个人资料",
             "inventory": "库存",
             "conclave": "公会",
             "dungeon": "地下城"
         };

         return "加载" + (itemMap[item] || item) + "时出错。";
     }],
    [/^Error (.+?)\.$/,
     function(match, description) {
         const errorMap = {
             "loading orders": "加载订单",
             "loading your orders": "加载您的订单",
             "creating order": "创建订单",
             "updating order": "更新订单",
             "canceling order": "取消订单"
         };
         return "错误：" + (errorMap[description] || description) + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Error: You do not have enough (.+)\.$/,
     function(match, timestamp, resource) {
         const resourceMap = {
             "Iron Ore": "铁矿石",
             "Iron Bars": "铁锭",
             "Logs": "木头",
             "Planks": "木板",
             "Gold": "金币",
             "Gold Bars": "金锭",
             "Boss Tokens": "Boss代币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Abyssal Eel": "深渊鳗鱼",
             "Leviathan Scales": "利维坦鳞片",
             "Oceanic Essence": "海洋精华",
             "Artisan's Marks": "工匠印记",
         };
         const translatedResource = resourceMap[resource] || resource;
         return "[" + timestamp + "] 错误：你的 " + translatedResource + " 不足。";
     }],
    [/^[☀️☄️⚪✨🌙🌟🌿💧🔥🪨🪵]$/, function(match) { return match; }],
    [/^Grants \+(\d+)% Healing\.$/, '提供+$1%治疗。'],
    [/^Grants \+(\d+)% (Combat Damage|Gathering Yield|Catch Chance|Gold Gain|Damage|Healing|Rare Find Chance)\.$/,
     function(match, percentage, effect) {
         const effectMap = {
             "Combat Damage": "战斗伤害",
             "Gathering Yield": "采集产量",
             "Catch Chance": "捕获几率",
             "Gold Gain": "金币获得",
             "Damage": "伤害",
             "Healing": "治疗",
             "Rare Find Chance": "稀有发现几率" // ← 新增这行
         };
         return "提供+" + percentage + "% " + (effectMap[effect] || effect) + "。";
     }],
    [/^Multiplies rare find chance by ([\d.]+)x for (\d+) minutes\.$/,
     function(match, multiplier, minutes) {
         return "将稀有发现几率提高" + multiplier + "倍，持续" + minutes + "分钟。";
     }],
    [/^Grants ([\d.]+)x (.+)\.$/,
     function(match, multiplier, effect) {
         const effectMap = {
             "Rare Find Chance": "稀有发现几率",
             "Gathering Yield": "采集产量",
             "Catch Chance": "捕获几率",
             "Combat Damage": "战斗伤害",
             "Gold Gain": "金币获得"
         };

         const translatedEffect = effectMap[effect] || effect;
         return "提供" + multiplier + "倍" + translatedEffect + "。";
     }],
    [/^Grants \+(\d+)% Combat Damage gain for (\d+) minutes\.$/, "提供 +$1% 战斗伤害增益，持续 $2 分钟。"],

    // ========== 职业与角色 ==========
    [/^Battler \(Sword\/Battler Level\)$/, '战斗者（剑/战斗等级）'],
    [/^Miner \(Pickaxe\/Mining Level\)$/, '矿工（镐子/采矿等级）'],
    [/^Woodcutter \(Axe\/Woodcutting Level\)$/, '伐木工（斧/伐木等级）'],
    [/^Farming \((\d+)\)$/,
     function(match, level) {
         return "耕种 (" + level + ")";
     }],

    // ========== 品质描述 ==========
    [/^Effect \(Normal Quality\)$/, '效果（普通品质）'],
    [/^Effect \(Fine Quality\)$/, '效果（优良品质）'],
    [/^Effect \(Exquisite Quality\)$/, '效果（精美品质）'],
    [/^Effect \(Burnt Quality\)$/, '效果（烤焦品质）'],
    [/^Effect \(Poor Quality\)$/, '效果（劣质品质）'],
    [/^Effect \(Common Quality\)$/, '效果（普通品质）'],
    [/^Effect \(Uncommon Quality\)$/, '效果（罕见品质）'],
    [/^Effect \(Rare Quality\)$/, '效果（稀有品质）'],
    [/^Effect \(Epic Quality\)$/, '效果（史诗品质）'],
    [/^Effect \(Unique Quality\)$/, '效果（独特品质）'],

    // ========== 制作物品 ==========================================================================================================新装备建筑名称显示====================================================

    //=========================================================================================================新建筑装备显示=========================================================================
    [/^Craft (.+?) \(Level (\d+)\)$/,
     function(match, item, level) {
         // 特殊处理印记
         if (item.startsWith("Sigil of ")) {
             const sigilType = item.replace("Sigil of ", "");
             const sigilMap = {
                 "Barbs": "荆棘",
                 "Ferocity": "凶猛",
                 "Mending": "修复",
                 "Resilience": "坚韧"
             };
             return "制作" + (sigilMap[sigilType] || sigilType) + "印记（等级 " + level + "）";
         }
         return "制作" + item + "（等级 " + level + "）";
     }],

    // ========== 强化与增强 ==========
    [/Enhance\s+Goldforge/i, '强化金熔炉'],
    [/Enhance\s+Ironforge/i, '强化铁熔炉'],
    [/Enhance\s+Kitchen/i, '强化厨房'],
    [/Enhance\s+Sawmill/i, '强化锯木厂'],
    [/enhance\s+goldforge/i, '强化金熔炉'],
    [/enhance\s+ironforge/i, '强化铁熔炉'],
    [/enhance\s+kitchen/i, '强化厨房'],
    [/enhance\s+sawmill/i, '强化锯木厂'],

    // ========== 物品显示（含强化标识） ==========
    [/Fishing Rod \(Level (\d+), S\)/, '鱼竿（等级 $1，S）'],
    [/^(.+?) \(Lvl (\d+)\) - Have: (\d+)$/,
     function(match, itemName, level, count) {
         const itemMap = {
             "Fishing Rod": "鱼竿",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
         };

         const translatedItem = itemMap[itemName] || itemName;
         return translatedItem + "（等级 " + level + "） - 拥有：" + count;
     }],
    [/^\[(.*?)\] (.+?) - Have: (\d+)$/,
     function(match, quality, itemName, count) {
         const qualityMap = {
             "Burnt": "烤焦",
             "Normal": "普通",
             "Fine": "优良",
             "Exquisite": "精美"
         };
         const itemMap = {
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Eel Broth": "鳗鱼汤"
         };

         const translatedQuality = qualityMap[quality] || quality;
         const translatedItem = itemMap[itemName] || itemName;

         return '[' + translatedQuality + ']' + translatedItem + ' - 拥有: ' + count;
     }],
    [/^Level (\d+) (\[E\d+\])(?: (\[.+\]))?$/, function(match, level, enhance, glyph) {
        // 翻译增强等级
        const translatedEnhance = enhance.replace(/\[E(\d+)\]/, "[强化$1]");

        // 如果有符文，翻译符文
        let result = "等级 " + level + " " + translatedEnhance;

        if (glyph) {
            const glyphMap = {
                "[Frugality]": "[节俭]",
                "[Gluttony]": "[饕餮]",
                "[Scavenging]": "[拾荒]",
                "[Duelist]": "[决斗者]",
                "[Laborer]": "[劳动者]",
                "[Philanthropist]": "[慈善家]",
                "[Prospector]": "[勘探者]"
            };
            result += " " + (glyphMap[glyph] || glyph);
        }

        return result;
    }],
    [/^\[(.+?)\] \((\d+) avail\)$/,
     function(match, quality, available) {
         const qualityMap = { "Fine": "优良", /* ... */ };
         return "[" + (qualityMap[quality] || quality) + "] (" + available + "可用)";
     }],
    [/^\(Due to (.*?)\)$/,
     function(match, glyphName) {
         const glyphMap = { /* ... */ };
         return "（由于" + (glyphMap[glyphName] || glyphName) + "）";
     }],
    [/^(.+?) \(Level (\d+), E(\d+)(?:, S)?(?:, (.+))?\)$/,
     function(match, toolName, level, enhanceLevel, glyphName) {
         const toolMap = {
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
         };

         const glyphMap = {
             "Glyph of the Duelist": "决斗者符文",
             "Glyph of Scavenging": "拾荒符文",
             "Glyph of the Laborer": "劳动者符文",
             "Glyph of the Philanthropist": "慈善家符文",
             "Glyph of the Prospector": "勘探者符文",
             "Glyph of Frugality": "节俭符文",
             "Glyph of Gluttony": "饕餮符文"
         };

         let result = (toolMap[toolName] || toolName) + " (等级 " + level + ", E" + enhanceLevel;
         if (glyphName) {
             result += ", " + (glyphMap[glyphName] || glyphName);
         }
         result += ")";
         return result;
     }],
    [/^\[(.*?)\] Level (\d+) \[E(\d+),S,(.+)\]$/,
     function(match, rarity, level, enhanceLevel, glyphType) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         const glyphMap = {
             "Prospector": "勘探者",
             "Scavenging": "拾荒",
             "the Duelist": "决斗者",
             "the Laborer": "劳动者",
             "the Philanthropist": "慈善家",
             "Frugality": "节俭",
             "Gluttony": "饕餮"
         };

         return "[" + (rarityMap[rarity] || rarity) + "] 等级 " + level + " [E" + enhanceLevel + ",S," + (glyphMap[glyphType] || glyphType) + "]";
     }],
    [/^\[(.*?)\] (.+?) \(Lvl (\d+)\)$/,
     function(match, rarity, itemName, level) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         const itemMap = {
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Resilience": "坚韧印记"
         };

         return "[" + (rarityMap[rarity] || rarity) + "] " + (itemMap[itemName] || itemName) + " (等级 " + level + ")";
     }],
    [/^\[(.*?)\] Level (\d+) (?:\[(.*?)\])?$/,
     function(match, rarity, level, modifiers) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         let result = "[" + (rarityMap[rarity] || rarity) + "] 等级 " + level;

         if (modifiers) {
             const modParts = modifiers.split(',');
             let modText = " [";

             modParts.forEach((part, index) => {
                 if (part.startsWith('E')) {
                     modText += part;
                 } else if (part === 'S') {
                     modText += "S";
                 } else {
                     const glyphMap = {
                         "Prospector": "勘探者",
                         "Scavenging": "拾荒",
                         "the Duelist": "决斗者",
                         "the Laborer": "劳动者",
                         "the Philanthropist": "慈善家",
                         "Frugality": "节俭",
                         "Gluttony": "饕餮"
                     };
                     modText += glyphMap[part] || part;
                 }

                 if (index < modParts.length - 1) {
                     modText += ",";
                 }
             });

             modText += "]";
             result += modText;
         }

         return result;
     }],
    [/^\[(.*?)\] Level (\d+)$/,
     function(match, rarity, level) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         return "[" + (rarityMap[rarity] || rarity) + "] 等级 " + level;
     }],
    [/Pickaxe \(Level (\d+)\) \[E(\d+)\]/, '镐子（等级 $1）[E$2]'],
    [/Fishing Rod \(Level (\d+)\) \[E(\d+)\]/, '鱼竿（等级 $1）[E$2]'],
    [/Axe \(Level (\d+)\) \[E(\d+)\]/, '斧子（等级 $1）[E$2]'],
    [/Sword \(Level (\d+)\) \[E(\d+)\]/, '剑（等级 $1）[E$2]'],
    [/Crossbow \(Level (\d+)\) \[E(\d+)\]/, '弩（等级 $1）[E$2]'],
    [/^(Sigil of (Barbs|Ferocity|Mending|Resilience)) \(Level (\d+)\)$/,
     function(match, fullName, sigilType, level) {
         const sigilMap = {
             "Barbs": "荆棘印记",
             "Ferocity": "凶猛印记",
             "Mending": "修复印记",
             "Resilience": "坚韧印记",
         };
         const translatedSigil = sigilMap[sigilType] || sigilType;
         return translatedSigil + "（等级 " + level + "）";
     }],
    [/^Glyph of (Scavenging|the Duelist|the Laborer|the Philanthropist|the Prospector|Frugality|Gluttony) \(Level (\d+)\)$/,
     function(match, glyphType, level) {
         const glyphMap = {
             "Scavenging": "拾荒符文",
             "the Duelist": "决斗者符文",
             "the Laborer": "劳动者符文",
             "the Philanthropist": "慈善家符文",
             "the Prospector": "勘探者符文",
             "Frugality": "节俭符文",
             "Gluttony": "饕餮符文",
             "Glyph of the Laborer": "劳动者符文"
         };
         return glyphMap[glyphType] + "（等级 " + level + "）";
     }],
    [/^Glyph of Frugality \(Lvl (\d+)\)$/, "节俭符文（等级 $1）"],
    [/^\[(.*?)\] Helm of Learning (.+?) \(Level (\d+)\)$/,
     function(_, rarity, role, level) {
         const rMap = {"Poor":"劣质","Common":"普通","Uncommon":"罕见","Rare":"稀有","Epic":"史诗","Legendary":"传说","Unique":"独特"};
         return `[${rMap[rarity] || rarity}] 学问之盔 ${role} (等级 ${level})`;
     }],
    [/^\[(.*?)\] (Apple Cider|Potato Blaster|Cornbread)$/,
     function(match, quality, product) {
         const qualityMap = {
             "Normal": "普通",
             "Fine": "优良",
             "Exquisite": "精美",
             "Burnt": "烤焦",
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
         };

         const productMap = {
             "Apple Cider": "苹果酒",
             "Potato Blaster": "土豆爆破器",
             "Cornbread": "玉米面包"
         };

         const translatedQuality = qualityMap[quality] || quality;
         const translatedProduct = productMap[product] || product;

         return "[" + translatedQuality + "] " + translatedProduct;
     }],

    // ========== 烹饪与食用 ==========
    [/^Cook: (.+)$/,
     function(_, foodName) {
         const foodMap = {"Grilled Fish":"烤鱼","Fish Stew":"鱼汤","Eel Broth":"鳗鱼汤","Apple Cider":"苹果酒","Potato-Blaster":"土豆爆破器","Cornbread":"玉米面包","Jerky":"肉干"};
         return `烹饪：${foodMap[foodName] || foodName}`;
     }],
    [/^\[Eat Jerky x(\d+)\]$/, "[食用肉干 x$1]"],
    [/^\[Eat (.+?) x(\d+)\]$/,
     function(_, foodName, quantity) {
         const foodMap = {"Jerky":"肉干","Grilled Fish":"烤鱼","Fish Stew":"鱼汤","Eel Broth":"鳗鱼汤","Cornbread":"玉米面包","Apple Cider":"苹果酒","Potato Blaster":"土豆爆破器"};
         return `[食用${foodMap[foodName] || foodName} x${quantity}]`;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Scrapped Level (\d+) \[(.*?)\] (.+?) and received (.+)\.$/,
     function(match, timestamp, level, rarity, itemName, resources) {
         // 稀有度映射
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特",
         };

         // 物品名称映射
         const itemMap = {
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Resilience": "坚韧印记"
         };

         // 资源名称映射
         let translatedResources = resources;
         const resourceMap = {
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭",
             "Planks": "木板",
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Leviathan Scales": "利维坦鳞片",
             "Boss Tokens": "Boss代币"
         };

         // 翻译资源列表
         for (const [en, cn] of Object.entries(resourceMap)) {
             translatedResources = translatedResources.replace(new RegExp(en, 'g'), cn);
         }

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] 回收了等级 " + level + " [" + translatedRarity + "]" + translatedItem + "，获得了 " + translatedResources + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You cooked (\d+) Jerky and gained (\d+) Cooking XP\.$/,
     "[$1] 您烹饪了$2个肉干并获得了$3点烹饪经验值。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You cooked a \[(.*?)\] (.+?) and gained (\d+) Cooking XP\.$/,
     function(match, timestamp, quality, itemName, xp) {
         const qualityMap = {
             "Burnt": "烤焦",
             "Normal": "普通",
             "Fine": "优良",
             "Exquisite": "精美"
         };
         const itemMap = {
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Eel Broth": "鳗鱼汤"
         };

         const translatedQuality = qualityMap[quality] || quality;
         const translatedItem = itemMap[itemName] || itemName;

         return timestamp + ' 你烹饪了一个[' + translatedQuality + ']' + translatedItem + '，获得了 ' + xp + ' 点烹饪经验。';
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You cooked an \[(.*?)\] (.+?) and gained (\d+) Cooking XP\.$/,
     function(match, timestamp, quality, itemName, xpGained) {
         const qualityMap = {
             "Burnt": "烤焦",
             "Normal": "普通",
             "Fine": "优良",
             "Exquisite": "精美"
         };
         const foodMap = {
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Eel Broth": "鳗鱼汤"
         };

         const translatedQuality = qualityMap[quality] || quality;
         const translatedItem = foodMap[itemName] || itemName;

         return "[" + timestamp + "] 你烹饪了一个[" + translatedQuality + "]" + translatedItem + "，获得了 " + xpGained + " 点烹饪经验值。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You prepared ([\d,]+\.\d+) Raw Fish into ([\d,]+\.\d+) Prepared Fish and gained ([\d,]+\.\d+) Cooking XP\.$/,
     function(match, timestamp, inputAmount, outputAmount, xpAmount) {
         return "[" + timestamp + "] 你将 " + inputAmount + " 生鱼加工成 " + outputAmount + " 加工鱼，并获得了 " + xpAmount + " 烹饪经验值。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Crafted a Level (\d+) \[(.*?)\] (.+?)! You gained (\d+) Crafting XP \(event \+(\d+) XP, helm \+(\d+) XP\)\. It has been placed in your inventory\.$/,
     function(match, timestamp, level, rarity, itemName, totalXP, eventXP, helmXP) {
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特",
         };
         const itemMap = {
             "Fishing Rod": "鱼竿",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] 制作了一个等级 " + level + " [" + translatedRarity + "]" + translatedItem + "！你获得了 " + totalXP + " 点制作经验值（事件+" + eventXP + "经验值，头盔+" + helmXP + "经验值）。它已被放入你的库存中。";
     }],
    // 制作成功消息（没有经验加成的情况）
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Crafted a Level (\d+) \[(.*?)\] (.+?)! You gained (\d+) Crafting XP\. It has been placed in your inventory\.$/,
     function(match, timestamp, level, rarity, itemName, xpAmount) {
         // 稀有度映射
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特",
         };

         // 物品名称映射
         const itemMap = {
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] 制作了一个等级 " + level + " [" + translatedRarity + "]" + translatedItem + "！你获得了 " + xpAmount + " 点制作经验值。它已被放入你的库存中。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You refined ([\d,]+\.\d+) (.+?) into ([\d,]+\.\d+) (.+?) and gained ([\d,]+\.\d+) Crafting XP \((.+)\)\.$/,
     function(match, timestamp, inputAmount, inputResource, outputAmount, outputResource, xpAmount, bonusDetails) {
         // 资源名称映射
         const resourceMap = {
             "Gold": "金币",
             "Gold Bars": "金锭",
             "Iron Ore": "铁矿石",
             "Iron Bars": "铁锭",
             "Logs": "木头",
             "Planks": "木板",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼"
         };

         // 加成详情翻译
         let translatedBonus = bonusDetails;
         const bonusPattern = /(\w+) \+(\d+) XP/g;
         let bonusMatch;
         let bonuses = [];

         while ((bonusMatch = bonusPattern.exec(bonusDetails)) !== null) {
             const type = bonusMatch[1];
             const value = bonusMatch[2];

             const typeMap = {
                 "helm": "头盔",
                 "building": "建筑",
                 "event": "事件"
             };

             bonuses.push(typeMap[type] || type + "+" + value + "经验值");
         }

         if (bonuses.length > 0) {
             translatedBonus = bonuses.join("，");
         }

         const translatedInput = resourceMap[inputResource] || inputResource;
         const translatedOutput = resourceMap[outputResource] || outputResource;

         return "[" + timestamp + "] 你精炼了 " + inputAmount + " " + translatedInput + " 成为 " + outputAmount + " " + translatedOutput + " 并获得了 " + xpAmount + " 点制作经验值（" + translatedBonus + "）。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You gained ([\d,]+\.\d+) (.+?), and gained ([\d,]+\.\d+) (.+?) XP \((.+)\)\.$/,
     function(match, timestamp, amount, resource, xpAmount, skill, bonusDetails) {
         // 资源名称映射
         const resourceMap = {
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Raw Fish": "生鱼",
         };

         // 技能名称映射
         const skillMap = {
             "Woodcutting": "伐木",
             "Mining": "采矿",
             "Battling": "战斗",
             "Fishing": "钓鱼",
         };

         // 加成详情翻译
         let translatedBonus = bonusDetails;
         const bonusPattern = /(\w+) \+(\d+) XP/g;
         let bonusMatch;
         let bonuses = [];

         while ((bonusMatch = bonusPattern.exec(bonusDetails)) !== null) {
             const type = bonusMatch[1];
             const value = bonusMatch[2];

             const typeMap = {
                 "event": "事件",
                 "helm": "头盔",
                 "building": "建筑"
             };

             bonuses.push((typeMap[type] || type) + "+" + value + "经验值");
         }

         if (bonuses.length > 0) {
             translatedBonus = bonuses.join("，");
         }

         const translatedResource = resourceMap[resource] || resource;
         const translatedSkill = skillMap[skill] || skill;

         return "[" + timestamp + "] 你获得了 " + amount + " " + translatedResource + "，并获得了 " + xpAmount + " 点" + translatedSkill + "经验值（" + translatedBonus + "）。";
     }],
    // 通用的移动物品消息处理
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Moved (\d+) x (\[.*?\]) (.+?) \(Lvl (\d+)\) to your (locker|strongbox|inventory)\.$/,
     function(match, timestamp, quantity, rarity, itemName, level, container) {
         const rarityMap = {
             "[Poor]": "[劣质]",
             "[Common]": "[普通]",
             "[Uncommon]": "[罕见]",
             "[Rare]": "[稀有]",
             "[Epic]": "[史诗]",
             "[Legendary]": "[传说]",
             "[Unique]": "[独特]"
         };

         const itemMap = {
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };

         const containerMap = {
             "locker": "储物柜",
             "strongbox": "公会储物箱",
             "inventory": "库存"
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;
         const translatedContainer = containerMap[container] || container;

         return "[" + timestamp + "] 已将 " + quantity + " x " + translatedRarity + " " + translatedItem + "（等级 " + level + "）移动到您的" + translatedContainer + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Stopped cooking Jerky\. Not enough Meat\.$/,
     "[$1] 停止烹饪肉干。肉不足。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Not enough Game Carcass\.\s*$/,
     function(match, timestamp) {
         return "[" + timestamp + "] 猎物尸体不足。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Not enough resources to fletch bolts \(need ([\d\.]+) Planks and ([\d\.]+) Gold Bars\)\. (?:Switched to|已经切换到) (.+)\.$/,
     function(match, timestamp, planksAmount, goldBarsAmount, activity) {
         const activityMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Fishing": "钓鱼",
             "Battling": "战斗",
             "Hunting": "狩猎"
         };

         const translatedActivity = activityMap[activity] || activity;

         return "[" + timestamp + "] 制作弩箭资源不足（需要 " + planksAmount + " 木板和 " + goldBarsAmount + " 金锭）。已切换到" + translatedActivity + "。";
     }],

    // 2. 通用规则：资源不足并切换活动
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Not enough (.+)\. (?:Switched to|已经切换到) (.+)\.$/,
     function(match, timestamp, material, activity) {
         const materialMap = {
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Meat": "肉",
             "Jerky": "肉干",
             "Bolts": "弩箭",
             "Game Carcass": "猎物尸体",
             "Lunar Essence": "月华精华",
             "Planks": "木板",
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭"
         };

         const activityMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Fishing": "钓鱼",
             "Battling": "战斗",
             "Hunting": "狩猎",
             "PrepareFish": "烹制鱼"
         };

         const translatedMaterial = materialMap[material] || material;
         const translatedActivity = activityMap[activity] || activity;

         return "[" + timestamp + "] " + translatedMaterial + "不足。已切换到" + translatedActivity + "。";
     }],

    // 3. 最通用的规则：仅资源不足（没有切换活动）
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Not enough (.+?)\.$/,
     function(match, timestamp, resource) {
         const resourceMap = {
             "Game Carcass": "猎物尸体",
             "Lunar Essence": "月华精华",
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Meat": "肉",
             "Jerky": "肉干",
             "Bolts": "弩箭",
             "Planks": "木板",
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭"
         };
         return "[" + timestamp + "] " + (resourceMap[resource] || resource) + "不足。";
     }],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Stopped crafting Level (\d+) (.+?)\. Missing: (.+)\.$/,
     function(match, timestamp, level, itemName, missingResourcesStr) {
         // 物品名称映射
         const itemMap = {
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Eel Broth": "鳗鱼汤",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Crafting Table": "合成台",
             "Mercenary post": "雇佣兵哨站",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Ironforge": "铁熔炉",
             "Sawmill": "锯木厂",
             "Goldforge": "金熔炉",
             "Storage Locker": "储物柜",
             "Kitchen": "厨房",
             "Scholar's Study": "学者书房",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Resilience": "坚韧印记"
         };

         // 资源名称映射
         const resourceMap = {
             "Prepared Fish": "加工鱼",
             "Abyssal Eel": "深渊鳗鱼",
             "Raw Fish": "生鱼",
             "Boss Tokens": "Boss代币",
             "Oceanic Essence": "海洋精华",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Leviathan Scales": "利维坦鳞片",
             "Iron Bars": "铁锭",
             "Gold Bars": "金锭",
             "Planks": "木板",
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币"
         };

         const translatedItem = itemMap[itemName] || itemName;

         // 处理资源字符串 - 使用更可靠的方法
         let translatedResources = missingResourcesStr;

         // 按资源名称长度从长到短排序，避免部分匹配问题
         const sortedResources = Object.entries(resourceMap)
         .sort((a, b) => b[0].length - a[0].length);

         // 逐个替换资源名称
         for (const [en, cn] of sortedResources) {
             // 使用正则表达式进行全局替换，确保匹配整个单词
             const regex = new RegExp(`\\b${en}\\b`, 'g');
             translatedResources = translatedResources.replace(regex, cn);
         }

         return "[" + timestamp + "] 停止制作等级 " + level + " " + translatedItem + "。缺少：" + translatedResources + "。";
     }],

    // 2. 匹配制作失败
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Failed to craft Level (\d+) (.+?)\. You are missing resources\.$/,
     function(match, timestamp, level, itemName) {
         // 物品名称映射
         const itemMap = {
             "Crafting Table": "合成台",
             "Mercenary post": "雇佣兵哨站",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Fishing Rod": "鱼竿",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Ironforge": "铁熔炉",
             "Sawmill": "锯木厂",
             "Goldforge": "金熔炉",
             "Kitchen": "厨房",
             "Storage Locker": "储物柜",
             "Scholar's Study": "学者书房",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Resilience": "坚韧印记"
         };

         const translatedItem = itemMap[itemName] || itemName;
         return "[" + timestamp + "] 制作等级 " + level + " " + translatedItem + " 失败。你缺少资源。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Your attempt to craft the Level (\d+) (.+?) failed! You recovered ([\d\.]+)% of the resources: (.+)\.$/,
     function(match, timestamp, level, itemName, recoveryPercent, resources) {
         // 物品名称映射
         const itemMap = {
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Crafting Table": "合成台",
             "Ironforge": "铁熔炉",
             "Sawmill": "锯木厂",
             "Goldforge": "金熔炉",
             "Storage Locker": "储物柜",
             "Kitchen": "厨房",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Resilience": "坚韧印记",
         };

         // 资源名称映射
         let translatedResources = resources;
         const resourceMap = {
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭",
             "Planks": "木板",
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Leviathan Scales": "利维坦鳞片"
         };

         // 翻译资源列表
         for (const [en, cn] of Object.entries(resourceMap)) {
             translatedResources = translatedResources.replace(new RegExp(en, 'g'), cn);
         }

         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] 尝试制作等级 " + level + " " + translatedItem + " 失败！你回收了" + recoveryPercent + "%的资源：" + translatedResources + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Finished crafting queue for Fletch Bolts\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] 制作弩箭队列已完成。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Finished cooking queue for Jerky\.$/,
     "[$1] 肉干烹饪队列已完成。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Finished crafting queue for Level (\d+) (.+?)\.$/,
     function(match, timestamp, level, itemName) {
         // 物品名称映射
         const itemMap = {
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Fish Stew": "鱼汤",
             "Grilled Fish": "烤鱼",
             "Eel Broth": "鳗鱼汤",
             "Crafting Table": "合成台",
             "Ironforge": "铁熔炉",
             "Storage Locker": "储物柜",
             "Sawmill": "锯木厂",
             "Goldforge": "金熔炉",
             "Kitchen": "厨房",
             "Mercenary Post": "雇佣兵哨站",
             "Scholar's Study": "学者书房",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Resilience": "坚韧印记"
         };

         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] 完成了等级 " + level + " " + translatedItem + " 的制作队列。";
     }],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You ate (\d+) Jerky and restored ([\d\.]+) hours of hunger\. \(Hunger full\)$/,
     "[$1] 您食用了$2个肉干并恢复了$3小时的饥饿度。（饥饿度已满）"],
    // 在 cnRegReplace 中添加：
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon\] You eat (\d+) (\[.*?\]) (.+?), gaining (\d+) minutes of buff duration. \(Total: (\d+) mins\)\.$/,
     function(match, timestamp, count, qualityBrackets, foodName, gainedMinutes, totalMinutes) {
         const qualityMap = {
             "Burnt": "烤焦",
             "Normal": "普通",
             "Fine": "优良",
             "Exquisite": "精美"
         };
         const foodMap = {
             "Fish Stew": "鱼汤",
             "Grilled Fish": "烤鱼",
             "Eel Broth": "鳗鱼汤"
         };
         const qualityKey = qualityBrackets.slice(1, -1);
         const translatedQuality = qualityMap[qualityKey] || qualityKey;
         const translatedFood = foodMap[foodName] || foodName;

         return `[${timestamp}] [地下城] 你食用了${count} [${translatedQuality}]${translatedFood}，获得${gainedMinutes}分钟的增益持续时间。（总计: ${totalMinutes}分钟）。`;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You eat the \[(.*?)\] (.+?)\. Your (.+) buff now has a total duration of (\d+) minutes\. Your (.+) buff now has a total duration of (\d+) minutes\.$/,
     function(match, timestamp, quality, itemName, buffType1, duration1, buffType2, duration2) {
         const qualityMap = {
             "Burnt": "烤焦",
             "Normal": "普通",
             "Fine": "优良",
             "Exquisite": "精美"
         };
         const itemMap = {
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Eel Broth": "鳗鱼汤"
         };
         const buffMap = {
             "Gathering yield": "采集产量",
             "Catch chance": "捕捉几率",
             "Combat damage": "战斗伤害",
             "Rare find chance": "稀有发现几率"
         };

         const translatedQuality = qualityMap[quality] || quality;
         const translatedItem = itemMap[itemName] || itemName;
         const translatedBuff1 = buffMap[buffType1] || buffType1;
         const translatedBuff2 = buffMap[buffType2] || buffType2;

         return timestamp + ' 你食用了[' + translatedQuality + ']' + translatedItem + '。你的' + translatedBuff1 + '增益现在总持续时间为 ' + duration1 + ' 分钟。你的' + translatedBuff2 + '增益现在总持续时间为 ' + duration2 + ' 分钟。';
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You eat the \[(.*?)\] (.+?)\. Your (.+?) buff now has a total duration of (\d+) minutes\.$/,
     function(match, timestamp, quality, foodName, buffType, duration) {
         // 品质映射
         const qualityMap = {
             "Burnt": "烤焦",
             "Normal": "普通",
             "Fine": "优良",
             "Exquisite": "精美"
         };

         // 食物名称映射
         const foodMap = {
             "Fish Stew": "鱼汤",
             "Grilled Fish": "烤鱼",
             "Eel Broth": "鳗鱼汤"
         };

         // 增益类型映射
         const buffMap = {
             "Combat damage": "战斗伤害",
             "Gathering yield": "采集产量",
             "Catch chance": "捕获几率",
             "Rare find chance": "稀有发现几率"
         };

         const translatedQuality = qualityMap[quality] || quality;
         const translatedFood = foodMap[foodName] || foodName;
         const translatedBuff = buffMap[buffType] || buffType;

         return "[" + timestamp + "] 你食用了[" + translatedQuality + "]" + translatedFood + "。你的" + translatedBuff + "增益现在总持续时间为" + duration + "分钟。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You ate (\d+) Jerky and restored ([\d\.]+) hours? of hunger\.$/,
     "[$1] 您食用了$2个肉干并恢复了$3小时的饥饿度。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Farm\] Planted (.+?) in plot (\d+)\.$/,
     function(match, timestamp, cropType, plotNumber) {
         const cropMap = {
             "corn": "玉米",
             "apple": "苹果",
             "potato": "土豆"
         };

         return "[" + timestamp + "] [农场] 在土地 " + plotNumber + " 种植了" + (cropMap[cropType] || cropType) + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Farm\] (.+?) in plot (\d+)\.$/,
     function(match, timestamp, action, plotNumber) {
         const actionMap = {
             "Planted corn": "种植了玉米",
             "Planted apple": "种植了苹果",
             "Planted potato": "种植了土豆",
             "Harvested corn": "收获了玉米",
             "Harvested apple": "收获了苹果",
             "Harvested potato": "收获了土豆"
         };

         return "[" + timestamp + "] [农场] 在土地 " + plotNumber + " " + (actionMap[action] || action) + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Farm\] Planted (\d+) (.+?)\(s\)\.$/,
     function(match, timestamp, quantity, cropType) {
         const cropMap = {
             "corn": "玉米",
             "apple": "苹果",
             "potato": "土豆"
         };

         return "[" + timestamp + "] [农场] 种植了 " + quantity + " 个" + (cropMap[cropType] || cropType) + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Farm\] (.+?) (\d+) (.+?)\(s\)\.$/,
     function(match, timestamp, action, quantity, cropType) {
         const actionMap = {
             "Planted": "种植了",
             "Harvested": "收获了",
             "Removed": "移除了"
         };

         const cropMap = {
             "corn": "玉米",
             "apple": "苹果",
             "potato": "土豆"
         };

         return "[" + timestamp + "] [农场] " + (actionMap[action] || action) + " " + quantity + " 个" + (cropMap[cropType] || cropType) + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Farm\] A warm, earthy aroma rises from the soil\. The Soilwarden offers a rare smile; your (.+?) is ready for reaping\.$/,
     function(match, timestamp, cropType) {
         const cropMap = {
             "Corn": "玉米",
             "Apple": "苹果",
             "Potato": "土豆"
         };

         return "[" + timestamp + "] [农场] 温暖的泥土香气从土壤中升起。土壤守护者难得地微笑；你的" + (cropMap[cropType] || cropType) + "已准备好收割。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Farm\] Harvested (.+?) and gained (\d+) Farming XP\.$/,
     function(match, timestamp, harvestedItems, xpAmount) {
         const cropMap = {
             "corn": "玉米",
             "apple": "苹果",
             "potato": "土豆"
         };

         let translatedItems = harvestedItems;
         for (const [en, cn] of Object.entries(cropMap)) {
             translatedItems = translatedItems.replace(new RegExp(en, 'g'), cn);
         }

         return "[" + timestamp + "] [农场] 收获了 " + translatedItems + " 并获得了 " + xpAmount + " 点耕种经验值。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Farm\] Harvested (\d+) (.+?) and gained (\d+) Farming XP\.$/,
     function(match, timestamp, quantity, cropType, xpAmount) {
         const cropMap = {
             "corn": "玉米",
             "apple": "苹果",
             "potato": "土豆"
         };

         return "[" + timestamp + "] [农场] 收获了 " + quantity + " 个" + (cropMap[cropType] || cropType) + " 并获得了 " + xpAmount + " 点耕种经验值。";
     }],
    [/^Dungeon foods are considered simple foods\. As such, the crafting success rate is 100%, and they are always crafted at normal quality\.$/,
     function(match) {
         return "地下城食物被视为简单食物。因此，制作成功率为100%，并且总是以普通品质制作。";
     }],
    [/^Higher Kitchen level and cooking level impacts the food's quality outcome\. Higher quality food has a longer duration\.$/, '更高的厨房等级和烹饪等级会影响食物的品质结果。更高质量的食物有更长的持续时间。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You exchanged 100 (.+?) and learned the recipe for (.+?)!$/,
     function(match, timestamp, resource, recipe) {
         const resourceMap = {
             "Corn": "玉米",
             "Apples": "苹果",
             "Potatoes": "土豆",
         };
         const recipeMap = {
             "Cornbread": "玉米面包",
             "Apple Cider": "苹果酒",
             "Potato Blaster": "土豆爆破器",
             "Potato-Blaster": "土豆爆破器",
         };
         const translatedResource = resourceMap[resource] || resource;
         const translatedRecipe = recipeMap[recipe] || recipe;
         return "[" + timestamp + "] 你交换了100个" + translatedResource + "并学会了" + translatedRecipe + "的配方！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You exchanged ([\d,]+) Leviathan Scale\(s\) and learned the recipe for (.+)!$/,
     function(match, timestamp, scaleCount, recipeName) {
         const recipeMap = { "Fish Stew": "鱼汤", "Grilled Fish": "烤鱼", "Eel Broth": "鳗鱼汤" };
         return "[" + timestamp + "] 你交换了 " + scaleCount + " 个利维坦鳞片并学会了" + (recipeMap[recipeName] || recipeName) + "的配方！";
     }],

    // ========== 消耗品使用 ==========
    [/^Deals damage to the enemy equal to ([\d.]+)% of its maximum health\.$/,
     function(match, percent) {
         return "对敌人造成等于其最大生命值" + percent + "%的伤害。";
     }],
    [/^Heals the party for ([\d.]+)% of their maximum health \(no overheal\)\.$/,
     function(match, percent) {
         return "治疗全队" + percent + "%的最大生命值（不会过量治疗）。";
     }],
    [/^Heals the party for ([\d.]+)% of their maximum health\.$/,
     function(match, percentage) {
         return "治疗全队" + percentage + "%的最大生命值。";
     }],
    [/^Party Health$/, '队伍生命值'],
    [/^(\d+)% Party Health$/, '$1% 队伍生命值'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) (.+?) heals the party for ([\d,]+\.\d+) health\.$/, '$1 $2为队伍治疗了$3生命值。'],
    [/heals the party for ([\d,]+\.\d+) health/, '为队伍治疗了$1生命值'],
    [/^Party-wide buff for (\d+) seconds: \+([\d.]+)% damage dealt, \+([\d.]+)% damage taken\. Can only be used by the party leader\.$/,
     function(match, duration, damageDealt, damageTaken) {
         return "全队" + duration + "秒增益：+" + damageDealt + "%造成的伤害，+" + damageTaken + "%受到的伤害。只能由队伍领袖使用。";
     }],
    [/^Increases (all damage you deal|all healing you do|the amount of your personal Health contributed to the party's maximum HP|your thorns damage) by ([\d.]+)% while in a dungeon(?: if your role is (Battler|Miner|Woodcutter))?(?: \(all roles\))?\.$/,
     function(match, effect, percentage, role) {
         const effectMap = {
             "all damage you deal": "造成的所有伤害",
             "all healing you do": "进行的所有治疗",
             "the amount of your personal Health contributed to the party's maximum HP": "个人生命值贡献给队伍最大生命值的量",
             "your thorns damage": "荆棘伤害"
         };

         const roleMap = {
             "Battler": "战斗者",
             "Miner": "矿工",
             "Woodcutter": "伐木工"
         };

         let result = "在地下城中，" + effectMap[effect] + "增加" + percentage + "%";

         if (role) {
             result += "（当角色为" + roleMap[role] + "时）";
         } else if (match.includes("all roles")) {
             result += "（所有角色）";
         }

         return result + "。";
     }],
    [/Increases all damage you deal by ([\d\.]+)% while in a dungeon if your role is Battler, Hunter, or Fisher\./g,
     function(match, percentage) {
         return "当你的角色为战斗者、猎人或渔夫时，在地下城中你造成的所有伤害增加" + percentage + "%。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] (.+?) uses Apple Cider! The party feels a surge of power!$/,
     "[$1] $2 使用了苹果酒！队伍感受到一股力量涌动！"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] (.+?) uses (.+?)! (.+)$/,
     function(_, timestamp, playerName, itemName, effect) {
         const itemMap = {"Apple Cider":"苹果酒","Potato Blaster":"土豆爆破器","Cornbread":"玉米面包","Potato-Blaster":"土豆爆破器"};
         const effectMap = {"The party feels a surge of power!":"队伍感受到一股力量涌动！","The party is healed!":"队伍得到治疗！","It deals damage to the enemy!":"对敌人造成伤害！"};
         return `[${timestamp}] ${playerName} 使用了${itemMap[itemName] || itemName}！${effectMap[effect] || effect}`;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] The effects of the (.+?) have worn off\.$/,
     function(_, timestamp, itemName) {
         const itemMap = {"Apple Cider":"苹果酒","Cornbread":"玉米面包","Potato Blaster":"土豆爆破器","Potato-Blaster":"土豆爆破器","Grilled Fish":"烤鱼","Fish Stew":"鱼汤","Eel Broth":"鳗鱼汤"};
         return `[${timestamp}] ${itemMap[itemName] || itemName}的效果已消失。`;
     }],

    // ========== 装备与弩 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Equipped Level (\d+) (\[.*?\]) (.+)\.$/,
     function(match, timestamp, level, rarity, itemName) {
         // 翻译稀有度
         const rarityMap = {
             "[Poor]": "[劣质]",
             "[Common]": "[普通]",
             "[Uncommon]": "[罕见]",
             "[Rare]": "[稀有]",
             "[Epic]": "[史诗]",
             "[Legendary]": "[传说]",
             "[Unique]": "[独特]"
         };

         // 翻译物品名称
         const itemMap = {
             "Sword": "剑",
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Fishing Rod": "鱼竿",
             "Crossbow": "弩",
             "Helm of Learning": "学问之盔"
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] 已装备等级 " + level + " " + translatedRarity + " " + translatedItem + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You have been equipped with a (.+?) Crossbow \(Lvl (\d+)\) to begin your journey on the Hunter's Path!$/,
     function(_, timestamp, quality, level) {
         const qualityMap = {"Common":"普通","Uncommon":"罕见","Rare":"稀有","Epic":"史诗","Legendary":"传说","Unique":"独特"};
         return `[${timestamp}] 您已装备了一把[${qualityMap[quality] || quality}]弩（等级 ${level}）来开始您在猎人之路的旅程！`;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You have run out of Bolts! Switching to Battling\.$/,
     "[$1] 您的弩箭已用尽！切换到战斗活动。"],
    [/^Fletch Bolts \((\d+) per tick\)$/, "制作弩箭（$1每tick）"],
    [/^Bolts left: ([\d,]+)  •  Time to deplete Bolts: (\d+)d:(\d+)h:(\d+)m:(\d+)s$/,
     '弩箭剩余：$1 • 耗尽时间：$2天$3小时$4分$5秒'],

    // ========== 战斗与狩猎 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Fight\] You dealt ([\d,]+\.\d+) hunt damage\. Alpha Wolf HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/,
     "[$1] [战斗] 您造成了$2狩猎伤害。狼王生命值：$3/$4（$5%）。"],
    [/^\[Fight\] You dealt ([\d,]+\.\d+) (battle|chop|fishing) damage\. (Boss|Treant|Leviathan) HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 您造成了$1$2伤害。$3生命值：$4/$5（$6%）。'],
    [/^Your chance to hit while hunting is ([\d\.]+)%\.$/, "您在狩猎时的命中几率为$1%。"],
    [/^([\d\.]+)% \(for ([\d\.]+) Game Carcass\)$/, '$1%（对应$2个猎物尸体）'],
    [/^\(Catch Chance: ([\d.]+)%\)$/, '（捕获几率：$1%）'],
    [/^Total: ([\d.]+)%$/, '总计：$1%'],
    [/^(\d+):(\d+) \((\d+)%\)$/, '$1:$2（$3%）'],
    [/^Hunting Hit Chance: ([\d.]+)%$/, "狩猎命中几率：$1%"],
    [/^Hunting XP: ([\d,]+) \/ ([\d,]+)$/, "狩猎经验：$1 / $2"],
    [/^(Mining|Woodcutting|Fishing|Battler|Cooking|Hunting|Farming|Refining): ([\d,]+) \/ ([\d,]+)$/,
     function(match, skill, current, max) {
         const skillMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Fishing": "钓鱼",
             "Battler": "战斗者",
             "Cooking": "烹饪",
             "Hunting": "狩猎",
             "Farming": "耕种",
             "Refining": "精炼",
         };
         return (skillMap[skill] || skill) + ": " + current + " / " + max;
     }],
    [/^(.+): ([\d.,]+) \/ ([\d.,]+)$/,
     function(match, skillName, currentXP, requiredXP) {
         const skillMap = { "Cooking": "烹饪" };
         return (skillMap[skillName] || skillName) + ': ' + currentXP + ' / ' + requiredXP;
     }],
    [/^\(Hit Chance: ([\d.]+)%\)$/, "（命中几率：$1%）"],

    // ========== 饥饿与状态 ==========
    [/^Hunger: (\d+)%$/, "饥饿度：$1%"],
    [/^Hunger: ([\d.]+)\/([\d.]+)$/, "饥饿度：$1/$2"],
    [/^Active Buffs \((\d+)\)$/, "激活增益 ($1)"],
    [/^All buffs have a max duration of (\d+) hours?$/, function(match, hours) {
        return `所有增益的最大持续时间为${hours}小时`;
    }],
    [/^Health: ([\d,]+) \/ ([\d,]+)$/, "生命值：$1 / $2"],
    [/^Gain since reset: ([\d,]+)$/, "重置后增益: $1"],
    [/^Gain\/tick: ([\d,]+(?:\.\d+)?)  •  Gain\/hr: ([\d,]+)  •  Gain\/day: ([\d,]+)$/,
     '每刻增益：$1 • 每小时增益：$2 • 每日增益：$3'],
    [/^Party (\d+) \(Lvl (\d+)\) - (\d+)\/(\d+) players - Room (\d+)$/, '队伍 $1（等级 $2）- $3/$4 玩家 - 房间 $5'],
    [/^Eel finds: ([\d,]+)  •  Eel finds\/hr: ([\d,]+)$/, "鳗鱼发现：$1  •  每小时鳗鱼发现：$2"],
    [/^Rare finds: ([\d,]+)  •  Rare finds\/hr: ([\d,]+)$/, "稀有发现：$1  •  每小时稀有发现：$2"],
    [/^Output remaining: ([\d,]+) \| XP remaining: ([\d,]+)$/, "剩余产出：$1 | 剩余经验值：$2"],
    [/^Level$/, '等级'],
    [/^Level (\d+)$/, '等级 $1'],
    [/^- (\d+)% Complete$/, '- $1% 完成'],
    [/^Base Power$/, '基础力量'],
    [/^Base Power: ([\d.]+) \+ ([\d.]+) \(Enhanced x(\d+)\)$/,
     function(match, basePower, bonus, enhanceCount) {
         return "基础力量: " + basePower + " + " + bonus + " (强化 x" + enhanceCount + ")";
     }],
    [/^Rarity Multiplier Bonus: \+([\d.]+) \(Enhanced x(\d+)\)$/,
     function(match, bonus, enhanceCount) {
         return "稀有度乘数奖励: +" + bonus + " (强化 x" + enhanceCount + ")";
     }],
    [/^Base Power: ([\d.]+)$/, "基础力量: $1"],
    [/Base Power: ([\d.]+)/, "基础力量: $1"],
    [/^(\d+)(?:st|nd|rd|th) Place$/,
     function(match, rank) {
         const rankMap = {
             "1": "第一名",
             "2": "第二名",
             "3": "第三名"
         };
         return rankMap[rank] || "第" + rank + "名";
     }],

    // 建议添加的后备规则
    [/^(\w+): ([\d,]+)$/, "$1: $2"], // 通用格式：标签: 数字
    [/^(\w+): ([\d.]+)\/([\d.]+)$/, "$1: $2/$3"], // 通用格式：标签: 数字/数字
    [/^(\w+) \((\d+)\)$/, "$1 ($2)"], // 通用格式：标签 (数字)

    // ========== 防御与工匠 ==========
    [/^Build Defenses \((\d+) artisans\)$/, "建造防御工事（$1名工匠）"],
    [/^Return to last task \((\d+) artisans\)$/, "返回上次任务（$1名工匠）"],
    [/^Allows you to hire a mercenary for up to (\d+) hours to automatically join combat events or start dungeon runs\. When joining combat events, the mercenary takes an ([\d.]+)% cut of all rewards as payment\.$/,
     '允许您雇佣一名佣兵最多$1小时，自动加入战斗事件或开始地下城运行。加入战斗事件时，佣兵将收取所有奖励的$2%作为报酬。'],
    [/^Increases your reward split from mercenary-led combat events to ([\d]+)%\.$/, "将你在雇佣兵领导的战斗事件中的奖励分成提高至$1%。"],
    [/^\. Each enhancement level permanently increases your share of the mercenary's combat event rewards by \+(\d+)% \(from a base of (\d+)%\)\.$/,
     '。每个强化等级永久增加您从雇佣兵战斗事件奖励中的份额+$1%（从基础$2%开始）。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Mercenary\] You have hired a mercenary to auto-join boss events for (\d+) hours?\.$/,
     function(match, timestamp, hours) {
         return timestamp + ' [雇佣兵] 你已雇佣了一名雇佣兵，自动加入Boss事件，持续 ' + hours + ' 小时。';
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Mercenary\] You have hired a mercenary to auto-start dungeons for (\d+) hours?\.$/,
     function(match, timestamp, hours) {
         return "[" + timestamp + "] [雇佣兵] 你已雇佣了一名雇佣兵，自动开始地下城，持续 " + hours + " 小时。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Mercenary\] Dungeon contract: auto-started a Level (\d+) dungeon as (.+)\.$/,
     function(match, timestamp, level, role) {
         const roleMap = {
             "battler": "战斗者",
             "miner": "矿工",
             "woodcutter": "伐木工"
         };
         return "[" + timestamp + "] [雇佣兵] 地下城合同：自动开始了一个等级 " + level + " 地下城，角色为" + (roleMap[role] || role) + "。";
     }],
    [/\[Mercenary\] Boss contract: your blade has joined the Boss Fight\./, '[雇佣兵] Boss合同：你的刀刃已加入Boss战。'],
    [/\[Mercenary\] Boss contract: your blade has joined the Ancient Treant\./, '[雇佣兵] Boss合同：你的刀刃已加入远古树人战斗。'],
    [/\[Mercenary\] Boss contract: your blade has joined the Runic Golem\./, '[雇佣兵] Boss合同：你的刀刃已加入符文魔像战斗。'],
    [/\[Mercenary\] Boss contract: your blade has joined the The Leviathan from the Depths\./, '[雇佣兵] Boss合同：你的刀刃已加入深渊利维坦战斗。'],
    [/^Rewards are split based on damage and time contributed\. The base pool starts at (\d+) and increases by (\d+)% on each success\.$/,
     '奖励根据造成的伤害和贡献的时间分配。基础池从$1开始，每次成功增加$2%。'],
    [/^Your journey is defined by (\d+) core skills\. You gain experience \(XP\) by performing related activities, which you can select on the "Main" tab\.$/,
     '您的旅程由$1项核心技能定义。您可以通过执行相关活动来获得经验（XP），您可以在"主界面"选项卡上选择。'],
    [/^Harvest (.+)$/,
     function(match, emoji) {
         return "收获 " + emoji;
     }],
    [/^Fill (\d+)$/,
     function(match, quantity) {
         return "填单 " + quantity;
     }],

    // ========== 合同与竞赛 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Contract awarded to (.+) with a bid of ([\d,]+) Gold\.$/,
     function(match, timestamp, recipient, bidAmount) {
         return "[" + timestamp + "] 合同授予 " + recipient + " 以出价 " + bidAmount + " 金币。";
     }],
    [/^Contract awarded to (.+) with a bid of$/,
     function(match, playerName) {
         return "合同授予 " + playerName + "，出价为";
     }],
    [/Contract: (\d+)x/,
     function(match, quantity) {
         return "合同：" + quantity + "x";
     }],
    //     [/^Contract awarded to (.+) with a bid of ([\d,]+) Gold\.$/,
    //      function(match, recipient, bidAmount) {
    //          return "合同授予 " + recipient + " 以出价 " + bidAmount + " 金币。";
    //      }],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] (.*?) failed to fulfill the contract in time\.$/,
     function(match, timestamp, playerName) {
         return "[" + timestamp + "] [事件] " + playerName + " 未能按时履行合同。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] Bidding has closed! (.+?) won the contract with a bid of ([\d,]+) gold\.$/,
     function(match, timestamp, winner, bidAmount) {
         return "[" + timestamp + "] [事件] 投标已结束！" + winner + " 以 " + bidAmount + " 金币的出价赢得了合同。";
     }],
    [/\[Event\] The boss endured\. Your hired blade contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) battle damage, earning you ([\d,]+\.\d+) Boss Tokens from the ([\d%]+) consolation pool \(after their ([\d%]+) cut\)\./, '[事件] Boss承受住了攻击。你雇佣的刀刃贡献了$1 ticks并造成了$2战斗伤害，从$4的安慰奖池中为你赢得了$3 Boss代币（扣除他们$5的抽成后）。'],
    [/\[Event\] The Ancient Treant withdrew\. Your hired blade contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) chop damage, earning you ([\d,]+\.\d+) Treant Resin from the ([\d%]+) consolation pool \(after their ([\d%]+) cut\)\./, '[事件] 远古树人撤退了。你雇佣的刀刃贡献了$1 ticks并造成了$2砍击伤害，从$4的安慰奖池中为你赢得了$3树人树脂（扣除他们$5的抽成后）。'],
    [/\[Event\] The Runic Golem withstood the assault\. Your hired blade contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) pick damage, earning you ([\d,]+\.\d+) Rune Shards from the ([\d%]+) consolation pool \(after their ([\d%]+) cut\)\./, '[事件] 符文魔像承受住了攻击。你雇佣的刀刃贡献了$1 ticks并造成了$2镐击伤害，从$4的安慰奖池中为你赢得了$3符文碎片（扣除他们$5的抽成后）。'],
    [/\[Event\] The Leviathan returned to the depths\. Your hired blade contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) fishing damage, earning you ([\d,]+\.\d+) Leviathan Scales from the ([\d%]+) consolation pool \(after their ([\d%]+) cut\)\./, '[事件] 利维坦返回了深渊。你雇佣的刀刃贡献了$1 ticks并造成了$2钓鱼伤害，从$4的安慰奖池中为你赢得了$3利维坦鳞片（扣除他们$5的抽成后）。'],
    [/Bidding Open \(ends in Expired\)/,
     function(match) {
         return "投标开放 (已过期)";
     }],
    [/^Active Conclave Competition: (.+)$/,
     function(_, competitionType) {
         const competitionMap = {"Secret":"秘密","Secret 3":"秘密 3","Secret 4":"秘密 4","Bountiful Harvest": "丰收庆典","Hunter's Harvest":"猎人收获","Dungeon Completions":"地下城完成数","Donation Points":"捐赠点数","Rare Finds":"稀有发现","Goblin Defense":"哥布林防御"};
         return `活跃公会竞赛：${competitionMap[competitionType] || competitionType}`;
     }],
    [/^\(Today's reward: (.+?)\)$/,
     function(match, reward) {
         const rewardMap = {
             "Oceanic Essence": "海洋精华",
             "Crystallized Anima": "生命结晶",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液"
         };

         return "（今日奖励：" + (rewardMap[reward] || reward) + "）";
     }],
    [/^\(Votes: (\d+)\)$/, '（投票：$1）'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Conclave\] Founder (.*?) has set the Conclave tithe rate to (\d+)%\.$/,
     function(match, timestamp, founderName, rate) {
         return "[" + timestamp + "] [公会] 创始人 " + founderName + " 已将公会税率设置为" + rate + "%。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You have applied to join the (.+) Conclave\.$/,
     function(match, timestamp, conclaveName) {
         return "[" + timestamp + "] 你已申请加入 " + conclaveName + " 公会。";
     }],
    [/^Member of (.+)$/,
     function(match, guildName) {
         const guildMap = { /* ... */ };
         return (guildMap[guildName] || guildName) + " 成员";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Conclave\] The (.+?) has been upgraded to Level (\d+)!$/,
     function(match, timestamp, buildingName, level) {
         const buildingMap = {
             "Coral sanctuary": "珊瑚保护区",
             "Seismic Quarry": "地震采石场",
             "Amber Mill": "琥珀磨坊",
             "Anima Collector": "生命收集器",
             "Artisan's Conclave": "工匠公会"
             // 可以添加更多建筑名称映射
         };

         const translatedBuilding = buildingMap[buildingName] || buildingName;
         return "[" + timestamp + "] [公会] " + translatedBuilding + " 已升级到等级 " + level + "！";
     }],
    [/^(.+?) - (.+?) \((\d+)% tithe\)$/,
     function(match, conclaveName, playerInfo, titheRate) {
         return conclaveName + " - " + playerInfo + " (" + titheRate + "% 税率)";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Conclave\] (.+?) has set the Conclave (.+?) to (.+)\.$/,
     function(match, timestamp, memberName, settingType, value) {
         const settingMap = {
             "tithe rate": "税率",
             "recruitment message": "招募消息",
             "internal message": "内部消息"
         };

         return "[" + timestamp + "] [公会] " + memberName + " 已将公会" +
             (settingMap[settingType] || settingType) + "设置为" + value + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You have kicked (.+) from the Conclave\.$/,
     function(match, timestamp, playerName) {
         return timestamp + ' 你已将 ' + playerName + ' 从公会中踢出。';
     }],
    [/^No (.+?) has been set\.$/,
     function(match, messageType) {
         const messageMap = {
             "internal message": "内部消息",
             "recruitment message": "招募消息",
             "welcome message": "欢迎消息"
         };

         return "未设置" + (messageMap[messageType] || messageType) + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The daily Conclave Competition has ended! Congratulations to the winners: (.+?) \((\d+)(?:st|nd|rd|th)\), (.+?) \((\d+)(?:st|nd|rd|th)\), (.+?) \((\d+)(?:st|nd|rd|th)\)!$/,
     function(match, timestamp, firstGuild, firstRank, secondGuild, secondRank, thirdGuild, thirdRank) {
         const rankMap = {
             "1": "第一名",
             "2": "第二名",
             "3": "第三名"
         };

         return "[" + timestamp + "] [事件] 每日公会竞赛已结束！恭喜获胜者：" + firstGuild + "（" + rankMap[firstRank] + "），" + secondGuild + "（" + rankMap[secondRank] + "），" + thirdGuild + "（" + rankMap[thirdRank] + "）！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The daily Conclave Competition has ended! Congratulations to the winners: (.+?)!$/,
     function(match, timestamp, winnersList) {
         let translatedWinners = winnersList
         .replace(/\(1st\)/g, "（第一名）")
         .replace(/\(2nd\)/g, "（第二名）")
         .replace(/\(3rd\)/g, "（第三名）")
         .replace(/\(4th\)/g, "（第四名）")
         .replace(/\(5th\)/g, "（第五名）");

         return "[" + timestamp + "] [事件] 每日公会竞赛已结束！恭喜获胜者：" + translatedWinners + "！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Artisan's Tournament has begun! The chosen skill is (.+)\.$/,
     function(match, timestamp, skill) {
         const skillMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Cooking": "烹饪",
             "Crafting": "制作",
             "Hunting": "狩猎",
         };
         const translatedSkill = skillMap[skill] || skill;
         return "[" + timestamp + "] [事件] 工匠锦标赛已经开始！选定技能是" + translatedSkill + "。";
     }],

    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The (.+) Tournament has ended! Congratulations to the winners: (.+)$/,
     function(match, timestamp, skill, winners) {
         const skillMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Cooking": "烹饪",
             "Crafting": "制作",
             "Hunting": "狩猎",
         };
         const translatedSkill = skillMap[skill] || skill;
         return "[" + timestamp + "] [事件] " + translatedSkill + "锦标赛已结束！恭喜获胜者：" + winners;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The (.+?) Tournament has ended! There were no participants\. The mayor is furious!$/,
     function(match, timestamp, skill) {
         const skillMap = {
             "Crafting": "制作",
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Cooking": "烹饪"
         };

         const translatedSkill = skillMap[skill] || skill;

         return "[" + timestamp + "] [事件] " + translatedSkill + "锦标赛已结束！没有参与者。市长非常愤怒！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] Congratulations! You placed #(\d+) in the (.+?) Tournament, earning ([\d,]+\.?\d*) (.+?)!$/,
     function(match, timestamp, rank, skill, amount, resource) {
         const skillMap = {
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Fishing": "钓鱼",
             "Cooking": "烹饪",
             "Crafting": "制作",
             "Hunting": "狩猎",
         };
         const resourceMap = {
             "Crystallized Anima": "生命结晶",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片",
             "Boss Tokens": "Boss代币",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Oceanic Essence": "海洋精华",
             "Artisan's Marks": "工匠印记",
             "Abyssal Eel": "深渊鳗鱼",
             "Lunar Essence": "月华精华",
         };

         const translatedSkill = skillMap[skill] || skill;
         const translatedResource = resourceMap[resource] || resource;

         return "[" + timestamp + "] [事件] 恭喜！你在" + translatedSkill + "锦标赛中获得了第" + rank + "名，赢得了" + amount + "个" + translatedResource + "！";
     }],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The auction has ended! (.+) won the (\[[^\]]+\]) ([^\(]+) \(Lvl (\d+)\) for ([\d,]+) gold!$/, function (match, timestamp, player, quality, itemType, level, gold) {
        const qualityMap = { "[Poor]": "[劣质]", };
        const itemMap = { "Pickaxe": "镐子", "Axe": "斧子", "Sword": "剑", "Fishing Rod": "鱼竿", };
        const translatedQuality = qualityMap[quality] || quality;
        const translatedItem = itemMap[itemType.trim()] || itemType;
        return timestamp + ' [事件] 拍卖结束！' + player + '以' + gold + '金币赢得了' + translatedQuality + translatedItem + '（等级' + level + '）！';
    }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] The Harbormaster has posted a new contract! Bidding is now open\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [事件] 港务长已发布新合同！投标现已开放。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Your bid has been submitted to the merchant for review\.\.\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] 你的出价已提交给商人审核...";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You bid ([\d,]+) gold on the \[(.*?)\] (.+?) \(Lvl (\d+)\)\. You are the new highest bidder!$/,
     function(match, timestamp, bidAmount, rarity, itemName, level) {
         const rarityMap = { "Poor": "劣质", };
         const itemMap = { "Pickaxe": "镐子", "Axe": "斧子", "Sword": "剑", "Fishing Rod": "鱼竿", };
         return "[" + timestamp + "] 你对 [" + (rarityMap[rarity] || rarity) + "]" + (itemMap[itemName] || itemName) + "（等级 " + level + "）出价 " + bidAmount + " 金币。你成为了新的最高出价者！";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You have been outbid by (.+?) on the \[(.*?)\] (.+?) \(Lvl (\d+)\)! Your ([\d,]+) gold has been returned\. The auction was extended by (\d+) seconds\.$/,
     function(match, timestamp, outbidBy, rarity, itemName, level, returnedGold, extendedSeconds) {
         const rarityMap = { "Poor": "劣质", };
         const itemMap = { "Pickaxe": "镐子", "Axe": "斧子", "Sword": "剑", "Fishing Rod": "鱼竿", };
         return "[" + timestamp + "] 你被 " + outbidBy + " 在 [" + (rarityMap[rarity] || rarity) + "]" + (itemMap[itemName] || itemName) + "（等级 " + level + "）上超过了出价！你的 " + returnedGold + " 金币已返还。拍卖延长了 " + extendedSeconds + " 秒。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Your bid of ([\d,]+) gold is not high enough\. The minimum bid is now ([\d,]+) gold\.$/,
     function(match, timestamp, bidAmount, minBid) {
         return "[" + timestamp + "] 你的出价 " + bidAmount + " 金币不够高。最低出价现在是 " + minBid + " 金币。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] You have been outbid by (.+?) on the \[(.*?)\] (.+?) \(Lvl (\d+)\)! Your ([\d,]+) gold has been returned\.$/,
     function(match, timestamp, outbidBy, quality, itemName, level, returnedGold) {
         // 品质映射
         const qualityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         // 物品名称映射
         const itemMap = {
             "Axe": "斧子",
             "Pickaxe": "镐子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
         };

         const translatedQuality = qualityMap[quality] || quality;
         const translatedItem = itemMap[itemName] || itemName;

         // 保持出价者名称不变（包含公会标签）
         return "[" + timestamp + "] 你被 " + outbidBy + " 在 [" + translatedQuality + "]" + translatedItem + " (等级 " + level + ") 上出价超过！你的 " + returnedGold + " 金币已返还。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Event\] You won the auction for the \[(.*?)\] (.+?) \(Lvl (\d+)\) with a bid of ([\d,]+) gold!$/,
     function(match, timestamp, rarity, itemName, level, bidAmount) {
         // 稀有度映射
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特",
         };

         // 物品名称映射
         const itemMap = {
             "Sword": "剑",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] [事件] 你以 " + bidAmount + " 金币的出价赢得了 [" + translatedRarity + "]" + translatedItem + "（等级 " + level + "）的拍卖！";
     }],
    [/^Secret (\d+)$/, "秘密 $1"],

    // ========== 制作状态 ==========
    [/^--Crafting Active, (\d+) left, time: (\d{2}:\d{2})--$/, "--制作进行中，剩余 $1 个，时间: $2--"],

    // ========== 地下城 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon\] This dungeon run has already completed\.$/,
     "[$1] [地下城] 这个地下城运行已经完成。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] The party has been defeated! The room resets\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] 队伍已被击败！房间重置。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Invalid auto-dungeon level preference received\.$/,
     "[$1] 收到了无效的自动地下城等级偏好设置。"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon\] The Harbormaster's ledger records a new party formed by (.+), seeking to conquer a Level (\d+) dungeon\.$/,
     '[$1] [地下城] 港务长的账本记录了由$2组建的新队伍，试图征服等级$3的地下城。'],
    [/^Dungeon Announcements \(New party formed, party needs help\)$/,
     function() {
         return "地下城公告 (新队伍组建，队伍需要帮助)";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon Help\] (.+) is requesting aid for party #(\d+) in a Level (\d+) dungeon!$/,
     function(match, timestamp, playerInfo, partyId, level) {
         return "[" + timestamp + "] [地下城求助] " + playerInfo + " 正在为队伍 #" + partyId + " 请求援助，该队伍正在挑战等级 " + level + " 的地下城！";
     }],
    [/\[Dungeon Help\] (.*?) is requesting aid for party #(\d+) in a Level (\d+) dungeon!/, function (match, player, partyId, level) {
        return '[地下城求助] ' + player + ' 正在为队伍 #' + partyId + ' 请求援助，该队伍正在挑战等级 ' + level + ' 的地下城！';
    }],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Dungeon Help\] (.+) is requesting aid for party #(\d+) in a Level (\d+) dungeon!$/, '$1 [地下城求助] $2正在为队伍#$3请求援助，该队伍正在挑战等级$4的地下城！'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon Help\] (.+) is requesting aid for party #([\d,]+) in a Level (\d+) dungeon!$/,
     "[$1] [地下城求助] $2 正在为队伍 #$3 请求援助，该队伍正在挑战等级 $4 的地下城！"],
    [/\[Dungeon Help\] (.+?) is requesting aid for party #(\d+) in a Level (\d+) dungeon!/, '[地下城求助] $1 正在为队伍 #$2 请求援助，该队伍正在挑战等级 $3 的地下城！'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon\] Created party #(\d+) at Level (\d+) as (.+)\.$/,
     function(match, timestamp, partyId, level, role) {
         const roleMap = {
             "battler": "战斗者",
             "miner": "矿工",
             "woodcutter": "伐木工"
         };

         const translatedRole = roleMap[role] || role;
         return "[" + timestamp + "] [地下城] 创建了队伍 #" + partyId + " 等级 " + level + " 作为 " + translatedRole + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon\] Joined party #(\d+) as (.+)\.$/,
     function(match, timestamp, partyId, role) {
         const roleMap = {
             "battler": "战斗者",
             "miner": "矿工",
             "woodcutter": "伐木工"
         };
         return "[" + timestamp + "] [地下城] 以" + (roleMap[role] || role) + "身份加入了队伍 #" + partyId + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Dungeon\] You have left the party by changing your activity\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [地下城] 你因切换活动而离开了队伍。";
     }],
    [/^(\[.*?\]) The monster takes ([\d,]+\.\d+) thorns damage from (.+)\.$/, '$1 怪物受到 $2 荆棘伤害来自 $3。'],
    [/^Dungeon cooldown: ([\d:]+)$/, '地下城冷却时间：$1'],
    [/^Dungeon Progress: Room (\d+) \/ (\d+)$/, '地下城进度：房间 $1 / $2'],
    [/^(\[.*?\]) \[Dungeon\] Your party has cleared Dungeon Level (\d+)! Returning you to your previous activity\.$/, '$1 [地下城] 你的队伍已通关地下城等级 $2！将你返回到之前的活动。'],
    [/^(\[.*?\]) \[Dungeon\] You earned ([\d,]+\.\d+) Artisan's Marks for completing the dungeon!$/, '$1 [地下城] 你因完成地下城获得了 $2 工匠印记！'],
    [/^(\[.*?\]) (.+?) attacks, dealing ([\d,]+\.\d+) damage\.$/, '$1 $2发动攻击，造成$3点伤害。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) (The .+?) attacks, dealing ([\d,]+\.\d+) damage to the party\.$/, function(match, timestamp, monster, damage) {
        const monsterMap = {
            "The Goblin Wolfrider": "哥布林狼骑兵",
            "The Goblin Taskmaster": "哥布林监工",
            "The Goblin Cutthroat": "哥布林割喉者",
            "The Goblin Spearman": "哥布林长矛兵",
            "The Goblin Guard": "哥布林守卫",
            "The Goblin Brawler": "哥布林搏斗者",
            "The Goblin Rock-Slinger": "哥布林投石者",
            "The Goblin Skirmisher": "哥布林散兵",
            "The Goblin Soldier": "哥布林士兵",
            "The Goblin Brute": "哥布林蛮兵",
            "The Goblin King": "哥布林国王"
        };

        const translatedMonster = monsterMap[monster] || monster;

        return timestamp + ' ' + translatedMonster + ' 攻击，造成 ' + damage + ' 伤害对队伍。';
    }],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) (The .+?) has been defeated!$/, function(match, timestamp, monster) {
        // 怪物名称映射
        const monsterMap = {
            "The Goblin Wolfrider": "哥布林狼骑兵",
            "The Goblin Taskmaster": "哥布林监工",
            "The Goblin Cutthroat": "哥布林割喉者",
            "The Goblin Spearman": "哥布林长矛兵",
            "The Goblin Guard": "哥布林守卫",
            "The Goblin Brawler": "哥布林搏斗者",
            "The Goblin Rock-Slinger": "哥布林投石者",
            "The Goblin Skirmisher": "哥布林散兵",
            "The Goblin Soldier": "哥布林士兵",
            "The Goblin Brute": "哥布林蛮兵",
            "The Goblin King": "哥布林国王"
        };

        const translatedMonster = monsterMap[monster] || monster;

        return timestamp + ' ' + translatedMonster + ' 已被击败！';
    }],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) The party advances to Room (\d+)\. A (.+?) appears!$/, function(match, timestamp, roomNumber, enemyName) {
        const enemyMap = {
            "Goblin Wolfrider": "哥布林狼骑兵",
            "Goblin Taskmaster": "哥布林监工",
            "Goblin Cutthroat": "哥布林割喉者",
            "Goblin Spearman": "哥布林长矛兵",
            "Goblin Guard": "哥布林守卫",
            "Goblin Brawler": "哥布林搏斗者",
            "Goblin Rock-Slinger": "哥布林投石者",
            "Goblin Skirmisher": "哥布林散兵",
            "Goblin Soldier": "哥布林士兵",
            "Goblin Brute": "哥布林蛮兵",
            "Goblin King": "哥布林国王"
        };
        const translatedEnemy = enemyMap[enemyName] || enemyName;
        return timestamp + ' 小队前进至' + roomNumber + '号房间。一名' + translatedEnemy + '现身！';
    }],
    [/^(\[.*?\]) \[Dungeon\] You earned ([\d,]+\.\d+) Artisan's Marks for clearing a room\.$/, '$1 [地下城] 你获得了 $2 工匠印记用于清理一个房间。'],
    [/^(\[.*?\]) The party is exhausted and must regroup\. The monster regains its strength\.$/, '$1 队伍已精疲力尽，必须重新集结。怪物恢复了力量。'],



    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Default dungeon level saved\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] 默认地下城等级已保存。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Default dungeon role saved\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] 默认地下城角色已保存。";
     }],
    [/^Select a tool to unsocket its Glyph$/,
     function() {
         return "选择一个工具来移除其符文";
     }],

    // ========== 连接错误 ==========
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] Error: Lost connection to server\. Please refresh\.$/,
     "[$1] 错误：与服务器连接丢失。请刷新页面。"],


    // ========== 市场日志 ==========
    [/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] Market log has been cleared\.$/, '[时间] 市场日志已清除。'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] (.+)$/,
     function(match, timestamp, message) {
         const messageMap = { "Username color updated.": "用户名颜色已更新。" };
         return "[" + timestamp + "] " + (messageMap[message] || message);
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Community\]$/,
     "$1 [社区]"],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Community\] (.+) reached Level (\d+)! Votes have been cleared for this building type\.$/,
     function (match, timestamp, buildingName, level) {
         const buildingMap = { "The Grand Library": "大图书馆", /* ... */ };
         return "[" + timestamp + "] [社区] " + (buildingMap[buildingName] || buildingName) + " 达到了等级 " + level + "！此建筑类型的投票已清除。";
     }],
    [/^\[Community\]$/, '[社区]'],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] You already have an open order for this item\.$/,
     function(match, timestamp) {
         return "[" + timestamp + "] [市场] 您已经有一个此物品的未完成订单。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] You sold (\d+) x \[(.*?)\] (.+?) to (.+?) for ([\d,]+\.\d+) gold\.$/,
     function(match, timestamp, quantity, quality, itemName, buyer, price) {
         // 品质映射
         const qualityMap = {
             "Burnt": "烤焦",
             "Normal": "普通",
             "Fine": "优良",
             "Exquisite": "精美",
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特"
         };

         // 物品名称映射（基础物品）
         const baseItemMap = {
             "Grilled Fish": "烤鱼",
             "Fish Stew": "鱼汤",
             "Eel Broth": "鳗鱼汤",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Sword": "剑",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
             "Sigil of Ferocity": "凶猛印记",
             "Sigil of Mending": "修复印记",
             "Sigil of Barbs": "荆棘印记",
             "Sigil of Resilience": "坚韧印记",
             "Glyph of Frugality": "节俭符文",
             "Glyph of Gluttony": "饕餮符文",
             "Glyph of Scavenging": "拾荒符文",
             "Glyph of the Duelist": "决斗者符文",
             "Glyph of the Laborer": "劳动者符文",
             "Glyph of the Philanthropist": "慈善家符文",
             "Glyph of the Prospector": "勘探者符文"
         };

         const translatedQuality = qualityMap[quality] || quality;

         // 处理带等级的物品名称
         let translatedItem = itemName;

         // 检查是否是带等级的物品（格式：物品名 (Lvl 等级)）
         const levelMatch = itemName.match(/^(.+?) \(Lvl (\d+)\)$/);
         if (levelMatch) {
             const baseName = levelMatch[1];
             const level = levelMatch[2];
             const translatedBaseName = baseItemMap[baseName] || baseName;
             translatedItem = translatedBaseName + " (等级 " + level + ")";
         } else {
             // 不带等级的基础物品
             translatedItem = baseItemMap[itemName] || itemName;
         }

         return "[" + timestamp + "] [市场] 你向 " + buyer + " 出售了 " + quantity + " 个 [" + translatedQuality + "]" + translatedItem + "，价格为 " + price + " 金币。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] You sold (\d+) x (.+?) to (.+?) for ([\d,]+\.\d+) gold\.$/,
     function(match, timestamp, quantity, itemName, buyer, price) {
         // 处理不带品质前缀的物品
         const itemMap = {
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Boss Tokens": "Boss代币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片",
             "Iron Bars": "铁锭",
             "Gold Bars": "金锭",
             "Planks": "木板",
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Abyssal Eel": "深渊鳗鱼"
         };

         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] [市场] 你向 " + buyer + " 出售了 " + quantity + " 个 " + translatedItem + "，价格为 " + price + " 金币。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] Placed buy order for ([\d,]+) x (.+?) @ ([\d,]+\.\d+) each\. Reserved ([\d,]+\.\d+) gold\.$/,
     function(match, timestamp, quantity, itemName, price, goldAmount) {
         // 资源名称映射
         const resourceMap = {
             "Oceanic Essence": "海洋精华",
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭",
             "Planks": "木板",
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Boss Tokens": "Boss代币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片",
             "Abyssal Eel": "深渊鳗鱼"
         };

         const translatedItem = resourceMap[itemName] || itemName;

         return "[" + timestamp + "] [市场] 已下购买订单，订购 " + quantity + " x " + translatedItem + " @ " + price + " 每个。预留 " + goldAmount + " 金币。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] Your buy order for (.+?) was partially filled by (.+?): \+(\d+) @ ([\d,]+\.\d+) each\.$/,
     function(match, timestamp, itemName, filledBy, quantity, price) {
         // 资源名称映射
         const resourceMap = {
             "Oceanic Essence": "海洋精华",
             "Gold Bars": "金锭",
             "Iron Bars": "铁锭",
             "Planks": "木板",
             "Logs": "木头",
             "Iron Ore": "铁矿石",
             "Gold": "金币",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Boss Tokens": "Boss代币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片",
             "Abyssal Eel": "深渊鳗鱼"
         };

         const translatedItem = resourceMap[itemName] || itemName;

         return "[" + timestamp + "] [市场] 你的" + translatedItem + "购买订单已被 " + filledBy + " 部分成交：+" + quantity + " @ " + price + " 每个。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] Your buy order has expired\. Refunded ([\d,]+\.\d+) gold\.$/,
     function(match, timestamp, refundAmount) {
         return "[" + timestamp + "] [市场] 你的购买订单已过期。退还 " + refundAmount + " 金币。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] Listed (\d+) x \[(.*?)\] (.+?) \(Lvl (\d+)\) for ([\d,]+\.\d+) gold each\.$/,
     function(match, timestamp, quantity, rarity, itemName, level, price) {
         // 稀有度映射
         const rarityMap = {
             "Poor": "劣质",
             "Common": "普通",
             "Uncommon": "罕见",
             "Rare": "稀有",
             "Epic": "史诗",
             "Legendary": "传说",
             "Unique": "独特",
         };

         // 物品名称映射
         const itemMap = {
             "Sword": "剑",
             "Pickaxe": "镐子",
             "Axe": "斧子",
             "Fishing Rod": "鱼竿",
             "Helm of Learning": "学问之盔",
             "CraftCrossbow": "手工弩",
             "Crossbow": "弩",
         };

         const translatedRarity = rarityMap[rarity] || rarity;
         const translatedItem = itemMap[itemName] || itemName;

         return "[" + timestamp + "] [市场] 已上架 " + quantity + " 个 [" + translatedRarity + "]" + translatedItem + "（等级 " + level + "），每个价格 " + price + " 金币。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] Listed (\d+) x \[(Normal|Fine|Exquisite|Burnt)\] (Grilled Fish|Fish Stew|Eel Broth) for ([\d,]+(?:\.\d{2})?) gold each\.$/,
     function(match, ts, qty, qual, item, price) {
         const q = { Normal: "普通", Fine: "优良", Exquisite: "精美", Burnt: "烤焦" }[qual] || qual;
         const it = { "Grilled Fish": "烤鱼", "Fish Stew": "鱼汤", "Eel Broth": "鳗鱼汤" }[item] || item;
         return `[${ts}] [市场] 已上架 ${qty} 个 [${q}] ${it}，每个价格 ${price} 金币。`;
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] Successfully purchased ([\d,]+\.?\d*) (.+?) from (.+?) for ([\d,]+\.\d+) gold\.(?: You paid an additional ([\d,]+\.\d+) gold in taxes\.)?$/,
     function(match, timestamp, quantity, itemName, seller, price, tax) {
         const itemMap = {
             "Iron Ore": "铁矿石",
             "Iron Bars": "铁锭",
             "Logs": "木头",
             "Planks": "木板",
             "Gold": "金币",
             "Gold Bars": "金锭",
             "Raw Fish": "生鱼",
             "Prepared Fish": "加工鱼",
             "Starfall Ore": "星落矿石",
             "Glimmerwood Sap": "微光树液",
             "Crystallized Anima": "生命结晶",
             "Oceanic Essence": "海洋精华",
             "Boss Tokens": "Boss代币",
             "Treant Resin": "树人树脂",
             "Rune Shards": "符文碎片",
             "Leviathan Scales": "利维坦鳞片",
             "Abyssal Eel": "深渊鳗鱼"
         };

         // 检查是否是带品质和等级的工具
         let translatedItem = itemMap[itemName];

         if (!translatedItem) {
             // 尝试匹配带品质和等级的工具格式 [品质] 工具名 (Lvl 等级)
             const toolMatch = itemName.match(/^\[(.*?)\] (.+?) \(Lvl (\d+)\)$/);
             if (toolMatch) {
                 const [_, rarity, tool, level] = toolMatch;
                 const rarityMap = {
                     "Poor": "劣质",
                     "Common": "普通",
                     "Uncommon": "罕见",
                     "Rare": "稀有",
                     "Epic": "史诗",
                     "Legendary": "传说",
                     "Unique": "独特",
                 };
                 const toolMap = {
                     "Pickaxe": "镐子",
                     "Axe": "斧子",
                     "Sword": "剑",
                     "Fishing Rod": "鱼竿",
                     "Helm of Learning": "学问之盔",
                     "CraftCrossbow": "手工弩",
                     "Crossbow": "弩",
                 };

                 const translatedRarity = rarityMap[rarity] || rarity;
                 const translatedTool = toolMap[tool] || tool;

                 translatedItem = "[" + translatedRarity + "]" + translatedTool + " (等级 " + level + ")";
             }
         }

         if (!translatedItem) {
             // 尝试匹配印记格式 印记名 (等级 等级)
             const sigilMatch = itemName.match(/^(.+?) \(Level (\d+)\)$/);
             if (sigilMatch) {
                 const [_, sigil, level] = sigilMatch;
                 const sigilMap = {
                     "Sigil of Ferocity": "凶猛印记",
                     "Sigil of Mending": "修复印记",
                     "Sigil of Barbs": "荆棘印记",
                     "Sigil of Resilience": "坚韧印记"
                 };

                 const translatedSigil = sigilMap[sigil] || sigil;
                 translatedItem = translatedSigil + " (等级 " + level + ")";
             }
         }

         if (!translatedItem) {
             // 尝试匹配带品质的食物格式 [品质] 食物名
             const foodMatch = itemName.match(/^\[(.*?)\] (.+)$/);
             if (foodMatch) {
                 const [_, quality, food] = foodMatch;
                 const qualityMap = {
                     "Burnt": "烤焦",
                     "Normal": "普通",
                     "Fine": "优良",
                     "Exquisite": "精美"
                 };
                 const foodMap = {
                     "Grilled Fish": "烤鱼",
                     "Fish Stew": "鱼汤",
                     "Eel Broth": "鳗鱼汤"
                 };

                 const translatedQuality = qualityMap[quality] || quality;
                 const translatedFood = foodMap[food] || food;

                 translatedItem = "[" + translatedQuality + "]" + translatedFood;
             }
         }

         // 如果以上都不匹配，保持原名称
         if (!translatedItem) {
             translatedItem = itemName;
         }

         // 根据是否有税费信息决定输出格式
         if (tax) {
             return "[" + timestamp + "] [市场] 成功从 " + seller + " 购买了 " + quantity + " " + translatedItem + "，价格为 " + price + " 金币。您额外支付了 " + tax + " 金币的税费。";
         } else {
             return "[" + timestamp + "] [市场] 成功从 " + seller + " 购买了 " + quantity + " " + translatedItem + "，价格为 " + price + " 金币。";
         }
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] Your listing has canceled\. Returned (\d+) (.*?)\.$/,
     function(match, timestamp, quantity, itemDescription) {
         // 解析物品描述
         let translatedItem = itemDescription;

         // 尝试匹配带品质的食物格式 [品质] 食物名
         const foodMatch = itemDescription.match(/^\[(.*?)\] (.+)$/);
         if (foodMatch) {
             const [_, quality, food] = foodMatch;
             const qualityMap = {
                 "Burnt": "烤焦",
                 "Normal": "普通",
                 "Fine": "优良",
                 "Exquisite": "精美"
             };
             const foodMap = {
                 "Grilled Fish": "烤鱼",
                 "Fish Stew": "鱼汤",
                 "Eel Broth": "鳗鱼汤"
             };

             const translatedQuality = qualityMap[quality] || quality;
             const translatedFood = foodMap[food] || food;

             translatedItem = "[" + translatedQuality + "]" + translatedFood;
         }

         // 可以在这里添加其他物品类型的解析（如工具、符文等）

         return "[" + timestamp + "] [市场] 您的挂单已取消。返还了 " + quantity + " 个 " + translatedItem + "。";
     }],
    [/^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\] \[Market\] Your listing has expired\. Returned (\d+) (.*?)\.$/,
     function(match, timestamp, quantity, itemDescription) {
         // 解析物品描述
         let translatedItem = itemDescription;

         // 首先尝试匹配带等级的物品格式 [品质] 物品名 (Lvl 等级)
         const itemMatch = itemDescription.match(/^\[(.*?)\] (.+?) \(Lvl (\d+)\)$/);
         if (itemMatch) {
             const [_, rarity, itemName, level] = itemMatch;
             const rarityMap = {
                 "Poor": "劣质",
                 "Common": "普通",
                 "Uncommon": "罕见",
                 "Rare": "稀有",
                 "Epic": "史诗",
                 "Legendary": "传说",
                 "Unique": "独特"
             };

             // 所有带等级的物品映射
             const leveledItemMap = {
                 // 工具
                 "Pickaxe": "镐子",
                 "Axe": "斧子",
                 "Sword": "剑",
                 "Fishing Rod": "鱼竿",
                 "CraftCrossbow": "手工弩",
                 "Crossbow": "弩",

                 // 头盔
                 "Helm of Learning": "学问之盔",

                 // 印记
                 "Sigil of Barbs": "荆棘印记",
                 "Sigil of Ferocity": "凶猛印记",
                 "Sigil of Mending": "修复印记",
                 "Sigil of Resilience": "坚韧印记",

                 // 符文
                 "Glyph of Scavenging": "拾荒符文",
                 "Glyph of the Duelist": "决斗者符文",
                 "Glyph of the Laborer": "劳动者符文",
                 "Glyph of the Philanthropist": "慈善家符文",
                 "Glyph of the Prospector": "勘探者符文",
                 "Glyph of Frugality": "节俭符文",
                 "Glyph of Gluttony": "饕餮符文"
             };

             const translatedRarity = rarityMap[rarity] || rarity;
             const translatedItemName = leveledItemMap[itemName] || itemName;

             translatedItem = "[" + translatedRarity + "]" + translatedItemName + "（等级 " + level + "）";
         }
         // 如果没有匹配到带等级的物品，尝试匹配带品质的食物格式 [品质] 食物名
         else {
             const foodMatch = itemDescription.match(/^\[(.*?)\] (.+)$/);
             if (foodMatch) {
                 const [_, quality, food] = foodMatch;
                 const qualityMap = {
                     "Burnt": "烤焦",
                     "Normal": "普通",
                     "Fine": "优良",
                     "Exquisite": "精美"
                 };
                 const foodMap = {
                     "Grilled Fish": "烤鱼",
                     "Fish Stew": "鱼汤",
                     "Eel Broth": "鳗鱼汤"
                 };

                 const translatedQuality = qualityMap[quality] || quality;
                 const translatedFood = foodMap[food] || food;

                 translatedItem = "[" + translatedQuality + "]" + translatedFood;
             }
             // 如果没有匹配到带品质的食物，尝试匹配基础资源
             else {
                 // 基础资源映射表（不带品质和等级）
                 const resourceMap = {
                     "Gold Bars": "金锭",
                     "Iron Bars": "铁锭",
                     "Planks": "木板",
                     "Logs": "木头",
                     "Iron Ore": "铁矿石",
                     "Gold": "金币",
                     "Raw Fish": "生鱼",
                     "Prepared Fish": "加工鱼",
                     "Starfall Ore": "星落矿石",
                     "Glimmerwood Sap": "微光树液",
                     "Crystallized Anima": "生命结晶",
                     "Oceanic Essence": "海洋精华",
                     "Boss Tokens": "Boss代币",
                     "Treant Resin": "树人树脂",
                     "Rune Shards": "符文碎片",
                     "Leviathan Scales": "利维坦鳞片",
                     "Abyssal Eel": "深渊鳗鱼"
                 };

                 // 检查是否是基础资源
                 if (resourceMap[itemDescription]) {
                     translatedItem = resourceMap[itemDescription];
                 }
             }
         }

         return "[" + timestamp + "] [市场] 您的挂单已过期。返还了 " + quantity + " 个 " + translatedItem + "。";
     }],
    [/^(.+?) \((\d+)\)$/,
     function(match, category, count) {
         const categoryMap = {
             "Farming": "耕种",
             "Mining": "采矿",
             "Woodcutting": "伐木",
             "Battling": "战斗",
             "Crafting": "制作",
             "Fishing": "钓鱼",
             "Market": "市场",
             "Community": "社区",
             "Conclave": "公会",
             "Dungeons": "地下城"
         };

         return (categoryMap[category] || category) + " (" + count + ")";
     }],
    [/^(.+?) - (Battler|Miner|Woodcutter)$/,
     function(match, playerName, role) {
         const roleMap = {
             "Battler": "战斗者",
             "Miner": "矿工",
             "Woodcutter": "伐木工"
         };
         return playerName + " - " + (roleMap[role] || role);
     }],
    [/^Marketplace \((\d+)\)$/,
     function(match, count) {
         return "市场 (" + count + ")";
     }],





    // === 脚本状态消息（保持原样）===
    [/^✅ 🎯 检测到采集加成，已选择狩猎活动$/, "✅ 🎯 检测到采集加成，已选择狩猎活动"],
    [/^✅ 🎯 已加入锦标赛$/, "✅ 🎯 已加入锦标赛"],
    [/^ℹ️ 已启用精炼功能$/, "ℹ️ 已启用精炼功能"],
    [/^ℹ️ 已启用弩箭制作$/, "ℹ️ 已启用弩箭制作"],
    [/^ℹ️ 已切换到偏好采集活动: mining$/, "ℹ️ 已切换到偏好采集活动: 采矿"],
    [/^ℹ️ 已切换到偏好精炼活动: 屠宰尸体$/, "ℹ️ 已切换到偏好精炼活动: 屠宰尸体"],
    [/^ℹ️ 已设置偏好精炼活动：屠宰尸体$/, "ℹ️ 已设置偏好精炼活动：屠宰尸体"],
    [/^解析: (\d+)小时(\d+)分钟 -> (\d+)秒$/, "解析: $1小时$2分钟 -> $3秒"],
    [/^解析: (\d+)h -> (\d+)秒$/, "解析: $1小时 -> $2秒"],
    [/^秒前 \| 最后事件检查$/, "秒前 | 最后事件检查"],
    [/^次 \| 事件检查$/, "次 | 事件检查"],
    [/^调试信息: 饥饿度检查$/, "调试信息: 饥饿度检查"],
    [/^全功能自动脚本 v[\d.]+（.*）$/, function(match) { return match; }],
    [/^禁用BOSS$/, "禁用BOSS"],
    [/^特殊BOSS$/, "特殊BOSS"],

    // === 其他固定文本 ===
    [/^工匠锦标赛 \(战斗\)$/, "工匠锦标赛（战斗）"],
    [/^10% $/, "10% "]


]);

var CNITEM_DEBUG = 0;

// 更精确的聊天容器检测
function isInChatContainer(node) {
    if (!node) return false;

    let current = node;
    while (current && current !== document.documentElement) {
        // 精确匹配已知的聊天容器ID
        if (current.id === 'global-chat-messages' ||
            current.id === 'conclave-chat-messages') {
            return true;
        }

        current = current.parentElement;
    }
    return false;
}

// 更严格的聊天内容检测
function isChatContent(text) {
    // 只检测明显的聊天消息格式
    const chatPatterns = [
        /^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\].*<strong>.*?:<\/strong>/, // 完整的聊天消息格式
        /^<strong>.*?:<\/strong>.*$/, // 只有消息内容的格式
    ];

    return chatPatterns.some(pattern => pattern.test(text.trim()));
}

// 处理包含HTML的文本内容
function transHtmlMixedText(html, node) {
    let newHtml = html;

    // 使用更智能的文本提取方法
    let textParts = html.split(/(<[^>]+>)/);
    let changed = false;

    for (let i = 0; i < textParts.length; i++) {
        // 跳过HTML标签
        if (textParts[i].startsWith('<') && textParts[i].endsWith('>')) {
            continue;
        }

        // 翻译纯文本部分
        let text = textParts[i].trim();
        if (text && !text.startsWith('&')) { // 跳过HTML实体
            let translated = cnItem(text, node);
            if (translated !== text) {
                textParts[i] = textParts[i].replace(text, translated);
                changed = true;
            }
        }
    }

    if (changed) {
        return textParts.join('');
    }

    return html;
}

function cnItemByTag(text, itemgroup, node, textori) {
    for (let i in itemgroup) {
        if (i[0] == '.') {
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
        } else if (i[0] == '#') {
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
        } else if (i[0] == '$') {
            if (document.querySelector(i.substr(1)) != null) {
                return itemgroup[i];
            }
        } else if (i[0] == '*') {
            if (textori.includes(i.substr(1))) {
                return itemgroup[i];
            }
        }
    }
    return null;
}

function cnItem(text, node) {
    if (typeof(text) != "string")
        return text;

    let textori = text;

    // 只在明确的聊天容器中排除聊天内容
    if (isInChatContainer(node)) {
        // 在聊天容器中，只排除真正的聊天消息，不排除其他内容
        if (isChatContent(text)) {
            return text;
        }
        // 如果不是聊天消息格式，继续正常处理
    }

    // 处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }

    // 处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }

    // 处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    if (!cnItems._OTHER_)
        cnItems._OTHER_ = [];

    // 检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 遍历尝试匹配
    for (let i in cnItems) {
        if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])) {
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
        } else if (typeof(cnItems[i]) == "object" && text == i) {
            let result = cnItemByTag(i, cnItems[i], node, textori);
            if (result != null) {
                return text_prefix + result + text_reg_exclude_postfix + text_postfix;
            }
        }
    }

    // 调整收录的词锭
    let save_cfg = 1;
    let save_text = save_cfg ? text : textori;

    // 遍历生词表是否收录
    for (let i = 0; i < cnItems._OTHER_.length; i++) {
        if (save_text == cnItems._OTHER_[i])
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    if (cnItems._OTHER_.length < 2000) {
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort((a, b) => a.localeCompare(b));
    }

    CNITEM_DEBUG && console.log('有需要汉化的英文：', text);

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
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                // 检查是否是叶子节点或包含混合内容
                if (!subnode.childNodes || subnode.childNodes.length === 0) {
                    // 如果是叶子节点但有innerHTML，使用混合内容处理
                    if (subnode.innerHTML && subnode.innerHTML.includes('>')) {
                        let newHtml = transHtmlMixedText(subnode.innerHTML, subnode);
                        if (newHtml !== subnode.innerHTML) {
                            transTaskMgr.addTask(subnode, 'innerHTML', newHtml);
                        }
                    } else {
                        let text = subnode.innerText;
                        let cnText = cnItem(text, subnode);
                        cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                    }
                } else {
                    TransSubTextNode(subnode);
                }
            }
        }
    }
}

!function () {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };

    let targetNode = document.body;

    // 汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();

    // 监听页面变化并汉化动态内容
    let observer = new MutationObserver(function (e) {
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA")
                continue;
            if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
            } else if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                // 处理叶子节点的混合内容
                if (mutation.target.innerHTML && mutation.target.innerHTML.includes('>')) {
                    let newHtml = transHtmlMixedText(mutation.target.innerHTML, mutation.target);
                    if (newHtml !== mutation.target.innerHTML) {
                        mutation.target.innerHTML = newHtml;
                    }
                } else if (mutation.target.innerText) {
                    mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
                }
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent, node);
                    } else if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE" && node.nodeName !== "TEXTAREA") {
                        if (!node.childNodes || node.childNodes.length == 0) {
                            // 处理叶子节点的混合内容
                            if (node.innerHTML && node.innerHTML.includes('>')) {
                                let newHtml = transHtmlMixedText(node.innerHTML, node);
                                if (newHtml !== node.innerHTML) {
                                    node.innerHTML = newHtml;
                                }
                            } else if (node.innerText) {
                                node.innerText = cnItem(node.innerText, node);
                            }
                        } else {
                            TransSubTextNode(node);
                        }
                    }
                }
            }
        }
        transTaskMgr.doTask();
        observer.observe(targetNode, observer_config);
    });

    observer.observe(targetNode, observer_config);

    // 将汉化数据暴露给全局作用域，供调试程序使用
    window.cnItems = cnItems;
    window.cnRegReplace = cnRegReplace;

    // 在汉化模块加载完成后启动调试程序
    initI18nDebug();
}();

// ==================== 汉化调试程序 ====================
function initI18nDebug() {
    'use strict';

    const DEBUG_CONFIG = {
        enabled: true,
        logAllMatches: false,
        targetTexts: [
            "Craft Mercenary Post (Level 1)",
            "Craft Mercenary Post",
            "Mercenary Post"
        ],
        showRuleOrder: true,
        testSpecificRules: true,
        showChatExclusion: true
    };

    function createDebugPanel() {
        const panel = document.createElement('div');
        panel.id = 'i18n-debug-panel';
        panel.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            width: 500px;
            max-height: 80vh;
            background: rgba(0,0,0,0.9);
            color: #00ff00;
            font-family: monospace;
            font-size: 12px;
            padding: 10px;
            border: 2px solid #00ff00;
            border-radius: 5px;
            z-index: 99999;
            overflow-y: auto;
            display: none;
        `;

        const header = document.createElement('div');
        header.innerHTML = '<h3 style="margin:0;color:#00ff00;">汉化调试面板</h3>';
        header.style.cssText = 'border-bottom:1px solid #00ff00;padding-bottom:5px;margin-bottom:5px;';

        const content = document.createElement('div');
        content.id = 'i18n-debug-content';

        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'toggle-debug-panel-btn';
        toggleBtn.textContent = '显示/隐藏调试面板';
        toggleBtn.style.cssText = 'margin-top:5px;font-size:11px;';
        toggleBtn.onclick = () => {
            panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
        };

        panel.appendChild(header);
        panel.appendChild(content);
        panel.appendChild(toggleBtn);
        document.body.appendChild(panel);

        return content;
    }

    function debugLog(message, type = 'info') {
        if (!DEBUG_CONFIG.enabled) return;

        const colors = {
            info: '#00ff00',
            warning: '#ffff00',
            error: '#ff0000',
            success: '#00ffff'
        };

        const timestamp = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.style.cssText = `margin:2px 0;color:${colors[type] || '#ffffff'};`;
        logEntry.innerHTML = `[${timestamp}] ${message}`;

        const content = document.getElementById('i18n-debug-content') || createDebugPanel();
        content.appendChild(logEntry);
        content.scrollTop = content.scrollHeight;

        console.log(`%c[汉化调试] ${message}`, `color:${colors[type] || 'white'}`);
    }

    function testTextTranslation(text) {
        debugLog(`测试文本: "${text}"`, 'info');

        let translated = text;
        let matched = false;

        if (window.cnItems && window.cnItems[text]) {
            debugLog(`✓ cnItems 匹配: "${text}" -> "${window.cnItems[text]}"`, 'success');
            translated = window.cnItems[text];
            matched = true;
        }

        if (window.cnRegReplace) {
            try {
                let index = 0;
                for (let [pattern, replacement] of window.cnRegReplace) {
                    if (pattern instanceof RegExp && pattern.test(translated)) {
                        const orig = translated;
                        translated = typeof replacement === 'function'
                            ? translated.replace(pattern, replacement)
                        : translated.replace(pattern, replacement);
                        debugLog(`✓ 正则规则 ${index}: "${orig}" → "${translated}"`, 'success');
                        debugLog(`  正则: ${pattern}`, 'info');
                        matched = true;
                        break;
                    }
                    index++;
                }
            } catch (e) {
                debugLog(`✗ 正则处理出错: ${e.message}`, 'error');
            }
        }

        if (!matched) debugLog(`✗ 无匹配: "${text}"`, 'warning');
        debugLog(`→ 结果: "${translated}"`, translated !== text ? 'success' : 'info');
        debugLog('---', 'info');
        return translated;
    }

    function testChatExclusion() {
        if (!DEBUG_CONFIG.showChatExclusion) return;

        debugLog('=== 聊天排除测试 ===', 'info');

        // 创建测试节点
        const testChatNode = document.createElement('div');
        testChatNode.id = 'global-chat-messages';

        const testNormalNode = document.createElement('div');

        const testCases = [
            {
                text: "[2025-11-15 05:06:27] <strong>[🏹Idle Squatches🏹]<span style=\"color:#DC143C;\">RiggedyRekt</span>:</strong> Eden you should see if you can change your name to Smaug lol",
                node: testChatNode,
                expected: "excluded"
            },
            {
                text: "Craft Mercenary Post (Level 1)",
                node: testChatNode,
                expected: "translated" // 在聊天容器中但不是聊天格式，应该翻译
            },
            {
                text: "Craft Mercenary Post (Level 1)",
                node: testNormalNode,
                expected: "translated"
            },
            {
                text: "Just some normal text",
                node: testChatNode,
                expected: "translated"
            }
        ];

        testCases.forEach((testCase, index) => {
            const isExcluded = isInChatContainer(testCase.node) && isChatContent(testCase.text);
            const shouldExclude = testCase.expected === "excluded";
            debugLog(`测试 ${index + 1}: "${testCase.text.substring(0, 30)}..."`, 'info');
            debugLog(`  容器: ${testCase.node.id || 'normal'}, 聊天格式: ${isChatContent(testCase.text)}`, 'info');
            debugLog(`  预期: ${testCase.expected}, 实际: ${isExcluded ? '已排除' : '待翻译'}`,
                     isExcluded === shouldExclude ? 'success' : 'error');
        });

        debugLog('====================', 'info');
    }

    function showRuleOrder() {
        if (!DEBUG_CONFIG.showRuleOrder) return;
        debugLog('=== 正则规则顺序 ===', 'info');
        if (!window.cnRegReplace) {
            debugLog('✗ cnRegReplace 未加载', 'error');
            return;
        }
        let i = 0;
        for (let [reg] of window.cnRegReplace) {
            debugLog(`[${i++}] ${reg}`, 'info');
        }
        debugLog('====================', 'info');
    }

    function testSpecificRules() {
        debugLog('=== 运行预设测试 ===', 'info');
        ["Craft Mercenary Post (Level 1)", "Mercenary Post", "Axe (Level 1)"].forEach(testTextTranslation);
    }

    function setupTextObserver() {
        const obs = new MutationObserver(mutations => {
            mutations.forEach(m => {
                m.addedNodes?.forEach(n => {
                    if (n.nodeType === Node.TEXT_NODE && n.textContent.trim() &&
                        DEBUG_CONFIG.targetTexts.some(t => n.textContent.includes(t))) {
                        debugLog(`🎯 捕获动态文本: "${n.textContent.trim()}"`, 'warning');
                    }
                });
            });
        });
        obs.observe(document.body, { childList: true, subtree: true });
        debugLog('监听页面变化...', 'success');
    }

    function initDebug() {
        debugLog('🟢 汉化调试程序已激活', 'success');
        showRuleOrder();
        testSpecificRules();
        testChatExclusion();
        setupTextObserver();

        window.i18nDebug = {
            testText: testTextTranslation,
            testChatExclusion: testChatExclusion,
            isInChatContainer: isInChatContainer,
            isChatContent: isChatContent,
            enableDebug: () => { DEBUG_CONFIG.enabled = true; debugLog('✅ 已启用', 'success'); },
            disableDebug: () => { DEBUG_CONFIG.enabled = false; debugLog('⏸️ 已暂停', 'warning'); }
        };
        debugLog('📌 window.i18nDebug 已挂载', 'info');
    }

    // 暴露初始化函数，供外部调用
    window._initI18nDebug = initDebug;
}

// ✅ 智能激活逻辑（默认关闭，按 Ctrl+Alt+D 点击页面任意处开启）
(function () {
    const KEY = 'i18n_debug_activated';
    let activated = localStorage.getItem(KEY) === 'true';

    if (activated) {
        // 已激活：延迟初始化（等主模块就绪）
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                window._initI18nDebug?.();
            });
        } else {
            setTimeout(() => window._initI18nDebug?.(), 100);
        }
    }

    // 监听 Ctrl+Alt+D 点击激活（防误触）
    document.addEventListener('click', function handler(e) {
        if (e.ctrlKey && e.altKey && e.key !== 'd' && e.detail === 1) {
            // 实际触发需配合按键，此处用 keydown 更准，但为兼容改用组合监听
        }
    }, true);

    document.addEventListener('keydown', function keyHandler(e) {
        if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'd') {
            e.preventDefault();
            if (!activated) {
                activated = true;
                localStorage.setItem(KEY, 'true');
                // 创建提示按钮
                const notice = document.createElement('div');
                notice.id = 'debug-activated-notice';
                notice.innerHTML = `
                    <div style="
                        position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
                        background:#000;color:#00ff88;padding:15px;border:2px solid #00ff88;
                        z-index:999999;font-family:monospace;border-radius:6px;
                        box-shadow:0 0 20px rgba(0,255,136,0.5);
                    ">
                        ✅ 汉化调试已开启！<br>
                        面板按钮已添加至右上角<br>
                        再按 <b>Ctrl+Alt+D</b> 可关闭
                    </div>
                `;
                document.body.appendChild(notice);
                setTimeout(() => {
                    notice.style.transition = 'opacity 0.5s';
                    notice.style.opacity = '0';
                    setTimeout(() => notice.remove(), 500);
                }, 2000);

                // 创建开关按钮
                const btn = document.createElement('button');
                btn.id = 'i18n-debug-toggle-btn';
                btn.textContent = '🛠️ 调试中';
                btn.style.cssText = `
                    position:fixed;top:10px;right:10px;z-index:99999;
                    padding:4px 8px;font-size:11px;background:#d32f2f;color:white;
                    border:none;border-radius:3px;cursor:pointer;
                `;
                btn.onclick = () => {
                    activated = false;
                    localStorage.removeItem(KEY);
                    btn.textContent = '🔄 已关闭';
                    btn.style.background = '#555';
                    setTimeout(() => btn.remove(), 1000);
                    const panel = document.getElementById('i18n-debug-panel');
                    if (panel) panel.style.display = 'none';
                    if (window.i18nDebug?.disableDebug) window.i18nDebug.disableDebug();
                };
                document.body.appendChild(btn);

                // 初始化调试
                setTimeout(() => window._initI18nDebug?.(), 100);
            } else {
                // 已开启：关闭
                activated = false;
                localStorage.removeItem(KEY);
                const btn = document.getElementById('i18n-debug-toggle-btn');
                if (btn) btn.click(); // 复用关闭逻辑
            }
        }
    });
})();
// ==================== 调试程序结束 ====================