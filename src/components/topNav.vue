<template>
	<div class="tech_nav">
		<ul class="tech_nav_list clearfix">
			<li v-link="{ path: '/techPic'}">
				<div class="tect_nav_pic"><span class="icon-match icon_tool"></span></div>
				<div>赛事总览</div>
			</li>
			<li v-link="{ path: '/contestant'}">
				<div class="tect_nav_pic"><span class="icon-athlete icon_tool"></span></div>
				<div>参赛选手</div>
			</li>
			<li v-link="{ path: '/newslist'}">
				<div class="tect_nav_pic"><span class="icon-information icon_tool"></span></div>
				<div>资讯管理</div>
			</li>
			<li v-link="{ path: '/createEvent'}">
				<div class="tect_nav_pic"><span class="icon-install icon_tool"></span></div>
				<div>设置</div>
			</li>
			<li v-link="{ path: '/reset'}">
				<div class="tect_nav_pic"><span class="icon-delete icon_tool"></span></div>
				<div>重置／删除</div>
			</li>
		</ul>
	</div>
</template>
<style>
.tech_nav{
	width: 100%;
	height: 90px;
	background-color: #2a2e32;
	opacity: 0.7;
}
.tech_nav_list{
	margin-left: 15%;
}
.tech_nav_list li{
	float: left;
	padding:0 60px;
	color: #fff;
	text-align: center;
	cursor: pointer;
}
.tect_nav_pic{
	margin: 20px auto 10px;
}
.icon_tool{
	font-size: 20px;
}
.tech_nav_list .tech_nav_action{
	color: #f9a32a;
}
.v-link-active{
	color: #f9a32a !important;
}
</style>