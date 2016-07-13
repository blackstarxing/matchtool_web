<template>
	<ul class="end_tech">
      <li>
        <img src="../../static/images/one.png">
        <span>冠军：</span>
        <span>{{champion}}</span>
      </li>
      <li>
        <img src="../../static/images/two.png">
        <span>亚军：</span>
        <span>{{second}}</span>
      </li>
      <!-- <li>
        <img src="../../static/images/three.png">
        <span>季军：</span>
        <span></span>
      </li>  -->   
    </ul>
</template>
<script>
  export default {
    data () {
    return {
    	champion:'',
      second:'',
      third:''
    }

  },
  ready: function () {
     this.champion=window.sessionStorage.getItem("champion");
     this.second=window.sessionStorage.getItem("second");
  },
     
  }
</script>
<style>
.end_tech{
    width: 300px;
  }
.end_tech li{
    margin-bottom: 10px;
  }
</style>