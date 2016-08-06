<template>
	<div class="m-slideInto">
		<div class="top-logo clearfix">
			<a href="" class="slideout" @click="slideout"></a>
			<img src="../../static/images/logo.png" alt="">
		</div>
		<ul>
			<li class="current"><a href=""><img src="../../static/images/nav1.png" alt="">首页</a></li>
			<li class="arrow"><a href=""><img src="../../static/images/nav2.png" alt="">申请认证</a></li>
			<li class="arrow" @click="showPop"><a href=""><img src="../../static/images/nav3.png" alt="">创建赛事</a></li>
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