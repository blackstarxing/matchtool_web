<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="banner">
		<ul id="banner">
			<li v-for="banner in banner" v-bind:class="[$index!=0 ? 'up' : '']"><a href="#" v-bind:style="'background:url(http://img.wangyuhudong.com'+banner.icon+') center top no-repeat'"></a></li>
		</ul>
		<div class="list" id="list">
			<a href="javascript:;" v-bind:class="[$index==0 ? 'on' : '']" v-for="banner in banner"></a>
		</div>
		<button class="banner_btn banner_prev"></button>
		<button class="banner_btn banner_next"></button>
	</div>
	<div class="g-w" style="margin-top:20px;">
		<!-- <div class="banner">
			<img src="../../static/images/landing.jpg" alt="">
		</div> -->
		<div class="landing-box">
			<h3>推荐赛事</h3>
			<div class="landing-content f-cb">
				<div class="match" v-for="match in recommendlists" @click="linkDetail">
					<div class="pic">
						<img v-bind:src="'http://img.wangyuhudong.com'+match.poster" alt="" width="100%" height="150px;">
						<div class="title"><span class="icon-uniE60F"></span><span class="f-col" v-text="match.activityBegin | formatDate"></span></div>
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
			<a href="" class="u-btn u-landing-btn" v-link="{ name: 'landRegister', params: { tabId: 1 }}">申请成为赛事组织者</a>
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
			<a href="" class="u-btn u-landing-btn u-enter-btn" v-link="{ name: 'landRegister', params: { tabId: 1 }}">立即加入</a>
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
				banner:"",
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
			_this.$http.get('banner/list').then(function(response) {
	        	_this.banner=response.data.object.list;
	        	_this.$nextTick(function(){
	        		var left=$('.banner .list').width()/2;
	        		$('.banner .list').css('margin-left',-left+'px');
	        		var index = 0;
					var maximg = _this.banner.length;

					$('.banner_next').click(function(){
						// alert(123);
						if(MyTime){
							clearInterval(MyTime);
						}
						index++;
						if(index==maximg){index=0;}
						MyTime = setTimeout(function(){
						ShowjQueryFlash(index);
						$('#banner').stop();
						} , 400);
					});
					$('.banner_prev').click(function(){
						// alert(123);
						if(MyTime){
							clearInterval(MyTime);
						}
						index--;
						console.log(index);
						if(index<0){index=maximg-1;}
						MyTime = setTimeout(function(){
							console.log(index);
						ShowjQueryFlash(index);
						$('#banner').stop();
						} , 400);
					});
					//滑动导航改变内容	
					$("#list a").hover(function(){
						if(MyTime){
							clearInterval(MyTime);
						}
						index  =  $("#list a").index(this);
						MyTime = setTimeout(function(){
						ShowjQueryFlash(index);
						$('#banner').stop();
						} , 400);

					}, function(){
						clearInterval(MyTime);
						MyTime = setInterval(function(){
						ShowjQueryFlash(index);
						index++;
						if(index==maximg){index=0;}
						} , 3000);
					});
					//滑入 停止动画，滑出开始动画.
					 $('#banner').hover(function(){
						if(MyTime){
						 	clearInterval(MyTime);
						}
					 },function(){
						MyTime = setInterval(function(){
						ShowjQueryFlash(index);
						index++;
						if(index==maximg){index=0;}
					  } , 3000);
					 });
					//自动播放
					var MyTime = setInterval(function(){
						ShowjQueryFlash(index);
						index++;
						if(index==maximg){index=0;}
					} , 3000);
					function ShowjQueryFlash(i) {
						$("#banner li").eq(i).animate({opacity: 1},1000).css({"z-index": "1"}).siblings().animate({opacity: 0},1000).css({"z-index": "0"});
						$("#list a").eq(i).addClass("on").siblings().removeClass("on");
					}
	        	})
	        },function(response) {
	            console.log(response);
	        });
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
		filters:{
			formatDate:function(value){
				var time = new Date(value);
				var year=time.getFullYear();  
				var month=time.getMonth()+1;     
				var date=time.getDate();     
				var hour=time.getHours();     
				var minute=time.getMinutes();     
				var second=time.getSeconds(); 
				if(hour==0){
					hour='00';
				}  
				if(minute==0){
					minute='00';
				}  
				return year+"-"+month+"-"+date+"   "+hour+":"+minute;
			}
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