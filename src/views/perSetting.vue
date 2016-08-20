<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="perCenter_wrap perSetting">
		<h2 class="perCenter_title">个人设置</h2>
		<div class="perset_body">
			<div class="perset_head">
				<ul class="perset">
					<li v-for="item in tabList" v-text="item.name" :class="{ tab_active: item.isCur }" @click="setCur($index)"></li>
					<!-- <li class="perset_active">基本资料</li>
					<li>参赛资料</li>
					<li>组织者认证</li> -->
				</ul>
			</div>
			<div class="perset_content">
				<div class="perset_basicInfo" v-show="tabFlag == 0">
					<p class="idInfo">当前登录账号：<span class="curId" v-text="userInfoData.username"></span></p>
					<div class="basicInfo_form">
					<div class="form_item nickname_item">
						<label for="" class="text_label">昵称 : </label>
						<input id="" type="text" class="nickname text_box" v-model="userInfoData.nickname" @blur="checkNickname">
						<p id="nicknameErrorText" class="errorInfo" style="display: none;"><i></i><span>昵称已被使用</span></p>
					</div>	
					<div class="form_item gender_item">
						<label for="" class="text_label">性别 : </label>
						<div class="g-c-zbf perset_zbf">
							<div class="f-fl g-c-ms">
								<input type="radio" id="man" name="gender" class="regular-radio" checked value="0" v-model="userInfoData.sex"/>
								<label for="man"></label>
								<label for="man" class="u-c-per">		
									<span class="f-fl">
										男
									</span>
								</label>
							</div>
							<div class="f-fl g-c-ms">
								<input type="radio" id="woman" name="gender" class="regular-radio" value="1" v-model="userInfoData.sex"/>
								<label for="woman"></label>
								<label for="woman" class="u-c-per">		
									<span class="f-fl">
										女
									</span>
								</label>
							</div>
							<div class="f-fl">
								<input type="radio" id="secret" name="gender" class="regular-radio" value="2" v-model="userInfoData.sex"/>
								<label for="secret"></label>
								<label for="secret" class="u-c-per">		
									<span class="f-fl">
										保密
									</span>
								</label>
							</div>
						</div>
					</div>
					<div class="form_item region">
						<label for="" class="text_label">地区 : </label>
						<select class="u-c-slt perset_slt mr-20" name="provinces" id="provinces" v-model="rootAreaId"  @change="getSecondArea(rootAreaId)" required>
							<option value="-1">请选择省份</option>
							<option value="{{ item.id }}" v-for="item in rootArea" v-text="item.name"></option>
						</select>
						<select class="u-c-slt perset_slt" name="citys" id="citys" v-model="secondAreaId" required>
							<option value="-2">请选择城市</option>
							<option value="{{ item.area_code }}" v-for="item in secondArea" v-text="item.name"></option>
						</select>
					</div>
					<div class="form_item birthday">
						<label for="" class="text_label">生日 : </label>
						<select class="u-c-slt perset_slt" name="year" id="" v-model="userBirthday.yearNum" @change="setYearNextDo" required>
							<option value="-1">请选择</option>
							<option value="{{ item }}" v-for="item in userBirthday.yearList" v-text="item"></option>
						</select>
						<span>年</span>
						<select class="u-c-slt perset_slt" name="month" id="" v-model="userBirthday.monthNum" @change="setMonthNextDo" required>
							<option value="-1">请选择</option>
							<option value="{{ item }}" v-for="item in userBirthday.monthList" v-text="item"></option>
						</select>
						<span>月</span>
						<select class="u-c-slt perset_slt" name="day" id="" v-model="userBirthday.dayNum" required>
							<option value="-1">请选择</option>
							<option value="{{ item }}" v-for="item in userBirthday.dayList" v-text="item"></option>
						</select>
						<span class="mr-0">日</span>
					</div>
					<div class="form_item introduction">
						<label for="" class="text_label">个人介绍 : </label>
						<textarea class="introduction-text text_box" v-model="userInfoData.speech" placeholder="150字以内"></textarea>
					</div>
					<div class="setImage" @click="setUserPic">
						<img class="user_pic" v-bind:src="'http://img.wangyuhudong.com/'+saveUserInfo.icon" v-if="saveUserInfo.icon"/>
						<div class="pic_mask">
							<span class="icon-uniE62B"></span>
							<p class="pic_mask_text"><span>设置头像</span></p>
						</div>
					</div>
				</div>
				</div>
				<div class="perset_competingInfo" v-show="tabFlag == 1">
					<p class="cptInfo_title">选手信息</p>
					<div class="cptInfo_content">
						<div class="cpt_item form_item">
							<label for="realName">真实姓名 ：</label>
							<input type="text" id="realName" class="text_box">
						</div>
						<div class="cpt_item form_item">
							<label for="validatePerId">有效身份证 ：</label>
							<input type="text" id="validatePerId" class="text_box">
						</div>
						<div class="cpt_item form_item">
							<label for="telephone">手机号 ：</label>
							<input type="text" id="telephone" class="text_box" v-model="userInfoData.username">
						</div>
						<div class="cpt_item form_item">
							<label for="qq">QQ ：</label>
							<input type="text" id="qq" class="text_box">
						</div>
						<div class="cpt_item form_item">
							<label for="weixin">微信号 ：</label>
							<input type="text" id="weixin" class="text_box">
						</div>
					</div>
				</div>
				<div class="perset_organizersCfct" v-show="tabFlag == 2">
					<p class="organizersCfct_title">输入组织者认证内测邀请码</p>
					<div class="oCfct_item form_item">
						<label for="privateInviteCode">内测邀请码 ：</label>
						<input type="text" id="privateInviteCode" class="text_box">
						<p class="errorInfo"><i></i><span>邀请码已被使用</span></p>
					</div>
					<!-- <div class="PICExplain"> -->
						<p class="organizersCfct_title">关于组织者内测邀请码</p>
						<p class="PICExplain_text">组织者内测邀请码是开赛吧提供给专业的赛事组织或民间赛事举办达人在开赛吧平台创建维护赛事的授权。认证的组织者可通过开赛吧提供的赛事举办工具自定义个性赛事，并帮助完成报名信息收集、对阵分组匹配等相关赛事组织筹办工作。</p>
					<!-- </div> -->
				</div>
			</div>
		</div>
		<a href="javascript:;" class="saveBtn" v-text="btnText" @click="savePerSetting"></a>
		</div>
			<div class="m-userpic-mask" style="padding-left:100px;">
			<div class="pic-select">
				<div class="wrap">
					<a href="javascript:void(0);" class="u-btn-close" @click="closePop"></a>
					<div class="picBox">
						<div id="pic"></div>
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
				nicknameErrorTexr: false,
				dayFlag: false,
				tabFlag: 0,
				tabList: [
					{ id: 0, name: '基本资料', isCur: true, url: 'sysuser/saveSysUserInfo' },
					{ id: 1, name: '参赛资料', isCur: false, url: 'sysuser/saveSysUserInfo' },
					{ id: 2, name: '组织者认证', isCur: false, url: 'identify/identifyByCode' }
				],
				btnText: '保 存',
				userInfoData: {},
				rootArea: [],
				SecondArea: [],
				rootAreaId: "",
				secondArea: [],
				secondAreaId: "",
				userBirthday: {
					yearList: [],
					monthList: [],
					dayList: [],
					yearNum: "-1",
					monthNum: "-1",
					dayNum: "-1"
				},
				saveUserInfo: {
					birthdayStr: "",
					cityCode: "",
					icon: "",
					nickname: "",
					sex: 0,
					speech: "",
					sysUserId: -1,
					userId: -1
				} 
			}
		},
		components: {
			topHead,
	    sideBar,
	    slideBar,
	    createPop
		},
		ready: function () {
			var _this = this
			// 图片上传
			$('#pic').diyUpload({
				url:'http://wy.oetapi.wangyuhudong.com/file/upload',
				success:function( data ) {
					console.info( data );
					_this.saveUserInfo.icon=data.object.src;
					$(".m-userpic-mask").hide();
				},
				error:function( err ) {
					console.info( err );	
				},
				buttonText : '选择图片',
				chunked:true,
				// 分片大小
				chunkSize:512 * 1024,
				//最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
				fileNumLimit:1,
				fileSizeLimit:500000 * 1024,
				fileSingleSizeLimit:50000 * 1024
			});

			// var _this = this
			this.$http.get('sysuser/querySysUserInfo').then(function (response) {
			 // this.$set('userInfoData', data);
			  this.userInfoData = response.data.object.userInfo
			  this.saveUserInfo.sysUserId = response.data.object.sysUser.id

			  this.$http.get('sysuser/querySysAreaInfo').then(function (response) {
					//console.log(response)
					this.rootArea = response.data.object.areaMap.sysRootArea
				})
			  // 如果已设置头像
			 	if (response.data.object.userInfo.icon != "") {
			 		this.saveUserInfo.icon = response.data.object.userInfo.icon
			 	}

			  // 如果已设置省份和城市
			  if (response.data.object.areaMap) {
			  	this.rootAreaId = response.data.object.areaMap.pid.toString()
				  console.log(this.rootAreaId + 'aaaaaaaaa')
				  if (this.rootAreaId != "") {
				  	this.secondAreaId = response.data.object.areaMap.areaCode
				  	this.getSecondArea(this.rootAreaId)
				  	console.log(this.secondAreaId)
				  }
			  } else {
			  	this.rootAreaId = "-1"
			  	this.secondAreaId = "-2"
			  }
			  
			  // 如果已设置生日
			  if (response.data.object.sysUser.birthdayStr != "") {
			  	
			  	var str = response.data.object.sysUser.birthdayStr
			  	var arr = str.split('-');
			  	this.userBirthday.yearNum = arr[0]
			  	if (arr[1].length > 1) this.userBirthday.monthNum = arr[1].charAt(1) + ""
			  	else this.userBirthday.monthNum = arr[1]
			  	this.getDayList()
			  	if (arr[2].length > 1) this.userBirthday.dayNum = arr[2].charAt(1) + ""
			  	else this.userBirthday.dayNum = arr[2]
			  }

			  if (this.userInfoData.sex === null) {
			  	this.userInfoData.sex = 0;
			  }
				if (this.userInfoData.speech === null) {
					this.userInfoData.speech = ''
				}
			})
			
			// 设置初始的年份和月份
			// function setBirthdayData () {
			// 	for (var i = 2016; i >= 1900; i--) {
			// 		_this.userBirthday.yearList.push(i);
			// 	}
			// 	for (var i = 1; i < 13; i++) {
			// 		_this.userBirthday.monthList.push(i);
			// 	}
			// }
			// setBirthdayData()
			this.setBirthdayData()
		},
		methods: {
			checkNickname: function () {
				var json = { nickname: this.userInfoData.nickname, telephone: this.userInfoData.username }
				this.$http.get('registerCheck', json).then(function (response) {
					// console.log(response)
					var data = response.data.object
					if (data.nicknameValid === 0) {
						$('#nicknameErrorText').show()
						//this.nicknameErrorTexr = true
					} else {
						$('#nicknameErrorText').hide()
						//this.nicknameErrorTexr = false
					}
				})
			},
			setUserPic: function(e){
	        $('.m-userpic-mask').show();
	    },
	    closePop: function(e){
	        $('.m-userpic-mask').hide();
	    },
			setCur: function (index) {
				this.tabList.map(function (v, i) {
					i == index ? v.isCur = true : v.isCur = false
				})
				this.tabFlag = index
				this.btnText = (this.tabFlag === 2 ? '认 证' : '保 存')
			},
			getSecondArea: function (rootId) {
				// console.log(rootId)
				//alert(123)
				// 如果切换到了请选择省份option，则不查询城市，直接赋空数组并设置为请选择城市option
				if (rootId === "-1") {
					this.secondArea = []
					this.secondAreaId = "-2"
					return 
				}
				var params = {}
				var json = {}
				json.pid = rootId
				params.jsonInfo = JSON.stringify(json)
				this.$http.get('sysuser/querySysAreaInfo', params).then(function (response) {
					// console.log(response)
					this.secondArea = response.data.object.areaMap.sysSecondArea
					//this.secondAreaId = this.secondArea[0].id
					// 不能把这个放在外面，外面是同步的，得放在这个异步的回调中
					if (this.secondAreaId === "-2") {
						this.$nextTick(function () {
							// console.log(this.secondArea)
							$('#citys option').eq(0).attr('selected', false)
							$('#citys option').eq(1).attr('selected', true)
							//console.log($('#citys option').eq(0).attr('checked'))
						})
					}
				})
			},
			setBirthdayData: function () {
				for (var i = 2016; i >= 1900; i--) {
					this.userBirthday.yearList.push(i);
				}
				for (var i = 1; i < 13; i++) {
					this.userBirthday.monthList.push(i);
				}
			}, 
			getDayList: function () {
				var year = parseInt(this.userBirthday.yearNum)
				var month = parseInt(this.userBirthday.monthNum)
				var dayListTmp = []
				if (year === -1 || month === -1) return 
				for (var i = 1; i <= 28; i++) {
					dayListTmp.push(i)
				}
				if (month === 2) {
					if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
						dayListTmp.push(29)
					}
				} else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
					dayListTmp.push(29, 30, 31)	
				} else {
					dayListTmp.push(29, 30)
				}
				this.userBirthday.dayList = dayListTmp
			},
			setYearNextDo: function () {	
				// this.getDayList()
				if (this.userBirthday.monthNum === "-1") {
					this.userBirthday.monthNum = "1"
				}
				this.getDayList()
				// 只第一次修改年份并且还没有设置生日（如果以设置生日，那么修改年份，天数不变）时天数变成1，其余修改年份，天数不变
				if (!this.dayFlag && this.userBirthday.dayNum === "-1") {
					this.userBirthday.dayNum = 1
					this.dayFlag = !this.dayFlag
				}
			},
			setMonthNextDo: function () {
				this.getDayList()
			},
			savePerSetting: function () {
				var _this = this
				this.tabList.forEach(function (v, i) {
					// console.log(v.isCur)
					if (v.isCur === true) {
						// console.log(v.url)
						if (v.name === '基本资料') {
							// console.log(typeof _this.userBirthday.yearNum)
							// 生日
							var y = _this.userBirthday.yearNum,
									m = _this.userBirthday.monthNum,
									d = _this.userBirthday.dayNum
							if (y === "-1" || m === "-1" || d === "-1") {
								_this.saveUserInfo.birthdayStr = ""
							} else {
								if (y < 10) y = "0" + y
								if (m < 10) m = "0" + m
								if (d < 10) d = "0" + d
								_this.saveUserInfo.birthdayStr = y + "-" + m + "-" + d
							}
							//console.log(_this.userInfoData.birthday)

							// 城市编码
							//console.log($('#provinces').val() + ' ' + $('#citys').val())
							//console.log(_this.rootAreaId + ' ' + _this.secondAreaId)
							if ($('#provinces').val() === "-1" || $('#citys').val() === "-2") {
								_this.saveUserInfo.cityCode = ""
							} else {
								_this.saveUserInfo.cityCode = $('#citys').val()
							}
							//console.log(_this.userInfoData.cityCode)
							// 头像

							// 昵称
							if (_this.userInfoData.nickname === '') {

							} else {
								_this.saveUserInfo.nickname = _this.userInfoData.nickname
							}
							// 性别
							_this.saveUserInfo.sex = _this.userInfoData.sex
							// 个人介绍
							_this.saveUserInfo.speech = _this.userInfoData.speech
							// 系统用户id(前面已设置)
							// 用户id
							_this.saveUserInfo.userId = _this.userInfoData.id
							// console.log(_this.saveUserInfo)
							var params = {}
							params.jsonInfo = JSON.stringify(_this.saveUserInfo)
							_this.$http.post(v.url, params).then(function (response) {
								console.log(response)
								// alert("修改成功！")
							})
						} else if (v.name === '参赛资料') {
							
						} else {
							alert(456)
						}
					}
				})
			}
		}
	}
</script>
<style type="text/css">
	.perCenter_wrap {
		width: 600px;
		margin: 60px auto;
		overflow: hidden;
	}
	.perCenter_title {
		margin-top: 40px;
		margin-bottom: 15px; 
		color: #fdb91a;
	}
	.perset_body {
		border: 6px solid #292f3b;
	}
	.perset {
		width: 100%;
		height: 55px;
		line-height: 55px;
		background: url(../../static/images/regtop.png);
	}
	.perset li {
		display: inline-block;
		width: 80px;
		height: 50px;
		font-size: 14px;
		color: #fff;
		text-align: center;
		margin: 0 18px 0 24px;
		cursor: pointer;	
	}
	.perCenter_wrap .tab_active {
		border-bottom: 4px solid #fdb91a;
		color: #fdb91a;
	}
	.perset_content {
		padding: 30px 34px;
	}
	.basicInfo_form {
		position: relative;
	}
	.idInfo {
		font-size: 12px;
		color: #42aa53;
	}
	.curId {
		color: #fdb91a;
	}
	.form_item {
		box-sizing: border-box;
		/*height: 36px;*/
		line-height: 36px;
		margin-top: 28px;
		font-size: 14px;
	}
	.form_item.gender_item {
		height: auto;
		line-height: 1;
	}
	.form_item .text_label {
		font-weight: bold;
		color: #7a8387;
		vertical-align: top;	
		margin-right: 10px;
	}
	.form_item input {
		text-indent: 12px;
	}
	.nickname_item .errorInfo {
		line-height: 1;
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 50px;
		font-size: 12px;
		color: #fdb91a;
	}
	.form_item .nickname {
		width: 260px;
		height: 36px;
		box-sizing: border-box;
	}
	.form_item .text_box {
		background: #14181d;
		color: #f2f6f9;
		border: 1px solid #353d48;
	}
	.g-c-zbf.perset_zbf {
		display: inline-block;
		height: auto;
		line-height: 1;
	}
	.u-c-slt.perset_slt {
		width: 120px;
		background-position: 100px center;
	}
	.perset_zbf .g-c-ms {
		height: auto;
	}
	.perset_zbf .u-c-per {
		height: auto;
		vertical-align: top;
	}
	.perset_zbf .regular-radio + label {
		margin: 0 10px 0 0;
	}
	.mr-20 {
		margin-right: 20px;
	}
	.birthday span {
		margin: 0 8px;
		font-size: 14px;
		color: #f2f6f9;
	}
	span.mr-0 {
		margin-right: 0;
	}
	.form_item.introduction {
		height: auto;
	}
	.form_item .introduction-text {
		width: 428px;
		height: 123px;
		font-size: 14px;
		box-sizing: border-box;
		padding: 10px 12px;
	}
	.setImage {
		position: absolute;
		top: 0;
		right: 10px;
		width: 148px;
		height: 148px;
		cursor: pointer;
	}
	.user_pic {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.pic_mask {
		position: relative;
		height: 100%;
		background: #000;
		filter: alpha(opacity=20); 
		background-color: rgba(0, 0, 0, .2);
	}
	.pic_mask .icon-uniE62B {
		display: inline-block;
		margin-left: 54px;
		margin-top: 54px;
		font-size: 40px;
		color: #7a8387;
	}
	.pic_mask_text {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 30px;
		color: #7a8387;
		text-align: center;
		font-size: 12px;
		line-height: 30px;		
		background: #000;
		filter: alpha(opacity=30); 
		background-color: rgba(0, 0, 0, .3);
	}

	/* 参赛信息 */

	.cptInfo_title, .organizersCfct_title {
		font-size: 14px;
		color: #b7c1c6;
	}
	.cpt_item, .oCfct_item {
		box-sizing: border-box;
		height: 36px;
		line-height: 36px;
		margin-top: 20px;
		font-size: 14px;
	}
	.cpt_item label , .oCfct_item label{
		display: inline-block;
		width: 94px;
		font-size: 14px;
		font-weight: bold;
		color: #7a8387;
	}
	.cpt_item input, .oCfct_item input{
		width: 260px;
		height: 36px;
	}

	/* 组织者认证 */

	.perset_organizersCfct  p {
		line-height: 1;
	}
	.perset_organizersCfct .oCfct_item {
		height: auto;
		margin-bottom: 46px;
	}
	.oCfct_item .errorInfo {
		margin-top: 10px;
		margin-left: 98px;
		font-size: 12px;
		color: #fdb91a;
	}
	.oCfct_item .errorInfo i, .nickname_item .errorInfo i {
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 9px;
		vertical-align: top;
		background: url(../../static/images/tip.png);
	}
	.PICExplain_text {
		width: 440px;
		margin-top: 18px;
		font-size: 12px;
		color: #7a8387;
		letter-spacing: 1px;
	}

	.saveBtn {
		display: block;
		width: 200px;
		height: 48px;
		background: #fdb91a;
		color: #1e1f24;
		border-radius: 2px;
		text-align: center;
		line-height: 48px;
		font-size: 18px;
		margin: 50px auto 0 auto;
	}
</style>