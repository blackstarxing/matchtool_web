<template>
<div class="m-mask">
  <div class="createPop">
    <a href="" class="closeBtn" @click="closePop"></a>
    <h3>选择要创建的赛事类型</h3>
    <p>我们提供两种方式帮助你建立合理的赛事体系</p>
    <div class="createBox">
      <button class="createBtn">创建快捷赛事</button>
      <p>适用于一到两个阶段即可完整赛程规划的赛事</p>
      <div class="or"></div>
      <button class="createBtn leagueEnter" disabled="">创建联赛</button>
      <p>适用于大型赛事支持多赛赛程、多赛制的赛事</p>
    </div>
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
  			$('.m-mask').hide();
  		}
  	}
  }
</script>