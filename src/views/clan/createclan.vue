<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="backLast">
		<div class="g-z">
			<a href=""></a>创建战队
		</div>
	</div>
	<div class="g-w">
		<div class="g-z">
			<p class="m-c-tit">战队系统</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<div class="f-c">
						<p class="g-c-l">战队名称<span class="colfdb f-tip"></span></p>
						<input type="text" class="u-c-ipt" placeholder="请输入战队名称" style="width:480px;">
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">所属游戏<span class="colfdb f-tip"></span></p>
						<select class="u-c-slt" >
							<option value="" selected>选择一个竞技项目</option>
							<option value="">捉猫游戏</option>
							<option value="">玩狗游戏</option>
							<option value="">杀人游戏</option>
						</select>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">上传战队图标<span class="colfdb f-tip"></span></p>
						<div class="g-cgl-sctb" style="margin-left: 0">
							<div class="g-cgl-icon">
								<i class="icon-uniE62B"></i>
							</div>
							<div class="picBox m-cgl-pixbox">
								<div id="pic"></div>
							</div>
						</div>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">战队简介<span class="colfdb f-tip"></span></p>
						<textarea type="text" class="u-c-ipt u-c-ttr" placeholder="战队简介"></textarea>
					</div>
				</div>
			</div>
			<div class="confirmBtn mb120">
				<a href="" class="nextBtn" @click="goToSetformat"><i></i>我要创建</a>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import topHead from '../../components/topHead.vue'
import sideBar from '../../components/sideBar.vue'
import slideBar from '../../components/slideBar.vue'
import createPop from '../../components/createPop.vue'
	export default {
		data () {
			return{

			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){
			$('#pic').diyUpload({
	    		url:'http://match.wangyuhudong.com/api/file/upload',
				success:function( data ) {
					console.info( data );	
				},
				error:function( err ) {
					console.info( err );	
				},
				buttonText : '设置头像',	
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
		methods:{

		}
	}
</script>