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
					<template v-if="isCtfct">
						<li v-for="item in tabList" v-text="item.name" :class="{ tab_active: item.isCur }" @click="changeTab($index)">我组织的</li>
					</template>
					<template v-else>
						<li v-for="item in tabList" v-text="item.name" :class="{ tab_active: item.isCur }">我组织的</li>
					</template>
					<!-- <li>我参与的</li> -->
				</ul>
			</div>
			<div class="perCenter_content">
				<ul class="matchList">
					<li class="matchList_item clearfix" v-for="item in eventShowList" data-id="{{ item.id }}" data-eventId="{{ item.eventId }}" data-isPublish="{{ item.isPublish }}" @click="linkDetail">
						<img :src="'http://img.wangyuhudong.com/'+item.poster" alt="赛事海报">
						<span class="privacyMacth_icon" v-if="item.privacy === 1"></span>
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
									<span>参与人数：<span class="g-cjl-rsw"><span class="g-cjl-rsn" :style="{ width: ((item.num > item.maxNum ? item.maxNum : item.num) / item.maxNum) * 100 + '%' }"></span></span>
									<span class="col42a">{{ item.num > item.maxNum ? item.maxNum : item.num  }}</span>/{{ item.maxNum }}
									<template v-if="eventTypeFlag">
										<i class="u-cjl-tip" v-if="item.num - item.maxNum > 0">
											<span>
												{{ item.num - item.maxNum }}{{ item.applyTypeText2 }}在候补区
												<i class="u-cjl-tipws">
												<i class="u-cjl-tipns"></i>
												</i>
											</span>
										</i>
									</template>
									<template v-else>
										<i class="u-cjl-tip">
											<span>
												{{ item.seatText }}
												<i class="u-cjl-tipws">
												<i class="u-cjl-tipns"></i>
												</i>
											</span>
										</i>
									</template>
								</li>
								<li>
									<span>报名方式：</span><span>{{ item.applyTypeText }}</span>
								</li>
							</ul>
						</div>
						<div class="timeInfo">
							<p class="createtime" v-text="item.createDate | formatDate item.timeTypeStr" v-if="eventTypeFlag">2012.8.10 12:30 创建</p>
							<div class="statusBox" v-text="item.statusText" :class=" { onGoing: item.isGoing } ">未发布</div>
							<p id="countdownTime" class="m-cjl-kssj" v-if="item.matchBegin">
								<span class='col42a' v-if="item.isWaiting">等待组织者开赛</span>
								<template v-else>
									<span class="col42a">{{ item._day }}</span>天<span class="col42a">{{ item._hour }}</span>小时<span class="col42a">{{ item._minute }}</span>分后可开赛
								</template>
							</p>
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
				<div class="member-empty" v-if="eventShowList.length === 0">
					这里还没有内容哦~~
				</div>
				<div class="m-page ptb50" v-if="eventShowList.length != 0">
        	<button id="prev" type="button" @click="prevpage"></button>
        	<div class="pagination"><span class="current">{{ pageList.pageNumber }}</span>/<span>{{ pageList.pages }}</span></div>
        	<button id="next" type="button" @click="nextpage"></button>
        	<input type="text" id="pageto" v-model="pageId" @keyup="checkpage">
        	<button type="button" class="u-btn" @click="gopage">跳转</button>
        </div>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="foot">
            <div class="tel">
                <div class="telIcon">
                    <img src="../../static/images/telephone.png">
                    <span id="lx" v-link="{ path: '/contact'}">联系我们</span>
                </div>
            </div>
            <div class="letter">
                <div class="letterIcon">
                    <img src="../../static/images/letter.png">
                    <span>招贤纳士：hr-wangyu@miqtech.com
              </span>
                </div>
            </div>
            <div class="address">
                <div class="addressIcon">
                    <img src="../../static/images/address.png">
                    <span id="gy" v-link="{ path: '/about'}">关于我们</span>
                </div>
            </div>
            <div class="contactInformation">
                <span>浙ICP备14028335号-2   |   Copyright©2016 kaisaiba.com All Rights Reserved.</span>
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
		route: {
			data(transition) {
				//console.log('aaaaaaa')
				//console.log(this.isCtfct)
				// 获取是否是认证用户
				// this.$http.get('isIdentifyUser').then((response) => {
				// 	this.isCtfct = response.data.object.flag
					// transition.next({
					// 	isCtfct: response.data.object.flag
					// })
				var identFlag = window.sessionStorage.getItem("isident");
				var type = this.$route.params.matchType
				var pageId = this.$route.query.pageId
				if (/\D/.test(pageId)) {      // url地址栏pageId查询参数错误
					// alert('请求参数错误！')
					return 
				}
				if (identFlag) { // 是认证用户
					this.tabList = [ { id: 0, name: '我组织的', isCur: true }, { id: 1, name: '我参与的', isCur: false } ]
					if (type === 'create') {
						this.getZZEventList(pageId)
						this.tabList[0].isCur = true
					 	this.tabList[1].isCur = false
						this.eventTypeFlag = true
						this.ZZPageId = pageId
					} else if (type === 'join') {
						this.getCYEventList(pageId)
						this.tabList[0].isCur = false
					 	this.tabList[1].isCur = true
						this.eventTypeFlag = false
						this.CYPageId = pageId
					}
				} else { // 不是认证用户
					this.getCYEventList(pageId)
					this.tabList = [ { id: 0, name: '我参与的', isCur: true } ]
					this.eventTypeFlag = false
					this.CYPageId = pageId
				}
				//})
			}
		},
		data () {
			return {
				ZZEventListFlag: false,
				CYEventListFlag: false,
				tabList: [
					
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
					"activityBegin",
					"id",
					"eventId",
					"poster"
				],
				eventShowList: [

				],
				ZZEventList: [

				],
				CYEventList: [

				],
				pageId: "",
				// // 是否是认证用户
				isCtfct: false,
				pageList: {
					firstPage: true,
					lastPage: false,
					pageNumber: 1,
					pages: -1
				},
				eventTypeFlag: false,       // 如果是组织赛事就是true，表示显示时间，参与赛事就是false，表示不显示时间
				//isWaiting: true          // true：显示等待组织者开赛，false：显示可开赛倒计时时间
				//timeTypeStr: "创建"
				ZZPageId: 1,
				CYPageId: 1               
			}
		},
		components: {
			topHead,
	    sideBar,
	    slideBar,
	    createPop
		},
		ready: function () {
			//console.log('bbbbbbbbb')
			// // 获取是否是认证用户
			// this.$http.get('isIdentifyUser').then((response) => {
			// 	this.isCtfct = response.data.object.flag
			// 	// 是认证用户
			// 	if (this.isCtfct) {
			// 		this.tabList = [ { id: 0, name: '我组织的', isCur: true }, { id: 1, name: '我参与的', isCur: false } ]
			// 		this.eventTypeFlag = true
			// 		// 初始化时就查询我组织的赛事列表，仅查询一次，以后就不查询了
			// 		if (!this.ZZEventListFlag) {
			// 			this.ZZEventListFlag = true
			// 			this.getZZEventList(1)
			// 		}
			// 	} else {   // 不是认证用户
			// 		this.tabList = [ { id: 0, name: '我参与的', isCur: true } ]
			// 		this.eventTypeFlag = false
			// 		this.getCYEventList(1)
			// 	}
			// })
		},
		filters: {
			formatDate: function(value, timeTypeStr) {
				var time = new Date(value);
				var year=time.getFullYear();  
				var month=time.getMonth()+1;     
				var date=time.getDate();     
				var hour=time.getHours();   
				if (hour < 10 ) hour = "0" + hour
				var minute=time.getMinutes();
				if (minute < 10 ) minute = "0" + minute
				var second=time.getSeconds();     
				return year+"."+month+"."+date+"   "+hour+":"+minute+" "+timeTypeStr;
			}
		},
		methods: {
			linkDetail: function(e){
				// e.preventDefault();
				var _target=$(e.currentTarget);
				var _eventid=_target.attr("data-eventid");
				var _roundid=_target.attr("data-id");
				var _isPublish = _target.attr("data-isPublish");
				window.sessionStorage.setItem("eventId",_eventid);
				window.sessionStorage.setItem("eventRoundId",_roundid);
				this.$route.router.go({path: '/matchDetails?eventId='+_eventid});
			},
			getZZEventList: function (pageIdStr) {
				this.getEventList(pageIdStr, 'event/getEventRoundList', 0)    // 如果是得到组织的比赛，传0
			},
			getCYEventList: function (pageIdStr) {
				this.getEventList(pageIdStr, ' event/getMyEventRoundList', 1) // 如果是得到参与的比赛，传1
			},
			getEventList: function (pageIdStr, url, eventListId) {
				var pageId = parseInt(pageIdStr)
				//if (pageId > this.pageList.pageNumber) return
				var params = {}
				var json = {}
				json.pageNumber = pageId
				params.jsonInfo = JSON.stringify(json)
				this.$http.get(url, params).then(function (response) {
					var pager = response.data.object.pager
					this.pageList.firstPage = pager.firstPage
					this.pageList.lastPage = pager.lastPage
					this.pageList.pageNumber = pager.pageNumber
					this.pageList.pages = pager.pages
					var eventList = []
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
						obj.timeTypeStr = "创建"         // 传入显示时间的字符串： 如果是创建时间就是”创建“，如果是发布时间就是”发布“，默认让每个显示时间后加“创建

						if (obj.isPublish === null || obj.isPublish  === 0) {
							obj.statusText = "未发布"
						} else if (obj.isPublish  === 1) {
							obj.timeTypeStr = "发布"      // 传入显示时间的字符串： 如果是已发布，则让显示时间后加“发布”
							obj.createDate = obj.publishTime      // 如果已发布就将显示的时间设置为发布时间，而不是创建时间了
							if (obj.status === 1) {
								obj.matchBegin = true
								var matchBeginTimestamp = obj.activityBegin
								var nowTimestamp = new Date().getTime()
								var time = matchBeginTimestamp - nowTimestamp
								if (time < 0) {       //  如果已到开赛时间，但组织者还未点击开赛
									obj.isWaiting = true     // 这里要给每一个赛事对象加一个，不然组织赛事和参与赛事就会混用，然后导致错误，obj.isWaiting: true：显示等待组织者开赛，false：显示可开赛倒计时时间
								} else {
									obj.isWaiting = false    
									var d=24*60*60*1000,
					       	 		h=60*60*1000,
					        		m=60*1000
					        obj._day=parseInt(time/d),
					        obj._hour=parseInt(time%d/h),
					       	obj._minute=parseInt(time%d%h/m)
				       }
								obj.statusText = "未开赛"
							} else if (obj.status === 2) {
								obj.statusText = "进行中"
								// 添加是否正在进行比赛的字段：isGoing
								obj.isGoing = true
							} else if (obj.status === 3) {
								obj.statusText = "已完结"
							}
						}
						// 不能报名
						if (obj.allowApply === 0) {
							obj.applyTypeText = "不允许报名"
						} else {    // 能报名
							if (obj.applyType === 1) {
								obj.applyTypeText = "个人报名"
								obj.applyTypeText2 = "名选手"
							} else if (obj.applyType  === 2) {
								if (obj.teamMemeberNum === null) obj.teamMemeberNum = 0
								obj.applyTypeText = obj.teamMemeberNum + "人战队报名"
								obj.applyTypeText2 = "支战队"
							}
						}

						if (!this.eventTypeFlag) {
							if (matchList[i].seatNum === null) {
								if (obj.applyType === 1) {
									obj.seatText = "我处于候补区"
								} else if (obj.applyType === 2) {
									obj.seatText = "战队处于候补区"
								}
							} else {
								if (obj.applyType === 1) {
									obj.seatText = "我处于第" + matchList[i].seatNum + "位选手"
								} else if (obj.applyType === 2) {
									obj.seatText = "战队处于第" + matchList[i].seatNum + "位战队"
								}
							}
						}
						eventList.push(obj)
					}
					if (eventListId === 0) this.ZZEventList = eventList
					else this.CYEventList = eventList
					this.eventShowList = eventList
				})
			},
			changeTab: function (tabId) {
				//console.log(this.ZZPageId + ' ' + this.CYPageId)
				if (tabId === 0) {
					this.$route.router.go({ name: 'myMatch', params: { matchType: 'create' }, query: { pageId: this.ZZPageId} })
					// this.tabList[0].isCur = true
					// this.tabList[1].isCur = false
					// // 设置列表为我组织的赛事
					// this.eventTypeFlag = true
					// this.eventShowList = this.ZZEventList
				} else {
					this.$route.router.go({ name: 'myMatch', params: { matchType: 'join' }, query: { pageId: this.CYPageId } })
					// this.tabList[1].isCur = true
					// this.tabList[0].isCur = false
					// // 仅第一次切换tab进来查询我参与的赛事列表，以后就不查询了
					// if (!this.CYEventListFlag) {
					// 	this.CYEventListFlag = true
					// 	this.getCYEventList(1)
					// }
					// // 设置列表为我参与的赛事
					// this.eventTypeFlag = false
					// this.eventShowList = this.CYEventList
				}
				// console.log(window.location.pathname)
				// window.location.pathname = '/#/myMatch/create?pageId=1'
				// console.log(window.location.pathname)
				// console.log(this.$route.path)
				// this.$route.path = '/myMatch/join?pageId=1'
				// this.$route.params.matchType = 'join'
				// console.log(this.$route.params.matchType)
			},
			// 翻页
			prevpage:function(e){
				// e.preventDefault();
  			this.pageId = ""
				var currentpage = this.pageList.pageNumber;
    		if(currentpage>1){
    			currentpage--;
    			if (this.eventTypeFlag) {
    				//this.getEventList(currentpage, 'event/getEventRoundList', 0)    // 如果是得到组织的比赛，传0
    				this.$route.router.go({ name: 'myMatch', params: { matchType: 'create' }, query: { pageId: currentpage} })
    			} else {
    				//this.getEventList(currentpage, ' event/getMyEventRoundList', 1) // 如果是得到参与的比赛，传1
    				this.$route.router.go({ name: 'myMatch', params: { matchType: 'join' }, query: { pageId: currentpage } })
    			}
    			
    		}
    		else{
    			layer.msg('没有上一页了');
    		}
			},
			nextpage:function(e){
				// e.preventDefault();
  			this.pageId = ""
				var currentpage = this.pageList.pageNumber,
						maxpage = this.pageList.pages;
    		if(currentpage<maxpage){
    			//alert(123)
    			currentpage++;
    			if (this.eventTypeFlag) {
    				//this.getEventList(currentpage, 'event/getEventRoundList', 0)
    				this.$route.router.go({ name: 'myMatch', params: { matchType: 'create' }, query: { pageId: currentpage} })
    			} else {
    				//this.getEventList(currentpage, ' event/getMyEventRoundList', 1) 
    				this.$route.router.go({ name: 'myMatch', params: { matchType: 'join' }, query: { pageId: currentpage } })
    			}
    		}
    		else{
    			layer.msg('没有下一页了');
    		}
			},
			gopage:function(e){
				// e.preventDefault();
				if (this.pageId === "" || /\D/g.test(this.pageId)) return 
				if (this.eventTypeFlag) {
  				//this.getEventList(this.pageId, 'event/getEventRoundList', 0)
  				this.$route.router.go({ name: 'myMatch', params: { matchType: 'create' }, query: { pageId: parseInt(this.pageId)} })    
  			} else {
  				//this.getEventList(this.pageId, 'event/getMyEventRoundList', 1) 
  				this.$route.router.go({ name: 'myMatch', params: { matchType: 'join' }, query: { pageId: parseInt(this.pageId) } })
  			}
  			this.pageId = ""
			},
			checkpage:function(e){
				var pages = this.pageList.pages; 
	    	var num = $('#pageto').val();
	    	if(num==0 && num!=""){
	    		$('#pageto').val('1');
	    	}else if(num>pages){
	    		$('#pageto').val(pages);
	    	}
			}
		}
	}
</script>