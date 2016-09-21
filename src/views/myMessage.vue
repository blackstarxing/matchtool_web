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
				<ul class="sysMsgList" v-show="sysMsgFlag">
					<li class="messageList_item sysMsg_item clearfix" v-for="item in sysMsgList" :class="{ pointerCursor: item.urlType != null }" @click="linkDetail">
						<img :src="iconSrc" alt="">
						<div class="textInfo sysMsgInfo messageInfo">
							<h3 class="info_name" v-text="item.title">开赛吧管理员</h3>
							<p class="sysMsgText" v-text="item.info">欢迎加入开赛吧，这里是一个专业赛事管理互动平台。在这里你可以了解到海量大小型赛事，便捷的报名轻松参与赛事！欢迎加入开赛吧，这里是一个专业赛事管理互动平台。在这里你可以了解到海量大小型赛事，便捷的报名轻松参与赛事！</p>
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
				<ul class="matchMsgList" v-show="matchMsgFlag">
					<li class="messageList_item matchMsg_item clearfix" v-for="item in matchMsgList" :class="{ pointerCursor: item.urlType != null }" @click="linkDetail">
						<img :src="iconSrc" alt="">
						<div class="textInfo matchMsgInfo messageInfo">
							<h3 class="info_name" v-text="item.title">开赛吧管理员</h3>
							<p class="matchMsgText" v-text="item.info">欢迎加入开赛吧，这里是一个专业赛事管理互动平台。在这里你可以了解到海量大小型赛事，便捷的报名轻松参与赛事！欢迎加入开赛吧，这里是一个专业赛事管理互动平台。在这里你可以了解到海量大小型赛事，便捷的报名轻松参与赛事！</p>
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
				<!-- <div class="m-page ptb50">
        	<button id="prev" type="button"></button>
        	<div class="pagination"><span class="current">1</span>/<span>2</span></div>
        	<button id="next" type="button"></button>
        	<input type="text" id="pageipt" v-model="pageId">
        	<button type="button" class="u-btn">跳转</button>
        </div> -->
        <div class="member-empty" v-if="(sysMsgFlag === true && sysMsgList.length === 0) || (matchMsgFlag === true && matchMsgList.length === 0)">
					这里还没有内容哦~~
				</div>
        <div class="m-page ptb50" v-if="(sysMsgFlag === true && sysMsgList.length != 0) || (matchMsgFlag === true && matchMsgList.length != 0)">
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
			data (transition) {
				var msgType = this.$route.params.messageType
				var pageId = this.$route.query.pageId
				if (/\D/g.test(pageId)) {
					layer.msg('请求参数错误！')
					return
				}
				if (msgType === 'system') {
					this.getSysMsgList(pageId)
					this.tabList[0].isCur = true
					this.tabList[1].isCur = false
					this.msgTypeFlag = true
					this.sysMsgFlag = true
					this.matchMsgFlag = false
					this.iconSrc = "../../static/images/myMsg_icon1.png"
					this.sysPageId = pageId
				} else if (msgType === 'match') {
					this.getMatchMsgList(pageId)
					this.tabList[1].isCur = true
					this.tabList[0].isCur = false
					this.msgTypeFlag = false
					this.sysMsgFlag = false
					this.matchMsgFlag = true
					this.iconSrc = "../../static/images/myMsg_icon2.png"
					this.sysPageId = pageId
				} else {
					layer.msg('请求参数错误！')
				}
			}
		},
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
				pageId: "",
				iconSrc: "../../static/images/myMsg_icon1.png",
				pageList: {
					firstPage: true,
					lastPage: false,
					pageNumber: 1,
					pages: -1
				},
				msgTypeFlag: true,
				sysMsgFlag: true,
				matchMsgFlag: false,
				sysPageId: 1,
				matchPageId: 1
			}
		},
		components: {
			topHead,
	    sideBar,
	    slideBar,
	    createPop
		},
		ready: function () {

		},
		filters: {
			formatDate: function(value) {
				var time = new Date(value);
				var year=time.getFullYear();
				var month=time.getMonth()+1;
				var date=time.getDate();  
				var hour=time.getHours();
				if (hour < 10 ) hour = "0" + hour
				var minute=time.getMinutes();
				if (minute < 10 ) minute = "0" + minute
				var second=time.getSeconds();
				return year+"."+month+"."+date+"   "+hour+":"+minute;
			}
		},
		methods: {
			linkDetail: function (e) {
				var index, showList = []
				if (this.sysMsgFlag) {
					showList = this.sysMsgList
					index = $('.sysMsg_item').index(e.currentTarget)
				} else {
					showList = this.matchMsgList
					index = $('.matchMsg_item').index(e.currentTarget)
				}
				var urlType = showList[index].urlType
				if (urlType === null) {     // 为null，则点击不跳转
					e.preventDefault()
				} else if (urlType === 4) { // 为4，跳转到个人中心参赛资料设置页面
					this.$route.router.go({ name: 'perSetting', params: { userId: 1 } })
				} else if (urlType === 1 || urlType === 2) { // 为1，跳转到赛事详情页面  为2，也跳转到赛事详情页对阵图标签
					var _eventid, _roundid
					var urlParam = showList[index].urlParam
					var paramsArr = urlParam.split('&')
					paramsArr.forEach(function (v, i) {
						var key = v.split('=')[0], value = v.split('=')[1]
						if (key === 'eventId') {
							_eventid = value
						} else if (key === 'roundId') {
							_roundid = value
						}
					})
					window.sessionStorage.setItem("eventId",_eventid);
					window.sessionStorage.setItem("eventRoundId",_roundid);
					this.$route.router.go({path: '/matchDetails?eventId='+_eventid})
				} else if (urlType === 3) { // 为3，跳转到我的赛事页面
					//this.$route.router.go({ path: '/myMatch' })
					// 这里需要取得是否是认证者的字段，然后设置相应的路由跳转
					var identFlag = window.sessionStorage.getItem("isident");
					if (identFlag) {
						this.$route.router.go({ name: 'myMatch', params: { matchType: 'create' }, query: { pageId: 1} })
					} else {
						this.$route.router.go({ name: 'myMatch', params: { matchType: 'join' }, query: { pageId: 1} })
					}
				}
				//else if (urlType === 2) {
					// this.$route.router.go({path: '/matchDetails'})
				//}
			},
			msgTextInit: function (info) {
				var $msgDivList = $('.'+info)
				var $msgTextList = $('.'+info.split('Info')[0] + 'Text')
				$msgTextList.each(function (i, v) {
					var tmpText = $(this).html()
					var nowText = tmpText.substring(0, 79)
					var str = "<p class=expand"+info+" style='word-wrap: break-word;'>" + nowText
					if (tmpText.length > 79) {
						str = str + "&nbsp&nbsp&nbsp<a data-id="+i+"><span style='color: #42aa53; text-decoration: underline'>展开</span>&nbsp&nbsp<i style='display: inline-block; vertical-align: middle; width: 16px; height: 16px; background: url(../../static/images/gopage.png)'></i></a></p>"
						$msgDivList.eq(i).append(str)
						$msgTextList.eq(i).hide()
					}
				})
				var $aList = $('.expand'+info+' a');
				$aList.click(function (e) {
					e.stopPropagation()
					var index = $(this).attr('data-id')
					var i = $('.expand'+info+' a').index(e.currentTarget)
					$msgTextList.eq(index).show()
					$('.expand'+info).eq(i).hide()
				})
			},
			getMsgList: function (typeId, pageNum) {
				var params = {}
				var json = {}
				json.page = pageNum
				json.type = typeId
				params.jsonInfo = JSON.stringify(json)
				this.$http.get('msg/getMsgList', params).then(function (response) {
					var list = response.data.object.msgList.list
					this.pageList.pages = response.data.object.msgList.pages
					this.pageList.pageNumber = response.data.object.msgList.pageNumber
					if (typeId === 1) {
						this.sysMsgList = list
						this.$nextTick(function () {
							this.msgTextInit("sysMsgInfo")
						})
					} else if (typeId === 2) {
						this.matchMsgList = list
						this.$nextTick(function () {
							this.msgTextInit("matchMsgInfo")
						})
					}
				}, function (response) {
					console.log(response)
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
					this.$route.router.go({ name: 'myMessage', params: { messageType: 'system' }, query: { pageId: this.sysPageId } })
				} else {
					this.$route.router.go({ name: 'myMessage', params: { messageType: 'match' }, query: { pageId: this.matchPageId } })
				}
			},
			// 翻页
			prevpage:function(e){
				// e.preventDefault();
				this.pageId = ""
				var currentpage = this.pageList.pageNumber;
    		if(currentpage>1){
    			currentpage--;
    			//this.getMsgList(this.msgTypeFlag ? 1 : 2, parseInt(currentpage))
    			if (this.msgTypeFlag) {
						this.$route.router.go({ name: 'myMessage', params: { messageType: 'system'}, query: { pageId: currentpage } })
    			} else {
    				this.$route.router.go({ name: 'myMessage', params: { messageType: 'match'}, query: { pageId: currentpage } })
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
    			currentpage++;
    			//this.getMsgList(this.msgTypeFlag ? 1 : 2, parseInt(currentpage))
    			if (this.msgTypeFlag) {
						this.$route.router.go({ name: 'myMessage', params: { messageType: 'system'}, query: { pageId: currentpage } })
    			} else {
    				this.$route.router.go({ name: 'myMessage', params: { messageType: 'match'}, query: { pageId: currentpage } })
    			}
    		}
    		else{
    			layer.msg('没有下一页了');
    		}
			},
			gopage:function(e){
				// e.preventDefault();
				if (this.pageId === "" || /\D/g.test(this.pageId)) return
  			//this.getMsgList(this.msgTypeFlag ? 1 : 2, parseInt(this.pageId))
  			if (this.msgTypeFlag) {
					this.$route.router.go({ name: 'myMessage', params: { messageType: 'system'}, query: { pageId: this.pageId } })
  			} else {
  				this.$route.router.go({ name: 'myMessage', params: { messageType: 'match'}, query: { pageId: this.pageId } })
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
