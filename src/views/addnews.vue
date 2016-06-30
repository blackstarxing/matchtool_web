<template>
    <div class="g-mgbg mh1200">
		<div class="g-hd">
			<div class="g-box f-cb">
				<div class="m-logo"><a href=""></a></div>
				<div class="m-login">欢迎，hoo言hoo语<a href="#" class="u-select">个人中心</a>|<a href="#" class="u-exit">退出</a></div>
			</div>
		</div>
		<div class="g-mg-tab">
			<ul class="clearfix">
				<li>
					<img src="../static/images/mg_zl.png">
					<p>赛事总览</p>
				</li>
				<li>
					<img src="../static/images/mg_xs.png">
					<p>参赛选手</p>
				</li>
				<li>
					<img src="../static/images/mg_zx_on.png">
					<p class="on">资讯管理</p>
				</li>
				<li>
					<img src="../static/images/mg_sz.png">
					<p>设置</p>
				</li>
				<li>
					<img src="../static/images/mg_del.png">
					<p>重置/删除</p>
				</li>
			</ul>
		</div>
		<div class="g-mg-reset">
			<div class="g-tp"></div>
			<div class="m-d pb80" style="height:auto;">
				<p class="s-n-title">添加资讯</p>
				<div class="m-addzx">	
					<div class="m-lst">				
						<label for="">标题:</label>
						<input type="text" class="eventname" placeholder="请输入资讯标题">
					</div>
					<div class="m-lst">				
						<label for="">类型:</label>
						<select class="m-n-select">
							<option value="1" selected="selected">资讯</option>
							<option value="2">图集</option>
							<option value="3">视频</option>
						</select>
					</div>
					<div class="m-lst clearfix">				
						<label for="">生效时间:</label>
						<div class="input-append date form_datetime">
						    <input size="16" type="text" value="" placeholder="请选择时间" readonly>
						    <span class="add-on"><i class="icon-th"></i></span>
						</div>
					</div>
					<div class="m-lst">				
						<label for="">创建人:</label>
						<input type="text" class="eventname" placeholder="请输入创建人">
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
							<input type="text" class="eventname" placeholder="请输入资讯来源">
						</div>
						<div class="m-lst" style="margin: 10px 0;">				
							<label for="">详细内容:</label>
							<textarea name="" id="" cols="50" rows="3"  placeholder="请输入比赛赛制规则，不超过200字"></textarea>
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
									<img src="../static/images/mg_del.png" title="移出" class="u-tuji-del">
								</div>
								<p class="l col350 csp" id="addPicture">+添加一张照片</p>
							</div>
						</div>
					</div>
					<div class="m-lst tc m-n-mbtn">
						<button type="button" class="u-del-btn">确定</button>
						<button type="button" class="u-del-btn u-draft-btn">存草稿</button>
					</div>
				</div>
			</div>
			<div class="g-bt"></div>
		</div>
	</div>
	<!-- 视频上传 -->
	<div id="modal-uploader" class="modal fade" style="z-index:9999;">
		<div class="modal-dialog" style="width: 800px;">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>×</span><span class="sr-only">关闭</span>
					</button>
					<h4 class="modal-title">视频上传</h4>
				</div>
				<div class="modal-body">
					<form id="form-upload" class="form-horizontal" action="">
						<div class="form-group">
							<label class="col-md-2 control-label required">视频</label>
							<div class="col-md-8">
								<div class="input-group">
									<input type="file" class="form-control" name="file" accept="video/*" />
									<span class="input-group-btn">
										<button id="check" type="button" class="btn btn-warning">校验</button>
										<button id="upload" type="button" class="btn btn-info">上传</button>
									</span>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
				</div>
			</div>
		</div>
	</div>
	<!-- 操作中提示 -->
	<div id="modal-operating" class="modal fade">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">提示</div>
				<div class="modal-body" style="text-align:center;">
					<div><img src="../static/images/loading.gif" /></div>
					保存中，文件上传可能需要较长时间,请勿中断 ...
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
 
  export default {
    data () {
      return {
    	 
      }
  	},
  	ready:function(){
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
		$('.form_date').datetimepicker({
	        language:  "zh-CN",
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0
	    });
		$('.form_time').datetimepicker({
	        language:  "zh-CN",
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 1,
			minView: 0,
			maxView: 1,
			forceParse: 0
	    });
    	//类型选择
    	$('.m-n-select').change(function(event) {
    		var lx = $(".m-n-select option:selected").val();
    		if(lx==2){
    			$('.m-n-lx').eq(2).removeClass('dn').siblings('.m-n-lx').addClass('dn');
    		}
    		else if(lx==3){
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
							'<img src="../static/images/mg_del.png" title="移出" class="u-tuji-del">'+
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
  	methods:function(){
  		
  	}
}
</script>