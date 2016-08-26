<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w" style="margin-top:90px;">
		<div class="banner">
			<img src="../../static/images/landing.jpg" alt="">
		</div>
		<div class="landing-box">
			<h3>推荐赛事</h3>
			<div class="landing-content f-cb">
				<div class="match" v-for="match in recommendlists" @click="linkDetail">
					<div class="pic">
						<img v-bind:src="'http://img.wangyuhudong.com'+match.poster" alt="" width="100%" height="150px;">
						<div class="title"><span class="icon-uniE60F"></span><span class="f-col" v-text="match.createDate | formatDate"></span></div>
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
						    <span class="get_eventid">{{match.eventId}}</span><span class="get_roundid">{{match.id}}</span>
						</div>
					</div>			
				</div>
			</div>
		</div>
		<div class="landing-box">
			<div class="landing-content f-cb">
				<div class="m-organize">
					<img src="../../static/images/organize1.png">
					<h3>多元化赛制模板</h3>
					<p>高效便捷</p>
					<p>一键生成赛事</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize2.png">
					<h3>赛事进程管理</h3>
					<p>透明比赛进程</p>
					<p>记录每个场次每局比分</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize3.png">
					<h3>报名自动化管理</h3>
					<p>选手自主报名</p>
					<p>告别QQ群收集记录的繁琐</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize4.png">
					<h3>个性化赛事主页</h3>
					<p>打造品牌</p>
					<p>沉淀每一场赛事</p>
				</div>
			</div>
			<a href="" class="u-btn u-landing-btn" v-link="{ path: '/landRegister'}">申请成为赛事组织者</a>
		</div>
		<div class="landing-box">
			<div class="landing-content f-cb">
				<div class="m-match">
					<img src="../../static/images/match1.png">
					<h3>海量赛事信息</h3>
					<p>一手新鲜</p>
					<p>不错过每一场竞赛</p>
				</div>
				<div class="m-match">
					<img src="../../static/images/match2.png">
					<h3>个人\战队一键报名</h3>
					<p>报名管理</p>
					<p>一次报名永久存储</p>
				</div>
				<div class="m-match">
					<img src="../../static/images/match3.png">
					<h3>对阵对手早知道</h3>
					<p>随时查询</p>
					<p>了解你的赛事进程</p>
				</div>
				<div class="m-match">
					<img src="../../static/images/match4.png">
					<h3>个人战绩中心</h3>
					<p>沉淀战果</p>
					<p>打造属于你的电竞档案</p>
				</div>
			</div>
			<a href="" class="u-btn u-landing-btn u-enter-btn" v-link="{ path: '/landRegister'}">立即加入</a>
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
				recommendlists:""
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
	        _this.$http.get('event/getRecommendEventRoundList',parm).then(function(response) {
	        	if(response.data.object.loginFlag){
	        		_this.$route.router.go({path: '/index'});
	        	}else{
	        		_this.recommendlists=response.data.object.map.eventmsTop.slice(0,3);
	        		 
	        	}
	        },function(response) {
	            console.log(response);
	        });
		},
		methods:{
			linkDetail:function(e){
				// e.preventDefault();
				var _target=$(e.currentTarget);
  				var _eventid=_target.find(".get_eventid").text();
  				var _roundid=_target.find(".get_roundid").text();
  				window.sessionStorage.setItem("eventId",_eventid);
  				window.sessionStorage.setItem("eventRoundId",_roundid);
  				this.$route.router.go({path: '/matchDetails'})
			}
		},
		events:{
			
		}
	}
</script>