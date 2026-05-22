// ==UserScript==
// @name         Dwarf Mine Colony 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.5
// @description  网页游戏 Dwarf Mine Colony (https://dwarf-mine-colony.jnk.ovh/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Dwarf Mine Colony.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://dwarf-mine-colony.jnk.ovh/img/website/favicon.png
// @license      MIT
// @include      *https://dwarf-mine-colony.jnk.ovh/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/06/14 12:14
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
    "Stop": "停止",
    "Stonebeard Warden": "石胡子典狱长",
    "Stop mission for selected dwarf": "停止选定矮人的任务",
    "Stop missions for all dwarves": "停止所有矮人的任务",
    "Stop/Play music": "停止/播放 音乐",
    "Top Miners": "顶级矿工",
    "the Captain": "队长",
    "Tutorial": "教程",
    "Use c Key to change dwarf": "使用 C 键更改矮人",
    "Save Game": "保存游戏",
    "Save name:": "存档名称:",
    "Save Now -": "立即保存 -",
    "Show All Quests": "显示全部任务",
    "Show this shortcuts panel": "显示这个快捷面板",
    "Other useful shortcuts:": "其他有用的快捷方式：",
    "Quests": "任务",
    "Quest Completed!": "任务已完成！",
    "Press": "按",
    "Ready to begin your underground adventure? Here's what to do first:": "准备好开始你的地下冒险了吗？首先要做的是：",
    "Reward:": "奖励:",
    "Reset Game": "重置游戏",
    "More Games": "更多游戏",
    "Load Game": "加载游戏",
    "Loading saved games...": "正在加载保存的游戏...",
    "Logout": "登出",
    "Leaderboard": "排行榜",
    "Iron Quarry": "采铁场",
    "HP Regen:": "生命值回复:",
    "Home": "首页",
    "Explore particular areas": "探索特定领域",
    "Getting Started": "开始",
    "Coal Quarry": "采煤场",
    "Close": "关闭",
    "Close modal windows": "关闭弹窗",
    "All Ages": "所有年龄",
    "AutoMining": "自动采矿",
    "Auto-Mining": "自动采矿",
    "Auto-Mining System": "自动采矿系统",
    "Auto-save enabled": "自动保存已启用",
    "Barracks": "军营",
    "Change Dwarf": "更改矮人",
    "Cancel": "取消",
    "Buildings": "建筑",
    "- Pause/Resume the game": "- 暂停/返回 游戏",
    "- Show all keyboard shortcuts": "- 显示所有快捷键",
    "- Stop mission for selected dwarf": "- 停止选定矮人的任务",
    "- Stop missions for all dwarves": "- 停止所有矮人的任务",
    "Allows recruiting 1 additional dwarf per barracks": "允许每个兵营额外招募1个矮人",
    "Be careful !": "小心！",
    "Block the passage of creatures and prevent them from spawning": "阻断生物通道，阻止生物繁殖",
    "Click here to connect": "点击这里连接",
    "Click on adjacent tiles to start digging": "点击相邻的地块开始挖掘",
    "As your colony grows and you recruit more dwarves, these keyboard shortcuts will become invaluable:": "随着你的殖民地的发展，你招募了更多的矮人，这些键盘快捷键将变得非常宝贵：",
    "You are not connected. Your progress will not be saved.": "你没有连接。您的进度将无法保存。",
    "View Full Leaderboard": "查看完整排行榜",
    "Welcome to Dwarf Mine Colony!": "欢迎来到 矮人矿坑！",
    "Dwarf Mine Colony": "矮人矿坑",
    "Email": "邮箱",
    "GO": "出发",
    "Login": "登录",
    "Password": "密码",
    "Password (8 characters minimum)": "密码 (最少8个字符)",
    "Register": "注册",
    "Username": "用户名",
    "The password must contain at least 8 characters.": "密码长度至少为8个字符。",
    "Start Your Adventure!": "开始你的冒险！",
    "Shortcuts": "快捷键",
    "Cycle through dwarves": "在矮人间循环",
    "Colony Age:": "殖民地年龄:",
    "Colony Manager": "殖民地管理员",
    "Connected to server": "连接到服务器",
    "Construction cost:": "建造成本:",
    "Collect items from the ground": "从地上收集物品",
    "Build": "建造",
    "Build structures in specific locations": "在特定位置建造结构",
    "Filter by Colony Age:": "殖民地年龄筛选：",
    "Active Miner": "活跃矿工",
    "Dwarf Equipment": "矮人装备",
    "Focus": "跟踪",
    "Inventory": "库存",
    "Attack specific creatures": "攻击特定生物",
    "Auto Mining Toggled": "自动采矿切换",
    "Diamond": "钻石",
    "Coal": "煤",
    "Benefit:": "好处:",
    "feature:": "功能:",
    "Goldaxe Ironkeeper": "金斧铁人",
    "Iron": "铁",
    "Mining Priority Order": "采矿优先顺序",
    "Obsidian": "黑曜石",
    "Search radius:": "搜索半径:",
    "Start Auto-Mining": "开始自动采矿",
    "Stone": "石头",
    "Mining Range": "采矿范围",
    "Pause/Resume game": "暂停/返回 游戏",
    "Select a dwarf and click on adjacent tiles to dig.": "选择一个矮人并点击相邻的地块进行挖掘。",
    "Searching for the last save...": "寻找最后的保存...",
    "Drag to reorder minerals by priority (highest to lowest)": "拖动可按优先级（从高到低）重新排序矿物",
    "tiles": "地块",
    "to activate auto-mining for the selected dwarf": "为选定的矮人激活自动采矿",
    "to enable auto-mining when ready": "在准备好时启用自动采矿",
    "To help manage your growing colony efficiently, you can use the": "为了帮助你有效地管理不断增长的殖民地，你可以使用",
    "to quickly cycle through all your dwarves": "快速地循环你所有的矮人",
    "🌟 Remember: Your first priority is survival and gathering basic resources!": "🌟记住：你的首要任务是生存和收集基本资源！",
    "⛏️ Mission Control": "⛏️ 任务控制",
    "⌨️ Keyboard Shortcuts": "⌨️ 键盘快捷键",
    "⌨️ Press": "⌨️ 按",
    ", you must guide your brave dwarves to establish \n                        a thriving underground settlement.": "，你必须引导你勇敢的矮人建立一个繁荣的地下定居点。",
    "🎮 Game Controls": "🎮 游戏控制",
    "💡 Tip: Most actions can also be performed by clicking on interface elements": "💡 提示：大多数操作也可以通过单击界面元素来执行",
    "💡 Press": "💡 按",
    "Allows recruiting additional dwarves": "允许招募额外的矮人",
    "AP Regen:": "行动点数回复:",
    "Essential Controls": "基本控制",
    "Cobblestone": "鹅卵石",
    "Even with auto-mining enabled, you can still give": "即使启用了自动采矿，您仍然可以提供",
    "PA Reduction:": "PA降低:",
    "Tips: use E/D to scroll your mine ↓/↑, C to cycle through your dwarves, and R for auto-mining settings": "提示: 使用E/D来滚动你的矿坑↓/↑，C来循环浏览你的矮人，R是自动挖矿设置",
    "This gives you the perfect balance between automation and strategic control!": "这为您提供了自动化和战略控制之间的完美平衡！",
    "Select your dwarf by clicking on him": "通过点击选择你的矮人",
    "to see all recipes": "查看所有的配方",
    "Toggle auto-mining for selected dwarf": "为选定的矮人切换自动采矿",
    "Workshop Crafting": "车间制作",
    "You can visit": "你可以访问",
    "Your first dwarf,": "你的第一个矮人",
    "Your Mission": "你的任务",
    "Deep beneath the ancient mountains lies a forgotten mine filled with precious treasures and deadly creatures. \n                        As the": "在古老山脉的深处有一个被遗忘的矿井，里面充满了珍贵的宝藏和致命的生物。\ n                         随着",
    ", has just arrived at the entrance. \n                        Start by exploring the depths, mining valuable resources, and building the infrastructure needed \n                        to support a growing colony. But beware - the deeper you go, the more dangerous it becomes!": "，刚刚到达入口处。开始探索深处，开采有价值的资源，并建立所需的基础设施，以支持不断增长的殖民地。但是要小心——你走得越深，就越危险！",
    "Deepdelver Hammerguard": "深潜锤卫",
    "ℹ️ Help & Interface": "ℹ️ 帮助与界面",
    "Look for coal and iron to build your first structures": "寻找煤和铁来建造你的第一个建筑",
    "specific missions": "特定任务",
    "Tsamsi": "萨姆斯",
    "Wiki EN": "Wiki 英语",
    "Wiki FR": "Wiki 法语",
    "Gold": "黄金",
    "Join Discord": "加入 Discord",
    "Join the Mining Community": "加入采矿社区",
    "Hospital": "医院",
    "Upgrades": "升级",
    "Brewery": "啤酒厂",
    "Depth Levels": "深度等级",
    "Combat System": "战斗系统",
    "Active Players": "活跃玩家",
    "Advanced Crafting": "高级工艺",
    "Begin Your Journey": "开始你的旅程",
    "Boost your dwarves' morale and action point regeneration": "提高你的矮人的士气和行动点回复",
    "Build, explore, and manage your underground civilization": "建造、探索和管理你的地下文明",
    "Building Types": "建筑类型",
    "Colony Leadership": "殖民地领导",
    "Command your dwarf workforce with tactical precision. Balance exploration, construction, and survival in the hostile underground.": "用精确的战术指挥你的矮人劳动力。平衡探索，建设和生存在敌对的地下。",
    "Connect with fellow miners, share strategies, and stay updated with the latest underground discoveries.": "与其他矿工联系，分享策略，并随时了解最新的地下发现。",
    "Deep Exploration": "深入探索",
    "Design and optimize your underground kingdom. Every building placement matters in creating an efficient mining operation.": "设计和优化你的地下王国。每一栋建筑的安置都关系到采矿作业的效率。",
    "Dwarf Management": "矮人管理",
    "Equipment Crafting": "装备制作",
    "Equipment System": "装备系统",
    "Experience the Depths": "体验深处",
    "Fast Healing": "快速治疗",
    "Forge powerful equipment and tools from the resources you mine. Upgrade your dwarves' capabilities to tackle greater challenges.": "用你开采的资源锻造强大的装备和工具。升级你的矮人的能力，以应对更大的挑战。",
    "Foundry": "铸造厂",
    "Heal injured dwarves and keep your workforce healthy": "治疗受伤的矮人并保持你的员工健康",
    "Hidden Secrets": "隐藏的秘密",
    "Infinite Depth": "无限深度",
    "Master the Underground Economy": "精通地下经济",
    "Online Play": "在线游戏",
    "Precious Resources Await": "宝贵的资源等待我们",
    "Rare Discoveries": "稀有发现",
    "Ready to Build Your Underground Empire?": "准备好建立你的地下帝国了吗？",
    "Resource Optimization": "资源优化",
    "Resource Processing": "资源处理",
    "Smelt ores and craft powerful equipment for your miners": "为你的矿工冶炼矿石和制造强大的设备",
    "Start Mining": "开始采矿",
    "Strategic Building": "战略建筑",
    "Strategic Placement": "战略布局",
    "Venture into procedurally generated depths. Each level brings new challenges, rare materials, and mysterious creatures lurking in the darkness.": "探索程序生成的深度。每个关卡都会带来新的挑战、稀有材料和潜伏在黑暗中的神秘生物。",
    "Rewards:": "奖励:",
    "Ant Infestation": "蚁患",
    "Brewing Master": "酿造大师",
    "Build a Barracks": "建立一个军营",
    "Clear out 8 Creepy Ants from the deep tunnels": "从隧道深处清除8只令人毛骨悚然的蚂蚁",
    "Collect 25 diamonds and reach depth 150 to establish diamond mining operations": "收集25颗钻石，到达深度150建立钻石开采作业",
    "Collect 25 iron, 15 gold and 5 diamonds to learn brewing techniques": "收集25铁，15黄金和5钻石学习酿造技术",
    "Collect 30 coal and 20 iron to learn advanced crafting": "收集30个煤和20个铁来学习高级工艺",
    "Collect 50 gold and reach depth 75 to establish gold mining operations": "收集50个黄金，达到深度75建立黄金开采业务",
    "Collect your first Coal": "收集你的第一个煤",
    "Collect your first Iron ore": "收集你的第一个铁矿石",
    "Construction cancelled.": "已取消建造",
    "Craft a Potion": "制作药剂",
    "Craft your first potion": "制作你的第一个药剂",
    "Deep Miner": "深层矿工",
    "Deep Sea Terror": "深海恐怖",
    "Defeat at least one of each common creature type": "击败至少一种常见生物",
    "Defeat spider": "击败蜘蛛",
    "Defeat the mighty Stoneworm, ruler of the depths": "击败强大的石虫，深渊的统治者",
    "Destroy 2 mighty Golems and salvage their parts": "摧毁2个强大的魔像并回收他们的部分",
    "Diamond Hunter": "钻石猎人",
    "Eliminate 3 Green Monsters threatening the colony": "消灭3个威胁殖民地的绿色怪物",
    "Face the legendary Kraken Cavern boss": "面对传说中的海怪洞穴boss",
    "First Coal": "第一个煤",
    "First Iron": "第一个铁",
    "First Tools": "第一个工具",
    "Gold Rush": "淘金热",
    "Gold Seeker": "淘金者",
    "Golem Crusher": "魔像粉碎者",
    "Green Menace": "绿色威胁",
    "In Progress": "进行中",
    "Medic Training": "医生培训",
    "Monster Variety": "怪物种类",
    "Quests Opened": "任务开启",
    "Rockhelm Axebearer": "岩盔斧手",
    "Slime Hunter": "史莱姆猎手",
    "The Ultimate Challenge": "终极挑战",
    "🤖 Ashbrow Clansman started auto-mining with custom preferences!": "🤖 阿什布罗族人 开始使用自定义偏好自动采矿！",
    "Accessory": "配饰",
    "Armor": "护甲",
    "AP:": "行动点数:",
    "Defense:": "防御:",
    "Attack:": "攻击:",
    "Captain": "队长",
    "Empty": "空",
    "GAME OVER": "游戏结束",
    "HP:": "生命值:",
    "Equipment Opened": "装备已开放",
    "Spider": "蜘蛛",
    "Weapon": "武器",
    "Right panels hidden.": "右侧面板已隐藏。",
    "Right panels shown.": "右侧面板已显示。",
    "Panels Toggled": "面板已切换",
    "Progress saved": "进度已保存",
    "Rebirth ": "重生 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Ro": "Ro",
    "Rodow": "Rodow",
    "Common": "普通",
    "Uncommon": "罕见",
    "Legendary": "传说",
    "Rare": "稀有",
    "Action Points": "行动点数",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "Esc": "Esc",
    "wiki": "wiki",
    "🎓": "🎓",
    "🎯": "🎯",
    "🏠": "🏠",
    "🏰": "🏰",
    "📋": "📋",
    "📜": "📜",
    "🔨": "🔨",
    "🤖": "🤖",
    "🚪": "🚪",
    "🛠️": "🛠️",
    "!": "!",
    "?": "?",
    "❮": "❮",
    "×": "×",
    "≡": "≡",
    "⌨️": "⌨️",
    "⏳": "⏳",
    "▼": "▼",
    "⚔️": "⚔️",
    "⚙️": "⚙️",
    "⚠": "⚠",
    "⚡": "⚡",
    "s": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "⚒️": "⚒️",
    "⛏️": "⛏️",
    "🏆": "🏆",
    "🏗️": "🏗️",
    "👑": "👑",
    "👷": "👷",
    "📖": "📖",
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
    "Stone - ": "石头 - ",
    "Skeleton - ": "骷髅 - ",
    "Spider - ": "蜘蛛 - ",
    "Coal - ": "煤 - ",
    "Dirt - ": "泥土 - ",
    "Surface - ": "表面 - ",
    "Iron - ": "铁 - ",
    "Obsidian - ": "黑曜石 - ",
    "iron: ": "铁: ",
    "Iron: ": "铁: ",
    "Gold: ": "黄金: ",
    "Diamond: ": "钻石: ",
    "coal: ": "煤: ",
    "Coal: ": "煤: ",
    "XP: ": "经验值: ",
    "Game loaded successfully": "游戏加载成功",
    "Auto-Mining Settings for ": "自动采矿设置对于 ",
    "HP: ": "生命值: ",
    "Missions: ": "任务: ",
    "Priority: ": "优先级: ",
    "Stonebeard Warden": "巨石阵看守人",
    "Hello, ": "你好, ",
    "AP: ": "AP: ",
    "Emberforge Thane": "烬堡塞恩",
    "Ashbrow Clansman": "阿什布罗族人",
    "CRITICAL! ": "暴击! ",
    "Spider : ": "蜘蛛 : ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "We recommend playing on a larger screen for the best experience. You can still play on this screen, but make sure to open the right-side menu by clicking the arrow-shaped button": "为了获得最佳体验，我们建议使用更大的屏幕。你仍然可以在这个屏幕上玩，但要确保通过点击箭头形状的按钮打开右边的菜单",
    "to your dwarves at any time. For example, you can manually order them to:": "随时为你的矮人服务。例如，你可以手动将它们排序为：",
    "% AP Recovery": "% 行动点数恢复",
    "Wood Sword": "木剑",
    "Sword": "剑",
    "Wood Shield": "木盾",
    "Wild herb": "野生草药",
    "Small Health Potion": "小型生命药水",
    "Seed": "种子",
    "Big Bomb": "大炸弹",
    "Torn Cloth": "破布",
    "Vial": "小瓶",
    "Crystal Dust": "晶尘",
    "Metal Scrap": "金属废料",
    "Mushroom": "蘑菇",
    "Rusty Gear": "生锈的齿轮",
    "Barrel Zooka": "桶装佐卡",
    "Little Knife": "小刀",
    " defeated!": " 已经被击败!",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^🚶 \(([\d\.,]+),([\d\.,]+)\)$/,
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
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
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
    [/^Welcome back, (.+)!$/, '欢迎回来, $1!'],
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
    [/^ \(Level ([\d\.,]+)\)$/, ' (等级 $1)'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) gold$/, '$1 黄金'],
    [/^([\d\.,]+) diamond$/, '$1 钻石'],
    [/^([\d\.,]+) coal$/, '$1 煤'],
    [/^([\d\.,]+) iron$/, '$1 铁'],
    [/^([\d\.,]+) PA$/, '$1 PA'],
    [/^([\d\.,]+)\+ Buildings$/, '$1\+ 建筑'],
    [/^ will move to \(([\d\.,]+), ([\d\.,]+)\).$/, ' 将移动到 ($1, $2).'],
    [/^Collect ([\d\.,]+) Gold$/, '收集 $1 黄金'],
    [/^Defeat ([\d\.,]+) spiders$/, '击败 $1 蜘蛛'],
    [/^Defeat ([\d\.,]+) slimes to collect their precious goo$/, '击败 $1 史莱姆以收集它们珍贵的黏液'],
    [/^Defeat ([\d\.,]+) spiders, ([\d\.,]+) slimes and have ([\d\.,]+) dwarves to establish medical knowledge$/, '击败 $1 蜘蛛，$2 史莱姆 和 $3 矮人 建立医学知识'],
    [/^Age ([\d\.,]+)$/, '年龄 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Buy for ([\d\.,]+) gold$/, '购买花费 $1 黄金'],
    [/^HP: ([\d\.,]+)\/([\d\.,]+) \- DMG: ([\d\.,]+)$/, '生命值: $1/$2 - 伤害: $3'],
    [/^Reach depth ([\d\.,]+)$/, '达到深度 $1'],
    [/^Lvl. ([\d\.,]+)$/, '等级 $1'],
    [/^Produces ([\d\.,]+) iron every  minute$/, '每分钟生产 $1 铁'],
    [/^Produces ([\d\.,]+) coal every  minute$/, '每分钟生产 $1 煤'],
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