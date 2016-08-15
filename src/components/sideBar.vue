<template>
	<div class="m-sidebar">
		<ul>
			<li><a href=""><i class="iconfont">&#xe60c</i></a></li>
			<li><a href=""><i class="iconfont">&#xe607</i></a></li>
			<li @click="showPop"><i class="iconfont">&#xe60a</i></a></li>
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