// ==UserScript==
// @name         Development Hell Game 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Development Hell Game (https://developmenthellgame.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Development Hell Game.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://developmenthellgame.com/assets/logo/BUGFUEGOFINAL64.png
// @license      MIT
// @include      *https://developmenthellgame.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/development-hell-game-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/development-hell-game-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2026/02/27 15:57
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
    "E-mail": "邮箱",
    "Company": "公司",
    "I understand": "我知道了",
    "Internet": "网络",
    "Loading Development Hell...": "正在加载 开发地狱...",
    "Privacy Policy": "隐私政策",
    "Projects": "项目",
    "Version history": "版本历史",
    "We use local storage to save your progress. Read our": "我们使用本地存储来保存您的进度。请阅读我们的说明。",
    "To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.": "要选取可拖动的项目，请按空格键。\n在拖动过程中，使用方向键来移动该项目。\n再次按空格键将项目放置到其新位置，或者按 Escape 键取消操作。",
    "": "",
    "Buy equipment for your employees!": "为你的员工购买设备！",
    "Home screen": "主屏幕",
    "Equipment Store": "设备商店",
    "Contracts": "合同",
    "Employee hiring limit:": "员工招聘上限：",
    "Employees": "员工",
    "Inventory": "库存",
    "Level up": "升级",
    "Your Company": "你的公司",
    "Achievements unlocked:": "已解锁成就:",
    "Common": "普通",
    "Active contracts:": "活跃合同:",
    "It went so fast.": "时间过得如此之快。",
    "Locked": "未解锁",
    "Pass one year in game time.": "游戏内时间超过一年。",
    "Unlocked": "已解锁",
    "You don't have any accepted contracts yet.": "您目前还没有任何活跃的合同。",
    "To accept contracts go to Email": "如需接受合同，请点击“邮箱”选项。",
    "Email  => Contracts": "邮箱  => 合同",
    "You don't have any projects at the moment. To have a project you need to accept a contract at:": "您目前没有任何项目。要有一个项目，你需要在接受一个合同在：",
    "Emails": "邮件",
    "All Emails": "所有邮件",
    "Adapt layout for mobile and desktop.": "为移动端和桌面端调整布局。",
    "Add a basic pageview counter.": "添加基本的页面浏览计数器。",
    "Add a chat widget to the website.": "在网站上添加聊天工具。",
    "Add a form with basic validation.": "添加带有基本验证功能的表单。",
    "Add alt text and basic contrast.": "添加替代文本和基本对比度。",
    "Add simple transitions between screens.": "添加屏幕之间的简单过渡效果。",
    "Alva Industries": "阿尔瓦工业公司",
    "Aperture Labs": "阿普尔实验室",
    "Belfort & Partners": "贝尔福特与合伙人公司",
    "Company Bernardelli": "伯纳德利公司",
    "Configure a basic database with tables.": "配置一个包含表单的基本数据库。",
    "Create a blog with posts and categories.": "创建一个带有帖子和分类的博客。",
    "Create a document with standard colors and typography.": "创建一个具有标准颜色和排版的文档。",
    "Create a feed of posts with likes and comments.": "创建一个带有点赞和评论的帖子列表。",
    "Create a presentation website for a client.": "为客户提供一个演示文稿网站。",
    "Create a product catalog with shopping cart.": "创建一个带有购物车的产品目录。",
    "Dunder Solutions": "杜德解决方案公司",
    "Durden & Associates": "杜登与联合公司",
    "Founder": "创始人",
    "Gekko Capital": "盖科资本",
    "Heisenberg Solutions": "海森堡解决方案公司",
    "Implement basic chat with WebSocket.": "实施基于 WebSocket 的基本聊天功能。",
    "Implement basic login and password system.": "实现基本登录和密码系统。",
    "Implement basic notification system.": "实现基本通知系统。",
    "LexCorp": "莱克斯科公司",
    "Mega Shock": "麦格斯冲击",
    "Morpheus Technologies": "墨菲斯技术公司",
    "NewBrains": "新大脑公司",
    "OsCorp Industries": "奥斯科工业公司",
    "Piper Technologies": "派珀技术公司",
    "Pollos Digitales": "波洛斯数字公司",
    "Sanchez Enterprises": "桑切斯企业公司",
    "Separate monolithic code into independent modules.": "将单一的代码分离为独立的模块。",
    "Skywalker Systems": "天行者系统公司",
    "Stark Innovations": "斯塔克创新公司",
    "Trinity Consulting": "圣三一咨询公司",
    "Tyrell Corporation": "泰瑞尔公司",
    "Wayne Enterprises": "韦恩企业公司",
    "Welcome, I'll tell you more about your company": "欢迎您，我将为您详细介绍您的公司",
    "WenneW": "温尼·温纳斯",
    "Wonkers Wonka": "温纳克斯·沃纳卡",
    "Zion Systems": "锡安系统公司",
    "Change company name": "修改公司名称",
    "Doubles": "翻倍",
    "Doubles the": "翻倍",
    "EN-US": "英文",
    "Enables proposals": "启用提议",
    "Enter your company name": "输入您的公司名称",
    "Export save": "导出保存",
    "Import save": "导入保存",
    "Level": "等级",
    "more": "更多",
    "more reputation when completing contract.": "当完成合同时更多的声誉。",
    "OK": "好的",
    "Points": "点数",
    "Points for the next level": "下一级所需的点数",
    "PT-BR": "巴西葡萄牙语",
    "Reputation": "声誉",
    "Reset game": "重置游戏保存游戏状态",
    "Save game": "保存游戏",
    "the amount of points.": "点数的数量。",
    "Back": "返回",
    "Hey boss, I finally got my permanent vacation after years of grinding.\n\nI see you're starting a company. I passed your contact to some clients I know, work proposals should arrive anytime. Accept them and go to PROJECTS to see the work.\n\nOh, and in the beginning you're broke right? So it'll be you typing. Alone. Don't worry, it's not that bad... just kidding, it's horrible.\n\nBut it's temporary. I think.\n\nGood luck champ": "嘿，老板，经过多年的努力，我终于获得了永久假期。\n\n我看到你正在创办一家公司。我已经把你的一些联系方式给了我认识的客户，工作提案随时都会到。接受它们，然后去“项目”页面查看工作。\n\n哦，一开始你肯定很穷，对吧？所以你会一个人打字。别担心，没那么糟糕……开玩笑的，其实很可怕。\n\n但我想这只是暂时的。\n\n祝你好运，冠军",
    "ACCEPT CONTRACT": "接受合同",
    "Accept your first contract": "接受您的第一份合同",
    "Active contracts limit reached": "当前合约数量已达上限",
    "Complexity": "复杂性",
    "Deadline": "截止日期",
    "Deadline:": "截止日期:",
    "Good morning boss": "早上好，老板",
    "I can do this one.": "我可以做这个。",
    "Interfaces": "接口",
    "Level up to Level": "升级到等级",
    "Level up your company to accept more contracts.": "升级你的公司，接受更多的合同。",
    "Modular Refactoring": "模块化重构",
    "New achievement!": "新成就!",
    "Not enough money": "资金不足",
    "Real-time Chat": "实时聊天",
    "REQUIRED AREAS:": "所需领域：",
    "The contract details are attached.": "合同详情已附上。",
    "You don't have enough money.": "你没有足够的钱。",
    "Test": "测试",
    "XP": "经验值",
    "Wrong!": "错误!",
    "Rehire for 3 months": "重新聘用3个月",
    "Rehire": "重新聘用",
    "Lv.": "等级",
    "PAUSE": "暂停",
    "Perfect!": "完美!",
    "pts": "点数",
    "Requirements": "要求",
    "Great job, you managed to complete your first contract, and you delivered perfectly to the client, quite an achievement.\n\nBut look, you need to make money work for you, hire some employees. They always send resumes thinking we'll hire them... well sometimes we do. And then they can become our own slav... I mean, our well-paid employees right?\n\nThey even enjoy working and doing the boring parts. Just be careful, if you get a bad employee... you should fire them for making too many mistakes on projects.\n\nWhen you hire an employee, an icon will appear on the right side of the PROJECTS program, click on it and drag employees to the area they're good at. That way you won't have to type so much.\n\nGood luck master!!": "干得好，你成功完成了第一份合同，并且完美地交付给了客户，这真是一项了不起的成就。\n\n但是，听着，你需要让钱为你所用，雇佣一些员工。他们总是寄来简历，以为我们会雇佣他们……好吧，有时候我们确实会。然后他们就可以成为我们自己的奴隶……我是说，成为我们高薪的员工，对吧？\n\n他们甚至喜欢工作，喜欢做那些枯燥的部分。但要小心，如果你遇到一个糟糕的员工……你应该因为他们在项目上犯太多错误而解雇他们。\n\n当你雇佣一个员工时，项目程序的右侧会出现一个图标，点击它，然后将员工拖到他们擅长的区域。这样你就不用打那么多字了。\n\n祝你好运，大师！！",
    "Errors": "错误",
    "End": "结束",
    "COMBO": "连击",
    "Cancel": "取消",
    "Copy": "复制",
    "Copiado!": "已复制!",
    "Export Save": "导出存档",
    "Import Save": "导入存档",
    "I need work.": "我需要工作。",
    "Addicted to memes, references no one understands.": "沉迷于那些无人能懂的梗图和引用内容。",
    "Architecture": "架构",
    "Attributes": "属性",
    "Basic E-commerce": "电子商务基础",
    "Be more careful next time.": "下次要更加小心。",
    "Better than not delivering.": "总比不交付要好。",
    "Complete a project with less than a day left to expire.": "在只剩不到一天的时间还未到期的情况下完成一个项目。",
    "Complexity:": "复杂性:",
    "Conclude Project": "项目收尾",
    "Creates imaginary scenarios in their head, thinks they like working.": "在脑海中构想各种情景，认为自己喜欢这种工作方式。",
    "Design": "设计",
    "Develop": "开发",
    "Earned from project completion!": "从项目完成中获得！",
    "Employees unlocked!": "员工解锁成功！",
    "Extend": "延长",
    "Extend for 3 months": "延长3个月",
    "Finalize Project": "完成项目",
    "Flexible, unemployed for half a year.": "灵活，失业半年。",
    "Forget": "忘记",
    "Forget employee.": "忘记员工。",
    "Gaby Lee": "加布·李",
    "Great job! I see you completed your first contract": "干得好！我看你完成了第一份合同",
    "Hire employees": "雇佣员工",
    "Hire your first employee.": "雇用你的第一个员工",
    "Horrible": "太可怕了",
    "I knew you were the right person for this": "我就知道你是合适的人选",
    "Junior": "初级",
    "Maintainability": "可维护性",
    "Never eats lunch on time, likes water.": "从来不按时吃午饭，喜欢喝水。",
    "PLAY": "继续",
    "Project Concluded": "项目结束",
    "Promote": "晋级",
    "Promote the employee to the next seniority level": "将员工提升到下一个资历等级",
    "Reduces project maintainability at the start": "从一开始就降低项目的可维护性",
    "Rehire": "重新雇用",
    "Revoke": "撤销",
    "Revoke employee to history.": "取消员工的历史。",
    "Rosa Johnson": "罗莎·约翰逊",
    "Rosa Zulu": "罗莎·祖鲁",
    "Support Chat": "支持聊天",
    "Technology": "技术",
    "They come and go.": "他们来了又走。",
    "To hire one go to Email → Candidates → Hire an employee": "要雇佣员工，请前往“电子邮件”→“候选人”→“雇用员工”进行操作。",
    "To promote the employee meet the requirements below": "要晋升员工，请满足以下要求：",
    "Type or click!": "输入或点击！",
    "You can now hire employees for your company.": "现在您可以为您的公司招聘员工了。",
    "You don't have any employees yet.": "您目前还没有员工。",
    "Arrives early to avoid people, doesn't like eye contact.": "提前到达以避开人群，不喜欢眼神接触。",
    "Aurora Ramos": "奥罗拉·拉莫斯",
    "Benjamin Chen": "本杰明·陈",
    "Display basic metrics in charts.": "在图表中展示基本指标。",
    "Eden Hernandez": "埃登·赫尔南德斯",
    "Former FAANGue employee.": "前“FAANG”公司员工。",
    "I arrive late but make up for it by leaving early.": "我迟到但会提前离开来弥补。",
    "I promise not to sleep at work.": "我保证不在工作时睡觉。",
    "I work in a team as long as nobody bothers me.": "只要没人打扰，我就愿意和团队一起工作。",
    "Implement simple in-memory cache.": "实现简单的内存缓存。",
    "Project Expired": "项目已过期",
    "Rosa Lee": "罗莎·李",
    "Sara Hernandez": "萨拉·赫尔南德斯",
    "Senior": "高级",
    "Sleeps at the office, the ideal employee.": "在办公室睡觉，堪称理想员工。",
    "Área de Foco:": "重点区域：",
    "Arquitetura": "建筑学",
    "Basic Cache": "基础缓存",
    "Chance of greater production": "更高的生产几率",
    "Chance of the employee producing points for that area.": "员工在该地区生产点数的机会。",
    "Chance to fix": "修复几率",
    "Create basic CRUD endpoints.": "创建基本的 CRUD 端点。",
    "Employee level": "员工等级",
    "Employee's knowledge about the project. Currently with -% per second": "员工对项目的了解程度。当前为-%每秒",
    "Finds bugs in real life, but only fixes the project one.": "在现实生活中发现错误，但只修复项目中的错误。",
    "Giulia Santos": "朱莉娅·桑托斯",
    "Gross insect on your screen?": "屏幕上有什么bug吗？",
    "Hello, I'm looking for a position at your company.": "您好，我想在贵公司找一份工作。",
    "Improvises everything always, somehow always delivers.": "总是随机应变，总能顺利完成任务。",
    "Increases the chance of fixing errors.": "提高修复错误的几率。",
    "Increases the chances of larger points being generated.": "提高产生更多积分的几率。",
    "Interface": "接口",
    "Invader": "入侵者",
    "Kill your first bug": "杀死你的第一个bug",
    "Maximize": "最大化",
    "Production Chance": "生产概率",
    "Project Knowledge": "项目知识",
    "Simple Dashboard": "简易仪表盘",
    "Simple Database": "简易数据库",
    "Accessibility Adjustments": "无障碍性调整",
    "Elliot Lopez": "埃利奥特·洛佩兹",
    "Hire more employees in Email → Candidates": "在“电子邮件”模块中增加更多员工选项 → 招聘候选人",
    "I work well under pressure.": "我在压力下也能出色完成工作。",
    "Lisa Hernandez": "丽莎·赫尔南德斯",
    "No employees available for projects.": "目前没有员工可用于项目工作。",
    "A... bug?!": "一个……bug ? !",
    "Basic Animations": "基础动画",
    "Company inventory unlocked!": "公司库存已解锁！",
    "Congrats on reaching level 5 at your company": "恭喜你达到了公司的第五级",
    "Employee limit reached": "员工人数已满",
    "Level up your company to hire more employees.": "提升您公司的等级以雇佣更多员工。",
    "Login System": "登录系统",
    "Only learns here.": "仅在此处学习。",
    "Page Creation": "页面创建",
    "Query API": "查询 API",
    "Responsive Layout": "响应式布局",
    "Social Feed": "社交动态",
    "Style Guide": "风格指南",
    "Welcome back, son.": "欢迎回来，孩子。",
    "You can now equip your employees with equipment.": "你现在可以给你的员工设备设备了。",
    "Chair": "椅子",
    "Buy": "购买",
    "Calculator Keyboard": "计算器键盘",
    "Buy equipment to improve your employees' productivity": "购买设备以提高员工的工作效率",
    "Complete or expire a project with an F grade.": "完成或终止一个F级的项目。",
    "Complete your first project": "完成你的第一个项目。",
    "Device": "设备",
    "Have a project expire.": "有一个项目过期。",
    "I have revoked an employee's.": "我撤销了一名员工的。",
    "Keyboard": "键盘",
    "Make an employee increase their level in the area.": "帮助员工提升所在领域的技能水平。",
    "Mastering the basics.": "掌握基础知识。",
    "Monitor": "监控器",
    "Natural manager": "自然型管理者",
    "Next update in": "距离下次更新还有",
    "No second chance.": "没有第二次机会了。",
    "Rehire an employee": "重新雇用一名员工",
    "Sapient": "智慧型",
    "Stolen from the accountant downstairs. He won't miss it... probably.": "是从楼下的会计那里偷来的。他应该不会在意的……大概不会。",
    "A relic from the 1940s. Every key press echoes like a gunshot. Your neighbors hate you.": "这是 20 世纪 40 年代遗留下来的东西。每次按键都会发出类似枪声的声响。你的邻居们都讨厌你。",
    "Beach Chair": "沙滩椅",
    "Clara Rodriguez": "克拉拉·罗德里格斯",
    "CRT Monitor": "CRT显示器",
    "Elen Ivanov": "埃伦·伊万诺夫",
    "Flea Market Device": "跳蚤市场设备",
    "Giulia Ramos": "朱莉娅·拉莫斯",
    "Interface beginner.": "界面初学者。",
    "Notification System": "通知系统",
    "Obsolete Device": "过时设备",
    "Plastic Chair": "塑料椅子",
    "Profitable.": "有利可图。",
    "Reinvestment.": "再投资。",
    "Sell Item": "出售物品",
    "Square Monitor": "方形显示器",
    "Stolen from the cafeteria. There's still gum under the seat.": "从餐厅偷来的。座位下面还有口香糖。",
    "Typewriter Keyboard": "打字机键盘",
    "Congratulations on reaching level 5 at your company! It may seem like a little, but everything big starts this way. I'll take advantage of this level to introduce you to your company's inventory system.\n\nYour employees won't need to improvise equipment from home or steal from the company next door anymore. You can distribute equipment for them to work better and optimize their skills.\n\nThis way, your slav... I mean... employees will perform much better on projects and increase capital gains.\nTo see equipment for purchase just go to INTERNET => EQUIPMENT STORE. To equip, just go to company where there will be a button to open the company inventory and assign equipment to your favorite employees.": "恭喜你在公司达到了第 5 级！这看似只是一个小成就，但一切伟大的事情都是从这里开始的。我将利用这个等级来向你介绍公司的库存管理系统。\n\n你的员工将不再需要从家里临时拼凑设备或者从隔壁公司偷取设备了。你可以为他们分配合适的设备，以使他们工作得更高效，并优化他们的技能。\n\n这样一来，你的奴隶……我的意思是……员工们在项目中的表现会更加出色，并且还能增加收益。要查看可购买的设备，请前往互联网 => 设备商店。要进行设备配置，只需进入公司页面，那里会有一个按钮可以打开公司库存，并将设备分配给您指定的员工。",
    "It seems you found a... it's a bug. I remember it well — when they installed the software on my machine, it used to show up. The strange thing is it was never fixed to this day.\n\nDon't worry: it's harmless. It can be annoying to see it walking around the screen, but the money it gives when clicked is simply wonderful for business.\n\nDon't try to fix it — it always comes back. Just click the bug when it appears and enjoy the extra money for your company.": "看起来你发现了一个……这是一个漏洞。我记得很清楚——当他们把软件安装到我的电脑上时，它曾经会出现的。奇怪的是，这个问题至今都没有得到解决。\n\n别担心：它没有恶意。看到它在屏幕上四处移动可能会让人感到厌烦，但点击它时所获得的收益对生意来说实在是太好了。\n\n不要试图去修复它——它总是会再次出现的。只要当它出现时点击这个漏洞，就能为你的公司获得额外的收益了。",
    "Company growing!": "公司正在发展壮大！",
    "Technology beginner.": "技术新手。",
    "Visit Counter": "访问计数器",
    "What if it works?": "要是成功了会怎样？",
    ")pts": ")点数",
    "1024x768 resolution. Fits one window at a time. Two if you squeeze.": "1024x768 分辨率。一次只能容纳一个窗口。如果挤一挤还能容纳两个。",
    "Attractive page creation": "美观的页面设计",
    "Aurora Souza": "奥拉多·索萨",
    "Basic login registration system": "基本登录注册系统",
    "Contact Form": "联络表格",
    "Corporate Device": "企业设备",
    "Create a smooth authentication experience with user registration and security.": "通过用户注册和安全设置提供流畅的认证体验。",
    "Create an assistant that understands context and personality.": "创建一个能理解情境和个性的助手。",
    "Create an eye-catching website for multiple users.": "为多个用户提供引人注目的网站。",
    "Create notification system.": "创建通知系统。",
    "Easier than earning.": "比获取报酬更简单。",
    "Enough to run what's necessary.": "足以运行必要的功能。",
    "Full HD Monitor": "全高清显示器",
    "Gabriel Wilson": "加布里埃尔·威尔逊",
    "Gaming Chair": "游戏椅",
    "Generic Office Chair": "普通办公椅",
    "I'll take anything, I'm desperate.": "我什么都愿意买，实在没办法了。",
    "Notification center.": "通知中心。",
    "Personal Blog": "个人博客",
    "QWERTY Keyboard": "QWERTY 键盘",
    "Red, black, with more reclining than you'll ever use. Looks like a cockpit. Performs the same.": "红色、黑色，可调节角度比你实际使用所需的还要多。看起来像个驾驶舱。功能却完全一样。",
    "Rosa Gomez": "罗莎·戈麦斯",
    "Sholes swore no one would type faster than they could write by hand. Your employees will prove him wrong.": "肖尔斯坚信没有人能比他们手写的速度更快地打字。你的员工会证明他错了。",
    "Sleeps 4 hours per night for 6 nights.": "每晚睡 4 小时，持续 6 天。",
    "Sofia Liu": "索菲亚·刘",
    "Street vendors love selling these.": "街头小贩喜欢售卖这种产品。",
    "Tom Suzuki": "汤姆·铃木",
    "Virtual Assistant": "我们都会犯错。",
    "We all make mistakes.": "我们都会犯错。",
    "Weak": "弱",
    "Wears headphones all day, communicates by staring.": "整天戴着耳机，通过眼神交流来沟通。",
    "Work rectifies": "工作得以完成",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "D+": "D+",
    "S+": "S+",
    "store.com": "store.com",
    "EN US": "英语",
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
    "−": "−",
    "□": "□",
    "×": "×",
    "✕": "✕",
    "🧰": "🧰",
    "❓": "❓",
    "📅": "📅",
    "◱": "◱",
    "✓": "✓",
    "🗑️": "🗑️",
    "?": "?",
    "←": "←",
    "✅": "✅",
    "⏳": "⏳",
    "○": "○",
    "❌": "❌",
    "👤": "👤",
    "👥": "👥",
    "💻": "💻",
    "📤": "📤",
    "⏰": "⏰",
    "🐞": "🐞",
    "📚": "📚",
    "🔄": "🔄",
    "⚒️": "⚒️",
    "🎓": "🎓",
    "🧠": "🧠",
    "💰": "💰",
    "💸": "💸",
    "🖥️": "🖥️",
    "🔧": "🔧",
    "🤑": "🤑",
    "🐛": "🐛",
    "💳": "💳",
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
    "Employee extended: ": "员工扩展：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    " levels of Level:": " 级:",
    " months in company": " 个月在公司",
    " completed projects": " 完成的项目",
    " increased contract duration by 3 months.": " 合同期限延长了3个月。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^\+\$([\d\.,]+)$/,
    /^\-\$([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^\/ ([\d\.,]+)$/,
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
    [/^Picked up draggable item (.+)employee.$/, '拖起可拖动物品 $1员工。'],
    [/^Picked up draggable item item_keyboard_lv(.+)item.$/, '拖起可拖动物品 物品_键盘_等级$1@物品。'],
    [/^Picked up draggable item item_chair_lv(.+)item.$/, '拖起可拖动物品 物品_椅子_等级$1@物品。'],
    [/^Picked up draggable item item_device_lv(.+)item.$/, '拖起可拖动物品 物品_设备_等级$1@物品。'],
    [/^Draggable item (.+)employee was dropped.$/, '可拖动项目 $1员工已被放下。'],
    [/^Draggable item (.+)employee is no longer over a droppable area.$/, '可拖动项目 $1员工 已经不在可拖放区域。'],
    [/^Draggable item item_chair_lv(.+)item is no longer over a droppable area.$/, '可拖动项目 物品_椅子_等级$1@物品 已经不在可拖放区域。'],
    [/^Draggable item item_device_lv(.+)item is no longer over a droppable area.$/, '可拖动项目 物品_设备_等级$1@物品 已经不在可拖放区域。'],
    [/^Draggable item item_keyboard_lv(.+)item is no longer over a droppable area.$/, '可拖动项目 物品_键盘_等级$1@物品 已经不在可拖放区域。'],
    [/^Draggable item (.+)employee was moved over droppable area (.+).$/, '可拖动项目 $1员工 移动到了可拖放区域 $2。'],
    [/^Draggable item (.+)employee was dropped over droppable area (.+).$/, '可拖动项目 $1员工 被放置在可拖放区域 $2。'],
    [/^Draggable item item_chair_lv(.+)item was dropped over droppable area (.+).$/, '可拖动项目 物品_椅子_等级$1@物品 被放置在可拖放区域 $2。'],
    [/^Draggable item item_keyboard_lv(.+)item was dropped over droppable area (.+).$/, '可拖动项目 物品_键盘_等级$1@物品 被放置在可拖放区域 $2。'],
    [/^Draggable item item_device_lv(.+)item was dropped over droppable area (.+).$/, '可拖动项目 物品_设备_等级$1@物品 被放置在可拖放区域 $2。'],
    [/^Draggable item item_chair_lv(.+)item was moved over droppable area (.+).$/, '可拖动项目 物品_椅子_等级$1@物品 移动到了可拖放区域 $2。'],
    [/^Draggable item item_keyboard_lv(.+)item was moved over droppable area (.+).$/, '可拖动项目 物品_键盘_等级$1@物品 移动到了可拖放区域 $2。'],
    [/^Draggable item item_device_lv(.+)item was moved over droppable area (.+).$/, '可拖动项目 物品_设备_等级$1@物品 移动到了可拖放区域 $2。'],
    [/^Remaining time: (.+) Month and (.+) Days\n\nTotal in hours: (.+)h\nTotal in days: (.+) Days\nTotal in months: (.+) Months$/, '剩余时间：$1 个月 $2 天\n\n总小时数：$3 小时\n总天数：$4 天\n总月份：$5 个月'],
    [/^Remaining time: (.+) Days and (.+) Hours\n\nTotal in hours: (.+)h\nTotal in days: (.+) Days$/, '剩余时间：$1 天 $2 小时\n\n总小时数：$3 小时\n总天数：$4 天'],
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
    [/^([\d\.,]+) Months$/, '$1 月'],
    [/^([\d\.,]+) Month$/, '$1 月'],
    [/^([\d\.,]+) Days$/, '$1 天'],
    [/^([\d\.,]+) Day$/, '$1 天'],
    [/^([\d\.,]+) Hour$/, '$1 小时'],
    [/^([\d\.,]+) Hours$/, '$1 小时'],
    [/^([\d\.,]+) Days and ([\d\.,]+) Hours$/, '$1 天 $2 小时'],
    [/^([\d\.,]+) Days and ([\d\.,]+) Hour$/, '$1 天 $2 小时'],
    [/^([\d\.,]+) Day and ([\d\.,]+) Hours$/, '$1 天 $2 小时'],
    [/^([\d\.,]+) Day and ([\d\.,]+) Hour$/, '$1 天 $2 小时'],
    [/^([\d\.,]+) Month and ([\d\.,]+) Days$/, '$1 月 $2 天'],
    [/^([\d\.,]+) Months and ([\d\.,]+) Days$/, '$1 月 $2 天'],
    [/^([\d\.,]+) Month and ([\d\.,]+) Day$/, '$1 月 $2 天'],
    [/^([\d\.,]+) Months and ([\d\.,]+) Day$/, '$1 月 $2 天'],
    [/^([\d\.,]+) pts$/, '$1 点数'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+)pts$/, '$1 点数'],
    [/^\+([\d\.,]+) elves$/, '+$1 精灵'],
    [/^\+ ([\d\.,]+) Project slot$/, '+$1 项目槽位'],
    [/^\+ ([\d\.,]+) Employee slot$/, '+$1 员工槽位'],
    [/^\-([\d\.,]+) elves$/, '-$1 精灵'],
    [/^Employee Number ([\d\.,]+)$/, '员工编号 $1'],
    [/^Make ([\d\.,]+) interface points.$/, '创造 $1 接口点。'],
    [/^Make ([\d\.,]+) technology points.$/, '创造 $1 技术点。'],
    [/^Complete ([\d\.,]+) projects$/, '完成 $1 项目'],
    [/^Complete ([\d\.,]+) Tier I contracts$/, '完成 $1 层级 I 合同'],
    [/^Complete ([\d\.,]+) projects with S\+ grade$/, '完成 $1 S+ 项目'],
    [/^Have earned (.+) money.$/, '赚了 $1 钱。'],
    [/^Have spent (.+) money.$/, '花了 $1 钱。'],
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