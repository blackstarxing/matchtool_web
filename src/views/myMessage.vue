<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="perCenter_wrap myMessage">
		<h2 class="perCenter_title">我的消息</h2>
		<div class="perCenter_body">
			<div class="perCenter_head">
				<ul class="perCenter_head_tabList">
					<li v-for="item in tabList" v-text="item.name" :class="{ tab_active: item.isCur }" @click="changeTab($index)">我组织的</li>
					<!-- <li>我参与的</li> -->
				</ul>
			</div>
			<div class="perCenter_content">
				<ul class="messageList">
					<li class="messageList_item clearfix">
						<img src="../../static/images/myMsg_icon1.png" alt="">
						<div class="textInfo messageInfo">
							<h3 class="info_name">开赛吧管理员</h3>
							<p>欢迎加入开赛吧，这里是一个专业赛事管理互动平台。在这里你可以了解到海量大小型赛事，便捷的报名轻松参与赛事！同时你也可以申请成为一名专业的赛事组织，建立属于自己赛事赛事赛事赛事赛事赛事赛事赛事</p>
						</div>
						<div class="timeInfo">
							<p class="createtime">2012.8.10 12:30</p>
						</div>
					</li>
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
					// alert('ZZ')
					this.eventShowList = this.ZZEventList
				} else {
					this.tabList[1].isCur = true
					this.tabList[0].isCur = false
					// alert('CY')
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
	.messageList_item img {
		float: left;
		width: 80px;
		height: 83px;
	}
	.messageInfo {
		width: 560px;
		margin-left: 18px;
	}
	.messageInfo h3 {
		margin: 6px 0 20px 0;
	}
</style>