/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Got it, thanks!': '知道了，谢谢!',
    'Import Data': '导入存档',
    'Logout': '登出',
    'Manage': '管理',
    'Notice! Big Update': '注意! 大更新',
    'Yes, delete': '是的，删除',
    'Your Saves': '你的存档',
    'Import Save Data': '导入存档数据',
    'Enable Cloud Sync': '启用云同步',
    'Cancel': '取消',
    'Are you sure?': '你确定吗？',
    'Guide': '指南',
    'Changelog': '更新日志',
    'Cards': '卡',
    'Cards Earned': '获得的卡',
    'Cave': '洞穴',
    'City': '城市',
    'Chemistry': '化学',
    'Cloud Backup': '云备份',
    'Communication': '通讯',
    'Complex': '综合体',
    'Computing': '计算',
    'Lumber': '木材',
    'Max All': '全部最大',
    'Global Info': '全局信息',
    'Math': '数学',
    'Biology': '生物学',
    'Books': '书籍',
    'Burrito': '墨西哥卷饼',
    'Welcome': '欢迎',
    'Business': '商业',
    ' Logged In': '已登录',
    ', for example: Water is': '，例如：水是',
    '👋 Welcome Back!': '👋 欢迎回来!',
    'Grain': '粮食',
    'Health': '健康',
    'Hotkey': '快捷键',
    'Hotel': '旅馆',
    'House': '房子',
    'Immutable Cards': '不可变卡',
    'implemented': '已实施',
    'Auto Claim Badges': '自动收集徽章',
    'Automated Ascension': '自动转生',
    'Auto Resource Unlock': '自动资源解锁',
    'Auto Resource Upgrade': '自动资源升级',
    'Auto Resource Purchase': '自动资源购买',
    'automation upgrade': '自动升级',
    'Automation': '自动',
    'Badges': '徽章',
    'Bread': '面包',
    'Change number formatting': '更改数字格式',
    'Clothing': '服装',
    'Contact Me': '联系我',
    'Crypto': '加密',
    'Dairy': '乳酪',
    'Data': '数据',
    'Currency': '货币',
    'Disease': '疾病',
    'Earth': '地球',
    'Electricity': '电力',
    'Fish': '鱼',
    'Fruit': '水果',
    'Game Saved!': '游戏已保存!',
    'Furniture': '家具',
    'General': '常规',
    'General Multipliers': '常规倍数',
    'Genome': '基因组',
    'Idle Momentum Changelog': '动量放置更新日志',
    'Idle Momentum': '动量放置',
    'Magic': '魔法',
    'Manufacturer': '制造商',
    'Weapons': '武器',
    'Weather': '天气',
    'Video': '视频',
    'Videogames': '电子游戏',
    'View game hotkeys': '查看游戏快捷键',
    'Village': '村庄',
    'was enabled': '已启用',
    'Water': '水',
    'Science': '科学',
    'School': '学校',
    'Scope Multipliers': '范围倍数',
    'Shop': '商店',
    ', Scientific': '，科学',
    '/changelog': '/更新日志',
    'About the Developer': '关于开发者',
    'Alcohol': '酒精',
    'Ascension': '转生',
    'Ascension -> Mechanics -> General': '转生 -> 机械学 -> 常规',
    'Assets': '资产',
    'Assembly': '组装',
    'Auto Minor Prestige': '自动次要声望',
    'Dessert': '点心',
    'Defense': '防御',
    'Prestige': '声望',
    'Portals': '门户',
    'Physics': '物理',
    'Photo': '照片',
    'Prestige Retainer': '声望固定器',
    'Printing': '印刷',
    'Pressing': '紧迫',
    'Property': '不动产',
    'Raygun': '射线枪',
    'Rocket': '火箭',
    'Sandwich': '三明治',
    'Storefront': '店面',
    'Structure': '结构',
    'Submit': '提交',
    'Transportation': '运输',
    'Meat': '肉',
    'Medicine': '药品',
    'Mechanics -> Prestige': '机械学 -> 声望',
    'Milestones': '里程碑',
    'Minor Prestige': '次要声望',
    'Metropolis': '都市',
    'Minor Prestiges': '次要声望',
    'Multi Major Prestige': '批量主要威望',
    'Multi Minor Prestige': '批量次要声望',
    'Produced': '生产',
    'Production Multiplier': '生产倍数',
    'Effect': '效果',
    'Increases the discount factor of the specified scope. Discount factors from all scopes multiply together. Discount factor from global and occupation scope also discount minor prestiges.': '增加指定范围的折扣系数。所有范围的折扣因素相乘。来自全局和职业范围的折扣因素也会对次要声望打折扣。',
    'View your reward history below. Only the most recent 10 spins are tracked.': '在下面查看您的奖励历史记录。 仅跟踪最近的10次旋转。',
    'Click any reward to view the description, probability, and the prize tiers': '点击任何奖一个励来查看描述、概率和奖励等级',
    'false': '无',
    'Reset Password': '重置密码',
    'Reward History': '历史奖励',
    'Spin Wheel': '轮盘',
    'Spin!': '转动!',
    'Multi Resource Upgrade': '批量资源升级',
    'Multi-Minor Prestige': '批量次要声望',
    'Multi-Enhancers': '多重增强',
    'Metal': '金属',
    'Major Prestige': '主要声望',
    'Multipliers': '倍数',
    'multipliers': '倍数',
    'Retain Automation': '保留自动化',
    'Use the menu on the left to navigate through the various information topics.': '使用左侧的菜单浏览各种信息主题。',
    'Target': '目标',
    'Survival Occupation': '生存职业',
    'Earn resource multiplier cards by reaching various milestones in each of the available resources.': '通过在每个可用资源中达到不同的里程碑来获得资源倍数卡。',
    'Earn occupation multiplier cards by reaching various milestones in each of the available occupations.': '通过在每个可用职业中达到不同的里程碑来获得职业倍数卡。',
    'Global Multiplier': '全局倍数',
    'Global Multiplier Enhancement': '全局倍数增强',
    'Global': '全局',
    'Click on any of the rewards to see a description of the reward and the probability of receiving it along with the various tiers it offers': '点击任何一个奖励都可以看到该奖励的描述，以及获得该奖励的概率以及提供奖励的各种等级',
    'Claim All pending badges at once': '一次性收集所有待处理的徽章',
    'Claim All Occupation Rewards': '收集所有职业奖励',
    'Claim All Resource Rewards': '收集所有资源奖励',
    'Claim All Resource Rewards': '收集所有资源奖励',
    'Close': '关闭',
    'Common': '常见',
    'Card History': '卡片记录',
    'Ascend to Unlock': '转生去解锁',
    'Badges: Earn badges for each major prestige completed starting at major 5; each one adds a 2x speed multiplier to a random resource that lasts through ascension': '徽章：从5级开始，为每个主要声望赚取徽章； 每一个都会为随机资源增加一个2倍的速度倍增器，该资源会持续提升',
    'All Occupations': '所有职业',
    'All': '全部',
    'You can contact me anytime on Discord': '您可以随时通过Discord与我联系',
    'without': '没有',
    'When you unsync a cloud save, it will then be converted to a local save with': '当您取消同步云存储时，它将通过以下方式转换为本地存储：',
    'Welcome to the official information center for': '欢迎来到官方信息中心',
    'Uncommon': '稀有',
    'Transcendental': '超越',
    'Sort': '排序',
    'Show Filters': '显示过滤器',
    'Search': '搜索',
    'Scope': '范围',
    'Resources': '资源',
    'Cloud Save': '云存档',
    'Disable Cloud Sync': '禁用云同步',
    'Success!': '成功!',
    'Save successfully synced to the cloud! You can now access it on any device when you login to your account': '存档成功同步到云端！ 现在，您可以在登录帐户时在任何设备上访问它',
    'upgrade is purchased': '升级已购买',
    'upgrade cost increased': '升级成本增加',
    'Upgrade Available!': '升级可用！',
    'upgrade': '升级',
    'Key Concepts': '关键概念',
    'Hamburger': '汉堡包',
    'Free Spins': '免费轮盘',
    'Gemstones': '宝石',
    'Vegetables': '蔬菜',
    'University': '大学',
    'Unicorn': '独角兽',
    'Town': '小镇',
    'Tent': '帐篷',
    'Tech': '技术',
    'Swift Ascension Boost': '迅速转生提升',
    'Survival': '生存',
    'Stone': '石头',
    'Space': '空间',
    'Social': '社会',
    'See when you will earn your next badge': '查看你何时将获得下一枚徽章',
    'Local': '本地',
    'Less Resource Unlocks': '较少的资源解锁',
    'Loading game...': '加载游戏...',
    'Hospital': '医院',
    'Here is a summary of what you gained': '这里是你获得的内容清单',
    'Tools': '工具',
    'Total MP Earned': '总计获得的MP',
    'You were offline for': '你离线了',
    'Select a save below to start playing. Manage your saves using \n          the provided dropdown or start a new game with the Start New Game button.': '在下面选择一个存档以开始游戏。 使用提供的下拉菜单\ n管理存档的内容，或使用“开始新游戏”按钮开始新游戏。',
    '. Would you like to save your game and reload to update? If not, you may dismiss this popup and reload the game when you are ready. 😊': '。 您要保存游戏并重新加载以进行更新吗？ 如果没有，您可以关闭此弹出窗口，并在准备好后重新加载游戏。 😊',
    'Import Save & Start Game': '导入存档&开始游戏',
    'Start New Game': '开始新游戏',
    '= Cloud Synced': '=已同步云',
    '= Not Cloud Synced': '=未同步云',
    'available. You are currently on version': '可用的。 您当前使用的是版本',
    'click here': '点击这里',
    'Click the cloud icon on the save slots that you want cloud synced. Maximum 3 cloud saves per account.': '单击要云同步的存档插槽上的云图标。 每个帐户最多可保存3个云存档。',
    'Cloud Sync': '云同步',
    'Create Copy': '建立副本',
    'Delete Save': '删除存档',
    'Don\'t Update': '不要更新',
    'Email': '邮箱',
    'Export Save': '导出存档',
    'If you\'re interested in the changelog / update notes,': '如果您对更新日志/更新说明感兴趣，',
    'Import Save Only': '仅导入存档',
    'Local Save': '加载存档',
    'Outdated Version!': '过时的版本！',
    'Rename Save': '重命名存档',
    'Save & Update': '保存&更新',
    'Since you last loaded the game, there has been a big update. This update packs a lot of changes and because of that, we recommend that you start from the beginning. You don\'t have to though, completely your choice.': '自从您上一次加载游戏以来，有了很大的更新。 此更新包含很多更改，因此，我们建议您从头开始。 您也可以不必这么做，完全看您的选择。',
    'Select a save slot name, then paste your save data below and click import.': '选择一个保存插槽名称，然后将您的保存数据粘贴到下面，然后单击导入。',
    'Select': '选择',
    'What would you like to call your new save?': '您想怎么称呼您的新存档？',
    'Welcome back!': '欢迎回来！',
    'Set Default': '设为默认值',
    'There\'s a new version': '这里有一个新版本',
    'This will irreversibly and permanently delete the save.': '这将不可逆转并永久删除该存档。',
    'Discount Factor': '折扣系数',
    'Reward': '奖励',
    'Show Description': '显示说明',
    'Speed Multiplier': '速度倍增器',
    'Overview': '概览',
    'Output Multiplier': '产出倍数',
    'Other Multipliers': '其它倍数',
    'Oil': '石油',
    'Next Upgrade': '下一个升级',
    'Occupations': '职业',
    'Nuclear': '核',
    'Increases the speed multiplier of the specified scope. Speed multipliers from all scopes multiply together.': '增加指定作用域的速度倍增器。所有范围的速度倍增器相乘。',
    'Increases the output multiplier of the specified scope. Output multipliers from all scopes multiply together.': '增加指定范围的产出倍数。所有作用域的输出倍数相乘。',
    'Increases the number of resources that global and occupation multipliers effect from all respective global/occupation multiplier sources': '增加全局和职业倍数从所有相应的全局/职业倍数来源影响的资源数量',
    'Congratulations!': '恭喜你！',
    'Rewards History': '历史奖励',
    'Timed Multipliers': '定时倍数',
    'Activate': '激活',
    'Activate your timed multipliers here.': '在此处激活您的定时倍增器。',
    'Offline Hours': '离线时长',
    'Official Changelog': '官方更新日志',
    'Occupation Multiplier': '职业倍数',
    'Occupation Multiplier Enhancement': '职业倍数增强',
    'Claim All Rewards': '收集全部奖励',
    'Property Occupation': '不动产职业',
    'Completed': '已完成',
    'Ascension Start Date': '转生开始日期',
    'Badges last through ascension': '徽章通过转生而持续',
    'Claim Reward': '收集奖励',
    'Coming soon!': '敬请期待!',
    'Game Statistics': '游戏统计',
    'Highest Amount': '最高数量',
    'Highest Manual Purchases': '最高手动购买',
    'Increase / Second': '增加 / 秒',
    'Occupation': '职业',
    'Occupation Milestones': '职业里程碑',
    'Only Show Immutable Cards': '只显示不可变卡',
    'Production': '生产',
    'Prestiges': '声望',
    'Your 5 minutes 5x global speed multiplier has been activated!': '您的5分钟5倍全局速度倍增器已激活！',
    'Number Formatting': '数字格式',
    'Off': '关闭',
    'Pizza': '披萨',
    'Quantity': '数量',
    'Rare': '罕见',
    'Rarity': '稀有度',
    'Rebirth': '重生',
    'Save': '保存',
    'Bundles': '捆绑包',
    'Card Information': '卡片信息',
    'Disable Animations': '禁用动画',
    "Epic": "史诗",
    "Game Settings": "游戏设置",
    "Hotkeys": "快捷键",
    "Legendary": "传奇",
    'Main Menu': '主菜单',
    'Major Points': '要点',
    'Manage Save': '管理存档',
    'Major Prestiges': '主声望',
    'Max': '最大',
    'Nevermind': '算了',
    'Report a Bug': '报告Bug',
    'Yes!': '好的!',
    'Would you like to continue?': '你想继续吗？',
    'Do not require confirmation from now on': '从现在开始不需要确认',
    'Recent': '最新',
    'Start Date': '开始日期',
    'Next Major Prestige': '下一个主声望',
    'Next Minor Prestige': '下一个次级声望',
    'Next Major Points': '下一个要点',
    'Next Ascension Point': '下一个转生点',
    'Crit Chance': '暴击几率',
    'Crit Multiplier': '暴击倍数',
    'Critical Hits': '致命一击',
    'View Hotkeys': '查看快捷键',
    'View Changelog': '查看更新日志',
    'Theme': '主题',
    'Always Scroll Down': '始终向下滚动',
    'All Time Ascensions': '全部转生次数',
    'All Time AP Earned': '获得的全部转生点',
    'Amount / Second': '数量/秒',
    'On': '开启',
    'Smart Max All': '智能全部最大',
    'Speed': '速度',
    'Spent AP Multiplier': '花费的转生点倍数',
    'Prize': '奖励',
    'Prize Tier': '奖励等级',
    'Date': '日期',
    'Games': '游戏',
    'Global / Occupation Multiplier Enhancement': '全局/职业倍乘数增强',
    'Global / Occupation Multiplier Node Depth': '全局/职业倍乘数节点深度',
    'Saving': '保存中',
    'Saved!': '已保存!',
    'Show Scrollbars': '显示滚动条',
    'AP Purchases': '转生点购买',
    'Misc': '杂项',
    'Node Depth': '节点深度',
    'Enabled': '已启用',
    'Interval': '间隔',
    'Base Multiplier': '基础倍数',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Major Prestige Bonuses': '主要声望奖励',
    'Increased Major Points': '提升要点',
    'If the first resource in an occupation will produce enough for the next minor prestige on the next produce, then the minor prestige estimate will be equal to the remaining duration of the first resource’s production': '如果某个职业中的第一个资源产生的能量足以满足下一个农产品的下一个次要声望，则次要声望估计将等于第一个资源的剩余生产时间',
    'Tech Occupation': '技术职业',
    'Increases the number of cards earned from each milestone reward by a percent. Additional cards are rounded down to the nearest whole number.': '从每个里程碑奖励中获得的卡片数量增加一个百分点。额外的卡片被舍入到最接近的整数。',
    'Increases the multiplier granted from minor prestiges.': '提升来自次要声望的倍数增长。',
    'Increases the multiplier granted from major prestiges.': '提升来自主要声望的倍数增长。',
    'Increased price scaling of': '提升价格比例',
    'Next Stacks': '下一个堆叠',
    'Next': '下一个',
    'Stacking Power': '堆叠功率',
    'Base Speed Boost': '基础速度提升',
    'Base Multiplier': '基础倍数',
    'Increases the base speed boost by': '提升基础速度提升',
    'Increases the base multiplier by': '提升基础倍数',
    'Increased Offline Hours': '提升离线小时数',
    'Increased Milestone Card Rarity': '提升里程碑卡片稀有度',
    'Increased Milestone Card Quantity': '提升里程碑卡片数量',
    'Increased Card Rarity': '提升卡片稀有度',
    'Increased Card Quantity': '提升卡片数量',
    'Increased Ascension Points': '提升转生点',
    'Increases the speed multiplier granted from minor prestiges.': '增加次要声望授予的速度倍数。',
    'Increases the speed multiplier granted from major prestiges.': '增加主要声望授予的速度倍数。',
    'Increases the number of resource upgrades you can complete at the same time when they are available.': '增加您可以在可用时，同时完成的资源升级的数量。',
    'Increases the number of hours you can gain offline progress.': '增加可以获得离线进度的小时数。',
    'Auto Claim Milestones': '自动收集里程碑奖励',
    'Auto Major Prestige': '自动主要声望',
    'Automatically claims milestone reward cards on a time interval when they are available.': '在可用的时间间隔内自动手机里程碑奖励卡片。',
    'Automatically minor prestiges occupations on a time interval when they are available.': '在时间间隔可用时自动自动进行次要声望职业。',
    'Automatically major prestiges on a time interval when it is available.': '当某个时间间隔可用时，自动授予主要声望。',
    'Determines how many resources auto purchase will work on. At the current level, auto purchase is enabled on the first': '确定自动购买将使用多少资源。 在当前级别，第一个启用自动购买',
    'Determines how many resources the multiplier affects and how many times the multiplier stacks. At the current level, multipliers are applied to the first': '确定倍增器影响多少资源以及倍增器堆栈多少次。 在当前级别，乘数应用于第一个',
    'Determines how many resources the speed multiplier affects and how many times the multiplier stacks. At the current level, multipliers are applied to the first': '确定速度倍增器影响多少资源以及倍增器堆叠多少次。 在当前级别，乘数应用于第一个',
    'Determines the frequency that this automator triggers.': '确定此自动器触发的频率。',
    'Each prize has varying tiers of rewards; each time you spin for a reward, the first spin determines the reward type, and the second spin determines how big of a reward you receive. For example, the': '每个奖项都有不同的奖励等级； 每次旋转以获得奖励时，第一次旋转将确定奖励类型，第二旋转将确定您收到的奖励量。 例如，',
    'Automatically purchases the first 100 of each resource up to the resource node shown below on all occupations. Upgrading the resource node depth will enable auto purchase on the next three resource nodes.': '在所有职业上，自动购买每个资源的前100个，直至以下所示的资源节点。 升级资源节点深度将在接下来的三个资源节点上启用自动购买。',
    'Automatically upgrades resources when the next manual purchase upgrade is available. Before level 3, only upgrades a single resource per interval. Once upgraded to level 3, it will upgrade all upgradeable resources at once, similar to the Max All button.': '下一次手动购买升级可用时，将自动升级资源。 在级别3之前，每个间隔仅升级一个资源。 升级到3级后，它将立即升级所有可升级的资源，类似于“全部最大化”按钮。',
    'Enable All Automators': '启用所有自动器',
    'Disable All Automators': '禁用所有自动器',
    'Feedback & Suggestions': '反馈与建议',
    'These ascension upgrades are permanent and never reset, including after Rebirth.': '这些转生升级是永久性的，绝不会重置，包括在重生之后。',
    'These toggles include Rebirth automators.': '这些切换包括重生自动器。',
    'Minor Prestige Multiplier Boost': '次要声望倍数提升',
    'Major Prestige Multiplier Boost': '主要声望倍数提升',
    'Minor Prestige Speed Boost': '次要声望速度提升',
    'Major Prestige Speed Boost': '主要声望速度提升',
    'Minor Prestige Time Multiplier': '次要声望时间倍数',
    'Major Prestige Time Multiplier': '主要声望时间倍数',
    'Ascension Time Multiplier': '转生时间倍数',
    'Disabled': '已禁用',
    'Current per Point': '当前每点',
    'Current Stacks': '当前堆叠',
    'Current Multi': '当前批量',
    'Current Interval': '当前间隔',
    'Current Formula': '当前公式',
    'Current Bonus': '当前奖励',
    'Next Multi': '下一个批量',
    'Next Interval': '下一个间隔',
    'Next Formula': '下一个公式',
    'Next Bonus': '下一个奖励',
    'Current': '当前',
    'Next per Point': '下一个每点',
    'Next Depth': '下一个深度',
    'Current Depth': '当前深度',
    'Current per Point"': '当前每点',
    'Current Multiplier': '当前倍数',
    'Prestige Multipliers': '声望倍数',
    'Enhanced Global Multipliers': '增强全局倍数',
    'Enhanced Multi-Enhancers': '增强多重增强',
    'Enhanced Occupation Multipliers': '增强职业乘数',
    'Enhanced Stacking Power': '增强堆叠能力',
    'now': '现在',
    'Next Multiplier': '下一个倍数',
    'maxOfflineHours / 4': '最大离线时长 / 4',
    'Mechanics': '机械学',
    'Time Based Multipliers': '基于时间的倍数',
    'Ascension Upgrade Locked': '转生升级未解锁',
    'Applies a permanent multiplier that affects output of all occupations. Upgrades increase multiplier at an exponential rate.': '应用影响所有职业输出的永久乘数。 升级以指数速率增加乘数。',
    'Amount of available ascension points. Each unspent AP adds a global 10% production boost. Click to open ascension upgrades panel.': '可用转生点的数量。 每个未使用的转生点都会使全局产量提高10％。 单击以打开转生升级面板。',
    'Reward cards earned from Milestones grant various rewards to help you progress faster through the game. Cards are reset upon ascension and must be earned again throughout the next run.': '从里程碑中获得的奖励卡可以提供各种奖励，帮助你在游戏中更快地进步。卡牌在提升时被重置，可以在下一轮游戏中再次获得。',
    'Milestones are progress checkpoints that grant reward cards for completing. Milestones are reset upon ascension and must be earned again throughout the next run.': '里程碑是进度检查点，能够为完成任务的玩家提供奖励卡片。里程碑在转生时重置，可以在下一轮游戏中再次获得。',
    'Prestiges reset progress in an area and in return give a bonus. There are multiple levels of prestige: Minor Prestiges, Major Prestiges, and Ascension. Each offers it’s own perks for completing, with each deeper prestige layer granting bigger and better bonuses.': '声望重置某个区域的进度，给予奖励作为回报。 声望有多个级别：次要声望，主要声望和转生。 每个人都提供自己的特权来完成，每个更深的声望层都可以提供更大更好的奖金。',
    'As you progress through the game, you will unlock additional resources in each of the occupations. Each resource produces the resource above it at the end of it’s production cycle. For example, the second resource in the Survival occupation Fruit produces Water at the end of every producion cycle. The same concept is applied throughout all resources as you unlock them.': '随着游戏的进行，您将在每个职业中解锁更多资源。 在生产周期结束时，每种资源都会在其上方产生资源。 例如，生存职业水果中的第二种资源在每个生产周期结束时都会产生水。 解锁所有资源时，都会应用相同的概念。',
    'The first resource that you start off with in the Survival occupation is Water. Whenever the first resource in any occupation (like Water) completes a production cycle, that occupation’s primary resource is increased.': '您在生存职业中首先要使用的资源是水。 每当任何职业中的第一个资源（例如水）完成生产周期时，该职业的主要资源都会增加。',
    'Resources are the production units of occupations. Each occupation has it’s own set of resources that produce that occupation’s primary resource.': '资源是职业的生产单位。 每个职业都有自己的资源集，这些资源可以产生该职业的主要资源。',
    'The purpose of this section is to highlight some of the key concepts of the game and to give a general overview of how the game works. After understanding these key concepts, you should have enough knowledge of the game mechanics to play and then learn the rest as you go.': '本节的目的是强调游戏的一些关键概念，并概述游戏的工作原理。 在理解了这些关键概念之后，您应该具有足够的游戏机制知识，可以玩游戏，然后在进行过程中学习其余知识。',
    'In order to get in-depth knowledge on any of these topics, visit their specific categories using the left hand menu.': '为了深入了解这些主题中的任何一个，请使用左侧菜单访问它们的特定类别。',
    'Occupations are the main driving force of progress in the game. The goal is to earn as much of each occupation’s primary resource as possible. There are 5 occupations: Survival, Property, Assets, Science, and Tech. The game starts off with only one occupation unlocked, Survival. Other occupations are unlocked as you progress through the early game.': '职业是游戏进步的主要动力。 目标是尽可能赚取每个职业的主要资源。 有5种职业：生存，不动产，资产，科学和技术。 游戏开始时只有一个职业（生存）被解锁。 随着您在早期游戏中的进展，其他职业也会被解锁。',
    'if you’re interested in getting involved. Also, I am always available and love to receive feedback, criticism, and suggestions for the game!': '如果您有兴趣参与。 另外，我一直都很乐意接受您的反馈，批评和建议！',
    'I am a solo developer with a passion for idle/incremental games. I have been playing them for around a decade and have always wanted to build one. I finally made the decision to build my first game ever and chose to build an incremental game. Currently, I am the only one who has designed and developed the game. I will be on the lookout for others to get involved in the further development of this game, especially a graphic designer.': '我是一个对放置/增量游戏充满热情的独立开发人员。 我已经玩了大约十年了，并且一直想打造一个。 我最终决定建立自己的第一款游戏，然后选择制作增量游戏。 目前，我是唯一设计和开发游戏的人。 我将寻找其他人参与这个游戏的进一步开发，尤其是图形设计师。',
    'You have a reward spin available!': '您有一个轮盘奖励可用！',
    'Results': '结果',
    'Cost': '成本',
    'Confirmation Toggles': '确认切换',
    'Leave Feedback': '留下反馈',
    'Survival Speed': '生存速度',
    'Suggestions': '意见建议',
    'Vegetables Resource': '蔬菜资源',
    'Account': '账号',
    'Go back to the main menu to manage and/or switch saves and manage your account. The game auto-saves every 60 seconds.': '返回主菜单以管理/或切换存档和管理您的帐户。 游戏每60秒自动保存一次。',
    'RP Earned': '获得的RP',
    'RP Spent': '花掉的RP',
    'Science Occupation': '科学职业',
    'Assets Occupation': '资产职业',
    'Spend wisely. 😄': '明智地使用它. 😄',
    'Attention!': '请注意!',
    'The following information is important.': '以下信息很重要。',
    'if you ascend now. The more major prestige points you earn in an ascension run, the more AP you will earn upon ascension.': '如果您现在转生。 您在转生中获得的主要声望点越多，转生时您将获得的 转生点 越多。',
    'which can be spent on various upgrades including automation, multipliers, and other great bonuses that will enhance your progression and experience. You will earn': '可以用于各种升级，包括自动化，倍增器和其他可提升您的进度和体验的重大奖励。 你会获得',
    'When you ascend, you will start over from the beginning without your completed milestones, earned cards, minor prestiges, and major prestiges. In return, you earn Ascension Points': '当您转生时，您将从头开始，失去所有 已完成的里程碑，获得的卡片，次要声望和主要声望。 作为回报，您将获得转生点',
    'Your first ascension point will grant a 5x multiplier. Every time you reach a new magnitude of 10 AP (10, 100, 1000, etc.), you will receive an additional 5x multiplier. Unspent AP each add a global 10% production boost.': '您的第一个 转生点 将给你带来5倍的乘数。 每次达到10 转生点（10、100、1000等）的新幅度时，您将获得一个额外的5倍乘数。 每个未使用的 转生点 都会使全局产量提高10％。',
    '10% speed boost to available resources': '可用资源速度提高10％',
    'Minor prestiges reset a single occupation back to zero and grant a larger bonus with each prestige.': '次要声望会将单个职业重置为零，并为每个声望授予更大的奖励。',
    'Your 5 minutes 5x global output multiplier has been saved. It can be activated under the Reward History tab.': '您的5分钟5倍全局输出乘倍数已保存。 可以在“历史奖励”选项卡下激活它。',

    //原样
    'Mixed Scientific': '混合科学',
    'Standard': '标准',
    'Scientific Notation': '科学计数法',
    'Welcome!': '欢迎!',
    'Create Account': '创建账号',
    'Do not warn me about this in the future': '以后不要警告我',
    'Login': '登录',
    'Login or create an account to save to the cloud.': '登录或创建一个帐户以保存到云。',
    'No, thanks': '不，谢谢',
    'Warning!': '警告！',
    'You are normally logged into an account, but you are not logged in now. Would you like to login?': '通常您已登录帐户，但现在尚未登录。 你想登录吗？',
    'It looks like this is your first time playing. Import a save from another device or go ahead and\n\t\t\t\t\tclick the Start New Game button to get started. If you have games\n\t\t\t\t\tsaved to an account, login and your saves will load.': '看来这是您第一次玩。 从其他设备导入保存，或继续并\n\t\t\t\t\t单击“开始新游戏”按钮开始使用。 如果您有游戏\n\t\t\t\t\t\t已登录到某个帐户，请登录并保存您的保存。',
    'Forgot Password': '忘记密码',
    'Create an account': '创建一个账号',
    'Password': '密码',
    'Remember Me': '记住我',
    'Successfully logged in!': '登录成功！',
    '<strong>We\'re sorry, but Idle Momentum doesn\'t work properly without JavaScript enabled. Please enable it to continue.</strong>': '<strong>很抱歉，如果不启用JavaScript，则动量放置无法正常工作。 请启用它以继续。</strong>',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    ": ": "： ",
    " ": "",
    "Resource ": "资源 ",
    "Upgrade: ": "升级: ",
    "Buy:": "购买:",
    "Buy": "购买",
    "Can't afford (": "买不起 (",
    "Major Prestige Progress (": "主要声望进度 (",
    "Purchase ": "购买 ",
    "Purchased:": "已购买:",
    "Total:": "总计:",
    "Total Cards:": "卡片总计:",
    "Available Spins: ": "可旋转次数：",
    "Version ": "版本 ",
    "Total Spins:": "累计旋转:",
    "Rewards: ": "奖励: ",
    "Your next spin is in": "距离你的下一次旋转还有",
    "2x Upgrade:": "2x 升级:",
    "Current Version:": "当前版本:",
    "Ascension Points:": "转生点:",
    "Ascension upgrade": "转生升级",
    "Level ": "等级 ",
    "Next Boost:": "下一个提升:",
    "Ascension Boost Progress (": "转生提升进度 (",
    "Max-All": "全部最大",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    " ": " ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^([\d\.]+)$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)T$/,
    /^([\d\.]+)Qa$/,
    /^([\d\.]+)Sx$/,
    /^([\d\.]+)Dc$/,
    /^([\d\.]+)No$/,
    /^([\d\.]+)Oc$/,
    /^([\d\.]+)Qi$/,
    /^([\d\.]+)Sp$/,
    /^([\d\.]+)UDc$/,
    /^([\d\.]+)SpDc$/,
    /^([\d\.]+)TDc$/,
    /^([\d\.]+)DDc$/,
    /^ ([\d\.]+)K \(([\d\.]+)x$/,
    /^ ([\d\.]+)K \(([\d\.]+)Sx$/,
    /^ ([\d\.]+)K \(([\d\.]+)UDc$/,
    /^ ([\d\.]+)M \(([\d\.]+)Sx$/,
    /^(\d+)\-(\d+)$/,
    /^Fixed a (.+)$/,
    /^v(\d+).(\d+).(\d+) \- (.+)$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^Reach (.+) Assets Minor Prestige$/, '达到 $1 资产次要声望'],
    [/^Reach (.+) Assets Minor Prestiges$/, '达到 $1 资产次要声望'],
    [/^Reach (.+) Science Minor Prestige$/, '达到 $1 科学次要声望'],
    [/^Reach (.+) Science Minor Prestiges$/, '达到 $1 科学次要声望'],
    [/^Reach (.+) Survival Minor Prestiges$/, '达到 $1 生存次要声望'],
    [/^Reach (.+) Survival Minor Prestige$/, '达到 $1 生存次要声望'],
    [/^Reach (.+) Property Minor Prestiges$/, '达到 $1 不动产次要声望'],
    [/^Reach (.+) Property Minor Prestige$/, '达到 $1 不动产次要声望'],
    [/^Reach (.+) Survival Minor Prestiges$/, '达到 $1 生存次要声望'],
    [/^Reach (.+) Survival Minor Prestige$/, '达到 $1 生存次要声望'],
    [/^Reach (.+) Tech Minor Prestiges$/, '达到 $1 技术次要声望'],
    [/^Unlock Cost: (.+) AP$/, '解锁费用：$1 AP'],
    [/^Come back in (.+) to spin again.$/, '在 $1 之后回来再次旋转。'],
    [/^(.+)5x Global Output Multiplier for 5 minutes(.+)$/, '5分钟的5倍全局输出倍数'],
    [/^(.+)Global Output Multiplier(.+)$/, '全局输出倍数'],
    [/^(\d+) minute (\d+) seconds$/, '$1 分 $2 秒'],
    [/^(\d+) minutes$/, '$1 分'],
    [/^(\d+)x multiplier to available resources$/, '可用资源倍数 x$1'],
    [/^You have (\d+) milestone reward available to claim$/, '您有 $1 个里程碑奖励可收集'],
    [/^You have (\d+) milestone rewards available to claim$/, '您有 $1 个里程碑奖励可收集'],
    [/^(\d+) hr (\d+) min (\d+) sec$/, '$1 小时 $2 分 $3 秒'],
    [/^(\d+) min (\d+) sec$/, '$1 分 $2 秒'],
    [/^Cost: (.+) AP$/, '成本：$1 转生点'],
    [/^(\d+)s$/, '$1 秒'],
    [/^([\d\.]+) resources$/, '$1 资源'],
    [/^([\d\.]+)\% AP$/, '$1\% 转生点'],
    [/^([\d\.]+) AP$/, '$1 转生点'],
    [/^([\d\.]+) hrs$/, '$1 小时'],
    [/^([\d\.]+) min$/, '$1 分钟'],
    [/^([\d\.]+) sec$/, '$1 秒'],
    [/^Reach (.+) AP to unlock$/, '达到 $1 转生点可解锁'],
    [/^(\d+)m (\d+)s$/, '$1 分 $2 秒'],
    [/^Ascend for (.+) AP$/, '转生以获得 $1 转生点'],
    [/^Thu (\d+)$/, '周四 $1'],
    [/^Fri (\d+)$/, '周五 $1'],
    [/^Sat (\d+)$/, '周六 $1'],
    [/^Adds a production multiplier to occupations that grows exponentially \n(.+)based on the total time in the current major prestige. Increasing \n(.+)the level of this upgrade increases the rate of growth.$/, '将生产乘数添加到根据当前主要声望中的总时间成指数增长的职业。升级级别的提高会提高增长率。'],
    [/^Adds a production multiplier to occupations that grows exponentially \n(.+)based on the total time in the current minor prestige. Increasing \n(.+)the level of this upgrade increases the rate of growth.$/, '将生产乘数添加到根据当前次级声望中的总时间成指数增长的职业。升级级别的提高会提高增长率。'],
    [/^By default, occupation multipliers only affect the first resource in \n(.+)each occupation. This upgrade increases the number of resources occupation \n(.+)multipliers affect from all occupation multiplier sources.$/, '默认情况下， 职业乘数只影响每个 职业中的第一个资源。此升级将增加所有职业乘数源影响的资源的职业乘数。'],
    [/^Adds a global multiplier based on the total amount of AP spent. \n(.+)The total multiplier is combined additively based on the total combined\n(.+)spent AP.$/, '基于堆叠功率和基础乘数级别对资源应用永久堆叠乘数。资源的乘数可以用公式来计算\n'],
    [/^Applies a permanent stacking speed boost to resources based on the \n(.+)stacking power and base multiplier levels. The speed boost for a resource can be \n(.+)calculated with the formula: \n(.+)$/, '基于堆叠能力和基础乘数等级对资源施加永久堆叠速度提升。资源的速度提升可以通过以下公式计算:\n'],
    [/^Applies a permanent stacking multiplier to resources based on the \n(.+)stacking power and base multiplier levels. The multiplier for a resource can be \n(.+)calculated with the formula: \n(.+)$/, '基于堆叠能力和基础乘数等级对资源施加永久堆叠乘数。资源的乘数可以用公式\n来计算'],

]);

//2.采集新词
//20190320@JAR

var CNITEM_DEBUG = 0;
function cnItemByTag(text, itemgroup, node, textori){
	for (let i in itemgroup){
		if (i[0] == '.') { //匹配节点及其父节点的class
			let current_node = node;
			while (current_node){
				if ( current_node.classList && current_node.classList.contains(i.substr(1)) ){
					return itemgroup[i];
				}
				else if( current_node.parentElement && current_node.parentElement != document.documentElement ) {
					current_node = current_node.parentElement;
				}
				else {
					break;
				}
			}
		}
		else if (i[0] == '#'){ //匹配节点及其父节点的id
			let current_node = node;
			while (current_node){
				if ( current_node.id == i.substr(1) ){
					return itemgroup[i];
				}
				else if( current_node.parentElement && current_node.parentElement != document.documentElement ) {
					current_node = current_node.parentElement;
				}
				else {
					break;
				}
			}
		}
		else if (i[0] == '$'){	//执行document.querySelector
			if (document.querySelector(i.substr(1)) != null){
				return itemgroup[i];
			}
		}
		else if (i[0] == '*'){	//搜索原始文本
			if ( textori.includes(i.substr(1)) ){
				return itemgroup[i];
			}
		}
		// and more ...
		else{
			CNITEM_DEBUG && console.log({text, itemgroup, dsc:"不识别的标签" + i})
		}
	}
	return null;
}

//2.采集新词
//20190320@JAR  rewrite by 麦子
var cnItem = function (text, node) {

    if (typeof (text) != "string")
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
        if (typeof(cnItems[i]) == "string" && (text == i || text == cnItems[i])){
			return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
		} else if ( typeof(cnItems[i]) == "object" && text == i ){
			let result = cnItemByTag(i, cnItems[i], node, textori);
			if (result != null){
				return text_prefix + result + text_reg_exclude_postfix + text_postfix;
			} else {
				CNITEM_DEBUG && console.log({text:i, cnitem:cnItems[i], node});
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
            function (a, b) {
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

! function () {
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
    let observer = new MutationObserver(function (e) {
        //window.beforeTransTime = performance.now();
        observer.disconnect();
        for (let mutation of e) {
            if (mutation.target.nodeName === "SCRIPT"|| mutation.target.nodeName === "STYLE" || mutation.target.nodeName === "TEXTAREA") continue;
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
}();
