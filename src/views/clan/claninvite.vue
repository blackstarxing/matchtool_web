<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w mt90">
		<div class="g-z">
			<div class="m-c-w">
				<div class="g-cyq-m1">
					<i class="m-cyq-tx">
						<img v-bind:src="'http://img.wangyuhudong.com/'+monitorIcon">
					</i>
					<span class="m-cyq-byq">“{{nickname}}”你好，欢迎加入我们！</span>
				</div>
				<div class="g-cyq-m2">
					<div class="clearfix mb20">
						<span class="g-cyq-sp1">战队名称：</span>
						<span class="g-cyq-sp2">{{name}}</span>
					</div>
					<div class="clearfix mb20">
						<span class="g-cyq-sp1">所属游戏：</span>
						<span class="g-cyq-sp2">{{itemName}}</span>
					</div>
					<div class="clearfix mb20">
						<span class="g-cyq-sp1">邀请人：</span>
						<span class="g-cyq-sp2">{{monitorNickname}}</span>
					</div>
					<div class="clearfix" style="margin-top: -0.04rem;">
						<span class="g-cyq-sp1" style="line-height: 0.2rem;">战队简介：</span>
						<span class="g-cyq-sp2 g-cyq-zdjj">{{brief}}</span>
					</div>
				</div>
				<div class="g-cyq-m2">
					<p class="g-cyq-sm clearfix"><span class="colfdb f-fl">•&nbsp&nbsp&nbsp</span><span class="f-fl" style="width: 4.85rem;" id="fasong">战队系统是提供给资深的电竞用户建立参赛团体的平台，需要你完善个人参赛资料，以便赛事方审核效验。</span></p>
					<div v-show="isshow">
						<div class="g-cyq-req mb20 mt20 f-re">
							<label for="" class="">真实姓名：</label>
							<input type="text" name="name" class="u-c-ipt" placeholder="请输入真实姓名" maxlength="8" value="{{formdata.realname}}" v-model="formdata.realname" style="width:260px;" required>
							<span class="colfdb f-tip f-cyq-tip">23123213</span>
						</div>
						<div class="g-cyq-req mb20 f-re">
							<label for="" class="">有效身份证：</label>
							<input type="text" name="idcard" class="u-c-ipt" placeholder="请输入有效身份证" maxlength="18" value="{{formdata.idcard}}" v-model="formdata.idcard" style="width:260px;" required>
							<span class="colfdb f-tip f-cyq-tip">23123213</span>
						</div>
						<div class="g-cyq-req mb20 f-re">
							<label for="" class="">手机号码：</label>
							<input type="text" name="telephone" class="u-c-ipt" placeholder="请输入手机号码" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" value="{{formdata.telephone}}" v-model="formdata.telephone" style="width:260px;" required>
							<span class="colfdb f-tip f-cyq-tip">23123213</span>
						</div>
						<div class="g-cyq-req f-re">
							<label for="" class="">QQ号码：</label>
							<input type="text" name="qq" class="u-c-ipt" placeholder="请输入QQ号码" maxlength="15" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" value="{{formdata.qq}}" v-model="formdata.qq" style="width:260px;" required>
							<span class="colfdb f-tip f-cyq-tip">23123213</span>
						</div>
					</div>
				</div>
			</div>
			<div class="confirmBtn mb120" v-show="isshow">
				<button type="botton" class="nextBtn" v-if="state==1 || state==3" disabled><i></i>不能再申请</button>
				<button type="botton" class="nextBtn" v-if="state==2" @click="joinClan"><i></i>确认并加入</button>
			</div>
			<div class="confirmBtn mb120" v-show="isbtnshow">
				<button type="botton" class="nextBtn" @click="goToIndex"><i></i>返回首页</button>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="foot">
            <div class="tel">
                <div class="telIcon">
                    <img src="../../../static/images/telephone.png">
                    <span id="lx" v-link="{ path: '/contact'}">联系我们</span>
                </div>
            </div>
            <div class="letter">
                <div class="letterIcon">
                    <img src="../../../static/images/letter.png">
                    <span>招贤纳士：hr-wangyu@miqtech.com
              </span>
                </div>
            </div>
            <div class="address">
                <div class="addressIcon">
                    <img src="../../../static/images/address.png">
                    <span id="gy" v-link="{ path: '/about'}">关于我们</span>
                </div>
            </div>
            <div class="contactInformation">
                <span>浙江网竞网络科技有限公司 浙ICP备14028335号-2 | Copyright©2016 kaisaiba.com All Rights Reserved. 版权所有@浙江网竞网络科技有限公司</span>
            </div>
        </div>
	</div>
</template>
<script type="text/javascript">
import topHead from '../../components/topHead.vue'
import sideBar from '../../components/sideBar.vue'
import slideBar from '../../components/slideBar.vue'
import createPop from '../../components/createPop.vue'
	export default {
		data (){
			return{	
				formdata:{
					teamId:'',
					idcard:'',
					qq:'',
					telephone:'',
					realname:''
				},
				itemName:'',
				monitorIcon:'',
				nickname:'',
				name:'',
				monitorNickname:'',
				state:'',
				brief:'',
				isshow:true,
				isbtnshow:false
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){
			var _this = this;
			var urlSearch = window.location.href;
			_this.formdata.teamId = urlSearch.substring(urlSearch.indexOf("teamId=")+7, urlSearch.length);
			window.sessionStorage.setItem("shareId",_this.formdata.teamId);
		 	_this.$http.post('team/apply/info?teamId='+_this.formdata.teamId).then(function(response){
		 		var code = response.data.code;
		 		if(code==-1){
		 			window.sessionStorage.setItem("isInvite",true);
		 			_this.$route.router.go({ name: 'landRegister', params: { tabId: 0 }});
		 		}else if(code==0){
		 			layer.msg(response.data.msg,{offset:"0px"});
		 		}
		 		else if(code==1){
		 			_this.itemName = response.data.object.team.itemName;
			 		_this.monitorIcon = response.data.object.team.monitorIcon;
			 		_this.nickname = response.data.object.user.nickname;
			 		_this.name = response.data.object.team.name;
			 		_this.monitorNickname = response.data.object.team.monitorNickname;
			 		_this.brief = response.data.object.team.brief;
			 		_this.formdata.idcard = response.data.object.user.idcard;
			 		_this.formdata.qq = response.data.object.user.qq;
			 		_this.formdata.realname = response.data.object.user.realname;
			 		_this.formdata.telephone = response.data.object.user.telephone;
			 		if(response.data.object.apply!=null){
			 			_this.state = response.data.object.apply.state
			 		}else{
			 			_this.state = 2;
			 		}
		 		}	 		
		 	}, function(response){
		 		console.log(22);
		 	})
		},
		methods:{
			goToIndex:function(event){
				var _this = this;
				event.preventDefault();
				_this.$route.router.go({path: '/index'});
			},
			joinClan:function(event){
				var _this = this;
				event.preventDefault();
		    	function errorPlacement(mes,element){
		    		var errorTips=element.parents(".g-cyq-req").find('.f-tip');
			    	if(mes!=""){
			    		errorTips.css("display","inline-block").html(mes);	
			    	}else{
			    		errorTips.css("display","none");	
			    	}
		    	}
		    	function formValidate(){
		    		var valid=true;
		    		$('.g-cyq-m2 [required]').each(function(index, el) {
		    			var $this=$(this);
		    			var value=$this.val(),name=$this.attr('name');	
			    		var message="";
			    		if(name=="name"){
			    			if(value==""){
								valid=false;
					    		message="真实姓名不能为空!";
							}
							errorPlacement(message,$this);
			    		}else if(name=="idcard"){
			    			if(value==""){
			    				valid=false;
					    		message="有效身份证不能为空!";
			    			}else if(!/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(value)){
			    				valid=false;
					    		message="有效身份证格式不正确!";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="telephone"){
			    			if(value==""){
			    				valid=false;
					    		message="手机号码不能为空!";
			    			}else if(!/^1\d{10}$/.test(value)){
			    				valid=false;
					    		message="手机号码不规范!";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="qq"){
			    			if(value==""){
			    				valid=false;
					    		message="QQ号码不能为空!";
			    			}
			    			errorPlacement(message,$this);
			    		}
			    		
		    		});
		    		if(valid){
		    			return true;
		    		}
		    	}
		    	if(formValidate()){
		    		_this.$http.post('team/apply/commit', _this.formdata).then(function(response){
						var code = response.data.code;
						if(code==-1){
		    				layer.msg('请先登录',{offset:"0px"});
		    			}else if(code==0){
		    				layer.msg(response.data.msg,{offset:"0px"});
		    			}else if(code==1){
		    				$('#fasong').text('申请信息已经发送，请耐心等待验证通过!');
		    				_this.isshow = false;
		    				_this.isbtnshow = true;
		    			}
					}, function(response){
						console.log(22);
					})
		    	}	
			}
		}
	}
</script>
