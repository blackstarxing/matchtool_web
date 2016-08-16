<template>
	<div class="m-slideInto backendSidebar">
		<ul>
			<li><i class="iconfont">&#xe603</i>返回</li>
			<li v-link="{ path: '/backend'}"><i class="iconfont">&#xe605</i>信息与赛制</li>
			<li v-link="{ path: '/backendTechPic'}"><i class="iconfont">&#xe604</i>对阵图管理</li>
      <li v-link="{ path: '/backendContestant'}"><i class="iconfont">&#xe602</i>选手管理</li>
      <li v-link="{ path: '/reset'}"><i class="iconfont">&#xe606</i>发布管理</li>
		</ul>
	</div>
</template>
<script>
  export default {
    data () {
      return {

      }
  	},
  	ready:function(){
  		var _this=this;
  		
  	},
  	methods:{
  		
  	}
  }
</script>