<template>
    <top-head></top-head>
    <side-bar></side-bar>
    <slide-bar></slide-bar>
    <create-pop></create-pop>
    <div class="landregister">
        <div class="landreg_head">
            <ul class="landreg_tab">
                <li class="reg_active" @click="changeLand" v-bind:class="{ 'reg_active': isLand }">登&nbsp;录</li>
                <li @click="changeReg" v-bind:class="{ 'reg_active': isReg}">注&nbsp;册</li>
            </ul>
        </div>
        <div class="landreg_content" @click="inputFoucs">
            <div class="landreg_list land_list" v-show="landReg">
                <p class="landreg_tip"><span>•</span>加入开赛吧开启全新办赛、参赛体验!</p>
                <div class="landreg_form">
                    <div class="form_account form_list">
                        <label class="reg_label"><img src="../../static/images/account.png"></label>
                        <input class="input_text" type="text" placeholder="手机号／网娱大师帐号" v-model="account" @blur="blurAccount">
                        <span class="reg_error"><span class="error_tri"></span><img src="../../static/images/tip.png"><i class="error_tip">手机号码位数不对</i></span>
                    </div>
                    <div class="form_pw form_list">
                        <label class="reg_label"><img src="../../static/images/password.png"></label>
                        <input class="input_text" type="password" placeholder="请输入密码" v-model="landpassword" @blur="getlandpwd">
                        <span class="reg_error"><span class="error_tri"></span><img src="../../static/images/tip.png"><i class="error_tip">密码位数不对</i></span>
                    </div>
                </div>
                <div class="password_st clearfix">
                    <div class="remeber_pw">
                        <input type="checkbox" id="auto_land" v-model="autochecked">
                        <label class="remeber_label" for="auto_land">下次自动登录</label>
                        <label for="auto_land" class="float_checkbox"><span class="check_gou" v-show="autochecked"></span></label>
                    </div>
                    <div class="forgot_pw"><a v-link="{ path: '/passWord'}">忘记密码？</a></div>
                </div>
                <div class="twolines"></div>
                <div class="allow_login" @click="logIn">登录</div>
            </div>
            <div class="landreg_list reg_list" v-else>
                <p class="landreg_tip"><span>•</span>加入开赛吧开启全新办赛、参赛体验!</p>
                <div class="landreg_form">
                    <div class="form_account form_list">
                        <label class="reg_label"><img src="../../static/images/account.png"></label>
                        <input class="input_text" type="text" placeholder="手机号" v-model="phone" @blur="blurPhone" @keyup="keyupPhone">
                        <span class="reg_error"><span class="error_tri"></span><img src="../../static/images/tip.png"><i class="error_tip">手机号码位数不对</i></span>
                    </div>
                    <div class="form_ident form_list">
                        <label class="reg_label"><img src="../../static/images/ident.png"></label>
                        <input class="input_text" type="text" placeholder="验证码" v-model="ident" @blur="blurId">
                        <span class="reg_error"><span class="error_tri"></span><img src="../../static/images/tip.png"><i class="error_tip">验证码错误</i></span>
                        <div class="get_indent" @click="getIdent" v-bind:class="{ 'can_ident': isident }">获取验证码</div>
                    </div>
                    <div class="form_nickname form_list">
                        <label class="reg_label"><img src="../../static/images/nickname.png"></label>
                        <input class="input_text" type="text" maxlength='8' placeholder="昵称(最多8位，允许数字字母常用符号)" v-model="nickname" @blur="getNickname">
                        <span class="reg_error"><span class="error_tri"></span><img src="../../static/images/tip.png"><i class="error_tip">昵称有非法字符</i></span>
                    </div>
                    <div class="form_pw form_list">
                        <label class="reg_label"><img src="../../static/images/password.png"></label>
                        <input class="input_text" type="password" placeholder="密码(6-16位，允许数字字母常用符号)" maxlength='16' v-model="password" @blur="getpwd">
                        <span class="reg_error"><span class="error_tri"></span><img src="../../static/images/tip.png"><i class="error_tip">密码位数太短</i></span>
                    </div>
                </div>
                <div class="accept_rule">
                    <input type="checkbox" id="accept_input" checked v-model="acceptchecked">
                    <span>我接受<i>《开赛吧服务条款》</i></span>
                    <label for="accept_input" class="float_checkbox"><span class="check_gou" v-show="acceptchecked"></span></label>
                </div>
                <div class="twolines"></div>
                <div class="allow_reg" @click="regIn">注册</div>
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
        data() {
            this.tabId = this.$route.params.tabId;
            if (this.tabId === "0") {
                this.landReg = true;
                this.isLand = true;
                this.isReg = false;
            } else if (this.tabId === "1") {
                this.landReg = false;
                this.isLand = false;
                this.isReg = true;
            }
        }
    },
    data() {
        return {
            landReg: true,
            autochecked: true,
            acceptchecked: true,
            account: '',
            password: '',
            landpassword: '',
            phone: '',
            ident: '',
            nickname: '',
            errorTip: true,
            allowReg: false,
            isLand: true,
            isReg: false,
            isident: false,
            tabId: ''
        }
    },
    components: {
        topHead,
        sideBar,
        slideBar,
        createPop
    },
    ready: function() {
        console.log(222);
    },
    methods: {
        changeLand: function() {
            this.$route.router.go({
                name: 'landRegister',
                params: {
                    tabId: 0
                }
            });
        },
        changeReg: function() {
            this.$route.router.go({
                name: 'landRegister',
                params: {
                    tabId: 1
                }
            });
        },
        inputFoucs: function(e) {
            var _current = $(e.currentTarget);
            var _target = $(e.target);
            _current.find('.input_text').removeClass("bottom_line");
            if (_target.hasClass('input_text')) {
                _target.addClass("bottom_line");
            }
        },
        blurAccount: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (/^\d+$/.test(this.account)) {
                _error.hide();
                //判断是否有错误提示
                this.errorTip = true;
                if (this.account.length != 11) {
                    _error.show();
                    //判断是否有错误提示
                    this.errorTip = false;
                    _error.find('.error_tip').text('手机号码位数不对');
                }
            } else {
                _error.show();
                _error.find('.error_tip').text('请填写正确的手机号');
            }
        },
        blurPhone: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (/^\d+$/.test(this.phone)) {
                _error.hide();
                //判断是否有错误提示
                this.errorTip = true;
                if (this.phone.length != 11) {
                    _error.show();
                    //判断是否有错误提示
                    this.errorTip = false;
                    _error.find('.error_tip').text('手机号码位数不对');
                } else {
                    var parm = {}
                    parm.telephone = this.phone;
                    this.$http.post('registerCheck', parm).then(function(response) {
                        if (response.data.object.telephoneValid) {
                            _error.hide();
                            this.errorTip = true;
                        } else {
                            _error.show();
                            _error.find('.error_tip').text('手机号已被注册');
                            this.errorTip = false;
                        }
                    }, function(response) {
                        console.log(response);
                    });
                }
            } else {
                _error.show();
                _error.find('.error_tip').text('请填写正确的手机号');
            }
        },
        keyupPhone: function() {
            if (this.phone.length == 11) {
                this.isident = true;
            } else {
                this.isident = false;
            }
        },
        getIdent: function(e) {
            var _this = this;
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            var parm = {};
            parm.telephone = _this.phone;
 			parm.type = 1;
            this.$http.post('sendVerifyCode', parm).then(function(response) {
                if (response.data.code) {
                	var _ident=$(".get_indent");
                	var _time=60;
                	if(response.data.code){
						_this.isident = false;
						countdown();

						function countdown(){
							if(_time==0){
							 _this.isident = true;
							 _ident.text('获取验证码');
							}else{
								_time--;
								_ident.text(_time);
								setTimeout(function() {  
					                countdown();
					            },  
					            1000)
							}
						}
				}else{
					layer.msg(response.data.msg);
				}
                    
                } else {
                    _error.show();
                    _error.find('.error_tip').text(response.data.msg);
                    this.errorTip = false;
                }
            }, function(response) {
                console.log(response);
            });
            
           
        },
        blurId: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (this.ident.length == 6) {
                _error.hide();
                this.errorTip = true;
            } else {
                _error.show();
                this.errorTip = false;
            }
        },
        getNickname: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/.test(this.nickname)) {
                _error.show();
                this.errorTip = false;
            } else if (!this.nickname) {
                _error.show();
                _error.find('.error_tip').text('请输入昵称');
                this.errorTip = false;
            } else {
                _error.hide();
                this.errorTip = true;
                var parm = {}
                parm.nickname = this.nickname;
                this.$http.post('registerCheck', parm).then(function(response) {
                    if (response.data.object.nicknameValid) {
                        _error.hide();
                        this.errorTip = true;
                    } else {
                        _error.show();
                        _error.find('.error_tip').text('昵称已被注册');
                        this.errorTip = false;
                    }
                }, function(response) {
                    console.log(response);
                });
            }
        },
        getlandpwd: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (this.landpassword.length < 6) {
                _error.show();
                this.errorTip = false;
            } else {
                _error.hide();
                this.errorTip = true;
            }
        },
        getpwd: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (this.password.length < 6) {
                _error.show();
                this.errorTip = false;
            } else {
                _error.hide();
                this.errorTip = true;
            }
        },
        regIn: function() {
            var parm = {};
            parm.nickname = this.nickname;
            parm.password = this.password;
            parm.telephone = this.phone;
            parm.verifyCode = this.ident;

            if (this.nickname && this.password && this.phone && this.ident && this.acceptchecked && this.errorTip) {
                this.$http.post('register', parm).then(function(response) {
                    console.log(response);
                    if (response.data.code) {
                        // document.cookie = "oetevent.login.sessionid=" + response.data.object["oetevent.login.sessionid"];
                        // document.cookie = "oetevent.login.token=" + response.data.object["oetevent.login.token"];
                        // document.cookie = "oetUserId=" + response.data.object.oetUser.id;
                        // document.cookie = "appUserId=" + response.data.object.appUser.id;
                        window.sessionStorage.setItem("appusericon", response.data.object.appUser.icon);
                        window.sessionStorage.setItem("nickname", response.data.object.appUser.nickname);
                        this.$route.router.go({
                            path: '/index'
                        });
                    } else {
                        var _formid = $('.form_ident');
                        _formid.find('.reg_error').show();
                    }
                }, function(response) {
                    console.log(response);
                });
            }

        },
        logIn: function() {
            var parm = {};
            parm.username = this.account;
            parm.password = this.landpassword;
            if (this.account && this.landpassword && this.errorTip && this.autochecked) {
                this.$http.post('login', parm).then(function(response) {
                    console.log(response);
                    if (response.data.code) {
                        // document.cookie = "oetevent.login.sessionid=" + response.data.object["oetevent.login.sessionid"];
                        // document.cookie = "oetevent.login.token=" + response.data.object["oetevent.login.token"];
                        // document.cookie = "oetUserId=" + response.data.object.oetUser.id;
                        // document.cookie = "appUserId=" + response.data.object.appUser.id;
                        window.sessionStorage.setItem("appusericon", response.data.object.appUser.icon);
                        window.sessionStorage.setItem("nickname", response.data.object.appUser.nickname);
                        var _isInvite = window.sessionStorage.getItem("isInvite");
                        var _shardid = window.sessionStorage.getItem("shareId");
                        if (_isInvite=="true") {
                            window.sessionStorage.setItem("isInvite", false);
                            this.$route.router.go({
                                path: '/claninvite?teamId=' + _shardid + ''
                            });
                        } else {
                            this.$route.router.go({
                                path: '/index'
                            });
                        }

                    } else {
                        var _formpw = $('.form_pw');
                        var _text = response.data.msg;
                        _formpw.find('.reg_error').show();
                        _formpw.find('.error_tip').text(_text);
                    }
                }, function(response) {
                    console.log(response);
                });
            }
        }
    }
}
</script>
<style>
.landregister {
    width: 488px;
    background-color: #292f3b;
    padding: 6px;
    margin: 1.5rem auto;
}

.landreg_head {
    width: 100%;
    height: 55px;
    background: url(../../static/images/regtop.png);
}

.landreg_tab {
    width: 100%;
    height: 55px;
    line-height: 55px;
}

.landreg_tab li {
    float: left;
    height: 50px;
    text-align: center;
    font-size: 18px;
    color: #f2f6f9;
    width: 90px;
    margin: 0 77px;
    cursor: pointer;
}

.landreg_tab .reg_active {
    color: #fdb91a;
    border-bottom: 4px solid #fdb91a;
}

.landreg_content {
    background: #1b1e25;
}

.landreg_list {
    padding: 20px 40px;
}

.landreg_tip {
    color: #7a8387;
}

.landreg_tip span {
    color: #fdb91a;
    margin-right: 5px;
}

.landreg_form {
    border: 1px solid #343b45;
    margin-top: 30px;
    background-color: #14181d;
}

.landreg_form input {
    background-color: #14181d !important;
    border: none;
    border-bottom: 1px solid #343b45;
    width: 330px;
    height: 50px;
    line-height: 50px;
    color: #fff;
}

.reg_label {
    display: inline-block;
    width: 50px;
    text-align: center;
}

.reg_label img {
    vertical-align: top;
}

.password_st {
    margin: 20px auto 40px;
}

.remeber_pw {
    float: left;
    position: relative;
}

.forgot_pw {
    float: right;
}

.password_st a {
    color: #42aa53;
}

.remeber_label {
    color: #42aa53;
}

.twolines {
    width: 100%;
    height: 5px;
    border-top: 1px solid #343b45;
    border-bottom: 1px solid #343b45;
}

.login_in,
.regi_in {
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

.accept_rule {
    margin: 20px auto 40px;
    color: #7a8387;
    position: relative;
}

.accept_rule i {
    color: #42aa53;
}

.float_checkbox {
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 1px solid #53585d;
    border-radius: 2px;
    position: absolute;
    top: 0;
    left: 0;
}

#auto_land,
#accept_input {
    opacity: 0;
    width: 15px;
    height: 15px;
}

.bottom_line {
    border-bottom: 1px solid #fff !important;
}

.form_list {
    position: relative;
}

.reg_error {
    display: inline-block;
    position: absolute;
    top: 0;
    right: -175px;
    color: #42aa53;
    width: 160px;
    height: 35px;
    background-color: #171a21;
    line-height: 35px;
    text-align: center;
    border: 1px solid #343b45;
    display: none;
    font-size: 12px;
    border-radius: 2px;
}

.get_indent {
    position: absolute;
    top: 10px;
    right: 20px;
    width: 100px;
    height: 30px;
    background-color: #343b45;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    color: #7a8387;
    cursor: pointer;
}

.allow_reg,
.allow_login {
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

.error_tip {
    margin-left: 7px;
}

.error_tri {
    position: absolute;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 9px solid #343b45;
    border-bottom: 8px solid transparent;
    top: 11px;
    left: -10px;
}

.error_tri:before {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 8px solid #171a21;
    border-bottom: 7px solid transparent;
    top: -7px;
    left: 2px;
}

.form_ident .can_ident {
    background-color: #fdb91a;
    color: #000;
}
</style>