<template>
	<div class="g-hd">
		<div class="header_left f-fl">
			<a href="" class="slidein" @click="slidein"></a>
			<img src="../../static/images/logo.png" alt="" v-link="{ path: '/index'}">
		</div>
		<div class="header_right f-fr" v-if="islogin">
      <a href="" class="notify" v-link="{ name: 'myMessage', params: { messageType: 'system'}, query: {pageId: 1}}"><span class="icon-uniE60D"></span></a>
      <div class="avatar" @mouseover="avatarOver" @mouseleave="mouseLeave">
        <img v-bind:src="avatar" v-if="avatar"><span class="icon-uniE60E" style="border-radius:50%;"></span>
        <div class="nav-list">
          <ul>
              <!-- <li><a @click="showPop"><span class="icon-uniE617"></span>创建赛事</a></li> -->
              <li v-link="{ name: 'myMatch', params: { matchType: 'create'}, query: { pageId: 1}}" v-if="isIdentify"><a><span class="icon-uniE618"></span>我的赛事</a></li>
              <li v-link="{ name: 'myMatch', params: { matchType: 'join'}, query: { pageId: 1}}" v-else><a><span class="icon-uniE618"></span>我的赛事</a></li>
              <li v-link="{ name: 'perSetting', params: { userId: 0 }}"><a><span class="icon-uniE619"></span>个人设置</a></li>
              <li v-link="{ name: 'perSetting', params: { userId: 1 }}"><a><span class="icon-uniE61A"></span>参赛信息设置</a></li>
              <li v-link="{ path: '/myclan'}"><a><span class="icon-uniE61D"></span>战队系统</a></li>
              <!-- <li><a href=""><span class="icon-uniE61C"></span>反馈我们</a></li> -->
              <li><a @click="logout"><span class="icon-uniE61B"></span>登出</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header_right visitor f-fr" v-else>
      <a v-link="{ name: 'landRegister', params: { tabId: 0 }}">登录</a><span>•</span><a v-link="{ name: 'landRegister', params: { tabId: 1 }}">注册新用户</a>
    </div>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        avatar:"",
        islogin:false,
        isIdentify:false
      }
  	},
  	ready:function(){
  		var _this=this;
      _this.$http.get("isLogin?"+Date.now()).then(function(response){
        if(response.data.object.loginFlag){
          _this.islogin=true;
        }else{
          _this.islogin=false;
        }
        _this.avatar='http://img.wangyuhudong.com/'+response.data.object.icon;
        var identFlag = window.sessionStorage.getItem("isident");
        _this.isIdentify = identFlag ? true : false
      }, function(response){
        console.log(response);
      })
  	},
  	methods:{
      showPop:function(e){
        e.preventDefault();
        $('.m-create').show();
      },
  		slidein:function(e){
  			e.preventDefault();
  			$('.m-slideInto').animate({left:"0px"},200);
  		},
      logout:function(e){
        e.preventDefault();
        this.$http.post("logout").then(function(response){
          if(location.hash=="#/index"){
            window.location.reload();
          }else{
            this.$route.router.go({path: '/index'});  
          }              
        }, function(response){
          console.log(response);
        })
      },
      avatarOver: function () {
        $('.nav-list').show();
          $('.icon-uniE60E').css({
            'transform':'rotate(-180deg)',
            '-webkit-transform':'rotate(-180deg)'
          });
      },
      mouseLeave: function () {
        $('.nav-list').hide();
          $('.icon-uniE60E').css({
            'transform':'rotate(0deg)',
            '-webkit-transform':'rotate(0deg)'
          });
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