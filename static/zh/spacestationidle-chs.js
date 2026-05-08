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
    "Be Asshole": "做个混蛋",
    "Export": "导出",
    "Discord": "Discord",
    "Changelog": "更新日志",
    "Change Name": "修改名称",
    "Game": "游戏",
    "Grapes": "葡萄",
    "Help": "帮助",
    "Import": "导入",
    "Infinity": "无限",
    "[DEFAULT]": "[默认]",
    "More Fair Game": "更公平的游戏",
    "Options": "选项",
    "Points": "点数",
    "Power": "力量",
    "Send": "发送",
    "Username": "用户名",
    "About": "关于",
    "AI Core": "AI核心",
    "Arrival Lounge": "到达休息室",
    "As long as you keep hitting your enemy, they'll go sideways eventually.": "只要你不断地击中你的敌人，他们最终就会横着走。",
    "Biohazard Outbreak": "生化危机爆发",
    "Bloodsworn Cultists": "血誓教徒",
    "BOSSES": "BOSS",
    "Bosses?": "老板们？",
    "Botany": "植物学",
    "Bridge": "桥",
    "Brutal Security": "残酷的安全",
    "Cargo": "货物",
    "Chronosphere": "计时圈",
    "Combat": "战斗",
    "COMBAT FOCUS": "战斗重点",
    "Combat Focus?": "战斗焦点？",
    "Command": "命令",
    "Completion": "完成",
    "Damage": "损害",
    "Damage Types?": "伤害类型？",
    "Delicious Holiday Hallway": "美味的假日走廊",
    "DISMISS": "解雇",
    "Dorms 4": "4号宿舍",
    "Enemies?": "敌人？",
    "Engineering": "工程",
    "EQUIPMENT": "设备",
    "Equipment?": "设备？",
    "Evasion": "逃避",
    "Fight!": "斗争！",
    "FOOD": "食物",
    "Fred Best the Head of Security says...": "安全主管 Fred Best 说……",
    "Graytiding": "灰潮",
    "Head of Personnel Line": "人事线负责人",
    "Health?": "健康？",
    "Inventory": "存货",
    "It doesn't matter if you're up against the": "不管你是否反对",
    "Jobs": "工作",
    "Kills Remaining": "剩余杀戮",
    "Kitchen": "厨房",
    "Legality?": "合法性？",
    "LOCKED": "未解锁",
    "Loot?": "抢劫？",
    "Maintenance": "维护",
    "Massive Eldritch Abomination": "巨大的可憎憎恶",
    "Medical": "医疗的",
    "Melee Power": "近战力量",
    "Mining": "采矿",
    "Mouse": "鼠",
    "No food": "没有食物",
    "or a": "或一个",
    "Other": "其他",
    "Player": "播放器",
    "Precision": "精确",
    "Primordial Planet": "原始星球",
    "Ranged Power": "远程功率",
    "Reward": "报酬",
    "Robotics": "机器人技术",
    "Robustness Range": "稳健性范围",
    "Robustness?": "鲁棒性？",
    "Rogue Nanotrasen Team": "Rogue Nanotrasen 团队",
    "Science": "科学",
    "Settings": "设置",
    "Showroom": "陈列室",
    "SS13 Idle": "空间站13放置",
    "Stats?": "状态？",
    "Syndicate Nuclear Assault Team": "辛迪加核突击队",
    "Tear in the Fabric of Reality": "撕裂现实的结构",
    "Tiniest Mouse": "最小的鼠标",
    "Toggle Skill Progress": "切换技能进度",
    "Type": "类型",
    "Validhunting": "有效狩猎",
    "Validhunting Target": "有效狩猎目标",
    "Validhunting?": "有效狩猎？",
    "View Loot": "查看战利品",
    "Virology": "病毒学",
    "Wizard Federation 'Diplomats'": "巫师联盟“外交官”",
    "Worker Strike": "工人罢工",
    "XP": "经验值",
    "You": "你",
    "Export your save to keep your data backed up and earn 30 extra minutes in your Time Bank.": "导出您的存档以备份您的数据，并在您的时间银行中额外赚取 30 分钟。",
    "OK": "确定",
    "TOTAL TIME AVAILABLE": "可用总时间",
    "Welcome Back!": "欢迎回来！",
    "You've earned an Export Bonus!": "您获得了一个导出奖励！",
    "Your time offline has been converted for use at the": "您的离线时间已转换为可用于",
    "????? the Guy In The Locker Next To Yours says...": "？？？ 你隔壁储物柜里的那个人说……",
    "Xenobiology Mastery Cloak": "异种生物学精通披风",
    "x2 tier 1 slime yield": "x2 级 1 史莱姆产量",
    "A lightweight device that can teleport fired bullets back into your gun. It will make every 5th bullet free.": "一种轻型设备，可以将发射的子弹传送回您的枪中。它将使每 5 个子弹免费。",
    "A prize from Nanotrasen for stopping some internal problems, contains even more problems!": "Nanotrasen 奖励解决一些内部问题，其中包含更多问题！",
    "Add Second Botany Tray": "添加第二个植物托盘",
    "Advanced Fry Cooking": "高级油炸烹饪",
    "Allows food to automatically be consumed when missing more health than the food's heal amount.": "当失去的生命值超过食物的治疗量时，允许自动食用食物。",
    "Allows you to raise slimes that can fight alongside you": "允许您饲养可以与您并肩作战的史莱姆",
    "Allows you to reroll your validhunting bounty +1 time per successful bounty.": "允许您重新滚动您的有效狩猎赏金 + 1 小时每成功的赏金。",
    "Allows you to Research tasks for other jobs and Develop facewear and job-boosting TOOLs": "允许您研究其他工作的任务并开发面罩和促进工作的工具",
    "Allows you to sacrifice health for dark runes and minions": "允许你为黑暗符文和仆从牺牲生命值",
    "Allows you to shape meat into regenerative armor": "允许您将肉塑造成再生盔甲",
    "Allows you to spend 20 special Telecrystals to kickstart your progression": "允许你花费 20 个特殊的 Telecrystals 来启动你的进程",
    "Allows you to spend money for minerals and guns": "允许您花钱购买矿物和枪支",
    "Allows you to turn energy into job-boosting CHEMs and combat-boosting pills": "允许您将能量转化为促进工作的化学物质和增强战斗力的药丸",
    "Allows you to turn junk into weapons and armor": "允许您将垃圾变成武器和盔甲",
    "Allows you to turn meat and produce into quality foods": "让您将肉类和农产品转化为优质食品",
    "Allows you to turn power, slimes, and ore into delicious drinks": "允许您将能量、史莱姆和矿石变成美味的饮料",
    "Allows you to turn raw minerals into ranged weapons and exosuits": "允许您将原始矿物转化为远程武器和外装",
    "Ammo Reclaimer": "弹药回收器",
    "Are you here to order something, or to join the resistance?": "你是来订购东西的，还是加入抵抗运动的？",
    "Bank Value": "银行价值",
    "Bartending Mastery Tie": "调酒精通领带",
    "Book on Rationing": "配给书",
    "Botany Mastery Cloak": "植物学大师披风",
    "Brick Carr the Quartermaster says...": "军需官布里克·卡尔说……",
    "Buy Hacking Tools": "购买黑客工具",
    "Buy Well-Laid Plans": "购买精心设计的计划",
    "Capes?": "斗篷？",
    "Chemistry Mastery Cloak": "化学精通披风",
    "Christmas In July. I hope you asked for hats. Collect all 12!": "七月的圣诞节。我希望你要帽子。收集所有 12 个！",
    "Cloak of the True Master": "真主斗篷",
    "Clothes Vendo-Matic": "衣服 Vendo-Matic",
    "Combat Learning Tier I": "战斗学习第一层",
    "Combat Upgrades": "战斗升级",
    "Cooking Mastery Cloak": "烹饪大师披风",
    "Each consecutive tinkering craft of the same item increases future crafting speeds by 3%. This effect caps at 25": "同一物品的每个连续修补工艺都会使未来的制作速度提高 3%。此效果上限为 25",
    "Each level of this upgrade raises your maximum research points banked by 100.": "此升级的每个级别都会将您的最大研究点数提高 100。",
    "Each unique drink in your inventory increases bartending speed by 4%. This effect caps at 5 unique drinks": "您库存中的每种独特饮品都会使调酒速度提高 4%。这种效果限制在 5 种独特的饮料",
    "Engineering Mastery Cloak": "工程学精通披风",
    "Everything needed to run an effecient internal security organization. Pre-dyed red to help cover those pesky blood stains.": "运行一个高效的内部安全组织所需的一切。预先染成红色，以帮助遮盖那些讨厌的血迹。",
    "Expand Drink Table": "扩大饮料表",
    "Expand Inventory Size": "扩大库存规模",
    "Expand Points Bank": "扩大积分银行",
    "Extended Looting Tier I": "扩展掠夺等级 I",
    "Fabrication Mastery Cloak": "制造精通披风",
    "For all your botany needs.": "满足您所有的植物学需求。",
    "Gamble-O-Tron": "Gamble-O-Tron",
    "Gambling?": "赌博？",
    "Handcrafted materials and relics aquired from the local planetary natives.": "从当地行星原住民那里获得的手工材料和遗物。",
    "Hat Crate": "帽子箱",
    "Hat Crate, Winter Edition": "帽子箱，冬季版",
    "I... I can hear you out there. You... you're not a cop, right?": "我...我能听到你的声音。你……你不是警察，对吧？",
    "If you avert your eyes from the sigils and just reach into the pod you can escape mostly intact.": "如果您将视线从印记上移开并伸入吊舱内，您几乎可以完好无损地逃脱。",
    "Improve Cable Management": "改善电缆管理",
    "Increases engineering XP by +15": "工程经验增加 +15",
    "Increases mining speed by +15": "采矿速度提高 +15",
    "Increases the chance you cook a premium quality item by 15": "将您烹饪优质物品的几率提高 15",
    "Increases the number of items you can hold from 10 to 11.": "将您可以持有的物品数量从 10 增加到 11。",
    "Increases the number of loot drop slots from 16 to 32.": "将战利品掉落槽的数量从 16 个增加到 32 个。",
    "Increases the percentage of combat skill experience you get from damage you deal by 8.5%.": "使你从造成的伤害中获得的战斗技能经验百分比提高 8.5%。",
    "Inventory Expansion": "库存扩张",
    "Inventory?": "存货？",
    "Job Unlocks": "工作解锁",
    "Job Upgrades": "工作升级",
    "Job Upgrades?": "工作升级？",
    "Local Heritage Crate": "当地遗产箱",
    "Magical Crate": "魔法箱子",
    "Master of the Tides Cloak": "潮汐大师披风",
    "MegaSeed Servitor": "超级种子仆从",
    "Mining Mastery Cloak": "采矿精通披风",
    "Nanotrasen can send the supplies YOU need directly to your location with this state of the art drop pod.": "Nanotrasen 可以使用这种最先进的吊舱将您需要的用品直接发送到您的位置。",
    "Nanotrasen Droppod": "Nanotrasen Droppod",
    "New Jobs?": "新工作？",
    "No Key Required. Hats can not be refunded for scrap. Collect all 15!": "无需密钥。帽子不能作为废品退还。收集所有 15 个！",
    "Only the truly elite can handle this.": "只有真正的精英才能处理这个问题。",
    "R&D Mastery Pocket Protector": "研发精通袖珍保护套",
    "Reduces fabrication ore costs to 90": "将制造矿石成本降低到 90",
    "Reduces graytiding failure rate by 6": "将灰阶失败率降低 6",
    "Reduces the time it takes to synthesize bases by  15": "将合成碱基所需的时间减少 15",
    "Requires": "需要",
    "Requires max Bartending to wear.": "需要最大调酒师才能穿。",
    "Requires max Botany to wear.": "需要最高级 植物学 才能佩戴。",
    "Requires max Chemistry to wear.": "需要最大化学物质才能穿。",
    "Requires max Cooking to wear.": "需要最大烹饪才能穿。",
    "Requires max Engineering to wear.": "需要最大工程才能佩戴。",
    "Requires max Fabrication to wear.": "需要最大制造才能佩戴。",
    "Requires max Graytiding to wear.": "需要最大的 灰潮 才能穿。",
    "Requires max Mining to wear.": "需要最大采矿才能穿。",
    "Requires max R&D to wear.": "需要最大的研发才能穿。",
    "Requires max Tinkering to wear.": "需要最大修补才能佩戴。",
    "Requires max Validhunting to wear.": "需要最大 有效狩猎 才能佩戴。",
    "Requires max Xenobiology to wear.": "需要最大 异种生物学 才能佩戴。",
    "Resistance?": "反抗？",
    "Revolution Supply Cache": "革命供应缓存",
    "Runed Ruined Droppod": "符文 被破坏的 吊舱",
    "Running with knives might not always make you faster, but you'll look cool and edgy.": "用刀跑步可能并不总是能让你更快，但你会看起来很酷和前卫。",
    "Security Crate": "安全箱",
    "Seeds?": "种子？",
    "Sort Bank": "整理银行",
    "Space Used": "使用空间",
    "Supply Droppod": "供应吊舱",
    "Syndicate Droppod": "辛迪加 Droppod",
    "Syndicate forces have hijacked the droppod system to help you be the murderer you always knew you could be.": "辛迪加部队劫持了 吊舱 系统，以帮助您成为您一直知道自己可能成为的凶手。",
    "Teaches you the art of eating only the parts of food that you need. Food has a 5% chance to not be consumed when eaten.": "教你只吃你需要的食物部分的艺术。食物在食用时有 5% 的几率不被食用。",
    "That's a relief. Can you do me a favor and uh... don't mention me to anyone else. OK?": "那是一种解脱。你能帮我一个忙，呃...不要向其他人提及我。好的？",
    "This magical vending machine is just too arcane to use. It looks like it has a slot to put scrolls in?": "这台神奇的自动售货机太神秘了，无法使用。好像有个可以放卷轴的槽？",
    "Tinkering Mastery Cloak": "修补精通披风",
    "Unlock ???": "开锁 ？？？",
    "Unlock Auto-Eat": "解锁自动进食",
    "Unlock Bartending": "解锁调酒",
    "Unlock Cargonia": "解锁卡戈尼亚",
    "Unlock Changeling": "解锁幻形灵",
    "Unlock Chemistry": "解锁化学",
    "Unlock Cooking": "解锁烹饪",
    "Unlock Cult": "解锁邪教",
    "Unlock Fabrication": "解锁制造",
    "Unlock R&D": "解锁研发",
    "Unlock Tinkering": "解锁修补",
    "Unlock Traitor": "解锁叛徒",
    "Unlock Xenobiology": "解锁异种生物学",
    "Upgrade Chem Dispenser": "升级化学分配器",
    "Upgrade Matter Bins": "升级事项箱",
    "Upgrade Mining Tools": "升级挖矿工具",
    "Upgrade Xenobiology Pens": "升级异种生物学笔",
    "Validhunter Mastery Cloak": "有效猎人精通披风",
    "View Chain": "查看链",
    "View Odds": "查看赔率",
    "Weapon Crate": "武器箱",
    "Welcome to Cargonia!": "欢迎来到卡戈尼亚！",
    "Whenever you grow a plant, also grow the plant to the left as well": "每当你种植植物时，也要在左边种植植物",
    "Workers fighting for equal pay have stashed supplies for the next time they inevitably need them. Finders Keepers.": "争取同工同酬的工人们已经为下一次他们不可避免地需要它们而藏匿了物资。发现者守护者。",
    ". I can't have these tools falling into the wrong hands.": ". 我不能让这些工具落入坏人之手。",
    "at some point; it's the only place you'll find any hats!": "在某种程度上；这是你唯一能找到帽子的地方！",
    "At the very least, you should pick up a": "至少，你应该拿起一个",
    "Back": "返回",
    "Botanist": "植物学家",
    "Cape": "岬",
    "Capes": "斗篷",
    "Combat Expertise": "战斗专长",
    "for a given job.": "对于给定的工作。",
    "for that job, but I don't know if I believe that.": "为那份工作，但我不知道我是否相信。",
    "For the right price, I might be able to get you equipped to do your job more efficiently": "以合适的价格，我或许可以让你更有效率地完成工作",
    "I can sell you more, but with the storage on this station being so limited I'll have to charge you more for each extra slot.": "我可以卖给你更多，但由于这个站的存储空间非常有限，我将不得不为每个额外的插槽向你收取更多费用。",
    "I can't just sell this to anyone though. You'll need to demonstrate that you're experienced in that job first.": "我不能只是把这个卖给任何人。您首先需要证明您在该工作中具有丰富的经验。",
    "I've heard rumors that these": "我听说过这些",
    "In fact, for the fancier equipment I'll also need you to prove your": "事实上，对于更高级的设备，我还需要你证明你的",
    "Inventory Space": "库存空间",
    "Nevermind then. Forget you heard anything.": "没关系。忘记你听到了什么。",
    "Of course, that won't stop me from selling them to you.": "当然，这不会阻止我把它们卖给你。",
    "Once you've demonstrated your mastery, I'll be able to order you a": "一旦你证明了你的精通，我就可以为你订购一个",
    "Order them in bulk, and I'll give you a discount.": "批量订购，我会给你折扣。",
    "Running low on": "运行不足",
    "To be honest with you, I don't even know what's in some of these crates.": "老实说，我什至不知道这些板条箱里装的是什么。",
    "Unfortunately, recent budgetary restrictions have left us without the proper equipment to support certain": "不幸的是，最近的预算限制使我们没有适当的设备来支持某些",
    "Upgrade": "升级",
    "will work as an extra": "将作为额外的工作",
    "With your generous contributions, we could get these departments back up and running at full capacity.": "有了您的慷慨捐助，我们可以让这些部门恢复并满负荷运转。",
    "without any seeds.": "没有任何种子。",
    "You don't know about the resistance?": "你不知道抗性吗？",
    "You won't make it very far as a": "你不会走得很远",
    "If you don't keep your stuff safe, someone might just snatch it up and hide themselves in a locker before you can track them down.": "如果您不妥善保管您的物品，那么有人可能会在您找到它们之前将其抢走并藏在储物柜中。",
    "If you want more space, the guys down at": "如果你想要更多的空间，伙计们在",
    "might be able to help you out.": "也许可以帮助你。",
    "off some of the items you no longer care about.": "关闭一些您不再关心的项目。",
    "Otherwise, you can just": "否则，您可以",
    "Sell": "出售",
    "There's a lot of valuables out on the station.": "车站里有很多贵重物品。",
    "if you even want to attempt it. Try asking": "如果你甚至想尝试它。试问",
    "If you get caught, our friends at": "如果你被抓住了，我们的朋友在",
    "ILL-ADVISED": "不明智的",
    "into active combat situations while \"cleaning\" and take what you need. This is super dangerous though, so be extra cautious.": "在“清洁”的同时进入积极的战斗情况并拿走你需要的东西。不过这是超级危险的，所以要格外小心。",
    "it is that you want to mine.": "那是你想要我的。",
    "it to bring out even more flavor.": "它带出更多的味道。",
    "It's not a job; it's an art.": "这不是一份工作；这是一门艺术。",
    "It's such a good disguise that you can": "这是一个很好的伪装，你可以",
    "Janitor": "看门人",
    "job.": "工作。",
    "Junk": "垃圾",
    "Kyle Spier-Swenson the Station Engineer says...": "车站工程师凯尔·斯皮尔-斯文森说……",
    "Lathius Talram the Shaft Miner says...": "竖井矿工拉修斯·塔拉姆说……",
    "LEVEL": "等级",
    "level raises, you'll be assigned more": "等级提升，你会被分配更多",
    "level will enable you to buy powerful": "级别将使您购买强大的",
    "Lexia Black the Assistant says...": "助理 Lexia Black 说……",
    "may call it theft, but others recognize it for the art it is as": "可能称之为盗窃，但其他人认为它是艺术",
    "Maybe you can find some use for it with a bit of": "也许你可以找到一些用处",
    "might turn it into": "可能会变成",
    "Mine": "矿山",
    "MINE": "矿山",
    "Mining?": "采矿？",
    "Money": "钱",
    "Most of the": "大部分的",
    "No food items available.": "没有可用的食物。",
    "No time to chat. Have to get down there and": "没时间聊天。必须到那里去",
    "Now, I also get to grow cool": "现在，我也变得很酷",
    "Of course, you're probably going to need to build some experience up before you go after some of the": "当然，您可能需要积累一些经验，然后再进行一些",
    "Oh, and be on the look out for": "哦，请注意",
    "on your tail.": "在你的尾巴上。",
    "Once you kill enough of these": "一旦你杀了足够多的这些",
    "One more thing, if you don't already have one, you should consider picking up an": "还有一件事，如果你还没有，你应该考虑拿起一个",
    "or something. I think they're shut down right now until someone orders supplies for it from": "或者其他的东西。我认为他们现在正在关闭，直到有人从",
    "Ore": "矿石",
    "Ore?": "矿石？",
    "Outside of keeping all of our vital systems running, I guess the \"scientists\" down in": "除了保持我们所有重要系统的运行之外，我猜“科学家”在",
    "Plant": "植物",
    "Plants": "植物",
    "Plants?": "植物？",
    "Potato": "土豆",
    "real": "真实的",
    "RENEWABLE": "可再生",
    "Research": "研究",
    "RESOURCE-CONSUMING": "资源消耗",
    "Risk?": "风险？",
    "Robust": "强大的",
    "Sand": "真的",
    "Security": "安全",
    "Shitcurity": "狗屁",
    "Shoes": "鞋",
    "Slip": "发布",
    "So how do we close the gap? It's simple; we just take what we need from the other departments for ourselves.": "那么我们如何缩小差距呢？这很简单;我们只是从其他部门获取我们需要的东西。",
    "some": "一些",
    "Some": "一些",
    "Some may say": "有人可能会说",
    "Stat": "状态",
    "Stationary Bicycle": "固定式自行车",
    "target.": "目标。",
    "Thanks to science, you can grow any type of": "多亏了科学，你可以种植任何类型的",
    "These": "论文",
    "They say you are what you eat.": "他们说你就是你吃的东西。",
    "TIER 1": "十个 1",
    "Tinkering": "修修补补",
    "to keep your": "保留你的",
    "to make": "两个配偶",
    "up.": "向上。",
    "Upgraded": "升级版",
    "Us assistants, or \"Grayshirts\", don't have the privilege of departmental funding.": "我们的助理或“灰衫军”没有获得部门资助的特权。",
    "use it for their toys, and the": "将其用于他们的玩具，并且",
    "use it to synthesize their drugs.": "用它来合成他们的药物。",
    "USES": "利用",
    "Uses For Power?": "用于电源？",
    "Vein": "静脉",
    "Weapons": "武器",
    "What we're doing here may not exactly be legal in the eyes of the law.": "在法律看来，我们在这里所做的可能并不完全合法。",
    "What, you're still here?": "什么，你还在吗？",
    "What's it used for? You sure do ask a lot of questions.": "它是干什么用的？你肯定会问很多问题。",
    "When you're under pressure, you'll probably only be able to snag some": "当你有压力时，你可能只能抓到一些",
    "While I prefer my produce": "虽然我更喜欢我的产品",
    "While people are very alert to Graytiders, they are completely blind to the humble": "虽然人们对灰潮人非常警觉，但他们对卑微的人完全视而不见",
    "will be improved or lowered.": "将得到改善或降低。",
    "will be sure to teach you a lesson.": "一定会给你一个教训。",
    "Yeah,": "是的，",
    "You want to know how to make": "你想知道如何制作",
    "you'll grow here can be eaten to restore your": "你会在这里长大 可以吃来恢复你的",
    "you're raiding.": "你在突袭。",
    "you're using, you'll find that some of your": "你正在使用，你会发现你的一些",
    ", I don't really care.": "，我真的不在乎。",
    ", I had a crippling addiction to space weed.": "，我对太空杂草有一种严重的瘾。",
    ", you can also": "， 你也可以",
    ", you name it.": "，你的名字。",
    ", you'll be able to turn in that task to gain a large amount of": "，您将能够上交该任务以获得大量",
    ". isn't a": ".不是",
    ". Not much else to mine.": ".没有什么其他可我的了。",
    ". They're especially rare.": ".它们特别罕见。",
    "'s real easy, kid. Just go down there and click on whatever": "真的很简单，孩子。去那里然后点击任何东西",
    "\"CLEANING\"": "\“打扫\”",
    "\"Cleaning\"?": "\“打扫\”？",
    "\"Graytiding\"": "\"灰度化\"",
    "\"Graytiding\"?": "“灰潮”？",
    "\"Validhunting\"": "\"有效狩猎\"",
    "75% chance to fail and lose 5 health": "75% 的几率失败并失去 5 点生命值",
    "A trained, 130 IQ STEM major engineer like myself can make power from just about anything": "像我这样训练有素的 130 IQ STEM 主要工程师几乎可以从任何东西中获取能量",
    "After a few seconds, you should have have yourself some fully processed": "几秒钟后，你应该让自己完成一些处理",
    "Alternatively,": "或者，",
    "and": "精神",
    "and you can order some, assuming you have the": "你可以订购一些，假设你有",
    "And you know what? They're right.": "你知道吗？他们是对的。",
    "Are you dense? We're on a space station and you don't even know what": "你稠密吗？我们在空间站 你甚至不知道什么",
    "At any point, you'll have a task to take out specific": "在任何时候，你都会有一项任务要拿出特定的",
    "au naturel": "自然的",
    "Auto-Eat Upgrade": "自动吃升级",
    "Before I became a": "在我成为一名",
    "before you'll find": "在你发现之前",
    "Beginners should get started by pounding some": "初学者应该先敲一些",
    "Best to stock up on some": "最好囤一些",
    "Beyond that, what you'll find will really depend on the": "除此之外，你会发现什么将取决于",
    "BOOST": "促进",
    "can be sold straight for": "可以直接卖",
    "can do?": "可以做",
    "can help you there.": "可以帮助你。",
    "Cargo Bay": "货舱",
    "Cash": "现金",
    "changes will be applied just by having the": "更改将仅通过具有",
    "Chemicals": "化学品",
    "Chemists": "化学家",
    "Combat Stats": "战斗数据",
    "Cook": "厨师",
    "Cooking": "烹饪",
    "Daisy Holmes the Botanist says...": "植物学家黛西·福尔摩斯说……",
    "Department": "部门",
    "Depending on the": "取决于",
    "Don't really know. And as long as my tools are getting": "真不知道。只要我的工具得到",
    "ELECTRIFY": "通电",
    "Enemies": "敌人",
    "equipped, even if you aren't eating it. Crazy, huh?": "装备，即使你不吃它。疯了吧？",
    "experience and be assigned a new task.": "体验并被分配新的任务。",
    "Fabrication": "制造",
    "fancier stuff": "更花哨的东西",
    "food": "食物",
    "Food": "食物",
    "For a smooth-brain like yourself? Maybe the stationary bicycle is more your speed.": "对于像你这样的大脑光滑的人？也许固定自行车更适合你的速度。",
    "for some.": "对于一些。",
    "from": "虔诚的",
    "from just a single type of Seed.": "来自单一类型的种子。",
    "from your": "从你的",
    "Galoshes": "套鞋",
    "Generating Power?": "发电？",
    "GIVES": "给定",
    "Glass": "玻璃",
    "Gloves": "手套",
    "GRAYTIDE": "灰色时间",
    "Graytiders": "灰色时代",
    "GRAYTIDING": "灰色新闻",
    "GROW": "生长",
    "have been able to disguise themselves as janitorial staff.": "已经能够伪装成清洁人员。",
    "Having a high": "有一个高",
    "Head down to": "低头到",
    "Health": "健康",
    "Hmm? Oh no I wasn't sleeping, I was just... resting my eyes.": "嗯？哦，不，我没有睡觉，我只是……让我的眼睛休息。",
    "However, as your": "然而，作为你的",
    "I could lend you my disguise, but you'll absolutely need some": "我可以借给你我的伪装，但你绝对需要一些",
    "I think those purple-shirts down at": "我想那些紫色衬衫在",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    //原样
    "v0.1.24-b49a4a4": "v0.1.24-b49a4a4",
    "Gityx": "Gityx",
    'ID': 'ID',
    'h': 'h',
    'm': 'm',
    'v1.4.2': 'v1.4.2',
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
    "\n           ": "\n           ",
    "\n          ": "\n          ",
    "\n         ": "\n         ",
    "\n        ": "\n        ",
    " ": "",
    "↓  ": "↓  ",
    "Active Rankers: ": "活跃排名者：",
    "Round Base Point Requirement: ": "回合基础点数要求：",
    "Ladder Base Point Requirement: ": "天梯基础点数要求：",
    "Ladder: ": "天梯：",
    "Message length: ": "消息长度",
    "Round: ": "回合：",
    "Attack Speed: ": "攻击速度：",
    "Move Speed: ": "移动速度：",
    "ROBUSTNESS: ": "坚固性：",
    "Plant seeds x": "植物种子 x",
    "LEVEL ": "等级 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Norkos Dungeon -": "诺科斯地牢-",
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
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)\:(\d+)\:(\d+)$/,
    /^(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)T$/,
    /^(.+) PM$/,
    /^(.+) PM$/,
    /^(.+) AM$/,
    /^欢迎 (.+) 来到 放置大陆！$/,
    /^\[(\d+),(\d+)\]$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^ \#([\d\.,]+)$/,
    /^\#([\d\.,]+)$/,
    /^([\d\.,]+)$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \[\+([\d\.,]+) x([\d\.,]+)\]$/,
    /^([\d\.,]+)M \[\+([\d\.,]+) x([\d\.,]+)\]$/,
    /^([\d\.,]+)B \[\+([\d\.,]+) x([\d\.,]+)\]$/,
    /^([\d\.,]+)K \[\+([\d\.,]+) x([\d\.,]+)\]$/,
    /^([\d\.,]+)T \[\+([\d\.,]+) x([\d\.,]+)\]$/,
    /^([\d\.,]+)\-([\d\.,]+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
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
    [/^Current\:(.+) \/ Next\: (.+)$/, '当前\: $1 \/ 下一个\: $2'],
    [/^spent (.+) gold here!$/, '在这里花了 $1 金币！'],
    [/^(\d+) Scroll\(s$/, '$1 卷轴'],
    [/^Promote at (.+) Points (.+)$/, '距离提升还有 $1 点数 $2'],
    [/^For all your botany needs. (.+) discount!$/, '满足您所有的植物学需求。 $1 折扣！'],
    [/^(\d+) hours$/, '$1 小时'],
    [/^(\d+) Multi$/, '$1 乘数'],
    [/^(\d+) Bias$/, '$1 偏见'],
    [/^(\d+) command bonus$/, '$1 命令奖励'],
    [/^lvl(\d+)$/, '等级$1'],
    [/^(\d+) Validhunting Reroll$/, '$1 有效狩猎重掷'],
    [/^The Rat \#(\d+) attacked you(.+) for (.+) damage.$/, '老鼠 \#$1 攻击你 $2 造成 $3 点伤害。'],
    [/^The Snake \#(\d+) attacked you(.+) for (.+) damage.$/, '蛇 \#$1 攻击你 $2 造成 $3 点伤害。'],
    [/^The Rat \#(\d+)\'s attack is puny and did no damage to you.$/, '老鼠 \#$1 的攻击很微弱，对你没有任何伤害。'],
    [/^The Snake \#(\d+)\'s attack is puny and did no damage to you.$/, '蛇 \#$1 的攻击很微弱，对你没有任何伤害。'],
    [/^You attacked the Rat \#(.+) for (.+) damage.$/, '你攻击了 老鼠 \#$1 造成 $2 点伤害。'],
    [/^You attacked the Snake \#(.+) for (.+) damage.$/, '你攻击了 蛇 \#$1 造成 $2 点伤害。'],
    [/^You regenerated health at a rate of (.+) health\/second, you now have (.+) health.$/, '你以 $1 生命值\/秒的速度恢复生命值，现在你有 $2 生命值。'],
    [/^You encountered a Rat \#(\d+) and Snake \#(\d+)!$/, '你遇到了 老鼠 \#$1 和 蛇 \#$2！'],
    [/^You encountered a Rat \#(\d+)!$/, '你遇到了 老鼠 \#$1！'],
    [/^You killed the Rat \#(\d+)!$/, '你杀死了 老鼠 \#$1！'],
    [/^You killed the Snake \#(\d+)!$/, '你杀死了 蛇 \#$1！'],
    [/^Your attack is puny and did no damage to the Snake \#(\d+).$/, '你的攻击是微不足道的，并没有对 蛇 \#$1 造成伤害。'],
    [/^Your attack is puny and did no damage to the Rat \#(\d+).$/, '你的攻击是微不足道的，并没有对 老鼠 \#$1 造成伤害。'],
    [/^Time spent in zone: (.+) minutes, (.+) seconds$/, '在区域中花费的时间：$1 分 $2 秒'],
    [/^Touched (\d+) times$/, '触碰 $1 次'],
    [/^CON \+(\d+)$/, '体质 \+$1'],
    [/^HP \+(\d+)$/, '生命值 \+$1'],
    [/^INT \+(\d+)$/, '智力 \+$1'],
    [/^STR \+(\d+)$/, '力量 \+$1'],
    [/^GOLD \+(\d+)$/, '金币 \+$1'],
    [/^You have (.+) ILP$/, '你有 $1 ILP'],
    [/^Buy for (.+) gold$/, '购买需要 $1 金币'],
    [/^(.+) chance for...$/, '$1 的几率...'],
    [/^(.+) has (.+) stamina$/, '$1 有 $2 耐力'],
    [/^Your next upgrade costs (.+) ILP. Total upgrades\: (.+).$/, '您的下一次升级费用为 $1 ILP。 升级总数：$2。'],
    [/^You are a level (\d+)\/(\d+) Generalist. Your adventure will begin in Norkos.$/, '您是一个$1\/$2级的全能玩家。 您的冒险之旅将在诺科斯开始。'],
    [/^Generalize \((\d+) Stamina$/, '一般化 \($1 耐力'],
    [/^Current\: (\d+) ILP \/ Next\: (\d+) ILP$/, '当前\: $1 ILP / 下一个\: $2 ILP'],
    [/^Current\: (\d+)q \/ Next\: (\d+)q$/, '当前\: $1q / 下一个\: $2q'],
    [/^Current\: (.+)s \/ Next\: (.+)s$/, '当前\: $1s / 下一个\: $2s'],
    [/^Current\: (\d+) Lv. \/ Next\: (\d+) Lv.$/, '当前\: $1 级 / 下一个\: $2 级'],
    [/^Current\: (.+)\% \/ Next\: (.+)$/, '当前\: $1\% \/ 下一个\: $2'],
    [/^You can make a guild for (.+) gold.$/, '您可以花费 $1 金币建立1个公会。'],
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
