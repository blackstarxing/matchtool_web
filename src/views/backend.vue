<template>
	<backend-head></backend-head>
	  <router-view></router-view>
    <div class="footer" style="padding-left:230px;">
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
</template>
<script>
import backendHead from '../components/backendHead.vue'
export default {
	data () {
  		return{
			
		}
	},
  	ready:function(){
  			
  	},
  	methods:{
  		
  	},
  	components:{
        backendHead
  	}
}
</script>