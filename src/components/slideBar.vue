<template>
	<div class="m-slideInto">
		<div class="top-logo clearfix">
			<a href="" class="slideout" @click="slideout"><i class="iconfont">&#xe609</i></a>
			<img src="../../static/images/logo.png" alt="">
		</div>
		<ul>
			<li class="current"><a href=""><i class="iconfont">&#xe60c</i>首页</a></li>
			<li><a href=""><i class="iconfont">&#xe607</i>申请认证<i class="iconfont f-fr">&#xe60b</i></a></li>
			<li @click="showPop"><a href=""><i class="iconfont">&#xe60a</i>创建赛事<i class="iconfont f-fr">&#xe60b</i></a></li>
		</ul>
	</div>
</template>
<script>
  export default {
    data () {
      return {

      }
  	},
  	ready:function(){
  		var _this=this;
  		
  	},
  	methods:{
  		slideout:function(e){
  			e.preventDefault();
  			$('.m-slideInto').animate({left:"-230px"},200);
  		},
  		showPop:function(e){
  			e.preventDefault();
  			$('.createPop').show();
  		}
  	}
  }
</script>