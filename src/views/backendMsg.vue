<template>
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
				<img v-bind:src="'http://img.wangyuhudong.com/'+formdata.poster" v-if="formdata.poster">
				<div class="g-q-ptr" v-bind:click="isPublish? selectPic : ''">
					<span class="icon-uniE62B"></span>
					<p>编辑、更改赛事海报</p>
				</div>
			</div>
			<div class="m-c-info saveinfo">
				<div class="f-c">
					<p class="g-c-l">赛事名称<span class="colfdb f-tip"></span></p>
					<input type="text" class="u-c-ipt" name="matchname" placeholder="请输入赛事名称" style="width:480px;" v-model="formdata.name" required="">
				</div>
				<div class="f-c">
					<p class="g-c-l mt40">主办方</p>
					<div class="g-c-zbf">
						<input type="radio" id="personal" class="regular-radio" checked="checked" />
						<label for="personal"></label>
						<label for="personal" class="u-c-per">
							<span class="u-c-headimg">
								<img v-bind:src="'http://img.wangyuhudong.com/'+roundlist.icon" v-if="roundlist.icon">
							</span>
							<span class="f-fl">
								{{roundlist.nickname}}
							</span>
						</label>
					</div>
				</div>
				<div class="f-c">
					<p class="g-c-l mt40">比赛项目<span class="colfdb f-tip"></span></p>
					<select id="gameList" name="gameItem" class="u-c-slt" v-model="formdata.itemId" required="">
						<option value="0">选择一个竞技项目</option>
					</select>
				</div>
				<div class="f-c">
					<p class="g-c-l mt40">赛事模式</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="online" name="matchitem" class="regular-radio" v-bind:checked="formdata.mode==1" value="1" v-model="formdata.mode"/>
							<label for="online"></label>
							<label for="online" class="u-c-per">		
								<span class="f-fl">
									纯线上赛事
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="offline" name="matchitem" class="regular-radio" v-bind:checked="formdata.mode==2" value="2" v-model="formdata.mode"/>
							<label for="offline"></label>
							<label for="offline" class="u-c-per">		
								<span class="f-fl">
									纯线下赛事
								</span>
							</label>
						</div>
						<div class="f-fl h36">
							<input type="radio" id="unite" name="matchitem" class="regular-radio" v-bind:checked="formdata.mode==3" value="3" v-model="formdata.mode"/>
							<label for="unite"></label>
							<label for="unite" class="u-c-per">		
								<span class="f-fl">
									线上与线下结合模式
								</span>
							</label>
						</div>
					</div>
					<div v-if="formdata.mode>1" class="f-c">
						<p class="g-c-l mt40">比赛地址<span class="colfdb f-tip"></span></p>
						<input type="text" class="u-c-ipt" name="matchaddress" placeholder="请输入赛事名称" style="width:480px;" v-model="formdata.addreass" required="">
						<p class="g-c-l mt40">具体地址</p>
						<input type="text" class="u-c-ipt" placeholder="请输入赛事名称" style="width:480px;" v-model="formdata.detailAddreass">
					</div>
				</div>
				<div class="f-c">
					<p class="g-c-l mt40">赛事简介</p>
					<div class="editor-box">
						<div id="brief" class="m-editor"></div>
						<div class="editor-mask"></div>
					</div>					
				</div>
				<div class="f-c">
					<p class="g-c-l mt40">赛事奖励</p>
					<div class="editor-box">
						<div id="prizeSetting" class="m-editor"></div>
						<div class="editor-mask"></div>
					</div>
				</div>
				<div class="f-c">
					<p class="g-c-l mt40">赛事规则</p>
					<div class="editor-box">
						<div id="regimeRule" class="m-editor"></div>
						<div class="editor-mask"></div>
					</div>
				</div>
			</div>
			<a href="" class="saveModify" @click="saveInfo">保存修改</a>
		</div>
		<div class="g-wrap">
			<div class="g-z saveapply">
				<div class="m-c-info">
					<div class="f-c">
						<p class="g-c-l">最大参与人数（需要在4-512之间）<span class="colfdb f-tip"></span></p>
						<div class="clearfix">
							<input type="text" id="personnum" class="u-c-ipt f-fl" title="参赛人数" style="width: 200px;" required placeholder="请输入参与人数上限"  v-model="formdata.maxNum" @input="numberChange" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}">
							<div class="button_group">
								<button class="plus" @click="plus"></button>
								<button class="minus" @click="minus"></button>
							</div>
						</div>
					</div>
					<div class="g-c-l mt40 f-re">是否允许用户自主报名
						<div class="checkboxThree f-ab">
					  		<input type="checkbox" id="checkboxThreeInput" name="" class="f-dn" v-model="formdata.allowApply" v-bind:true-value="1" v-bind:false-value="0"/>
						  	<label for="checkboxThreeInput" v-bind:click="isPublish? isapply : ''"></label>
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
								<label for="another" v-bind:click="isPublish ? showotherinfo : ''"></label>
								<label for="another" class="u-c-ck col8f" v-bind:click="isPublish ? showotherinfo : ''">其他</label>
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
				<div class="f-c">
					<div class="m-c-info">
						<div class="f-c">
							<p class="g-c-l">赛事开始时间<span class="colfdb f-tip"></span></p>
							<div style="width: 200px; position:relative;">
								<input type="text" class="u-c-ipt form_datetime" name="activityBegin" title="赛事开始时间" id="activityBegin" placeholder="请输入开赛时间" style="width:200px;" v-model="formdata.activityBegin" required>
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
							<input type="checkbox" id="signtime" class="regular-checkboxs" name="" v-model="formdata.needSign" v-bind:true-value="1" v-bind:false-value="0" v-bind:checked="formdata.needSign==1"/>
							<label for="signtime" @click="signtime"></label><span class="u-c-ck col8f">要求参赛者赛前签到 (仅签到一次)<span class="colfdb">&nbsp&nbsp•&nbsp&nbsp</span>比赛开始前</span>
							<select class="u-c-slt u-c-tslt col8f" name="needSignMinu" v-model="formdata.needSignMinute">
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
				<a href="" class="saveModify" @click="saveApply">保存修改</a>
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
						<p class="g-c-l mt40">采用赛制<span class="colfdb f-tip"></span><span class="f-fr"><span class="icon-uniE625" style="font-size:28px;"></span>查看赛制帮助</span></p>
						<div class="clearfix mb12">
							<div class="f-fl g-c-sz" selected="1">
								<p class="g-c-szt">单败淘汰制</p>
								<div class="g-c-szm">
									<img src="../../static/images/danbai.png">
								</div>
								<div class="g-c-sz-cherk" style="display:block;">
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
						<div class="g-c-szgz" style="display:block;">
							<div class="g-tri-up">
								<div class="g-tri-iup"></div>
							</div>
							<div class="f-fl mr56 g-c-kz-sz">
								<input type="checkbox" id="dbsz" class="regular-checkboxs" name="" v-bind:checked="formdata.needThird==1" v-model=""/>
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
				<a href="" class="saveModify" @click="saveRegime">保存修改</a>
			</div>
		</div>
	</div>
	<div class="m-mask">
		<div class="pic-select">
			<div class="wrap">
				<a href="javascript:void(0);" class="u-btn-close" @click="closePop"></a>
				<div class="picBox">
					<div id="pic"></div>
				</div>	
			</div>			
		</div>
	</div>
</template>
<script>
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
				poster:"",
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
				needSignMinute:"",
				needThird:""
				// sponsorId:""
			}
		}
	},
	components:{
    	backendSidebar
	},
  	ready:function(){
  		var _this=this;
  		_this.formdata.eventId=window.sessionStorage.getItem("eventId");
   		_this.formdata.eventRoundId=window.sessionStorage.getItem("eventRoundId");
   		var eve={};
   		eve.jsonInfo=JSON.stringify({oetInfoId:_this.formdata.eventId,oetRoundId:_this.formdata.eventRoundId});
   		_this.$http.get('event/openOetInfo',eve).then(function(response) {
        	console.log(response);
        	_this.eventlist=response.data.object.event;
        	_this.roundlist=response.data.object.round;
        	_this.isPublish=_this.eventlist.isPublish;

        	_this.formdata.name=_this.eventlist.name;
        	_this.formdata.itemId=_this.eventlist.itemId;
        	_this.formdata.itemServerId=_this.eventlist.itemServerId;
        	_this.formdata.needSignMinute=_this.eventlist.needSignMinute;
        	_this.formdata.poster=_this.eventlist.poster;
        	_this.formdata.maxNum=_this.roundlist.maxNum;
        	_this.formdata.mode=_this.eventlist.mode;
        	_this.formdata.addreass=_this.roundlist.addreass;
        	_this.formdata.detailAddreass=_this.roundlist.detailAddreass;
        	_this.formdata.nicknameRequired=_this.eventlist.nicknameRequired;
        	_this.formdata.nameRequired=_this.eventlist.nameRequired;
        	_this.formdata.idcardRequired=_this.eventlist.idcardRequired;
        	_this.formdata.qqRequired=_this.eventlist.qqRequired;
        	_this.formdata.telephoneRequired=_this.eventlist.telephoneRequired;
        	_this.formdata.otherRequired=_this.eventlist.otherRequired;
        	_this.formdata.otherDescribe=_this.eventlist.otherDescribe;
        	_this.formdata.activityBegin=response.data.object.activityBegin;
        	_this.formdata.allowApply=_this.roundlist.allowApply;
        	_this.formdata.applyType=_this.roundlist.applyType;
        	_this.formdata.applyBegin=response.data.object.applyBegin;
        	_this.formdata.applyEnd=response.data.object.applyEnd;
        	_this.formdata.brief=_this.eventlist.brief;
        	_this.formdata.regimeRule=_this.eventlist.regimeRule;
        	_this.formdata.prizeSetting=_this.eventlist.prizeSetting;
        	_this.formdata.needSign=_this.eventlist.needSign;
        	_this.formdata.needThird=_this.roundlist.needThird;

        	_this.isapply();

        	_this.$nextTick(function(){
        		if(_this.isPublish){
	        		$('input').attr('readonly',true);
	        		$('button').attr('disabled',true);
	        		$('input').attr('disabled',true);
	        		$('select').attr('disabled',true);
	        		$('.editor-mask').show();
	        	}
        	})
        	
        	if(_this.formdata.otherRequired){
				$('#otherinfocherk').show();
			}
        	$('#brief').editable({
				inlineMode: false,
				theme: 'dark', 
				alwaysBlank: true,
				language: "zh_cn",
				placeholder: _this.formdata.brief?'':'请输入赛事简介，不超过500字'
			});

			$('#regimeRule').editable({
				inlineMode: false,
				theme: 'dark', 
				alwaysBlank: true,
				language: "zh_cn",
				placeholder: _this.formdata.regimeRule?'':'请输入赛制规则，不超过1000字'
			});

			$('#prizeSetting').editable({
				inlineMode: false,
				theme: 'dark', 
				alwaysBlank: true,
				language: "zh_cn",
				placeholder: _this.formdata.regimeRule?'':'请输入奖励设置，不超过1000字'
			})
        	$('#brief .froala-element').html(_this.formdata.brief);
        	$('#regimeRule .froala-element').html(_this.formdata.regimeRule);
        	$('#prizeSetting .froala-element').html(_this.formdata.prizeSetting);
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
	        $.datetimepicker.setLocale('ch');
        },function(response) {
            console.log(response);
        });
        var parm={};
   		parm.jsonInfo=JSON.stringify({itemsId:""});
		_this.$http.get('event/league/queryActivityItem',parm).then(function (response) {
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

		// 图片上传
		$('#pic').diyUpload({
			url:'http://wy.oetapi.wangyuhudong.com/file/upload',
			success:function( data ) {
				console.info( data );
				_this.formdata.poster=data.object.src;
				$(".m-mask").hide();
			},
			error:function( err ) {
				console.info( err );	
			},
			buttonText : '选择图片',
			chunked:true,
			// 分片大小
			chunkSize:512 * 1024,
			//最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
			fileNumLimit:1,
			fileSizeLimit:500000 * 1024,
			fileSingleSizeLimit:50000 * 1024
		});
  		
  	},
  	methods:{
  		selectPic: function(e){
	        $('.m-mask').show();
	    },
	    closePop: function(e){
	        $('.m-mask').hide();
	    },
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
	    // 字符串长度
	    strlen:function(str){
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
	 //    cherksz:function(event){
		// 	var _this = $(event.target);
		// 	_this.parents('.g-c-sz').find('.g-c-sz-cherk').toggle();
		// 	$('.g-c-szgz').fadeToggle();
		// },
		// 保存修改
		saveModify:function(value){
			console.log(value);
			var _this=this;
  			var parm={};
	   		parm.jsonInfo=JSON.stringify(value);
    		_this.$http.post('event/saveBaseInfo',parm).then(function(response){
    			var code = response.data.code;
    			if(code==1){
    				layer.msg('保存成功');
    				// window.sessionStorage.setItem("eventRoundId",response.data.object.eventRoundId);
    				// _this.$route.router.go({path: '/quickformat'});
    			}
    			console.log("成功");
    		}, function(response){
    			console.log(22);
    		})
		},
		errorPlacement:function(mes,element){
			var errorTips=element.parents(".f-c").eq(0).find('.f-tip');
	    	if(mes!=""){
	    		errorTips.css("display","inline-block").html(mes);	
	    	}else{
	    		errorTips.css("display","none");	
	    	}
		},
		saveInfo:function(e){
			var _this = this;
			e.preventDefault();
	    	function formValidate(){
	    		var valid=true;
	    		$(".saveinfo [required]").each(function(){
		    		var $this=$(this);
					var value=$this.val(),name=$this.attr('name');	
		    		var message="";
		    		if(name=="matchname"){
						var vl = _this.strlen(value);
						if(value==""){
							valid=false;
				    		message="赛事名称不能为空!";
						}else if((vl<8 && value!="") || vl>52){
							valid = false;
							message="赛事名称必须在4 ~ 26个汉字之间!";
						}
						_this.errorPlacement(message,$this);
		    		}else if(name=="gameItem"){
		    			if(value=="0"){
							valid=false;
				    		message="请选择比赛项目!";
						}
						_this.errorPlacement(message,$this);
		    		}else if(name=="matchaddress" && _this.formdata.mode>1){
		    			var vl = _this.strlen(value);
		    			if(value==""){
							valid=false;
				    		message="比赛地址不能为空!";
						}else if((vl<10 && value!="") || vl>120){
							valid = false;
							message="比赛地址必须在5 ~ 60个汉字之间!";
						}
						_this.errorPlacement(message,$this);
		    		}
		    	});
    			if(!valid){
			    	var top=$('.f-tip').eq(0).offset().top-550;
			    	$("body").scrollTop(top);
			    }
	    		return valid;
	    	}
			if(formValidate()){
				if($('#brief .froala-element').html()!="<p><br></p>"){
		    		_this.formdata.brief=$('#brief .froala-element').html()
		    	}else{
		    		_this.formdata.brief="";
		    	}
		    	if($('#regimeRule .froala-element').html()!="<p><br></p>"){
		    		_this.formdata.regimeRule=$('#regimeRule .froala-element').html()
		    	}else{
		    		_this.formdata.regimeRule="";
		    	}
		    	if($('#prizeSetting .froala-element').html()!="<p><br></p>"){
		    		_this.formdata.prizeSetting=$('#prizeSetting .froala-element').html()
		    	}else{
		    		_this.formdata.prizeSetting="";
		    	}
				var form={
					eventRoundId:_this.formdata.eventRoundId,
					eventId:_this.formdata.eventId,
					maxNum:_this.formdata.maxNum,
					name:_this.formdata.name,
					poster:_this.formdata.poster,
					itemId:_this.formdata.itemId,
					mode:_this.formdata.mode,
					addreass:_this.formdata.addreass,
					detailAddreass:_this.formdata.detailAddreass,
					brief:_this.formdata.brief,
					regimeRule:_this.formdata.regimeRule,
					prizeSetting:_this.formdata.prizeSetting
				}
				_this.saveModify(form);
			}
		},
		saveApply:function(e){
			var _this = this;
			e.preventDefault();
			var nowDate = Date.parse(new Date()); 
			function formValidate(){
	    		var valid=true;
	    // 		$(".saveinfo [required]").each(function(){
		   //  		var $this=$(this);
					// var value=$this.val(),name=$this.attr('name');	
		   //  		var message="";
		    		
		   //  	});
	   			var error="";
    			if(_this.formdata.maxNum==""){
    				valid = false;
    				error="赛事参与人数不能为空！";
    			}
    			else if(_this.formdata.maxNum!="" && (_this.formdata.maxNum<4 || _this.formdata.maxNum>512)){
    				valid = false;
    				error="人数/队伍范围必须在4 ~ 512之间!"
    			}
    			_this.errorPlacement(error,$('#personnum'));
		    	if(_this.formdata.allowApply==1){
	    			var message="";
	    			var $this = $('#gamenickname');
	    			if(!_this.formdata.nicknameRequired && !_this.formdata.nameRequired && !_this.formdata.telephoneRequired && !_this.formdata.qqRequired && !_this.formdata.idcardRequired && !_this.formdata.otherRequired){
	    				valid=false;
	    				message="至少选择一个需要收集的报名信息!";
	    				_this.errorPlacement(message,$this);
	    			}
	    			else{
	    				if(_this.formdata.otherRequired ==1){
	    					if(!_this.formdata.otherDescribe){
	    						valid=false;
	    						message="其他报名信息不能为空！";
	    					}
	    				}
	    				_this.errorPlacement(message,$this);	    				
	    			}
	    			if(!_this.formdata.activityBegin){
	    				valid = false;
	    				message="赛事开始时间不能为空!";
	    				_this.errorPlacement(message,$("#activityBegin"));
	    			}else if(_this.formdata.activityBegin){
	    				var a =  (Date.parse(_this.formdata.activityBegin) - nowDate)/1000;
	    				if(a<3600 && _this.formdata.activityBegin!=""){
		    				valid = false;
		    				message="赛事开始时间至少晚于当前时间1小时!";
		    				_this.errorPlacement(message,$("#activityBegin"));
		    			}else{
		    				message="";
		    				_this.errorPlacement(message,$("#activityBegin"));
		    			}
	    			}
	    			if(_this.formdata.applyBegin){
	    				if(_this.formdata.applyEnd){
	    					if(_this.formdata.applyBegin >= _this.formdata.applyEnd){
	    						valid=false;
	    						var $thiss = $('#applyBegin'),messages="报名开始时间不能晚于报名结束时间!";
	    						_this.errorPlacement(messages,$thiss);
	    					}
	    					else if(_this.formdata.activityBegin!="" && (_this.formdata.applyEnd>= _this.formdata.activityBegin)){
	    						valid=false;
	    						var $thiss = $('#activityBegin'),messages="赛事开始时间不能早于报名结束时间!";
	    						_this.errorPlacement(messages,$thiss);
	    					}
	    					else{
	    						var $thiss = $('#applyBegin'),messages="";
	    						_this.errorPlacement(messages,$thiss);
	    					}
	    				}else{
	    					valid=false;
	    					var $thiss = $('#applyBegin'),messages="报名结束时间不能为空!";
	    					_this.errorPlacement(messages,$thiss);
	    				}
	    			}
	    			else{
	    				if(_this.formdata.applyEnd){
	    					valid=false;
	    					var $thiss = $('#applyBegin'),messages="报名开始时间不能为空!";
	    					_this.errorPlacement(messages,$thiss);
	    				}
	    				else{
	    					valid=false;
	    					var $thiss = $('#applyBegin'),messages="报名时间不能为空!";
	    					_this.errorPlacement(messages,$thiss);
	    				}
	    			}
	    		}
    			if(!valid){
			    	var top=$('.f-tip').eq(0).offset().top-550;
			    	$("body").scrollTop(top);
			    }
	    		return valid;
	    	}
	    	if(formValidate()){
	    		var form={
					eventRoundId:_this.formdata.eventRoundId,
					eventId:_this.formdata.eventId,
					allowApply:_this.formdata.allowApply,
					applyType:_this.formdata.applyType,
					nicknameRequired:_this.formdata.nicknameRequired,
					nameRequired:_this.formdata.nameRequired,
					idcardRequired:_this.formdata.idcardRequired,
					qqRequired:_this.formdata.qqRequired,
					telephoneRequired:_this.formdata.telephoneRequired,
					otherRequired:_this.formdata.otherRequired,
					otherDescribe:_this.formdata.otherDescribe,
					activityBeginStr:_this.formdata.activityBegin,
					applyBeginStr:_this.formdata.applyBegin,
					applyEndStr:_this.formdata.applyEnd,
					needSign:_this.formdata.needSign,
					needSignMinute:_this.formdata.needSignMinute
				}
				_this.saveModify(form);
	    	}
		},
  		saveRegime:function(e){
  			e.preventDefault();
  			var _this=this;
  			if($('#dbsz').is(':checked')){
				_this.formdata.needThird = 1;
			}
			else{
				_this.formdata.needThird = 0;
			}
  			var form={
  				eventRoundId:_this.formdata.eventRoundId,
				eventId:_this.formdata.eventId,
				needThird:_this.formdata.needThird
			}
			_this.saveModify(form);
  		}
  	},

}
</script>