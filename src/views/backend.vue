<template>
	<backend-head></backend-head>
	<backend-sidebar></backend-sidebar>
	  <router-view></router-view> 
</template>
<script>
import backendHead from '../components/backendHead.vue'
import backendSidebar from '../components/backendSidebar.vue'
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
        backendHead,
        backendSidebar
  	}
}
</script>