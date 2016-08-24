<template>
	<div class="g-sh-m">
		<div class="m-sh-pot f-re">
			<img src="../../static/images/sh_pot.jpg">
			<span class="m-sh-fbsj">2016.08.08 13:30 发布</span>
		</div>
		<p class="m-sh-tit">做好准备，《守望先锋》世界杯即将到来</p>
		<img src="../../static/images/me.jpg" class="m-sh-head">
		<p class="m-sh-name">网娱官方赛事</p>
		<p class="m-sh-jj">本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		data (){
			return {
				
			}
		},
		ready:function(){
			var _this = this;
			var potW = $(window).width(), potH = potW * 0.453;
			$('.m-sh-pot').css("height",potH);
		},
		methods:{
			
		}
	}
</script>