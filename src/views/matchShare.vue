<template>
    <div class="g-sh-m">
        <div class="m-sh-pot f-re">
            <img src="../../static/images/sh_pot.jpg">
            <span class="m-sh-fbsj">{{matchlist.publish}} 发布</span>
        </div>
        <p class="m-sh-tit">做好准备，《守望先锋》世界杯即将到来</p>
        <img  v-bind:src="icon" class="m-sh-head">
        <p class="m-sh-name match_sponsor">网娱官方赛事</p>
        <p class="m-sh-jj match_intro">{{ text }}</p>
        <span id="introExpandSpan" class="expandBtn">展开<i></i></span>
        <div class="matchShare_content">
            <div class="matchshare_head">
                <ul class="matchshare_tab">
                    <li @click="changePic" v-bind:class="{ 'share_active': isPic }">对阵图</li>
                    <li @click="changeDetail" v-bind:class="{ 'share_active': isDetail}">赛事详情</li>
                </ul>
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
                    <p class="match_rules_content">本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器</p>
                    <div id="rules_expandBtn" class="expandBtn">展开<i></i></div>
                </div>
                <div class="match_awards">
                    <h2 class="match_awards_title">赛事奖项</h2>
                    <p class="match_awards_content">本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器</p>
                    <div id="awards_expandBtn" class="expandBtn">展开<i></i></div>
                </div>
            </div>
            <div class="bottomBox">
                <p class="openTime">距离开赛还有<span class="col42a">01</span>天 <span class="colfdb"> • </span><span class="col42a">03</span> : <span class="col42a">09</span></p>
                <a href="javascript:;" class="joinMatch">报名参赛</a>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
function add0(m){return m<10?'0'+m:m }
function format(shijianchuo){
	//shijianchuo是整数，否则要parseInt转换
	var time = new Date(shijianchuo);
	var y = time.getFullYear();
	var m = time.getMonth()+1;
	var d = time.getDate();
	var h = time.getHours();
	var mm = time.getMinutes();
	var s = time.getSeconds();
	return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
}
export default {
    data() {
            return {
                text: "",
                tabFlag: 0,
                isPic: false,
                isDetail: true,
                matchlist: {name:'',model:'',presonnem:'',matchtime:'',state:'',signtimebeg:'',signtimeend:'',format:'',pasttime:'',publish:'',icon:''},

            }
        },
        ready: function() {
           
            this.text = "本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，"
            var _this = this;
			var parm = {};
            parm.id = window.sessionStorage.getItem("eventId");
			
       _this.$http.get('event/info',parm).then(function(response){
       	console.log(response);
       	if(response.data.code){
			_this.matchlist.name=response.data.object.event.name;
			_this.matchlist.model=response.data.object.event.mode;
			_this.matchlist.presonnem=response.data.object.round.maxNum;
			_this.matchlist.matchtime=format(response.data.object.round.activityBegin);
			_this.matchlist.state=response.data.object.round.type;
			_this.matchlist.signtimebeg=format(response.data.object.round.applyBegin);
			_this.matchlist.signtimeend=format(response.data.object.round.applyEnd);
			_this.matchlist.format=response.data.object.round.regime;
			_this.matchlist.pasttime=response.data.object.round.signBeginTime?(esponse.data.object.round.signBeginTime):'不需要签到';
			_this.matchlist.publish=format(response.data.object.round.publishTime);
			_this.matchlist.icon='http://img.wangyuhudong.com/'+response.data.object.creater.icon;
       	}
       	}, function(response){
						console.log(22);
					})
        },
        methods: {
            init: function() {

            }
        }
}
// window.onload = function() {
//     //alert($('.match_intro').eq(0).height())
//     //this.init()	
//     //alert(789)
//     //alert($('.match_intro').eq(0).height())
//     var _this = this;
//     var potW = $(window).width(),
//         potH = potW * 0.453;
//     $('.m-sh-pot').css("height", potH);
//     var jjH = $('.match_intro').eq(0)
//         // alert(jjH.height())
//     if (jjH.height() > 96) {
//         //alert(123)	
//         jjH.height(96)
//         $('#introExpandSpan').show()
//     } else {
//         $('#introExpandSpan').hide()
//     }
//     $('#introExpandSpan').click(function() {
//         if ($('#introExpandSpan').text() === '展开') {
//             jjH.height('auto')
//             $('#introExpandSpan').text('收起')
//         } else {
//             jjH.height('96')
//             $('#introExpandSpan').text('展开')
//         }
//     })
// }
</script>
<style>
.g-sh-m {
    padding-bottom: 3.5rem;
}

.match_sponsor {
    font-size: 0.7rem;
    line-height: 0.7rem;
}

.match_intro {
    font-size: 0.7rem;
    line-height: 0.7rem;
    overflow: hidden;
}
#introExpandSpan {
    padding: 0 .6rem;
    font-size:0.7rem;
    color: #42aa53;
}
.list_item {
    position: relative;
    line-height: 2.25rem;
    font-size: 0.7rem;
    height: 2.25rem;
}

.info_name {
    color: #7a8387;
    margin-right: 1.1rem;
    vertical-align: top;
}

.info_text {
    width: 7.65rem;
    color: #d0d1d2;
}

.match_rules,
.match_awards {
    background-color: #14181d;
    margin: 0.8rem;
    border: 1px solid #23282e;
}

.match_rules_title,
.match_awards_title {
    padding: 0.5rem;
    font-size: 0.8rem;
    color: #f2f6f9;
    border-bottom: 1px solid #23282e;
}

.match_rules_content,
.match_awards_content {
    padding: 0.5rem;
    font-size: 0.7rem;
    color: #52595c;
}

#rules_expandBtn,
#awards_expandBtn {
    line-height: 2rem;
    text-align: center;
    border-top: 1px solid #23282e;
    color: #42aa53;
}

.bottomBox {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
    background-color: #36383f;
}

.openTime {
    display: inline-block;
    line-height: 2.5rem;
    font-size: 0.6rem;
    color: #7a8387;
    margin-left: 0.8rem;
}

.joinMatch {
	display: inline-block;
	height: 1.8rem;
    float: right;
    width:4.5rem;
    margin-top: 0.4rem;
    margin-right: 0.8rem;
    font-size: 0.8rem;
    color: #1e1f24;
    background-color: #fdb91a;
    border-radius: 3px;
    text-align: center;
    line-height: 1.8rem;
}
.matchshare_tab{
	width: 100%;
	height: 2rem;
	text-align: center;
	font-size: 16px;
	color: #fff;
	line-height: 2rem;
}
.matchshare_tab li{
	float: left;
	width: 4rem;
	margin: 0 2rem;
}
.share_active{
	border-bottom: 5px solid #fdb91a;
}
.info_list{
	width: 16rem;
}
.list_left {
    display: inline-block;
    text-align: center;
    color: #7a8387;
    vertical-align: top;
    width: 2.5rem;
}
.list_right{
	display: inline-block;
	border-bottom: 1px solid #42454c;
	width:13rem;
}
.info_icon{
	width: 0.7rem;
	height: 0.7rem;
}
</style>