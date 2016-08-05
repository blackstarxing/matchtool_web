<template>
	<div class="createPop">
		<a href="" class="closeBtn" @click="closePop"></a>
		<h3>选择要创建的赛事类型</h3>
		<p>我们提供两种方式帮助你建立合理的赛事体系</p>
		<div class="createBox">
			<a href="" class="createBtn">创建快捷赛事</a>
			<p>适用于一到两个阶段即可完整赛程规划的赛事</p>
			<div class="or"></div>
			<a href="" class="createBtn leagueEnter">创建联赛</a>
			<p>适用于大型赛事支持多赛赛程、多赛制的赛事</p>
		</div>
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
  		closePop:function(e){
  			e.preventDefault();
  			$('.createPop').hide();
  		}
  	}
  }
</script>