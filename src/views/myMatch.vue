<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="perCenter_wrap myMatch">
		<h2 class="perCenter_title">我的赛事</h2>
		<div class="myMatch_body">
			<div class="myMatch_head">
				<ul class="myMatch_head_tabList">
					<li v-for="item in tabList" v-text="item.name" :class="{ tab_active: item.isCur }" @click="changeTab($index)">我组织的</li>
					<!-- <li>我参与的</li> -->
				</ul>
			</div>
			<div class="myMatch_content">
				<ul class="matchList">
					<li class="matchList_item clearfix" v-for="item in eventShowList">
						<img src="../../static/images/jlimg.png"" alt="">
						<div class="matchInfo">
							<h3 class="match_name" v-text="item.name"></h3>
							<ul class="match_otherInfo">
								<li>
									<span>主办方：</span><span>网娱大师官方赛事组</span>
								</li>
								<li>
									<span>采用赛制：</span><span>网娱大师官方赛事组</span>
								</li>
								<li>
									<span>参与人数：<span class="g-cjl-rsw"><span class="g-cjl-rsn"></span></span>
									<span class="col42a">80</span>/100
								</li>
								<li>
									<span>报名方式：</span><span>6人战队报名</span>
								</li>
							</ul>
						</div>
						<div class="matchTimeInfo">
							<p class="createtime">2012.8.10 12:30 创建</p>
							<div class="statusBox">未发布</div>
						</div>
					</li>
					<!-- <li class="matchList_item clearfix">
						<img src="../../static/images/jlimg.png"" alt="">
						<div class="matchInfo">
							<h3 class="match_name">萌新挑战趣味赛之最强随机套牌大乱斗</h3>
							<ul class="match_otherInfo">
								<li>
									<span>主办方：</span><span>网娱大师官方赛事组</span>
								</li>
								<li>
									<span>采用赛制：</span><span>网娱大师官方赛事组</span>
								</li>
								<li>
									<span>参与人数：<span class="g-cjl-rsw"><span class="g-cjl-rsn"></span></span>
									<span class="col42a">80</span>/100
									<i class="u-cjl-tip">
									<span>
										235名选手在候补区
										<i class="u-cjl-tipws">
											<i class="u-cjl-tipns"></i>
										</i>
									</span>
								</i>
								</li>
								<li>
									<span>报名方式：</span><span>6人战队报名</span>
								</li>
							</ul>
						</div>
						<div class="matchTimeInfo">
							<p class="createtime">2012.8.10 12:30 创建</p>
							<div class="statusBox onGoing">进行中</div>
						</div>
					</li>
					<li class="matchList_item clearfix">
						<img src="../../static/images/jlimg.png"" alt="">
						<div class="matchInfo">
							<h3 class="match_name">萌新挑战趣味赛之最强随机套牌大乱斗</h3>
							<ul class="match_otherInfo">
								<li>
									<span>主办方：</span><span>网娱大师官方赛事组</span>
								</li>
								<li>
									<span>采用赛制：</span><span>网娱大师官方赛事组</span>
								</li>
								<li>
									<span>参与人数：<span class="g-cjl-rsw"><span class="g-cjl-rsn"></span></span>
									<span class="col42a">80</span>/100
								</li>
								<li>
									<span>报名方式：</span><span>6人战队报名</span>
								</li>
							</ul>
						</div>
						<div class="matchTimeInfo">
							<p class="createtime">2012.8.10 12:30 创建</p>
							<div class="statusBox">未开赛</div>
							<p class="m-cjl-kssj"><span class="col42a">1</span>天<span class="col42a">12</span>小时<span class="col42a">32</span>分后可开赛</p>
						</div>
					</li>
					<li class="matchList_item clearfix" >
						<img src="../../static/images/jlimg.png"" alt="">
						<div class="matchInfo">
							<h3 class="match_name">萌新挑战趣味赛之最强随机套牌大乱斗</h3>
							<ul class="match_otherInfo">
								<li>
									<span>主办方：</span><span>网娱大师官方赛事组</span>
								</li>
								<li>
									<span>采用赛制：</span><span>网娱大师官方赛事组</span>
								</li>
								<li>
									<span>参与人数：<span class="g-cjl-rsw"><span class="g-cjl-rsn"></span></span>
									<span class="col42a">80</span>/100
								</li>
								<li>
									<span>报名方式：</span><span>6人战队报名</span>
								</li>
							</ul>
						</div>
						<div class="matchTimeInfo">
							<p class="createtime">2012.8.10 12:30 创建</p>
							<div class="statusBox">已完结</div>
						</div>
					</li> -->
				</ul>
				<div class="m-page ptb50">
        	<button id="prev" type="button"></button>
        	<div class="pagination"><span class="current">1</span>/<span>2</span></div>
        	<button id="next" type="button"></button>
        	<input type="text" id="pageipt" v-model="pageId">
        	<button type="button" class="u-btn">跳转</button>
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
			return {
				ZZEventListFlag: false,
				CYEventListFlag: false,
				tabList: [
					{ id: 0, name: '我组织的', isCur: true },
					{ id: 1, name: '我参与的', isCur: false },
				],
				eventShowList: [

				],
				ZZEventList: [
					{ name: 'aaaaaaa' }
				],
				CYEventList: [
					{ name: 'bbbbb' }
				],
				pageId: 1	
			}
		},
		components: {
			topHead,
	    sideBar,
	    slideBar,
	    createPop
		},
		ready: function () {
			// 初始化时就查询我组织的赛事列表，仅查询一次，以后就不查询了
			if (!this.ZZEventListFlag) {
				this.ZZEventListFlag = true
				this.getZZEventList()
				this.eventShowList = this.ZZEventList
			}

			
		},
		methods: {
			getZZEventList: function () {
				var params = {}
				var json = {}
				json.pageNumber = this.pageId
				params.jsonInfo = JSON.stringify(json)
				console.log('当前页数： ' + this.pageId)
				this.$http.get('event/getEventRoundList', params).then(function (response) {
					console.log(response)
				})
			},
			getCYEventList: function () {

			},
			changeTab: function (tabId) {
				if (tabId === 0) {
					this.tabList[0].isCur = true
					this.tabList[1].isCur = false
					// 设置列表为我组织的赛事
					alert('ZZ')
					this.eventShowList = this.ZZEventList
				} else {
					this.tabList[1].isCur = true
					this.tabList[0].isCur = false
					alert('CY')
					// 仅第一次切换tab进来查询我参与的赛事列表，以后就不查询了
					if (!this.CYEventListFlag) {
						this.CYEventListFlag = true
						this.getCYEventList()
					}
					// 设置列表为我参与的赛事
					this.eventShowList = this.CYEventList
				}
			}
		}
	}
</script>
<style>
	.myMatch {
		width: 1020px;
	}
	.myMatch_body {
		background-color: #171a21;
	}
	.myMatch_head_tabList {
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #2a3946;
	}
	.myMatch_head_tabList li {
		display: inline-block;
		width: 80px;
		height: 46px;
		text-align: center;
		margin-right: 40px;
		margin-left: 30px;
		font-size: 14px;
		color: #fff;
		cursor: pointer;
	}
	.matchList_item {
		width: 940px;
		font-size: 12px;
		color: #7a8387;
		margin: 20px auto 0 auto;
		padding: 18px 20px;
		border: 1px solid #23282e;
	}
	.matchList_item img {
		float: left;
		width: 200px;
		height: 90px;
	}
	.matchInfo {
		float: left;
		margin-left: 12px;
	}
	.matchInfo h3 {
		font-size: 18px;
		color: #f2f6f9;
		line-height: 1;
	}
	.match_otherInfo li {
		margin-top: 14px;
		line-height: 1;
	}
	.matchTimeInfo {
		float: right;
		text-align: right;
	}
	.statusBox {
		display: inline-block;
		background: #343b45;
		padding: 8px 20px;
		margin-top: 10px;
		border-radius: 3px;
	}
	.onGoing {
		background: #fdb91a;
		color: #1e1f24;
	}
</style>