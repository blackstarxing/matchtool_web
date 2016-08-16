<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
<div class="change_pw">
	<div class="pw_status">
		<ul class="status_list clearfix">
			<li >
				<span class="status_num status_finish">1</span>
				<span class="status_line"></span>
			</li>
			<li>
				<span class="status_num">2</span>
				<span class="status_line"></span>
			</li>
			<li>
				<span class="status_num">3</span>
				<span class="status_line"></span>
			</li>
			<li>
				<span class="status_num">4</span>
			</li>
		</ul>
	</div>
	<router-view></router-view> 
</div>
</template>
<script type="text/javascript">

import topHead from '../../components/topHead.vue'
import sideBar from '../../components/sideBar.vue'
import slideBar from '../../components/slideBar.vue'
import createPop from '../../components/createPop.vue'
	export default {
		data () {
			return{
				
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready: function () {
	
		},
		methods:{
			
			
		}
	}
</script>
<style>
	.change_pw{
		width: 500px;
		height: 500px;
		margin: 120px auto 0;
	}
	.status_list{
		margin: 20px 20px 50px;
	}
	.status_list li{
		float: left;
		position: relative;
		margin-right: 5px;
		height: 22px;
		line-height: 22px;
	}
	.status_num{
		display: inline-block;
		color: #c9c6be;
		width: 22px;
		height: 22px;
		background: url(../../../static/images/pw_b.png) no-repeat;
		text-align: center;
		line-height: 22px;
	}
	.status_line{
		display: inline-block;
		width: 110px;
		height: 5px;
		background-color: #fdb91a;
		margin: 0 0 2px 3px;
	}
	.status_list li .status_finish{
		background: url(../../../static/images/pw_a.png) no-repeat;
		color: #000;
	}
</style>