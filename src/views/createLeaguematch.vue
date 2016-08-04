<template>
	<div class="g-hd">
		<div class="header_left f-fl">
			<a href="" class="slidein" @click="slidein"></a>
			<img src="../../static/images/logo.png" alt="">
		</div>
		<div class="header_right f-fr">
			<a href="" class="notify"></a>
			<div class="setNav">
				<img src="../../static/images/head.png" alt="">
			</div>
		</div>
	</div>
	<div class="m-sidebar">
		<ul>
			<li><a href=""><img src="../../static/images/nav1.png" alt=""></a></li>
			<li><a href=""><img src="../../static/images/nav2.png" alt=""></a></li>
			<li @click="showPop"><a href=""><img src="../../static/images/nav3.png" alt=""></a></li>
		</ul>
	</div>
	<div class="m-slideInto">
		<div class="top-logo clearfix">
			<a href="" class="slideout" @click="slideout"></a>
			<img src="../../static/images/logo.png" alt="">
		</div>
		<ul>
			<li><a href=""><img src="../../static/images/nav1.png" alt="">首页</a></li>
			<li class="arrow"><a href=""><img src="../../static/images/nav2.png" alt="">申请认证</a></li>
			<li class="arrow" @click="showPop"><a href=""><img src="../../static/images/nav3.png" alt="">创建赛事</a></li>
		</ul>
	</div>
	<div class="createPop">
		<a href="" class="closeBtn" @click="closePop"></a>
		<h3>选择要创建的赛事类型</h3>
		<p>我们提供两种方式帮助你建立合理的赛事体系</p>
		<div class="createBox">
			<a href="" class="createBtn">创建快捷赛事</a>
			<p>适用于一到两个阶段即可完整赛程规划的赛事</p>
			<div class="or"></div>
			<a href="" class="createBtn leagueEnter">创建联赛</a>
			<p>适用于大型赛事支持多赛赛程、多赛制的赛事</p>
		</div>
	</div>
</template>
<script>
// import topNav from '../components/topNav.vue'
// import topHead from '../components/topHead.vue'
  export default {
    data () {
      return {

      }
  	},
  	ready:function(){
  		var _this=this;
  		
  	},
  	methods:{
  		slidein:function(e){
  			e.preventDefault();
  			$('.m-slideInto').animate({left:"0px"},200);
  		},
  		slideout:function(e){
  			e.preventDefault();
  			$('.m-slideInto').animate({left:"-230px"},200);
  		},
  		showPop:function(e){
  			e.preventDefault();
  			$('.createPop').show();
  		},
  		closePop:function(e){
  			e.preventDefault();
  			$('.createPop').hide();
  		}
  	}
  }
</script>