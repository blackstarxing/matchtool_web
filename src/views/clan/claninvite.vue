<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w mt90">
		<div class="g-z">
			<div class="m-c-w">
				<div class="g-cyq-m1">
					<i class="m-cyq-tx">
						<img src="../../../static/images/me.jpg">
					</i>
					<span class="m-cyq-byq">“阿斯顿马丁”你好，欢迎加入我们！</span>
				</div>
				<div class="g-cyq-m2">
					<div class="clearfix mb20">
						<span class="g-cyq-sp1">战队名称：</span>
						<span class="g-cyq-sp2">江南一条龙</span>
					</div>
					<div class="clearfix mb20">
						<span class="g-cyq-sp1">所属游戏：</span>
						<span class="g-cyq-sp2">英雄联盟</span>
					</div>
					<div class="clearfix mb20">
						<span class="g-cyq-sp1">邀请人：</span>
						<span class="g-cyq-sp2">未来老公</span>
					</div>
					<div class="clearfix" style="margin-top: -0.04rem;">
						<span class="g-cyq-sp1" style="line-height: 0.2rem;">战队简介：</span>
						<span class="g-cyq-sp2 g-cyq-zdjj">这里是战队简介这里是战队简介这里是战队简介这里是战队简介这里是战 队简介这里是战队简介这里是战队简介。这里是战简介这里是战队简介。这里是战队简介这里是战队简队简介这里是战队简介。</span>
					</div>
				</div>
				<div class="g-cyq-m2">
					<p class="g-cyq-sm clearfix"><span class="colfdb f-fl">•&nbsp&nbsp&nbsp</span><span class="f-fl" style="width: 4.85rem;">战队系统是提供给资深的电竞用户建立参赛团体的平台，需要你完善个人参赛资料，以便赛事方审核效验。</span></p>
					<div class="g-cyq-req mb20 mt20">
						<label for="" class="">真实姓名：</label>
						<input type="text" class="u-c-ipt" placeholder="请输入战队名称" style="width:260px;">
					</div>
					<div class="g-cyq-req mb20">
						<label for="" class="">有效身份证：</label>
						<input type="text" class="u-c-ipt" placeholder="请输入战队名称" style="width:260px;">
					</div>
					<div class="g-cyq-req mb20">
						<label for="" class="">手机号码：</label>
						<input type="text" class="u-c-ipt" placeholder="请输入战队名称" style="width:260px;">
					</div>
					<div class="g-cyq-req">
						<label for="" class="">QQ号码：</label>
						<input type="text" class="u-c-ipt" placeholder="请输入战队名称" style="width:260px;">
					</div>
				</div>
			</div>
			<div class="confirmBtn mb120">
				<a href="" class="nextBtn" @click="goToSetformat"><i></i>确认并加入</a>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import topHead from '../../components/topHead.vue'
import sideBar from '../../components/sideBar.vue'
import slideBar from '../../components/slideBar.vue'
import createPop from '../../components/createPop.vue'
	export default {
		data (){
			return{	

			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){

		},
		methods:{

		}
	}
</script>
