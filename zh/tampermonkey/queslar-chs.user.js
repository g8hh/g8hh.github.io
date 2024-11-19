// ==UserScript==
// @name         queslar-chs
// @namespace    https://www.g8hh.com/
// @version      0.0.3
// @description  Queslar (https://queslar.com/) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *queslar.com*
// @grant        none
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/queslar-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/queslar-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2024/11/15 10:07
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
    "Move Area": "切换区域",
    "News": "新闻",
    "Move Monster": "切换怪物",
    "Pets": "宠物",
    "Player": "玩家",
    "Players Online:": "在线玩家:",
    "Privacy Policy": "隐私政策",
    "privacy policy": "隐私政策",
    "Profile": "个人资料",
    "Rankings": "排行榜",
    "Relics:": "遗物:",
    "Send": "发送",
    "Starting Quest": "开始任务",
    "System": "系统",
    "Tool bag": "工具包",
    "Tool Bag": "工具包",
    "Admin": "管理员",
    "Actions": "动作",
    "Bank": "银行",
    "Bucket": "水桶",
    "Channels": "频道",
    "Count": "数量",
    "Meat:": "肉:",
    "Iron:": "铁:",
    "Credits:": "信用点:",
    "Wood:": "木头:",
    "Stone:": "石头:",
    "Equipment:": "装备:",
    "Email Address": "邮箱地址",
    "Equipment Slots": "装备槽",
    "Game Rules": "游戏规则",
    "House": "房屋",
    "Introduction": "介绍",
    "Inventory": "库存",
    "Kingdom": "王国",
    "Knight": "骑士",
    "Level": "等级",
    "Logout": "登出",
    "Log": "日志",
    "Lord": "领主",
    "Misc": "杂项",
    "Menu": "菜单",
    "Moderator": "主持人",
    "Objective": "目标",
    "Patch Notes": "更新日志",
    "Referral (optional)": "推荐（可选）",
    "Report Bug": "报告Bug",
    "Safe": "安全",
    "Please enable JavaScript to continue using this application.": "请启用JavaScript以继续使用此应用程序。",
    "Status": "状态",
    "Suggest Feature": "功能建议",
    "Upcoming Patch": "即将更新内容",
    "Unlock equipment": "解锁装备",
    "Unlock equipment slots": "解锁装备槽",
    "Battling": "战斗",
    "Beginner": "新手",
    "Bastard": "混混",
    "Chat Rules": "聊天规则",
    "Commands": "命令",
    "Crafting": "制作",
    "Increases battle damage by 1 for each stat": "每个属性增加1点战斗伤害",
    "Increases battle dodge chance": "增加战斗闪避几率",
    "Increases battle health by 150 for each stat": "每个属性增加150战斗生命值",
    "Increases battle hit chance": "增加战斗命中率",
    "Sign up": "注册",
    "Staff tracker": "人员跟踪器",
    "Standard -": "标准 -",
    "Test Server": "测试服",
    "Upgrade your chest slot, providing a permanent boost to any equipped item on the slot": "升级你的胸部槽，为槽上的任何装备提供永久的提升",
    "Upgrade your feet slot, providing a permanent boost to any equipped item on the slot": "升级你的脚部槽，为槽上的任何装备提供永久的提升",
    "Upgrade your left hand slot, providing a permanent boost to any equipped item on the slot": "升级你的左手槽，为槽上的任何装备提供永久的提升",
    "Upgrade your right hand slot, providing a permanent boost to any equipped item on the slot": "升级你的右手槽，为槽上的任何装备提供永久的提升",
    "Upgrade your legs slot, providing a permanent boost to any equipped item on the slot": "升级你的腿部槽，为槽上的任何装备提供永久的提升",
    "Upgrade your hands slot, providing a permanent boost to any equipped item on the slot": "升级你的手部槽，为槽上的任何装备提供永久的提升",
    "Upgrade your head slot, providing a permanent boost to any equipped item on the slot": "升级你的头部槽，为槽上的任何装备提供永久的提升",
    "Username": "用户名",
    "Waiting for action...": "等待动作…",
    "Whispers": "低语者",
    "You can use CTRL + Up/Down arrows to move up and down in your channel list": "您可以使用CTRL +上/下箭头在频道列表中上下切换",
    "Crafting an action enchant and equipping in in your Accessories can greatly raise the amount of offline action you can perform": "制作一个动作附魔，并在你的配饰中装备，可以大大提高你可以执行的离线动作的数量",
    "Confirm Password": "确认密码",
    "Accessories": "配饰",
    "Advanced": "高级",
    "Armor": "护甲",
    "Boots": "靴子",
    "Currently Equipped": "当前已装备",
    "Commoner": "平民",
    "Dagger": "匕首",
    "Fight": "战斗",
    "None": "无",
    "Epic": "史诗",
    "Filter By": "过滤:",
    "Gems": "宝石",
    "Gold:": "黄金:",
    "Hands": "手部",
    "Head": "头部",
    "Help": "帮助",
    "Helmet": "头盔",
    "Hide options": "隐藏选项",
    "Highest Tier": "最高层级",
    "Item ID:": "物品ID:",
    "Item Types": "物品类型",
    "Items per page:": "每页显示数量:",
    "Left Hand": "左手",
    "Legs": "腿部",
    "Level Requirement": "等级要求",
    "Lock item": "锁定物品",
    "Main hand items are weapons": "主手物品是武器",
    "Mass Handling": "批量处理",
    "Normal": "普通",
    "Leggings": "紧身裤",
    "Name": "名称",
    "Next breakpoint level where your max amount will decrease": "下一个断点等级，您的最大金额将减少",
    "No item equipped": "未装备物品",
    "Obtained by being an ironman character": "通过成为一个铁人角色获得",
    "Obtained by being a group ironman character": "通过成为一个 团体 铁人角色获得",
    "Obtained by being a hardcore ironman character": "通过成为一个 硬核 铁人角色获得",
    "Off hand items are daggers or shields": "副手物品是匕首或盾牌",
    "Obtained by spending 100 points in the event shop for Christmas 2023": "通过2023年圣诞节在活动商店花费 100积分 获得",
    "Obtained by participating in the 2021 christmas event": "通过参加2021年圣诞节活动获得",
    "Wire": "发送",
    "You are now fighting": "您正在战斗",
    "Your password must be at least 8 characters long.": "密码长度至少为8个字符。",
    "Your username must be between 3 and 16 characters and cannot contain special characters. You will use this when logging in": "用户名长度为3 ~ 16个字符，不能包含特殊字符。您将在登录时使用它",
    "Your inventory is empty. You can find equipment by doing actions, purchase from others, or purchase from the": "你的库存是空的。你可以找到装备通过动作、从别人那里购买，或者购买从",
    "Your hit chance is calculated by your dexterity / (your dexterity + enemy agility)": "你的命中率公式：你的灵巧 /（你的灵巧 + 敌人敏捷）",
    "your first couple of crafts are free": "你制作的前几件物品是免费的",
    "Per round": "每回合",
    "Password": "密码",
    "Partners": "伙伴",
    "Per iteration": "每次迭代",
    "Players with non fatigued actions": "具有非疲劳动作的玩家",
    "Relic boosts are only 12.5% effective in PvP resulting in a decreased defense": "遗物增益在PvP中只有12.5%的效果，导致防御降低",
    "All rights reserved": "版权所有",
    "Stat": "属性",
    "Combat Log": "战斗日志",
    "Damage": "伤害",
    "Healing": "治疗",
    "Hit Chance": "命中率",
    "Total": "总计",
    "Total damage. 1 damage means 1 damage done per attack while battling": "总伤害。1 伤害是指战斗中每次攻击造成 1 点伤害",
    "Total defense. 1 defense means 1 damage blocked per monster attack while battling up to at most 75% of enemy damage": "总防御。1 防御意味着每次被怪物攻击时，可以抵挡 1 点伤害，同时最多抵挡 75% 的敌人伤害",
    "Tag": "标签",
    "Gift": "礼物",
    "Compare BP": "比较属性",
    "Profile Picture": "",
    "Profile Picture": "头像",
    "Rank": "排名",
    "Stats": "属性",
    "Strength": "力量",
    "Health": "生命值",
    "Achievement Points": "成就点数",
    "Actions Last Month": "最近一个月动作数",
    "Actions Last Week": "最近一周动作数",
    "Actions Today": "今日动作数",
    "Actions Total": "总计动作数",
    "Activity": "活跃",
    "Agility": "敏捷",
    "Dexterity": "灵巧",
    "Highest Monster Slain": "杀死的最高怪物",
    "Choose a base": "选择一个基础",
    "Clicking leads you to the page of your current active skill": "点击将引导您进入当前活动技能的页面",
    "Clicking leads you to your character portal": "点击将引导您进入角色入口",
    "Stat Slots": "属性槽",
    "Total Stats": "总属性",
    "Filter": "过滤器",
    "Destroy": "摧毁",
    "Enchants": "附魔",
    "Enemy hit chance is calculated by enemy dexterity / (enemy dexterity + your agility)": "敌人的命中率公式：敌人灵巧 /（敌人灵巧 + 你的敏捷）",
    "Rare": "稀有",
    "Equipped": "已装备",
    "Transfer Attached Equipables": "转移附加装备",
    "Add Enchant": "添加附魔",
    "Add Gem": "添加宝石",
    "Craft item": "制作物品",
    "Equip": "装备",
    "Equipped item": "物品已装备",
    "Equipped, loaned, queued and items in a gear set cannot be destroyed": "已穿戴、已出借、已排队、套装内物品不可销毁",
    "Reset Filters": "重置过滤器",
    "Select a gear set for this item": "请选择该物品的装备套装",
    "Breakpoint:": "断点:",
    "Sell": "出售",
    "Gloves": "手套",
    "Open sell menu": "打开出售菜单",
    "Search": "搜索",
    "Scrap": "垃圾",
    "Shield": "盾牌",
    "Slot Tier": "槽层级",
    "Sort": "排序",
    "Sum Tier": "层级总和",
    "Toggle all": "切换全选",
    "Trash Bin": "垃圾桶",
    "Weapon": "武器",
    "Whisper": "私信",
    "The server could not be reached. The server is either down, the game is updating, or you have lost your connection. Hang tight!": "无法连接到服务器。服务器关闭，游戏正在更新，或者您失去了连接。坚持住！",
    "This player is a chat moderator": "该玩家是聊天主持人",
    "This item is currently equipped": "当前已装备该物品",
    "Timer": "计时器",
    "24 Hour Clock": "24小时制",
    "Action display": "动作显示",
    "Action Tracker": "动作跟踪器",
    "After you have connected, there is a \"Queslar-Bot\" channel in the Queslar server which contains information of what the bot can do.": "在您连接之后，在Queslar服务器中有一个“Queslar- bot”频道，其中包含bot可以做什么的信息。",
    "and": "和",
    "Casino Ban Menu": "赌场禁令菜单",
    "Bank Tax Percentage": "银行税率百分比",
    "Casino": "赌场",
    "Catacomb Kills": "地下墓穴击杀",
    "Catacomb Gold": "地下墓穴金币",
    "Catacomb Actions": "地下墓穴动作",
    "Chat": "聊天",
    "Changing area automatically changes your monster to the first monster in the list, and refreshes actions. A 5% boost to drop and stat drop chance is applied for each increase in your area. This bonus is additive with village bonuses.": "切换区域会自动将你的怪物切换为列表中的第一个怪物，并刷新动作。你的区域每增加一次，掉落和属性掉落几率增加5%。该加成与村庄加成叠加。",
    "Changing monster automatically refreshes your actions": "改变怪物会自动刷新你的动作",
    "Changing your tax automatically donates your inputted value to your village every action if you are in any. The highest between the village wide tax and your personal village tax is the one used. The maximum tax rate is 99%": "改变你的税收自动捐赠你的输入价值给你的村庄，如果你在任何行动。村税和个人村税之间最高的是使用的税。最高税率是99%",
    "Changing your tax automatically put a percent of your income after all other taxes into the bank": "自动改变你的税收，将你收入的百分之一扣除所有其他税项后存入银行",
    "Clock type": "时钟类型",
    "Confirmations": "确认",
    "Color Customization": "颜色定制",
    "Connect do discord and receive discord messages by Queslar's own bot.": "连接Discord并通过Queslar自己的机器人接收Discord消息。",
    "Connect to discord": "连接到Discord",
    "Control chat layout settings": "控制聊天布局设置",
    "Control layout styles and colors": "控制布局样式和颜色",
    "Control limits to potential monthly spending": "控制每月潜在支出的限额",
    "Control whether a not you allow a small popup on your device.": "控制你是否允许在你的设备上出现一个小的弹出窗口。",
    "Crafting Drops": "制作掉落",
    "Custom Wallpaper": "自定义壁纸",
    "Daily Resets": "日常重置",
    "Description Drops": "描述掉落",
    "Emotes": "表情符号",
    "Fonts": "字体",
    "Equipment Drops": "装备掉落",
    "Experience": "经验值",
    "Gem Drops": "宝石掉落",
    "Gold": "金币",
    "Iron": "铁",
    "Layout": "布局",
    "Levels": "等级",
    "Local": "本地",
    "Hide": "隐藏",
    "Per hour": "每小时",
    "Per action": "动作",
    "Per day": "每天",
    "Pet Passive Drops": "宠物被动掉落",
    "Popup duration": "弹出窗口持续时间",
    "Popups such as 'You have succesfully done x' will last for the duration noted (in seconds)": "像“你已经成功完成了x”这样的弹出框将持续指定的持续时间（以秒为单位）",
    "Premium Limits": "溢价限制",
    "Party": "队伍",
    "Partner": "伙伴",
    "Types": "类型",
    "Text Color": "文字颜色",
    "Taxed Wood": "木头征税",
    "Taxed Resources": "资源征税",
    "Taxed Iron": "铁征税",
    "Taxed Relics": "遗物征税",
    "": "",
    "Stone": "石头",
    "Stat Drops": "属性掉落",
    "Sound": "声音",
    "Specials": "特殊",
    "Save Bank Tax": "保存银行税率",
    "Save Tax": "保存税率",
    "Select whether or not you wish your action countdown to be shown in a bar or in a timer. This changes the main action and party actions": "选择你是否希望你的动作倒计时显示在一个条形或计时器。这改变了主要动作和团队动作",
    "Toggle whether or not you you wish to have the casino available to you. This feature is by default disabled": "切换是否您希望有赌场可供您使用。该功能在默认情况下是禁用的",
    "Toggle whether or not you want confirmation prompts on more careful decisions like kicking people, buying currency and leaving places.": "切换是否需要在踢人、购买货币和离开地方等更谨慎的决定上得到确认提示。",
    "Toggle the bank display": "切换银行显示",
    "Toggle showing emotes as emotes or the emote text only. This will take effect on new message and after reloading the game for old messages.": "切换将表情显示为表情或仅显示表情文本。这将对新消息和重新加载游戏后的旧消息生效。",
    "Toggle at which time of day you wish to get your daily resets": "切换在一天的哪个时间你希望得到你的日常重置",
    "Timezone": "时区",
    "The action speed is 15 seconds while you are fatigued": "疲劳状态下的动作速度为15秒",
    "Toggle whether you want to show your local timezone on timestamps or the server timezone. The upper right corner will always show the server time.": "切换是否你想展示你的本地时区时间戳或服务器时区。右上角将始终显示服务器时间。",
    "Toggle which kind of clock you wish to have": "切换你想要的时钟类型",
    "Toggle which kind of number formatting you wish to use for numbers above 1.000.000. Takes effect on refresh.": "切换您希望为高于1,000.000的数字使用哪种数字格式。刷新生效。",
    "Save Taxes": "保存税率",
    "Reverse chat": "反向聊天",
    "Reset": "重置",
    "Show": "显示",
    "Relics": "遗物",
    "Reverses the chat with the text input in the bottom and messages being appeneded to the bottom": "反转聊天，文本输入在底部，消息被附加到底部",
    "Link Item": "链接物品",
    "Reroll Tier Menu": "重洗层级菜单",
    "Compare Item": "对比物品",
    "You can use mass handling by toggling the items you wish to interact with and afterwards use a mass action on them": "你可以通过切换你想要与之交互的物品，然后对它们使用大量操作来使用批量处理",
    "You should avoid trading with anyone who has a unique in-game [SCAMMER] tag. They have it for a reason": "你应该避免与任何在游戏中拥有独特[骗子]标签的人交易。他们拥有它是有原因的",
    "Scammer": "骗子",
    "Did you know?": "你知道吗？",
    "When you start off in Queslar getting multiple partners is a good practice": "当你开始玩Queslar时，获得多个伙伴是一个很好的做法",
    "Server": "服务器",
    "Resources": "资源",
    "Show tutorials": "显示教程",
    "Monthly $ Warning Limit": "每月$警告上限",
    "Misc settings": "杂项设置",
    "Merge Channels": "合并频道",
    "Menu Background Color": "菜单背景色",
    "Unique": "独特",
    "Magical": "魔法",
    "Queslar has its own discord bot where you can receive pings or whisper people directly without having the game open? You can connect to discord in the settings": "Queslar有自己的discord聊天机器人，你可以在没有打开游戏的情况下直接接收通知或私聊。你可以在设置中连接到discord",
    "You missed your attack": "你的攻击未命中",
    "You": "你",
    "[Moderator]": "[主持人]",
    "[Owner]": "[拥有者]",
    "Account": "账号",
    "Account name": "账号名称",
    "Account Overview": "账号概览",
    "Active Catacomb": "活跃地下墓穴",
    "Active Player Quest": "活跃玩家任务",
    "Active Village Quest": "活跃村庄任务",
    "Base": "基础",
    "Base + item slot bonus": "基础+物品槽奖励",
    "Boosted": "提升",
    "Convert Wootz": "转换乌兹钢",
    "Defense": "防御",
    "Next upgrade": "下一升级",
    "Relic": "遗物",
    "Upgrade": "升级",
    "Toggle all items for mass handling": "切换所有物品进行批量处理",
    "Total Stats:": "总属性:",
    "too late now...": "现在太晚了…",
    "Toggle item for mass handling": "切换物品批量处理",
    "(Main hand)": "(主手)",
    "(Off hand)": "(副手)",
    "Feet": "脚部",
    "Right Hand": "右手",
    "Select Gear Set": "选择装备套装",
    "When crafting you are using an equipment piece as a base, and improving that item. Click to choose an item from your inventory": "在制作过程中，你将使用装备作为基础，并改进该物品。单击从您的库存中选择一个物品",
    "Choose": "选择",
    "Chest": "胸部",
    "Viewed item": "查看物品",
    "Now you can go craft the item, but be aware items have to be unequipped to be crafted, so you have to go to your inventory and unequip the item first!": "现在你可以去制作物品了，但要注意物品必须是未装备的，所以你必须先去你的库存并脱下要制作的装备！",
    "You will now see that you have unlocked the crafting page to the right of your battling page, as well as a free craft": "现在你会看到你已经解锁了战斗页面右侧的制作页面，以及一次免费的制作",
    "That's it, but you can grow even stronger.": "就是这样，但你可以变得更强。",
    "If you are stuck, don't be afraid to ask for help in the help channel at the bottom middle of your screen!": "如果你被卡住了，不要害怕向屏幕底部中间的帮助频道寻求帮助！",
    "Unequip your item and craft it": "卸下你的装备并制作它",
    "iLevel": "i等级",
    "Min iLevel": "最低i等级",
    "Max iLevel": "最大i等级",
    "Max Level": "最大等级",
    "Min Level": "最低等级",
    "Min Slot Tier": "最低槽位层级",
    "Min Stat (Singular)": "最低属性（单个）",
    "Min Stat (Singular)": "最低属性（单个）",
    "Min Stat (Sum)": "最低属性（总和）",
    "Max Stat (Sum)": "最大属性（总和）",
    "Gods:": "神:",
    "Monster actions": "怪物动作",
    "Players actions": "玩家动作",
    "Pets:": "宠物:",
    "The monster missed its attack": "怪物未命中",
    "Here you can see the monster you are currently fighting against. Your goal is growing stronger and fight harder and harder monsters. Right now you are at the very beginning in area 1, monster 1.": "在这里你可以看到你正在对抗的怪物。你的目标是变得更强大，并与越来越难对付的怪物战斗。现在你在区域1的最开始，怪物1。",
    "prev": "上一条",
    "next": "下一条",
    "This is your current area. There are 100 monsters in each area. If you get strong enough to kill the last monster in an area, it might be time to move up towards the next area.": "这是你现在的区域。每个区域都有100个怪物。如果你足够强大，能够杀死一个区域中的最后一个怪物，那么你就可以进入下一个区域了。",
    "Your fights are run automatically. As this counts down your character will fight the monster again and you will receive loot if you win.": "你的战斗是自动运行的。随着时间的推移，你的角色将再次与怪物战斗，如果你获胜，你将获得战利品。",
    "These are how many times your character fights automatically. This counts down every fight. You can reset this by clicking fight. You will continue fighting even with your browser closed, and don't worry if you manage to hit 0 actions remaining, your character will simply fight at a slower rate.": "这是你的角色自动战斗的次数。这是每次战斗的倒计时。你可以通过点击战斗来重置这个。你将继续战斗，即使你的浏览器关闭，不要担心，如果你设法击中0行动剩余，你的角色只是以较慢的速度战斗。",
    "Normally this is here you start your fights.": "通常都是在这里开始你的战斗。",
    "This is what you receive for each fight. As you might expect, better monsters yield higher rewards, and if you lose a battle, you do not receive anything": "这是你每场战斗的回报。正如你所预料的那样，更好的怪物会带来更高的奖励，如果你输了一场战斗，你也不会得到任何东西",
    "This is where your resources and stats are shown. You can for example see the gold you have gained from winning your recent battles here.": "这是你的资源和统计数据显示的地方。例如，你可以在这里看到你赢得最近的战斗所获得的金币。",
    "done": "完成",
    "Baron": "男爵",
    "Gentleman": "绅士",
    "King": "国王",
    "Hero": "英雄",
    "You have no enchants": "你没有附魔",
    "For how much do you wish to sell your": "你想卖多少钱对于你的",
    "game": "游戏",
    "If you know you are a gambler with a potential addiction, going to settings - casino ban menu can give you the chance to ban yourself indefinitely from all casino functions.": "如果你知道你是一个有潜在瘾的赌徒，去设置-赌场禁止菜单可以给你机会无限期地禁止自己所有的赌场功能。",
    "Unequip": "脱下",
    "Craft Item": "制作物品",
    "Main Color": "主色",
    "Monthly $ Max Limit": "每月$最大限额",
    "Number formatting": "数字格式",
    "Push Notifications": "推送通知",
    "Quests": "任务",
    "Quick Menu": "快捷菜单",
    "rules.": "规则.",
    "Choose how much exp in % is taxed per action. For each 1% of your exp you tax you will give 1 village exp": "选择每个动作需要多少经验值（以%为单位）。每征收1%的经验税，你将获得1村庄经验",
    "Choose the max limit on $ that can be spent on the premium store monthly": "选择每月可在高级商店消费的$的最大限额",
    "Choose a limit where you wish to receive a warning when spending $ in the premium store": "选择您希望在高级商店消费$时收到警告的限额",
    "Could be bought for 200 credits during the easter event 2024": "可以在2024年复活节活动期间用200积分购买",
    "General": "常规",
    "A popup will appear whenever your house build has finished, and your queue is empty.": "每当你的房子建造完成，你的队列是空的，一个弹出框就会出现。",
    "A popup will appear whenever you reach 0 actions remaining during battling.": "当你在战斗中达到0个剩余动作时，会出现一个弹出框。",
    "A popup will appear whenever your personal quest is complete.": "当你的个人任务完成时，会出现一个弹出窗口。",
    "First time you enter a menu a tutorial will pop up. Toggle this if you do not want to have it show.": "当你第一次进入菜单时，会弹出一个教程。如果您不想让它显示，请切换此选项。",
    "Merging channels shows all your active channels in the chat box at the same time.": "合并频道将同时在聊天框中显示所有活跃频道。",
    "Obtained by spending 100 points in the event shop for Christmas 2022": "在2022年圣诞节活动商店消费100积分获得",
    "Obtained by receiving 1 community point": "通过获取1点社区积分获得",
    "Obtained by spending 100 points in the event shop for Christmas 2022": "在2022年圣诞节活动商店消费100积分获得",
    "Village Tax Percantage": "村庄税收百分比",
    "EnergyDrink": "能量饮料",
    "Homestead": "家园",
    "jewel": "珠宝",
    "Kills": "击杀",
    "Losses": "失败",
    "Meat": "肉",
    "Min % Health": "最低 % 生命值",
    "Max % Health": "最大 % 生命值",
    "Off": "关",
    "On": "开",
    "Relic Drops": "遗物掉落",
    "relics": "遗物",
    "Winrate": "胜率",
    "Wood": "木头",
    "Wins": "胜利",
    "Taxed Gold": "黄金征税",
    "Taxed Meat": "肉征税",
    "Taxed Stone": "石头征税",
    "Catacomb": "地下墓穴",
    "Catacombs": "地下墓穴",
    "Mob Skip": "小怪跳过",
    "Mob Debuff": "小怪减益",
    "Next Tile": "下个称号",
    "Multi Mob": "多个小怪",
    "Ranged Resistance": "远程抵抗",
    "Melee Resistance": "近战抵抗",
    "Uncommon": "罕见",
    "Wootz": "乌兹钢",
    "Boss": "首领",
    "Caves": "洞穴",
    "Character Multiplier": "角色乘数",
    "CharacterOne": "角色1",
    "Divine": "神圣",
    "Enemy": "敌人",
    "Fortify Reduction": "减防",
    "Frog Toe": "青蛙脚趾",
    "Fire Resistance": "火炕",
    "Has Visited": "访问过",
    "Insufficient  meat, iron, wood, stone": "肉、铁、木头、石头不足",
    "Legendary": "传说",
    "Dog Tongue": "狗舌",
    "Loot": "战利品",
    "Wolf Tooth": "狼牙",
    "Lizard Leg": "蜥蜴腿",
    "Water Resistance": "水抗",
    "Thunder Resistance": "雷抗",
    "Elemental Conversion": "元素转换",
    "Reward Multiplier": "奖励乘数",
    "Rarities": "稀有度",
    "Added Mobs": "增加的小怪",
    "Action Speed": "动作速度",
    "Lifesteal": "生命偷取",
    "Drops": "掉落",
    "Sound Settings": "声音设置",
    "Test Sound": "测试声音",
    "Kingdom attacks": "王国攻击",
    "Village attacks": "村庄攻击",
    "Village Quest": "村庄任务",
    "World boss spawn": "世界BOSS刷新",
    "Volume from 0 to 100": "音量从0到100",
    "Ping": "通知",
    "Quest": "任务",
    "Kingdom exploration": "王国探索",
    "Custom Sounds": "自定义声音",
    "Cave depth": "洞穴深度",
    "Cave exit": "洞穴退出",
    "Catacomb exit": "地下墓穴退出",
    "Poker": "扑克",
    "Mail": "邮件",
    "Actions Remaining Overview": "动作剩余概览",
    "Cave Progress": "洞穴进度",
    "Cave Description Progress": "洞穴描述进度",
    "Equipment Set Switching": "装备套装切换",
    "Experience Overview": "经验概览",
    "Gem Drop Progress": "宝石掉落进度",
    "House Buildings": "房屋建筑",
    "Village Tile Access": "村庄称号访问",
    "Kingdom Tile Access": "王国称号访问",
    "Kingdom Quick Access": "王国快速访问",
    "Kingdom Exploration Timer": "王国探索计时器",
    "Mp3 or wav sound link": "Mp3或wav音频链接",
    "Next Level Progress": "下一级进度",
    "Obtained by having an active vip subscription": "通过拥有一个活跃的Vip订阅获得",
    "Profile Quick Access": "个人资料快速访问",
    "Pets Quick Access": "宠物快速访问",
    "Partners Quick Access": "伙伴快速访问",
    "Party Actions": "队伍动作",
    "Quick Menu Displays": "快捷菜单显示",
    "Change Email": "更改邮箱",
    "Change Password": "修改密码",
    "China": "中国",
    "Confirm unusual location logins": "确认异常位置登录",
    "Current Password": "当前密码",
    "Confirm Password": "确认密码",
    "Confirm New Password": "确认新密码",
    "Confirm New Email": "确认新邮箱",
    "Confirm detected VPN logins": "确认检测到的V·P·N登录",
    "Deleting items decreases your loading time, and provides you with wootz, an item used for crafting": "删除物品可以减少你的加载时间，并为你提供乌兹钢，一种用于制作的物品",
    "Email": "邮箱",
    "Latest Logins": "最近登录",
    "New Email": "新邮箱",
    "New Password": "新密码",
    "Recieve an email login confirmation when logging in from a detected VPN": "通过检测到的V·P·N登录时，会收到确认邮件",
    "Recieve an email login confirmation when logging in from locations you have not before.": "当从您以前没有的位置登录时，会收到登录确认邮件。",
    "Security Settings": "安全设置",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "": "",
    "": "",
    "": "",
    "": "",
    "chat": "chat",
    "lock_open": "lock_open",
    "Reddit": "Reddit",
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
    "Feet [": "脚部 [",
    "Hands [": "手部 [",
    "Head [": "头部 [",
    "Legs [": "腿部 [",
    "Chest [": "胸部 [",
    "Feet [": "脚部 [",
    "Right Hand [": "右手 [",
    "Left Hand [": "左手 [",
    "Players Online: ": "在线玩家: ",
    "Enchant: ": "附魔: ",
    "Gem: ": "宝石: ",
    "Leggings": "紧身裤",
    "Normal ": "普通",
    "Lvl: ": "等级: ",
    "Action Timer: ": "动作计时器: ",
    "Agility:": "敏捷:",
    "Damage:": "伤害:",
    "Health:": "生命值:",
    "Strength:": "力量:",
    "Defense:": "防御:",
    "Dexterity:": "灵巧:",
    "Total stats: ": "总属性: ",
    "Scrap ": "垃圾",
    "Magical ": "魔法",
    "Unique ": "独特",
    "Legendary ": "传说",
    "Uncommon ": "罕见",
    "Rare ": "稀有",
    "Healing:": "治疗:",
    "Total:": "总计:",
    "Standard - Ex. ": "标准 - 经验值 ",
    "(Tier ": "(层级 ",
    "Helmet (": "头盔 (",
    "Dagger (": "匕首 (",
    "Weapon (": "武器 (",
    "Damage (": "伤害 (",
    "Sell for ": "出售获得 ",
    "You have successfully moved to area ": "你已成功切换到了地区 ",
    "Sound_": "声音_",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    " [SYSTEM]:": " [系统]:",
    " Blah:": " Blah:",
    " bofra:": " bofra:",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^怪物(.+)$/,
    /^你造成(.+)$/,
    /^成本(.+)$/,
    /^\@(.+)$/,
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
    /^([\d\.,]+) ([\d\.]+)k \/ ([\d\.]+)k$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^ID: ([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^\-([\d\.,]+) \/ ([\d\.,]+)$/,
    /^\[([\d\.,]+)\/([\d\.,]+) ([\d\.,]+):([\d\.,]+)\]$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+)\) ([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^\[([\d\.,]+)\/([\d\.,]+) ([\d\.,]+):([\d\.,]+)\] $/,
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
    [/^You have dealt (.+) damage$/, '你造成了 $1 伤害'],
    [/^The monster has dealt (.+) damage$/, '怪物对你造成了 $1 伤害'],
    [/^The monster has healed (.+) life$/, '怪物治疗了 $1 生命值'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Patch (.+) is up!$/, '$1 补丁发布！'],
    [/^Destroy (.+) enchants$/, '摧毁 $1 附魔'],
    [/^After (.+) kills and (.+) rounds you have died$/, '在 $1 击杀和 $2 回合后，你挂了'],
    [/^Are you sure you wish to destroy (.+) for (.+) normal wootz and (.+) guardian shards\?$/, '你确定你想摧毁 $1 物品并获得 $2 普通乌兹钢和 $3 守护者碎片吗？'],
    [/^Destroy (.+) items for (.+) normal wootz and (.+) guardian shards$/, '摧毁 $1 物品获得 $2 普通乌兹钢 和 $3 守护碎片'],
    [/^The monster dropped (.+) gold and (.+) battling experience$/, '怪物掉落了 $1 金币和 $2 战斗经验'],
    [/^(.+) bonus to battling gold and relic drop income$/, '$1 加成到 战斗的黄金和遗物掉落收入'],
    [/^After (.+) kill and (.+) rounds you have come out victorious$/, '经过 $1 次击杀和 $2 回合的战斗，你获得了胜利'],
    [/^Monster (.+) hit you (.+) times and crit (.+) time dealing (.+) damage in (.+) rounds$/, '怪物 $1 命中了你 $2 次，对你造成暴击 $3 次，在 $5 回合中对你造成 $4 伤害'],
    [/^Monster (.+) hit you (.+) times and crit (.+) times dealing (.+) damage in (.+) rounds$/, '怪物 $1 命中了你 $2 次，对你造成暴击 $3 次，在 $5 回合中对你造成 $4 伤害'],
    [/^Monster (.+) hit you (.+) time and crit (.+) time dealing (.+) damage in (.+) rounds$/, '怪物 $1 命中了你 $2 次，对你造成暴击 $3 次，在 $5 回合中对你造成 $4 伤害'],
    [/^Monster (.+) hit you (.+) time and crit (.+) times dealing (.+) damage in (.+) rounds$/, '怪物 $1 命中了你 $2 次，对你造成暴击 $3 次，在 $5 回合中对你造成 $4 伤害'],
    [/^You hit Monster (.+) time and crit (.+) time dealing (.+) damage in (.+) rounds$/, '你命中怪物 $1 次，对你造成暴击 $2 次，在 $4 回合中对你造成 $3 伤害'],
    [/^You hit Monster (.+) time and crit (.+) times dealing (.+) damage in (.+) rounds$/, '你命中怪物 $1 次，对你造成暴击 $2 次，在 $4 回合中对你造成 $3 伤害'],
    [/^You hit Monster (.+) times and crit (.+) time dealing (.+) damage in (.+) rounds$/, '你命中怪物 $1 次，对你造成暴击 $2 次，在 $4 回合中对你造成 $3 伤害'],
    [/^You hit Monster (.+) times and crit (.+) times dealing (.+) damage in (.+) rounds$/, '你命中怪物 $1 次，对你造成暴击 $2 次，在 $4 回合中对你造成 $3 伤害'],
    [/^You have gained (.+) gold and (.+) battling experience.$/, '你获得了 $1 金币和 $2 战斗经验。'],
    [/^Obtained by receiving (.+) community points$/, '通过获得 $1 社区积分获得'],
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
    [/^Next level in: ([\d\.,]+) actions$/, '距离下一级还有：$1 动作'],
    [/^Next level in: ([\d\.,]+) action$/, '距离下一级还有：$1 动作'],
    [/^Battle ([\d\.,]+) \- Round ([\d\.,]+)$/, '战斗 $1 \- 回合 $2'],
    [/^([\d\.,]+) iron$/, '$1 铁'],
    [/^([\d\.,]+) stone$/, '$1 石头'],
    [/^([\d\.,]+) wood$/, '$1 木头'],
    [/^([\d\.,]+) meat$/, '$1 肉'],
    [/^([\d\.,]+) free item$/, '$1 免费物品'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+) \/ ([\d\.,]+) Health$/, '$1 \/ $2 生命值'],
    [/^([\d\.,]+) \/ ([\d\.,]+) Battling$/, '$1 \/ $2 战斗'],
    [/^\-([\d\.,]+) \/ ([\d\.,]+) Battling$/, '\-$1 \/ $2 战斗'],
    [/^Quest ([\d\.,]+) \/ ([\d\.,]+)$/, '任务 $1 \/ $2'],
    [/^Breakpoint: ([\d\.,]+)$/, '断点: $1'],
    [/^Enchant limit: ([\d\.,]+)$/, '附魔上限: $1'],
    [/^Dexterity \(([\d\.,]+)\): ([\d\.,]+)$/, '灵巧 \($1\): $2'],
    [/^Health \(([\d\.,]+)\): ([\d\.,]+)$/, '生命值 \($1\): $2'],
    [/^Slot Bonus \(([\d\.,]+)\): ([\d\.,]+)$/, '槽加成 \($1\): $2'],
    [/^Strength \(([\d\.,]+)\): ([\d\.,]+)$/, '力量 \($1\): $2'],
    [/^Agility \(([\d\.,]+)\): ([\d\.,]+)$/, '敏捷 \($1\): $2'],
    [/^Defense \(([\d\.,]+)\): ([\d\.,]+)$/, '防御 \($1\): $2'],
    [/^News \- (.+)$/, '新闻 \- $1'],
    [/^Tier ([\d\.,]+)$/, '层级 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^iLevel: ([\d\.,]+)$/, 'i等级: $1'],
    [/^Credit Burner ([\d\.,]+)$/, '信用点燃烧器 $1'],
    [/^Minediamonds ([\d\.,]+)$/, '矿钻 $1'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^Monster A([\d\.,]+)M([\d\.,]+)$/, '怪物 A$1M$2'],
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