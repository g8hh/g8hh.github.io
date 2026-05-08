// ==UserScript==
// @name         锅巴汉化 - 汉化注入器
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Web汉化脚本
// @author       技术：麦子、JAR、小蓝、好阳光的小锅巴   汉化：林雷丨LinLei_Baruch
// @match        *://*/*
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    // ================= 开关控制 =================
    const isEnabled = GM_getValue('translation_enabled', true);
    GM_registerMenuCommand(isEnabled ? "🟢 汉化已开启 (点击关闭)" : "🔴 汉化已关闭 (点击开启)", () => {
        GM_setValue('translation_enabled', !isEnabled);
        location.reload();
    });

    const isBgRunEnabled = GM_getValue('background_run_enabled', false);
    GM_registerMenuCommand(isBgRunEnabled ? "🟢 后台挂机已开启 (点击关闭)" : "🔴 后台挂机已关闭 (点击开启)", () => {
        GM_setValue('background_run_enabled', !isBgRunEnabled);
        location.reload();
    });

    // ================= 后台挂机注入 =================
    if (isBgRunEnabled) {
        // 1. 媒体播放法：通过播放极低音量的循环音频，欺骗浏览器保持后台活跃 (解决浏览器底层的节流休眠)
        const startBackgroundAudio = () => {
            if (window.__bgAudioStarted) return;
            const audio = new Audio('https://download.samplelib.com/mp3/sample-9s.mp3');
            audio.loop = true;
            audio.volume = 0.01; // 音量极低，不影响正常使用
            
            audio.play().then(() => {
                window.__bgAudioStarted = true;
                console.log("🟢 锅巴汉化：后台挂机音频已启动，浏览器防休眠已激活！");
            }).catch(() => {
                // 如果被浏览器自动播放策略拦截，静默等待用户交互
            });
        };
        // 尝试在页面加载时立即播放
        startBackgroundAudio();
        // 监听用户交互以绕过浏览器的自动播放限制（只要玩家点了一下页面，立刻启动挂机）
        const initAudioOnInteract = () => {
            startBackgroundAudio();
            if (window.__bgAudioStarted) {
                document.removeEventListener('click', initAudioOnInteract);
                document.removeEventListener('keydown', initAudioOnInteract);
            }
        };
        document.addEventListener('click', initAudioOnInteract);
        document.addEventListener('keydown', initAudioOnInteract);
        // 2. 页面可见性劫持：防止某些游戏自带的代码检测到切换标签页而自动暂停
        const bgScript = document.createElement('script');
        bgScript.textContent = `
            (function() {
                try {
                    Object.defineProperty(document, 'hidden', { get: () => false });
                    Object.defineProperty(document, 'webkitHidden', { get: () => false });
                    Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });
                    
                    const events = ['visibilitychange', 'webkitvisibilitychange', 'blur', 'focus', 'pagehide'];
                    for (let ev of events) {
                        document.addEventListener(ev, e => e.stopImmediatePropagation(), true);
                        window.addEventListener(ev, e => e.stopImmediatePropagation(), true);
                    }
                    console.log("🟢 锅巴汉化：游戏防暂停劫持已激活！");
                } catch (e) {}
            })();
        `;
        if (document.head || document.documentElement) {
            (document.head || document.documentElement).appendChild(bgScript);
            bgScript.remove(); // 保持DOM整洁
        }
    }
    if (!isEnabled) {
        console.log("汉化注入器已关闭。");
        return;
    }

    // ================= 字典数据 =================
    const cnItems = {

        //设置：
        'Save': '保存',
        'Export': '导出',
        'Import': '导入',
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",

        // 过滤不需要汉化的文本
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
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
        '': '',
    };

    //需处理的前缀，此处可以截取语句开头部分的内容进行汉化
    const cnPrefix = {
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
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
    };

    //需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
    const cnPostfix = {
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
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
    };

    //需排除的，正则匹配
    const cnExcludeWhole = [
        /^(\d+)$/, /^\s*$/, /^([\d\.]+):([\d\.]+)$/, /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
        /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/, /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
        /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/, /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
        /^([\d\.]+)e(\d+)$/, /^([\d\.]+)$/, /^\(([\d\.]+)\)$/, /^([\d\.]+)\%$/,
        /^([\d\.]+)\/([\d\.]+)$/, /^\(([\d\.]+)\/([\d\.]+)\)$/, /^成本(.+)$/,
        /^\(([\d\.]+)\%\)$/, /^([\d\.]+)K$/, /^([\d\.]+)M$/, /^([\d\.]+)B$/,
        /^([\d\.]+) K$/, /^([\d\.]+) M$/, /^([\d\.]+) B$/, /^([\d\.]+)s$/,
        /^([\d\.]+)x$/, /^x([\d\.]+)$/, /^([\d\.,]+)$/, /^\+([\d\.,]+)$/,
        /^\-([\d\.,]+)$/, /^([\d\.,]+)x$/, /^x([\d\.,]+)$/, /^([\d\.,]+) \/ ([\d\.,]+)$/,
        /^([\d\.]+)e([\d\.,]+)$/, /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
        /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/, /^([\d\.]+)e\+([\d\.,]+)$/,
        /^e([\d\.]+)e([\d\.,]+)$/, /^x([\d\.]+)e([\d\.,]+)$/, /^([\d\.]+)e([\d\.,]+)x$/,
        /^[\u4E00-\u9FA5]+$/
    ];

    const cnExcludePostfix = [];

    const cnRegReplace = new Map([]);

    // ================= 核心翻译逻辑 =================
    function cnItem(text, node) {
        if (typeof (text) != "string" || !text) return text;
        let textori = text;

        // 处理前缀/后缀/排除逻辑 (保持原样)
        let text_prefix = "";
        for (let prefix in cnPrefix) { if (text.startsWith(prefix)) { text_prefix += cnPrefix[prefix]; text = text.substr(prefix.length); } }
        let text_postfix = "";
        for (let postfix in cnPostfix) { if (text.endsWith(postfix)) { text_postfix = cnPostfix[postfix] + text_postfix; text = text.substr(0, text.length - postfix.length); } }
        
        for (let reg of cnExcludeWhole) { if (reg.test(text.trim())) return textori; }

        // 核心替换
        if (cnItems[text]) return text_prefix + cnItems[text] + text_postfix;

        // 正则替换
        for (let [key, value] of cnRegReplace.entries()) {
            if (key.test(text)) return text_prefix + text.replace(key, value) + text_postfix;
        }

        return textori;
    }

    // 翻译属性的工具函数
    function translateAttribute(el, attrName) {
        const original = el.getAttribute(attrName);
        if (!original) return;
        const translated = cnItem(original, el);
        if (translated !== original) {
            el.setAttribute(attrName, translated);
        }
    }

    function translateNode(rootNode) {
        if (!rootNode) return;

        // 1. 翻译文本节点
        let walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT, null, false);
        let textNode;
        while (textNode = walker.nextNode()) {
            let parent = textNode.parentNode;
            if (parent && ['SCRIPT', 'STYLE', 'CODE'].includes(parent.nodeName)) continue;
            let translated = cnItem(textNode.nodeValue, textNode);
            if (textNode.nodeValue !== translated) textNode.nodeValue = translated;
        }

        // 2. 翻译属性节点 (搜索框、提示等)
        const elements = rootNode.nodeType === Node.ELEMENT_NODE ? [rootNode, ...rootNode.querySelectorAll('*')] : rootNode.querySelectorAll?.('*') || [];
        for (let el of elements) {
            if (['SCRIPT', 'STYLE'].includes(el.tagName)) continue;
            
            // 翻译常见文本属性
            translateAttribute(el, 'placeholder');
            translateAttribute(el, 'title');
            translateAttribute(el, 'alt');
            translateAttribute(el, 'aria-label');
            translateAttribute(el, 'data-tooltip');

            // 翻译按钮的 value
            if (el.tagName === 'INPUT' && ['button', 'submit', 'reset'].includes(el.type)) {
                const val = el.value;
                const tVal = cnItem(val, el);
                if (val !== tVal) el.value = tVal;
            }

            // 穿透 Shadow DOM
            if (el.shadowRoot) translateNode(el.shadowRoot);
        }
    }

    // ================= 启动与监听 =================
    console.log("锅巴汉化：正在注入汉化...");
    translateNode(document.body);

    const observer = new MutationObserver(function (mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        let t = cnItem(node.nodeValue, node);
                        if (node.nodeValue !== t) node.nodeValue = t;
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        translateNode(node);
                    }
                });
            } else if (mutation.type === 'characterData') {
                let t = cnItem(mutation.target.nodeValue, mutation.target);
                if (mutation.target.nodeValue !== t) mutation.target.nodeValue = t;
            } else if (mutation.type === 'attributes') {
                // 监听搜索框占位符等属性变化
                const attr = mutation.attributeName;
                const target = mutation.target;
                if (['placeholder', 'title', 'alt', 'aria-label', 'data-tooltip'].includes(attr)) {
                    translateAttribute(target, attr);
                } else if (attr === 'value' && target.tagName === 'INPUT') {
                    const tVal = cnItem(target.value, target);
                    if (target.value !== tVal) target.value = tVal;
                }
            }
        }
    });

    observer.observe(document.body, { 
        childList: true, 
        subtree: true, 
        characterData: true,
        attributes: true,
        attributeFilter: ['placeholder', 'value', 'title', 'alt', 'aria-label', 'data-tooltip']
    });

})();