// ==UserScript==
// @name         Zelda Fishing Idle 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Zelda Fishing Idle (https://zeldafishing.wasmer.app/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Zelda Fishing Idle.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://zeldafishing.wasmer.app/favicon.ico
// @license      MIT
// @include      *https://zeldafishing.wasmer.app/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/zelda-fishing-idle-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/zelda-fishing-idle-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/05/11 13:52
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
    "Join the Discord!": "加入 Discord!",
    "Fix export button and save": "修复导出按钮和保存",
    "ENABLED": "启用",
    "Export to file": "导出为文件",
    "Import clipboard": "从剪贴板导入",
    "Import file": "从文件导入",
    "DISABLED": "禁用",
    "Experience": "经验值",
    "Cancel": "取消",
    "Achievement Gotten!": "成就达成!",
    "Inventory": "背包",
    "Locked": "未解锁",
    "Chests": "宝箱",
    "Potions": "药水",
    "Prestige": "声望",
    "permanent": "永久",
    "Index": "图鉴",
    "Search": "搜索",
    "Secret": "秘密",
    "Reset": "重置",
    "Quests": "任务",
    "Prestige Upgrades": "声望升级",
    "No items yet.": "暂无物品。",
    "SFX": "音效",
    "Shiny": "闪光",
    "Shop": "商店",
    "Zelda Fishing Idle": "塞尔达钓鱼放置",
    "Luck": "幸运",
    "Luck:": "幸运:",
    "Luck Potion": "幸运药水",
    "Music": "音乐",
    "Mythical": "神话",
    "Upgrades": "升级",
    "Unique": "独特",
    "tokens": "代币",
    "— they survive every prestige reset.": "- 每次转生重置均可保留（不受重置影响）",
    "[incrementaldb_verification: IdleHero503]": "[增量数据库校验：IdleHero503]",
    "[WARN] Inventory Full! Auto-Selling.": "[警告] 背包已满！自动出售中。",
    "+15% Luck for 30 minutes": "幸运值提升15%，持续30分钟",
    "+30% Reel Speed for 30 minutes": "收线速度提升30%，持续30分钟",
    "Catches": "垂钓捕获数",
    "Complete Reset": "完全重置",
    "Daily Quests": "每日任务",
    "Drew - Beta Tester": "Drew - 测试玩家",
    "Each spot has unique fish pools, slider speed, and rupee bonuses.": "每个垂钓点拥有专属鱼群、滑条速度和卢比加成。",
    "Earn Tokens by reaching Max Level and Casting Off.": "达到满级并放生可赚取代币。",
    "Fish caught:": "已捕获鱼类：",
    "Fish!": "钓鱼！",
    "Fishing": "钓鱼",
    "Fishing Spots": "钓点",
    "Lake Hylia": "海利亚湖",
    "MissZombae - Beta Tester": "MissZombae - 测试玩家",
    "New spots unlock as you level up — and beyond.": "升级后可解锁新垂钓点，满级后仍有后续解锁内容。",
    "Next: Coral Earring @ Lv5": "下一解锁：珊瑚耳环（5级解锁）",
    "Quick Sell All": "一键全部出售",
    "Quick Sell All (": "一键全部出售（",
    "Ready to fish!": "可以开始垂钓了！",
    "Reel Speed Potion": "收线速度药剂",
    "Reel:": "收线：",
    "These upgrades are": "这些升级",
    "Three quests reset every day at midnight. Complete them for Mon and Rupee bonuses.": "每日凌晨重置三个任务，完成可领取金币与卢比奖励。",
    "Triforce": "三神石",
    "Spots": "钓点",
    "it!": "它!",
    "5. SELL": "5. 出售",
    "[X] Missed the hook!": "[X] 错失咬钩时机！",
    "1. CAST": "1. 抛竿",
    "2. HOOK": "2. 提竿",
    "3. HOLD TO REEL": "3. 长按收线",
    "4. WATCH TENSION": "4. 留意张力值",
    "and wait.": "稍作等待。",
    "BITE! Hook it!": "鱼咬钩了！立刻提竿！",
    "Casting...": "抛竿...",
    "fish in your bag!": "鱼在你的背包里！",
    "HOOK!": "提竿！",
    "HOW TO FISH": "垂钓教程",
    "Let go": "松开手指",
    "Let's Fish!": "开始钓鱼！",
    "to drop.": "以。",
    "to progress.": "继续前进。",
    "Waiting for bite...": "等待鱼咬钩...",
    "[X] Fish got away!": "[X] 鱼儿逃脱了！",
    "Catch Progress": "捕获进度",
    "Caught": "已捕获",
    "Hearty Bass": "暖心鲈鱼",
    "HOLD TO REEL": "长按进行收线",
    "Keep Tension in the middle to reel!": "保持张力在中间区间即可收线！",
    "Line Tension": "鱼线张力",
    "Rainbow! Lucky skies | +8% shiny rate for 5 casts": "天降祥瑞彩虹 | 接下来5次垂钓，稀有鱼概率+8%",
    "REELING...": "收线中...",
    "Sanke Carp": "锦鲤",
    "Stored in Bag!": "已存入背包！",
    "TOO HIGH!": "张力过高！",
    "TOO LOW!": "张力过低！",
    "Lucky Rod": "幸运鱼竿",
    "Magic Rod": "魔法鱼竿",
    "Max all upgrades": "最大全部升级",
    "Max out Luck": "满级运气",
    "a shiny fish": "捕捉一条 闪光 鱼",
    "[Shiny]": "[闪光]",
    "[Triforce]": "[三神石]",
    "[Quantity]": "[数量]",
    "[Upgrade]": "[升级]",
    "[Skill]": "[技能]",
    "[Lure]": "[诱饵]",
    "[ Active ]": "[ 激活 ]",
    "[Catch]": "[捕捉]",
    "-75 pulls to guaranteed shiny per tier.": "每层级累计75抽必出闪光品质。",
    "\"When the Calamity shook the foundations of Hyrule, the Triforce - scattered into eight shards by the Goddess Hylia's own design - sank into the kingdom's sacred waters to await a worthy angler.\"": "“当灾厄撼动海利亚大地根基之时，三角神力遵从海利亚女神的旨意碎裂为八块碎片，沉入王国的圣湖深水之中，静待有缘钓者现身。”",
    "Beedle's Wares": "比德尔杂货铺",
    "Quests reset in": "任务重置倒计时",
    "Auto-Fish Owner": "自动垂钓特权",
    "Prestige 1 + Lv30": "声望 1 + 30级",
    "Rare Catch": "稀有渔获",
    "Reel Speed Demon": "极速收线",
    "Secret Catch": "隐秘稀有渔获",
    "Shiny Collector": "闪光收藏者",
    "Shiny Hunter": "闪光猎人",
    "Shiny Master": "闪光宗师",
    "Shopaholic": "购物达人",
    "Triforce of Courage": "勇气三角神力",
    "Unique Catch": "独特渔获",
    "+15% XP gained per tier.": "每层级经验获取提升15%。",
    "+4% Rupees per fish per tier. Permanent.": "每层级每条鱼额外增加4%卢比，永久生效。",
    "+8% Rupees! (+0%)": "卢比加成+8%（基础加成0%）",
    "+Rupee bonus (Scales with Level)": "卢比加成（随等级增幅）",
    "A hidden pond deep in enchanted forest.": "魔法森林深处的隐秘池塘。",
    "A vast sun-drenched lake.": "一片日光充裕的辽阔大湖。",
    "An ancient electric sea.": "古老的雷电海域。",
    "Ancient Wisdom": "古老智慧",
    "Angler's Mark": "垂钓印记",
    "Auto Fish": "自动垂钓",
    "Big Chest": "大宝箱",
    "Bigger Bag": "更大背包",
    "Boss Chest": "首领宝箱",
    "Buy Auto Fish": "购买自动垂钓",
    "Can't Afford": "金币不足",
    "Catch a Legendary fish": "捕获一条传说鱼类",
    "Catch a Mythical fish": "捕获一条神话鱼类",
    "Catch a Rare fish": "捕获一条稀有鱼类",
    "Catch a Unique fish": "<捕获一条独特鱼类",
    "Catch all fish": "钓获所有鱼类",
    "Catch an Epic fish": "捕获一条史诗鱼类",
    "Catch the Secret fish": "捕获隐秘鱼类",
    "Catch your first fish": "钓获第一条鱼",
    "Catch your first shiny": "钓到第一条闪光鱼",
    "Collect all shards": "集齐所有碎片",
    "Crystal-clear rapids. No Common fish.": "澄澈清澈激流，无普通鱼类。",
    "Earn tokens EXCLUSIVELY by Prestiging.": "仅可通过转生获取代币。",
    "Fishes for you!": "鱼儿已上钩！",
    "Gilded Scale": "鎏金鳞片",
    "Guild Pass": "公会通行证",
    "Hold more fish! (Max 150)": "背包容量提升！上限150",
    "Lanayru Sea": "拉奈鲁之海",
    "Lost Woods Pond": "迷失森林池塘",
    "Max out Reel Speed": "收线速度升至满级",
    "No fish collected yet!": "尚未收集任何鱼类！",
    "No fish to sell!": "暂无可出售鱼类！",
    "No fish yet!": "还没有钓到鱼！",
    "Pity Stone": "保底之石",
    "Rewards: 100-600 Rupees": "奖励：100-600卢比",
    "Rewards: 20% Triforce | 40% Speed | 40% Mon": "奖励：三角神力碎片20% | 收线速度40% | 金币40%",
    "Rewards: 30% Luck | 20% Mon | 50% Rupees": "奖励：幸运值30% | 金币20% | 卢比50%",
    "Rupee Crystal": "卢比水晶",
    "Shiny fish faster! (Pity 350)": "更容易钓到闪光鱼！保底值350",
    "Shiny Magnet": "闪光磁石",
    "Small Chest": "小宝箱",
    "Strong Reel": "强力收线",
    "Unlock Coral Earring": "解锁珊瑚耳环",
    "Unlock Frog Lure": "解锁青蛙鱼饵",
    "Unlock Sinking Lure": "解锁沉水鱼饵",
    "Zora's Domain": "佐拉领地",
    "Catch a shiny fish": "捕捉一条闪光鱼",
    "Ahh, a fine Rare catch! The waters of Lake Hylia hold many secrets...": "哇，钓到稀有品种啦！海利亚湖的湖水藏着诸多奥秘……",
    "Greengill": "绿鳍鱼",
    "Old Man Lure": "老旧鱼饵",
    "Buy": "购买",
    "Armored Porgy": "装甲鲷鱼",
    "PERFECT CATCH!": "完美捕获!",
    "[Mist] Mist! Calm waters | +20% rupees": "[迷雾] 迷雾降临！水面风平浪静 | 卢比收益+20%",
    "Armored Carp": "装甲鲤鱼",
    "Chillfin Trout": "寒鳍鳟鱼",
    "Complete! \"Catch 8 Rare+ fish\" -> +20 Mon!": "任务完成！「捕获8条稀有及以上鱼种」→ 货币+20",
    "Every Common fish... you've catalogued them all!": "所有普通鱼种……你已全部收录图鉴！",
    "Hearty Salmon": "健体鲑鱼",
    "Hyrule Bass": "海利亚鲈鱼",
    "Sizzlefin Trout": "灼鳍鳟鱼",
    "Speed Scroll": "速度卷轴",
    "+15% Reel Power temporarily": "+15% 暂时提升收线力量",
    "+15% Luck boost for 10 min": "10分钟内幸运值提升15%",
    "Fish Shop": "鱼店",
    "Lucky Bait": "幸运鱼饵",
    "[ MAX ]": "[ 满级 ]",
    "Auto-caught": "自动钓鱼",
    "Maxed": "最大",
    "Stop Auto": "停止自动",
    "Active": "已激活",
    "XP": "经验值",
    "Storm! Tension drains faster | Epic+ rate +50%": "暴风雨！张力流失更快 | 史诗+ 几率 +50%",
    "Shiny Chillfin Trout Auto-sold!": "闪光鳟鱼自动出售了！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "[incrementaldb_verification: IdleHero503]\n": "[incrementaldb_verification: IdleHero503]\n",
    "Shrine - Developer": "Shrine - 开发者",
    "Mythic": "神话",
    "Legendary": "传说",
    "Epic": "史诗",
    "Rare": "稀有",
    "Uncommon": "罕见",
    "Common": "普通",
    "SPD": "速度",
    "ATK": "攻击",
    "ARM": "护甲",
    "Lvl": "等级",
    "Unlock": "解锁",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "???": "???",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "[X]": "[X]",
    "\xa0|\xa0": " | ",
    "—": "—",
    "•": "•",
    "−": "−",
    "×": "×",
    "←": "←",
    "@": "@",
    "^": "^",
    "&": "&",
    "%": "%",
    "--": "--",
    "=": "=",
    "?": "?",
    "!": "!",
    "$": "$",
    "#": "#",
    "/": "/",
    "]": "]",
    "[": "[",
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
    "Cost: ": "成本: ",
    "Next at ": "下一个在 ",
    "Starter Lure ": "新手诱饵 ", 
    "[Combo] ": "[连击] ",
    "[Streak] ": "[连杆] ",
    "[Water] Settled in ": "[水面] 水位稳定于 ",
    "[Locked] ": "[未解锁] ",
    "[Quest] ": "[任务] ",
    "Wait less time! ": "等待时间减少! ",
    "[Daily] ": "[日常] ",
    "Prestige Tokens: ": "声望代币：",
    "Reel faster & more Rupees! ": "收线更快、卢比收益更高！",
    "Count: ": "数量: ",
    "Inventory: ": "库存: ",
    "[Mist] Mist x": "[迷雾] 迷雾倍率 x",
    "Common | Caught ": "普通 | 捕捉 ",
    "[Unlocked] ": "[已解锁] ",
    "Active: ": "已激活: ",
    "Auto-sold ": "自动出售 ",
    "[Done] ": "[完成] ",
    "[Storm] ": "[风暴] ",
    "[Auto] ": "[自动] ",
    "Fishing Frenzy": "钓鱼狂潮",
    "Shiny Hunter": "闪光猎人",
    "Busy Beaver": "忙碌的河狸",
    "Perfect Hook": "完美鱼钩",
    "First Catch": "初次捕获",
    "Rare Catch": "稀有捕获",
    "Angler Master": "垂钓大师",
    "Bait Beginner": "鱼饵新手",
    "Big Spender": "消费大亨",
    "Busy Beaver": "勤劳达人",
    "Collector": "收藏爱好者",
    "Epic Catch": "史诗渔获",
    "First Catch": "初次垂钓",
    "Fishing Frenzy": "垂钓狂潮",
    "Legendary Catch": "传说渔获",
    "Lifetime Angler": "资深钓客",
    "Lucky Angler": "幸运钓手",
    "Lure Master": "诱饵大师",
    "Lure Pro": "诱饵专家",
    "Mythical Catch": "神话渔获",
    "Perfect Hook": "完美提竿",
    "Complete! \"": "完成! \"",
    "Rare | Caught ": "稀有 | 捕捉 ",
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
    " for shiny": " 闪光",
    " activated!": " 已激活!",
    " (shiny)": " (闪光)",
    "\" -> +20 Mon!": "\" -> +20 金币!",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^\(([\d\.]+), ([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^\+([\d\.]+)\%$/,
    /^\-([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^\(([\d\.]+)s\)$/,
    /^\(\+([\d\.]+)\%, x([\d\.]+)\)$/,
    /^\(([\d\.]+),([\d\.]+)\)$/,
    /^\(\-([\d\.]+),([\d\.]+)\)$/,
    /^\(\-([\d\.]+),\-([\d\.]+)\)$/,
    /^\(([\d\.]+),\-([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^([\d\.]+) \/ ([\d\.]+)(.+)$/,
    /^([\d\.]+)(.+) \/ ([\d\.]+)(.+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)k$/,
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
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)\)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
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
    [/^Auto-Fish Owner! \+(.+) Mon$/, '自己自动钓鱼! +$1 金币'],
    [/^Quick Sold all for (.+) Rupees \((.+) Value\)!$/, '快速出售所有的鱼获得 $1 卢比 (以 $2 的价值)!'],
    [/^Jan ([\d\.,]+)$/, '1 月 $1'],
    [/^Feb ([\d\.,]+)$/, '2 月 $1'],
    [/^Mar ([\d\.,]+)$/, '3 月 $1'],
    [/^Apr ([\d\.,]+)$/, '4 月 $1'],
    [/^May ([\d\.,]+)$/, '5 月 $1'],
    [/^Jun ([\d\.,]+)$/, '6 月 $1'],
    [/^Jul ([\d\.,]+)$/, '7 月 $1'],
    [/^Aug ([\d\.,]+)$/, '8 月 $1'],
    [/^Sep ([\d\.,]+)$/, '9 月 $1'],
    [/^Oct ([\d\.,]+)$/, '10 月 $1'],
    [/^Nov ([\d\.,]+)$/, '11 月 $1'],
    [/^Dec ([\d\.,]+)$/, '12 月 $1'],
    [/^January, ([\d\.,]+)$/, '$1 年 1 月'],
    [/^February, ([\d\.,]+)$/, '$1 年 2 月'],
    [/^March, ([\d\.,]+)$/, '$1 年 3 月'],
    [/^April, ([\d\.,]+)$/, '$1 年 4 月'],
    [/^May, ([\d\.,]+)$/, '$1 年 5 月'],
    [/^June, ([\d\.,]+)$/, '$1 年 6 月'],
    [/^July, ([\d\.,]+)$/, '$1 年 7 月'],
    [/^August, ([\d\.,]+)$/, '$1 年 8 月'],
    [/^September, ([\d\.,]+)$/, '$1 年 9 月'],
    [/^October, ([\d\.,]+)$/, ' $1 年 10 月'],
    [/^November, ([\d\.,]+)$/, ' $1 年 11 月'],
    [/^December, ([\d\.,]+)$/, ' $1 年 12 月'],
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
	[/^Jan ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '1月 $1 上午 $2:$3:$4'],
	[/^Feb ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '2月 $1 上午 $2:$3:$4'],
	[/^Mar ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '3月 $1 上午 $2:$3:$4'],
	[/^Apr ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '4月 $1 上午 $2:$3:$4'],
	[/^May ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '5月 $1 上午 $2:$3:$4'],
	[/^Jun ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '6月 $1 上午 $2:$3:$4'],
	[/^Jul ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '7月 $1 上午 $2:$3:$4'],
	[/^Aug ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '8月 $1 上午 $2:$3:$4'],
	[/^Sep ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '9月 $1 上午 $2:$3:$4'],
	[/^Oct ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '10月 $1 上午 $2:$3:$4'],
	[/^Nov ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '11月 $1 上午 $2:$3:$4'],
	[/^Dec ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) AM$/, '12月 $1 上午 $2:$3:$4'],
	[/^Jan ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '1月 $1 下午 $2:$3:$4'],
	[/^Feb ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '2月 $1 下午 $2:$3:$4'],
	[/^Mar ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '3月 $1 下午 $2:$3:$4'],
	[/^Apr ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '4月 $1 下午 $2:$3:$4'],
	[/^May ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '5月 $1 下午 $2:$3:$4'],
	[/^Jun ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '6月 $1 下午 $2:$3:$4'],
	[/^Jul ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '7月 $1 下午 $2:$3:$4'],
	[/^Aug ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '8月 $1 下午 $2:$3:$4'],
	[/^Sep ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '9月 $1 下午 $2:$3:$4'],
	[/^Oct ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '10月 $1 下午 $2:$3:$4'],
	[/^Nov ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '11月 $1 下午 $2:$3:$4'],
	[/^Dec ([\d\.]+), ([\d\.]+):([\d\.]+):([\d\.]+) PM$/, '12月 $1 下午 $2:$3:$4'],
	[/^Jan ([\d\.]+), ([\d\.]+) AM$/, '1月 $1 上午 $2'],
	[/^Feb ([\d\.]+), ([\d\.]+) AM$/, '2月 $1 上午 $2'],
	[/^Mar ([\d\.]+), ([\d\.]+) AM$/, '3月 $1 上午 $2'],
	[/^Apr ([\d\.]+), ([\d\.]+) AM$/, '4月 $1 上午 $2'],
	[/^May ([\d\.]+), ([\d\.]+) AM$/, '5月 $1 上午 $2'],
	[/^Jun ([\d\.]+), ([\d\.]+) AM$/, '6月 $1 上午 $2'],
	[/^Jul ([\d\.]+), ([\d\.]+) AM$/, '7月 $1 上午 $2'],
	[/^Aug ([\d\.]+), ([\d\.]+) AM$/, '8月 $1 上午 $2'],
	[/^Sep ([\d\.]+), ([\d\.]+) AM$/, '9月 $1 上午 $2'],
	[/^Oct ([\d\.]+), ([\d\.]+) AM$/, '10月 $1 上午 $2'],
	[/^Nov ([\d\.]+), ([\d\.]+) AM$/, '11月 $1 上午 $2'],
	[/^Dec ([\d\.]+), ([\d\.]+) AM$/, '12月 $1 上午 $2'],
	[/^Jan ([\d\.]+), ([\d\.]+) PM$/, '1月 $1 下午 $2'],
	[/^Feb ([\d\.]+), ([\d\.]+) PM$/, '2月 $1 下午 $2'],
	[/^Mar ([\d\.]+), ([\d\.]+) PM$/, '3月 $1 下午 $2'],
	[/^Apr ([\d\.]+), ([\d\.]+) PM$/, '4月 $1 下午 $2'],
	[/^May ([\d\.]+), ([\d\.]+) PM$/, '5月 $1 下午 $2'],
	[/^Jun ([\d\.]+), ([\d\.]+) PM$/, '6月 $1 下午 $2'],
	[/^Jul ([\d\.]+), ([\d\.]+) PM$/, '7月 $1 下午 $2'],
	[/^Aug ([\d\.]+), ([\d\.]+) PM$/, '8月 $1 下午 $2'],
	[/^Sep ([\d\.]+), ([\d\.]+) PM$/, '9月 $1 下午 $2'],
	[/^Oct ([\d\.]+), ([\d\.]+) PM$/, '10月 $1 下午 $2'],
	[/^Nov ([\d\.]+), ([\d\.]+) PM$/, '11月 $1 下午 $2'],
	[/^Dec ([\d\.]+), ([\d\.]+) PM$/, '12月 $1 下午 $2'],
	[/^Jan (.+), ([\d\.]+)$/, '$2 年 1 月 $1'],
	[/^Feb (.+), ([\d\.]+)$/, '$2 年 2 月 $1'],
	[/^Mar (.+), ([\d\.]+)$/, '$2 年 3 月 $1'],
	[/^Apr (.+), ([\d\.]+)$/, '$2 年 4 月 $1'],
	[/^May (.+), ([\d\.]+)$/, '$2 年 5 月 $1'],
	[/^Jun (.+), ([\d\.]+)$/, '$2 年 6 月 $1'],
	[/^Jul (.+), ([\d\.]+)$/, '$2 年 7 月 $1'],
	[/^Aug (.+), ([\d\.]+)$/, '$2 年 8 月 $1'],
	[/^Sep (.+), ([\d\.]+)$/, '$2 年 9 月 $1'],
	[/^Oct (.+), ([\d\.]+)$/, '$2 年 10 月 $1'],
	[/^Nov (.+), ([\d\.]+)$/, '$2 年 11 月 $1'],
	[/^Dec (.+), ([\d\.]+)$/, '$2 年 12 月 $1'],
	[/^January ([\d\.]+) Theme$/, '$1 年 1 月 主题'],
	[/^February ([\d\.]+) Theme$/, '$1 年 2 月 主题'],
	[/^March ([\d\.]+) Theme$/, '$1 年 3 月 主题'],
	[/^April ([\d\.]+) Theme$/, '$1 年 4 月 主题'],
	[/^May ([\d\.]+) Theme$/, '$1 年 5 月 主题'],
	[/^June ([\d\.]+) Theme$/, '$1 年 6 月 主题'],
	[/^July ([\d\.]+) Theme$/, '$1 年 7 月 主题'],
	[/^August ([\d\.]+) Theme$/, '$1 年 8 月 主题'],
	[/^September ([\d\.]+) Theme$/, '$1 年 9 月 主题'],
	[/^October ([\d\.]+) Theme$/, '$1 年 10 月 主题'],
	[/^November ([\d\.]+) Theme$/, '$1 年 11 月 主题'],
	[/^December ([\d\.]+) Theme$/, '$1 年 12 月 主题'],
	[/^Jan ([\d\.]+) \- Jan ([\d\.]+)$/, '1 月 $1 \- 1 月 $2'],
	[/^Feb ([\d\.]+) \- Feb ([\d\.]+)$/, '2 月 $1 \- 2 月 $2'],
	[/^Mar ([\d\.]+) \- Mar ([\d\.]+)$/, '3 月 $1 \- 3 月 $2'],
	[/^Apr ([\d\.]+) \- Apr ([\d\.]+)$/, '4 月 $1 \- 4 月 $2'],
	[/^May ([\d\.]+) \- May ([\d\.]+)$/, '5 月 $1 \- 5 月 $2'],
	[/^Jun ([\d\.]+) \- Jun ([\d\.]+)$/, '6 月 $1 \- 6 月 $2'],
	[/^Jul ([\d\.]+) \- Jul ([\d\.]+)$/, '7 月 $1 \- 7 月 $2'],
	[/^Jun ([\d\.]+) \- Jul ([\d\.]+)$/, '6 月 $1 \- 7 月 $2'],
	[/^Aug ([\d\.]+) \- Aug ([\d\.]+)$/, '8 月 $1 \- 8 月 $2'],
	[/^Sep ([\d\.]+) \- Sep ([\d\.]+)$/, '9 月 $1 \- 9 月 $2'],
	[/^Oct ([\d\.]+) \- Oct ([\d\.]+)$/, '10 月 $1 \- 10 $2'],
	[/^Nov ([\d\.]+) \- Nov ([\d\.]+)$/, '11 月 $1 \- 11 $2'],
	[/^Dec ([\d\.]+) \- Dec ([\d\.]+)$/, '12 月 $1 \- 12 $2'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^Rupees x([\d\.]+)$/, '卢比 x$1'],
    [/^Speed x([\d\.]+) \|$/, '速度 x$1 |'],
    [/^\+([\d\.]+) elves$/, '+$1 精灵'],
    [/^\+([\d\.]+)\% elves$/, '+$1% 精灵'],
    [/^\+([\d\.]+)\% Reel$/, '+$1% 收线'],
    [/^\+([\d\.]+)\% Luck$/, '+$1% 幸运'],
    [/^\+([\d\.]+)\% Luck per tier.$/, '+$1% 幸运每级。'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)h ([\d\.]+)m$/, '$1小时 $2分'],
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分钟 $2秒'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^\+([\d\.,]+) XP$/, '+$1 经验值'],
    [/^\+([\d\.,]+) elves$/, '+$1 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) tokens$/, '$1 代币'],
    [/^([\d\.,]+) Mon$/, '$1 金币'],
    [/^! \+([\d\.,]+) Mon$/, '! +$1 金币'],
    [/^Spend ([\d\.,]+) Mon$/, '花费 $1 金币'],
    [/^Spend ([\d\.,]+) rupees$/, '花费 $1 卢比'],
    [/^([\d\.,]+)x offline earnings rate.$/, '$1x 离线收益率。'],
    [/^Triforce Shard ([\d\.,]+)$/, '三神石碎片 $1'],
    [/^Catch ([\d\.,]+) Rare\+ fish$/, '捕捉 $1 稀有+ 鱼'],
    [/^Catch ([\d\.,]+) Epic\+ fish$/, '捕捉 $1 史诗+ 鱼'],
    [/^Catch ([\d\.,]+) Legendary fish$/, '捕捉 $1 传说 鱼'],
    [/^Catch ([\d\.,]+) shinies$/, '捕捉 $1 闪光鱼'],
    [/^Catch ([\d\.,]+) different species$/, '捕捉 $1 不同的物种'],
    [/^Catch ([\d\.,]+) fish total$/, '总计捕捉 $1 鱼'],
    [/^Unlocks at Level ([\d\.,]+)$/, '解锁于 $1 级'],
    [/^Catch rare fish! \(([\d\.]+)\%\)$/, '捕捉稀有鱼! ($1%)'],
    [/^Sell All \(([\d\.,]+)\)$/, '出售全部 ($1)'],
    [/^\[Index\] ([\d\.,]+) \/ ([\d\.,]+) species$/, '[图鉴] $1 / $2 物种'],
    [/^Level Up! Now level ([\d\.,]+)!$/, '升级了! 现在等级是 $1!'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^Lvl ([\d\.,]+)$/, '等级 $1'],
    [/^Hook ([\d\.,]+) fish perfectly$/, '成功钓到 $1 条鱼'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级: $1 \/ $2'],
    [/^Next: \+([\d\.]+)\% rupeeBonus$/, '下一级: +$1% 卢比加成'],
    [/^Next: \+([\d\.]+)\% xpBonus$/, '下一级: +$1% 经验加成'],
    [/^Next: \+([\d\.]+)\% luck$/, '下一级: +$1% 幸运'],
    [/^Next: \+([\d\.]+)\% shinyReduction$/, '下一级: +$1% 闪光削减'],
    [/^Next: \+([\d\.]+)\% offlineMult$/, '下一级: +$1% 离线乘数'],
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