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
					<p class="g-c-l">赛事名称</p>
					<input type="text" class="u-c-ipt" placeholder="请输入赛事名称" style="width:480px;" oninput="onInput.call(this)">
					<p class="g-c-l mt40">主办方</p>
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
					<p class="g-c-l mt40">比赛项目</p>
					<select class="u-c-slt">
						<option>选择一个竞技项目</option>
						<option>英雄联盟</option>
						<option>星际争霸</option>
						<option>炉石传说</option>
						<option>自由篮球</option>
					</select>
					<p class="g-c-l mt40">赛事模式</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="online" name="matchitem" class="regular-radio" checked="checked" value="1" />
							<label for="online"></label>
							<label for="online" class="u-c-per">		
								<span class="f-fl">
									纯线上赛事
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="offline" name="matchitem" class="regular-radio" value="2" />
							<label for="offline"></label>
							<label for="offline" class="u-c-per">		
								<span class="f-fl">
									纯线下赛事
								</span>
							</label>
						</div>
						<div class="f-fl h36">
							<input type="radio" id="unite" name="matchitem" class="regular-radio" value="3" />
							<label for="unite"></label>
							<label for="unite" class="u-c-per">		
								<span class="f-fl">
									线上与线下结合模式
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<p class="m-c-tit">设置选手参赛方式</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<p class="g-c-l">最大参与人数（需要在4-512之间）</p>
					<div class="clearfix">
						<input type="text" class="u-c-ipt f-fl" style="width: 200px;" placeholder="请输入参与人数上限"  v-model="formdata.maxNum" @input="numberChange" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}">
						<div class="button_group">
							<button class="plus" @click="plus"></button>
							<button class="minus" @click="minus" disabled="true"></button>
						</div>
					</div>
					<div class="g-c-l mt40 f-re">是否允许用户自主报名
						<div class="checkboxThree f-ab">
					  		<input type="checkbox" value="1" id="checkboxThreeInput" name="" class="f-dn" />
						  	<label for="checkboxThreeInput" @click="isapply"></label>
					  	</div>
					</div>
					<p class="g-c-l mt40 f-re">
						报名方式	
					</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="single" name="baoming" class="regular-radio" checked="checked" value="" disabled />
							<label for="single"></label>
							<label for="single" class="u-c-per">		
								<span class="f-fl col8f">
									个人报名
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="team" name="baoming" class="regular-radio" value="" disabled />
							<label for="team"></label>
							<label for="team" class="u-c-per">		
								<span class="f-fl col8f">
									战队报名
								</span>
							</label>
						</div>
					</div>
					<p class="g-c-l mt40">设置需要收集的报名信息（多选）</p>
					<div class="clearfix">
						<div class="f-fl mr56 mb6">
							<input type="checkbox" id="gamenickname" class="regular-checkboxs" name="bminfo" disabled />
							<label for="gamenickname"></label>
							<label for="gamenickname" class="u-c-ck col8f">游戏昵称</label>
						</div>
						<div class="f-fl mr56 mb6">
							<input type="checkbox" id="truename" class="regular-checkboxs" name="bminfo" disabled />
							<label for="truename"></label>
							<label for="truename" class="u-c-ck col8f">真实姓名</label>
						</div>
						<div class="f-fl mr56 mb6">
							<input type="checkbox" id="idcard" class="regular-checkboxs" name="bminfo" disabled />
							<label for="idcard"></label>
							<label for="idcard" class="u-c-ck col8f">有效身份证号</label>
						</div>
						<div class="f-fl mr56">
							<input type="checkbox" id="qqnumber" class="regular-checkboxs" name="bminfo" disabled />
							<label for="qqnumber"></label>
							<label for="qqnumber" class="u-c-ck col8f">QQ号</label>
						</div>
						<div class="f-fl mr56">
							<input type="checkbox" id="wxnumber" class="regular-checkboxs" name="bminfo" disabled />
							<label for="wxnumber"></label>
							<label for="wxnumber" class="u-c-ck col8f">微信号</label>
						</div>
						<div class="f-fl mr56">
							<input type="checkbox" id="telephone" class="regular-checkboxs" name="bminfo" disabled />
							<label for="telephone"></label>
							<label for="telephone" class="u-c-ck col8f">手机号</label>
						</div>
						<div class="f-fl mr56">
							<input type="checkbox" id="another" class="regular-checkboxs" name="bminfo" disabled />
							<label for="another"></label>
							<label for="another" class="u-c-ck col8f">其他</label>
						</div>
					</div>
				</div>
			</div>
			<p class="m-c-tit">设置赛事相关时间节点</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<p class="g-c-l">赛事开始时间</p>
					<div style="width: 200px; position:relative;">
						<input type="text" class="u-c-ipt form_datetime" id="activityBegin" placeholder="请输入开赛时间" style="width:200px;">
						<label for="activityBegin" class="add-on"></label>
					</div>
					<p class="g-c-l mt40">报名时间</p>
					<div class="g-c-timeipt">
						<input type="text" class="u-c-ipt form_datetime" id="applyBegin" placeholder="请输入开始时间" style="width:200px;">
						<label for="applyBegin" class="add-on"></label>
					</div>
					&nbsp－&nbsp
					<div class="g-c-timeipt">
						<input type="text" class="u-c-ipt form_datetime" id="applyEnd" placeholder="请输入结束时间" style="width:200px;">
						<label for="applyEnd" class="add-on"></label>
					</div>
					<p class="g-c-l mt40">签到时间</p>
					<div class="g-c-qd">
						<input type="checkbox" id="signtime" class="regular-checkboxs" name="" />
						<label for="signtime" @click="signtime"></label><span class="u-c-ck">要求参赛者赛前签到 (仅签到一次)<span class="colfdb">&nbsp&nbsp•&nbsp&nbsp</span>比赛开始前</span>
						<select class="u-c-slt u-c-tslt col8f" name="needSignMinu" disabled>
							<option value="10">10</option>
							<option value="15">15</option>
							<option value="20">20</option>
							<option value="25">25</option>
							<option value="30">30</option>
							<option value="35">35</option>
							<option value="40">40</option>
							<option value="45">45</option>
							<option value="50">50</option>
							<option value="55">55</option>
							<option value="60">60</option>
						</select>
						<span class="u-c-ck">分钟</span>
					</div>
				</div>
			</div>
			<div class="confirmBtn mb120">
				<a href="" class="nextBtn"><i></i>确认，进入赛制设置</a>
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
				formdata:{
    				maxNum:""
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
			$('.form_datetime').datetimepicker({
	        	format:"Y-m-d H:i",      
			    yearStart:2000,     
			    yearEnd:2050, 
			    minDate:new Date(),
			    step:30
	        });
	        $.datetimepicker.setLocale('ch');
		},
		methods:{
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
		    	}
		    	else{
		    		$('[name="baoming"]').attr('disabled',false);
		    		$('[name="bminfo"]').attr('disabled',false)
		    		$('[name="baoming"]').siblings('.u-c-per').find('span').removeClass('col8f');
		    		$('[name="bminfo"]').siblings('.u-c-ck').removeClass('col8f');
		    	}
		    },
		    signtime:function(){
		    	if($('#signtime').is(':checked')){
		    		$('[name="needSignMinu"]').attr('disabled',true).addClass('col8f');
		    	}
		    	else{
		    		$('[name="needSignMinu"]').attr('disabled',false).removeClass('col8f');
		    	}
		    }
		},
		events:{
			
		}
	}
</script>