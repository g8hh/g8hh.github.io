// ==UserScript==
// @name         Matter of Scale 汉化补全
// @name:en      Matter of Scale zh-CN Completion
// @namespace    workbuddy.i18n
// @version      1.2.0
// @description  补全 Matter of Scale（g8hh）尚未汉化的游戏内容：建筑、层级、货币、研究/目标/成就/升级句式、管理者分配、原生对话框等
// @author       WorkBuddy
// @match        https://matter-of-scale.g8hh.com.cn/*
// @match        http://matter-of-scale.g8hh.com.cn/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  var DATA = {
 "items": {
  "Bloodhound": "猎犬",
  "Spearman": "枪兵",
  "Archer": "弓箭手",
  "Tracker": "追踪者",
  "Woodsman": "樵夫",
  "Pathfinder": "探路者",
  "Scout": "侦察兵",
  "Trapper": "诱捕者",
  "Wellspring": "水井",
  "River": "河流",
  "Shepherd": "牧羊人",
  "Sheepdog": "牧羊犬",
  "Fence-Maker": "栅栏制造者",
  "Wolf-hunter": "猎狼人",
  "Farmhand": "农场工人",
  "Shearer": "剪毛工",
  "Carver": "雕刻家",
  "Smoker": "熏制工",
  "Roaster": "烘烤师",
  "Breeder": "饲养员",
  "Digger": "挖掘工",
  "River Guide": "河道向导",
  "Bridge Builder": "桥梁建造者",
  "Baker": "面包师",
  "Heater": "加热器",
  "Shaper": "塑造者",
  "Trailblazer": "开拓者",
  "Mixer": "搅拌机",
  "Sculptor": "雕塑家",
  "Mason": "泥瓦匠",
  "Coal Miner": "煤矿工人",
  "Cart Mover": "推车工",
  "Tracklayer": "铺轨工人",
  "Foreman": "领班",
  "Prospector": "勘探者",
  "Blacksmith": "铁匠",
  "Ironmonger": "五金商人",
  "Smithy": "铁匠铺",
  "Smelter": "冶炼工",
  "Ironworks": "钢铁厂",
  "Recruiter": "招募人员",
  "Weaponsmith": "武器匠",
  "Armorsmith": "盔甲匠",
  "Fletcher": "造箭匠",
  "Sergeant": "中士",
  "Propagandist": "宣传者",
  "Major": "少校",
  "Logician": "逻辑学家",
  "Major Major Major": "Major Major Major 少校",
  "General": "将军",
  "Panner": "淘金者",
  "Tool salesman": "工具销售员",
  "Money Changer": "货币兑换商",
  "Trader": "交易员",
  "Goldforge": "黄金熔炉",
  "Goldsmith": "金匠",
  "Designer": "设计师",
  "Gem Cutter": "宝石切割师",
  "Jeweler": "珠宝商",
  "Banker": "银行家",
  "Engineer": "工程师",
  "Coal Plant": "燃煤电厂",
  "Oil Plant": "燃油电厂",
  "Wire Extruder": "金属拉丝机",
  "Powerline": "输电线路",
  "Utility Worker": "公用事业工人",
  "Solar Fields": "太阳能电场",
  "Solar Tower": "太阳能塔",
  "Nuclear Plant": "核电站",
  "Fusion Plant": "聚变电站",
  "Sailor": "水手",
  "Shipwright": "造船师",
  "Captain": "船长",
  "Navigator": "领航员",
  "Commandant": "指挥官",
  "Admiral": "海军上将",
  "Canal": "运河",
  "Drydock": "干船坞",
  "Wetdock": "湿船坞",
  "Worker": "工人",
  "Repairman": "修理工",
  "Conveyor": "传送带",
  "Manager": "经理",
  "Break Room": "休息室",
  "Machinist": "机械师",
  "Toolsmith": "工具匠",
  "Robot": "机器人",
  "Automation": "自动化装置",
  "Air Conditioner": "空调",
  "Intern": "实习生",
  "Undergraduate": "本科生",
  "Graduate": "研究生",
  "Postgraduate": "博士生",
  "Biologist": "生物学家",
  "Chemist": "化学家",
  "Physicist": "物理学家",
  "Mathematician": "数学家",
  "University": "大学",
  "Research Grants": "科研经费",
  "Astronaut": "宇航员",
  "Astrophysicist": "天体物理学家",
  "Launch Center": "发射中心",
  "ROCKETS!!!": "火箭！！！",
  "Space Elevator": "太空电梯",
  "Space Station": "空间站",
  "Mass Driver": "质量加速器",
  "Bot Swarm": "机器虫群",
  "Asteroids": "小行星带",
  "Space Shipyard": "太空造船厂",
  "Theorist": "理论家",
  "Deep Field Scanner": "深空扫描仪",
  "Gravity Observatory": "引力观测台",
  "Zero Point Drive": "零点驱动器",
  "Hyperspanner": "超维扳手",
  "Sonic Screwdriver": "音波起子",
  "Negative Energy": "负能量",
  "Exotic Matter": "奇异物质",
  "Space Cutter": "空间切割机",
  "Time Theory": "时间理论",
  "Programmer": "程序员",
  "Compiler": "编译器",
  "COBOL": "COBOL",
  "C": "C",
  "C++": "C++",
  "Java": "Java",
  "D": "D",
  "JavaScript": "JavaScript",
  "Field Jammer": "力场干扰器",
  "Space Folder": "空间折叠器",
  "Tear Sealer": "裂隙封印师",
  "Schism Guide": "裂界向导",
  "Crusher": "辊式破碎机",
  "Wayfinder": "寻路者",
  "Quantum Tunnel": "量子隧道",
  "Matter Gate": "物质之门",
  "Slipstream": "滑流",
  "Traveler": "旅行者",
  "Lepton Builder": "轻子建造师",
  "Quark Font": "夸克之泉",
  "Neutrino Guide": "中微子向导",
  "Proton Decayer": "质子衰变器",
  "State Binder": "状态绑定师",
  "Force Splicer": "力场拼接器",
  "Gravity Hole": "引力洞",
  "Magrathea": "马格拉西亚",
  "Energy Shaper": "能量塑造师",
  "Reality Splitter": "现实分裂器",
  "Singularity": "奇点",
  "Netherman": "冥界人",
  "Phaseshifter": "相位移者",
  "Selfsplitter": "自分裂者",
  "Ascendant": "升腾者",
  "Transcendant": "超越者",
  "Beyonder": "越界者",
  "Starchild": "星嗣",
  "Planewalker": "位面行者",
  "Timeshifter": "时移者",
  "hamlet": "村庄",
  "Hamlet": "村庄",
  "Hamlets": "村庄",
  "village": "乡村",
  "Village": "乡村",
  "Villages": "乡村",
  "town": "城镇",
  "Town": "城镇",
  "Towns": "城镇",
  "city": "城市",
  "City": "城市",
  "Citys": "城市",
  "castle": "城堡",
  "Castle": "城堡",
  "Castles": "城堡",
  "county": "县城",
  "County": "县城",
  "Countys": "县城",
  "duchy": "公国",
  "Duchy": "公国",
  "Duchys": "公国",
  "archduchy": "大公国",
  "Archduchy": "大公国",
  "Archduchys": "大公国",
  "kingdom": "王国",
  "Kingdom": "王国",
  "Kingdoms": "王国",
  "empire": "帝国",
  "Empire": "帝国",
  "Empires": "帝国",
  "planet": "星球",
  "Planet": "星球",
  "Planets": "星球",
  "system": "系统",
  "System": "系统",
  "Systems": "系统",
  "quadrant": "象限",
  "Quadrant": "象限",
  "Quadrants": "象限",
  "galaxy": "星系",
  "Galaxy": "星系",
  "Galaxys": "星系",
  "universe": "宇宙",
  "Universe": "宇宙",
  "Universes": "宇宙",
  "multiverse": "多元宇宙",
  "Multiverse": "多元宇宙",
  "Multiverses": "多元宇宙",
  "deer": "鹿",
  "Deer": "鹿",
  "lamb": "羊",
  "Lamb": "羊",
  "brick": "砖",
  "Brick": "砖",
  "iron": "铁",
  "Iron": "铁",
  "soldier": "士兵",
  "Soldier": "士兵",
  "gold": "黄金",
  "Gold": "黄金",
  "energy": "能量",
  "Energy": "能量",
  "ship": "船只",
  "Ship": "船只",
  "machine": "机械",
  "Machine": "机械",
  "research": "研究",
  "Research": "研究",
  "starship": "星舰",
  "Starship": "星舰",
  "wormhole": "虫洞",
  "Wormhole": "虫洞",
  "software": "软件",
  "Software": "软件",
  "portal": "传送门",
  "Portal": "传送门",
  "matter": "物质",
  "Matter": "物质",
  "existence": "存在",
  "Existence": "存在",
  "Wipe": "清空",
  "Wipe all progress (unrecoverable)": "清空所有进度（不可恢复）",
  "Hi Adam": "你好 Adam",
  "Debug": "调试",
  "Unassign": "取消分配",
  "unknown": "未知",
  "Unknown": "未知",
  "N/A": "无",
  "No description here.": "暂无描述。",
  "Adam Knope": "亚当·诺普",
  "Adam Wyatt": "亚当·怀亚特",
  "Adam Trager": "亚当·特雷格",
  "Adam Haverford": "亚当·哈弗福德",
  "Adam Mitchell": "亚当·米切尔",
  "Adam Hill": "亚当·希尔",
  "Adam Smith": "亚当·史密斯",
  "Adam Jones": "亚当·琼斯",
  "Adam Boyd": "亚当·博伊德",
  "Brent Knope": "布伦特·诺普",
  "Brent Wyatt": "布伦特·怀亚特",
  "Brent Trager": "布伦特·特雷格",
  "Brent Haverford": "布伦特·哈弗福德",
  "Brent Mitchell": "布伦特·米切尔",
  "Brent Hill": "布伦特·希尔",
  "Brent Smith": "布伦特·史密斯",
  "Brent Jones": "布伦特·琼斯",
  "Brent Boyd": "布伦特·博伊德",
  "Michael Knope": "迈克尔·诺普",
  "Michael Wyatt": "迈克尔·怀亚特",
  "Michael Trager": "迈克尔·特雷格",
  "Michael Haverford": "迈克尔·哈弗福德",
  "Michael Mitchell": "迈克尔·米切尔",
  "Michael Hill": "迈克尔·希尔",
  "Michael Smith": "迈克尔·史密斯",
  "Michael Jones": "迈克尔·琼斯",
  "Michael Boyd": "迈克尔·博伊德",
  "Jim Knope": "吉姆·诺普",
  "Jim Wyatt": "吉姆·怀亚特",
  "Jim Trager": "吉姆·特雷格",
  "Jim Haverford": "吉姆·哈弗福德",
  "Jim Mitchell": "吉姆·米切尔",
  "Jim Hill": "吉姆·希尔",
  "Jim Smith": "吉姆·史密斯",
  "Jim Jones": "吉姆·琼斯",
  "Jim Boyd": "吉姆·博伊德",
  "Steve Knope": "史蒂夫·诺普",
  "Steve Wyatt": "史蒂夫·怀亚特",
  "Steve Trager": "史蒂夫·特雷格",
  "Steve Haverford": "史蒂夫·哈弗福德",
  "Steve Mitchell": "史蒂夫·米切尔",
  "Steve Hill": "史蒂夫·希尔",
  "Steve Smith": "史蒂夫·史密斯",
  "Steve Jones": "史蒂夫·琼斯",
  "Steve Boyd": "史蒂夫·博伊德",
  "Rudy Knope": "鲁迪·诺普",
  "Rudy Wyatt": "鲁迪·怀亚特",
  "Rudy Trager": "鲁迪·特雷格",
  "Rudy Haverford": "鲁迪·哈弗福德",
  "Rudy Mitchell": "鲁迪·米切尔",
  "Rudy Hill": "鲁迪·希尔",
  "Rudy Smith": "鲁迪·史密斯",
  "Rudy Jones": "鲁迪·琼斯",
  "Rudy Boyd": "鲁迪·博伊德",
  "Mitchell Knope": "米切尔·诺普",
  "Mitchell Wyatt": "米切尔·怀亚特",
  "Mitchell Trager": "米切尔·特雷格",
  "Mitchell Haverford": "米切尔·哈弗福德",
  "Mitchell Mitchell": "米切尔·米切尔",
  "Mitchell Hill": "米切尔·希尔",
  "Mitchell Smith": "米切尔·史密斯",
  "Mitchell Jones": "米切尔·琼斯",
  "Mitchell Boyd": "米切尔·博伊德",
  "Ben Knope": "本·诺普",
  "Ben Wyatt": "本·怀亚特",
  "Ben Trager": "本·特雷格",
  "Ben Haverford": "本·哈弗福德",
  "Ben Mitchell": "本·米切尔",
  "Ben Hill": "本·希尔",
  "Ben Smith": "本·史密斯",
  "Ben Jones": "本·琼斯",
  "Ben Boyd": "本·博伊德",
  "Chris Knope": "克里斯·诺普",
  "Chris Wyatt": "克里斯·怀亚特",
  "Chris Trager": "克里斯·特雷格",
  "Chris Haverford": "克里斯·哈弗福德",
  "Chris Mitchell": "克里斯·米切尔",
  "Chris Hill": "克里斯·希尔",
  "Chris Smith": "克里斯·史密斯",
  "Chris Jones": "克里斯·琼斯",
  "Chris Boyd": "克里斯·博伊德",
  "Tom Knope": "汤姆·诺普",
  "Tom Wyatt": "汤姆·怀亚特",
  "Tom Trager": "汤姆·特雷格",
  "Tom Haverford": "汤姆·哈弗福德",
  "Tom Mitchell": "汤姆·米切尔",
  "Tom Hill": "汤姆·希尔",
  "Tom Smith": "汤姆·史密斯",
  "Tom Jones": "汤姆·琼斯",
  "Tom Boyd": "汤姆·博伊德",
  "Tracy Knope": "特蕾西·诺普",
  "Tracy Wyatt": "特蕾西·怀亚特",
  "Tracy Trager": "特蕾西·特雷格",
  "Tracy Haverford": "特蕾西·哈弗福德",
  "Tracy Mitchell": "特蕾西·米切尔",
  "Tracy Hill": "特蕾西·希尔",
  "Tracy Smith": "特蕾西·史密斯",
  "Tracy Jones": "特蕾西·琼斯",
  "Tracy Boyd": "特蕾西·博伊德",
  "Sarah Knope": "萨拉·诺普",
  "Sarah Wyatt": "萨拉·怀亚特",
  "Sarah Trager": "萨拉·特雷格",
  "Sarah Haverford": "萨拉·哈弗福德",
  "Sarah Mitchell": "萨拉·米切尔",
  "Sarah Hill": "萨拉·希尔",
  "Sarah Smith": "萨拉·史密斯",
  "Sarah Jones": "萨拉·琼斯",
  "Sarah Boyd": "萨拉·博伊德",
  "Julie Knope": "朱莉·诺普",
  "Julie Wyatt": "朱莉·怀亚特",
  "Julie Trager": "朱莉·特雷格",
  "Julie Haverford": "朱莉·哈弗福德",
  "Julie Mitchell": "朱莉·米切尔",
  "Julie Hill": "朱莉·希尔",
  "Julie Smith": "朱莉·史密斯",
  "Julie Jones": "朱莉·琼斯",
  "Julie Boyd": "朱莉·博伊德",
  "Kim Knope": "金·诺普",
  "Kim Wyatt": "金·怀亚特",
  "Kim Trager": "金·特雷格",
  "Kim Haverford": "金·哈弗福德",
  "Kim Mitchell": "金·米切尔",
  "Kim Hill": "金·希尔",
  "Kim Smith": "金·史密斯",
  "Kim Jones": "金·琼斯",
  "Kim Boyd": "金·博伊德",
  "Donna Knope": "唐娜·诺普",
  "Donna Wyatt": "唐娜·怀亚特",
  "Donna Trager": "唐娜·特雷格",
  "Donna Haverford": "唐娜·哈弗福德",
  "Donna Mitchell": "唐娜·米切尔",
  "Donna Hill": "唐娜·希尔",
  "Donna Smith": "唐娜·史密斯",
  "Donna Jones": "唐娜·琼斯",
  "Donna Boyd": "唐娜·博伊德",
  "Michelle Knope": "米歇尔·诺普",
  "Michelle Wyatt": "米歇尔·怀亚特",
  "Michelle Trager": "米歇尔·特雷格",
  "Michelle Haverford": "米歇尔·哈弗福德",
  "Michelle Mitchell": "米歇尔·米切尔",
  "Michelle Hill": "米歇尔·希尔",
  "Michelle Smith": "米歇尔·史密斯",
  "Michelle Jones": "米歇尔·琼斯",
  "Michelle Boyd": "米歇尔·博伊德",
  "Leslie Knope": "莱斯利·诺普",
  "Leslie Wyatt": "莱斯利·怀亚特",
  "Leslie Trager": "莱斯利·特雷格",
  "Leslie Haverford": "莱斯利·哈弗福德",
  "Leslie Mitchell": "莱斯利·米切尔",
  "Leslie Hill": "莱斯利·希尔",
  "Leslie Smith": "莱斯利·史密斯",
  "Leslie Jones": "莱斯利·琼斯",
  "Leslie Boyd": "莱斯利·博伊德"
 },
 "override": {
  "Baker": "面包师",
  "Digger": "挖掘工",
  "River Guide": "河道向导",
  "Cart Mover": "推车工",
  "Shearer": "剪毛工",
  "Smoker": "熏制工",
  "Roaster": "烘烤师",
  "Smelter": "冶炼工",
  "Major": "少校",
  "Major Major Major": "Major Major Major 少校",
  "Doubles Baker income": "面包师 收入翻倍",
  "Doubles Digger income": "挖掘工 收入翻倍",
  "Doubles River Guide income": "河道向导 收入翻倍",
  "Doubles Cart Mover income": "推车工 收入翻倍",
  "Doubles Shearer income": "剪毛工 收入翻倍",
  "Doubles Smoker income": "熏制工 收入翻倍",
  "Doubles Roaster income": "烘烤师 收入翻倍",
  "Doubles Smelter income": "冶炼工 收入翻倍",
  "Doubles Major income": "少校 收入翻倍",
  "Doubles Major Major Major income": "Major Major Major 少校 收入翻倍",
  "Brent Wyatt": "布伦特·怀亚特",
  "Jim Mitchell": "吉姆·米切尔",
  "Jim Hill": "吉姆·希尔",
  "Rudy Hill": "鲁迪·希尔",
  "Chris Mitchell": "克里斯·米切尔",
  "Chris Jones": "克里斯·琼斯",
  "Sarah Boyd": "萨拉·博伊德",
  "Kim Haverford": "金·哈弗福德",
  "Kim Jones": "金·琼斯",
  "Donna Smith": "唐娜·史密斯",
  "Donna Boyd": "唐娜·博伊德",
  "Leslie Smith": "莱斯利·史密斯"
 },
 "prefix": {
  "Unlocks ": "解锁 "
 },
 "reg": [
  [
   "^(.+) - Build ([\\d\\.,]+(?:e[\\d\\.,]+)?) (.+)$",
   "",
   "fnBuildPrefixed"
  ],
  [
   "^(.+) - Have ([\\d\\.,]+(?:e[\\d\\.,]+)?) income from (.+)$",
   "",
   "fnIncomeFrom"
  ],
  [
   "^(.+) - Have ([\\d\\.,]+(?:e[\\d\\.,]+)?) (.+)$",
   "",
   "fnHaveCurrency"
  ],
  [
   "^(.+) - Generate ([\\d\\.,]+(?:e[\\d\\.,]+)?) (.+)$",
   "",
   "fnGenerateCurrency"
  ],
  [
   "^Have ([\\d\\.,]+(?:e[\\d\\.,]+)?) income from (.+)$",
   "",
   "fnIncomeFromBare"
  ],
  [
   "^Build ([\\d\\.,]+(?:e[\\d\\.,]+)?) (.+)$",
   "",
   "fnBuildBare"
  ],
  [
   "^\\/ sec \\(from (.+)\\) to buy (.+)$",
   "",
   "fnToBuy"
  ],
  [
   "^Autobuy (.+) cost (.+) \\(from (.+)\\)$",
   "",
   "fnAutobuyCost"
  ],
  [
   "^Doubles (.+) income$",
   "",
   "fnDoubles"
  ],
  [
   "^Unlocks (.+)$",
   "",
   "fnUnlocks"
  ],
  [
   "^(.+s) spawn with (.+) \\(from (.+)\\)$",
   "",
   "fnSpawn"
  ],
  [
   "^(.+) buildings cost (.+) \\(from (.+)\\) less$",
   "",
   "fnCost"
  ],
  [
   "^(.+) gain ([\\d\\.,]+)$",
   "",
   "fnGain"
  ],
  [
   "^(.+) ignore (.+) \\(from (.+)\\) buildings for cost$",
   "",
   "fnIgnore"
  ],
  [
   "^(.+s) generate upgrade points (.+) \\(from (.+)\\) faster$",
   "",
   "fnUpgSpd"
  ],
  [
   "^Auto-completes (.+s) after (.+) \\(from never\\) seconds$",
   "",
   "fnAutoNever"
  ],
  [
   "^Auto-completes (.+s) after (.+) \\(from (.+)\\) seconds$",
   "",
   "fnAuto"
  ],
  [
   "^(.+s) are founded after (.+) (.+) \\(from (.+)\\)$",
   "",
   "fnFounded"
  ]
 ],
 "dropRegs": [
  "^\\/ sec \\(from (.+)\\) to buy Baker$",
  "^\\/ sec \\(from (.+)\\) to buy Space Elevator$",
  "^Build (.+) Pathfinders$",
  "^Build (.+) Rivers$",
  "^Build (.+) Roasters$",
  "^Build (.+) Digger$",
  "^Build (.+) Bankers$",
  "^Build (.+) Gem Cutters$",
  "^Build (.+) Goldsmiths$",
  "^Build (.+) Jewelers$",
  "^Build (.+) Robots$",
  "^Build (.+) Solar Fieldss$",
  "^Build (.+) Sonic Screwdrivers$",
  "^Build (.+) Solar Towers$",
  "^Build (.+) Space Cutters$",
  "^Build (.+) Space Shipyards$",
  "^Build (.+) Starchilds$",
  "^Build (.+) Space Stations$",
  "^Build (.+) Admirals$",
  "^Build (.+) Air Conditioners$",
  "^Build (.+) Bot Swarms$",
  "^Build (.+) Canals$",
  "^Build (.+) Exotic Matters$",
  "^Build (.+) Force Splicers$",
  "^Build (.+) Fusion Plants$",
  "^Build (.+) Gravity Holes$",
  "^Build (.+) Magratheas$",
  "^Build (.+) Machinists$",
  "^Build (.+) Drydocks$",
  "^Build (.+) Commandants$",
  "^Build (.+) Chemists$",
  "^Build (.+) Beyonders$",
  "^Build (.+) Automations$",
  "^Build (.+) Asteroidss$",
  "^Build (.+) Designers$",
  "^Build (.+) Mixers$",
  "^Build (.+) Generals$",
  "^Build (.+) Logicians$",
  "^Build (.+) Major Major Majors$",
  "^Build (.+) Majors$",
  "^Build (.+) Propagandists$",
  "^Build (.+) Sculptors$",
  "^Build (.+) Trailblazers$",
  "^Build (.+) Shapers$",
  "^Build (.+) Masons$",
  "^Build (.+) Smokers$",
  "^Build (.+) Shearers$",
  "^Build (.+) Blacksmiths$",
  "^Build (.+) Ironmongers$",
  "^Build (.+) Ds$",
  "^Build (.+) Cs$",
  "^Build (.+) C\\+\\+s$",
  "^Build (.+) Negative Energys$",
  "^Build (.+) Nuclear Plants$",
  "^Build (.+) Physicists$",
  "^Build (.+) Quantum Tunnels$",
  "^Build (.+) Reality Splitters$",
  "^Build (.+) Research Grantss$",
  "^Build (.+) Time Theorys$",
  "^Build (.+) Transcendants$",
  "^Build (.+) Utility Workers$",
  "^Build (.+) Wetdocks$",
  "^Build (.+) Wayfinders$",
  "^Build (.+) Universitys$",
  "^Build (.+) Travelers$",
  "^Build (.+) Toolsmiths$",
  "^Build (.+) Matter Gates$",
  "^Build (.+) Mathematicians$",
  "^Build (.+) Mass Drivers$",
  "^Build (.+) Timeshifters$",
  "^Build (.+) Slipstreams$",
  "^Build (.+) Planewalkers$",
  "^Build (.+) Javas$",
  "^Build (.+) JavaScripts$",
  "^Build (.+) Smelters$",
  "^Build (.+) Smithys$",
  "^Build (.+) Ironworkss$",
  "^Build (.+) Carvers$",
  "^Build (.+) Breeders$",
  "^Build (.+) Scouts$",
  "^Build (.+) Trappers$",
  "^Build (.+) Wolf\\-hunter$",
  "^Build (.+) Wellsprings$",
  "^Auto-completes Hamlets after (.+) \\(from (.+)\\) seconds$",
  "^Auto-completes Kingdoms after (.+) \\(from (.+)\\) seconds$",
  "^Auto-completes Planets after (.+) \\(from (.+)\\) seconds$",
  "^Citys spawn with (.+) \\(from (.+)\\)$",
  "^Towns spawn with (.+) \\(from (.+)\\)$",
  "^Villages spawn with (.+) \\(from (.+)\\)$",
  "^Empires spawn with (.+) \\(from (.+)\\)$",
  "^Castles spawn with (.+) \\(from (.+)\\)$",
  "^Kingdoms spawn with (.+) \\(from (.+)\\)$",
  "^Galaxys spawn with (.+) \\(from (.+)\\)$",
  "^Planets spawn with (.+) \\(from (.+)\\)$",
  "^Countys spawn with (.+) \\(from (.+)\\)$",
  "^Systems spawn with (.+) \\(from (.+)\\)$",
  "^Multiverses spawn with (.+) \\(from (.+)\\)$",
  "^Universes spawn with (.+) \\(from (.+)\\)$",
  "^Hamlets spawn with (.+) \\(from (.+)\\)$",
  "^Hamlets generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Empires generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Villages generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Galaxys generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Castles generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Multiverses generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Universes generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Systems generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Kingdoms generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Planets generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Citys generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Countys generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^Towns generate upgrade points (.+) \\(from (.+)\\) faster$",
  "^City ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Town ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Village ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Multiverse ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Universe ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Galaxy ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Empire ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Planet ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^System ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Kingdom ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Hamlet ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^County ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Castle ignore (.+) \\(from (.+)\\) buildings for cost$",
  "^Town buildings cost (.+) \\(from (.+)\\) less$",
  "^County buildings cost (.+) \\(from (.+)\\) less$",
  "^Multiverse buildings cost (.+) \\(from (.+)\\) less$",
  "^Universe buildings cost (.+) \\(from (.+)\\) less$",
  "^City buildings cost (.+) \\(from (.+)\\) less$",
  "^Empire buildings cost (.+) \\(from (.+)\\) less$",
  "^System buildings cost (.+) \\(from (.+)\\) less$",
  "^Kingdom buildings cost (.+) \\(from (.+)\\) less$",
  "^Galaxy buildings cost (.+) \\(from (.+)\\) less$",
  "^Planet buildings cost (.+) \\(from (.+)\\) less$",
  "^Village buildings cost (.+) \\(from (.+)\\) less$",
  "^Castle buildings cost (.+) \\(from (.+)\\) less$",
  "^Hamlet buildings cost (.+) \\(from (.+)\\) less$",
  "^Autobuy Bloodhound cost (.+) \\(from (.+)\\)$",
  "^Autobuy Spearman cost (.+) \\(from (.+)\\)$",
  "^Autobuy Scout cost (.+) \\(from (.+)\\)$",
  "^Autobuy Tracker cost (.+) \\(from (.+)\\)$",
  "^Autobuy Wellspring cost (.+) \\(from (.+)\\)$",
  "^Autobuy Mixer cost (.+) \\(from (.+)\\)$",
  "^Autobuy Matter Gate cost (.+) \\(from (.+)\\)$",
  "^Autobuy Manager cost (.+) \\(from (.+)\\)$",
  "^Autobuy Robot cost (.+) \\(from (.+)\\)$",
  "^Autobuy Break Room cost (.+) \\(from (.+)\\)$",
  "^Autobuy Automation cost (.+) \\(from (.+)\\)$",
  "^Autobuy Air Conditioner cost (.+) \\(from (.+)\\)$",
  "^Autobuy Conveyor cost (.+) \\(from (.+)\\)$",
  "^Autobuy Machinist cost (.+) \\(from (.+)\\)$",
  "^Autobuy Worker cost (.+) \\(from (.+)\\)$",
  "^Autobuy Toolsmith cost (.+) \\(from (.+)\\)$",
  "^Autobuy Repairman cost (.+) \\(from (.+)\\)$",
  "^Autobuy Netherman cost (.+) \\(from (.+)\\)$",
  "^Autobuy Oil Plant cost (.+) \\(from (.+)\\)$",
  "^Autobuy Panner cost (.+) \\(from (.+)\\)$",
  "^Autobuy Navigator cost (.+) \\(from (.+)\\)$",
  "^Autobuy Negative Energy cost (.+) \\(from (.+)\\)$",
  "^Autobuy River cost (.+) \\(from (.+)\\)$",
  "^Autobuy Money Changer cost (.+) \\(from (.+)\\)$",
  "^Autobuy Archer cost (.+) \\(from (.+)\\)$",
  "^Autobuy Tear Sealer cost (.+) \\(from (.+)\\)$",
  "^Autobuy Woodsman cost (.+) \\(from (.+)\\)$",
  "^Autobuy Pathfinder cost (.+) \\(from (.+)\\)$",
  "^Autobuy Trapper cost (.+) \\(from (.+)\\)$",
  "^Autobuy Shepherd cost (.+) \\(from (.+)\\)$",
  "^Autobuy Digger cost (.+) \\(from (.+)\\)$",
  "^Citys are founded after (.+) Town \\(from (.+)\\)$",
  "^Countys are founded after (.+) Castle \\(from (.+)\\)$",
  "^Towns are founded after (.+) Village \\(from (.+)\\)$",
  "^Castles are founded after (.+) City \\(from (.+)\\)$",
  "^Villages are founded after (.+) Hamlet \\(from (.+)\\)$",
  "^\\/ sec \\(from (.+)\\) to buy Bloodhound$",
  "^\\/ sec \\(from (.+)\\) to buy Singularity$",
  "^\\/ sec \\(from (.+)\\) to buy Panner$",
  "^\\/ sec \\(from (.+)\\) to buy Crusher$",
  "^\\/ sec \\(from (.+)\\) to buy Hyperspanner$",
  "^\\/ sec \\(from (.+)\\) to buy Wayfinder$",
  "^\\/ sec \\(from (.+)\\) to buy Sonic Screwdriver$",
  "^\\/ sec \\(from (.+)\\) to buy Deep Field Scanner$",
  "^\\/ sec \\(from (.+)\\) to buy Space Folder$",
  "^\\/ sec \\(from (.+)\\) to buy Quantum Tunnel$",
  "^\\/ sec \\(from (.+)\\) to buy Negative Energy$",
  "^\\/ sec \\(from (.+)\\) to buy Exotic Matter$",
  "^\\/ sec \\(from (.+)\\) to buy Matter Gate$",
  "^\\/ sec \\(from (.+)\\) to buy Space Station$",
  "^\\/ sec \\(from (.+)\\) to buy Breeder$",
  "^\\/ sec \\(from (.+)\\) to buy Slipstream$",
  "^\\/ sec \\(from (.+)\\) to buy Gravity Observatory$",
  "^\\/ sec \\(from (.+)\\) to buy Repairman$",
  "^\\/ sec \\(from (.+)\\) to buy Robot$",
  "^\\/ sec \\(from (.+)\\) to buy Automation$",
  "^\\/ sec \\(from (.+)\\) to buy Air Conditioner$",
  "^\\/ sec \\(from (.+)\\) to buy Mass Driver$",
  "^\\/ sec \\(from (.+)\\) to buy Manager$",
  "^\\/ sec \\(from (.+)\\) to buy Worker$",
  "^\\/ sec \\(from (.+)\\) to buy Bot Swarm$",
  "^\\/ sec \\(from (.+)\\) to buy Asteroids$",
  "^\\/ sec \\(from (.+)\\) to buy Astrophysicist$",
  "^\\/ sec \\(from (.+)\\) to buy Space Shipyard$",
  "^\\/ sec \\(from (.+)\\) to buy Launch Center$",
  "^\\/ sec \\(from (.+)\\) to buy Astronaut$",
  "^\\/ sec \\(from (.+)\\) to buy ROCKETS!!!$",
  "^\\/ sec \\(from (.+)\\) to buy Conveyor$",
  "^\\/ sec \\(from (.+)\\) to buy Toolsmith$",
  "^\\/ sec \\(from (.+)\\) to buy Navigator$",
  "^\\/ sec \\(from (.+)\\) to buy Break Room$",
  "^\\/ sec \\(from (.+)\\) to buy COBOL$",
  "^\\/ sec \\(from (.+)\\) to buy Powerline$",
  "^\\/ sec \\(from (.+)\\) to buy State Binder$",
  "^\\/ sec \\(from (.+)\\) to buy Machinist$",
  "^\\/ sec \\(from (.+)\\) to buy Biologist$",
  "^\\/ sec \\(from (.+)\\) to buy Sergeant$",
  "^\\/ sec \\(from (.+)\\) to buy Goldforge$",
  "^\\/ sec \\(from (.+)\\) to buy Force Splicer$",
  "^\\/ sec \\(from (.+)\\) to buy Propagandist$",
  "^\\/ sec \\(from (.+)\\) to buy Commandant$",
  "^\\/ sec \\(from (.+)\\) to buy Selfsplitter$",
  "^\\/ sec \\(from (.+)\\) to buy Goldsmith$",
  "^\\/ sec \\(from (.+)\\) to buy Recruiter$",
  "^\\/ sec \\(from (.+)\\) to buy Space Cutter$",
  "^\\/ sec \\(from (.+)\\) to buy Tear Sealer$",
  "^\\/ sec \\(from (.+)\\) to buy Time Theory$",
  "^\\/ sec \\(from (.+)\\) to buy Schism Guide$",
  "^\\/ sec \\(from (.+)\\) to buy Traveler$",
  "^\\/ sec \\(from (.+)\\) to buy Field Jammer$",
  "^\\/ sec \\(from (.+)\\) to buy Zero Point Drive$",
  "^\\/ sec \\(from (.+)\\) to buy Theorist$",
  "^\\/ sec \\(from (.+)\\) to buy River$",
  "^\\/ sec \\(from (.+)\\) to buy Scout$",
  "^\\/ sec \\(from (.+)\\) to buy Trapper$",
  "^\\/ sec \\(from (.+)\\) to buy Tracker$",
  "^\\/ sec \\(from (.+)\\) to buy Woodsman$",
  "^\\/ sec \\(from (.+)\\) to buy Wellspring$",
  "^\\/ sec \\(from (.+)\\) to buy Pathfinder$",
  "^\\/ sec \\(from (.+)\\) to buy Shepherd$",
  "^\\/ sec \\(from (.+)\\) to buy River Guide$",
  "^\\/ sec \\(from (.+)\\) to buy Digger$",
  "^\\/ sec \\(from (.+)\\) to buy Archer$",
  "^\\/ sec \\(from (.+)\\) to buy Sheepdog$",
  "^\\/ sec \\(from (.+)\\) to buy Coal Miner$",
  "^\\/ sec \\(from (.+)\\) to buy Spearman$",
  "^(.+) \\- Generate (.+) Deer$",
  "^(.+) \\- Generate (.+) Lamb$",
  "^(.+) \\- Have (.+) income from Bloodhound$",
  "^(.+) \\- Have (.+) income from Shepherd$",
  "^(.+) \\- Have (.+) income from Bridge Builder$",
  "^(.+) \\- Have (.+) income from River$",
  "^(.+) \\- Have (.+) income from Scout$",
  "^(.+) \\- Have (.+) income from Spearman$",
  "^(.+) \\- Have (.+) Gold$",
  "^(.+) \\- Have (.+) Soldier$",
  "^(.+) \\- Have (.+) Brick$",
  "^(.+) \\- Have (.+) Lamb$",
  "^(.+) \\- Have (.+) Deer$",
  "^(.+) \\- Build (.+) Shearer$",
  "^(.+) \\- Build (.+) Archer$",
  "^(.+) \\- Build (.+) Carver$",
  "^(.+) \\- Build (.+) Wolf-hunter$",
  "^(.+) \\- Build (.+) Sheepdog$",
  "^(.+) \\- Build (.+) Shepherd$",
  "^(.+) \\- Build (.+) River$",
  "^(.+) \\- Build (.+) Bloodhound$",
  "^Castle gain ([\\d\\.,]+)$",
  "^County gain ([\\d\\.,]+)$",
  "^Village gain ([\\d\\.,]+)$",
  "^Multiverse gain ([\\d\\.,]+)$",
  "^Universe gain ([\\d\\.,]+)$",
  "^Galaxy gain ([\\d\\.,]+)$",
  "^Planet gain ([\\d\\.,]+)$",
  "^Empire gain ([\\d\\.,]+)$",
  "^City gain ([\\d\\.,]+)$",
  "^System gain ([\\d\\.,]+)$",
  "^Kingdom gain ([\\d\\.,]+)$",
  "^Town gain ([\\d\\.,]+)$",
  "^Hamlet gain ([\\d\\.,]+)$"
 ],
 "dialogs": [
  [
   "^Are you sure you want to reset\\? \\(There is no reset-prestige mechanic\\)$",
   "确定要重新开始吗？（本游戏没有 prestige 重置机制）"
  ],
  [
   "^Are you sure you want to hard reset\\?$",
   "确定要硬重置吗？这将清空所有进度。"
  ],
  [
   "^Enter your save text$",
   "请输入你的存档文本"
  ],
  [
   "^Enter name$",
   "编辑名称"
  ],
  [
   "^Save could not be read\\. :\\($",
   "无法读取存档。:("
  ],
  [
   "^Version is too low to import\\. :\\(  Requires: (\\d+)$",
   "存档版本过低，无法导入。:( 需要版本：$1"
  ],
  [
   "^Save loaded successfully\\.$",
   "存档读取成功！"
  ],
  [
   "^Your old save is from (.+)\\. Are you sure you want to revert\\?$",
   "你的旧存档生成于 $1。确定要恢复吗？"
  ]
 ],
 "base": {
  "items": {
   "Redenhall with Harleston": "雷登霍尔与哈勒斯顿",
   "Newcastle upon Tyne": "泰恩河畔纽卡斯尔",
   "Kingston upon Hull": "赫尔河畔金斯顿",
   "Heanor and Loscoe": "希纳与洛斯科",
   "Henley-on-Thames": "泰晤士河畔亨利",
   "Tower of London": "伦敦塔",
   "Chalfont Common": "查尔方特公地",
   "Hemel Hempstead": "赫默尔亨普斯特德",
   "Henley-in-Arden": "亨利因阿登",
   "Brighton & Hove": "布赖顿和霍夫",
   "Higham Ferrers": "海厄姆费勒斯",
   "Northumberland": "诺森伯兰",
   "Houghton Regis": "霍顿雷吉斯",
   "Stoke-on-Trent": "特伦特河畔斯托克",
   "Wolverhampton": "伍尔弗汉普顿",
   "Berghers Hill": "伯格尔斯山",
   "Aston Mullins": "阿斯顿·马林斯",
   "Williamsburg": "威廉斯堡",
   "High Wycombe": "海威科姆",
   "Berkhamstead": "伯克姆斯特德",
   "Huddersfield": "哈德斯菲尔德",
   "Peterborough": "彼得伯勒",
   "Golden Horde": "金帐汗国",
   "Chesterfield": "切斯特菲尔德",
   "Haltwhistle": "霍尔特惠斯尔",
   "Carisbrooke": "卡里斯布鲁克",
   "Portchester": "波特切斯特",
   "Conisbrough": "科尼斯堡",
   "Lotharingia": "洛塔林吉亚",
   "Queensberry": "昆斯伯里",
   "Southampton": "南安普顿",
   "Cryers Hill": "克赖尔斯山",
   "Cooks Wharf": "库克斯码头",
   "Wurttemburg": "符腾堡",
   "Saxe-Weimar": "萨克森-魏玛",
   "Hebden Royd": "赫布登罗伊德",
   "Hatherleigh": "哈瑟利",
   "Westminster": "威斯敏斯特",
   "Beamond End": "比蒙德恩德",
   "Mecklenburg": "梅克伦堡",
   "Spartanburg": "斯帕坦堡",
   "Hunstanton": "亨斯坦顿",
   "Hungerford": "亨格福德",
   "Hartlepool": "哈特尔浦",
   "Horncastle": "霍恩卡斯尔",
   "Gloucester": "格洛斯特",
   "Lauderdale": "劳德代尔",
   "Huntingdon": "亨廷登",
   "Bolter End": "博尔特恩德",
   "Chichester": "奇切斯特",
   "Manchester": "曼彻斯特",
   "Chelmsford": "切尔姆斯福德",
   "Canterbury": "坎特伯雷",
   "Portsmouth": "朴次茅斯",
   "Orangeburg": "奥兰治堡",
   "Charleston": "查尔斯顿",
   "Nottingham": "诺丁汉",
   "Birmingham": "伯明翰",
   "Doublebois": "杜布尔博伊斯",
   "Darlington": "达灵顿",
   "Greenville": "格林维尔",
   "Halesworth": "黑尔斯沃思",
   "Luxembourg": "卢森堡",
   "Georgetown": "乔治敦",
   "Kenilworth": "凯尼尔沃思",
   "Heathfield": "希思菲尔德",
   "Hednesford": "赫德斯福德",
   "Dorchester": "多切斯特",
   "Holsworthy": "霍尔兹沃西",
   "Sunderland": "桑德兰",
   "Winchester": "温切斯特",
   "Haslingden": "哈斯灵登",
   "Lichfield": "利奇菲尔德",
   "Leicester": "莱斯特",
   "Liverpool": "利物浦",
   "Manchukuo": "满洲国",
   "Edgefield": "埃奇菲尔德",
   "Ilkhanate": "伊儿汗国",
   "St Albans": "圣奥尔本斯",
   "Lancaster": "兰卡斯特",
   "Wakefield": "韦克菲尔德",
   "Lexington": "列克星敦",
   "Worcester": "伍斯特",
   "Sheffield": "谢菲尔德",
   "Salisbury": "索尔兹伯里",
   "Thornbury": "索恩伯里",
   "Pendennis": "彭登尼斯",
   "Abbeville": "阿布维尔",
   "Fairfield": "费尔菲尔德",
   "Greenwood": "格林伍德",
   "McCormick": "麦考密克",
   "Clarendon": "克拉伦登",
   "Macedonia": "马其顿",
   "Roxburghe": "罗克斯堡",
   "Hedge End": "赫奇恩德",
   "Oldenburg": "奥尔登堡",
   "Haslemere": "哈斯勒米尔",
   "Horsforth": "霍斯福斯",
   "Babylonia": "巴比伦尼亚",
   "Highworth": "海沃思",
   "Brunswick": "不伦瑞克",
   "Haverford": "哈弗福德",
   "Hoddesdon": "霍德斯登",
   "Hemsworth": "赫姆斯沃思",
   "Brittania": "不列颠尼亚",
   "Cambridge": "剑桥",
   "Asheridge": "阿谢里奇",
   "Byzantium": "拜占庭",
   "Broughton": "布劳顿",
   "Harpenden": "哈彭登",
   "Buccleuch": "巴克卢",
   "Harrogate": "哈罗盖特",
   "Halesowen": "黑尔索文",
   "Beaufort": "博福特",
   "Anderson": "安德森",
   "Hertford": "赫特福德",
   "Barnwell": "巴恩韦尔",
   "Holstein": "荷尔斯泰因",
   "Florence": "弗洛伦斯",
   "Lorraine": "洛林",
   "Hartland": "哈特兰",
   "Colleton": "科莱顿",
   "Halstead": "哈尔斯特德",
   "Goodrich": "古德里奇",
   "Helmsley": "赫尔姆斯利",
   "Cherokee": "切罗基",
   "Montrose": "蒙特罗斯",
   "Bradford": "布拉德福德",
   "Newberry": "纽贝里",
   "Marlboro": "马尔伯勒",
   "Hamilton": "汉密尔顿",
   "Plymouth": "普利茅斯",
   "Michelle": "米歇尔",
   "Richland": "里奇兰",
   "Hereford": "赫里福德",
   "Rothesay": "罗撒西",
   "Carlisle": "卡莱尔",
   "Coventry": "考文垂",
   "Leinster": "伦斯特",
   "Hinckley": "欣克利",
   "Abercorn": "阿伯科恩",
   "Mitchell": "米切尔",
   "Holbeach": "霍尔比奇",
   "Berkeley": "伯克利",
   "Limburg": "林堡",
   "Austria": "奥地利",
   "Calhoun": "卡尔霍恩",
   "Pickens": "皮肯斯",
   "Hampton": "汉普顿",
   "Ormonde": "奥蒙德",
   "Prussia": "普鲁士",
   "Bohemia": "波希米亚",
   "Douglas": "道格拉斯",
   "Munster": "芒斯特",
   "Laurens": "劳伦斯",
   "Kershaw": "克肖",
   "Bavaria": "巴伐利亚",
   "Chester": "切斯特",
   "Preston": "普雷斯顿",
   "Horwich": "霍里奇",
   "Lincoln": "林肯",
   "Norwich": "诺里奇",
   "Hanover": "汉诺威",
   "Arundel": "阿伦德尔",
   "Helston": "赫尔斯顿",
   "Salford": "索尔福德",
   "Heywood": "海伍德",
   "Hornsea": "霍恩西",
   "Honiton": "霍尼顿",
   "Horsham": "霍舍姆",
   "Hornsey": "霍恩齐",
   "Hitchin": "希钦",
   "Hingham": "欣厄姆",
   "Bristol": "布里斯托尔",
   "Windsor": "温莎",
   "Harwich": "哈威奇",
   "Scotney": "斯科特尼",
   "Warwick": "沃里克",
   "Skipton": "斯基普顿",
   "Michael": "迈克尔",
   "Berkely": "伯克利",
   "Burston": "伯斯顿",
   "Bamberg": "班伯格",
   "Trager": "特雷格",
   "Gordon": "戈登",
   "Hendon": "亨登",
   "Argyll": "阿盖尔",
   "Horley": "霍利",
   "Atholl": "阿索尔",
   "Dutson": "达特森",
   "Alsace": "阿尔萨斯",
   "Hessle": "赫斯尔",
   "Harrow": "哈罗",
   "Havant": "哈万特",
   "Bremen": "不莱梅",
   "Nassau": "拿骚",
   "Hexham": "赫克瑟姆",
   "Saxony": "萨克森",
   "Persia": "波斯",
   "Anhalt": "安哈尔特",
   "Harlow": "哈洛",
   "Hetton": "赫顿",
   "Rothes": "罗西斯",
   "Marion": "马里恩",
   "Jasper": "贾斯珀",
   "Oxford": "牛津",
   "Exeter": "埃克塞特",
   "Oconee": "奥科尼",
   "Bodiam": "博迪恩",
   "Orford": "奥福德",
   "Sizerg": "赛泽格",
   "Dillon": "迪隆",
   "Howard": "霍华德",
   "Harsha": "哈沙",
   "Saluda": "萨卢达",
   "Kintyr": "金泰尔",
   "Howden": "豪登",
   "Orkney": "奥克尼",
   "Lennox": "伦诺克斯",
   "Albany": "奥尔巴尼",
   "Sumter": "萨姆特",
   "Leslie": "莱斯利",
   "Durham": "达勒姆",
   "Knope": "诺普",
   "Brent": "布伦特",
   "Wyatt": "怀亚特",
   "Chris": "克里斯",
   "Delhi": "德里",
   "Tracy": "特蕾西",
   "Julie": "朱莉",
   "Sarah": "萨拉",
   "Jones": "琼斯",
   "Steve": "史蒂夫",
   "Smith": "史密斯",
   "Donna": "唐娜",
   "Aydon": "艾登",
   "Hedon": "赫登",
   "Corfe": "科夫",
   "Hayle": "海勒",
   "Dover": "多佛尔",
   "Wells": "韦尔斯",
   "Leeds": "利兹",
   "Derby": "德比",
   "Ripon": "里彭",
   "Hythe": "海斯",
   "Truro": "特鲁罗",
   "Kirby": "柯比",
   "Union": "尤宁",
   "Reuss": "罗伊斯",
   "Baden": "巴登",
   "Lippe": "利珀",
   "Hesse": "黑森",
   "Haxby": "哈克斯比",
   "Lewes": "刘易斯",
   "Aiken": "艾肯",
   "Horry": "霍里",
   "Hyde": "海德",
   "Bath": "巴斯",
   "Hill": "希尔",
   "Boyd": "博伊德",
   "Holt": "霍尔特",
   "Ross": "罗斯",
   "Rudy": "鲁迪",
   "Adam": "亚当",
   "York": "约克",
   "Ely": "伊利",
   "Lee": "李",
   "Jim": "吉姆",
   "Ben": "本",
   "Tom": "汤姆",
   "Kim": "金",
   "_OTHER_": [],
   "Save": "保存",
   "Export": "导出",
   "Import": "导入",
   "Settings": "设置",
   "Achievements": "成就",
   "Statistics": "统计",
   "Changelog": "更新日志",
   "Hotkeys": "快捷键",
   "ALL": "全部",
   "Default": "默认",
   "AUTO": "自动",
   "default": "默认",
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
   "/ sec": "/ 秒",
   "Research": "研究",
   "\tHere is your save.  Copy the full text.": "这就是你的存档。复制全文。",
   "Active Time": "活动时间",
   "Archer": "弓箭手",
   "Assign": "分配",
   "Bloodhound": "猎犬",
   "Building": "建筑",
   "Count": "数量",
   "Donate BTC": "捐赠BTC",
   "Donate CC": "捐赠CC",
   "Donate Patreon": "捐赠Patreon",
   "Feats": "功绩",
   "Follow on Reddit": "关注Reddit",
   "Follow on Twitter": "关注Twitter",
   "hamlet": "村庄",
   "Income": "收入",
   "Managers": "管理者",
   "New Slot": "新槽位",
   "Offline Time": "离线时间",
   "Pathfinder": "探路者",
   "Retrain": "再训练",
   "River": "河流",
   "Saved!": "保存成功!",
   "Scout": "侦察兵",
   "Share on Facebook": "在Facebook上分享",
   "Share on Pinterest": "在Pinterest上分享",
   "Share on Reddit": "在Reddit上分享",
   "Spearman": "枪兵",
   "Stats": "统计",
   "Support": "支持",
   "Time since Founding": "建国以来时间",
   "Total": "总计",
   "Total Income": "总收入",
   "Tracker": "追踪者",
   "Trapper": "诱捕者",
   "undefined": "未定义的",
   "Upgrades": "升级",
   "Votes Clicked": "已点击票数",
   "Wellspring": "水井",
   "Woodsman": "樵夫",
   "Export game to string": "将游戏存档导出为字符串",
   "Import game from string": "从字符串中导入游戏存档",
   "Increases duration of Prestige events by 25%": "声望事件的持续时间增加25%",
   "Increases duration of Upgrade events by 25%": "升级事件的持续时间增加25%",
   "Increases duration of Vote events by 25%": "增加投票事件的持续时间25%",
   "Manual Save Now": "手动保存",
   "Mute/Unmute Audio": "静音/音频静音状态",
   "Patchnotes": "补丁说明",
   "Pause": "暂停",
   "Reset": "重置",
   "Start over but keep stats": "重新开始，但要保留统计数据",
   "Suspend game processing": "暂停游戏处理",
   "Toggle Mute": "切换静音",
   "View patchnotes": "查看补丁说明",
   "Auto-completes Hamlets after 120 (from never) seconds": "120秒后(从无开始)自动完成 村庄",
   "Auto-completes Villages after 120 (from never) seconds": "120秒后(从无开始)自动完成 乡村",
   "Auto-completes Towns after 120 (from never) seconds": "120秒后(从无开始)自动完成 城镇",
   "Autobuy": "自动购买",
   "Complete": "完成",
   "Unassigned": "未分配",
   "Autocomplete": "自动完成",
   "Botley": "波特利",
   "[ close all ]": "[ 全部关闭 ]",
   "Breeder": "饲养员",
   "Carver": "雕刻家",
   "Farmhand": "农场工人",
   "Fence-Maker": "栅栏制造者",
   "Roaster": "烘烤器",
   "Sheepdog": "牧羊犬",
   "Shearer": "剪毛机",
   "Shepherd": "牧羊人",
   "Smoker": "薰制工",
   "village": "乡村",
   "Wolf-hunter": "猎狼人",
   "Local": "本地",
   "Bridge Builder": "桥梁建造者",
   "Scale": "规模",
   "Baker": "烤炉",
   "Digger": "挖掘机",
   "Heater": "加热器",
   "Mason": "泥瓦匠",
   "Mixer": "搅拌机",
   "River Guide": "河道导流器",
   "Sculptor": "雕塑家",
   "Shaper": "塑造者",
   "Trailblazer": "开拓者",
   "town": "城镇",
   "close": "关闭",
   "Coal Miner": "煤矿工人",
   "Blacksmith": "铁匠",
   "Cart Mover": "推车移动器",
   "city": "城市",
   "Foreman": "领班",
   "Ironmonger": "五金商人",
   "Ironworks": "钢铁厂",
   "Prospector": "勘探者",
   "Smelter": "冶炼厂",
   "Smithy": "铁匠铺",
   "Tracklayer": "铺轨工人",
   "Doubles Recruiter income": "招募人员收入翻倍",
   "General": "将军",
   "Logician": "逻辑学家",
   "Major": "专业",
   "Major Major Major": "主要专业",
   "Propagandist": "宣传者",
   "Recruiter": "招募人员",
   "Sergeant": "中士",
   "Weaponsmith": "武器匠",
   "Armorsmith": "盔甲匠",
   "Fletcher": "造箭匠",
   "county": "县城",
   "Goldforge": "黄金熔炉",
   "Gem Cutter": "宝石切割师",
   "Designer": "设计师",
   "Banker": "银行家",
   "Goldsmith": "金匠",
   "Jeweler": "珠宝商",
   "Money Changer": "货币兑换商",
   "Panner": "淘金者",
   "Tool salesman": "工具销售员",
   "Trader": "交易员",
   "archduchy": "大公国",
   "kingdom": "王国",
   "Multiverse": "多元宇宙",
   "duchy": "公国",
   "castle": "城堡",
   "": "",
   "Doubles Mason income": "泥瓦匠 收入翻倍",
   "Doubles Sculptor income": "雕塑家 收入翻倍",
   "Doubles Trailblazer income": "开拓者 收入翻倍",
   "Doubles Heater income": "加热器 收入翻倍",
   "Doubles Mixer income": "搅拌机 收入翻倍",
   "Doubles Banker income": "银行家 收入翻倍",
   "Doubles Designer income": "设计师 收入翻倍",
   "Doubles Gem Cutter income": "宝石切割师 收入翻倍",
   "Doubles Goldforge income": "黄金熔炉 收入翻倍",
   "Doubles Goldsmith income": "金匠 收入翻倍",
   "Doubles Jeweler income": "珠宝商 收入翻倍",
   "Doubles Money Changer income": "货币兑换商 收入翻倍",
   "Doubles Tool salesman income": "工具销售员 收入翻倍",
   "Doubles Trader income": "交易员 收入翻倍",
   "Doubles Panner income": "淘金者 收入翻倍",
   "Doubles Shaper income": "塑造者 收入翻倍",
   "Doubles Sheepdog income": "牧羊犬 收入翻倍",
   "Doubles Baker income": "面包师 收入翻倍",
   "Doubles Breeder income": "饲养员 收入翻倍",
   "Doubles Roaster income": "烘烤器 收入翻倍",
   "Doubles Coal Miner income": "煤矿工人 收入翻倍",
   "Doubles Smoker income": "薰制工 收入翻倍",
   "Doubles Pathfinder income": "探路者 收入翻倍",
   "Doubles River income": "河流 收入翻倍",
   "Doubles Scout income": "侦察兵 收入翻倍",
   "Doubles Trapper income": "诱捕者 收入翻倍",
   "Doubles Wellspring income": "水井 收入翻倍",
   "Doubles Woodsman income": "樵夫 收入翻倍",
   "Doubles Archer income": "弓箭手 收入翻倍",
   "Doubles Bloodhound income": "猎犬 收入翻倍",
   "Doubles Spearman income": "枪兵 收入翻倍",
   "Doubles Tracker income": "追踪者 收入翻倍",
   "Doubles Fence-Maker income": "栅栏制造者 收入翻倍",
   "Doubles Wolf-hunter income": "猎狼人 收入翻倍",
   "Doubles Shepherd income": "牧羊人 收入翻倍",
   "Doubles Shearer income": "剪毛机 收入翻倍",
   "Doubles Carver income": "雕刻家 收入翻倍",
   "Doubles Farmhand income": "农场工人 收入翻倍",
   "Doubles Digger income": "挖掘机 收入翻倍",
   "Doubles River Guide income": "河道导流器 收入翻倍",
   "Doubles Bridge Builder income": "桥梁建造者 收入翻倍",
   "Boycott": "博伊科特",
   "Booker": "布克",
   "Ballinger": "巴林杰",
   "Barley End": "巴利恩德",
   "Caldecote": "卡尔德科特",
   "Charndon": "查恩登",
   "Dunster": "邓斯特",
   "Coombe": "库姆",
   "Askett": "阿斯基特",
   "Buckland Common": "巴克兰公地",
   "Alscot": "阿尔斯科特",
   "Halifax": "哈利法克斯",
   "Allendale": "阿伦代尔",
   "Rudy Hill": "Rudy Hill",
   "London": "伦敦",
   "Leslie Smith": "Leslie Smith",
   "Chackmore": "查克莫尔",
   "Calvert": "卡尔弗特",
   "Beacon Hill": "比肯山",
   "Botolph Claydon": "博托尔夫·克莱登",
   "Chris Mitchell": "Chris Mitchell",
   "Cores End": "科尔斯恩德",
   "Darite": "达里特",
   "Davidstow": "戴维德斯托",
   "Delabole": "德拉博尔",
   "Devoran": "德沃兰",
   "Dimson": "迪姆森",
   "Dobwalls": "多布沃尔斯",
   "Downderry": "唐德里",
   "Drift": "德里夫特",
   "Duloe": "杜洛",
   "Hailsham": "黑尔舍姆",
   "Harworth and Bircotes": "哈沃思与伯科茨",
   "Hatfield": "哈特菲尔德",
   "Haverhill": "哈弗希尔",
   "Haywards Heath": "海沃兹希思",
   "Sarah Boyd": "Sarah Boyd",
   "Ascott": "阿斯科特",
   "Jim Mitchell": "Jim Mitchell",
   "Jim Hill": "Jim Hill",
   "Brent Wyatt": "Brent Wyatt",
   "Donna Smith": "Donna Smith",
   "Chris Jones": "Chris Jones",
   "Cadsden": "卡德斯登",
   "Baker's Wood": "贝克伍德",
   "Drakewalls": "德雷克沃尔斯",
   "Ballinger Bottom": "巴林杰·博顿",
   "Addingrove": "阿丁格罗夫",
   "Chivery": "奇弗里",
   "Chalkshire": "乔克郡",
   "Hastings": "黑斯廷斯",
   "Burcott": "伯科特",
   "Broughton Crossing": "布劳顿十字路口",
   "Butlers Cross": "巴特勒十字",
   "Duporth": "杜波思",
   "Coldmoorholme": "科尔德莫尔姆",
   "Ackhampstead": "阿克汉普斯特德",
   "Kim Jones": "Kim Jones",
   "Bradville": "布拉德维尔",
   "Donna Boyd": "Donna Boyd",
   "Durgan": "杜根",
   "Kim Haverford": "Kim Haverford",
   "Ackhampstead'": "阿克汉普斯特德'",
   "Crafton": "克拉夫顿",
   "Jacorb's Games": "Jacorb 的游戏",
   "Scientific": "科学计数法",
   "Standard": "标准",
   "Blind": "盲文",
   "Letters": "字母",
   "Mixed Engineering": "混合工程",
   "Mixed Scientific": "混合科学",
   "Chemistry": "化学",
   "Engineering": "工程符号",
   "By Jacorb90": "作者 Jacorb90",
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
   "Loading...": "加载中...",
   "ALWAYS": "一直",
   "HARD RESET": "硬重置",
   "Export to clipboard": "导出到剪切板",
   "INCOMPLETE": "不完整",
   "HIDDEN": "隐藏",
   "AUTOMATION": "自动",
   "NEVER": "从不",
   "ON": "打开",
   "OFF": "关闭",
   "SHOWN": "显示",
   "Play Again": "再次游戏",
   "Keep Going": "继续",
   "The Modding Tree Discord": "模型树Discord",
   "You have": "你有",
   "It took you {{formatTime(player.timePlayed)}} to beat the game.": "花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.",
   "Congratulations! You have reached the end and beaten this game, but for now...": "恭喜你！ 您已经结束并通关了本游戏，但就目前而言...",
   "Main Prestige Tree server": "主声望树服务器",
   "Reach {{formatWhole(ENDGAME)}} to beat the game!": "达到 {{formatWhole(ENDGAME)}} 去通关游戏!",
   "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
   "Loading... (If this takes too long it means there was a serious error!)←": "正在加载...（如果时间太长，则表示存在严重错误！）←",
   "Main\n\t\t\t\tPrestige Tree server": "主\n\t\t\t\t声望树服务器",
   "The Modding Tree\n\t\t\t\t\t\t\tDiscord": "模型树\n\t\t\t\t\t\t\tDiscord",
   "Please check the Discord to see if there are new content updates!": "请检查 Discord 以查看是否有新的内容更新！",
   "aqua": "水色",
   "AUTOMATION, INCOMPLETE": "自动化，不完整",
   "LAST, AUTO, INCOMPLETE": "最后，自动，不完整",
   "NONE": "无",
   "P: Reset for": "P: 重置获得",
   "Git游戏": "Git游戏",
   "QQ群号": "QQ群号",
   "x": "x",
   "QQ群号:": "QQ群号:",
   "* 启用后台游戏": "* 启用后台游戏",
   "更多同类游戏:": "更多同类游戏:",
   "i": "i",
   "I": "I",
   "II": "I",
   "III": "III",
   "IV": "IV",
   "V": "V",
   "VI": "VI",
   "VII": "VII",
   "VIII": "VIII",
   "X": "X",
   "XI": "XI",
   "XII": "XII",
   "XIII": "XIII",
   "XIV": "XIV",
   "XV": "XV",
   "XVI": "XVI",
   "A": "A",
   "B": "B",
   "C": "C",
   "D": "D",
   "E": "E",
   "F": "F",
   "G": "G",
   "H": "H",
   "J": "J",
   "K": "K",
   "L": "L",
   "M": "M",
   "N": "N",
   "O": "O",
   "P": "P",
   "Q": "Q",
   "R": "R",
   "S": "S",
   "T": "T",
   "U": "U",
   "W": "W",
   "Y": "Y",
   "Z": "Z",
   "<": "<",
   "<<": "<<",
   ">": ">",
   ">>": ">>"
  },
  "prefix": {
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
   "Hamlet (Next in ": "村庄 (进入下一阶段还需要 ",
   "Village (Next in ": "乡村 (进入下一阶段还需要 ",
   "Town (Next in ": "城镇 (进入下一阶段还需要 ",
   "City (Next in ": "城市 (进入下一阶段还需要 ",
   "Castle (Next in ": "城堡 (进入下一阶段还需要 ",
   "County (Next in ": "县城 (进入下一阶段还需要 ",
   "Kingdom (Next in ": "王国 (进入下一阶段还需要 ",
   "Empire (Next in ": "帝国 (进入下一阶段还需要 ",
   "Galaxy (Next in ": "星系 (进入下一阶段还需要 ",
   "Planet (Next in ": "星球 (进入下一阶段还需要 ",
   "System (Next in ": "系统 (进入下一阶段还需要 ",
   "Universe (Next in ": "宇宙 (进入下一阶段还需要 ",
   "Quadrant (Next in ": "象限 (进入下一阶段还需要 ",
   "Duchy (Next in ": "公国 (进入下一阶段还需要 ",
   "Archduchy (Next in ": "大公国 (进入下一阶段还需要 ",
   "Grants base income of ": "给予基础收入 ",
   "Increases upgrade point generation by ": "使升级点生成增加 ",
   "Increases rate of Prestige events by ": "增加声望事件的速率 ",
   "Increases rate of Upgrade events by ": "增加升级事件的速率 ",
   "Decreases cost of buildings by ": "降低建筑成本 ",
   "": ""
  },
  "postfix": {
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
   "": ""
  },
  "reg": [
   [
    "^([\\d\\.]+) hours ([\\d\\.]+) minutes ([\\d\\.]+) seconds$",
    "",
    "$1 小时 $2 分钟 $3 秒"
   ],
   [
    "^You are gaining (.+) elves per second$",
    "",
    "你每秒获得 $1 精灵"
   ],
   [
    "^You have (.+) points$",
    "",
    "你有 $1 点数"
   ],
   [
    "^Next at (.+) points$",
    "",
    "下一个在 $1 点数"
   ],
   [
    "^Decreases cost of tier (.+) by (.+)$",
    "",
    "降低第 $1 层级成本 $2"
   ],
   [
    "^Increases income of tier (.+) by (.+) for each building$",
    "",
    "提升第 $1 层级收入 $2 对于每一个建筑"
   ],
   [
    "^Increases income of tier (.+) by (.+) for each building of tier (.+)$",
    "",
    "提升第 $1 层级收入 $2 对于每一个 $3 层级建筑"
   ],
   [
    "^Increases income of tier (.+) by (.+)$",
    "",
    "提升第 $1 层级收入 $2"
   ],
   [
    "^Catching up... (.+) of (.+)$",
    "",
    "追赶... $1 / $2"
   ],
   [
    "^Caught up (.+) seconds!$",
    "",
    "赶上了 $1 秒！"
   ],
   [
    "^Click (.+) Research events for Villages$",
    "",
    "点击 $1 乡村 的研究事件"
   ],
   [
    "^Click (.+) Research events for Hamlets$",
    "",
    "点击 $1 村庄 的研究事件"
   ],
   [
    "^Click (.+) Research events for Towns$",
    "",
    "点击 $1 城镇 的研究事件"
   ],
   [
    "^Click (.+) Research events for Countys$",
    "",
    "点击 $1 县城 的研究事件"
   ],
   [
    "^Click (.+) Research events for Citys$",
    "",
    "点击 $1 城市 的研究事件"
   ],
   [
    "^Click (.+) Research events for Kingdoms$",
    "",
    "点击 $1 王国 的研究事件"
   ],
   [
    "^Click (.+) Research events for Galaxys$",
    "",
    "点击 $1 星系 的研究事件"
   ],
   [
    "^Click (.+) Research events for Multiverses$",
    "",
    "点击 $1 多元宇宙 的研究事件"
   ],
   [
    "^Click (.+) Research events for Planets$",
    "",
    "点击 $1 星球 的研究事件"
   ],
   [
    "^Click (.+) Research events for Systems$",
    "",
    "点击 $1 系统 的研究事件"
   ],
   [
    "^Click (.+) Research events for Universes$",
    "",
    "点击 $1 宇宙 的研究事件"
   ],
   [
    "^Click (.+) Research events for Empires$",
    "",
    "点击 $1 帝国 的研究事件"
   ],
   [
    "^Click (.+) Research events for Quadrants$",
    "",
    "点击 $1 象限 的研究事件"
   ],
   [
    "^Click (.+) Research events for Duchys$",
    "",
    "点击 $1 公国 的研究事件"
   ],
   [
    "^Click (.+) Research events for Castles$",
    "",
    "点击 $1 城堡 的研究事件"
   ],
   [
    "^Click (.+) Research events for Archduchys$",
    "",
    "点击 $1 大公国 的研究事件"
   ],
   [
    "^Click (.+) Upgrade events for Galaxys$",
    "",
    "点击 $1 星系 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Archduchys$",
    "",
    "点击 $1 大公国 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Kingdoms$",
    "",
    "点击 $1 王国 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Multiverses$",
    "",
    "点击 $1 多元宇宙 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Planets$",
    "",
    "点击 $1 星球 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Systems$",
    "",
    "点击 $1 系统 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Universes$",
    "",
    "点击 $1 宇宙 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Empires$",
    "",
    "点击 $1 帝国 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Quadrants$",
    "",
    "点击 $1 象限 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Duchys$",
    "",
    "点击 $1 公国 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Villages$",
    "",
    "点击 $1 乡村 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Countys$",
    "",
    "点击 $1 县城 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Hamlets$",
    "",
    "点击 $1 村庄 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Towns$",
    "",
    "点击 $1 城镇 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Citys$",
    "",
    "点击 $1 城市 的升级事件"
   ],
   [
    "^Click (.+) Upgrade events for Castles$",
    "",
    "点击 $1 城堡 的升级事件"
   ],
   [
    "^Click (.+) Vote events$",
    "",
    "点击 $1 投票事件"
   ],
   [
    "^Have a Hamlet with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 的村庄"
   ],
   [
    "^Reduces autobuy surchage of tier (.+) buildings by (.+)$",
    "",
    "降低 $1 层建筑的自动购买附加费 $2"
   ],
   [
    "^Reserves (.+) income to purchase tier (.+) buildings$",
    "",
    "储备 $1 收入购买第 $2 层建筑"
   ],
   [
    "^Increases rate of Vote events by (.+)$",
    "",
    "提高投票时间出现速率 $1"
   ],
   [
    "^Increases income of tier (.+) by (.+) for each building$",
    "",
    "每建造一座建筑，增加 $1 层级的收入 $2"
   ],
   [
    "^Increases income of tier (.+) by (.+) for each building of tier (.+)$",
    "",
    "每建造一座 $3 层建筑，增加 $1 层收入 $2"
   ],
   [
    "^Have a Castle with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 城堡"
   ],
   [
    "^Have a Universe with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 宇宙"
   ],
   [
    "^Have a Quadrant with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 象限"
   ],
   [
    "^Have a Galaxy with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 星系"
   ],
   [
    "^Have a Kingdom with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 王国"
   ],
   [
    "^Have a Duchy with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 公国"
   ],
   [
    "^Have a Archduchy with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 大公国"
   ],
   [
    "^Have a Empire with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 帝国"
   ],
   [
    "^Have a Multiverse with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 多元宇宙"
   ],
   [
    "^Have a Empire with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 帝国"
   ],
   [
    "^Have a Planet with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 星球"
   ],
   [
    "^Have a City with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 城市"
   ],
   [
    "^Have a System with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 系统"
   ],
   [
    "^Have a County with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 县城"
   ],
   [
    "^Have a Village with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 乡村"
   ],
   [
    "^Have a Town with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 城镇"
   ],
   [
    "^Have a Hamlet with at least (.+) income$",
    "",
    "拥有一个收入至少 $1 收入的 村庄"
   ],
   [
    "^(.+) of (.+) Stored \\((.+)\\)$",
    "",
    "$1 / $2 已存储 ($3)"
   ],
   [
    "^You can have (.+) \\(from (.+)\\) Hamlets active at once$",
    "",
    "你可以同时激活 $1 (从 $2)村庄"
   ],
   [
    "^\\/ sec \\(from (.+)\\)$",
    "",
    "/ 秒 (从 $1)"
   ],
   [
    "^(.+) \\- Build (.+) of tiers (.+)$",
    "",
    "$1 - 层级 $3 各建造 $2 个"
   ],
   [
    "^(.+) \\- Reach (.+) income!$",
    "",
    "$1 - 达到 $2 收入!"
   ],
   [
    "^([\\d\\.]+)\\/sec$",
    "",
    "$1/秒"
   ],
   [
    "^([\\d\\.,]+)\\/sec$",
    "",
    "$1/秒"
   ],
   [
    "^([\\d\\.,]+) OOMs\\/sec$",
    "",
    "$1 OOMs/秒"
   ],
   [
    "^([\\d\\.]+) OOMs\\/sec$",
    "",
    "$1 OOMs/秒"
   ],
   [
    "^([\\d\\.]+)e([\\d\\.,]+)\\/sec$",
    "",
    "$1e$2/秒"
   ],
   [
    "^requires ([\\d\\.]+) more research points$",
    "",
    "需要$1个研究点"
   ],
   [
    "^([\\d\\.]+)e([\\d\\.,]+) points$",
    "",
    "$1e$2 点数"
   ],
   [
    "^Talent ([\\d\\.]+)\\%$",
    "",
    "天赋 $1%"
   ],
   [
    "^([\\d\\.]+) elves$",
    "",
    "$1 精灵"
   ],
   [
    "^([\\d\\.]+)d ([\\d\\.]+)h ([\\d\\.]+)m$",
    "",
    "$1天 $2小时 $3分"
   ],
   [
    "^([\\d\\.]+)e([\\d\\.,]+) elves$",
    "",
    "$1e$2 精灵"
   ],
   [
    "^([\\d\\.,]+) elves$",
    "",
    "$1 精灵"
   ],
   [
    "^XP ([\\d\\.,]+)$",
    "",
    "经验值 $1"
   ],
   [
    "^Level ([\\d\\.,]+)$",
    "",
    "等级 $1"
   ],
   [
    "^Reserves ([\\d\\.,]+)$",
    "",
    "储备 $1"
   ],
   [
    "^Day ([\\d\\.,]+)$",
    "",
    "天数 $1"
   ],
   [
    "^\\*(.+) to electricity gain$",
    "",
    "*$1 到电力增益"
   ],
   [
    "^Cost: (.+) points$",
    "",
    "成本：$1 点数"
   ],
   [
    "^Req: (.+) elves$",
    "",
    "要求：$1 精灵"
   ],
   [
    "^Req: (.+) \\/ (.+) elves$",
    "",
    "要求：$1 / $2 精灵"
   ],
   [
    "^Usages: (\\d+)\\/$",
    "",
    "用途：$1/"
   ],
   [
    "^workers: (\\d+)\\/$",
    "",
    "工人：$1/"
   ]
  ]
 },
 "levels": {
  "hamlet": "村庄",
  "village": "乡村",
  "town": "城镇",
  "city": "城市",
  "castle": "城堡",
  "county": "县城",
  "duchy": "公国",
  "archduchy": "大公国",
  "kingdom": "王国",
  "empire": "帝国",
  "planet": "星球",
  "system": "系统",
  "quadrant": "象限",
  "galaxy": "星系",
  "universe": "宇宙",
  "multiverse": "多元宇宙"
 },
 "currencies": {
  "deer": "鹿",
  "lamb": "羊",
  "brick": "砖",
  "iron": "铁",
  "soldier": "士兵",
  "gold": "黄金",
  "energy": "能量",
  "ship": "船只",
  "machine": "机械",
  "research": "研究",
  "starship": "星舰",
  "wormhole": "虫洞",
  "software": "软件",
  "portal": "传送门",
  "matter": "物质",
  "existence": "存在"
 },
 "people": {
  "first": {
   "Adam": "亚当",
   "Brent": "布伦特",
   "Michael": "迈克尔",
   "Jim": "吉姆",
   "Steve": "史蒂夫",
   "Rudy": "鲁迪",
   "Mitchell": "米切尔",
   "Ben": "本",
   "Chris": "克里斯",
   "Tom": "汤姆",
   "Tracy": "特蕾西",
   "Sarah": "萨拉",
   "Julie": "朱莉",
   "Kim": "金",
   "Donna": "唐娜",
   "Michelle": "米歇尔",
   "Leslie": "莱斯利"
  },
  "last": {
   "Knope": "诺普",
   "Wyatt": "怀亚特",
   "Trager": "特雷格",
   "Haverford": "哈弗福德",
   "Mitchell": "米切尔",
   "Hill": "希尔",
   "Smith": "史密斯",
   "Jones": "琼斯",
   "Boyd": "博伊德"
  }
 }
};
  var payload = /**
 * Matter of Scale 汉化补全 —— 页面上下文载荷
 * 由 gen.js 嵌入用户脚本，在页面主世界执行：
 *  1) 劫持站点汉化插件（chs.new.js/core.js）的词典赋值，在其读取前完成增补与修正；
 *  2) 中文化浏览器原生对话框；
 *  3) 翻译 title 悬停属性（货币图标提示等）；
 *  4) 站点插件缺失时启用自带兜底翻译引擎。
 */
function (D) {
  'use strict';
  if (window.__mosI18nLoaded) return; // 防重复执行
  window.__mosI18nLoaded = true;
  var patched = false;

  // ---------- 查找表与句式函数 ----------
  var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
  var ITEMS = {}, PLURAL = {}, LEVEL = {}, LEVELPLURAL = {}, CURR = {};
  var k, i;
  for (k in D.items) ITEMS[k] = D.items[k];
  for (k in ITEMS) PLURAL[k + 's'] = ITEMS[k];
  if (D.levels) for (k in D.levels) { LEVEL[k] = D.levels[k]; LEVEL[cap(k)] = D.levels[k]; LEVELPLURAL[cap(k) + 's'] = D.levels[k]; }
  if (D.currencies) for (k in D.currencies) { CURR[k] = D.currencies[k]; CURR[cap(k)] = D.currencies[k]; }

  var FN = {
    fnBuildPrefixed: function (m, p1, p2, p3) {
      if (/^of tiers (.+)$/.test(p3)) return p1 + ' - 层级 ' + p3.slice(9) + ' 各建造 ' + p2 + ' 个';
      var z = ITEMS[p3]; return z ? p1 + ' - 建造 ' + p2 + ' ' + z : m;
    },
    fnIncomeFrom: function (m, p1, p2, p3) { var z = ITEMS[p3]; return z ? p1 + ' - 拥有 ' + p2 + ' 来自 ' + z + ' 的收入' : m; },
    fnHaveCurrency: function (m, p1, p2, p3) { var z = CURR[p3]; return z ? p1 + ' - 拥有 ' + p2 + ' ' + z : m; },
    fnGenerateCurrency: function (m, p1, p2, p3) { var z = CURR[p3]; return z ? p1 + ' - 生成 ' + p2 + ' ' + z : m; },
    fnIncomeFromBare: function (m, p1, p2) { var z = ITEMS[p2]; return z ? '拥有 ' + p1 + ' 来自 ' + z + ' 的收入' : m; },
    fnBuildBare: function (m, p1, p2) { var z = PLURAL[p2]; return z ? '建造 ' + p1 + ' ' + z : m; },
    fnToBuy: function (m, p1, p2) { var z = ITEMS[p2]; return z ? '/ 秒 (从 ' + p1 + ') 购买 ' + z : m; },
    fnAutobuyCost: function (m, p1, p2, p3) { var z = ITEMS[p1]; return z ? '自动购买 ' + z + ' 的成本 ' + p2 + ' (原为 ' + p3 + ')' : m; },
    fnDoubles: function (m, p1) { var z = ITEMS[p1]; return z ? z + ' 收入翻倍' : m; },
    fnUnlocks: function (m, p1) { var z = ITEMS[p1]; return z ? '解锁 ' + z : m; },
    fnSpawn: function (m, p1, p2, p3) { var z = LEVELPLURAL[p1]; return z ? z + ' 生成 ' + p2 + ' (从 ' + p3 + ' 开始)' : m; },
    fnCost: function (m, p1, p2, p3) { var z = LEVEL[p1]; return z ? z + ' 建筑的成本减少 ' + p2 + ' (原为 ' + p3 + ')' : m; },
    fnGain: function (m, p1, p2) { var z = LEVEL[p1]; return z ? z + ' 增益 ' + p2 : m; },
    fnIgnore: function (m, p1, p2, p3) { var z = LEVEL[p1]; return z ? z + ' 忽略 ' + p2 + ' (从 ' + p3 + ') 建筑成本' : m; },
    fnUpgSpd: function (m, p1, p2, p3) { var z = LEVELPLURAL[p1]; return z ? z + ' 生成升级点的速度从 ' + p3 + ' 提高到 ' + p2 : m; },
    fnAutoNever: function (m, p1, p2) { var z = LEVELPLURAL[p1]; return z ? '自动完成 ' + z + ' 在 ' + p2 + ' 后 (原为 从不)' : m; },
    fnAuto: function (m, p1, p2, p3) { var z = LEVELPLURAL[p1]; return z ? '自动完成 ' + z + ' 在 ' + p2 + ' 后 (原为 ' + p3 + ')' : m; },
    fnFounded: function (m, p1, p2, p3, p4) { var z = LEVELPLURAL[p1], y = LEVEL[p3]; return (z && y) ? z + ' 是在 ' + p2 + ' ' + y + '后出现(原为 ' + p4 + ')' : m; }
  };

  function applyRegs(map) {
    for (i = 0; i < D.reg.length; i++) {
      var r = D.reg[i];
      map.set(new RegExp(r[0], r[1] || ''), FN[r[2]]);
    }
  }

  // ---------- 1) 劫持站点词典 ----------
  function hook(name, patch) {
    var v;
    try { v = window[name]; } catch (e) { v = undefined; }
    try {
      Object.defineProperty(window, name, {
        configurable: true,
        get: function () { return v; },
        set: function (nv) { v = nv; try { patch(nv); } catch (e) {} }
      });
    } catch (e) { return; }
    if (v !== undefined && v !== null) { try { patch(v); } catch (e) {} }
  }

  hook('cnItems', function (v) {
    if (!v || typeof v !== 'object') return;
    patched = true;
    for (k in D.override) v[k] = D.override[k];
    for (k in D.items) if (!(k in v)) v[k] = D.items[k];
  });
  hook('cnPrefix', function (v) {
    if (!v || typeof v !== 'object') return;
    for (k in D.prefix) if (!(k in v)) v[k] = D.prefix[k];
  });
  hook('cnRegReplace', function (v) {
    if (!v || typeof v.set !== 'function' || typeof v.forEach !== 'function') return;
    var j;
    for (j = 0; j < D.dropRegs.length; j++) {
      var src = D.dropRegs[j];
      v.forEach(function (val, key) { if (key && key.source === src) v.delete(key); });
    }
    applyRegs(v);
  });

  // ---------- 2) 原生对话框中文化 ----------
  var dialogRules = [];
  for (i = 0; i < D.dialogs.length; i++) dialogRules.push([new RegExp(D.dialogs[i][0]), D.dialogs[i][1]]);
  function trDialog(msg) {
    if (typeof msg !== 'string') return msg;
    for (var i = 0; i < dialogRules.length; i++) if (dialogRules[i][0].test(msg)) return msg.replace(dialogRules[i][0], dialogRules[i][1]);
    return msg;
  }
  (function () {
    var _c = window.confirm, _a = window.alert, _p = window.prompt;
    window.confirm = function (m) { return _c.call(window, trDialog(m)); };
    window.alert = function (m) { return _a.call(window, trDialog(m)); };
    window.prompt = function (m, d) { return _p.call(window, trDialog(m), d); };
  })();

  // ---------- 3) 翻译引擎（兜底 + 属性翻译共用） ----------
  var engine = null;
  function buildEngine() {
    if (engine) return engine;
    var items = {}, prefix = {}, postfix = {}, regs = [], excl = [];
    var liveItems = (window.cnItems && typeof window.cnItems === 'object') ? window.cnItems : (D.base && D.base.items);
    var livePrefix = window.cnPrefix || (D.base && D.base.prefix);
    var livePostfix = window.cnPostfix || (D.base && D.base.postfix);
    if (liveItems) for (k in liveItems) items[k] = liveItems[k];
    if (livePrefix) for (k in livePrefix) prefix[k] = livePrefix[k];
    if (livePostfix) for (k in livePostfix) postfix[k] = livePostfix[k];
    if (window.cnRegReplace && window.cnRegReplace.forEach) {
      window.cnRegReplace.forEach(function (v, key) { regs.push([key, v]); });
    } else if (D.base && D.base.reg) {
      for (i = 0; i < D.base.reg.length; i++) regs.push([new RegExp(D.base.reg[i][0], D.base.reg[i][1] || ''), D.base.reg[i][2]]);
    }
    if (window.cnExcludeWhole) for (i = 0; i < window.cnExcludeWhole.length; i++) excl.push(window.cnExcludeWhole[i]);
    if (!excl.length) excl = [/^(\d+)$/, /^\s*$/, /^[\u4E00-\u9FA5]+$/, /^([\d\.,]+)$/];
    // 修正站点旧译文：把已被站点错译的中文文本映射回正确译文
    if (window.cnItems) for (k in D.override) {
      var old = window.cnItems[k];
      if (typeof old === 'string' && old && old !== D.override[k]) items[old] = D.override[k];
    }
    for (k in D.override) items[k] = D.override[k];
    for (k in D.items) if (!(k in items)) items[k] = D.items[k];
    for (k in D.prefix) if (!(k in prefix)) prefix[k] = D.prefix[k];
    for (i = 0; i < D.reg.length; i++) regs.push([new RegExp(D.reg[i][0], D.reg[i][1] || ''), FN[D.reg[i][2]]]);

    function tr(text) {
      if (typeof text !== 'string') return text;
      var t = text, tp = '', rp = '';
      for (var p in prefix) if (t.substr(0, p.length) === p) { tp += prefix[p]; t = t.substr(p.length); }
      for (var p2 in postfix) if (t.substr(-p2.length) === p2) { rp = postfix[p2] + rp; t = t.substr(0, t.length - p2.length); }
      for (var i = 0; i < excl.length; i++) if (excl[i].test(t)) return tp + t + rp;
      for (var j = 0; j < regs.length; j++) {
        if (regs[j][0].test(t)) return tp + t.replace(regs[j][0], regs[j][1]) + rp;
      }
      for (var k2 in items) if (items[k2] && (t === k2 || t === items[k2])) return tp + items[k2] + rp;
      return tp + t + rp;
    }
    engine = { tr: tr };
    return engine;
  }

  // ---------- 4) 兜底 DOM 走查 + 观察者 ----------
  function startFallback() {
    if (patched && typeof window.cnItem === 'function') return; // 站点引擎正使用增补后的词典
    var tr = buildEngine().tr;
    function walk(node) {
      if (!node.childNodes || !node.childNodes.length) return;
      var list = [];
      for (var i = 0; i < node.childNodes.length; i++) list.push(node.childNodes[i]);
      for (var j = 0; j < list.length; j++) {
        var sub = list[j];
        if (sub.nodeName === '#text') {
          var t = sub.textContent, c = tr(t);
          if (c !== t) sub.textContent = c;
        } else if (sub.nodeName !== 'SCRIPT' && sub.nodeName !== 'STYLE' && sub.nodeName !== 'TEXTAREA') {
          if (!sub.childNodes || !sub.childNodes.length) {
            var t2 = sub.innerText, c2 = tr(t2);
            if (t2 && c2 !== t2) sub.innerText = c2;
          } else walk(sub);
        }
      }
    }
    if (document.body) walk(document.body);
    var obs = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var m = muts[i];
        if (m.target.nodeName === 'SCRIPT' || m.target.nodeName === 'STYLE' || m.target.nodeName === 'TEXTAREA') continue;
        if (m.target.nodeName === '#text') {
          var t = m.target.textContent, c = tr(t);
          if (c !== t) m.target.textContent = c;
        } else if (m.addedNodes && m.addedNodes.length) {
          for (var j = 0; j < m.addedNodes.length; j++) {
            var n = m.addedNodes[j];
            if (n.nodeName === '#text') {
              var t2 = n.textContent, c2 = tr(t2);
              if (c2 !== t2) n.textContent = c2;
            } else if (n.nodeName !== 'SCRIPT' && n.nodeName !== 'STYLE' && n.nodeName !== 'TEXTAREA') {
              walk(n);
            }
          }
        }
      }
    });
    obs.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  // ---------- 5) title 悬停属性翻译（货币图标提示等） ----------
  function translateTitles() {
    try {
      var tr = buildEngine().tr;
      var els = document.querySelectorAll('[title]');
      for (var i = 0; i < els.length; i++) {
        var t = els[i].getAttribute('title');
        if (t) {
          var c = tr(t);
          if (c !== t) els[i].setAttribute('title', c);
        }
      }
    } catch (e) {}
  }

  // ---------- 6) 启动 ----------
  function boot() {
    try {
      if (typeof window.TransSubTextNode === 'function' && document.body) {
        window.TransSubTextNode(document.body);
        if (window.transTaskMgr && window.transTaskMgr.doTask) window.transTaskMgr.doTask();
      }
    } catch (e) {}
    startFallback();
    translateTitles();
    if (typeof setInterval === 'function') setInterval(translateTitles, 2000); // 货币图标等 title 由游戏动态重建，定期补翻
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
}
;
  try {
    var code = '(' + payload.toString() + ')(' + JSON.stringify(DATA) + ');';
    var s = document.createElement('script');
    s.textContent = code;
    (document.head || document.documentElement).appendChild(s);
    if (s.parentNode) s.parentNode.removeChild(s);
  } catch (e) {
    payload(DATA); // 注入失败时在本上下文直接执行
  }
})();
