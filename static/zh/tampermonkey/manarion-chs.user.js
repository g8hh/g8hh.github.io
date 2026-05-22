// ==UserScript==
// @name         Manarion 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.11
// @description  网页游戏 Manarion (https://manarion.com?ref=2603) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Manarion.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://manarion.com/icon.png
// @license      MIT
// @include      *https://manarion.com*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/05/24 21:01
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
    "Stamina:": "耐力:",
    "Mana:": "法力:",
    "Mana Dust": "法力之尘",
    "Mana Dust:": "法力之尘:",
    "Actions:": "行动:",
    "Whisper": "私聊",
    "Town": "城镇",
    "Total Ward:": "结界总数：",
    "Trade": "交易",
    "Unlink": "取消关联",
    "Trying to reconnect...": "尝试重新连接...",
    "Water Mastery:": "水系精通：",
    "Reset": "重置",
    "Research": "研究",
    "Referrer Link": "邀请链接",
    "Rankings": "排行榜",
    "Quest Complete": "任务完成",
    "Quest Progress": "任务进度",
    "Push Notifications": "推送通知",
    "Online": "在线",
    "Logout": "登出",
    "Log": "日志",
    "Inventory": "背包",
    "Help": "帮助",
    "Guild": "公会",
    "Guild Taxes": "公会税收",
    "General": "常规",
    "Farm": "农场",
    "Complete Quest": "完成任务",
    "Connection lost": "连接丢失",
    "Customize Colors": "自定义颜色",
    "Battle": "战斗",
    "Battle Level": "战斗等级",
    "Chat": "聊天",
    "Codex": "法典",
    "Codex:": "法典:",
    "Defeat": "击败",
    "Example": "示例",
    "enemies.": "敌人.",
    "Experience:": "经验值:",
    "Focus:": "专注:",
    "Market": "市场",
    "Orb of Power": "力量宝珠",
    "Potion expired": "药水已过期",
    "Spirit:": "精神:",
    "Sign in with Google": "通过 Google 登录",
    "Sign in with Discord": "通过 Discord 登录",
    "Sign in with Twitch": "通过 Twitch 登录",
    "Refer your friends to the game and get an additional 5% of any": "将你的好友推荐到游戏中，你将获得额外的5%",
    "Whispers": "私聊者",
    "You must both verify your account by linking an identity provider to earn rewards.": "你必须通过链接身份提供商来验证你的账户，以赚取奖励。",
    "Fatigue": "疲劳",
    "Complete for": "完成可获得",
    "Intellect:": "智力:",
    "Infernal Heart": "地狱之心",
    "Join Us on Discord": "在 Discord 上加入我们",
    "Loot Tracker": "战利品追踪器",
    "Rift of Power": "力量裂隙",
    "Rift of Power (Event)": "力量裂隙（活动）",
    "Bound Codex": "精装法典",
    "Adjust personal contribution": "调整个人贡献",
    "Added on": "添加于",
    "Siphon": "虹吸",
    "they find.": "他们发现。",
    "ticks remaining": "tick 剩余",
    "Tome of Fire": "火焰卷轴",
    "Tome of Mana Shield": "法力护盾卷轴",
    "Total Spellpower:": "总计法术力量:",
    "Identity Providers": "身份提供者",
    "Active": "活跃",
    "spells, critting": "法术, 暴击",
    "Select Enemy": "选择敌人",
    "Player": "玩家",
    "mana": "法力",
    "HP:": "生命值:",
    "Deaths:": "死亡:",
    "Kills:": "击杀:",
    "Enemy": "敌人",
    "Average Damage Per Spell:": "每个法术的平均伤害：",
    "Average Damage Per Attack:": "每次攻击的平均伤害：",
    "Enemy attacked you": "敌人攻击了你",
    "Refresh Actions": "刷新行动",
    "experience.": "经验值.",
    "Siphoning": "虹吸",
    "times.": "次.",
    "times. Casting": "次. 施放了",
    "times. Siphon chance:": "次. 虹吸几率:",
    "Winrate:": "胜率:",
    "Ward Strength:": "结界力量：",
    "You are currently siphoning power into your lowest quality equipped item...": "你现在正在把能量吸进你的最低质量装备...",
    "You don't have any items equipped.": "你没有装备任何物品。",
    "You attacked": "你攻击了",
    "You found the following loot:": "你发现了以下战利品：",
    "You spent": "你花费了",
    "You won, you gained": "你获胜了，你获得",
    "You have siphoned power from the rift": "你从裂隙中吸取了能量",
    "Asbestos": "石棉",
    "waiting...": "等待中...",
    "Waiting...": "等待中...",
    "Back": "背部",
    "Common": "普通",
    "Chest": "胸部",
    "Currencies": "货币",
    "Elderwood": "接骨木",
    "Equip": "装备",
    "Equipment": "装备",
    "Feet": "脚部",
    "Fish": "鱼",
    "Fish Scales": "鱼鳞",
    "Growth": "生长",
    "Four-leaf Clover": "四叶草",
    "Hands": "手部",
    "Hands": "手部",
    "Herbs": "草药",
    "Iron": "铁",
    "Neck": "颈部",
    "Orbs": "宝珠",
    "Rarity": "稀有度",
    "Resources": "资源",
    "Ring": "戒指",
    "Search": "搜索",
    "Set name": "设定名称",
    "Type": "类型",
    "Wood": "木头",
    "White Pearl": "白珍珠",
    "Water Essence": "水系精华",
    "View other items": "查看其他物品",
    "Weapon": "武器",
    "Slot": "栏位",
    "Sunpetal": "纸夹",
    "Tome of Nature": "自然卷轴",
    "Tome of Water": "水系卷轴",
    "Transfer": "转移",
    "Head": "头部",
    "Water Resistance": "水系抵抗",
    "Nature Resistance": "自然系抵抗",
    "Fire Resistance": "火系抵抗",
    "Nature Essence": "自然精华",
    "Mass Disenchant": "批量移除附魔",
    "Lodestone": "矿脉石头",
    "Ironbark": "铁皮木",
    "Tidal Wrath": "潮汐之怒",
    "No items found.": "有找到任何物品。",
    "Bountiful Harvest": "大丰收",
    "Enchanted Droplet": "附魔水滴",
    "Enchanted Formulas": "附魔公式",
    "Enchanted Reagents": "附魔试剂",
    "Gathering Zones": "采集区域",
    "Battle Zones": "战斗区域",
    "Fortune": "财富",
    "Hall of Fame": "名人堂",
    "News Board": "新闻板",
    "Other Places": "其他地方",
    "The Market": "市场",
    "Spell Tomes": "法术卷轴",
    "Welcome to Manarion": "欢迎来到 Manarion",
    "Elderwood Grove": "接骨木林",
    "Azure Lake": "碧波湖",
    "Ironclad Mines": "铁壳矿山",
    "Notice Board": "公告板",
    "Radiant Grove": "光辉树林",
    "The Smoldering Marsh": "阴燃沼泽",
    "Worldshaper's Domain": "世界塑造者领域",
    "and gained": "并获得了",
    "Complete": "完成",
    "Ember Wisp": "余烬之光",
    "fishing": "钓鱼",
    "Fishing": "钓鱼",
    "Fishing Level": "钓鱼等级",
    "harvests.": "收获。",
    "Kindlefiend": "好友",
    "Mud Crawler": "泥履带机",
    "You went": "你前往",
    "experience": "经验值",
    "Sootborn Imp": "烟熏小恶魔",
    "Dirt Imp": "泥土小恶魔",
    "Sproutling": "发芽",
    "Tidal Spriggan": "语言支持",
    "You received the following loot:": "您收到了以下战利品：",
    "Mining": "采矿",
    "mining": "采矿",
    "Mining Level": "采矿等级",
    "Maelstrom's Eye": "大漩涡之眼",
    "Blazing Core": "烈焰核心",
    "woodcutting": "伐木",
    "Woodcutting": "伐木",
    "Woodcutting Level": "伐木等级",
    "Base Experience": "基础经验值",
    "Base Resource": "基础资源",
    "Base Mana Dust": "基础法力之尘",
    "Base Power": "基础力量",
    "Combat Skills": "战斗技能",
    "Confirm": "确认",
    "Enchants": "附魔",
    "Nature Spell Rank": "自然法术等级",
    "Water Spell Rank": "水系法术等级",
    "Fire Spell Rank": "火系法术等级",
    "Gathering": "采集",
    "Increase": "提高",
    "Current Boost:": "当前提升:",
    "Mana Shield Rank": "法力护盾等级",
    "Max": "最大",
    "Spellpower": "法术力量",
    "times (+": "次机会 (+",
    "Upgrade:": "升级:",
    "Ward": "结界",
    ") for": ") 得到",
    "Actions": "行动",
    "Time Dilation": "时间膨胀",
    "Vitality": "活力",
    "Wildheart": "野性之心",
    "Multistat": "多重属性",
    "Multicast": "多重施放",
    "Overload": "过载",
    "Prosperity": "繁荣",
    "Health": "生命值",
    "Inferno": "地狱",
    "Insight": "洞察力",
    "Mana": "法力",
    "Haste": "急速",
    "Focus": "专注",
    "Drop Boost": "掉落提升",
    "Damage": "伤害",
    "Crit Damage": "暴击伤害",
    "Crit Chance": "暴击几率",
    "Cloak": "斗篷",
    "Staff": "法杖",
    "Bloomwell": "布鲁威尔",
    "Enchanting Formulas": "附魔公式",
    "Enchanting Reagents": "附魔试剂",
    "Orb of Chaos": "混沌宝珠",
    "Orb of Divinity": "圣尊宝珠",
    "Sageroot": "鼠尾草",
    "Tier": "层级",
    "News": "新闻",
    "Rules": "规则",
    "Unequip": "脱下",
    "(Your farm continues to grow for up to 24 hours)": "（你的农场会持续生长24小时）",
    "Amount": "数量",
    "Brewing": "酿造",
    "Brew": "酿造",
    "Collect": "收集",
    "Constantly tends to your plots, increasing the yield of all plots.": "不断地照料你的土地，增加所有土地的产量。",
    "each": "每个",
    "Expands your farming area, increasing the yield.": "扩大你的农场面积，增加产量。",
    "Fertilizer": "肥料",
    "Harvest Golems": "收获魔像",
    "herbs/hour)": "草药/小时)",
    "Improves growth, increasing the yield of all plots.": "促进生长，提高所有地块的产量。",
    "Increases the maximum amount of potions you can store.": "增加你可以储存的药剂的最大数量。",
    "Plots": "地块",
    "Potion belt": "药水腰带",
    "Potion Belt": "药水腰带",
    "Potion of Harvesting": "收获药水",
    "Potion of Renewal": "续期药水",
    "Potion of Wisdom": "智慧药水",
    "Potions": "药水",
    "Ready to collect": "可收集",
    "Upgrades": "升级",
    "Restores 200 actions when you run out.": "当你的行动次数用完时恢复200行动。",
    "You have no potions stored, make some below. Potions consume automatically and are untradeable.": "你没有储存药水，在下面做一些。药剂会自动消耗并且不可交易。",
    "Your farm has been growing for less than a minute": "你的农场生长还不到一分钟",
    "Your farm is fully grown": "你的农场已经成熟了",
    "Link": "链接",
    "Used to make Potion of Harvesting": "用于制作 收获 药水",
    "Used to make Potion of Renewal": "用于制作 收获 续期",
    "Used to make Potion of Wisdom": "用于制作 智慧 药水",
    "All prices are in Mana Dust": "所有的价格货币都是法力之尘",
    "Marketplace": "市场",
    "View your orders": "查看你的挂单",
    "Create Guild": "创建公会",
    "Create": "创建",
    "Creating your guild costs 1000": "创建你的公会需要消耗 1000",
    "Guilds": "公会",
    "Guild Name": "公会名称",
    "Level": "等级",
    "Members": "成员",
    "Owner": "会长",
    "and": "和",
    "You have earned a total of": "你总计赚取了",
    "Legendary": "传说",
    "Epic": "史诗",
    "Rare": "稀有",
    "Uncommon": "罕见",
    "Cancel": "取消",
    "Create equipment set": "创建装备预设",
    "OK": "确定",
    "You will receive": "你将收到",
    "Upgrade": "升级",
    "Favorite": "收藏",
    "Enchant": "附魔",
    "A basic crafting material from trees.": "用树木制作的基本材料。",
    "A burning core of fire magic.": "燃烧的火焰魔法核心。",
    "A fine dust infused with magical energy.": "一种充满神奇能量的细尘。",
    "A fire-resistant mineral. Can provide resistance to fire.": "耐火矿物可以提供防火性能。",
    "A Growing Threat": "日益增长的威胁",
    "A living essence of nature's magic.": "大自然魔法的鲜活精华。",
    "A mystical stone that resonates.": "一块能产生共鸣的神秘石头。",
    "A rare clover": "稀有的三叶草",
    "A rare pearl": "稀有的珍珠",
    "A rare, incredibly durable wood. Can provide resistance to nature.": "一种罕见的、极其耐用的木材。能提供对自然的抵抗力。",
    "A smoldering ember.": "燃烧的余烬。",
    "A sturdy material for construction.": "坚固的建筑材料",
    "A swirling essence of water magic.": "水魔法的旋转精华。",
    "A tome ablaze with fiery incantations.": "一本燃烧着炽热咒语的巨著。",
    "A tome pulsing with vitality.": "一本充满活力的巨著。",
    "A tome rippling with fluid magic.": "一本流淌着魔法的巨著。",
    "A tome that strengthens your mana shield ability.": "一本加强你的法力护盾能力的书。",
    "A wood fragment from an ancient tree.": "古树上的木头碎片。",
    "An ancient book filled with arcane knowledge.": "一本充满神秘知识的古书。",
    "An ancient book filled with arcane knowledge. Untradeable.": "一本充满神秘知识的古书。不可交易。",
    "An enchantment that amplifies fire magic.": "一种强化火焰魔法的魔法。",
    "An enchantment that empowers water magic.": "一种赋予水魔法的魔法。",
    "An enchantment that enhances nature magic.": "一种增强自然魔法的魔法。",
    "An enchantment that increases drop rates.": "增加掉落率的附魔。",
    "An enchantment that increases your multistat.": "增加你的多重属性的附魔。",
    "An enchantment that multiplies all your base stats.": "一个使你所有基础属性倍增的附魔。",
    "An enchantment that multiplies base experience.": "增加基础经验值的魔法。",
    "An enchantment that multiplies base mana dust drops.": "使基础魔法尘掉落数倍增的附魔。",
    "An enchantment that multiplies base resources.": "增加基础资源的附魔。",
    "Base Resource Amount": "基础资源数量",
    "Bureau of Feline Investigators": "猫科动物调查局",
    "Fragments of raw elemental power.": "原始元素力量的碎片。",
    "Improves your fire resistance enchantment ability.": "提高你的抗火附魔能力。",
    "Improves your nature resistance enchantment ability": "提高你的自然抵抗附魔能力",
    "Improves your water resistance enchantment ability": "提高你的抗水附魔能力",
    "Rerolls all modifiers of an item. Including the skill on gathering items.": "重新滚动一个项目的所有修饰符。包括收集道具的技能。",
    "Rerolls the values of all item modifiers. Only higher values are kept.": "滚动所有项修饰符的值。只保留较高的值。",
    "Scales from a mystical fish. Can provide resistance to water.": "一种神秘鱼类的鳞片。可提供抗水性能。",
    "Sustenance for the journey ahead.": "为前方的旅程提供食物。",
    "Swirling with magic.": "充满了魔力。",
    "Upgrades an Epic item to Legendary.": "可将紫色品质道具提升至传说品质。",
    "Admin": "管理员",
    "Armory": "军械库",
    "Invite": "邀请",
    "No results.": "无结果.",
    "Ranks": "头衔",
    "Rank": "头衔",
    "Name": "名称",
    "Roster": "名单",
    "%, Elemental Shards": "%, 元素碎片",
    "%, Mana Dust": "%, 法力之尘",
    "%, Resources": "%, 资源",
    "Capacity": "容量",
    "Create Rank": "创建头衔",
    "Donate Items, Borrow Items": "捐赠物品，借用物品",
    "Manage Ranks (Admin), Invite Members, Kick Members, Promote Members, Edit Description, Donate Items, Borrow Items, Retrieve Items, Revoke Items, Withdraw Funds, Upgrades, Edit Taxes": "管理头衔（管理员），邀请成员，踢成员，提升成员，编辑描述，捐赠物品，借用物品，取回物品，撤销物品，提取资金，升级，编辑税率",
    "Member": "成员",
    "Permissions": "权限",
    "Taxes": "税收",
    "Taxes: XP": "税收: 经验值",
    "Internal Info:": "内部信息:",
    "Message of the Day": "日常信息",
    "Public Info:": "公开信息:",
    "Borrow Items": "借取物品",
    "Donate Items": "捐赠物品",
    "Edit Description": "编辑介绍",
    "Edit Rank": "编辑头衔",
    "Edit Taxes": "编辑税率",
    "Invite Members": "邀请成员",
    "Kick Members": "踢出成员",
    "Manage Ranks (Admin)": "管理头衔 (管理员)",
    "Promote Members": "提升成员",
    "Rank ID": "头衔 ID",
    "Rank Name": "头衔名称",
    "Retrieve Items": "取回物品",
    "Revoke Items": "撤销物品",
    "Withdraw Funds": "提取资金",
    "% resources": "% 资源",
    "Activity Log": "活动日志",
    "Amplifies the power of all Elemental Shards Research boosts by 1% per level": "每升一级使所有元素碎片研究的强化效果提高1%",
    "Battle XP": "战斗经验",
    "Cloakroom": "衣帽间",
    "Council Chamber": "会议室",
    "Donate": "捐赠",
    "End of Results": "最终的结果",
    "Funds": "资金",
    "Guild Funds": "公会资金",
    "Guild Level": "公会等级",
    "Increases base experience gains by 1% per level": "每升一级增加1%的基础经验值",
    "Increases maximum actions by 1% per level": "每升一级最大行动增加1%",
    "Increases the amount of resources contributed through guild taxes by 1% per level": "每级增加1%公会税所贡献的资源",
    "Increases the capacity of the armory by 50 items per level": "每级增加军械库50件物品",
    "Increases the maximum amount of guild members by 1 per level": "每升一级增加公会成员的最大数量1",
    "Magical Accounting": "魔法会计",
    "Mana Conduit": "法力管道",
    "Mark next": "下一个标记",
    "Nexus Crystal": "连结水晶",
    "No results": "没有结果",
    "Rank Changes": "排名变化",
    "Reduces the mana cost of all spells by 4% per level": "每升一级使所有法术的法力消耗降低4%",
    "Sleeping Quarters": "卧室",
    "Study Room": "自习室",
    "Withdraw": "提现",
    "Currently Equipped": "当前已装备",
    "Gather Level": "采集等级",
    "Quality": "质量",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Manarion": "Manarion",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "google": "google",
    "": "",
    "": "",
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


//需处理的前缀
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
    "[": "[",
    "Elemental Shards": "元素碎片",
    "Fire Essence": "火系精华",
    "Formula: ": "公式: ",
    "Refined Initiate ": "精炼初阶",
    "Worn Prospector's ": "破旧的探矿者",
    "Worn Initiate ": "破旧的初阶",
    "Worn Tidecaller's ": "破旧的潮汐",
    "Worn Lumberjack's ": "破旧的伐木工",
    "Refined Tidecaller's ": "精炼潮汐",
    "Refined Lumberjack's ": "精炼伐木工",
    "Refined Prospector's ": "精炼探勘者",
    "Ascended Prospector's ": "转生探勘者",
    "Runed Prospector's ": "符文勘探者",
    "Runed Tidecaller's ": "符文潮汐者",
    "Runed Initiate ": "符文初阶",
    "Runed Lumberjack's ": "符文伐木工",
    "https://manarion.com?ref=": "https://manarion.com?ref=",
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
    "]": "]",
    "Cinder Mite": "煤渣螨",
    " (Woodcutting)": " (伐木)",
    " (Mining)": " (采矿)",
    " (Rules)": " (规则)",
    " (Beginner)": " (新手)",
    " (Intermediate)": " (中级)",
    " (Fishing)": " (钓鱼)",
    " (Base Mana Dust)": " (基础法力之尘)",
    " (Resistance)": " (抵抗)",
    " (Multistat)": " (多重属性)",
    " (Damage)": " (伤害)",
    " (All stat boost)": " (所有属性提升)",
    " (Base Resources)": " (基础资源)",
    " (Base XP)": " (基础经验值)",
    " (Drop Boost)": " (掉落提升)",
    " characters": " 字符",
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
    [/^Are you sure you want to disenchant (.+) items\?$/, '你确定要解除 $1 件物品的附魔吗？'],
    [/^, and lacked (.+) mana$/, '，并且缺乏 $1 法力'],
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
    [/^\+([\d\.]+) Base Resource Amount for ([\d\.]+) hour.$/, '\+$1 基础资源数量持续 $2 小时。'],
    [/^([\d\.]+)\% reduction$/, '$1\% 折扣'],
    [/^([\d\.]+)\% per boost$/, '$1\% 每次提升'],
    [/^([\d\.]+)\% additional actions$/, '$1\% 额外行动'],
    [/^([\d\.]+)\% additional resources$/, '$1\% 额外资源'],
    [/^([\d\.]+)\% Base Experience$/, '$1\% 基础经验值'],
    [/^\+([\d\.]+)\% Battle Experience for ([\d\.]+) hour.$/, '\+$1\% 战斗经验值持续 $2 小时。'],
    [/^\+([\d\.]+)\% resources per level$/, '\+$1\% 资源每级'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) potions$/, '$1 药水'],
    [/^([\d\.,]+) members$/, '$1 成员'],
    [/^([\d\.,]+) items$/, '$1 物品'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^in ([\d\.,]+) hours$/, '持续 $1 小时'],
    [/^Pickaxe \(([\d\.,]+)\)$/, '镐子 ($1)'],
    [/^Pendant \(([\d\.,]+)\)$/, '吊坠 ($1)'],
    [/^Boots \(([\d\.,]+)\)$/, '靴子 ($1)'],
    [/^Cape \(([\d\.,]+)\)$/, '披肩 ($1)'],
    [/^Cloak \(([\d\.,]+)\)$/, '斗篷 ($1)'],
    [/^Helmet \(([\d\.,]+)\)$/, '头盔 ($1)'],
    [/^Hood \(([\d\.,]+)\)$/, '兜帽 ($1)'],
    [/^Robes \(([\d\.,]+)\)$/, '长袍 ($1)'],
    [/^Hat \(([\d\.,]+)\)$/, '帽子 ($1)'],
    [/^Gloves \(([\d\.,]+)\)$/, '手套 ($1)'],
    [/^Staff of Water \(([\d\.,]+)\)$/, '水系法杖 ($1)'],
    [/^Ring \(([\d\.,]+)\)$/, '戒指 ($1)'],
    [/^Sandals \(([\d\.,]+)\)$/, '凉鞋 ($1)'],
    [/^Axe \(([\d\.,]+)\)$/, '斧子 ($1)'],
    [/^Jacket \(([\d\.,]+)\)$/, '夹克 ($1)'],
    [/^Rod \(([\d\.,]+)\)$/, '鱼竿 ($1)'],
    [/^Tunic \(([\d\.,]+)\)$/, '束腰 ($1)'],
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