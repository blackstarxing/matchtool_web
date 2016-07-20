<template>
	<top-head></top-head> 
	 <top-nav></top-nav> 
	<div class="g-mgbg">
		<div class="g-mg-reset">
			<div class="g-tp"></div>
			<div class="m-d">
				<p class="m-d-tit">{{eventname}}</p>
				<div class="s-d">
					<div class="s-d-in">
						<p class="mb12 ls1">重置赛事</p>
						<p class="s-del">如果您需要调整参赛选手，您可以重置赛事，重置后所有比分数据将被清除，请慎重</p>
						<button type="button" class="u-del-btn" @click="resetEvent">重&nbsp&nbsp置</button>
					</div>
				</div>
				<div class="s-d">
					<div class="s-d-in">
						<p class="mb12 ls1">删除赛事</p>
						<p class="s-del">删除这个赛事将清除其所有内容及痕迹，且无法撤销</p>
						<button type="button" class="u-del-btn" @click="deleteEvent">删&nbsp&nbsp除</button>
					</div>
				</div>
			</div>
			<div class="g-bt"></div>	
		</div>
	</div>
</template>
<script>
import topNav from '../components/topNav.vue'
import topHead from '../components/topHead.vue'
  export default {
    data () {
      return {
      	eventname:"",
        oetInfoId:"",
        oetRoundId:""
      }
  	},
  	ready:function(){
  		var _this=this;
  		_this.eventname=window.sessionStorage.getItem("eventname");
  		_this.oetInfoId=window.sessionStorage.getItem("eventid");
  		_this.oetRoundId=window.sessionStorage.getItem("roundid");
  	},
  	methods:{
  		resetEvent:function(e){
  			var _this=this;
  			layer.confirm('你确定要重置该项赛事吗？', {
			  	btn: ['确定','取消'], //按钮
			  	move:false
			}, function(){
			  	var parm={};
	   			parm.jsonInfo=JSON.stringify({oetRoundId:_this.oetRoundId,oetInfoId:_this.oetInfoId});
				_this.$http.get('event/reset',parm).then(function(response) {
		        	console.log(response.data);
		        	if(response.data.code==1){
		        		layer.msg("重置成功",{offset:"0px"});
		        	}else{
		        		layer.msg(response.data.msg,{offset:"0px"});
		        	}		        	
		        },function(response) {
		            console.log(response);
		        });
			}, function(){
			  	
			});
  		},
  		deleteEvent:function(e){
  			var _this=this;
  			layer.confirm('你确定要删除该项赛事吗？', {
			  	btn: ['确定','取消'], //按钮
			  	move:false
			}, function(){
			  	var parm={};
	   			parm.jsonInfo=JSON.stringify({oetInfoId:_this.oetInfoId});
				_this.$http.get('event/delete',parm).then(function(response) {
		        	console.log(response.data);
		        	if(response.data.code==1){
		        		layer.msg("删除成功",{offset:"0px"});
		        		_this.$route.router.go({path: '/homepage'});
		        	}else{
		        		layer.msg(response.data.msg,{offset:"0px"});
		        	}		        	
		        },function(response) {
		            console.log(response);
		        });
			}, function(){
			  	
			});
  		}
  	},
    components: {
          topNav,
          topHead
         
  }
  }
</script>