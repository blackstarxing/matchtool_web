<template>
	<div class="g-doc">
		<div class="g-hd">
			<div class="g-box f-cb">
				<div class="m-logo"><a href=""></a></div>
				<div class="m-login">欢迎，hoo言hoo语<a href="#" class="u-select">个人中心</a>|<a href="#" class="u-exit">退出</a></div>
			</div>
		</div>
		<div class="g-bd">
			<div class="g-tp"></div>
			<div class="g-center f-cb">
				<div class="m-form">
					<h3>创建赛事工具</h3>
					<div class="m-lst">				
						<label for="">赛事名称：</label>
						<input type="text" class="eventname" placeholder="请输入比赛名称，不超过32个文字">
					</div>
					<div class="m-lst">
						<label for="">赛事主办方：</label>
						hoo言hoo语<a href="#" class="u-select">更改</a>
					</div>
					<div class="m-lst f-mb50">
						<label for="">所属游戏：</label>
						<select name="" id="">
							<option value="">请选择赛事游戏</option>
						</select>
					</div>
					<div class="m-lst">
						<label for="">赛事模式：</label>
						<select name="" id="">
							<option value="">线上赛事</option>
							<option value="">线下赛事</option>
							<option value="">线上海选+线下决赛</option>
						</select>
					</div>
					<div class="m-lst">
						<label for="">最大参与人数：</label>
						<input type="text" id="number" placeholder="请输入参与人数上限">
						<div class="button_group">
							<button class="plus" @click="plus"></button>
							<button class="minus" @click="minus" disabled="true"></button>
						</div>	
					</div>
					<div class="m-lst">
						<label for="">赛事开始时间：</label>
						<div class="input-append date form_datetime">
						    <input size="16" type="text" value="" placeholder="请选择时间" readonly>
						    <span class="add-on"><i class="icon-th"></i></span>
						</div>
					</div>
					<div class="m-lst">
						<label for="">赛事类型：</label>
						<input type="radio" id="radio-1-1" name="radio-1-set" class="regular-radio" checked /><label for="radio-1-1"></label><span class="radio_name">单阶段比赛</span>
						<input type="radio" id="radio-1-2" name="radio-1-set" class="regular-radio" disabled /><label for="radio-1-2"></label><span class="radio_name">双阶段比赛</span>
					</div>
					<div class="m-lst  f-mb50">
						<label for="">采用赛制：</label>
						<select name="" id="" class="f-fl">
							<option value="">单败淘汰制(SE)</option>
							<option value="">双败淘汰制(DE)</option>
							<option value="">小组内单循环制(RR)</option>
							<option value="">积分循环制[瑞士轮](SS)</option>
						</select>
						<input type="checkbox" id="checkbox-1-1" class="regular-checkbox f-ml15" /><label for="checkbox-1-1" class="f-ml15"></label><span class="check_name">决出第三名</span>
					</div>
					<div class="m-lst">
						<label for="">是否允许报名：</label>
						<input type="radio" id="radio-2-1" name="radio-2-set" class="regular-radio" @click="slideToggle"/><label for="radio-2-1"></label><span class="radio_name">允许报名</span>
						<input type="radio" id="radio-2-2" name="radio-2-set" class="regular-radio" @click="slideToggle"/><label for="radio-2-2"></label><span class="radio_name">禁止报名</span>
					</div>
					<div class="m-signup">
						<div class="m-lst">
							<label for="">报名类型：</label>
							<input type="radio" id="radio-3-1" name="radio-3-set" class="regular-radio" /><label for="radio-3-1"></label><span class="radio_name">个人报名</span>
							<input type="radio" id="radio-3-2" name="radio-3-set" class="regular-radio" /><label for="radio-3-2"></label><span class="radio_name">战队报名</span>
						</div>
						<div class="m-lst">
							<label for="">报名时间：</label>
							<div class="input-append date form_datetime">
							    <input size="16" type="text" value="" placeholder="请选择时间" readonly>
							    <span class="add-on"><i class="icon-th"></i></span>
							</div>
							<span class="form-datetime-zhi">-</span>
							<div class="input-append date form_datetime">
							    <input size="16" type="text" value="" placeholder="请选择时间" readonly>
							    <span class="add-on"><i class="icon-th"></i></span>
							</div>
						</div>
						<div class="m-lst f-mb50">
							<label for="">签到设置：</label>
							<input type="checkbox" id="checkbox-2-1" class="regular-checkbox f-ml15" /><label for="checkbox-2-1" class="f-ml15"></label><span class="check_name">要求参赛者赛前签到 (仅签到一次)</span>
						</div>
					</div>
					
					<a href="javascript:void(0);" class="slide slidedown" @click="optional">展开更多赛事信息选项</a>
					<div class="m-option">
						<div class="m-lst f-cb">
							<label for="">海报图：</label>
							<div class="picBox">
								<div id="pic"></div>
							</div>						
						</div>
						<div class="m-lst">
							<label for="">赛制规则：</label>
							<textarea name="" id="" cols="55" rows="5" placeholder="请输入比赛赛制规则，不超过200字"></textarea>
						</div>
						<div class="m-lst f-mb50">
							<label for="">奖金设置：</label>
							<textarea name="" id="" cols="55" rows="5" placeholder="请输入比赛赛制规则，不超过200字"></textarea>
						</div>
						<div class="m-lst">
							<label for="">种子规则：</label>
							<select name="" id="">
								<option value="">传统种子规则</option>
							</select>
						</div>
						<a href="javascript:void(0);" class="slide slideup" @click="optional">收起</a>
					</div>
					<a href="javascript:void(0);" class="u-btn u-btn-next">下一步</a>
				</div>
				<div class="m-rules">
					<div class="f-mb10">建议最大参与人数不超过512人</div>
					<div class="attention f-mb70">尚未设置最大参与人数</div>
					<div class="f-mb30">双阶段将包含小组赛（目前暂不开放）</div>
					<div class="">单败淘汰制：失败一场即淘汰</div>
					<div>双败淘汰制：失败两场淘汰，比赛中将有败者组</div>
					<a href="#">查看详细帮助文档</a>
				</div>
			</div>
			
			<div class="g-bt"></div>
		</div>
	</div>
</template>

<script>
  	export default {
       	data () {
    		return {
      			
    		}
  		},
   		ready: function () {
     		function preloadimages(arr){
			    var newimages=[]
			    var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
			    for (var i=0; i<arr.length; i++){
			        newimages[i]=new Image()
			        newimages[i].src=arr[i]
			    }
			}
			preloadimages(['../static/images/center_bg2.png'])

			// 参赛人数控件
			var number=$('#number').val();
			if(number="请输入参与人数上限"){
				number=0;
			}

			$('.form_datetime').datetimepicker({
		        language:  "zh-CN",
		        weekStart: 1,
		        todayBtn:  1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 2,
				forceParse: 0,
		        showMeridian: 1,
		        pickerPosition:'bottom-left'
		    });

			// 图片上传
			$('#pic').diyUpload({
				url:'',
				success:function( data ) {
					console.info( data );
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
				fileSingleSizeLimit:50000 * 1024,
				accept: {}
			});
  		},
  		methods: {
    		plus: function(e){
		        number=parseInt(number+1);
				$('#number').val(number);
				if(number>0){
					$('.minus').attr('disabled',false);
				}
		    }
		    minus: function(e){
		        number=parseInt(number-1);
				$('#number').val(number);	
				if(number==0){
					$('.minus').attr('disabled',true);
				}else{
					$('.minus').attr('disabled',false);
				}	
		    }
		    slideToggle:function(e){
		    	if($(this).attr('id')=='radio-2-1'){
	            	$('.m-signup').slideDown();
	            }else{
	            	$('.m-signup').slideUp();
	            }
		    }
		    optional:function(e){
		    	if($(this).hasClass('slidedown')){
		    		$(this).hide();
					$('.m-option').show();
					$('.g-center').css({'background-image':'url(../static/images/center_bg2.png)'});
		    	}else{
		    		$('.slidedown').show();
					$('.m-option').hide();
					$('.g-center').css({'background-image':'url(../static/images/center_bg1.png)'});
		    	}
		    }
	  	}
  	}
</script>