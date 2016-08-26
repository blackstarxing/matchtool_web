<template>
	<backend-sidebar></backend-sidebar>
	<div class="g-bd">
		<div class="g-z pt40">
			<div class="reset-box f-cb">
				<div class="reset-words">
					<h3>发布设置</h3>
					<p>赛事发布后将无法修改赛事信息与赛制；发布后的赛事将不可撤回，但可以通过设置为私有状态让赛事不在列表中展现</p>
				</div>
				<div class="reset-btn">
					<section class="deploy-set" v-if="!status.isPublish"> 
						<div class="setbox">
							<div class="dis-sign" v-if="roundStatus>5"></div>							
							<!-- <input type="checkbox" checked="" v-model="isPublish" id="publish" @click="publishset" v-if="status.isPublish==1"> -->
							<input type="checkbox" v-model="isPublish" @click="publishset">
							<label></label>
						</div>
					</section>
					<button class="u-btn" disabled="" @click="" v-else>已发布</button>
				</div>
			</div>
			<div class="reset-box f-cb">
				<div class="reset-words">
					<h3>隐私设置</h3>
					<p>私有状态：赛事信息仅堆创建者可见，其他用户无法查看</p>
					<p>公开状态：所有用户都可以查看该赛事。</p>
				</div>
				<div class="reset-btn">
					<section class="deploy-set">
						<div class="setbox public">
							<div class="dis-sign" v-if="roundStatus>5"></div>
							<input type="checkbox" checked="" v-model="privacy" @click="privacyset" v-if="status.privacy==2">
							<input type="checkbox" v-model="privacy" @click="privacyset" v-else>
							<label></label>
						</div>
					</section>
				</div>
			</div>
			<div class="reset-box f-cb">
				<div class="reset-words">
					<h3>重置赛事</h3>
					<p>重置赛事后，会取消赛事开始状态，且清除所有录入的成绩。</p>
				</div>
				<div class="reset-btn">
					<button class="u-btn" v-bind:disabled="status.isPublish==0" @click="resetEvent">重置</button>
				</div>
			</div>
			<div class="reset-box f-cb">
				<div class="reset-words">
					<h3>删除赛事</h3>
					<p>删除赛事后，该赛事内所有信息将清除且无法恢复。</p>
				</div>
				<div class="reset-btn">
					<a href="" class="u-btn" @click="deleteEvent">删除</a>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
import backendSidebar from '../components/backendSidebar.vue'
  export default {
    data () {
      return {
      	eventname:"",
        oetInfoId:"",
        oetRoundId:"",
        checked:"",
        isPublish:"",
        privacy:"",
        status:""
      }
  	},
  	ready:function(){
  		var _this=this;
  		_this.eventname=window.sessionStorage.getItem("eventname");
  		_this.oetInfoId=window.sessionStorage.getItem("eventId");
  		_this.oetRoundId=window.sessionStorage.getItem("eventRoundId");
  		var eve={};
   		eve.jsonInfo=JSON.stringify({oetInfoId:_this.oetInfoId});
   		_this.$http.get('event/getEventStatus',eve).then(function(response) {
   			_this.status=response.data.object;

        	
        },function(response) {
            console.log(response);
        });
  	},
  	components:{
    	backendSidebar
	},
  	methods:{
  		// 刷新页面
  		refresh:function(e){
  			var _this=this;
  			var eve={};
	   		eve.jsonInfo=JSON.stringify({oetInfoId:_this.oetInfoId});
	   		_this.$http.get('event/getEventStatus',eve).then(function(response) {
	   			_this.status=response.data.object;
	        	
	        },function(response) {
	            console.log(response);
	        });
  		},
  		// 发布设置
	    publishset:function(e){
	    	var _this=this;
	    	var _target=$(e.currentTarget);
	    	var isPublish=0;
	    	var _html=_this.isPublish?'你确定要取消发布该赛事吗？':'你确定要发布该赛事吗？';
	        layer.confirm(_html, {
			  	btn: ['取消','确定'], //按钮
			  	move:false,
			  	closeBtn:0
			}, function(){
				layer.closeAll();
				_this.isPublish=!_this.isPublish;
			}, function(){				
				if(_target.attr('checked')=="checked"){
		    		_target.attr('checked',false);
		    		isPublish=0;
		    	}else{
		    		_target.attr('checked',true);
		    		isPublish=1;
		    	}
			  	var parm={};
   				parm.jsonInfo=JSON.stringify({eventId:_this.oetInfoId,isPublish:isPublish});
		    	_this.$http.get('event/setPublish',parm).then(function(response) {
		        	console.log(response.data.msg);
		        	if(response.data.code==1){
		        		layer.msg('发布状态已更改');
		        		_this.refresh();
		        	}else{
		        		layer.msg(response.data.msg);
		        	}
		        },function(response) {
		            console.log(response);
		        });
			});
	    },
	    // 隐私设置
	    privacyset:function(e){
	    	var _this=this;
	    	var _target=$(e.currentTarget);
	    	var privacy=0;
			if(_target.attr('checked')=="checked"){
	    		_target.attr('checked',false);
	    		privacy=1;
	    	}else{
	    		_target.attr('checked',true);
	    		privacy=2;
	    	}
	    	var parm={};
   			parm.jsonInfo=JSON.stringify({eventId:_this.oetInfoId,privacy:privacy});
	    	_this.$http.get('event/setPrivacy',parm).then(function(response) {
	        	console.log(response.data.msg);
	        	if(response.data.code==1){
	        		layer.msg('隐私状态已更改');
	        	}else{
	        		layer.msg(response.data.msg);
	        	}
	        },function(response) {
	            console.log(response);
	        });
	    },
  		resetEvent:function(e){
  			var _this=this;
  			layer.confirm('重置后所有比分数据将被清除，确定要重置赛事吗？', {
			  	btn: ['取消','重置'], //按钮
			  	move:false,
			  	closeBtn:0
			}, function(){
			  	layer.closeAll();
			}, function(){
			  	var parm={};
	   			parm.jsonInfo=JSON.stringify({oetRoundId:_this.oetRoundId,oetInfoId:_this.oetInfoId});
				_this.$http.get('event/reset',parm).then(function(response) {
		        	console.log(response.data);
		        	if(response.data.code==1){
		        		layer.msg("重置成功");
		        	}else{
		        		layer.msg(response.data.msg);
		        	}		        	
		        },function(response) {
		            console.log(response);
		        });
			});
  		},
  		deleteEvent:function(e){
  			e.preventDefault();
  			var _this=this;
  			layer.confirm('删除后所有数据将被清除，确定要删除赛事吗？', {
			  	btn: ['取消','确定'], //按钮
			  	move:false,
			  	closeBtn:0
			}, function(){
			  	layer.closeAll();
			}, function(){
			  	var parm={};
	   			parm.jsonInfo=JSON.stringify({oetInfoId:_this.oetInfoId});
				_this.$http.get('event/delete',parm).then(function(response) {
		        	console.log(response.data);
		        	if(response.data.code==1){
		        		layer.msg("删除成功");
		        		_this.$route.router.go({path: '/homepage'});
		        	}else{
		        		layer.msg(response.data.msg);
		        	}		        	
		        },function(response) {
		            console.log(response);
		        });
			});
  		}
  	},

  }
</script>