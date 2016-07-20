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
			<li v-link="{ path: '/editEvent'}">
				<div class="tect_nav_pic"><span class="icon-install icon_tool"></span></div>
				<div>赛事编辑</div>
			</li>
			<li v-link="{ path: '/reset'}">
				<div class="tect_nav_pic"><span class="icon-delete icon_tool"></span></div>
				<div>重置／删除</div>
			</li>
			<li v-link="{ path: '/homepage'}">
				<div class="tect_nav_pic"><span class="icon-home icon_tool"></span></div>
				<div>返回</div>
			</li>
		</ul>
	</div>
</template>