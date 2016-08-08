<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="backLast">
		<div class="g-z">
			<a href=""></a>赛制设置
		</div>
	</div>
	<div class="g-w">
		<div class="g-z">
			<p class="m-c-tit">设置赛事采用赛制</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<p class="g-c-l">赛事类型</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="online" name="matchitem" class="regular-radio" checked="checked" value="" />
							<label for="online"></label>
							<label for="online" class="u-c-per">		
								<span class="f-fl">
									单阶段
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="offline" name="matchitem" class="regular-radio" value="" disabled />
							<label for="offline"></label>
							<label for="offline" class="u-c-per">		
								<span class="f-fl col8f">
									双阶段
								</span>
							</label>
						</div>
					</div>
					<p class="g-c-l mt40">采用赛制<span class="f-fr"><span class="g-help"></span>查看赛制帮助</span></p>
					<div class="clearfix mb12">
						<div class="f-fl g-c-sz" @click="cherksz">
							<p class="g-c-szt">单败淘汰制</p>
							<div class="g-c-szm">
								<img src="../../static/images/danbai.png" class="mt16">
							</div>
							<div class="g-c-sz-cherk">
								<i class="g-sz-gimg"></i>
							</div>
						</div>
						<div class="f-fr g-c-sz">
							<p class="g-c-szt">双败淘汰制</p>
							<div class="g-c-szm">
								<img src="../../static/images/shuanbai.png" class="mt5">
							</div>
						</div>
					</div>
					<div class="g-c-szgz">
						<div class="g-tri-up">
							<div class="g-tri-iup"></div>
						</div>
						<div class="f-fl mr56 g-c-kz-sz">
							<input type="checkbox" id="dbsz" class="regular-checkboxs" name="" />
							<label for="dbsz"></label>
							<label for="dbsz" class="u-c-kz-sz">需要增加一场第三名争夺战</label>
						</div>
					</div>
					<div class="clearfix">
						<div class="f-fl g-c-sz">
							<p class="g-c-szt">小组循环制</p>
							<div class="g-c-szm">
								<img src="../../static/images/danbai.png" class="mt16">
							</div>
						</div>
						<div class="f-fr g-c-sz">
							<p class="g-c-szt">小组积分制</p>
							<div class="g-c-szm">
								<img src="../../static/images/shuanbai.png" class="mt5">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="confirmBtn mb120">
				<a href="" class="nextBtn"><i></i>确认，进入赛制设置</a>
			</div>
		</div>
		<div class="steps">
			<span class="line"></span>
			<ul>
				<li><i></i>填写基本信息</li>
				<li><i></i>设置参赛方式</li>
				<li><i></i>确认赛事时间</li>
				<li class="current"><i></i>设置采用赛制</li>
				<li><i></i>完善信息并发布</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
import topHead from '../components/topHead.vue'
import sideBar from '../components/sideBar.vue'
import slideBar from '../components/slideBar.vue'
import createPop from '../components/createPop.vue'
	export default {
		data () {
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
			cherksz:function(event){
				var _this = $(event.target);
				_this.parents('.g-c-sz').find('.g-c-sz-cherk').toggle();
				$('.g-c-szgz').fadeToggle();
			}
		}
	}
</script>
