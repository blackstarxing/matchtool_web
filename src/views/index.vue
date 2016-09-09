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
		<div class="landing-box" style="margin-bottom:0;">
			<h3>赛事推荐</h3>
			<div class="landing-content f-cb">
				<div class="match" v-for="match in recommendlists" @click="linkDetailTo">
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
			<h3>全部赛事</h3>			
			<div class="landing-content f-cb">
				<!-- <div class="m-advertise">
					<img src="../../static/images/ad.jpg">
					<div class="ad-title">
						《英雄联盟》秋季超级联赛资格赛报名开启
					</div>
				</div> -->
				<div>
					<div class="flip-container" v-for="match in matchlists">
						<div class="flipper">
							<div class="front">
								<!-- 前面内容 -->
								<img v-bind:src="'http://img.wangyuhudong.com'+match.poster" width="100%">
								<div class="flip-wrap">
									<span>{{match.eventName}}</span>
								</div>
							</div>
							<div class="back" @click="linkDetail">
								<!-- 背面内容 -->
								<h4>{{match.nickname ? match.nickname : '网娱大师赛事组'}}</h4>
								<div class="flip-time"><span class="icon-uniE60F"></span><span v-text="match.activityBegin | formatDate"></span></div>
								<div class="flip-num"><span class="icon-uniE619"></span><strong>{{match.num}}</strong>/ {{match.maxNum}}人</div>
								<a href="" class="flip-btn"><span class="icon-uniE603"></span></a>
								<span class="get_eventid">{{match.eventId}}</span><span class="get_roundid">{{match.id}}</span>
							</div>
						</div>
					</div>
				</div>			
			</div>
			<a href="" class="u-btn u-landing-btn" v-link="{ path: '/matchlist'}">查看全部赛事</a>
		</div>
	</div>
	<div class="footer">
		浙江网竞网络科技有限公司  |   浙ICP备14028335号-2   |   Copyright©2016 kaisaiba.com All Rights Reserved.
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
				matchlists:"",
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
					var auto = false;

					$('.banner_next').click(function(){
						// alert(123);
						$('#banner').stop(true);
						if(MyTime){
							clearInterval(MyTime);
						}
						if(!auto){
							index++;
						}
						auto=false;
						if(index==maximg){index=0;}						
						MyTime = setTimeout(function(){
						ShowjQueryChange(index);
						$('#banner').stop();
						} , 10);
					});
					$('.banner_prev').click(function(){
						// alert(123);
						$('#banner').stop(true);
						if(MyTime){
							clearInterval(MyTime);
						}
						if(!auto){
							index--;
						}else{
							index=index-2;
						}
						auto=false;						
						if(index<0){index=maximg-1;}
						MyTime = setTimeout(function(){							
						ShowjQueryChange(index);
						$('#banner').stop();
						} , 10);
					});
					//滑动导航改变内容	
					$("#list a").hover(function(){
						$('#banner').stop(true);
						if(MyTime){
							clearInterval(MyTime);
						}
						index  =  $("#list a").index(this);
						MyTime = setTimeout(function(){
						ShowjQueryChange(index);
						$('#banner').stop();
						} , 10);

					}, function(){
						clearInterval(MyTime);
						MyTime = setInterval(function(){
						auto=true;
						ShowjQueryFlash(index);
						index++;
						if(index==maximg){index=0;}
						} , 4000);
					});
					//滑入 停止动画，滑出开始动画.
					 $('#banner').hover(function(){
						if(MyTime){
						 	clearInterval(MyTime);
						}
					 },function(){
						MyTime = setInterval(function(){
						auto=true;
						ShowjQueryFlash(index);
						index++;
						if(index==maximg){index=0;}
					  } , 4000);
					 });
					//自动播放
					var MyTime = setInterval(function(){
						auto=true;						
						ShowjQueryFlash(index);
						index++;
						if(index==maximg){index=0;}
					} , 4000);
					function ShowjQueryFlash(i) {
						$("#banner li").eq(i).animate({opacity: 1},1000).css({"z-index": "1"}).siblings().animate({opacity: 0},1000).css({"z-index": "0"});
						$("#list a").eq(i).addClass("on").siblings().removeClass("on");
					}
					function ShowjQueryChange(i) {
						$("#banner li").eq(i).css({"opacity": "1","z-index": "1"}).siblings().css({"opacity": "0","z-index": "0"});
						$("#list a").eq(i).addClass("on").siblings().removeClass("on");
					}
	        	})
	        },function(response) {
	            console.log(response);
	        });

			var parm={};
			parm.jsonInfo=JSON.stringify({pageNumber:1});
	        _this.$http.get('event/getRecommendEventRoundList',parm).then(function(response) {
	        	_this.recommendlists=response.data.object.map.eventmsTop.slice(0,3);
	        	_this.matchlists=response.data.object.map.eventmsBottom.slice(0,9);
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
				e.preventDefault();
				var _target=$(e.currentTarget);
  				var _eventid=_target.find(".get_eventid").text();
  				var _roundid=_target.find(".get_roundid").text();
  				window.sessionStorage.setItem("eventId",_eventid);
  				window.sessionStorage.setItem("eventRoundId",_roundid);
  				this.$route.router.go({path: '/matchDetails'})
			},
			linkDetailTo:function(e){
				var _target=$(e.currentTarget);
  				var _eventid=_target.find(".get_eventid").text();
  				var _roundid=_target.find(".get_roundid").text();
  				window.sessionStorage.setItem("eventId",_eventid);
  				window.sessionStorage.setItem("eventRoundId",_roundid);
  				this.$route.router.go({path: '/matchDetails'})
			},
		},
		events:{
			
		}
	}
</script>