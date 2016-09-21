<template>
	<div class="m-sidebar">
		<ul>
			<li class="v-link-active" v-link="{ path: '/index'}"><span class="icon-uniE60C"></span></li>
			<li v-link="{ path: '/matchlist'}"><span class="icon-uniE60A"></span></li>
			<li @click="showPop" v-if="createPower"><span class="icon-uniE903"></span></li>
		</ul>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        createPower:false
      }
  	},
  	ready:function(){
  		var _this=this;
      _this.createPower = window.sessionStorage.getItem("isident") ? true : false ;
  	},
  	methods:{
  		showPop:function(e){
  			e.preventDefault();
  			$('.m-create').show();
  		}
  	}
  }
</script>