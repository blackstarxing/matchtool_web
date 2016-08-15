<template>
	<div class="g-hd">
		<div class="header_left backend-head f-fl">
			<img src="../../static/images/logo.png" alt="">
			<span class="game-title">浙江省网娱大师-WYG真英雄城市争霸赛</span>
		</div>
		<div class="header_right f-fr">
			<a href="" class="notify"><i class="iconfont">&#xe60d</i></a>
			<div class="avatar">
				<img src="../../static/images/head.png" alt=""><i class="iconfont">&#xe60e</i>
				<div class="nav-list">
			        <ul>
			            <li><a href=""><i class="iconfont">&#xe617</i>创建赛事</a></li>
			            <li><a href=""><i class="iconfont">&#xe618</i>我的赛事</a></li>
			            <li><a href=""><i class="iconfont">&#xe619</i>个人设置</a></li>
			            <li><a href=""><i class="iconfont">&#xe61a</i>参赛信息设置</a></li>
			            <li><a href=""><i class="iconfont">&#xe61d</i>战队系统</a></li>
			            <li><a href=""><i class="iconfont">&#xe61c</i>反馈我们</a></li>
			            <li><a href=""><i class="iconfont">&#xe61b</i>登出</a></li>
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
      )
  	}
  }
</script>