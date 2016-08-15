<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
<div class="landregister">
		<div class="landreg_head">
			<ul class="landreg_tab">
				<li class="reg_active" @click="changeLand">登录</li>
				<li @click="changeReg">注册</li>
			</ul>
		</div>
		<div class="landreg_content" @click="inputFoucs">
			<div class="landreg_list land_list" v-show="landReg">
				<p class="landreg_tip"><span>•</span>加入开赛吧开启全新办赛、参赛体验!</p>
				<div class="landreg_form">
					<div class="form_account form_list">
						<label class="reg_label"><img src="../../static/images/account.png"></label>
						<input class="input_text" type="text" placeholder="手机号／网娱大师帐号" v-model="account" @blur="blurPhone">
						<span class="reg_error"><img src="../../static/images/tip.png"><i class="error_tip">手机号码位数不对</i></span>
					</div>
					<div class="form_pw form_list">
						<label class="reg_label"><img src="../../static/images/password.png"></label>
						<input class="input_text" type="password" placeholder="请输入密码" v-model="password" @blur="getpwd">
						<span class="reg_error"><img src="../../static/images/tip.png"><i class="error_tip">密码位数不对</i></span>
					</div>
				</div>
				<div class="password_st clearfix">
					<div class="remeber_pw">
						<input type="checkbox" id="auto_land" v-model="checked">
						<label class="remeber_label" for="auto_land">下次自动登录</label>
						<label for="auto_land" class="float_checkbox"><span class="check_gou" v-show="checked">√</span></label>
					</div>
					<div class="forgot_pw"><a href="">忘记密码？</a></div>
				</div>
				<div class="twolines"></div>
				<div class="allow_login" v-show="allowLogin" @click="logIn">登录</div>
				<div class="login_in" v-else>登录</div>
			</div>
			<div class="landreg_list reg_list" v-else>
				<p class="landreg_tip"><span>•</span>加入开赛吧开启全新办赛、参赛体验!</p>
				<div class="landreg_form">
					<div class="form_account form_list">
						<label class="reg_label"><img src="../../static/images/account.png"></label>
						<input class="input_text" type="text" placeholder="手机号" v-model="account" @blur="blurPhone">
						<span class="reg_error"><img src="../../static/images/tip.png"><i class="error_tip">手机号码位数不对</i></span>
					</div>
					<div class="form_ident form_list">
						<label class="reg_label"><img src="../../static/images/ident.png"></label>
						<input class="input_text" type="text" placeholder="验证码" v-model="ident">
						<div class="get_indent" @click="getIdent">获取验证码</div>
						<span class="reg_error"><img src="../../static/images/tip.png"><i class="error_tip">该手机号已经注册</i></span>
					</div>
					<div class="form_nickname form_list">
						<label class="reg_label"><img src="../../static/images/nickname.png"></label>
						<input class="input_text" type="text" maxlength='8' placeholder="昵称(最多8位，允许数字字母常用符号)" v-model="nickname" @blur="getNickname">
						<span class="reg_error"><img src="../../static/images/tip.png"><i class="error_tip">昵称有非法字符</i></span>
					</div>
					<div class="form_pw form_list">
						<label class="reg_label"><img src="../../static/images/password.png"></label>
						<input class="input_text" type="password" placeholder="密码(6-16位，允许数字字母常用符号)" maxlength='16' v-model="password" @blur="getpwd">
						<span class="reg_error"><img src="../../static/images/tip.png"><i class="error_tip">密码位数太短</i></span>
					</div>
				</div>
				<div class="accept_rule">
						<input type="checkbox" id="accept_input" checked v-model="checked"  @change="acceptRule">
						<span>我接受<i>《开赛吧服务条款》</i></span>
						<label for="accept_input" class="float_checkbox"><span class="check_gou" v-show="checked">√</span></label>
					</div>
				<div class="twolines"></div>
				<div class="allow_reg" @click="regIn" v-show="allowReg">注册</div>
				<div class="regi_in" v-else>注册</div>
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
				landReg:true,
				checked:'',
				account:'',
				password:'',
				ident:'',
				nickname:'',
				errorTip:true,
				allowReg:false,
				allowLogin:false
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready: function () {
	
		},
		methods:{
			//判断是否满足注册的要求
			validateReg: function () {
				if(this.nickname && this.password && this.account && this.ident && this.checked && this.errorTip){
					this.allowReg=true;
				}else{
					this.allowReg=false;
				}
			},
			//判断是否满足登录的要求
			validateLog: function () {
				if(this.account && this.password && this.errorTip){
					this.allowLogin=true;
				}else{
					this.allowLogin=false;
				}
			},
			changeLand: function (e) {
				var _current=$(e.currentTarget);
				this.landReg=true;
				_current.addClass('reg_active').siblings().removeClass('reg_active');
			},
			changeReg: function (e) {
				var _current=$(e.currentTarget);
				this.landReg=false;
				_current.addClass('reg_active').siblings().removeClass('reg_active');
			},
			inputFoucs: function (e) {
				var _current=$(e.currentTarget);
				var _target=$(e.target);
				_current.find('.input_text').removeClass("bottom_line");
				if(_target.hasClass('input_text')){
					_target.addClass("bottom_line");
				}
			},
			blurPhone: function (e) {
				var _current=$(e.currentTarget);
				var _error=_current.next('.reg_error');
				if(/^\d+$/.test(this.account)){
					_error.hide();
					//判断是否有错误提示
					this.errorTip=true;
					if(this.account.length!=11){
						_error.show();
						//判断是否有错误提示
						this.errorTip=false;
						_error.find('.error_tip').text('手机号码位数不对');
					}
				}else{
					_error.show();
					_error.find('.error_tip').text('请填写正确的手机号');
				}

				//判断是否满足注册和登录的要求
				this.validateLog();
				this.validateReg();	
			},
			getIdent: function (e) {
				var _current=$(e.currentTarget);
				var _error=_current.next('.reg_error');
				var parm={};
				if(/^\d+$/.test(this.account) && this.account.length==11){
					parm.telephone=this.account;
				}else{
					return;
				}
				parm.type=1;
				this.$http.post('oet/sendVerifyCode',parm).then(function(response){
					if(response.data.code){
						_error.hide();
						this.errorTip=true;
					}else{
						_error.show();
						this.errorTip=false;
						_error.find('.error_tip').text(response.data.msg);
					}
			      },function(response) {
			              console.log(response);
			          });
				this.validateReg();
			},
			getNickname: function (e) {
				var _current=$(e.currentTarget);
				var _error=_current.next('.reg_error');
				if(/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/.test(this.nickname)){
					_error.show();
					this.errorTip=false;
				}else{
					_error.hide();
					this.errorTip=true;
				}
				this.validateReg();
			},
			getpwd: function (e) {
				var _current=$(e.currentTarget);
				var _error=_current.next('.reg_error');
				if(this.password.length<7){
					_error.show();
					this.errorTip=false;
				}else{
					_error.hide();
					this.errorTip=true;
				}
				this.validateReg();
				this.validateLog();
			},
			acceptRule: function () {
				if(this.checked){
					this.allowReg=true;
				}else{
					this.allowReg=false;
				}
			},
			regIn: function () {
				var parm={};
				parm.nickname=this.nickname;
				parm.password=this.password;
				parm.telephone=this.account;
				parm.verifyCode=this.ident;
				console.log(this.errorTip);
				this.$http.post('oet/register',parm).then(function(response){
					console.log(response);
			      },function(response) {
			              console.log(response);
			      });
			},
			logIn: function () {
				var parm={};
				parm.username=this.account;
				parm.password=this.password;
				this.$http.post('oet/login',parm).then(function(response){
					console.log(response);
					if(response.data.code){
						document.cookie="oetevent.login.sessionid="+response.data.object["oetevent.login.sessionid"];
						document.cookie="oetevent.login.token="+response.data.object["oetevent.login.token"];
			  			document.cookie="oetUserId="+response.data.object.oetUser.id;
			  			document.cookie="appUserId="+response.data.object.appUser.id;
			  			window.sessionStorage.setItem("appusericon",response.data.object.appUser.icon);
						this.$route.router.go({path: '/quickmatch'}); 
					}
			      },function(response) {
			              console.log(response);
			      });
			}
		}
	}
</script>
<style>
	.landregister{
		width: 488px;
		background-color: #292f3b;
		padding: 6px;
		margin: 2.2rem auto;
	}
	.landreg_head{
		width: 100%;
		height: 55px;
		background: url(../../static/images/regtop.png);
	}
	.landreg_tab{
		width: 100%;
		height: 55px;
		line-height: 55px;
	}
	.landreg_tab li{
		float: left;
		height: 50px;
		text-align: center;
		font-size: 20px;
		color: #fff;
		width: 90px;
		margin: 0 77px;
		cursor: pointer;
	}
	.landreg_tab .reg_active{
		color: #fdb91a;
		border-bottom: 5px solid #fdb91a;
	}
	.landreg_content{
		background: #1b1e25;
	}
	.landreg_list{
		padding: 20px 40px;
	}
	.landreg_tip{
		color: #7a8387;
	}
	.landreg_tip span{
		color: #fdb91a;
		margin-right: 5px;
	}
	.landreg_form{
		border: 1px solid #343b45;
		margin-top: 30px;
		background-color: #14181d;
	}
	.landreg_form input{
		background-color: #14181d !important;
		border: none;
		border-bottom: 1px solid #343b45;
		width:330px;
		height: 50px;
		line-height: 50px;
		color: #fff;
	}
	.reg_label{
		display: inline-block;
		width:50px;
		text-align: center;
	}
	.password_st{
		margin: 20px auto 40px;
	}
	.remeber_pw{
		float: left;
		position: relative;
	}
	.forgot_pw{
		float: right;
	}
	.password_st a{
		color: #42aa53;
	}
	.remeber_label{
		color: #42aa53;
	}
	.twolines{
		width: 100%;
		height: 5px;
		border-top: 1px solid #343b45;
		border-bottom: 1px solid #343b45;
	}
	.login_in,.regi_in{
		width: 280px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		margin: 30px auto;
		background: #666;
		border-radius: 5px;
		cursor: not-allowed;
		font-size: 18px;
	}
	.accept_rule{
		margin: 20px auto 40px;
		color: #7a8387;
		position: relative;
	}
	.accept_rule i{
		color:#42aa53;
	}
	.float_checkbox{
		display: inline-block;
	    width: 15px;
	    height: 15px;
	    border: 1px solid #53585d;
	    border-radius: 2px;
	    position: absolute;
	    top:0;
	    left:0;
	}
	.check_gou{
	   display: inline-block;
	   width: 15px;
	   height: 15px;
	   text-align: center;
	   color: #f9a32a;
	}
	#auto_land,#accept_input{
	  opacity: 0;
	  width:15px;
	  height: 15px;
    }
    .bottom_line{
    	border-bottom: 2px solid #fff !important;
    }
    .form_list{
    	position: relative;
    }
    .reg_error{
		display: inline-block;
		position: absolute;
		top: 0;
		right:-170px;
		color: #42aa53;
		width: 160px;
		height: 35px;
		background-color: #171a21;
		line-height: 35px;
		text-align: center;
		border: 1px solid #343b45;
		display: none;
    }
    .get_indent{
    	position: absolute;
    	top:10px;
    	right:20px;
    	width: 100px;
    	height: 30px;
    	background-color: #343b45;
    	text-align: center;
    	line-height: 30px;
    	border-radius: 5px;
    	color: #7a8387;
    	cursor: pointer;
    }
    .allow_reg,.allow_login{
    	background: #fdb91a;
    	cursor: pointer;
    	width: 280px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		margin: 30px auto;
		border-radius: 5px;
		font-size: 18px;
    }
</style>