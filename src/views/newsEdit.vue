<template>
		<top-nav></top-nav> 
		<div class="g-mg-reset">
			<div class="g-tp"></div>
			<div class="m-d pb80" style="height:auto;">
				<p class="s-n-title">编辑资讯</p>
				<form id="addinfo" v-for="new_info in new_infos">
				<div class="m-addzx">	
					<div class="m-lst">				
						<label for="">标题:</label>
						<input type="text" class="eventname" placeholder="请输入资讯标题" value="{{new_info.title}}" title="标题" maxlength="15"  v-model="new_info.title" required>
						<div class="tips">
							<div class="attention"></div>
						</div>
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
						    <input size="16" type="text" id="begintime" value="{{new_info.timerDate}}" placeholder="请选择时间" title="生效时间"  v-model="new_info.timerDate" style="cursor:not-allowed;" required>
						    <label for="begintime" class="add-on"><i class="icon-th"></i></label>
						</div>
						<div class="tips">
							<div class="attention"></div>
						</div>
					</div>
					<div class="m-lst">				
						<label for="">创建人:</label>
						<input type="text" class="eventname" value="{{new_info.creater}}" placeholder="请输入创建人" title="创建人"  maxlength="10" v-model="new_info.creater" required>
						<div class="tips">
							<div class="attention"></div>
						</div>
					</div>
					<div class="m-lst clearfix" style="height:74px;">				
						<label for="" style="margin-top:20px;">缩略图:</label>	
						<div class="picBox m-n-sltpic">
							<div id="pic" class="l mt10"></div>
						</div>
						<div class="tips">
							<div class="attention"></div>
						</div>
						<div class="previewPic previewPic-slt">
							<img v-bind:src="'http://img.wangyuhudong.com'+new_info.icon" alt="">
						</div>
					</div>
					<div class="m-n-lx">
						<div class="m-lst">				
							<label for="">资讯来源:</label>
							<input type="text" class="eventname" value="{{new_info.source}}" placeholder="请输入资讯来源" title="资讯来源" maxlength="10" v-model="new_info.source" twsource>
							<div class="tips">
								<div class="attention"></div>
							</div>
						</div>
						<div class="m-lst" style="margin: 10px 0;">				
							<label for="">详细内容:</label>
							<textarea name="" id="" cols="50" rows="3"  title="详细内容" value="{{new_info.remark}}" placeholder="请输入比赛赛制规则，不超过200字" v-model="new_info.remark" twremark></textarea>
							<div class="tips">
								<div class="attention"></div>
							</div>
						</div>
					</div>
					<div class="m-n-lx dn">
						<div class="m-lst">				
							<label for="">关键字:</label>
							<input type="text" class="eventname" placeholder="请输入关键字" maxlength="15" title="关键字" v-model="new_info.keyword" spkeyword value="{{new_info.keyword}}">
							<div class="tips">
								<div class="attention"></div>
							</div>
						</div>
						<div class="m-lst clearfix" style="height:80px;">				
							<label for="" style="margin-top:20px;">首图:</label>
							<div class="picBox m-n-sltpic">
								<div id="firstpic" class="l mt10"></div>
							</div>
							<div class="tips">
								<div class="attention"></div>
							</div>
							<div class="previewPic previewPic-slt">
								<img v-bind:src="'http://img.wangyuhudong.com'+new_info.cover" alt="">
							</div>
						</div>
						<div class="m-lst">				
							<label for="">视频地址:</label>
							<input type="text" placeholder="点击上传视频" name="videoUrlUpload" wy-required="视频地址" v-model="new_info.videoUrl" @click="openvideolay" spurl readonly value="{{new_info.videoUrl}}"/>
							<div class="tips">
								<div class="attention"></div>
							</div>
						</div>
					</div>
					<div class="m-n-lx dn"> 
						<div class="m-lst">				
							<label for="">资讯来源:</label>
							<input type="text" class="eventname" placeholder="请输入资讯来源" maxlength="10" v-model="new_info.source" tjsource>
							<div class="tips">
								<div class="attention"></div>
							</div>
						</div>
						<div class="clearfix" style="min-height:36px;line-height:36px;">				
							<label for="" class="l" style="margin-top:8px;width:103px;font-weight:normal;display:block; text-align:right;float:left;margin-right:15px;">图集:</label>
							<div class="l" style="width: 320px;" id="tujidiv">
								<div class="tuji clearfix l m-lst" v-for="img in new_info.imgs">
								  	<div class="tujinei ">
										<div id="tuji{{$index}}" class="l mt10 m-tuji"></div>
										<input type="hidden" value="{{img.img}}">
									</div>
									<textarea placeholder="图片描述" class="u-n-ttr">{{img.remark}}</textarea>
									<img src="../../static/images/mg_del.png" title="移出" class="u-tuji-del" @click="deleteimg" indexs="{{$index}}">
									<div class="tips">
										<div class="attention"></div>
									</div>
									<div class="previewPic previewPic-slt previewPic-tuji">
										<img v-bind:src="'http://img.wangyuhudong.com'+img.img" alt="">
									</div>
								</div>
								<p class="l col350 csp" id="addPicture" @click="addPicture">+添加一张照片</p>
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
   import topNav from '../components/topNav.vue'
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
	    	videoUrl:'',
	    	eventId:'',
	    	isPublished:'',
	    	id:''
	    }
        return {
        	delImgIds:'',
        	oldVideoUrl:'',
    	 	new_infos:[new_info]
        }
  	},
  	components: {
      topNav
         
    },
  	ready:function(){
  		var _this= this;
  		var obj = this.new_infos[0];
  		obj.eventId=window.sessionStorage.getItem("eventid");
		obj.id=window.sessionStorage.getItem("newsId");
		_this.$http.get('http://wy.oetapi.wangyuhudong.com/event/information/detail?id='+obj.id).then(function(response){
			var code = response.data.code;
			if(code==-1){
		    	alert("参数错误");
			}
			else if(code==-2){
				alert("找不到资讯");
			}
			else{
				obj.title = response.data.object.information.title;
				obj.type = response.data.object.information.type;
				obj.timerDate = response.data.object.information.timerDate;
				obj.creater = response.data.object.information.creater;
				obj.icon = response.data.object.information.icon;
				obj.source = response.data.object.information.source;
				obj.remark = response.data.object.information.remark;
				obj.cover = response.data.object.information.cover;
				obj.keyword = response.data.object.information.keyword;
				obj.videoUrl = response.data.object.information.videoUrl;
				_this.oldVideoUrl = response.data.object.information.videoUrl;
				obj.imgs = response.data.object.information.imgs;
				$(".m-n-select option").each(function(){
	        		if($(this).val()==obj.type){
	        			$(this).attr("selected",true);
	        			if(obj.type==1){
							$('.m-n-lx').eq(0).removeClass('dn').siblings('.m-n-lx').addClass('dn');
	        			}
	        			else if(obj.type==4){
	        				$('.m-n-lx').eq(1).removeClass('dn').siblings('.m-n-lx').addClass('dn');
	        			}
	        			else if(obj.type==3){
	        				$('.m-n-lx').eq(2).removeClass('dn').siblings('.m-n-lx').addClass('dn');
	        			}
	        		}
	        	});
	        	_this.$nextTick(function(){
	        		$('.tuji').each(function(index, el) {
	        			$(this).find('.m-tuji').diyUpload({
	        				url:'http://wy.oetapi.wangyuhudong.com/file/upload',
							success:function( data ) {
								console.info( data );
									 obj.imgs[index].img=data.object.src;
									 $('#tuji'+index).siblings('input').val(data.object.src);
								// for(var i =0;i<obj.imgs.length;i++){
								// 	var a = obj.imgs[i].id;
								// 	if(a==imgid){
								// 		obj.imgs[i].img=data.object.src;
								// 		$('#tuji'+imgid).siblings('input').val(data.object.src);
								// 	}
								// }
								
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
	        		});
	        		//编辑图集图片
			    // 	 for(var i =0;i<obj.imgs.length;i++){
			    // 	   // var imgid = obj.imgs[i].id;
			    // 		$('#tuji'+i).diyUpload({
							// url:'http://192.168.30.62:8080/file/upload',
							// success:function( data ) {
							// 	console.info( data );
							// 		 obj.imgs[i].img=data.object.src;
							// 		 $('#tuji'+i).siblings('input').val(data.object.src);
							// 	// for(var i =0;i<obj.imgs.length;i++){
							// 	// 	var a = obj.imgs[i].id;
							// 	// 	if(a==imgid){
							// 	// 		obj.imgs[i].img=data.object.src;
							// 	// 		$('#tuji'+imgid).siblings('input').val(data.object.src);
							// 	// 	}
							// 	// }
								
							// },
							// error:function( err ) {
							// 	console.info( err );	
							// },
							// buttonText : '选择图片',	
							// chunked:true,
							// // 分片大小
							// chunkSize:512 * 1024,
							// //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
							// fileNumLimit:1,
							// fileSizeLimit:500000 * 1024,
							// fileSingleSizeLimit:50000 * 1024,
							// accept: {}
			    // 		});
			    // 	}
			    	$('.tuji').each(function(index, el) {
						$(this).hover(function() {
						   	var tuJiLen = $('.tuji').length;
						   	// var a = index;
						   	if(tuJiLen!=1){
								$(this).find('.u-tuji-del').show();
								// $(this).find('.u-tuji-del').off('click');
								// $(this).find('.u-tuji-del').on('click', function(){
								// 	var objImgs = obj.imgs[index];
								// 	var thisrem = '';
								// 	if(objImgs && objImgs.length > 0) {
								// 		thisrem = obj.imgs[index].img;
								// 	}
								// 	if(thisrem!=''){
								// 		obj.imgs.splice(index,1);	
								// 		$(this).parent('.tuji').remove();
								// 	}
								// 	else{
								// 		$(this).parent('.tuji').remove();
								// 	}
								// })
							}
						}, function() {
							$(this).find('.u-tuji-del').hide();
						});	
					});
	        	});
		    	
			}
		}, function(response){
			console.log(response);
		})
  		//日历控件
  		$('#begintime').datetimepicker({
	        	format:"Y-m-d H:i:s",   
			    yearStart:2000,     
			    yearEnd:2050, 
			    minDate:new Date(),
			    step:10
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
    	$('#pic').diyUpload({
    		url:'http://wy.oetapi.wangyuhudong.com/file/upload',
			success:function( data ) {
				console.info( data );	
				_this.new_infos[0].icon=data.object.src;

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
    	$('#firstpic').diyUpload({
    		url:'http://wy.oetapi.wangyuhudong.com/file/upload',
			success:function( data ) {
				console.info( data );	
				_this.new_infos[0].cover=data.object.src;
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
   //  	alert($('#tuji18').length);
   //  	$('#tuji18').diyUpload({
   //  		url:'http://192.168.30.62:8080/file/upload',
			// success:function( data ) {
			// 	console.info( data );	
					
			// },
			// error:function( err ) {
			// 	console.info( err );	
			// },
			// buttonText : '选择图片',	
			// chunked:true,
			// // 分片大小
			// chunkSize:512 * 1024,
			// //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
			// fileNumLimit:1,
			// fileSizeLimit:500000 * 1024,
			// fileSingleSizeLimit:50000 * 1024,
			// accept: {}
   //  	});
    	$('#tuji').diyUpload({
    		url:'http://wy.oetapi.wangyuhudong.com/file/upload',
			success:function( data ) {
				console.info( data );	
				var imgobj = new Object();
				imgobj.img = data.object.src;
				var m = data.object.src;
				imgobj.remark = '';
				_this.new_infos[0].imgs.push(imgobj);
				$('#tuji').siblings('input[type="hidden"]').val(m);
				$('.tuji').find('.attention').hide();
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
		// var indexImg = 1;
		// $('#addPicture').on('click', function(){
			
			// var tuJiDiv = '<div class="tuji clearfix l">'+
			// 			  	'<div class="tujinei">'+
			// 					'<div id="'+tuJiId+'" class="l mt10 m-tuji"></div>'+
			// 					'<input type="hidden" value="">'+
			// 				'</div>'+	
			// 				'<textarea placeholder="图片描述" class="u-n-ttr"></textarea>'+
			// 				'<img src="../../static/images/mg_del.png" title="移出" class="u-tuji-del">'+
			// 				'<div class="tips">'+
			// 				   '<div class="attention"></div>'+
			// 				'</div>'+
			// 			  '</div>';
		 //    $('#addPicture').before(tuJiDiv);
		   //  setTimeout(function(){
	    // 		$('#'+tuJiId).diyUpload({
	    // 			url:'http://192.168.30.62:8080/file/upload',
					// success:function( data ) {
					// 	console.info( data );
					// 	var imgobj = new Object();
					// 	imgobj.img = data.object.src;
					// 	var m = data.object.src;
					// 	imgobj.remark = '';
					// 	_this.new_infos[0].imgs.push(imgobj);
					// 	$('#'+tuJiId).siblings('input[type="hidden"]').val(m);
					// 	$('.'+tuJiId).find('.attention').hide();
					// },
					// error:function( err ) {
					// 	console.info( err );	
					// },
					// buttonText : '选择图片',	
					// chunked:true,
					// // 分片大小
					// chunkSize:512 * 1024,
					// //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
					// fileNumLimit:1,
					// fileSizeLimit:500000 * 1024,
					// fileSingleSizeLimit:50000 * 1024,
					// accept: {}
	    // 		})
		   //  },100);
		    // indexImg ++; 
		 //    $('.tuji').each(function(index, el) {
			// 	$(this).hover(function() {
			// 	   	var tuJiLen = $('.tuji').length;
			// 	   	var a = index;
			// 	   	if(tuJiLen!=1){
			// 			$(this).find('.u-tuji-del').show();
			// 			$(this).find('.u-tuji-del').off('click');
			// 			$(this).find('.u-tuji-del').on('click', function(){
			// 				var objImgs = obj.imgs[index];
			// 				var thisrem = '';
			// 				if(objImgs && objImgs.length > 0) {
			// 					thisrem = obj.imgs[index].img;
			// 				}
			// 				if(thisrem!=''){
			// 					obj.imgs.splice(index,1);	
			// 					$(this).parent('.tuji').remove();
			// 				}
			// 				else{
			// 					$(this).parent('.tuji').remove();
			// 				}
			// 			})
			// 		}
			// 	}, function() {
			// 		$(this).find('.u-tuji-del').hide();
			// 	});	
			// });
		// });
  	},
  	methods:{
  		deleteimg:function(){
  			var aaa = this.new_infos[0];
  			var _this = $(event.target);
  			var indexs = _this.attr("indexs");
  		 	if('id' in aaa.imgs[indexs]){
  		 		if(this.delImgIds == ''){
  		 			this.delImgIds = aaa.imgs[indexs].id;
  		 		}
  		 		else{
  		 			this.delImgIds =','+ aaa.imgs[indexs].id;
  		 		}
  		 	}
  		 	aaa.imgs.splice(indexs,1);
  		 	this.$nextTick(function(){
  		 		$('.tuji').each(function(index, el) {
        			$(this).find('.m-tuji').diyUpload({
        				url:'http://wy.oetapi.wangyuhudong.com/file/upload',
						success:function( data ) {
							console.info( data );
								 aaa.imgs[index].img=data.object.src;
								 $('#tuji'+index).siblings('input').val(data.object.src);
							// for(var i =0;i<obj.imgs.length;i++){
							// 	var a = obj.imgs[i].id;
							// 	if(a==imgid){
							// 		obj.imgs[i].img=data.object.src;
							// 		$('#tuji'+imgid).siblings('input').val(data.object.src);
							// 	}
							// }
							
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
        		});
  		 	})

  		},
  		addPicture:function(){
  			
  		},
  		openvideolay:function(event){
  			var _this = this;
  			layer.open({
			  type: 1,
			  skin: 'layui-layer-rim', //加上边框
			  area: ['600px', '250px'], //宽高
			  content:'<form id="form-upload" action="">'+ 
	  				  '<div style="width:80%; margin:40px auto 0;" >'+
		  			  '<label style="color:#000000;" for="addvideo">视频：</label>'+
		  			  '<input type="file" name="file" accept="video/*" id="addvideo"  style="width:90%;"/>'+
		  			  '</div>'+
		  			  '<div style="text-align:center;margin:20px 0 0 0;"><button type="button" style="width:10%; height:34px; line-height:34px;" id="check">校验</button><button style="display:none;width:10%;height:34px;line-height:34px;" id="upload">上传</button></div>'+
		  			  '</form>'
			});
  			var $fileForm = $('#form-upload');
			// 初始化操作按钮
			var checkFile = false;
			function initUploadBtn() {
				var filename = $fileForm.find('[name="file"]').val();
				var $check = $fileForm.find('#check');
				var $upload = $fileForm.find('#upload');
				if(checkFile && checkFile == filename) {// 文件已校验,可进行上传
					$check.hide();
					$upload.show();
				} else {// 未校验或文件变更
					$check.show();
					$upload.hide();
				}
			}
			// $fileForm.find('[name="file"]').on('change',function(){
			// 	initUploadBtn();
			// });
			$fileForm.find('[name="file"]').change();	
			$('#check').off('click');
			$('#check').on('click', function(ev) {
				var $file = $fileForm.find('[name="file"]');
				var filename = $file.val();
				var fileChecked = true;
				if(filename.length <= 0) {
					console.log("请先选择文件");
					fileChecked = false;
				} else {
					checkFile = filename;
				}
				if(fileChecked){
					var $this = $(this);
					$this.prop('disabled', true);
					console.log("文件校验中, 请稍等 ...");
					_this.$http.get('http://wy.oetapi.wangyuhudong.com/file/upYunFormSignature?filename='+filename).then(function(response){
						var res = response.data.object;
						//初始化校验数据
						var action = res.action;
						var signature = res.signature;
						var policy = res.policy;
						var params = res.params;
						
						function hidden(name, value) {
							return '<input type="hidden" name="' + name + '" value="' + value + '" />';
						}
						$fileForm.attr('action', action);
						if(params){
							for(var k in params){
								var value = params[k];
								$fileForm.append(hidden(k,value));
							}
						}

						$fileForm.append(hidden('signature', signature));
						$fileForm.append(hidden('policy', policy));

						// 初始化表单操作按钮
						checkFile = res.filename;
						initUploadBtn();

					}, function(response){
						console.log(response);
					})	
				}
			});
			$('#upload').off('click');
			$('#upload').on('click', function(){
				var $this = $(this);
				$this.prop('disabled', true);
				console.log("上传中，请稍等 ..");
				$fileForm.ajaxSubmit({
					'url': $fileForm.attr('action'),
					'type': 'post',
					'dataType': 'json',
					'success': function(d) {
						var code = d.code;
						if(code == 200) {
							$('#addinfo').find('input[name="videoUrlUpload"]').val(d.url).change();
						} else {
							console.log('操作失败,原因:' + d.message);
						}
						console.log(d);
					},
					complete: function() {
						console.log('完成');
						layer.closeAll();
					}
				});
			})
  		},
  		savedraft:function(event){//存草稿
  			this.new_infos[0].isPublished = 0;
  			var typenum = this.new_infos[0].type;
  			var newsobj = this.new_infos[0];
  			if(typenum==3){
  				$('.tuji').each(function(index){
  					var rem = $(this).find('.u-n-ttr').val();
  					if(rem==''){
  						console.log("当前索引"+index+"的说明为空！")
  					}
  				 	else{
  				 		newsobj.imgs[index].remark = rem;
  				 	}
  				})
  			}
  			var jsonInfos = JSON.stringify(newsobj);
  			var parm = new Object();
  			parm.jsonInfo = jsonInfos;
  			console.log(parm);
  			this.$http.post('event/information/save',parm).then(function(successResponse){
  				var code = successResponse.data.code;
  				console.log(code);
  			}, function(errorResponse){
  				console.log("通讯错误")
  			})
  		},
  		savetrue:function(event){//确定发布
  			this.new_infos[0].isPublished = 1;
  			var typenum = this.new_infos[0].type;
  			var newsobj = this.new_infos[0];
  			var isicon = this.new_infos[0].icon;
  			var iscover = this.new_infos[0].cover;
  			function errorPlacement(mes,element){
		    	var errorTips=element.parents(".m-lst").find('div.attention');
		    	if(mes!=""){
		    		errorTips.show().html(mes);
		    	}else{
		    		errorTips.hide();
		    	}			    				    	
		    }
		    function tujierrorPlacement(mes,element){
		    	var errorTips=element.parents(".tuji").find('div.attention');
		    	if(mes!=""){
		    		errorTips.show().html(mes);
		    	}else{
		    		errorTips.hide();
		    	}			    				    	
		    }		
  			function formValidate(){
  				var valid=true;
  				$('.m-addzx [required]').each(function(){
  					var $this=$(this);
  					var value=$this.val(),name=$this.attr('title');	
  					var text='';
  					if(value==null||value==''){
						text=name+'不能为空！';
						valid=false;
					}
					errorPlacement(text,$this);
  				})
  				var $slt = $('#pic');
  				if(isicon == ''){
  					valid = false;
  					errorPlacement('请先上传缩略图！',$slt);
  				}
  				else{
  					errorPlacement('',$slt);
  				}
  				if(typenum==1){
  					var $this = $('.m-addzx [twsource]');
  				    var twval = $this.val();
  				    if(twval==null||twval==''){
  				    	valid = false;
  				    	errorPlacement('资讯来源不能为空！',$this);   	
  				    }
  				    else{
  				    	errorPlacement('',$this);
  				    }
  				    var $thistwrek = $('.m-addzx [twremark]'),
  				        thistwrek = $thistwrek.val();
			        if(thistwrek==null||thistwrek==''){
			        	valid = false;
  				    	errorPlacement('详细内容不能为空！',$thistwrek);
			        }
			        else{
			        	errorPlacement('',$thistwrek);
			        }

  				}
  				if(typenum==4){
  					var $thiskey = $('.m-addzx [spkeyword]'),
  						thiskey = $thiskey.val();
  					if(thiskey==null||thiskey==''){
  						valid = false;
  				    	errorPlacement('关键字不能为空！',$thiskey);
  					}
  					else{
  						errorPlacement('',$thiskey);
  					}
  					var $thisspurl = $('.m-addzx [spurl]'),
  						thisspurl = $thisspurl.val();
  					if(thisspurl==null||thisspurl==''){
  						valid = false;
  				    	errorPlacement('视频地址不能为空！',$thisspurl);
  					}
  					else{
  						errorPlacement('',$thisspurl);
  					}
  					var $st = $('#firstpic');
  					if(iscover == ''){
  						valid = false;
						errorPlacement('首图不能为空！',$st);
  					}
  					else{
  						errorPlacement('',$st);
  					}
  				}
  				if(typenum==3){
  					var $tjsource = $('.m-addzx [tjsource]'),
  						tjsource = $tjsource.val();
  					if(tjsource==null||tjsource==''){
  						valid = false;
  				    	errorPlacement('资讯来源不能为空！',$tjsource);
  					}
  					else{
  						errorPlacement('',$tjsource);
  						
  					}
  					
	  				$('.tuji').each(function(index){
	  					var hidipt = $(this).find('input[type="hidden"]').val();
	  					var hid = $(this).find('input[type="hidden"]');
	  					if(hidipt==''){
	  						tujierrorPlacement('请先上传图片',hid);
	  						valid = false;
	  					}
	  				 	else{
	  				 		tujierrorPlacement('',hid);
	  				 		var n = $(this).find('.u-n-ttr');
	  						var rem = $(this).find('.u-n-ttr').val();
	  						if(rem==''){
	  							tujierrorPlacement('图片说明不能为空！',n);
	  							valid = false;
		  					}
		  				 	else{
		  				 		tujierrorPlacement('',n);
		  				 		newsobj.imgs[index].remark = rem;
		  				 		console.log(newsobj.imgs);
		  				 	}
	  				 	}
	  				})
  				}
  				return valid;	
  			}
  			var jsonInfos = JSON.stringify(newsobj);
  			var parm = new Object();
  			parm.jsonInfo = jsonInfos;
  			parm.oldVideoUrl = this.oldVideoUrl;
  			console.log(parm);
  			console.log(formValidate());
  			if(formValidate()){
  				this.$http.post('event/information/save',parm).then(function(successResponse){
  				var code = successResponse.data.code;
  				console.log(code);
	  			}, function(errorResponse){
	  				console.log("通讯错误")
	  			})
  			}
  		}
  	}
}
</script>