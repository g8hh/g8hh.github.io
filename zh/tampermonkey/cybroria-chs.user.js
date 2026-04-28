// ==UserScript==
// @name         Cybroria 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 Cybroria (https://cybroria.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Cybroria.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://cybroria.com/favicon_32x32.png
// @license      MIT
// @include      *https://cybroria.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/06/15 21:19
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
    "activation state": "激活状态",
    "Click here to resend the activation email.": "点击这里重新发送激活邮件。",
    "Community": "社区",
    "Didn't receive the email?": "没有收到邮件？",
    "If you believe your account has already been activated, please check your": "如果您认为您的帐户已被激活，请检查您的",
    "If you need help or have any questions, feel free to contact our support team at game@cybroria.com": "如果您需要帮助或有任何问题，请随时联系我们的支持团队game@cybroria.com",
    "It looks like your account hasn't been activated yet. To play the game, please check your email for the activation link we sent you.": "看来您的帐户还没有激活。要玩游戏，请检查您的电子邮件中我们发送给您的激活链接。",
    "Legal": "法律",
    "Sign Up": "注册",
    "Activation successful": "激活成功",
    "Login": "登录",
    "Please": "请",
    "Your account has been successfully activated.": "你的账号已成功激活。",
    "Please wait while we process your activation request...": "我们正在处理您的激活请求，请稍等...",
    "Error": "出错了",
    "If you need assistance, please contact our support team at": "如果您需要帮助，请与我们的支持团队联系",
    "No activation token provided. Please check the link.": "没有提供激活令牌。请检查链接。",
    "Contact": "联系",
    "Don't have an account?": "没有账户？",
    "E-Mail or Display Name:": "电子邮件或显示名称：",
    "Forgot password?": "忘记了密码?",
    "Password:": "密码:",
    "Sign In": "登录",
    "Sign up": "注册",
    "Account Activated": "账号已激活",
    "Proceed to Login": "立即登录",
    "": "",
    "Your account is now activated. You can log in to start playing!": "您的帐户现在已激活。你可以登录开始玩游戏了！",
    "Already have an Account?": "已经有账户了吗？",
    "and have read the": "并且已经阅读了",
    "Display Name": "显示名称",
    "E-Mail": "电子邮件",
    "I am at least 18 years old and accept the": "我至少已经18岁了，接受这个",
    "Neon lights, high stakes, and endless upgrades. A cyberpunk idle adventure awaits.": "霓虹灯，高风险，还有无尽的升级。一场赛博朋克闲散的冒险等待着你。",
    "Password": "密码",
    "Privacy policy": "隐私政策",
    "Receive marketing emails": "接收营销邮件",
    "Referrer E-Mail or Display Name:": "推荐人电子邮件或显示姓名：",
    "Register": "注册",
    "Repeat Password": "重复密码",
    "Sign in": "登录",
    "terms & conditions": "条款与条件",
    "What does this mean?": "这是什么意思？",
    "What is a Referrer?": "什么是推荐人？",
    "If you enter a referrer, they will receive 5% of all your real-money purchases as a bonus. This may allow them to estimate how much you spend. The referrer cannot be changed later, so consider this carefully.": "如果你输入一个推荐人，他们将获得你所有真实货币购买的5%作为奖金。这可以让他们估算出你花了多少钱。推荐人以后不能更改，因此请仔细考虑这一点。",
    "Get updates, special offers, and in-game event notifications. You can unsubscribe anytime.": "获取更新、特别优惠和游戏内事件通知。你可以随时退订。",
    "Request password reset": "请求重置密码",
    "Reset password": "重置密码",
    ", you can now loot all resources instead of just the currently active one. Other resources and stats are looted at 25% efficiency.": "，你现在可以掠夺所有的资源，而不仅仅是当前激活的资源。其他资源和属性以25%的效率被掠夺。",
    "Agility": "敏捷",
    "Account": "账户",
    "Area Level": "区域等级",
    "Boosts": "提升",
    "Black Market": "黑市",
    "Better items": "更好的物品",
    "Buy a Boost": "购买提升",
    "Close": "关闭",
    "COMMON": "普通",
    "Combat Logs": "战斗日志",
    "Credits": "信用点",
    "Defense": "防御",
    "Damage": "伤害",
    "Dexterity": "灵巧",
    "Dodge": "闪避",
    "LEGENDARY": "传说",
    "Main": "主界面",
    "Logic Cores": "逻辑核心",
    "Name": "名称",
    "Connected": "已连接",
    "Complete Fights": "完成战斗",
    "Gloves": "手套",
    "Groups": "群组",
    "Game status:": "游戏状态:",
    "Fighting": "战斗",
    "RARE": "稀有",
    "Reward:": "奖励:",
    "Send": "发送",
    "Strength": "力量",
    "Supply Depot": "补给站",
    "System Breach": "系统安全漏洞",
    "System": "系统",
    "System Effects": "系统效果",
    "Start Operations": "开始操作",
    "Support & Feedback": "支持与反馈",
    "UNCOMMON": "罕见",
    "UNIQUE": "独特",
    "Use a Consumable": "使用消耗品",
    "Chestpiece": "胸甲",
    "Cyber Components": "赛博组件",
    "Cyber Harvest": "赛博收获",
    "Cyber Implants": "赛博植入物",
    "Trade": "交易",
    "Vitality": "活力",
    "Scoreboard": "记分板",
    "Ranged Weapon": "远程武器",
    "Recruit": "招募",
    "Relic": "遗物",
    "Reroll Doc": "重掷医生",
    "Safehouse": "安全屋",
    "Scanning the grid for anomalies...": "扫描网格寻找异常...",
    "Whispers": "私聊",
    "Syndicate": "公会",
    "Power Cells": "动力电池",
    "The Breach": "安全漏洞",
    "Purchase a consumable item from the Supply Depot.": "从补给站购买一个消耗品。",
    "Operations": "操作",
    "Extract Resources": "提取资源",
    "EPIC": "史诗",
    "Core Implant": "核心植入物",
    "Dismantle gear to obtain Cyber Components.": "分解装备可获得赛博组件。",
    "Destroy unlocked items": "摧毁解锁的物品",
    "dropped": "掉落",
    "Energy Tap": "能量挖掘",
    "Enhance your resource gathering with the right gear.": "用正确的装备增强你的资源收集。",
    "Equip Combat Gear": "装备战斗装备",
    "Equip Extraction Tool": "装备提取工具",
    "Equipable": "可装备",
    "Referred users": "邀请的玩家",
    "User": "玩家",
    "Referral link": "邀请链接",
    "Receive Marketing Emails": "接收营销邮件",
    "Join the Breach": "加入安全漏洞",
    "Upgrade Your Safehouse": "升级你的安全屋",
    "Manually register to receive full rewards.": "手动注册以获得完整的奖励。",
    "Purchases": "购买",
    "Artifacts": "神器",
    "Asia/Shanghai": "亚洲/上海",
    "Begin your journey by starting your operations.": "从开始你的操作，开始你的旅程。",
    "Destroy an Item": "摧毁一个物品",
    "Delete Account": "删除账户",
    "Disconnected": "未连接",
    "Display name": "显示名称",
    "Enable Notifications": "启用通知",
    "Email": "电子邮箱",
    "ERROR": "错误",
    "Extraction": "提取",
    "Gather materials to fuel your progress.": "收集材料来推动你的进步。",
    "iLevel": "i等级",
    "Inventory": "库存",
    "Hey there, I'm the Re-Roll Doc.": "大家好，我是重掷医生。",
    "Let me tinker with your gear — for a price.": "让我修理一下你的装备 — 不过要花点钱。",
    "Melee Weapon": "近战武器",
    "Mission Briefing": "任务简报",
    "1. Base Stats and Item Stats": "1. 基础属性和物品属性",
    "2. Additive Boosts": "2. 附加提升",
    "3. Multiplicative Boosts": "3. 乘法提升",
    "Action Count": "行动数量",
    "Hit chance": "命中几率",
    "Dodge chance": "闪避几率",
    "Filter": "过滤",
    "Experience": "经验值",
    "Example:": "例如:",
    "Exchange resources on the black market.": "在黑市上交换资源。",
    "Final Vitality:": "最终活力：",
    "Upgrade Bay": "升级舱",
    "Total Additive Boost:": "总计加法提升：",
    "Total Multiplicative Boost:": "总计乘法提升：",
    "Total Stats": "总属性",
    "total Stats": "总属性",
    "Stop": "停止",
    "Stats Loot": "属性战利品",
    "You": "你",
    "Prepare for battle by equipping a weapon or armor.": "装备武器或盔甲为战斗做准备。",
    "Stack boosts to enhance your efficiency.": "堆叠提升以提高你的效率。",
    "Improve your home to gain permanent bonuses.": "改善你的家园以获得永久奖励。",
    "Buy a Consumable": "购买一个消耗品",
    "Arm Implant": "手臂植入物",
    "Activate a consumable to gain temporary buffs.": "激活一个消耗品来获得暂时的Buff。",
    "Buy": "购买",
    "Credits Loot": "信用点战利品",
    "Extraction Loot": "提取战利品",
    "Duration": "持续时间",
    "Extraction Skill Total": "总计提取技能",
    "Fighting Pack": "战斗包",
    "Premium Breach Deployment": "高级安全漏洞部署",
    "Temporarily increases Credits loot": "暂时增加信用点战利品",
    "Temporarily increases extraction loot": "暂时增加提取战利品",
    "Temporarily increases total of Vitality, Strength, Dexterity, Agility and Defense": "暂时增加活力、力量、灵巧、敏捷和防御的总和",
    "Temporarily increases total stats for all Extraction Skills": "暂时增加所有提取技能的总属性",
    "Price": "价格",
    "Logout": "登出",
    "🛰️ No active event.": "🛰️ 暂无事件.",
    "Action count": "行动数量",
    "Artifacts Boosts": "神器提升",
    "Cyber Components Boosts": "赛博组件提升",
    "Engage in battles and prove your strength.": "参与战斗，证明自己的实力。",
    "Total stats": "总属性",
    "Tactical Armor": "战术护甲",
    "Rarity": "稀有度",
    "Level": "等级",
    "Copy": "复制",
    "Credits Boosts": "信用点提升",
    "Equip": "装备",
    "on market": "到市场",
    "Send to user": "送给他人",
    "Post to chat": "发送到聊天",
    "Strike Gloves": "拳击手套",
    "STRONGER": "更强",
    "Assault Boots": "突击战靴",
    "Requires defeated entity": "需要击败实体",
    "Hit": "命中",
    "Destroy": "摧毁",
    "Footwear": "鞋子",
    "Headgear": "帽子",
    "Legwear": "裤子",
    "Utility Visor": "实用面罩",
    "Grip Boots": "长筒靴",
    "Reinforced Trousers": "加固裤子",
    "Neurojack": "神经插入子",
    "Neuro Stims": "神经刺激",
    "Arcwhip": "弧鞭",
    "Aether Rig": "以太装置",
    "Ripper Unit": "撕裂装置",
    "Client Settings": "客户端设置",
    "Combat Trousers": "作战裤",
    "Combat Visor": "战斗面罩",
    "Item": "物品",
    "Items": "物品",
    "Reset": "重置",
    "Resources": "资源",
    "Base": "基础",
    "All Offers": "所有物品",
    "Price/stat": "价格/属性",
    "Sell": "出售",
    "Chemsynthesis": "化学合成",
    "Chemsynthesis increases your Neuro Stims production.": "化学合成增加你的神经刺激的生产。",
    "Microchips": "微芯片",
    "Seller": "卖家",
    "Remaining Duration": "剩余时间",
    "Offer for sale": "上架到市场",
    "Max level": "最高等级",
    "Min level": "最低等级",
    "Lowest current market price": "当前最低市场价",
    "Offer": "",
    "Additive boosts are combined and applied to your combined stat value. These include:": "附加的提升被组合并应用于你的组合属性值。这些包括:",
    "Boost": "提升",
    "Boost Calculation Explained": "提升计算说明",
    "Cyber Harvest increases your Cyber Implants loot.": "赛博收获可提升赛博植入物战利品。",
    "Item Drop": "物品掉落",
    "Item Stats": "物品属性",
    "Infamous": "臭名昭著",
    "Resource Loot": "资源战利品",
    "Reinforced Panels Level None": "加固板等级无",
    "Upgrade House": "升级房屋",
    "Upgrade": "升级",
    "Total Artifacts Extraction": "总计提取 神器",
    "Total Cyber Components Extraction": "总计提取 赛博组件",
    "Total Cyber Implants": "总计提取 赛博植入物",
    "Total Logic Cores": "总计提取 逻辑核心",
    "Total Neuro Stims": "总计提取 神经刺激",
    "Total Power Cells": "总计提取 动力电池",
    "Actions": "行动",
    "Additive": "附加",
    "Agility increases your Dodge chance.": "敏捷增加你的闪避几率。",
    "Cyber Components are mainly used for boosts.": "赛博组件主要用于提升。",
    "Credits are mainly used for the market and are also used for boosts.": "信用点主要用于市场，也用于提升。",
    "Artifacts are the premium resource and are used for boosts.": "神器是奖励资源，用于提升。",
    "Damage increases the damage dealt by 1.": "伤害使造成的伤害提高1点。",
    "Defense decreases the damage received by 1.": "防御使受到的伤害降低1。",
    "Dexterity increases your Hit chance.": "灵巧增加你的命中几率。",
    "Energy Tap increases your Power Cells loot.": "能量挖掘增加你的动力电池战利品。",
    "Microchips are used to upgrade the breach agent.": "微芯片是用来升级入侵特工的。",
    "Strength increases damage by 1.": "力量增加1点伤害。",
    "Operatives": "特工",
    "Owner": "拥有者",
    "Syndicate Name": "公会名称",
    "Syndicate Directory": "公会列表",
    "Recruitment": "招募",
    "Details": "详情",
    "Found Syndicate": "搜索公会",
    "Help": "帮助",
    "Description:": "介绍:",
    "Name:": "名称:",
    "Create": "创建",
    "Creation date": "创建日期",
    "Syndicate Invitations": "公会邀请",
    "Syndicate Applications": "公会申请",
    "Apply": "申请",
    "PENDING": "等待",
    "Manual deployment confirmed.": "确认手动部署。",
    "agents on standby.": "特工待命。",
    "Breach Initializing": "安全漏洞初始化",
    "Deployment begins": "开始部署",
    "Amount to use": "使用数量",
    "Amount": "数量",
    "Permanent": "永久",
    "Use": "使用",
    "Max": "最大",
    "Select": "选择",
    "Select Item": "选择物品",
    "Reroll cost:": "重掷成本:",
    "Reroll Now": "马上重掷",
    "Ready to take a risk? You can reroll the item's stats within their full range (0–100%).": "准备好冒险了吗？你可以在物品的全范围（0-100%）内重掷物品的属性。",
    "The result may be better — or worse.": "结果可能更好，也可能更糟。",
    "Each attempt increases the cost.": "每次尝试都会增加成本。",
    "WEAKER": "更弱",
    "Artifacts Shop": "神器商店",
    "Cash Shop": "现金商店",
    "Automatic deployment for 90% reward (requires active actions)": "自动部署获得90%奖励（需要主动行动）",
    "Not registered for the breach.": "没有注册的安全漏洞。",
    "Cancel": "取消",
    "You will get": "你将获得",
    "System Breach increases your Logic Cores loot.": "系统安全漏洞可提升逻辑核心战利品。",
    "Vitality Increases Health by 5.": "活力增加生命值5点。",
    "Warning: Your inventory has a size limit. If it’s full, you won’t find new items.\n    Make sure to clean it up regularly!": "警告：您的库存有大小限制。如果满了，你就找不到新物品了。请确保定期清理！",
    "Your inventory holds all equipment you’ve collected — for both fighting and extraction.\n    Use the tabs to switch between the two types. The item list updates automatically\n    based on your selected focus.": "你的库存包含了你收集的所有装备——用于战斗和提取。使用选项卡在两种类型之间切换。物品列表根据您选择的焦点自动更新。",
    "To equip an item, simply click it and choose": "要装备一个物品，只需点击它并选择",
    "Important items can be": "重要物品可以",
    "to prevent accidental destruction or sale.\n    Look for the lock icon on each item.": "以防止意外摧毁或出售。寻找每件物品上的锁定图标。",
    "locked": "锁定",
    "Unused items can be either": "未使用的物品也可以",
    "sold on the black market": "在黑市出售",
    "or": "或者",
    "destroyed": "摧毁",
    "to gain Cyber Components.\n    The higher the item's quality, the more components you receive.": "获得赛博组件。物品的质量越高，你收到的组件就越多。",
    ". Only one item per slot can be equipped at a time.": "。每次只能装备一件物品。",
    ", deploy manually while the window is open.": "，在窗口打开时手动部署。",
    "⚠ Manual registration is only possible before a new breach level begins.": "⚠ 只有在新的安全漏斗等级开始之前，才可以进行手动注册。",
    "Resource": "资源",
    "finance.core  - prolly credit boost event": "金融.核心-主要信用提升事件",
    "Unauthorized access to monetary subsystem detected.": "检测到对货币子系统的未经授权访问。",
    "Active Consumables": "可用消耗品",
    "Other": "其他",
    "Your session is expired": "您的会话已过期",
    "Daily active": "日常活跃",
    "Cyber-Power": "赛博动力",
    "Postbox": "信箱",
    ", and": ", 和",
    "Win Rate": "胜率",
    "to begin fighting.": "以开始战斗。",
    "You can also loot the associated skill stat itself while extracting. This means your base stat grows over time,\n    encouraging you to specialize in one resource type for maximum efficiency.": "你也可以在提取时掠夺相关的技能属性。这意味着你的基础属性会随着时间的推移而增长，从而鼓励你专注于一种资源类型以获得最大的效率。",
    "Since all resources are needed eventually, the": "由于最终需要所有的资源，所以",
    "Operations are the core of your progress. Make sure your actions are always running.\n    They continue even while you're offline, so don't let your counter run empty.\n    You can refill it by clicking the refresh button or via your profile in the top left.": "操作是你进步的核心。确保你的行动总是在运行。即使你离线，它们也会继续，所以不要让你的计数器空了。您可以通过单击刷新按钮或通过左上角的配置文件重新填充它。",
    "lets you collect specific resources used for features like safehouse, breach agents, and syndicate boosts.\n    Each extraction is linked to a skill stat — the higher that stat, the more loot you'll get.": "让你收集特定的资源用于功能，如安全屋，安全漏洞特工，和公会提升。每次提取都与技能属性相关联-属性越高，你得到的战利品越多。",
    "Keep an eye on your": "留意你的",
    "lets you battle Entities to gain loot and stat progress.\n  In the beginning, simply press": "让你与实体战斗以获得战利品和状态进展。\n开始时，只需按",
    "is a great way to trade what you have\n    for what you need.": "是用你所拥有的换取你所需要的东西的好方法。",
    "and raise the Entity level gradually as your stats improve — higher levels give better rewards.": "并随着你的属性的提高而逐渐提高实体等级——更高的等级会得到更好的奖励。",
    "After each fight, you'll see a combat log showing your and the Entity’s health bars,\n  along with stats like": "每次战斗结束后，你会看到一个战斗日志，显示你和实体的生命值条，以及一些统计数据",
    "Auto-deployed.": "自动部署。",
    "Agents:": "特工:",
    "Agent Death at Level:": "特工死亡等级:",
    "Breach Health at Agent's Death:": "特工死亡时安全漏洞生命值：",
    "Breach Health:": "安全漏洞生命值:",
    "Breach Level Reached:": "安全漏洞达到的等级:",
    "bossLevel": "Boss等级",
    "Subscription Bonus:": "订阅加成:",
    "Damage Share": "伤害分享",
    "Damage-based Reward:": "基础伤害奖励:",
    "damageBasedReward": "基础伤害奖励",
    "damageMade": "造成的伤害",
    "damagePercent": "伤害百分比",
    "Fixed Reward:": "修复奖励:",
    "fixedReward": "修复奖励",
    "rawTotal": "原始总计",
    "Reward Details": "奖励详情",
    "Total:": "总计:",
    "totalReward": "总奖励",
    "Active Sessions": "在线会话",
    "Change password": "修改密码",
    "French": "法语",
    "German": "德语",
    "English (US)": "英语 (US)",
    "English (UK)": "英语 (UK)",
    "Hide reputation rank": "隐藏声誉等级",
    "Keep popups open": "保持弹出窗口打开",
    "Keep Overlays Open": "保持遮罩层打开",
    "Notifications": "通知",
    "Number and Date Format": "数值和日期格式",
    "Permission Required": "许可要求",
    "Registered": "已注册",
    "Swiss": "瑞士",
    "Time Zone": "时区",
    "You need to allow notifications in your browser when prompted": "您需要允许浏览器在提示时发出通知",
    "Device": "设备",
    "Disables the calculation and display of your reputation rank gained through purchases. Titles and colors remain available.": "禁用计算和显示您通过购买获得的声誉等级。称号和颜色仍然可用。",
    "Enable to receive updates, special offers, and event announcements. You can unsubscribe anytime.": "启用接收更新、特别优惠和事件公告。你可以随时退订。",
    "When enabled, overlays will remain open when hovered over, allowing text selection or interaction. Otherwise, overlays will close automatically.": "启用后，将鼠标悬停在上方时，遮罩层将保持打开状态，允许文本选择或交互。否则，遮罩层将自动关闭。",
    "Expiration Date": "截止日期",
    "Last Access": "最后一次访问",
    "equipped, you gain": "装备, 你获得了",
    "With the": "通过",
    "Skill Distribution": "技能分配",
    "loot from all additional resources and stats. It acts as a cybernetic multi-tool that supports every farming skill.": "从所有额外的资源和属性中获得战利品。它作为一个控制的多工具，支持每一个农业技能。",
    "Next Level": "下一级",
    "Agility total": "敏捷总计",
    "None": "无",
    "A loot box with something nice inside!": "战利品箱子，里面有不错的东西！",
    "A permanent boost with a diminishing effect.": "永久提升，但效果递减。",
    "Agility Total": "总计敏捷",
    "Cyber Harvest Total": "总计赛博收获",
    "Damage Total": "总计伤害",
    "Defense Total": "总计防御",
    "Energy Tap Total": "总计能量挖掘",
    "Item drop": "掉落物品",
    "Loot Box Reward": "战利品箱奖励",
    "Permanently increases item drop rate": "永久增加物品掉落率",
    "System Breach Total": "系统漏洞总数",
    "Chemsynthesis Total": "总计化学合成",
    "Dexterity Total": "总计灵巧",
    "Logic Cores Loot": "逻辑核心战利品",
    "Vitality Total": "总计活力",
    "Agility loot": "敏捷战利品",
    "Boosts provide permanent bonuses to your stats and efficiency. Once purchased, they are always active — no need to equip or activate them.": "提升为你的属性和效率提供永久的奖励。一旦购买，他们总是有效的-不需要装备或激活他们。",
    "Chemsynthesis loot": "化学合成战利品",
    "Credits loot": "信用点战利品",
    "Cyber Harvest loot": "赛博收获战利品",
    "Cyber Implants loot": "赛博植入物战利品",
    "Defense total": "总计防御",
    "Dexterity loot": "灵巧战利品",
    "Energy Tap loot": "能量挖掘战利品",
    "General": "常规",
    "Logic Cores loot": "逻辑核心战利品",
    "Miscellaneous": "其他",
    "Neuro Stims loot": "神经刺激战利品",
    "Permanently increases experience gain": "永久增加经验值",
    "Power Cells loot": "动力电池战利品",
    "Some boosts affect combat, others improve resource gathering or other systems.\n    You’re free to shape your playstyle by choosing where to invest.": "有些提升会影响战斗，有些则会改善资源收集或其他系统。你可以通过选择在哪里投资来自由塑造自己的游戏风格。",
    "Strength loot": "力量战利品",
    "Strength total": "总计力量",
    "System Breach loot": "系统破坏战利品",
    "Tip: Even small boosts add up. The more you invest, the faster your progress becomes!": "小贴士：即使是很小的提升也会累积起来。你投入的越多，你的进步就越快！",
    "Vitality loot": "活力战利品",
    "Vitality total": "总计活力",
    "You can buy each boost multiple times. Stacking the same boost increases its effect,\n    allowing you to focus on specific strengths or compensate for weaknesses.": "你可以多次购买每种强化道具。叠加相同的强化效果，可以让你专注于特定的优势或弥补弱点。",
    "Operative Name": "特工名称",
    "Your Resources": "你的资源",
    "Your Tax": "你的税率",
    "Vault": "保险库",
    "OWNER": "会长",
    "MEMBER": "成员",
    "Last Active": "最近活跃",
    "Joined": "加入时间",
    "Role": "职位",
    "ADMIN": "管理员",
    "Clan Storage": "公会存储",
    "Contribute": "贡献",
    "Contributions": "贡献",
    "Strongest Entity": "最强实体",
    "Syndicate Tax": "公会税率",
    "Profile": "简介",
    "Stat": "属性",
    "Battling": "战斗",
    "Applications not allowed": "不允许申请",
    "Daily Breach Level Reached": "日常达到安全漏洞等级",
    "Daily Credits": "日常信用点",
    "Daily Actions": "日常行动",
    "Daily Deaths": "日常死亡",
    "Daily Kills": "日常击杀",
    "Daily Reward": "日常奖励",
    "Daily Power Cells": "日常动力电池",
    "Daily System Breach Actions": "日常系统安全漏洞行动",
    "Daily Cyber Harvest Actions": "日常赛博收获行动",
    "Daily Extraction": "日常提取",
    "Daily Cyber Implants": "日常赛博植入物",
    "Daily Cyber Components Extraction": "日常赛博组件提取",
    "Daily Artifacts Extraction": "日常神器提取",
    "Daily Fighting": "日常战斗",
    "Daily Artifacts Fighting": "日常神器战斗",
    "Daily Cyber Components Fighting": "日常赛博组件战斗",
    "Daily rankings are always calculated on a daily basis and reset at midnight (00:00 UTC).": "每日排名总是按天计算，并在午夜（UTC 00:00）重置。",
    "Rank": "排名",
    "Operative": "特工",
    "Base Stats": "基础属性",
    "Dexterity Base": "灵巧基础",
    "Strength Base": "力量基础",
    "Agility Base": "敏捷基础",
    "Vitality Base": "活力基础",
    "Agility Item": "敏捷物品",
    "Damage Item": "伤害物品",
    "Vitality Item": "活力物品",
    "Strength Item": "力量物品",
    "Defense Item": "防御物品",
    "Dexterity Item": "灵巧物品",
    "Fighting Item Quality Sum": "战斗物品质量总和",
    "Fighting Level": "战斗等级",
    "Strength Total": "总计力量",
    "Total Artifacts Fighting": "总计神器战斗",
    "Total Cyber Components Fighting": "总计赛博组件战斗",
    "Total Credits": "总计信用点",
    "Total Kills": "总计击杀",
    "Total Deaths": "总计死亡",
    "Total Items Destroyed": "总计摧毁物品",
    "Try to reload.": "尝试重新加载。",
    "Reload": "重载",
    "Error getting game state": "获取游戏状态错误",
    "Agility Base Agent": "敏捷基础特工",
    "Agility Total Agent": "敏捷总计特工",
    "Artifacts Spent for Boosts": "花费用于提升的神器",
    "Chemsynthesis Base": "化学合成基础",
    "Chemsynthesis Item": "化学合成物品",
    "Credits Spent for Boosts": "花费用于提升的信用点",
    "Cyber Components Spent for Boosts": "花费用于提升的赛博组件",
    "Cyber Harvest Base": "网络收获基础",
    "Cyber Harvest Item": "赛博收获道具",
    "Daily Artifacts": "日常神器",
    "Daily Chemsynthesis Actions": "日常化学合成作用",
    "Daily Cyber Components": "日常赛博组件",
    "Daily Energy Tap Actions": "日常能量挖掘行动",
    "Daily Fighting Actions": "日常战斗行动",
    "Dexterity Base Agent": "灵巧基础特工",
    "Dexterity Total Agent": "灵巧总计特工",
    "Energy Tap Base": "能量挖掘基础",
    "Energy Tap Item": "能量挖掘物品",
    "Extraction Item Quality Sum": "提取物品质量总和",
    "Extraction Items": "提取物品",
    "Extraction Items Daily": "日常提取物品",
    "Extraction Items Total": "总计提取物品",
    "Extraction Level": "提取等级",
    "Fighting Items": "战斗物品",
    "Fighting Items Daily": "日常战斗物品",
    "Fighting Items Total": "战斗物品",
    "Safehouse Level": "安全屋等级",
    "Safehouse Upgrades": "安全屋升级",
    "Strength Base Agent": "力量基础特工",
    "Strength Total Agent": "力量总计特工",
    "System Breach Base": "系统安全漏洞基础",
    "System Breach Item": "系统安全漏洞物品",
    "Total Artifacts": "总计神器",
    "Total Breach Level Reached": "总计达到的安全漏洞等级",
    "Total Chemsynthesis Actions": "总计化学合成行动",
    "Total Cyber Components": "总计赛博组件",
    "Total Cyber Harvest Actions": "总计赛博收获行动",
    "Total Energy Tap Actions": "总计能量挖掘行动",
    "Total Fighting Actions": "总计战斗行动",
    "Total Reward": "总计奖励",
    "Total System Breach Actions": "总计系统安全漏洞行动",
    "Vitality Base Agent": "活力基础特工",
    "Vitality Total Agent": "活力总计特工",
    "Reputation": "声誉",
    "Personal Boosts": "个人提升",
    "Personal Boost:": "个人提升:",
    "Temporary Consumable:": "临时消耗品:",
    "Temporary Consumables": "临时消耗品",
    "Vitality after Additive Boosts:": "附加加成后的活力：",
    "Your character has base stats, such as Vitality. Items add directly to these base stats before any boosts are applied.": "你的角色有基本属性，比如活力。物品会直接添加到这些基础属性中，然后再进行任何提升。",
    "Combined Vitality:": "综合活力：",
    "Cyber Hunter": "赛博猎人",
    "Cyber Lord": "赛博领主",
    "Daily Logic Cores": "日常逻辑核心",
    "Daily Neuro Stims": "日常神经刺激",
    "In the game, boosts enhance your character's abilities. Here's how they work:": "在游戏中，物品可以增强角色的能力。下面是它们的工作原理：",
    "Item Vitality:": "物品活力:",
    "Master Hacker": "黑客大师",
    "Multiplicative boosts are combined and applied to the already boosted stats. These include:": "乘数提升被组合并应用于已经提升的属性。这些包括:",
    "Network Overlord": "网络霸主",
    "New Base Vitality:": "新基础活力：",
    "Temporary Effect": "临时效果",
    "Multiplicative": "乘法",
    "Base Vitality:": "基础活力:",
    "Housing Boost:": "房屋提升:",
    "Housing Boosts": "房屋提升",
    "How They Work:": "它们是如何工作的：",
    "Permanent Consumable:": "永久消耗品：",
    "Permanent Consumables": "永久消耗品",
    "Syndicate Boost:": "公会提升:",
    "Syndicate Boosts": "公会提升",
    "Temporary Effect": "临时效果",
    "Value": "价值",
    "Field Jacket": "野战夹克",
    "Utility Gloves": "实用手套",
    "Your inventory is full. You can't pick up any more items.": "你的库存已经满了。你不能再捡东西了。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Cybroria": "赛博利亚",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "*": "*",
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
    "Destroy (": "摧毁 (",
    "Experience\t": "经验值\t",
    "Item Drop\t": "物品掉落\t",
    "Fighting Entity: ": "战斗实体: ",
    "Extraction: ": "提取: ",
    "Lv. ": "等级 ",
    "Operatives Online: ": "在线特工数：",
    "Sell ": "出售",
    "Action count +": "行动数量 +",
    "Chemsynthesis total +": "化学合成 总计 +",
    "Cyber Harvest total +": "赛博收获 总计 +",
    "Delete (": "删除 (",
    "Use selected (": "使用已选择的 (",
    "finance.core::leak ": "金融核心::泄漏 ",
    "unrivaled purchased Experience.  New value: ": "无可匹敌的购买 经验值。新值：",
    "unrivaled purchased Damage total.  New value: ": "无可匹敌的购买 伤害 总计。新值：",
    "unrivaled purchased Defense total.  New value: ": "无可匹敌的购买 防御 总计。新值：",
    "unrivaled purchased Strength total.  New value: ": "无可匹敌的购买 力量 总计。新值：",
    "unrivaled purchased Dexterity total.  New value: ": "无可匹敌的购买 灵巧 总计。新值：",
    "unrivaled purchased Agility loot.  New value: ": "无可匹敌的购买 敏捷 战利品。新值：",
    "unrivaled purchased Credits loot.  New value: ": "无可匹敌的购买 信用点 战利品。新值：",
    "unrivaled purchased Strength loot.  New value: ": "无可匹敌的购买 力量 战利品。新值：",
    "unrivaled purchased Strength loot.  New value: ": "无可匹敌的购买 力量 战利品。新值：",
    "unrivaled purchased Cyber Components loot.  New value: ": "无可匹敌的购买 赛博组件 战利品。新值：",
    "unrivaled purchased Neuro Stims loot.  New value: ": "无可匹敌的购买 神经刺激 战利品。新值：",
    "unrivaled purchased Power Cells loot.  New value: ": "无可匹敌的购买 动力电池 战利品。新值：",
    "unrivaled purchased Logic Cores loot.  New value: ": "无可匹敌的购买 逻辑核心 战利品。新值：",
    "unrivaled purchased Vitality loot.  New value: ": "无可匹敌的购买 活力 战利品。新值：",
    "unrivaled purchased System Breach loot.  New value: ": "无可匹敌的购买 系统安全漏洞 战利品。新值：",
    "Revoke": "撤销",
    "System Breach total +": "系统安全漏洞总计 +",
    "Vitality total +": "活力总计 +",
    "Defense total +": "防御总计 +",
    "Energy Tap total +": "能量挖掘总计 +",
    "Agility total": "敏捷总计",
    "Damage total": "伤害总计",
    "Dexterity total": "灵巧总计",
    "Ambience Mods Level ": "环境插件等级 ",
    "Weapon Cache Level ": "武器缓存等级",
    "Bio Decor Level ": "生物装饰等级",
    "You (last update: ": "你 (最后更新: ",
    "Consumables": "消耗品",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    " Actions - Extraction: Logic Cores": " 行动 - 提取: 逻辑核心",
    " Actions - Extraction: Cyber Implants": " 行动 - 提取: 赛博提取物",
    " (System Breach)": "（系统安全漏洞）",
    " (Chemsynthesis)": " (化学合成)",
    "% Shop Prices": "% 商店价格",
    "% Credits loot": "% 信用点战利品",
    " for your syndicate)": " 贡献给了公会)",
    " hour)": " 小时)",
    " (Energy Tap)": " (能量挖掘)",
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
    /^€([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^\[([\d\.]+):([\d\.]+)\]$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+) \%$/,
    /^\(([\d\.]+) \%\)$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+) \/ ([\d\.]+) \(([\d\.]+) \%\)$/,
    /^([\d\.,]+) \/ ([\d\.,]+) \(([\d\.]+) \%\)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^assets(.+)$/,
    /^season-main(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) ([\d\.]+)k \/ ([\d\.]+)k$/,
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
    /^Version ([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^A([\d\.,]+)E([\d\.,]+)$/,
    /^([\d\.]+) \% \(([\d\.,]+)\)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\+ ([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+) \(([\d\.,]+)$/,
    /^([\d\.,]+) \(([\d\.,]+)\)$/,
    /^\[([\d\.,]+)\/([\d\.,]+) ([\d\.,]+):([\d\.,]+)\]$/,
    /^([\d\.,]+) \(([\d\.]+) \%\)$/,
    /^x([\d\.,]+)$/,
    /^\- ([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.,]+) ([\d\.,]+)(.+) \/ ([\d\.,]+)(.+)$/,
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
    [/^Join the Breach \((.+) reward\)$/, '进入安全漏洞 ($1 奖励)'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^You gained (.+) experience.$/, '你获得了 $1 经验值。'],
    [/^unrivaled contributed (.+) Credits, (.+) Logic Cores, (.+) Cyber Components, (.+) Artifacts$/, '无与伦比贡献了 $1 信用点，$2 逻辑核心，$3 赛博组件，$4 神器'],
    [/^unrivaled contributed (.+) Credits, (.+) Cyber Components, (.+) Artifacts$/, '无与伦比贡献了 $1 信用点，$2 赛博组件，$3 神器'],
    [/^Do you want to destroy (.+) items\?$/, '你想摧毁 $1 件物品吗？'],
    [/^Average health left (.+) \((.+) of top (.+) agents, (.+) total\)$/, '平均生命值剩余 $1（前 $3 名特工中的 $2 名，共 $4 名）'],
    [/^Buy (.+) Artifacts for$/, '购买 $1 神器花费'],
    [/^(.+) Artifacts \((.+) Discount\)$/, '$1 神器 ($2 折扣)'],
    [/^You won after (.+) rounds and gained (.+) experience.$/, '经过 $1 轮战斗，你获得了胜利，获得了 $2 经验值。'],
    [/^The account (.+) is not activated$/, '帐户 $1 未激活'],
    [/^(.+) Actions \- Fighting Entity: (.+) \- Winrate (.+) \((.+) fights\)$/, '$1 行动 - 战斗实体: $2 - 胜率 $3（$4 战斗）'],
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
    [/^([\d\.]+) Vitality$/, '$1 活力'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^Gain ([\d\.,]+) \%$/, '获得 $1 \%'],
    [/^\(([\d\.,]+)\% reward\)$/, '($1\% 奖励)'],
    [/^\(([\d\.,]+) minute\)$/, '($1 分钟)'],
    [/^\(([\d\.,]+) minutes\)$/, '($1 分钟)'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) Credits$/, '$1 信用点'],
    [/^([\d\.,]+) day$/, '$1 天'],
    [/^([\d\.,]+) Days$/, '$1 天'],
    [/^([\d\.,]+) hour$/, '$1 小时'],
    [/^([\d\.,]+) minutes, ([\d\.,]+) second$/, '$1 分钟, $2 秒'],
    [/^([\d\.,]+) minutes, ([\d\.,]+) seconds$/, '$1 分钟, $2 秒'],
    [/^([\d\.,]+) hours, ([\d\.,]+) minutes, ([\d\.,]+) seconds$/, '$1 小时, $2 分钟, $3 秒'],
    [/^([\d\.,]+) days, ([\d\.,]+) minutes, ([\d\.,]+) seconds$/, '$1 天, $2 分钟, $3 秒'],
    [/^([\d\.,]+) days, ([\d\.,]+) hours, ([\d\.,]+) minutes, ([\d\.,]+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^([\d\.,]+) days, ([\d\.,]+) hour, ([\d\.,]+) minutes, ([\d\.,]+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^([\d\.,]+) day, ([\d\.,]+) hours, ([\d\.,]+) minutes, ([\d\.,]+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^([\d\.,]+) day, ([\d\.,]+) hour, ([\d\.,]+) minutes, ([\d\.,]+) seconds$/, '$1 天, $2 小时, $3 分钟, $4 秒'],
    [/^([\d\.,]+) minutes$/, '$1 分钟'],
    [/^([\d\.,]+) Artifacts$/, '$1 神器'],
    [/^\+([\d\.,]+) Vitality$/, '\+$1 活力'],
    [/^([\d\.,]+)\/([\d\.,]+)\/([\d\.,]+), ([\d\.,]+):([\d\.,]+) AM$/, '$3年 $1月 $2日 上午 $4:$5'],
    [/^([\d\.,]+)\/([\d\.,]+)\/([\d\.,]+), ([\d\.,]+):([\d\.,]+) PM$/, '$3年 $1月 $2日 下午 $4:$5'],
    [/^Loot Box iLvl ([\d\.,]+)$/, '战利品盒子i等级 $1'],
    [/^Weapon Cache Level ([\d\.,]+)$/, '武器缓存等级 $1'],
    [/^Cyberdeck Level ([\d\.,]+)$/, '赛博甲板等级 $1'],
    [/^Nano Floor Level ([\d\.,]+)$/, '纳米地板等级 $1'],
    [/^Sleep Pod Level ([\d\.,]+)$/, '睡眠舱等级 $1'],
    [/^Entity Level ([\d\.,]+)$/, '实体等级 $1'],
    [/^Meal Node Level ([\d\.,]+)$/, '用餐节点 等级 $1'],
    [/^Synth Kitchen Level ([\d\.,]+)$/, '合成厨房 等级 $1'],
    [/^Reinforced Panels Level ([\d\.,]+)$/, '加固板 等级 $1'],
    [/^Upgrade to House Level ([\d\.,]+)$/, '升级到房屋等级 $1'],
    [/^The next house has ([\d\.,]+) more slots$/, '下一个房子有 $1 个空位'],
    [/^Dexterity ([\d\.,]+)$/, '获得 $1'],
    [/^Vitality ([\d\.,]+)$/, '活力 $1'],
    [/^Strength ([\d\.,]+)$/, '力量 $1'],
    [/^Dexterity ([\d\.,]+)$/, '灵巧 $1'],
    [/^Agility ([\d\.,]+)$/, '敏捷 $1'],
    [/^Gain ([\d\.,]+)$/, '获得 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Entity (.+)$/, '实体 $1'],
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