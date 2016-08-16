<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
<div class="change_pw">
	<div class="pw_status">
		<ul class="status_list clearfix">
			<li class="status_li">
				<span class="status_title"></span>
				<span class="status_num status_finish">1</span>
				<span class="status_line line_finish"></span>
			</li>
			<li class="status_li">
				<span class="status_num">2</span>
				<span class="status_line"></span>
			</li>
			<li class="status_li">
				<span class="status_num">3</span>
				<span class="status_line"></span>
			</li>
			<li class="status_li">
				<span class="status_num">4</span>
			</li>
		</ul>
	</div>
	<div class="pw_container">
		<div class="pw_list">
			<div class="list_fill list_detail" style="display:none">
				<div class="list_every">
					<label>手机号：</label>
					<input type="text" class="pw_input" placeholder="请输入你要找回的手机号" v-model="pwPhone">
				</div>
				<div class="next_btn" @click="nextIdent">下一步</div>
			</div>
			<div class="list_ident list_detail" style="display:none">
				<div class="list_every">
					<label>验证码：</label>
					<div class="pw_ident_get">
						<input type="text" class="pw_input" placeholder="输入获得的验证码" v-model="pwIdent">
					<span class="get_pwident" @click="getPWident">获取验证码</span>
					<span class="count_down">60</span>
					</div>
				</div>
				<div class="next_btn" @click="nextReset">下一步</div>
			</div>
			<div class="list_fill list_detail">
				<div class="list_every">
					<label class="list_label">新密码：</label>
					<input type="text" class="pw_input" placeholder="请输入新密码" v-model="newPw">
				</div>
				<div class="list_every">
					<label class="list_label">再次输入：</label>
					<input type="text" class="pw_input" placeholder="请输入新密码" v-model="confirmPw">
				</div>
				<div class="next_btn" @click="nextIdent">下一步</div>
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
			return{
				pwPhone:'',
				pwIdent:'',
				newPw:'',
				confirmPw:''
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
					$('.list_ident').show().siblings('.list_detail').hide();
					$('.status_li').eq(1).find('.status_num').addClass('status_finish');
					$('.status_li').eq(1).find('.status_line').addClass('line_finish');
				}
			},
			getPWident: function () {
				var parm={};
				parm.type=2;
				parm.telephone=this.pwPhone;
				this.$http.post('oet/sendVerifyCode',parm).then(function(response){
					var _pwident=$(".get_pwident");
					var _countdown=$(".count_down");
					var _time=60;
					if(response.data.code){
						_pwident.addClass('ident_count');
						countdown();

						function countdown(){
							if(_time==0){
							 _pwident.removeClass('ident_count');
							 _countdown.text(60);
							 _countdown.hide();
							}else{
								_time--;
								_countdown.text(_time);
								setTimeout(function() {  
					                countdown();
					            },  
					            1000)
							}
						}
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
				this.$http.post('oet/checkVerifyCode',parm).then(function(response){
					if(response.data.code){

					}
					
			      },function(response) {
			              console.log(response);
			          });
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
		height: 5px;
		background-color: #865b1e;
		margin: 0 0 2px 3px;
	}
	.status_li .status_finish{
		background: url(../../static/images/pw_a.png) no-repeat;
		color: #000;
	}
	.status_li .line_finish{
		background-color: #fdb91a;
	}
	.pw_container{
		width: 488px;
		height: 280px;
		padding: 6px;
		background-color: #292f3b;
	}
	.pw_list{
		width: 100%;
		height: 100%;
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
		color: #c9c6be;
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
</style>