<template>
<div class="s-col00">
	<div class="m-lg">
		<div class="g-lg">
			<div class="m-lg-nav">
				<img src="../../static/images/lg_logo.png" class="u-logo">
				<ul class="r">
					<li class="on">产品介绍</li>
					<li>关于我们</li>
					<li>成功案例</li>
				</ul>
			</div>
			<img src="../../static/images/lg_against.png" class="u-dzt">
			<img src="../../static/images/lg_jb.png" class="u-jb">
			<div class="m-lg-box">
				<p class="u-p-lg">用户登录</p>
				<form class="mt56">
					<div class="g-ipt-lg"><input type="text" name="telephone" placeholder="用户名/手机号码" class="u-ipt-lg" v-model="username"></div>
					<div class="g-ipt-lg"><input type="password" name="password" placeholder="密码" class="u-ipt-lg" v-model="password"></div>
					<div class="g-forget">
						<label class="l re">
							<input type="checkbox" name="">记住我
							<i class="u-mind-cb"></i>
						</label>
						<span class="r">忘记密码？</span>
					</div>
				</form>
				<button type="button" class="u-lg-btn" @click = "checkin">登&nbsp&nbsp录</button>
			</div>
			<ul class="g-ts clearfix">
				<li>
					<img src="../../static/images/lg_ts1.png">
					<p class="s-ts-tit">多元化赛制模板</p>
					<p class="mt10">高效便捷</p>
					<p class="mt2">一键生成赛事</p>
				</li>
				<li>
					<img src="../../static/images/lg_ts4.png">
					<p class="s-ts-tit">赛事进程管理</p>
					<p class="mt10">透明比赛进程</p>
					<p class="mt2">记录每个场次每局比分</p>
				</li>
				<li>
					<img src="../../static/images/lg_ts3.png">
					<p class="s-ts-tit">报名选手信息管理</p>
					<p class="mt10">开放报名入口</p>
					<p class="mt2">收集报名信息不再苦恼</p>
				</li>
				<li>
					<img src="../../static/images/lg_ts2.png">
					<p class="s-ts-tit">个性化个人主页</p>
					<p class="mt10">规范赛事</p>
					<p class="mt2">建立统一赛事品牌</p>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
 
  export default {
    data () {
      return {
        username:'',
        password:''
      }
  },
  methods: {
  	checkin:function(){
  		this.$http.post('event/login', this.$data).then(function (response) {
  		document.cookie="oetevent.login.sessionid="+response.data.object["oetevent.login.sessionid"];
  		document.cookie="oetevent.login.token="+response.data.object["oetevent.login.token"];
  		document.cookie="userId="+response.data.object["userId"]; 
  		// 	function setCookie(name,value) { 
				// 	    var Days = 30; 
				// 	    var exp = new Date(); 
				// 	    exp.setTime(exp.getTime() + Days*24*60*60*1000); 
				// 	    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
				// } 
		if(response.data.code){
  				this.$route.router.go({path: '/homepage'})
  				}
            }, function (response) {
              console.log(22);
            }) 
  	}
  }
  }
</script>