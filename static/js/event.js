$(document).ready(function(){
	// 预加载背景图片
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
	$('.plus').click(function(){
		number=parseInt(number+1);
		$('#number').val(number);
		if(number>0){
			$('.minus').attr('disabled',false);
		}
	})
	$('.minus').click(function(){
		number=parseInt(number-1);
		$('#number').val(number);	
		if(number==0){
			$('.minus').attr('disabled',true);
		}else{
			$('.minus').attr('disabled',false);
		}	
	})

	$('#radio-2-1').change(function(){
		$('.m-signup').slideDown();
	})
	$('#radio-2-2').change(function(){
		$('.m-signup').slideUp();
	})
	// 收起打开更多选项
	$('.slidedown').click(function(){
		$(this).hide();
		$('.m-option').show();
		$('.g-center').css({'background-image':'url(../static/images/center_bg2.png)'});
	})
	$('.slideup').click(function(){
		$('.slidedown').show();
		$('.m-option').hide();
		$('.g-center').css({'background-image':'url(../static/images/center_bg1.png)'});
	})

	// 图片上传
	$('#pic').diyUpload({
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
})