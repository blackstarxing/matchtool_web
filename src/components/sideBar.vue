<template>
	<div class="m-sidebar">
		<ul>
			<li class="v-link-active" v-link="{ path: '/index'}"><span class="icon-uniE60C"></span></li>
			<li v-link="{ path: '/matchlist'}"><span class="icon-uniE607"></span></li>
			<li @click="showPop"><span class="icon-uniE60A"></span></li>
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
  			$('.m-create').show();
  		}
  	}
  }
</script>