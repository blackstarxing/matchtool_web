<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w" style="margin-top:90px;">
		全部赛事
		<div class="match-box">
			<div class="m-matchlist" v-for="match in matchlists">
				<h3>王者荣耀QGC联赛-华东区-杭州</h3>
				<div class="match-sponsor">
					<!-- <img v-bind:src="'http://img.wangyuhudong.com/'+match.icon"> -->网娱大师官方赛事组
				</div>
				<div>
					<span class="icon-uniE610"></span>{{}}<span class="icon-uniE615"></span><span class="icon-uniE613"></span><span class="icon-uniE612"></span>{{match.maxNum}}<span class="icon-uniE60F"></span>
				</div>
			</div>
		</div>
		
	</div>
</template>
<script type="text/javascript">
import topHead from '../components/topHead.vue'
import sideBar from '../components/sideBar.vue'
import slideBar from '../components/slideBar.vue'
import createPop from '../components/createPop.vue'
	export default {
		data () {
			return{
				matchlists:""
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){
			var _this=this;
			var parm={};
			parm.jsonInfo=JSON.stringify({pageNumber:1});
	        _this.$http.get('event/getAllEventRoundList',parm).then(function(response) {
	        	if(response.data.code == 1){
	        		_this.matchlists=response.data.object.pager.list;
	        	}else{
	        		_this.$route.router.go({path: '/landingpage'}); 
	        	}
	        },function(response) {
	            console.log(response);
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
				return year+"-"+month+"-"+date+"   "+hour+":"+minute;
			}
		},
		methods:{
			linkDetail:function(e){
				e.preventDefault();
				var _target=$(e.currentTarget);
  				var _eventid=_target.parent().find(".get_eventid").text();
  				var _roundid=_target.parent().find(".get_roundid").text();
  				window.sessionStorage.setItem("eventId",_eventid);
  				window.sessionStorage.setItem("eventRoundId",_roundid);
  				this.$route.router.go({path: '/matchDetails'})
			}
		},
		events:{
			
		}
	}
</script>
<style type="text/css">
	.match-box{
		background: #171a21;
		padding:30px 20px;
	}
	.m-matchlist{
		background: #14181d;
		border:1px solid #23282e;
		margin-bottom: 20px;
		padding:20px;
		color:#7a8387;
	}
	.m-matchlist h3{
		font-size: 18px;
		color:#f2f6f9;
	}
	.match-sponsor{
		font-size: 12px;
	}
	.avatar img {
	    vertical-align: middle;
	    border: 2px solid #666a74;
	    border-radius: 50%;
	    width: 32px;
	    height: 32px;
	}
</style>