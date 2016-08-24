<template>
	<backend-head></backend-head>
	
	  <router-view></router-view> 
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