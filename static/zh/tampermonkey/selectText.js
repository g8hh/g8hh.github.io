// ==UserScript==
// @name         解锁网站文字选中
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  解决网页文字无法选择的问题。
// @author       好阳光的小锅巴
// @include      *zuoyebang.com*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://sangzhuang.net/selectText.js
// @downloadURL    https://sangzhuang.net/selectText.js
// ==/UserScript==

(function() {
    'use strict';
function enableTextSelection(element) {
    element.style.userSelect = 'text';        // 标准语法
    element.style.webkitUserSelect = 'text';  // Chrome, Safari, Opera
    element.style.mozUserSelect = 'text';     // Firefox
    element.style.msUserSelect = 'text';      // IE/Edge
}

// 使用示例：允许某个div内的文本被选择
setTimeout(function(){
    enableTextSelection(document.getElementsByTagName('body')[0]);
    enableTextSelection(document.getElementsByClassName('zui-swipe')[0]);
}, 1200);
    // Your code here...
})();