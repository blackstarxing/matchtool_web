<template>
	<backend-sidebar></backend-sidebar>
	<div class="g-bd">
		<div class="g-mb">
			<div class="m-operate f-cb">
				<div class="l-btn f-fl">
					<a href="javascript:void(0);" class="u-btn u-btn-upset" @click="upsetseat">打乱战队顺序</a>
					<a href="javascript:void(0);" class="u-btn u-btn-add" @click="addplayer"><span class="icon-uniE621"></span>添加战队</a>
				</div>					
				<div class="r-btn f-fr">
					<!-- <a href="">导入</a> -->
					<a href="" class="exportExcel" @click="exportExcel"><span class="icon-uniE61F"></span>导出选手信息</a>
				</div>
			</div>
			<div class="g-list">
				
				<div class="m-tb">
					<div class="member-content">
						<div class="member-head">
							<ul>
								<li class="column-2">序号</li>
								<li class="column-3">战队名称</li>
								<li class="column-2">已签到</li>
								<li class="column-2">操作</li>
								<li class="column-1">展开</li>
							</ul>
						</div>
						<div class="member-empty" v-if="teamlist.list?(teamlist.list.length==0):false">
							这里还没有内容哦~~								
						</div>
						<div class="member-list" v-for="team in teamlist.list">
							<ul>
								<li v-bind:class="['column-2',team.isfill==1 ? 'isfill' : '']">{{team.number}}</li>
								<li class="memberId" style="display:none;">{{team.memberId}}</li>
		                        <li class="memberName column-3">{{team.teamName}}</li>
		                        <li class="column-2">
		                        <section class="signed">
									<div class="signbox">
										<div class="dis-sign" v-show="roundStatus>4 || !needSign"></div>
										<input type="checkbox" checked="" @click="signStatus" v-if="team.signed==1">
										<input type="checkbox" @click="signStatus" v-else>
										<label></label>
									</div>
								</section>
								</li>
		                        <li class="column-2">
		                        	<div class="option">
		                        		<a href="javascript:void(0);" class="u-btn-write" data-id="{{team.id}}" @click="editMember"></a><a href="" class="u-btn-delete" data-id="{{team.memberId}}" @click="deleteMember"></a>
		                        	</div>
		                        </li>
		                        <li class="column-1"><a href="javascript:void(0);" class="u-btn-deploy" @click="toggleInfo" v-if="team.members[0].userId"></a></li>
							</ul>
							<div class="moreInfo" v-for="member in team.members">
								<img v-bind:src="'http://img.wangyuhudong.com/'+member.icon==null?member.icon : 'http://img.wangyuhudong.com//uploads/2016/08/22/70d3f4f9f8624f24a2dfa7a4c5fd6c0b.png'" alt="">
								<div class="m-info">
									<div>
										<label for="">游戏昵称</label>{{member.nickname}}
									</div>
									<div>
										<label for="">真实姓名</label>{{member.name}}
									</div>
									<div>
										<label for="">身份证</label>{{member.idcard}}
									</div>
									<div>
										<label for="">{{member.otherDescribe}}</label>{{member.other}}
									</div>
								</div>
								<div class="m-info">
									<div>
										<label for="">手机号</label>{{member.telephone}}
									</div>
									<div>
										<label for="">QQ号</label>{{member.qq}}
									</div>
								</div>
							</div>
						</div>
					</div>
	                <div class="m-page">
	                	<a href="" id="prev" @click="prevpage"></a>
	                	<div class="pagination"><span class="current">{{teamlist.pageNumber}}</span>/<span>{{teamlist.pages}}</span></div>
	                	<a href="" id="next" @click="nextpage"></a>
	                	<input type="text" class="u-c-ipt" id="pageto" @keyup="checkpage">
	                	<a href="" class="u-btn" @click="gopage">跳转</a>
	                </div>
				</div>
			</div>	
		</div>
			
		<div class="g-bt"></div>
	</div>		
	</div>
	<div class="m-mask">
		<div class="m-pop" style="padding-bottom:30px;">
			<div class="wrap add-wrap">
				<div class="m-lst">				
					<label for="">战队名称：</label>
					<input type="text" class="name u-c-ipt" name="name" placeholder="请输入战队名称">
					<div class="colfdb f-tip"></div>
				</div>
				<div class="member-id" style="display:none"></div>
				<a href="javascript:void(0);" class="u-btn u-pop-btn u-close-btn" @click="closePop">取消</a><a href="javascript:void(0);" class="u-btn add-member u-pop-btn" @click="addMember">添加</a>
			</div>			
		</div>
	</div>
</template>
<script>
	import backendSidebar from '../components/backendSidebar.vue'
  	export default {
       	data () {
    		return {
      			teamlist:"",
      			eventname:"",
      			eventId:"",
      			roundId:"",
      			needSign:"",
      			roundStatus:"",
      			applyType:"",
      			required:""
    		}
  		},
  		components:{
        	backendSidebar
  		},
   		ready: function () {     		
     		var _this=this;    		
     		_this.$http.get("isLogin").then(function(response){
		        if(!response.data.object.loginFlag){
		        	_this.$route.router.go({name: 'landRegister', params: { tabId: 0 }});
		        }
		    }, function(response){
		       	console.log(response);
		    })
     		_this.applyType = window.sessionStorage.getItem("applyType");
     		_this.eventname=window.sessionStorage.getItem("eventname");
     		_this.eventId=window.sessionStorage.getItem("eventId");
     		_this.roundId=window.sessionStorage.getItem("eventRoundId");
     		_this.needSign=window.sessionStorage.getItem("needSign");
     		_this.roundStatus=window.sessionStorage.getItem("roundStatus");
	        _this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
	        	// console.log(response);
	            _this.teamlist=response.data.object.pager;
	        },function(response) {
	            console.log(response);
	        });
	        var parm={};
   			parm.jsonInfo=JSON.stringify({oetInfoId:_this.eventId});
	        _this.$http.post('event/queryRequired',parm).then(function(response) {
	        	// console.log(response);
	            _this.required=response.data.object;
	        },function(response) {
	            console.log(response);
	        });
  		},
  		methods: {
    		addplayer: function(e){
    			$(".add-member").removeClass('edit-member').text("添加");
    			$('.add-wrap .name').val('');
		    	$('.add-wrap .member-id').html('');
    			$('.f-tip').html("");
		        $('.m-mask').show();
		    },
		    closePop: function(e){
		        $('.m-mask').hide();

		    },
		    // 打乱选手位置
		    upsetseat:function(e){
		    	var _this=this;
		    	var parm={eventId:_this.eventId};

		    	_this.$http.get('event/round/groupSeat/random',parm).then(function(response) {
		        	console.log(response.data);
		        	if(response.data.code==1){
		        		layer.msg('选手顺序已打乱');
		        		_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
				        	console.log(response.data);
				        	_this.teamlist=response.data.object.pager;
				        },function(response) {
				            console.log(response);
				        });
		        	}else{
		        		layer.msg(response.data.msg);
		        	}
		        },function(response) {
		            console.log(response);
		        });
		    },
		    // 修改签到状态
		    signStatus:function(e){
		    	var _this=this;
		    	var _target=$(e.currentTarget);
		    	var memberId=_target.parents(".member-list").find(".u-btn-delete").attr("data-id");
		    	var sign=0;

		    	if(_target.attr('checked')=="checked"){
		    		_target.attr('checked',false);
		    		sign=0;
		    	}else{
		    		_target.attr('checked',true);
		    		sign=1;
		    	}
		    	var parm={memberId:memberId,sign:sign};
		    	_this.$http.get('event/round/group/member/sign',parm).then(function(response) {
		        	console.log(response.data.msg);
		        	if(response.data.code==1){
		        		layer.msg('签到状态已更改');
		        		_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
				        	console.log(response.data);
				        	_this.teamlist=response.data.object.pager;
				        },function(response) {
				            console.log(response);
				        });
		        	}else{
		        		layer.msg(response.data.msg);
		        	}
		        },function(response) {
		            console.log(response);
		        });
		     	console.log(parm);
		    	console.log(sign);
		    },
		    toggleInfo:function(e){
		    	var _this=this;
		    	var _target=$(e.currentTarget);
		    	if(_target.hasClass('info-shown')){
		    		_target.removeClass('info-shown').parents('.member-list').find('.moreInfo').slideUp();
		    	}else{
		    		_target.addClass('info-shown').parents('.member-list').find('.moreInfo').slideDown();
		    	}
		    },
		    addMember:function(e){
		    	e.preventDefault();
		    	var _this=this;
		    	var _target=$(e.currentTarget);
		    	function errorPlacement(mes,element){
			    	var errorTips=element.parents(".m-lst").find('.f-tip');
			    	if(mes!=""){
			    		errorTips.show().html(mes);
			    	}else{
			    		errorTips.hide();
			    	}			    				    	
			    }
			    function strlen(str){
					var len = 0;
					for (var i=0; i<str.length; i++) { 
					    var c = str.charCodeAt(i); 
					    //单字节加1 
					    if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
					       len++; 
					    } 
					    else { 
					      len+=2; 
					    } 
					} 
				    return len;
				}
			    function formValidate(){
			    	var valid=true;
					var value=$('.add-wrap .name').val();	
		    		var message="";
	    			if(value==""){
	    				valid=false;
			    		message="战队名称不能为空";
			    	}else if(strlen(value)>15){
			    		valid=false;
			    		message="战队名称过长";
			    	}
			    	errorPlacement(message,$('.add-wrap .name'));			    	   
				    return valid;
			    };
			    if(formValidate()){
			    	var parmstr=JSON.stringify({eventMemberId:$('.add-wrap .member-id').html(),teamName:$('.add-wrap .name').val()});
			    	var parm={};
			    	parm.memberJson=parmstr;
		    		if(_target.hasClass('edit-member')){
			    		_this.$http.get('event/round/group/member/editTeam',{eventMemberId:$('.add-wrap .member-id').html(),teamName:$('.add-wrap .name').val()}).then(function(response) {
				        	console.log(response.data);
				        	if(response.data.code){
				        		$('.m-mask').hide();
				        		layer.msg('修改成功');
						    	_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
						        	console.log(response.data);
						        	_this.teamlist=response.data.object.pager;
						        },function(response) {
						            console.log(response);
						        });
				        	}else{
				        		$('.m-mask').hide();
				        		layer.msg(response.data.msg);
				        	}
				        	console.log(parm);
				        },function(response) {
				            console.log(response.data.msg);
				        });			    		
			    	}else{
			    		_this.$http.get('event/round/group/member/addTeam',{roundId:_this.roundId,teamName:$('.add-wrap .name').val()}).then(function(response) {
				        	console.log(response.data);
				        	if(response.data.code==1){
				        		$('.m-mask').hide();
				        		layer.msg('添加成功');
				        		_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
						        	console.log(response.data);
						        	_this.teamlist=response.data.object.pager;
						        },function(response) {
						            console.log(response);
						        });
				        	}else{
				        		$('.m-mask').hide();
				        		layer.msg(response.data.msg);
				        	}                                                                                                           
				        	console.log(parm);
				        },function(response) {
				            console.log(response.data.code);
				        });
			    	}		    	
			    }	    	
		    },
		    // 编辑成员信息
		    editMember:function(e){
		    	var _target=$(e.currentTarget);
		    	$(".add-member").addClass('edit-member').text("修改");
		    	$('.m-mask').show();
		    	$('.add-wrap .name').val(_target.parents(".member-list").find(".memberName").text());
		    	$('.add-wrap .member-id').html(_target.parents(".member-list").find(".memberId").text());
		    },
		    // 删除成员
		    deleteMember:function(e){
		    	e.preventDefault();
		    	var _this=this;
		    	var _target=$(e.currentTarget);
		    	var parm={memberId:_target.attr("data-id")};
		    	layer.confirm('你确定要删除该成员吗？', {
				  	btn: ['取消','确定'], //按钮
				  	move:false,
				  	closeBtn:0
				}, function(){
					layer.closeAll();
				}, function(){				  	
				  	_this.$http.get('event/round/group/member/del',parm).then(function(response) {
			        	console.log(response.data);
			        	if(response.data.code==1){
			        		layer.msg('已删除');
			        		_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
					        	console.log(response.data);
					        	_this.teamlist=response.data.object.pager;
					        },function(response) {
					            console.log(response);
					        });
			        	}else{
			        		layer.msg(response.data.msg);
			        	}
			        },function(response) {
			            console.log(response);
			        });
				});
		    },
		    // 导出列表
		    exportExcel:function(e){
		    	e.preventDefault();
		    	var _this=this;
		    	var _target=$(e.currentTarget); 
		    	window.location.href="http://wy.kaisaibaapi.wangyuhudong.com/event/round/group/member/export?roundId="+_this.roundId;
		    },
		    // 翻页
		    pageTo:function(page){
				this.$http.post("event/round/group/member/list",{roundId:this.roundId,pageNumber:page}).then(function(response){
    				this.teamlist=response.data.object.pager;
	    		}, function(response){
	    			console.log(response);
	    		})
			},		    
  			prevpage:function(e){
  				e.preventDefault();
  				var currentpage = this.teamlist.pageNumber;
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
  				var currentpage = this.teamlist.pageNumber,
  					maxpage = this.teamlist.pages;
	    		if(currentpage<maxpage){
	    			currentpage++;
	    			this.pageTo(currentpage);
	    		}
	    		else{
	    			layer.msg('没有下一页了');
	    		}
  			},
  			gopage:function(e){
  				e.preventDefault();
  				var pageNum=$('#pageto').val();
  				this.pageTo(pageNum);
  			},
  			checkpage:function(e){
  				var pages = this.teamlist.pages; 
		    	var num = $('#pageto').val();
		    	if(num==0 && num!=""){
		    		$('#pageto').val('1');
		    	}else if(num>pages){
		    		$('#pageto').val(pages);
		    	}
  			}
	  	},
       
  	}
</script>