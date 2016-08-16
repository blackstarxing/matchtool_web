<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w mt90 f-re">
		<div class="clearfix g-cl-bd">
			战队系统
			<button type="button" class="u-cl-bd">
				创建战队
			</button>
		</div>
		<div class="g-cl-list">
			<ul class="g-cl-taps">
				<li>我的战队</li>
				<li class="g-cl-ontaps">战队申请</li>
			</ul>
			<ul class="g-cl-sq clearfix">
				<li>
					<div class="clearfix g-cl-ltl">
						<span class="g-cl-zdtx f-fl">
							<img src="../../../static/images/me.jpg">
						</span>
						<span class="g-cl-zdyq f-fl">
							来自英雄联盟类型战队“东南亚舞王”的战队邀请
						</span>
					</div>
					<div class="g-cl-ltr">
						<button type="button" class="s-cl-hl">忽略</button>
						<button type="button" class="s-cl-js">接受</button>
					</div>
				</li>
				<li>
					<div class="clearfix g-cl-ltl">
						<span class="g-cl-zdtx f-fl">
							<img src="../../../static/images/me.jpg">
						</span>
						<span class="g-cl-zdyq f-fl">
							来自英雄联盟类型战队“东南亚舞王”的战队邀请
						</span>
					</div>
					<div class="g-cl-ltr">
						<button type="button" class="s-cl-hl">忽略</button>
						<button type="button" class="s-cl-js">接受</button>
					</div>
				</li>
				<li>
					<div class="clearfix g-cl-ltl">
						<span class="g-cl-zdtx f-fl">
							<img src="../../../static/images/me.jpg">
						</span>
						<span class="g-cl-zdyq f-fl">
							来自英雄联盟类型战队“东南亚舞王”的战队邀请
						</span>
					</div>
					<div class="g-cl-ltr">
						<button type="button" class="s-cl-hl">忽略</button>
						<button type="button" class="s-cl-js">接受</button>
					</div>
				</li>
				<li>
					<div class="clearfix g-cl-ltl">
						<span class="g-cl-zdtx f-fl">
							<img src="../../../static/images/me.jpg">
						</span>
						<span class="g-cl-zdyq f-fl">
							来自英雄联盟类型战队“东南亚舞王”的战队邀请
						</span>
					</div>
					<div class="g-cl-ltr">
						<button type="button" class="s-cl-hl">忽略</button>
						<button type="button" class="s-cl-js">接受</button>
					</div>
				</li>
				<li>
					<div class="clearfix g-cl-ltl">
						<span class="g-cl-zdtx f-fl">
							<img src="../../../static/images/me.jpg">
						</span>
						<span class="g-cl-zdyq f-fl">
							来自英雄联盟类型战队“东南亚舞王”的战队邀请
						</span>
					</div>
					<div class="g-cl-ltr">
						<button type="button" class="s-cl-hl">忽略</button>
						<button type="button" class="s-cl-js">接受</button>
					</div>
				</li>
			</ul>
			<div class="m-page ptb50">
            	<button id="prev" type="button"></button>
            	<div class="pagination"><span class="current">1</span>/<span>2</span></div>
            	<button id="next" type="button"></button>
            	<input type="text" value="" id="pageipt">
            	<button type="button" class="u-btn">跳转</button>
            </div>
		</div>
	</div>
</template>
<script type="text/javascript">
import topHead from '../../components/topHead.vue'
import sideBar from '../../components/sideBar.vue'
import slideBar from '../../components/slideBar.vue'
import createPop from '../../components/createPop.vue'
	export default {
		data (){
			return{

			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){

		},
		methods:{

		}
	}
</script>