// ==UserScript==
// @name         迷你梦幻摸鱼皮肤
// @namespace    https://www.gityx.com/
// @version      0.0.1
// @description  Farm Rpg (https://mh.gityx.com) 游戏汉化脚本 - 锅巴汉化出品
// @author       麦子、JAR、小蓝、好阳光的小锅巴
// @include      *https://mh.uuuyx.com/*
// @grant        GM_addStyle
// @grant        unsafeWindow
// @website      https://www.gityx.com
// @updateURL    https://g8hh.com.cn/zh/tampermonkey/mnmh-moyu.user.js
// @downloadURL    https://g8hh.com.cn/zh/tampermonkey/mnmh-moyu.user.js
// ==/UserScript==

/* ↓页面配色调整，适合摸鱼↓ */
/* ========摸鱼时删除此行注释，即可看到效果=======*/
let weburl = unsafeWindow.location.href
if (weburl.indexOf('mh.uuuyx.com') != -1) {
    // 页面背景色
    GM_addStyle('body{background:#fff !important;}')
        // 游戏主体背景色
    GM_addStyle('.mui-content{background:#ddd !important;}')
        // 细项背景色
    GM_addStyle('.mui-bar,.rank_id,.maplist li{background:#ccc !important;}')
        // 细项选中背景色
    GM_addStyle('.maplist li.map_on{background:#bbb !important;}')
        // 选中边框
    GM_addStyle('.maplist li.map_on,.mui-popup{border-color:#666 !important;}')
        // 浅蓝色改为浅灰色
    GM_addStyle('.sxlist li,#game_bb li.bb,.itemlist li,.head-nav,.head-nav,.setting li,.liao-bar,.itemcard li,.zbtab,.buff li .divimg,.mapitem,.mui-popup-inner{background:#eee !important;}')
        // 深蓝色改为深灰色
    GM_addStyle('.foot-jiaodian,.bbtabs li{background:#ddd !important;}')
        // 按钮
    GM_addStyle('button, .mui-btn,.tscard_btn,.mui-popup-button{background:#aaa !important;}')
        // 聊天框
    GM_addStyle('.liaosay input{background:#fff !important;color: #000;}')
        // 黑5
    GM_addStyle('.sxlist li,.sxlist li.d i,.sxlist li.dd i,.itemlist li span,.maplist .map_info,.mui-popup-inner,.mui-popup-text font{color:#999 !important;}')
        // 黑3
    GM_addStyle('.sxlist li span,.itemlv,.itemlist li,.mui-popup-title{color:#333 !important;}')
        // 隐藏背包图片
    GM_addStyle('.itemimg{opacity:0 !important;}')
}
/*========摸鱼时删除此行注释，即可看到效果======== */
/* ↑旅行界面样式调整，适合摸鱼↑ */


/**
 * ---------------------------
 * Time: 2023/02/24 17:52.
 * Author: guoba
 * View: http://www.gityx.com
 * ---------------------------
 */