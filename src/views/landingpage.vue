<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w" style="margin-top:90px;">
		<div class="banner">
			<img src="../../static/images/landing.jpg" alt="">
		</div>
		<div class="landing-box">
			<h3>最新赛事</h3>
			<div class="landing-content f-cb">
				<div class="match">
					<div class="pic">
						<img src="http://img.wangyuhudong.com///uploads/2016/08/01/7ce9d883e8fb400eb95dfe9115055c54.jpg" alt="" width="100%">
						<div class="title"><i class="iconfont"></i><span style="margin-left:6px;margin-right:4px;">by</span><span class="f-col">网娱官方赛事组</span></div>
					</div>
					<div class="match-progress">
						<div class="match-name">
							【英雄联盟】八月福利SOLO赛 死歌VS维鲁斯
						</div>
						<div class="list mid">
							<div class="progress">
						      <span class="orange" id="bar" style="width: 73.4375%;"><span></span></span>
						    </div>
						    <div>by 网娱大师官方赛事组<span class="f-col f-fr"><strong>47</strong>/64</span></div>
						</div>
					</div>			
				</div>
				<div class="match" style="margin:0 2%;">
					<div class="pic">
						<img src="http://img.wangyuhudong.com///uploads/2016/08/01/7ce9d883e8fb400eb95dfe9115055c54.jpg" alt="" width="100%">
						<div class="title"><i class="iconfont"></i><span style="margin-left:6px;margin-right:4px;">by</span><span class="f-col">网娱官方赛事组</span></div>
					</div>
					<div class="match-progress">
						<div class="match-name">
							【英雄联盟】八月福利SOLO赛 死歌VS维鲁斯
						</div>
						<div class="list mid">
							<div class="progress">
						      <span class="orange" id="bar" style="width: 73.4375%;"><span></span></span>
						    </div>
						    <div>by 网娱大师官方赛事组<span class="f-col f-fr"><strong>47</strong>/64</span></div>
						</div>
					</div>			
				</div>
				<div class="match">
					<div class="pic">
						<img src="http://img.wangyuhudong.com///uploads/2016/08/01/7ce9d883e8fb400eb95dfe9115055c54.jpg" alt="" width="100%">
						<div class="title"><i class="iconfont"></i><span style="margin-left:6px;margin-right:4px;">by</span><span class="f-col">网娱官方赛事组</span></div>
					</div>
					<div class="match-progress">
						<div class="match-name">
							【英雄联盟】八月福利SOLO赛 死歌VS维鲁斯
						</div>
						<div class="list mid">
							<div class="progress">
						      <span class="orange" id="bar" style="width: 73.4375%;"><span></span></span>
						    </div>
						    <div>by 网娱大师官方赛事组<span class="f-col f-fr"><strong>47</strong>/64</span></div>
						</div>
					</div>			
				</div>
			</div>
		</div>
		<div class="landing-box">
			<div class="landing-content f-cb">
				<div class="m-organize">
					<img src="../../static/images/organize1.png">
					<h3>多元化赛制模板</h3>
					<p>高效便捷 一键生成赛事</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize2.png">
					<h3>赛事进程管理</h3>
					<p>透明比赛进程 记录每个场次每局比分</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize3.png">
					<h3>报名自动化管理</h3>
					<p>选手自主报名 告别QQ群收集记录的繁琐</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize4.png">
					<h3>个性化赛事主页</h3>
					<p>打造品牌 沉淀每一场赛事</p>
				</div>
			</div>
			
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
			
		},
		events:{
			
		}
	}
</script>