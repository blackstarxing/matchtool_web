<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
<!-- 	<create-pop></create-pop> -->
	<div class="g-w mt90 f-re">
		<div class="g-cdt-m">
			<div class="m-cdt-if clearfix">
				<i>
					<img v-bind:src="'http://img.wangyuhudong.com/'+team.icon">
				</i>
				<div class="m-cdt-jj">
					<p class="m-cdt-name">{{team.name}}</p>
					<p class="m-cdt-yx">{{team.itemName}}</p>
					<p class="m-cdt-js">{{team.brief}}</p>	
				</div>
			</div>
			<ul class="m-cdt-tap clearfix">
				<li v-bind:class="{'m-cdt-ontap':tap1}" val="1" @click="tapswitch">战队成员</li>
				<li v-bind:class="{'m-cdt-ontap':tap2}" val="2" @click="tapswitch">参赛纪录</li>
				<li v-bind:class="{'m-cdt-ontap':tap3}" val="3" @click="tapswitch">战队动态</li>
				<li v-bind:class="{'m-cdt-ontap':tap4}" v-if="isCaptain==1" val="4" @click="tapswitch">战队管理</li>
			</ul>
			<div v-show="tap1">
				<ul class="g-cdt-cyli clearfix">
					<li v-for="memebr in memebrs">
						<i class="m-cdt-cytx">
							<img v-bind:src="'http://img.wangyuhudong.com/'+memebr.icon">
							<span class="g-cdt-cap" v-if="memebr.isMonitor==1"></span>
						</i>
						<p class="m-cdt-cymz">{{memebr.nickname}}</p>
					</li>
				</ul>
			</div>
			<div v-show="tap2" class="f-re">
				<div class="list-empty">
					这里还没有内容哦~~
				</div>
				<ul class="clearfix g-cjl-m">
					<li v-for="hty in history.list" index={{$index}}>
						<i class="g-cjl-pot">
							<img v-bind:src="'http://img.wangyuhudong.com/'+hty.icon">
						</i>
						<div class="f-fl">
							<p class="m-cjl-ssn">{{hty.name}}</p>
							<p class="m-cjl-zbf">主办方：{{hty.sponsor}}</p>
							<p class="m-cjl-zbf">采用赛制：{{hty.regime}}</p>
							<p class="m-cjl-zbf">
								参与人数：
								<span class="g-cjl-rsw">
									<span class="g-cjl-rsn"></span>
								</span>
								<span class="col42a">{{hty.applyCount}}</span>/{{hty.maxNum}}
								<i class="u-cjl-tip" v-if="hty.status=='未开赛'">
									<span v-if="hty.seatNumber==''">
										战队处于候补区
										<i class="u-cjl-tipws">
											<i class="u-cjl-tipns"></i>
										</i>
									</span>
									<span v-if="hty.seatNumber!=''">
										战队处于第{{hty.seatNumber}}位选手
										<i class="u-cjl-tipws">
											<i class="u-cjl-tipns"></i>
										</i>
									</span>
								</i>
							</p>
							<p>报名方式：{{hty.applyType}}</p>
						</div>
						<div class="m-cjl-time">
							<p class="mb20 f-tr">{{hty.createDate}} 创建</p>
							<div class="f-tr" v-if="hty.status=='未开赛'"><button type="button" class="m-cjl-btn m-cjl-wfb" disabled>{{hty.status}}</button></div>
							<div class="f-tr" v-if="hty.status=='进行中'"><button type="button" class="m-cjl-btn m-cjl-jxz" disabled>{{hty.status}}</button></div>
							<div class="f-tr" v-if="hty.status=='已完结'"><button type="button" class="m-cjl-btn m-cjl-wfb" disabled>{{hty.status}}</button></div>
							<p class="m-cjl-kssj" v-if="hty.status=='未开赛'"><span class="col42a">1</span>天<span class="col42a">12</span>小时<span class="col42a">32</span>分后可开赛</p>
						</div>
					</li>
				</ul>
				<div class="m-page ptb50" id="pagetap2">
	            	<button id="prev" type="button" @click="prevpagejl"></button>
	            	<div class="pagination"><span class="current">{{history.pageNumber}}</span>/<span>{{history.pages}}</span></div>
	            	<button id="next" type="button" @click="nextpagejl"></button>
	            	<input type="text" value="" id="pagetojl" @keyup="checkpagejl">
	            	<button type="button" class="u-btn" @click="gopagejl">跳转</button>
	            </div>
			</div>
			<div v-show="tap3">
				<div class="list-zddt-empty">
					这里还没有内容哦~~
				</div>
				<ul class="g-cl-sq clearfix">
					<li v-for="trend in trendslist.list">
						<div class="clearfix g-cl-ltl">
							<span class="g-cl-zdtx f-fl">
								<img v-bind:src="'http://img.wangyuhudong.com/'+trend.userIcon">
							</span>
							<span class="g-cl-zdyq g-cdt-zdyq f-fl">
								{{trend.info}}
							</span>
						</div>
						<p class="m-cdt-time" v-text="trend.createDate | formatDate"></p>
					</li>
				</ul>
				<div class="m-page ptb50" id="pagetap3">
	            	<button id="prev" type="button" @click="prevpage"></button>
	            	<div class="pagination"><span class="current">{{trendslist.pageNumber}}</span>/<span>{{trendslist.pages}}</span></div>
	            	<button id="next" type="button" @click="nextpage"></button>
	            	<input type="text" value="" id="pageto" @keyup="checkpage">
	            	<button type="button" class="u-btn" @click="gopage">跳转</button>
	            </div>
			</div>
			<div v-show="tap4">
				<div class="g-cgl-m clearfix">
					<ul class="g-cgl-ul">
						<li v-bind:class="{'g-cgl-ontap':tap5}" val="1" @click="tapsgl">队员管理</li>
						<li v-bind:class="{'g-cgl-ontap':tap6}" val="2" @click="tapsgl">战队信息</li>
					</ul>
					<div class="g-cgl-r" v-show="tap5">
						<div class="m-cgl-fz">
							<p>复制邀请链接发送给朋友，邀请他们加入</p>
							<div class="u-cgl-fz">
								<input type="text" class="u-c-ipt" value="http://wy.kaisaiba.wangyuhudong.com/#/claninvite?teamId={{formdata.id}}" disabled style="width: 100%;" />
								<button type="button" class="u-cgl-fzbtn">复制</button>
							</div>
						</div>
						<ul class="g-cgl-dyul">
							<li class="g-cgl-lt clearfix" v-for="memebr in memebrs">
								<div class="g-cgl-ltl">
									<i class="g-cgl-tx">
										<img v-bind:src="'http://img.wangyuhudong.com/'+memebr.icon">
									</i>
									<span class="g-cgl-name">{{memebr.nickname}}</span>
									<span class="g-cgl-cpt" v-if="memebr.isMonitor==1">
										<i class="g-cdt-cap g-cgl-capimg"></i>队长
									</span>
								</div>
								<div class="f-fr f-re" v-if="memebr.isMonitor==0">
									<button type="button" class="u-cgl-btn u-cgl-yjbtn" nickname="{{memebr.nickname}}" userid="{{memebr.userId}}" @click="turnCaptain">移交队长</button>
									<button type="button" class="u-cgl-btn u-cgl-scbtn" nickname="{{memebr.nickname}}" userid="{{memebr.userId}}" v-if="memebr.underway==0" @click="deletemember">删除</button>
									<button type="button" class="u-cgl-btn u-cgl-zscbtn" nickname="{{memebr.nickname}}" v-if="memebr.underway==1" disabled>删除</button>
									<span class="u-cgl-tip" v-if="memebr.underway==1">
										该选手正在代表战队出战
										<i class="u-cjl-tipws">
											<i class="u-cjl-tipns"></i>
										</i>
									</span>
								</div>
							</li>
							<!-- <li class="g-cgl-lt clearfix">
								<div class="g-cgl-ltl">
									<i class="g-cgl-tx">
										<img src="../../../static/images/me.jpg">
									</i>
									<span class="g-cgl-name">未来老公</span>
								</div>
								<div class="f-fr f-re">
									<button type="button" class="u-cgl-btn u-cgl-yjbtn">移交队长</button>
									<button type="button" class="u-cgl-btn u-cgl-zscbtn">删除</button>
									<span class="u-cgl-tip">
										该选手正在代表战队出战
										<i class="u-cjl-tipws">
											<i class="u-cjl-tipns"></i>
										</i>
									</span>
								</div>
							</li> -->
							<!-- <li class="g-cgl-lt clearfix">
								<div class="g-cgl-ltl">
									<i class="g-cgl-tx">
										<img src="../../../static/images/me.jpg">
									</i>
									<span class="g-cgl-name">未来老公</span>
								</div>
								<div class="f-fr f-re">
									<button type="button" class="u-cgl-btn u-cgl-yjbtn">移交队长</button>
									<button type="button" class="u-cgl-btn u-cgl-scbtn">删除</button>
								</div>
							</li>
							<li class="g-cgl-lt clearfix">
								<div class="g-cgl-ltl">
									<i class="g-cgl-tx">
										<img src="../../../static/images/me.jpg">
									</i>
									<span class="g-cgl-name">未来老公</span>
								</div>
								<div class="f-fr f-re">
									<button type="button" class="u-cgl-btn u-cgl-yjbtn">移交队长</button>
									<button type="button" class="u-cgl-btn u-cgl-scbtn">删除</button>
								</div>
							</li> -->
						</ul>
					</div>
					<div class="g-cgl-r f-cgl-bj" v-show="tap6">
						<div class="g-cgl-bj">
							<label for="">战队名称：</label>
							<input type="text" name="name" placeholder="请输入战队名称" class="u-c-ipt" style="width: 61.85%;" value="{{formdata.name}}" oninput="onInput.call(this)" v-model="formdata.name" required/>
							<span class="colfdb f-tip f-cgl-bjtip"></span>
						</div>
						<div class="g-cgl-bj">
							<label for="">战队名称：</label>
							<select class="u-c-slt" id="gameList" name="belonggame" v-model="formdata.itemId" required>
								<option value="">选择一个竞技项目</option>
							</select>
							<span class="colfdb f-tip f-cgl-bjtip"></span>
						</div>
						<div class="g-cgl-bj">
							<label for="" class="f-fl">上传战队图标：</label>
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
							<span class="colfdb f-tip f-cgl-bjtip"></span>
						</div>
						<div class="g-cgl-bj">
							<label for="" class="f-fl">战队简介：</label>
							<div class="f-re">
								<textarea type="text" class="u-c-ipt u-c-ttr" placeholder="战队简介" maxlength="500" v-model="formdata.brief">{{formdata.brief}}</textarea>
								<span class="u-c-syzs" style="right: 2.2rem;">500字</span>
							</div>
							<span class="colfdb f-tip f-cgl-bjtip"></span>
						</div>
						<div class="confirmBtn mb120">
							<a href="" class="nextBtn" @click="editClan"><i></i>保存</a>
						</div>
					</div>
				</div>
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
import createPop from '../../components/createPop.vue'
	export default {
		data () {
			return{
				tap1:true,
				tap2:false,
				tap3:false,
				tap4:false,
				tap5:true,
				tap6:false,
				memebrs:'',
				history:'',
				team:'',
				trendslist:'',
				formdata:{
					icon:'',
					itemId:'',
					name:'',
					brief:'',
					auth:'',
					id:''
				},
				isCaptain:''
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){
			var _this = this;
			var teamId = window.sessionStorage.getItem("teamId");
			_this.formdata.id = window.sessionStorage.getItem("teamId");
			_this.$http.get('team/detail?teamId='+teamId).then(function(response){
				var code = response.data.code;
				if(code==-1){
					layer.msg('请先登录',{offset:"0px"});
				}
				else if(code==0){
					layer.msg(response.data.msg,{offset:"0px"});
				}else if(code==1){
					_this.team = response.data.object.team;
					_this.formdata.icon = response.data.object.team.icon;
					_this.formdata.itemId = response.data.object.team.itemId;
					_this.formdata.name = response.data.object.team.name;
					_this.formdata.brief = response.data.object.team.brief;
					_this.isCaptain = response.data.object.isMonitor;
				}
			}, function(response){
				console.log(22)
			})
			_this.$http.get('team/members?teamId='+teamId).then(function(response){
				var code = response.data.code;
				if(code==-1){
					layer.msg('请先登录',{offset:"0px"});
				}
				else if(code==0){
					layer.msg(response.data.msg,{offset:"0px"});
				}else if(code==1){
					_this.memebrs = response.data.object.memebrs;
				}
			}, function(response){
				console.log(22)
			})
			_this.$http.post('team/history?teamId='+teamId).then(function(response){
					var code = response.data.code;
					if(code==-1){
						layer.msg('请先登录',{offset:"0px"});
					}
					else if(code==0){
						layer.msg(response.data.msg,{offset:"0px"});
					}else if(code==1){
						_this.history = response.data.object.pager;
						if(response.data.object.pager.list==null || response.data.object.pager.list==''){
							$('.list-empty').show();
							$('#pagetap2').hide();
						}
						else{
							for(var i=0;i<_this.history.list.length;i++){
								var applyType = _this.history.list[i].applyType;
								if(applyType==1){
									_this.history.list[i].applyType = '个人报名';
								}else if(applyType==2){
									_this.history.list[i].applyType = '战队报名';
								}
								var regime = _this.history.list[i].regime;
								if(regime==1){
									_this.history.list[i].regime = '单败淘汰制';
								}else if(regime==2){
									_this.history.list[i].regime = '双败淘汰制';
								}else if(regime==3){
									_this.history.list[i].regime = '小组内单循环制';
								}else if(regime==4){
									_this.history.list[i].regime = '积分循环制';
								}
								var status = _this.history.list[i].status;
								if(status==1){
									_this.history.list[i].status = '未开赛';
								}else if(status==2){
									_this.history.list[i].status = '进行中';
								}else if(status==3){
									_this.history.list[i].status = '已完结';
								}
								var maxNum = _this.history.list[i].maxNum,
									applyCount = _this.history.list[i].maxNum;
								var pre =  applyCount/maxNum;
								if(pre>1){
									pre=1;
								}
								pre = pre * 100% + '%';
								$('[index]').eq(i).find('.g-cjl-rsn').css("width",pre)
							}
						}

					}
				}, function(response){
					console.log(22)
				})
			_this.$http.get('team/trends/list?teamId='+teamId).then(function(response){
				var code = response.data.code;
				if(code==-1){
					layer.msg('请先登录',{offset:"0px"});
				}
				else if(code==0){
					layer.msg(response.data.msg,{offset:"0px"});
				}else if(code==1){
					_this.trendslist = response.data.object.pager;
					if(_this.trendslist.list==null || _this.trendslist.list==''){
						$('.list-zddt-empty').show();
						$('#pagetap3').hide();
					}
				}
			}, function(response){
				console.log(22)
			})
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
			// 初始化当前用户的可选游戏项目
			_this.$http.get('game/list').then(function(response){
				var gameList=response.data.object.games;
				var content='';
  				for(var i=0;i<gameList.length;i++){
  					if(gameList[i].applied==1){
  						if(gameList[i].id == _this.team.itemId){
  							content+='<option selected value="'+gameList[i].id+'" applied="'+gameList[i].applied+'">'+gameList[i].name+'</option>';
  						}
  						else{
  							content+='<option value="'+gameList[i].id+'" applied="'+gameList[i].applied+'" disabled>'+gameList[i].name+'(已加入1支战队)</option>';
  						}	
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
		filters:{
			formatDate:function(value){
				var time = new Date(value);
				var year=time.getFullYear();  
				var month=time.getMonth()+1;     
				var date=time.getDate();     
				var hour=time.getHours();     
				var minute=time.getMinutes();     
				var second=time.getSeconds();
				if(minute<10){
					return year+"-"+month+"-"+date+"   "+hour+":"+"0"+minute;
				}
				else{
					return year+"-"+month+"-"+date+"   "+hour+":"+minute;
				}    
			}
		},
		methods:{
			gopagejl:function(e){
				e.preventDefault();
  				var pageNum=$('#pagetojl').val();
  				this.pageTojl(pageNum);
			},
			checkpagejl:function(){
				var pages = this.history.pages; 
		    	var num = $('#pagetojl').val();
		    	if(num==0 && num!=""){
		    		$('#pagetojl').val('1');
		    	}else if(num>pages){
		    		$('#pagetojl').val(pages);
		    	}
			},
			nextpagejl:function(e){
				e.preventDefault();
  				var currentpage = this.history.pageNumber,
  					maxpage = this.history.pages;
	    		if(currentpage<maxpage){
	    			currentpage++;
	    			this.pageTojl(currentpage);
	    		}
	    		else{
	    			layer.msg('没有下一页了');
	    		}
			},
			pageTojl:function(page){
				var _this = this;
				var teamId = window.sessionStorage.getItem("teamId");
				_this.$http.post('team/history?teamId='+teamId+'&page='+page).then(function(response){
					var code = response.data.code;
					if(code==-1){
						layer.msg('请先登录',{offset:"0px"});
					}
					else if(code==0){
						layer.msg(response.data.msg,{offset:"0px"});
					}else if(code==1){
						_this.history = response.data.object.pager;
						for(var i=0;i<_this.history.list.length;i++){
							var applyType = _this.history.list[i].applyType;
							if(applyType==1){
								_this.history.list[i].applyType = '个人报名';
							}else if(applyType==2){
								_this.history.list[i].applyType = '战队报名';
							}
							var regime = _this.history.list[i].regime;
							if(regime==1){
								_this.history.list[i].regime = '单败淘汰制';
							}else if(regime==2){
								_this.history.list[i].regime = '双败淘汰制';
							}else if(regime==3){
								_this.history.list[i].regime = '小组内单循环制';
							}else if(regime==4){
								_this.history.list[i].regime = '积分循环制';
							}
							var status = _this.history.list[i].status;
							if(status==1){
								_this.history.list[i].status = '未开赛';
							}else if(status==2){
								_this.history.list[i].status = '进行中';
							}else if(status==3){
								_this.history.list[i].status = '已完结';
							}
							var maxNum = _this.history.list[i].maxNum,
								applyCount = _this.history.list[i].maxNum;
							var pre =  applyCount/maxNum;
							if(pre>1){
								pre=1;
							}
							pre = pre * 100% + '%';
							$('[index]').eq(i).find('.g-cjl-rsn').css("width",pre)
						}

					}
				}, function(response){
					console.log(22)
				})
			},
			prevpagejl:function(e){
				e.preventDefault();
  				var currentpage = this.history.pageNumber;
	    		if(currentpage>1){
	    			currentpage--;
	    			this.pageTojl(currentpage);
	    		}
	    		else{
	    			layer.msg('没有上一页了');
	    		}
			},
			gopage:function(e){
				e.preventDefault();
  				var pageNum=$('#pageto').val();
  				this.pageTo(pageNum);
			},
			checkpage:function(e){
				var pages = this.trendslist.pages; 
		    	var num = $('#pageto').val();
		    	if(num==0 && num!=""){
		    		$('#pageto').val('1');
		    	}else if(num>pages){
		    		$('#pageto').val(pages);
		    	}
			},
			pageTo:function(page){
				var _this = this;
				var teamId = window.sessionStorage.getItem("teamId");
				_this.$http.get('team/trends/list?teamId='+teamId+'&page='+page).then(function(response){
					var code = response.data.code;
					if(code==-1){
						layer.msg('请先登录',{offset:"0px"});
					}
					else if(code==0){
						layer.msg(response.data.msg,{offset:"0px"});
					}else if(code==1){
						_this.trendslist = response.data.object.pager;
					}
				}, function(response){
					console.log(22)
				})
			},
  			prevpage:function(e){
  				e.preventDefault();
  				var currentpage = this.trendslist.pageNumber;
	    		if(currentpage>1){
	    			currentpage--;
	    			this.pageTo(currentpage);
	    		}
	    		else{
	    			layer.msg('没有上一页了');
	    		}
  			},
  			nextpage:function(e){
  				e.preventDefault();
  				var currentpage = this.trendslist.pageNumber,
  					maxpage = this.trendslist.pages;
	    		if(currentpage<maxpage){
	    			currentpage++;
	    			this.pageTo(currentpage);
	    		}
	    		else{
	    			layer.msg('没有下一页了');
	    		}
  			},
			selectPic: function(e){
		        $('.m-mask').show();
		    },
		    closePop: function(e){
		        $('.m-mask').hide();
		    },
			editClan:function(e){
				var _this = this;
		    	e.preventDefault();
		    	layer.confirm('是否保存已修改的内容?',{
		    		btn: ['保存','不保存'], //按钮
				  	move:false,
				  	closeBtn:0
		    	},function(){
		    		function errorPlacement(mes,element){
			    		var errorTips=element.parents(".g-cgl-bj").find('.f-tip');
				    	if(mes!=""){
				    		errorTips.css("display","inline-block").html(mes);	
				    	}else{
				    		errorTips.css("display","none");	
				    	}
			    	}
			    	function formValidate(){
		    			var valid=true,valid1=true;
			    		$('.f-cgl-bj [required]').each(function(index, el) {
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
			    		var teamId = window.sessionStorage.getItem("teamId");
			    		_this.$http.post('team/save',_this.formdata).then(function(response){
			    			var code = response.data.code;
			    			if(code==-1){
			    				layer.msg('请先登录',{offset:"0px"});
			    			}else if(code==0){
			    				layer.msg(response.data.msg,{offset:"0px"});
			    			}else if(code==1){
			    				_this.$route.router.go({path: '/myclan'});
			    				layer.msg('修改成功',{offset:"0px"});
			    				console.log('修改成功');
			    			}
			    		}, function(response){
			    			console.log(22);
			    		})
			    	}
		    	},function(){
		    		layer.closeAll();
		    	})
			},
			deletemember:function(event){
				var $this = $(event.target),_this = this;
				var nickname = $this.attr('nickname');
				layer.confirm('将队员'+nickname+'移除战队',{
					btn: ['移除','取消'], //按钮
				  	move:false,
				  	closeBtn:0
				},function(){
					var userId = $this.attr("userid");
					var teamId = window.sessionStorage.getItem("teamId");
					_this.$http.post('team/removeMember?teamId='+teamId+'&userId='+userId).then(function(response){
						var code = response.data.code;
		    			if(code==-1){
		    				layer.msg('请先登录',{offset:"0px"});
		    			}else if(code==0){
		    				layer.msg(response.data.msg,{offset:"0px"});
		    			}else if(code==1){
		    				_this.$http.get('team/members?teamId='+teamId).then(function(response){
		    					_this.memebrs = response.data.object.memebrs;
		    				}, function(response){
		    					console.log(22);
		    				})
		    				layer.msg('移除成功',{offset:"0px"});
		    			}
					}, function(response){
						console.log(22)
					})
				},function(){
					layer.closeAll();
				})
			},
			turnCaptain:function(event){
				var $this = $(event.target),_this = this;
				var nickname = $this.attr('nickname');
				layer.confirm('将队长移交至'+nickname,{
					btn: ['移交','取消'], //按钮
				  	move:false,
				  	closeBtn:0
				},function(){
					var userId = $this.attr("userid");
					var teamId = window.sessionStorage.getItem("teamId");
					_this.$http.post('team/transferMonitor?teamId='+teamId+'&userId='+userId).then(function(response){
						var code = response.data.code;
		    			if(code==-1){
		    				layer.msg('请先登录',{offset:"0px"});
		    			}else if(code==0){
		    				layer.msg(response.data.msg,{offset:"0px"});
		    			}else if(code==1){
		    				_this.$http.get('team/members?teamId='+teamId).then(function(response){
		    					_this.memebrs = response.data.object.memebrs;
		    				}, function(response){
		    					console.log(22);
		    				})
		    				layer.msg('移交成功',{offset:"0px"});
		    			}
					}, function(response){
						console.log(22)
					})
				},function(){
					layer.closeAll();
				})
			},
			tapsgl:function(event){
				var _this = $(event.target);
				var v = _this.attr("val");
				if(v==2){
					this.tap5 = false;
					this.tap6 = true;
				}else if(v==1){
					this.tap5 = true;
					this.tap6 = false;
				}
			},
			tapswitch:function(event){
				var _this = $(event.target);
				var v = _this.attr("val");
				if(v==2){
					this.tap4 =false;
					this.tap3 =false;
					this.tap1 = false;
					this.tap2 = true;
				}
				else if(v==3){
					this.tap1 = false;
					this.tap2 = false;
					this.tap4 = false;
					this.tap3 = true;
				}else if(v==4){
					this.tap1 = false;
					this.tap2 = false;
					this.tap3 = false;
					this.tap4 = true;
				}else if(v==1){
					this.tap2 = false;
					this.tap3 = false;
					this.tap4 = false;
					this.tap1 = true;
				}
			}
		}
	}
</script>