<template>
		<div class="g-mg-reset">
			<div class="g-tp"></div>
			<div class="m-d pb80" style="height:auto;">
				<p class="s-n-title">添加资讯</p>
				<form id="addinfo" v-for="new_info in new_infos">
				<div class="m-addzx">	
					<div class="m-lst">				
						<label for="">标题:</label>
						<input type="text" class="eventname" placeholder="请输入资讯标题" v-model="new_info.title">
					</div>
					<div class="m-lst">				
						<label for="">类型:</label>
						<select class="m-n-select" v-model="new_info.type">
							<option v-bind:value="1" selected="selected">资讯</option>
							<option v-bind:value="3">图集</option>
							<option v-bind:value="4">视频</option>
						</select>
					</div>
					<div class="m-lst clearfix">				
						<label for="">生效时间:</label>
						<div class="input-append date form_datetime">
						    <input size="16" type="text" id="begintime" value="" placeholder="请选择时间"  v-model="new_info.timerDate" style="cursor:not-allowed;">
						    <label for="begintime" class="add-on"><i class="icon-th"></i></label>
						</div>
					</div>
					<div class="m-lst">				
						<label for="">创建人:</label>
						<input type="text" class="eventname" placeholder="请输入创建人" v-model="new_info.creater">
					</div>
					<div class="m-lst clearfix" style="height:74px;">				
						<label for="" style="margin-top:20px;">缩略图:</label>	
						<div class="picBox m-n-sltpic">
							<div id="pic" class="l mt10"></div>
						</div>
					</div>
					<div class="m-n-lx">
						<div class="m-lst">				
							<label for="">资讯来源:</label>
							<input type="text" class="eventname" placeholder="请输入资讯来源" v-model="new_info.source">
						</div>
						<div class="m-lst" style="margin: 10px 0;">				
							<label for="">详细内容:</label>
							<textarea name="" id="" cols="50" rows="3"  placeholder="请输入比赛赛制规则，不超过200字" v-model="new_info.remark"></textarea>
						</div>
					</div>
					<div class="m-n-lx dn">
						<div class="m-lst">				
							<label for="">关键字:</label>
							<input type="text" class="eventname" placeholder="请输入关键字">
						</div>
						<div class="m-lst clearfix" style="height:80px;">				
							<label for="" style="margin-top:20px;">首图:</label>
							<div class="picBox m-n-firpic">
								<div id="firstpic" class="l mt10"></div>
							</div>
						</div>
						<div class="m-lst">				
							<label for="">视频地址:</label>
							<input type="text" name="videoUrlUpload" placeholder="点击上传视频" onclick="$('#modal-uploader').modal('show');$fileForm.find('[name=\'file\']').val('').change()" wy-required="视频地址" readonly />
								<a id="a-videoUrl" href="" target="_blank"></a> 
						</div>
					</div>
					<div class="m-n-lx dn"> 
						<div class="m-lst">				
							<label for="">资讯来源:</label>
							<input type="text" class="eventname" placeholder="请输入资讯来源">
						</div>
						<div class="m-lst clearfix">				
							<label for="" class="l">图集:</label>
							<div class="l" style="width: 320px;" id="tujidiv">
								<div class="tuji clearfix l">
								  	<div class="tujinei">
										<div id="tuji" class="l mt10 m-tuji"></div>
									</div>
									<textarea placeholder="图片描述" class="u-n-ttr"></textarea>
									<img src="../../static/images/mg_del.png" title="移出" class="u-tuji-del">
								</div>
								<p class="l col350 csp" id="addPicture">+添加一张照片</p>
							</div>
						</div>
					</div>
					<div class="m-lst tc m-n-mbtn">
						<button type="button" class="u-del-btn" @click="savetrue">确定</button>
						<button type="button" class="u-del-btn u-draft-btn" @click="savedraft">存草稿</button>
					</div>
				</div>
				</form>
			</div>
			<div class="g-bt"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
 
  export default {
    data () {
	    var new_info={
	    	title:'',
	    	type:'',
	    	timerDate:'',
	    	creater:'',
	    	icon:'',
	    	source:'',
	    	remark:'',
	    	imgs:[],
	    	keyword:'',
	    	cover:'',
	    	videoUrl:''
	    }
        return {
    	 	new_infos:[new_info]
        }
  	},
  	ready:function(){
  		//日历控件
  		$('#begintime').datetimepicker({
	        	format:"Y-m-d",      
			    yearStart:2000,     
			    yearEnd:2050, 
			    step:30,
			    timepicker:false
	        });
       	$.datetimepicker.setLocale('ch');
    	//类型选择
    	$('.m-n-select').change(function(event) {
    		var lx = $(".m-n-select option:selected").val();
    		if(lx==3){
    			$('.m-n-lx').eq(2).removeClass('dn').siblings('.m-n-lx').addClass('dn');
    		}
    		else if(lx==4){
				$('.m-n-lx').eq(1).removeClass('dn').siblings('.m-n-lx').addClass('dn');
    		}
    		else if(lx==1){
				$('.m-n-lx').eq(0).removeClass('dn').siblings('.m-n-lx').addClass('dn');
    		}
    	});
    	// 图片上传
		$('#pic, #firstpic,#tuji').each(function(index, el) {
			$(this).diyUpload({
				url:'server/fileupload.php',
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
		});
		var indexImg = 1;
		$('#addPicture').on('click', function(){
			var tuJiId = 'tuji' + indexImg;
			var tuJiDiv = '<div class="tuji clearfix l">'+
						  	'<div class="tujinei">'+
								'<div id="'+tuJiId+'" class="l mt10 m-tuji"></div>'+
							'</div>'+
							'<textarea placeholder="图片描述" class="u-n-ttr"></textarea>'+
							'<img src="../../static/images/mg_del.png" title="移出" class="u-tuji-del">'+
						  '</div>';
		    $('#addPicture').before(tuJiDiv);
		    setTimeout(function(){
	    		$('#'+tuJiId).diyUpload({
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
	    		})
		    },100);
		    indexImg ++; 
		    $('.tuji').each(function(index, el) {
				$(this).hover(function() {
				   	var tuJiLen = $('.tuji').length;
				   	if(tuJiLen!=1){
						$(this).find('.u-tuji-del').show();
						$(this).find('.u-tuji-del').on('click', function(){
							$(this).parent('.tuji').remove();
						})
					}
				}, function() {
					$(this).find('.u-tuji-del').hide();
				});	
			});
		});
  	},
  	methods:{
  		savedraft:function(event){
  			this.$http.post('event/information/save?eventId=1', this.new_infos[0]).then(function(successResponse){
  				var code = successResponse.data.code;
  				console.log(code);
  			}, function(errorResponse){
  				console.log("通讯错误")
  			})
  		},
  		savetrue:function(event){

  		}
  	}
}
</script>