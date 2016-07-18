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

    }
  },
  ready: function () {
  	var _this=this;
    var _rate=window.sessionStorage.getItem("turnrate");
    if(_rate){
       $(".tech_range_detail").width(_rate*2);
       $(".tech_range_num").text(_rate+"%");
       if(_rate==100){
        this.$route.router.go({path: '/techPic/endTech'})
       }
    }else{
       $(".tech_range_detail").width(0);
       $(".tech_range_num").text("0%");
    }
  },
   
  }
</script>