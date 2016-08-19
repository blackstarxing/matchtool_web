<template>
	<div class="g-hd">
		<div class="header_left f-fl">
			<a href="" class="slidein" @click="slidein"></a>
			<img src="../../static/images/logo.png" alt="">
		</div>
		<div class="header_right f-fr">
      <a href="" class="notify"><span class="icon-uniE60D"></span></a>
      <div class="avatar">
        <img v-bind:src="'http://img.wangyuhudong.com/'+avatar"  alt=""><span class="icon-uniE60E"></span>
        <div class="nav-list">
          <ul>
              <li><a v-link="{ path: '/quickmatch'}"><span class="icon-uniE617"></span>创建赛事</a></li>
              <li><a href=""><span class="icon-uniE618"></span>我的赛事</a></li>
              <li><a href=""><span class="icon-uniE619"></span>个人设置</a></li>
              <li><a href=""><span class="icon-uniE61A"></span>参赛信息设置</a></li>
              <li><a href=""><span class="icon-uniE61D"></span>战队系统</a></li>
              <li><a href=""><span class="icon-uniE61C"></span>反馈我们</a></li>
              <li><a href="" @click="logout"><span class="icon-uniE61B"></span>登出</a></li>
          </ul>
        </div>
      </div>
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
  		},
      logout:function(e){
        e.preventDefault();
        this.$http.post("logout").then(function(response){
          this.$route.router.go({path: '/landRegister'})     
        }, function(response){
          console.log(response);
        })
      }
  	}
  }
</script>