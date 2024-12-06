// ==UserScript==
// @name         idlehack-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.2
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
    "Seasons": "季节",
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
    "A Marketplace to buy and sell items with other players. Save up gold to purchase those perfect items that will make your characters stronger or sell your own powerful gear to earn more gold.": "一个与其他玩家买卖物品的市场。攒下金币去购买那些能够让你的角色变得更强大的道具，或者出售你自己的强大装备去赚取更多金币。",
    "A Shop where you can use gold to purchase upgrades for your account or to modify equipment to make them stronger.": "一个商店，你可以用金币为你的账户购买升级或修改装备，使他们更强大。",
    "Arena": "竞技场",
    "Arena Ladder": "竞技场天梯榜",
    "Collection": "收藏品",
    "Don't have an account? Register!": "没有账户？注册!",
    "Filter (Comma Delimited)": "过滤器（逗号分隔）",
    "Finally, and maybe most importantly, there is a new shop item that allows you to sacrifice Sugar Cookies to feed the Hungry Yeti. The Yeti is very hungry and to prevent him from eating players we need to donate Sugar Cookies to keep him satiated. The Hungry Yeti has prizes for every player when players donate 100, 500, and 1000 Sugar Cookies!": "最后，也许也是最重要的是，有一个新的商店道具允许你牺牲 糖饼干 来喂养饥饿的雪人。雪人非常饥饿，为了防止它吃掉玩家，我们需要捐赠 糖饼干 让它保持饱腹感。当玩家捐赠100、500和1000块糖饼干时，饥饿的雪人会给每个玩家奖励！",
    "Forest Mine": "森林矿洞",
    "Gingerbread Man - A quick, but flimsy unit made of baked gingerbread.": "姜饼人 -- 一个快速,但脆弱的单位做的烤姜饼。",
    "Icy Castle": "冰雪城堡",
    "Haunted Manor": "闹鬼的庄园",
    "Idle Hack Fall Seasonal Event is Live for Oct./Nov./Dec.": "Idle Hack 秋季活动将于10月/ 11月/ 12月上线。",
    "Idle Hack is a Multiplayer Incremental Action Role Playing Game akin to hack and slash favorites such as Diablo and Dungeon Siege with a mix of modern idle games that allows you to grind dungeons for loot completely hands off. Many similar Persistent Browser Based Games are fully menu based without the game actually playing out, but Idle Hack plays out in real time and you can watch your team progress and become stronger over time by earning experience and acquiring loads of different gear. Everything from unique legendaries to randomized magic and rare items with over 35 different item attributes to strengthen your character with; Idle Hack allows for diverse build creations with legendaries significantly changing your build. Classless design enables total control over a team of four characters with over 25 different spells allowing you to build a synergistic party to work through increasingly difficult dungeons.": "《Idle Hack》是一款多人增量动作角色扮演游戏，类似于《暗黑破坏神》和《地下城攻城》等热门游戏，它混合了现代的空闲游戏，允许你在地下城中进行研磨，以获得战利品。许多类似的基于持久浏览器的游戏都是完全基于菜单的，并没有真正的游戏玩法，但《Idle Hack》是实时的，你可以看到你的团队进展，并随着时间的推移通过获得经验和获得不同的装备而变得更强大。从独特的传说到随机魔法和稀有道具，拥有超过35种不同的道具属性，可以增强你的角色；空闲Hack允许不同的建筑创造与传说显著改变你的建筑。无职业的设计让你可以完全控制一个由四个角色组成的团队，拥有超过25种不同的法术，让你可以建立一个协同的团队来度过越来越困难的地下城。",
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
    "Main Idle Hack Features:": "黑客放置主要功能:",
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
    "This event adds 4 new legendary weapons, a bunch of spooky cosmetics and a new gem that can add a new attribute to your gear! To acquire these items your best chances are to explore the Haunted Manor, but the new legendaries can also be found in the Interdimensional Rift. To guard these new treasures are three new enemies as well:": "这个活动增加了4个新的传奇武器，一堆令人毛骨悚然的化妆品和一个新的宝石，可以增加一个新的属性到你的装备！要获得这些物品，你最好的机会是探索闹鬼的庄园，但新的传说也可以在次元裂缝中找到。守卫这些新宝藏的还有三个新敌人：",
    "Tons of randomized loot - from legendaries that complete change your builds, gems to socket into items, craftable uniques by socketing gems into gear in the correct order, set items and plenty of fun cosmetics.": "大量的随机战利品——从完全改变你的建筑的传说，宝石镶嵌到物品中，通过将宝石以正确的顺序镶嵌到装备中来制作独特的物品，套装物品和大量有趣的化妆品。",
    "User Name": "用户名",
    "Welcome to the fall seasonal event for Idle Hack! For a limited time you can acquire exclusive legendaries and cosmetics to celebrate the season. I want to wish everyone a happy Halloween/Thanksgiving season.": "欢迎来到Idle Hack的秋季活动！在有限的时间内，你可以获得独家传说和化妆品来庆祝这个季节。祝大家万圣节/感恩节快乐。",
    "Welcome to the Long Awaited Release of Idle Hack 1.0": "欢迎来到期待已久的Idle Hack 1.0版本",
    "Welcome to the winter seasonal event for Idle Hack! For a limited time you can acquire exclusive legendaries and cosmetics to celebrate the season. I want to wish everyone a happy Christmas and Holiday season.": "欢迎来到Idle Hack的冬季活动！在有限的时间内，你可以获得独家传奇和化妆品来庆祝这个季节。祝大家圣诞快乐，节日快乐。",
    "Yuletide Accurate Elf - Santa's little helper who can create Presents. Prevent the enemies from getting to the present and opening it.": "圣诞精准精灵 - 圣诞老人的小助手，可以创造礼物。阻止敌人到达并打开礼物。",
    "HUNGRY YETI": "饥饿的雪人",
    "No e-mail Required for Registration!": "注册不需要电子邮件！",
    "About": "关于",
    "Book of Self Heal": "自愈之书",
    "Charm": "护身符",
    "Chest": "胸甲",
    "Idle Hack Game Guide": "黑客放置游戏指南",
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
    "After selecting an item the above options are shown on the right side of the storage. X cancels the selection, the trash deletes the item and the market cart option will allow you to sell the item on the": "选择一个项目后，上述选项显示在右侧的存储。X取消选择，垃圾删除项目和市场购物车选项将允许您出售项目上",
    "button shows all character info in full detail. Mouse over the different attribute name in the stats screen to see a more descriptive tooltip about what the attribute does. You can also allocate character attributes after a level up here.": "按钮显示所有字符信息的全部细节。将鼠标悬停在统计屏幕中的不同属性名称上，可以看到关于该属性功能的更具描述性的工具提示。你也可以在升级后分配角色属性。",
    "buttons allow you to switch to another full character build (different items and different character attributes). In order to unlock these extra loadouts you have to purchase them in the": "按钮允许你切换到另一个完整的角色创建（不同的物品和不同的角色属性）。为了解锁这些额外的装备，你必须在游戏中购买它们",
    "button switches the character panel to only show the cosmetic item slots.": "按钮切换角色面板，只显示化妆物品槽。",
    "Character Loadout": "角色预设",
    "Cosmetics": "化妆品",
    "for more details).": "更多详情).",
    "Guide": "指南",
    "Storage": "存储",
    "Idle Hack's inventory tab is broken up by the top half showing each of your character's item loadouts and the bottom half showing the items that are currently not being used in your Storaage. Items can be moved between characters and storage by either clicking or drag and dropping items around. Certain item types can only be equipped to specific character item slots (see": "Idle Hack的库存标签被上半部分显示每个角色的物品装载，下半部分显示当前未在您的存储中使用的物品。可以通过单击或拖放项目来在字符和存储之间移动项目。某些类型的物品只能装备到特定的角色物品槽(参见",
    "Itemization": "分项说明",
    "Loadout": "预设",
    "The storage holds all of your found items from the": "存储中保存了所有你找到的物品",
    "The character's loadout panel shows the character's portrait, name, level as well as all the items that you have equipped (see": "角色的加载面板显示了角色的肖像，名字，级别以及你所装备的所有物品(查看",
    "% Chance on Basic Attack to Cast": "%几率在基础攻击时施放",
    "% Chance on Hit to Cast": "%几率在命中时施放",
    "Adept Sword of Soul Steal": "娴熟的盗魂之剑",
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
    "Smart Bow": "智能弓",
    "Summon Eagle": "召唤鹰",
    "Taunting Gong": "嘲讽锣",
    "Shield Slam": "盾击",
    "Charge": "充能",
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
    "Gemmed": "宝石",
    "Discuss Idle Hack on our Discord:": "在我们的Discord上讨论Idle Hack：",
    "Check out our other games over on Itch:": "查看我们在Itch上的其他游戏：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Frozen Hatchet of Detriment": "冰封的伤害之斧",
    "Frozen Hatchet of Strength": "冰封的力量之斧",
    "Frozen Knife of Vampirism": "冰封的吸血鬼之刃",
    "Skillful Sword of Siphoning": "熟练的虹吸剑",
    "Skillful Hatchet of Detriment": "熟练的伤害之斧",
    "Skillful Sword of Recklessness": "熟练的鲁莽剑",
    "Tempered Bow of Earth": "大地淬炼弓",
    "Strong Sword of Strength": "强大的力量之剑",
    "Striking Hatchet of Vampirism": "惊人的吸血鬼之斧",
    "Strong Buckler of Vampirism": "强大的吸血鬼之盾",
    "Strong Buckler of Essence": "强大的精华之盾",
    "Strong Buckler of Haste": "强大的急速之盾",
    "Striking Buckler of Haste": "惊人的急速之盾",
    "Vital Hatchet of Wisdom": "至关重要的智慧之斧",
    "Genius Shield of Constitution": "天才的体质之盾",
    "Hardened Buckler of Recklessness": "坚硬的鲁莽之盾",
    "Hardened Hatchet of Earth": "坚硬的大地之斧",
    "Hardened Knife of Constitution": "坚硬的体质之刃",
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
    "": "",
    "": "",
    "": "",
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
    [/^([\d\.,]+) Mana$/, '$1 法力'],
    [/^([\d\.,]+) Socket\(s\)$/, '$1 镶嵌'],
    [/^Slot ([\d\.,]+)$/, '槽位 $1'],
    [/^Page: ([\d\.,]+)$/, '页码: $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Tier ([\d\.,]+)$/, '层级 $1'],
    [/^\-Tier ([\d\.,]+)$/, '-层级 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^Level : ([\d\.,]+)$/, '等级 : $1'],
    [/^Earth\/Laser Deck \- Level Sum: ([\d\.,]+)$/, '土/激光 卡组 - 等级总和： $1'],
    [/^Earth\/Physical Deck \- Level Sum: ([\d\.,]+)$/, '土/物理 卡组 - 等级总和： $1'],
    [/^Physical\/Water Deck \- Level Sum: ([\d\.,]+)$/, '物理/水 卡组 - 等级总和： $1'],
    [/^Fire\/Water Deck \- Level Sum: ([\d\.,]+)$/, '火/水 卡组 - 等级总和： $1'],
    [/^Fire\/Physical Deck \- Level Sum: ([\d\.,]+)$/, '火/物理 卡组 - 等级总和： $1'],
    [/^Water\/Earth Deck \- Level Sum: ([\d\.,]+)$/, '水/土 卡组 - 等级总和： $1'],
    [/^Fire\/Earth Deck \- Level Sum: ([\d\.,]+)$/, '火/土 卡组 - 等级总和： $1'],
    [/^Water\/Laser Deck \- Level Sum: ([\d\.,]+)$/, '物理/激光 卡组 - 等级总和： $1'],
    [/^Water\/Physical Deck \- Level Sum: ([\d\.,]+)$/, '物理/物理 卡组 - 等级总和： $1'],
    [/^Laser\/Physical Deck \- Level Sum: ([\d\.,]+)$/, '激光/物理 卡组 - 等级总和： $1'],
    [/^Physical\/Laser Deck \- Level Sum: ([\d\.,]+)$/, '物理/激光 卡组 - 等级总和： $1'],
    [/^Physical\/Fire Deck \- Level Sum: ([\d\.,]+)$/, '物理/火 卡组 - 等级总和： $1'],
    [/^Earth\/Fire Deck \- Level Sum: ([\d\.,]+)$/, '土/火 卡组 - 等级总和： $1'],
    [/^Laser\/Water Deck \- Level Sum: ([\d\.,]+)$/, '激光/水 卡组 - 等级总和： $1'],
    [/^Laser\/Fire Deck \- Level Sum: ([\d\.,]+)$/, '激光/火 卡组 - 等级总和： $1'],
    [/^Physical Deck \- Level Sum: ([\d\.,]+)$/, '物理 卡组 - 等级总和： $1'],
    [/^Earth Deck \- Level Sum: ([\d\.,]+)$/, '土 卡组 - 等级总和： $1'],
    [/^Water Deck \- Level Sum: ([\d\.,]+)$/, '水 卡组 - 等级总和： $1'],
    [/^Fire Deck \- Level Sum: ([\d\.,]+)$/, '火 卡组 - 等级总和： $1'],
    [/^Laser Deck \- Level Sum: ([\d\.,]+)$/, '激光 卡组 - 等级总和： $1'],
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