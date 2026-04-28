// ==UserScript==
// @name         Glenwich 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.1
// @description  网页游戏 xxxxx (https://glenwich.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Glenwich.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://glenwich.com/favicon.png
// @license      MIT
// @include      *glenwich.com/*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/06/15 28:57
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
    "Blog": "博客",
    "Subscribe": "订阅",
    "Privacy Policy": "隐私政策",
    "Patch Notes": "更新日志",
    "Roadmap": "路线图",
    "Terms & Conditions": "条款与条件",
    "[Early Preview; v": "[早期预览; v",
    "Action": "行动",
    "Actions": "行动",
    "Activity Log": "日志",
    "ago.": "前.",
    "alchemy": "炼金",
    "Available Zone": "可用区域",
    "attack": "攻击",
    "ATT": "攻击",
    "BADGES": "徽章",
    "Begin": "开始",
    "Begin for 12 hours": "开始12小时",
    "Chat": "聊天",
    "Character Select": "角色选择",
    "Magic": "魔法",
    "magic": "魔法",
    "Leg Armour": "腿甲",
    "Lostmere": "",
    "Inventory": "背包",
    "Into the Wild": "进入荒野",
    "Map of Glenwich": "格伦维奇地图",
    "Manage Account": "管理账户",
    "Kilcarnen Wood": "基尔卡宁木头",
    "in our": "在我们的",
    "health": "生命值",
    "MODERATOR BADGE": "版主徽章",
    "mining": "采矿",
    "noobs": "菜鸟",
    "smithing": "锻造",
    "Stat": "统计",
    "South Glenwich": "南格伦维奇",
    "Strength": "力量",
    "STRENGTH": "力量",
    "strength": "力量",
    "USE": "使用",
    "Welcome back adventurer! This is what you missed whilst you were away": "欢迎回来，冒险家！这是你不在的时候错过的东西",
    "Support Glenwich and upgrade to a members account with": "支持 格伦维奇 并升级为会员帐户",
    "This player has a badge. Badges are special items that can be awarded to players for various achievements or roles.": "这个玩家有一个徽章。徽章是一种特殊的道具，可以奖励给玩家各种成就或角色。",
    "This player is a member of the moderators team. Better watch out!": "此玩家是版主团队的成员。最好小心点！",
    "This player is a member.": "这个玩家是会员。",
    "Total Level:": "总等级:",
    "Total Lvl:": "总等级:",
    "Started": "开始",
    "Stonecross": "石十字架",
    "Specific number of actions": "具体行动次数",
    "South Plaistow": "南普莱斯托",
    "recruitment": "招募",
    "Reddit giveaway": "Reddit赠品",
    "Ring Finger": "无名指",
    "ago": "前",
    "Cancel": "取消",
    "Character names must be unique. They can only contain alphanumeric characters.": "角色名称必须是唯一的。它们只能包含字母数字字符。",
    "Create Character": "创建角色",
    "Delete Character": "删除角色",
    "Enter World": "进入世界",
    "Level": "等级",
    "Glenwich": "Glenwich - 格伦维奇",
    "Last played": "上次游戏",
    "Sign Out": "登出",
    "": "",
    "Feedback": "反馈",
    "action": "行动",
    "activity log": "活动日志",
    "Assignments": "作业",
    "Brann asked me to mine copper, tin, and iron ore.": "布兰恩要我开采铜、锡和铁矿石。",
    "Bulletin Board": "公告栏",
    "Catch of the Day": "今日收获",
    "Cedric asked me to catch some fish from the nearby waters.": "塞德里克让我去附近的水域钓几条鱼。",
    "chat log": "聊天记录",
    "close": "关闭",
    "Cmb Lvl:": "战斗等级：",
    "Combat Level:": "战斗等级：",
    "Confirm Action": "确认行动",
    "Continue Playing": "继续游戏",
    "Current Location": "当前位置",
    "Discussion for new players": "新玩家讨论",
    "Draymoor": "德雷荒原",
    "Draymoor Fields": "德雷穆尔油田",
    "Dunwyke": "邓威克",
    "Dunwyke Cliffs": "邓威克悬崖",
    "East Plaistow": "东普莱斯托",
    "Equipped": "装备",
    "exchange": "交换",
    "First Chop": "第一刀",
    "Forging Your Path": "锻造你的道路",
    "Fractured Abyss": "裂缝深渊",
    "gear view": "装备视图",
    "general": "将军",
    "Guild Hall": "公会大厅",
    "Head Start": "开门红",
    "How are you finding things today?": "你今天感觉怎么样？",
    "inventory": "库存",
    "Item Detail": "物品详情",
    "Kaed asked me to craft a Wooden Pickaxe Head using logs": "凯德让我用原木制作一个木镐头",
    "Map": "地图",
    "MEMBER BADGE": "会员徽章",
    "Meridian Canyon": "子午峡谷",
    "No activity in this tab": "此选项卡中没有活动",
    "No Name": "暂无名称",
    "Party": "聚会，派对",
    "Patreon": "Patreon",
    "Plaistow": "普莱斯托",
    "players here": "这里的玩家",
    "Primordial Shop": "原始商店",
    "Qaz Hollow": "卡兹山谷",
    "Quest Log": "任务日志",
    "Riverford": "里弗福德",
    "Rock and Load": "岩石和负载",
    "Rowan asked me to chop down trees and return with logs.": "罗文让我砍树，然后带原木回来。",
    "Session Overview": "会话概述",
    "Sign Out": "登出",
    "Welcome to Glenwich": "欢迎来到格伦维奇",
    "Win": "胜利",
    "You are not doing anything.": "你什么都没做。",
    "You haven't started any quests yet.": "你还没有开始任何任务。",
    "Press": "点击",
    "to log in as": "使用身份",
    "... Or Just Fish": "... 或者只是钓鱼",
    "fishing": "钓鱼",
    "crafting": "制作",
    "Level Up!": "升级！",
    "Sign In": "登录",
    "Sign Up": "注册",
    "ranged": "远程",
    "We use": "我们使用",
    "forestry": "伐木",
    "30 x Primordial Coins every month": "每月30 *原始币",
    "as our trusted tool to manage memberships.": "作为我们值得信赖的会员管理工具。",
    "Become a Supporter": "成为支持者",
    "Continue as Guest": "以客人身份继续",
    "Equip your character with the best gear to face challenges and explore the world of Glenwich.": "为你的角色配备最好的装备来面对挑战并探索格伦威奇的世界。",
    "Exclusive Member Benefits": "专属会员权益",
    "Feature Request Board": "功能申请板",
    "Focus on skilling, combat, or be an all rounder. Glenwich offers a variety of skills to master. Level up your character and unlock new abilities.": "专注于技能，战斗，或者成为一个全面的人。格伦威奇提供多种技能。升级你的角色并解锁新的能力。",
    "Gather Resources": "收集资源",
    "Gathering resources is essential to progress in Glenwich. You can craft and smith items, alchemize them into new items, and more!": "收集资源对格伦威奇的进展至关重要。你可以制作和锻造物品，将它们炼金成新的物品，还有更多！",
    "Glenwich is an up and coming Idle MMORPG in early preview since": "格伦威奇 是一款即将上线的放置MMORPG游戏",
    "I confirm that I am over the age of 13": "我确认我已年满13岁",
    "Live Patch Notes": "实时补丁说明",
    "Play it your way! Whether you prefer to fight or fish, Glenwich has something for everyone.": "按你的方式玩！无论你喜欢打架还是钓鱼，格伦威奇都有适合每个人的东西。",
    "players online!": "玩家在线!",
    "Primordial Coins": "原始币",
    "Push new ideas and features for the game": "推动游戏的新理念和新功能",
    "Ready your Gear": "准备好装备",
    "See patch notes in near real-time": "实时查看补丁说明",
    "The Idle MMORPG": "放置MMORPG",
    "Upgrade your Adventure": "升级你的冒险",
    "We're a small indie team (officially) of one working to build Glenwich into a thriving community and game. Your support helps keep the lights on.": "我们是一个小型的独立团队，致力于将《Glenwich》打造成为一个繁荣的社区和游戏。你的支持帮助我们保持活力。",
    "You will receive an email to activate your in-game supporter status after subscribing.": "订阅后，您将收到一封电子邮件，以激活您在游戏中的支持者状态。",
    "A brilliant red gemstone": "一颗鲜红的宝石",
    "A cape awarded to those who have contributed to the betterment of the realm": "这是授予为王国的发展做出贡献的人的斗篷",
    "A chunk of ore with a silvery sheen. Might be worth smelting this": "有银色光泽的大块矿石。也许值得熔炼一下",
    "A deep blue gemstone": "深蓝色的宝石",
    "A finely balanced mithril sword": "一把平衡良好的秘银剑",
    "A heap of ashes": "一堆灰烬",
    "A nugget of bronze": "一块铜块",
    "A solid bar of refined silver. Shiny and valuable!": "精加工银条精加工银条闪亮又有价值！",
    "A source of energy": "能量的来源",
    "A sturdy iron weapon": "坚固的铁制武器",
    "A superior smithing tool": "一种高级的锻造工具",
    "A vibrant green gemstone": "一种生机勃勃的绿色宝石",
    "A woodcutter's axe": "一把樵夫的斧头",
    "Ammunition": "弹药",
    "An entry-level weapon": "一个入门级的武器",
    "Anchovies": "凤尾鱼",
    "Ashes": "灰烬",
    "Bread": "面包",
    "Buffs": "buff",
    "Can be filled with liquids": "能装满液体吗",
    "Can be milled into flour": "能磨成面粉吗",
    "Can be smelted into bronze": "能炼成青铜吗",
    "Coal": "煤",
    "Comfortable footwear": "舒适的鞋子",
    "COMMON": "普通",
    "Copper Ore": "铜矿石",
    "crush": "粉碎",
    "defence": "防御",
    "Defensive Stats": "防御属性",
    "Emerald": "翡翠",
    "Empty Minor Glass Vial": "小玻璃瓶",
    "Essential for construction": "建造必备",
    "Essential for metalworking": "金属加工必备",
    "Feather": "羽毛",
    "Feb 15th, 2025": "2025年2月15日",
    "Fishing Net": "渔网",
    "Fishing Rod": "鱼竿",
    "Flour": "面粉",
    "Food": "食物",
    "Freshly baked and filling": "新鲜出炉，馅料充足",
    "Gold Ring": "金戒指",
    "Ground wheat, ready for baking": "磨碎的小麦，准备烘烤",
    "Hand Protection": "手部防护",
    "Health Potion": "生命药水",
    "I can make stuff with this": "我可以用这个做东西",
    "It ... looks like a Minnow?": "它...看起来像鲦鱼？",
    "It could just about cut a tree": "它几乎可以砍倒一棵树",
    "It holds water": "它能装水",
    "It smells great": "闻起来好香",
    "It's heavy!": "它很重！",
    "It's light and durable": "它又轻又耐用",
    "It's sap": "它是树液",
    "Knife": "刀",
    "Leather": "皮革",
    "LEGENDARY": "传说",
    "Level Requirements": "等级要求",
    "Lighter than air!": "比空气还轻！",
    "Looks tasty": "看起来是美味的",
    "Luck Bonuses": "幸运奖金",
    "Minnow": "鲦鱼",
    "Monkey Paw": "猴爪",
    "Offensive Stats": "进攻数据",
    "PARRY": "招架",
    "Plant these in tilled soil": "把这些种在耕过的土壤里",
    "Potions": "药水",
    "Precious..": "珍贵…",
    "Probably best not to eat this": "最好不要吃这个",
    "Protects your hands": "保护你的手",
    "Provides additional defence": "提供额外的防御",
    "Restores vitality when consumed": "消耗后恢复活力",
    "Rope": "绳子",
    "Ruby": "红宝石",
    "Salmon": "大马哈鱼",
    "Salty!": "咸!",
    "Sap": "树液",
    "Sapphire": "蓝宝石",
    "Sardines": "沙丁鱼",
    "Seeds": "种子",
    "slash": "斩",
    "SLASH": "斩",
    "Solid head protection": "牢固的头部保护",
    "Solid leg protection": "坚固的护腿",
    "Solid torso protection": "坚固的躯干保护",
    "Speed:": "速度:",
    "stab": "刺",
    "STAB": "刺",
    "Sticks": "棍子",
    "Sturdy rope made from thread": "由线制成的结实的绳子",
    "Surveyors Cape": "测量师披风",
    "Suspiciously smelly": "可疑的臭味",
    "Tanned animal hide, useful for crafting": "鞣制兽皮，用于制作",
    "Thin but strong, perfect for crafting": "薄而结实，非常适合手工制作",
    "This needs refining": "这个还需要精炼",
    "Thread": "线程",
    "to Level Up": "就可以升级了",
    "Total Experience": "总经验",
    "Tuna": "金枪鱼",
    "Use this for mining": "用它来挖矿",
    "Used for tilling soil": "用于耕作的",
    "Useful for catching fish": "用于捕鱼",
    "Useful for cooking and crafting": "用于烹饪和制作",
    "Waterskin": "革制水袋",
    "Wheat": "小麦",
    "You can catch some fish with this": "你可以用这个抓一些鱼",
    "Already have an account?": "已经有账户了？",
    "and": "和",
    "Continue": "继续",
    "Create your account": "创建您的帐户",
    "Email address": "电子邮件地址",
    "I agree to the": "我同意",
    "Optional": "可选",
    "Password": "密码",
    "Secured by": "保障",
    "Sign in": "登录",
    "Terms of Service": "服务条款",
    "Username": "用户名",
    "Welcome! Please fill in the details to get started.": "欢迎光临!请填写详细资料，以便开始。",
    "Don’t have an account?": "没有账户？",
    "Email address or username": "电子邮件地址或用户名",
    "My account | Glenwich": "我的账户 | 格伦威奇",
    "Sign in to Glenwich": "登录格伦威奇",
    "Sign up": "注册",
    "Welcome back! Please sign in to continue": "欢迎回来!请登录后继续",
    "DEF": "防御",
    "cooking": "烹饪",
    "Crush": "粉碎",
    "DROP": "丢弃",
    "Drop Table": "掉落表",
    "duskwater arch": "杜斯克沃特拱门",
    "FILTERED": "过滤",
    "glenwich": "格伦维奇",
    "glenwich forest": "格伦维奇森林",
    "Inspect (WIP)": "检查(开发中)",
    "Ranged": "远程",
    "Slash": "斩",
    "Stab": "刺",
    "You chip away some iron ore": "你凿掉一些铁矿石",
    "You managed to mine some extra Coal": "成功开采了额外的煤炭",
    "You swing your pickaxe at the rock": "你在岩石上挥动鹤嘴锄",
    "Attack Bonus when using Crush style": "使用粉碎风格时的攻击加成",
    "Attack Bonus when using Slash style": "使用斩技时攻击力加成",
    "Attack Bonus when using Stab style": "使用刺击时的攻击加成",
    "Cape": "披风",
    "Chest Armour": "胸甲",
    "CRUSH": "粉碎",
    "Dorn's Gloves": "多恩的手套",
    "Dorn's lucky gloves. Said to give beginners luck.": "多恩的幸运手套。据说能给初学者带来好运。",
    "EXP": "经验值",
    "Footwear": "鞋子",
    "Gold Coins": "金币",
    "Head Protection": "头部保护",
    "I can turn this into an Axe": "我可以把它变成一把斧头",
    "Increases your max hit": "增加你的最大命中率",
    "Increases your max hit with Ranged": "增加你的远程最大命中率",
    "It's a log": "是一根木头",
    "Log": "原木",
    "Offensive Bonuses": "进攻加成",
    "RANGED": "远程",
    "Shields & Offhands": "盾牌和副手",
    "Tool Handle": "工具手柄",
    "UNCOMMON": "罕见",
    "Valuable in large quantities": "价值不菲，数量庞大",
    "Your strength level advanced to 5!": "你的力量等级提升到5！",
    "Zone Map": "区域地图",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "shards compressed with magical forces": "碎片被魔法力量压缩",
    "shard": "碎片",
    "war-door shield": "战门盾",
    "tree": "树",
    "firewood": "柴火",
    "sticks": "木棍",
    "tool handle": "工具柄",
    "bow": "弓",
    "crossbow stock": "弩柄",
    "crossbow": "弩",
    "bulwark shield": "堡垒盾",
    "deposit": "矿床",
    "helmet": "头盔",
    "maul": "槌子",
    "ore": "矿石",
    "arrow": "箭头",
    "axe": "斧",
    "axe head": "斧头头",
    "bar": "条",
    "blade": "刀片",
    "boots": "靴子",
    "dagger": "匕首",
    "dagger blade": "匕首刃",
    "full helm": "全盔",
    "gauntlets": "长手套",
    "hammer": "锤子",
    "hammer head": "锤子头",
    "hilt": "柄",
    "ingot": "锭",
    "oval shield": "椭圆盾牌",
    "pickaxe": "镐子",
    "pickaxe head": "镐子头",
    "platebody": "板甲",
    "platelegs": "板腿",
    "plateskirt": "板裙",
    "sword": "剑",
    "shield": "盾牌",
    "": "",
    "": "",
    "Shield": "盾牌",
    "Gloves": "手套",
    "Boots": "靴子",
    "Platelegs": "板腿",
    "Platebody": "板甲",
    "Nails": "钉子",
    "Hoe": "锄头",
    "Helmet": "头盔",
    "Hammer": "锤子",
    "Sword": "剑",
    "Axe": "斧子",
    "Ingot": "金属锭",
    "Ore": "矿石",
    "Pickaxe": "镐子",
    "Hiscores": "Hiscores",
    "Lostmere": "Lostmere",
    "Ashenmere": "Ashenmere",
    "Al Pisheh": "Al Pisheh",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "— Saido Labs. All Rights Reserved.": "— Saido Labs. All Rights Reserved.",
    "Copyright ©": "Copyright ©",
    "|": "|",
    "v": "v",
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
    "Adamant ": "艾德曼",
    "Bronze ": "青铜",
    "Iron ": "铁",
    "Mithril ": "秘银",
    "Leather ": "皮",
    "Steel ": "钢",
    "Wooden ": "木",
    "Silver ": "银",
    "Raw ": "生",
    "bronze ": "青铜",
    "chaotic ": "混沌",
    "wooden ": "木",
    "willow ": "柳木",
    "yew ": "紫杉",
    "primordial ": "原始",
    "obsidian ": "黑曜石",
    "obrakhil ": "奥布拉希尔",
    "": "",
    "": "",
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
    [/^([\d\.,]+) Primordial Coins$/, '$1 原始币'],
    [/^([\d\.,]+) minutes$/, '$1 分钟'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) hour$/, '$1 小时'],
    [/^([\d\.,]+)x Coal$/, '$1x 煤'],
    [/^([\d\.,]+)x Iron Ore$/, '$1x 铁矿石'],
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