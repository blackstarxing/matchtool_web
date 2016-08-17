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
						<div class="title"><i class="iconfont"></i><span class="f-col">2016.08.06 18:00</span></div>
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
						<div class="title"><i class="iconfont"></i><span class="f-col">2016.08.06 18:00</span></div>
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
						<div class="title"><i class="iconfont"></i><span class="f-col">2016.08.06 18:00</span></div>
					</div>
					<div class="match-progress">
						<div class="match-name">
							【英雄联盟】八月福利SOLO赛 死歌VS
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
					<p>高效便捷</p>
					<p>一键生成赛事</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize2.png">
					<h3>赛事进程管理</h3>
					<p>透明比赛进程</p>
					<p>记录每个场次每局比分</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize3.png">
					<h3>报名自动化管理</h3>
					<p>选手自主报名</p>
					<p>告别QQ群收集记录的繁琐</p>
				</div>
				<div class="m-organize">
					<img src="../../static/images/organize4.png">
					<h3>个性化赛事主页</h3>
					<p>打造品牌</p>
					<p>沉淀每一场赛事</p>
				</div>
			</div>
			<a href="" class="u-btn u-landing-btn">申请成为赛事组织者</a>
		</div>
		<div class="landing-box">
			<div class="landing-content f-cb">
				<div class="m-match">
					<img src="../../static/images/match1.png">
					<h3>海量赛事信息</h3>
					<p>一手新鲜</p>
					<p>不错过每一场竞赛</p>
				</div>
				<div class="m-match">
					<img src="../../static/images/match2.png">
					<h3>个人\战队一键报名</h3>
					<p>报名管理</p>
					<p>一次报名永久存储</p>
				</div>
				<div class="m-match">
					<img src="../../static/images/match3.png">
					<h3>对阵对手早知道</h3>
					<p>随时查询</p>
					<p>了解你的赛事进程</p>
				</div>
				<div class="m-match">
					<img src="../../static/images/match4.png">
					<h3>个人战绩中心</h3>
					<p>沉淀战果</p>
					<p>打造属于你的电竞档案</p>
				</div>
			</div>
			<a href="" class="u-btn u-landing-btn u-enter-btn">立即加入</a>
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