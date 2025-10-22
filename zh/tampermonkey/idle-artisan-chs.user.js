// ==UserScript==
// @name         Idle Artisan 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.81
// @description  网页游戏 Idle Artisan (https://idleartisan.com/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Idle Artisan.
// @author       好阳光的小锅巴 & 麦子，ღ人生若只如初见᭄ꦿ࿐ﻬ
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://idleartisan.com/logo.png
// @license      MIT
// @include      *dleartisan.com*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/idle-artisan-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/idle-artisan-chs.user.js
// ==/UserScript==

/**
 * ---------------------------
 * Time: 2025/06/15 21:19
 * Author: guoba，ღ人生若只如初见᭄ꦿ࿐ﻬ
 * View: https://www.gityx.com/
 * ---------------------------
 */

// 1.汉化杂项
var cnItems = {
    _OTHER_: [],
    // 在 cnItems 对象中添加以下内容：

    // 玩家名称和公会名称 - 通常不汉化，但可以添加一些通用规则
    '[CH.Msinc]': '[CH.Msinc]', // 保持原样
    '[CH.Msinc]imkz': '[CH.Msinc]imkz',
    '[CH.Msinc]msinc': '[CH.Msinc]msinc',
    '[Chiggas]': '[Chiggas]',
    '[Gold Goblins]': '[Gold Goblins]',
    '[Hero]': '[Hero]',
    '[Idle Squatches]': '[Idle Squatches]',
    '[MyGO!!!!!]sion': '[MyGO!!!!!]sion',
    '[Redmane Castle]': '[Redmane Castle]',
    '[Redmane Castle]UYK123': '[Redmane Castle]UYK123',
    '[TheAnvilGuard]': '[TheAnvilGuard]',
    '[TheAnvilGuard]Ravendious': '[TheAnvilGuard]Ravendious',
    '[Universal]': '[Universal]',
    '[Universal]NooN': '[Universal]NooN',
    '[zed.city]': '[zed.city]',
    '[zed.city]baka': '[zed.city]baka',
    '[zed.city]leng0917': '[zed.city]leng0917',

    // 玩家名称 - 保持原样
    'Aaebruh': 'Aaebruh',
    'Aditare': 'Aditare',
    'adouuu': 'adouuu',
    'adskjads': 'adskjads',
    'AkraxD': 'AkraxD',
    'Alatis': 'Alatis',
    'albert89': 'albert89',
    'AM': 'AM',
    'Arquen': 'Arquen',
    'b984982794': 'b984982794',
    'baka': 'baka',
    'Barbus': 'Barbus',
    'bbknight': 'bbknight',
    'Beager': 'Beager',
    'BigFoot': 'BigFoot',
    'blibla': 'blibla',
    'CH.Msinc': 'CH.Msinc',
    'Cheese': 'Cheese',
    'choiha123': 'choiha123',
    'cornflash12': 'cornflash12',
    'd3c0d3dPT': 'd3c0d3dPT',
    'Dardas': 'Dardas',
    'Dashie': 'Dashie',
    'Deu': 'Deu',
    'DoodMang': 'DoodMang',
    'EmCz': 'EmCz',
    'Enhed': 'Enhed',
    'EsricGodbear': 'EsricGodbear',
    'FurryKing': 'FurryKing',
    'Goodknight': 'Goodknight',
    'goodluckz': 'goodluckz',
    'GweneX': 'GweneX',
    'gy812578617': 'gy812578617',
    'hanini': 'hanini',
    'Homelander': 'Homelander',
    'Hooptie': 'Hooptie',
    'jamminTheDev': 'jamminTheDev',
    'Jerokhna': 'Jerokhna',
    'Jinyou': 'Jinyou',
    'jokerandspade': 'jokerandspade',
    'KUSANG': 'KUSANG',
    'LazyCat': 'LazyCat',
    'leng0917': 'leng0917',
    'Lorrow35': 'Lorrow35',
    'Madvlad': 'Madvlad',
    'MafiosoPlays': 'MafiosoPlays',
    'magenthogany': 'magenthogany',
    'MagicOutlaw': 'MagicOutlaw',
    'Miku0o': 'Miku0o',
    'minpo19': 'minpo19',
    'Mintoure': 'Mintoure',
    'mjz19910': 'mjz19910',
    'mothman2112': 'mothman2112',
    'moz420': 'moz420',
    'msinc': 'msinc',
    'mzdw': 'mzdw',
    'N00B16': 'N00B16',
    'Neuroclastys': 'Neuroclastys',
    'NooN': 'NooN',
    'oOAshOo': 'oOAshOo',
    'Piper': 'Piper',
    'plierpuller': 'plierpuller',
    'Rasanshia': 'Rasanshia',
    'Ravendious': 'Ravendious',
    'red': 'red',
    'RiggedyRekt': 'RiggedyRekt',
    'Rol': 'Rol',
    'sam0719': 'sam0719',
    'SamScamander': 'SamScamander',
    'sion': 'sion',
    'skyler': 'skyler',
    'songonkwac': 'songonkwac',
    'superidler': 'superidler',
    'sx753951': 'sx753951',
    'Sylxter': 'Sylxter',
    'Tana': 'Tana',
    'Taoist': 'Taoist',
    'teejay': 'teejay',
    'tropicleaf': 'tropicleaf',
    'TXJ123': 'TXJ123',
    'UYK123': 'UYK123',
    'Vaicine': 'Vaicine',
    'Vexx': 'Vexx',
    'vickyovgp': 'vickyovgp',
    'Wheesel': 'Wheesel',
    'Windi': 'Windi',
    'y596125561': 'y596125561',
    'Zetter': 'Zetter',
    'zibba': 'zibba',
    'zyw64681404': 'zyw64681404',

    // 游戏内消息需要汉化
    'You feel a strange pull on your line and reel in a shimmering Abyssal Eel!': '你感觉到鱼线被奇怪地拉扯，收线时钓上了一条闪烁的深渊鳗鱼！',

    // 邮箱地址保持原样
    '[email protected]': '[email protected]',

    // 设置
    "[Community]": "[社区]",
    "Could not load party details.": "无法加载队伍详情。",
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
    "Goal": "目标",
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
    "Battler Level": "战斗等级",
    "Battler": "战斗",
    "Axe": "斧子",
    "All Items": "全部物品",
    "Action": "行动",
    "Active Buildings": "个人建筑",
    "Ancient Treant": "远古树人",
    "Total Level": "总等级",
    "Tip": "提示",
    "Time": "时间",
    "View Listings": "查看清单",
    "Username": "用户名",
    "Uncommon": "罕见",
    "Town Watch": "城镇守卫",
    "Town Watch Level": "城镇守卫等级",
    "Item": "物品",
    "Item Quality (Rarity)": "物品质量（稀有度）",
    "Iron Ore": "铁矿石",
    "Ironforge": "铁熔炉",
    "Iron Bars": "铁锭",
    "Gold Bars": "金锭",
    "Iron Bars remaining": "铁锭剩余",
    "Inventory": "库存",
    "Idle Artisan": "工匠放置",
    "Helm of Learning": "学问之盔",
    "Helm Of Learning": "学问之盔",
    "Gold": "金币",
    "Goblin Siege": "哥布林围攻",
    "Gather Logs.": "采集木头。",
    "Gather Iron Ore.": "采集铁矿石。",
    "Gathering": "采集",
    "Fight": "战斗",
    "Fight enemies to earn Gold.": "与敌人战斗以获得金币。",
    "For any questions, contact us by sending an email to": "如有任何问题，请发送电子邮件至",
    "For the purpose of maintaining game security and a fair environment for all users, the following information about users is collected (username, IP address, browser information, email address, game actions). This game also uses cookies to ensure that only authenticated users can perform game actions. This data will not be shared with any third parties, except as required by law or court order. This data is not used for marketing purposes. This game utilizes reasonable, industry standard mechanisms for protection of this information. Any users who have concerns should not create an account and play this game.": "为了维护游戏安全和所有用户的公平环境，我们收集以下用户信息（用户名、IP地址、浏览器信息、电子邮件地址、游戏操作）。该游戏还使用cookie来确保只有经过身份验证的用户才能执行游戏操作。除法律或法院命令要求外，这些数据不会与任何第三方共享。此数据不用于营销目的。本游戏利用合理的行业标准机制来保护这些信息。任何有顾虑的用户都不应该创建帐户并玩这个游戏。",
    "Fair Play": "公平竞争",
    "Experience": "经验值",
    "Event": "事件",
    "Equipped Items": "已装备物品",
    "Epic": "史诗",
    "Enhance": "强化",
    "Delete Account": "删除账户",
    "Delete My Account": "删除我的账户",
    "Select All": "全选",
    "Scrap All": "全部回收",
    "Select None": "未选择",
    "Sell Items": "出售物品",
    "Server-Wide Events": "服务器级事件",
    "Stats": "统计",
    "Status Log": "状态日志",
    "Storage Barn Level": "仓库等级",
    "Storage Barn": "仓库",
    "Sword": "剑",
    "Woodcutting": "伐木",
    "Crafting": "制作",
    "Crafting Level": "制作等级",
    "Crafting Table": "合成台",
    "Crafting (Level": "制作 (等级",
    "Craft": "制作",
    "Core Skills": "核心技能",
    "Confirm your password": "确认你的密码",
    "Buy All": "购买全部",
    "Buy": "购买",
    "Community": "社区",
    "Join Event": "加入事件",
    "Join the": "加入",
    "Leaderboard": "排行榜",
    "Log Out": "登出",
    "Logs": "木头",
    "Craft Attempts": "制作次数",
    "Dark Mode (Beta)": "深色模式 (测试)",
    "Game Ticks": "游戏时刻(Tick)",
    "Gold Bars remaining": "金锭剩余",
    "item quality": "物品品质",
    "Market": "市场",
    "Marketplace": "市场",
    "Max": "最大",
    "Merchant": "商人",
    "Min": "最小",
    "Mining": "采矿",
    "Mining Level": "采矿等级",
    "No bonus or penalty.": "没有奖励或惩罚。",
    "[Common]": "[普通]",
    "Battler's Bar": "战士酒吧",
    "Battler's Bar Level": "战士酒吧等级",
    "Account Security": "账户安全",
    "Battling": "战斗",
    "Battling Bonus": "战斗加成",
    "Category": "类型",
    "Boss Fight": "Boss对抗",
    "Boss Tokens": "Boss代币",
    "Bug Exploitation": "漏洞利用",
    "Choose your activity": "选择你的活动",
    "Common": "普通",
    "Community Buildings": "社区建筑",
    "Contribute": "贡献",
    "Cooperative Fights": "合作作战",
    "Crafting Table Level": "合成台等级",
    "A Guide to Success and Quality": "成功和质量指南",
    "Each player is permitted to own and operate only one account. Creating multiple accounts (\"alts\") to gain an unfair advantage, bypass restrictions, or interact with your main account is strictly prohibited. If your household has more than one player, ensure that those accounts do not interact with each other (market trading or otherwise).": "每个玩家只能拥有和操作一个账号。严格禁止创建多个帐户（\"alt\"）以获得不公平的优势，绕过限制或与您的主帐户交互。如果你的家庭有多个玩家，确保这些账户不相互影响（市场交易或其他）。",
    "Goldforge Level": "金熔炉等级",
    "Goldforge": "金熔炉",
    "Good luck, and happy gaming!": "祝你好运，游戏愉快！",
    "Guild of Alchemists": "炼金师公会",
    "Guild of Alchemists Level": "炼金师公会等级",
    "Helm": "头盔",
    "If your craft succeeds, the game then determines the item's quality, ranging from Poor to Epic. This is determined by a \"Quality Score\" calculated on every craft. Your score is influenced by your Crafting Level (which adds a bonus), the item's level (which adds a penalty), and the server-wide bonus from the": "如果你的制作成功了，游戏就会决定道具的质量，从差到史诗。这是由每个工艺计算的\"质量分数\"决定的。你的分数受到你的锻造等级（会增加奖励）、道具等级（会增加惩罚）和服务器范围内的奖励的影响",
    "Refresh": "刷新",
    "Respectful Conduct": "尊重他人",
    "Rune Shards": "符文碎片",
    "Runic Golem": "符文魔像",
    "Rules": "规则",
    "Ironforge Level": "铁熔炉等级",
    "Lumberjack Shack": "伐木工小屋",
    "Lumberjack Shack Level": "伐木工小屋等级",
    "Main": "主界面",
    "Pickaxe": "镐子",
    "Planks": "木板",
    "Planks remaining": "木板剩余",
    "Play fair and respect the spirit of the game. The game staff reserves the right to take action against any behavior deemed harmful to the game or its community, even if not explicitly listed here.": "公平竞争，尊重比赛精神。游戏工作人员保留对任何被认为对游戏或社区有害的行为采取行动的权利，即使这里没有明确列出。",
    "Players that choose to \"cross-trade\" with another game do so at their own risk.": "选择与另一款游戏\"交叉交易\"的玩家需要自担风险。",
    "Poor": "劣质",
    "[Poor]": "[劣质]",
    "Post To Market": "发布到市场",
    "Price": "价格",
    "Price/Item (Gold)": "价格/物品 (金币)",
    "Privacy Policy": "隐私政策",
    "Prospector's Lodge": "勘探者小屋",
    "Prospector's Lodge Level": "勘探者小屋等级",
    "Quantity": "数量",
    "Quartermaster's Workshop": "军需工坊",
    "Quartermaster's Workshop Level": "军需工坊等级",
    "Rare": "稀有",
    "Reduces the resource costs of tools, refining buildings, and community buildings by 1.5% per level.": "每级降低1.5%的工具、精炼建筑和社区建筑的资源成本。",
    "Refine materials and create items.": "精炼材料，制作道具",
    "Welcome to the Game!": "欢迎来到游戏！",
    "Treant Resin": "树人树脂",
    "Total Game Ticks Played": "游戏时刻(Tick)总数",
    "Woodcutting Bonus": "伐木加成",
    "Woodcutting Level": "伐木等级",
    "You have no active listings.": "你没有可用清单。",
    "Your": "你的",
    "Your Active Listings": "你的上架清单",
    "You are responsible for the security of your own account. Do not share your password with anyone. Game staff will never ask for your password.": "您对自己的帐户安全负责。不要与任何人分享你的密码。游戏工作人员永远不会问你的密码。",
    "Your goal is to become the most skilled and wealthiest player by leveling up your skills, crafting powerful gear, and mastering the player-driven market. This guide covers the core mechanics to get you started.": "你的目标是通过升级你的技能，制作强大的装备，并掌握玩家驱动的市场，成为最熟练和最富有的玩家。本指南涵盖了让您入门的核心机制。",
    "Your journey is defined by four core skills. You gain experience (XP) by performing related activities, which you can select on the \"Main\" tab.": "你的人生旅程由四项核心技能决定。您可以通过执行相关的活动来获得经验（XP），您可以在\"主界面\"选项卡上选择。",
    "your Pickaxe, Axe, or Sword, permanently increasing its power.": "你的镐子、斧头或剑，永久增加其威力。",
    "Select the categories you want displayed in the Status Log": "选择要在状态日志中显示的类别",
    "Leave Event": "离开事件",
    "Place Bid": "出价",
    "Thief Event": "盗贼事件",
    "Thief": "盗贼",
    "To ensure Idle Artisan remains a fair and enjoyable experience for everyone, all players are expected to adhere to the following rules. Violations may result in temporary or permanent suspension of your account.": "为了确保 Idle Artisan 对每个人来说都是一个公平和愉快的体验，所有玩家都应该遵守以下规则。违规可能会导致您的帐户暂时或永久封号。",
    "(Boss Fight, Ancient Treant, Runic Golem) - All players can join to deal damage to a powerful world boss and earn a share of special resources.": "（Boss战，远古树人，符文魔像）-所有玩家可以加入对一个强大的世界Boss造成伤害，并获得一份特殊资源。",
    "(Mining, Woodcutting, Battling, Crafting) - For a short time, all XP gains for the specific skill are doubled.": "（采矿，伐木，战斗，制作）-在短时间内，所有的经验所得的特定技能加倍。",
    "(Purchasing Agent, Tax Season, Trade Ship) - These events temporarily change the rules of the market, creating new opportunities for savvy traders.": "（采购代理，税收季节，贸易船）-这些事件暂时改变了市场规则，为精明的交易者创造了新的机会。",
    ", and then, if successful, a roll for": "，然后，如果成功了，就掷出",
    ", which grants bonus XP to any skill when equipped.": "，当装备时，任何技能都能获得额外的经验值。",
    "; hitting the cap shows the resource in": "; 点击上限显示资源在",
    "\"Community\"": "\"社区\"",
    "Sawmill": "锯木厂",
    "Sawmill Level": "锯木厂等级",
    "Rune Shards remaining": "符文碎片剩余",
    "Skill Bonus Events": "技能加成事件",
    "Special Resources & Item Enhancement": "特殊资源 & 物品强化",
    "success or failure": "成功或失败",
    "Success vs. Failure": "成功或失败",
    "tab allows all players to contribute resources to upgrade shared buildings that provide powerful, permanent bonuses to everyone on the server.": "标签页允许所有玩家贡献资源来升级共享建筑，为服务器上的每个人提供强大的永久加成。",
    "The": "",
    "The game features a cycle of automated events that provide unique opportunities and challenges for all players.": "游戏的特点是自动事件循环，为所有玩家提供独特的机会和挑战。",
    "The same player, still at Crafting Level 20, attempts to craft a Level 25 Pickaxe. Because the item is a higher level than their skill, the chance of failure is significant. If they do succeed, their Quality Score will have a penalty, making it more likely they will create a Common or Poor item, but a lucky roll could still result in something great.": "同一名玩家，仍然在制作20级，试图制作25级的镐。因为道具的等级高于玩家的技能等级，所以玩家的失败几率也非常大。如果他们成功了，他们的质量分数将受到惩罚，这将使他们更有可能创造一个普通或劣质的道具，但幸运的投掷仍然可能导致一些伟大的东西。",
    "The use of scripts, bots, macros, or any form of automation to play the game is forbidden. All actions must be performed manually by the player.": "禁止使用脚本、机器人、宏或任何形式的自动化来玩游戏。所有动作必须由玩家手动执行。",
    "This game is intended for users that are over 18 years of age. We do not knowingly collect information from users below this age.": "这个游戏是为18岁以上的用户准备的。我们不会故意收集这个年龄以下用户的信息。",
    "This will permanently delete your account. This cannot be undone.": "这将永久删除您的帐户。这是无法挽回的。",
    "to chat with other players and give feedback on the game.": "与其他玩家聊天并提供游戏反馈。",
    "Earned from the": "获得自",
    "Economic Events": "经济事件",
    "Equip": "装备",
    "Cross-trade guidance": "买空卖空的指导",
    "Crafting is the most rewarding way to acquire powerful gear, but it comes with both risk and opportunity. Every crafting attempt is a two-step process: first, a check for": "锻造是获得强大装备的最有价值的方式，但它同时伴随着风险和机会。每次制作尝试都有两个步骤：首先，检查",
    "At any time, and for any reason, you can delete your account which will permanently delete all of this information from the server. This action can be completed under the in-game Options menu.": "在任何时候，出于任何原因，您可以删除您的帐户，这将从服务器上永久删除所有这些信息。这个动作可以在游戏内的选项菜单下完成。",
    "A thief may steal a random item from one player's inventory. This can be countered by the": "小偷可以从一个玩家的物品清单中随机窃取一个物品。这可以通过",
    "A server-wide auction for a single tool. A great way to spend your Gold!": "针对单个工具的服务器范围拍卖。一个伟大的方式来花你的金币！",
    "A player with Crafting Level 20 attempts to make a Level 5 Pickaxe. Their high skill level gives them a very high chance of success. For item quality, their skill advantage provides a large bonus to their Quality Score, making it much more likely they will create a Rare or even Epic tool.": "锻造等级20的玩家尝试制作5级的镐子。他们的高技能等级使他们有很高的成功机会。就道具质量而言，他们的技能优势为他们的质量分数提供了巨大的奖励，使他们更有可能创造稀有甚至史诗工具。",
    "Nothing Equipped": "未装备",
    "No Botting or Automation": "没有机器人或自动化",
    "One Account Per Person": "一人一帐户",
    "Rev History": "版本日志",
    "Many features in the game have tooltips. You can click or tap an item to get more information about it.": "游戏中的许多功能都有工具提示。您可以单击或轻敲某个项目以获取有关该项目的更多信息。",
    "Masterwork Atelier": "杰作工作室",
    "Masterwork Atelier Level": "杰作工作室等级",
    "If your Crafting Level is higher than the item's level, your chance of success is high. If you try to craft an item that is a much higher level than your own skill, the chance of failure increases significantly. A failed craft will consume your resources, so be mindful of the risks!": "如果你的制造等级高于道具等级，你成功的几率就会很高。如果你试图制作一个比你自己的技能等级高得多的道具，那么失败的几率就会大大增加。失败的飞船会消耗你的资源，所以要注意风险！",
    "In addition to standard materials, you can acquire special resources from cooperative events. These are used to craft and improve the most powerful items in the game.": "除了标准材料外，您还可以从合作活动中获取特殊资源。这些工具用于制作和改进游戏中最强大的道具。",
    "Intentionally exploiting a bug, glitch, or loophole for personal gain is not allowed. If you discover a bug, please report it to the game staff immediately through the": "不允许故意利用错误、故障或漏洞谋取个人利益。如果你发现了bug，请立即通过",
    "is the most important factor in this process. When you attempt to craft an item, the game compares your skill level to the level of the item you want to create.": "是这个过程中最重要的因素。当你尝试制作道具时，游戏会将你的技能等级与你想要制作的道具等级进行比较。",
    "Harassment, hate speech, threats, or any form of abusive behavior towards other players or staff will not be tolerated. Keep all interactions respectful and constructive.": "对其他玩家或工作人员的骚扰、仇恨言论、威胁或任何形式的虐待行为都是不被容忍的。保持所有的互动都是尊重和建设性的。",
    "Game Rules & Code of Conduct": "游戏规则和行为准则",
    "event. Required to craft the unique": "事件。需要制作独特的",
    "event. Used to": "事件。用于",
    "event. Required to contribute to high-level Community Buildings.": "事件。需要为高级社区建筑做出贡献。",
    "A cooperative defense event where all players must protect a community building from being pillaged.": "一个合作防御事件，所有玩家必须保护社区建筑不被掠夺。",
    "A new version is available. Please refresh to get the latest updates.": "有新版本。请刷新以获取最新更新。",
    "10x more storage for all resources (except gold) per level. Base capacity is": "每级增加10倍所有资源的存储空间（金币除外）。基础容量为",
    "+1 bonus per level to an item's \"Quality Score\" when it is crafted.": "当物品制作时，每级增加1点\"质量分数\"。",
    "+2% chance per level to arrest the Thief (caps at 100%). Also grants +1% damage per level in all cooperative combat events.": "每级+2%的机会逮捕盗贼（上限为100%）。同时在所有协同战斗事件中每级增加1%的伤害。",
    "Refining": "精炼",
    "Example 1: An Easy Craft": "例子1：简单的制作",
    "Example 2: A Risky Craft": "例子2：有风险的制作",
    "community building. A higher Quality Score gives you a better chance at rolling a high-rarity item. Each rarity provides a different bonus to the tool's final power": "社区建设。质量分数越高，你掷出稀有物品的几率就越大。每一件稀有性都为工具的最终力量提供了不同的加成",
    '"Sap-hardened, edge-sharpened. The forest remembers."': '"树液硬化，棱角锋利。森林会记得的。"',
    "TradeShip": "贸易船",
    "Trade Ship": "贸易船",
    "Mining Bonus": "采矿加成",
    '"Did I just see a shadow?\"': '"我刚才是不是看到了一个影子？"',
    "Arrest Chance": "逮捕几率",
    "The thief is known to steal tools from people when they're not paying attention...": "众所周知，这个小偷会在人们不注意的时候偷走工具...",
    '"The crowd roars; glory and gold await.\"': '"人群怒吼着；荣耀和金币在等着你。"',
    "and you get 1 extra Battler XP during this event.": "在此活动期间，您将获得1个额外的战斗经验。",
    "Gold gain is": "金币增益是",
    '"Hands steady, hearts keen, masterpieces are made today.\"': '"双手坚定，心灵敏锐，今日成就杰作。"',
    "Crafting Bonus": "制作加成",
    "Refining and crafting give 1 extra XP during this event.": "精炼和制作在此活动中给予1额外的经验值。",
    '"Who said I got this item from the Thief? You can\'t prove anything..."': '"谁说我从小偷那里得到这个东西的？你什么都证明不了..."',
    "Adds +0.25 to base power and +0.10 to rarity multiplier.": "增加+0.25基础力量和+0.10稀有度乘数。",
    "Enhance Axe": "强化斧头",
    "Enhance Pickaxe": "强化镐子",
    "Not enough Treant Resin.": "没有足够的树人树脂。",
    "Purchasing Agent": "采购代理",
    "The agent's motives are unknown, but their coin is always good.": "代理人的动机是未知的，但他们的金币总是好的。",
    "The Purchasing Agent will buy a random quantity of a random resource from one seller on the market.": "采购代理将从市场上的一个卖家那里购买随机数量的随机资源。",
    "Tax Season": "税收季节",
    "[Epic]": "[史诗]",
    "[Good]": "[良好]",
    "[Great]": "[优秀]",
    "[Fine]": "[精致]",
    "[Masterwork]": "[大师]",
    "[Legendary]": "[传奇]",
    "Scrap Value (per item)": "回收价值 (单个物品)",
    "This is a sidegrade.": "这个装备和你身上的一样。",
    "Equipped": "已装备",
    '"Sap flows quick and axes sing."': '"汁液流得快，斧子唱得响。"',
    "and you get 1 extra Woodcutting XP during this event.": "在此活动期间，您将获得额外1伐木经验。",
    "Adds a bonus to your \"Crafting Quality Score\" for every item you make. A higher score directly increases the chance of creating high-rarity items.": "为你制作的每件物品增加一个奖励到你的\"制作质量分数\"。分数越高，创造稀有道具的机会就越高。",
    "Battler's Bar (Level 3)": "战士酒吧（要求等级3）",
    "Beakers bubble; yields rise.": "烧杯泡沫;收益率上升。",
    "Current Capacity": "当前容量",
    "Current Effect": "当前效果",
    "Each level reduces the resource costs for crafting personal items, refining buildings, and community buildings by 1.5%.": "每升一级，制作个人物品、精炼建筑和社区建筑的资源成本降低1.5%。",
    "Enhance Sword": "加强剑",
    "Gain +1% Gold per level.": "每升一级+1%金币",
    "Gain +1% Iron Ore per level.": "每升一级+1%的铁矿石。",
    "Gain +1% Logs per level.": "每升一级增加1%的木头。",
    "Gain +1% refining output (Iron Bars, Planks, Gold Bars) per level; inputs unchanged.": "每升一级增加1%精炼产量（铁锭，木板，金锭）；投入不变。",
    "Increase all storage 10x per level.": "每级增加10倍的存储空间。",
    "Next Level": "下一级",
    "Smells like fresh pine and bold plans.": "闻起来像新鲜的松木和大胆的计划。",
    "Tales grow taller with every mug raised.": "杯子越盛，故事越长。",
    "The heart of communal prosperity.": "共同繁荣的核心。",
    "Where good becomes great - we craft with finesse.": "在善变得伟大的地方，我们用技巧来制作。",
    "Where miners trade secrets over a hearty stew.": "矿工们一边吃着丰盛的炖菜一边交换秘密。",
    "With eyes on every corner, thieves mind their step.": "小偷的眼睛监视着每一个角落，小心脚下。",
    "Logs gain is": "木头增益",
    "doubled": "翻倍",
    '"Steel sings, shields break. Stand together or fall alone."': '"钢铁会唱歌，盾牌会破裂。要么并肩作战，要么独自倒下。"',
    "<-- !! Building under Goblin Siege !! -->": "<-- !! 哥布林围攻中的建筑 !! -->",
    "Build Barricades": "建造路障",
    "Community (Siege!)": "社区 (围攻!)",
    "grows with the number of participants!": "随着参与者数量的增加而增长！",
    "Join to deal battle damage based on your Battling power. The total reward pool of Boss Tokens": "加入并根据你的战斗能力造成战斗伤害。Boss代币的总奖励池",
    "Reinforce Walls": "加固城墙",
    "Rewards are split based on damage and time contributed. The base pool starts at 100 and increases by 1% on each success.": "奖励是根据伤害和时间分配的。基本池从100开始，每次成功增加1%。",
    "Sharpen Swords": "磨剑",
    "Town Watch Bonus": "城镇守卫加成",
    "This is an upgrade.": "这个装备比你身上的好。",
    "[Rare]": "[稀有]",
    "[Uncommon]": "[罕见]",
    "This is a downgrade.": "这个装备比你身上的差。",
    "Seller": "卖家",
    "Rank": "排名",
    "\"A nail saved is a nail earned. Here, we waste nothing.\"": "\"省一颗钉子就是赚一颗钉子。在这里，我们什么也不浪费。\"",
    "Benefit": "增益",
    "\"Its roots are deep and its patience endless. Bring axes and allies.\"": "\"它的根是深的，它的耐心是无穷的。带上斧头和盟友。\"",
    "Join to deal chop damage based on your Woodcutting power. The total reward pool of Treant Resin": "加入并造成砍伤基于你的伐木力量。树人树脂的总奖励池",
    "\"Magic gave it form, but stone is still stone. Find the cracks, and shatter its core.\"": "\"魔法赋予了它形体，但石头还是石头。找到裂缝，打碎它的核心。\"",
    "Join to deal pick damage based on your Mining power. The total reward pool of Rune Shards": "加入并根据你的采矿能力造成采集伤害。符文碎片的总奖励池",
    "Rewards are split based on damage and time contributed. The base pool starts at 1000 and increases by 1% on each success.": "奖励是根据伤害和时间分配的。基本池从1000开始，每次成功增加1%。",
    "and you get 1 extra Mining XP during this event.": "并且在此活动中您将获得1额外的采矿经验值。",
    "\"The veins run rich; swing while fortune smiles.\"": "\"矿脉丰富；时来运转。\"",
    "Iron Ore gain is": "铁矿石增益",
    "--Crafting Active--": "--正在制作--",
    "But you are not alone. Join forces with the entire server to contribute to massive community buildings that grant permanent bonuses to all. Band together to defend the town from the relentless Goblin Siege, take down epic world bosses for unique rewards, and outbid your rivals in server-wide auctions for one-of-a-kind items. Whether you're crafting the sword that turns the tide or placing the winning bid on it, your actions will shape the history of this world.": "但你并不孤单。与整个服务器联合起来，为大规模的社区建筑做出贡献，为所有人提供永久的奖励。团结起来保卫小镇免受无情的地精围攻，拿下史诗般的世界boss以获得独特的奖励，并在服务器范围内拍卖独一无二的物品。无论你是在制作一把扭转乾坤的剑，还是在竞标中胜出，你的行动都将塑造这个世界的历史。",
    "Idle Artisan is an Idle PBBG (persistent browser-based game) where your skill and strategy shape your destiny. Begin your journey as a humble gatherer, mastering the arts of Mining, Woodcutting, and Battling to collect valuable resources. Refine these materials and hone your Crafting skill to create powerful tools and gear, or trade your goods on a dynamic, player-driven market to build your fortune. Will you become a legendary crafter, a wealthy merchant, or a renowned warrior?": "《工匠放置》Idle Artisan 是一款基于网页的持久化PBBG游戏，你的技能和策略决定了你的命运。作为一个卑微的采集者开始你的旅程，掌握采矿、木刻和战斗的艺术来收集有价值的资源。精炼这些材料，磨练你的锻造技能，创造强大的工具和装备，或者在一个动态的、玩家驱动的市场上交易你的商品来积累你的财富。你会成为一个传奇的工匠，一个富有的商人，还是一个著名的战士？",
    "Change Password": "修改密码",
    "Change your password by entering your username, current password, and a new password.": "通过输入用户名、当前密码和新密码来更改密码。",
    "Confirm New Password": "确认新密码",
    "Confirm Password": "确认密码",
    "Create Account": "创建账户",
    "Current Password": "当前密码",
    "Email": "电子邮件",
    "Forgot your password?": "忘记密码了？",
    "Forgot your password? Enter your username and we'll send a reset link to the email associated with your account. Or, if you remember your current password, you can change it below.": "忘记密码了？输入您的用户名，我们将发送一个重置链接到与您的帐户相关联的电子邮件。或者，如果您记得当前的密码，您可以在下面更改它。",
    "Log in or create an account to begin.": "登录或创建一个帐户开始。",
    "Login": "登录",
    "New Password": "新密码",
    "Password": "密码",
    "Register": "注册",
    "Rules and Privacy Policy": "规则及私隐政策",
    "Send Reset Email": "发送重置邮件",
    "Welcome to Idle Artisan": "欢迎来到 工匠放置（Idle Artisan）",
    "\"You wanna buy or not? I ain't got all day.\"": "\"你到底买不买？我可没那么多时间。\"",
    "A ship arrives with a full cargo bay and offers to sell a single resource on the market at a discount.": "一艘船满载货舱抵达，并在市场上以折扣价出售一种资源。",
    "Place the highest bid to win! Your gold will be returned if you are outbid.": "出价最高即可获胜！如果出价高于你，你的金币将被退还。",
    "Minimum Bid": "最低出价",
    ", paid by the buyer.": "，由买方支付。",
    "\"The crown demands its due. Best to pay up.\"": "\"王权自有其分。最好还是付钱吧。\"",
    "All purchases from the player market are subject to a": "所有从玩家市场购买的物品都将受到限制",
    "Cancel": "取消",
    "[Unique]": "[独特]",
    "A community building is under attack! All players must work together to defend it. Check the Community tab to see which building is targeted and how you can help.": "社区建筑遭到袭击！所有玩家必须齐心协力守护它。查看社区选项卡，查看目标建筑以及您可以如何提供帮助。",
    "Fight information (goblins, boss, treant, golem)": "战斗信息（哥布林，Boss，树人，魔像）",
    "input resources to produce": "输入资源生产",
    "Ironforge, Sawmill, & Goldforge": "铁熔炉，锯木厂 & 金熔炉",
    "output resources per tick.": "输出资源每刻(Tick)。",
    "Personal Buildings": "个人建筑",
    "The level of the crafting table determines the maximum level of personal buildings and tools you are able to craft. You cannot craft an item or building of a level higher than your Crafting Table's level.": "合成台的等级决定了你能够合成的个人建筑和工具的最高等级。你不能制造高于你的合成台等级的物品或建筑。",
    "The output of these buildings is further increased by the server-wide": "这些建筑的输出在服务器范围内进一步增加",
    "These are buildings you craft for yourself on the \"Main\" tab. Upgrading them increases your personal production capabilities and unlocks higher-level crafting recipes.": "这些是你在\"主界面\"选项卡上为自己制作的建筑。升级它们可以提高你的个人生产能力并解锁更高等级的制作配方。",
    "These buildings refine raw materials into crafting components. Their efficiency scales linearly with their level": "这些建筑将原材料提炼成制作组件。他们的效率与他们的等级成线性关系",
    "building consumes": "建筑消耗",
    "Allows creation of level 1 refining buildings and items.": "可以创建1级精炼建筑和道具。",
    "Buy Max": "购买最大",
    "Costs": "成本",
    "Distant War Drums": "遥远的战鼓",
    "Effect at this Level": "此等级效果",
    "Failure Chance": "失败几率",
    "per tick to any skill.": "每刻(Tick)到任何技能。",
    "Rarity Chances (on success)": "稀有度几率 (成功时)",
    "rarity.": "稀有度.",
    "This item has a": "这个物品有一个",
    "Unique": "独特",
    "When equipped, it will grant": "当装备好后，它会授予",
    "Helm of Learning Level": "学问之盔等级",
    "\"A low, rhythmic thumping that grows louder with every passing moment. \"": "\"一种低沉的、有节奏的砰砰声，随着时间的流逝而变得越来越响。\"",
    "The Town Watch reports the sound of goblin war drums echoing from the hills. They estimate that the goblins are about 30 seconds away.": "城镇守卫报告说，小山间回荡着妖精的战鼓声。他们估计半兽人大约30秒就到。",
    "\"To arms! The green tide is upon us!\"": "\"拿起武器！绿潮正在向我们袭来！\"",
    "Highest Bid": "最高报价",
    "\"Knowledge is the sharpest tool. Every page turned, every lesson learned, strengthens us all.\"": "\"知识是最锋利的工具。翻开的每一页，学到的每一课，都让我们更加强大。\"",
    "(Mining, Woodcutting, Battling, Crafting) - For a short time, 1 extra XP is awarded for the associated activity.": "（采矿，伐木，战斗，制作）-在短时间内，1额外的经验奖励相关活动。",
    "Each level of the Grand Library grants +1 bonus XP per tick to all gathering skills (Mining, Woodcutting, and Battling).": "每升一级大图书馆，所有收集技能（采矿、伐木和战斗）每刻(Tick)增加1点经验值。",
    "Gain +1% Gold per level and +1 Battler XP per tick per level.": "每级+1%金币，每级+1战斗经验.",
    "Gain +1% Iron Ore per level and +1 Mining XP per tick per level.": "每级+1%铁矿石，每级+1采矿经验.",
    "Gain +1% Logs per level and +1 Woodcutting XP per tick per level.": "每级+1%木头，每级+1伐木经验.",
    "The Grand Library Level": "大图书馆等级",
    "Dark Mode": "深色模式",
    "XP": "经验值",
    "On failure, 25% of the resources will be refunded.": "如果失败，将退还25%的资源。",
    "+1% Gold gathered per level and +1 Battler XP per tick per level.": "每级+1%金币采集，每级+1每刻(Tick)的战斗经验。",
    "+1% Logs gathered per level and +1 Woodcutting XP per tick per level.": "每级+1%木头采集，每级+1每刻(Tick)的伐木经验。",
    "+1% Iron Ore gathered per level and +1 Mining XP per tick per level.": "每级+1%铁矿石采集，每级+1每刻(Tick)的采矿经验。",
    "Each level grants +1 bonus XP per tick to all gathering skills (Mining, Woodcutting, and Battling).": "每一等级给予所有收集技能（采矿，伐木和战斗）每刻(Tick) +1额外经验值。",
    "If your Crafting Level is higher than the item's level, your chance of success is high. If you try to craft an item that is a much higher level than your own skill, the chance of failure increases significantly. If a craft fails, 25% of the resources used in the attempt will be refunded to you.": "如果你的制造等级高于物品的等级，那么你的成功几率就会很高。如果你试图制作一个比自己的技能水平高得多的物品，失败的几率就会大大增加。如果制作失败，将会返还25%的制作资源。",
    "A cooperative defense event where all players must protect a community building from being pillaged. All participants receive a temporary gathering buff at the end of the event: a 10% bonus for a victory ('Victorious Morale') or a 5% bonus for a defeat ('Defender's Resolve').": "一个合作防御事件，所有玩家必须保护社区建筑不被掠夺。所有参与者在活动结束时都会获得一个临时的收集buff：胜利获得10%的奖励（\"胜利的士气\"），失败获得5%的奖励（\"防御者的决心\"）。",
    "The Grand Library": "大图书馆",
    "These buildings also grant bonus Crafting XP per tick, equal to their level minus one (e.g., a Level 6 building grants +5 bonus XP per tick).": "这些建筑每刻（Tick）给予玩家额外的锻造经验值，等于其等级减1（例如，6级建筑每刻（Tick）给予玩家+5额外经验值）。",
    "your Pickaxe, Axe, or Sword, permanently increasing its power by adding +0.25 to its base power and +0.10 to its rarity multiplier.": "你的镐子、斧子或剑，通过增加+0.25的基础力量和+0.10的稀有乘数永久提高其力量。",
    "\"Though the defenses were breached, the town's spirit remains unbroken. We will rebuild, stronger than before.\"": "\"虽然防御工事已被攻破，但小镇的精神依然坚不可摧。我们将重建，比以前更强大。\"",
    "Enhanced": "已强化",
    "Defender's Resolve": "防守者的决心",
    "\"The town celebrates its heroes! For a short time, every swing of the axe and strike of the pick feels lighter.\"": "\"这个小镇庆祝它的英雄！\"有那么一小段时间，每挥动一次斧头，每敲击一次镐头，都感觉更轻了。\"",
    "Victorious Morale": "胜利士气",
    "-These new power levels apply to tools created after version 1.07 is released.": "-这些新的功能等级适用于1.07版本发布后创建的工具。",
    "Doubles the speed of refining materials (consuming double the input for double the output) and provides a significant bonus to item quality when crafting tools, making it a prime time to create high-rarity gear.": "精炼材料的速度翻倍（消耗双倍的投入产出双倍的产出），并在制作工具时提供显著的物品质量奖励，使其成为创造高稀有装备的黄金时间。",
    "Gathering Bonus Events": "采集加成事件",
    "(Mining, Woodcutting, Battling) - These events provide a temporary boost to their respective gathering skills, doubling resource gains and granting bonus XP.": "（采矿，伐木，战斗）-这些事件提供了一个暂时的提高他们各自的收集技能，加倍的资源收益和给予额外的经验。",
    "Scholar's Study": "学者书房",
    "Scholar's Study Level": "学者书房等级",
    "A quiet room for contemplation, filled with scrolls, maps, and ledgers. Each level represents a deeper understanding of logistics and planning, allowing you to manage your affairs for longer while you are away. Each level provides 1 hour offline time, with a max level of 10.": "一个安静的房间，里面摆满了卷轴、地图和账本。每一层代表了对后勤和计划的更深入的理解，允许你在离开时管理你的事务更长的时间。每一级提供1小时的离线时间，最高等级为10级。",
    "Your Pending Applications": "你的待处理申请",
    "Apply to Join": "申请加入",
    "Apply to join an existing Conclave.": "申请加入一个现有的公会。",
    "Available Conclaves": "可用的公会",
    "Conclave Name": "公会名称",
    "Establish a new Conclave and become its founder. This will allow you to invite other players to join you.": "建立一个新的公会，并成为它的创始人。这将允许你邀请其他玩家加入你。",
    "Found a Conclave": "寻找一个公会",
    "Found Conclave": "创建公会",
    "Join a Conclave": "加入一个公会",
    "Conclave": "公会",
    "Cost to Found": "发现成本",
    "Cost (this enhance)": "成本 (本次强化)",
    "Costs increase by 10x after each enhancement.": "每次强化后成本增加10倍。",
    "Current Enhancements": "当前强化",
    "Each enhancement adds +0.25 to base power and +0.10 to rarity multiplier.": "每次强化增加 +0.25 基础力量，稀有度乘数 +0.10。",
    "Contribute resources to upgrade the Artisan's Conclave and increase the member limit.": "贡献资源升级公会，提升成员上限。",
    "No pending applications.": "暂无待处理申请。",
    "Artisan's Conclave": "工匠公会",
    "Applications": "同意",
    "Leave Conclave": "离开公会",
    "Last Online": "最近在线",
    "Members": "成员",
    "Name": "名称",
    "Reject": "拒绝",
    "max": "最大",
    "Kick": "踢出",
    "Accept": "同意",
    "Buildings": "建筑",
    "Just now": "刚刚",
    "Founder": "创始人",
    "\"A gathering of masters, a union of ambition. Here, legacies are forged not in iron, but in fellowship.\"": "\"大师之聚，志气之合。在这里，传承不是靠铁，而是靠友情。\"",
    "Each level increases the maximum number of members who can join the Conclave.": "每升一级，就会提升公会的成员上限。",
    "Current Member Cap": "当前成员上限",
    "Next Level Cap": "下一级成员上限",
    "Amber Mill": "琥珀磨坊",
    "A single-use item that permanently upgrades an equipped tool by one rarity level (e.g., from Rare to Epic). A Level X stone can be used on a tool of Level X or lower. Each tool can only be sharpened once. Sharpened tools are marked with an `[S]`.": "一种一次性使用的道具，可以将装备的工具永久升级一个稀有等级（例如，从Rare升级到Epic）。X级宝石可用于X级或更低等级的工具。每件工具只能磨一次。磨过的工具上标有\"S\"。",
    "Anima Collector": "生命收集器",
    "Seismic Quarry": "地震采石场",
    "Glimmerwood Sap": "微光树液",
    "Glimmerwood Sap,": "微光树液，",
    "Starfall Ore": "星落矿石",
    "Starfall Ore,": "星落矿石，",
    "Status": "状态",
    "Stone Level": "石头等级",
    "Sharpen": "打磨",
    "Sharpen Axe": "打磨斧子",
    "Sharpen Pickaxe": "打磨镐子",
    "Sharpen Sword": "打磨剑",
    "Sharpening Stone": "磨刀石",
    "while Mining.": "当采矿时。",
    "while Woodcutting.": "当伐木时。",
    "while Battling.": "当战斗时。",
    "Exchange": "转换",
    "can find": "可发现",
    ". Work together with your fellow artisans to upgrade shared buildings that provide unique benefits to all members.": "。与你的工匠同伴一起升级共享的建筑，为所有成员提供独特的利益。",
    "\"Edge honed, spirit tuned.\"": "\"棱角磨砺，精神调剂。\"",
    "\"The earth holds secrets older than any kingdom. We need only listen.\"": "\"地球蕴藏着比任何王国都古老的秘密。我们只需要倾听。\"",
    "\"The echo of a fierce battle never truly fades. It can be captured, if one has the will.\"": "\"激烈战斗的回声永远不会真正消失。如果一个人有意志，它可以被捕获。\"",
    "\"Time itself is trapped within the wood. We merely set it free.\"": "\"时间本身被困在木头里。我们只是让它自由了。\"",
    "10 * Level of each: Starfall Ore, Glimmerwood Sap, Crystallized Anima.": "10 *各等级：坠星原矿石、微光树液、生命结晶a",
    "A Level N stone can sharpen tools of level N or lower.": "N级石头可以打磨N级及以下的工具",
    "chance per tick to find": "几率每刻（Tick）找到",
    "Conclaves & The Exchange": "公会 & 转换",
    "Crystallized Anima": "生命结晶",
    "Eligible Tool Levels": "合格工具等级",
    "items cannot be sharpened. Each tool can be sharpened only once.": "物品不能打磨。每件工具只能打磨一次。",
    "Players can now band together by founding or joining a": "玩家现在可以通过建立或加入一个",
    "Rare Finds": "稀有发现",
    "Requires a Sharpening Stone with level >= 9.": "需要一个磨刀石，等级 >= 9。",
    "Seismic Quarry, Amber Mill, & Anima Collector": "地震采石场，琥珀磨坊，和动物收藏家",
    "tab to purchase powerful items.": "选项卡购买强大的道具。",
    "The heart of your Conclave. Each level increases the maximum number of members who can join by 2.": "你们秘密会议的核心。每个等级增加2个可以加入的成员的最大数量。",
    "These new rare resources can be traded on the player market or used at the new": "这些新的稀有资源可以在玩家市场上交易，也可以在新平台上使用",
    "These specialized buildings grant all members a chance to find new rare resources while gathering. Each level increases the chance of a discovery by 0.01%.": "这些特殊的建筑使所有成员都有机会在收集时找到新的稀有资源。每升一级，发现的机会增加0.01%。",
    "Upgrades an equipped Pickaxe, Axe, or Sword by one rarity level.": "可使装备的镐子、斧、剑的稀有度提升1级",
    "Upgrades this tool's rarity by one step. Epic items cannot be sharpened. Can only be done once per tool.": "可将该工具的稀有度提升一级史诗物品不能磨。每个工具只能操作一次",
    "You do not have a Sharpening Stone of sufficient level.": "您没有足够等级的磨刀石",
    "Levels": "等级",
    "Grants a": "授予",
    "Profiles": "个人资料",
    "User Profiles": "用户个人资料",
    "Select an account to view their public profile.": "选择一个玩家以查看其个人资料。",
    "Display Profile": "显示个人资料",
    "Total Ticks": "总时刻(Tick)",
    "Loading profile...": "加载个人资料...",
    "Loading users...": "加载用户...",
    "(Obtained by sharpening an Epic tool)": "(通过打磨史诗工具获得)",
    "A single-use item that permanently upgrades an equipped tool by one rarity level, up to the ultimate Legendary tier (e.g., Epic -> Legendary). A Level X stone can be used on a tool of Level X or lower. Each tool can only be sharpened once. Sharpened tools are marked with an `[S]`.": "一种一次性使用的道具，可以将装备的工具永久升级一个稀有等级，直到最终的传说级别（例如 史诗 -> 传说）。X级宝石可用于X级或更低级别的工具。每件工具只能磨一次。磨过的工具上标有\"S\"。",
    "You have no active buy orders.": "你没有活跃的购买订单。",
    "Your Active Buy Orders": "你的活跃购买订单",
    "Your Active Sell Orders": "你的活跃出售订单",
    "\"The forges roar day and night! The Great Smeltdown is upon us. Contribute to the central pyre to maintain the intense heat needed for purification. The process is unstable, but a perfect crystal may form in the crucible.\"": "\"熔炉日夜咆哮！\"大熔炉就要来了。为中央火堆出力，以保持净化所需的高温。这个过程是不稳定的，但在坩埚中可以形成完美的晶体。\"",
    "\"The forge burns hotter, the anvil rings truer. Now is the time to create a masterpiece.\"": "\"锻炉烧得更热，铁砧响得更准。\"现在是创作杰作的时候了。\"",
    "The Great Smeltdown": "大熔炉",
    "Contribute a large sum of the requested raw material to the central pyre. The intense heat has a chance to purify it into a rare essence, but the process is unstable and may yield nothing.": "向中央火堆贡献大量所需的原材料。高温有机会将它净化成一种稀有的精华，但这个过程不稳定，可能什么也得不到。",
    "Doubles refining speed, consuming double the input materials for double the output. Also adds a +10 bonus to your Quality Score when crafting tools.": "双倍的精炼速度，消耗双倍的原料产出双倍的产品。在制作工具时也增加了+10的质量分数。",
    "Public Buy Orders": "公开购买订单",
    "Public Sell Orders": "公开出售订单",
    "Buy Orders": "购买订单",
    "Buyer": "买家",
    "Fill Max": "填满",
    "Max Price": "最高价",
    "Max Price (Gold)": "最高价 (金币)",
    "Total Reserved": "总计预留",
    "Post Buy Order": "发布购买订单",
    "A Level X stone can sharpen tools of level X or lower.": "X级的石头可以磨X级或X级以下的工具。",
    "Upgrades an equipped Pickaxe, Axe, or Sword by one rarity level, up to Legendary.": "升级一件装备的镐子、斧头或剑，使其稀有度提升一级，最高可提升至传说级别。",
    "Upgrades this tool's rarity by one step, up to Legendary. Can only be done once per tool.": "将该工具的稀有度提升一级，最高可提升至传说。每个工具只能完成一次。",
    "Each tool can be sharpened only once.": "每件工具只能打磨一次。",
    "[Dungeon Help] {player} is requesting aid for party #{partyId} in a Level {level} dungeon!": "[地下城求助] {player} 正在为队伍 #{partyId} 请求援助，该队伍正在挑战等级 {level} 的地下城！",

    // 基础文本
    '- Battler': '- 战斗者',
    ', or': '，或',
    ', paid by the buyer. Listings will automatically expire after 2 days, returning the items or gold to the original poster. Keep an eye out for the "Tax-Free Weekend" event, during which the market tax is temporarily removed!': '，由买方支付。挂单将在2天后自动过期，物品或金币将返还给原始发布者。留意"免税周末"活动，在此期间市场税暂时取消！',
    '??????': '??????',
    '. Higher quality food provides a longer-lasting buff.': '。更高质量的食物提供更持久的增益效果。',
    '. Higher skill and a better Kitchen reduce the chance of burning food and increase the chance of a high-quality result.': '。更高的技能和更好的厨房减少烧焦食物的几率，增加高质量结果的几率。',
    '. Required to craft high-level Fishing Rods.': '。制作高级鱼竿所需。',
    '. This allows you to request a specific tool or food item from other crafters at a price you set. Your gold is reserved until another player fills your order, or until the order is canceled or expires.': '。这允许您以设定的价格向其他工匠请求特定工具或食物。您的金币将被保留，直到其他玩家完成您的订单，或订单被取消或过期。',
    '. Work together with your fellow artisans to upgrade shared buildings that provide unique benefits to all members. The founder can set a': '。与您的工匠同伴一起升级共享建筑，为所有成员提供独特利益。创始人可以设置',
    '(0-10%) to automatically collect a portion of members\' gathered raw materials (from Mining, Woodcutting, and Battling). These materials are converted to refined resources and contributed to the Conclave\'s most-voted project(s) after every': '(0-10%) 自动收集成员采集的原材料的一部分（来自采矿、伐木和战斗）。这些材料被转化为精炼资源，并在每次',
    '(1 minute).': '(1分钟)后贡献给公会最受欢迎的项目。',
    '(Boss Fight, Ancient Treant, Runic Golem, The Leviathan) - All players can join to deal damage to a powerful world boss and earn a share of special resources.': '（Boss战、远古树人、符文魔像、利维坦）- 所有玩家都可以加入对强大的世界Boss造成伤害，并获得特殊资源的份额。',
    '(Catch Chance: 36.2%)': '（捕获几率：36.2%）',
    '(Purchasing Agent, Tax-Free Weekend, Trade Ship) - These events temporarily change the rules of the market, creating new opportunities for savvy traders.': '（采购代理、免税周末、贸易船）- 这些事件暂时改变市场规则，为精明的交易者创造新机会。',
    '(Requires 1 completions)': '（需要完成1次）',
    '(Requires 10 completions)': '（需要完成10次）',
    '(Requires 100 completions)': '（需要完成100次）',
    '(Requires 1000 completions)': '（需要完成1000次）',
    '(Requires 125 completions)': '（需要完成125次）',
    '(Requires 150 completions)': '（需要完成150次）',
    '(Requires 20 completions)': '（需要完成20次）',
    '(Requires 200 completions)': '（需要完成200次）',
    '(Requires 250 completions)': '（需要完成250次）',
    '(Requires 30 completions)': '（需要完成30次）',
    '(Requires 300 completions)': '（需要完成300次）',
    '(Requires 350 completions)': '（需要完成350次）',
    '(Requires 40 completions)': '（需要完成40次）',
    '(Requires 400 completions)': '（需要完成400次）',
    '(Requires 450 completions)': '（需要完成450次）',
    '(Requires 5 completions)': '（需要完成5次）',
    '(Requires 50 completions)': '（需要完成50次）',
    '(Requires 500 completions)': '（需要完成500次）',
    '(Requires 600 completions)': '（需要完成600次）',
    '(Requires 700 completions)': '（需要完成700次）',
    '(Requires 75 completions)': '（需要完成75次）',
    '(Requires 800 completions)': '（需要完成800次）',
    '(Requires 900 completions)': '（需要完成900次）',
    '(Votes: 0)': '（投票：0）',
    '(Votes: 1)': '（投票：1）',
    '(Votes: 3)': '（投票：3）',
    '(Votes: 4)': '（投票：4）',
    '[Burnt]': '[烧焦]',
    '[Burnt] Fish Stew': '[烧焦] 鱼汤',
    '[Exquisite]': '[精美]',
    '[Exquisite] Fish Stew': '[精美] 鱼汤',
    '[Exquisite] Grilled Fish': '[精美] 烤鱼',
    '[Fine]': '[优良]',
    '[Normal]': '[普通]',
    '[Normal] Fish Stew': '[普通] 鱼汤',
    '[Normal] Grilled Fish': '[普通] 烤鱼',
    '+0.5% per level': '每级+0.5%',
    '+1% chance to catch fish per level and +1% chance to find Abyssal Eels per level, and +1 Fishing XP per tick per level.': '每级+1%钓鱼几率，每级+1%发现深渊鳗鱼几率，每级每tick+1钓鱼经验值。',
    '+10% Catch Chance': '+10% 捕获几率',
    '+25% Gathering Yield': '+25% 采集产量',
    '0.5 hour': '0.5小时',
    '1 hour': '1小时',
    '1.5 hours': '1.5小时',
    '1.5x multiplier': '1.5倍乘数',
    '2 hours': '2小时',
    '2.5 hours': '2.5小时',
    '3 hours': '3小时',
    '3.5 hours': '3.5小时',
    '30 gathering actions': '30次采集行动',
    '4 hours': '4小时',
    '4.5 hours': '4.5小时',
    '5 hours': '5小时',
    '5.5 hours': '5.5小时',
    '6 hours': '6小时',
    '6.5 hours': '6.5小时',
    '7 hours': '7小时',
    '7.5 hours': '7.5小时',
    '8 hours': '8小时',
    'A discreet accounting firm that generates a "surplus" of resources equal to': '一家谨慎的会计公司，产生等于',
    'A new challenge awaits! The Harbormaster has authorized expeditions into newly discovered dungeons. Form a party with up to five other artisans and delve into 25 rooms of escalating danger. Work together to defeat the monsters within and face the formidable Goblin King at the end!': '新的挑战等待着！港务长已授权对新发现的地下城进行探险。与最多五名其他工匠组队，深入25个日益危险的房间。共同努力击败其中的怪物，并在最后面对强大的哥布林王！',
    'A new personal building that allows you to hire a sellsword. Each level allows you to hire them for one additional hour, up to a maximum of 8 hours. When a contract is active, the mercenary will automatically join combat events (Boss, Treant, Golem, Leviathan) on your behalf. Be warned: this sellsword is lazy and will only fight while you are actively overseeing your workshop. As payment, they take a steep 80% cut of all event rewards earned.': '一个新的个人建筑，允许您雇佣佣兵。每级允许您多雇佣他们1小时，最多8小时。当合同激活时，佣兵将自动代表您加入战斗事件（Boss、树人、魔像、利维坦）。警告：这个佣兵很懒，只会在您亲自监督工作室时战斗。作为报酬，他们会抽取所有获得的事件奖励的80%。',
    'A new, persistent threat has emerged! The': '一个新的持续威胁出现了！',
    'A personal workspace for preparing food. The level of your Kitchen, along with your Cooking skill, directly impacts the quality of the food you create. A higher-level Kitchen also allows you to refine Raw Fish into Prepared Fish more efficiently.': '一个用于准备食物的个人工作空间。您的厨房等级以及烹饪技能直接影响您制作食物的质量。更高级的厨房还允许您更有效地将生鱼加工成熟鱼。',
    'A rare essence found while Fishing, empowered by your Conclave\'s': '钓鱼时发现的稀有精华，由您的',
    'Absence': '缺席',
    'Abyssal Eel': '深渊鳗鱼',
    'Active Parties': '活跃队伍',
    'An order can be filled using an item that meets or': '订单可以使用满足或',
    'and your': '和您的',
    'Anvil': '铁砧',
    'Artisan\'s Copper': '工匠铜材',
    'Artisan\'s Marks': '工匠印记',
    'Artisan\'s Palette': '工匠调色板',
    'Auto-Dungeon Role': '自动地下城角色',
    'Battle Log': '战斗日志',
    'Be warned: the tunnels are unstable. Your party has only 30 seconds to defeat the monster in each room before you become exhausted and must regroup. As a reward for beta testing this new feature, you can earn permanent cosmetic username colors by completing dungeons. Check the Dungeons tab to see the rewards!': '警告：隧道不稳定。您的队伍只有30秒时间击败每个房间的怪物，否则会变得疲惫并必须重新组队。作为测试此新功能的奖励，您可以通过完成地下城获得永久的装饰性用户名颜色。查看地下城标签页了解奖励！',
    'buff for Fishing.': '钓鱼增益。',
    'buff to Mining, Woodcutting, and Battling, and a separate': '采矿、伐木和战斗增益，以及单独的',
    'buff, increasing your damage dealt in all cooperative combat events (Boss, Treant, Golem, Leviathan).': '增益，增加您在所有合作战斗事件（Boss、树人、魔像、利维坦）中造成的伤害。',
    'Buffs': '增益效果',
    'Build Defenses (0)': '建造防御（0）',
    'Build Defenses (1 artisans)': '建造防御（1工匠）',
    'Burnt': '烧焦',
    'Catch Raw Fish and other rare aquatic life.': '捕获生鱼和其他稀有水生生物。',
    'Choose a Username': '选择用户名',
    'Choose your role': '选择您的角色',
    'Conclave Chat': '公会聊天',
    'Configuration': '配置',
    'Cooking': '烹饪',
    'Cooking (Level': '烹饪（等级',
    'Cooking & Food Buffs': '烹饪与食物增益',
    'Cooking allows you to turn fish and other ingredients into powerful consumables that grant temporary buffs. The quality of the food you cook is determined by your': '烹饪允许您将鱼和其他原料转化为强大的消耗品，提供临时增益。您烹饪的食物质量由您的',
    'Cooking Skill Level': '烹饪技能等级',
    'Coral Sanctuary': '珊瑚保护区',
    'Cost: 1,000 Leviathan Scales': '成本：1,000 利维坦鳞片',
    'Cost: 10,000 Leviathan Scales': '成本：10,000 利维坦鳞片',
    'Cost: 100,000 Leviathan Scales': '成本：100,000 利维坦鳞片',
    'Crafting Orders': '制作订单',
    'Create a Permanent Account': '创建永久账户',
    'Doubles your chance to catch fish and grants bonus Fishing XP.': '双倍钓鱼几率并奖励额外钓鱼经验值。',
    'Dungeon': '地下城',
    'Dungeon Level': '地下城等级',
    'Dungeon Run in Progress...': '地下城运行中...',
    'Dungeons': '地下城',
    'Dungeons (Beta)': '地下城（测试版）',
    'Dungeons Completed': '已完成的地下城',
    'Duration': '持续时间',
    'E0 (None)': 'E0（无）',
    'E1': 'E1',
    'E10': 'E10',
    'E2': 'E2',
    'E3': 'E3',
    'E4': 'E4',
    'E5': 'E5',
    'E6': 'E6',
    'E7': 'E7',
    'E8': 'E8',
    'E9': 'E9',
    'Earned from': '获得自',
    'Eat': '食用',
    'Eel Broth': '鳗鱼汤',
    'Enhancement Level': '强化等级',
    'event. Used at the Exchange to learn new, powerful cooking recipes.': '事件。在交易所用于学习新的强大烹饪配方。',
    'Every cooking attempt results in one of four qualities': '每次烹饪尝试会产生四种品质之一',
    'exceeds': '超过',
    'Exquisite': '精美',
    'Feature coming soon...': '功能即将推出...',
    'Fight information (goblins, boss, treant, golem, leviathan)': '战斗信息（哥布林、Boss、树人、魔像、利维坦）',
    'Fill': '填单',
    'Filter by Item': '按物品筛选',
    'Fine': '优良',
    'Fish Stew': '鱼汤',
    'Fisherman\'s Wharf': '渔人码头',
    'Fishing': '钓鱼',
    'Fishing Frenzy': '钓鱼狂潮',
    'Fishing Level': '钓鱼等级',
    'Fishing Rod': '鱼竿',
    'Food': '食物',
    'Food Buff Active (+25%)': '食物增益激活（+25%）',
    'Food Quality': '食物质量',
    'Form a party with other artisans and delve into dangerous dungeons for unique rewards! Changing activities while in a dungeon will remove you from the party.': '与其他工匠组队，深入危险的地下城获取独特奖励！在地下城中切换活动将使您离开队伍。',
    'From the desk of the Founder': '来自创始人的办公桌',
    'Gathering Yield': '采集产量',
    'Goblin Attack': '哥布林攻击',
    'Goblin Defense': '哥布林防御',
    'Gold Bars: 25.00': '金锭：25.00',
    'Gold Gain': '金币获得',
    'Gold per tick': '每tick金币',
    'Grilled Fish': '烤鱼',
    'Highest Dungeon Completed': '完成的最高地下城',
    'Hire for Boss Events': 'Boss事件雇佣',
    'Hire for Dungeons': '地下城雇佣',
    'In addition to buying and selling on the open market, you can now post': '除了在公开市场买卖外，您现在可以发布',
    'Iron Ore per tick': '每tick铁矿石',
    'is an always-on event where the town\'s defenses are constantly under pressure. A global \'Town Defenses\' timer is visible at the top of the screen, slowly ticking down. All artisans can help by choosing to \'Build Defenses\', which adds time back to the timer. If the timer ever reaches zero, the goblin horde will raid the community building with the most contributed resources and steal 20% of its stores! Work together to keep the town safe.': '是一个持续事件，城镇防御持续受到压力。屏幕顶部显示全局"城镇防御"计时器，缓慢倒计时。所有工匠都可以通过选择"建造防御"来帮助，这会为计时器增加时间。如果计时器归零，哥布林部落将袭击贡献资源最多的社区建筑并偷走其20%的库存！共同努力保护城镇安全。',
    'Join as Battler': '以战斗者身份加入',
    'Join as Miner': '以矿工身份加入',
    'Join as Woodcutter': '以伐木工身份加入',
    'Join Dungeon Party': '加入地下城队伍',
    'Join Selected Party': '加入选定队伍',
    'Kitchen': '厨房',
    'Kitchen Level': '厨房等级',
    'Learn': '学习',
    'Learn Cooking Recipes': '学习烹饪配方',
    'Leave Party': '离开队伍',
    'Legendary': '传说',
    'Level 1 [S]': '等级 1 [S]',
    'Leviathan Scale': '利维坦鳞片',
    'Leviathan Scales': '利维坦鳞片',
    'Loading party details...': '加载队伍详情...',
    'Logs per tick': '每tick木头',
    'Many features in the game have tooltips. Hover your mouse over an item or label to get more information about it.': '游戏中的许多功能都有工具提示。将鼠标悬停在物品或标签上以获取更多信息。',
    'Mercenary': '雇佣兵',
    'Mercenary Post': '雇佣兵哨站',
    'Mercenary Post Level': '雇佣兵哨站等级',
    'Min Level': '最低等级',
    'Min Quality': '最低质量',
    'Min Rarity': '最低品质',
    'Miner': '矿工',
    'No matching items': '无匹配物品',
    'Note': '注意',
    'Oceanic Essence': '海洋精华',
    'on all gathered Iron Ore, Logs, Gold, and Rune Shards. This surplus is automatically contributed to the most-voted community project(s) every 10 minutes.': '在所有采集的铁矿石、木头、金币和符文碎片上。这个盈余每10分钟自动贡献给最受欢迎的社区项目。',
    'Options tab': '选项标签页',
    'Orders': '订单',
    'Party Details': '队伍详情',
    'Party ID': '队伍ID',
    //    'Planks: 25.00': '木板：25.00',
    'Post a Crafting Order': '发布制作订单',
    'Post Food Order': '发布食物订单',
    'Post Tool Order': '发布工具订单',
    'Prepare Fish': '烹制鱼',
    'Prepare food that provides powerful, temporary buffs.': '准备提供强大临时增益效果的食物。',
    'Prepared Fish': '加工鱼',
    'Provides a': '提供',
    'Public Crafting Orders': '公共制作订单',
    'Raw Fish': '生鱼',
    'Recipe Exchange': '配方交换',
    'Recruitment Message': '招募信息',
    'Register Account': '注册账户',
    'Relic': '遗物',
    'Request a specific item from other crafters. Your gold will be reserved until the order is filled, canceled, or expires.': '向其他工匠请求特定物品。您的金币将被保留，直到订单完成、取消或过期。',
    'Request a Tool': '请求工具',
    'Request Food': '请求食物',
    'Results': '结果',
    'Save Message': '保存信息',
    'Secure your progress by creating a full account. Your items, levels, and resources will be saved.': '通过创建完整账户来保护您的进度。您的物品、等级和资源将被保存。',
    'Select': '选择',
    'Selected': '已选择',
    'Send': '发送',
    'Set a Password': '设置密码',
    'Set Rate': '设置税率',
    'Sigil': '印记',
    'Sigil of Barbs': '荆棘印记',
    'Sigil of Ferocity': '凶猛印记',
    'Sigil of Mending': '修复印记',
    'Sigil of Resilience': '坚韧印记',
    'Sigils': '印记',
    'Simulated Item': '模拟物品',
    'Start a New Dungeon Party': '开始新的地下城队伍',
    'Start as Battler': '以战斗者开始',
    'Start as Miner': '以矿工开始',
    'Start as Woodcutter': '以伐木工开始',
    'Start New Party': '创建新队伍',
    'Success in the dungeons requires teamwork and a balanced party. Each artisan chooses a role': '在地下城中成功需要团队合作和平衡的队伍。每个工匠选择一个角色',
    'Test your designs on the anvil before you commit precious resources. A wise artisan measures twice and strikes once.': '在投入宝贵资源之前，先在铁砧上测试您的设计。明智的工匠测量两次，敲击一次。',
    'The Anvil': '铁砧',
    'The Counting House': '会计所',
    'The harbormaster recommends a price of': '港务长推荐价格为',
    'The Harbormaster says: "I\'ve seen strange things come from those new dungeons... echoes of battles that don\'t add up. We\'ll be keeping a close watch on them. For now, any artisan brave enough to delve into these unproven depths will earn a mark on their name—a permanent splash of color to prove you were here from the start. More substantial rewards will be available once my ledgers are balanced and I\'m certain there\'s no funny business."': '港务长说："我见过那些新地下城中出现的奇怪事物...不合常理的战斗回响。我们会密切关注它们。目前，任何勇敢探索这些未经证实的深处的工匠都将在他们的名字上获得标记——永久的颜色飞溅，证明您从一开始就在这里。一旦我的账目平衡并且我确定没有可疑行为，将提供更实质性的奖励。"',
    'The Leviathan from the Depths': '深渊中的利维坦',
    'The Marketplace': '市场',
    'The party\'s healer, using their Pickaxe and Mining level to restore the party\'s shared health pool.': '队伍的治疗者，使用镐子和采矿等级恢复队伍的共享生命池。',
    'The party\'s tank, using their Axe and Woodcutting level to reflect "thorns" damage back at any monster that attacks the party.': '队伍的坦克，使用斧头和伐木等级将"荆棘"伤害反弹给任何攻击队伍的怪物。',
    'The player-driven marketplace is the hub of commerce. All purchases made from other players are subject to a': '玩家驱动的市场是商业中心。所有从其他玩家处购买的物品都要缴纳',
    'the requested level and quality/rarity. Sellers will receive the price offered by the buyer, even if a superior item is used to fill the order.': '请求的等级和质量/品质。卖家将收到买家提供的价格，即使使用更优质的物品来完成订单。',
    'There are several types of food buffs. You can have one of each type active at the same time, and eating more of the same food will stack the duration up to a maximum of 8 hours.': '有几种类型的食物增益。您可以同时激活每种类型的一个增益，食用更多相同食物将叠加持续时间，最多8小时。',
    'This message is only visible to Conclave members.': '此消息仅对公会成员可见。',
    'This message will be shown to players who are not in a Conclave.': '此消息将显示给不在公会中的玩家。',
    'Time left': '剩余时间',
    'Time Left': '剩余时间',
    'Tithe Rate': '缴纳税率',
    'Title Color': '标题颜色',
    'to create a permanent account and secure your progress!': '创建永久账户并保护您的进度！',
    'to your chance of finding rare resources.': '到您发现稀有资源的几率。',
    'Tool': '工具',
    'Tool Level': '工具等级',

    // 工具基础名称
    'Fishing Rod': '鱼竿',
    'Pickaxe': '镐子',
    'Axe': '斧子',
    'Sword': '剑',
    'Helm of Learning': '学问之盔',
    'Sigil of Ferocity': '凶猛印记',
    'Sigil of Mending': '修复印记',
    'Sigil of Barbs': '荆棘印记',
    'Sigil of Resilience': '坚韧印记',

    // 树游戏
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

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "gamemaster@idleartisan.com": "gamemaster@idleartisan.com",
    "Gityx": "Gityx",
    "+": "+",
    ".": ".",
    "…": "…",
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
    // 进度百分比
    "- 0% Complete": "- 0% 完成",
    "- 1% Complete": "- 1% 完成",
    "- 2% Complete": "- 2% 完成",
    "- 17% Complete": "- 17% 完成",
    "- 24% Complete": "- 24% 完成",
    "- 62% Complete": "- 62% 完成",
    "- 75% Complete": "- 75% 完成",
    "- 76% Complete": "- 76% 完成",

    // 哥布林围攻相关
    "\"Don't let the fires of our forges be extinguished by the green tide!\"": "\"不要让我们的熔炉之火被绿潮熄灭！\"",
    "Build Defenses": "建造防御",
    "Every moment you spend on the walls adds": "您在城墙上度过的每一刻都为",
    "If We Fail": "如果我们失败",
    "Lend Your Aid": "伸出援手",
    "Rally Together": "团结一致",
    "The goblin war drums beat endlessly. Their horde pushes against our walls, and our defenses are weakening. Without your help, the town will be overrun!": "哥布林的战鼓无休止地敲响。他们的部落冲击着我们的城墙，我们的防御正在减弱。没有您的帮助，城镇将被攻破！",
    "The goblins will breach the walls and pillage the most-funded community project, stealing 20% of its resources.": "哥布林将突破城墙并掠夺资金最多的社区项目，偷走其20%的资源。",
    "The more artisans who answer the call, the faster our defenses are rebuilt!": "响应号召的工匠越多，我们的防御重建得越快！",

    // 地下城相关
    "Be warned: the tunnels are unstable. Your party has only 30 seconds to defeat the monster in each room before you become exhausted and must regroup. As a reward for your bravery, you can earn permanent cosmetic username colors by completing dungeons. Check the Dungeons tab to see the rewards!": "警告：隧道不稳定。您的队伍只有30秒时间击败每个房间的怪物，否则会变得疲惫并必须重新组队。作为您勇敢的奖励，您可以通过完成地下城获得永久的装饰性用户名颜色。查看地下城标签页了解奖励！",
    "No active parties found.": "未找到活跃队伍。",
    "Select a party to view details.": "选择一个队伍以查看详情。",
    "The primary damage dealer, using their Sword and Battler level to strike down foes.": "主要伤害输出者，使用剑和战斗等级击倒敌人。",
    "From the blackest depths, it rises. Its scales hold the secrets of the abyss.": "从最黑暗的深渊中，它升起。它的鳞片承载着深渊的秘密。",

    //转换相关
    "You will never find rare Conclave resources (Starfall Ore, Glimmerwood Sap, Crystallized Anima, Oceanic Essence)": "你将永远不会找到稀有的公会资源（星落矿石、微光树液、生命结晶、海洋精华）",
    "Forest Green": "森林绿",

    // 符文相关
    "Glyph": "符文",
    "Glyph of Scavenging": "拾荒符文",
    "Glyph of the Duelist": "决斗者符文",
    "Glyph of the Laborer": "劳动者符文",
    "Glyph of the Philanthropist": "慈善家符文",
    "Glyph of the Prospector": "勘探者符文",
    "Laborer": "劳动者",
    "Philanthropist": "慈善家",
    "Prospector": "勘探者",
    "Scavenging": "拾荒",
    "Select a tool to socket": "选择要插入的工具",
    "Socket Glyph": "插入符文",
    "Purchase powerful Glyphs to socket into your tools, providing unique bonuses and trade-offs. A Level X Glyph can be socketed into a tool of Level X or lower. Each tool can only have one Glyph at a time.": "购买强大的符文插入您的工具，提供独特的奖励和权衡。X级符文可以插入X级或更低等级的工具。每个工具一次只能有一个符文。",
    "The Guild Runemaster says: \"These glyphs draw upon volatile, untested magic. Their power is undeniable, but their balance is... fluid. To ensure fairness across the trades, the Council has authorized me to 're-attune' their magical properties as needed. Consider their current percentages a preliminary finding, not a final decree.\"": "公会符文大师说：\"这些符文利用了不稳定、未经测试的魔法。它们的力量不可否认，但它们的平衡是...流动的。为了确保各行业的公平，议会授权我根据需要'重新调整'它们的魔法属性。将当前的百分比视为初步发现，而不是最终法令。\"",

    // 其他界面文本
    "(Votes: 2)": "（投票：2）",
    "% per tick": "% 每tick",
    "+25% Damage": "+25% 伤害",
    "/ 5": "/ 5",
    "10 Starfall Ore, 10 Glimmerwood Sap, 10 Crystallized Anima": "10 星落矿石, 10 微光树液, 10 生命结晶",
    "10.00 Starfall Ore, 10.00 Glimmerwood Sap, 10.00 Crystallized Anima": "10.00 星落矿石, 10.00 微光树液, 10.00 生命结晶",
    "23 days ago": "23 天前",
    "4 seconds": "4 秒",
    "479:58 (100%)": "479:58 (100%)",
    "479:59 (100%)": "479:59 (100%)",
    "480:00 (100%)": "480:00 (100%)",
    "Artisan's Mark Exchange (Beta)": "工匠印记交易所（测试版）",
    "Catch Chance": "捕获几率",
    "Craft Ironforge (Level 1)": "制作铁熔炉（等级 1）",
    "Craft Sawmill (Level 1)": "制作锯木厂（等级 1）",
    "into": "为",
    "leaderboard category!": "排行榜类别！",
    "Normal": "普通",
    "Scrap 1": "回收 1",
    "Tax-Free Weekend": "免税周末",

    // 食物品质
    "[Burnt] Eel Broth": "[烧焦] 鳗鱼汤",
    "[Fine] Eel Broth": "[优良] 鳗鱼汤",
    "[Normal] Eel Broth": "[普通] 鳗鱼汤",

    // 正则表达式可以处理的模式
    // 时间格式 - 使用正则处理
    // 玩家名称和公会名称 - 跳过不汉化
    // 战斗经验格式 - 使用正则处理
    // 百分比和限制
    "(capped at 95%)": "（上限为95%）",
    "(Catch Chance: 72.4%)": "（捕获几率：72.4%）",
    "+0.160%": "+0.160%",
    "+1.5%": "+1.5%",
    "+1.7%": "+1.7%",
    "+8.0%": "+8.0%",
    "Total: 0.273%": "总计：0.273%",
    "Total: 72.4%": "总计：72.4%",

    // 钓鱼相关
    "Abyssal Eel Chance": "深渊鳗鱼几率",
    "Base Chance": "基础几率",
    "Fishing Catch Chance": "钓鱼捕获几率",
    "Fishing Frenzy!": "钓鱼狂潮！",
    "Rod Power Bonus": "鱼竿力量奖励",
    "while Fishing.": "当钓鱼时。",


    // 界面文本
    "Loading chat...": "加载聊天中...",
    "Tool Rarity": "工具品质",
    "Tool Type": "工具类型",
    "TRIGGERED": "触发",
    "Vote": "投票",
    "Voted": "已投票",
    "Waiting for combat to begin...": "等待战斗开始...",
    "Welcome to Idle Artisan!": "欢迎来到工匠放置！",
    "While in dungeon, do not automatically join fight events": "在地下城中，不要自动加入战斗事件",
    "Woodcutter": "伐木工",

    // 技能和教程
    "You are playing as an Apprentice. Visit the": "您正在以学徒身份游戏。访问",
    "You can see how your efforts stack up against other players on the new": "您可以在新的",
    "You have no active crafting orders.": "您当前没有正在进行的制作订单。",
    "You have not learned any cooking recipes.": "您还没有学习任何烹饪食谱。",
    "Your Active Crafting Orders": "您的活跃制作订单",
    "Your Email": "您的电子邮件",
    "Your journey is defined by six core skills. You gain experience (XP) by performing related activities, which you can select on the \"Main\" tab.": "您的旅程由六项核心技能定义。您可以通过执行相关活动来获得经验（XP），您可以在\"主界面\"选项卡上选择。",
    "Your Mining Level": "您的采矿等级",

    // 雇佣兵描述
    "\"Be warned: this sellsword is prone to napping on the job. They will only engage in battle while you are actively overseeing your workshop and will fall asleep at their post if you are away.\"": "\"警告：这个雇佣兵容易在工作时打盹。他们只会在你亲自监督工作室时参与战斗，如果你离开，他们会在岗位上睡着。\"",

    // 事件消息 - 使用正则处理
    "Error: Invalid dungeon level.": "错误：无效的地下城等级。",
    "Aid Requested": "已请求援助",

    // 经验值和基础属性
    "+1 bonus XP": "+1 奖励经验值",
    "Base Power: 1": "基础力量：1",
    "Base Power: 14": "基础力量：14",
    "Base Power: 15": "基础力量：15",

    // 雇佣兵哨站描述
    "Allows you to hire a mercenary for up to 1 hour to automatically join combat events or start dungeon runs. When joining combat events, the mercenary takes an 80% cut of all rewards as payment.": "允许你雇佣一个佣兵，最多持续1小时，自动加入战斗事件或开始地下城运行。当加入战斗事件时，雇佣兵会抽取80%的奖励作为报酬。",
    "Allows you to hire a mercenary for up to 8 hours to automatically join combat events or start dungeon runs. When joining combat events, the mercenary takes an 80% cut of all rewards as payment.": "允许你雇佣一个佣兵，最多持续8小时，自动加入战斗事件或开始地下城运行。当加入战斗事件时，雇佣兵会抽取80%的奖励作为报酬。",


    // 地下城增益效果
    "Increases all damage you deal by 1.5% while in a dungeon if your role is Battler.": "当角色为战斗者时，在地下城中造成的所有伤害增加1.5%。",
    "Increases all healing you do by 1.5% while in a dungeon if your role is Miner.": "当角色为矿工时，在地下城中进行的所有治疗增加1.5%。",
    "Increases the amount of your personal Health contributed to the party's maximum HP by 1.5% while in a dungeon (all roles).": "在地下城中，将您个人生命值贡献给队伍最大生命值的量增加1.5%（所有角色）。",
    "Increases your thorns damage by 1.5% while in a dungeon if your role is Woodcutter.": "当角色为伐木工时，在地下城中的荆棘伤害增加1.5%。",

    //地下城类
    // 在 cnItems 对象中添加以下内容：

    // 地下城战斗消息
    //    "attacks, dealing": "攻击，造成",
    //    "damage": "伤害",
    //    "damage to the party": "伤害对队伍",
    //    "has been defeated!": "已被击败！",
    //    "The party advances to Room": "队伍前进到房间",
    //    "appears!": "出现了！",
    //    "[Dungeon] You earned": "[地下城] 你获得了",
    //    "Artisan's Marks for clearing a room.": "工匠印记用于清理一个房间。",

    // 哥布林怪物名称
    // 哥布林怪物名称 - 带定冠词
    "The Goblin Wolfrider": "哥布林狼骑兵",
    "The Goblin Taskmaster": "哥布林监工",
    "The Goblin Cutthroat": "哥布林割喉者",
    "The Goblin Spearman": "哥布林长矛兵",
    "The Goblin Guard": "哥布林守卫",
    "The Goblin Brawler": "哥布林搏斗者",
    "The Goblin Rock-Slinger": "哥布林投石者",
    "The Goblin Skirmisher": "哥布林散兵",
    "The Goblin Soldier": "哥布林士兵",
    "The Goblin Brute": "哥布林蛮兵",
    "The Goblin King": "哥布林国王",

    // 哥布林怪物名称 - 不带定冠词
    "Goblin Wolfrider": "哥布林狼骑兵",
    "Goblin Taskmaster": "哥布林监工",
    "Goblin Cutthroat": "哥布林割喉者",
    "Goblin Spearman": "哥布林长矛兵",
    "Goblin Guard": "哥布林守卫",
    "Goblin Brawler": "哥布林搏斗者",
    "Goblin Rock-Slinger": "哥布林投石者",
    "Goblin Skirmisher": "哥布林散兵",
    "Goblin Soldier": "哥布林士兵",
    "Goblin Brute": "哥布林蛮兵",
    "Goblin King": "哥布林国王",

    // 其他属性
    "Increases the chance to craft high-quality food.": "增加制作高质量食物的几率。",
    "Next enhance cost: 240.00 Treant Resin": "下次强化成本：240.00 树人树脂",
    "quality. Soulbound on equip.": "品质。装备后绑定。",
    "Requires a Sharpening Stone with level >= 1.": "需要一个磨刀石，等级 >= 1。",
    "Requires a Sharpening Stone with level >= 14.": "需要一个磨刀石，等级 >= 14。",
    "Requires a Sharpening Stone with level >= 15.": "需要一个磨刀石，等级 >= 15。",
    "Sharpen Fishing Rod": "打磨鱼竿",
    "This tool has already been sharpened.": "这个工具已经被打磨过了。",
    "Enhance Fishing Rod": "强化鱼竿",

    // 负面效果
    "-10% to base gathering amount.": "-10% 基础采集量。",
    "-10% to base resource gains (Iron Ore, Logs, Gold, Fish).": "-10% 基础资源获得（铁矿石、木头、金币、鱼）。",
    "-7.5% ": "-7.5% ",

    // 拾荒效果
    ". You also find a small bite of fish (0.1) while not fishing.": "。当不钓鱼时，你还会发现一小口鱼（0.1）。",

    // 引用文本
    "\"A master cook never stops learning. Some secrets are only found in the belly of the beast.\"": "\"大师厨师从不停止学习。有些秘密只能在野兽的肚子里找到。\"",
    "\"In the heat of battle, true mastery shines brightest.\"": "\"在激烈的战斗中，真正的技艺闪耀得最明亮。\"",
    "\"Patience reveals the hidden treasures of the earth.\"": "\"耐心揭示大地隐藏的宝藏。\"",
    "\"The numbers don't lie... but they can be persuaded.\"": "\"数字不会说谎……但可以被说服。\"",
    "\"The ocean keeps its treasures deep. This sanctuary sings a song that calls them to the surface.\"": "\"海洋将其宝藏深藏。这个保护区唱着一首歌，将它们召唤到水面。\"",
    "\"The sea is generous to those who respect its tides.\"": "\"大海对尊重潮汐的人慷慨。\"",
    "\"The work of one strengthens the hands of many.\"": "\"一人的工作强化众人的双手。\"",
    "\"Waste not, want not. Every speck of dust has its purpose.\"": "\"不浪费，不匮乏。每一粒尘埃都有其用途。\"",
    "\"Why search for the perfect stone when a hundred will do?\"": "\"既然一百块石头就够用，为何还要寻找完美的那一块？\"",

    // 百分比增益
    "(+0.01": "(+0.01",

    // 精准匹配翻译
    "[Legendary]": "[传奇]",
    "+10% to base resource gains (Iron Ore, Logs, Gold, Fish).": "+10% 基础资源获得（铁矿石、木头、金币、鱼）。",
    "+15% to all personal damage or healing done in cooperative fight events and in dungeons.": "+15% 在合作战斗事件和地下城中的所有个人伤害或治疗。",
    "+4% damage against special enemies": "+4% 对特殊敌人的伤害",
    "+5 Battler XP per tick": "+5 战斗者经验值每tick",
    "+5 Fishing XP per tick": "+5 钓鱼经验值每tick",
    "+5 Mining XP per tick": "+5 采矿经验值每tick",
    "+5 Woodcutting XP per tick": "+5 伐木经验值每tick",
    "+5 XP to all gathering skills": "+5 所有采集技能经验值",
    "+5% chance to catch fish": "+5% 捕获鱼的几率",
    "+5% chance to find Abyssal Eels": "+5% 发现深渊鳗鱼的几率",
    "+5% Gold gathered": "+5% 金币收集",
    "+5% Iron Ore gathered": "+5% 铁矿石收集",
    "+5% Logs gathered": "+5% 木头收集",
    "2x to rare resource find chance.": "2倍稀有资源发现几率。",
    "A discreet accounting firm with a reputation for... creative bookkeeping. Their auditors have an uncanny ability to uncover \"miscellaneous revenue\" and \"unclaimed assets\" from across the land, which are then funneled into community projects.": "一家以...创意记账闻名的谨慎会计师事务所。他们的审计师有着不可思议的能力，能从各地发现\"杂项收入\"和\"无人认领资产\"，然后将其注入社区项目。",
    "Applies to": "适用于",
    "Automatically deducts 5% of all raw resources you gather (from Mining, Woodcutting, and Battling) and donates them to the most-voted Community Building(s).": "自动扣除您采集的所有原始资源（来自采矿、伐木和战斗）的5%，并将其捐赠给投票最多的社区建筑。",
    "Each tick also generates 2.5% of your gathered amount as other primary raw resources. While fishing, the strength of this effect is determined by your": "每个tick还会生成您采集量的2.5%作为其他主要原始资源。钓鱼时，此效果的强度取决于您的",
    "Fishing Level and Rod Power": "钓鱼等级和鱼竿强度",
    "Gain +1% chance to catch fish per level and +1% chance to find Abyssal Eels per level, and +1 Fishing XP per tick per level.": "每级获得+1%捕获鱼的几率和+1%发现深渊鳗鱼的几率，以及每tick +1钓鱼经验值每级。",
    "Generates a surplus of": "生成盈余",
    "Glyph of Scavenging (Level 1)": "拾荒符文（等级1）",
    "Glyph of the Duelist (Level 1)": "决斗者符文（等级1）",
    "Glyph of the Laborer (Level 1)": "劳动者符文（等级1）",
    "Glyph of the Philanthropist (Level 1)": "慈善家符文（等级1）",
    "Glyph of the Prospector (Level 1)": "勘探者符文（等级1）",

    // 精准匹配翻译
    "Helm of Learning (Lvl 7)": "学识头盔",
    "In return, you gain +10% bonus XP for that gathering skill.": "作为回报，您获得该采集技能+10%额外经验值。",
    "Kitchen (Level 9)": "厨房",
    "Leviathan Scales are earned by defeating the \"Leviathan from the Depths\" world boss.": "利维坦鳞片通过击败世界Boss\"深渊利维坦\"获得。",
    "on all gathered Iron Ore, Logs, Gold, and Rune Shards.": "在所有采集的铁矿石、木头、金币和符文碎片上。",
    "Permanently learn new Cooking recipes by exchanging Leviathan Scales.": "通过交换利维坦鳞片永久学习新的烹饪配方。",
    "Pickaxe, Axe, Sword": "镐、斧、剑",
    "Pickaxe, Axe, Sword, Fishing Rod": "镐、斧、剑、鱼竿",
    "Prospector's Lodge (Level 5)": "勘探者小屋",
    "Quartermaster's Workshop (Level 5)": "军需官工坊",
    "Sawmill (Level 9)": "锯木厂",
    "Scholar's Study (Level 10)": "学者书房",
    "Seismic Quarry (Level 3)": "地震采石场",
    "Sigil of Ferocity (Level 9)": "凶猛印记",
    "The Counting House (Level 3)": "账房",
    "This tool's scrap value becomes 0.": "此工具的废料价值变为0。",
    "Town Watch (Level 4)": "城镇守卫",
    "- Woodcutter": "- 伐木工",
    "Your Battler Level": "你的战斗等级",
    "Your Woodcutting Level": "你的伐木等级",
    "to our defenses.": "到我们的防御。",
    "YOUR TOWN NEEDS YOU!": "你的城镇需要你！",
    "Max Level Reached": "已达最高等级",
    // 精准匹配翻译
    "You found 1 Crystallized Anima while battling!": "你在战斗中发现了1个结晶灵气！",
    // 精准匹配翻译
    "Your Skill Level": "你的技能等级",
    // 精准匹配翻译
    "Contribute 1,000,000 Gold": "贡献1,000,000金币",
    "8% (2% per level, caps at 100%)": "8%（每级2%，上限100%）",
    // 精准匹配翻译
    "\"The crown looks the other way. Don't get caught!\"": "\"王冠看向另一边。别被抓到！\"",
    "\"The fish are practically jumping into the boats!\"": "\"鱼儿简直要跳进船里了！\"",
    "+2 bonus XP": "+2 额外经验值",
    "All purchases from the player market are": "所有玩家市场购买都是",
    "and you get 1 extra Fishing XP during this event.": "并且在此事件期间您获得1点额外钓鱼经验值。",
    "tax-free": "免税",
    "The chance to catch fish is": "捕获鱼的几率是",
    // 精准匹配翻译
    "Request Aid": "请求援助",
    "Note: Each auto-dungeon level is unlocked by completing 100 dungeons (e.g., 100 for Level 1, 200 for Level 2, etc.).": "注意：每个自动地下城等级需要通过完成100个地下城来解锁（例如，等级1需要100个，等级2需要200个，以此类推）。",
    // 精准匹配翻译
    "- OR -": "- 或 -",
    "Start as an Apprentice": "以学徒身份开始",
    "What is an Apprentice account?": "什么是学徒帐户？",
    "Forgot your password? Enter your username and we'll send a reset link to the email associated with your account. Or, if you remember your current password, you can change it below.": "忘记密码？输入您的用户名，我们会向与您帐户关联的电子邮件发送重置链接。或者，如果您记得当前密码，可以在下方更改。",
    "Try the game instantly without an email or password. Your progress is saved on the server. You can create a permanent account later from the in-game Options menu to secure your progress and unlock all features (like the Market and Conclaves).": "无需电子邮件或密码即可立即试玩游戏。您的进度保存在服务器上。您稍后可以从游戏内选项菜单创建永久帐户，以保护您的进度并解锁所有功能（如市场和工匠协会）。",
    "Welcome to Idle Artisan, a world where your skill and dedication can turn humble resources into legendary artifacts. Begin your journey by gathering materials, honing your skills in Mining, Woodcutting, and more, and crafting ever-more-powerful tools. Master the art of the forge and the kitchen, creating gear and powerful food buffs that will set you apart as a true master of your trade.": "欢迎来到《空闲工匠》，在这个世界中，您的技能和奉献可以将卑微的资源转化为传奇神器。通过收集材料开始您的旅程，磨练您的采矿、伐木等技能，并制作越来越强大的工具。掌握锻造和烹饪的艺术，制作装备和强大的食物增益，使您成为真正的大师。",
    "But you are not alone. Join a Conclave to collaborate with fellow artisans on massive projects, or test your mettle against epic world bosses. The player-driven market is yours to command, but be warned—a relentless goblin horde constantly threatens the town's defenses, requiring all artisans to stand together to protect the community you've all worked so hard to build.": "但您并不孤单。加入工匠协会与同行合作完成大型项目，或与世界Boss较量来测试您的勇气。玩家驱动的市场由您指挥，但请注意——无情的地精部落不断威胁着城镇的防御，需要所有工匠团结一致，保护你们共同努力建立的社区。",
    // 精准匹配翻译
    "5 hours ago": "5小时前",
    "No public buy orders.": "没有公开购买订单。",
    "Increases max offline time to 1 hour.": "将最大离线时间增加到1小时。",

    "Join to fight the beast with your Fishing skill. The total reward pool of Leviathan Scales": "使用你的钓鱼技能加入对抗这头野兽。利维坦鳞片的总奖励池",
    "Join to fight the beast with your Mining skill. The total reward pool of Rune Shards": "使用你的采矿技能加入对抗这头野兽。符文碎片的总奖励池",
    "Join to fight the beast with your Woodcutting skill. The total reward pool of Treant Resin": "使用你的伐木技能加入对抗这头野兽。树人树脂的总奖励池",
    "Join to fight the beast with your Battling skill. The total reward pool of Boss Tokens": "使用你的战斗技能加入对抗这头野兽。Boss代币的总奖励池",



    // 新增汉化内容
    "Artisan's Mark Exchange": "工匠印记交易所",
    "Conclaves": "工匠公会",
    "Glyphs": "符文",
    "Sharpening Stones": "磨刀石",
    "The Exchange": "交易所",
    "Rare Resource Exchange": "稀有资源交易所",
    "Market Log": "市场日志",
    "Cooking Attempts": "烹饪尝试次数",

    // 游戏机制描述
    "Artisan's Marks": "工匠印记",
    "Artisan's Mark Exchange (Beta)": "工匠印记交易所（测试版）",
    "Purchase powerful Glyphs to socket into your tools, providing unique bonuses and trade-offs. Glyphs can be socketed into a tool of the same level or lower (ex: level 15 glyph can socket into a level 15 or lower tool, but a level 15 glyph cannot be socketed into a level 16 or higher tool). Each tool can only have one Glyph at a time. Glyph benefits (and trade-offs) are only applied to a given tool while using that tool.": "购买强大的符文插入您的工具，提供独特的奖励和权衡。符文可以插入相同等级或更低等级的工具（例如：15级符文可以插入15级或更低等级的工具，但15级符文不能插入16级或更高等级的工具）。每个工具一次只能有一个符文。符文的好处（和权衡）仅在使用该工具时应用。",
    "The Exchange is a special shop where you can trade unique, non-marketable currencies for powerful items and recipes. These currencies are earned by participating in specific game activities.": "交易所是一个特殊的商店，您可以在那里交易独特的、不可市场化的货币来获取强大的物品和配方。这些货币通过参与特定的游戏活动获得。",
    "Trade the rare resources found via your Conclave's buildings (Starfall Ore, Glimmerwood Sap, Crystallized Anima) for": "通过您的公会建筑找到的稀有资源（星落矿石、微光树液、结晶灵气）可以交易",
    "these buildings using rare resources found via their Conclave. Each enhancement level provides a +20% bonus to the building's throughput. The cost to enhance scales with both the building's level and its current enhancement level, requiring Starfall Ore (Ironforge), Glimmerwood Sap (Sawmill), or Crystallized Anima (Goldforge).": "使用通过公会找到的稀有资源来强化这些建筑。每个强化等级提供建筑吞吐量+20%的奖励。强化成本随建筑等级和当前强化等级而增加，需要星落矿石（铁熔炉）、微光树液（锯木厂）或结晶灵气（金熔炉）。",
    "to permanently increase its fish preparation throughput by +20% per enhancement level.": "永久增加其鱼类准备吞吐量，每个强化等级+20%。",
    "using": "使用",
    "Dedicated artisans can now": "专注的工匠现在可以",
    "In addition to tools, master artisans can forge powerful": "除了工具，大师工匠还可以锻造强大的",
    ". These unique artifacts are crafted from a combination of refined materials and rare boss components. When equipped, a Sigil provides a significant, role-specific bonus within Dungeons, enhancing a player's effectiveness as a damage dealer, healer, or tank. Sigils are always of": "。这些独特的神器由精炼材料和稀有Boss组件组合而成。装备时，印记在地下城中提供显著的、特定角色的奖励，增强玩家作为伤害输出者、治疗者或坦克的效果。印记始终是",
    "quality and become soulbound once equipped.": "品质，并且一旦装备就绑定。",
    ". These single-use items permanently upgrade an equipped tool by one rarity level, up to the ultimate Legendary tier.": "。这些一次性使用的物品永久地将装备的工具提升一个稀有等级，最高可达最终的传说级别。",
    ". These magical symbols can be socketed into your tools to provide unique bonuses and trade-offs, allowing for deeper specialization of your craft.": "。这些魔法符号可以插入您的工具中，提供独特的奖励和权衡，允许更深入的专业化您的工艺。",
    "your tools and to craft the": "您的工具和制作",
    "event. Required for high-level Community Buildings and to craft the": "事件。高级社区建筑所需，并用于制作",
    "event. Used at the Exchange to learn cooking recipes and to craft the": "事件。在交易所用于学习烹饪配方和制作",
    "Be warned: the tunnels are unstable. Your party has only 30 seconds to defeat the monster in each room before you become exhausted and must regroup. As a reward for your bravery, you will earn": "警告：隧道不稳定。您的队伍只有30秒时间击败每个房间的怪物，否则会变得疲惫并必须重新组队。作为您勇敢的奖励，您将获得",
    "for each room cleared, with a large bonus for defeating the final boss. These marks can be traded at the Exchange for powerful Glyphs. You can also earn permanent cosmetic username colors by completing dungeons. Check the Dungeons tab and Exchange tab to see the rewards!": "每个清理的房间，击败最终Boss有大量奖励。这些印记可以在交易所交易强大的符文。您还可以通过完成地下城获得永久的装饰性用户名颜色。查看地下城标签页和交易所标签页了解奖励！",
    "Like other refining buildings, the Kitchen can be": "像其他精炼建筑一样，厨房可以",
    "+1% chance to catch fish per level and a": "每级+1%捕获鱼的几率和",
    "to your chance of finding Abyssal Eels per level. Also grants +1 Fishing XP per tick per level.": "每级发现深渊鳗鱼的几率。同时每级每tick获得+1钓鱼经验值。",
    "and the": "和",
    "(0-10%) to automatically collect a portion of members' gathered raw materials (from Mining, Woodcutting, and Battling) and Rune Shards (from the Runic Golem event). These materials are converted to refined resources and contributed to the Conclave's most-voted project(s) after every": "(0-10%) 自动收集成员采集的原材料的一部分（来自采矿、伐木和战斗）和符文碎片（来自符文魔像事件）。这些材料被转化为精炼资源，并在每次",
    "Clear": "清除",
    "Trade": "交易",
    "Learned": "已学习",
    "No market activity to display.": "无市场活动可显示。",

    // 食物相关
    "[Burnt] Grilled Fish": "[烧焦] 烤鱼",
    "[Fine] Grilled Fish": "[优良] 烤鱼",

    // 角色描述
    "Battler (Sword/Battler Level)": "战斗者（剑/战斗等级）",
    "Miner (Pickaxe/Mining Level)": "矿工（镐/采矿等级）",
    "Woodcutter (Axe/Woodcutting Level)": "伐木工（斧/伐木等级）",

    // 其他界面文本
    "✔️": "✔️",
    "⭐": "⭐",
    "🔒": "🔒",
    "×": "×",
    "+10% multiplier": "+10% 乘数",

    // 时间格式
    "24 days ago": "24天前",
    // 新增汉化内容
    ", earned from completing Dungeons, to purchase powerful": "，通过完成地下城获得，用于购买强大的",
    ", earned from defeating The Leviathan, to permanently learn new cooking recipes.": "，通过击败利维坦获得，用于永久学习新的烹饪配方。",

    // 引用文本
    "\"A master artisan knows their workshop is never truly finished. There is always room for refinement.\"": "\"大师工匠知道他们的工坊永远不会真正完成。总有改进的空间。\"",

    // 建筑和强化相关
    "+20% Throughput (Total: +20%)": "+20% 吞吐量（总计：+20%）",
    "+4 ": "+4 ",
    "+50% multiplier to find Abyssal Eels": "+50% 发现深渊鳗鱼的乘数",
    "2% ": "2% ",
    "8% ": "8% ",


    // 界面文本
    "Current Level": "当前等级",
    "E0": "E0",
    "E0 (+0% Throughput)": "E0（+0% 吞吐量）",
    "Next Level (E1)": "下一等级（E1）",

    // 建筑名称
    "Lumberjack Shack (Level 5)": "伐木工小屋（等级 5）",
    "Masterwork Atelier (Level 4)": "杰作工作室（等级 4）",
    "Mercenary Post (Level 8)": "雇佣兵哨站（等级 8）",

    // 技能描述
    "Gain +1% chance to catch fish per level and a": "每级获得+1%捕获鱼的几率和",

    // 错误消息
    "Not enough Glimmerwood Sap.": "微光树液不足。",
    "Not enough Oceanic Essence.": "海洋精华不足。",
    "Not enough Starfall Ore.": "星落矿石不足。",
    // 新增汉化内容
    "[2025-10-12 16:04:35] Market log has been cleared.": "[2025-10-12 16:04:35] 市场日志已清除。",

    // 技能等级
    "Your Fishing Level": "你的钓鱼等级",
    // 新增汉化内容
    "(Votes: 5)": "（投票：5）",
    // 事件消息
    "[Fine] Fish Stew": "[优良] 鱼汤",
    // 属性加成
    "+4% Damage": "+4% 伤害",
    // 时间显示
    "6 hours ago": "6小时前",

};

// 需处理的前缀
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

    // 树游戏
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
    "Active Players: ": "活跃玩家: ",
    "Time Left: ": "剩余时间: ",
    "Crafting XP: ": "制作经验: ",
    "[Poor] ": "[劣质] ",
    "[Rare] ": "[稀有] ",
    "[Epic] ": "[史诗] ",
    "[Common] ": "[普通] ",
    "[Uncommon] ": "[罕见] ",
    "[Unique] ": "[独特] ",
    "Crafting: ": "制作: ",
    "Power: ": "力量: ",
    "Sharpen Swords: +": "磨剑: +",
    "Total Power: ": "总力量: ",
    "- Quantity: ": "- 数量: ",
    "[NPC]": "[NPC]",
    "Minimum bid: ": "最低报价: ",
    "Current bid: ": "当前报价: ",
    "Current Pool": "当前奖励池",
    "New min bid: ": "新的最低报价: ",
    "This tool has been empowered with Treant Resin": "这个工具已经用树人树脂进行了强化",
    "Profile for: ": "个人资料关于: ",
}

// 需处理的后缀
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
    ":": ":",

    "Switched to Battling.": "已经切换到战斗。",
    "Switched to Woodcutting.": "已经切换到伐木。",
    "Switched to Mining.": "已经切换到采矿。",

    "Not enough Logs. Switched to Woodcutting.": "没有足够的原木。已切换为伐木。",
    "bonus to your Quality Score on every craft": " 质量分数加成到你的每次制作",
    " max per resource (except gold)": " 每种资源容量上限 (除了金币)",
    "resource costs for crafting personal items, refining buildings, and community buildings": "资源消耗对于制作个人物品，精炼建筑和社区建筑",
    "chance per level for the thief to be arrested (caps at 100% at level 50). Also +1% damage vs Boss, Ancient Treant, and Runic Golem per level.": "的几率抓到盗贼（每级）（50级时几率上限为100%）。每升1级对Boss，远古树人和符文魔像的伤害增加1%。",
    "chance to arrest the thief during their visit": "几率在小偷来访时，将其抓获",
    "You do not have enough gold to place that bid.": "您的金币不足，无法出价。",
    "% tax": "% 税",
    "The town watch reports the distant sound of goblin war drums!": "城镇守卫报告远处传来哥布林的战鼓声！",
    "The Runic Golem has left the area.": "符文魔像已经离开了这个区域。",
    "Not enough Iron Ore. ": "没有足够的铁矿石。",
    "You already have a listing for this item.": "你已经在市场上架了此物品。",
    "Not enough Logs. ": "木头不足。",
    "The Ancient Treant has left the area.": "上古树人已离开该区域。",
    "Not enough Gold. ": "金币不足。",
    "The goblin horde has been defeated! The community buildings are safe!": "哥布林部落已被击败！社区建筑安全了！",
    "Listing not found.": "挂单未找到。",
    "Welcome to the game!": "欢迎来到游戏！",
    "AJAX Error getting market listings: error -": "AJAX获取市场列表错误：错误-",
    "AJAX Error changing activity: error -": "AJAX错误更改活动：错误-",
    "The goblin siege has been repelled! The defenses held!": "哥布林的围攻被击退了！防御工事守住了！",
    //     "[Event] The Thief searched for valuable targets but couldn't find any, so he went home for the night.": "[事件] 小偷寻找有价值的目标，但没有找到，所以他回家过夜了。",
    "Invalid bid. Please enter an amount greater than 0.": "无效的出价。请输入大于0的金额。",
    "There is no active auction to bid on.": "目前没有可以竞价的拍卖。",
    " Your bid extended the auction by 10 seconds.": "你的出价延长了 10 秒竞拍时间。",
    "% per level)": "% 每级)",
    "AJAX Error getting buy orders: error -": "AJAX获取购买订单错误：错误-",

}

// 需排除的，正则匹配
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
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+) ([\d\.]+):([\d\.]+):([\d\.]+)$/,
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
    /^\[([\d\.,]+)\]$/,
    /^([\d\.,]+)x$/,
    /^\[([\d\.,]+)\-([\d\.,]+)\-([\d\.,]+) ([\d\.,]+):([\d\.,]+):([\d\.,]+)\] $/,
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
    /^([\u4E00-\u9FA5]+)$/
];

var cnExcludePostfix = []

// 正则替换，带数字的固定格式句子
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^Welcome back, (.+). The scribes are reviewing the workshop's logs to account for your time away. Please wait...$/, '欢迎回来，$1。抄写员正在查看研讨会的日志以记录你离开的时间。请稍等…'],
    [/^Welcome back, (.+)! Your workshop ran for (.+) hours and (.+) minutes in your absence.$/, '欢迎回来，$1！ 你的工坊在你不在的情况下运行了 $2 小时 $3 分钟。'],
    [/^Welcome back, (.+)! Your workshop ran for (.+) minutes in your absence.$/, '欢迎回来，$1！ 你的工坊在你不在的情况下运行了 $2 分钟。'],
    [/^Welcome back, (.+)! Your workshop ran for (.+) hours in your absence.$/, '欢迎回来，$1！ 你的工坊在你不在的情况下运行了 $2 小时。'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Contribute (.+) Logs$/, '贡献 $1 木头'],
    [/^Contribute (.+) Iron Ore$/, '贡献 $1 铁矿石'],
    [/^Grants (.+) bonus XP per tick.$/, '每刻(Tick)增加 $1 点经验值。'],
    [/^Grants (.+) Crafting XP per tick.$/, '每刻(Tick)增加 $1 点 制作 经验值。'],
    [/^Grants (.+) Battler XP per tick.$/, '每刻(Tick)增加 $1 点 战斗 经验值。'],
    [/^Grants (.+) Woodcutting XP per tick.$/, '每刻(Tick)增加 $1 点 伐木 经验值。'],
    [/^Grants (.+) Mining XP per tick.$/, '每刻(Tick)增加 $1 点 采矿 经验值。'],
    [/^Allows creation of level (.+) refining buildings and items.$/, '允许创建 $1 级精炼建筑和物品。'],
    [/^Consumes (.+) Gold per tick.$/, '消耗 $1 金币 每刻(Tick).'],
    [/^Consumes (.+) Logs per tick.$/, '消耗 $1 木板 每刻(Tick).'],
    [/^Consumes (.+) Iron Ore per tick.$/, '消耗 $1 铁矿石 每刻(Tick).'],
    [/^\((.+) base \+ (.+) from Alchemist Guild\)$/, '（$1 基础 + $2 来自 炼金术士公会）'],
    [/^Produces (.+) Gold Bars per tick.$/, '生产 $1 金锭 每刻(Tick)。'],
    [/^Produces (.+) Iron Bars per tick.$/, '生产 $1 铁锭 每刻(Tick)。'],
    [/^Produces (.+) Planks per tick.$/, '生产 $1 木板 每刻(Tick)。'],
    [/^Adds (.+) to the item's base level, then multiplies the result by (.+).$/, '物品的基础等级增加 $1，然后乘以 $2。'],
    [/^Subtracts (.+) from the item\'s base level, then multiplies the result by (.+).$/, '从物品的基础等级中减去 $1，然后乘以 $2。'],
    [/^Level (\d+) Bonus$/, '等级 $1 奖励'],
    [/^Wharf Lvl (\d+) Multiplier$/, '码头等级 $1 乘数'],
    [/^Wharf Lvl (\d+) Bonus$/, '码头等级 $1 乘数'],

    // 工具名称正则

    [/.*Fishing Rod \(Level (\d+)\).*/, '鱼竿（等级 $1）'],
    [/.*Pickaxe \(Level (\d+)\).*/, '镐子（等级 $1）'],
    [/.*Axe \(Level (\d+)\).*/, '斧子（等级 $1）'],
    [/.*Sword \(Level (\d+)\).*/, '剑（等级 $1）'],
    [/.*Helm of Learning \(Level (\d+)\).*/, '学问之盔（等级 $1）'],
    [/^Sigil of Ferocity \(Lvl (\d+)\)$/, '凶猛印记（等级 $1）'],
    [/^Storage Barn \(Level (\d+)\)$/, '仓库（等级 $1）'],

    [/^Sigil Of Ferocity$/, '凶猛印记'],

    [/Fishing Rod \(Level (\d+), S\)/, '鱼竿（等级 $1，S）'],
    [/Pickaxe \(Level (\d+)\) \[E(\d+)\]/, '镐子（等级 $1）[E$2]'],
    [/Axe \(Level (\d+)\) \[E(\d+)\]/, '斧子（等级 $1）[E$2]'],
    [/Sword \(Level (\d+)\) \[E(\d+)\]/, '剑（等级 $1）[E$2]'],
    [/Helm of Learning \(Level (\d+)\) \[E(\d+)\]/, '学问之盔（等级 $1）[E$2]'],

    [/^Battler \(Sword\/Battler Level\)$/, '战斗者（剑/战斗等级）'],
    [/^Miner \(Pickaxe\/Mining Level\)$/, '矿工（镐/采矿等级）'],
    [/^Woodcutter \(Axe\/Woodcutting Level\)$/, '伐木工（斧/伐木等级）'],
    [/^(\d+) days ago$/, '$1天前'],

    [/^([\d\.]+)% Throughput \(Total: ([\d\.]+)%\)$/, '$1% 吞吐量（总计：$2%）'],
    [/^E(\d+) \(\+([\d\.]+)% Throughput\)$/, 'E$1（+$2% 吞吐量）'],
    [/^Next Level \(E(\d+)\)$/, '下一等级（E$1）'],

    [/^Your Fishing Level$/, '你的钓鱼等级'],
    [/^×([\d\.]+) \(\+([\d\.]+)%\)$/, '×$1（+$2%）'],
    [/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] Market log has been cleared\.$/, '[时间] 市场日志已清除。'],
    // 在 cnRegReplace 映射中添加
    [/^(\d+\.\d+)% \(for ([\d\.]+) fish\)$/, '$1%（对应$2鱼）'],
    [/^You scavenged ([\d\.]+) Iron Ore, ([\d\.]+) Logs, and ([\d\.]+) Gold\.$/, '你拾荒获得了$1铁矿石、$2木头和$3金币。'],
    [/^Wait\.\.\.(\d+)$/, '等待...$1'],

    // 在 cnRegReplace Map 中添加：
    [/Enhance\s+Goldforge/i, '强化金熔炉'],
    [/Enhance\s+Ironforge/i, '强化铁熔炉'],
    [/Enhance\s+Kitchen/i, '强化厨房'],
    [/Enhance\s+Sawmill/i, '强化锯木厂'],
    [/enhance\s+goldforge/i, '强化金熔炉'],
    [/enhance\s+ironforge/i, '强化铁熔炉'],
    [/enhance\s+kitchen/i, '强化厨房'],
    [/enhance\s+sawmill/i, '强化锯木厂'],

    // 正则表达式翻译
    [/^Craft Crafting Table \(Level (\d+)\)$/, '制作合成台（等级 $1）'],
    [/^Craft Goldforge \(Level (\d+)\)$/, '制作金熔炉（等级 $1）'],
    [/^Craft Ironforge \(Level (\d+)\)$/, '制作铁溶炉（等级 $1）'],
    [/^Craft Sawmill \(Level (\d+)\)$/, '制作锯木厂（等级 $1）'],
    [/^Craft Kitchen \(Level (\d+)\)$/, '制作厨房（等级 $1）'],
    [/^Craft Pickaxe \(Level (\d+)\)$/, '制作镐子（等级 $1）'],
    [/^Craft Axe \(Level (\d+)\)$/, '制作斧子（等级 $1）'],
    [/^Craft Sword \(Level (\d+)\)$/, '制作剑（等级 $1）'],
    [/^Craft Fishing Rod \(Level (\d+)\)$/, '制作鱼竿（等级 $1）'],
    [/^Craft Helm of Learning \(Level (\d+)\)$/, '制作学问之盔（等级 $1）'],
    [/^Craft Mercenary Post \(Level (\d+)\)$/, '制作雇佣兵哨站（等级 $1）'],
    [/^Craft Scholar's Study \(Level (\d+)\)$/, '制作学者书房（等级 $1）'],
    [/^Craft Sigil of Barbs \(Level (\d+)\)$/, '制作荆棘印记（等级 $1）'],
    [/^Craft Sigil of Ferocity \(Level (\d+)\)$/, '制作凶猛印记（等级 $1）'],
    [/^Craft Sigil of Mending \(Level (\d+)\)$/, '制作修复印记（等级 $1）'],
    [/^Craft Sigil of Resilience \(Level (\d+)\)$/, '制作坚韧印记（等级 $1）'],
    // 在 cnRegReplace Map 中添加：
    // 烹饪操作
    [/^Cook: Grilled Fish$/, '烹饪：烤鱼'],
    [/^Cook: Fish Stew$/, '烹饪：鱼汤'],
    [/^Cook: Eel Broth$/, '烹饪：鳗鱼汤'],

    // 效果品质描述
    [/^Effect \(Normal Quality\)$/, '效果（普通品质）'],
    [/^Effect \(Fine Quality\)$/, '效果（优良品质）'],
    [/^Effect \(Exquisite Quality\)$/, '效果（精美品质）'],
    [/^Effect \(Burnt Quality\)$/, '效果（烧焦品质）'],
    [/^Effect \(Poor Quality\)$/, '效果（劣质品质）'],
    [/^Effect \(Common Quality\)$/, '效果（普通品质）'],
    [/^Effect \(Uncommon Quality\)$/, '效果（罕见品质）'],
    [/^Effect \(Rare Quality\)$/, '效果（稀有品质）'],
    [/^Effect \(Epic Quality\)$/, '效果（史诗品质）'],
    [/^Effect \(Unique Quality\)$/, '效果（独特品质）'],

    // 增益效果描述 - 捕获几率
    [/^Grants \+10% Catch Chance\.$/, '提供+10%捕获几率。'],
    [/^Grants \+25% Catch Chance\.$/, '提供+25%捕获几率。'],
    [/^Grants \+(\d+)% Catch Chance\.$/, '提供+$1%捕获几率。'],

    // 增益效果描述 - 采集产量
    [/^Grants \+10% Gathering Yield\.$/, '提供+10%采集产量。'],
    [/^Grants \+25% Gathering Yield\.$/, '提供+25%采集产量。'],
    [/^Grants \+(\d+)% Gathering Yield\.$/, '提供+$1%采集产量。'],

    // 增益效果描述 - 其他类型
    [/^Grants \+(\d+)% Gold Gain\.$/, '提供+$1%金币获得。'],
    [/^Grants \+(\d+)% Damage\.$/, '提供+$1%伤害。'],
    [/^Grants \+(\d+)% Healing\.$/, '提供+$1%治疗。'],
    [/^Grants \+(\d+)% Refining Output\.$/, '提供+$1%精炼产出。'],

    // 烹饪说明
    [/^Higher Kitchen level and cooking level impacts the food's quality outcome\. Higher quality food has a longer duration\.$/, '更高的厨房等级和烹饪等级会影响食物的品质结果。更高质量的食物有更长的持续时间。'],

    // 等级
    [/^Level$/, '等级'],

    // 匹配建筑等级显示
    [/Ironforge \(Level (\d+)\)/, '铁熔炉（等级 $1）'],
    [/Goldforge \(Level (\d+)\)/, '金熔炉（等级 $1）'],
    [/Sawmill \(Level (\d+)\)/, '锯木厂（等级 $1）'],
    [/Kitchen \(Level (\d+)\)/, '厨房（等级 $1）'],
    [/Storage Barn \(Level (\d+)\)/, '仓库（等级 $1）'],
    [/Crafting Table \(Level (\d+)\)/, '合成台（等级 $1）'],
    [/Lumberjack Shack \(Level (\d+)\)/, '伐木工小屋（等级 $1）'],
    [/Prospector's Lodge \(Level (\d+)\)/, '勘探者小屋（等级 $1）'],
    [/Battler's Bar \(Level (\d+)\)/, '战士酒吧（等级 $1）'],
    [/Town Watch \(Level (\d+)\)/, '城镇守卫（等级 $1）'],
    [/Guild of Alchemists \(Level (\d+)\)/, '炼金师公会（等级 $1）'],
    [/Masterwork Atelier \(Level (\d+)\)/, '杰作工作室（等级 $1）'],
    [/Quartermaster's Workshop \(Level (\d+)\)/, '军需工坊（等级 $1）'],
    [/The Grand Library \(Level (\d+)\)/, '大图书馆（等级 $1）'],
    [/Scholar's Study \(Level (\d+)\)/, '学者书房（等级 $1）'],
    [/Mercenary Post \(Level (\d+)\)/, '雇佣兵哨站（等级 $1）'],
    [/Fisherman's Wharf \(Level (\d+)\)/, '渔人码头（等级 $1）'],
    [/Coral Sanctuary \(Level (\d+)\)/, '珊瑚保护区（等级 $1）'],
    [/The Counting House \(Level (\d+)\)/, '会计所（等级 $1）'],
    [/Artisan's Conclave \(Level (\d+)\)/, '工匠公会（等级 $1）'],
    [/Gain \+(\d+)% refining output \(Iron Bars, Planks, Gold Bars, Prepared Fish\) per level; inputs unchanged\./, '每级获得+$1%精炼产出（铁锭、木板、金锭、加工鱼）；投入不变。'],
    [/\+(\d+)% refining output \(Iron Bars, Planks, Gold Bars, Prepared Fish\)/, '+$1% 精炼产出（铁锭、木板、金锭、加工鱼）'],

    // 后缀
    [/^([\d\.]+)\/sec$/, '$1\/秒'],
    [/^([\d\.,]+)\/sec$/, '$1\/秒'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) Iron Bars$/, '$1 铁锭'],
    [/^([\d\.]+) Planks$/, '$1 木板'],
    [/^([\d\.]+) Gold Bars$/, '$1 金锭'],
    [/^([\d,]+) Boss Tokens$/, '$1 Boss代币'],
    [/^([\d\.]+) Treant Resin$/, '$1 树人树脂'],
    [/^([\d\.]+) Rune Shards$/, '$1 符文碎片'],
    [/^([\d\.]+) Starfall Ore$/, '$1 星落矿石'],
    [/^([\d\.]+) Glimmerwood Sap$/, '$1 微光树液'],
    [/^([\d\.]+) Crystallized Anima$/, '$1 星落矿石'],
    [/^([\d\.]+) Oceanic Essence$/, '$1 海洋精华'],
    [/^([\d,]+) Gold$/, '$1 金币'],

    [/^([\d,]+\.\d+) Iron Bars$/, '$1 铁锭'],
    [/^([\d,]+\.\d+) Planks$/, '$1 木板'],
    [/^([\d,]+\.\d+) Gold Bars$/, '$1 金锭'],
    [/^([\d,]+\.\d+) Boss Tokens$/, '$1 Boss代币'],
    [/^([\d,]+\.\d+) Treant Resin$/, '$1 树人树脂'],
    [/^([\d,]+\.\d+) Rune Shards$/, '$1 符文碎片'],
    [/^([\d,]+\.\d+) Starfall Ore$/, '$1 星落矿石'],
    [/^([\d,]+\.\d+) Glimmerwood Sap$/, '$1 微光树液'],
    [/^([\d,]+\.\d+) Crystallized Anima$/, '$1 星落矿石'],
    [/^([\d,]+\.\d+) Oceanic Essence$/, '$1 海洋精华'],
    [/^([\d,]+\.\d+) Gold$/, '$1 金币'],

    [/^([\d,]+\.?\d*) Leviathan Scales$/, '$1 利维坦鳞片'],
    [/^([\d,]+\.?\d*) Boss Tokens$/, '$1 Boss代币'],
    [/^([\d,]+\.?\d*) Treant Resin$/, '$1 树人树脂'],
    [/^([\d,]+\.?\d*) Rune Shards$/, '$1 符文碎片'],

    [/^(\d+:\d+) \(100%\)$/, '$1（100%）'],
    [/^Level (\d+)$/, '等级 $1'],
    [/^Page (\d+) of (\d+)$/, '页码 $1 \/ $2'],
    [/^(\d+)d (\d+)h (\d+)m$/, '$1天 $2小时 $3分'],
    [/^- (\d+)% Complete$/, '- $1% 完成'],

    [/^Mining: ([\d,]+) \/ ([\d,]+)$/, '采矿: $1 / $2'],
    [/^Woodcutting: ([\d,]+) \/ ([\d,]+)$/, '伐木: $1 / $2'],
    [/^Fishing: ([\d,]+) \/ ([\d,]+)$/, '钓鱼: $1 / $2'],
    [/^Battler: ([\d,]+) \/ ([\d,]+)$/, '战斗: $1 \/ $2'],
    [/^Cooking: ([\d,]+) \/ ([\d,]+)$/, '烹饪: $1 / $2'],
    [/^Party (\d+) \(Lvl (\d+)\) - (\d+)\/6 players - Room (\d+)$/, '队伍 $1（等级 $2）- $3/6 玩家 - 房间 $4'],
    [/(\d+)h (\d+)m/, '$1小时$2分钟'],
    [/(\d+)d (\d+)h/, '$1天$2小时'],
    [/(\d+)d (\d+)h (\d+)m/, '$1天$2小时$3分钟'],

    [/^\[Fight\] You dealt ([\d,]+\.?\d*) battle damage\. Boss HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 你造成了$1战斗伤害。Boss生命值：$2/$3（$4%）。'],
    [/^\[Event\] The Runic Golem endured\. A ([\d.]+)% consolation pool was distributed to the (\d+) participants\.$/, '[事件] 符文魔像得以幸存。$1%的安慰奖池分配给了$2名参与者。'],
    [/^\[Event\] The Leviathan endured and returned to the depths\. A ([\d.]+)% consolation pool was distributed to (\d+) participants\.$/, '[事件] 利维坦承受住了攻击并返回了深渊。$1%的安慰奖池分配给了$2名参与者。'],

    //前缀
    [/^Planks: ([\d\.]+)$/, '木板: $1'],
    [/^Gold Bars: ([\d.]+)$/, '金锭：$1'],
    [/^Iron Bars: ([\d.]+)$/, '铁锭：$1'],
    [/^Oceanic Essence: ([\d\.]+)$/, '海洋精华: $1'],
    [/^\(Catch Chance: ([\d.]+)%\)$/, '（捕获几率：$1%）'],
    [/^Total: ([\d.]+)%$/, '总计：$1%'],
    // 匹配资源显示，支持逗号和小数点
    [/^Planks: ([\d,]+(?:\.\d+)?)$/, '木板: $1'],
    [/^Iron Bars: ([\d,]+(?:\.\d+)?)$/, '铁锭: $1'],
    [/^Gold Bars: ([\d,]+(?:\.\d+)?)$/, '金锭: $1'],
    [/^Iron Ore: ([\d,]+(?:\.\d+)?)$/, '铁矿石: $1'],
    [/^Logs: ([\d,]+(?:\.\d+)?)$/, '木头: $1'],
    [/^Gold: ([\d,]+(?:\.\d+)?)$/, '金币: $1'],
    [/^Treant Resin: ([\d,]+(?:\.\d+)?)$/, '树人树脂: $1'],
    [/^Rune Shards: ([\d,]+(?:\.\d+)?)$/, '符文碎片: $1'],
    [/^Boss Tokens: ([\d,]+(?:\.\d+)?)$/, 'Boss代币: $1'],
    [/^Leviathan Scales: ([\d,]+(?:\.\d+)?)$/, '利维坦鳞片: $1'],
    [/^Starfall Ore: ([\d,]+(?:\.\d+)?)$/, '星落矿石: $1'],
    [/^Glimmerwood Sap: ([\d,]+(?:\.\d+)?)$/, '微光树液: $1'],
    [/^Crystallized Anima: ([\d,]+(?:\.\d+)?)$/, '生命结晶: $1'],
    [/^Oceanic Essence: ([\d,]+(?:\.\d+)?)$/, '海洋精华: $1'],
    [/^Prepared Fish: ([\d,]+(?:\.\d+)?)$/, '加工鱼: $1'],
    [/^Raw Fish: ([\d,]+(?:\.\d+)?)$/, '生鱼: $1'],

    [/^Increases all damage you deal by ([\d.]+)% while in a dungeon if your role is Battler\.$/, '当角色为战斗者时，在地下城中造成的所有伤害增加$1%。'],
    [/^Increases all healing you do by ([\d.]+)% while in a dungeon if your role is Miner\.$/, '当角色为矿工时，在地下城中进行的所有治疗增加$1%。'],
    [/^Increases the amount of your personal Health contributed to the party's maximum HP by ([\d.]+)% while in a dungeon \(all roles\)\.$/, '在地下城中，将您个人生命值贡献给队伍最大生命值的量增加$1%（所有角色）。'],
    [/^Increases your thorns damage by ([\d.]+)% while in a dungeon if your role is Woodcutter\.$/, '当角色为伐木工时，在地下城中的荆棘伤害增加$1%。'],
    [/^Next enhance cost: ([\d,]+\.\d+) Treant Resin$/, '下次强化成本：$1 树人树脂'],
    [/Refines ([\d,]+\.?\d*) Iron Ore into ([\d,]+\.?\d*) Iron Bars per tick\./, '每tick将$1铁矿石精炼成$2铁锭。'],
    [/Refines ([\d,]+\.?\d*) Logs into ([\d,]+\.?\d*) Planks per tick\./, '每tick将$1木头精炼成$2木板。'],
    [/Refines ([\d,]+\.?\d*) Gold into ([\d,]+\.?\d*) Gold Bars per tick\./, '每tick将$1金币精炼成$2金锭。'],
    [/Refines ([\d,]+\.?\d*) Raw Fish into ([\d,]+\.?\d*) Prepared Fish per tick\./, '每tick将$1生鱼精炼成$2加工鱼。'],
    [/^Craft (.+) \(Level (\d+)\)$/, '制作$1（等级 $2）'],
    [/^Craft Sigil of (.+) \(Level (\d+)\)$/, '制作$1印记（等级 $2）'],
    [/Grants \+(\d+) Cooking XP per tick\./, '每tick获得+$1烹饪经验值。'],
    [/Increases max offline time to (\d+) hours\./, '将最大离线时间增加到$1小时。'],

    [/^\[Fight\] You dealt ([\d,]+\.\d+) battle damage\. Boss HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 你造成了$1战斗伤害。Boss生命值：$2/$3（$4%）。'],
    [/^\[Fight\] You dealt ([\d,]+\.\d+) chop damage\. Treant HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 你造成了$1砍击伤害。树人生命值：$2/$3（$4%）。'],
    [/^\[Event\] The boss endured the assault\. You contributed (\d+) ticks and dealt ([\d,]+\.\d+) battle damage, earning ([\d,]+\.\d+) Boss Tokens from the ([\d.]+)% consolation pool\.$/, '[事件] Boss承受住了攻击。您贡献了$1 ticks并造成了$2战斗伤害，从$4%的安慰奖池中获得了$3 Boss代币。'],
    [/^\[Event\] The Ancient Treant withdrew with bark intact\. You contributed (\d+) ticks and dealt ([\d,]+\.\d+) chop damage, earning ([\d,]+\.\d+) Treant Resin from the ([\d.]+)% consolation pool\.$/, '[事件] 远古树人带着树皮完好无损地离开了。你贡献了$1 ticks并造成了$2砍击伤害，从$4%的安慰奖池中获得$3树人树脂。'],
    [/^\[Dungeon\] The Harbormaster's ledger records a new party formed by (.+), seeking to conquer a Level (\d+) dungeon\.$/, '[地下城] 港务长的日志记录了一个由$1组成的新队伍，旨在征服一个等级$2的地下城。'],
    [/^Health: ([\d,]+) \/ ([\d,]+)$/, "生命值：$1 / $2"],
    [/^\[Fight\] You dealt ([\d,]+\.\d+) battle damage\. Boss HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 您造成了$1战斗伤害。Boss生命值：$2/$3（$4%）。'],
    [/^\[Fight\] You dealt ([\d,]+\.\d+) fishing damage\. Leviathan HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 您造成了$1钓鱼伤害。利维坦生命值：$2/$3（$4%）。'],
    [/^\[Dungeon\] The Harbormaster's ledger records a new party formed by (.+), seeking to conquer a Level (\d+) dungeon\.$/, '[地下城] 港务长的日志记录了一个由$1组成的新队伍，旨在征服一个等级$2的地下城。'],

    [/^\[Event\] The auction has ended! (.+) won the (\[.+\]) (.+) \(Lvl (\d+)\) for ([\d,]+) gold!$/, '[事件] 拍卖结束！$1以$5金币赢得了$2$3（等级$4）！'],
    [/^\[Event\] The Leviathan endured and returned to the depths\. A ([\d.]+)% consolation pool was distributed to ([\d,]+) participants\.$/, '[事件] 利维坦承受住了攻击并返回了深渊。$1%的安慰奖池分配给了$2名参与者。'],
    [/^\[Event\] The Leviathan returned to the depths\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) fishing damage, earning ([\d,]+\.\d+) Leviathan Scales from the ([\d.]+)% consolation pool\.$/, '[事件] 利维坦返回了深渊。您贡献了$1 ticks并造成了$2钓鱼伤害，从$4%的安慰奖池中获得了$3利维坦鳞片。'],
    [/^\[Fight\] You dealt ([\d,]+\.\d+) battle damage\. Boss HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 您造成了$1战斗伤害。Boss生命值：$2/$3（$4%）。'],
    [/^\[Fight\] You dealt ([\d,]+\.\d+) fishing damage\. Leviathan HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 您造成了$1钓鱼伤害。利维坦生命值：$2/$3（$4%）。'],
    [/^\[Fight\] You dealt ([\d,]+\.\d+) chop damage\. Treant HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '[战斗] 您造成了$1砍击伤害。树人生命值：$2/$3（$4%）。'],
    [/^\[Dungeon\] The Harbormaster's ledger records a new party formed by (.+), seeking to conquer a Level (\d+) dungeon\.$/, '[地下城] 港务长的日志记录了一个由$1组成的新队伍，旨在征服一个等级$2的地下城。'],
    [/^\[Event\] The boss endured and fled\. A ([\d.]+)% consolation pool was distributed to the ([\d,]+) participants\.$/, '[事件] Boss忍气吞声逃走了。$1%的安慰奖池分配给了$2名参与者。'],
    [/^\[Event\] The Ancient Treant retreated\. A ([\d.]+)% consolation pool was distributed to the ([\d,]+) participants\.$/, '[事件] 上古树人撤退了。$1%的安慰奖池分配给了$2名参与者。'],
    [/^\[Event\] The Ancient Treant withdrew with bark intact\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) chop damage, earning ([\d,]+\.\d+) Treant Resin from the ([\d.]+)% consolation pool\.$/, '[事件] 远古树人带着树皮完好无损地离开了。你贡献了$1 ticks并造成了$2砍击伤害，从$4%的安慰奖池中获得$3树人树脂。'],
    [/^\[Event\] The Runic Golem endured\. A ([\d.]+)% consolation pool was distributed to the ([\d,]+) participants\.$/, '[事件] 符文魔像承受住了攻击。$1%的安慰奖池分配给了$2名参与者。'],
    [/^\[Event\] The Leviathan endured and returned to the depths\. A ([\d.]+)% consolation pool was distributed to ([\d,]+) participants\.$/, '[事件] 利维坦承受住了攻击并返回了深渊。$1%的安慰奖池分配给了$2名参与者。'],
    [/^\[Event\] The Thief struck! A (\[.+\]) (.+) was stolen from (.+)'s inventory!$/, '[事件] 小偷袭击！一个$1$2从$3的库存中被偷走了！'],
    [/^You scavenged ([\d.]+) Iron Ore, ([\d.]+) Gold, and ([\d.]+) Raw Fish\.$/, '您拾荒获得了$1铁矿石、$2金币和$3生鱼。'],
    [/^\[Event\] The auction has ended! (.+) won the (\[.+\]) (.+) \(Lvl (\d+)\) for ([\d,]+) gold!$/, '[事件] 拍卖结束！$1以$5金币赢得了$2$3（等级$4）！'],
    [/^\[Dungeon\] The Harbormaster's ledger records a new party formed by (.+), seeking to conquer a Level (\d+) dungeon\.$/, '[地下城] 港务长的日志记录了一个由$1组成的新队伍，旨在征服一个等级$2的地下城。'],
    [/^([\d,]+\.\d+) Treant Resin$/, '$1 树人树脂'],
    [/^\[Event\] The Leviathan endured and returned to the depths\. A ([\d.]+)% consolation pool was distributed to ([\d,]+) participants\.$/, '[事件] 利维坦承受住了攻击并返回了深渊。$1%的安慰奖池分配给了$2名参与者。'],
    [/^You found ([\d,]+) (.+) while battling!$/, '你在战斗中发现了$1个$2！'],

    [/You found (\d+) Starfall Ore while mining!/, '你在采矿时发现了$1个星落矿石！'],
    [/You found (\d+) Glimmerwood Sap while woodcutting!/, '你在伐木时发现了$1个微光树液！'],
    [/You found (\d+) Crystallized Anima while battling!/, '你在战斗时发现了$1个生命结晶！'],
    [/You found (\d+) Oceanic Essence while fishing!/, '你在钓鱼时发现了$1个海洋精华！'],
    [/^Pickaxe \(Lvl (\d+)\)$/, '镐子（等级 $1）'],
    [/^Axe \(Lvl (\d+)\)$/, '斧子（等级 $1）'],
    [/^Sword \(Lvl (\d+)\)$/, '剑（等级 $1）'],
    [/^Fishing Rod \(Lvl (\d+)\)$/, '鱼竿（等级 $1）'],

    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Fight\] You dealt ([\d,]+\.\d+) chop damage\. Treant HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '$1 [战斗] 您造成了$2砍击伤害。树人生命值：$3/$4（$5%）。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Fight\] You dealt ([\d,]+\.\d+) pick damage\. Golem HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '$1 [战斗] 您造成了$2镐击伤害。魔像生命值：$3/$4（$5%）。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Fight\] You dealt ([\d,]+\.\d+) fishing damage\. Leviathan HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '$1 [战斗] 您造成了$2钓鱼伤害。利维坦生命值：$3/$4（$5%）。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Ancient Treant retreated\. A ([\d.]+)% consolation pool was distributed to the ([\d,]+) participants\.$/, '$1 [事件] 上古树人撤退了。$2%的安慰奖池分配给了$3名参与者。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Ancient Treant withdrew with bark intact\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) chop damage, earning ([\d,]+\.\d+) Treant Resin from the ([\d.]+)% consolation pool\.$/, '$1 [事件] 远古树人带着树皮完好无损地离开了。你贡献了$2 ticks并造成了$3砍击伤害，从$5%的安慰奖池中获得$4树人树脂。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Runic Golem endured\. A ([\d.]+)% consolation pool was distributed to the ([\d,]+) participants\.$/, '$1 [事件] 符文魔像承受住了攻击。$2%的安慰奖池分配给了$3名参与者。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Runic Golem withstood the assault\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) pick damage, earning ([\d,]+\.\d+) Rune Shards from the ([\d.]+)% consolation pool\.$/, '$1 [事件] 符文魔像承受住了攻击。您贡献了$2 ticks并造成了$3镐击伤害，从$5%的安慰奖池中获得了$4符文碎片。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Leviathan endured and returned to the depths\. A ([\d.]+)% consolation pool was distributed to ([\d,]+) participants\.$/, '$1 [事件] 利维坦承受住了攻击并返回了深渊。$2%的安慰奖池分配给了$3名参与者。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Leviathan returned to the depths\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) fishing damage, earning ([\d,]+\.\d+) Leviathan Scales from the ([\d.]+)% consolation pool\.$/, '$1 [事件] 利维坦返回了深渊。您贡献了$2 ticks并造成了$3钓鱼伤害，从$5%的安慰奖池中获得了$4利维坦鳞片。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Fight\] You dealt ([\d,]+\.\d+) battle damage\. Boss HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '$1 [战斗] 您造成了$2战斗伤害。Boss生命值：$3/$4（$5%）。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Fight\] You dealt ([\d,]+\.\d+) chop damage\. Treant HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '$1 [战斗] 您造成了$2砍击伤害。树人生命值：$3/$4（$5%）。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Fight\] You dealt ([\d,]+\.\d+) pick damage\. Golem HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '$1 [战斗] 您造成了$2镐击伤害。魔像生命值：$3/$4（$5%）。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Fight\] You dealt ([\d,]+\.\d+) fishing damage\. Leviathan HP: ([\d,]+)\/([\d,]+) \((\d+)%\)\.$/, '$1 [战斗] 您造成了$2钓鱼伤害。利维坦生命值：$3/$4（$5%）。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The boss endured and fled\. A ([\d.]+)% consolation pool was distributed to the ([\d,]+) participants\.$/, '$1 [事件] Boss忍气吞声逃走了。$2%的安慰奖池分配给了$3名参与者。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The boss endured the assault\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) battle damage, earning ([\d,]+\.\d+) Boss Tokens from the ([\d.]+)% consolation pool\.$/, '$1 [事件] Boss承受住了攻击。您贡献了$2 ticks并造成了$3战斗伤害，从$5%的安慰奖池中获得了$4 Boss代币。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Ancient Treant retreated\. A ([\d.]+)% consolation pool was distributed to the ([\d,]+) participants\.$/, '$1 [事件] 上古树人撤退了。$2%的安慰奖池分配给了$3名参与者。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Ancient Treant withdrew with bark intact\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) chop damage, earning ([\d,]+\.\d+) Treant Resin from the ([\d.]+)% consolation pool\.$/, '$1 [事件] 远古树人带着树皮完好无损地离开了。你贡献了$2 ticks并造成了$3砍击伤害，从$5%的安慰奖池中获得$4树人树脂。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Runic Golem endured\. A ([\d.]+)% consolation pool was distributed to the ([\d,]+) participants\.$/, '$1 [事件] 符文魔像承受住了攻击。$2%的安慰奖池分配给了$3名参与者。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Runic Golem withstood the assault\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) pick damage, earning ([\d,]+\.\d+) Rune Shards from the ([\d.]+)% consolation pool\.$/, '$1 [事件] 符文魔像承受住了攻击。您贡献了$2 ticks并造成了$3镐击伤害，从$5%的安慰奖池中获得了$4符文碎片。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Leviathan endured and returned to the depths\. A ([\d.]+)% consolation pool was distributed to ([\d,]+) participants\.$/, '$1 [事件] 利维坦承受住了攻击并返回了深渊。$2%的安慰奖池分配给了$3名参与者。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Leviathan returned to the depths\. You contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) fishing damage, earning ([\d,]+\.\d+) Leviathan Scales from the ([\d.]+)% consolation pool\.$/, '$1 [事件] 利维坦返回了深渊。您贡献了$2 ticks并造成了$3钓鱼伤害，从$5%的安慰奖池中获得了$4利维坦鳞片。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] Attempting to join the Leviathan fight\.\.\.$/, '$1 [事件] 正在尝试加入利维坦战斗...'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Leviathan from the Depths has been sighted! Join the fight to earn rewards!$/, '$1 [事件] 深渊利维坦已被发现！加入战斗获取奖励！'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] A thief is lurking in the shadows\.\.\.$/, '$1 [事件] 一个小偷正在阴影中潜伏...'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Thief searched for valuable targets but couldn't find any, so he went home for the night\.$/, '$1 [事件] 小偷搜寻了有价值的目标但一无所获，于是他回家过夜了。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Great Smeltdown has ended\. The forges cool and fall silent\.$/, '$1 [事件] 大熔炼已经结束。熔炉冷却并陷入沉寂。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] A powerful boss has appeared! Join the fight to earn rewards!$/, '$1 [事件] 一个强大的Boss出现了！加入战斗获取奖励！'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The trade ship has sailed away\.$/, '$1 [事件] 贸易船已驶离。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] An Ancient Treant emerges! Join to harvest Treant Resin!$/, '$1 [事件] 一个上古树人出现了！加入以收获树人树脂！'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] Attempting to join Ancient Treant\.\.\.$/, '$1 [事件] 正在尝试加入上古树人...'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] A Runic Golem awakens! Join to shatter it for Rune Shards!$/, '$1 [事件] 一个符文魔像苏醒了！加入以击碎它获取符文碎片！'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Dungeon\] The Harbormaster's ledger records a new party formed by (.+), seeking to conquer a Level (\d+) dungeon\.$/, '$1 [地下城] 港务长的日志记录了一个由$2组成的新队伍，旨在征服一个等级$3的地下城。'],
    [/^Allows you to hire a mercenary for up to (\d+) hours to automatically join combat events or start dungeon runs\. When joining combat events, the mercenary takes an ([\d.]+)% cut of all rewards as payment\.$/, '允许您雇佣一名佣兵最多$1小时，自动加入战斗事件或开始地下城运行。加入战斗事件时，佣兵将收取所有奖励的$2%作为报酬。'],
    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Town Watch arrested the Thief! No items were stolen\.$/, '$1 [事件] 城镇守卫逮捕了小偷！没有物品被偷走。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Merchant has left\. The item was not sold\.$/, '$1 [事件] 商人已离开。物品未售出。'],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] A Purchasing Agent has arrived at the market\.\.\.$/, '$1 [事件] 采购代理已到达市场...'],
    [/Rewards are split based on damage and time contributed\. The base pool starts at (\d+) and increases by (\d+)% on each success\./, '奖励根据造成的伤害和贡献的时间分配。基础池从$1开始，每次成功增加$2%。'],

    // 雇佣兵加入 Boss 战
    [/\[Mercenary\] Boss contract: your blade has joined the Boss Fight\./, '[雇佣兵] Boss合同：你的刀刃已加入Boss战。'],
    // 雇佣兵加入远古树人战斗
    [/\[Mercenary\] Boss contract: your blade has joined the Ancient Treant\./, '[雇佣兵] Boss合同：你的刀刃已加入远古树人战斗。'],
    // 雇佣兵加入符文魔像战斗
    [/\[Mercenary\] Boss contract: your blade has joined the Runic Golem\./, '[雇佣兵] Boss合同：你的刀刃已加入符文魔像战斗。'],
    // 雇佣兵加入利维坦战斗
    [/\[Mercenary\] Boss contract: your blade has joined the The Leviathan from the Depths\./, '[雇佣兵] Boss合同：你的刀刃已加入深渊利维坦战斗。'],
    // Boss 战贡献消息
    [/\[Event\] The boss endured\. Your hired blade contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) battle damage, earning you ([\d,]+\.\d+) Boss Tokens from the ([\d%]+) consolation pool \(after their ([\d%]+) cut\)\./, '[事件] Boss承受住了攻击。你雇佣的刀刃贡献了$1 ticks并造成了$2战斗伤害，从$4的安慰奖池中为你赢得了$3 Boss代币（扣除他们$5的抽成后）。'],
    // 远古树人贡献消息
    [/\[Event\] The Ancient Treant withdrew\. Your hired blade contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) chop damage, earning you ([\d,]+\.\d+) Treant Resin from the ([\d%]+) consolation pool \(after their ([\d%]+) cut\)\./, '[事件] 远古树人撤退了。你雇佣的刀刃贡献了$1 ticks并造成了$2砍击伤害，从$4的安慰奖池中为你赢得了$3树人树脂（扣除他们$5的抽成后）。'],
    // 符文魔像贡献消息
    [/\[Event\] The Runic Golem withstood the assault\. Your hired blade contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) pick damage, earning you ([\d,]+\.\d+) Rune Shards from the ([\d%]+) consolation pool \(after their ([\d%]+) cut\)\./, '[事件] 符文魔像承受住了攻击。你雇佣的刀刃贡献了$1 ticks并造成了$2镐击伤害，从$4的安慰奖池中为你赢得了$3符文碎片（扣除他们$5的抽成后）。'],
    // 利维坦贡献消息
    [/\[Event\] The Leviathan returned to the depths\. Your hired blade contributed ([\d,]+) ticks and dealt ([\d,]+\.\d+) fishing damage, earning you ([\d,]+\.\d+) Leviathan Scales from the ([\d%]+) consolation pool \(after their ([\d%]+) cut\)\./, '[事件] 利维坦返回了深渊。你雇佣的刀刃贡献了$1 ticks并造成了$2钓鱼伤害，从$4的安慰奖池中为你赢得了$3利维坦鳞片（扣除他们$5的抽成后）。'],
    //社区地下城求助
    [/\[Dungeon Help\] (.+?) is requesting aid for party #(\d+) in a Level (\d+) dungeon!/, '[地下城求助] $1 正在为队伍 #$2 请求援助，该队伍正在挑战等级 $3 的地下城！'],

    //地下城参战信息
    // 匹配玩家攻击消息
    // 匹配荆棘伤害消息
    [/^(\[.*?\]) The monster takes ([\d,]+\.\d+) thorns damage from (.+)\.$/, '$1 怪物受到 $2 荆棘伤害来自 $3。'],
    // 匹配地下城冷却时间
    [/^Dungeon cooldown: ([\d:]+)$/, '地下城冷却时间：$1'],
    // 匹配地下城进度
    [/^Dungeon Progress: Room (\d+) \/ (\d+)$/, '地下城进度：房间 $1 / $2'],
    // 匹配地下城完成消息
    [/^(\[.*?\]) \[Dungeon\] Your party has cleared Dungeon Level (\d+)! Returning you to your previous activity\.$/, '$1 [地下城] 你的队伍已通关地下城等级 $2！将你返回到之前的活动。'],
    // 匹配地下城奖励消息
    [/^(\[.*?\]) \[Dungeon\] You earned ([\d,]+\.\d+) Artisan's Marks for completing the dungeon!$/, '$1 [地下城] 你因完成地下城获得了 $2 工匠印记！'],
    // 修正玩家攻击消息的翻译：
    [/^(\[.*?\]) (.+?) attacks, dealing ([\d,]+\.\d+) damage\.$/, '$1 $2发动攻击，造成$3点伤害。'],
    // 匹配怪物攻击消息
    [/^(\[.*?\]) (.+?) attacks, dealing ([\d,]+\.\d+) damage to the party\.$/, '$1 $2 攻击，造成 $3 伤害对队伍。'],
    // 匹配怪物被击败消息
    [/^(\[.*?\]) (.+?) has been defeated!$/, '$1 $2 已被击败！'],
    // 匹配队伍前进消息
    [/^(\[.*?\]) The party advances to Room (\d+)\. (.+?) appears!$/, '$1 队伍前进到房间 $2。$3 出现了！'],
    // 匹配地下城奖励消息
    [/^(\[.*?\]) \[Dungeon\] You earned ([\d,]+\.\d+) Artisan's Marks for clearing a room\.$/, '$1 [地下城] 你获得了 $2 工匠印记用于清理一个房间。'],
    [/^(\[.*?\]) The party is exhausted and must regroup\. The monster regains its strength\.$/, '$1 队伍已精疲力尽，必须重新集结。怪物恢复了力量。'],
    [/^(\[.*?\]) \[Dungeon\] Your request for aid has been broadcast to all artisans\.$/, '$1 [地下城] 你的求助请求已广播给所有工匠。'],
    // 匹配请求已发送状态
    [/^Request Sent!$/, '请求已发送！'],
    // 匹配队伍生命值
    [/^Party Health$/, '队伍生命值'],

    //转换相关
    // 匹配工匠印记数量
    [/^([\d,]+\.?\d*) Artisan's Marks$/, '$1 工匠印记'],
    // 匹配资源组合显示
    [/^([\d,]+\.\d+) Starfall Ore, ([\d,]+\.\d+) Glimmerwood Sap, ([\d,]+\.\d+) Crystallized Anima$/, '$1 星落矿石, $2 微光树液, $3 生命结晶'],
    // 匹配回收价值
    [/^Scrap Value$/, '回收价值'],

    [/Boss event contract active for: ([\d:]+)/, 'Boss事件合同剩余时间：$1'],
    [/Dungeon event contract active for: ([\d:]+)/, '地下城事件合同剩余时间：$1'],
    [/Upgraded to Level (\d+) Crafting Table! You gained ([\d,]+) Crafting XP\./, '升级到$1级合成台！你获得了$2制作经验值。'],
    [/Your Crafting skill has increased to level (\d+)!/, '你的制作技能已提升到$1级！'],

    // 匹配地下城求助消息
    [/\[Dungeon Help\] (.*?) is requesting aid for party #(\d+) in a Level (\d+) dungeon!/, function (match, player, partyId, level) {
        return '[地下城求助] ' + player + ' 正在为队伍 #' + partyId + ' 请求援助，该队伍正在挑战等级 ' + level + ' 的地下城！';
    }
    ],

    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Thief struck! A (\[.+\]) (.+) \(Lvl (\d+)\) was stolen from (.+)'s inventory!$/, '$1 [事件] 小偷袭击！一件$2$3（等级$4）从$5的库存中被偷走了！'],
    // 在 cnRegReplace 映射中添加
    [/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] You have kicked (.+) from the Conclave\.$/, function (match, timestamp, playerName) {
        return timestamp + ' 你已将 ' + playerName + ' 从公会中踢出。';
    }
    ],
    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Purchasing Agent purchased (Iron Bars|Gold Bars|Planks|Prepared Fish) from ([\d,]+) sellers?, spending a total of ([\d,]+\.\d+) gold\.$/, function (match, timestamp, item, sellers, gold) {
        const itemMap = {
            "Iron Bars": "铁锭",
            "Gold Bars": "金锭",
            "Planks": "木板",
            "Prepared Fish": "加工鱼"
        };
        return timestamp + ' [事件] 采购代理从' + sellers + '个卖家处购买了' + (itemMap[item] || item) + '，总共花费了' + gold + '金币。';
    }
    ],
    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] A trade ship has arrived at the port! The captain is selling (Iron Bars|Gold Bars|Planks|Prepared Fish|Rune Shards) on the market\.$/, function (match, timestamp, item) {
        const itemMap = {
            "Iron Bars": "铁锭",
            "Gold Bars": "金锭",
            "Planks": "木板",
            "Prepared Fish": "加工鱼",
            "Rune Shards": "符文碎片"
        };
        return timestamp + ' [事件] 一艘贸易船已抵达港口！船长正在市场上出售' + (itemMap[item] || item) + '。';
    }
    ],
    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Dungeon Help\] (.+) is requesting aid for party #(\d+) in a Level (\d+) dungeon!$/, '$1 [地下城求助] $2正在为队伍#$3请求援助，该队伍正在挑战等级$4的地下城！'],
    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] Attempting to join Boss Fight\.\.\.$/, '$1 [事件] 正在尝试加入Boss战...'],
    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] Attempting to join (Boss Fight|Runic Golem|Ancient Treant|Leviathan)\.\.\.$/, function (match, timestamp, bossType) {
        const bossMap = {
            "Boss Fight": "Boss战",
            "Runic Golem": "符文魔像",
            "Ancient Treant": "上古树人",
            "Leviathan": "利维坦"
        };
        return timestamp + ' [事件] 正在尝试加入' + (bossMap[bossType] || bossType) + '...';
    }
    ],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Merchant has arrived! A (\[[^\]]+\]) ([^\(]+) \(Lvl (\d+)\) is up for auction!$/, function (match, timestamp, quality, itemType, level) {
        const qualityMap = {
            "[Poor]": "[劣质]",
            "[Normal]": "[普通]",
            "[Common]": "[普通]",
            "[Good]": "[良好]",
            "[Great]": "[优秀]",
            "[Fine]": "[精致]",
            "[Masterwork]": "[大师]",
            "[Legendary]": "[传奇]",
            "[Uncommon]": "[罕见]",
            "[Rare]": "[稀有]",
            "[Epic]": "[史诗]",
            "[Unique]": "[独特]"
        };
        const itemMap = {
            "Sword": "剑",
            "Axe": "斧",
            "Pickaxe": "镐",
            "Fishing Rod": "鱼竿",
            "Helm": "头盔",
            "Armor": "护甲",
            "Shield": "盾牌"
        };

        const translatedQuality = qualityMap[quality] || quality;
        const translatedItem = itemMap[itemType.trim()] || itemType;

        return timestamp + ' [事件] 商人已到达！一件' + translatedQuality + translatedItem + '（等级' + level + '）正在拍卖！';
    }
    ],
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Thief struck! A (\[[^\]]+\]) ([^\(]+) \(Lvl (\d+)\) was stolen from (.+)'s inventory!$/, function (match, timestamp, quality, itemType, level, player) {
        const qualityMap = {
            "[Poor]": "[劣质]",
            "[Normal]": "[普通]",
            "[Common]": "[普通]",
            "[Good]": "[良好]",
            "[Great]": "[优秀]",
            "[Fine]": "[精致]",
            "[Masterwork]": "[大师]",
            "[Legendary]": "[传奇]",
            "[Uncommon]": "[罕见]",
            "[Rare]": "[稀有]",
            "[Epic]": "[史诗]",
            "[Unique]": "[独特]",
            "[Burnt]": "[烧焦]"
        };
        const itemMap = {
            "Sword": "剑",
            "Axe": "斧",
            "Pickaxe": "镐",
            "Fishing Rod": "鱼竿",
            "Helm": "头盔",
            "Armor": "护甲",
            "Shield": "盾牌",
            "Grilled Fish": "烤鱼"
        };

        const translatedQuality = qualityMap[quality] || quality;
        const translatedItem = itemMap[itemType.trim()] || itemType;

        return timestamp + ' [事件] 小偷袭击！一件' + translatedQuality + translatedItem + '（等级' + level + '）从' + player + '的库存中被偷走了！';
    }
    ],
    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The auction has ended! (.+) won the (\[[^\]]+\]) ([^\(]+) \(Lvl (\d+)\) for ([\d,]+) gold!$/, function (match, timestamp, player, quality, itemType, level, gold) {
        const qualityMap = {
            "[Poor]": "[劣质]",
            "[Rare]": "[稀有]",
            "[Epic]": "[史诗]",
            "[Common]": "[普通]",
            "[Uncommon]": "[罕见]",
            "[Unique]": "[独特]",
            "[Good]": "[良好]",
            "[Great]": "[优秀]",
            "[Fine]": "[精致]",
            "[Masterwork]": "[大师]",
            "[Legendary]": "[传奇]"
        };
        const itemMap = {
            "Sword": "剑",
            "Axe": "斧",
            "Pickaxe": "镐",
            "Fishing Rod": "鱼竿",
            "Helm": "头盔",
            "Armor": "护甲",
            "Shield": "盾牌"
        };

        const translatedQuality = qualityMap[quality] || quality;
        const translatedItem = itemMap[itemType.trim()] || itemType;

        return timestamp + ' [事件] 拍卖结束！' + player + '以' + gold + '金币赢得了' + translatedQuality + translatedItem + '（等级' + level + '）！';
    }
    ],
    // 正则表达式翻译
    [/^(\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\]) \[Event\] The Great Smeltdown has begun! The master smiths are calling for (.+) to fuel the pyre!$/, function (match, timestamp, resource) {
        const resourceMap = {
            "Iron Ore": "铁矿石",
            "Gold": "金币",
            "Logs": "木头",
            "Planks": "木板",
            "Rune Shards": "符文碎片"
        };

        const translatedResource = resourceMap[resource] || resource;

        return timestamp + ' [事件] 大熔炼已经开始！大师铁匠们正在召唤' + translatedResource + '来为熔炉提供燃料！';
    }
    ],
    // 在 cnRegReplace 映射中添加
    [/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] \[Event\] The Thief struck! A (\[[^\]]+\]) ([^\(]+) was stolen from ([^']+)'s inventory!$/, function (match, timestamp, quality, itemType, player) {
        const qualityMap = {
            "[Burnt]": "[烧焦]",
            "[Normal]": "[普通]",
            "[Fine]": "[优良]",
            "[Exquisite]": "[精美]",
            "[Poor]": "[劣质]",
            "[Common]": "[普通]",
            "[Uncommon]": "[罕见]",
            "[Rare]": "[稀有]",
            "[Epic]": "[史诗]",
            "[Unique]": "[独特]"
        };
        const itemMap = {
            "Grilled Fish": "烤鱼",
            "Fish Stew": "鱼汤",
            "Eel Broth": "鳗鱼汤",
            "Sword": "剑",
            "Axe": "斧",
            "Pickaxe": "镐",
            "Fishing Rod": "鱼竿",
            "Helm": "头盔"
        };

        const translatedQuality = qualityMap[quality] || quality;
        const translatedItem = itemMap[itemType.trim()] || itemType;

        return timestamp + ' [事件] 小偷袭击！一个' + translatedQuality + translatedItem + '从' + player + '的库存中被偷走了！';
    }
    ],

    // 在 cnRegReplace 映射中添加
    [/^\(Votes: (\d+)\)$/, '（投票：$1）'],
    [/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] \[Community\] (.+) reached Level (\d+)! Votes have been cleared for this building type\.$/, function (match, timestamp, buildingName, level) {
        const buildingMap = {
            "Guild of Alchemists": "炼金师公会",
            "Masterwork Atelier": "杰作工作室",
            "Prospector's Lodge": "勘探者小屋",
            "The Grand Library": "大图书馆",
            "Quartermaster's Workshop": "军需工坊",
            "Storage Barn": "仓库",
            "Battler's Bar": "战士酒吧",
            "Town Watch": "城镇守卫",
            "Fisherman's Wharf": "渔人码头",
            "Coral Sanctuary": "珊瑚保护区",
            "The Counting House": "会计所",
            "Artisan's Conclave": "工匠公会"
        };
        const translatedBuilding = buildingMap[buildingName] || buildingName;
        return timestamp + ' [社区] ' + translatedBuilding + ' 达到了等级 ' + level + '！此建筑类型的投票已清除。';
    }
    ],
    // 在 cnRegReplace 映射中添加
    [/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] Error: You do not have enough (.+)\.$/, function (match, timestamp, resource) {
        const resourceMap = {
            "Oceanic Essence": "海洋精华",
            "Glimmerwood Sap": "微光树液",
            "Starfall Ore": "星落矿石",
            "Crystallized Anima": "生命结晶",
            "Treant Resin": "树人树脂",
            "Rune Shards": "符文碎片",
            "Leviathan Scales": "利维坦鳞片",
            "Iron Ore": "铁矿石",
            "Logs": "木头",
            "Gold": "金币",
            "Iron Bars": "铁锭",
            "Gold Bars": "金锭",
            "Planks": "木板"
        };
        const translatedResource = resourceMap[resource] || resource;
        return timestamp + ' 错误：你的' + translatedResource + '不足。';
    }
    ],

    [/^\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] \[Event\] A trade ship has arrived at the port! The captain is selling (.+) on the market\.$/, function (match, timestamp, resource) {
        const resourceMap = {
            "Logs": "木头",
            "Iron Ore": "铁矿石",
            "Gold": "金币",
            "Iron Bars": "铁锭",
            "Gold Bars": "金锭",
            "Planks": "木板",
            "Rune Shards": "符文碎片",
            "Prepared Fish": "加工鱼"
        };
        const translatedResource = resourceMap[resource] || resource;
        return timestamp + ' [事件] 一艘贸易船已抵达港口！船长正在市场上出售' + translatedResource + '。';
    }
    ],
    [/^(\d+) hours? ago$/, '$1小时前'],
    [/^(\d+) minutes? ago$/, '$1分钟前'],
    [/^(\d+) days? ago$/, '$1天前'],
    [/^\+(\d+)% Damage$/, '+$1% 伤害'],

]);

var CNITEM_DEBUG = 0;

function cnItemByTag(text, itemgroup, node, textori) {
    for (let i in itemgroup) {
        if (i[0] == '.') {
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
        } else if (i[0] == '#') {
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
        } else if (i[0] == '$') {
            if (document.querySelector(i.substr(1)) != null) {
                return itemgroup[i];
            }
        } else if (i[0] == '*') {
            if (textori.includes(i.substr(1))) {
                return itemgroup[i];
            }
        }
    }
    return null;
}

function cnItem(text, node) {
    if (typeof(text) != "string")
        return text;

    let textori = text;

    // 处理前缀
    let text_prefix = "";
    for (let prefix in cnPrefix) {
        if (text.substr(0, prefix.length) === prefix) {
            text_prefix += cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }

    // 处理后缀
    let text_postfix = "";
    for (let postfix in cnPostfix) {
        if (text.substr(-postfix.length) === postfix) {
            text_postfix = cnPostfix[postfix] + text_postfix;
            text = text.substr(0, text.length - postfix.length);
        }
    }

    // 处理正则后缀
    let text_reg_exclude_postfix = "";
    for (let reg of cnExcludePostfix) {
        let result = text.match(reg);
        if (result) {
            text_reg_exclude_postfix = result[0] + text_reg_exclude_postfix;
            text = text.substr(0, text.length - result[0].length);
        }
    }

    if (!cnItems._OTHER_)
        cnItems._OTHER_ = [];

    // 检查是否排除
    for (let reg of cnExcludeWhole) {
        if (reg.test(text)) {
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 尝试正则替换
    for (let [key, value] of cnRegReplace.entries()) {
        if (key.test(text)) {
            return text_prefix + text.replace(key, value) + text_reg_exclude_postfix + text_postfix;
        }
    }

    // 遍历尝试匹配
    for (let i in cnItems) {
        if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])) {
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
        } else if (typeof(cnItems[i]) == "object" && text == i) {
            let result = cnItemByTag(i, cnItems[i], node, textori);
            if (result != null) {
                return text_prefix + result + text_reg_exclude_postfix + text_postfix;
            }
        }
    }

    // 调整收录的词锭
    let save_cfg = 1;
    let save_text = save_cfg ? text : textori;

    // 遍历生词表是否收录
    for (let i = 0; i < cnItems._OTHER_.length; i++) {
        if (save_text == cnItems._OTHER_[i])
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
    }

    if (cnItems._OTHER_.length < 2000) {
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort((a, b) => a.localeCompare(b));
    }

    CNITEM_DEBUG && console.log('有需要汉化的英文：', text);

    return text_prefix + text + text_reg_exclude_postfix + text_postfix;
};

transTaskMgr = {
    tasks: [],
    addTask: function (node, attr, text) {
        this.tasks.push({
            node,
            attr,
            text
        })
    },
    doTask: function () {
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
            } else if (subnode.nodeName !== "SCRIPT" && subnode.nodeName !== "STYLE" && subnode.nodeName !== "TEXTAREA") {
                if (!subnode.childNodes || subnode.childNodes.length == 0) {
                    let text = subnode.innerText;
                    let cnText = cnItem(text, subnode);
                    cnText !== text && transTaskMgr.addTask(subnode, 'innerText', cnText);
                } else {
                    TransSubTextNode(subnode);
                }
            }
        }
    }
}

!function () {
    console.log("加载汉化模块");

    let observer_config = {
        attributes: false,
        characterData: true,
        childList: true,
        subtree: true
    };

    let targetNode = document.body;

    // 汉化静态页面内容
    TransSubTextNode(targetNode);
    transTaskMgr.doTask();

    // 监听页面变化并汉化动态内容
    let observer = new MutationObserver(function (e) {
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT" || mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA")
                continue;
            if (mutation.target.nodeName === "#text") {
                mutation.target.textContent = cnItem(mutation.target.textContent, mutation.target);
            } else if (!mutation.target.childNodes || mutation.target.childNodes.length == 0) {
                mutation.target.innerText = cnItem(mutation.target.innerText, mutation.target);
            } else if (mutation.addedNodes.length > 0) {
                for (let node of mutation.addedNodes) {
                    if (node.nodeName === "#text") {
                        node.textContent = cnItem(node.textContent, node);
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
    });

    observer.observe(targetNode, observer_config);
    window.cnItems = cnItems;
}
();