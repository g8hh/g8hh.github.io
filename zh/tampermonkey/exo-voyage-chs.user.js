// ==UserScript==
// @name         Exo Voyage 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.3
// @description  网页游戏 Exo Voyage (https://www.xxxxx.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Exo Voyage.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @license      MIT
// @include      *https://exovoyage.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/exo-voyage-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/exo-voyage-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/02/05 22:05
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
    "Zoom Out": "缩小",
    "Zoom In": "放大",
    "Username": "用户名",
    "Tutorial": "教程",
    "Tools": "工具",
    "Titanium": "钛",
    "Skip": "跳过",
    "Speed": "速度",
    "Sign Out": "登出",
    "Shards": "碎片",
    "Ruby": "红宝石",
    "Reset Progress": "重置进度",
    "Reset": "重置",
    "Reset All Progress?": "重置全部进度?",
    "Rate:": "速率:",
    "Price:": "价格:",
    "per": "每",
    "OK": "确定",
    "none": "无",
    "Next": "下一个",
    "Missions": "任务",
    "Mining on": "采矿在",
    "Mining Zone": "采矿区",
    "Mining Rate:": "采矿速率:",
    "Mining Speed:": "采矿速度:",
    "Mining": "采矿",
    "Mars": "火星",
    "Map": "地图",
    "Market": "市场",
    "Market bonus:": "市场加成:",
    "Max Distance:": "最大距离:",
    "Max Energy": "最大能源",
    "Locked Planet": "未解锁星球",
    "Home": "首页",
    "Guest": "游客",
    "Gold": "黄金",
    "Fuel:": "燃料:",
    "Fuel spent": "燃料花费",
    "Fuel Amount": "燃料数量",
    "Fragment Drop:": "片段掉落:",
    "Food": "食物",
    "Fuel Owned:": "拥有燃料:",
    "ETA": "预计到达时间",
    "Distance": "距离",
    "Earth": "地球",
    "each ": "每个",
    "Continue": "继续",
    "Copper": "铜",
    "Confirm Travel": "确认旅行",
    "Craft (Need more)": "制作 (需要更多)",
    "Current Tool:": "当前工具:",
    "Buy": "购买",
    "📅 Missions": "📅 任务",
    "⚡ Speed": "⚡ 速度",
    "🍔 Food Used:": "🍔 使用的食物:",
    "⛽ Fuel Used:": "⛽ 使用的燃料:",
    "⛏️ Loops Completed:": "⛏️ 完成的循环:",
    "(Earth)": "(地球)",
    "(+1 every 30s)": "(+1 每 30秒)",
    "⏳ Cooldown": "⏳ 冷却",
    "🏆 In Progress": "🏆 进行中",
    "🏆 Trophy Shards:": "🏆 奖杯碎片:",
    "💎 Shards Mined:": "💎 开采的碎片:",
    "💰 Money Earned:": "💰 赚取的钱:",
    "📬 Get Update Pings": "📬 获取更新提示",
    "Artifacts": "神器",
    "None": "无",
    "Back": "返回",
    "🚀 Traveling to": "🚀 旅行到",
    "Buy Tool": "购买工具",
    "🎒 Backpack": "🎒 背包",
    "Cargo Capacity": "载货容量",
    "Cargo Preview": "载货预览",
    "Cargo Transfer": "载货转移",
    "Breakdown": "细分",
    "Empty": "空",
    "Energy": "能源",
    "Energy:": "能源:",
    "energy.\n          Owned:": "能源.\n          拥有:",
    "Equipped Artifacts": "装备的神器",
    "Ferrite Core": "铁氧体磁芯",
    "Hands 🧤": "手 🧤",
    "hands": "手",
    "Inventory": "库存",
    "Inventory:": "库存:",
    "Join Email List": "加入邮箱列表",
    "Leaderboard": "排行榜",
    "Leaderboards": "排行榜",
    "Leaderboard is live!": "排行榜是实时的！",
    "Quartz": "石英",
    "⚠️ Fuel Debt": "⚠️ 燃料债务",
    "(A Rare shard hits at purity ≥ 99.00.)": "（一个稀有碎片命中纯度≥99.00。）",
    "⚠️ Market purchases are only available on Earth.": "⚠️ 市场购买只能在地球上进行。",
    "⚠️ Vessel & fuel purchases are only available on Earth.": "⚠️ 船只和燃料只能在地球上购买。",
    "🕳️ Boost": "🕳️ 提升",
    "🔥 Firebase Project": "🔥 Firebase项目",
    "Balance:": "余额:",
    "Black Holes now give rare shard buffs for 2 hours (now only 3h cooldown)": "黑洞现在会提供罕见的增益效果，持续 2 小时（现在冷却时间缩短至 3 小时）",
    "Cancel Travel (Lose 50% of fuel spent)": "取消旅行（损失50%的燃料消耗）",
    "Fuel Purchasing Dock": "燃料采购码头",
    "Global Chat": "全球聊天",
    "Give Trophy Copper Shard": "给予奖杯铜碎片",
    "Leaving orbit… thrusters nominal.": "脱离轨道...推进器正常工作。",
    "Legacy": "遗产",
    "Operations": "操作",
    "Pay Debt": "偿还债务",
    "Planet Drops": "星球掉落",
    "Profile Settings": "个人资料设置",
    "please email our support at": "请通过电子邮件与我们的客服部门联系。",
    "Restores": "恢复",
    "Top Voyagers": "顶级远航者",
    "Yes, Travel": "是的, 旅行",
    "Would you like to travel?": "你想要去旅行吗？",
    "Vessels": "船只",
    "Vault": "金库",
    "Upgrade Max Energy": "升级最大能源",
    "Artifact Crafting": "神器制作",
    "Arrives": "到达",
    "Dagon": "达贡",
    "Developer": "开发者工具",
    "Exovoyage.com is realising next week!": "Exovoyage.com 将于下周正式上线！",
    "Google Sign in and Cloud Saves": "谷歌登录与云端保存",
    "Global Chat coming to exovoyage.com": "全球聊天功能将登陆 exovoyage.com 网站。",
    "Make a round trip to Mars and back": "进行一次往返火星的旅行",
    "Proxima Centauri b": "比邻星b",
    "Operations Tab introduces offline earnings and keeps your vessels running automatically": "“操作”菜单可显示离线收益，并使您的船只能够自动运行。",
    "Change Planet ›": "更改星球 ›",
    "Change Vessel ›": "更改船只 ›",
    "Running": "运行中",
    "Select Planet": "选择星球",
    "Select Vessel": "选择船只",
    "Unlock Progress": "解锁进度",
    "Updates": "更新",
    "What’s next for Exo Voyage": "“Exo Voyage”的下一步计划是什么？",
    "Shard Breakdown:": "碎片细分:",
    "Shards per mining action:": "每次挖矿操作产生的碎片：",
    "This action cannot be undone.": "此操作不能撤消。",
    "Start Operation": "开始操作",
    "No fuel needed • Runtime:": "无需燃料 • 运行时间：",
    "Off": "关闭",
    "No Rare shards found on this planet yet.": "当前在这个星球上尚未发现稀有碎片。",
    "No owned vessels yet.": "暂未拥有船只。",
    "Need Vessel": "需要船只",
    "Hands 🧤": "空手 🧤",
    "Random Trophy Shard": "随机奖杯碎片",
    "Random Double Mine Artifact": "随机双倍采矿神器",
    "⚡ Offline Rewards Earned!": "⚡ 获得离线奖励！",
    "🧳 Cargo": "🧳 货物",
    "🚀 OUT NOW": "🚀 现已上市",
    "Echoed Yield": "回响产出",
    "Gilded Tongue": "镀金舌头",
    "Gilded Tongue Fragments": "镀金舌头片段",
    "Increases stealth": "增加隐形",
    "less": "更少",
    "Purchase": "购买",
    "Reduces travel time": "减少旅行时间",
    "Speed:": "速度:",
    "Stealth Module": "隐形模块",
    "Stealth Module Fragments": "隐形模块片段",
    "Travel speed bonus": "旅行速度加成",
    "Velocity Warp": "速度扭曲",
    "Food:": "食物:",
    "items • Energy budget:": "物品 • 能源预算:",
    "mines\n                ": "矿山\n                ",
    "Choose a Vessel": "选择一艘船只",
    "You don’t own any vessels yet. Buy one in the Vessels tab.": "您目前还没有任何船只。请在“船只”选项卡中购买一艘。",
    "Pro lifetime offer - claim below": "终身优惠 - 请在下方申请",
    "Profile image URL (imgur)": "个人资料图片的 URL（来自 Imgur）",
    "Recent Rare Shards": "最近的稀有碎片",
    "For questions, comments or bug reports": "如有疑问、建议或错误报告",
    "Choose a Planet": "选择一颗星球",
    "Deep Space Efficiency:": "深空效率：",
    "Example (Earth → Proxima Centauri b)": "示例（地球→比邻星b）",
    "First 500 sign-ups will recieve FREE Pro Lifetime Membership with Exovoyage.com release!": "前500名注册用户将获得Exovoyage.com发布时的免费终身专业会员资格！",
    "Higher efficiency = cheaper fuel per trip.": "更高的效率 = 每次出行更便宜的燃料。",
    "vs Vessel #1 (Starter Cargo):": "vs 船只 #1 (新手货船):",
    "Mining...": "采矿中...",
    "same": "一样",
    "Sell All Shards": "出售所有碎片",
    "Talos": "塔洛斯",
    "Radiant Shard": "辐射碎片",
    "Prismatic Crystal": "棱状水晶",
    "Oxide Shard": "氧化物碎片",
    "Obsidian Prism": "黑曜石棱镜",
    "None yet. (Autolock at 99+)": "目前还没有。（自动锁定在99+）",
    "Move everything from your cargo hold into your inventory.\n      ": "将货舱里的所有物品都移至你的物品栏中。",
    "Magnetite Cluster": "磁铁矿簇",
    "Echo Stone": "回音石",
    "Earth trading enabled": "启用地球贸易",
    "Codex": "图鉴",
    "Cinderheart": "烬心",
    "Balance": "余额",
    "Autolock 99+": "自动锁定 99+",
    "🧩 Fragments in cargo:": "🧩 货物中的片段：",
    "⬡ Shards in cargo:": "⬡ 货物中的碎片：",
    "Boosts shard sell value": "提升碎片出售价值",
    "Chance to mine double shards": "有概率开采双倍碎片",
    "Chance to mine two shards at once.": "有机会一次性开采两块矿石碎片。",
    "Echoed Yield Fragments": "回响产生的片段",
    "Increases shard sell value": "提高碎片出售价值",
    "No artifacts crafted yet.": "暂无制作的神器。",
    "Velocity Warp Fragments": "速度扭曲片段",
    "Reduce anomaly detection": "减少异常检测",
    "Jan 31 - Exovoyage.com coming next week!": "1月31日 - Exovoyage.com 将于下周上线！",
    "Cloud saves work across devices": "云存档可在不同设备间同步",
    "Let’s do a quick tour": "我们来快速浏览一下",
    "Sign in with Google": "使用 Google 快速登录",
    "Welcome to Exo Voyage!": "欢迎来到 Exo Voyage!",
    "Go to Earth.": "前往地球",
    "each  • Total": "每个  • 总计",
    "Home Base": "大本营",
    "Unload Cargo → Inventory": "卸货 → 库存",
    "Void Crystal": "虚空水晶",
    "✅ Active": "✅ 激活",
    "✅ Owned": "✅ 已拥有",
    "Active": "激活",
    "Claim reward": "领取奖励",
    "Bio-Lattice Fragment": "生物晶格片段",
    "Fuel per loop (round-trip):": "每循环的燃料消耗（往返一次）：",
    "mines\n                 • (~": "采矿\n                 • (~",
    "No fuel needed on Earth": "在地球上无需燃料",
    "🧳 Cargo Hold": "🧳 货舱",
    "Need Energy": "需要能源",
    "Purchase fuel and food to determine how long you can run an operation. The limiting resource between food and fuel will determine the full operation time. Earth costs no fuel but operation time is still determined by how long food supplies last. Budget wisely and select a destination and vessel based on your goals.": "购买燃料和食物，以确定你的行动能持续多久。食物和燃料这两种资源之间的关系将决定整个行动的总时长。地球本身不需要燃料，但行动的持续时间仍取决于食物供应能维持多久。要合理规划预算，并根据你的目标选择目的地和船只。",
    "Shovel 🥄": "铲子 🥄",
    "Pickaxe ⛏️": "镐子 ⛏️",
    "Your vault is empty": "你的金库是空的",
    "Preserve rare shards from your Codex to display them here": "请将您手稿中的珍贵碎片保存下来，以便在此处展示它们。",
    "Loading leaderboard...": "正在加载排行榜...",
    "Loading legacy leaderboard...": "正在加载遗产排行榜...",
    "Loading voyagers leaderboard...": "正在加载远航者排行榜...",
    "Top 500 shards by purity": "按纯度排序的前500个碎片",
    "Start an operation on Earth with Vessel #1": "在地球上开始一次操作使用 飞船 #1",
    "🔓 Mars unlocked": "🔓 火星已解锁",
    "Out of Reach": "遥不可及",
    "Rusty Drill 🛠️": "生锈的钻头 🛠️",
    "Powered Drill ⚙️": "电动钻 ⚙️",
    "Impact Drill 🔩": "冲击钻 🔩",
    "trips (": "旅行 (",
    "Fuel supports ~": "燃料支持 ~",
    "🔓 Proxima Centauri b unlocked": "🔓 比邻星b已解锁",
    "🚀 OPS started → Earth": "🚀 操作已开始 → 地球",
    "Mining on Earth": "在地球上采矿",
    "Pause": "暂停",
    "Traveling to Earth": "旅行前往地球",
    "• Earth": "• 地球",
    "Inventory Full": "库存已满",
    "Preserve in Vault": "存入金库",
    "Returning to Earth": "返回到地球",
    "Unloading cargo": "卸货",
    "Find your first rare shard": "找到你的第一块稀有碎片",
    "Place a rare shard in the vault": "将一块稀有的碎片放入金库中",
    "Nice Find!": "不错的发现!",
    "Remove": "移除",
    "Shards preserved in your vault are submitted to leaderboard": "保存在金库中的碎片会被提交到排行榜",
    "You mined a shard with a nice purity!": "你成功开采出了一块纯度极高的矿石！",
    "Plasma Cutter 🔥": "等离子切割机 🔥",
    "Unable to Travel": "无法旅行",
    "Not enough fuel to reach": "燃料不足，无法抵达",
    "Owned": "拥有",
    "Resume": "返回",
    "Set Active": "设为激活",
    "Stop": "停止",
    "Your Codex": "你的图鉴",
    "Void Extractor 🕳️": "虚空提取器 🕳️",
    "Ion Bore ⚡": "离子钻 ⚡",
    "Singularity Rig 🧿": "奇点钻机 🧿",
    "Exo-Matter Synth 🧠": "外星物质合成器 🧠",
    "Graviton Harvester 🌌": "引力采集器 🌌",
    "Laser Extractor 🔴": "激光提取器 🔴",
    "Omega Fabricator 👁️": "欧米伽制造者 👁️",
    "Quantum Drill 🧬": "量子钻 🧬",
    "Energy Fully Upgraded ✅": "能源升级已满级 ✅",
    "Max Tool Owned ✅": "已拥有最高级工具 ✅",
    "Operation Paused": "操作已暂停",
    "Preserve Your Shard": "保存你的碎片",
    "▶️ Operations resumed": "▶️ 操作已恢复",
    "⏸️ Operations paused": "⏸️ 操作已暂停",
    "Check Your Codex": "检查你的图鉴",
    "Click Inventory to see your rare shard.": "点击“库存”即可查看您的稀有碎片。",
    "Rare shards appear here in your Codex.": "稀有碎片会出现在您的图鉴中。",
    "Shards in your codex will decay over time. Place this shard in your vault to preserve it forever.": "图鉴中的碎片会随着时间逐渐消失。将此碎片放入您的金库中，以使其永远保存完好。",
    "🔓 Kepler-186f unlocked": "🔓 开普勒-186f已解锁",
    "Duration": "持续时长",
    "Food Used": "使用的食物",
    "Fuel Used": "使用的燃料",
    "Operations Report": "操作报告",
    "Rare Shards Found": "稀有碎片发现",
    "Shard Breakdown": "碎片细分",
    "Shards Mined": "开采的碎片",
    "Total Income": "总收入",
    "Trips": "旅行",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "ly": "ly",
    "s:": "s:",
    "PRO": "PRO",
    "Exo Voyage": "Exo Voyage",
    "AU": "AU",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "???": "???",
    "ⓘ": "ⓘ",
    "": "",
    "📍": "📍",
    "—": "—",
    "•": "•",
    "◀": "◀",
    "☐": "☐",
    "⛽": "⛽",
    "⬡": "⬡",
    "⚫": "⚫",
    "💰": "💰",
    "🔒": "🔒",
    "🚀": "🚀",
    "Exovoyage.game@gmail.com": "Exovoyage.game@gmail.com",
    "⛏️": "⛏️",
    "🥫": "🥫",
    "--": "--",
    "☑": "☑",
    "gityx.com": "gityx.com",
    "✕": "✕",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "Price: $": "价格: $",
    "Loading assets...": "正在加载资源...",
    "Current Max: ": "当前最大: ",
    "Artifacts: ": "神器: ",
    "Buy Shovel 🥄 ": "购买铲子 🥄 ",
    "Buy Ziggie Bar ": "购买兹吉锭 ",
    "Buy Ziggie Crate ": "购买兹吉箱 ",
    "Buy Ziggie Meal ": "购买兹吉餐 ",
    "Auto-pay: ": "自动支付: ",
    "Purchase Vessel #": "购买船只 #",
    "Estimated Shards Mined: ": "估计开采的碎片：",
    "Hazard: ×": "危险：×",
    "Estimated Run Time: ": "预计运行时间：",
    "Ziggie Bar": "兹吉锭",
    "Ziggie Crate": "兹吉箱",
    "Ziggie Meal": "兹吉餐",
    "Use Ziggie Bar ": "使用 兹吉锭 ",
    "Use Ziggie Crate ": "使用 兹吉箱 ",
    "Use Ziggie Meal ": "使用 兹吉餐 ",
    "• Tier Weights ": "• 层级权重 ",
    "TRAPPIST-": "特拉普斯-",
    "Kepler-": "开普勒-",
    "Asteria-": "阿斯特利亚-",
    "Buy Pickaxe ⛏️": "购买镐子 ⛏️",
    "Buy Rusty Drill 🛠️": "购买生锈的钻头 🛠️",
    "Upgrade Max Energy → ": "升级最大能源 → ",
    "Mine with ": "采矿使用",
    "Float: ": "浮点数: ",
    "Rarest: ": "最稀有: ",
    "🎁 Mission Reward: +": "🎁 任务奖励: +",
    "Buy Powered Drill ⚙️": "购买电动钻 ⚙️",
    "Buy Impact Drill 🔩": "购买冲击钻 🔩",
    "🏆 TROPHY! Quartz • ": "🏆 奖杯! 石英 • ",
    "🏆 TROPHY! Gold • ": "🏆 奖杯! 黄金 • ",
    "🏆 TROPHY! Copper • ": "🏆 奖杯! 铜 • ",
    "Buy Plasma Cutter 🔥": "购买等离子切割机 🔥",
    "🏆 DEV TROPHY • Copper ": "🏆 开发奖杯 • 铜 ",
    "🏆 TROPHY • Titanium ": "🏆 奖杯 • 钛 ",
    "🏆 TROPHY • Cinderheart ": "🏆 奖杯 • 烬心 ",
    "🏆 TROPHY • Ruby ": "🏆 奖杯 • 红宝石 ",
    "🏆 TROPHY • Gold ": "🏆 奖杯 • 黄金 ",
    "🏆 TROPHY • Bio-Lattice Fragment ": "🏆 奖杯 • 生物晶格片段 ",
    "🏆 TROPHY • Ferrite Core ": "🏆 奖杯 • 铁氧体磁芯 ",
    "Buy Exo-Matter Synth 🧠": "购买外星物质合成器 🧠",
    "Buy Graviton Harvester 🌌": "购买引力采集器 🌌",
    "Buy Laser Extractor 🔴": "购买激光提取器 🔴",
    "Buy Ion Bore ⚡": "购买离子钻 ⚡",
    "Buy Omega Fabricator 👁️": "购买欧米伽制造者 👁️",
    "Buy Quantum Drill 🧬": "购买量子钻 🧬",
    "Buy Singularity Rig 🧿": "购买奇点钻机 🧿",
    "Buy Void Extractor 🕳️": "购买虚空提取器 🕳️",
    "Max Energy: ": "最大能源: ",
    "": "",
    "": "",
    "": "",
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
    " (Earth)": " (地球)",
    " (Owned)": " (拥有)",
    " (Deep Space)": " (深空)",
    " (Galaxy)": " (星系)",
    " (Local)": " (本地)",
    " (Pathfinder)": " (探路者)",
    " (Runner)": " (奔跑者)",
    " of Each Artifact": " 每个神器",
    " (Solar Turbulence)": " (太阳活动扰动)",
    " (Gravitational Shear)": " (重力切变)",
    " (Radiation Storms)": " (辐射风暴)",
    " (Dark Matter Wake)": " (暗物质涟漪)",
    " (Void Pressure)": " (真空压力)",
    " (Starter Cargo)": " (入门货船)",
    " (Miner Cargo)": " (矿工货船)",
    " (Industrial Cargo)": " (工业货船)",
    " (Deep Range Cargo)": " (深远货船)",
    " Dagon Planets": " 达贡行星",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^ \(\+([\d\.,]+)\) \(([\d\.,]+)\)$/,
    /^\$([\d\.,]+)$/,
    /^\+\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\/ ([\d\.,]+)$/,
    /^ ([\d\.,]+)\/([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^\~([\d\.,]+)$/,
    /^\#([\d\.,]+)$/,
    /^ \(([\d\.,]+)\)$/,
    /^\(\$([\d\.,]+)\)$/,
    /^\(\+([\d\.,]+)\)$/,
    /^ \(\$([\d\.,]+)\)$/,
    /^([\d\.,]+) \(\$([\d\.,]+)\)$/,
    /^x([\d\.,]+) \(\$([\d\.,]+)\)$/,
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
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^⛏️ Got Double Mine: (.+) (HIGH)$/, '⛏️ 获得双倍矿石：$1（高）'],
    [/^⛏️ Got Double Mine: (.+) (MID)$/, '⛏️ 获得双倍矿石：$1（中）'],
    [/^⛏️ Got Double Mine: (.+) (LOW)$/, '⛏️ 获得双倍矿石：$1（低）'],
    [/^⛏️ Mining Buff: (.+) chance to mine double shards$/, '⛏️ 采矿Buff: $1 概率开采双倍碎片'],
    [/^Locked: Mine (.+) total shards to unlock Kepler-186f. (.+)$/, '锁定：挖掘 $1 碎片解锁 开普勒-186f。$2'],
    [/^Locked: Mine (.+) total shards to unlock TRAPPIST-1e. (.+)$/, '锁定：挖掘 $1 碎片解锁 特拉普派-1e。$2'],
    [/^Operations started: (.+) • (.+) shards \(est\) • Fuel used: (.+) AU.$/, '操作已开始: $1 • $2 碎片 (est) • 使用燃料: $3 AU.'],
    [/^Fuel per loop: (.+) AU • Cargo: (.+)$/, '每循环燃料：$1 AU • 货物：$2'],
    [/^Purchase (.+) Ziggie Bars in market$/, '在市场上购买 $1 兹吉锭'],
    [/^Purchase (.+) Ziggie Crate in market$/, '在市场上购买 $1 兹吉箱'],
    [/^Purchase (.+) Ziggie Meal in market$/, '在市场上购买 $1 兹吉餐'],
    [/^Load More \((.+) more\)$/, 'Load More (还有 $1)'],
    [/^Last updated (.+) · © Exo Voyage. All rights reserved.$/, '最后更新：$1 · © Exo Voyage. All rights reserved'],
    [/^Purchase (.+)AU of fuel$/, '购买 $1AU 燃料'],
    [/^Distance: (.+) AU$/, '距离: $1 AU'],
    [/^Fuel Required: (.+) AU$/, '要求燃料: $1 AU'],
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
    [/^([\d\.]+)\/s$/, '$1\/秒'],
    [/^\(\+([\d\.]+)\/s\)$/, '(+$1\/秒)'],
    [/^([\d\.,]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
    [/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) TU$/, '$1 TU'],
    [/^([\d\.]+) AU$/, '$1 AU'],
    [/^Debt: ([\d\.]+) AU$/, '债务: $1 AU'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^\+([\d\.]+) Copper$/, '+$1 铜'],
    [/^\+([\d\.]+) Gold$/, '+$1 黄金'],
    [/^\+([\d\.]+) Ruby$/, '+$1 红宝石'],
    [/^\+([\d\.]+) Titanium$/, '+$1 钛'],
    [/^\+([\d\.]+) Quartz$/, '+$1 石英'],
    [/^\+([\d\.]+) elves$/, '+$1 精灵'],
    [/^\+([\d\.]+) from Echoed Yield$/, '+$1 来自回响产出'],
    [/^\+([\d\.]+)\% elves$/, '+$1% 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)h ([\d\.]+)m$/, '$1小时 $2分'],
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分钟 $2秒'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^\+([\d\.,]+) elves$/, '+$1 精灵'],
    [/^([\d\.,]+) bars$/, '$1 锭'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Ziggie Bar$/, '$1 兹吉锭'],
    [/^([\d\.,]+) Ziggie Crate$/, '$1 兹吉箱'],
    [/^([\d\.,]+) Ziggie Meal$/, '$1 兹吉餐'],
    [/^([\d\.,]+) shard per ([\d\.]+)s$/, '$1 碎片每 $2 秒'],
    [/^([\d\.,]+):([\d\.,]+) AM$/, '上午 $1:$2'],
    [/^([\d\.,]+):([\d\.,]+) PM$/, '下午 $1:$2'],
    [/^🔭 Zoom ([\d\.,]+)$/, '🔭 缩放 $1'],
    [/^🌌 Zoom ([\d\.,]+)$/, '🌌 缩放 $1'],
    [/^🌀 Zoom ([\d\.,]+)$/, '🌀 缩放 $1'],
    [/^Speed Vessel \#([\d\.,]+)$/, '快速船 #$1'],
    [/^Vessel \#([\d\.,]+)$/, '船只 #$1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^([\d\.,]+) in ([\d\.,]+)$/, '$1 \/ $2'],
    [/^\(([\d\.,]+) in ([\d\.,]+)\)$/, '($1 \/ $2)'],
    [/^level ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^level: ([\d\.,]+) \/ ([\d\.,]+)$/, '等级 $1 \/ $2'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^(.+) miles$/, '$1 米'],
    [/^(.+) miles\/min$/, '$1 米/分钟'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^(.+) \/ (.+) shards$/, '$1 \/ $2 碎片'],
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