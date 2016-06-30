<template>
<div class="tech_top">
		<div class="tech_top_text">
			<div class="tech_top_logo"><img src="../../static/imgs/lg_logo.png" width="100%"></div>
			<div class="tech_top_person">
				<span>您好，梅西</span>
				<span>退出</span>
			</div>
		</div>
	</div>
	<div class="tech_nav">
		<ul class="tech_nav_list clearfix">
			<li class="tech_nav_action">
				<div class="tect_nav_pic"><span class="icon-match icon_tool"></span></div>
				<div>赛事总览</div>
			</li>
			<li>
				<div class="tect_nav_pic"><span class="icon-athlete icon_tool"></span></div>
				<div>参赛选手</div>
			</li>
			<li>
				<div class="tect_nav_pic"><span class="icon-information icon_tool"></span></div>
				<div>资讯管理</div>
			</li>
			<li>
				<div class="tect_nav_pic"><span class="icon-install icon_tool"></span></div>
				<div>设置</div>
			</li>
			<li>
				<div class="tect_nav_pic"><span class="icon-delete icon_tool"></span></div>
				<div>重置／删除</div>
			</li>
		</ul>
	</div>
</template>
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
}
.tech_top_person{
	float: right;
	line-height: 50px;
	color: #fff;
}
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
</style>