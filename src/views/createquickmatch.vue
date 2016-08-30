<template>
	<top-head></top-head>
	<!-- <side-bar></side-bar> -->
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
						<input type="text" name="name" class="u-c-ipt" title="赛事名称" placeholder="请输入赛事名称" style="width:480px;" oninput="onInput.call(this)" v-model="formdata.name" required>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">主办方<span class="colfdb f-tip"><i class="g-c-tip"></i></span></p>
						<div class="g-c-zbf">
							<input type="radio" id="personal" class="regular-radio" checked="checked" value="" />
							<label for="personal"></label>
							<label for="personal" class="u-c-per">
								<span class="u-c-headimg">
									<img src="{{headicon}}">
								</span>
								<span class="f-fl">
									{{nickname}}
								</span>
							</label>
						</div>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">比赛项目<span class="colfdb f-tip"></span></p>
						<select class="u-c-slt" name="itemId" id="gameList" v-model="formdata.itemId" required>
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
							<input type="text" class="u-c-ipt" title="比赛地点" name="matchaddress" placeholder="请输入比赛地点" style="width:480px;" v-model="formdata.addreass" req>
						</div>
						<div class="f-c">
							<p class="g-c-l mt40">具体地址<span class="colfdb f-tip"></span></p>
							<input type="text" class="u-c-ipt" title="具体地址" placeholder="请输入具体地址" style="width:480px;" v-model="formdata.detailAddreass">
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
							<input type="text" id="personnum" name="personnum" class="u-c-ipt f-fl" title="参赛人数" style="width: 200px;" required placeholder="请输入参与人数上限"  v-model="formdata.maxNum" @input="numberChange" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}">
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
							<label for="single" @click="hidezd"></label>
							<label for="single" class="u-c-per" @click="hidezd">		
								<span class="f-fl col8f">
									个人报名
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms f-re">
							<input type="radio" id="team" name="baoming" class="regular-radio" v-model="formdata.applyType" value="2" disabled />
							<label for="team" @click="showzd"></label>
							<label for="team" class="u-c-per" @click="showzd">		
								<span class="f-fl col8f">
									战队报名
								</span>
							</label>
							<div class="g-c-d-zdbm">
								<label>选择战队参赛人数</label>
								<select class="u-c-slt u-c-slt-zdbm" v-model="formdata.teamMemeberNum">
									<option value="2" selected>2</option>
									<option value="3" >3</option>
									<option value="4" >4</option>
									<option value="5" >5</option>
									<option value="6" >6</option>
									<option value="7" >7</option>
									<option value="8" >8</option>
									<option value="9" >9</option>
									<option value="10" >10</option>
									<option value="11" >11</option>
									<option value="12" >12</option>
									<option value="13" >13</option>
									<option value="14" >14</option>
									<option value="15" >15</option>
									<option value="16" >16</option>
									<option value="17" >17</option>
									<option value="18" >18</option>
									<option value="19" >19</option>
									<option value="20" >20</option>
								</select>
							</div>
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
							<input type="text" class="u-c-ipt form_datetime" name="activityBegin" title="赛事开始时间" id="activityBegin" placeholder="请输入开赛时间" style="width:200px;" v-model="formdata.activityBeginStr" required>
							<label for="activityBegin" class="add-on"></label>
						</div>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">报名时间<span class="colfdb f-tip"></span></p>
						<div class="g-c-timeipt">
							<input type="text" class="u-c-ipt form_datetime" id="applyBegin" placeholder="请输入开始时间" style="width:200px;" v-model="formdata.applyBeginStr" disabled>
							<label for="applyBegin" class="add-on"></label>
						</div>
						&nbsp－&nbsp
						<div class="g-c-timeipt">
							<input type="text" class="u-c-ipt form_datetime" id="applyEnd" placeholder="请输入结束时间" style="width:200px;" v-model="formdata.applyEndStr" disabled/>
							<label for="applyEnd" class="add-on"></label>
						</div>
					</div>
					<p class="g-c-l mt40">签到时间</p>
					<div class="g-c-qd">
						<input type="checkbox" id="signtime" class="regular-checkboxs" name="" v-model="formdata.needSign" v-bind:true-value="1" v-bind:false-value="0" disabled/>
						<label for="signtime" @click="signtime"></label><span class="u-c-ck col8f">要求参赛者赛前签到 (仅签到一次)<span class="colfdb">&nbsp&nbsp•&nbsp&nbsp</span>比赛开始前</span>
						<select class="u-c-slt u-c-tslt col8f" name="needSignMinu" v-model="formdata.needSignMinute" disabled>
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
		data () {
			return{
				nickname:"",
				headicon:"",
				formdata:{
					name:"",
					sponsorType:1,
					itemId:"",
					addreass:"",
					detailAddreass:"",
	  				maxNum:"",
	  				mode:"",
	  				allowApply:0,
	  				applyType:"",
	  				nicknameRequired:0,
	  				nameRequired:0,
	  				idcardRequired:0,
	  				qqRequired:0,
	  				telephoneRequired:0,
	  				otherRequired:0,
	  				otherDescribe:"",
	  				activityBeginStr:"",
	  				applyBeginStr:"",
	  				applyEndStr:"",
	  				needSign:0,
	  				needSignMinute:"",
	  				teamMemeberNum:""
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
	        _this.headicon = 'http://img.wangyuhudong.com/'+ window.sessionStorage.getItem("appusericon");
	        _this.nickname = window.sessionStorage.getItem("nickname");
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
	        	var t = _this.formdata.applyBeginStr;
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
	        	var t = _this.formdata.activityBeginStr;
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
	        
	        _this.$http.get('game/list').then(function(response){
	        	var gameList=response.data.object.games;
	        	var content='';
  				for(var i=0;i<gameList.length;i++){			
  					content+='<option value="'+gameList[i].id+'">'+gameList[i].name+'</option>';
  				}
  				$('#gameList').append(content);
	        }, function(response){
	        	console.log(22);
	        })
	        var gl = 0;
	        $(document).scroll(function(){
	        	gl = $(document).scrollTop();
	        	if(gl>=492 && gl<=773){
	        		$('.steps li').eq(1).addClass('current').siblings().removeClass('current');
	        	}else if(gl>773){
	        		$('.steps li').eq(2).addClass('current').siblings().removeClass('current');
	        	}else if(gl<492){
	        		$('.steps li').eq(0).addClass('current').siblings().removeClass('current');
	        	}
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
		    	var a = this.formdata.applyType;
		    	if($('#checkboxThreeInput').is(':checked')){
		    		$('[name="baoming"]').attr('disabled',true);
		    		$('[name="bminfo"]').attr('disabled',true)
		    		$('[name="baoming"]').siblings('.u-c-per').find('span').addClass('col8f');
					$('[name="bminfo"]').siblings('.u-c-ck').addClass('col8f');
					$('#applyBegin').attr('disabled',true);
		    		$('#applyEnd').attr('disabled',true);
		    		$('#signtime').attr('disabled', true);
		    		$('#signtime').parents('.g-c-qd').find('.u-c-ck').addClass('col8f');
		    		$('.g-c-d-zdbm').fadeOut("slow");
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
		    		$('#single').on('click', function(){
		    			$('.g-c-d-zdbm').fadeOut("slow");
		    		})
		    		$('#team').on('click', function(){
		    			$('.g-c-d-zdbm').fadeIn("slow");
		    		})
		    		if(a == 2){
		    			$('.g-c-d-zdbm').fadeIn("slow");
		    		}
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
			// 字符串长度
		    strlens:function(str){
		    	var len = 0;
		        for (var i = 0; i < str.length; i++) {
		            var c = str.charCodeAt(i);
		            //单字节加1 
		            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
		                len++;
		            }
		            else {
		                len += 2;
		            }
		        }
		        return len;
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
		    		var nowDate = new Date(); 
		    		var valid=true,valid2 = true,valid3 = true;
		    		if(_this.formdata.mode==2 || _this.formdata.mode==3){
		    			$('.m-c-xx [req]').each(function(){		
		    				var $this=$(this);
							var value=$this.val(),name=$this.attr('title');	
				    		var message="";
				    		var vl = _this.strlens(value);
				    		if(value==null||value==''){
								message=name+'不能为空！';
								valid=false;
							}else if((vl<10 && value!="") || vl>120){
								valid = false;
								message="比赛地址必须在5 ~ 60个汉字之间!";
							}
							errorPlacement(message,$this);
		    			})
		    		}
		    		else{
		    			valid=true;
		    			var $this = $('.m-c-xx [req]'),message="";
		    			errorPlacement(message,$this);
		    		}
		    		$('.g-z [required]').each(function(index, el) {
		    			var $this=$(this);
		    			var value=$this.val(),name=$this.attr('name');	
			    		var message="";
			    		if(name=="name"){
			    			function strlen(str){
								var len = 0;
						        for (var i = 0; i < str.length; i++) {
						            var c = str.charCodeAt(i);
						            //单字节加1 
						            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
						                len++;
						            }
						            else {
						                len += 2;
						            }
						        }
						        return len;
							}
							var vl = strlen(value);
							if(value==""){
								valid=false;
					    		message="赛事名称不能为空!";
							}else if(vl<8 && value!=""){
								valid = false;
								message="赛事名称必须在4 ~ 26个汉字之间!";
							}
							errorPlacement(message,$this);
			    		}else if(name=="activityBegin"){
			    			var a =  (new Date(value) - nowDate)/1000;
			    			if(value==""){
			    				valid = false;
			    				message="赛事开始时间不能为空!";
			    			}else if(a<3600 && value!=""){
			    				valid = false;
			    				message="赛事开始时间至少晚于当前时间1小时!";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="personnum"){
			    			if(value==""){
			    				valid = false;
			    				message="赛事参与人数不能为空！";
			    			}
			    			else if(value!="" && (_this.formdata.maxNum<4 || _this.formdata.maxNum>512)){
			    				valid = false;
			    				message="人数/队伍范围必须在4 ~ 512之间!"
			    			}
			    			errorPlacement(message,$this);
			    		}
			    	 	else if(name=="itemId"){
			    	 		if(_this.formdata.itemId==""){
				    			valid=false;
				    			message="必须选择一个比赛项目!";
				    		}
				    		errorPlacement(message,$this);
			    	 	}
		    		});

		    		
		    		
		    		// if(_this.formdata.maxNum<4 || _this.formdata.maxNum>512){
		    		// 	valid=false;
		    		// 	var $this=$('#personnum'),message="人数/队伍范围必须在4 ~ 512之间!";		
		    		// 	errorPlacement(message,$this);
		    		// }
		    		if(_this.formdata.allowApply==1){
		    			var message="";
		    			var $this = $('#gamenickname');
		    			if(_this.formdata.nicknameRequired ==0 && _this.formdata.nameRequired ==0 && _this.formdata.telephoneRequired ==0 && _this.formdata.qqRequired ==0 && _this.formdata.idcardRequired ==0 && _this.formdata.otherRequired ==0){
		    				valid3=false;
		    				message="至少选择一个需要收集的报名信息!";
		    				errorPlacement(message,$this);
		    			}
		    			else{
		    				if(_this.formdata.otherRequired ==1){
		    					if(_this.formdata.otherDescribe==""){
		    						valid3=false;
		    						message="其他报名信息不能为空！";
		    					}
		    					
		    					// else{
		    					// 	var $this = $('#gamenickname'),message="";
		    					// 	errorPlacement(message,$this);
		    					// 	valid2=true;
		    					// }
		    				}
		    				errorPlacement(message,$this);
		    				// else{
		    				// 	var $this = $('#gamenickname'),message="";
		    				// 	errorPlacement(message,$this);
		    				// 	valid2=true;
		    				// }
		    				
		    			}
		    			if(_this.formdata.applyBeginStr){
		    				if(_this.formdata.applyEndStr){
		    					if(_this.formdata.applyBeginStr >= _this.formdata.applyEndStr){
		    						valid2=false;
		    						var $thiss = $('#applyBegin'),messages="报名开始时间不能晚于报名结束时间!";
		    						errorPlacement(messages,$thiss);
		    					}
		    					else if(_this.formdata.activityBeginStr!="" && (_this.formdata.applyEndStr>= _this.formdata.activityBeginStr)){
		    						valid2=false;
		    						var $thiss = $('#activityBegin'),messages="赛事开始时间不能早于报名结束时间!";
		    						errorPlacement(messages,$thiss);
		    					}
		    					else{
		    						valid2=true;
		    						var $thiss = $('#applyBegin'),messages="";
		    						errorPlacement(messages,$thiss);
		    					}
		    				}else{
		    					valid2=false;
		    					var $thiss = $('#applyBegin'),messages="报名结束时间不能为空!";
		    					errorPlacement(messages,$thiss);
		    				}
		    			}
		    			else{
		    				if(_this.formdata.applyEndStr){
		    					valid2=false;
		    					var $thiss = $('#applyBegin'),messages="报名开始时间不能为空!";
		    					errorPlacement(messages,$thiss);
		    				}
		    				else{
		    					valid2=false;
		    					var $thiss = $('#applyBegin'),messages="报名时间不能为空!";
		    					errorPlacement(messages,$thiss);
		    				}
		    			}
		    		}
		    		if(valid && valid2 && valid3){
		    			return true;
		    		}else{
		    			$('html,body').animate({ scrollTop: 0 }, 500);
		    		}
		    	}
		    	if(formValidate()){
		    		var newsobj = _this.formdata;
		    		var jsonInfo = JSON.stringify(newsobj);
	  				var parm = new Object();
	  				parm.jsonInfo = jsonInfo;
		    		_this.$http.post('event/saveBaseInfo',parm).then(function(response){
		    			var code = response.data.code;
		    			if(code==-1){
		    				layer.msg('请先登录',{offset:"0px"});
		    			}else if(code==0){
		    				layer.msg(response.data.msg,{offset:"0px"});
		    			}else if(code==1){
		    				window.sessionStorage.setItem("eventRoundId",response.data.object.eventRoundId);
		    				_this.$route.router.go({path: '/quickformat'});
		    			}
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