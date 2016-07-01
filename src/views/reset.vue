<template>
	 <top-nav></top-nav> 
	<div class="g-mgbg">
		<div class="g-mg-reset">
			<div class="g-tp"></div>
			<div class="m-d">
				<p class="m-d-tit">浙江省网娱大师-雪碧真英雄城市争霸赛</p>
				<div class="s-d">
					<div class="s-d-in">
						<p class="mb12 ls1">重置赛事</p>
						<p class="s-del">如果您需要调整参赛选手，您可以重置赛事，重置后所有比分数据将被清除，请慎重</p>
						<button type="button" class="u-del-btn">重&nbsp&nbsp置</button>
					</div>
				</div>
				<div class="s-d">
					<div class="s-d-in">
						<p class="mb12 ls1">删除赛事</p>
						<p class="s-del">删除这个赛事将清除其所有内容及痕迹，且无法撤销</p>
						<button type="button" class="u-del-btn">删&nbsp&nbsp除</button>
					</div>
				</div>
			</div>
			<div class="g-bt"></div>	
		</div>
		<div class="footer footer-del">
			<p>Copyright © 2016 浙江网竞网络科技有限公司未经许可不得复制、转载或摘编，违者必究！</p>
			<p class="mt6">浙ICP备13005497号-5</p>
			<img src="../../static/images/footer.png" class="mt32">
		</div>
	</div>
</template>
<script>
import topNav from '../components/topNav.vue'
  export default {
    data () {
      return {
        
      }
  	},
  	ready:function(){
  		
  	},
       components: {
          topNav
         
  }
  }
</script>