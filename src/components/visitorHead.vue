<template>
	<div class="g-hd">
		<div class="header_left f-fl">
			<a href="" class="slidein" @click="slidein"></a>
			<img src="../../static/images/logo.png" alt="">
		</div>
		<div class="header_right visitor f-fr">
      <a v-link="{ name: 'landRegister', params: { tabId: 0 }}">登录</a><span>•</span><a v-link="{ name: 'landRegister', params: { tabId: 1 }}">注册新用户</a>
    </div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        avatar:""
      }
  	},
  	ready:function(){
  		var _this=this;
  		$('.avatar').hover(
        function(){
          $('.nav-list').show();
        },
        function(){
          $('.nav-list').hide();
        }
      );
      _this.avatar=window.sessionStorage.getItem("appusericon");
  	},
  	methods:{
  		slidein:function(e){
  			e.preventDefault();
  			$('.m-slideInto').animate({left:"0px"},200);
  		}
  	}
  }
</script>
<style type="text/css">
  .visitor{
    margin-right: 48px;
    color:#fdb91a;
  }
  .visitor a{
    display: inline-block;
    margin: 0 10px;
    line-height: 60px;
    color:#b7c1c6;
  }
  .visitor a:hover{
    color:#fdb91a;
  }
</style>