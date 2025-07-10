// ==UserScript==
// @name         Fair Game 简中汉化脚本
// @namespace    https://www.g8hh.com.cn/
// @version      0.0.8
// @description  网页游戏 Fair Game (https://fair.kaliburg.de/) 的简体中文汉化脚本。Simplified Chinese i18n script for web game Fair Game.
// @author       好阳光的小锅巴 & 麦子
// @copyright    锅巴汉化
// @contributionUR    https://gityx.com/donate/intro.html
// @icon         https://fair.kaliburg.de/favicon.ico
// @license      MIT
// @include      *https://fair.kaliburg.de*
// @grant        none
// @website      https://www.gityx.com/
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/iqrpg-chs.user.js
// ==/UserScript==
/**
 * ---------------------------
 * Time: 2025/06/09 10:08
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
    "Message length:": "消息长度:",
    "[citation needed]": "[来源请求]",
    "Account": "账户",
    "DEF": "默认",
    "Fair": "公平",
    "Game": "游戏",
    "Grapes": "葡萄",
    "Open Main Menu": "打开主菜单",
    "Points": "点数",
    "Round:": "回合:",
    "Rules": "规则",
    "Send": "发送",
    "Username": "用户名",
    "Mystery Guest": "神秘游客",
    "Mysterious Guest": "神秘游客",
    "Back": "返回",
    "E-Mail:": "邮箱:",
    "Edit": "编辑",
    "Tip": "提示",
    "Try to collect a lot of power while staying on low position. Then shoot up the ranks, while carrying your power/sec through multi + bias instead of your position.": "尽量收集大量的能量，同时保持在低位置。然后迅速提升排名，同时通过乘数+天赋而不是你的位置来携带你的能量/秒。",
    "Account:": "账号:",
    "Buy Autopromote": "购买自动晋升",
    "Change Password": "修改密码",
    "Apply": "确认",
    "Power": "能量",
    "Logout": "登出",
    "Ladder:": "天梯:",
    "Chat": "聊天",
    "Hide inactive rankers:": "隐藏不活跃的排名：",
    "Hide promoted rankers:": "隐藏晋升的排名：",
    "Hide vinegar and grape count:": "隐藏醋和葡萄数量：",
    "Play sound on promotion:": "晋级时播放音效：",
    "Play sound on mention:": "被@提到时播放音效：",
    "Play sound on reaching first:": "达到第一时播放音效：",
    "Select Theme:": "选择主题:",
    "Show XX Ranker Above:": "在上面显示XX排名：",
    "Show XX Ranker Below:": "在下面显示XX排名：",
    "Show XX Bottom Ranker:": "显示下面XX排名：",
    "Show XX Top Ranker:": "显示上面XX排名：",
    "Sound": "声音",
    "Themes": "主题",
    "General": "常规",
    "Enable Chat": "启用聊天",
    "Enable Ladder": "启用天梯",
    "Next": "下一个",
    "The farm that propels you to AH is the good one.": "",
    "The goal is to reach rank 1 on this ladder and promote to the next.": "目标是在这个天梯中达到第1名，并晋级到下一个天梯。",
    "Show All Ranker:": "显示全部排名：",
    "Show asshole-points subsection:": "展示混蛋点数小节：",
    "Goal of Ladder": "天梯目标",
    "Goal of Game": "游戏天梯",
    "Once you reach the last Ladder, you can \"be an asshole\" and reset the round for everyone, gaining prestige.": "一旦你到达最后一个天梯，你就可以“成为一个混蛋”，重置每个人的回合，获得声望。",
    "Done": "完成",
    "Escaping this ladder is not as easy, since you can get shot down by your competition. The reason is needing to wait for 30sec on rank 1.": "逃离这个天梯并不容易，因为你可能会被竞争对手击败。原因是当你排名第一时需要等待30秒。",
    "Sabotage": "妨碍",
    "To shoot someone down or prevent getting shot down, you need grapes. You can get these by either being in last place or getting passed by another Ranker.": "为了击落某人或防止被击落，你需要葡萄。你可以通过成为最后一名或被其他排名者超越来获得这些。",
    "AutoPromote": "自动晋升",
    "AutoPromote Costs": "自动晋升成本",
    "If you want skip the 30sec wait window and promotes once you reach rank 1 you can buy autopromote with hard-earned grapes.": "如果你想跳过30秒的等待窗口，当你达到1级时，你可以用辛苦赚来的葡萄购买自动晋升。",
    "The further down you are the less the autopromote costs, so try to buy before starting the final climb.": "你的位置越低，自动晋升的成本就越低，所以尽量在开始最后的攀升之前购买。",
    "Power-Gain": "能量增益",
    "Promote @": "晋升 @",
    "Shielded": "护盾",
    "Vinegar": "醋",
    "Vinegar Settings": "醋设置",
    "Vinegar-Throws:": "醋-扔：",
    "Login": "登录",
    "Play as Guest": "以游客身份进行游戏",
    "Don't have an account?": "还没有账号？",
    "Forgot Password?": "忘记密码？",
    "Forgot Password": "忘记密码",
    "Password:": "密码:",
    "Remember me:": "记住我:",
    "Signup": "注册",
    "Submit": "提交",
    "Got a token already?": "已经有一个令牌了？",
    "Please enter your email below to receive a password reset token.": "请在下面输入您的电子邮件以接收密码重置令牌。",
    "Already have an account?": "已经有一个账号了？",
    "and": "和",
    "By continuing, you are setting up a FairGame account (or logging in to your current one) and agree to our": "通过继续，您正在设置一个公平游戏帐户（或登录到您当前的一个），并同意我们的",
    "Privacy Policy.": "隐私政策。",
    "New Password:": "新密码:",
    "Repeat Password:": "重复密码:",
    "Token:": "令牌:",
    "Please look into your inbox and copy the token into the input below. Then choose a new password.": "请查看您的收件箱并将令牌复制到下面的输入中。然后选择一个新密码。",
    "Email needs to be a valid email address": "电子邮箱必须是一个有效的电子邮件地址",
    "Import UUID": "导入 UUID",
    "Continue": "继续",
    "Are you sure you want to continue? (You can link your account to an email later on)": "你确定要继续吗？（稍后您可以将您的帐户与电子邮件链接）",
    "To enhance your account experience, we recommend linking your existing UUID. By doing so, you can seamlessly continue using your current account with all its features. As a guest, your access is limited, and there is a higher risk of encountering malicious scripts or losing your progress.": "为了增强您的帐户体验，我们建议链接您现有的UUID。通过这样做，您可以无缝地继续使用当前帐户的所有功能。作为访客，您的访问权限是有限的，并且遇到恶意脚本或丢失进度的风险更高。",
    "Failed to import your UUID!": "导入UUID失败！",
    "Invalid username or password": "无效的用户名或密码",
    "Tutorials": "教程",
    "Skip Tutorials": "跳过教程",
    "Reset Tutorials": "重置教程",
    "Privacy Policy": "隐私政策",
    "Wine/Vinegar Split:": "酒/醋分配：",
    "(Active)": "(活跃)",
    "Export UUID": "导出 UUID",
    "Link Account to Email": "链接账户到邮箱",
    "Please enter your email and your password below to link your guest account to an email.": "请在下面输入您的电子邮箱和密码，将您的游客账户与电子邮件连接。",
    "Another use of Grapes is to generate side-products such as vinegar and wine. You can set the split in the grapes-settings menu.": "葡萄的另一个用途是生产副产品，如醋和葡萄酒。你可以在葡萄设置菜单中设置分配。",
    "Split Grapes": "分配葡萄",
    "When you have enough vinegar you can throw between 25% - 100% of your current Vinegar.": "当你有足够的醋时，你可以扔掉25% - 100%的醋。",
    "Wine": "酒",
    "Throwing Vinegar": "扔醋",
    "Wine is a 1 time shield, that's active when you have more wine than vinegar. The overflow hits the vinegar of the target.": "葡萄酒是一个一次盾牌，当你的葡萄酒比醋多时，它会被激活。溢出击中目标的醋。",
    "Refunds": "退还",
    "When either wine or vinegar hit 0 you get for each of them 25% of your vinegar from before the throw back (up to 25%, which is the minimum amount of vinegar you need to throw)": "当葡萄酒或醋中的任何一种达到0时，你可以从扔回之前得到25%的醋（最高可达25%，这是你需要扔回的醋的最低数量）",
    "Finishing a ladder in the Top 10 also rewards Grapes/Vinegar/AutoPromotes.": "完成前10名的天梯也会奖励 葡萄/醋/自动晋升。",
    "Top10": "前10",
    "Balance": "平衡",
    "Need to keep a balance on Vinegar/Wine & Grapes while climbing faster than the others.": "需要在醋/葡萄酒和葡萄上保持平衡，同时比其他人攀升得更快。",
    "Good Luck": "祝你好运",
    "Good Luck competing with your fellow Rankers and don't forget to check out our wiki or discord. <3": "祝你在与其他排名者的竞争中好运，不要忘记查看我们的wiki或discord。<3",
    "1. First Steps": "1. 第一步",
    "2. Upgrades": "2. 升级",
    "3. Climbing the Ladder": "3. 攀升天梯",
    "4. Grapes & AutoPromote": "4. 葡萄 & 自动晋升",
    "5. Vinegar & Wine": "5. 醋 & 酒",
    "6. Good Luck": "6. 祝你好运",
    "Welcome": "欢迎",
    "Welcome to the FairGame-Tutorial!": "欢迎来到 公平游戏 教程！",
    "Help": "帮助",
    "If you are ever stuck you can always check this tutorial again or ask in chad.": "如果你被卡住了，你可以再次查看本教程或在聊天里面询问。",
    "These are your Points, you get a number of Points/sec based on your Power.": "这些是你的点数，你每秒钟得到的点数是基于你的能量。",
    "This is your Power, you get a number of Power/sec based on how low you rank.": "这是你的能量，你将根据你的等级得到一定数量的能量/秒。",
    "Bias": "天赋",
    "You can increase your power/sec by 1, by resetting all your points and buying 1 bias.": "你可以通过重置你所有的点数和购买1个天赋来增加你的能量/秒。",
    "Users": "用户",
    "Time": "时间",
    "Amount": "数量",
    "Show Throw-Log": "显示扔醋日志",
    "Percentage Thrown:": "扔出百分比:",
    "Save Split": "保存分配",
    "SMALL": "小",
    "Stay Shielded": "保持护盾",
    "Position": "位置",
    "Position is based on Points. If you overtake someone else's points you raise one rank.": "位置以点数为基础。如果你超过了别人的点数，你将提升一个等级。",
    "Power/sec Formula": "能量/秒 公式",
    "You gain power based on the formula": "你根据公式获得能量",
    "power/sec = multi * (bias + rank - 1)": "能量/秒 = 乘数 * (天赋 + 排名 - 1)",
    "Multi": "乘数",
    "Best way to increase power/sec is to multi, which also resets all bias/power/points.": "增加 能量/秒 的最佳方法是乘数，这也重置了所有的 天赋/能量/点数。",
    "Expensive: Multi and bias purchases are more expensive on this ladder.": "昂贵：在这个天梯，乘数和天赋购买更昂贵。",
    "Free Auto: Auto-promote is automatically gifted to all rankers on this ladder.": "免费自动：在这个天梯自动晋升是自动授予给所有排名的。",
    "Default: Nothing special at all.": "默认：没有什么特别的。",
    "Small: This ladder is shorter than usual.": "小：这个天梯比平常要短。",
    "FAUTO": "免费自动",
    "EXPSV": "昂贵",
    "Lock Buttons": "锁定按钮",
    "Add": "添加",
    "Color the bias/multi:": "天赋/乘数颜色：",
    "ETA Colors:": "预计时间 颜色:",
    "Follow own ranker:": "关注自己的排名：",
    "Ignored rankers (by ranker id):": "忽略排名（按排名id）：",
    "Off": "关",
    "Ladder": "天梯",
    "Lock Buttons:": "锁定按钮:",
    "Show bias/multi for ranker:": "显示排名者 天赋/乘数：",
    "Show ETA to top/ranker:": "显示 登顶/排名者 预计时间：",
    "Show power-gain for ranker:": "显示排名的能量增益：",
    "Subscribed mentions:": "订阅提及：",
    "Upload Custom Theme:": "上传自定义主题：",
    "GLOBAL": "全局",
    "If you have any questions, ideas, want to stay up to date to the latest updates or simply just want to chat with your\nfellow rankers, without having Chad listening, you can join us on our": "如果你有任何问题，想法，想要跟上最新的更新，或者只是想和你的排名伙伴聊天，没有查德听，你可以加入我们的",
    "I appreciate everyone that's part of this amazing community. Thank you and have a grape!": "我感谢这个神奇社区的每一个人。谢谢你，吃颗葡萄吧！",
    "You can also talk to a moderator about it:": "你也可以和版主讨论：",
    "Please follow the rules below to keep things fair and comfy:": "请遵守以下规则，以保持公平和舒适：",
    "The game is in testing phase; we ask that you report any bugs found and are not abusing them.": "游戏正处于测试阶段；我们要求您报告发现的任何错误，并且不要滥用它们。",
    "A basic measure of respect, regarding the users of this server, is necessary.": "对于这个服务器的用户来说，基本的尊重度量是必要的。",
    "We don't allow promotion and/or advertisement unless the explicitly permitted.": "除非得到明确许可，否则我们不允许促销和/或广告。",
    "We don't tolerate any form of racism, homophobia, transphobia and/or any hostile statements toward LGBTQ+.": "我们不容忍任何形式的种族主义、同性恋恐惧症、变性恐惧症和/或任何对LGBTQ+的敌意言论。",
    "This server is for all age-groups, so all pornographic and/or NSFL content is forbidden.": "此服务器适用于所有年龄组，因此禁止所有色情和/或NSFL内容。",
    "Please keep the chat in english and the usernames interpretable.": "请使用英文聊天，保证用户名可翻译。",
    "Don't use any malicious and/or automating scripts.": "不要使用任何恶意和/或自动化脚本。",
    "Don't use multiple accounts during the same round.": "不要在同一回合使用多个账户。",
    "No posting of uuids, emails, passwords and/or sensitive data.": "禁止发布uuid、电子邮件、密码和/或敏感数据。",
    "Griefing is prohibited; repeatedly and intentionally making the game worse for everybody else can lead to a warning\nand ban.": "禁止恶意破坏;反复地故意地让游戏变得更糟，可能会导致警告和封号。",
    "All members of the community are expected to comply with official requests from moderators. If you think any mod is\nmisusing their power please write @kaliburg a message on discord.": "社区的所有成员都应该遵守版主的官方要求。如果你认为任何mod都在滥用他们的权力，请给@kaliburg留言。",
    "SHORT": "短",
    "Short: Fewer ladders": "短：天梯榜更少",
    "The throw was completely absorbed by the target's shield.": "投掷完全被目标的护盾吸收。",
    "The throw broke through the target's shield and depleted all of their vinegar. (Refunds 25%)": "投掷突破了目标的护盾，耗尽了他们所有的醋。(退还25%)",
    "The target had no shield, but the throw would have been enough to deplete both their vinegar and wine. (Refunds 25%)": "目标没有护盾，但这一掷足以耗尽他们的醋和酒。(退还25%)",
    "Promote": "晋升",
    "BIG": "大",
    "Big: This ladder is longer than usual.": "大：这个天梯比平常要长。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "ETA -> You": "预计时间 -> 你",

    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
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
    "Base Points for Promotion: ": "基础晋升点数: ",
    "Active Rankers: ": "活跃排名：",
    "Ladders: ": "天梯: ",
    "Points for Promotion: ": "晋升点数：",
    "Power [M: x": "能量 [乘数: x",
    "Strength: ": "强度: ",
    "Current: ": "当前: ",
    "Notification volume: ": "通知音量：",
    "ETA -> L": "预计时间 -> 天梯",
    "": "",
    "": "",
    "": "",
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
    /^周(.+)$/,
    /^\@(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)M\/$/,
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
    /^([\d\.,]+)\/$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^\#([\d\.,]+)$/,
    /^ \#([\d\.,]+)$/,
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
    [/^\((.+)\%\) (.+) Vinegar$/, '\($1\%\) $2 醋'],
    [/^\((.+)\%\) (.+) x Vinegar\/s$/, '\($1\%\) $2 x 醋\/秒'],
    [/^\[B: \+([\d\.]+)\] (.+)\/$/, '\[天赋: \+$1 $2\/'],
    [/^Welcome to the game (.+)! o\/ If you want to join the \"walling\" be sure to not buy auto promote!$/, '欢迎来到游戏 ￥1! o/ 如果你想加入“墙”一定不要购买自动晋升！'],
    [/^Throw (.+) Vinegar$/, '扔 $1 醋'],
    [/^Threw (.+) of their Vinegar$/, '扔了他们 $1 的醋'],
    [/^Throw (.+) Vinegar (.+)$/, '扔 $1 醋 $2'],
    [/^(.+) Wine\/s \((.+)\%\)$/, '$1 酒\/秒 \($2\%\)'],
    [/^(.+) threw (.+) vinegar at you!$/, '$1 向你扔了 $2 醋'],
    [/^Points \((.+)\%\) \((.+)\)$/, '点数 ($1\%) ($2)'],
    [/^. They are the (.+) lucky initiate for the (.+) big ritual.$/, '。他们是第 $2 大祭典的第 $1 位幸运入会者。'],
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
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\(\+([\d\.,]+)\/s\)$/, '(\+$1\/秒)'],
    [/^\+([\d\.,]+) Bias$/, '\+$1 天赋'],
    [/^\+([\d\.,]+) Multi$/, '\+$1 乘数'],
    [/^\+B \(([\d\.,]+)s\)$/, '\+天赋 \($1秒\)'],
    [/^\+M \(([\d\.,]+)s\)$/, '\+乘数 \($1秒\)'],
    [/^\+M \(([\d\.,]+):([\d\.,]+)\)$/, '\+乘数 \($1:$2\)'],
    [/^\+B \(([\d\.,]+):([\d\.,]+)\)$/, '\+天赋 \($1:$2\)'],
    [/^\) (.+) Wine$/, '\) $1 酒'],
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