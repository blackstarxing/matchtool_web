<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
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
						<input type="text" name="name" class="u-c-ipt" placeholder="请输入战队名称" style="width:480px;" oninput="onInput.call(this)" v-model="formdata.name" required>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">所属游戏<span class="colfdb f-tip"></span></p>
						<select class="u-c-slt" id="gameList" name="belonggame" v-model="formdata.itemId" required>
							<option value="" selected>选择一个竞技项目</option>
						</select>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">上传战队图标<span class="colfdb f-tip"></span></p>
						<div class="g-cgl-sctb" style="margin-left: 0">
							<div class="g-cgl-icon">
								<img v-bind:src="'http://img.wangyuhudong.com/'+formdata.icon" class="m-cgl-yytp" v-if="formdata.icon!=''">
								<i class="icon-uniE62B" v-if="formdata.icon==''"></i>
							</div>
							<button class="g-cgl-xztp" type="button" @click="selectPic" id="szbtn">
								设置头像
							</button>
							<!-- <div class="picBox m-cgl-pixbox">
								<div id="pic"></div>
							</div> -->
						</div>
					</div>
					<div class="f-c">
						<p class="g-c-l mt40">战队简介<span class="colfdb f-tip"></span></p>
						<div class="f-re">
							<textarea type="text" class="u-c-ipt u-c-ttr" placeholder="战队简介" maxlength="500" v-model="formdata.brief"></textarea>
							<span class="u-c-syzs">500字</span>
						</div>
					</div>
				</div>
			</div>
			<div class="confirmBtn mb120">
				<a href="" class="nextBtn" @click="createClan"><i></i>我要创建</a>
			</div>
		</div>
	</div>
	<div class="m-mask" style="padding-left:100px;">
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
<script type="text/javascript">
import topHead from '../../components/topHead.vue'
import sideBar from '../../components/sideBar.vue'
import slideBar from '../../components/slideBar.vue'
	export default {
		data () {
			return{
				formdata:{
					icon:'',
					itemId:'',
					name:'',
					brief:'',
					auth:''
				}
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar
		},
		ready:function(){
			var _this = this;
			// 初始化当前用户的可选游戏项目
			_this.$http.get('game/list').then(function(response){
				var gameList=response.data.object.games;
				var content='';
  				for(var i=0;i<gameList.length;i++){
  					if(gameList[i].applied==1){
  						content+='<option value="'+gameList[i].id+'" applied="'+gameList[i].applied+'" disabled>'+gameList[i].name+'(已加入1支战队)</option>';
  					}
  					else if(gameList[i].applied==0){
  						content+='<option value="'+gameList[i].id+'" applied="'+gameList[i].applied+'">'+gameList[i].name+'</option>';
  					}
  				}
  				$('#gameList').append(content);
			}, function(response){
				console.log(22);
			});
			//end
			// 战队名称字符规则
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

			var maxLength = 14; //战队名称最大字符数

			function onInput() {
			    if (getLength(this.value) > maxLength)
			        this.value = limitMaxLength(this.value, maxLength);
			}

			window.onInput = onInput;
			//end
			// 图片上传
			$('#pic').diyUpload({
				url:'http://wy.oetapi.wangyuhudong.com/file/upload',
				success:function( data ) {
					console.info( data );
					_this.formdata.icon=data.object.src;
					$(".m-mask").hide();
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
		    createClan:function(e){
		    	var _this = this;
		    	e.preventDefault();
		    	function errorPlacement(mes,element){
		    		var errorTips=element.parents(".f-c").find('.f-tip');
			    	if(mes!=""){
			    		errorTips.css("display","inline-block").html(mes);	
			    	}else{
			    		errorTips.css("display","none");	
			    	}
		    	}
		    	function formValidate(){
		    		var valid=true,valid1=true;
		    		$('.g-z [required]').each(function(index, el) {
		    			var $this=$(this);
		    			var value=$this.val(),name=$this.attr('name');	
			    		var message="";
			    		if(name=="name"){
			    			if(value==""){
								valid=false;
					    		message="战队名称不能为空!";
							}
							errorPlacement(message,$this);
			    		}
			    		else if(name=="belonggame"){
			    			if(value==""){
								valid=false;
					    		message="必须选择一个游戏项目!";
							}
							errorPlacement(message,$this);
			    		}
		    		});
		    		var tpmessage ='', $this2 = $('#szbtn');	
		    		if(_this.formdata.icon ==''){
		    			valid1=false;
		    			tpmessage='战队图标不能为空！';
		    		}
		    		errorPlacement(tpmessage,$this2);
		    		if(valid && valid1){
		    			return true;
		    		}
		    	}
		    	if(formValidate()){
		    		_this.$http.post('team/save',_this.formdata).then(function(response){
		    			var code = response.data.code;
		    			if(code==-1){
		    				layer.msg('请先登录',{offset:"0px"});
		    			}else if(code==0){
		    				layer.msg('创建失败',{offset:"0px"});
		    			}else if(code==1){
		    				_this.$route.router.go({path: '/myclan'});
		    				layer.msg('创建成功',{offset:"0px"});
		    				console.log('创建战队成功');
		    			}
		    		}, function(response){
		    			console.log(22);
		    		})
		    		
		    	}
		    }
		}
	}
</script>