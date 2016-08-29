<template>
	<div class="m-slideInto m-index">
		<div class="top-logo clearfix">
			<a href="" class="slideout" @click="slideout"><span class="icon-uniE609"></span></a>
			<img src="../../static/images/logo.png" alt="" style="margin-top:9px;">
		</div>
		<ul>
			<li class="v-link-active" v-link="{ path: '/index'}"><span class="icon-uniE60C"></span>首页</li>
			<li v-link="{ path: '/matchlist'}"><span class="icon-uniE60A"></span>全部赛事<span class="icon-uniE60B f-fr"></span></li>
			<li @click="showPop" v-if="createPower"><span class="icon-uniE903"></span>创建赛事<span class="icon-uniE60B f-fr"></span></li>
		</ul>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        createPower:false
      }
  	},
  	ready:function(){
  		var _this=this;
  		_this.$http.get("isIdentifyUser").then(function(response){
        if(response.data.object.flag){
          _this.createPower=true;
        }else{
          _this.createPower=false;
        }
      }, function(response){
        console.log(response);
      })
      $('body').click(function(e){
        var _target = $(e.target);
        if(!_target.is('.slidein') && !_target.is('.m-slideInto')){
          $('.m-index').animate({left:"-230px"},200);
        }
        
      })
  	},
  	methods:{
  		slideout:function(e){
  			e.preventDefault();
  			$('.m-slideInto').animate({left:"-230px"},200);
  		},
  		showPop:function(e){
  			e.preventDefault();
  			$('.m-create').show();
  		}
  	}
  }
</script>