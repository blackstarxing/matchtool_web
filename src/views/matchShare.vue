<template>
	<div class="g-sh-m">
		<div class="m-sh-pot f-re">
			<img src="../../static/images/sh_pot.jpg">
			<span class="m-sh-fbsj">2016.08.08 13:30 发布</span>
		</div>
		<p class="m-sh-tit">做好准备，《守望先锋》世界杯即将到来</p>
		<img src="../../static/images/me.jpg" class="m-sh-head">
		<p class="m-sh-name match_sponsor">网娱官方赛事</p>
		<p class="m-sh-jj match_intro">{{ text }}</p>
		<span id="introExpandSpan" class="expandBtn">展开<i></i></span>
		
		<div class="matchShare_content">
			<ul class="tabList">
				<li v-for="item in tabList" v-text="item.name" :class="{ tab_active: item.isCur }" @click="changeTab($index)">我组织的</li>
				<!-- <li>我参与的</li> -->
			</ul>
			<div v-if="tabFlag === 0">对阵图</div>
			<div v-if="tabFlag === 1">
				<ul class="info_list">
					<li class="list_item">
						<span class="icon-uniE610 info_icon"></span>
						<span class="info_name">比赛项目</span><span class="info_text">王者荣耀</span>
					</li>
					<li class="list_item">
						<span class="icon-uniE611 info_icon"></span>
						<span class="info_name">比赛项目</span><span class="info_text">王者荣耀</span>
					</li class="list_item">
					<li class="list_item">
						<span class="icon-uniE612 info_icon"></span>
						<span class="info_name">比赛项目</span><span class="info_text">王者荣耀</span>
					</li>
					<li class="list_item">
						<span class="icon-uniE60F info_icon"></span>
						<span class="info_name">比赛项目</span><span class="info_text">王者荣耀</span>
					</li>
					<!--
					<li>
						<i></i>
						<p><span class="info_name">比赛项目</span><span class="info_text">王者荣耀</span></p>
					</li>
					<li>
						<i></i>
						<p><span class="info_name">比赛项目</span><span class="info_text">王者荣耀</span></p>
					</li>
					<li>
						<i></i>
						<p><span class="info_name">比赛项目</span><span class="info_text">王者荣耀</span></p>
					</li>
					<li>
						<i></i>
						<p><span class="info_name">比赛项目</span><span class="info_text">王者荣耀</span></p> -->
					</li>
				</ul>
				<div class="match_rules">
					<h2 class="match_rules_title">赛事规则</h2>
					<p class="match_rules_content">本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器</p>
					<div id="rules_expandBtn" class="expandBtn">展开<i></i></div>
				</div>
				<div class="match_awards">
					<h2 class="match_awards_title">赛事奖项</h2>
					<p class="match_awards_content">本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器</p>
					<div id="awards_expandBtn" class="expandBtn">展开<i></i></div>
				</div>
			</div>
			<div class="bottomBox">
				<p class="openTime">距离开赛还有<span class="col42a">01</span>天 <span class="colfdb"> • </span><span class="col42a">03</span> : <span class="col42a">09</span></p>
				<a href="javascript:;" class="joinMatch">报名参赛</a>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				text: "",
				tabList: [
					{ id: 0, name: '对阵图', isCur: true },
					{ id: 1, name: '赛事信息', isCur: false },
				],
				tabFlag: 1
			}	
		},
		ready:function(){
			//alert(123)
			this.text = "本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，本联赛将在VPGAME赛事平台上进行，提供两种模式进行对抗：1）匹配模式，每个玩家以个人匹配的方式，随机形成一场游戏，并由机器人自动开设房间；2）擂台模式，"
			//alert($('.match_intro').eq(0).height())
			//this.$nextTick(function () {
				//alert(456)

				
			//})
		},
		methods:{
			init: function () {
				
			}
		}
	}
	window.onload = function () {
		//alert($('.match_intro').eq(0).height())
		//this.init()	
		//alert(789)
		//alert($('.match_intro').eq(0).height())
		var _this = this;
		var potW = $(window).width(), potH = potW * 0.453;
		$('.m-sh-pot').css("height",potH);
		var jjH = $('.match_intro').eq(0)
		// alert(jjH.height())
		if (jjH.height() > 96) {
			//alert(123)	
			jjH.height(96)
			$('#introExpandSpan').show()
		} else {
			$('#introExpandSpan').hide()
		}
		$('#introExpandSpan').click(function () {
			if ($('#introExpandSpan').text() === '展开') {
				jjH.height('auto')
				$('#introExpandSpan').text('收起')
			} else {
				jjH.height('96')
				$('#introExpandSpan').text('展开')
			}
		}) 
	}
</script>
<style>
	.g-sh-m {
		padding-bottom: 110px;
	}
	.match_sponsor {
		font-size: 28px;
		line-height: 28px;
	}
	.match_intro {
		/*height: 96px;*/
		font-size: 26px;
		line-height: 32px;
		overflow: hidden;
	}
	.expandBtn {
		font-size: 26px;
		color: #42aa53;
	}
	#introExpandSpan {
		padding: 0 .6rem;
	}
	.tabList {
		width: 100%;
		height: 50px;
		line-height: 50px;
		margin-top: 20px;
	}
	.tabList li {
		display: inline-block;
		height: 46px;
		margin: 0 123px;
		padding: 0 16px;
		text-align: center;
		font-size: 30px;
		color: #f2f6f9;
	}
	.tabList .tab_active {
		border-bottom: 4px solid #fdb91a;
		color: #fdb91a;
	}
	.info_list {
	}
	.list_item {
		position: relative;
		padding: 30px;
		line-height: 28px;
	}
	.list_item:after {
		position: absolute;
		left: 90px;
		right: 30px;
		bottom: 0;
		content: " ";
		height: 1px;
		background-color: #2a3946;
	}
	.list_item:last-child:after {
		left: 0;
		right: 0;
	}
	.info_icon {
		display: inline-block;
		width: 28px;
		margin-right: 28px;
		text-align: center;
		font-size: 28px;
		color: #7a8387;
		vertical-align: top;
	}
	.info_name {
		font-size: 28px;
		color: #7a8387;
		margin-right: 44px;
		vertical-align: top;
	}
	.info_text {
		display: inline-block;
		width: 306px;
		font-size: 28px;
		color: #d0d1d2;
	}
	.match_rules, .match_awards {
		background-color: #14181d; 
		margin: 30px;
		border: 1px solid #23282e;
	}
	.match_rules_title, .match_awards_title {
		line-height: 1;
		padding: 22px;
		font-size: 30px;
		color: #f2f6f9;
		border-bottom: 1px solid #23282e;
	}
	.match_rules_content, .match_awards_content {
		padding: 20px;
		font-size: 26px;
		color: #52595c;
	}
	#rules_expandBtn, #awards_expandBtn {
		line-height: 76px;
		text-align: center;
		border-top: 1px solid #23282e;
	}
	.bottomBox {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;/*
		padding: 0 30px;*/
		background-color: #36383f;
	}
	.openTime {
		display: inline-block;
		line-height: 100px;
		font-size: 24px;
		color: #7a8387;
		margin-left: 30px;
	}
	.joinMatch {
		float: right;
		line-height: 1;
		margin-top: 16px;
		margin-right: 30px;
		padding: 18px 36px;
		font-size: 30px;
		color: #1e1f24;
		background-color: #fdb91a;
		border-radius: 7px;
	}
</style>