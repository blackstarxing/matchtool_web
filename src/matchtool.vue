<template>
<div class="content clearfix">
          <router-view></router-view> 
          <page-foot></page-foot> 
 </div>
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

