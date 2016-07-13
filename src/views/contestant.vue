<template>
	<top-head></top-head> 
   <top-nav></top-nav> 
		<div class="g-bd" style="margin-top:20px;">
			<div class="g-tp"></div>
			<div class="g-list">
				<h3>{{eventname}}</h3>
				<div class="m-operate f-cb">
					<div class="l-btn f-fl">
						<a href="javascript:void(0);" class="u-btn u-btn-add" @click="addplayer"><img src="../../static/images/plus.png" alt="">添加选手</a>
						<a href="javascript:void(0);" class="u-btn u-btn-upset" @click="upsetseat"></a>
					</div>					
					<div class="r-btn f-fr">
						<!-- <a href="">导入</a> -->
						<a href="" @click="exportExcel">导出</a>
					</div>
				</div>
				<div class="m-tb">
					<table class="account_table">
	                    <tbody>
	                    <tr>
	                        <th width="110px;">序号</th>
	                        <th>选手名称</th>
	                        <th>手机号码</th>
	                        <th>QQ</th>
	                        <th>身份证号码</th>
	                        <th v-if="needsign==1">已签到</th>
	                        <th width="135px;">操作</th>
	                    </tr>
	                    <tr v-for='member in memberlist.list' class="memberInfo">
	                        <td class="isfill" v-if="member.isfill==1">{{member.rownum}}</td>
	                        <td v-else>{{member.rownum}}</td>
	                        <td class="memberName">{{member.name}}</td>
	                        <td class="memberTel">{{member.telephone}}</td>
	                        <td class="memberQQ">{{member.qq}}</td>
	                        <td class="memberId">{{member.idcard}}</td>
	                        <td v-if="needsign==1">
	                        <section class="signed">
								<div class="signbox">
									<input type="checkbox" checked="" @click="signStatus" v-if="member.signed==1">
									<input type="checkbox" @click="signStatus" v-else>
									<label></label>
								</div>
							</section>
							</td>
	                        <td>
	                        	<div class="option">
	                        		<a href="javascript:void(0);" class="u-btn-write" data-id="{{member.id}}" @click="editMember"></a><a href="" class="u-btn-delete" data-id="{{member.id}}" @click="deleteMember"></a>
	                        	</div>
	                        </td>
	                    </tr>
	                    </tbody>
	                </table>
	                <div class="m-page">
	                	<a href="" id="prev" @click="prevpage"></a>
	                	<div class="pagination"><span class="current">{{memberlist.pageNumber}}</span>/<span>{{memberlist.pages}}</span></div>
	                	<a href="" id="next" @click="nextpage"></a>
	                	<input type="text" id="pageto" @keyup="checkpage">
	                	<a href="" class="u-btn" @click="gopage">跳转</a>
	                </div>
				</div>
			</div>		
			<div class="g-bt"></div>
		</div>		
	</div>
	<div class="m-mask">
		<div class="m-pop">
			<div class="wrap">
				<h3>添加参赛选手</h3>
				<a href="javascript:void(0);" class="u-btn-close" @click="closePop"></a>
				<div class="m-lst">				
					<label for="">选手名称：</label>
					<input type="text" class="name" name="name" placeholder="请输入参赛者名称">
					<div class="attention"></div>
				</div>
				<div class="m-lst">				
					<label for="">手机号码：</label>
					<input type="text" class="tel" name="tel" placeholder="请输入参赛者手机号码">
					<div class="attention"></div>
				</div>
				<div class="m-lst">				
					<label for="">QQ：</label>
					<input type="text" class="qq" name="qq" placeholder="请输入参赛者QQ号码">
					<div class="attention"></div>
				</div>
				<div class="m-lst">				
					<label for="">身份证：</label>
					<input type="text" class="idcard" name="idcard" placeholder="请输入参赛者身份证号码">
					<div class="attention"></div>
				</div>
				<div class="member-id" style="display:none"></div>
				<a href="javascript:void(0);" class="u-btn add-member" @click="setMember">添加</a>
			</div>			
		</div>
	</div>
</template>
<script>
import topNav from '../components/topNav.vue'
import topHead from '../components/topHead.vue'
  	export default {
       	data () {
    		return {
      			memberlist:"",
      			eventname:"",
      			eventId:"",
      			roundId:"",
      			needsign:""
    		}
  		},
   		ready: function () {     		
     		var _this=this;
     		_this.eventname=window.sessionStorage.getItem("eventname");
     		_this.eventId=window.sessionStorage.getItem("eventid");
     		_this.roundId=window.sessionStorage.getItem("roundid");
     		_this.needsign=window.sessionStorage.getItem("needsign");
	        _this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
	        	console.log(response);
	            _this.memberlist=response.data.object.pager;
	        },function(response) {
	            console.log(response);
	        });
  		},
  		methods: {
    		addplayer: function(e){
    			$(".wrap .attention").hide();
    			$('.name').val("");
		    	$('.tel').val("");
		    	$('.qq').val("");
		    	$('.idcard').val("");
    			$('.wrap h3').html("添加参赛选手");
    			$(".add-member").removeClass('edit-member').text("添加");
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
		        		layer.msg('选手顺序已打乱',{offset:"0px"});
		        		_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
				        	console.log(response.data);
				        	_this.memberlist=response.data.object.pager;
				        },function(response) {
				            console.log(response);
				        });
		        	}else{
		        		layer.msg(response.data.msg,{offset:"0px"});
		        	}
		        },function(response) {
		            console.log(response);
		        });
		    },
		    // 修改签到状态
		    signStatus:function(e){
		    	var _this=this;
		    	var _target=$(e.currentTarget);
		    	var memberId=_target.parents(".memberInfo").find(".u-btn-delete").attr("data-id");
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
		        		layer.msg('签到状态已更改',{offset:"0px"});
		        		_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
				        	console.log(response.data);
				        	_this.memberlist=response.data.object.pager;
				        },function(response) {
				            console.log(response);
				        });
		        	}else{
		        		layer.msg(response.data.msg,{offset:"0px"});
		        	}
		        },function(response) {
		            console.log(response);
		        });
		     	console.log(parm);
		    	console.log(sign);
		    },
		    // 编辑成员信息
		    editMember:function(e){
		    	$(".wrap .attention").hide();
		    	var _target=$(e.currentTarget);
		    	$(".add-member").addClass('edit-member').text("修改");
		    	$('.wrap h3').html("修改成员信息");
		    	$('.name').val(_target.parents(".memberInfo").find(".memberName").text());
		    	$('.tel').val(_target.parents(".memberInfo").find(".memberTel").text());
		    	$('.qq').val(_target.parents(".memberInfo").find(".memberQQ").text());
		    	$('.idcard').val(_target.parents(".memberInfo").find(".memberId").text());
		    	$('.member-id').html(_target.attr("data-id"));
		    	$('.m-mask').show();
		    },
		    // 删除成员
		    deleteMember:function(e){
		    	e.preventDefault();
		    	var _this=this;
		    	var _target=$(e.currentTarget);
		    	var parm={memberId:_target.attr("data-id")};
		    	layer.confirm('你确定要删除该成员吗？', {
				  	btn: ['确定','取消'], //按钮
				  	move:false
				}, function(){
					_this.$http.get('event/round/group/member/del',parm).then(function(response) {
			        	console.log(response.data);
			        	if(response.data.code==1){
			        		layer.msg('已删除',{offset:"0px"});
			        		_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
					        	console.log(response.data);
					        	_this.memberlist=response.data.object.pager;
					        },function(response) {
					            console.log(response);
					        });
			        	}else{
			        		layer.msg(response.data.msg,{offset:"0px"});
			        	}
			        },function(response) {
			            console.log(response);
			        });
				}, function(){
				  	
				});
		    },
		    // 保存成员信息
		    setMember:function(e){
		    	function errorPlacement(mes,element){
			    	var errorTips=element.parents(".m-lst").find('div.attention');
			    	if(mes!=""){
			    		errorTips.show().html(mes);
			    	}else{
			    		errorTips.hide();
			    	}			    				    	
			    }
			    function formValidate(){
			    	var valid=true;
			    	$(".wrap input").each(function(){
			    		var $this=$(this);
						var value=$this.val(),name=$this.attr('name');	
			    		var message="";
			    		if(name=="name"){
			    			if(value==""){
			    				valid=false;
					    		message="选手名称不能为空";
					    	}
					    	errorPlacement(message,$this);
			    		}else if(name=="tel"){
			    			if(value==""){
			    				valid=false;
					    		message="手机号码不能为空";
			    			}else if(!/^1([0-9]){10}$/.test(value)){
			    				valid=false;
					    		message="请输入正确的手机格式";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="qq"){
			    			if(value==""){
			    				valid=false;
					    		message="QQ号码不能为空";
			    			}else if(!/^[1-9]\d{4,10}$/.test(value)){
			    				valid=false;
					    		message="请输入正确的QQ号码";
			    			}
			    			errorPlacement(message,$this);
			    		}else if(name=="idcard"){
			    			if(value==""){
			    				valid=false;
					    		message="身份证号码不能为空";
			    			}else if(!/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(value)){
			    				valid=false;
					    		message="请输入正确的身份证号码";
			    			}
			    			errorPlacement(message,$this);
			    		}
				    	   
				    });
				    return valid;
			    };
		    	var _this=this;
		    	var _target=$(e.currentTarget); 
		    	if(formValidate()){
		    		if(_target.hasClass('edit-member')){
			    		var parmstr=JSON.stringify({roundId:_this.roundId,id:$('.member-id').html(),name:$('.name').val(),telephone:$('.tel').val(),qq:$('.qq').val(),idcard:$('.idcard').val()});
				    	var parm={};
				    	parm.memberJson=parmstr;
				    	_this.$http.get('event/round/group/member/edit',parm).then(function(response) {
				        	console.log(response.data);
				        	if(response.data.code==0){
				        		$('.m-mask').hide();
				        		layer.msg('修改成功',{offset:"0px"});
						    	_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
						        	console.log(response.data);
						        	_this.memberlist=response.data.object.pager;
						        },function(response) {
						            console.log(response);
						        });
				        	}else{
				        		$('.m-mask').hide();
				        		layer.msg(response.data.msg,{offset:"0px"});
				        	}
				        	console.log(parm);
				        },function(response) {
				            console.log(response.data.msg);
				        });
			    	}else{
			    		var parmstr=JSON.stringify({roundId:_this.roundId,name:$('.name').val(),telephone:$('.tel').val(),qq:$('.qq').val(),idcard:$('.idcard').val()});
				    	var parm={};
				    	parm.memberJson=parmstr;
			    		_this.$http.get('event/round/group/member/add',parm).then(function(response) {
				        	console.log(response.data);
				        	if(response.data.code==1){
				        		$('.m-mask').hide();
				        		layer.msg('添加成功',{offset:"0px"});
				        		_this.$http.post('event/round/group/member/list',{roundId:_this.roundId}).then(function(response) {
						        	console.log(response.data);
						        	_this.memberlist=response.data.object.pager;
						        },function(response) {
						            console.log(response);
						        });
				        	}else{
				        		$('.m-mask').hide();
				        		layer.msg(response.data.msg,{offset:"0px"});
				        	}
				        	console.log(parm);
				        },function(response) {
				            console.log(response.data.code);
				        });
			    	}
		    	}
		    },
		    // 导出列表
		    exportExcel:function(e){
		    	e.preventDefault();
		    	var _this=this;
		    	var _target=$(e.currentTarget); 
		    	window.location.href="http://wy.oetapi.wangyuhudong.com/event/round/group/member/export?roundId="+_this.roundId;
		    },
		    // 翻页
  			prevpage:function(e){
  				e.preventDefault();
  				var currentpage = this.memberlist.pageNumber;
	    		if(currentpage>1){
	    			currentpage--;
	    			this.$http.post("event/round/group/member/list",{roundId:this.roundId,pageNumber:currentpage}).then(function(response){
	    				this.memberlist=response.data.object.pager;
		    		}, function(response){
		    			console.log(response);
		    		})
	    		}
	    		else{
	    			layer.msg('没有上一页了',{offset:"0px"});
	    		}
  			},
  			nextpage:function(e){
  				e.preventDefault();
  				var currentpage = this.memberlist.pageNumber,
  					maxpage = this.memberlist.pages;
	    		if(currentpage<maxpage){
	    			currentpage++;
	    			this.$http.post("event/round/group/member/list",{roundId:this.roundId,pageNumber:currentpage}).then(function(response){
	    				this.memberlist=response.data.object.pager;
		    		}, function(response){
		    			console.log(response);
		    		})
	    		}
	    		else{
	    			layer.msg('没有下一页了',{offset:"0px"});
	    		}
  			},
  			gopage:function(e){
  				e.preventDefault();
  				var pageNum=$('#pageto').val();
  				this.$http.post("event/round/group/member/list",{roundId:this.roundId,pageNumber:pageNum}).then(function(response){
	    				this.memberlist=response.data.object.pager;
		    		}, function(response){
		    			console.log(response);
		    		})
  			},
  			checkpage:function(e){
  				var pages = this.memberlist.pages; 
		    	var num = $('#pageto').val();
		    	if(num==0 && num!=""){
		    		$('#pageto').val('1');
		    	}else if(num>pages){
		    		$('#pageto').val(pages);
		    	}
  			}
	  	},
       components: {
          topNav,
          topHead
         
  }
  	}
</script>