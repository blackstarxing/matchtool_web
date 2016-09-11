<template>
	<div class="m-slideInto backendSidebar">
		<ul>
			<li v-link="{ path: '/matchDetails?eventId='+eventId}"><span class="icon-uniE603"></span>返回</li>
			<li v-link="{ path: '/backend/backendTechpic'}"><span class="icon-uniE604"></span>对阵图管理</li>
			<li v-link="{ path: '/backend/backendMsg'}"><span class="icon-uniE605"></span>信息与赛制</li>
      <li v-link="{ path: '/backend/backendContestant'}"><span class="icon-uniE602" style="font-size:28px;margin-left:-3px;"></span>选手管理</li>
      <li v-link="{ path: '/backend/reset'}"><span class="icon-uniE606"></span>发布管理</li>
		</ul>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        eventId:window.sessionStorage.getItem("eventId")
      }
  	},
  	ready:function(){
  		var _this=this;
  		if(location.hash=='#/backend/backendTeam'){
        $('.backendSidebar li').eq(3).addClass('slide-active');
      }else{
        $('.backendSidebar li').eq(3).removeClass('slide-active');
      }
  	},
  	methods:{

  	}
  }
</script>