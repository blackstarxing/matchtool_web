<template>
	<div class="begining_tech">
		<p style="font-size:12px;">编辑比分以推进赛事进程:</p>
		<div class="start_btn">
			<div class="tech_range">
				<div class="tech_range_detail">
				</div>
				<div class="tech_range_num">20%</div>
			</div>
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
  ready: function () {
  	var _this=this;
          _this.beginparm.oetInfoId=window.sessionStorage.getItem("eventid");
          _this.beginparm.oetRoundId=window.sessionStorage.getItem("roundid");
          var parmstr=JSON.stringify(this.beginparm);
          var parm={};
          parm.jsonInfo=parmstr;
  	_this.$http.get('event/getStatusByTime',parm).then(function(response){
              console.log(response.data.object);
              var _rate=response.data.object.rate;
              $(".tech_range_detail").width(_rate*200);
              $(".tech_range_num").text(_rate+"%");
              
            })
  },
   
  }
</script>