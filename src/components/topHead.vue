<template>
	<div class="g-hd">
		<div class="header_left f-fl">
			<a href="" class="slidein" @click="slidein"></a>
			<img src="../../static/images/logo.png" alt="">
		</div>
		<div class="header_right f-fr">
			<a href="" class="notify"></a>
			<div class="avatar">
				<img src="../../static/images/head.png" alt=""><i></i>
        <div class="nav-list">
          <ul>
            <li><a href="">创建赛事</a></li>
            <li><a href="">我的赛事</a></li>
            <li><a href="">个人设置</a></li>
            <li><a href="">参赛信息设置</a></li>
            <li><a href="">战队系统</a></li>
            <li><a href="">反馈我们</a></li>
            <li><a href="">登出</a></li>
          </ul>
        </div>
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
  		$('.avatar').hover(
        function(){
          $('.nav-list').show();
        },
        function(){
          $('.nav-list').hide();
        }
      )
  	},
  	methods:{
  		slidein:function(e){
  			e.preventDefault();
  			$('.m-slideInto').animate({left:"0px"},200);
  		}
  	}
  }
</script>