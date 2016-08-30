<template>
	<backend-head></backend-head>
	
	  <router-view></router-view>
    <div class="footer" style="padding-left:230px;">
    浙江网竞网络科技有限公司  |   浙ICP备14028335号-2   |   Copyright©2014 kaisaiba.com All Rights Reserved.
  </div>
</template>
<script>
import backendHead from '../components/backendHead.vue'
export default {
	data () {
  		return{
			
		}
	},
  	ready:function(){
  			
  	},
  	methods:{
  		
  	},
  	components:{
        backendHead
  	}
}
</script>