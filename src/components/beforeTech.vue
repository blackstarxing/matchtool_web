<template>
	<div class="before_tech">
            <p style="font-size:12px;">当一切都准备就绪后，您就可以:</p>
            <div class="start_btn">
              <img src="../../static/images/start.png" width="100%" height="100%">
              <p class="start_text" @click="beginTech">开始比赛</p>
            </div>
          </div>
</template>
<script>
  export default {
    data () {
    return {
    	beginparm:{}
    }

  },
     methods: {
        beginTech:function(){
          var _this=this;
          _this.beginparm.oetInfoId=window.sessionStorage.getItem("eventid");
          _this.beginparm.oetRoundId=window.sessionStorage.getItem("roundid");
          var parmstr=JSON.stringify(this.beginparm);
          var parm={};
          parm.jsonInfo=parmstr;
        _this.$http.get('event/start',parm).then(function(response){
          if(response.data.msg=="success"){
            this.$route.router.go({path: '/techPic/beginingTech'})
          }
        },function(response) {
              console.log(response);
          });
      }
  }
  }
</script>