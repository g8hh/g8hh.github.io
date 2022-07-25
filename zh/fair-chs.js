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
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
