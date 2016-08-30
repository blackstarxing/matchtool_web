<template>
    <div class="g-sh-m">
        <div class="m-sh-pot f-re">
            <img  v-bind:src="poster">
            <span class="m-sh-fbsj">{{matchlist.publish}} 发布</span>
        </div>
        <p class="m-sh-tit">{{matchname}}</p>
        <img v-bind:src="icon" class="m-sh-head">
        <p class="match_sponsor">{{creator}}</p>
        <p class="match_intro">{{ brief.briefsmall }}</p>
        <span id="introExpandSpan" class="expandBtn" v-show="briefmore" @click="briefMore">展开<i class="icon-uniE60E" style="color: #42aa53;"></i></span>
        <span id="introExpandSpan" class="expandBtn" v-show="brieflittle" @click="briefLittle">收起<i class="icon-uniE60E" style="color: #42aa53;"></i></span>
        <div class="matchShare_content">
            <div class="matchshare_head">
                <ul class="matchshare_tab">
                    <li @click="changePic" v-bind:class="{ 'share_active': isPic }">对阵图</li>
                    <li @click="changeDetail" v-bind:class="{ 'share_active': isDetail}">赛事详情</li>
                </ul>
            </div>
            <div class="atchshare_tab_container">
                <div class="sharepic_tab" v-show="sharepic">
                    <!-- 在这个div放置对阵图哦 -->
                    <div class="against_container">
                        <div class="tech_main_body">
                            <div class="turn_num">
                                <ul class="turn_num_list clearfix">
                                    <li class="turn_num_li" v-for="turnnum of turnnums">
                                        <div class="turn_turnid" style="display:none">{{turnnum.modelturnid}}</div>
                                        <div class="trunname_ed">
                                            <div class="turn_num_text">{{turnnum.modelname}}</div>
                                            <div class="turn_num_detail">
                                                <span class="turn_select_num" style="font-size:12px;">BO{{turnnum.modelbo}}</span>
                                                <span class="turn_input_settime" style="font-size:12px;margin:0 7px;">{{turnnum.modeltime?turnnum.modeltime.split(' ',1):"时间待定"}}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="tech_body">
                                <div class="tech_container" style="margin-top:60px;">
                                    <div class="match_content clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <ul class="info_list">
                        <li class="list_item">
                            <div class="list_left"><span class="icon-uniE610 info_icon"></span></div>
                            <div class="list_right"><span class="info_name">比赛项目</span><span class="info_text">{{matchlist.name}}</span></div>
                        </li>
                        <li class="list_item">
                            <div class="list_left"><span class="icon-uniE611 info_icon"></span></div>
                            <div class="list_right"><span class="info_name">赛事模式</span><span class="info_text">{{matchlist.model}}</span></div>
                        </li>
                        <li class="list_item">
                            <div class="list_left"><span class="icon-uniE612 info_icon"></span></div>
                            <div class="list_right"><span class="info_name">参与人数</span><span class="info_text">{{matchlist.presonnem}}</span></div>
                        </li>
                        <li class="list_item">
                            <div class="list_left"><span class="icon-uniE60F info_icon"></span></div>
                            <div class="list_right"><span class="info_name">比赛时间</span><span class="info_text">{{matchlist.matchtime}}</span></div>
                        </li>
                        <li class="list_item">
                            <div class="list_left"><span class="icon-uniE615 info_icon"></span></div>
                            <div class="list_right"><span class="info_name">双阶段</span><span class="info_text">{{matchlist.state}}</span></div>
                        </li>
                        <li class="list_item" style="height:4.5rem;line-height:2.25rem;">
                            <div class="list_left"><span class="icon-uniE616 info_icon"></span></div>
                            <div class="list_right"><span class="info_name">报名时间</span><span class="info_text">{{matchlist.signtimebeg}}-</br>{{matchlist.signtimeend}}</span></div>
                        </li>
                        <li class="list_item">
                            <div class="list_left"><span class="icon-uniE613 info_icon"></span></div>
                            <div class="list_right"><span class="info_name">赛制</span><span class="info_text">{{matchlist.format}}</span></div>
                        </li>
                        <li class="list_item">
                            <div class="list_left"><span class="icon-uniE614 info_icon"></span></div>
                            <div class="list_right"><span class="info_name">签到时间</span><span class="info_text">{{matchlist.pasttime}}</span></div>
                        </li>
                    </ul>
                    <div class="match_rules">
                        <h2 class="match_rules_title">赛事规则</h2>
                        <p class="match_rules_content">{{ rule.rulesmall }}</p>
                        <div id="rules_expandBtn" class="expandBtn" v-show="rulemore" @click="ruleMore">展开<i class="icon-uniE60E" style="color: #42aa53;"></i></div>
                        <div id="rules_expandBtn" class="expandBtn" v-show="rulelittle" @click="ruleLittle">收起<i class="icon-uniE60E" style="color: #42aa53;"></i></div>
                    </div>
                    <div class="match_awards">
                        <h2 class="match_awards_title">赛事奖项</h2>
                        <p class="match_awards_content">{{ prize.prizesmall }}</p>
                        <div id="awards_expandBtn" class="expandBtn" v-show="pricemore" @click="priceMore">展开<i class="icon-uniE60E" style="color: #42aa53;"></i></div>
                        <div id="awards_expandBtn" class="expandBtn" v-show="pricelittle" @click="priceLittle">收起<i class="icon-uniE60E" style="color: #42aa53;"></i></div>
                    </div>
                </div>
            </div>
            <div class="bottomBox" @click="joinTech">
                <a class="joinMatch">报名参赛</a>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
function add0(m) {
    return m < 10 ? '0' + m : m
}

function format(shijianchuo) {
    //shijianchuo是整数，否则要parseInt转换
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm);
}
export default {
    data() {
            return {
                brief: {textbrief:'',briefsmall: ""},
                rule: {textrule:'',rulesmall: ""},
                prize: {textprize:'',prizesmall: ""},
                isPic: true,
                isDetail: false,
                matchlist: {
                    name: '',
                    model: '',
                    presonnem: '',
                    matchtime: '',
                    state: '',
                    signtimebeg: '',
                    signtimeend: '',
                    format: '',
                    pasttime: '',
                    publish: ''
                },
                icon: '',
                sharepic: true,
                matchdata: '',
                personnum: "",
                overhalf: "",
                turnnums: [],
                roundStatus: '',
                personNamea: '',
                personNameb: '',
                scorelis: [],
                groupid: {},
                seatida: {},
                seatidb: {},
                briefmore:false,
                rulemore:false,
                pricemore:false,
                brieflittle: false,
                rulelittle: false,
                pricelittle: false,
                poster:'',
                matchname:'',
                creator: ''

            }
        },
        ready: function() {
            var _this = this;
            var parm = {};
            parm.id = _this.$route.params.eventId;

            // parm.id = window.sessionStorage.getItem("eventId");

            _this.$http.get('event/info', parm).then(function(response) {
                _this.roundStatus = response.data.object.state;
                console.log(response);
                if (response.data.code) {
                    _this.matchname= response.data.object.event.name;
                    _this.creator =  response.data.object.creater.nickname;
                    _this.matchlist.name = response.data.object.event.items.name;
                    var _mode=response.data.object.event.mode;
                    if(_mode==1){
                        _this.matchlist.model = "线上赛事";
                    }else if(_mode==2){
                        _this.matchlist.model = "线下赛事";
                    }else if(_mode==3){
                        _this.matchlist.model = "线上海选+线下决赛";
                    }
                    _this.matchlist.presonnem = response.data.object.round.maxNum;
                    _this.matchlist.matchtime = format(response.data.object.round.activityBegin);
                    var _type=response.data.object.round.type;
                    if(_type==1){
                        _this.matchlist.state="单阶段比赛";
                    }else if(_type==2){
                        _this.matchlist.state="双阶段比赛";
                    }
                    _this.matchlist.signtimebeg = format(response.data.object.round.applyBegin);
                    _this.matchlist.signtimeend = format(response.data.object.round.applyEnd);
                    var _regime=response.data.object.round.regime;
                    if(_regime==1){
                        _this.matchlist.format="单败淘汰制";
                    }else if(_regime==2){
                        _this.matchlist.format="双败淘汰制";
                    }else if(_regime==3){
                        _this.matchlist.format="小组内单循环制";
                    }else if(_regime==4){
                        _this.matchlist.format="积分循环制";
                    }
                   
                    _this.matchlist.pasttime = response.data.object.round.signBeginTime ? (esponse.data.object.round.signBeginTime) : '不需要签到';
                    _this.matchlist.publish = format(response.data.object.event.publishTime);
                    _this.icon = 'http://img.wangyuhudong.com/' + response.data.object.creater.icon;
                    _this.poster= 'http://img.wangyuhudong.com/' + response.data.object.event.poster;
                    console.log(_this.poster);
                    _this.brief.textbrief=response.data.object.event.brief;
                    // _this.brief.textbrief= "本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，"
                    if(_this.brief.textbrief && _this.brief.textbrief.length>60){
                        _this.brief.briefsmall =_this.brief.textbrief.substr(0,59)+'......';
                        _this.briefmore=true;
                    }else if(_this.brief.textbrief){
                        _this.brief.briefsmall=_this.brief.textbrief;
                    }else{
                        _this.brief.briefsmall="还没有简介哦～"
                    }

                    _this.rule.textrule=response.data.object.event.regimeRule;
                    // _this.rule.textrule= "本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，"
                    if(_this.rule.textrule && _this.rule.textrule.length>100){
                        _this.rule.rulesmall=_this.rule.textrule.substr(0,99)+'......';
                        _this.rulemore=true;
                    }else if(_this.rule.textrule){
                        _this.rule.rulesmall=_this.rule.textrule;
                    }else{
                        _this.rule.rulesmall="还没有规则哦～"
                    }

                    _this.prize.textprize =response.data.object.event.regimeRule;
                    // _this.prize.textprize = "本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，"
                    if(_this.prize.textprize && _this.prize.textprize.length>100){
                        _this.prize.prizesmall=_this.prize.textprize.substr(0,99)+'......';
                        _this.pricemore=true;
                    }else if(_this.prize.textprize){
                        _this.prize.prizesmall=_this.prize.textprize;
                    }else{
                        _this.prize.prizesmall="有点扣，居然没有奖励～"
                    }
                }

                _this.personnum = response.data.object.iscountm ? true : false;
                _this.overhalf = response.data.object.iscountj1 ? true : false;
                _this.matchdata = response.data.object.groups;

                var turn = _this.matchdata[0].turn;
                var turnid = response.data.object.turns;

                var unitul_h = 65;
                var unitul_w = 200;
                var unitul_step = 10;
                var unitul_all = unitul_h + unitul_step;
                var _content = $(".match_content");
                var listul;
                var listuls = listul = '<ul class="match_list"></ul>';

                for (var i = 0; i < turnid.length; i++) {
                    _this.turnnums.push({
                        num: i + 1,
                        modeltime: turnid[i].matchTimestr,
                        modelbo: turnid[i].matchType,
                        modelname: turnid[i].name,
                        modelturnid: turnid[i].id
                    });
                }

                $(".turn_num_list").width(290 * turn);
                _this.$nextTick(function() {
                    $('.set_begin').datetimepicker({
                        format: "Y-m-d H:i",
                        yearStart: 2000,
                        yearEnd: 2050,
                        onShow: function(ct) {
                            this.setOptions({
                                minDate: true,
                                minTime: true
                            })
                        },
                        step: 10
                    });
                    $.datetimepicker.setLocale('ch');
                })


                if (!_this.personnum) {
                    if (_this.overhalf) {
                        unitul_step = 85;
                        unitul_all = unitul_h + unitul_step;
                    }
                    //dom生成矩形列表
                    for (var i = 0; i < turn - 2; i++) {
                        listuls += listul;
                    }
                    _content.append(listuls);

                    //dom生成矩形unit,并放入矩形列表
                    var unitul = '<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"><span class="recta_num"></span></li><li class="recta"><span class="recta_num"></span></li></ul><div class="add_options"></div>';
                    var listArry = _content.find($(".match_list"));

                    if (turn > 1) {
                        listArry[turn - 2].innerHTML = '<li class="out_li">' + unitul + '</li>';
                        for (var i = 1; i < turn - 1; i++) {
                            listArry[turn - i - 2].innerHTML = listArry[turn - i - 1].innerHTML + listArry[turn - i - 1].innerHTML;
                        }
                    } else {
                        listArry[0].innerHTML = '<li class="out_li">' + unitul + '</li>';
                    }


                    //按照索引处理列表层高
                    $.each(listArry, function(i, e) {
                        if (i != 0) {
                            $(this).css('margin-top', unitul_all / 2 * (Math.pow(2, i) - 1));
                        }
                    })

                    //按照索引处理每列矩形unit间距
                    var margin_bt = [];
                    for (var i = 0; i < turn - 1; i++) {
                        margin_bt[0] = unitul_step;
                        margin_bt[i + 1] = 2 * margin_bt[i] + unitul_h;
                        listArry.eq(i).find(".out_li").css("margin-bottom", margin_bt[i]);
                    }

                    //生成canvas dom
                    var _height = unitul_all * Math.pow(2, turn - 2);
                    var _width = (unitul_w + 90) * turn;
                    _content.width(_width);
                    var _techcon = $(".tech_container");
                    _techcon.height(_height + 40);
                    _techcon.append('<canvas id="mycanvas" width=' + _width + ' height=' + _height + '></canvas> ');

                    //获取turn2的数据
                    var onelist = [];

                    function getnum(arr) {
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].turn == 2) {
                                onelist.push(arr[i]);
                            } else {
                                for (var key in arr[i]) {
                                    if (key == 'groups' && arr[i].groups) {
                                        getnum(arr[i][key]);
                                    }
                                }
                            }
                        }

                    }

                    getnum(_this.matchdata);

                    console.log(onelist);
                    _content.prepend(listul);
                    listArry = _content.find($(".match_list"));
                    var _topsY = [];
                    var _topdY = [];

                    //生成非幂次方时第一列的矩形unit
                    for (var i = 0; i < onelist.length; i++) {
                        var _one_ul = listArry.eq(1).find(".unit_ul").eq(i);
                        var _one_list = _one_ul.find(".recta_num");
                        var _one_list_li = _one_ul.find(".recta");

                        if (onelist[i].seats[0].seatNumber) {
                            if (onelist[i].groups) {
                                if (onelist[i].groups.length == 2) {
                                    var _topd = listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                                    _topdY.push(_topd);
                                    listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><div class="group_num">' + onelist[i].groups[0].groupNumber + '</div><ul class="unit_ul" data-groupid=' + onelist[i].groups[0].id + ' style="width:200px;"><li class="recta" data-seatid=' + onelist[i].groups[0].seats[0].id + ' style="margin-bottom:1px;"><input name="target_id" type="hidden" value=' + onelist[i].groups[0].seats[0].targetId + '><span class="recta_num">' + onelist[i].groups[0].seats[0].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[0].seats[0].name ? onelist[i].groups[0].seats[0].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[0].seats[0].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[0].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[0].scores ? onelist[i].groups[0].scores.seatleft : "") + '</span></li><li class="recta" data-seatid=' + onelist[i].groups[0].seats[1].id + '><input name="target_id" type="hidden" value=' + onelist[i].groups[0].seats[1].targetId + '><span class="recta_num">' + onelist[i].groups[0].seats[1].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[0].seats[1].name ? onelist[i].groups[0].seats[1].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[0].seats[1].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[0].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[0].scores ? onelist[i].groups[0].scores.seatright : "") + '</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">' + JSON.stringify(onelist[i].groups[0].detailedScores) + '</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></div><div class="out_li"><div class="group_num" style="top:90px">' + onelist[i].groups[1].groupNumber + '</div><ul data-groupid=' + onelist[i].groups[1].id + ' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid=' + onelist[i].groups[1].seats[0].id + '><input name="target_id" type="hidden" value=' + onelist[i].groups[1].seats[0].targetId + '><span class="recta_num">' + onelist[i].groups[1].seats[0].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[1].seats[0].name ? onelist[i].groups[1].seats[0].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[1].seats[0].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[1].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[1].scores ? onelist[i].groups[1].scores.seatleft : "") + '</span></li><li class="recta" data-seatid=' + onelist[i].groups[1].seats[1].id + '><input name="target_id" type="hidden" value=' + onelist[i].groups[1].seats[1].targetId + '><span class="recta_num">' + onelist[i].groups[1].seats[1].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[1].seats[1].name ? onelist[i].groups[1].seats[1].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[1].seats[1].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[1].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[1].scores ? onelist[i].groups[1].scores.seatright : "") + '</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">' + JSON.stringify(onelist[i].groups[1].detailedScores) + '</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></div></div>');
                                } else if (onelist[i].groups.length == 1) {

                                    var _tops = listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                                    _topsY.push(_tops);
                                    listArry.eq(0).append('<li class="out_li single_line"><div class="group_num">' + onelist[i].groups[0].groupNumber + '</div><ul class="unit_ul" data-groupid=' + onelist[i].groups[0].id + ' style="width:200px;"><li data-seatid=' + onelist[i].groups[0].seats[0].id + ' class="recta" style="margin-bottom:1px;"><input name="target_id" type="hidden" value=' + onelist[i].groups[0].seats[0].targetId + '><span class="recta_num">' + onelist[i].groups[0].seats[0].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[0].seats[0].name ? onelist[i].groups[0].seats[0].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[0].seats[0].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[0].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[0].scores ? onelist[i].groups[0].scores.seatleft : "") + '</span></li><li class="recta" data-seatid=' + onelist[i].groups[0].seats[1].id + '><input name="target_id" type="hidden" value=' + onelist[i].groups[0].seats[1].targetId + '><span class="recta_num">' + onelist[i].groups[0].seats[1].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[0].seats[1].name ? onelist[i].groups[0].seats[1].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[0].seats[1].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[0].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[0].scores ? onelist[i].groups[0].scores.seatright : "") + '</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">' + JSON.stringify(onelist[i].groups[0].detailedScores) + '</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></li>');

                                }
                            }


                        } else {
                            var _topd = listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                            _topdY.push(_topd);
                            listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><div class="group_num">' + onelist[i].groups[0].groupNumber + '</div><ul class="unit_ul" data-groupid=' + onelist[i].groups[0].id + ' style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid=' + onelist[i].groups[0].seats[0].id + '><input name="target_id" type="hidden" value=' + onelist[i].groups[0].seats[0].targetId + '><span class="recta_num">' + onelist[i].groups[0].seats[0].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[0].seats[0].name ? onelist[i].groups[0].seats[0].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[0].seats[0].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[0].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[0].scores ? onelist[i].groups[0].scores.seatleft : "") + '</span></li><li class="recta" data-seatid=' + onelist[i].groups[0].seats[1].id + '><input name="target_id" type="hidden" value=' + onelist[i].groups[0].seats[1].targetId + '><span class="recta_num">' + onelist[i].groups[0].seats[1].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[0].seats[1].name ? onelist[i].groups[0].seats[1].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[0].seats[1].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[0].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[0].scores ? onelist[i].groups[0].scores.seatright : "") + '</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">' + JSON.stringify(onelist[i].groups[0].detailedScores) + '</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></div><div class="out_li"><div class="group_num" style="top:90px">' + onelist[i].groups[1].groupNumber + '</div><ul data-groupid=' + onelist[i].groups[1].id + ' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid=' + onelist[i].groups[1].seats[0].id + '><input name="target_id" type="hidden" value=' + onelist[i].groups[1].seats[0].targetId + '><span class="recta_num">' + onelist[i].groups[1].seats[0].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[1].seats[0].name ? onelist[i].groups[1].seats[0].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[1].seats[0].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[1].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[1].scores ? onelist[i].groups[1].scores.seatleft : "") + '</span></li><li class="recta" data-seatid=' + onelist[i].groups[1].seats[1].id + '><input name="target_id" type="hidden" value=' + onelist[i].groups[1].seats[1].targetId + '><span class="recta_num">' + onelist[i].groups[1].seats[1].seatNumber + '</span><span class="recta_personname">' + (onelist[i].groups[1].seats[1].name ? onelist[i].groups[1].seats[1].name : "") + '</span><span class="recta_right ' + (onelist[i].groups[1].seats[1].isWin ? "add_winer" : "") + '" ' + (onelist[i].groups[1].scores ? "" : "style='opacity: 0;'") + '>' + (onelist[i].groups[1].scores ? onelist[i].groups[1].scores.seatright : "") + '</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">' + JSON.stringify(onelist[i].groups[1].detailedScores) + '</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></div></div>');
                        }
                    }
                    // console.log(_topdY);

                    //根据轮空的坐标确定第一列坐标
                    var list_first = listArry.eq(0).find(".single_line");
                    for (i = 0; i < _topsY.length; i++) {
                        list_first.eq(i).offset({
                            'top': _topsY[i] + (unitul_h + 10) / 2
                        });
                    }

                    if (_topdY.length != 0) {
                        var list_double = listArry.eq(0).find(".double_line");
                        for (i = 0; i < _topdY.length; i++) {
                            list_double.eq(i).offset({
                                'top': _topdY[i] - (unitul_h + 10) / 2
                            });
                        }
                    }



                    //根据矩形坐标画线
                    var _xy = [];
                    var coordinates = [];
                    for (var i = 1; i < turn - 1; i++) {
                        var unit_list = listArry.eq(i).find(".unit_ul");
                        var unit_length = unit_list.length;

                        _xy.length = 0;
                        for (var j = 0; j < unit_length; j++) {
                            coordinates = [unit_list.eq(j).position().left, unit_list.eq(j).position().top];
                            _xy.push(coordinates);

                            function drawline(id) {

                                var canvas = document.getElementById(id);
                                if (canvas == null)
                                    return false;
                                var context = canvas.getContext("2d");
                                context.strokeStyle = "rgb(247,162,58)";
                                context.moveTo(_xy[j][0] + unitul_w + 5, _xy[j][1] + (unitul_h - 20) / 2);
                                context.lineTo(_xy[j][0] + unitul_w + 5 + 20, _xy[j][1] + (unitul_h - 20) / 2);
                                if (j % 2 == 0) {
                                    context.lineTo(_xy[j][0] + unitul_w + 5 + 20, _xy[j][1] + unitul_h + (margin_bt[i - 1] - 20) / 2);
                                    context.lineTo(_xy[j][0] + unitul_w + 5 + 20 * 2, _xy[j][1] + unitul_h + (margin_bt[i - 1] - 20) / 2);
                                } else {
                                    context.lineTo(_xy[j][0] + unitul_w + 5 + 20, _xy[j][1] - (margin_bt[i - 1] + 20) / 2);
                                    context.lineTo(_xy[j][0] + unitul_w + 5 + 20 * 2, _xy[j][1] - (margin_bt[i - 1] + 20) / 2);
                                }

                                context.stroke();
                            }
                            drawline("mycanvas");
                        }
                    }

                    //根据矩形坐标第一列单unit画线
                    var _xysingle = [];
                    var single_coord = [];
                    var single_arry = listArry.eq(0).find(".single_line");
                    for (i = 0; i < single_arry.length; i++) {
                        single_coord = [single_arry.eq(i).position().left, single_arry.eq(i).position().top];
                        _xysingle.push(single_coord);

                        function firstline(id) {

                            var canvas = document.getElementById(id);
                            if (canvas == null)
                                return false;
                            var context = canvas.getContext("2d");
                            context.strokeStyle = "rgb(247,162,58)";
                            context.moveTo(_xysingle[i][0] + unitul_w + 5, _xysingle[i][1] + (unitul_h - 20) / 2);
                            context.lineTo(_xysingle[i][0] + unitul_w + 5 + 20, _xysingle[i][1] + (unitul_h - 20) / 2);
                            context.lineTo(_xysingle[i][0] + unitul_w + 5 + 20, _xysingle[i][1] - 12.5);
                            context.lineTo(_xysingle[i][0] + unitul_w + 5 + 20 * 2, _xysingle[i][1] - 13);
                            context.stroke();
                        }
                        firstline("mycanvas");
                    }

                    //根据矩形坐标第一列双unit画线
                    var _xydouble = [];
                    var double_coord = [];
                    var double_arry = listArry.eq(0).find(".double_line");
                    for (i = 0; i < double_arry.length; i++) {
                        double_coord = [double_arry.eq(i).position().left, double_arry.eq(i).position().top];
                        _xydouble.push(double_coord);

                        function firstline(id) {

                            var canvas = document.getElementById(id);
                            if (canvas == null)
                                return false;
                            var context = canvas.getContext("2d");
                            context.strokeStyle = "rgb(247,162,58)";
                            context.moveTo(_xydouble[i][0] + unitul_w + 5, _xydouble[i][1] + (unitul_h - 20) / 2);
                            context.lineTo(_xydouble[i][0] + unitul_w + 5 + 20, _xydouble[i][1] + (unitul_h - 20) / 2);
                            context.lineTo(_xydouble[i][0] + unitul_w + 5 + 20, _xydouble[i][1] + (unitul_h - 20) / 2 + unitul_h + 10);
                            context.lineTo(_xydouble[i][0] + unitul_w + 5, _xydouble[i][1] + (unitul_h - 20) / 2 + unitul_h + 10);
                            context.moveTo(_xydouble[i][0] + unitul_w + 5 + 20, _xydouble[i][1] + unitul_h - 5);
                            context.lineTo(_xydouble[i][0] + unitul_w + 5 + 20 * 2, _xydouble[i][1] + unitul_h - 5);
                            context.stroke();
                        }
                        firstline("mycanvas");
                    }
                } else {
                    for (var i = 0; i < turn - 1; i++) {
                        listuls += listul;
                    }
                    _content.append(listuls);

                    //dom生成矩形unit,并放入矩形列表
                    var unitul = '<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"></li><li class="recta"></li></ul><div class="add_options"></div>';
                    var listArry = _content.find($(".match_list"));

                    listArry[turn - 1].innerHTML = '<li class="out_li">' + unitul + '</li>';
                    for (var i = 1; i < turn; i++) {
                        listArry[turn - 1 - i].innerHTML = listArry[turn - i].innerHTML + listArry[turn - i].innerHTML;
                    }

                    //按照索引处理列表层高
                    $.each(listArry, function(i, e) {
                        if (i != 0) {
                            $(this).css('margin-top', unitul_all / 2 * (Math.pow(2, i) - 1));
                        }
                    })

                    //生成canvas dom
                    var _height = unitul_all * Math.pow(2, turn - 1);
                    var _width = (unitul_w + 90) * turn;
                    _content.width(_width);
                    $(".tech_container").append('<canvas id="mycanvas" width=' + _width + ' height=' + _height + '></canvas> ');

                    //按照索引处理每列矩形unit间距
                    var margin_bt = [];
                    for (var i = 0; i < turn - 1; i++) {
                        margin_bt[0] = unitul_step;
                        margin_bt[i + 1] = 2 * margin_bt[i] + unitul_h;
                        listArry.eq(i).find(".out_li").css("margin-bottom", margin_bt[i]);
                    }

                    //根据矩形坐标画线
                    var _xy = [];
                    var coordinates = [];
                    for (var i = 0; i < turn - 1; i++) {
                        var unit_list = listArry.eq(i).find(".unit_ul");
                        var unit_length = unit_list.length;

                        _xy.length = 0;
                        for (var j = 0; j < unit_length; j++) {
                            coordinates = [unit_list.eq(j).position().left, unit_list.eq(j).position().top];
                            _xy.push(coordinates);

                            function drawline(id) {

                                var canvas = document.getElementById(id);
                                if (canvas == null)
                                    return false;
                                var context = canvas.getContext("2d");
                                context.strokeStyle = "rgb(247,162,58)";
                                context.moveTo(_xy[j][0] + unitul_w + 5, _xy[j][1] + unitul_h / 2 - 10);
                                context.lineTo(_xy[j][0] + unitul_w + 5 + 20, _xy[j][1] + unitul_h / 2 - 10);
                                if (j % 2 == 0) {
                                    context.lineTo(_xy[j][0] + unitul_w + 5 + 20, _xy[j][1] + unitul_h + margin_bt[i] / 2 - 10);
                                    context.lineTo(_xy[j][0] + unitul_w + 5 + 20 * 2, _xy[j][1] + unitul_h + margin_bt[i] / 2 - 10);
                                } else {
                                    context.lineTo(_xy[j][0] + unitul_w + 5 + 20, _xy[j][1] - margin_bt[i] / 2 - 10);
                                    context.lineTo(_xy[j][0] + unitul_w + 5 + 20 * 2, _xy[j][1] - margin_bt[i] / 2 - 10);
                                }

                                context.stroke();
                            }
                            drawline("mycanvas");
                        }
                    }
                }

                //获取幂次方turn1的数据
                if (_this.personnum) {
                    var listone = [];

                    function getnum1(arr) {
                        for (var i = 0; i < arr.length; i++) {
                            if (arr[i].turn == 1) {
                                listone.push(arr[i]);
                            } else {
                                for (var key in arr[i]) {
                                    if (key == 'groups' && arr[i].groups) {
                                        getnum1(arr[i][key]);
                                    }
                                }
                            }
                        }

                    }
                    getnum1(_this.matchdata);
                    console.log(listone);

                    for (var i = 0; i < listone.length; i++) {
                        listArry.eq(0).find('.out_li').css('position', 'relative');
                        listArry.eq(0).find('.out_li').eq(i).html(newdom(i, listone));
                    }
                }

                //获取turn>1的数据
                 var listtwo=[];
                 var listthree=[];
                 var listfour=[];
                 var listfive=[];
                 var listsix=[];
                 var listseven=[];
                 var listeight=[];
                 var listnight=[];
                 var list = [listtwo,listthree,listfour,listfive,listsix,listseven,listeight,listnight];
                 var _html;

                function getnumall(arr, level) {
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].turn == level) {
                            list[level - 2].push(arr[i]);
                        } else {
                            for (var key in arr[i]) {
                                if (key == 'groups' && arr[i].groups) {
                                    getnumall(arr[i][key], level);
                                }
                            }
                        }
                    }

                }
                //重新渲染turn2以及turn2之后的dom
                if (turn > 1) {
                    for (var j = 2; j < turn + 1; j++) {
                        getnumall(_this.matchdata, j);
                        for (var i = 0; i < list[j - 2].length; i++) {
                            listArry.eq(j - 1).find('.out_li').css('position', 'relative');
                            listArry.eq(j - 1).find('.out_li').eq(i).html(newdom(i, list[j - 2]));
                        }
                    }
                }

                function newdom(i, list) {
                    _html = '<div class="group_num">' + list[i].groupNumber + '</div><ul class="unit_ul" data-groupid=' + list[i].id + ' style="width:200px;"><li class="recta" data-seatid=' + list[i].seats[0].id + ' style="margin-bottom:1px;"><input name="target_id" type="hidden" value=' + list[i].seats[0].targetId + '><span class="recta_num">' + (list[i].seats[0].seatNumber ? list[i].seats[0].seatNumber : "") + '</span><span class="recta_personname">' + (list[i].seats[0].name ? list[i].seats[0].name : "") + '</span><span class="recta_right ' + (list[i].seats[0].isWin ? "add_winer" : "") + '" ' + (list[i].scores ? "" : "style='display: none'") + '>' + (list[i].scores ? list[i].scores.seatleft : "") + '</span></li><li class="recta" data-seatid=' + list[i].seats[1].id + '><input name="target_id" type="hidden" value=' + list[i].seats[1].targetId + '><span class="recta_num">' + (list[i].seats[1].seatNumber ? list[i].seats[1].seatNumber : '') + '</span><span class="recta_personname">' + (list[i].seats[1].name ? list[i].seats[1].name : "") + '</span><span class="recta_right ' + (list[i].seats[1].isWin ? "add_winer" : "") + '" ' + (list[i].scores ? "" : "style='display: none'") + '>' + (list[i].scores ? list[i].scores.seatright : "") + '</span></li></ul><div class="add_options"></div><div class="edit_div" ' + (list[i].seats[1].target ? "" : "style='display: none'") + '><div class="detail_scores">' + JSON.stringify(list[i].detailedScores) + '</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div>';

                    return _html;
                }

                if (_this.matchdata.length == 2) {
                    listArry.eq(turn - 1).find('.out_li').css('margin-bottom', '60px');
                    listArry.eq(turn - 1).append('<li class="out_li"><ul class="unit_ul" data-groupid=' + _this.matchdata[1].id + ' style="width:200px;"><li class="recta" data-seatid=' + _this.matchdata[1].seats[0].id + ' style="margin-bottom:1px;"><input name="target_id" type="hidden" value=' + _this.matchdata[1].seats[0].targetId + '><span class="recta_num">' + (_this.matchdata[1].seats[0].seatNumber ? _this.matchdata[1].seats[0].seatNumber : "") + '</span><span class="recta_personname">' + (_this.matchdata[1].seats[0].name ? _this.matchdata[1].seats[0].name : "") + '</span><span class="recta_right ' + (_this.matchdata[1].seats[0].isWin ? "add_winer" : "") + '" ' + (_this.matchdata[1].scores ? "" : "style='display: none'") + '>' + (_this.matchdata[1].scores ? _this.matchdata[1].scores.seatleft : "") + '</span></li><li class="recta" data-seatid=' + _this.matchdata[1].seats[1].id + '><input name="target_id" type="hidden" value=' + _this.matchdata[1].seats[1].targetId + '><span class="recta_num">' + (_this.matchdata[1].seats[1].seatNumber ? _this.matchdata[1].seats[1].seatNumber : '') + '</span><span class="recta_personname">' + (_this.matchdata[1].seats[1].name ? _this.matchdata[1].seats[1].name : "") + '</span><span class="recta_right ' + (_this.matchdata[1].seats[1].isWin ? "add_winer" : "") + '" ' + (_this.matchdata[1].scores ? "" : "style='display: none'") + '>' + (_this.matchdata[1].scores ? _this.matchdata[1].scores.seatright : "") + '</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">' + JSON.stringify(_this.matchdata[1].detailedScores) + '</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></li>')
                }

                _this.$nextTick(function() {
                    if (_this.roundStatus < 7) {
                        $('.edit_div').hide();
                        $('.recta_right').hide();
                    } else {
                        $('.turn_btn').hide();
                        $('.against_title_tip').hide();
                        $(".recta").attr('draggable', false);
                    }

                    if (_this.roundStatus < 6) {
                        $('.start_text').css('background-color', '#999');
                    }

                    if (_this.roundStatus == 8) {
                        $('.edit_div').hide();
                        var $lastlist = listArry.eq(turn - 1);
                        var $rectar = $lastlist.find('.recta_right');
                        var _imgone = '<img class="tech_end_pic" src="../../static/images/numberone.png">';
                        var _imgtwo = '<img class="tech_end_pic" src="../../static/images/numbertwo.png">';
                        var _imgthree = '<img class="tech_end_pic" src="../../static/images/numberthree.png">';
                        var _imgfour = '<img class="tech_end_pic" src="../../static/images/numberfour.png">';
                        if ($rectar.eq(0).hasClass('add_winer')) {
                            $rectar.eq(0).append(_imgone);
                            $rectar.eq(1).append(_imgtwo);
                        } else {
                            $rectar.eq(1).append(_imgone);
                            $rectar.eq(0).append(_imgtwo);
                        }

                        if (this.matchdata.length == 2) {
                            if ($rectar.eq(2).hasClass('add_winer')) {
                                $rectar.eq(2).append(_imgthree);
                                $rectar.eq(3).append(_imgfour);
                            } else {
                                $rectar.eq(3).append(_imgthree);
                                $rectar.eq(2).append(_imgfour);
                            }
                        }
                    }

                    var move = false,
                        left_ = 0,
                        top_ = 0;
                    var _movebody = $('.tech_main_body');
                    _movebody.mousedown(function(e) {
                        move = true;
                        left_ = e.pageX - parseInt(_movebody.css("left"));
                        top_ = e.pageY - parseInt(_movebody.css("top"));

                    }).mouseup(function() {
                        move = false;
                    });
                    $(document).mousemove(function(e) {
                        if (move) {
                            var left_r = e.pageX - left_,
                                top_r = e.pageY - top_;
                            // console.log(e.pageX,left_,left_r)
                            _movebody.css({
                                "top": top_r,
                                "left": left_r
                            });
                        }
                    });
                });

                //编辑查看悬浮框
                $(".edit_score").mouseover(function() {
                    console.log(11);
                    var $this = $(this);
                    $this.parent().find(".float_check").show();
                    var scores_arry = JSON.parse($this.prev('.detail_scores').text());
                    var $scores_ul = $this.next('.scores_detail_list');
                    var _length = scores_arry.length;
                    var $float_edit = $scores_ul.next('.float_check');
                    var _left = 200 + (25 * _length);

                    if (_length) {
                        $scores_ul.empty();
                        $scores_ul.width(25 * _length);
                        $scores_ul.show();
                        $float_edit.css("left", _left);
                        for (var i = 0; i < scores_arry.length; i++) {
                            $scores_ul.append('<li><p class="scores_detail_p ' + (scores_arry[i].winner == 1 ? "scores_large" : "") + '">' + scores_arry[i].leftScore + '</p><p class="scores_detail_p ' + (scores_arry[i].winner == 2 ? "scores_large" : "") + '">' + scores_arry[i].rightScore + '</p></li>');
                        }
                    }
                });

                $(".edit_div").mouseleave(function() {
                    $(this).find(".float_check").hide();
                    $(this).find(".scores_detail_list").hide();
                });

                $(".float_edit_check").on("click", function() {
                    $(".m_check").show();
                    var $this = $(this);
                    var _alscore = $('.alread_score_dt');
                    _alscore.removeClass("compare_active");
                    $('.add_guan').remove();
                    var _parent = $this.closest(".out_li");
                    var personname_a = _parent.find('.recta_personname').eq(0).text();
                    var personname_b = _parent.find('.recta_personname').eq(1).text();
                    _this.seatida = _parent.find('.recta').eq(0).data('seatid');
                    _this.seatidb = _parent.find('.recta').eq(1).data('seatid');

                    _this.personNamea = personname_a;
                    _this.personNameb = personname_b;
                    _this.groupid.groupId = _parent.find(".unit_ul").data("groupid");

                    _this.$http.get('event/round/turn/getScores', _this.groupid).then(function(response) {
                        if (response.data.code) {
                            if (response.data.object.scores.length) {
                                _this.scorelis = response.data.object.scores;
                                var _winer = response.data.object.winner;
                                var _compare = response.data.object.compare;
                                var _alscore = $('.alread_score_dt');
                                if (_compare) {
                                    var _comarr = _compare.split(":");
                                    _alscore.eq(0).text(_comarr[0]);
                                    _alscore.eq(1).text(_comarr[1]);
                                }
                                if (_winer) {
                                    if (_winer == _this.seatida) {
                                        _alscore.eq(0).addClass("compare_active");
                                        _alscore.eq(0).closest('.edit_detail_li').append('<img class="add_guan" src="../../static/images/guan.png">');
                                    } else {
                                        _alscore.eq(1).addClass("compare_active");
                                        _alscore.eq(1).closest('.edit_detail_li').append('<img class="add_guan" src="../../static/images/guan.png">');
                                    }
                                }
                            }
                        } else {
                            layer.msg(response.data.msg, {
                                offset: "0px"
                            });
                        }
                    }, function(response) {
                        console.log(22);
                    });
                })
            }, function(response) {
                console.log(22);
            })
        },
        methods: {
            changePic: function() {
                this.isPic = true;
                this.sharepic = true;
                this.isDetail = false;
            },
            changeDetail: function () {
                this.isPic = false;
                this.sharepic = false;
                this.isDetail = true;
            },
            briefMore: function () {
                this.brief.briefsmall=this.brief.textbrief;
                this.briefmore=false;
                this.brieflittle=true;
            },
            ruleMore: function () {
                this.rule.rulesmall=this.rule.textrule;
                this.rulemore=false;
                this.rulelittle=true;
            },
            priceMore: function () {
                this.prize.prizesmall=this.prize.textprize;
                this.pricemore=false;
                this.pricelittle=true;
            },
            joinTech: function () {
                this.$route.router.go({
                            path: '/index'
                        });
            },
            briefLittle: function () {
                this.brief.briefsmall =this.brief.textbrief.substr(0,59)+'......';
                this.briefmore=true;
                this.brieflittle=false;
            },
            ruleLittle: function () {
                this.rule.rulesmall=this.rule.textrule.substr(0,99)+'......';
                this.rulemore=true;
                this.rulelittle=false;
            },
            priceLittle: function () {
                this.prize.prizesmall=this.prize.textprize.substr(0,99)+'......';
                this.pricemore=true;
                this.pricelittle=false;
            },
        }
}
</script>