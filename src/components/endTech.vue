<template>
	<div class="before_tech">
            <p style="font-size:12px;"></p>
            <div class="start_btn">
              <img src="../../static/images/start.png" width="100%" height="100%">
              <p class="start_text" @click="endTech">结束比赛</p>
            </div>
          </div>
</template>
<script>
  export default {
    data () {
    return {
    	
    }

  },
     methods: {
        endTech:function(){
          var _this=this;
          var endparm={};
          endparm.oetRoundId=window.sessionStorage.getItem("roundid");
          var parmstr=JSON.stringify(endparm);
          var parm={};
          parm.jsonInfo=parmstr;
        _this.$http.get('event/finish',parm).then(function(response){
          if(response.data.code){
            this.$route.router.go({path: '/techPic/resultTech'})
          }else{
            layer.msg(response.data.msg,{offset:"0px"});
          }
        },function(response) {
              console.log(response);
          });
      }
  }
  }
</script>