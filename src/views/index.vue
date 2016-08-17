<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w" style="margin-top:90px;">
		<div class="banner">
			<img src="../../static/images/landing.jpg" alt="">
		</div>
		<div class="landing-box" style="margin-bottom:0;">
			<h3>赛事推荐</h3>
			<div class="landing-content f-cb">
				<!-- <div class="match" v-for="match in matchlists">
					<div class="pic">
						<img v-bind:src="'http://img.wangyuhudong.com'+match.poster" alt="" width="100%">
						<div class="title"><i class="iconfont"></i><span class="f-col" v-text="match.createDate | formatDate"></span></div>
					</div>
					<div class="match-progress">
						<div class="match-name">
							{{match.eventName}}
						</div>
						<div class="list mid">
							<div class="progress">
						      <span class="orange" id="bar" v-bind:style="'width: '+match.num/match.maxNum*100+'%;'"><span></span></span>
						    </div>
						    <div>by {{match.nickname ? match.nickname : '网娱大师赛事组'}}<span class="f-col f-fr"><strong>{{match.num}}</strong>/{{match.maxNum}}</span></div>
						</div>
					</div>			
				</div> -->
			</div>
		</div>
		<div class="landing-box">
			<h3>全部赛事</h3>
			<div class="landing-content f-cb">
				<div class="m-advertise">
					<img src="../../static/images/ad.jpg">
					<div class="ad-title">
						《英雄联盟》秋季超级联赛资格赛报名开启
					</div>
				</div>
				<div class="flip-container" v-for="match in matchlists">
					<div class="flipper">
						<div class="front">
							<!-- 前面内容 -->
							<img v-bind:src="'http://img.wangyuhudong.com'+match.poster" width="100%">
							<div class="flip-wrap">
								<span>{{match.eventName}}</span>
							</div>
						</div>
						<div class="back">
							<!-- 背面内容 -->
							<h4>{{match.nickname ? match.nickname : '网娱大师赛事组'}}</h4>
							<div class="flip-time"><span class="icon-uniE60F"></span><span v-text="match.createDate | formatDate"></span></div>
							<div class="flip-num"><span class="icon-uniE619"></span><strong>{{match.num}}</strong>/ {{match.maxNum}}人</div>
							<a href="" class="flip-btn" @click="linkDetail"><span class="icon-uniE603"></span></a>
							<span class="get_eventid">{{match.eventId}}</span><span class="get_roundid">{{match.id}}</span>
						</div>
					</div>
				</div>
			</div>
			<a href="" class="u-btn u-landing-btn">查看全部赛事</a>
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
				matchlists:""
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){
			var _this=this;
			var parm={};
			parm.jsonInfo=JSON.stringify({pageNumber:1});
	        _this.$http.get('oet/event/getAllEventRoundList',parm).then(function(response) {
	        	console.log(response);
	            _this.matchlists=response.data.object.pager.list.slice(0,6);
	            console.log(_this.matchlists);
	        },function(response) {
	            console.log(response);
	        });

		},
		filters:{
			formatDate:function(value){
				var time = new Date(value);
				var year=time.getFullYear();  
				var month=time.getMonth()+1;     
				var date=time.getDate();     
				var hour=time.getHours();     
				var minute=time.getMinutes();     
				var second=time.getSeconds();     
				return year+"-"+month+"-"+date+"   "+hour+":"+minute;
			}
		},
		methods:{
			linkDetail:function(e){
				e.preventDefault();
				var _target=$(e.currentTarget);
  				var _eventid=_target.parent().find(".get_eventid").text();
  				var _roundid=_target.parent().find(".get_roundid").text();
  				window.sessionStorage.setItem("eventId",_eventid);
  				window.sessionStorage.setItem("eventRoundId",_roundid);
  				this.$route.router.go({path: '/matchDetails'})
			}
		},
		events:{
			
		}
	}
</script>