// ==UserScript==
// @name         futurefortune-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.34
// @description  Idle Quest RPG (https://futurefortune.io/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://futurefortune.io/*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/futurefortune-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/futurefortune-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2024/09/18 20:21
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
    "Buy": "购买",
    "Coming Soon!": "敬请期待！",
    "Here is a summary of what you gained:": "以下是你所获得的总结:",
    "Industry": "行业",
    "Locked": "未解锁",
    "offline for": "离线了",
    "Oh look, your first prestige! Prestiging industries gives a boost to\n    production and speed of resources in that industry. You should prestige now.": "快看，你的第一次声望! 久负盛名的行业可以提高该行业的产量和资源速度。你现在应该进行声望了。",
    "Prestige": "声望",
    "Prestiges": "声望",
    "Produced": "生产",
    "Shop": "商店",
    "Stats": "统计",
    "Survival": "生存",
    "Upgrade": "升级",
    "Welcome Back!": "欢迎回来！",
    "You were": "你",
    "Bonuses": "奖励",
    "Do not require confirmation for this action from now on": "从现在开始不需要确认这个动作吗",
    "Nevermind": "算了",
    "Prestige Bonuses": "声望奖励",
    "Prestiging an industry resets the industry and all resources in it back to zero and grants a bonus to unlocked resources in that industry.": "对某一行业施加压力会将该行业及其所有资源重置为零，并为该行业中未解锁的资源提供奖励。",
    "Survival Prestige": "生存声望",
    "Would you like to continue?": "您要继续吗?",
    "Yes!": "是！",
    "Survival": "生存",
    "Claim Industries": "领取行业",
    "Claim Milestone": "领取里程碑",
    "Earn global multiplier boosters by completing the global milestones below. Global multipliers effect all industries.": "通过完成下面的全球里程碑获得全局乘数助推器。全局乘数效果影响所有行业。",
    "Earn industry multiplier boosters by completing the industry milestones below. Switch between industries using the industry tabs.": "通过完成以下行业里程碑获得行业乘数助推器。使用 行业 选项卡在行业之间切换。",
    "Global": "全局",
    "Global Milestones": "全局里程碑",
    "Industries": "行业",
    "Innovation Points": "创新点",
    "Innovation": "创新",
    "Innovations": "创新",
    "Resources": "资源",
    "Survival": "生存",
    "Total Boosters Earned": "获得的助推器总数",
    "Total Earned": "累计获得",
    "Fire": "火",
    "Account": "账号",
    "Confirmation Toggles": "确认开关",
    "Email": "邮箱",
    "Game Settings": "游戏设置",
    "Hard Reset": "硬重置",
    "Logout": "登出",
    "Leave Feedback": "留下反馈",
    "Manage Save": "管理存档",
    "Number Formatting": "数值格式",
    "Report a Bug": "报告Bug",
    "Smart Max All": "智能全部最大",
    "Suggestions": "建议",
    "The game auto-saves every 60 seconds.": "游戏每60秒自动保存一次。",
    "View Changelog": "查看更新日志",
    "View Hotkeys": "查看快捷键",
    "Total Prestiges": "声望总次数",
    "Total Produces": "生产总数",
    "Total Amount Earned": "赚取的金额总数",
    "Total Innovations": "创新总数",
    "Total Innovation Points Earned": "获得的创新点总数",
    "Innovation Points Earned": "获得的创新点",
    "Total IP Earned": "获得的IP总数",
    "Total Milestones Completed": "里程碑完成总数",
    "Total Time Played": "总计游戏时长",
    "Time in Current Innovation": "当前创新用时",
    "survival": "生存",
    "Start Date": "开始日期",
    "Most Prestiges in a Single Innovation": "在单次创新中进行的最多声望",
    "Most Innovations in a Single Ascension": "在单次转生中的最多创新",
    "Most IP in a Single Ascension": "在单次转生中的最多创新点",
    "Highest Amount": "最高金额",
    "Highest Amount Earned": "赚取的最高金额",
    "Highest Manual Purchases": "最高的手动购买",
    "General": "常规",
    "Game Statisitics": "游戏统计",
    "Boosters": "助推器",
    "Claim Global": "领取全局",
    "Claim All Global": "领取所有全局",
    "Claim All Rewards": "领取所有奖励",
    "Boosters Earned": "获得的助推器",
    "Common": "普通",
    "Discount Factor": "折扣率",
    "Output Multiplier": "产出乘数",
    "Scope": "范围",
    "Speed Multiplier": "速度乘数",
    "Open the boosters panel to view all the amazing boosters you have\n    earned from completing milestones.": "打开助推器面板，查看所有从完成里程碑获得的，令人惊叹的助推器。",
    "Increases the output multiplier of the specified scope. Output multipliers from all scopes multiply together.": "增加指定范围的产出乘数。所有范围的产出倍率相乘。",
    "Increases the discount of the target. Discounts to global and industries also discount prestiges.": "增加目标的折扣。对全局、行业和声望都有折扣。",
    "Increases the speed multiplier of the target. Speed multipliers from global, industry, and resources multiply together.": "增加目标的速度乘数。来自全局、行业和资源的速度乘数相乘。",
    "Cooking": "烹饪",
    "Claim Resources": "领取资源",
    "Total Owned": "总共拥有",
    "Total Purchases": "总共购买",
    "Gathering": "采集",
    "Booster Legend": "助推器图例",
    "Rarity": "稀有度",
    "Recent": "最近",
    "Remember Filters": "记住过滤器",
    "Reset Filters": "重置过滤器",
    "Search": "搜索",
    "Sort:": "排序:",
    "Total": "总计",
    "Quantity": "数量",
    "Property": "地产",
    "Epic": "史诗",
    "Uncommon": "罕见",
    "Rare": "稀有",
    "Exotic": "奇异",
    "Fabled": "传说",
    "Legendary": "传奇",
    "Mythical": "神话",
    "Divine": "神器",
    "Transcendental": "超越",
    "Return": "返回",
    "cooking": "烹饪",
    "fire": "火",
    "gathering": "采集",
    "idle": "空闲",
    "Resource": "资源",
    "You do not have any boosters with the selected filters.": "所选过滤器没有任何助推器。",
    "Rewards": "奖励",
    "Shop by Category": "商店分类",
    "You Have:": "你有:",
    "Welcome to the Shop": "欢迎来到商店",
    "Time Warps": "时间扭曲",
    "The more gold you purchase, the larger the discount!": "购买的黄金越多，折扣越大!",
    "Switch between categories to see what deals each has to offer!": "在不同类别之间切换，看看每个类别都有什么优惠!",
    "Locked items are unlocked as you unlock new content, so check back when you've progressed further!": "当你解锁新内容时，被锁定的物品也会被解锁，所以当你进一步进展时，请检查一下!",
    "Innovation Start Date": "创新开始日期",
    "Max": "最大",
    "Bundles": "捆绑包",
    "Check back often for new items and deals!": "经常回来查看新的物品和交易!",
    "Get the most out of your gold with our package deals!": "通过我们的套餐交易，最大限度地利用您的黄金!",
    "GoLd Pieces": "金币",
    "Misc.": "杂项",
    "Multipliers": "乘数",
    "Purchase Gold": "购买黄金",
    "Scientific Notation": "科学计数法",
    "Booster Details": "助推器详情",
    "Crit Chance": "暴击率",
    "Crit Multi": "暴击乘数",
    "Discount": "折扣",
    "Prestige Effects": "声望效果",
    "Production": "生产",
    "Produce Amount": "产出数量",
    "Production per Second": "每秒生产",
    "Purchase Cost": "购买成本",
    "Purchase Upgrades": "购买升级",
    "Resource Info": "资源信息",
    "Resource Node": "资源节点",
    "Scope Multipliers": "范围乘数",
    "Speed": "速度",
    "Speed Multi": "速度乘数",
    "Global Production": "全局生产",
    "Global Speed": "全局速度",
    "Industry Production": "行业生产",
    "Industry Speed": "行业速度",
    "Next Upgrade": "下一升级",
    "Production Multi": "生产乘数",
    "Resource Purchases": "资源购买",
    "Upgrade Cost": "升级成本",
    "Upgrade Multiplier": "升级乘数",
    "Upgrade Completed": "已完成升级",
    "Cavalry": "骑兵",
    "Combat": "战斗",
    "Communication": "通信",
    "Education": "教育",
    "Exploration": "探索",
    "Farming": "农业",
    "Fishing": "钓鱼",
    "Hunting": "狩猎",
    "Livestock": "牲畜",
    "Magic": "魔法",
    "Pets": "宠物",
    "Politics": "政治",
    "Trade": "贸易",
    "cavalry": "骑兵",
    "combat": "战斗",
    "communication": "通信",
    "education": "教育",
    "exploration": "探索",
    "farming": "农业",
    "fishing": "钓鱼",
    "hunting": "狩猎",
    "livestock": "牲畜",
    "magic": "魔法",
    "pets": "宠物",
    "politics": "政治",
    "trade": "贸易",
    "Innovate": "创新",
    "Innovation, how neat! Innovating unlocks new industries and new resources\n    to enhance production. Innovations grant a boost to production and speed of\n    all unlocked industries!": "创新，多利落啊!创新催生新产业、新资源，提升产能。创新促进了所有未解锁行业的生产和速度!",
    "Innovation Bonuses": "创新奖励",
    "Innovating resets all industries and resources back to zero and grants a bonus to all unlocked resources.": "创新将所有行业和资源重置为零，并为所有解锁的资源提供奖励。",
    "Spin!": "转!",
    "Global Data": "全局数据",
    "Activate Rewards": "激活奖励",
    "Reward History": "历史奖励",
    "Reward Wheel": "奖励转盘",
    "Available Spins": "可用转动次数",
    "SPIN": "转动",
    "Spin Wheel": "转轮盘",
    "Spin the wheel to gain prizes and speed up your progress!": "旋转转盘获得奖品，加快你的进度!",
    "Date": "日期",
    "Duration": "持续时长",
    "Prize": "奖品",
    "Prize Tier": "奖品层级",
    "Total Spins": "转动总次数",
    "View your reward history below. Only the most recent 10 spins are tracked.": "在下面查看你的奖励历史。只记录最近的10次转动。",
    "Import Save": "导入存档",
    "Paste the save data that you want to import below.": "将要导入的存档数据粘贴到下面框里。",
    "Saved!": "已保存!",
    "Saving": "保存中",
    "Submit": "提交",
    "WARNING: This will overwrite your existing save. If you don't want to lose it, make sure you back it up.": "警告:这将覆盖您现有的存档。如果你不想失去它，确保你备份了它。",
    "Your save has been successfully copied to the clipboard!": "您的存档已成功复制到剪贴板!",
    "Exporting": "导出中",
    "<strong>We're sorry but future-fortune doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>": "<strong>很抱歉，如果没有启用JavaScript, future-fortune将无法正常工作。请启用它以继续游戏。</strong>",
    "Confirm": "确认",
    "Feedback & Suggestions": "反馈 & 建议",
    "Want to leave feedback, report a bug, or provide a suggestion for the game? Simply fill out the form below and hit submit and we will see your comments. Feedback and suggestions are always welcome and highly appreciated!": "想要留下反馈，报告漏洞，或者为游戏提供建议?只需填写下面的表单并点击提交，我们将看到您的评论。反馈和建议总是欢迎和高度赞赏!",
    "Welcome to Future Fortune! Purchase your first resource, \n    Fire, to begin production in the Survival industry.": "欢迎来到未来财富!购买你的第一个资源，\n火，开始在生存行业生产。",
    "Resource Booster": "资源助推器",
    "Cave": "洞穴",
    "cave": "洞穴",
    "Hut": "小屋",
    "hut": "小屋",
    "Property Prestige": "地产声望",
    "% Increase per Second": "% 提升每秒d",
    "Next Innovation": "下一个创新",
    "Next Innovation Points": "下一个创新点",
    "Next Prestige": "下一个声望",
    "Prestige Data": "声望数据",
    "Time in Prestige": "声望时间",
    "Global Speed Multiplier": "全局速度乘数",
    "Your Prize!": "你的奖品！",
    "Activate": "激活",
    "property": "地产",
    "Signup": "注册",
    "to add free gold as a reward.": "添加免费金币作为奖励。",
    "Login": "登录",
    "or": "或",
    "Create an Account": "创建一个账号",
    "Password": "密码",
    "Remember Me": "记住我",
    "Logging in...": "正在登录...",
    "An unkown error occurred while processing the request": "处理请求时发生未知错误",
    "Tipi": "帐篷",
    "SCROLL": "滚动",
    "Game Hotkeys": "游戏快捷键",
    "Description": "描述",
    "Claims all available milestone rewards": "领取所有可领取的里程碑奖励",
    "Closes out of all popup windows": "关闭所有弹出窗口",
    "Max all (only applies to resources that can be upgraded)": "最大全部(仅适用于可以升级的资源)",
    "More hotkeys will appear as you progress and unlock new content.": "随着进度解锁新内容，会出现更多的热键。",
    "Opens boosters panel": "打开助推器面板",
    "Opens global data panel": "打开全局数据面板",
    "Opens hotkeys popup (this popup)": "打开热键弹出窗口(此弹出窗口)",
    "Opens milestones panel": "打开里程碑面板",
    "Opens settings panel": "打开设置面板",
    "Opens stats panel": "打开统计面板",
    "Saves the game (the game auto-saves every 30 seconds)": "保存游戏(游戏每30秒自动保存一次)",
    "Switches between industries": "行业之间的切换",
    "Switches between the resource pages": "在资源页面之间切换",
    "Switches to the next industry.": "转向下一个行业。",
    "Switches to the previous industry.": "切换到上一个行业。",
    "Create Account": "创建账号",
    "Forgot Password": "忘记密码",
    "Go to Login": "去登录",
    "Repeat Password": "确认密码",
    "Time in Innovation": "创新用时",
    "tipi": "帐篷",
    "Upgrades Completed": "升级已完成",
    "Assets": "资产",
    "Basket": "篮子",
    "Clothing": "衣服",
    "Spear": "矛",
    "Assets Prestige": "资产声望",
    "assets": "资产",
    "Ascend to Unlock": "转生以解锁",
    "Land": "土地",
    "pyramid": "金字塔",
    "Pyramid": "金字塔",
    "Global Output Multiplier": "全局产出乘数",
    "Ascend": "转生",
    "Ascension": "转生",
    "Science": "科学",
    "Making good progress I see. Ascension unlocks powerful upgrades that can\n    be purchased with Ascension Points. You should ascend right away because the\n    first ascension is capped at 1 AP!": "我看你进展不错。转生 可以解锁强大的升级，可以用 转生点（AP） 购买。你应该马上转生，因为第一次转生的上限是1 转生点（AP）!",
    "Ascension points that can be spent on various upgrades in the ascension panel": "转生点可以用于转生面板中的各种升级",
    "Ascension Bonuses": "转生奖励",
    "Ascending resets all industries and resources back to zero and grants Ascension Points (AP) that can be spent on powerful upgrades. Ascending now will grant you": "转生会将所有行业和资源重置为零，并给予转生点(AP)，可以用于强大的升级。现在转生将给予你",
    "Ascension Boost Progress": "转生提升进度",
    "Automation": "自动化",
    "Current Depth": "当前深度",
    "Current Multiplier": "当前乘数",
    "Current per Point": "当前每点",
    "Enhanced Global Multipliers": "增强的全局乘数",
    "Enhanced Industry Multipliers": "增强的行业乘数",
    "Global Multiplier": "全局乘数",
    "Increases production of all industries based on your total spent AP.": "根据你消耗的AP总量增加所有行业的产量。",
    "Increases production of all industries. Upgrade effects are exponential.": "增加所有行业的产量。升级效果是指数级的。",
    "Increases the number of resources that global multipliers affect.": "增加全局乘数影响的资源数量。",
    "Increases the number of resources that industry multipliers affect.": "增加行业乘数影响的资源数量。",
    "Mechanics": "机制",
    "Misc": "杂项",
    "Next Depth": "下一深度",
    "Next Multiplier": "下一乘数",
    "Next per Point": "下一点",
    "Open the ascension panel to view all the amazing upgrades you can purchase\n    with your hard earned ascension points.": "打开转生面板，查看所有令人惊叹的升级，你可以\n花费你辛苦获得的转生点去购买升级。",
    "Points": "点",
    "Spent AP Multiplier": "花费转生点乘数",
    "Time": "时间",
    "Max-All": "全部最大",
    "Max-All + Innovation": "全部最大 + 创新",
    "Max-All + Milestones": "全部最大 + 里程碑",
    "Max-All + Prestiges": "全部最大 + 声望",
    "Next": "下一个",
    "Next Bonus": "下一个奖励",
    "Next Formula": "下一个公式",
    "Next Interval": "下一个间隔",
    "Next Multi": "下一个乘数",
    "Offline Auto Innovation": "离线自动创新",
    "Offline Auto Milestones": "离线自动里程碑",
    "Offline Auto Prestige": "离线自动声望",
    "Offline Hours": "离线小时",
    "Innovation Speed Boost": "创新速度提升",
    "Prestige Speed Boost": "声望速度提升",
    "Innovation Multiplier Boost": "创新乘数提升",
    "Prestige Multiplier Boost": "声望乘数提升",
    "Innovation Time Boost": "创新时间提升",
    "Prestige Time Boost": "声望时间提升",
    "Current": "当前",
    "Current Bonus": "当前奖励",
    "Current Formula": "当前公式",
    "Current Interval": "当前间隔",
    "Current Multi": "当前乘数",
    "Disabled": "已禁用",
    "Enabled": "已启用",
    "Multi Resource Upgrade": "多重资源升级",
    "Multi Prestige": "多重声望",
    "Multi-Enhancers": "多重增强",
    "Resource Speed Increase": "资源速度提升",
    "Auto Claim Milestones": "自动领取里程碑",
    "Auto Innovation": "自动创新",
    "Auto Prestige": "自动声望",
    "Auto Resource Purchase": "自动资源购买",
    "Auto Resource Upgrade": "自动资源升级",
    "Ascension Time Multiplier": "转生时间乘数",
    "Increased Booster Rarity Chance": "提升助推器稀有度几率",
    "Automatically claims milestone reward boosters on a time interval when they are available.": "里程碑奖励助推器开启后，每隔一段时间自动领取。",
    "Automatically innovates on a time interval when it is available.": "在可用的时间间隔内自动进行创新。",
    "Automatically prestiges industries on a time interval when they are available.": "当行业可用时，在一段时间间隔内自动执行声望。",
    "Automatically purchases the first 20 of each resource.": "自动购买每种资源的前20个。",
    "Automatically upgrades resources.": "自动升级资源。",
    "Enables max all button/hotkey to claim all milestones at most once per second.": "使所有按钮/热键每秒最多声明一次所有里程碑。",
    "Enables max all button/hotkey to trigger innovations.": "使最大所有按钮/热键触发创新。",
    "Enables max all button/hotkey to trigger prestiges.": "启用最大所有按钮/热键触发声望。",
    "Increases output of all industries based on the total time in the current ascension.": "基于当前转生中的总时间，增加所有行业的产出。",
    "Increases output of all industries based on the total time in the current innovation.": "基于当前创新的总时间，增加所有行业的产出。",
    "Increases output of industries based on the total time in their current prestige.": "根据当前声望的总时间增加行业的产出。",
    "Increases the chance to receive higher rarity boosters from milestones.": "增加从里程碑中获得更高稀有助推剂的机会。",
    "Increases the multiplier granted from each innovation.": "提升每次创新获得的乘数",
    "Increases the multiplier granted from each prestige.": "增加每个声望所赋予的乘数。",
    "Increases the number of hours you can gain offline progress.": "增加你可以获得离线进度的小时数。",
    "Increases the number of industry prestiges you can complete at the same time.": "增加你可以同时完成的行业声望的数量。",
    "Increases the number of resource upgrades you can complete at the same time.": "增加你可以同时完成的资源升级数量。",
    "Increases the production of resources based on the current level. The multiplier for a resource can be calculated with the formula:": "在当前等级的基础上增加资源的产量。资源的乘数可以用以下公式计算:",
    "Increases the speed boost granted from each innovation.": "增加每个创新的速度提升。",
    "Increases the speed boost granted from each prestige.": "增加每个声望的速度提升。",
    "Increases the speed of resources based on the current level. The multiplier for a resource can be calculated with the formula:": "在当前等级的基础上增加资源的速度。资源的乘数可以用公式计算:",
    "Innovations will be automatically completed while offline.": "创新将在离线时自动完成。",
    "Milestone rewards will be automatically claimed while offline.": "里程碑奖励将在离线时自动领取。",
    "Prestiges will be automatically completed while offline.": "离线时，声望将自动完成。",
    "Resource Production Multiplier": "资源生产乘数",
    "Additional confirmation toggles will appear as you progress and unlock new content.": "当您进行并解锁新内容时，将出现额外的确认开关。",
    "All Time Earned AP": "所有时间内获得的转生点",
    "All Time Ascensions": "所有时间内的转生",
    "Ascension Start Date": "转生开始日期",
    "Opens ascension panel": "打开转生面板",
    "Time in Current Ascension": "当前转生的游戏时间",
    "AP Earned": "获得的转生点",
    "Tech": "科技",
    "Max Level": "最高级",
    "Agriculture": "农业",
    "Archaeology": "考古",
    "Ascension max all upgrades will be kept upon rebirth.": "升天最大所有升级将保留在重生。",
    "Ascension Upgrades": "提升升级",
    "Astronomy": "天文学",
    "Auto Ascension": "汽车提升",
    "Auto Claim Promotions": "汽车理赔促销",
    "Auto Resource Unlock": "资源自动解锁",
    "Automatically claims promotions as they become available.": "自动申请促销，因为他们是可用的。",
    "Automatically purchases resources that require AP to unlock when the cost is less than 10% of your unspent AP.": "当成本低于未使用AP的10%时，自动购买需要AP解锁的资源。",
    "Automation Retainer": "自动化护圈",
    "Biology": "生物学",
    "Doubles the effects of Multi-Enhancer ascension upgrades on each level.": "每级增加一倍多重增强者的提升效果。",
    "Each rebirth grants a x5 global multiplier.": "每次重生给予一个x5的整体乘数。",
    "Enhanced Ascension Boost": "增强提升助力",
    "Enhanced Multi-Enhancers": "增强Multi-Enhancers",
    "Enhanced Prestige Multiplier": "增强声望倍增器",
    "Enhanced Prestige Speed": "提升声望速度",
    "Enhanced Promotions": "加强促销活动",
    "Enhanced Resource Upgrades": "增强的资源升级",
    "Enhanced Spent AP": "增强型废AP",
    "Enhanced Stacking Power": "增强堆叠功率",
    "Enhanced Time Multipliers": "增强型时间乘法器",
    "Genetics": "遗传学",
    "Granting a 5% boost": "给予5%的提升",
    "Increased Ascension Points": "增加升天点数",
    "Increased Boosters": "增加的助推器",
    "Increased Innovation Points": "增加创新点数",
    "Increased Promotions": "增加促销活动",
    "Increases IP received per prestige by 5% per level.": "每级威望增加5%的IP接收量。",
    "Increases resource upgrade multipliers by 0.5x per level.": "每升一级增加0.5倍资源升级乘数。",
    "Increases the amount of AP earned by 5% per level.": "每升一级增加5%的AP。",
    "Increases the amount of stacks gained on ascension upgrades that utilize stacking power by 1 per level.": "每升一级使用堆叠能力的提升升级所获得的堆叠数量增加1。",
    "Increases the base ascension boost multiplier by 0.5x per level.": "每升一级提升0.5倍基础提升。",
    "Increases the base percent boost Ascension Prestige & Innovation Multiplier Boost upgrades offer by 5% per level.": "提升声望和创新乘数每级提升5%。",
    "Increases the base percent boost Ascension Prestige & Innovation Speed Boost upgrades offer by 0.5% per level.": "提升威望和创新速度每级提升0.5%。",
    "Increases the multiplier per level that ascension time multiplier upgrades provide by 0.5x per level.": "每级提升时间增加0.5倍。",
    "Increases the number of boosters received from all milestones by 1 per level.": "每级增加1个从所有里程碑获得的助推器的数量。",
    "Increases the number of innovations you can complete at the same time when they are available.": "增加可以同时完成的创新的数量。",
    "Increases the number of promotions earned from new innovations by 1 per level.": "每升1级，新发明获得的晋升次数增加1。",
    "Increases the speed multiplier that promotions give by 0.5x per level.": "每升一级提升0.5倍速度。",
    "Innovation Time Multiplier": "创新时间乘数",
    "Less Resource Unlocks": "更少的资源解锁",
    "Linguistics": "语言学",
    "Locked until": "锁定,直到",
    "Mathematics": "数学",
    "Maxes all Ascension automation upgrades and are kept upon rebirth.": "所有提升自动化升级的上限，并在重生时保留。",
    "Medicine": "医学",
    "Meteorology": "气象学",
    "Multi Innovation": "多创新",
    "Nuclear": "核",
    "Oceanography": "海洋学",
    "Physics": "物理",
    "Prestige Retainer": "声望护圈",
    "Prestige Time Multiplier": "声望时间倍增器",
    "Promotions": "促销活动",
    "Quantum": "量子",
    "Raises the Spent AP Multiplier ascension upgrade to a power. Increases by 0.5 per level. First upgrade raises to power of 1.5.": "将耗AP乘数提升升级为异能。每升一级增加0.5点。第一次升级提升到1.5的能量。",
    "Rebirth": "重生",
    "Rebirth Multiplier": "重生的乘数",
    "Rebirth Upgrades": "重生的升级",
    "Reduces the amount of AP needed to reach the next ascension boost by 1x per level. First upgrade: 10x => 9x.": "每升1级，获得下一个提升所需的AP减少1倍。第一次升级：10x => 9x。",
    "Reduces the number of resources that need to be purchased with AP after a rebirth.": "减少重生后需要用AP购买的资源数量。",
    "Retain 10% per level of the exponent of your industry resources upon prestige and innovation.": "根据声望和创新，每等级保留行业资源指数的10%。",
    "Retain Automation": "保留自动化",
    "Retain Max All Upgrades": "保留所有升级的最大值",
    "Squared Global Multipliers": "平方全局乘数",
    "Squared Industry Multipliers": "产业乘数平方",
    "Squares global multipliers for all global output multiplier sources.": "对所有全局输出乘法器源的全局乘法器进行平方。",
    "Squares industry multipliers for all industry output multiplier sources.": "对所有产业产出乘数来源的产业乘数进行平方。",
    "Swift Ascension Boost": "快速提升",
    "upgrade in the Ascension Upgrade Enhancements tab is purchased.": "在提升升级增强选项卡中购买升级。",
    "Zoology": "动物学",
    "10x Global Output Multiplier for 1 hour": "10倍的全球产出乘数，持续1小时",
    "agriculture": "农业",
    "airplane": "飞机",
    "AP Boost": "转生点提升",
    "apartment": "公寓",
    "appliances": "电器",
    "archaeology": "考古",
    "armor": "护甲",
    "assets Promotions": "资产的促销活动",
    "astronomy": "天文学",
    "automobile": "汽车",
    "basket": "篮子",
    "biology": "生物学",
    "books": "书",
    "Booster Pack": "加强包装",
    "Bronze": "青铜",
    "cabin": "小屋",
    "castle": "城堡",
    "chemistry": "化学",
    "city": "城市",
    "clock": "时钟",
    "clothing": "服装",
    "compass": "指南针",
    "Compass": "指南针",
    "computing": "计算",
    "currency": "货币",
    "cutlery": "餐具",
    "Diamond": "钻石",
    "electricity": "电",
    "Emerald": "翡翠",
    "engineering": "工程",
    "fort": "堡",
    "furniture": "家具",
    "genetics": "遗传学",
    "Gold": "黄金",
    "guns": "枪支",
    "house": "房子",
    "igloo": "冰屋",
    "Innovation 36": "创新36",
    "jewelry": "珠宝",
    "land": "土地",
    "lighthouse": "灯塔",
    "linguistics": "语言学",
    "mansion": "大厦",
    "mathematics": "数学",
    "medicine": "医学",
    "meteorology": "气象学",
    "New Promotions": "新的促销活动",
    "Next Promotion": "下一个促销",
    "oceanography": "海洋学",
    "photography": "摄影",
    "physics": "物理",
    "printing": "印刷",
    "Promotions are rewarded by reaching a new all time high innovation count. They are assigned to a random resource and grant a stacking x2 multiplier.": "晋升的奖励是达到一个新的历史新高的创新计数。他们被分配到一个随机资源，并授予一个堆叠x2乘数。",
    "Promotions Legend": "晋升传奇",
    "property Promotions": "房地产促销",
    "radio": "广播",
    "Radio": "广播",
    "Ruby": "红宝石",
    "science Promotions": "科学的促销活动",
    "Silver": "银",
    "skyscraper": "摩天大楼",
    "spear": "矛",
    "stratosphere": "平流层",
    "survival Promotions": "生存的促销活动",
    "sword": "剑",
    "tech Promotions": "科技推广",
    "telegraph": "电报",
    "Telegraph": "电报",
    "telephone": "电话",
    "Telephone": "电话",
    "temple": "寺庙",
    "tools": "工具",
    "watercraft": "船舶",
    "Watercraft": "船舶",
    "wheel": "转动",
    "Wheel": "转动",
    "zoology": "动物学",
    "Misc. Bundle": "杂项包",
    "Automators": "自动机",
    "Disable All": "全部禁用",
    "Enable All": "全部启用",
    "Rebirth Start Date": "重生开始日期",
    "science": "科学",
    "tech": "科技",
    "Time in Current Rebirth": "本轮重生用时",
    "Total Rebirths": "总计重生",
    "Total RP Earned": "总计赚取的重生点",
    "Ascension Boost": "转生提升",
    "Ascensions": "转生",
    "Next Ascension Point": "下一个转生点",
    "Next Rebirth Point": "下一个重生点",
    "Rebirth Boost": "重生提升",
    "Rebirths": "重生",
    "Time in Ascension": "转生时间",
    "Time in Rebirth": "重生时间",
    "Unspent AP Multiplier": "未使用转生点乘数",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "May": "5月",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "Reddit": "Reddit",
    "TAB": "TAB",
    "SHIFT": "SHIFT",
    "Space": "空格键",
    "CTRL": "CTRL",
    "ESC": "ESC",
    "Key Combo": "组合键",
    "N/A": "N/A",
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
    "Purchase Resource: ": "购买资源: ",
    "Current Version v": "当前版本 v",
    "Boosters Earned: ": "获得的助推器: ",
    "Total Boosters: ": "总计助推器: ",
    "Can't afford ": "负担不起 ",
    "Claim All ": "领取所有",
    "IP: ": "创新点: ",
    "Pr: ": "产出: ",
    "Unclaimed: ": "未领取: ",
    "Can't Afford ": "买不起 ",
    "Multiplier: x": "乘数: x",
    "": "",
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
    "/sec)": "/秒)",
    "% bonus": "% 奖励",
    " day(s)": " 天",
    " Industry Milestones": "行业里程碑",
    " Resource Milestones": "资源里程碑",
    " Resource Booster": "资源助推器",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
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
    /^\+([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)m$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)T$/,
    /^([\d\.]+)ms$/,
    /^\+([\d\.]+)\%$/,
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
    /^\+([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^\-([\d\.]) \/ ([\d\.]+)e([\d\.,]+)ms$/,
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
    [/^You have (.+) new promotions!$/, '你有 $1 新的促销活动!'],
    [/^Showing boosters (.+) of (.+) boosters$/, '显示 $2 个助推器中的 $1 个'],
    [/^(.+)x global production multiplier for every magnitude of (.+) ascension points earned \(i.e. 1, 10, 100...\)$/, '每获得 $2 转生点 \(即 1,10,100…\)，全局生产乘数增加 $1x。'],
    [/^(.+) production on unlocked resources$/, '解锁资源生产提高 $1'],
    [/^(.+) speed increase on unlocked resources$/, '解锁资源速度提高 $1'],
    [/^(.+)x Global Speed Multiplier for (.+) minutes$/, '$1x 全局速度乘数，持续 $2 分钟'],
    [/^(.+)x Global Output Multiplier for (.+) minutes$/, '$1x 全局产出乘数，持续 $2 分钟'],
    [/^Your (.+) minutes (.+)x global speed multiplier has been saved. It can be activated under the Activate Rewards tab.$/, '您的 $1 分钟 $2x 全局速度乘数已被保存。它可以在激活奖励选项卡下激活。'],
    [/^Your (.+) minutes (.+)x global output multiplier has been saved. It can be activated under the Activate Rewards tab.$/, '您的 $1 分钟 $2x 全局产出乘数已被保存。它可以在激活奖励选项卡下激活。'],
    [/^Sep (.+), (.+) at (.+) PM$/, '$2 年 9月 $1 日 下午 $3'],
    [/^Sep (.+), (.+) at (.+) AM$/, '$2 年 9月 $1 日 上午 $3'],
    [/^Nov (.+), (.+) at (.+) PM$/, '$2 年 11月 $1 日 下午 $3'],
    [/^Nov (.+), (.+) at (.+) AM$/, '$2 年 11月 $1 日 上午 $3'],
    [/^Buy x(.+) Cooking$/, '购买 x$1 烹饪'],
    [/^Buy x(.+) Basket$/, '购买 x$1 篮子'],
    [/^Buy x(.+) Clothing$/, '购买 x$1 衣服'],
    [/^Buy x(.+) Fire$/, '购买 x$1 火'],
    [/^Buy x(.+) Pyramid$/, '购买 x$1 金字塔'],
    [/^Buy x(.+) Hut$/, '购买 x$1 小屋'],
    [/^Buy x(.+) Land$/, '购买 x$1 土地'],
    [/^Buy x(.+) Cave$/, '购买 x$1 洞穴'],
    [/^Buy x(.+) Tipi$/, '购买 x$1 帐篷'],
    [/^Buy x(.+) Medicine$/, '购买 x$1 医学'],
    [/^Buy x(.+) Agriculture$/, '购买 x$1 农业'],
    [/^Buy x(.+) Linguistics$/, '购买 x$1 语言学'],
    [/^Buy x(.+) Cavalry$/, '购买 x$1 骑兵'],
    [/^Buy x(.+) Combat$/, '购买 x$1 战斗'],
    [/^Buy x(.+) Communication$/, '购买 x$1 沟通'],
    [/^Buy x(.+) Education$/, '购买 x$1 教育'],
    [/^Buy x(.+) Exploration$/, '购买 x$1 探索'],
    [/^Buy x(.+) Farming$/, '购买 x$1 农业'],
    [/^Buy x(.+) Fishing$/, '购买 x$1 钓鱼'],
    [/^Buy x(.+) Hunting$/, '购买 x$1 狩猎'],
    [/^Buy x(.+) Livestock$/, '购买 x$1 牲畜'],
    [/^Buy x(.+) Magic$/, '购买 x$1 魔法'],
    [/^Buy x(.+) Spear$/, '购买 x$1 矛'],
    [/^Buy x(.+) Astronomy$/, '购买 x$1 天文学'],
    [/^Buy x(.+) Pets$/, '购买 x$1 宠物'],
    [/^Buy x(.+) Politics$/, '购买 x$1 政治'],
    [/^Buy x(.+) Trade$/, '购买 x$1 贸易'],
    [/^Buy x(.+) Gathering$/, '购买 x$1 采集'],
    [/^Completed (.+) Prestiges$/, '完成 $1 声望'],
    [/^Claim (.+) Promotions$/, '收集 $1 促销活动'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) IP$/, '$1e$2 创新点数'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+)e([\d\.,]+) AP$/, '$1e$2 转生点'],
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分 $2秒'],
    [/^([\d\.]+)h ([\d\.]+)m$/, '$1小时 $2分'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/, '$1天 $2小时 $3分 $4秒'],
    [/^([\d\.]+) hr ([\d\.]+) min$/, '$1 小时 $2 分'],
    [/^([\d\.]+) min ([\d\.]+) sec$/, '$1 分 $2 秒'],
    [/^([\d\.]+) hr$/, '$1 小时'],
    [/^([\d\.]+) hrs$/, '$1 小时'],
    [/^([\d\.]+) min$/, '$1 分钟'],
    [/^([\d\.]+) sec$/, '$1 秒'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) \^ \(level \- resourceNode \+ ([\d\.]+)\)$/, '$1 \^ \(等级 \- 资源节点 \+ $2\)'],
    [/^([\d\.]+) \^ \(timeFactor \* ([\d\.]+)\)$/, '$1 \^ \(时间因子 \* $2\)'],
    [/^([\d\.]+) day$/, '$1 天'],
    [/^([\d\.]+) days$/, '$1 天'],
    [/^([\d\.]+) minutes$/, '$1 分钟'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) GoLd$/, '$1 黄金'],
    [/^([\d\.,]+) AP$/, '$1 转生点'],
    [/^\(([\d\.,]+) RP\)$/, '($1 重生点)'],
    [/^([\d\.,]+) AP \- ([\d\.,]+)\%$/, '$1 转生点 \- $2\%'],
    [/^([\d\.,]+)\% AP$/, '$1\% 转生点'],
    [/^([\d\.,]+)\% AP Boost$/, '$1\% 转生点提升'],
    [/^([\d\.,]+) IP$/, '$1 创新点'],
    [/^([\d\.,]+) Boosters$/, '$1 助推器'],
    [/^([\d\.,]+) Promotions$/, '$1 促销活动'],
    [/^([\d\.,]+) Booster Pack$/, '$1 助推器包'],
    [/^x([\d\.,]+) Speed$/, 'x$1 速度'],
    [/^([\d\.,]+)x Upgrade Medicine$/, '$1x 升级医学'],
    [/^([\d\.,]+)x Upgrade Linguistics$/, '$1x 升级语言学'],
    [/^([\d\.,]+)x Upgrade Astronomy$/, '$1x 升级天文学'],
    [/^([\d\.,]+)x Upgrade Agriculture$/, '$1x 升级农业'],
    [/^([\d\.,]+)x Bundle$/, '$1x 捆绑包'],
    [/^([\d\.,]+)x Speed$/, '$1x 速度'],
    [/^([\d\.,]+)x Upgrade Gathering$/, '$1x 升级 采集'],
    [/^([\d\.,]+)x Upgrade Clothing$/, '$1x 升级 衣服'],
    [/^([\d\.,]+)x Upgrade Land$/, '$1x 升级 土地'],
    [/^([\d\.,]+)x Upgrade Pyramid$/, '$1x 升级 金字塔'],
    [/^([\d\.,]+)x Upgrade Fire$/, '$1x 升级 火'],
    [/^([\d\.,]+)x Upgrade Hut$/, '$1x 升级 小屋'],
    [/^([\d\.,]+)x Upgrade Spear'$/, '$1x 升级 矛'],
    [/^([\d\.,]+)x Upgrade Cooking$/, '$1x 升级 烹饪'],
    [/^([\d\.,]+)x Upgrade Cavalry$/, '$1x 升级 骑兵'],
    [/^([\d\.,]+)x Upgrade Combat$/, '$1x 升级 战斗'],
    [/^([\d\.,]+)x Upgrade Communication$/, '$1x 升级 沟通'],
    [/^([\d\.,]+)x Upgrade Education$/, '$1x 升级 教育'],
    [/^([\d\.,]+)x Upgrade Exploration$/, '$1x 升级 探索'],
    [/^([\d\.,]+)x Upgrade Farming$/, '$1x 升级 农业'],
    [/^([\d\.,]+)x Upgrade Fishing$/, '$1x 升级 钓鱼'],
    [/^([\d\.,]+)x Upgrade Hunting$/, '$1x 升级 狩猎'],
    [/^([\d\.,]+)x Upgrade Livestock$/, '$1x 升级 牲畜'],
    [/^([\d\.,]+)x Upgrade Cave$/, '$1x 升级 洞穴'],
    [/^([\d\.,]+)x Upgrade Basket$/, '$1x 升级 篮子'],
    [/^([\d\.,]+)x Upgrade Magic$/, '$1x 升级 魔法'],
    [/^([\d\.,]+)x Upgrade Pets$/, '$1x 升级 宠物'],
    [/^([\d\.,]+)x Upgrade Politics$/, '$1x 升级 政治'],
    [/^([\d\.,]+)x Upgrade Trade$/, '$1x 升级 贸易'],
    [/^([\d\.,]+)x Upgrade Tipi$/, '$1x 升级 帐篷'],
    [/^([\d\.,]+)x Production$/, '$1x 生产'],
    [/^([\d\.,]+) in ([\d\.,]+)$/, '$1 \/ $2'],
    [/^Innov. Points: ([\d\.,]+)$/, '创新点: $1'],
    [/^Purchased: ([\d\.,]+)$/, '已购买: $1'],
    [/^Resource Upgrades: ([\d\.,]+)$/, '资源升级: $1'],
    [/^Prestiges: ([\d\.,]+)$/, '声望: $1'],
    [/^Lvl ([\d\.,]+)$/, '等级 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Next: (.+) IP$/, '下一个：$1 创新点'],
    [/^Next: (.+) AP$/, '下一个：$1 转生点'],
    [/^Cost: (.+) AP$/, '成本：$1 转生点'],
    [/^Purchase: (.+) AP$/, '购买：$1 转生点'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Next Boost: (.+)$/, '下一个提升: $1'],
    [/^Points: (.+)$/, '点数: $1'],
    [/^Prestige: (.+)$/, '声望: $1'],
    [/^Target: (.+)$/, '目标: $1'],
    [/^Current: (.+)$/, '当前: $1'],
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
                            transTaskMgr.doTask();
                        }
                    }
                }
            }
        }
        observer.observe(targetNode, observer_config);
        //window.afterTransTime = performance.now();
        //console.log("捕获到页面变化并执行汉化，耗时" + (afterTransTime - beforeTransTime) + "毫秒");
    });
    observer.observe(targetNode, observer_config);
    window.cnItems = cnItems
}();