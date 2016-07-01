<template>
<div class="tech_top">
		<div class="tech_top_text">
			<div class="tech_top_logo" v-link="{ path: '/homepage'}"><img src="../../static/images/lg_logo.png" width="100%"></div>
			<div class="tech_top_person">
				<span>您好，梅西</span>
				<span>退出</span>
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
     methods: {
        cgAction: function () {
          
        }
  }
  }
</script>

<style>
.tech_top{
	width: 100%;
	height: 60px;
	background-color: #000;
	opacity: 0.8;
}
.tech_top_text{
	width: 62%;
	height: 50px;
	margin: auto;
}
.tech_top_logo{
	float: left;
	cursor: pointer;
}
.tech_top_person{
	float: right;
	line-height: 50px;
	color: #fff;
}
</style>