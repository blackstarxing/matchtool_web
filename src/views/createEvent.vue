<template>
	<top-head></top-head> 
	<div class="g-doc">
		<div class="g-bd">
			<div class="g-tp"></div>
			<div class="g-center f-cb">
				<div class="m-form" id="m-form">
					<h3>创建赛事工具</h3>
					<div class="m-lst">				
						<label for="name">赛事名称：</label>
						<input type="text" class="eventname" name="name" placeholder="请输入比赛名称，不超过32个文字" v-model="formdata.name" required="">
						<div class="tips">
							<div class="attention"></div>
						</div>
					</div>
					<div class="m-lst f-cb">
						<label for="">赛事主办方：</label>
						<div class="organize f-fl">个人：{{username}}</div>
						<div class="sponsor">
							<a href="javascript:void(0);" class="u-select" @click="chooseOrganize">更改</a>
							<ul class="organize_option">
								<li class="selected">个人：{{username}}</li>
								<li class="disabled">组织：暂无</li>
							</ul>
						</div>						
					</div>
					<div class="m-lst f-mb50">
						<label for="">所属游戏：</label>
						<select name="itemId" id="gameList" v-model="formdata.itemId" @change="getServerList" required="">
							<option value="">请选择赛事游戏</option>
						</select>
						<select name="itemServerId" id="serverList" v-model="formdata.itemServerId" required="">
							<option value="">请选择服务器</option>
						</select>
						<div class="tips">
							<div class="attention"></div>
						</div>
					</div>
					<div class="m-lst">
						<label for="">赛事模式：</label>
						<select name="" id="" v-model="formdata.mode">
							<option value="1" selected="">线上赛事</option>
							<option value="2" disabled="">线下赛事</option>
							<option value="3" disabled="">线上海选+线下决赛</option>
						</select>
					</div>
					<div class="m-lst">
						<label for="maxNum">最大参与人数：</label>
						<input type="text" id="number" name="maxNum" placeholder="请输入参与人数上限" v-model="formdata.maxNum" required="" @input="numberChange">
						<div class="button_group">
							<button class="plus" @click="plus"></button>
							<button class="minus" @click="minus" disabled="true"></button>
						</div>	
						<span class="f-fs1">&nbsp;&nbsp;(建议最大参与人数不超过64人)</span>
						<div class="tips">
							<div class="attention"></div>
						</div>
					</div>
					<div class="m-lst">
						<label for="activityBegin">赛事开始时间：</label>
						<div class="input-append date form_datetime">
						    <input size="16" type="text" id="activityBegin" name="activityBegin" value="" placeholder="请选择时间" v-model="formdata.activityBegin" required="">
						    <label for="activityBegin" class="add-on"><i class="icon-th"></i></label>
						</div>
						<div class="tips">
							<div class="attention"></div>
						</div>
					</div>
					<div class="m-lst">
						<label for="">赛事类型：</label>
						<input type="radio" id="radio-1-1" name="radio-1-set" class="regular-radio" value="1" checked v-model="formdata.type"/><label for="radio-1-1"></label><span class="radio_name">单阶段比赛</span>
						<input type="radio" id="radio-1-2" name="radio-1-set" class="regular-radio" value="2" disabled v-model="formdata.type"/><label for="radio-1-2"></label><span class="radio_name">双阶段比赛</span>
						<div class="tips f-lh36">
							双阶段将包含小组赛（目前暂不开放）
						</div>
					</div>
					<div class="m-lst  f-mb50">
						<label for="">采用赛制：</label>
						<select name="" id="" class="f-fl" v-model="formdata.regime">
							<option value="1" selected="">单败淘汰制(SE)</option>
							<option value="2" disabled="">双败淘汰制(DE)</option>
							<option value="3" disabled="">小组内单循环制(RR)</option>
							<option value="4" disabled="">积分循环制[瑞士轮](SS)</option>
						</select>
						<input type="checkbox" id="checkbox-1-1" class="regular-checkboxs f-ml15" value="1" v-model="formdata.needThird"/><label for="checkbox-1-1" class="f-ml15"></label><span class="check_name">决出第三名</span>
						<div class="tips">
							<div class="">单败淘汰制：失败一场即淘汰</div>
							<div>双败淘汰制：失败两场淘汰，比赛中将有败者组</div>
							<a href="#">查看详细帮助文档</a>
						</div>
					</div>
					<div class="m-lst">
						<label for="">是否允许报名：</label>
						<input type="radio" id="radio-2-1" value="1" name="radio-2-set" class="regular-radio" v-model="formdata.allowApply" @click="slideToggle"/><label for="radio-2-1"></label><span class="radio_name">允许报名</span>
						<input type="radio" id="radio-2-2" value="0" name="radio-2-set" class="regular-radio" v-model="formdata.allowApply"@click="slideToggle"/><label for="radio-2-2"></label><span class="radio_name">禁止报名</span>
					</div>
					<div class="m-signup">
						<div class="m-lst">
							<label for="">报名类型：</label>
							<input type="radio" id="radio-3-1" name="radio-3-set" class="regular-radio" value="1" v-model="formdata.applyType"/><label for="radio-3-1"></label><span class="radio_name">个人报名</span>
							<input type="radio" id="radio-3-2" name="radio-3-set" class="regular-radio" value="2" v-model="formdata.applyType"/><label for="radio-3-2"></label><span class="radio_name">战队报名</span>
						</div>
						<div class="m-lst">
							<label for="">报名时间：</label>
							<div class="input-append date form_datetime">
							    <input size="16" type="text" id="applyBegin" value="" name="applyBegin" placeholder="请选择时间" v-model="formdata.applyBegin" required="">
							    <label for="applyBegin" class="add-on"><i class="icon-th"></i></label>
							</div>
							<span class="form-datetime-zhi">-</span>
							<div class="input-append date form_datetime">
							    <input size="16" type="text" id="applyEnd" value="" name="applyEnd" placeholder="请选择时间" v-model="formdata.applyEnd" required="">
							    <label for="applyEnd" class="add-on"><i class="icon-th"></i></label>							</div>
							<div class="tips">
							<div class="attention"></div>
						</div>
						</div>
						<div class="m-lst f-mb50">
							<div class="f-cb">
								<label for="">签到设置：</label>
								<input type="checkbox" id="checkbox-2-1" class="regular-checkboxs f-ml15" v-model="formdata.needSign" @click="signTime"/><label for="checkbox-2-1"></label><span class="check_name">要求参赛者赛前签到 (仅签到一次)</span>
							</div>
							<div class="f-cb sign-minute">								
								比赛开始前<select name="needSignMinu" id="" v-model="formdata.needSignMinu" required="">
									<option value="15" selected="">15</option>
									<option value="30">30</option>
									<option value="60">60</option>
								</select>分钟
							</div>
							<div class="tips">
								<div class="attention"></div>
							</div>
						</div>
					</div>					
					<a href="javascript:void(0);" class="slide slidedown" @click="optional">展开更多赛事信息选项</a>
					<div class="m-option">
						<div class="m-lst f-cb">
							<label for="">海报图：</label>
							<div class="picBox">
								<div id="pic"></div>
							</div>	
							<div class="tips f-lh36">
								允许jpg、png格式，最大2MB
							</div>					
						</div>
						<div class="m-lst">
							<label for="">赛事简介：</label>
							<!-- <textarea name="brief" id="edit" cols="55" rows="5" placeholder="请输入赛事简介，不超过500字" v-model="formdata.brief" required=""></textarea> -->
							<div id="brief" class="m-editor"></div>
						</div>
						<div class="m-lst">
							<label for="">赛制规则：</label>
							<!-- <textarea name="regimeRule" id="" cols="55" rows="5" placeholder="请输入赛制规则，不超过1000字" v-model="formdata.regimeRule" required=""></textarea> -->
							<div id="regimeRule" class="m-editor"></div>
						</div>
						<div class="m-lst f-mb50">
							<label for="">奖金设置：</label>
							<!-- <textarea name="prizeSetting" id="" cols="55" rows="5" placeholder="请输入奖励设置，不超过1000字" v-model="formdata.prizeSetting" required=""></textarea> -->
							<div id="prizeSetting" class="m-editor"></div>
						</div>
						<!-- <div class="m-lst">
							<label for="">种子规则：</label>
							<select name="" id="">
								<option value="">传统种子规则</option>
							</select>
						</div> -->
						<a href="javascript:void(0);" class="slide slideup" @click="optional">收起</a>
					</div>
					<a href="javascript:void(0);" class="u-btn u-btn-next" @click="nextStep">下一步</a>
				</div>
			</div>
			
			<div class="g-bt"></div>
		</div>
	</div>
</template>

<script>
import topNav from '../components/topNav.vue'
import topHead from '../components/topHead.vue'
  	export default {
       	data () {
    		return {
    			username:"",
    			formdata:{
    				name:"",
	    			sponsorType:1,
	    			itemId:"",
	    			itemServerId:"",
	    			mode:"",
	      			maxNum:"",
	      			activityBegin:"",
	      			type:"",
	      			regime:"",
	      			needThird:"",
	      			allowApply:"",
	      			applyType:"",
	      			applyBegin:"",
	      			applyEnd:"",
	      			needSign:"",
	      			needSignMinu:"",
	      			poster:"",
	      			brief:"",
	      			regimeRule:"",
	      			prizeSetting:""
    			}
    		}
  		},
   		ready: function () {
   			var _this=this;
   			_this.username=window.sessionStorage.getItem("username");
   			var parm={};
   			parm.jsonInfo=JSON.stringify({itemsId:""});
   			_this.$http.get('event/queryActivityItem',parm).then(function (response) {
  				var gameList=response.data.object.itemsList;
  				var content='';
  				
  				for(var i=0;i<gameList.length;i++){
  					content+='<option value="'+gameList[i].id+'">'+gameList[i].name+'</option>'
  				}
  				$('#gameList').append(content);
  				// console.log(this.gameList);
	  			
	  			// if(response.data.code){
	  			// 	this.$route.router.go({path: '/homepage', replace: true})
	  			// 	}
	        }, function (response) {
	            console.log(22);
	        }) 

	        $('.form_datetime input').datetimepicker({
	        	format:"Y-m-d H:i",      
			    yearStart:2000,     
			    yearEnd:2050, 
			    minDate:new Date(),
			    step:30
	        });
	        $.datetimepicker.setLocale('ch');

     		function preloadimages(arr){
			    var newimages=[]
			    var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
			    for (var i=0; i<arr.length; i++){
			        newimages[i]=new Image()
			        newimages[i].src=arr[i]
			    }
			}
			preloadimages(['../../static/images/center_bg2.png'])

			// 图片上传
			$('#pic').diyUpload({
				url:'http://wy.oetapi.wangyuhudong.com/file/upload',
				success:function( data ) {
					console.info( data );
					_this.formdata.poster=data.object.src;
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

			$('.m-form').click(function(e){
				if(e.target.className!="select_showbox"){
					$('.select_box').removeClass('focus');
					$('.select_option').hide();
				}	
				if(e.target.className!="u-select change"){
					$('.u-select').removeClass('change');
					$('.organize_option').hide();
				}		
			})

			$('.sponsor li').click(function(e){
				if(e.target.className!='disabled'){
					var value=$(this).text();
					$('.organize').text(value);
					$('.sponsor ul').hide();
					$('.sponsor .u-select').removeClass('change');
				}
				
			});

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
  		methods: {
    		plus: function(e){
    			if(this.formdata.maxNum==""){
    				this.formdata.maxNum=0;
    			}
		        this.formdata.maxNum=parseInt(this.formdata.maxNum)+1;
				$('#number').val(this.formdata.maxNum);
				if(this.formdata.maxNum>0){
					$('.minus').attr('disabled',false);
				}
		    },
		    minus: function(e){
		        this.formdata.maxNum=parseInt(this.formdata.maxNum)-1;
				$('#number').val(this.formdata.maxNum);	
				if(this.formdata.maxNum==0){
					$('.minus').attr('disabled',true);
				}else{
					$('.minus').attr('disabled',false);
				}	
		    },
		    numberChange: function(e){
		    	if(this.formdata.maxNum>0){
					$('.minus').attr('disabled',false);
				}else if(this.formdata.maxNum==0){
					$('.minus').attr('disabled',true);
				}
		    },
		    slideToggle:function(e){
		    	var _this=$(e.target);
		    	if(_this.attr('id')=='radio-2-1'){
	            	$('.m-signup').slideDown();
	            }else{
	            	$('.m-signup').slideUp();
	            }
		    },
		    optional:function(e){
		    	var _this=$(e.target);
		    	if(_this.hasClass('slidedown')){
		    		_this.hide();
					$('.m-option').show();
					$('.g-center').css({'background-image':'url(../static/images/center_bg2.png)'});
		    	}else{
		    		$('.slidedown').show();
					$('.m-option').hide();
					$('.g-center').css({'background-image':'url(../static/images/center_bg1.png)'});
		    	}
		    },
		    signTime:function(e){
		    	var _this=$(e.target);
		    	if(_this.is(':checked')){
	            	$('.sign-minute').show();
	            }else{
	            	$('.sign-minute').hide();
	            }
		    },
		    chooseOrganize:function(e){
		    	var _this=$(e.target);
		    	if(_this.parent().find('.organize_option').is(":visible")){
			        _this.parent().find('.organize_option').hide();
			        _this.removeClass('change');
			    }else{
			        _this.parent().find('.organize_option').show();
			        _this.addClass('change');
			    }
		    },
		    getServerList:function(e){
		    	var _this=this;
		    	var parm={};
	   			parm.jsonInfo=JSON.stringify({itemsId:_this.formdata.itemId});
	   			_this.$http.get('event/queryActivityItem',parm).then(function (response) {
	  				var gameList=response.data.object.itemsServerList;
	  				var content='<option value="">请选择服务器</option>';
	  				
	  				for(var i=0;i<gameList.length;i++){
	  					content+='<option value="'+gameList[i].id+'">'+gameList[i].serverName+'</option>'
	  				}
	  				$('#serverList').html(content);
		        }, function (response) {
		            console.log(22);
		        }) 
		    },
		    nextStep:function(e){
		    	var _this=this;
		    	if(_this.formdata.needThird){
		    		_this.formdata.needThird=1;
		    	}else{
		    		_this.formdata.needThird=0;
		    	}
		    	if(_this.formdata.needSign){
		    		_this.formdata.needSign=1;
		    	}
		    	else{
		    		_this.formdata.needSign=0;
		    	}
		    	if($('#brief .froala-element').html()!="<p><br></p>"){
		    		_this.formdata.brief=$('#brief .froala-element').html()
		    	}
		    	if($('#regimeRule .froala-element').html()!="<p><br></p>"){
		    		_this.formdata.regimeRule=$('#regimeRule .froala-element').html()
		    	}
		    	if($('#prizeSetting .froala-element').html()!="<p><br></p>"){
		    		_this.formdata.prizeSetting=$('#prizeSetting .froala-element').html()
		    	}
			    function errorPlacement(mes,element){
			    	var errorTips=element.parents(".m-lst").find('div.attention');
			    	if(mes!=""){
			    		errorTips.show().html(mes);
			    	}else{
			    		errorTips.hide();
			    	}			    				    	
			    }
			    function formValidate(){
			    	var valid=true;
			    	$("#m-form [required]").each(function(){
			    		var $this=$(this);
						var value=$this.val(),name=$this.attr('name');	
			    		var message="";
			    		if(name=="name"){
			    			if(value==""){
			    				valid=false;
					    		message="赛事名称不能为空";
					    	}else if(value.length>32){
					    		valid=false;
					    		message="赛事名称不能超过32个文字";
					    	}else if(/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/.test(value)){
					    		valid=false;
					    		message="名称不能包含特殊字符";
					    	}
					    	errorPlacement(message,$this);
			    		}else if(name=="itemId"){
			    			if(value==""){
			    				valid=false;
			    				message="请选择赛事游戏";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="itemServerId" && _this.formdata.itemId!=""){
			    			if(value==""){
			    				valid=false;
			    				message="请选择服务器";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="maxNum"){
			    			if(value==""){
			    				valid=false;
					    		message="最大参与人数不能为空";
					    	}else if(value<4){
					    		valid=false;
					    		message="最大参与人数不能小于4人";
					    	}else if(value>64){
					    		valid=false;
					    		message="最大参与人数不能大于64人";
					    	}
					    	errorPlacement(message,$this);
			    		}else if(name=="activityBegin"){
			    			if(value==""){
			    				valid=false;
					    		message="赛事开始时间不能为空";
					    	}
					    	errorPlacement(message,$this);
			    		}else if(name=="applyBegin" && _this.formdata.allowApply==1){
			    			if(_this.formdata.activityBegin!="" && value>_this.formdata.activityBegin){
			    				valid=false;
			    				message="报名开始时间不能晚于赛事开始时间";
			    			}else if(_this.formdata.applyEnd!="" && value!="" && value>_this.formdata.applyEnd){
			    				valid=false;
			    				message="报名开始时间不能晚于报名结束时间";
			    			}else if(value==""){
			    				valid=false;
			    				message="报名开始时间不能为空";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="applyEnd" && _this.formdata.allowApply==1 && _this.formdata.applyBegin!=""){
			    			if(_this.formdata.activityBegin!="" && value>_this.formdata.activityBegin){
			    				valid=false;
			    				message="报名结束时间不能晚于赛事开始时间";
			    			}else if(_this.formdata.applyBegin!="" && value!="" && value<_this.formdata.applyBegin){
			    				valid=false;
			    				message="报名结束时间不能早于报名开始时间";
			    			}else if(value==""){
			    				valid=false;
			    				message="报名结束时间不能为空";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="needSignMinu" && _this.formdata.allowApply==1 && _this.formdata.needSign==1 && _this.formdata.applyBegin!="" && _this.formdata.activityBegin!=""){
			    			var str =_this.formdata.activityBegin,
			    				str2 = _this.formdata.applyBegin,
								date = new Date(str.replace(/-/g,"/")).getTime(),
								date2 = new Date(str2.replace(/-/g,"/")).getTime();
							var time=value*60000;
			    			if(date-time<date2){
			    				valid=false;
			    				message="签到时间不能早于报名开始时间";
			    			}
			    			errorPlacement(message,$this);
			    		}
				    	   
				    });
				    if(!valid){
				    	var top=$('.attention').eq(0).offset().top-250;
				    	$("body").scrollTop(top);
				    }
				    return valid;
			    };
			    var parm={};
	   			parm.jsonInfo=JSON.stringify(_this.formdata);
			    console.log(parm);
			    if(formValidate()){
			    	function power2fs(x) {
					  	// 一句话版本
					  	return (x & ( x - 1)) === 0 ? (x-1).toString(2).length : false;
					}
					// 是否为幂次方
					if(power2fs(_this.formdata.maxNum)){
						window.sessionStorage.setItem("ispower",true);
					}else{
						window.sessionStorage.setItem("ispower",false);
					}
					var n=0;
					while(Math.pow(2,n)<_this.formdata.maxNum){
						n++;
					}
					if(_this.formdata.maxNum>(Math.pow(2,n-1)+Math.pow(2,n-2))){
						window.sessionStorage.setItem("isoverhalf",true);
					}else{
						window.sessionStorage.setItem("isoverhalf",false);
					}
					
			    	_this.$http.post('event/save',parm).then(function (response) {
		  				console.log(parm);
			  			if(response.data.code==1){
			  				this.$route.router.go({path: '/homepage', replace: true})
			  				}
			        }, function (response) {
			            console.log(22);
			        }) 
			    }	    	
		    }
	  	},
       components: {
          topNav,
          topHead
         
  }
  	}
</script>