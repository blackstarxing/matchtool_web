<template>
	<div class="g-hd">
		<div class="header_left f-fl">
			<img src="../../static/images/logo.png" class="u-cs-lg" alt="" v-link="{ path: '/index'}">
		</div>
		<div class="g-cs-fh">
			<a v-link="{ path: '/index'}">返回首页</a>
		</div>
	</div>
	<div class="g-w mt90 f-re">
		<div class="g-cs-m" style="min-height: 7rem;">
			<p class="f-tc">
				<span class="g-cs-t">联系我们</span>
			</p>
			<p class="g-cs-p1">开赛吧隶属于浙江网竞网络科技有限公司</p>
			<p class="g-cs-p2">总部：</p>
			<p class="g-cs-p2">浙江网竞网络科技有限公司</p>
			<p class="g-cs-p2">杭州市滨江区六和路368号海创基地北楼4层</p>
			<p class="g-cs-p2">联系电话：4006902530</p>
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
                <span>浙江网竞网络科技有限公司 浙ICP备14028335号-2 | Copyright©2016 kaisaiba.com All Rights Reserved. 版权所有@浙江网竞网络科技有限公司</span>
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