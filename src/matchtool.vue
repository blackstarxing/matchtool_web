<template>
<<<<<<< HEAD
<div>
	<router-view></router-view> 
</div>
=======
<div class="content clearfix">
	<top-head></top-head> 
          <router-view></router-view> 
          <page-foot></page-foot> 
 </div>
>>>>>>> 1c69586bef580f1be2d18659b8b32b1873a7d1d9
</template>
<script type="text/javascript">
import topHead from './components/topHead.vue'
import pageFoot from './components/pageFoot.vue'
  export default {
    data () {
      return {
        
      }
  },
  components: {
          topHead,
          pageFoot
         
  }
  }
</script>

