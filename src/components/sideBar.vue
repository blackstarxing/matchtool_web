<template>
	<div class="m-sidebar">
		<ul>
			<li class="v-link-active"><i class="iconfont">&#xe60c</i></li>
			<li><i class="iconfont">&#xe607</i></li>
			<li @click="showPop"><i class="iconfont">&#xe60a</i></li>
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