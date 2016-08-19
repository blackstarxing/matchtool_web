<template>
  <backend-head></backend-head>
  <backend-sidebar></backend-sidebar>
  <div class="g-bd g-w">
    <div class="techpic-option">
      <a href="" class="techpic-edit">编辑对阵图</a>
      <a href="" class="techpic-start"><span class="icon-uniE62A"></span>开始比赛</a>
    </div>
    <div>
      
    </div>
  </div>
  
</template>

<script>

import backendHead from '../components/backendHead.vue'
import backendSidebar from '../components/backendSidebar.vue'
  export default {
    data () {
      return {
      }

    },
   components: {
      backendHead,
      backendSidebar
           
    }
  }
</script>
<style type="text/css">
  .techpic-option{
    padding-top: 50px;
  }
  .techpic-option a{
    display: inline-block;
    width: 200px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    color:#fff;
    text-align: center;
    background: url(../../static/images/btn0.png) no-repeat;
    margin-right: 30px;
  }
  .techpic-option a.techpic-start{
    background: url(../../static/images/btn1.png) no-repeat;
    color:#1e1f24;
  }
  .techpic-option a.techpic-start [class^="icon-"]{
    color:#1e1f24;
    margin-right: 5px;
    vertical-align: -2px;
  }
</style>
