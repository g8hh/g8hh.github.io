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
    "Account": "帐户",
    "Accuracy": "命中",
    "Actions": "行动",
    "Amethyst": "紫晶",
    "Armour": "盔甲",
    "Attack": "攻击",
    "Attack Speed": "攻击速度",
    "Bass": "低音",
    "Birch Log": "桦木原木",
    "Birch Tree": "白桦树",
    "Black Snake": "黑蛇",
    "Body": "身体",
    "Bone": "骨",
    "Boots": "靴子",
    "Buy": "买",
    "CHARACTER": "特点",
    "Cherry": "樱桃",
    "Coal Rock": "煤",
    "Cobalt Bar": "钴棒",
    "Cobalt Body": "钴甲",
    "Cobalt Boots": "钴靴",
    "Cobalt Fishing Rod": "钴钓鱼竿",
    "Cobalt Hammer": "钴锤",
    "Cobalt Hatchet": "钴斧头",
    "Cobalt Helmet": "钴头盔",
    "Cobalt Pickaxe": "钴镐",
    "Cobalt Rock": "钴矿石",
    "Cobalt Sword": "钴剑",
    "Cod": "鳕鱼",
    "Combat": "战斗",
    "Combat Level": "战斗等级",
    "COMMUNITY": "社区",
    "Consumables": "消耗品",
    "Cooked Salmon": "熟三文鱼",
    "Cooked Shrimp": "熟虾",
    "Cooking": "烹饪",
    "Copper Bar": "铜条",
    "Copper Body": "铜甲",
    "Copper Boots": "铜靴",
    "Copper Fishing Rod": "铜钓竿",
    "Copper Hammer": "铜锤",
    "Copper Hatchet": "铜斧头",
    "Copper Helmet": "铜头盔",
    "Copper Ore": "铜矿",
    "Copper Pickaxe": "铜镐",
    "Copper Rock": "铜矿石",
    "Copper Sword": "铜剑",
    "Crafting Material": "制作材料",
    "Damage": "伤害",
    "Date": "日期",
    "Defense": "防御",
    "Details": "详情",
    "Each": "每个",
    "Emerald": "翡翠",
    "Empty": "空",
    "Equipment": "装备",
    "Fight": "斗争",
    "Fishing": "钓鱼",
    "Fishing Bait": "鱼饵",
    "Fishing Rod": "钓竿",
    "Food": "食物",
    "Forging": "锻压",
    "Game Version": "游戏版本",
    "Gather": "收集",
    "gityx": "吉蒂克斯",
    "Gloves": "手套",
    "Goblin": "地精",
    "Goblin Chief": "哥布林酋长",
    "Gold Bar": "金条",
    "Gold Body": "金甲",
    "Gold Boots": "金靴",
    "Gold Fishing Rod": "黄金钓竿",
    "Gold Hammer": "金锤",
    "Gold Hatchet": "金斧头",
    "Gold Helmet": "金头盔",
    "Gold Pickaxe": "金镐",
    "Gold Rock": "金矿石",
    "Gold Sword": "金剑",
    "Green Apple": "青苹果",
    "Green Slime": "绿色史莱姆",
    "Grey Wolf": "灰狼",
    "Griffin": "格里芬",
    "Hatchet": "斧头",
    "Health": "健康",
    "Helmet": "头盔",
    "Hide Welcome Back messages while online": "在线时隐藏欢迎返回消息",
    "Inventory": "仓库",
    "Iron Bar": "铁条",
    "Iron Body": "铁甲",
    "Iron Boots": "铁靴",
    "Iron Fishing Rod": "铁钓竿",
    "Iron Hammer": "铁锤",
    "Iron Hatchet": "铁斧",
    "Iron Helmet": "铁盔",
    "Iron Pickaxe": "铁镐",
    "Iron Rock": "铁矿石",
    "Iron Sword": "铁剑",
    "Ironwood RPG": "铁木角色扮演游戏",
    "Item": "物品",
    "Items": "物品",
    "Leaderboards": "排行榜",
    "Leaf Hopper": "叶蝉",
    "Level Up": "升级了",
    "Link Status": "链接状态",
    "Linked": "链接",
    "List Item": "物品清单",
    "Lobster": "龙虾",
    "Loot": "获取",
    "Mahogany Tree": "红木树",
    "Main Hand": "主手",
    "Market": "市场",
    "Materials": "材料",
    "Merchant": "商人",
    "Mining": "采矿",
    "Misc": "杂项",
    "MISC": "杂项",
    "My Listings": "我的清单",
    "Off Hand": "非手",
    "Owned": "拥有",
    "Pickaxe": "镐",
    "Pine Log": "松原木",
    "Pine Tree": "松树",
    "Preferences": "喜好",
    "Price": "价格",
    "Raw Bass": "生贝司",
    "Raw Salmon": "生鲑鱼",
    "Raw Shrimp": "生虾",
    "Red Frog": "红蛙",
    "Reddit": "红迪网",
    "Requires": "需要",
    "Ruby": "红宝石",
    "Salmon": "三文鱼",
    "Settings": "设置",
    "Shrimp": "虾",
    "Sign out": "登出",
    "Silver Bar": "银条",
    "Silver Body": "银甲",
    "Silver Boots": "银靴",
    "Silver Fishing Rod": "银色钓鱼竿",
    "Silver Hammer": "银锤",
    "Silver Hatchet": "银斧",
    "Silver Helmet": "银头盔",
    "Silver Pickaxe": "银镐",
    "Silver Rock": "银矿石",
    "Silver Sword": "银剑",
    "SKILLS": "技能",
    "Smelting": "冶炼",
    "Smithing": "锻造",
    "Snail": "蜗牛",
    "Spruce Log": "云杉原木",
    "Spruce Tree": "云杉树",
    "Stats": "统计数据",
    "Stop & Loot": "停止 & 收集",
    "Stop Action": "停止动作",
    "Strength": "力量",
    "Teak Log": "柚木原木",
    "Teak Tree": "柚木树",
    "Tools": "工具",
    "Topaz": "黄玉",
    "Total": "全部的",
    "Tree Stump": "树桩",
    "Venus Flytrap": "捕蝇草",
    "Wood Fishing Rod": "木钓竿",
    "Wood Hammer": "木锤",
    "Wood Hatchet": "木斧",
    "Wood Pickaxe": "木镐",
    "Wood Sword": "木剑",
    "Woodcutting": "伐木",
    "Continue": "继续",
    "Gained": "获得了",
    "Idle for": "放置了",
    "Loot Gathered": "战利品收集",
    "Mining XP": "采矿经验",
    "Minute": "分",
    "Second": "秒",
    "Skill Improvements": "技能提升",
    "Welcome Back": "欢迎回来",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
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
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
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
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+) \/ ([\d\.]+) XP$/, '$1 \/ $2 经验值'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)s Attack Speed$/, '$1秒 攻击速度'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^\+([\d\.,]+)\% Woodcutting Speed$/, '\+$1\% 伐木速度'],
    [/^\+([\d\.,]+)\% Mining Speed$/, '\+$1\% 采矿速度'],
    [/^\+([\d\.,]+)\% Fishing Speed$/, '\+$1\% 钓鱼速度'],
    [/^([\d\.,]+)\% Woodcutting Speed$/, '$1\% 伐木速度'],
    [/^([\d\.,]+)\% Mining Speed$/, '$1\% 采矿速度'],
    [/^([\d\.,]+)\% Fishing Speed$/, '$1\% 钓鱼速度'],
    [/^([\d\.,]+)\% Speed$/, '$1\% 速度'],
    [/^\+([\d\.,]+) Health$/, '\+$1 生命值'],
    [/^\+([\d\.,]+) Damage$/, '\+$1 伤害'],
    [/^\+([\d\.,]+) Defense$/, '\+$1 防御'],
    [/^([\d\.,]+) Wood Pickaxe$/, '$1 木镐'],
    [/^([\d\.,]+) Listings$/, '$1 队列'],
    [/^Lv. ([\d\.,]+)$/, '等级 $1'],
    [/^([\d\.,]+) XP$/, '$1 经验值'],
    [/^([\d\.,]+) Iron Ore$/, '$1 铁矿石'],
    [/^([\d\.,]+) Coal Ore$/, '$1 煤'],
    [/^([\d\.,]+) Cobalt Ore$/, '$1 钴矿石'],
    [/^([\d\.,]+) Silver Ore$/, '$1 银矿石'],
    [/^([\d\.,]+) Gold Ore$/, '$1 金矿石'],
    [/^([\d\.,]+) Copper Ore$/, '$1 铜矿石'],
    [/^([\d\.,]+) Iron Bar$/, '$1 铁锭'],
    [/^([\d\.,]+) Cobalt Bar$/, '$1 钴锭'],
    [/^([\d\.,]+) Silver Bar$/, '$1 银锭'],
    [/^([\d\.,]+) Gold Bar$/, '$1 金锭'],
    [/^([\d\.,]+) Copper Bar$/, '$1 铜锭'],
    [/^([\d\.,]+) Iron Boots$/, '$1 铁靴'],
    [/^([\d\.,]+) Cobalt Boots$/, '$1 钴靴'],
    [/^([\d\.,]+) Silver Boots$/, '$1 银靴'],
    [/^([\d\.,]+) Gold Boots$/, '$1 金靴'],
    [/^([\d\.,]+) Copper Boots$/, '$1 铜靴'],
    [/^([\d\.,]+) Ruby$/, '$1 红宝石'],
    [/^([\d\.,]+) Health$/, '$1 生命值'],
    [/^([\d\.,]+) Damage$/, '$1 伤害'],
    [/^([\d\.,]+) Defense$/, '$1 防御'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],
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
