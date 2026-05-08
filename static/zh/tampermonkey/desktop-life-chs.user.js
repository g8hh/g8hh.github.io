// ==UserScript==
// @name         Desktop Life | IT Tycoon & Life Simulator 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Desktop Life | IT Tycoon & Life Simulator (https://desktop.mikiapps.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Desktop Life | IT Tycoon & Life Simulator.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://desktop.mikiapps.com/favicon.ico
// @license      MIT
// @include      *https://desktop.mikiapps.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/desktop-life-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/desktop-life-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/03/09 13:58
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
    "Email": "邮箱",
    "Password": "密码",
    "Forgot Password?": "忘记密码?",
    "Login": "登录",
    "or": "或",
    "Play as Guest": "以游客身份进行游戏",
    "Register": "注册",
    "Sign in with Google": "使用 Google 账户授权登录",
    "alchemy": "炼金",
    "Alchemy": "炼金",
    "Cooking": "烹饪",
    "cooking": "烹饪",
    "firemaking": "生火",
    "Firemaking": "生火",
    "fishing": "钓鱼",
    "Fishing": "钓鱼",
    "Woodcutting": "伐木",
    "woodcutting": "伐木",
    "crafting": "制作",
    "Crafting": "制作",
    "hunting": "狩猎",
    "Hunting": "狩猎",
    "Mining": "采矿",
    "mining": "采矿",
    "Monsters": "怪物",
    "You": "你",
    "Accept All": "全部接受",
    "About": "关于",
    "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.": "分析型cookie用于了解访问者与网站的交互方式。这些 Cookie 有助于提供诸如访客数量、跳出率、流量来源等指标的信息。",
    "Analytics": "分析",
    "Bank": "银行",
    "Help": "帮助",
    "Health": "生命值",
    "Jobs": "工作",
    "Job": "工作",
    "Money": "金钱",
    "OK": "确定",
    "Pause": "暂停",
    "Shop": "商店",
    "Show more": "显示更多",
    "Services": "服务",
    "School": "中学",
    "Save/Load": "保存/加载",
    "Save your game progress (File -> Save Game)": "保存你的游戏进度 (文件 -> 保存游戏)",
    "The Survivor": "幸存者",
    "VGA Card": "显卡",
    "TO-DO LIST": "待办事项",
    "Video": "视频",
    "Work": "工作",
    "My Computer": "我的电脑",
    "Music Player": "音乐播放器",
    "My applications": "我的应用程序",
    "Learn": "学习",
    "Level": "等级",
    "Lifestyle": "生活方式",
    "Necessary cookies are required to enable the basic features of this site, such as providing secure log-in or adjusting your consent preferences. These cookies do not store any personally identifiable data.": "必要的 Cookie 用于实现本网站的基本功能，例如提供安全登录或调整您的同意偏好设置。这些 Cookie 不会存储任何个人身份信息。",
    "How to Play": "游戏玩法",
    "Earn $1,000,000": "赚取 $1,000,000",
    "Duration": "持续时间",
    "Computer": "计算机",
    "Computer Overall Level": "计算机综合等级",
    "Advertisement": "成就",
    "Advertisement cookies are used to provide visitors with customised advertisements based on the pages you visited previously and to analyse the effectiveness of the ad campaigns.": "广告类 cookies 用于根据您之前访问过的页面为您提供个性化的广告，并用于分析广告活动的效果。",
    ": Buy items to improve your lifestyle.": ": 购买物品以改善你的生活方式。",
    ": Find a job and earn money.": ": 找一份工作赚钱。",
    ": High risk, high reward.": ": 高风险，高回报。",
    ": If Happiness or Health reach 0, the game ends.": ": 如果快乐或健康值降至0，游戏结束。",
    ": Improve your skills to get better jobs.": ": 提升技能以获得更好的工作。",
    ": You can save and load your progress via File -> Save/Load Game.": ": 你可以通过「文件 → 保存/加载游戏」来保存和读取进度。",
    "Activities": "活动",
    "Always Active": "始终生效",
    "And many more! Good luck!": "以及更多！祝你好运！",
    "Antivirus": "杀毒软件",
    "Basic Monitor": "基础显示器",
    "Career Master": "职业大师",
    "Checking memory...": "正在检查内存……",
    "College": "大学",
    "Configuring network...": "正在配置网络……",
    "Customise": "自定义",
    "Customise Consent Preferences": "自定义同意偏好设置",
    "Cyber Phantom": "网络幻影",
    "Description": "描述",
    "Desktop Life": "桌面人生",
    "Desktop OS 95": "桌面操作系统95",
    "Education": "教育",
    "FCCDCF": "FCCDCF",
    "File": "文件",
    "Find your first job at the Job Center": "在求职中心找到你的第一份工作",
    "First Paycheck": "第一份薪水",
    "Functional": "功能性",
    "Functional cookies help perform certain functionalities like sharing the content of the website on social media platforms, collecting feedback, and other third-party features.": "功能性Cookie有助于执行某些功能，例如在社交媒体平台上分享网站内容、收集反馈以及其他第三方功能。",
    "Game Over": "游戏结束",
    "Games": "游戏",
    "Get your first job": "获得第一份工作",
    "Goals": "目标",
    "Graduate from University": "大学毕业",
    "Hack": "黑客",
    "Hacking": "黑客技术",
    "Happiness": "快乐值",
    "Hardware Pro": "硬件专家",
    "Higher Education": "高等教育",
    "Initializing hardware drivers...": "正在初始化硬件驱动程序……",
    "Internet": "互联网",
    "Internet Access": "网络接入",
    "Live for one full game year": "完整度过一整个游戏年",
    "Loading operating system...": "正在加载操作系统……",
    "Millionaire": "百万富翁",
    "Modem": "调制解调器",
    "Monitor": "显示器",
    "Necessary": "必要",
    "No cookies to display.": "没有可显示的Cookie。",
    "No description available.": "暂无描述。",
    "Other uncategorised cookies are those that are being analysed and have not been classified into a category as yet.": "其他未分类Cookie是指正在分析中、尚未归入任何类别的Cookie。",
    "Performance": "性能",
    "Performance cookies are used to understand and analyse the key performance indexes of the website which helps in delivering a better user experience for the visitors.": "性能Cookie用于了解和分析网站的关键性能指标，从而为访客提供更好的用户体验。",
    "Personal": "个性化",
    "Play some music in Music Player": "在音乐播放器中播放一些音乐",
    "Powered by": "由",
    "Professional Edition": "专业版",
    "Programs": "程序",
    "Reach level 10 in IT Investor job": "在IT投资者工作中达到10级",
    "Reject All": "全部拒绝",
    "Save My Preferences": "保存我的偏好",
    "Solitaire Pro": "纸牌专家",
    "Stamina": "体力",
    "Start your journey from a newbie to pro. Manage your money, status, and happiness.": "从新手到专业，开启你的旅程。管理你的金钱、状态和快乐。",
    "Starting services...": "正在启动服务……",
    "Successfully hack 5 different targets": "成功入侵5个不同目标",
    "System": "系统",
    "The cookies that are categorised as \"Necessary\" are stored on your browser as they are essential for enabling the basic functionalities of the site. ... ": "被归类为「必要」的Cookie会存储在你的浏览器中，因为它们对于实现网站的基本功能至关重要。……",
    "Uncategorised": "未分类",
    "University": "大学",
    "We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking \"Accept All\", you consent to our use of cookies.": "我们使用Cookie来增强你的浏览体验、提供个性化广告或内容，并分析我们的流量。点击「全部接受」即表示你同意我们使用Cookie。",
    "We use cookies to help you navigate efficiently and perform certain functions. You will find detailed information about all cookies under each consent category below.": "我们使用Cookie来帮助你高效浏览并执行特定功能。你可以在下方每个同意类别下找到所有Cookie的详细信息。",
    "We value your privacy": "我们重视你的隐私",
    "Welcome to Desktop Life!": "欢迎来到桌面人生！",
    "Win a game of Solitaire": "赢得一局纸牌游戏",
    "MP3 Player": "MP3播放器",
    "Lv.": "等级",
    "Max": "最大",
    "Load Game": "加载游戏",
    "Learning...": "学习中...",
    "Last Saved": "最近保存",
    "Gym": "健身房",
    "Gym Membership": "健身房会员",
    "Game Date": "游戏日期",
    "Go": "出发",
    "Game saved successfully!": "游戏保存成功！",
    "Free": "免费",
    "Full": "回满",
    "Food": "食物",
    "Exp.": "经验值",
    "College": "大学",
    "(per click)": "(每次点击)",
    "Apply": "应用",
    "Address": "地址",
    "Applications": "应用程序",
    "Auto-save enabled": "自动保存已启用",
    "Available Jobs": "可用工作",
    "Available Credit Lines": "可用信用额度",
    "CLASS": "课程",
    "Buy": "购买",
    "Burger": "汉堡",
    "Cost (per click)": "成本 (每次点击)",
    "Current Job": "当前工作",
    "Current Balance": "当前余额",
    "Cooldown:": "冷却时间:",
    "Continue": "继续",
    "Copy to Clipboard": "复制到剪贴板",
    "Drink Coffee": "喝咖啡",
    "days": "天",
    "Duration:": "持续时间:",
    "Job Center": "求职中心",
    "Computer Upgrade": "计算机升级",
    "Internet Explorer": "IE浏览器",
    "Effects": "效果",
    "Energy Drink": "能量饮料",
    "University": "大学",
    "School": "学校",
    "High School": "高中",
    "About Desktop Life": "关于桌面人生",
    "Requirements": "要求",
    "Pizza": "披萨",
    "Rest": "休息",
    "Reset Game": "重置游戏",
    "Save Game": "保存游戏",
    "Smartphone": "智能手机",
    "Sleep": "睡觉",
    "Sport Car": "跑车",
    "Code Editor": "代码编辑器",
    "Investor": "投资机构",
    "Notepad": "记事本",
    "Office": "办公",
    "SYSTEM INITIALIZED...": "系统已初始化...",
    "Web Wallet": "网络钱包",
    "Video Card": "显卡",
    "": "",
    "Achievement Unlocked!": "成就已解锁！",
    "Browse the web to download software and buy OS and games.": "浏览网页下载软件，购买操作系统和游戏。",
    "Buy any modem to get internet access": "购买任意调制解调器即可接入互联网。",
    "Complete previous class first": "请先完成上一节课的学习。",
    "Computer Basics": "计算机基础",
    "Congratulations! You successfully passed the exam.": "恭喜你！考试顺利通过。",
    "Core 2 Dual": "酷睿2双核",
    "Courier": "快递",
    "Credits": "信用",
    "Deposit": "存款",
    "Deposit any amount in the bank": "向银行存入任意金额",
    "Deposit Options": "存款选项",
    "Deposits": "存款",
    "Developed by": "开发",
    "DSL Modem": "DSL调制解调器",
    "Dumbbell": "哑铃",
    "Education Center": "教育中心",
    "Entertainment": "娱乐",
    "Error on page": "页面出错",
    "Fiber Optic": "光纤",
    "Graduated": "已毕业",
    "Hack into vulnerable systems to steal money. Watch out for the detection risk!": "入侵易受攻击的系统盗取钱财。小心被检测到的风险！",
    "Hardware Basics": "硬件基础",
    "Health Checkup": "健康检查",
    "Here you can buy food and other items to improve your stats. Each item has a different cost.": "在这里你可以购买食物和其他物品来提升各项属性。每件物品价格不同。",
    "Home Renovation": "家居装修",
    "Income": "收入",
    "Inspired by games and digital aesthetics of the early 2000s.": "灵感源自21世纪初的游戏风格与数字美学。",
    "Interest": "利息",
    "ISDN Modem": "ISDN调制解调器",
    "IT Investor": "IT投资者",
    "Kebab": "烤肉串",
    "Kore i7-2600K": "酷睿i7-2600K",
    "Logic & Reasoning": "逻辑与推理",
    "Medical Insurance": "医疗保险",
    "Medicine": "药品",
    "MikiApps": "米基应用",
    "Min Deposit": "最低存款",
    "Monthly Interest": "月利息",
    "More applications:": "更多应用：",
    "Mounted": "已安装",
    "Music Player": "音乐播放器",
    "NaCl": "氯化钠",
    "Natural Sciences": "自然科学",
    "Network Error: No valid modem detected.": "网络错误：未检测到有效调制解调器。",
    "NETWORK ERROR: NO VALID MODEM DETECTED. HARDWARE REQUIRED.": "网络错误：未检测到有效调制解调器。需要硬件支持。",
    "No active deposits": "无有效存款",
    "Not enough money": "资金不足",
    "Objective Complete!": "目标完成！",
    "Office Worker": "办公室职员",
    "Online Banking": "网上银行",
    "Painkillers": "止痛药",
    "Participate in various activities to improve your health, happiness, and stamina.": "参加各类活动以提升健康、快乐值和体力。",
    "Pause the game when it is not in focus": "不在窗口焦点时暂停游戏",
    "Pentum": "奔腾",
    "Personal Trainer": "私人教练",
    "Play your favorite retro tunes!": "播放你喜爱的复古音乐！",
    "Radio Heart 00s *** 128kbps *** 44kHz": "怀旧电台 00s *** 128kbps *** 44kHz",
    "Repayment": "还款",
    "Requires College qualification": "需要大学学历",
    "Requires Courier (Lvl 10)": "需要快递员（10级）",
    "Requires Office Worker (Lvl 10)": "需要办公室职员（10级）",
    "Requires School qualification": "需要高中学历",
    "Requires Senior Developer (Lvl 10)": "需要高级开发员（10级）",
    "Requires Startup Founder (Lvl 10)": "需要创业创始人（10级）",
    "Requires Warehouse Worker (Lvl 10)": "需要仓库工人（10级）",
    "Requires Web Developer (Lvl 10)": "需要网页开发员（10级）",
    "Savings Account": "储蓄账户",
    "Senior Developer": "高级开发员",
    "Short Break": "短暂休息",
    "Snack": "零食",
    "Stamina too low!": "体力不足！",
    "Start Learning": "开始学习",
    "Startup Founder": "创业创始人",
    "Supermarket": "超市",
    "Support development:": "支持开发：",
    "Take Credit": "申请贷款",
    "Technical College": "专科院校",
    "Term": "期限",
    "Term Deposit": "定期存款",
    "Terminal Hacking": "终端入侵",
    "The Job Center is where you can find work. Manual jobs require clicking to earn money, while passive jobs provide hourly income.": "求职中心可以找到工作。体力工作需要点击赚钱，被动工作按小时自动收入。",
    "The Online Banking terminal allows you to take credits or make deposits.": "网上银行终端可用于申请贷款或存款。",
    "The page cannot be displayed": "无法显示该页面",
    "The page you are looking for is currently unavailable.": "你访问的页面目前不可用。",
    "Time for the exam! Open Education Center": "考试时间！打开教育中心",
    "Treadmill": "跑步机",
    "University of Technology": "理工大学",
    "Upgrade your computer parts to access better software.": "升级电脑配件以使用更好的软件。",
    "Vitamin Pack": "维生素套餐",
    "Warehouse Worker": "仓库工人",
    "Web Developer": "网页开发员",
    "What is the chemical symbol for water?": "水的化学符号是什么？",
    "Which comes next: 2, 4, 8, 16...?": "下一个数字是：2, 4, 8, 16…？",
    "Downloading...": "下载中...",
    "Done": "完成",
    "Home": "首页",
    "Installed": "已安装",
    "Installing...": "安装中...",
    "XP": "经验值",
    "What is a bug?": "什么是Bug？",
    "Scan Now": "立即扫描",
    "Clear the minefield without detonating any mines. Use the 🚩 button to toggle Flag Mode if you are on mobile. Left-click to reveal a cell, Right-click to flag a mine. Numbers indicate how many mines are adjacent to the cell.": "在不引爆任何地雷的情況下清除雷区。如果您使用的是移动端，请使用 🚩 按钮切换为标记模式。点击左键可显示一个单元格，点击右键可标记一枚地雷。数字表示该单元格周围有多少枚地雷。",
    "New Game": "新游戏",
    "A feature": "一种功能",
    "A hardware failure": "硬件故障",
    "A virus": "一种病毒",
    "An error in software": "一个软件错误",
    "Anti-Hack Fine": "反黑客罚款",
    "Antivirus & Security": "杀毒与安全",
    "Best Software Prices!": "软件价格最优！",
    "Classic Solitaire. Stack cards by alternating colors in descending order. Move aces to foundation.": "经典纸牌。按颜色交替、数字递减堆叠纸牌。将A移至基础堆。",
    "Database Fundamentals": "数据库基础",
    "Detection Risk": "检测风险",
    "Dr. Antivirus Advanced": "高级杀毒博士",
    "Dr. Antivirus Basic": "基础杀毒博士",
    "Dr. Antivirus Premium": "高级版杀毒博士",
    "Global Stock Exchange": "全球证券交易所",
    "Government Secure Database": "政府安全数据库",
    "Identify and click the red virus icons to clean your system!": "点击红色病毒图标以清理系统！",
    "INSUFFICIENT FUNDS": "资金不足",
    "Local Shop Network": "本地商店网络",
    "MikiApps Store": "米基应用商店",
    "Minesweeper": "扫雷",
    "Networking Essentials": "网络基础",
    "Operating Systems": "操作系统",
    "Outdated": "已过时",
    "Protected": "已保护",
    "Protected until": "保护至",
    "Regional Bank Database": "地区银行数据库",
    "Scan complete! Your system is now clean.": "扫描完成！系统现已清理完毕。",
    "Scan your system for viruses and remove threats to protect your data.": "扫描系统病毒并清除威胁以保护数据。",
    "Scanning system...": "正在扫描系统……",
    "Small Business Mainframe": "小型企业主机",
    "Software": "软件",
    "Software Engineering": "软件工程",
    "Solitaire": "纸牌",
    "Solitaire, Minesweeper": "纸牌、扫雷",
    "System Status": "系统状态",
    "To cool components": "为了给部件降温",
    "To generate power": "为了供电",
    "To look cool": "为了看起来酷炫",
    "To make noise": "为了制造噪音",
    "Upgrade your digital life with the latest software!": "用最新软件升级你的数字生活！",
    "Vulnerable": "存在漏洞",
    "Web Development Basics": "网页开发基础",
    "Welcome to MikiApps Software Store": "欢迎来到米基应用软件商店",
    "What is the function of a fan?": "风扇的作用是什么？",
    "SECURE CONNECTION ESTABLISHED.": "安全连接已建立。",
    "SELECT TARGET NODE:": "选择目标节点：",
    "": "",
    "WELCOME, OPERATOR.": "欢迎您，操作员。",
    "Fake code": "伪造的代码",
    "False code": "虚假的代码",
    "Logic description": "逻辑描述",
    "Machine code": "机器代码",
    "Max Level": "最高等级",
    "What is pseudo-code?": "什么是伪代码？",
    "What is the next number in the sequence: 1, 1, 2, 3, 5, 8, ...?": "这个数列的下一个数字是：1、1、2、3、5、8...?",
    "Cardio Training": "有氧运动",
    "Concert": "音乐会",
    "Fine Dining": "精致晚餐",
    "Go to Cinema": "去看电影",
    "Strength Training": "力量训练",
    "Virus Alert!": "病毒警报！",
    "Walk in the Park": "公园散步",
    "Watch TV": "看电视",
    "Weight Lifting": "举重",
    "Yoga Session": "瑜伽课程",
    "Your computer has been infected with a virus! It's very annoying and makes you sad. We recommend buying an antivirus and scanning your system.": "你的电脑感染了病毒！这十分令人烦躁，还会让你心情变差。建议购买杀毒软件并扫描系统。",
    "Depression Imminent!": "抑郁症即将来袭！",
    "You are very unhappy. Do something fun!": "你非常不开心。去做点有趣的事吧！",
    "A problem has been detected and Desktop Life has been shut down.": "已检测到问题，桌面人生已关闭。",
    "DEPRESSION_OVERFLOW": "抑郁溢出",
    "Happiness reached 0%.": "快乐值降至 0%。",
    "Happiness too low!": "快乐值过低！",
    "Press any key to restart game": "按任意键重新开始游戏",
    "Technical Information:": "技术信息：",
    "The system detected severe emotional instability.": "系统检测到严重的情绪不稳定。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "(0x": "(0x",
    "*** STOP: 0x000000": "*** 停止: 0x000000",
    "011D": "011D",
    "4AC2": "4AC2",
    "4E39": "4E39",
    "B18D": "B18D",
    "Algorithms 101": "算法 101",
    "2TB NVMe SSD": "2TB NVMe SSD",
    "© 2000 MikiApps Inc.": "© 2000 MikiApps Inc.",
    "VDSL Modem": "VDSL光猫",
    "Threadshredder 7980X": "Threadshredder 7980X",
    "Rizen 9 3900X": "Rizen 9 3900X",
    "RTX 2080 Ti": "RTX 2080 Ti",
    "RTX 4090": "RTX 4090",
    "https://mikiapps.com": "https://mikiapps.com",
    "https://ko-fi.com/mikiapps": "https://ko-fi.com/mikiapps",
    "G-Force 2 GTS": "G-Force 2 GTS",
    "G-Force 8800 GTX": "G-Force 8800 GTX",
    "128MB SDRAM": "128MB SDRAM",
    "17\" CRT Monitor": "17\" CRT 显示器",
    "20\" LCD Monitor": "20\" LCD 显示器",
    "24\" LED Monitor": "24\" LED 显示器",
    "27\" 4K IPS Monitor": "27\" 4K IPS 显示器",
    "32\" OLED 240Hz": "32\" OLED 240Hz",
    "56K Modem": "56K Modem",
    "8TB NVMe SSD": "8TB NVMe SSD",
    "C:\\>": "C:\\>",
    "CO2": "CO2",
    "GTX 580": "GTX 580",
    "H2O": "H2O",
    "O2": "O2",
    "RAM": "内存",
    "Intul 386": "Intul 386",
    "HDD": "硬盘",
    "en": "英语",
    "Cookie": "Cookie",
    "CPU": "CPU",
    "170MB HDD": "170MB HDD",
    "4MB RAM": "4MB RAM",
    "© 2026 Desktop Life OS. All rights reserved.": "© 2026 Desktop Life OS. All rights reserved.",
    "Buckler": "圆盾",
    "Amulet": "护符",
    "Wraps": "外衣",
    "Skirt": "裙子",
    "Sandals": "凉鞋",
    "Robe": "长袍",
    "Hat": "帽子",
    "Pants": "裤子",
    "Hood": "兜帽",
    "Vest": "背心",
    "Shield": "盾牌",
    "Ring": "戒指",
    "Platelegs": "板腿",
    "Platebody": "板甲",
    "Helmet": "头盔",
    "Gloves": "手套",
    "Boots": "靴子",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "???": "???",
    "Gityx": "Gityx",
    "G8hh": "G8hh",
    ">_": ">_",
    "•": "•",
    "+$": "+$",
    "✓": "✓",
    "(+": "(+",
    "♠": "♠",
    "♣": "♣",
    "♥": "♥",
    "♦": "♦",
    "💿": "💿",
    "🙂": "🙂",
    "🚩": "🚩",
    "": "",
    "": "",
    "": "",
    "$": "$",
    "#": "#",
    "/": "/",
    "]": "]",
    "[": "[",
    ">>": ">>",
    ">": ">",
    "<<": "<<",
    "<": "<",
    "%": "%",
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
    "Upgrade your computer to level ": "升级你的电脑到等级 ",
    "Education: ": "教育: ",
    "Attempts: ": "尝试：",
    "Software: ": "软件: ",
    "Threats found: ": "发现威胁：",
    "Computer: Level: ": "计算机: 等级: ",
    "Last Scan: ": "最近扫描: ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    " - Help": " - 帮助",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^\+([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^\[([\d\.]+):([\d\.]+):([\d\.]+)\]$/,
    /^\[([\d\.]+)\/([\d\.]+)\/([\d\.]+), ([\d\.]+):([\d\.]+)\]$/,
    /^([\d\.]+)\/([\d\.]+)\/([\d\.]+), ([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)k$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)b$/,
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
    [/^\+([\d\.]+) elves$/, '+$1 精灵'],
    [/^\+([\d\.]+)\% elves$/, '+$1% 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)h ([\d\.]+)m$/, '$1小时 $2分'],
    [/^([\d\.]+) year ([\d\.]+) days$/, '$1 年 $2 天'],
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分钟 $2秒'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Max$/, '$1 最大'],
    [/^([\d\.,]+) days left$/, '剩余 $1 天'],
    [/^([\d\.,]+) s$/, '$1 秒'],
    [/^([\d\.,]+)TB HDD$/, '$1TB 硬盘'],
    [/^([\d\.,]+)GB HDD$/, '$1GB 硬盘'],
    [/^([\d\.,]+)GB DDR([\d\.,]+)$/, '$1GB DDR$2'],
    [/^\+([\d\.,]+) elves$/, '+$1 精灵'],
    [/^\-([\d\.,]+) elves$/, '-$1 精灵'],
    [/^Desktop OS ([\d\.,]+)$/, '桌面操作系统 $1'],
    [/^Desktop OS XP$/, '桌面操作系统 XP'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^Lvl ([\d\.,]+)$/, '等级 $1'],
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