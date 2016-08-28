<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
<div class="change_pw">
	<div class="pw_status">
		<ul class="status_list clearfix">
			<li class="status_li status_finish">
				<span class="status_title">注册账号</span>
				<span class="status_num">1</span>
				<span class="status_line"></span>
			</li>
			<li class="status_li" v-bind:class="{ 'status_finish': finishOne }">
				<span class="status_title" >验证账号</span>
				<span class="status_num">2</span>
				<span class="status_line"></span>
			</li>
			<li class="status_li" v-bind:class="{ 'status_finish': finishTwo }">
				<span class="status_title">重置密码</span>
				<span class="status_num">3</span>
				<span class="status_line"></span>
			</li>
			<li class="status_li" v-bind:class="{ 'status_finish': finishThree }">
				<span class="status_title">修改完成</span>
				<span class="status_num">4</span>
			</li>
		</ul>
	</div>
	<div class="pw_container">
			<div class="list_fill list_detail">
				<div class="list_every">
					<label>手机号：</label>
					<input type="text" class="pw_input" placeholder="请输入你要找回的手机号" v-model="pwPhone" @blur="blurPhone">
					<span class="pw_error" style="right:-50px"><span class="error_pwtri"></span><img src="../../static/images/tip.png"><i class="error_tip">手机号码位数不对</i></span>
				</div>
				<div class="next_btn" @click="nextIdent">下一步</div>
			</div>
			<div class="list_ident list_detail" style="display:none">
				<div class="list_every">
					<label>验证码：</label>
					<div class="pw_ident_get">
						<input type="text" class="pw_input" placeholder="输入获得的验证码" v-model="pwIdent">
					<span class="get_pwident" @click="getPWident">获取验证码</span>
					<!-- <span class="count_down">60</span> -->
					</div>
				</div>
				<div class="next_btn" @click="nextReset">下一步</div>
			</div>
			<div class="list_reset list_detail" style="display:none">
				<div class="list_every" style="margin-bottom:20px">
					<label class="list_label">新密码：</label>
					<input type="password" class="pw_input" placeholder="新密码(6-16位，允许数字字母常用符号)" v-model="newPw" @blur="getNpw">
					<span class="pw_error"><span class="error_pwtri"></span><img src="../../static/images/tip.png"><i class="error_tip">密码位数太短</i></span>
				</div>
				<div class="list_every">
					<label class="list_label">再次输入：</label>
					<input type="password" class="pw_input" placeholder="请输入新密码" @blur="getConform" v-model="confirmPw">
					<span class="pw_error"><span class="error_pwtri"></span><img src="../../static/images/tip.png"><i class="error_tip">密码与上方不一致</i></span>
				</div>
				<div class="next_btn" style="margin: 30px auto 0;" @click="nextSucess">下一步</div>
			</div>
			<div class="list_sucess" style="padding-top:30px;display:none">
				<div class="sucess_pic">
					<img src="../../static/images/pw_sucess.png">
				</div>
				<p class="sucess_conform">重置成功</p>
				<div class="sucess_btn" @click="changepwSucess">确 认</div>
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
				pwPhone:'',
				pwIdent:'',
				newPw:'',
				confirmPw:'',
				pwOk:'',
				finishOne: false,
				finishTwo: false,
				finishThree: false
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
			nextIdent: function () {
				if(this.pwPhone.length=="11"){
					$('.list_ident').show().siblings().hide();
					this.finishOne=true;
				}
			},
			blurPhone: function (e) {
				var _current=$(e.currentTarget);
				var _error=_current.next('.pw_error');
				if(/^\d+$/.test(this.pwPhone)){
					_error.hide();
					//判断是否有错误提示
					this.errorTip=true;
					if(this.pwPhone.length==11){
						_error.hide();
						this.errorTip=true;
					}else{
						_error.show();
						this.errorTip=false;
						_error.find('.error_tip').text('手机号码位数不对');
					}
				}else{
					_error.show();
					_error.find('.error_tip').text('请填写正确的手机号');
				}
			},
			getPWident: function () {
				var parm={};
				parm.type=2;
				parm.telephone=this.pwPhone;
				this.$http.post('sendVerifyCode',parm).then(function(response){
					var _pwident=$(".get_pwident");
					var _time=60;
					if(response.data.code){
						_pwident.addClass('ident_count');
						countdown();

						function countdown(){
							if(_time==0){
							 _pwident.removeClass('ident_count');
							 _pwident.text('获取验证码');
							}else{
								_time--;
								_pwident.text(_time);
								setTimeout(function() {  
					                countdown();
					            },  
					            1000)
							}
						}
					}else{
						layer.msg(response.data.msg);
					}
					
			      },function(response) {
			              console.log(response);
			          });
			},
			nextReset: function () {
				var parm={};
				parm.type=2;
				parm.telephone=this.pwPhone;
				parm.verifyCode=this.pwIdent;
				this.$http.post('checkVerifyCode',parm).then(function(response){
					if(response.data.object.valid){
						$('.list_reset').show().siblings().hide();
						this.finishTwo=true;
					}
					
			      },function(response) {
			              console.log(response);
			          });
			},
			getNpw: function (e) {
				var _current=$(e.currentTarget);
				var _error=_current.next('.pw_error');
				if(this.newPw.length<6){
					_error.show();
					this.pwOk=false;
				}else{
					_error.hide();
					this.pwOk=true;
				}
			},
			getConform: function (e) {
				var _current=$(e.currentTarget);
				var _error=_current.next('.pw_error');
				if(this.confirmPw != this.newPw){
					_error.show();
					this.pwOk=false;
				}else{
					_error.hide();
					this.pwOk=true;
				}
			},
			nextSucess: function () {
				var parm={};
				parm.password=this.newPw;
				parm.username=this.pwPhone;
				parm.verifyCode=this.pwIdent;
				if(this.newPw && this.confirmPw && this.pwOk){
					this.$http.post('user/reset',parm).then(function(response){
						if(response.data.code){
							$('.list_sucess').show().siblings().hide();
							this.statusThree=true;
							document.cookie="oetevent.login.sessionid="+response.data.object["oetevent.login.sessionid"];
							document.cookie="oetevent.login.token="+response.data.object["oetevent.login.token"];
				  			document.cookie="oetUserId="+response.data.object.oetUser.id;
				  			document.cookie="appUserId="+response.data.object.appUser.id;
				  			window.sessionStorage.setItem("appusericon",response.data.object.appUser.icon);
				  			window.sessionStorage.setItem("nickname",response.data.object.appUser.nickname);
						}
				      },function(response) {
				              console.log(response);
				    });
				}
			},
			changepwSucess: function () {
				this.$route.router.go({path: '/index'}); 
			}
		}
	}
</script>
<style>
	.change_pw{
		width: 500px;
		height: 500px;
		margin: 120px auto 0;
	}
	.status_list{
		margin: 20px 20px 50px;
	}
	.status_li{
		float: left;
		position: relative;
		margin-right: 5px;
		height: 22px;
		line-height: 22px;
	}
	.status_num{
		display: inline-block;
		color: #c9c6be;
		width: 22px;
		height: 22px;
		background: url(../../static/images/pw_b.png) no-repeat;
		text-align: center;
		line-height: 22px;
	}
	.status_line{
		display: inline-block;
		width: 110px;
		height: 2px;
		background-color: #865b1e;
		margin: 0 0 2px 3px;
	}
	.status_finish .status_num{
		background: url(../../static/images/pw_a.png) no-repeat;
		color: #000;
	}
	.status_finish .status_line{
		background-color: #fdb91a;
	}
	.status_finish .status_title{
		color: #fff;
	}
	.pw_container{
		width: 488px;
		height: 280px;
		border: 6px solid #292f3b;
		background-color: #1b1e25;
	}
	.list_detail{
		padding:60px 0 0 35px;
	}
	.pw_input{
		width: 260px;
		height: 30px;
		background-color: #14181d;
		border: 1px solid #343b45;
		text-indent: 5px;
		color: #fff;
	}
	.list_detail label{
		color: #7a8387;
	}
	.next_btn{
		width: 200px;
		height: 45px;
		background-color: #fdb91a;
		color: #000;
		margin: 80px auto 0;
		text-align: center;
		line-height: 45px;
		font-size: 16px;
		border-radius: 3px;
		cursor: pointer;
	}
	.pw_ident_get{
		display: inline-block;
		position: relative;
	}
	.get_pwident{
		position: absolute;
		display: inline-block;
		width: 100px;
		height: 32px;
		background-color: #fdb91a;
		top:0;
		right:0;
		text-align: center;
		line-height: 32px;
		color: #000;
		cursor: pointer;
	}
	.count_down{
		position: absolute;
		top:0;
		right: -100px;
		width: 80px;
		height: 30px;
		background-color: #343b45;
		text-align: center;
		line-height: 30px;
		color: #fff;
	}
	.pw_ident_get .ident_count{
		background-color: #343b45;
		color: #c9c6be;
	}
	.list_label{
		display: inline-block;
		width: 90px;
		text-align: right;
	}
    .pw_error{
		position: absolute;
		top: 0;
		right:-80px;
		color: #42aa53;
		width: 160px;
		height: 30px;
		background-color: #171a21;
		line-height: 30px;
		text-align: center;
		border: 1px solid #343b45;
		display: none;
    }
    .list_every{
    	position: relative;
    }
    .sucess_pic{
    	text-align: center;
    	margin-bottom: 20px;
    }
    .sucess_conform{
    	text-align: center;
    	color: #fff;
    }
    .sucess_btn{
    	width: 200px;
    	height: 50px;
    	color: #000;
    	background-color: #fdb91a;
    	text-align: center;
    	line-height: 50px;
    	font-size: 18px;
    	margin: 40px auto 0;
    	cursor: pointer;
    	border-radius: 3px;
    }
    .error_tip{
    	margin-left:7px;
    }
    .error_pwtri{
    	position: absolute;
    	width: 0;
	    height: 0;
	    border-top: 8px solid transparent;
	    border-right: 9px solid #343b45;
	    border-bottom: 8px solid transparent;
	    top: 7px;
	    left:-10px;
    }
    .error_pwtri:before {
		 position: absolute;
		 content: '';
		 width: 0;
	     height: 0;
	     border-top: 7px solid transparent;
	     border-right: 8px solid #171a21;
	     border-bottom: 7px solid transparent;
	     top: -7px;
	     left:2px;
    }
    .status_title{
    	position: absolute;
    	top:-25px;
    	left: -16px;
    	color: #7a8387;
    	width:60px;
    }
</style>