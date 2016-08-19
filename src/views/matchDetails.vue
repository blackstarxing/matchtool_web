<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w mt90 f-re">
		<div class="g-q-hb" v-link="{ path: '/backend'}">
			<!-- <img src="../../static/images/dfposter.jpg" alt=""> -->
			<img v-bind:src="'http://img.wangyuhudong.com'+poster" alt="">
			<div class="g-q-ptr">
				<i class="iconfont iconfont-xj">&#xe60a</i>
				<p>编辑、更改赛事海报</p>
			</div>
		</div>
		<div class="g-q-info">
			<div class="g-q-fbs" v-show="isstart">
				<button type="button" class="u-q-start">
					<i class="s-q-start"></i>
					开始赛事进程
				</button>
				<p class="g-q-remtime">距离开赛还有<span class="col42a">01</span>天&nbsp<span class="colfdb">•</span>&nbsp<span class="col42a">03:09</span></p>
				<a href="#" class="u-q-enter">我也要参与</a>
			</div>
			<p class="g-q-name">{{name}}</p>
			<div class="g-q-zbf">
				<i class="g-q-hp f-fl">
					<img src="../../static/images/head.png">
				</i>
				<span class="f-fl ml20">网娱官方赛事出品</span>
				<span class="col7a8 f-fl ml20" v-show="isfabu">2016-7-29 13:03发布</span>
			</div>
			<p class="g-q-jj col7a8">赛事还没有简介信息，<a href="#" v-link="{ path: '/backend'}">去完善</a><i v-link="{ path: '/backend'}"></i></p>
			<p class="col7a8 g-q-dz" v-show="changemodedz">地址&nbsp<span class="colfdb">•</span>&nbsp{{addreass}}{{detailAddreass}}</p>
			<ul class="g-q-tab clearfix">
				<li v-bind:class="{'g-q-tabon':tap1}" val="1" @click="tapswitch">赛事信息</li>
				<li v-bind:class="{'g-q-tabon':tap2}" val="2" @click="tapswitch">对阵图预览</li>
			</ul>
		</div>
		<div class="g-q-gofb">当前赛事<a v-link="{ path: '/backend'}">尚未发布</a>，前往管理赛事页面，完善赛事信息并<a v-link="{ path: '/backend'}">发布</a>，让更多用户看到你的赛事。</div>
		<div v-show="tap1">
			<div class="g-q-ssinfo">
				<div class="clearfix bb2a3">
					<div style="width: 223px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_xm.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">比赛项目</p>
							<p class="g-q-if-p2">{{itemName}}</p>
						</div>
					</div>
					<div style="width: 223px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_ms.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">赛事模式</p>
							<p class="g-q-if-p2">{{mode}}</p>
						</div>
					</div>
					<div style="width: 330px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_jd.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">赛事阶段</p>
							<p class="g-q-if-p2">{{type}}</p>
						</div>
					</div>
					<div style="width: 150px; margin-left: 40px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_sz.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">赛制</p>
							<p class="g-q-if-p2">{{regime}}</p>
						</div>
					</div>
				</div>
				<div class="clearfix pt20">
					<div style="width: 223px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_rs.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">最大参与人数</p>
							<p class="g-q-if-p2">{{maxNum}}人</p>
						</div>
					</div>
					<div style="width: 223px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_sj.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">比赛开始时间</p>
							<p class="g-q-if-p2">{{activityBegin}}</p>
						</div>
					</div>
					<div style="width: 330px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_bmsj.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">报名时间</p>
							<p class="g-q-if-p2">{{applyBegin}} - {{applyEnd}}</p>
						</div>
					</div>
					<div style="width: 150px; margin-left: 40px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_qdsj.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">签到时间</p>
							<p class="g-q-if-p2">{{needSignMinu}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="g-q-jx">
				<p class="g-q-jxp">赛事奖项</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;">还没有赛事奖项，<a v-link="{ path: '/backend'}">去完善</a><i v-link="{ path: '/backend'}"></i></p>
			</div>
			<div class="g-q-jx" style="margin-bottom:100px;">
				<p class="g-q-jxp">赛事规则</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;">还没有赛事规则，<a v-link="{ path: '/backend'}">去完善</a><i v-link="{ path: '/backend'}"></i></p>
			</div>
		</div>
		<div v-show="tap2" class="g-c-plan">
			<!-- 在这个div放置对阵图哦 -->
		</div>
		<div class="steps infosteps">
			<span class="line"></span>
			<ul>
				<li><i></i>填写基本信息</li>
				<li><i></i>设置参赛方式</li>
				<li><i></i>确认赛事时间</li>
				<li><i></i>设置采用赛制</li>
				<li class="current"><i></i>完善信息并发布</li>
			</ul>
			<a href="#">
				<div class="g-q-sssz">
					<img src="../../static/images/sssz.png">
					赛事设置
				</div>
			</a>
		</div>
	</div>
</template>
<script type="text/javascript">
import topHead from '../components/topHead.vue'
import sideBar from '../components/sideBar.vue'
import slideBar from '../components/slideBar.vue'
import createPop from '../components/createPop.vue'
	export default {
		data () {
			return{
				poster:'',
				name:'',
				itemName:'',
				mode:'',
				addreass:'',
				detailAddreass:'',
				type:'',
				regime:'',
				maxNum:'',
				activityBegin:'',
				applyBegin:'',
				applyEnd:'',
				needSignMinu:'',
				allowApply:'',
				formdata:{
					oetInfoId:'',
					oetRoundId:''
				},
				changemodedz:true,
				isstart:false,
				isfabu:false,
				tap1:true,
				tap2:false
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){
			var _this = this;
			_this.formdata.oetRoundId = window.sessionStorage.getItem("eventRoundId");
			_this.formdata.oetInfoId = window.sessionStorage.getItem("eventId");
			var newsobj = _this.formdata;
			var jsonInfo = JSON.stringify(newsobj);
			var parm = new Object();
			parm.jsonInfo = jsonInfo;
			_this.$http.get('event/openOetInfo',parm).then(function(response){
				console.log("成功");
				var code = response.data.code;
				if(code==1){
					_this.poster = response.data.object.event.poster;
					if(_this.poster=='' || _this.poster==null){
						_this.poster='/uploads/2016/08/16/5126a4fc3e854db098ae08b16d79b8d8.jpg';
					}
					_this.name = response.data.object.event.name;
					_this.itemName = response.data.object.event.itemName;
					_this.mode = response.data.object.event.mode;
					_this.addreass = response.data.object.round.addreass;
					_this.detailAddreass = response.data.object.round.detailAddreass;
					if(_this.mode==1){
						_this.mode='线上赛事';
						_this.changemodedz = false;
					}else if(_this.mode==2){
						_this.mode='线下模式';
					}else if(_this.mode==3){
						_this.mode='线上与线下结合模式';
					}
					_this.type = response.data.object.round.type;
					if(_this.type==1){
						_this.type='单阶段';
					}else if(_this.type==2){
						_this.type='双阶段';
					}
					_this.regime = response.data.object.round.regime;
					if(_this.regime==1){
						_this.regime = '单败淘汰制';
					}else if(_this.regime==2){
						_this.regime = '双败淘汰制';
					}else if(_this.regime==3){
						_this.regime = '小组循环制';
					}else if(_this.regime==4){
						_this.regime = '小组积分制';
					}
					_this.maxNum = response.data.object.round.maxNum;
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
					_this.activityBegin = format(response.data.object.round.activityBegin);
					_this.applyBegin = format(response.data.object.round.applyBegin);
					_this.applyEnd = format(response.data.object.round.applyEnd);
					_this.needSignMinu = '开赛前'+response.data.object.event.needSignMinu+'分钟';
					_this.allowApply = response.data.object.round.allowApply;
					if(_this.allowApply==0){
						_this.needSignMinu = '不需要签到';
						_this.applyBegin='';
						_this.applyEnd='';
					}
				}
			}, function(response){
				console.log(22);
			})
		},
		methods:{
			tapswitch:function(event){
				var _this = $(event.target);
				var v = _this.attr("val");
				if(v==2){
					this.tap1 = false;
					this.tap2 = true;
				}
				else if(v==1){
					this.tap1 = true;
					this.tap2 = false;
				}
			}
		}
	}
</script>
