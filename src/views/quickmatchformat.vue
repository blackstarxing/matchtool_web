<template>
	<top-head></top-head>
	<!-- <side-bar></side-bar> -->
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="backLast">
		<div class="g-z">
			<a v-link="{ path: '/quickmatch'}"></a>赛制设置
		</div>
	</div>
	<div class="g-w">
		<div class="g-z">
			<p class="m-c-tit">设置赛事采用赛制</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<p class="g-c-l">赛事类型</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="online" name="matchitem" class="regular-radio" checked="checked" value="1" v-model="formdata.type"/>
							<label for="online"></label>
							<label for="online" class="u-c-per">		
								<span class="f-fl">
									单阶段
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="offline" name="matchitem" class="regular-radio" value="2" v-model="formdata.type" disabled />
							<label for="offline"></label>
							<label for="offline" class="u-c-per">		
								<span class="f-fl col8f">
									双阶段
								</span>
							</label>
						</div>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">采用赛制<span class="colfdb f-tip"></span><span class="f-fr"><span class="g-help"></span>查看赛制帮助</span></p>
						<div class="clearfix mb12">
							<div class="f-fl g-c-sz" @click="cherksz" selected="1">
								<p class="g-c-szt">单败淘汰制</p>
								<div class="g-c-szm">
									<img src="../../static/images/danbai.png">
								</div>
								<div class="g-c-sz-cherk">
									<i class="g-sz-gimg"></i>
								</div>
							</div>
							<div class="f-fr g-c-sz" selected="2">
								<p class="g-c-szt">双败淘汰制</p>
								<div class="g-c-szm">
									<img src="../../static/images/shuangbai.png">
								</div>
							</div>
						</div>
						<div class="g-c-szgz">
							<div class="g-tri-up">
								<div class="g-tri-iup"></div>
							</div>
							<div class="f-fl mr56 g-c-kz-sz">
								<input type="checkbox" id="dbsz" class="regular-checkboxs" name="" />
								<label for="dbsz"></label>
								<label for="dbsz" class="u-c-kz-sz">需要增加一场第三名争夺战</label>
							</div>
						</div>
						<div class="clearfix">
							<div class="f-fl g-c-sz" selected="3">
								<p class="g-c-szt">小组循环制</p>
								<div class="g-c-szm">
									<img src="../../static/images/xiaozu.png">
								</div>
							</div>
							<div class="f-fr g-c-sz" selected="4">
								<p class="g-c-szt">小组积分制</p>
								<div class="g-c-szm">
									<img src="../../static/images/xunhuan.png">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="confirmBtn mb120">
				<a href="" class="nextBtn" @click="creatematch"><i></i>确认，并生成赛事</a>
			</div>
		</div>
		<div class="steps">
			<span class="line"></span>
			<ul>
				<li><i></i>填写基本信息</li>
				<li><i></i>设置参赛方式</li>
				<li><i></i>确认赛事时间</li>
				<li class="current"><i></i>设置采用赛制</li>
				<li><i></i>完善信息并发布</li>
			</ul>
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
				formdata:{
					eventRoundId:'',
					needThird:'',
					regime:'',
					type:1
				}
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
			_this.formdata.eventRoundId = window.sessionStorage.getItem("eventRoundId");
		},
		methods:{
			cherksz:function(event){
				var _this = $(event.target);
				_this.parents('.g-c-sz').find('.g-c-sz-cherk').toggle();
				$('.g-c-szgz').fadeToggle();
			},
			creatematch:function(event){
				var _this = this;
				event.preventDefault();
				var slt = $('.g-c-sz-cherk').css('display') != 'none';
				if(slt){
					_this.formdata.regime = 1;
				}
				else{
					_this.formdata.regime = '';
				}
				function errorPlacement(mes,element){
		    		var errorTips=element.parents(".f-c").find('.f-tip');
			    	if(mes!=""){
			    		errorTips.css("display","inline-block").html(mes);	
			    	}else{
			    		errorTips.css("display","none");	
			    	}
		    	}
		    	function formValidate(){
		    		var valid=true;
		    		var $this=$('#dbsz');
		    		var message="请选择赛制！";
		    		if(_this.formdata.regime ==''){
		    			valid=false;
		    			errorPlacement(message,$this);
		    		}
		    		else{
		    			valid=true;
		    			message='';
		    			errorPlacement(message,$this);
		    		}
		    		return valid;
		    	}

				if($('#dbsz').is(':checked')){
					_this.formdata.needThird = 1;
				}
				else{
					_this.formdata.needThird = 0;
				}
				if(formValidate()){
					var newsobj = _this.formdata;
		    		var jsonInfo = JSON.stringify(newsobj);
	  				var parm = new Object();
	  				parm.jsonInfo = jsonInfo;
					_this.$http.post('event/saveRegime',parm).then(function(response){
						var code = response.data.code;
		    			if(code==1){
		    				window.sessionStorage.setItem("eventRoundId",response.data.object.eventRoundId);
		    				window.sessionStorage.setItem("eventId",response.data.object.eventId);
		    				_this.$route.router.go({path: '/matchDetails'});
		    			}
		    			console.log("成功");
					}, function(response){
						console.log(22);
					})
				}
			}
		}
	}
</script>
