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
    "Vinegar": "尖酸刻薄",
    "Buy Autopromote": "购买自动提升",
    "Throw Vinegar": "扔醋",
    "area": "区域",
    "area_required": "区域要求",
    "capacity": "容量",
    "Cities": "城市",
    "Citizens": "公民",
    "City Pollution": "城市污染",
    "Day": "日",
    "education_level": "教育程度",
    "energy": "能源",
    "energy_required": "能源要求",
    "fall": "落下",
    "fits": "适合",
    "fun": "娱乐",
    "Fun": "娱乐",
    "gityx.com": "gityx.com",
    "Global Pollution": "全球污染",
    "health": "健康",
    "Health": "健康",
    "Housing": "住房",
    "Job levels": "工作等级",
    "job_level": "工作等级",
    "job_priority": "工作优先级",
    "Log": "日志",
    "money_required": "资金要求",
    "not enough area or energy to build": "没有足够的面积或能源来建造",
    "not enough energy to build": "没有足够的能源来建造",
    "not enough money": "没有足够的钱",
    "operational": "操作",
    "pollution": "污染",
    "Profile": "个人资料",
    "Season": "季节",
    "Sign out": "登出",
    "sprawl": "蔓延",
    "tax rate": "税率",
    "workers_required": "工人要求",
    "Year": "年",
    "gityx": "gityx",
    "airports": "机场",
    "apartments": "公寓",
    "arenas": "竞技场",
    "bike_lanes": "自行车道",
    "bikeshare_stations": "共享单车站",
    "Build transit to add area to your city. Area is required to build most other buildings.": "建立交通以增加城市的面积。 建造大多数其他建筑物需要面积。",
    "bus_lines": "公交线路",
    "carbon_capture_plants": "碳排放处理厂",
    "civic": "公民",
    "Civic buildings add other benefits citizens like — jobs, fun, etc.": "市政建筑为市民带来其他好处，例如工作、乐趣等。",
    "coal_plants": "燃煤电厂",
    "dams": "水坝",
    "doctor_offices": "医生办公室",
    "education": "教育",
    "Education buildings will, once a year, move citizens up an education level. This allows them to work at buildings with higher job levels, and make more money (and you, too, through taxes!": "教育建筑将每年一次提升公民的教育水平。 这使他们可以在工作级别更高的建筑物中工作，并赚更多的钱（您也可以通过税收赚更多的钱！",
    "Energy buildings produce energy when they're operational. Energy is required to operate most other buildings. You need citizens to operate most of the energy buildings.": "能源建筑在运行时会产生能源。 大多数其他建筑物的运行都需要能源。 您需要公民来操作大部分能源建筑。",
    "entertainment": "娱乐",
    "Entertainment buildings have jobs, and add other intangibles to your city.": "娱乐建筑有工作，并为您的城市增加其他无形资产。",
    "factories": "工厂",
    "Health buildings increase the health of your citizens, and make them less likely to die": "健康建筑可以提高市民的健康水平，降低他们死亡的可能性",
    "high_rises": "高层建筑",
    "high_schools": "高中",
    "highways": "高速公路",
    "homeless_shelters": "无家可归者收容所",
    "hospitals": "医院",
    "housing": "住房",
    "Housing is required to retain citizens — otherwise, they'll die. Housing requires energy and area; if you run out of energy, you might run out of housing rather quickly!": "需要住房来留住公民——否则，他们就会死去。 住房需要能源和面积； 如果你用完了能量，你可能很快就会用完房子！",
    "huts": "小屋",
    "libraries": "图书馆",
    "micro_apartments": "微型公寓",
    "middle_schools": "中学",
    "multi_family_homes": "多户家庭",
    "nuclear_plants": "核电站",
    "office_buildings": "办公大楼",
    "parks": "公园",
    "research_labs": "研究实验室",
    "retail_shops": "零售商店",
    "roads": "道路",
    "schools": "学校",
    "single_family_homes": "单身家庭",
    "solar_plants": "太阳能发电厂",
    "subway_lines": "地铁线路",
    "theatres": "剧院",
    "transit": "过境",
    "universities": "大学",
    "wind_turbines": "风力发电机",
    "work": "工作",
    "Work buildings have lots of jobs to attract citizens to your city": "工作大楼有很多工作可以吸引市民到你的城市",
    "     Reset city\n   ": "     重置城市\n   ",
    "      needs\n\nworkers\n\n                            to operate\n                         ": "      需要\n\n工人\n\n                            去操作\n                         ",
    "\nCity created": "\n城市已创建",
    "winter": "冬季",
    "spring": "春季",
    "Current password": "当前密码",
    "Edit profile": "编辑个人资料",
    "Email": "邮箱",
    "Nickname": "昵称",
    "Password": "密码",
    "Password confirmation": "确认密码",
    "Update": "更新",
    "Register": "注册",
    "Reset password": "重置密码",
    "Sign in": "登录",
    "Submit": "提交",
    "     All cities are beholden to pollution. If there's enough pollution, citizens start dying. It's very expensive to remove pollution from the world. However, it's also expensive to build clean power sources.\n   ": "所有城市都受到污染的影响。 如果有足够的污染，公民就会开始死亡。 从世界上消除污染是非常昂贵的。 然而，建造清洁能源也很昂贵。\n",
    "     Your job is to create a great city. A city that attracts citizens from other cities. Citizens are picky — some prefer low tax rates (which will leave you with less money), and some prefer higher-levelled jobs (which will be expensive to develop.)\n   ": "你的工作是创造一个伟大的城市。 一个吸引其他城市市民的城市。 公民是挑剔的——有些人喜欢低税率（这会让你的钱更少），有些人喜欢更高层次的工作（这将是开发成本高昂的。）\n",
    "This is an MMO about urban design & civilization collapse.": "这是一个关于城市设计和文明崩溃的 MMO 游戏。",
    "\n              your city\n": "\n              你的城市\n",
    "not enough area to build": "没有足够的区域去建造",
    "      needs\n\nmoney\n\n                            to operate\n                         ": "      需要\n\n资金\n\n                            去操作\n                         ",
    "Pollution ceiling": "污染上限",
    "Global pollution": "全球污染",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "\t": "\t",
    ": ": "： ",
    "\n           ": "\n           ",
    "\n          ": "\n          ",
    "\n         ": "\n         ",
    "\n        ": "\n        ",
    "\n": "\n",
    "          ": "          ",
    "        ": "        ",
    " ": "",
    "↓  ": "↓  ",
    "Active Rankers: ": "活跃排名者：",
    "Round Base Point Requirement: ": "回合基础点数要求：",
    "Ladder Base Point Requirement: ": "天梯基础点数要求：",
    "Ladder: ": "天梯：",
    "Message length: ": "消息长度",
    "Round: ": "回合：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "\n                       ": "\n                       ",
    "\n                   ": "\n                   ",
    "\n                 ": "\n                 ",
    "\n             ": "\n             ",
    "\n           ": "\n           ",
    "\n         ": "\n         ",
    "\n       ": "\n       ",
    "\n     ": "\n     ",
    "/day": "/天",
    "Money": "资金",
    "Area": "区域",
    "Income": "收入",
    "Expenses": "支出",
    "Energy": "能源",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)\:(\d+)\:(\d+)$/,
    /^(\d+)$/,
    /^\-(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
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
    [/^(\d+) hours$/, '$1 小时'],
    [/^(\d+) Multi$/, '$1 乘数'],
    [/^(\d+) Bias$/, '$1 偏见'],
    [/^\n(\d+) pollution generated\n$/, '\n造成 $1 污染\n'],
    [/^(\d+) energy generated$/, '$1 产生的能源'],
    [/^\n            (\d+)\n\n          citizens$/, '\n            $1\n\n          市民'],
    [/^\n            (\d+)\n\n          total jobs$/, '\n            $1\n\n          总工作'],
    [/^(\d+) area generated$/, '生成区域 $1'],
    [/^(\d+) housing provided$/, '提供住房 $1'],
    [/^(\d+) workers employed at level (\d+)$/, '$1 受雇的工人等级 $2'],
    [/^\n(\d+) pollution generated per building per (\d+) citizens\n$/, '\n每 $2 位市民每栋建筑产生 $1 污染\n'],
    [/^\n(\d+)\n\n          citizens$/, '\n$1\n\n          市民'],
    [/^\n(\d+)\n\n          total jobs$/, '\n$1\n\n          总工作'],
    [/^CON \+(\d+)$/, '体质 \+$1'],
    [/^HP \+(\d+)$/, '生命值 \+$1'],
    [/^INT \+(\d+)$/, '智力 \+$1'],
    [/^STR \+(\d+)$/, '力量 \+$1'],
    [/^GOLD \+(\d+)$/, '金币 \+$1'],
    [/^Level (\d+)$/, '等级 $1'],
    [/^\n(.+) \(edu lvl (\d+)\) had a child: (.+) \(edu lvl (\d+)\)$/, '\n$1（教育等级 $2）有了一个孩子：$3（教育等级 $4）'],
    [/^\n(.+) \(edu lvl (\d+)\) just moved here from (.+)$/, '\n$1（教育等级 $2）刚从 $3 搬到这里'],
    [/^\n(.+) \(edu lvl (\d+)\) moved to (.+)$/, '\n$1（教育等级 $2）搬到了 $3'],
    [/^You have (.+) ILP$/, '你有 $1 ILP'],
    [/^Buy for (.+) gold$/, '购买需要 $1 金币'],
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
