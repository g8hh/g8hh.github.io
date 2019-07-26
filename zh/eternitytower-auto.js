/*

 @name    : 锅巴汉化 - 游戏自动化插件
 @author  : 好阳光的小锅巴
 @version : V0.1.1 - 2019-07-25
 @website : http://www.g8hh.com

*/

! function () {
    var content = '';
    content += '<!-- 脚本动态内容 开始 -->';
    content += '<style>.main-im{position:fixed;right:10px;bottom:50px;line-height:normal;z-index:9999}.main-im .qq-a{display:block;width:106px;height:116px;font-size:14px;color:#0484cd !important;text-align:center;position:relative;}.main-im .qq-a span{bottom:5px;position:absolute;width:90px;left:10px;}.main-im .qq-hover-c{width:70px;height:70px;border-radius:35px;position:absolute;left:18px;top:10px;overflow:hidden;z-index:9;}.main-im .qq-container{z-index:99;position:absolute;width:109px;height:118px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom:1px solid #dddddd;background-image:url("//likexia.gitee.io/game/images/kf/qq-icon-bg.png");background-position:center 8px;background-repeat:no-repeat;}.main-im .img-qq{max-width:60px;display:block;position:absolute;left:6px;top:3px;-webkit-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s;}.main-im .im-qq:hover .img-qq{max-width:70px;left:1px;top:8px;position:absolute;color:#ff0000 !important;}.main-im .im_main{background-color:#F9FAFB !important;border:1px solid #dddddd;border-radius:10px;background-color:#F9FAFB !important;display:none;z-index:999;}.main-im .im_main .im-tel{color:#000000 !important;text-align:center;width:109px;height:105px;border-bottom:1px solid #dddddd;}.main-im .im_main .im-tel div{font-weight:bold;font-size:12px;margin-top:6px;}.main-im .im_main .im-tel .tel-num{font-family:Arial;font-weight:bold;}.main-im .im_main .im-tel .tel-num a{color:#e66d15 !important;}.main-im .im_main .im-tel:hover{background-color:#fafafa !important;}.main-im .im_main .weixing-container{width:55px;height:47px;border-right:1px solid #dddddd;background-color:#f5f5f5 !important;border-bottom-left-radius:10px;background-image:url("//likexia.gitee.io/game/images/kf/weixing-icon.png");background-position:center;background-repeat:no-repeat;float:left;}.main-im .im_main .weixing-show{width:670px;height:400px;background-color:#ffffff;border-radius:10px;border:1px solid #dddddd;position:absolute;left:-680px;top:-354px;overflow-y:auto;}.main-im .im_main .weixing-show .weixing-sanjiao{width:0;height:0;border-style:solid;border-color:transparent transparent transparent #ffffff;border-width:6px;left:112px;top:134px;position:absolute;z-index:2;}.main-im .im_main .weixing-show .weixing-sanjiao-big{width:0;height:0;border-style:solid;border-color:transparent transparent transparent #dddddd;border-width:8px;left:112px;top:132px;position:absolute;}.main-im .im_main .weixing-show .weixing-ma{width:104px;height:103px;padding-left:5px;padding-top:5px;}.main-im .im_main .weixing-show .weixing-txt{position:absolute;top:110px;left:7px;width:100px;margin:0 auto;text-align:center;color:#000 !important;}.main-im .im_main .weixing-show .weixing-txt a,.main-im .im_main .weixing-show .weixing-txt a:hover,.main-im .im_main .im-tel .tel-num a:hover{color:#ff0000 !important;}.main-im .im_main .go-top{width:50px;height:47px;background-color:#f5f5f5;border-bottom-right-radius:10px;background-image:url("//likexia.gitee.io/game/images/kf/totop-icon.png");float:right;background-position:center center;background-repeat:no-repeat;}.main-im .im_main .go-top a{display:block;width:52px;height:47px;}.main-im .close-im{position:absolute;right:10px;top:-12px;z-index:100;width:24px;height:24px;}.main-im .close-im a{display:block;width:24px;height:24px;background-image:url("//likexia.gitee.io/game/images/kf/close_im.png") !important;text-decoration:none;background-position:left top;background-repeat:no-repeat;}.main-im .close-im a:hover{text-decoration:none;}.main-im .open-im{cursor:pointer;margin-left:68px;width:30px;height:30px;background-image:url("//likexia.gitee.io/game/images/kf/open_im.png");background-repeat:no-repeat;background-position:left top;cursor:pointer;background-size:100%;z-index:100;position:fixed;right:10px;bottom:320px;}@media screen and (max-width:480px){.main-im{display:none;}}.JB-form{padding:10px;}.JB-form *{margin:5px;font-size:13px;}.JB-form .tit{font-weight:bold;}.JB-form input{width:100px;height:30px;line-height:30px;}.JB-form input#minTime{width:50px;}.JB-form button{width:50px;height:30px;}#nofood{opacity:0;color:red;}#nofood.show{opacity:1;}#</style>';
    content += '<div class="main-im">';
    content += '<div id="open_im" class="open-im">&nbsp;</div>  ';
    content += '<div class="im_main" id="im_main">';
    content += '<div id="close_im" class="close-im"><a href="javascript:void(0);" title="点击关闭">&nbsp;</a></div>';
    content += '<a href="http://shang.qq.com/wpa/qunwpa?idkey=d10d784492d5e73cca25ff48f4763bdc14f698ffdbf42adbb0e9304495cb0387" target="_blank" class="im-qq qq-a" title="点击加入 - GitHub游戏交流群:627141737">';
    content += '<div class="qq-container"></div>';
    content += '<div class="qq-hover-c"><img class="img-qq" src="//likexia.gitee.io/game/images/kf/qq.png"></div>';
    content += '<span>点击加群</span>';
    content += '</a>';
    content += '<div class="im-tel">';
    content += '<div>QQ群号:</div>';
    content += '<div class="tel-num">627141737</div>';
    content += '<div>更多同类游戏:</div>';
    content += '<div class="tel-num"><a href="http://www.gityx.com" target="_blank" title="我们有域名啦~">Git游戏</a><a href="http://bbs.gityx.com/" target="_blank" style="margin-left:5px;" title="点击查看游戏攻略">论坛</a><a href="http://likexia.gitee.io/game/" target="_blank" style="margin-left:5px;" title="之前首页继续保留">旧版</a></div>';
    content += '</div>';
    content += '<div class="im-footer" style="position:relative">';
    content += '<div class="weixing-container">';
    content += '<div class="weixing-show">';
    //吃食物-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">吃食物（包里没有的食物不要选）</div>';
    content += '想回血/回能量必填<input id="username" type="text" value="" placeholder="输入你的用户名" />';
    content += '<br/>';
    content += '生命值低于<select id="minHP">';
    content += '<option value="10">10%</option>';
    content += '<option value="20">20%</option>';
    content += '<option value="30" selected>30%</option>';
    content += '<option value="40">40%</option>';
    content += '<option value="50">50%</option>';
    content += '<option value="60">60%</option>';
    content += '<option value="70">70%</option>';
    content += '<option value="80">80%</option>';
    content += '<option value="90">90%</option>';
    content += '</select>时吃';
    content += '<select id="Food1">';
    content += '<option value="watermelon">西瓜-回200血-需10秒</option>';
    content += '<option value="carrot" selected>胡萝卜-回350血-需10秒</option>';
    content += '<option value="banana">香蕉-回650血-需13秒</option>';
    content += '<option value="acaiBerry" >巴西莓-回300血-需25秒</option>';
    content += '<option value="pear" >梨-回150血-需25秒</option>';
    content += '<option value="redApple" >红苹果-回185血-需30秒</option>';
    content += '<option value="lettice" >生菜-回75血-需30秒</option>';
    content += '<option value="grapeFruit" >葡萄柚-回150血-需45秒</option>';
    content += '<option value="pineapple" >菠萝-回550血-需80秒</option>';
    content += '<option value="orange" >橙子-回750血-需80秒</option>';
    content += '<option value="potato" >土豆-回2700血-需900秒</option>';
    content += '<option value="tamarindHoney" >罗望子蜂蜜-回18000血-需900秒</option>';
    content += '</select>';
    content += '<button id="startEatFood" type="primary" >启动</button>';
    content += '<button id="stopEatFood" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '能量值低于<select id="minEnergy">';
    content += '<option value="5">5</option>';
    content += '<option value="10">10</option>';
    content += '<option value="15">15</option>';
    content += '<option value="20" selected>20</option>';
    content += '<option value="25">25</option>';
    content += '<option value="30">30</option>';
    content += '<option value="35">35</option>';
    content += '</select>时吃';
    content += '<select id="Food2">';
    content += '<option value="lemon">柠檬-回9能量-持续300秒</option>';
    content += '<option value="rockmelon">哈密瓜-秒回900生命；回5能量和360生命-需120秒</option>';
    content += '<option value="dragonfruit">火龙果-秒回450生命；回2能量和300生命-需120秒</option>';
    content += '<option value="eventVDchocolate">巧克力-秒回1000生命；回4能量和1500生命-需20秒</option>';
    content += '</select>';
    content += '<button id="startEatEnergyFood" type="primary" >启动</button>';
    content += '<button id="stopEatEnergyFood" type="danger" disabled>停止</button>';
    content += '<div id="nofood">你没有这种食物，去农场种一些吧~</div>';
    content += '</div>';
    //吃食物-结束
    //单人战斗-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">单人战斗（Solo）</div>';
    content += '生命值低于<select id="fightMinHP">';
    content += '<option value="10">10%</option>';
    content += '<option value="20">20%</option>';
    content += '<option value="30" selected>30%</option>';
    content += '<option value="40">40%</option>';
    content += '<option value="50">50%</option>';
    content += '<option value="60">60%</option>';
    content += '<option value="70">70%</option>';
    content += '<option value="80">80%</option>';
    content += '<option value="90">90%</option>';
    content += '</select>时停止战斗；';
    content += '能量值低于<select id="fightMinEnergy">';
    content += '<option value="5" selected>5</option>';
    content += '<option value="10">10</option>';
    content += '<option value="15">15</option>';
    content += '<option value="20">20</option>';
    content += '<option value="25">25</option>';
    content += '<option value="30">30</option>';
    content += '<option value="35">35</option>';
    content += '</select>时停止战斗';
    content += '<br/>';
    content += '刷固定楼层';
    content += '<button id="startSolo" type="primary" >启动</button>';
    content += '<button id="stopSolo" type="danger" disabled>停止</button>';
    content += '<br/>';
    content += '自动爬楼层';
    content += '<button id="startSoloUp" type="primary" >启动</button>';
    content += '<button id="stopSoloUp" type="danger" disabled>停止</button>';
    content += '</div>';
    //单人战斗-结束
    //组队战斗-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">组队战斗（爬塔）</div>';
    content += '组队战斗';
    content += '<button id="startGroupFight" type="primary" >启动</button>';
    content += '<button id="stopGroupFight" type="danger" disabled>停止</button>';
    content += '</div>';
    //组队战斗-结束

    //挖矿-开始
    content += '<div class="JB-form">';
    content += '<div class="tit">挖矿（优先挖宝石）</div>';
    content += '定时自动挖矿，挖矿间隔 <input id="minTime" type="text" value="600" placeholder="输入整数数字"/> 秒；';
    content += '<br/>';
    content += '挖矿能量低于<select id="MingEnergy">';
    content += '<option value="10" selected>10%</option>';
    content += '<option value="20">20%</option>';
    content += '<option value="30" >30%</option>';
    content += '<option value="40">40%</option>';
    content += '<option value="50">50%</option>';
    content += '<option value="60">60%</option>';
    content += '<option value="70">70%</option>';
    content += '<option value="80">80%</option>';
    content += '<option value="90">90%</option>';
    content += '</select>时停止挖矿；';
    content += '<button id="startMing" type="primary" >启动</button>';
    content += '<button id="stopMing" type="danger" disabled>停止</button>';
    content += '</div>';
    //挖矿-结束

    content += '<div class="tit"></div>';
    content += '</div>';
    content += '</div>';
    content += '<div class="go-top"><a href="javascript:;" title="返回顶部"></a> </div>';
    content += '<div style="clear:both"></div>';
    content += '</div>';
    content += '</div>';
    content += '</div>';
    content += '<!-- 脚本动态内容 结束 -->';

    //渲染脚本
    $("body").append(content);

    //关闭小球
    $('#close_im').bind('click', function () {
        $('#main-im').css("height", "0");
        $('#im_main').hide();
        $('#open_im').show();
    });

    //展开小球
    $('#open_im').bind('click', function (e) {
        $('#main-im').css("height", "272");
        $('#im_main').show();
        $(this).hide();
    });

    //页面回到顶部
    $('.go-top').bind('click', function () {
        $(window).scrollTop(0);
    });
    var autoMing;
    //启动挖矿
    $("#startMing").click(function () {
        var minTime = $('#minTime').val();
        if (minTime == '') {
            alert('请输入采矿间隔');
        } else {
            minTime = minTime * 1000;
            autoMing = setInterval(getGem, minTime);
            $(this).attr("disabled", true);
            $("#stopMing").attr("disabled", false);
        }
    });

    //停止挖矿
    $("#stopMing").click(function () {
        clearInterval(autoMing);
        $(this).attr("disabled", true);
        $("#startMing").attr("disabled", false);
    });
    //挖其它矿
    function getElementByAttr2(tag, dataAttr, item) {
        var aElements = document.getElementsByTagName(tag);
        var aEle = [];
        for (var i = 0; i < aElements.length; i++) {
            var ele = aElements[i].getAttribute(dataAttr);
            if (ele == item) {
                aEle.push(aElements[i]);
            }
        }
        return aEle;
    }
    //挖矿
    function getGem() {
        //自动切换到采矿界面
        $('.navbar-nav .nav-item:nth-child(2) a').trigger('click');
        //延时3秒执行操作，避免页面未加载完
        setTimeout(function () {
            var mingEn = $('#MingEnergy').val();
            //判断能量百分比，大于指定百分比才执行挖矿。
            var minWid = ($('.progress-bar').width() / $('.progress').width()) * 100;
            if (minWid > mingEn) {
                //获取优先要挖的矿石
                var ks = 'gem';
                //获取带宝石的矿
                var ores = getElementByAttr('img', 'src', ks, 'png');
                if (ores.length >= 1) {
                    //优先采宝石矿
                    ores[0].click();
                    console.log('发现宝石了，挖挖挖~')
                } else {
                    //没有宝石卡时，采其它矿
                    var ore = 'platinum';
                    var o = getElementByAttr2('img', 'class', 'ore-icon');
                    for (var i = 0; i <= o.length; i++) {
//                        setTimeout(function () {
                            o[i].click();
//                        }, 800);
                    }
                    console.log('采集其它矿石，挖挖挖~')
                }
            } else {
                console.log('挖矿能量低于设定值:' + mingEn + '% ，不执行操作~')
                return
            }
        }, 3000);
        //切换回战斗界面
        setTimeout(function () {
            $('.navbar-nav .nav-item:nth-child(1) a').trigger('click');
        }, 8000);
    }

    //单人Solo-开始战斗
    //固定层、自动放技能
    var autoSoloFight;
    $("#startSolo").click(function () {
        autoSoloFight = setInterval(soloFight, 5000);
        $(this).attr("disabled", true);
        $("#stopSolo").attr("disabled", false);
        $("#startSoloUp").attr("disabled", true);
        $("#stopSoloUp").attr("disabled", true);
        $("#stopGroupFight").attr("disabled", true);
        $("#startGroupFight").attr("disabled", true);
    });

    //单人Solo-停止战斗
    $("#stopSolo").click(function () {
        clearInterval(autoSoloFight);
        $(this).attr("disabled", true);
        $("#startSolo").attr("disabled", false);
        $("#startSoloUp").attr("disabled", false);
        $("#stopSoloUp").attr("disabled", true);
        $("#stopGroupFight").attr("disabled", true);
    });


    //单人Solo-开始战斗
    //自动切换最高层、自动放技能
    var autoSoloUpFight;
    $("#startSoloUp").click(function () {
        autoSoloUpFight = setInterval(soloUpFight, 5000);
        $(this).attr("disabled", true);
        $("#stopSoloUp").attr("disabled", false);
        $("#startSolo").attr("disabled", true);
        $("#stopSolo").attr("disabled", true);
        $("#stopGroupFight").attr("disabled", true);
        $("#startGroupFight").attr("disabled", true);
    });

    //单人Solo-停止战斗
    $("#stopSoloUp").click(function () {
        clearInterval(autoSoloUpFight);
        $(this).attr("disabled", true);
        $("#startSoloUp").attr("disabled", false);
        $("#startSolo").attr("disabled", false);
        $("#stopGroupFight").attr("disabled", true);
        $("#startGroupFight").attr("disabled", false);
        $("#stopSolo").attr("disabled", true);
    });


    var autoEatFood;
    //启动吃食物-回血
    $("#startEatFood").click(function () {
        if ($('#username').val() == '') {
            alert('请输入你的用户名');
        } else {
            autoEatFood = setInterval(eatFood, 3000);
            $(this).attr("disabled", true);
            $("#stopEatFood").attr("disabled", false);
        }
    });

    //停止吃食物-回血
    $("#stopEatFood").click(function () {
        clearInterval(autoEatFood);
        $(this).attr("disabled", true);
        $("#startEatFood").attr("disabled", false);
    });

    var autoEnergy;
    //启动吃食物-回能量
    $("#startEatEnergyFood").click(function () {
        if ($('#username').val() == '') {
            alert('请输入你的用户名');
        } else {
            autoEnergy = setInterval(eatLemon, 5000);
            $(this).attr("disabled", true);
            $("#stopEatEnergyFood").attr("disabled", false);
        }
    });

    //停止吃食物-回能量
    $("#stopEatEnergyFood").click(function () {
        clearInterval(autoEnergy);
        $(this).attr("disabled", true);
        $("#startEatEnergyFood").attr("disabled", false);
    });

    //组队-开始战斗
    //自动切换最高层、自动放技能
    var autoGroupFight;
    $("#startGroupFight").click(function () {
        if ($('#username').val() == '') {
            alert('请输入你的用户名');
        } else {
            autoGroupFight = setInterval(groupFight, 5000);
            $(this).attr("disabled", true);
            $("#startSoloUp").attr("disabled", true);
            $("#stopSoloUp").attr("disabled", true);
            $("#startSolo").attr("disabled", true);
            $("#stopSolo").attr("disabled", true);
            $("#stopGroupFight").attr("disabled", false);
        }
    });

    //组队-停止战斗
    $("#stopGroupFight").click(function () {
        clearInterval(autoGroupFight);
        $(this).attr("disabled", true);
        $("#startGroupFight").attr("disabled", false);
        $("#startSoloUp").attr("disabled", false);
        $("#stopSoloUp").attr("disabled", true);
        $("#startSolo").attr("disabled", false);
        $("#stopSolo").attr("disabled", true);

    });

    //组队打怪
    function groupFight() {
        //本次战斗未完成，继续战斗
        if ($('.forfeit-battle').length > 0) {
            //默认自动放全部技能
            //$('.ability-icon-container').trigger("click");
            //选择目标
            $('.battle-unit-container .battle-unit').trigger("click");
            //想指定某个技能，把下面对应技能前面的斜杠删掉，然后把上面那句前面加斜杠
            //$('.ability-icon-container:nth-child(1)').trigger("click");
            $('.ability-icon-container:nth-child(2)').trigger("click");
            $('.ability-icon-container:nth-child(3)').trigger("click");
            $('.ability-icon-container:nth-child(4)').trigger("click");
            $('.ability-icon-container:nth-child(5)').trigger("click");
            $('.ability-icon-container:nth-child(6)').trigger("click");
            //未战斗完毕，则停留在当前界面
            return
        } else {
            $(".battle-unit-name").each(function () {
                var username = $('#username').val();
                var minHp = $('#fightMinHP').val();
                var minEnergy = $('#fightMinEnergy').val();
                //gityx需要替换成自己的用户名
                if ($(this).text().replace(/(^\s*)|(\s*$)/g, "") == username) {
                    //当前层没刷完，则继续刷当前层
                    var energy = parseInt($(this).parent().parent().find('.energy-bar .health-bar').text().substring(1))
                    var minWid1 = ($(this).parent().parent().find('.health-bar .progress-bar').width() / $(this).parent().parent().find('.progress.health-bar').width()) * 100;
                    if ((energy <= minEnergy) || (minWid1 < minHp)) {
                        //能量小于指定值，则不执行战斗
                        console.log('能量值/生命值过低，吃点东西恢复点能量吧~')
                        return
                    } else {
                        //能量充足，继续下一次战斗
                        //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                        var minWid2 = ($(this).parent().parent().find('.health-bar .progress-bar').width() / $(this).parent().parent().find('.progress.health-bar').width()) * 100;
                        if (minWid2 > minHp) {
                            $(".battle-btn").trigger("click");
                        } else {
                            //生命值小于，则不执行战斗
                            console.log('生命值过低，暂停战斗，回回血吧~')
                            return
                        }
                    }
                } else {
                    return;
                }
            });
        }
    }

    //刷单人Solo--自动打怪
    function soloFight() {
        //能量最小值
        var fightMinHP = $('#fightMinHP').val();
        var fightMinEnergy = $('#fightMinEnergy').val();
        //本次战斗未完成，继续战斗
        if ($('.forfeit-battle').length > 0) {
            //默认自动放全部技能
            //$('.ability-icon-container').trigger("click");
            //想指定某个技能，把下面对应技能前面的斜杠删掉，然后把上面那句前面加斜杠
            //$('.ability-icon-container:nth-child(1)').trigger("click");
            $('.ability-icon-container:nth-child(2)').trigger("click");
            $('.ability-icon-container:nth-child(3)').trigger("click");
            $('.ability-icon-container:nth-child(4)').trigger("click");
            $('.ability-icon-container:nth-child(5)').trigger("click");
            $('.ability-icon-container:nth-child(6)').trigger("click");
            //未战斗完毕，则停留在当前界面
            return
        } else {
            //当前层没刷完，则继续刷当前层
            var energy = parseInt($('.energy-bar .health-bar').text().substring(1))
            if (energy <= fightMinEnergy) {
                //能量小于指定值，则不执行战斗
                console.log('能量值过低，休息一下，吃个柠檬吧~')
                return
            } else {
                //能量充足，继续下一次战斗
                //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                var hpWid = ($('.health-bar .progress-bar').width() / $('.progress.health-bar').width()) * 100;
                if (hpWid > fightMinHP) {
                    $(".battle-btn").trigger("click");
                } else {
                    //生命值小于，则不执行战斗
                    console.log('生命值过低，暂停战斗，回回血吧~')
                    return
                }
            }
        }
    }

    //刷单人Solo--自动打怪
    function soloUpFight() {
        var minHp = $('#fightMinHP').val();
        var minEnergy = $('#fightMinEnergy').val();
        //本次战斗未完成，继续战斗
        if ($('.forfeit-battle').length > 0) {
            //默认自动放全部技能
            //$('.ability-icon-container').trigger("click");
            //第一个技能是指定目标，咱不需要启用
            //不想施放某个技能，在下面对应技能前面加上斜杠//
            //$('.ability-icon-container:nth-child(1)').trigger("click");
            $('.ability-icon-container:nth-child(2)').trigger("click");
            $('.ability-icon-container:nth-child(3)').trigger("click");
            $('.ability-icon-container:nth-child(4)').trigger("click");
            $('.ability-icon-container:nth-child(5)').trigger("click");
            $('.ability-icon-container:nth-child(6)').trigger("click");
            return
        } else {
            //当前层刷完时，自动切换下一层
            if ($('.energyUse-dropdown').length > 0) {
                //刷完则自动切换新的一层
                $('.btn-secondary+.dropdown-menu a:first-child').trigger("click");
                console.log('本层已清理完毕，继续下一层吧~')
                var energy1 = parseInt($('.energy-bar .health-bar').text().substring(1))
                if (energy1 <= minEnergy) {
                    //能量小于指定值，则不执行战斗
                    console.log('能量值过低，休息一下，吃个柠檬吧~')
                    return
                } else {
                    //能量充足，继续下一次战斗
                    //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                    var hpWid = ($('.health-bar .progress-bar').width() / $('.progress.health-bar').width()) * 100;
                    if (hpWid > minHp) {
                        $(".battle-btn").trigger("click");
                    } else {
                        //生命值小于，则不执行战斗
                        console.log('生命值过低，暂停战斗，回回血吧~')
                        return
                    }

                }

            } else {
                //当前层没刷完，则继续刷当前层
                //继续下一次战斗
                var energy2 = parseInt($('.energy-bar .health-bar').text().substring(1))
                if (energy2 <= minEnergy) {
                    //能量小于指定值，则不执行战斗
                    console.log('能量值过低，休息一下，吃个柠檬吧~')
                    return
                } else {
                    //能量充足，继续下一次战斗
                    //生命值大于指定百分比，才能继续战斗，可以改为自己需要的。默认是：30%
                    var hpWid = ($('.health-bar .progress-bar').width() / $('.progress.health-bar').width()) * 100;
                    if (hpWid > minHp) {
                        $(".battle-btn").trigger("click");
                    } else {
                        //生命值小于，则不执行战斗
                        console.log('生命值过低，暂停战斗，回回血吧~')
                        return
                    }
                }
            }
        }
    }


    //获取要吃的食物
    function getElementByAttr(tag, dataAttr, item, fomat) {
        var aElements = document.getElementsByTagName(tag);
        var aEle = [];
        for (var i = 0; i < aElements.length; i++) {
            var ele = aElements[i].getAttribute(dataAttr);
            var src = '/icons/' + item + '.' + fomat;
            if (ele == src) {
                aEle.push(aElements[i]);
            }
        }
        return aEle;
    }

    //自动吃柠檬恢复能量
    function eatLemon() {
        var minEnergy = $("#minEnergy").val();
        var energyFood = $("#Food2").val();
        var Username = $('#username').val();
        //获取食物对象
        var lemon = getElementByAttr('img', 'src', energyFood, 'svg');
        $(".battle-unit-name").each(function () {
            //寻找自己的血量条
            if ($(this).text().replace(/(^\s*)|(\s*$)/g, "") == Username) {
                //能量低于30就开始吃柠檬，柠檬冷却时间300秒        
                var num = parseInt($(this).parent().parent().find('.energy-bar .health-bar').text().substring(1))
                if (num < minEnergy) {
                    //判断在不在战斗状态时才提示
                    if ($('.forfeit-battle').length <= 0) {
                        //没有对应食物，则不执行吃食物操作
                        if (lemon.length <= 0) {
                            $('#nofood').addClass('show');
                        } else {
                            $('#nofood').removeClass('show');
                        }
                    }
                    //判断自己是否是队长，因为图片会影响判断
                    if ($('.mr-1').length > 0) {
                        //判断是否正在吃柠檬，
                        if ($('.battle-unit-container .justify-content-center img:nth-child(2)').length == 0) {
                            //没吃柠檬，则点击柠檬
                            lemon[0].click();
                            console.log('没能量了，吃个柠檬~')
                        } else {
                            //正在吃柠檬，不执行操作
                            console.log('正在吃东西~')
                            return
                        }
                    } else {
                        //不是队长
                        //判断是否正在吃柠檬，
                        if ($('.battle-unit-container .justify-content-center img').length == 0) {
                            //没吃柠檬，则点击柠檬
                            lemon[0].click();
                            console.log('没能量了，吃个柠檬~')
                        } else {
                            //正在吃柠檬，不执行操作
                            console.log('正在吃东西~')
                            return
                        }
                    }
                }
            }
        });
    }

    //自动吃食物回血
    function eatFood() {
        var minHP = $("#minHP").val();
        var hpFood = $("#Food1").val();
        var username = $('#username').val();

        //获取食物对象
        //胡萝卜-10秒内回350血
        var eatItem = getElementByAttr('img', 'src', hpFood, 'svg');
        $(".battle-unit-name").each(function () {
            //判断在不在战斗状态时才提示
            if ($('.forfeit-battle').length <= 0) {
                //没有对应食物，则不执行吃食物操作
                if (eatItem.length <= 0) {
                    $('#nofood').addClass('show');
                    return
                } else {
                    $('#nofood').removeClass('show');
                }
            }
            if ($(this).text().replace(/(^\s*)|(\s*$)/g, "") == username) {
                //生命低于指定百分比，就吃胡萝卜回血。默认是：30%
                if ($(this).parent().parent().find('.health-bar .progress-bar').width() < minHP) {
                    //生命值小于指定值，则吃胡萝卜回血
                    //判断自己是否是队长，因为图片会影响判断
                    if ($('.mr-1').length > 0) {
                        //判断是否正在吃胡萝卜
                        if ($('.battle-unit-container .justify-content-center img:nth-child(2)').length == 0) {
                            //没吃胡萝卜，则点击胡萝卜
                            eatItem[0].click();
                            console.log('生命值低于设定值，吃点东西回回血~')
                        } else {
                            //正在吃胡萝卜，不执行操作
                            console.log('正在吃东西~')
                            return
                        }
                    } else {
                        //判断是否正在吃胡萝卜
                        if ($('.battle-unit-container .justify-content-center img').length == 0) {
                            //没吃胡萝卜，则点击胡萝卜
                            eatItem[0].click();
                            console.log('生命值低于设定值，吃点东西回回血~')
                        } else {
                            //正在吃胡萝卜，不执行操作
                            console.log('正在吃东西~')
                            return
                        }
                    }
                }
            }
        });
    }

    console.log("加载自动化脚本");
}();
