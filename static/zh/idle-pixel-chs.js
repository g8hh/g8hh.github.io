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
    "OPEN CHEST": "打开宝箱",
    "Other Items": "其它物品",
    "OFFLINE TIME": "离线时长",
    "Close": "关闭",
    "Click to resume": "点击返回",
    "CHAT TAGS": "聊天标签",
    "Collect Loot": "收集战利品",
    "Color": "颜色",
    "COMBAT": "战斗",
    "While you were gone, your account ran for": "当您离开时，您的帐户运行了",
    "Each upgrade allows you to find the next tier of geodes.": "每次升级都可以让您找到下一层的 晶状体。",
    "Each upgrade allows you to undo higher level armour.": "每次升级都可以让您撤消更高级别的盔甲。",
    "Each upgrade increases your chance at finding seeds by 5%.": "每次升级都会使您找到种子的机会增加 5%。",
    "Each upgrade increases your fishing xp when catching fish by 5%.": "每次升级都会使您在捕鱼时的捕鱼经验增加 5%。",
    "Each upgrade increases your logs by +5 for every tree.": "每次升级都会为每棵树增加 +5 的日志。",
    "Each upgrade increases your potion time by 25%.": "每次升级都会使您的药水时间增加 25%。",
    "Each upgrade reduces the amount of stardust required when converting bars into XP.": "每次升级都会减少将金条转换为 XP 所需的星尘量。",
    "Each upgrade reduces the amount of stardust required when converting ores into XP.": "每次升级都会减少将矿石转化为 XP 所需的星尘数量。",
    "Each work collects": "每件作品都收藏",
    "Easy": "简单",
    "Eel": "鳗鱼",
    "EMERALD KEY": "翡翠钥匙",
    "Energy": "活力",
    "Energy Required": "所需能量",
    "Ent": "耳鼻喉科",
    "Enter Amount": "输入金额",
    "Enter amount to brew": "输入要冲泡的量",
    "Enter amount to sell": "输入要出售的金额",
    "Enter the amount of items you wish to convert into XP": "输入您希望转换为 XP 的物品数量",
    "Expires in": "过期日期在",
    "Extra fishing XP earned": "获得额外钓鱼经验",
    "FARADOX GUARDIANS": "法拉多守护者",
    "Faradox's Gaurdian": "法拉多克斯的高尔迪安",
    "Faradox's Introduction": "法拉多克斯简介",
    "FARM PATCHES": "农场补丁",
    "here": "这里",
    "Login": "登录",
    "\n\n                Username:\n               ": "\n\n                用户名:\n               ",
    "Create an account": "创建1个账号",
    "Password:\n               ": "密码:\n               ",
    "Remember me": "记住我",
    "Requires Oil": "需要油",
    "RINGS": "戒指",
    "RUBY KEY": "红宝石钥匙",
    "Running": "跑步",
    "Salmon": "三文鱼",
    "SAPPHIRE KEY": "蓝宝石钥匙",
    "Sardine": "沙丁鱼",
    "Save": "保存",
    "Scary": "可怕",
    "SECONMDARY": "中学",
    "SELECT 3 RANDOM CARDS": "选择 3 张随机卡片",
    "SELECT AN AREA TO FIGHT": "选择一个区域进行战斗",
    "Select an option": "选择一个选项",
    "Select an Option": "选择一个选项",
    "SELECT ITEM": "选择物品",
    "SELECT ITEM TO SELL": "选择要出售的物品",
    "SELECT LOG TO BURN": "选择要刻录的日志",
    "SELECT ORE TO SMELT": "选择要冶炼的矿石",
    "Sell": "出售",
    "Sell Item": "出售物品",
    "Sellable Donor Coins": "可出售的捐赠硬币",
    "SEND": "发送",
    "SETTINGS": "设置",
    "Settings   ": "设置",
    "Shark": "鲨鱼",
    "Shiny Resources": "闪亮的资源",
    "SHOP": "商店",
    "Shrimp": "虾",
    "Sigil": "印记",
    "Sigils": "印记",
    "SILVER\n               ": "银\n",
    "Skill": "技能",
    "Skill required: Farming": "所需技能：农业",
    "Skill required: Fishing": "所需技能：钓鱼",
    "Skill required: Mining": "所需技能：采矿",
    "Skill required: Woodcutting": "所需技能：木刻",
    "Skills": "技能",
    "Skills Required: All": "所需技能：全部",
    "Skills Required: Cooking": "所需技能：烹饪",
    "Smelt": "冶炼",
    "SOCIAL MEDIA": "社交媒体",
    "Socket Scroll": "插槽滚动",
    "SOCKETS": "插座",
    "SOUND": "声音",
    "SPAM CLICK THE ROCK!": "垃圾邮件点击岩石！",
    "Special Event": "特别活动",
    "special event.": "特别活动。",
    "Speed": "速度",
    "Stardust Expert": "星尘专家",
    "stardust per XP is required.": "需要每个 XP 的星尘。",
    "START GATHERING": "开始聚会",
    "STATS\n       ": "统计数据\n",
    "Submit": "提交",
    "Swordfish": "旗鱼",
    "Tag": "标签",
    "Take Picture": "拍照",
    "Tank": "罐",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "\n                ": "\n                ",
    "\n               ": "\n               ",
    "\n           ": "\n           ",
    "\n          ": "\n          ",
    "\n         ": "\n         ",
    "\n        ": "\n        ",
    "   ": "   ",
    " ": " ",
    "↓  ": "↓  ",
    "Active Rankers: ": "活跃排名者：",
    "Round Base Point Requirement: ": "回合基础点数要求：",
    "Ladder Base Point Requirement: ": "天梯基础点数要求：",
    "Ladder: ": "天梯：",
    "Message length: ": "消息长度",
    "Round: ": "回合：",
    "Market Graphs": "市场走势",
    "Hiscores": "历史分数",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    "\n              ": "\n              ",
    "\n           ": "\n           ",
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
    /^\(([\d\.]+)\):$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)T$/,
    /^(.+) PM$/,
    /^(.+) PM$/,
    /^(.+) PM$/,
    /^(.+) AM$/,
    /^欢迎 (.+) 来到 放置大陆！$/,
    /^\[(\d+),(\d+)\]$/,
    /^\[(\d+):(\d+)\]$/,
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
