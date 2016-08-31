<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="perCenter_wrap perSetting" style="flex:1;">
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
						<input id="" type="text" class="nickname text_box" maxlength="8" v-model="userInfoData.nickname" @blur="checkNickname(userInfoData.nickname)">
						<p id="nicknameError" class="errorInfo" style="display: none;"><i></i><span id="nicknameErrorText">昵称已被使用</span></p>
						<!-- <p id="nicknameLenError" class="errorInfo" style="display: none;"><i></i><span>昵称长度太长</span></p> -->
					</div>  
					<div class="form_item gender_item">
						<label for="" class="text_label">性别 : </label>
						<div class="g-c-zbf perset_zbf">
							<div class="f-fl g-c-ms">
								<input type="radio" id="man" name="gender" class="regular-radio" value="0" v-model="userInfoData.sex"/>
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
							<!-- <div class="f-fl">
								<input type="radio" id="secret" name="gender" class="regular-radio" value="2" v-model="userInfoData.sex"/>
								<label for="secret"></label>
								<label for="secret" class="u-c-per">    
									<span class="f-fl">
										保密
									</span>
								</label>
							</div> -->
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
						<span class="col7a8">年</span>
						<select class="u-c-slt perset_slt" name="month" id="" v-model="userBirthday.monthNum" @change="setMonthNextDo" required>
							<option value="-1">请选择</option>
							<option value="{{ item }}" v-for="item in userBirthday.monthList" v-text="item"></option>
						</select>
						<span class="col7a8">月</span>
						<select class="u-c-slt perset_slt" name="day" id="" v-model="userBirthday.dayNum" required>
							<option value="-1">请选择</option>
							<option value="{{ item }}" v-for="item in userBirthday.dayList" v-text="item"></option>
						</select>
						<span class="mr-0 col7a8">日</span>
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
							<input type="text" id="realName" class="text_box" maxlength="10" v-model="saveMatchInfo.realname" @blur="validateRealname(saveMatchInfo.realname)"> 
							<p id="realnameError" class="errorInfo" style="display: none;"><i></i><span id="realnameErrorText">请输入正确的真实姓名</span></p>
						</div>
						<div class="cpt_item form_item">
							<label for="validatePerId">有效身份证 ：</label>
							<input type="text" id="validatePerId" class="text_box" maxlength="18" v-model="saveMatchInfo.idcard" @blur="validateIdCard(saveMatchInfo.idcard)">
							<p id="idCardError" class="errorInfo" style="display: none;"><i></i><span>请输入正确的身份证号码</span></p>
						</div>
						<div class="cpt_item form_item">
							<label for="telephone">手机号 ：</label>
							<input type="text" id="telephone" class="text_box" maxlength="11" v-model="saveMatchInfo.telephone" @blur="validateTel(saveMatchInfo.telephone)" >
							<p id="telephoneError" class="errorInfo" style="display: none;"><i></i><span>请输入正确的手机号</span></p>
						</div>
						<div class="cpt_item form_item">
							<label for="qq">QQ ：</label>
							<input type="text" id="qq" class="text_box" maxlength="20" v-model="saveMatchInfo.qq" @blur="validateQQ(saveMatchInfo.qq)">
							<p id="qqError" class="errorInfo" style="display: none;"><i></i><span>请输入5-10位数字的QQ号</span></p>
						</div>
						<!-- <div class="cpt_item form_item">
							<label for="weixin">微信号 ：</label>
							<input type="text" id="weixin" class="text_box">
						</div> -->
					</div>
				</div>
				<div class="perset_organizersCfct" v-show="tabFlag == 2">
					<template v-if="!isCfct">
						<p class="organizersCfct_title">输入组织者认证内测邀请码</p>
						<div class="oCfct_item form_item">
							<label for="privateInviteCode">内测邀请码 ：</label>
							<input type="text" id="privateInviteCode" class="text_box" v-model="betaCode">
							<p id="codeError" class="errorInfo" style="display: none;"><i></i><span id="codeErrorText">邀请码已被使用</span></p>
						</div>
					</template>
					<p v-else class="col42a" style="margin-top: 20px; margin-bottom: 120px;">你已经是赛事组织者了！</p>
						<!-- <div class="PICExplain"> -->
					<p class="organizersCfct_title">关于组织者内测邀请码</p>
					<p class="PICExplain_text">组织者内测邀请码是开赛吧提供给专业的赛事组织或民间赛事举办达人在开赛吧平台创建维护赛事的授权。认证的组织者可通过开赛吧提供的赛事举办工具自定义个性赛事，并帮助完成报名信息收集、对阵分组匹配等相关赛事组织筹办工作。</p>
					<!-- </div> -->
				</div>
			</div>
		</div>
		<a v-show="tabFlag != 2" href="javascript:;" class="saveBtn" v-text="btnText" @click="savePerSetting"></a>
		<a v-show="tabFlag == 2 && !isCfct" href="javascript:;" class="saveBtn" @click="savePerSetting">认 证</a>
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
		<div class="footer">
			浙江网竞网络科技有限公司  |   浙ICP备14028335号-2   |   Copyright©2014 kaisaiba.com All Rights Reserved.
		</div>
</template>
<script type="text/javascript">
	import topHead from '../components/topHead.vue'
	import sideBar from '../components/sideBar.vue'
	import slideBar from '../components/slideBar.vue'
	import createPop from '../components/createPop.vue' 
	export default {
		route: {
			data () {
				this.tabFlag = this.$route.params.userId
				//alert(typeof this.tabFlag)
				if (this.tabFlag === "0") {
					this.tabList[0].isCur = true
					this.tabList[1].isCur = false
					this.tabList[2].isCur = false
				} else if (this.tabFlag === "1") {
					this.tabList[0].isCur = false
					this.tabList[1].isCur = true
					this.tabList[2].isCur = false
				}
			}
		},
		data () {
			return {
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
				rootAreaId: "-1",
				secondArea: [],
				secondAreaId: "-2",
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
				},
				saveMatchInfo: {
					idcard: "",
					qq: "",
					realname: "",
					sysUserId: -1,
					telephone: "",
					userId: -1
				},
				betaCode: "",
				nowNickname: "",
				isCfct: false,
				vRealname: true,
				vIdCard: true,
				vTel: true,
				vQQ: true,
				vSaveUserInfo: true
				//isThird: false
			}
		},
		// computed: {
		//  isThird: {
		//    cache: false,
		//    get: function () {
		//      return this.tabFlag === 2 && !this.isCfct
		//    }
		//  }
		// },
		components: {
			topHead,
			sideBar,
			slideBar,
			createPop
		},
		ready: function () {
			var param = window.location.href
			var lastChar = param.charAt(param.length-1)
			if (lastChar === "0") {
				this.tabFlag = 0
				this.tabList[0].isCur = true
				this.tabList[1].isCur = false
				this.tabList[2].isCur = false
			} else if (lastChar === "1") {
				this.tabFlag = 1
				this.tabList[0].isCur = false
				this.tabList[1].isCur = true
				this.tabList[2].isCur = false
			} else if (lastChar === "2") {
				this.tabFlag = 2
				this.tabList[0].isCur = false
				this.tabList[1].isCur = false
				this.tabList[2].isCur = true
			}
			this.$http.get('isIdentifyUser').then(function (response) {
				var flag = response.data.object.flag
				if (flag) this.isCfct = true
			})
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
				this.nowNickname = this.userInfoData.nickname
				this.saveUserInfo.sysUserId = response.data.object.sysUser.id
				// 设置参赛资料的字段
				this.saveMatchInfo.sysUserId = response.data.object.sysUser.id
				this.saveMatchInfo.userId = this.userInfoData.id
				// 如果没有设置手机号码就用默认的用户登录手机号码，否则就用设置后的手机号码
				//if (this.userInfoData.telephone === "") {
				//  this.saveMatchInfo.telephone = this.userInfoData.username
				//} else {
				this.saveMatchInfo.telephone = this.userInfoData.telephone
				//} 
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
					if (this.rootAreaId != "") {
						this.secondAreaId = response.data.object.areaMap.areaCode
						this.getSecondArea(this.rootAreaId)
					}
				} else {
					this.rootAreaId = "-1"
					this.secondAreaId = "-2"
				}
				
				// 如果已设置生日
				if (response.data.object.sysUser.birthdayStr != null) {
					var str = response.data.object.sysUser.birthdayStr
					var arr = str.split('-');
					this.userBirthday.yearNum = arr[0]
					if (arr[1].length > 1) this.userBirthday.monthNum = arr[1].charAt(1) + ""
					else this.userBirthday.monthNum = arr[1]
					this.getDayList()
					if (arr[2].length > 1) this.userBirthday.dayNum = arr[2].charAt(1) + ""
					else this.userBirthday.dayNum = arr[2]
				}

				// 如果没有设置性别
				if (this.userInfoData.sex === null) {
					this.userInfoData.sex = 0;
				}

				// 如果没有设置个人介绍
				if (this.userInfoData.speech === null) {
					this.userInfoData.speech = ''
				}

				// 如果参赛信息已设置真实姓名
				// if (this.userInfoData.realname) {
				this.saveMatchInfo.realname = this.userInfoData.realname
				// }
				// if (this.userInfoData.idcard) {
				this.saveMatchInfo.idcard = this.userInfoData.idcard
				// }
				// if (this.userInfoData.qq) {
				this.saveMatchInfo.qq = this.userInfoData.qq
				// }
			})
			this.setBirthdayData()
		},
		methods: {
			validateLen: function (keyStr, maxLen) {
				//alert(123)
				if (this.saveMatchInfo[keyStr].length > maxLen) {
					//var str = $('#realnameErrorText').html()
					//alert(realname)
					this.saveMatchInfo[keyStr] = this.saveMatchInfo[keyStr].substr(0, maxLen)
				}
			},
			validateRealname: function (realname) {
				if ((realname.trim() === "" && realname.length != 0)) {
				//if (!/^([\u4e00-\u9fa5]+|([a-zA-Z]+\s?)+)$/g.test(realname) && realname.length != 0) {
					$('#realnameErrorText').html("请输入正确的真实姓名")
					//$('#realnameErrorText').html("请输入0-10个字符，且全为中文或全为英文")
					$('#realnameError').show()
					this.vRealname = false
				} else {
					$('#realnameError').hide()
					this.vRealname = true
				}
				//else if (realname.length > 10) {
					//var str = $('#realnameErrorText').html()
					//alert(realname)
					//this.saveMatchInfo.realname = realname.substr(0, 11)
					//$('#realnameError').show()
					//this.vRealname = false
				//} 
			},
			validateIdCard: function (id) {
				if(!/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(id) && id != "") {
					$('#idCardError').show()
					this.vIdCard = false
				} else {
					$('#idCardError').hide()
					this.vIdCard = true
				}
			},
			validateTel: function (telNum) {
				if(!/^1([0-9]){10}$/.test(telNum) && telNum != "") {
					$('#telephoneError').show()
					this.vTel = false
				} else {
					$('#telephoneError').hide()
					this.vTel = true
				}
			},
			validateQQ: function (qq) {
				if (!/^[1-9]\d{4,9}$/.test(qq) && qq != "") {
					$('#qqError').show()
					this.vQQ = false
				} else {
					$('#qqError').hide()
					this.vQQ = true
				}
			},
			checkNickname: function (nickname) {
				// if (this.userInfoData.nickname.length > 8) {
				//  $('#nicknameError').show()
				//  $('#nicknameErrorText').html("昵称长度不能超过8位")
				//  this.vSaveUserInfo = false
				//  return
				// } else {
				//  $('#nicknameError').hide()
				//  this.vSaveUserInfo = true
				// }
				if (/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/.test(nickname)) {
					$('#nicknameError').show()
					$('#nicknameErrorText').html("昵称有非法字符")
					this.vSaveUserInfo = false
					return 
				} else if (!nickname) {
					$('#nicknameError').show()
					$('#nicknameErrorText').html("请输入昵称")
					this.vSaveUserInfo = false
					return 
				 }
				if (this.userInfoData.nickname === this.nowNickname) {
					$('#nicknameError').hide()
					this.vSaveUserInfo = true
					return
				}
				
				var json = { nickname: this.userInfoData.nickname, telephone: this.userInfoData.username }
				this.$http.get('registerCheck', json).then(function (response) {
					var data = response.data.object
					if (data.nicknameValid === 0) {
						$('#nicknameError').show()
						$('#nicknameErrorText').html("昵称已被使用")
						this.vSaveUserInfo = false
					} else {
						this.vSaveUserInfo = true
						$('#nicknameError').hide()
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
				var oldHref = window.location.href 
				window.location.href = oldHref.slice(0, oldHref.length - 1) + this.tabFlag.toString()
			},
			getSecondArea: function (rootId) {
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
					if (v.isCur === true) {
						if (v.name === '基本资料') {
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
							// 城市编码
							if ($('#provinces').val() === "-1" || $('#citys').val() === "-2") {
								_this.saveUserInfo.cityCode = ""
							} else {
								_this.saveUserInfo.cityCode = $('#citys').val()
							}

							// 头像

							// 昵称
							// if (_this.userInfoData.nickname === '') {
							// } else {
							_this.saveUserInfo.nickname = _this.userInfoData.nickname
							//}
							
							// 性别
							_this.saveUserInfo.sex = _this.userInfoData.sex
							
							// 个人介绍
							_this.saveUserInfo.speech = _this.userInfoData.speech
							
							// 系统用户id(前面已设置)
							
							// 用户id
							_this.saveUserInfo.userId = _this.userInfoData.id
							
							//if (!_this.checkNickname()) return 
							//if (!$('#nicknameError').is(':hidden')) return 
							// 如果有昵称填写错误，则返回，不发送保存请求，可能会有延迟，如果检测昵称是否存在的请求有延迟，还没有赋值为false的话，可能还会发送保存请求
							if (!_this.vSaveUserInfo) return
							var params = {}
							params.jsonInfo = JSON.stringify(_this.saveUserInfo)
							_this.$http.post(v.url, params).then(function (response) {
								//console.log(response)
								if (response.data.code === -1) {
									layer.msg("请先登录！")  
									return 
								} else if (response.data.code === 0) {
									layer.msg("基本资料保存失败！")  
									return 
								} else if (response.data.code === 1) {
									layer.msg("基本资料保存成功！")
								}
								// alert("基本资料保存成功！")
								setTimeout(function () {
									window.location.reload()
								}, 3000)
							})
						} else if (v.name === '参赛资料') {
							if (!_this.vRealname || !_this.vIdCard || !_this.vTel || !_this.vQQ) {
								return 
							}
							var params = {}
							params.jsonInfo = JSON.stringify(_this.saveMatchInfo)
							_this.$http.post(v.url, params).then(function (response) {
								console.log(response)
								//alert("参赛资料保存成功！")
								layer.msg("参赛资料保存成功！")
								setTimeout(function () {
									window.location.reload()
								}, 3000)
							}) 
						} else {
							if (_this.betaCode.trim() === "" || _this.betaCode.length === 0) {
								$('#codeError').show()
								$('#codeErrorText').html("不能为空或存在空格")
								return 
							}
							if (_this.betaCode.length > 20) {
								$('#codeError').show()
								$('#codeErrorText').html("长度太长了，请输入正确的内测邀请码")
								return 
							}
							var params = {}
							var json = {}
							json.code = _this.betaCode
							params.jsonInfo = JSON.stringify(json)
							_this.$http.post(v.url, params).then(function (response) {
								var msg = response.data.msg
								if (response.data.code === 0) {
									$('#codeError').show();
									$('#codeErrorText').html(msg)
								} else {
									$('#codeError').hide();
									//alert("恭喜您，验证成功！")
									layer.msg("恭喜您，认证成功！")
									setTimeout(function () {
										window.location.reload()
									}, 3000)
								}
							})
						}
					}
				})
			}
		}
	}
</script>
<style type="text/css">
	.perCenter_wrap {
		margin: 60px auto;
		overflow: hidden;
	}
	.perSetting {
		width: 600px;
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
		height: 422px;
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
	.nickname_item .errorInfo, .cpt_item .errorInfo {
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
		/*height: 36px;
		line-height: 36px;*/
		margin-top: 20px;
		font-size: 14px;
	}
	.cpt_item label , .oCfct_item label {
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
	.cpt_item .errorInfo {
		margin-left: 100px;
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
	.oCfct_item .errorInfo i, .nickname_item .errorInfo i, .cpt_item .errorInfo i {
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 9px;
		vertical-align: top;
		background: url(../../static/images/tip.png);
	}
	.perset_organizersCfct .PICExplain_text {
		line-height: 20px;
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