<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="perCenter_wrap myMatch">
		<h2 class="perCenter_title">我的赛事</h2>
		<div class="perCenter_body">
			<div class="perCenter_head">
				<ul class="perCenter_head_tabList">
					<li v-for="item in tabList" v-text="item.name" :class="{ tab_active: item.isCur }" @click="changeTab($index)">我组织的</li>
					<!-- <li>我参与的</li> -->
				</ul>
			</div>
			<div class="perCenter_content">
				<ul class="matchList">
					<li class="matchList_item clearfix" v-for="item in eventShowList">
						<img src="../../static/images/jlimg.png"" alt="">
						<div class="textInfo">
							<h3 class="info_name" v-text="item.eventName"></h3>
							<ul class="match_otherInfo">
								<li>
									<span>主办方：</span><span v-text="item.sponsorName">网娱大师官方赛事组</span>
								</li>
								<li>
									<span>采用赛制：</span><span v-text="item.regime">网娱大师官方赛事组</span>
								</li>
								<li>
									<span>参与人数：<span class="g-cjl-rsw"><span class="g-cjl-rsn" :style="{ width: (item.num / item.maxNum) + '%' }"></span></span>
									<span class="col42a">{{ item.num }}</span>/{{ item.maxNum }}
								</li>
								<li>
									<span>报名方式：</span><span>{{ item.applyType }}</span>
								</li>
							</ul>
						</div>
						<div class="timeInfo">
							<p class="createtime" v-text=" item.createDate | formatDate ">2012.8.10 12:30 创建</p>
							<div class="statusBox" v-text="item.statusText" :class=" { onGoing: item.isGoing } ">未发布</div>
							<p class="m-cjl-kssj" v-if="item.matchBegin"><span class="col42a">{{ item._day }}</span>天<span class="col42a">{{ item._hour }}</span>小时<span class="col42a">{{ item._minute }}</span>分后可开赛</p>
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
				responseFieldList: [
					"activityBegin",
					"allowApply",
					"applyType",
					"createDate",
					"isPublish",
					"maxNum",
					"num",
					"privacy",
					"publishTime",
					"regime",
					"sponsorName",
					"status",
					"eventName",
					"statusText",
					"teamMemeberNum",
					"activityBegin"
				],
				eventShowList: [

				],
				ZZEventList: [

				],
				CYEventList: [
					{ name: 'bbbbb' }
				],
				pageId: 1,
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
				this.ZZEventList = []
				this.eventShowList = []
				console.log(this.eventShowList.length + 'dasdasda')
				this.getZZEventList()
				
				console.log(this.eventShowList.length + 'sdasd')
				this.eventShowList = this.ZZEventList

				
			}


			
		},
		filters: {
			formatDate: function(value) {
				var time = new Date(value);
				var year=time.getFullYear();  
				var month=time.getMonth()+1;     
				var date=time.getDate();     
				var hour=time.getHours();     
				var minute=time.getMinutes();     
				var second=time.getSeconds();     
				return year+"."+month+"."+date+"   "+hour+":"+minute+" 创建";
			}
		},
		methods: {
			getZZEventList: function () {
				this.ZZEventList = []
				var params = {}
				var json = {}
				json.pageNumber = this.pageId
				params.jsonInfo = JSON.stringify(json)
				console.log('当前页数： ' + this.pageId)
				this.$http.get('event/getEventRoundList', params).then(function (response) {
					// console.log(response)
					var matchList = response.data.object.pager.list
					for (var i = 0; i < matchList.length; i++) {
						var obj = {}
						obj.isGoing = false
						// 是否是已发布但还未开赛
						obj.matchBegin = false
						this.responseFieldList.forEach(function (v, j) {
							if (v === "regime") {
								if (matchList[i][v] === 1) {
									obj[v] = "单阶段 单败淘汰制"
								} else if (matchList[i][v] === 2) {
									obj[v] = "单阶段 双败淘汰制"		
								} else if (matchList[i][v] === 3) {
									obj[v] = "单阶段 小组内单循环制"		
								} else {
									obj[v] = "单阶段 积分循环制"		
								}
							} else {
								obj[v] = matchList[i][v]
							}
						})

						if (obj.isPublish === null || obj.isPublish  === 0) {
							obj.statusText = "未发布"
						} else if (obj.isPublish  === 1){
							if (obj.status === 1) {
								obj.matchBegin = true
								var matchBeginTimestamp = obj.activityBegin
								var nowTimestamp = new Date().getTime()
								var time = matchBeginTimestamp - nowTimestamp
								var d=24*60*60*1000,
				       	 		h=60*60*1000,
				        		m=60*1000
				        obj._day=parseInt(time/d),
				        obj._hour=parseInt(time%d/h),
				       	obj._minute=parseInt(time%d%h/m),
								obj.statusText = "未开赛"
							} else if (obj.status === 2) {
								obj.statusText = "进行中"
								// 添加是否正在进行比赛的字段：isGoing
								obj.isGoing = true
							} else if (obj.status === 3) {
								obj.statusText = "已完结"
							}
						}

						if (obj.applyType === 1) {
							obj.applyType = "个人报名"
						} else if (obj.applyType  === 2) {
							if (obj.teamMemeberNum === null) obj.teamMemeberNum = 0
							obj.applyType = obj.teamMemeberNum + "人战队报名"
						}
							
						this.ZZEventList.push(obj)
					}
					console.log(this.ZZEventList)
					console.log(this.ZZEventList.length + 'bb')
					console.log(this.eventShowList.length + 'aa')
				})
			},
			getCYEventList: function () {

			},
			changeTab: function (tabId) {
				if (tabId === 0) {
					this.tabList[0].isCur = true
					this.tabList[1].isCur = false
					// 设置列表为我组织的赛事
					//this.eventShowList = this.ZZEventList
				} else {
					this.tabList[1].isCur = true
					this.tabList[0].isCur = false
					// 仅第一次切换tab进来查询我参与的赛事列表，以后就不查询了
					if (!this.CYEventListFlag) {
						this.CYEventListFlag = true
						this.getCYEventList()
					}
					// 设置列表为我参与的赛事
					//this.eventShowList = this.CYEventList
				}
			}
		}
	}
</script>
<style>
	.myMatch, .myMessage {
		width: 1020px;
	}
	.perCenter_body {
		background-color: #171a21;
	}
	.perCenter_head_tabList {
		width: 100%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #2a3946;
	}
	.perCenter_head_tabList li {
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
	.matchList_item, .messageList_item {
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
	.textInfo {
		float: left;
		margin-left: 12px;
	}
	.textInfo h3 {
		font-size: 18px;
		color: #f2f6f9;
		line-height: 1;
	}
	.match_otherInfo li {
		margin-top: 14px;
		line-height: 1;
	}
	.timeInfo {
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