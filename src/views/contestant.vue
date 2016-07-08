<template>
 <top-nav></top-nav> 
		<div class="g-bd" style="margin-top:20px;">
			<div class="g-tp"></div>
			<div class="g-list">
				<h3>浙江省网娱大师-雪碧真英雄城市争霸赛</h3>
				<div class="m-operate f-cb">
					<div class="l-btn f-fl">
						<a href="javascript:void(0);" class="u-btn u-btn-add" @click="addplayer"><img src="../../static/images/plus.png" alt="">添加选手</a>
						<a href="javascript:void(0);" class="u-btn u-btn-upset"></a>
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
	                        <th>序号</th>
	                        <th>选手名称</th>
	                        <th>手机号码</th>
	                        <th>QQ</th>
	                        <th>身份证号码</th>
	                        <th>已签到</th>
	                        <th width="135px;">操作</th>
	                    </tr>
	                    <tr v-for='member in memberlist.list' class="memberInfo">
	                        <td>{{$index+1}}</td>
	                        <td class="memberName">{{member.name}}</td>
	                        <td class="memberTel">{{member.telephone}}</td>
	                        <td class="memberQQ">{{member.qq}}</td>
	                        <td class="memberId">{{member.idcard}}</td>
	                        <td>
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
	                	<a href="" id="prev"></a>
	                	<div class="pagination"><span class="current">{{memberlist.pageNumber}}</span>/<span>{{memberlist.pages}}</span></div>
	                	<a href="" id="next"></a>
	                	<input type="text">
	                	<a href="" class="u-btn">跳转</a>
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
  	export default {
       	data () {
    		return {
      			memberlist:"",
      			roundId:""
    		}
  		},
   		ready: function () {     		
     		var _this=this;
     		_this.roundId=window.sessionStorage.getItem("eventid");
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
		        	console.log(response.data);
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
		    	_this.$http.get('event/round/group/member/del',parm).then(function(response) {
		        	console.log(response);
		        },function(response) {
		            console.log(response);
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
				        	console.log(response);
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
				        	console.log(parm);
				        },function(response) {
				            console.log(response.data.code);
				        });
			    	}
		    	}
		    },
		    exportExcel:function(e){
		    	e.preventDefault();
		    	var _this=this;
		    	var _target=$(e.currentTarget); 
		    	window.location.href="http://192.168.30.62:8080/event/round/group/member/export?roundId="+_this.roundId;
		    }
	  	},
       components: {
          topNav
         
  }
  	}
</script>