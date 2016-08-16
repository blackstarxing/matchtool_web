<template>
	<backend-head></backend-head>
	<backend-sidebar></backend-sidebar>
	<div class="backLast backend-nav">
		<ul class="backend-tab f-cb" @click="tabTurn">
			<li class="current">信息设置</li>
			<li>报名设置</li>
			<li>赛制设置</li>
		</ul>
	</div>
	<div class="g-bd">
		<div class="g-wrap showItem">
			<!-- <div class="setPoster">
				<div class="g-q-ptr">
					<i class="iconfont iconfont-xj">&#xe60a</i>
					<p>编辑、更改赛事海报</p>
				</div>
			</div> -->
			<div class="setPoster g-q-hb">
				<div class="g-q-ptr">
					<span class="icon-uniE62B"></span>
					<p>编辑、更改赛事海报</p>
				</div>
			</div>
			<div class="m-c-info">
				<p class="g-c-l">赛事名称</p>
				<input type="text" class="u-c-ipt" placeholder="请输入赛事名称" style="width:480px;" v-model="formdata.name">
				<p class="g-c-l mt40">主办方</p>
				<div class="g-c-zbf">
					<input type="radio" id="personal" class="regular-radio" checked="checked" />
					<label for="personal"></label>
					<label for="personal" class="u-c-per">
						<span class="u-c-headimg">
							<img v-bind:src="'http://img.wangyuhudong.com/'+roundlist.icon">
						</span>
						<span class="f-fl">
							{{roundlist.nickname}}
						</span>
					</label>
				</div>
				<p class="g-c-l mt40">比赛项目</p>
				<select id="gameList" class="u-c-slt" v-model="formdata.itemId">
					<option>选择一个竞技项目</option>
				</select>
				<p class="g-c-l mt40">赛事模式</p>
				<div class="g-c-zbf">
				    <div class="f-fl g-c-ms">
						<input type="radio" id="online" name="matchitem" class="regular-radio" checked="checked" value="1" v-model="formdata.mode"/>
						<label for="online"></label>
						<label for="online" class="u-c-per">		
							<span class="f-fl">
								纯线上赛事
							</span>
						</label>
					</div>
					<div class="f-fl g-c-ms">
						<input type="radio" id="offline" name="matchitem" class="regular-radio" value="2" v-model="formdata.mode"/>
						<label for="offline"></label>
						<label for="offline" class="u-c-per">		
							<span class="f-fl">
								纯线下赛事
							</span>
						</label>
					</div>
					<div class="f-fl h36">
						<input type="radio" id="unite" name="matchitem" class="regular-radio" value="3" v-model="formdata.mode"/>
						<label for="unite"></label>
						<label for="unite" class="u-c-per">		
							<span class="f-fl">
								线上与线下结合模式
							</span>
						</label>
					</div>
				</div>
				<div v-if="formdata.mode>1">
					<p class="g-c-l mt40">比赛地址</p>
					<input type="text" class="u-c-ipt" placeholder="请输入赛事名称" style="width:480px;" v-model="">
					<p class="g-c-l mt40">具体地址</p>
					<input type="text" class="u-c-ipt" placeholder="请输入赛事名称" style="width:480px;" v-model="">
				</div>
				
				<p class="g-c-l mt40">赛事简介</p>
				<div id="brief" class="m-editor"></div>
				<p class="g-c-l mt40">赛事奖励</p>
				<div id="prizeSetting" class="m-editor"></div>
				<p class="g-c-l mt40">赛事规则</p>
				<div id="regimeRule" class="m-editor"></div>
			</div>
			<a href="" class="saveModify" @click="nextStep">保存修改</a>
		</div>
		<div class="g-wrap">
			<div class="g-z">
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
							<!-- <div class="f-fl mr56">
								<input type="checkbox" id="wxnumber" class="regular-checkboxs" name="bminfo" v-model="formdata.wechatRequired" v-bind:true-value="1" v-bind:false-value="0" disabled />
								<label for="wxnumber"></label>
								<label for="wxnumber" class="u-c-ck col8f">微信号</label>
							</div> -->
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
				<a href="" class="saveModify" @click="nextStep">保存修改</a>
			</div>
		</div>
		<div class="g-wrap">
			<div class="g-z">
				<div class="m-c-info">
					<p class="g-c-l">赛事类型</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="online" name="matchtype" class="regular-radio" checked="checked" value="1" v-model="formdata.type"/>
							<label for="online"></label>
							<label for="online" class="u-c-per">		
								<span class="f-fl">
									单阶段
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="offline" name="matchtype" class="regular-radio" value="2" v-model="formdata.type" disabled />
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
									<img src="../../static/images/danbai.png" class="mt16">
								</div>
								<div class="g-c-sz-cherk">
									<i class="g-sz-gimg"></i>
								</div>
							</div>
							<div class="f-fr g-c-sz" selected="2">
								<p class="g-c-szt">双败淘汰制</p>
								<div class="g-c-szm">
									<img src="../../static/images/shuanbai.png" class="mt5">
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
									<img src="../../static/images/danbai.png" class="mt16">
								</div>
							</div>
							<div class="f-fr g-c-sz" selected="4">
								<p class="g-c-szt">小组积分制</p>
								<div class="g-c-szm">
									<img src="../../static/images/shuanbai.png" class="mt5">
								</div>
							</div>
						</div>
					</div>
				</div>
				<a href="" class="saveModify" @click="nextStep">保存修改</a>
			</div>
		</div>
	</div>
</template>
<script>
import backendHead from '../components/backendHead.vue'
import backendSidebar from '../components/backendSidebar.vue'
export default {
	data () {
  		return{
			username:"",
			eventlist:"",
			roundlist:"",
			formdata:{
				eventRoundId:"",
				eventId:"",
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
  	ready:function(){
  		var _this=this;
  		_this.formdata.eventId=window.sessionStorage.getItem("eventId");
   		_this.formdata.eventRoundId=window.sessionStorage.getItem("eventRoundId");
   		var eve={};
   		eve.jsonInfo=JSON.stringify({oetInfoId:_this.formdata.eventId,oetRoundId:_this.formdata.eventRoundId});
   		_this.$http.get('oet/event/openOetInfo',eve).then(function(response) {
        	console.log(response);
        	_this.eventlist=response.data.object.event;
        	_this.roundlist=response.data.object.round;

        	_this.formdata.name=_this.eventlist.name;
        	_this.formdata.itemId=_this.eventlist.itemId;
        	_this.formdata.itemServerId=_this.eventlist.itemServerId;
        	_this.formdata.needSignMinu=_this.eventlist.needSignMinute;
        	_this.formdata.poster=_this.eventlist.poster;
        	_this.formdata.maxNum=_this.roundlist.maxNum;
        	_this.formdata.nicknameRequired=_this.eventlist.nicknameRequired;
        	_this.formdata.nameRequired=_this.eventlist.nameRequired;
        	_this.formdata.idcardRequired=_this.eventlist.idcardRequired;
        	_this.formdata.qqRequired=_this.eventlist.qqRequired;
        	_this.formdata.telephoneRequired=_this.roundlist.telephoneRequired;
        	_this.formdata.otherRequired=_this.eventlist.otherRequired;
        	_this.formdata.otherDescribe=_this.roundlist.otherDescribe;
        	_this.formdata.activityBegin=response.data.object.activityBegin;
        	_this.formdata.applyBegin=response.data.object.applyBegin;
        	_this.formdata.applyEnd=response.data.object.applyEnd;
        	_this.formdata.brief=_this.eventlist.brief;
        	_this.formdata.regimeRule=_this.eventlist.regimeRule;
        	_this.formdata.prizeSetting=_this.eventlist.prizeSetting;
        	$('#brief .froala-element').html(_this.formdata.brief);
        	$('#regimeRule .froala-element').html(_this.formdata.regimeRule);
        	$('#prizeSetting .froala-element').html(_this.formdata.prizeSetting);
        },function(response) {
            console.log(response);
        });
        var parm={};
   		parm.jsonInfo=JSON.stringify({itemsId:""});
   			_this.$http.get('oet/event/queryActivityItem',parm).then(function (response) {
  				var gameList=response.data.object.itemsList;
  				var content='';
  				
  				for(var i=0;i<gameList.length;i++){
  					content+='<option value="'+gameList[i].id+'">'+gameList[i].name+'</option>'
  				}
  				$('#gameList').append(content);
  				$("#gameList option").each(function(){
	        		if($(this).val()==_this.formdata.itemId){
	        			$(this).attr("selected",true);
	        		}
	        	});
	        }, function (response) {
	            console.log(22);
	        })
		// $('.backend-tab li').click(function(){
		// 	var that=this;
		// 	var index=$(that).index();
		// 	tabs.removeClass('current');
		// 	items.removeClass('showItem');
		// 	$(that).addClass('current');
		// 	items.eq(index).addClass('showItem');
		// })
  		$('#brief').editable({
			inlineMode: false,
			theme: 'dark', 
			alwaysBlank: true,
			language: "zh_cn",
			placeholder: '请输入赛事简介，不超过500字'
		});

		$('#regimeRule').editable({
			inlineMode: false,
			theme: 'dark', 
			alwaysBlank: true,
			language: "zh_cn",
			placeholder: '请输入赛制规则，不超过1000字'
		});

		$('#prizeSetting').editable({
			inlineMode: false,
			theme: 'dark', 
			alwaysBlank: true,
			language: "zh_cn",
			placeholder: '请输入奖励设置，不超过1000字'
		})
  		
  	},
  	methods:{
  		tabTurn:function(e){
  			var tabs=$('.backend-tab li');
  			var items=$('.g-wrap');
  			var that=e.target;
  			if(e.target.tagName=="LI"){
  				var index=$(that).index();
				tabs.removeClass('current');
				items.removeClass('showItem');
				$(that).addClass('current');
				items.eq(index).addClass('showItem');
  			}			
  		},
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
				_this.formdata.needThird = 0;
			}
			else{
				_this.formdata.needThird = 1;
			}
			if(formValidate()){
				alert('好了')
			}
		},
  		nextStep:function(e){
  			e.preventDefault();
  			var _this=this;
  			var parm={};
	   		parm.jsonInfo=JSON.stringify();
  		}
  	},
  	components:{
        backendHead,
        backendSidebar
  	}
}
</script>