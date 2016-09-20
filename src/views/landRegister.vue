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
                        <input class="input_text last_input" type="password" placeholder="请输入密码" v-model="landpassword" @blur="getlandpwd">
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
                <div class="allow_login" @click="logIn">登&nbsp;录</div>
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
                        <input class="input_text last_input" type="password" placeholder="密码(6-16位，允许数字字母常用符号)" maxlength='16' v-model="password" @blur="getpwd">
                        <span class="reg_error"><span class="error_tri"></span><img src="../../static/images/tip.png"><i class="error_tip">密码位数太短</i></span>
                    </div>
                </div>
                <div class="accept_rule">
                    <input type="checkbox" id="accept_input" checked v-model="acceptchecked">
                    <span class="accept_span">我接受<i v-link="{ path: '/clause'}">《开赛吧服务条款》</i></span>
                    <label for="accept_input" class="float_checkbox"><span class="check_gou" v-show="acceptchecked"></span></label>
                </div>
                <div class="twolines"></div>
                <div class="allow_reg" @click="regIn">注&nbsp;册</div>
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
            accoutTip: true,
            pwlandTip: '',
            allowReg: false,
            isLand: true,
            isReg: false,
            isident: false,
            tabId: '',
            phoneTip: '',
            pwregTip: '',
            nkTip: '',
            idTip: ''
        }
    },
    components: {
        topHead,
        sideBar,
        slideBar,
        createPop
    },
    ready: function() {
        
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
            if (this.account && /^\d+$/.test(this.account)) {
                _error.hide();
                //判断是否有错误提示
                this.accoutTip = true;
                if (this.account.length != 11) {
                    _error.show();
                    //判断是否有错误提示
                    this.accoutTip = false;
                    _error.find('.error_tip').text('手机号码位数不对');
                }
            } else {
                _error.show();
                this.accoutTip = false;
                _error.find('.error_tip').text('请填写正确的手机号');
            }
        },
        blurPhone: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (this.phone && /^\d+$/.test(this.phone)) {
                _error.hide();
                //判断是否有错误提示
                this.phoneTip = true;
                if (this.phone.length != 11) {
                    _error.show();
                    //判断是否有错误提示
                    this.phoneTip = false;
                    _error.find('.error_tip').text('手机号码位数不对');
                } else {
                    var parm = {}
                    parm.telephone = this.phone;
                    this.$http.post('registerCheck', parm).then(function(response) {
                        if (response.data.object.telephoneValid) {
                            _error.hide();
                            this.phoneTip = true;
                        } else {
                            _error.show();
                            _error.find('.error_tip').text('手机号已被注册');
                            this.phoneTip = false;
                        }
                    }, function(response) {
                        console.log(response);
                    });
                }
            } else {
                _error.show();
                this.phoneTip = false;
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
                    
                } else {
                    layer.msg(response.data.msg);
                }
            }, function(response) {
                console.log(response);
            });
            
           
        },
        blurId: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (this.ident && this.ident.length == 6) {
                _error.hide();
                this.idTip = true;
            } else {
                _error.show();
                this.idTip = false;
            }
        },
        getNickname: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/.test(this.nickname)) {
                _error.show();
                this.nkTip = false;
            } else if (!this.nickname) {
                _error.show();
                _error.find('.error_tip').text('请输入昵称');
                this.nkTip = false;
            } else {
                _error.hide();
                this.nkTip = true;
                var parm = {}
                parm.nickname = this.nickname;
                this.$http.post('registerCheck', parm).then(function(response) {
                    if (response.data.object.nicknameValid) {
                        _error.hide();
                        this.nkTip = true;
                    } else {
                        _error.show();
                        _error.find('.error_tip').text('昵称已被注册');
                        this.nkTip = false;
                    }
                }, function(response) {
                    console.log(response);
                });
            }
        },
        getlandpwd: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (this.landpassword && this.landpassword.length < 6) {
                _error.show();
                this.pwlandTip = false;
            } else {
                _error.hide();
                this.pwlandTip = true;
            }
        },
        getpwd: function(e) {
            var _current = $(e.currentTarget);
            var _error = _current.next('.reg_error');
            if (this.password && this.password.length < 6) {
                _error.show();
                this.pwregTip = false;
            } else {
                _error.hide();
                this.pwregTip = true;
            }
        },
        regIn: function() {
            var parm = {};
            parm.nickname = this.nickname;
            parm.password = this.password;
            parm.telephone = this.phone;
            parm.verifyCode = this.ident;

            if (this.nkTip && this.pwregTip && this.phoneTip && this.idTip && this.acceptchecked) {
                this.$http.post('register', parm).then(function(response) {
                    console.log(response);
                    if (response.data.code) {
                        // document.cookie = "oetevent.login.sessionid=" + response.data.object["oetevent.login.sessionid"];
                        // document.cookie = "oetevent.login.token=" + response.data.object["oetevent.login.token"];
                        // document.cookie = "oetUserId=" + response.data.object.oetUser.id;
                        // document.cookie = "appUserId=" + response.data.object.appUser.id;
                        window.sessionStorage.setItem("appusericon", response.data.object.appUser.icon);
                        window.sessionStorage.setItem("nickname", response.data.object.appUser.nickname);
                        this.$http.get("isIdentifyUser").then(function(response){
                            window.sessionStorage.setItem("isident", response.data.object.flag);
                          }, function(response){
                            console.log(response+'isIdentifyUser');
                          })
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
            if (this.accoutTip && this.pwlandTip) {
                this.$http.post('login', parm).then(function(response) {
                    console.log(response);
                    if (response.data.code) {
                        // document.cookie = "oetevent.login.sessionid=" + response.data.object["oetevent.login.sessionid"];
                        // document.cookie = "oetevent.login.token=" + response.data.object["oetevent.login.token"];
                        // document.cookie = "oetUserId=" + response.data.object.oetUser.id;
                        // document.cookie = "appUserId=" + response.data.object.appUser.id;
                        window.sessionStorage.setItem("appusericon", response.data.object.appUser.icon);
                        window.sessionStorage.setItem("nickname", response.data.object.appUser.nickname);
                        this.$http.get("isIdentifyUser").then(function(response){
                            window.sessionStorage.setItem("isident", response.data.object.flag);
                          }, function(response){
                            console.log(response+'isIdentifyUser');
                          })
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