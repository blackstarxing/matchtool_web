<template>
	<div class="m-slideInto">
		<div class="top-logo clearfix">
			<a href="" class="slideout" @click="slideout"><span class="icon-uniE609"></span></a>
			<img src="../../static/images/logo.png" alt="">
		</div>
		<ul>
			<li class="v-link-active"><span class="icon-uniE60C"></span>首页</li>
			<li><span class="icon-uniE607"></span>申请认证<span class="icon-uniE60B f-fr"></span></li>
			<li @click="showPop"><span class="icon-uniE60A"></span>创建赛事<span class="icon-uniE60B f-fr"></span></li>
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