<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="backLast">
		<div class="g-z">
			<a href=""></a>创建快捷赛事
		</div>
	</div>
	<div class="g-w">
		<div class="g-z">
			<p class="m-c-tit">完善赛事基本信息</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<div class="f-c">
						<p class="g-c-l">赛事名称<span class="colfdb f-tip"></span></p>
						<input type="text" class="u-c-ipt" title="赛事名称" placeholder="请输入赛事名称" style="width:480px;" oninput="onInput.call(this)" v-model="formdata.name" required>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">主办方<span class="colfdb f-tip"><i class="g-c-tip"></i></span></p>
						<div class="g-c-zbf">
							<input type="radio" id="personal" class="regular-radio" checked="checked" value="" />
							<label for="personal"></label>
							<label for="personal" class="u-c-per">
								<span class="u-c-headimg">
									<img src="../../static/images/me.jpg">
								</span>
								<span class="f-fl">
									未来老公
								</span>
							</label>
						</div>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">比赛项目<span class="colfdb f-tip"></span></p>
						<select class="u-c-slt" name="itemId" id="gameList" v-model="formdata.itemId" @change="getServerList" required>
							<option value="" selected>选择一个竞技项目</option>
						</select>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">赛事模式<span class="colfdb f-tip"></span></p>
						<div class="g-c-zbf">
						    <div class="f-fl g-c-ms">
								<input type="radio" id="online" name="matchitem" class="regular-radio" checked="checked" value="1" v-model="formdata.mode"/>
								<label for="online" @click="slideup"></label>
								<label for="online" class="u-c-per" @click="slideup">		
									<span class="f-fl">
										纯线上赛事
									</span>
								</label>
							</div>
							<div class="f-fl g-c-ms">
								<input type="radio" id="offline" name="matchitem" class="regular-radio" value="2" v-model="formdata.mode"/>
								<label for="offline" @click="slidedown"></label>
								<label for="offline" class="u-c-per" @click="slidedown">		
									<span class="f-fl">
										纯线下赛事
									</span>
								</label>
							</div>
							<div class="f-fl h36">
								<input type="radio" id="unite" name="matchitem" class="regular-radio" value="3" v-model="formdata.mode"/>
								<label for="unite" @click="slidedown"></label>
								<label for="unite" class="u-c-per" @click="slidedown">		
									<span class="f-fl">
										线上与线下结合模式
									</span>
								</label>
							</div>
						</div>
					</div>
					<div class="m-c-xx">
						<div class="f-c">
							<p class="g-c-l mt40">比赛地点<span class="colfdb f-tip"></span></p>
							<input type="text" class="u-c-ipt" title="比赛地点" placeholder="请输入比赛地点" style="width:480px;" v-model="formdata.addreass" req>
						</div>
						<div class="f-c">
							<p class="g-c-l mt40">具体地址<span class="colfdb f-tip"></span></p>
							<input type="text" class="u-c-ipt" title="具体地址" placeholder="请输入具体地址" style="width:480px;" v-model="formdata.detailAddreass" req>
						</div>
					</div>
				</div>
			</div>
			<p class="m-c-tit">设置选手参赛方式</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<div class="f-c">
						<p class="g-c-l">最大参与人数（需要在4-512之间）<span class="colfdb f-tip"></span></p>
						<div class="clearfix">
							<input type="text" id="personnum" class="u-c-ipt f-fl" title="参赛人数" style="width: 200px;" required placeholder="请输入参与人数上限"  v-model="formdata.maxNum" @input="numberChange" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}">
							<div class="button_group">
								<button class="plus" @click="plus"></button>
								<button class="minus" @click="minus" disabled="true"></button>
							</div>
						</div>
					</div>
					<div class="g-c-l mt40 f-re">是否允许用户自主报名
						<div class="checkboxThree f-ab">
					  		<input type="checkbox" id="checkboxThreeInput" name="" class="f-dn" v-model="formdata.allowApply" v-bind:true-value="1" v-bind:false-value="0"/>
						  	<label for="checkboxThreeInput" @click="isapply"></label>
					  	</div>
					</div>
					<p class="g-c-l mt40 f-re">
						报名方式	
					</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="single" name="baoming" class="regular-radio" checked="checked" v-model="formdata.applyType" value="1" disabled />
							<label for="single"></label>
							<label for="single" class="u-c-per">		
								<span class="f-fl col8f">
									个人报名
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="team" name="baoming" class="regular-radio" v-model="formdata.applyType" value="2" disabled />
							<label for="team"></label>
							<label for="team" class="u-c-per">		
								<span class="f-fl col8f">
									战队报名
								</span>
							</label>
						</div>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">设置需要收集的报名信息（多选）<span class="colfdb f-tip"></span></p>
						<div class="clearfix">
							<div class="f-fl mr56 mb6">
								<input type="checkbox" id="gamenickname" class="regular-checkboxs" name="bminfo" v-model="formdata.nicknameRequired" v-bind:true-value="1" v-bind:false-value="0" disabled />
								<label for="gamenickname"></label>
								<label for="gamenickname" class="u-c-ck col8f">游戏昵称</label>
							</div>
							<div class="f-fl mr56 mb6">
								<input type="checkbox" id="truename" class="regular-checkboxs" name="bminfo" v-model="formdata.nameRequired" v-bind:true-value="1" v-bind:false-value="0" disabled />
								<label for="truename"></label>
								<label for="truename" class="u-c-ck col8f">真实姓名</label>
							</div>
							<div class="f-fl mr56 mb6">
								<input type="checkbox" id="idcard" class="regular-checkboxs" name="bminfo" v-model="formdata.idcardRequired" v-bind:true-value="1" v-bind:false-value="0" disabled />
								<label for="idcard"></label>
								<label for="idcard" class="u-c-ck col8f">有效身份证号</label>
							</div>
							<div class="f-fl mr56">
								<input type="checkbox" id="qqnumber" class="regular-checkboxs" name="bminfo" v-model="formdata.qqRequired" v-bind:true-value="1" v-bind:false-value="0" disabled />
								<label for="qqnumber"></label>
								<label for="qqnumber" class="u-c-ck col8f">QQ号</label>
							</div>
							<div class="f-fl mr56">
								<input type="checkbox" id="wxnumber" class="regular-checkboxs" name="bminfo" v-model="formdata.wechatRequired" v-bind:true-value="1" v-bind:false-value="0" disabled />
								<label for="wxnumber"></label>
								<label for="wxnumber" class="u-c-ck col8f">微信号</label>
							</div>
							<div class="f-fl mr56">
								<input type="checkbox" id="telephone" class="regular-checkboxs" name="bminfo" v-model="formdata.telephoneRequired" v-bind:true-value="1" v-bind:false-value="0" disabled />
								<label for="telephone"></label>
								<label for="telephone" class="u-c-ck col8f">手机号</label>
							</div>
							<div class="f-fl mr56">
								<input type="checkbox" id="another" class="regular-checkboxs" name="bminfo" v-model="formdata.otherRequired" v-bind:true-value="1" v-bind:false-value="0" disabled />
								<label for="another" @click="showotherinfo"></label>
								<label for="another" class="u-c-ck col8f" @click="showotherinfo">其他</label>
							</div>
						</div>
					</div>
					<div class="f-dn" id="otherinfocherk">
						<div class="f-c">
							<p class="g-c-l mt40">设置其他的报名信息<span class="colfdb f-tip"></span></p>
							<input type="text" class="u-c-ipt" placeholder="请输入报名信息" style="width:480px;" v-model="formdata.otherDescribe">
						</div>
					</div>
				</div>
			</div>
			<p class="m-c-tit">设置赛事相关时间节点</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<div class="f-c">
						<p class="g-c-l">赛事开始时间<span class="colfdb f-tip"></span></p>
						<div style="width: 200px; position:relative;">
							<input type="text" class="u-c-ipt form_datetime" title="赛事开始时间" id="activityBegin" placeholder="请输入开赛时间" style="width:200px;" v-model="formdata.activityBegin" required>
							<label for="activityBegin" class="add-on"></label>
						</div>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">报名时间<span class="colfdb f-tip"></span></p>
						<div class="g-c-timeipt">
							<input type="text" class="u-c-ipt form_datetime" id="applyBegin" placeholder="请输入开始时间" style="width:200px;" v-model="formdata.applyBegin" disabled>
							<label for="applyBegin" class="add-on"></label>
						</div>
						&nbsp－&nbsp
						<div class="g-c-timeipt">
							<input type="text" class="u-c-ipt form_datetime" id="applyEnd" placeholder="请输入结束时间" style="width:200px;" v-model="formdata.applyEnd" disabled/>
							<label for="applyEnd" class="add-on"></label>
						</div>
					</div>
					<p class="g-c-l mt40">签到时间</p>
					<div class="g-c-qd">
						<input type="checkbox" id="signtime" class="regular-checkboxs" name="" v-model="formdata.needSign" v-bind:true-value="1" v-bind:false-value="0" disabled/>
						<label for="signtime" @click="signtime"></label><span class="u-c-ck col8f">要求参赛者赛前签到 (仅签到一次)<span class="colfdb">&nbsp&nbsp•&nbsp&nbsp</span>比赛开始前</span>
						<select class="u-c-slt u-c-tslt col8f" name="needSignMinu" v-model="formdata.needSignMinu" disabled>
							<option v-bind:value="10" selected>10</option>
							<option v-bind:value="15">15</option>
							<option v-bind:value="20">20</option>
							<option v-bind:value="25">25</option>
							<option v-bind:value="30">30</option>
							<option v-bind:value="35">35</option>
							<option v-bind:value="40">40</option>
							<option v-bind:value="45">45</option>
							<option v-bind:value="50">50</option>
							<option v-bind:value="55">55</option>
							<option v-bind:value="60">60</option>
						</select>
						<span class="u-c-ck col8f">分钟</span>
					</div>
				</div>
			</div>
			<div class="confirmBtn mb120">
				<a href="" class="nextBtn" @click="goToSetformat"><i></i>确认，进入赛制设置</a>
			</div>
		</div>
		<div class="steps">
			<span class="line"></span>
			<ul>
				<li class="current"><i></i>填写基本信息</li>
				<li><i></i>设置参赛方式</li>
				<li><i></i>确认赛事时间</li>
				<li><i></i>设置采用赛制</li>
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
				username:"",
				formdata:{
					name:"",
					sponsorType:1,
					itemId:"",
					addreass:"",
					detailAddreass:"",
    				maxNum:"",
    				mode:"",
    				allowApply:"",
    				applyType:"",
    				nicknameRequired:"",
    				nameRequired:"",
    				idcardRequired:"",
    				qqRequired:"",
    				wechatRequired:"",
    				telephoneRequired:"",
    				otherRequired:"",
    				otherDescribe:"",
    				activityBegin:"",
    				applyBegin:"",
    				applyEnd:"",
    				needSign:"",
    				needSignMinu:""
    				// sponsorId:""
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
			// 赛事名称字符规则
			function getLength(str) {
			    return str.replace(/[^ -~]/g, 'AA').length;
			}

			function limitMaxLength(str, maxLength) {
			    var result = [];
			    for (var i = 0; i < maxLength; i++) {
			        var char = str[i]
			        if (/[^ -~]/.test(char))
			            maxLength--;
			        result.push(char);
			    }
			    return result.join('');
			}

			var maxLength = 52; //赛事名称最大字符数

			function onInput() {
			    if (getLength(this.value) > maxLength)
			        this.value = limitMaxLength(this.value, maxLength);
			}

			window.onInput = onInput;
			//end
			//日历控件默认设置
			$('.form_datetime').datetimepicker({
	        	format:"Y-m-d H:i",      
			    yearStart:2000,     
			    yearEnd:2050, 
			    onShow:function(ct){
			    	this.setOptions({
		               minDate: true,
		               minTime: true
		            })
			    },
			    step:10
	        });
	        var _this=this;
	        $('#applyEnd').on('change', function(){
	        	var t = _this.formdata.applyEnd;
	        	if(t!=""){
	        		$('#activityBegin').datetimepicker({
			        	format:"Y-m-d H:i",      
					    yearStart:2000,     
					    yearEnd:2050, 
					    onShow:function(ct){
					    	this.setOptions({
				               minDate: t,
				               minTime: false
				            })
					    },
					    step:10
			        });
			        $('#applyBegin').datetimepicker({
			        	format:"Y-m-d H:i",      
					    yearStart:2000,     
					    yearEnd:2050, 
					    onShow:function(ct){
					    	this.setOptions({
				               maxDate: t,
				               minTime: false
				            })
					    },
					    step:10
			        });
	        	}
	        });
	        $('#applyBegin').on('change', function(){
	        	var t = _this.formdata.applyBegin;
	        	if(t!=""){
	        		$('#activityBegin').datetimepicker({
			        	format:"Y-m-d H:i",      
					    yearStart:2000,     
					    yearEnd:2050, 
					    onShow:function(ct){
					    	this.setOptions({
				               minDate: t,
				               minTime: false
				            })
					    },
					    step:10
			        });
			        $('#applyEnd').datetimepicker({
			        	format:"Y-m-d H:i",      
					    yearStart:2000,     
					    yearEnd:2050, 
					    onShow:function(ct){
					    	this.setOptions({
				               minDate: t,
				               minTime: false
				            })
					    },
					    step:10
			        });
	        	}
	        });
	        $('#activityBegin').on('change', function(event) {
	        	var t = _this.formdata.activityBegin;
	        	if(t!=""){
	        		$('#applyBegin').datetimepicker({
			        	format:"Y-m-d H:i",      
					    yearStart:2000,     
					    yearEnd:2050, 
					    onShow:function(ct){
					    	this.setOptions({
				               maxDate: t,
				               minTime: false
				            })
					    },
					    step:10
			        });
		        	$('#applyEnd').datetimepicker({
			        	format:"Y-m-d H:i",      
					    yearStart:2000,     
					    yearEnd:2050, 
					    onShow:function(ct){
					    	this.setOptions({
				               maxDate: t,
				               minTime: false,
				            })
					    },
					    step:10
			        });
	        	}
	        });
	        $.datetimepicker.setLocale('ch');
	        //end
	        
	        _this.$http.get('http://172.16.2.21:8080/event/league/queryActivityItem').then(function(response){
	        	var gameList=response.data.object.itemsList;
	        	var content='';
  				for(var i=0;i<gameList.length;i++){
  					content+='<option value="'+gameList[i].id+'">'+gameList[i].name+'</option>';
  				}
  				$('#gameList').append(content);
	        }, function(response){
	        	console.log(22);
	        })

		},
		methods:{
			
			showotherinfo:function(){
				if(this.formdata.allowApply==1){
					if($('#another').is(':checked')){
						$('#otherinfocherk').slideUp();
					}
					else{
						$('#otherinfocherk').slideDown();
					}
				}
			},
			//参与人数控制
			numberChange: function(e){
				if(this.formdata.maxNum==512){
					$('.plus').attr('disabled',true);
				}
		    	if(this.formdata.maxNum>4){
					$('.minus').attr('disabled',false);
				}else{
					$('.minus').attr('disabled',true);
				}
		    },
		    plus: function(e){
    			if(this.formdata.maxNum==""){
    				this.formdata.maxNum=0;
    			}
		        this.formdata.maxNum=parseInt(this.formdata.maxNum)+1;
				$('#number').val(this.formdata.maxNum);
				if(this.formdata.maxNum>0){
					$('.minus').attr('disabled',false);
				}
				if(this.formdata.maxNum==512){
					$('.plus').attr('disabled',true);
				}
		    },
		    minus: function(e){
		        this.formdata.maxNum=parseInt(this.formdata.maxNum)-1;
				$('#number').val(this.formdata.maxNum);	
				if(this.formdata.maxNum<=4){
					$('.minus').attr('disabled',true);
				}else{
					$('.minus').attr('disabled',false);
				}
				$('.plus').attr('disabled',false);	
		    },
		    //end
		    isapply:function(e){
		    	if($('#checkboxThreeInput').is(':checked')){
		    		$('[name="baoming"]').attr('disabled',true);
		    		$('[name="bminfo"]').attr('disabled',true)
		    		$('[name="baoming"]').siblings('.u-c-per').find('span').addClass('col8f');
					$('[name="bminfo"]').siblings('.u-c-ck').addClass('col8f');
					$('#applyBegin').attr('disabled',true);
		    		$('#applyEnd').attr('disabled',true);
		    		$('#signtime').attr('disabled', true);
		    		$('#signtime').parents('.g-c-qd').find('.u-c-ck').addClass('col8f');
		    	}
		    	else{
		    		$('[name="baoming"]').attr('disabled',false);
		    		$('[name="bminfo"]').attr('disabled',false)
		    		$('[name="baoming"]').siblings('.u-c-per').find('span').removeClass('col8f');
		    		$('[name="bminfo"]').siblings('.u-c-ck').removeClass('col8f');
		    		$('#applyBegin').attr('disabled',false);
		    		$('#applyEnd').attr('disabled',false);
		    		$('#signtime').attr('disabled', false);
		    		$('#signtime').parents('.g-c-qd').find('.u-c-ck').removeClass('col8f');
		    	}
		    },
		    signtime:function(){
		    	if($('#signtime').is(':disabled')){
		    		return;
		    	}
		    	else{
		    		if($('#signtime').is(':checked')){
			    		$('[name="needSignMinu"]').attr('disabled',true).addClass('col8f');
			    	}
			    	else{
			    		$('[name="needSignMinu"]').attr('disabled',false).removeClass('col8f');
		    		}
		    	}
		    },
		    slidedown:function(){
		    	$('.m-c-xx').slideDown();
		    },
		    slideup:function(){
		    	$('.m-c-xx').slideUp();
		    },
		    goToSetformat:function(e){
		    	var _this = this;
		    	e.preventDefault();
		    	function errorPlacement(mes,element){
		    		var errorTips=element.parents(".f-c").find('.f-tip');
			    	if(mes!=""){
			    		errorTips.css("display","inline-block").html(mes);	
			    	}else{
			    		errorTips.css("display","none");	
			    	}
		    	}
		    	function formValidate(){
		    		var valid=true,valid2 = true;
		    		$('.g-z [required]').each(function(){
		    			var $this=$(this);
						var value=$this.val(),name=$this.attr('title');	
			    		var message="";
			    		if(value==null||value==''){
							message=name+'不能为空！';
							valid=false;
						}
						errorPlacement(message,$this);		    		
		    		})
		    		if(_this.formdata.itemId==""){
		    			valid=false;
		    			var $this = $('#gameList'),message="必须选择一个比赛项目!";
		    			errorPlacement(message,$this);
		    		}
		    		if(_this.formdata.mode==2 || _this.formdata.mode==3){
		    			$('.m-c-xx [req]').each(function(){
		    				var $this=$(this);
							var value=$this.val(),name=$this.attr('title');	
				    		var message="";
				    		if(value==null||value==''){
								message=name+'不能为空！';
								valid=false;
							}
							errorPlacement(message,$this);	
		    			})
		    		}
		    		if(_this.formdata.maxNum<4 || _this.formdata.maxNum>512){
		    			valid=false;
		    			var $this=$('#personnum'),message="人数/队伍范围必须在4 ~ 512之间!";		
		    			errorPlacement(message,$this);
		    		}
		    		if(_this.formdata.allowApply==1){
		    			if(_this.formdata.nicknameRequired ==0 && _this.formdata.nameRequired ==0 && _this.formdata.wechatRequired ==0 && _this.formdata.telephoneRequired ==0 && _this.formdata.qqRequired ==0 && _this.formdata.idcardRequired ==0 && _this.formdata.otherRequired ==0){
		    				valid2=false;
		    				var $this = $('#gamenickname'),message="至少选择一个需要收集的报名信息!";
		    				errorPlacement(message,$this);
		    			}
		    			else{
		    				if(_this.formdata.otherRequired ==1){
		    					if(_this.formdata.otherDescribe==""){
		    						valid2=false;
		    						var $this = $('#gamenickname'),message="其他报名信息不能为空！";
		    						errorPlacement(message,$this);
		    					}
		    					else{
		    						var $this = $('#gamenickname'),message="";
		    						errorPlacement(message,$this);
		    						valid2=true;
		    					}
		    				}
		    				else{
		    					var $this = $('#gamenickname'),message="";
		    					errorPlacement(message,$this);
		    					valid2=true;
		    				}
		    				
		    			}
		    			if(_this.formdata.applyBegin){
		    				if(_this.formdata.applyEnd){
		    					if(_this.formdata.applyBegin >= _this.formdata.applyEnd){
		    						valid2=false;
		    						var $this = $('#applyBegin'),message="报名开始时间不能晚于报名结束时间!";
		    						errorPlacement(message,$this);
		    					}
		    					else if(_this.formdata.activityBegin!="" && (_this.formdata.applyEnd>= _this.formdata.activityBegin)){
		    						valid2=false;
		    						var $this = $('#activityBegin'),message="赛事开始时间不能早于报名结束时间!";
		    						errorPlacement(message,$this);
		    					}
		    					else{
		    						valid2=true;
		    						var $this = $('#applyBegin'),message="";
		    						errorPlacement(message,$this);
		    					}
		    				}else{
		    					valid2=false;
		    					var $this = $('#applyBegin'),message="报名结束时间不能为空!";
		    					errorPlacement(message,$this);
		    				}
		    			}
		    			else{
		    				if(_this.formdata.applyEnd){
		    					valid2=false;
		    					var $this = $('#applyBegin'),message="报名开始时间不能为空!";
		    					errorPlacement(message,$this);
		    				}
		    				else{
		    					valid2=false;
		    					var $this = $('#applyBegin'),message="报名时间不能为空!";
		    					errorPlacement(message,$this);
		    				}
		    			}
		    		}
		    		if(valid && valid2){
		    			return true;
		    		}
		    	}
		    	if(formValidate()){
		    		var newsobj = _this.formdata;
		    		var jsonInfo = JSON.stringify(newsobj);
	  				var parm = new Object();
	  				parm.jsonInfo = jsonInfo;
		    		_this.$http.post('http://172.16.2.21:8080/event/saveBaseInfo',parm).then(function(response){	
		    			console.log("成功");
		    		}, function(response){
		    			console.log(22);
		    		})
		    	}
		    }
		},
		events:{
			
		}
	}
</script>