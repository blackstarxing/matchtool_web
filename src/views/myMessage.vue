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
					<li class="messageList_item clearfix" v-for="item in msgShowList">
						<img :src="iconSrc" alt="">
						<div class="textInfo messageInfo">
							<h3 class="info_name" v-text="item.title">开赛吧管理员</h3>
							<p class="msgText" v-text="item.info">欢迎加入开赛吧，这里是一个专业赛事管理互动平台。在这里你可以了解到海量大小型赛事，便捷的报名轻松参与赛事！欢迎加入开赛吧，这里是一个专业赛事管理互动平台。在这里你可以了解到海量大小型赛事，便捷的报名轻松参与赛事！</p>
						</div>
						<div class="timeInfo">
							<p class="createtime" v-text="item.createDate | formatDate">2012.8.10 12:30</p>
						</div>
					</li>
					<!-- <li class="messageList_item clearfix">
						<img src="../../static/images/myMsg_icon1.png" alt="">
						<div class="textInfo messageInfo">
							<h3 class="info_name">开赛吧管理员</h3>
							<p class="msgText">欢迎加入开赛吧，这里是一个专业赛事管理互动平台。在这里你可以了解到海量大小型赛事，便捷的报名轻松参与赛事！同时你也可以申请成为一名专业的赛事组织，建立属于自己赛事赛事赛事赛事赛事赛事赛事赛事</p>
						</div>
						<div class="timeInfo">
							<p class="createtime">2012.8.10 12:30</p>
						</div>
					</li>
					<li class="messageList_item clearfix">
						<img src="../../static/images/myMsg_icon1.png" alt="">
						<div class="textInfo messageInfo">
							<h3 class="info_name">开赛吧管理员</h3>
							<p class="msgText">adasdasdasd大师大师大师大师大师大师大师大师大师的，adasdasdasd大师大师大师大师大师大师大师大师大师的</p>
						</div>
						<div class="timeInfo">
							<p class="createtime">2012.8.10 12:30</p>
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
				sysMsgListFlag: false,
				matchMsgListFlag: false,
				tabList: [
					{ id: 0, name: '系统通知', isCur: true },
					{ id: 1, name: '赛事通知', isCur: false },
				],
				msgShowList: [

				],
				sysMsgList: [

				],
				matchMsgList: [

				],
				pageId: 1,
				iconSrc: "../../static/images/myMsg_icon1.png"
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
			if (!this.sysMsgListFlag) {
				this.sysMsgListFlag = true
				this.getSysMsgList(1)
			}
			this.msgTextInit()
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
				return year+"."+month+"."+date+"   "+hour+":"+minute;
			}
		},
		methods: {
			msgTextInit: function () {
				var $msgDivList = $('.messageInfo')
				var $msgTextList = $('.msgText')
				//var text = []
				$msgTextList.each(function (i, v) {
					var tmpText = $(this).html()
					// alert(text)
					var nowText = tmpText.substring(0, 79)
					var str = "<p class='expandMsgText'>" + nowText
					if (tmpText.length > 79) {
						//text.push($msgTextList.eq(i).html())
						str = str + "&nbsp&nbsp&nbsp<a data-id="+i+"><span style='color: #42aa53; text-decoration: underline'>展开</span>&nbsp&nbsp<i style='display: inline-block; vertical-align: middle; width: 16px; height: 16px; background: url(../../static/images/gopage.png)'></i></a></p>"
						$msgDivList.eq(i).append(str)
						$msgTextList.eq(i).hide()
					}
				})
				var $aList = $('.expandMsgText a');
				$aList.click(function (e) {
					var index = $(this).attr('data-id')
					var i = $('.expandMsgText a').index(e.currentTarget)
					//alert($(this).attr('data-id'))
					//alert(i)
					$msgTextList.eq(index).show()
					$('.expandMsgText').eq(i).hide()
					// $aList = $('.msgText a')
					// console.log($aList.index(e.currentTarget))
					// var index = $aList.index(e.currentTarget)
					// console.log($msgTextList.find('a'))
					// $('.msgText:has(a)').eq(index).html(text[index])
				})

			},
			getMsgList: function (typeId, pageNum) {
				var params = {}
				var json = {}
				json.page = pageNum
				json.type = typeId
				params.jsonInfo = JSON.stringify(json)
				console.log('当前页数： ' + this.pageId)
				this.$http.get('msg/getMsgList', params).then(function (response) {
					// console.log(response)
					var list = response.data.object.msgList

					if (typeId === 1) {
						this.sysMsgList = list
					} else if (typeId === 2) {
						this.matchMsgList = list
					}
					this.msgShowList = list
				})
			},
			getSysMsgList: function (pageNum) {
				this.getMsgList(1, pageNum)
			},
			getMatchMsgList: function (pageNum) {
				this.getMsgList(2, pageNum)
			},
			changeTab: function (tabId) {
				if (tabId === 0) {
					this.tabList[0].isCur = true
					this.tabList[1].isCur = false
					// 设置列表为我组织的赛事
					// alert('ZZ')
					this.msgShowList = this.sysMsgList
					this.iconSrc = "../../static/images/myMsg_icon1.png"
				} else {
					this.tabList[1].isCur = true
					this.tabList[0].isCur = false
					// alert('CY')
					// 仅第一次切换tab进来查询我参与的赛事列表，以后就不查询了
					if (!this.matchMsgListFlag) {
						this.matchMsgListFlag = true
						this.getMatchMsgList(1)
					}
					// 设置列表为我参与的赛事
					this.msgShowList = this.matchMsgList
					this.iconSrc = "../../static/images/myMsg_icon2.png"
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
		width: 554px;
		margin-left: 18px;
		letter-spacing: 1px;
	}
	.messageInfo h3 {
		margin: 6px 0 20px 0;
	}
</style>