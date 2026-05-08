// ==UserScript==
// @name         锅巴汉化 - 文本提取器
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  便捷提取网页未汉化文本，支持输入框、提示框、去重、统计、导出TXT。
// @author       麦子、JAR、小蓝、好阳光的小锅巴 (优化: AI)
// @match        *://*/*
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';

    // 存储已提取的文本
    const extractedTexts = new Set();

    // 过滤规则
    const excludeRegs = [
        /^(\d+)$/, /^\s*$/, /^([\d\.]+):([\d\.]+)$/, /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
        /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/, /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
        /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/, /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
        /^([\d\.]+)e(\d+)$/, /^([\d\.]+)$/, /^\(([\d\.]+)\)$/, /^([\d\.]+)\%$/,
        /^([\d\.]+)\/([\d\.]+)$/, /^\(([\d\.]+)\/([\d\.]+)\)$/, /^\(([\d\.]+)\%\)$/,
        /^([\d\.]+)K$/, /^([\d\.]+)M$/, /^([\d\.]+)B$/, /^([\d\.]+)s$/, /^([\d\.]+)x$/,
        /^x([\d\.]+)$/, /^([\d\.,]+)$/, /^\+([\d\.,]+)$/, /^\-([\d\.,]+)$/,
        /^([\d\.,]+)x$/, /^x([\d\.,]+)$/, /^([\d\.,]+) \/ ([\d\.,]+)$/,
        /^([\d\.]+)e([\d\.,]+)$/, /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/
    ];

    // 判断文本是否需要提取
    function isValidText(text) {
        if (typeof text !== 'string' || !text) return false;
        let t = text.trim();
        if (t.length === 0) return false;
        if (/^[\d\s\.,:\-\+\*/=%\(\)\[\]{}<>!@#\$&\^]+$/.test(t)) return false; // 纯数字和符号
        if (/[\u4E00-\u9FA5]/.test(t)) return false; // 已包含中文
        for (let reg of excludeRegs) {
            if (reg.test(t)) return false;
        }
        return true;
    }

    // 添加文本到集合并触发UI更新
    let addedCountInBatch = 0;
    function tryAddText(text) {
        if (isValidText(text) && !extractedTexts.has(text)) {
            extractedTexts.add(text);
            addedCountInBatch++;
            return true;
        }
        return false;
    }

    // 提取节点文本及特殊属性（核心强化部分）
    function extractFromNode(node) {
        addedCountInBatch = 0;

        // 1. 提取常规文本节点 (移除了对 TEXTAREA 的屏蔽，增加了对 CODE 的屏蔽)
        let walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
        let textNode;
        while (textNode = walker.nextNode()) {
            if (textNode.parentNode && ['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE'].includes(textNode.parentNode.nodeName)) continue;
            tryAddText(textNode.nodeValue);
        }

        // 2. 提取元素属性 (输入框、搜索框、提示文字等)
        if (node.nodeType === Node.ELEMENT_NODE) {
            const elements = [node, ...node.querySelectorAll('*')];
            for (let el of elements) {
                // 提取输入框/文本域的占位符
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    tryAddText(el.getAttribute('placeholder'));
                    // 提取按钮类型的 value
                    if (['button', 'submit', 'reset'].includes(el.type)) {
                        tryAddText(el.value);
                    }
                }
                // 提取常见隐藏/提示属性
                tryAddText(el.getAttribute('title'));
                tryAddText(el.getAttribute('alt'));
                tryAddText(el.getAttribute('aria-label'));
                tryAddText(el.getAttribute('data-tooltip'));
                
                // 3. 穿透 Shadow DOM (若存在)
                if (el.shadowRoot) {
                    extractFromNode(el.shadowRoot);
                }
            }
        }

        if (addedCountInBatch > 0) updateUI();
        return addedCountInBatch;
    }

    // ================= WIN 95 UI 构建 =================
    const uiConfig = { width: '240px', top: '20px', right: '20px', left: null };
    const savedPos = localStorage.getItem('guobaExtractorPos');
    if (savedPos) {
        try {
            const pos = JSON.parse(savedPos);
            if (pos.top && pos.left) { uiConfig.top = pos.top; uiConfig.left = pos.left; uiConfig.right = 'auto'; }
        } catch (e) {}
    }

    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed; top: ${uiConfig.top}; ${uiConfig.left ? `left: ${uiConfig.left};` : `right: ${uiConfig.right};`}
        width: ${uiConfig.width}; background: #c0c0c0; border: 2px solid; border-color: #dfdfdf #000 #000 #dfdfdf;
        box-shadow: inset 1px 1px #fff, inset -1px -1px #808080;
        font-family: 'MS Sans Serif', Tahoma, Arial, sans-serif; font-size: 12px; color: #000;
        z-index: 2147483647; user-select: none;
    `;

    const titleBar = document.createElement('div');
    titleBar.style.cssText = `background: #000080; color: #fff; padding: 3px 5px; font-weight: bold; display: flex; justify-content: space-between; align-items: center; cursor: move;`;

    const closeBtn = document.createElement('button');
    closeBtn.id = 'win95-close'; closeBtn.innerText = 'X';
    closeBtn.style.cssText = `background: #c0c0c0; border: 2px solid; border-color: #fff #000 #000 #fff; box-shadow: inset 1px 1px #dfdfdf, inset -1px -1px #808080; font-size: 10px; font-weight: bold; width: 16px; height: 16px; padding: 0; cursor: pointer; color: #000; display: flex; justify-content: center; align-items: center;`;

    const titleSpan = document.createElement('span'); titleSpan.innerText = '文本提取器';
    titleBar.appendChild(titleSpan); titleBar.appendChild(closeBtn);

    const content = document.createElement('div');
    content.style.cssText = `padding: 10px; display: flex; flex-direction: column; gap: 10px;`;

    const statusText = document.createElement('div'); statusText.innerText = `未汉化条目: 0`;

    const btnStyle = `background: #c0c0c0; border: 2px solid; border-color: #fff #000 #000 #fff; box-shadow: inset 1px 1px #dfdfdf, inset -1px -1px #808080; padding: 4px; cursor: pointer; font-family: inherit; font-size: inherit;`;

    function applyWin95ClickEffect(btn, isSmall = false) {
        const defaultPadding = isSmall ? '0' : '4px', activePadding = isSmall ? '1px 0 0 1px' : '5px 3px 3px 5px';
        btn.addEventListener('mousedown', () => { btn.style.borderColor = '#000 #fff #fff #000'; btn.style.boxShadow = 'inset 1px 1px #808080, inset -1px -1px #dfdfdf'; btn.style.padding = activePadding; });
        const resetStyle = () => { btn.style.borderColor = '#fff #000 #000 #fff'; btn.style.boxShadow = 'inset 1px 1px #dfdfdf, inset -1px -1px #808080'; btn.style.padding = defaultPadding; };
        btn.addEventListener('mouseup', resetStyle); btn.addEventListener('mouseleave', resetStyle);
    }

    applyWin95ClickEffect(closeBtn, true);

    const manualExtractBtn = document.createElement('button'); manualExtractBtn.innerText = "手动提取全页"; manualExtractBtn.style.cssText = btnStyle; applyWin95ClickEffect(manualExtractBtn);
    const exportBtn = document.createElement('button'); exportBtn.innerText = "导出 TXT (字典格式)"; exportBtn.style.cssText = btnStyle; applyWin95ClickEffect(exportBtn);

    content.appendChild(statusText); content.appendChild(manualExtractBtn); content.appendChild(exportBtn);
    container.appendChild(titleBar); container.appendChild(content); document.body.appendChild(container);

    let updateTimer;
    function updateUI() {
        if (updateTimer) clearTimeout(updateTimer);
        updateTimer = setTimeout(() => { statusText.innerText = `未汉化条目: ${extractedTexts.size}`; }, 100);
    }

    let isDragging = false, offsetX, offsetY;
    titleBar.addEventListener('mousedown', (e) => {
        if (e.target.id === 'win95-close') return;
        isDragging = true; let rect = container.getBoundingClientRect(); offsetX = e.clientX - rect.left; offsetY = e.clientY - rect.top;
    });
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return; container.style.left = `${e.clientX - offsetX}px`; container.style.top = `${e.clientY - offsetY}px`; container.style.right = 'auto';
    });
    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false; localStorage.setItem('guobaExtractorPos', JSON.stringify({ top: container.style.top, left: container.style.left }));
        }
    });

    closeBtn.onclick = () => container.style.display = 'none';

    manualExtractBtn.onclick = () => {
        let addedCount = extractFromNode(document.body);
        let originalText = manualExtractBtn.innerText;
        manualExtractBtn.innerText = addedCount > 0 ? `成功新增 ${addedCount} 条！` : "无新增条目";
        setTimeout(() => { manualExtractBtn.innerText = originalText; }, 1500);
    };

    function getFormattedTime() {
        const d = new Date(), pad = (n) => String(n).padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}_${pad(d.getHours())}-${pad(d.getMinutes())}-${pad(d.getSeconds())}`;
    }

    exportBtn.onclick = () => {
        if (extractedTexts.size === 0) return alert("暂无未汉化文本！");
        let exportStr = `// 提取数量: ${extractedTexts.size}\n`;
        let sortedTexts = Array.from(extractedTexts).sort();
        for (let text of sortedTexts) {
            let safeText = text.replace(/'/g, "\\'").replace(/\n/g, "\\n");
            exportStr += `    '${safeText}': '',\n`;
        }
        let blob = new Blob([exportStr], { type: "text/plain;charset=utf-8" });
        let url = URL.createObjectURL(blob); let a = document.createElement('a'); a.href = url;
        a.download = `待翻译条目_${getFormattedTime()}.txt`; a.click(); URL.revokeObjectURL(url);
    };

    // ================= 核心监听逻辑 =================
    extractFromNode(document.body);

    const observer = new MutationObserver((mutations) => {
        let hasNewText = false;
        for (let mutation of mutations) {
            // 1. 监听新增节点
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        if (tryAddText(node.nodeValue)) hasNewText = true;
                    } else if (node.nodeType === Node.ELEMENT_NODE && node !== container) {
                        if (extractFromNode(node) > 0) hasNewText = true;
                    }
                });
            } 
            // 2. 监听文本内容改变
            else if (mutation.type === 'characterData') {
                let newText = mutation.target.nodeValue;
                let oldText = mutation.oldValue;
                if (oldText && oldText !== newText && /[\u4E00-\u9FA5]/.test(newText)) {
                    if (extractedTexts.has(oldText)) { extractedTexts.delete(oldText); updateUI(); }
                }
                if (tryAddText(newText)) hasNewText = true;
            } 
            // 3. 监听属性改变 (搜索框占位符、Title等动态变化)
            else if (mutation.type === 'attributes') {
                let attrName = mutation.attributeName;
                let target = mutation.target;
                let text = target.getAttribute(attrName);
                
                // 针对 value 属性的特殊处理
                if (attrName === 'value' && target.value) {
                    text = target.value;
                }
                
                if (tryAddText(text)) hasNewText = true;
            }
        }
        if (hasNewText) updateUI();
    });

    // 观察器配置：新增 attributes 监听
    observer.observe(document.body, { 
        childList: true, 
        subtree: true, 
        characterData: true, 
        characterDataOldValue: true,
        attributes: true, // 开启属性监听
        attributeFilter: ['placeholder', 'value', 'title', 'alt', 'aria-label', 'data-tooltip'] // 仅监听这些包含文本的属性
    });

    // ================= 油猴菜单注册 =================
    if (typeof GM_registerMenuCommand !== "undefined") {
        GM_registerMenuCommand("显示/隐藏 提取器 UI", () => {
            if (container.style.display === 'none') {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    }

})();