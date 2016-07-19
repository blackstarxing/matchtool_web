<template>
<div class="tech_top">
		<div class="tech_top_text">
			<div class="tech_top_logo" v-link="{ path: '/homepage'}"><img src="../../static/images/lg_logo.png" height="100%"></div>
			<div class="tech_top_person">
				<span>您好，{{username}}</span>
				<span class="logout" @click="logout">退出</span>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
    return {
   		username:""

    }
  },
  ready:function(){
  	this.username=window.sessionStorage.getItem("username");
  },
     methods: {
        cgAction: function () {
          
        },
        logout:function(e){
        	this.$http.post("event/logout").then(function(response){
        		this.$route.router.go({path: '/login'})			
			}, function(response){
				console.log(response);
			})
        }
  }
  }
</script>
