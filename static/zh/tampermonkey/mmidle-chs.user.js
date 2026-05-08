// ==UserScript==
// @name         MMIdle 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 MMIdle (https://mmidle.com) 的简体中文汉化脚本。Simplified Chinese i18n script for web game MMIdle.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://mmidle.com/favicon.ico?favicon.0b3bf435.ico
// @license      MIT
// @include      *mmidle.com*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/mmidle-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/mmidle-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/03/01 13:52
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
    "Alpha Notice": "Alpha公告",
    "By continuing, you acknowledge this is a live test environment and you accept instability, incomplete systems, and frequent iteration.": "继续使用即表示您已知晓这是一个实时测试环境，并且您同意接受其不稳定性和不完善性，以及频繁的迭代更新。",
    "Decline": "拒绝",
    "I Agree": "我同意",
    "MMIdle is in active alpha. Features can break, change, or reset without notice while systems are being built and stabilized.": "MMIdle 正处于活跃的测试阶段。在系统构建和稳定的过程中，其功能可能会出现变动、改变或重置，且这种情况事先不会通知。",
    "Need updates first? Visit our community:": "需要更新吗？请访问我们的社区：",
    "Under Construction": "开发中",
    "Now": "现在",
    "Open Wiki": "打开 Wiki",
    "Home": "首页",
    "Game": "游戏",
    "How To Start": "如何开始",
    "Features": "功能",
    "Sign In": "登录",
    "Zone": "区域",
    "Wiki Guides": "Wiki 指南",
    "Updates": "更新",
    "Patch 0.1.78 ships 9 player-facing changes. Highlights: progression curve overhaul — Replaced linear XP growth with OSRS-style exponential leveling and hard-capped progression at level 100.": "0.1.78 版本带来了 9 项面向玩家的改动。亮点包括：等级曲线全面改革——将线性经验值增长方式替换为类似于《地下城与勇士》的指数式升级方式，并在 100 级时设定上限。",
    "Patch 0.1.79 approval notifications — Approved alpha applicants now receive a Discord DM instantly letting them know they're in, with a direct link to the game, and fixes alpha code generation — codes can now be created and issued without error.": "0.1.79 版本的补丁更新——已通过测试版申请的用户现在会立即收到一条 Discord 消息，告知他们已成功通过审核，并附有游戏的直接链接以及修复了测试版代码生成的问题——现在可以成功创建和发放代码，且不会出现错误。",
    "Patch 0.1.77 ships 3 player-facing changes. Highlights: guild Name Paint — Guild owners and officers with an active Premium membership can now apply a name paint style to their guild name. Choose from any of the available paint presets, fonts, glow, and color. The styled guild n…": "0.1.77 版本更新了 3 项面向玩家的改动。亮点如下：公会名称涂鸦功能——拥有有效高级会员资格的公会所有者和管理人员现在可以为他们的公会名称应用涂鸦样式。您可以从现有的任何涂鸦预设、字体、发光效果和颜色中进行选择。带有这种风格的公会名称...",
    "Devlog": "开发日志",
    "Current Realm:": "当前领域:",
    "About": "关于",
    "Blog": "博客",
    "Community": "社区",
    "Community Feedback": "社区反馈",
    "Forums": "论坛",
    "Join Discord": "加入 Discord",
    "Next": "下一个",
    "Roadmap": "路线图",
    "Roadmap Snapshot": "路线图概览",
    "Athena Sanctuaries": "雅典娜圣殿",
    "Browser + Desktop Access": "浏览器与桌面访问",
    "Choose a class path, select your starter companion, and set your first progression direction.": "选择一个职业路径，选择你的起始同伴，并设置你的第一个前进方向。",
    "Combat Foundation": "战斗基础",
    "Companion System": "伙伴系统",
    "Companions are persistent partners with passives, recovery loops, and long-term growth paths.": "同伴是具有被动、恢复循环和长期成长路径的持久伙伴。",
    "Core Pillar": "岩心柱",
    "Create Account": "创建账户",
    "Current Build Focus": "当前版本重点",
    "Current focus is stable progression and testable co-op combat loops.": "当前的重点在于稳定的发展进程以及可测试的合作战斗流程。",
    "Each biome hosts different enemies, materials, and risk profiles, rewarding route knowledge and preparation.": "每个生物群落都有不同的敌人、材料和风险特征，奖励玩家对路线的了解和准备。",
    "Expanded world zones, bosses, and raid progression": "扩展的世界区域、首领和团队副本进程",
    "Explore All Features": "探索所有功能",
    "Feature Snapshot": "功能概览",
    "Forum read/write launch with role-aware moderation": "论坛的读写发布功能，结合角色感知的管理",
    "Free-to-Play Alpha": "免费试玩版",
    "Full Feature List": "完整的功能列表",
    "Identity and account continuity across both apps.": "在两个应用程序之间实现身份和账户的连续性。",
    "Idle loops feed crafting, gear upgrades, and progression goals that connect directly back into combat.": "空闲状态下的流程会促进制作、装备升级和进程目标的实现，这些目标直接与战斗相连接。",
    "Idle MMO progression with real game-client depth.": "空闲的MMO进程与真正的游戏客户端深度。",
    "Later": "以后",
    "Latest Game Devlog": "最新游戏开发日志",
    "Live Foundation": "生活基础",
    "Long-range systems unlock after foundation soak and balance maturity.": "在基础培养和平衡成熟度达成后，远程系统将解锁。",
    "Lore": "传说",
    "MMIdle is built as a long-run progression RPG: world zones, skilling loops, combat instances, companions, and party systems with server-authoritative runtime behavior.": "MMIdle 构建为一款长期发展的角色扮演游戏：世界区域、技能循环、战斗场景、伙伴系统以及具有服务器权威运行行为的团队系统。",
    "Need quick answers? Read FAQ →": "需要快速解答问题？阅读FAQ→",
    "Next major gameplay expansion target after foundation stabilization.": "在基础稳定后，下一个主要的游戏玩法扩展目标是……",
    "Next wave expands depth once the live foundation is stable.": "一旦活体基础稳定，下一波扩展将增加深度。",
    "Persistent World Map": "持久的世界地图",
    "Pick Class + Companion": "选择职业+同伴",
    "Public Portal": "公共门户",
    "Read Devlog": "阅读开发日志",
    "Read World Lore": "阅读世界传说",
    "Run activities, move through zones, and push combat while your account keeps server-side progress.": "参与活动、穿越区域并进行战斗，同时您的账号会持续在服务器端保持进度。",
    "Sanctuary shrines restore battle readiness without replacing travel rest loops, keeping combat and exploration distinct.": "圣所神殿能恢复战斗状态，但不会取代旅行休息循环，从而将战斗和探索区分开来。",
    "Server-authoritative combat instances covering solo and party flows, designed to scale into raids.": "服务器权威的战斗实例涵盖单人和团队流程，旨在扩展至团队副本。",
    "Server-authoritative encounters built for solo and party play, with room to scale into raids and bosses.": "服务器权威的遭遇设计供单人和团队游玩，也有空间扩展至团队副本和首领战。",
    "Shared account bridge for mmidle.com + game.mmidle.com": "mmidle.com + game.mmidle.com 的共享账号桥接",
    "Shared Account Login": "共享账号登录",
    "Sign in once and use the same identity across mmidle.com and game.mmidle.com.": "只需登录一次，即可在 mmidle.com 和 game.mmidle.com 之间使用相同的身份。",
    "Skilling & Economy": "技能与经济",
    "Small towns survive between wild zones, keeping inns, forges, and sanctuaries alive for roaming adventurers.": "在荒野区域之间的小城镇得以存续，为游荡的冒险者保留了客栈、锻造厂和圣所。",
    "Staff moderation tooling and community rollout hardening.": "工作人员管理工具和社区强化措施。",
    "Start Idle Loops": "启动空闲循环",
    "Starter companion flow, species passives, codex progression, and sanctuary recovery support.": "新手同伴流程、物种被动技能、典籍进展和圣所恢复支持。",
    "Step": "步骤",
    "The Frontier Settlements": "边境定居点",
    "The Shifting Wilds": "不断变化的荒野",
    "Travel through connected zones with stamina-based movement, inn recovery, and route planning that matters.": "通过基于耐力的移动、客栈恢复以及路线规划等功能，穿梭于相互连接的区域。",
    "View All Game Patches": "查看所有游戏补丁",
    "View Full Roadmap": "查看完整路线图",
    "Visit Forums": "访问论坛",
    "World Map Progression": "世界地图进程",
    "World Primer": "世界简介",
    "Zone progression with travel stamina, inns for recovery, and sanctuary combat recovery loops.": "结合移动耐力、客栈恢复以及庇护所战斗恢复循环的区域进程。",
    "0.1.84 ships 1 player-facing change. Highlights: fixes Discord bot alpha code redeem — /redeem CODE in Discord was always failing with \"Redeem failed: Unauthorized.\" No codes had ever been successfully redeemed. Root cause: an internal database function rejected service-ro…": "0.1.84 版本包含 1 项面向玩家的改动。亮点如下：修复了 Discord 机器人 Alpha 版本中的代码兑换功能——在 Discord 中输入“/redeem CODE”总是会因“兑换失败：未经授权”而失败。此前从未有代码成功兑换。根本原因：内部数据库功能拒绝了服务请求...",
    "0.1.85 ships 7 player-facing changes. Highlights: real-time weather in the game world — The ambient sky now reflects your actual local weather. Clouds roll in when it's cloudy outside, rain falls when it's raining, and snow drifts down when there's snow in the forecast. Th…": "0.1.85 版本带来了 7 项面向玩家的改动。亮点包括：游戏世界的实时天气效果——游戏中的天空环境现在会反映您所在地区的实际天气状况。当外面是阴天时，云朵会聚集；下雨时，会下雨水；有降雪预报时，雪花也会飘落。这……",
    "0.1.86 ships 1 player-facing change. Highlights: landscape silhouettes — The ambient sky now has terrain silhouettes layered over it: a treeline along the bottom horizon and framing trees on both sides of the screen. Switch between Forest, Plains, or Mountains in the debug…": "0.1.86 版本包含 1 项面向玩家的改动。亮点如下：景观轮廓——现在环境天空中叠加了地形轮廓：底部地平线处有一片林木，屏幕两侧还有环绕树木。在调试模式中可切换森林、平原或山脉的场景。",
    "Current development is focused on world-map continuity, combat reliability, companion progression, and cleaner party/co-op loops. Once these systems are stable, we extend into dungeon and raid content.": "当前的开发重点在于世界地图的连贯性、战斗的稳定性、伙伴角色的发展以及更流畅的团队/合作流程。一旦这些系统稳定下来，我们就会进一步开发地下城和团队副本的内容。",
    "A long-run idle RPG built like a game client.": "一个长期的RPG放置就像一个游戏客户端。",
    "About MMIdle": "关于 MMIdle",
    "Alpha Status": "测试版状态",
    "Community-Led Iteration": "社区主导的迭代",
    "Core loops ship stable first so advanced systems like raids and deep class builds can scale cleanly.": "核心循环先发布稳定版本，以便诸如团队副本和深度职业构建等高级系统能够流畅扩展。",
    "Design Pillar": "设计支柱",
    "Feedback from active players drives roadmap decisions, quality passes, and balance priorities.": "活跃玩家的反馈决定了路线图决策、质量审查和平衡优先级。",
    "Follow Devlog": "关注开发日志",
    "Foundation Before Sprawl": "基础先于扩展",
    "Game Direction": "游戏方向",
    "Game-Client First": "以游戏客户端为先",
    "Idle progression should feel meaningful, predictable, and rewarding whether sessions are short or long.": "无论游戏时间长短，闲暇进程都应具有意义、可预测性和回报感。",
    "MMIdle is a persistent world project focused on deep progression, not short-session gimmicks. The goal is to make idle loops, combat, and social systems feel cohesive from day one.": "MMIdle 是一个持续发展的世界项目，专注于深度进程，而非短时间内的噱头。其目标是从一开始就让闲暇循环、战斗和社交系统感觉协调一致。",
    "Read FAQ": "阅读FAQ",
    "Read Lore": "阅读背景故事",
    "Respect Player Time": "尊重玩家时间",
    "The website and game surfaces prioritize dense, usable interfaces over marketing-page patterns.": "网站和游戏界面优先考虑密集、实用的界面，而非营销页面的模式。",
    "View Features": "查看功能",
    "View Roadmap": "查看路线图",
    "Where We Are Now": "目前状况",
    "Class perk depth and stance identities": "职业技能深度与站位特性",
    "Combat and companion reliability passes": "战斗与同伴的可靠度评估",
    "Companion growth and species differentiation": "同伴的成长与物种差异性方向",
    "Direction": "方向",
    "Dungeon entry loop and encounter pacing": "地牢入口循环和遭遇战节奏",
    "Economy + market progression expansion": "经济+市场进程扩张",
    "Follow Build Progress": "遵循构建进度",
    "live": "实时",
    "MMIdle ships in phases. Foundation stability comes first, then deeper class/combat systems, then full raid-scale progression.": "大型多人游戏分阶段进行。首先是基础结构的稳固，然后是更深入的类别/战斗系统，最后是完整的团队规模的发展进程。接下来",
    "next": "下一步",
    "Party combat integration hardening": "队伍战斗融合强化",
    "planned": "计划中",
    "Raid-scale encounters and party roles": "团队规模的遭遇战和团队角色",
    "Seasonal world events and endgame routing": "季节性世界事件和终局流程安排",
    "Team Blog": "团队博客",
    "What is live now, next, and planned.": "实时更新当前、未来及计划中的内容。",
    "World map travel + stamina route flow": "世界地图探索 + 耐力值路线流程",
    "Account Access": "账户访问",
    "Account Creation": "创建账户",
    "Close": "关闭",
    "Confirm Password": "确认密码",
    "Have Account?": "已有账户？",
    "Need Account?": "需要账户？",
    "New Adventurer": "新冒险者",
    "Shared Login": "共享登录",
    "Show": "显示",
    "Sign Up": "注册",
    "← Back to Sign In": "← 返回到登录",
    "Password Reset": "密码重置",
    "Reset Link": "重置链接",
    "Send Reset Link": "发送重置链接",
    "Hide": "隐藏",
    "Passwords must match.": "密码必须匹配。",
    "Use at least 6 characters.": "最少需要6位字符。",
    "Enter a valid email address.": "请输入一个可用的邮箱地址。",
    "Processing...": "处理中...",
    "Account created. If email confirmation is enabled, check your inbox to finish verification.": "账户已创建。若启用了电子邮件确认功能，请查看您的收件箱以完成验证。",
    "Profile": "个人资料",
    "Open Game Settings": "打开游戏设置",
    "Icy Blue": "冰蓝色",
    "Edit": "编辑",
    "New Password": "新密码",
    "Complete Profile": "完成个人资料",
    "Complete Account Handle": "完成账号处理",
    "Bio": "简介",
    "Account": "账户",
    "Account Handle": "账户处理",
    "Account Actions": "账户操作",
    "Sign Out": "登出",
    "Sign out": "登出",
    "Signed in as": "登录身份是",
    "Update Password": "更新密码",
    "Save Profile": "保存个人资料",
    "Redeem Code": "兑换码",
    "Save and Continue": "保存并继续",
    "Apply for Alpha": "申请内测权限",
    "Email confirmed. Choose your account handle to finish setup.": "电子邮件已确认。选择您的账户名称以完成设置。",
    "Email confirmed. You are now signed in.": "电子邮件已确认。您已成功登录。",
    "Security": "安全",
    "Set your account handle to continue.": "设置您的账户名称以继续操作。",
    "Theme Preset": "主题预设",
    "This is your global account name across MMIdle.": "这是您在 MMIdle 中的全局账户名称。",
    "Arcanist": "术士",
    "Ashen Wetlands": "苍茫湿地",
    "Caster": "施法者",
    "Citadel Approach": "城堡法",
    "Class Paths": "职业路径",
    "Community Forums": "社区论坛",
    "Control-focused path with scaling utility and stronger throughput on research, weaving, and arcane loops.": "以控制为核心的发展路径，具备扩展功能和更高的处理效率，适用于研究、编织和神秘循环等场景。",
    "Core systems shaping MMIdle.": "核心系统塑造着 MMIdle 的运行方式。",
    "Current": "当前",
    "Defensive bruiser path with stronger mitigation and sturdy progression through heavy combat lanes.": "具有更强防护效果且能有效减轻伤害的防御型角色，能够在激烈的战斗通道中稳健前行。",
    "Early": "早期",
    "Early-Mid": "早中期",
    "Endgame staging routes designed to feed raid preparation, high-tier crafting, and boss progression.": "终局策划路线旨在为团队准备、高级制作以及首领挑战提供支持。",
    "Follow Progress": "跟踪进度",
    "Forums, friends, parties, and clans support collaborative play without forcing players out of solo progression.": "论坛、好友、团队和公会支持玩家进行协作游戏，同时又不会迫使玩家放弃单人游戏进程。",
    "Frontier Road": "边境之路",
    "Frontline": "前线",
    "Gameplay Systems": "游戏玩法系统",
    "High-pressure lanes tuned around stronger elites, companion optimization, and party-ready pacing.": "围绕更强力的精英角色进行了高压通道的调整，优化了伙伴配置，并实现了适合团队作战的节奏安排。",
    "Late": "后期",
    "Live Roadmap": "实时路线图",
    "Live Updates": "实时更新",
    "Mid": "中期",
    "Mid-Late": "中后期",
    "Mixed terrain routes with tougher enemy packs and broader gathering/crafting material unlocks.": "地形复杂路线，敌人队伍更强，收集/制作材料的获取范围更广。",
    "Mobile precision path with stronger route efficiency, tracking, and opportunistic combat pressure.": "移动路线更加精准，路线效率更高，具备更强的追踪能力以及灵活的战斗压力机制。",
    "Narrow routes with swarm-heavy threats that pressure positioning, stamina, and recovery planning.": "狭窄路线，威胁来自大量虫群，会对位置、耐力和恢复计划构成压力。",
    "Pathfinder": "探险者",
    "Ruinbelt": "废墟地带",
    "Skirmisher": "小规模冲突者",
    "Social Systems": "社会系统",
    "Starter travel lanes, basic resource loops, and low-risk encounters for onboarding progression.": "起始旅行通道、基本资源循环以及用于新手引导进程的低风险遭遇环节。",
    "The game is in active development with frequent balance passes, interface polish, and system expansion.": "该游戏正处于积极开发阶段，频繁进行平衡调整、界面优化以及系统扩展。",
    "These are the systems currently in development focus and early live testing. Each one is designed to plug into the same long-term progression loop.": "这些是目前正在开发中的系统以及早期的公开测试版本。每一个系统都旨在融入相同的长期进程循环。",
    "Tunnel Reaches": "隧道范围",
    "Vanguard": "先锋",
    "World Route": "世界路线",
    "Zone Progression": "区域进度",
    "↩ Sign Out": "↩ 登出",
    "⚙️ Account Hub": "⚙️ 账户中心",
    "▶ Play MMIdle": "▶ 玩 MMIdle",
    "Community Input": "社区意见",
    "Companion Echoes": "伙伴共鸣",
    "Companions are bound to your account journey, offering passives and combat support tied to your playstyle.": "伙伴会与您的角色成长历程紧密相连，为您提供与您的游戏风格相关的被动效果和战斗支援。",
    "Discuss in Forums": "在论坛中讨论",
    "Lore Primer": "背景介绍",
    "Lore will expand alongside zone releases and major encounters. Share world ideas and narrative requests in forums while the world keeps expanding.": "背景故事会随着区域的发布和重要事件的展开而不断扩充。在论坛中分享世界构想和叙事需求，同时世界也在不断扩展。",
    "MMIdle’s lore is built to support gameplay decisions: where you travel, what you fight, how companions recover, and why settlements matter.": "MMIdle 的背景故事旨在支持游戏决策：您将前往何处、您将与谁战斗、伙伴如何恢复以及为何要建设定居点。",
    "Read Build Updates": "阅读更新内容",
    "The world behind the progression.": "进展背后的世界。",
    "Want More Worldbuilding?": "想要更多世界构建？",
    "World Entry": "世界入口",
    "World Notes": "世界笔记",
    "Live": "实时",
    "Title": "标题",
    "All Entries": "所有内容",
    "Alpha launch of MMIdle core foundation: combat, progression systems, and first public world loop.": "MMIdle核心基础的首发版：战斗系统、进度系统和首个公共世界循环。",
    "Announcements": "公告",
    "Ask for support and share troubleshooting guidance.": "寻求支持并分享故障排除指南。",
    "Ask in Forums": "在论坛提问",
    "Categories": "分类",
    "Category": "类别",
    "Companions are persistent passive partners that support your build and combat flow without location-lock friction.": "随从是持续存在的被动伙伴，它们支持你的构建和战斗流程，且不会产生位置锁定带来的摩擦。",
    "Create Thread": "创建线程",
    "Current focus is world-map continuity, combat reliability, companion depth, and party flow hardening before larger dungeon/raid expansion.": "当前的重点是在大型地下城/团队副本扩展之前，确保世界地图的连贯性、战斗的可靠性、伙伴的深度以及团队流程的稳定性。",
    "Current foundation supports automated combat progression with growing tactical controls. Party and raid layers build on that base.": "当前基础支持通过不断增强的战术控制实现自动战斗进程。组队和团队副本层在此基础上构建。",
    "Development Log": "开发日志",
    "Do mmidle.com and game.mmidle.com use the same account?": "mmiddle.com和game.mmiddle.com是使用同一个账号吗？",
    "Does progression continue while offline?": "离线时进度是否继续？",
    "Follow gameplay changes, world progression milestones, balance updates, and shipped improvements as they land.": "随时关注游戏玩法变化、世界进程里程碑、平衡性更新以及已发布的改进内容。",
    "Frequently asked questions about MMIdle.": "关于MMIdle的常见问题。",
    "Game Patch Notes": "游戏更新日志",
    "General Discussion": "一般讨论",
    "General MMIdle discussion and feedback.": "一般性MM放置讨论与反馈。",
    "Help & Questions": "帮助与问题",
    "How do companions work?": "同伴是如何工作的？",
    "Idle and combat systems are server-authoritative. Offline and background progression behavior follows active feature gates and release state.": "放置和战斗系统由服务器授权。离线和后台进度行为遵循活动功能门和发布状态。",
    "Is combat fully manual or automated?": "战斗是完全手动还是自动化的？",
    "Is MMIdle free to play?": "MMIdle可以免费玩吗？",
    "Members": "成员",
    "Message": "消息",
    "MMIdle Alpha V0.1.0: The Journey Begins": "MMIdle Alpha V0.1.0：旅程启程",
    "MMIdle Community Forums": "MMIdle社区论坛",
    "Need More Detail?": "需要更多详情？",
    "No threads yet in this category.": "此类别中暂无帖子。",
    "notes and gameplay release updates.": "笔记和游戏玩法更新发布。",
    "Official MMIdle news and patch notes.": "官方MMIdle新闻和补丁说明。",
    "Quick Answers": "快速解答",
    "Read Full Entry": "阅读完整内容",
    "Read Patch Notes": "阅读补丁说明",
    "Read Team Blog": "阅读团队博客",
    "Release Feed": "发布源",
    "Share feedback, report issues, discuss balance, and shape upcoming features with the same account you use in-game.": "使用您在游戏中使用的同一账户分享反馈、报告问题、讨论平衡性，以及规划即将推出的功能。",
    "This page covers the current alpha state. As systems expand, these answers will be updated with each release cycle.": "本页内容涵盖了当前的alpha版本状态。随着系统的扩展，这些答案将在每个发布周期进行更新。",
    "thread": "帖子",
    "Website Patch Notes": "网站补丁说明",
    "What is next on the roadmap?": "路线图上的下一步是什么？",
    "Yes. MMIdle is free to play, with core progression available to all players during alpha.": "是的。MMIdle是免费游玩的，在alpha测试期间，所有玩家都可以进行核心进度游戏。",
    "Yes. Your sign-in identity is shared across website and game services, including account settings continuity.": "是的。您的登录身份在网站和游戏服务之间是共享的，包括账户设置的连续性。",
    "No blog posts published yet.": "目前还没有发布任何博客文章。",
    "Separate from gameplay patch notes. This is where we share roadmap context, community posts, and broader updates from the team.": "与游戏玩法的更新说明分开来看。这里我们会分享路线图的相关信息、社区动态以及团队发布的更多更新内容。",
    "Studio blog, announcements, and dev notes": "工作室博客、公告以及开发日志",
    "Profile saved.": "个人资料已保存.",
    "Saving...": "保存中...",
    "Closed Alpha": "封闭测试版",
    "Main Site": "主站点",
    "Season 0 · Alpha": "第 0 赛季 · 测试版",
    "Sign in first, then apply for alpha or redeem an access code.": "首先请登录，然后申请参与测试版或使用访问码获取权限。",
    "The realm is currently open to invited testers only. We're expanding access as the game stabilizes.": "目前该服务器仅对受邀测试人员开放。随着游戏的稳定运行，我们正在逐步扩大访问权限。",
    "Enter Realm": "进入领域",
    "Forgot Password": "忘记密码",
    "Need an Identity?": "需要一个身份？",
    "Remember my soul": "记住我的灵魂",
    "Resend Confirmation": "重新发送确认",
    "Welcome back, adventurer.": "欢迎归来，勇敢的探险者。",
    "ign out": "登出",
    "Your Account": "你的账户",
    "Your account doesn't have alpha access yet. Join our Discord to request an invite or follow updates.": "您的账户目前尚未获得 alpha 版本的访问权限。请加入我们的 Discord 平台，以申请邀请码或关注相关更新信息。",
    ". This keeps account actions and moderation traceable.": "。这保持了帐户操作和管理的可跟踪性。",
    "Apply for Access": "申请访问权限",
    "Discord Link Required": "需要关联Discord账户",
    "Link Discord": "链接到Discord",
    "submit an alpha application": "提交内测申请",
    "Tell us about yourself and why you'd like to test MMIdle.": "请向我们介绍自己以及您为何想要测试 MMIdle。",
    "You must link Discord before you can": "您必须先链接 Discord 才能进行操作。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "💬 Discord": "💬 Discord",
    "@gityx": "@gityx",
    "likexiazai@qq.com": "likexiazai@qq.com",
    "likexiazai": "likexiazai",
    "@likexiazai": "@likexiazai",
    "© 2026 MMIdle · Zombie Digital": "© 2026 MMIdle · Zombie Digital",
    "Play MMIdle": "玩 MM放置",
    "FAQ": "FAQ/问答",
    "MMIdle": "MM放置",
    "MMIDLE": "MM放置",
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
    "◂": "◂",
    "▼": "▼",
    "▲": "▲",
    "🚪": "🚪",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "Patch ": "补丁 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分钟 $2秒'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\+([\d\.,]+) elves$/, '+$1 精灵'],
    [/^\-([\d\.,]+) elves$/, '-$1 精灵'],
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