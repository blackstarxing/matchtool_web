<template>
	<div class="g-hd">
		<div class="header_left f-fl">
			<img src="../../static/images/logo.png" class="u-cs-lg" alt="" v-link="{ path: '/index'}">
		</div>
		<div class="g-cs-fh">
			<a v-link="{ path: '/index'}"></a>返回首页
		</div>
	</div>
	<div class="g-w mt90 f-re">
		<div class="g-cs-m" style="min-height: 7rem">
			<p class="f-tc">
				<span class="g-cs-t">关于我们</span>
			</p>
			<p class="g-cs-p1" style="text-indent: 28px;">开赛吧隶属于定远县宽宏广告有限公司。</p>
			<p class="g-cs-p1" style="text-indent: 28px;">开赛吧-面向赛事组织者与选手的电竞赛事平台，便捷灵活的赛事创建，自动公平分组，排行统计等一体化管理方案。灵活参赛信息管理，统一个人参赛信息、战队的组建。</p>
			<p class="g-cs-p2 f269">赛事组织者:</p>
			<p class="g-cs-p2" style="text-indent: 28px;">提供便捷灵活的赛事创办工具，帮助你从规则创建、赛制设置到报名信息收集、赛前选手签到确认、自动公平分组对阵图生成、到开赛后比分晋级管理、选手排行统计、赛事视频管理的一体化管理方案。为你的赛事内容沉淀、品牌构建、粉丝维护提供有力的支撑。</p>
			<p class="g-cs-p2 f269">电竞玩家:</p>
			<p class="g-cs-p2" style="text-indent: 28px;">我们提供灵活的参赛信息管理，告别零散的报名方式，统一的个人参赛信息、战队的组建，让你和你的伙伴们高效报名参赛。同时你可以在开赛吧中看到各大赛事的信息、进程、结果。大到专业厂商举办的大型联赛小到主播水友赛，满足每一个热爱电竞的你。</p>
		</div>
	</div>
	<div class="footer">
		<div class="foot">
            <div class="tel">
                <div class="telIcon">
                    <img src="../../static/images/telephone.png">
                    <span id="lx" v-link="{ path: '/contact'}">联系我们</span>
                </div>
            </div>
            <div class="letter">
                <div class="letterIcon">
                    <img src="../../static/images/letter.png">
                    <span>招贤纳士：hr-wangyu@miqtech.com
              </span>
                </div>
            </div>
            <div class="address">
                <div class="addressIcon">
                    <img src="../../static/images/address.png">
                    <span id="gy" v-link="{ path: '/about'}">关于我们</span>
                </div>
            </div>
            <div class="contactInformation">
                <span>浙ICP备14028335号-2   |   Copyright©2016 kaisaiba.com All Rights Reserved.</span>
            </div>
        </div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data (){
			return{

			}
		},
		ready:function(){

		},
		methods:{

		}
	}
</script>