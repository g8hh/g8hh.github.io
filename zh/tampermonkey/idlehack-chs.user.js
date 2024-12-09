// ==UserScript==
// @name         idlehack-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.10
// @description  Idle Quest RPG (https://www.idlehack.net) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *idlehack.net/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/idlehack-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/idlehack-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2024/12/06 10:04
 * Author: guoba
 * View: https://www.gityx.com
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
    "Loading Successful": "加载成功",
    "Level": "等级",
    "Host Match": "主机匹配",
    "Multi-Select": "多选",
    "Market Search": "市场搜索",
    "Market": "市场",
    "Play": "开始",
    "Search": "搜索",
    "Tier Filter": "层级过滤器",
    "You are eligible for a new character!": "你有资格获得一个新角色！",
    "Weapon": "武器",
    "You need to enable JavaScript to run this app.": "你需要启用JavaScript来运行这个应用程序。",
    "Mass Delete": "批量删除",
    "Player Name Filter": "玩家名称过滤器",
    "My Items on Marketplace": "我在市场上的物品",
    "Rarity Filter": "稀有度过滤器",
    "Shop": "商店",
    "Select Deck": "选择卡组",
    "Single or Group Dungeon": "单人或组队地下城",
    "A cosmic rift that moves between space and time - any enemies from the other dungeons can be found here. Beat this dungeon to rise on the leaderboards.": "在空间和时间之间移动的宇宙裂缝-任何来自其他地下城的敌人都可以在这里找到。击败这个地下城进入排行榜。",
    "Active Deck:": "活跃卡组:",
    "Any Attribute": "任意属性",
    "Any Rarity": "任意稀有度",
    "Any Tier": "任意层级",
    "Auto Run": "自动运行",
    "Buy": "购买",
    "By Type": "按类型",
    "By User Name": "按用户名",
    "Card Name Filter": "卡牌名称过滤器",
    "Cards": "卡牌",
    "Click here to chat!": "点击这里聊天！",
    "Contains enemies that deal and are more resistant to physical damage. Legendary charms can drop.": "包含能造成伤害并对物理伤害有更强抵抗力的敌人。可以掉落传说护身符。",
    "Contains enemies that deal earth damage, are resistant to water damage and are weak to fire damage. Chest legendary items can drop at level 30 and above.": "包含造成土系伤害的敌人，能抵抗水系伤害，对火系伤害很弱。宝箱传说物品可以在30级以上掉落。",
    "Contains enemies that deal fire damage, are resistant to earth damage and are weak to water damage. Helm legendary items can drop at level 30 and above.": "包含能造成火焰伤害，对土类伤害有抗性，对水类伤害很弱的敌人。头盔传说物品可以在30级或以上掉落。",
    "Contains enemies that deal water damage, are resistant to fire damage and are weak to earth damage. Weapon legendary items can drop at level 30 and above": "包含造成水属性伤害的敌人，对火属性伤害有抗性，对土属性伤害较弱。武器传说物品可以在30级以上掉落",
    "Contains enemies that deal water damage, are resistant to fire damage and are weak to earth damage. Weapon legendary items can drop at level 30 and above.": "包含造成水伤害的敌人，对火伤害有抵抗力，对土伤害很弱。武器传说物品可以在30级以上掉落。",
    "Create New Character": "创建新角色",
    "Decks must contain at least 3 cards and 1 Hero.": "卡组必须包含至少3张卡牌和1个英雄。",
    "Delete White Quality": "删除白色品质",
    "Delete Green Quality": "删除绿色品质",
    "Desert Temple": "沙漠神庙",
    "Delete Purples With Less Than 4 Attributes": "删除少于4个属性的紫色",
    "Delete Spell/Skill Books": "删除法术/技能书",
    "Dungeons": "地下城",
    "Favorites Only": "仅收藏品",
    "** Fall Seasonal time has been expanded to December for the Seasonal Legendaries due to Idle Hack 1.0 release **": "**由于Idle Hack 1.0版本的发布，秋季季节的发布时间已经扩展到12月。**",
    "6 Different Dungeons that continually scale to test your metal, including a Leaderboard Dungeon that allows your to test the possibilities of your team. Compete against other players to increase your standings on the leaderboards!": "6个不同的地下城，不断扩展以测试你的金属，包括一个排行榜地下城，让你测试你的团队的可能性。与其他玩家竞争，提高你在排行榜上的排名！",
    "A Marketplace to buy and sell items with other players. Save up gold to purchase those perfect items that will make your characters stronger or sell your own powerful gear to earn more gold.": "一个与其他玩家买卖物品的市场。攒下金币去购买那些能够让你的角色变得更强大的物品，或者出售你自己的强大装备去赚取更多金币。",
    "A Shop where you can use gold to purchase upgrades for your account or to modify equipment to make them stronger.": "一个商店，你可以用金币为你的账户购买升级或修改装备，使他们更强大。",
    "Arena": "竞技场",
    "Arena Ladder": "竞技场天梯榜",
    "Collection": "收藏品",
    "Don't have an account? Register!": "没有账户？注册!",
    "Filter (Comma Delimited)": "过滤器（逗号分隔）",
    "Finally, and maybe most importantly, there is a new shop item that allows you to sacrifice Sugar Cookies to feed the Hungry Yeti. The Yeti is very hungry and to prevent him from eating players we need to donate Sugar Cookies to keep him satiated. The Hungry Yeti has prizes for every player when players donate 100, 500, and 1000 Sugar Cookies!": "最后，也许也是最重要的是，有一个新的商店物品允许你牺牲 糖饼干 来喂养饥饿的雪人。雪人非常饥饿，为了防止它吃掉玩家，我们需要捐赠 糖饼干 让它保持饱腹感。当玩家捐赠100、500和1000块糖饼干时，饥饿的雪人会给每个玩家奖励！",
    "Forest Mine": "森林矿洞",
    "Gingerbread Man - A quick, but flimsy unit made of baked gingerbread.": "姜饼人 -- 一个快速,但脆弱的单位做的烤姜饼。",
    "Icy Castle": "冰雪城堡",
    "Haunted Manor": "闹鬼的庄园",
    "Idle Hack Fall Seasonal Event is Live for Oct./Nov./Dec.": "Idle Hack 秋季活动将于10月/ 11月/ 12月上线。",
    "Idle Hack is a Multiplayer Incremental Action Role Playing Game akin to hack and slash favorites such as Diablo and Dungeon Siege with a mix of modern idle games that allows you to grind dungeons for loot completely hands off. Many similar Persistent Browser Based Games are fully menu based without the game actually playing out, but Idle Hack plays out in real time and you can watch your team progress and become stronger over time by earning experience and acquiring loads of different gear. Everything from unique legendaries to randomized magic and rare items with over 35 different item attributes to strengthen your character with; Idle Hack allows for diverse build creations with legendaries significantly changing your build. Classless design enables total control over a team of four characters with over 25 different spells allowing you to build a synergistic party to work through increasingly difficult dungeons.": "《Idle Hack》是一款多人增量动作角色扮演游戏，类似于《暗黑破坏神》和《地下城攻城》等热门游戏，它混合了现代的空闲游戏，允许你在地下城中进行研磨，以获得战利品。许多类似的基于持久浏览器的游戏都是完全基于菜单的，并没有真正的游戏玩法，但《Idle Hack》是实时的，你可以看到你的团队进展，并随着时间的推移通过获得经验和获得不同的装备而变得更强大。从独特的传说到随机魔法和稀有物品，拥有超过35种不同的物品属性，可以增强你的角色；空闲Hack允许不同的建筑创造与传说显著改变你的建筑。无职业的设计让你可以完全控制一个由四个角色组成的团队，拥有超过25种不同的法术，让你可以建立一个协同的团队来度过越来越困难的地下城。",
    "Idle Hack is a passion project that has been in development for over a year and continually receives updates over time. The latest update has added a whole new mysterious aspect to the game that unlocks as you progress through the game - I don't want to spoil it here, but it's a huge new update that adds a whole new extra game to Idle Hack. I truly hope you enjoy playing and would love for you to join our humble community if you're having fun with Idle Hack.": "Idle Hack是一个充满激情的物品，已经开发了一年多，并且随着时间的推移不断更新。最新的更新为游戏增加了一个全新的神秘方面，随着你在游戏中的进展而解锁-我不想在这里破坏它，但这是一个巨大的新更新，为Idle Hack增加了一个全新的额外游戏。我真心希望你喜欢玩，如果你喜欢玩《Idle Hack》，我希望你能加入我们的社区。",
    "Idle Hack Winter Seasonal Event is Live for Dec./Jan./Feb.": "Idle Hack冬季活动将于12月/ 1月/ 2月上线。",
    "Interdimensional Rift": "次元裂隙",
    "Interdimensional Rift Ladder": "次元裂隙天梯榜",
    "Inventory": "库存",
    "Item Property Filter": "物品属性过滤器",
    "Item Type": "物品类型",
    "Legacy System Software": "传说系统软件",
    "LOGIN": "登录",
    "Login": "登录",
    "Main Idle Hack Features:": "放置骇客主要功能:",
    "Locked. Complete Level 50 of Interdimensional Rift.": "未解锁。需要完成 50级 次元裂隙。",
    "Password": "密码",
    "PLAY AS GUEST": "游客试玩",
    "Player vs Player Arena where you can battle against other players' teams. Special cosmetics are given for top players in the Arena.": "玩家vs玩家竞技场，你可以与其他玩家的队伍战斗。竞技场上的顶级选手会得到特殊的化妆品。",
    "REGISTER": "注册",
    "Ski Free Monster - A classic vicious enemy from the 1991 game Ski Free. He is super fast and can get up to your party in a flash.": "自由滑雪怪物 - 一个经典的邪恶的敌人来自1991年的游戏自由滑雪。他的速度超快，可以在一瞬间到达你的队伍。",
    "Snowman - A low damage, but super tanky and armored enemy made of 3 giant snowballs.": "雪人 - 一个低伤害，但是由3个巨大的雪球组成的超级坦克装甲敌人。",
    "Stay Logged In": "记住密码",
    "The Chainsaw Man - An elite enemy with the fast attacking chainsaw to use against you.": "电锯人 - 一个拥有快速攻击电锯的精英敌人来对付你。",
    "The Headless Man - An elite enemy that shoots his makeshift head as a weapon.": "无头人 - 一个精锐敌人，发射他的临时脑袋作为武器。",
    "The new candy gem can cast skills similar to Chance on Basic Attack, but will cast the skill when you've ran a certain distance. Find the lowest amount of distance travel with really strong spells to enhance your builds!": "新的糖果宝石可以释放类似于基础攻击的几率技能，但会在你跑了一定距离后释放技能。用真正强大的法术找到最少的距离旅行来增强你的建筑！",
    "The new Sugar Cookie gem can cast skills similar to Chance on Basic Attack, but will cast the skill when you've ran a certain distance. Find the lowest amount of distance travel with really strong spells to enhance your builds! Some of the new legendaries enhance and help these new gems, so you can devise a build around them!": "新的糖饼干宝石可以施放类似于基本攻击的技能，但会在你跑了一定距离后施放技能。用真正强大的法术找到最少的距离旅行来增强你的建筑！一些新的传说增强和帮助这些新的宝石，所以你可以围绕它们设计一个建筑！",
    "The Turkey - A classic staple to any thanksgiving feast is fighting back in a big way.": "火鸡 — 感恩节大餐上的经典主食，如今又卷土重来。",
    "This event adds 4 new legendary chest pieces, a new spell, a bunch of festive cosmetics and a new gem that can add a new attribute to your gear! To acquire these items your best chances are to explore the Icy Castle, but the new legendaries can also be found in the Interdimensional Rift. To guard these new treasures are three new enemies as well:": "这次活动增加了4个新的传说宝箱碎片，一个新的法术，一堆节日化妆品和一个新的宝石，可以添加一个新的属性到你的装备！要获得这些物品，你最好的机会是探索冰雪城堡，但新的传说也可以在次元裂缝中找到。守卫这些新宝藏的还有三个新敌人：",
    "This event adds 4 new legendary weapons, a bunch of spooky cosmetics and a new gem that can add a new attribute to your gear! To acquire these items your best chances are to explore the Haunted Manor, but the new legendaries can also be found in the Interdimensional Rift. To guard these new treasures are three new enemies as well:": "这个活动增加了4个新的传说武器，一堆令人毛骨悚然的化妆品和一个新的宝石，可以增加一个新的属性到你的装备！要获得这些物品，你最好的机会是探索闹鬼的庄园，但新的传说也可以在次元裂缝中找到。守卫这些新宝藏的还有三个新敌人：",
    "Tons of randomized loot - from legendaries that complete change your builds, gems to socket into items, craftable uniques by socketing gems into gear in the correct order, set items and plenty of fun cosmetics.": "大量的随机战利品——从完全改变你的建筑的传说，宝石镶嵌到物品中，通过将宝石以正确的顺序镶嵌到装备中来制作独特的物品，套装物品和大量有趣的化妆品。",
    "User Name": "用户名",
    "Welcome to the fall seasonal event for Idle Hack! For a limited time you can acquire exclusive legendaries and cosmetics to celebrate the season. I want to wish everyone a happy Halloween/Thanksgiving season.": "欢迎来到Idle Hack的秋季活动！在有限的时间内，你可以获得独家传说和化妆品来庆祝这个季节。祝大家万圣节/感恩节快乐。",
    "Welcome to the Long Awaited Release of Idle Hack 1.0": "欢迎来到期待已久的Idle Hack 1.0版本",
    "Welcome to the winter seasonal event for Idle Hack! For a limited time you can acquire exclusive legendaries and cosmetics to celebrate the season. I want to wish everyone a happy Christmas and Holiday season.": "欢迎来到Idle Hack的冬季活动！在有限的时间内，你可以获得独家传说和化妆品来庆祝这个季节。祝大家圣诞快乐，节日快乐。",
    "Yuletide Accurate Elf - Santa's little helper who can create Presents. Prevent the enemies from getting to the present and opening it.": "圣诞精准精灵 - 圣诞老人的小助手，可以创造礼物。阻止敌人到达并打开礼物。",
    "HUNGRY YETI": "饥饿的雪人",
    "No e-mail Required for Registration!": "注册不需要电子邮件！",
    "About": "关于",
    "Book of Self Heal": "自愈之书",
    "Charm": "护身符",
    "Chest": "胸甲",
    "Idle Hack Game Guide": "放置骇客游戏指南",
    "Heals Self Only": "只治疗自己",
    "CosmeticArmor": "化妆品护甲",
    "Cosmetic Armor": "化妆品护甲",
    "CosmeticWeapon": "化妆品武器",
    "Cosmetic Weapon": "化妆品武器",
    "Gem": "宝石",
    "Skill": "技能",
    "Logout": "登出",
    "Spell": "法术",
    "Starter Stick": "启动棒",
    "You gotta start somewhere.": "你得从某个地方开始。",
    "Change Purple Item Stat": "改变紫色物品的属性",
    "Character Attributes Reset": "角色属性重置",
    "Game Guide": "游戏指南",
    "Magically smiths a designated white base item into a new enchanted purple item. Sockets may be removed during this process.": "用魔法将一个指定的白色基础物品锻造成一个新的附魔紫色物品。在此过程中可能会删除镶嵌。",
    "Removes all stats on a purple item and replaces them with all new stats.": "移除紫色物品上的所有属性，并用新的属性代替。",
    "Replaces one stat on a purple item with a new stat. The magical energies used to perform such a smithing feet are unstable at best. Results may vary.": "将紫色物品上的一个属性替换为一个新属性。用来做这种锻造脚的魔法能量是不稳定的。结果可能会有所不同。",
    "Reroll Purple Item": "重洗紫色物品",
    "Resets a character's assigned attribute points back to 0 and allows them to be reassigned.": "将角色分配的属性点重置为0，并允许他们重新分配。",
    "Upgrade White to Purple Item": "将白色物品升级为紫色物品",
    "Change Password": "修改密码",
    "ACCOUNT": "账号",
    "Confirm New Password": "确认新密码",
    "Current Password": "当前密码",
    "New Password": "新密码",
    "Update": "更新",
    "New hero has joined the team.": "新英雄加入了队伍。",
    "Stats": "属性",
    "Helm": "头盔",
    "Basic Attack Speed": "基础攻击 速度",
    "Basic Attack Mana Steal": "基础攻击 法力偷取",
    "Basic Attack Health Steal": "基础攻击 生命偷取",
    "Basic Attack Physical Damage": "基础攻击 物理 伤害",
    "Basic Attack Water Damage": "基础攻击 水系 伤害",
    "Basic Attack Fire Damage": "基础攻击 火系 伤害",
    "Basic Attack Earth Damage": "基础攻击 土系 伤害",
    "Basic Attack": "基础攻击",
    "Block Chance": "格挡几率",
    "Block Damage Reduction": "格挡伤害减少",
    "Critical Damage": "暴击伤害",
    "Critical Rate": "暴击率",
    "Critical Strike Avoidance": "躲避暴击",
    "Dodge Chance": "闪避几率",
    "Fire Resistance": "火系抗性",
    "Water Resistance": "水系抗性",
    "Physical Resistance": "物理抗性",
    "Earth Resistance": "土系抗性",
    "Extra Skill Damage": "额外技能伤害",
    "Extra Spell Damage": "额外法术伤害",
    "Mana Regeneration": "法力值回复",
    "Health Regeneration": "生命值回复",
    "Health": "生命值",
    "Mana": "法力",
    "Offenses": "进攻",
    "Movement Speed": "移动速度",
    "Skill/Spell Health Steal": "技能/法术 生命偷取",
    "Spell/Skill Health Steal %": "法术/技能 生命偷取 %",
    "Skill/Spell Mana Steal": "技能/法术 法力偷取",
    "Spell/Skill Mana Steal %": "法术/技能 法力偷取 %",
    "Spell/Skill Mana Cooldown %": "法术/技能 冷却时间 %",
    "Skills/Spells": "技能/法术",
    "Strength": "力量",
    "Attributes": "属性",
    "Cooldown": "冷却时间",
    "Percentage of mana gained from basic attacks based on damage dealt.": "从基础攻击中获得的法力值百分比取决于所造成的伤害。",
    "Percentage of health gained from basic attacks based on damage dealt.": "从基础攻击中获得的生命值百分比取决于所造成的伤害。",
    "Defenses": "防御",
    "Dexterity": "灵巧",
    "Toggle Cosmetics": "切换化妆品",
    "Constitution": "体质",
    "Intelligence": "智力",
    ". The items can be filtered by type and by a text filter that will search name and attribute names to only show specific items that you are looking for. Lastly, if multi-select is selected then it allows you to click on multiple items and be able to trash a bunch of items at once.": "．物品可以通过类型和文本过滤器进行过滤，文本过滤器将搜索名称和属性名称，以仅显示您正在查找的特定物品。最后，如果选择了多选，那么它允许你点击多个物品，并能够一次丢弃一堆物品。",
    "). There are also 4 buttons at the top right:": ")。右上方也有4个按钮：",
    "After selecting an item the above options are shown on the right side of the storage. X cancels the selection, the trash deletes the item and the market cart option will allow you to sell the item on the": "选择一个物品后，上述选项显示在右侧的存储。X取消选择，垃圾删除物品和市场购物车选项将允许您出售物品上",
    "button shows all character info in full detail. Mouse over the different attribute name in the stats screen to see a more descriptive tooltip about what the attribute does. You can also allocate character attributes after a level up here.": "按钮显示所有字符信息的全部细节。将鼠标悬停在统计屏幕中的不同属性名称上，可以看到关于该属性功能的更具描述性的工具提示。你也可以在升级后分配角色属性。",
    "buttons allow you to switch to another full character build (different items and different character attributes). In order to unlock these extra loadouts you have to purchase them in the": "按钮允许你切换到另一个完整的角色创建（不同的物品和不同的角色属性）。为了解锁这些额外的装备，你必须在游戏中购买它们",
    "button switches the character panel to only show the cosmetic item slots.": "按钮切换角色面板，只显示化妆物品槽。",
    "Character Loadout": "角色预设",
    "Cosmetics": "化妆品",
    "for more details).": "更多详情).",
    "Guide": "指南",
    "Storage": "存储",
    "Idle Hack's inventory tab is broken up by the top half showing each of your character's item loadouts and the bottom half showing the items that are currently not being used in your Storaage. Items can be moved between characters and storage by either clicking or drag and dropping items around. Certain item types can only be equipped to specific character item slots (see": "Idle Hack的库存标签被上半部分显示每个角色的物品装载，下半部分显示当前未在您的存储中使用的物品。可以通过单击或拖放物品来在字符和存储之间移动物品。某些类型的物品只能装备到特定的角色物品槽(参见",
    "Itemization": "分项说明",
    "Loadout": "预设",
    "The storage holds all of your found items from the": "存储中保存了所有你找到的物品",
    "The character's loadout panel shows the character's portrait, name, level as well as all the items that you have equipped (see": "角色的加载面板显示了角色的肖像，名字，级别以及你所装备的所有物品(查看",
    "% Chance on Basic Attack to Cast": "%几率在基础攻击时施放",
    "Chance on Basic Attack to Cast": "几率在基础攻击时施放",
    "% Chance on Hit to Cast": "%几率在命中时施放",
    "Sword of Soul Steal": "盗魂之剑",
    "Attack Speed %": "攻击速度 %",
    "Basic Attack Laser Damage": "基础攻击激光伤害",
    "Basic Attack Mana Steal %": "基础攻击法力值偷取 %",
    "Basic Attack Health Steal %": "基础攻击生命值偷取 %",
    "Water Penetration %": "水系穿透 %",
    "Earth Penetration %": "土系穿透 %",
    "Fire Penetration %": "火系穿透 %",
    "Water Resist %": "水系抗性 %",
    "Earth Resist %": "土系抗性 %",
    "Fire Resist %": "火系抗性 %",
    "Block Amount %": "格挡伤害数量 %",
    "Block Chance %": "格挡几率 %",
    "Buy Cosmetic": "购买化妆品",
    "Buy Loadout": "购买预设",
    "Common": "普通",
    "Cosmetic": "化妆品",
    "Yards to Move to Cast": "移动码数释放",
    "Strength Required": "力量要求",
    "Spell Damage": "法术伤害",
    "Socket Gem": "镶嵌宝石",
    "Summon Eagle": "召唤鹰",
    "Taunting Gong": "嘲讽锣",
    "Shield Slam": "盾击",
    "Charge": "冲锋",
    "Skill Level": "技能等级",
    "Skill Damage": "技能伤害",
    "Run Speed %": "运行速度 %",
    "Resist All %": "抵抗一切 %",
    "Laser Resist %": "激光抵抗 %",
    "Physical Resist %": "物理抵抗 %",
    "Physical Penetration %": "物理穿透 %",
    "Physical Damage": "物理伤害",
    "Rare": "稀有",
    "Refresh My Items": "刷新我的物品",
    "Purchases a random weapon or armor cosmetic.": "购买一个随机武器或护甲化妆品。",
    "Purchase another loadout for a character. Loadouts store seperate inventory and attribute builds to quickly switch to depending on the content you want to achieve. Max 2 loadouts per character.": "为一个角色购买另一个装备。预设存储单独的库存和属性构建，以便根据您想要实现的内容快速切换。每个角色最多2个预设。",
    "Health Regeneration Per Second": "每秒生命值回复",
    "Mana Regeneration Per Second": "每秒法力回复",
    "Magic": "魔法",
    "Legendary": "传说",
    "Increases your maximum storage capacity by 10 more slots up to a maximum of 500.": "将您的最大存储容量增加10个插槽，最多可达500个。",
    "Group dungeon runs contain enemies with higher HP and damage than the single character dungeons runs.": "与单人副本相比，团队副本包含更高生命值和伤害的敌人。",
    "Idle Hack is a love letter to my favorite games - Diablo like ARPGs and Card Collecters. I truly hope you enjoy the game that I've worked countless hours after work on!": "《Idle Hack》是一封写给我最喜欢的游戏的情书——像《暗黑破坏神》这样的ARPG和卡牌收藏者。我真心希望你能喜欢这款我花了无数时间制作的游戏！",
    "Gemmed": "已镶嵌",
    "Discuss Idle Hack on our Discord:": "在我们的Discord上讨论Idle Hack：",
    "Check out our other games over on Itch:": "查看我们在Itch上的其他游戏：",
    "Are you sure you want to logout?": "您确定要退出登录吗？",
    "Confirm Password": "确认密码",
    "Curious? Create a guest account!": "好奇吗? 创建一个访客帐户！",
    "Register": "注册",
    "In order to play account on other devices or avoid losing account data, you can fully register in Settings in the game.": "为了在其他设备上玩帐户或避免丢失帐户数据，您可以在游戏里面的设置中进行完全注册。",
    "Login credentials expired. Please login again.": "登录凭据过期。请重新登录。",
    "Auto Run continues to run dungeons until out of storage space, until Exit Dungeon is selected, or you have gotten more than 10 losses.": "自动持续运行地下城冒险，直到存储空间耗尽，直到退出地下城被选中，或你失败超过10次。",
    "Login Successful": "登录成功",
    "Exit Dungeon": "退出地下城",
    "What makes Idle Hack stand out from a lot of other Idle games is that the game has real time live combat and not just a menu representation or turn based combat. The combat is completely hands off, however, you can see some statistics about the run and see the current health and mana of your characters as they battle. Keep an eye on them and see what attributes they need to have increased in order to give them better combat efficiency. There are a few other aspects to the Heads Up Display, please see the below image:": "《Idle Hack》之所以能从众多Idle游戏中脱颖而出，是因为它拥有实时战斗，而不仅仅是菜单呈现或回合制战斗。战斗是完全自由的，然而，你可以看到一些关于奔跑的统计数据，以及你的角色在战斗时的当前生命值和法力值。密切关注他们，看看他们需要增加哪些属性才能提高他们的战斗效率。平视显示器还有其他几个方面，请参见下图：",
    "to learn how to turn on Auto-Run) you can see full statistics of all the Auto-Run Dungeon Runs by clicking the \"Auto Run Info\" button. Not only can you see all of the statistics you can also manage all of the kept item rewards. Notice here that you can click multiple items and select to delete all of the items selected to manage your rewards here without having to stop and return to inventory.": "学习如何打开自动运行)，你可以看到所有自动运行地下城运行的完整统计数据，通过点击“自动运行信息”按钮。你不仅可以看到所有的统计数据，还可以管理所有保留的物品奖励。请注意，您可以单击多个物品，并选择删除选中的所有物品来管理您的奖励，而无需停止并返回库存。",
    "Lastly, during an Auto-Run (see": "最后，在自动运行期间(参见",
    "Notice at the top shows the health and mana of your team. If you mouse over a specific character you will see even more statistics about the character during the current run. If you click on the character portrait it will focus the camera on that character and you can watch them in the middle of the screen. Notice the right side shows the count of the enemies that still exist in the dungeon and any modifiers that exist (see": "注意在顶部显示了你的团队的生命值和法力值。如果你把鼠标放在一个特定的角色上，你会看到更多关于这个角色在当前运行期间的统计数据。如果你点击人物肖像，它会将相机聚焦在人物上，你可以在屏幕中间看到他们。注意，右侧显示了仍然存在于地下城中的敌人的数量和任何存在的修饰符(参见",
    "Game Play": "游戏玩法",
    "for more info on modifiers). If you mouse over the Modifiers you will see a list of all the current increased enemy attributes. \"Exit Dungeon\" button is available to cancel the current run and return to Inventory or Dungeons tab.": "有关修饰符的更多信息)。如果你把鼠标放在修饰符上，你会看到一个所有当前增加的敌人属性的列表。“退出地下城”按钮可用于取消当前运行并返回库存或地下城标签。",
    "Physical": "物理",
    "Spell -": "法术 -",
    "LVLUP": "升级",
    "Ruby": "红宝石",
    "Blasts an Area": "在一个产生区域爆炸",
    "Book of Blast": "爆炸之书",
    "Damage/Heal/Curse/Buff Amount": "伤害/治疗/诅咒/增益 数量",
    "Fire Type": "火类型",
    "Mana Cost": "法力消耗",
    "Click to focus camera.": "点击对焦相机。",
    "Dexterity:": "灵巧:",
    "Health:": "生命值:",
    "DPS:": "每秒伤害:",
    "HPS:": "每秒回血:",
    "Intelligence:": "智力:",
    "Strength:": "力量:",
    "Mana:": "法力:",
    "Constitution:": "体质:",
    "Critical Damage %": "暴击伤害 %",
    "Intellect Required": "智力要求",
    "Spell/Skill Cooldown %": "法术/技能 冷却时间 %",
    "Tunic": "束腰外衣",
    "Item does not belong in that slot.": "物品不属于该槽位。",
    "Delete Selected Item": "删除选择的物品",
    "Delete Selected Items": "删除选择的物品",
    "Sell Selected Item on Market": "在市场出售选择的物品",
    "Toggle Favorite": "切换是否收藏",
    "! Note": "! 注意",
    "Contains Random Enemies with Any Elemental Type": "包含任意元素类型的随机敌人",
    "Dungeon Progression": "地下城进度",
    "Elemental": "元素",
    "Dungeons are the core gameplay content in Idle Hack. Complete dungeons to find better items and increase the strength of  your characters. Different dungeons are available to complete and different dungeons have different legendaries that could possibly be rewarded.": "地下城是《Idle Hack》的核心游戏内容。完成地下城，找到更好的物品，增加你的角色的力量。玩家可以完成不同的地下城，不同的地下城也有不同的传说可以获得奖励。",
    "Earth Type Dungeon (60% Water Damage Reduction, 30% Earth Damage Reduction, 30% Extra Fire Damage Taken)": "土系地下城（60%水系伤害减免，30%土系伤害减免，30%额外受到的火系伤害）",
    "Even turning on \"Delete Spell/Skill Books\" will still keep Legendary Spell/Skill Books if found.": "即使打开“删除法术/技能书”，如果找到该书籍，仍然会保留传说法术/技能书。",
    "Ladder": "天梯",
    "Fire Type Dungeon (60% Earth Damage Reduction, 30% Fire Damage Reduction, 30% Extra Water Damage Taken)": "火系地下城（土系伤害减少60%，火系伤害减少30%，30%额外受到的水系伤害））",
    "Lastly, the bottom options allow you toggle on the \"Auto Run\" features that will allow you to continually run dungeons until you exit. The checkboxes allow you to specify which items to just automatically delete.": "最后，底部的选项允许你切换“自动运行”功能，这将允许你持续运行地下城，直到你退出。复选框允许您指定要自动删除哪些项。",
    "Secret dungeon can be unlocked by completing level 50 of the Interdimensional Rift": "秘密地下城可以通过完成 50级 的 次元裂隙 来解锁",
    "Physical Type Dungeon (no elemental changes)": "物理类型地下城（没有元素变化）",
    "The arrow buttons on the left and right can change to a different dungeon. There are 5 different dungeon types with different": "左右的箭头按钮可以切换到不同的地下城。有5种不同的地下城类型与不同",
    "The below image shows at which levels you can expect to find better tier items and better legendaries. It displays the dungeon level progression and the benefits for reaching higher levels.": "下图显示了你在哪个等级可以找到更好层级的物品和更好的传说。它显示了地下城的等级进程以及达到更高等级的好处。",
    "The dungeon level can be specified at the top right of the above image. Better items can be found at higher levels. There are 3 different tiers of items that have higher attributes the higher the tier. While increasing dungeon levels the item tiers also go up; dungeon levels 1 to 14 drop tier 1, dungeon levels 15 to 34 drop tier 2 and dungeon levels 30 and up drop tier 3 items.": "地下城的等级可以在上图的右上方指定。在更高的关卡中可以找到更好的物品。有3层级不同的物品，越高的物品属性越高。在提高地下城等级的同时，物品层级也在上升；地下城1至14级掉落第1层级物品，地下城15至34级掉落第2层级物品，地下城30级及以上掉落第3层级物品。",
    "types:": "类型:",
    "The Interdimensional Rift Ladder allows for players to compete in pushing harder and harder difficulty within the dungeons. The Interdimensional Rift also is more difficult than other dungeons because it can contain modifiers that increase random attributes of the enemies in the dungeon - the higher the level the more modifiers that are added to the enemies. By completing the Interdimensional Rift Dungeon it increases your standings on the ladder. Continue to tweak and refine your characters' loadouts to push higher on the ladder.": "次元裂隙天梯 允许玩家在地下城中竞争越来越难的难度。次元裂隙 也比其他地下城更困难，因为它可以包含增加地下城中敌人随机属性的修饰符——等级越高，添加到敌人的修饰符就越多。通过完成跨次元裂隙地下城，它可以增加你在天梯上的地位。继续调整和完善你的角色的预设，以推动更高的天梯。",
    "Water Type Dungeon (60% Fire Damage Reduction, 30% Water Damage Reduction, 30% Extra Earth Damage Taken)": "水系地下城（火系伤害减少60%，水系伤害减少30%，30%额外受到的土系伤害）",
    "Connected to chat!": "聊天已连接！",
    "Chat": "聊天",
    "Chat & Mail": "聊天 & 邮件",
    "Mail": "邮件",
    "You also have the ability to send mail to other players. Mail can contain a text message, an item and/or gold. This is a great way to exchange items directly in a trade or to send items to your friends. Click on the mail icon at the top right to show the mail. The mail can be accessed at any time and you can play every aspect of Idle Hack with the mail open. Click the \"Send\" button to send a mail item:": "你还可以向其他玩家发送邮件。邮件可以包含一条短信、一件物品和/或金币。这是一种在交易中直接交换物品或将物品发送给好友的好方法。单击右上方的邮件图标以显示邮件。邮件可以在任何时候访问，你可以玩每一个方面的闲置黑客与邮件打开。点击“发送”按钮发送邮件：",
    "Idle Hack has a basic global chat that allows you discuss about the game and setup trades etc. Simply click the chat icon at the top to bring down the chat pop up. You can continue to play every aspect of Idle Hack while the chat window is open. The chat is also opt in, if you don't click the chat window it won't receive/send messages.": "Idle Hack有一个基础的全局聊天系统，允许你讨论游戏和设置交易等。只需单击顶部的聊天图标，就会弹出聊天窗口。当聊天窗口打开时，您可以继续玩Idle Hack的各个功能。聊天也是可选择的，如果你不点击聊天窗口，它将不会接收/发送消息。",
    "Clicking the \"Select Item\" button will bring up another dialog that allows you to select any item that is in your storage to send. Also, you can send Gold, write a message and then make sure the user name is typed in properly with the correct capitalization. ": "点击“选择物品”按钮将弹出另一个对话框，允许您选择存储中要发送的任何物品。此外，您还可以发送金币，编写消息，然后确保用户名键入正确的大写字母。",
    "Character Item Slots": "角色物品槽",
    "Common - A basic item without any magical attributes.": "普通 - 没有任何魔法属性的基本物品。",
    "Charms": "护身符",
    "Cosmetic - A very scarce item that changes your character's appearance. Can be found from": "化妆品-一个非常稀缺的物品，可以改变你的角色的外观。可以获得从",
    "for all attribute types.": "对于所有属性类型。",
    "for more details.": "更多详情。",
    "for special combined gem effects.": "用于特殊组合宝石效果。",
    "Gem Recipes": "宝石配方",
    "Gems": "宝石",
    "Gemmed - A common item that has been socketed with at least one gem. See": "已镶嵌 - 镶嵌了至少一颗宝石的普通物品。查看",
    "Helmet": "头盔",
    "Item Attributes": "物品属性",
    "Legendary Effect List": "传说效果列表",
    "Items can be placed into their specific slot by either drag/dropping or clicking on the item and then clicking on the slot. If your character does not meet the requirements then the item will not be equipped and a notification will show stating he/she does not meet the requirements. Furthermore, if you change your character's attributes in a way where your character no longer meets an item requirement then the item's border will be red indicating that even though its equipped any of the item's attributes will not be added to the character. See": "物品可以通过拖放或点击物品再点击槽来放置到特定的槽中。如果你的角色不符合要求，那么该物品将不会装备，并会显示一个通知，说明他/她不符合要求。此外，如果你改变角色的属性，使角色不再满足某件物品的要求，那么该物品的边框将显示为红色，表明即使装备了该物品，该物品的任何属性也不会被添加到角色身上。查看",
    "Legendary Set - Legendary item that shows its true power if other legendaries are also equipped.": "传说套装 - 传说物品，如果也装备了套装里面的其他传说物品，就会展示其真正的力量。",
    "Legendary - A very scarce item that has a special legendary item attribute that has the most powerful effects.": "传说 - 非常稀有的道具，拥有特殊的传说道具属性，效果非常强大。",
    "Normal Spell/Skill - A book or pact that contains the knowledge to perform abilities in combat.": "普通法术/技能 - 包含在战斗中使用技能的知识的书或契约。",
    "or purchased in the": "或购买于",
    "Other Item Types": "其他物品类型",
    "Rare - A valuable item that contains at least 2 magical attributes, but can roll more.": "稀有 - 一个有价值的物品，包含至少2个魔法属性，但可以重洗出更多。",
    "Rarities": "稀有度",
    "See": "查看",
    "The above loadout shows multiple aspects of Idle Hack itemization. The colors of the items indicate their rarity and their locations on the character indicate their type; only certain items can be placed into certain slots.": "上面的加载显示了放置黑客物品的多个方面。物品的颜色表明它们的稀有性，它们在角色身上的位置表明它们的类型；只有特定的物品可以放置在特定的插槽中。",
    "Spells/Skills": "法术/技能",
    "Uncommon - A basic item that contains at most 2 magical attributes.": "罕见 - 一个基本的物品，最多包含2个魔法属性。",
    "When completing dungeons you will receive item rewards. There are 3 different tiers of items that have higher attributes the higher the tier. While increasing dungeon levels the item tiers also go up; dungeon levels 1 to 14 drop tier 1, dungeon levels 15 to 34 drop tier 2 and dungeon levels 30 and up drop tier 3 items. Please see the below reference image.": "当你完成地下城时，你会收到物品奖励。有3层不同的道具，越高的道具属性越高。在提高地下城等级的同时，道具层也在上升；地下城1至14级掉落第1层级物品，地下城15至34级掉落第2层级物品，地下城30级及以上掉落第3层级物品。请看下面的参考图片。",
    "Equipped Item.": "已装备物品。",
    "Attributes Assigned": "属性点已分配",
    "Ready": "已就绪",
    "Auto Run Info": "自动运行信息",
    "Lvl.:": "等级:",
    "Casts:": "施法:",
    "Heals:": "治疗:",
    "Deaths:": "死亡:",
    "Exp.:": "经验值:",
    "Dmg.:": "造成伤害:",
    "Dmg.Taken:": "受到伤害:",
    "Delete All": "全部删除",
    "Dungeon Run Statistics": "地牢运行统计",
    "Items": "物品",
    "Book of Rallying Cry": "战斗呐喊之书",
    "Bow": "弓",
    "Charm of Strength": "力量护身符",
    "Critical Rate %": "暴击率 %",
    "Dexterity Required": "灵巧要求",
    "Forces Friendlies to Attack the Same Target": "强制己方攻击同一目标",
    "Robe of Heat": "炽热长袍",
    "Charm": "护身符",
    "Spin Slice": "旋转切片",
    "Sword": "剑",
    "Tunic of Absolution": "宽恕的束腰外衣",
    "Charm": "护身符",
    "Cap of Strength": "力量上限",
    "Charm of Life": "生命护身符",
    "Book of Penetrating Shot": "穿透射击之书",
    "Fires a Shot that Pierces, Requires Bow": "发射能穿透一击，需要弓",
    "Charm of Strength": "力量护身符",
    "Attribute Points Available": "属性点可用",
    "Submit Attributes": "提交属性",
    "Head Band": "头带",
    "Basic attack speed in seconds.": "基础攻击速度按秒。",
    "Basic attack water damage amount.": "基础攻击水系伤害数量。",
    "Basic attack earth damage amount.": "基础攻击土系伤害数量。",
    "Basic attack fire damage amount.": "基础攻击火系伤害数量。",
    "Basic attack physical damage amount.": "基础攻击物理伤害数量。",
    "Fire": "火",
    "Decreases the cooldown time of spells and skills.": "减少法术和技能的冷却时间。",
    "Health regeneration per second.": "每秒恢复的生命值。",
    "Increases damage of skill based moves (moves used with a ranged or melee weapon).": "增加技能的伤害基于移动（使用远程或近战武器）。",
    "Increases damage of spell based moves.": "增加法术伤害基于移动。",
    "Mana regeneration per second.": "每秒恢复的法力值。",
    "Maximum mana.": "最大法力值。",
    "Maximum health.": "最大生命值。",
    "Movement speed.": "移动速度。",
    "Percentage chance of avoiding any damage. Max 60%.": "避免任何伤害的几率百分比。最大60%。",
    "Percentage chance of avoiding critical strikes.": "避免暴击的几率。",
    "Percentage chance of blocking a portion of damage. Max 60%.": "格挡部分伤害的几率百分比。最大60%。",
    "Percentage chance to do extra critical damage.": "造成额外暴击伤害的几率百分比。",
    "Percentage of damage multiplied when dealing a critical hit.": "造成暴击时增加的伤害百分比。",
    "Percentage of damage reduced on blocking.": "格挡时减少的伤害百分比。",
    "Percentage of health gained from spells and skills based on damage dealt.": "根据所造成的伤害从法术和技能中获得的生命百分比。",
    "Percentage of mana gained from spells and skills based on damage dealt.": "根据所造成的伤害从法术和技能中获得的法力百分比。",
    "Percentage of reduction for earth damage.": "土系伤害减免的百分比。",
    "Percentage of reduction for fire damage.": "火系伤害减免的百分比。",
    "Percentage of reduction for water damage.": "水系伤害减免的百分比。",
    "Percentage of reduction for physical damage.": "物理伤害减免的百分比。",
    "Rallies other friendly characters to boost their speed by 15% for 3 seconds and to attack the same target as you.": "集结其他友方角色，使他们的速度提高15%，持续3秒，并攻击与你相同的目标。",
    "Cancel": "取消",
    "Delete With Boosted Attribute": "删除带有增强属性",
    "Delete With 3 or 4 Sockets": "删除3或4槽位",
    "Delete Gems": "删除宝石",
    "Delete Below Level": "删除低于等级",
    "Delete Below Efficiency %": "删除低于效率%",
    "Items deleted.": "物品已删除。",
    "All Fire Damage Spells": "所有火系伤害法术",
    "Attune yourself to the power of fire.": "让你自己适应火的力量。",
    "Bow of Strength": "力量之弓",
    "Sword of Earth": "大地之剑",
    "Broad Sword": "阔剑",
    "Long Sword of Essence": "精华长剑",
    "Are you sure you want to purchase Donate Cookie to Hungry Yeti?": "你确定你想购买捐赠饼干给饥饿的雪人吗？",
    "Donate a Sugar Cookie to the Hungry Yeti. The Hungry Yeti has rewards for every player when donations have reached 100, 500 and 1000 cookies. Help! He's very hungry and we don't want him eating players.": "当捐赠饼干达到100、500和1000块时，《饥饿的雪人》会给每个玩家奖励。救命啊！他很饿，我们不希望他吃掉玩家。",
    "Sockets a specific gem into a specific item with at least one socket. Gems cannot be removed from sockets.": "将一个特定的宝石镶嵌到一个特定的物品中，至少有一个插槽。宝石不能从插槽中移除。",
    "Donate Cookie to Hungry Yeti": "给饥饿的雪人捐赠饼干",
    "The Pen is mightier than the Sword.": "笔比剑更强大。",
    "Your Pact Effects are Doubled": "你的契约效果翻倍",
    "The Sharpest Quill": "最锋利的羽毛笔",
    "Recurve Bow of Haste": "反曲急速之弓",
    "Long Sword of Vampirism": "吸血鬼长剑",
    "Kite Shield": "风筝盾",
    "Kite Shield of Absolution": "宽恕的风筝盾",
    "OK": "好的",
    "Heals Team": "治疗队伍",
    "Robe of Blood Magic": "血魔法长袍",
    "Mail of Blood Magic": "血魔法锁甲",
    "Charm of Absolution": "宽恕护身符",
    "Shield Slams and Knockbacks Enemies, Requires Shield": "盾击并击退敌人，需要盾",
    "Shoots a Single Bolt": "射出一颗螺栓",
    "Summons Skeleton Companion": "召唤骷髅同伴",
    "Taunts Enemies, Requires Shield": "嘲讽敌人，需要盾牌",
    "Mail of Essence": "精华锁甲",
    "Too many items in storage.": "存储里的物品太多。",
    "Wand of Vampirism": "吸血鬼之杖",
    "% Chance on Basic Attack to Cast Curse Intellect": "%几率在基础攻击时施放智力诅咒",
    "% Chance on Basic Attack to Cast Multi-Shot": "%几率在基础攻击时施放多次射击",
    "Hat of Soul Steal": "灵魂偷取帽",
    "Mail of Essence": "精华锁甲",
    "Auto Run Results": "自动运行结果",
    "Bolt": "螺栓",
    "Book of Bolt": "螺栓之书",
    "Book of Charge": "冲锋之书",
    "Book of Curse": "诅咒之书",
    "Book of Heal All": "治疗全部之书",
    "Book of Shield Slam": "盾击之书",
    "Book of Summon": "召唤之书",
    "Book of Taunting Gong": "嘲讽锣之书",
    "Bow of Heat": "炽热之弓",
    "Buckler of Constitution": "体质之盾",
    "Cap of Blood Magic": "血魔法之帽",
    "Cap of Essence": "精华之帽",
    "Charges Into an Enemy, Requires Melee Weapon": "向敌人冲锋，需要近战武器",
    "Charm of Earth": "土之护身符",
    "Charm of Siphoning": "虹吸护身符",
    "Charm of Wisdom": "智慧护身符",
    "Amber": "琥珀",
    "Sapphire": "蓝宝石",
    "Curse Constitution": "诅咒体质",
    "Curses Enemy Dexterity": "诅咒敌人灵巧",
    "Earth Type": "土系类型",
    "% Chance on Basic Attack to Cast Summon Skeleton": "%几率在基础攻击时施放召唤骷髅",
    "% Chance on Basic Attack to Cast Shield Slam": "%几率在基础攻击时施放盾击",
    "% Chance on Basic Attack to Cast Heal All": "%几率在基础攻击时施放治疗所有",
    "A vintage ring with its original gem missing.": "一枚老式戒指，原来的宝石不见了。",
    "Spins Violently to Damage Enemies, Requires Melee Weapon": "猛烈旋转伤害敌人，需要近战武器",
    "Teleport to Enemy and Performs a Crit., Requires Melee Weapon": "传送到敌人并实施暴击。需要近战武器",
    "Unequipped Item.": "卸下物品。",
    "Book of Spin Slice": "旋转切片之书",
    "Book of Shadow Step": "影步之书",
    "Cancel Item Selection": "取消选中物品",
    "Water Type": "水系类型",
    "Lucky Charm": "幸运护身符",
    "Jerkin of Siphoning": "虹吸背心",
    "Buffs Team Strength": "队伍力量增益",
    "Book of Buff": "增益之书",
    "Multi-Selected Items": "选择多个物品",
    "Contains a Socket": "包含一个槽位",
    "Empty": "空",
    "Hat of Intelligence": "智力之帽",
    "Hat of Haste": "急速之帽",
    "Jerkin": "背心",
    "Item deleted.": "物品已删除。",
    "Select an Item": "选择一个物品",
    "Item added for sale on Market.": "物品已上架在市场出售。",
    "Skill -": "技能 -",
    "Jerkin of Absolution": "宽恕的背心",
    "Charm of Detriment": "损害的护身符",
    "Charm of Soul Steal": "灵魂偷取护身符",
    "Opal": "蛋白石",
    "Sword of Life": "生命之剑",
    "Summons Eagle Companion": "召唤雄鹰同伴",
    "Cap of Plate": "甲帽",
    "Blast": "爆炸",
    "Cap": "帽",
    "Unable to reach service.": "无法接通服务。",
    "Inbox": "收件箱",
    "You've got mail!": "你有新邮件!",
    "Bow of Vampirism": "吸血鬼之弓",
    "Robe of Absolution": "宽恕的长袍",
    "Receive and Delete Message": "接收和删除消息",
    "Received mail items.": "已到邮件物品。",
    "Book of Present": "礼物之书",
    "Creates a Present with Random Effects": "创建一个带有随机效果的礼物",
    "Penetrating Shot": "穿透射击",
    "Robe of Life": "生命长袍",
    "Creates a well packaged gift! Open the gift to get a random level 1 summon or buff": "创造一个包装精美的礼物！打开礼物得到一个随机的1级召唤或buff",
    "Congratulations! Everyone has fed the Yeti 100 cookies. Please accept this as a token of his gratitude.": "恭喜你!每个人都给雪人喂了100块饼干。请接受这个以表示他的感激之情。",
    "Hungry Yeti": "饥饿的雪人",
    "Item": "物品",
    "Recovers 59% Mana": "恢复59%法力值",
    "Sugar Cookie": "糖饼干",
    "Holographic": "全息",
    "Speed": "速度",
    "Too many items already listed in Market.": "市场中已经上架太多物品了。",
    "Multi-Shot": "多重射击",
    "Summon Skeleton": "召唤骷髅",
    "Fires Multiple Arrows, Requires Bow": "射出多支箭，需要弓",
    "Book of Multi Shot": "多重射击之书",
    "Card added to deck.": "卡牌已添加到牌组中。",
    "Binder": "牌组",
    "Lobby": "大厅",
    "Close": "关闭",
    "Computer Hard": "困难电脑",
    "Computer Medium": "普通电脑",
    "Computer Easy": "简单电脑",
    "Battle": "战斗",
    "Players": "玩家",
    "Purchases a new empty deck.": "购买一个新的空牌组。",
    "Send Mail": "发送邮件",
    "Water": "水",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Stiletto of Haste": "急速的细高跟鞋",
    "Mail of Wisdom": "智慧之锁甲",
    "Mail of Dowsing": "探寻之锁甲",
    "Head Band of Earth": "大地头带",
    "Coif of Intelligence": "智力之冠",
    "Coif of Essence": "精华之冠",
    "Robe of Vampirism": "吸血鬼长袍",
    "Robe of Constitution": "体质长袍",
    "Buckler of Wisdom": "智慧之盾",
    "Bow of Vampirism": "吸血鬼之弓",
    "Bow of Absolution": "宽恕之弓",
    "Bow of Plate": "板弓",
    "Hatchet of Heat": "炽热之斧",
    "Sword of Dexterity": "灵巧之剑",
    "Wand of Blood Magic": "血魔法之杖",
    "Sword of Regeneration": "回复之剑",
    "Sword of Constitution": "体质之剑",
    "Hatchet of Dexterity": "灵巧之斧",
    "Buckler of Dowsing": "瓦解之盾",
    "Buckler of Blood Magic": "血魔法之盾",
    "Hatchet": "斧头",
    "Jerkin of Vampirism": "吸血鬼背心",
    "Charm of Strength": "力量护身符",
    "Coif of Detriment": "伤害之冠",
    "Hatchet of Haste": "急速斧头",
    "Coif of Essence": "精华之冠",
    "Coif of Dowsing": "探寻之冠",
    "Coif of Recklessness": "鲁莽之冠",
    "Knife of Recklessness": "鲁莽之刃",
    "Charm of Regeneration": "回复护身符",
    "Charm of Recklessness": "鲁莽护身符",
    "Buckler of Soul Steal": "灵魂窃取之盾",
    "Hatchet of Detriment": "伤害之斧",
    "Hatchet of Strength": "力量之斧",
    "Knife of Vampirism": "吸血鬼之刃",
    "Sword of Siphoning": "虹吸剑",
    "Hatchet of Detriment": "伤害之斧",
    "Sword of Recklessness": "鲁莽剑",
    "Charm of Essence": "精华护身符",
    "Tempered Bow of Earth": "大地淬炼弓",
    "Hatchet of Vampirism": "吸血鬼之斧",
    "Hat of Wisdom": "智慧之帽",
    "Buckler of Haste": "急速之盾",
    "Charm of Blood Magic": "血魔法护身符",
    "Sword of Wisdom": "智慧之剑",
    "Buckler of Vampirism": "吸血鬼之盾",
    "Buckler of Essence": "精华之盾",
    "Buckler of Haste": "急速之盾",
    "Sword of Strength": "力量之剑",
    "Hatchet of Wisdom": "智慧斧",
    "Knife": "刃",
    "Shield of Constitution": "体质之盾",
    "Jerkin of Recklessness": "鲁莽背心",
    "Jerkin of Strength": "力量背心",
    "Buckler of Recklessness": "鲁莽之盾",
    "Hatchet of Earth": "大地之斧",
    "Knife of Constitution": "体质之刃",
    "Claire": "克莱尔",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "ryu_shinobi": "ryu_shinobi",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "Loading Game Assets... ": "加载游戏资源… ",
    "Score: ": "分数: ",
    "Storage - ": "存储 - ",
    "Daily Arena Battles: ": "每日竞技场战斗：",
    "Experience ": "经验值 ",
    "Increases spell damage, maximum mana, and elemental resistances. Base stat: ": "增加法术伤害，最大法力值和元素抗性。基础属性:",
    "Skill Level : ": "技能等级 : ",
    "Increase Storage +": "提高存储 +",
    "Efficiency: ": "效率: ",
    "Interdimensional Rift - Level : ": "次元裂隙 - 等级：",
    "Haunted Manor - Level : ": "闹鬼的庄园 - 等级：",
    "Desert Temple - Level : ": "沙漠神庙 - 等级 : ",
    "Forest Mine - Level : ": "森林矿洞 - 等级 : ",
    "Icy Castle - Level : ": "冰雪城堡 - 等级 : ",
    "Strong ": "强大的 ",
    "Frozen ": "冰封的",
    "Striking ": "惊人的",
    "Hardened ": "坚硬的",
    "Vital ": "生命之",
    "Skillful ": "熟练的",
    "Quick ": "快速的",
    "Smart ": "聪明的",
    "Keen ": "敏锐的",
    "Swift ": "迅捷的",
    "Stone ": "石制的",
    "Detrimental ": "有害的",
    "Genius ": "天才的",
    "Increases basic physical attack damage and physical resistance. Base stat: ": "增加基础物理攻击伤害和物理抗性。基础属性:",
    "Increases movement speed and maximum health. Base stat: ": "增加移动速度和最大生命值。基础属性:",
    "Increases skill damage and chance to critically hit. Base stat: ": "增加技能伤害和暴击几率。基础属性:",
    "Sensitive ": "灵敏的",
    "Tempered ": "锤炼的",
    "Adept ": "娴熟的",
    "Chipped ": "残缺的",
    "Dexterous ": "灵巧的",
    "Fiery ": "火热的",
    "From: ": "来自: ",
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
    " (Purple)": " (紫色)",
    " (Green)": " (绿色)",
    " (Orange)": " (橙色)",
    " (Pink)": " (粉色)",
    " (Rainbow)": " (彩虹)",
    " (White)": " (白色)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^([\d\.]+) \(([\d\.]+):([\d\.]+)\)$/,
    /^([\d\.]+) \(([\d\.]+)\/([\d\.]+)\)$/,
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
    /^CPU ([\d\.,]+)\/([\d\.,]+):([\d\.,]+) ([\d\.,]+)$/,
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
    [/^(.+) does not have enough mana to cast.$/, '$1 没有足够的法力来施放。'],
    [/^(.+) does not meet item requirements.$/, '$1 不满足物品装备条件。'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Your (.+) has sold.$/, '你的 $1 已经售出。'],
    [/^How much do you want to sell (.+) for\?$/, '你想把 $1 卖多少钱？'],
    [/^Wins: (.+) Losses: (.+) \- Avg. Time: (.+)$/, '胜：$1 负：$2 \- 平均时间：$3'],
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
	[/^([\d\.]+)\% Chance$/, '$1\% 几率'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) Auto Dungeon Runs$/, '$1 自动运行地下城'],
    [/^Are you sure you want to delete (.+)\?$/, '您确定要删除 $1 吗？'],
    [/^Are you sure you want to delete ([\d\.,]+) items.$/, '您确定要删除 $1 物品吗。'],
    [/^([\d\.,]+) Enemies$/, '$1 敌人'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Mana$/, '$1 法力'],
    [/^([\d\.,]+) Socket\(s\)$/, '$1 槽位'],
    [/^Attributes \- ([\d\.,]+) Points Available$/, '属性 \- $1 点数可用'],
    [/^Slot ([\d\.,]+)$/, '槽位 $1'],
    [/^Gold: ([\d\.,]+)$/, '金币: $1'],
    [/^Page: ([\d\.,]+)$/, '页码: $1'],
    [/^Deck ([\d\.,]+)$/, '牌组 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Tier ([\d\.,]+)$/, '层级 $1'],
    [/^\-Tier ([\d\.,]+)$/, '-层级 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^Level : ([\d\.,]+)$/, '等级 : $1'],
    [/^Earth\/Laser Deck \- Level Sum: ([\d\.,]+)$/, '土/激光 卡组 - 等级总和： $1'],
    [/^Earth\/Physical Deck \- Level Sum: ([\d\.,]+)$/, '土/物理 卡组 - 等级总和： $1'],
    [/^Earth\/Water Deck \- Level Sum: ([\d\.,]+)$/, '土/水 卡组 - 等级总和： $1'],
    [/^Earth Deck \- Level Sum: ([\d\.,]+)$/, '土 卡组 - 等级总和： $1'],
    [/^Earth\/Fire Deck \- Level Sum: ([\d\.,]+)$/, '土/火 卡组 - 等级总和： $1'],
    [/^Fire\/Water Deck \- Level Sum: ([\d\.,]+)$/, '火/水 卡组 - 等级总和： $1'],
    [/^Fire\/Laser Deck \- Level Sum: ([\d\.,]+)$/, '火/激光 卡组 - 等级总和： $1'],
    [/^Fire\/Earth Deck \- Level Sum: ([\d\.,]+)$/, '火/土 卡组 - 等级总和： $1'],
    [/^Fire\/Physical Deck \- Level Sum: ([\d\.,]+)$/, '火/物理 卡组 - 等级总和： $1'],
    [/^Fire Deck \- Level Sum: ([\d\.,]+)$/, '火 卡组 - 等级总和： $1'],
    [/^Water\/Earth Deck \- Level Sum: ([\d\.,]+)$/, '水/土 卡组 - 等级总和： $1'],
    [/^Water\/Fire Deck \- Level Sum: ([\d\.,]+)$/, '水/火 卡组 - 等级总和： $1'],
    [/^Water\/Laser Deck \- Level Sum: ([\d\.,]+)$/, '水/激光 卡组 - 等级总和： $1'],
    [/^Water Deck \- Level Sum: ([\d\.,]+)$/, '水 卡组 - 等级总和： $1'],
    [/^Water\/Physical Deck \- Level Sum: ([\d\.,]+)$/, '水/物理 卡组 - 等级总和： $1'],
    [/^Physical\/Laser Deck \- Level Sum: ([\d\.,]+)$/, '物理/激光 卡组 - 等级总和： $1'],
    [/^Physical Deck \- Level Sum: ([\d\.,]+)$/, '物理 卡组 - 等级总和： $1'],
    [/^Physical\/Fire Deck \- Level Sum: ([\d\.,]+)$/, '物理/火 卡组 - 等级总和： $1'],
    [/^Physical\/Water Deck \- Level Sum: ([\d\.,]+)$/, '物理/水 卡组 - 等级总和： $1'],
    [/^Physical\/Earth Deck \- Level Sum: ([\d\.,]+)$/, '物理/土 卡组 - 等级总和： $1'],
    [/^Laser\/Water Deck \- Level Sum: ([\d\.,]+)$/, '激光/水 卡组 - 等级总和： $1'],
    [/^Laser\/Fire Deck \- Level Sum: ([\d\.,]+)$/, '激光/火 卡组 - 等级总和： $1'],
    [/^Laser\/Physical Deck \- Level Sum: ([\d\.,]+)$/, '激光/物理 卡组 - 等级总和： $1'],
    [/^Laser\/Earth Deck \- Level Sum: ([\d\.,]+)$/, '激光/土 卡组 - 等级总和： $1'],
    [/^Laser Deck \- Level Sum: ([\d\.,]+)$/, '激光 卡组 - 等级总和： $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Level (.+) \/ (.+)$/, '等级 $1 \/ $2'],
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