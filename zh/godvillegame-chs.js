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
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Salvage 1,000,000 astralium.": "打捞 1,000,000 颗星晶石。",
    "Supporting Perfect Kids": "辅助完美的孩子",
    "A new festival \"Coke's Festival\" has started! Stat Boosts: STR +20%, AGI +20%, CON +20%, DEX +20%, INT +20%, LUK +20%. It will last 3 days.": "新的节日“可乐节”开始了！ 属性提升：力量 +20%，敏捷 +20%，体质 +20%，敏捷 +20%，智力 +20%，运气 +20%。 它将持续3天。",
    "A new festival \"Coke's 1★ Ascension\" has started! Stat Boosts: XP +1%, GOLD +1%, SALVAGE +1%. It will last 3 days.": "新的节日“可乐1★提升”开始了！ 统计提升：XP +1%，黄金 +1%，打捞 +1%。 它将持续3天。",
    //原样
    'no title': '无称号',
    'not maximosa': '不是男的',
    'not a bear': '不是熊',
    'Bieco Tartufi': '比科·塔尔图菲',
    'Gubloth': '古布洛斯',
    'Chromordax': '色杆菌',
    'Kryba': '克雷巴',
    'Delver': '钻探',
    'Audrisy': 'Audrisy',
    'axirr': 'axirr',
    'AMOLED': 'AMOLED',
    'Ömölèt Dû FrÖmàgè': 'Ömölèt Dû FrÖmàgè',
    'Dangerous Cave Area': '危险洞穴地区',
    'Denier': '丹尼尔',
    'Drunk': '醉鬼',
//    'Ascended': '已转生',
//    "Golden Child": "金童子",
//    'Consumerist': '消费主义',
//    'Goldsent': '散财童子',
    'Ascended': 'Ascended',
    "Golden Child": "Golden Child",
    'Consumerist': 'Consumerist',
    'Goldsent': 'Goldsent',
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
    "\n           ": "\n           ",
    "\n          ": "\n          ",
    "\n         ": "\n         ",
    "\n        ": "\n        ",
    " ": "",
    "↓  ": "↓  ",
    "": "",
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
    /^(.+) PM$/,
    /^(.+) PM$/,
    /^(.+) AM$/,
    /^欢迎 (.+) 来到 放置大陆！$/,
    /^\[(\d+),(\d+)\]$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)$/,
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
    [/^(\d+) hours$/, '$1 小时'],
    [/^Touched (\d+) times$/, '触碰 $1 次'],
    [/^CON \+(\d+)$/, '体质 \+$1'],
    [/^HP \+(\d+)$/, '生命值 \+$1'],
    [/^INT \+(\d+)$/, '智力 \+$1'],
    [/^STR \+(\d+)$/, '力量 \+$1'],
    [/^GOLD \+(\d+)$/, '金币 \+$1'],
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
