<template>
	<div class="m-sidebar">
		<ul>
			<li><a href=""><img src="../../static/images/nav1.png" alt=""></a></li>
			<li><a href=""><img src="../../static/images/nav2.png" alt=""></a></li>
			<li @click="showPop"><a href=""><img src="../../static/images/nav3.png" alt=""></a></li>
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
  		showPop:function(e){
  			e.preventDefault();
  			$('.createPop').show();
  		}
  	}
  }
</script>