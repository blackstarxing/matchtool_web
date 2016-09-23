<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w mt90 f-re">
		<div class="clearfix g-cl-bd">
			战队系统
			<button type="button" class="u-cl-bd" @click="createclan">
				创建战队
			</button>
		</div>
		<div class="g-cl-list">
			<ul class="g-cl-taps">
				<li v-bind:class="{'g-cl-ontaps':tap1}" val="1" @click="tapswitch">我的战队</li>
				<li v-bind:class="{'g-cl-ontaps':tap2}" val="2" @click="tapswitch">战队申请</li>
			</ul>
			<div v-show="tap2">
				<div class="list-empty">
					这里还没有内容哦~~
				</div>
				<ul class="g-cl-sq clearfix">
					<li v-for="applie in applies.list">
						<div class="clearfix g-cl-ltl">
							<span class="g-cl-zdtx f-fl">
								<img v-bind:src="'http://img.wangyuhudong.com/'+applie.userIcon">
							</span>
							<span class="g-cl-zdyq f-fl">
								{{applie.userNickname}}申请加入您的“{{applie.teamName}}”的战队
							</span>
						</div>
						<div class="g-cl-ltr">
							<button type="button" class="s-cl-hl" @click="ignore" applyId="{{applie.id}}">忽略</button>
							<button type="button" class="s-cl-js" @click="accept" applyId="{{applie.id}}">接受</button>
						</div>
					</li>
				</ul>
				<div class="m-page ptb50" id="pagetap">
	            	<button id="prev" type="button" @click="prevpage"></button>
	            	<div class="pagination"><span class="current">{{applies.pageNumber}}</span>/<span>{{applies.pages}}</span></div>
	            	<button id="next" type="button" @click="nextpage"></button>
	            	<input type="text" value="" id="pageto" @keyup="checkpage">
	            	<button type="button" class="u-btn" @click="gopage">跳转</button>
	            </div>
			</div>
			<div v-show="tap1">
				<ul class="g-cl-zd clearfix">
					<li v-for="team in myteams" teamid="{{team.id}}" @click="goToClanDetails">
						<span class="g-cl-cap" isMonitor="team.isMonitor" v-if="team.isMonitor==1">队长</span>
						<div class="clearfix g-cl-zdif">
							<span class="g-cl-dtx">
								<img v-bind:src="'http://img.wangyuhudong.com/'+team.icon">
							</span>
							<div class="g-cl-sszd">
								<p class="g-cl-zdname">{{team.name}}</p>
								<p class="g-cl-yxname">{{team.gameName}}</p>
							</div>
						</div>
						<div class="g-cl-bmrs">
							<span class="col42a">{{team.memberCount}}</span>/{{team.maxNum}}
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="footer">
		<div class="foot">
            <div class="tel">
                <div class="telIcon">
                    <img src="../../../static/images/telephone.png">
                    <span id="lx" v-link="{ path: '/contact'}">联系我们</span>
                </div>
            </div>
            <div class="letter">
                <div class="letterIcon">
                    <img src="../../../static/images/letter.png">
                    <span>招贤纳士：hr-wangyu@miqtech.com
              </span>
                </div>
            </div>
            <div class="address">
                <div class="addressIcon">
                    <img src="../../../static/images/address.png">
                    <span id="gy" v-link="{ path: '/about'}">关于我们</span>
                </div>
            </div>
            <div class="contactInformation">
                <span>浙江网竞网络科技有限公司 浙ICP备14028335号-2 | Copyright©2016 kaisaiba.com All Rights Reserved. 版权所有@浙江网竞网络科技有限公司</span>
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
		data (){
			return{
				tap1:true,
				tap2:false,
				myteams:'',
				complete:'',
				applies:''
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
			_this.$http.get('team/mine').then(function(response){
				_this.myteams = response.data.object.pager.list;
			}, function(response){
				console.log(22)
			});
			_this.$http.get('checkBasicInfo').then(function(response){
				var code = response.data.code;
				if(code==-1){
					layer.msg('请先登录',{offset:"0px"});
				}
				else if(code==0){
					layer.msg(response.data.msg,{offset:"0px"});
				}else if(code==1){
					_this.complete = response.data.object.activityComplete;
				}
			}, function(response){
				console.log(22);
			})
			_this.$http.post('team/apply/myTeamApplies').then(function(response){
				_this.applies = response.data.object.pager;
				if(_this.applies.list==null||_this.applies.list==''){
					$('#pagetap').hide();
					$('.list-empty').show();
				}
			}, function(response){
				console.log(22);
			})
		},
		methods:{
			gopage:function(e){
				e.preventDefault();
  				var pageNum=$('#pageto').val();
  				this.pageTo(pageNum);
			},
			checkpage:function(e){
				var pages = this.applies.pages; 
		    	var num = $('#pageto').val();
		    	if(num==0 && num!=""){
		    		$('#pageto').val('1');
		    	}else if(num>pages){
		    		$('#pageto').val(pages);
		    	}
			},
			pageTo:function(page){
				_this.$http.post('team/apply/myTeamApplies?page='+page).then(function(response){
					_this.applies = response.data.object.pager;
				}, function(response){
					console.log(22);
				})
			},
			nextpage:function(e){
				e.preventDefault();
  				var currentpage = this.applies.pageNumber,
  					maxpage = this.applies.pages;
	    		if(currentpage<maxpage){
	    			currentpage++;
	    			this.pageTo(currentpage);
	    		}
	    		else{
	    			layer.msg('没有下一页了');
	    		}
			},
			prevpage:function(e){
				e.preventDefault();
  				var currentpage = this.applies.pageNumber;
	    		if(currentpage>1){
	    			currentpage--;
	    			this.pageTo(currentpage);
	    		}
	    		else{
	    			layer.msg('没有上一页了');
	    		}
			},
			accept:function(e){
				var _this = this;
				var $this = $(e.target),applyId = $this.attr('applyId');
				var accept = 1;
				_this.$http.post('team/apply/handle?accept='+accept+'&applyId='+applyId).then(function(response){
					var code = response.data.code;
					if(code==-1){
						layer.msg('请先登录',{offset:"0px"});
					}
					else if(code==0){
						layer.msg(response.data.msg,{offset:"0px"});
					}else if(code==1){
						_this.$http.post('team/apply/myTeamApplies').then(function(response){
							_this.applies = response.data.object.pager;
							if(_this.applies.list==null||_this.applies.list==''){
								$('#pagetap').hide();
								$('.list-empty').show();
							}
						}, function(response){
							console.log(22);
						})
					}
				}, function(response){
					console.log(22)
				})
			},
			ignore:function(e){
				var _this = this;
				var $this = $(e.target),applyId = $this.attr('applyId');
				var accept = 0;
				_this.$http.post('team/apply/handle?accept='+accept+'&applyId='+applyId).then(function(response){
					var code = response.data.code;
					if(code==-1){
						layer.msg('请先登录',{offset:"0px"});
					}
					else if(code==0){
						layer.msg(response.data.msg,{offset:"0px"});
					}else if(code==1){
						_this.$http.post('team/apply/myTeamApplies').then(function(response){
							_this.applies = response.data.object.pager;
							if(_this.applies.list==null||_this.applies.list==''){
								$('#pagetap').hide();
								$('.list-empty').show();
							}
						}, function(response){
							console.log(22);
						})
					}
				}, function(response){
					console.log(22)
				})
			},
			goToClanDetails:function(e){
				var _this = this;
				var $this = $(e.target);
				var teamid = $this.parents('[teamid]').attr('teamid');
				window.sessionStorage.setItem("teamId",teamid);
				_this.$route.router.go({path: '/clandetails'});
			},
			createclan:function(){
				var _this = this;
				var c = _this.complete;
				if(c==1){
					_this.$route.router.go({path: '/createclan'});
				}else if(c==0){
					layer.confirm('战队系统是提供给资深的电竞用户建立参赛团体的平台需要你完善个人参赛资料，以便赛事方审核效验',{
						btn:['知道了','去完善'],
						move:false,
				  		closeBtn:0
					},function(){
						layer.closeAll();
					},function(){
						_this.$route.router.go({path: '/perSetting/1'});
					})
				}
			},
			tapswitch:function(event){
				var _this = $(event.target);
				var v = _this.attr("val");
				if(v==2){
					this.tap1 = false;
					this.tap2 = true;
				}
				else if(v==1){
					this.tap1 = true;
					this.tap2 = false;
				}
			}
		}
	}
</script>