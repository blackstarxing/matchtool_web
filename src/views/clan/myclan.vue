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
				<li v-bind:class="{'g-cl-ontaps':tap1}" val="1" @click="tapswitch">我的战队</li>
				<li v-bind:class="{'g-cl-ontaps':tap2}" val="2" @click="tapswitch">战队申请</li>
			</ul>
			<div v-show="tap2">
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
			<div v-show="tap1">
				<ul class="g-cl-zd clearfix">
					<li>
						<span class="g-cl-cap">队长</span>
						<div class="clearfix g-cl-zdif">
							<span class="g-cl-dtx">
								<img src="../../../static/images/me.jpg">
							</span>
							<div class="g-cl-sszd">
								<p class="g-cl-zdname">WE战队</p>
								<p class="g-cl-yxname">英雄联盟</p>
							</div>
						</div>
						<div class="g-cl-bmrs">
							<span class="col42a">126</span>/300
						</div>
					</li>
					<li>
						<div class="clearfix g-cl-zdif">
							<span class="g-cl-dtx">
								<img src="../../../static/images/me.jpg">
							</span>
							<div class="g-cl-sszd">
								<p class="g-cl-zdname">WE战队</p>
								<p class="g-cl-yxname">英雄联盟</p>
							</div>
						</div>
						<div class="g-cl-bmrs">
							<span class="col42a">126</span>/300
						</div>
					</li>
					<li>
						<div class="clearfix g-cl-zdif">
							<span class="g-cl-dtx">
								<img src="../../../static/images/me.jpg">
							</span>
							<div class="g-cl-sszd">
								<p class="g-cl-zdname">WE战队</p>
								<p class="g-cl-yxname">英雄联盟</p>
							</div>
						</div>
						<div class="g-cl-bmrs">
							<span class="col42a">126</span>/300
						</div>
					</li>
					<li>
						<div class="clearfix g-cl-zdif">
							<span class="g-cl-dtx">
								<img src="../../../static/images/me.jpg">
							</span>
							<div class="g-cl-sszd">
								<p class="g-cl-zdname">WE战队</p>
								<p class="g-cl-yxname">英雄联盟</p>
							</div>
						</div>
						<div class="g-cl-bmrs">
							<span class="col42a">126</span>/300
						</div>
					</li>
					<li>
						<div class="clearfix g-cl-zdif">
							<span class="g-cl-dtx">
								<img src="../../../static/images/me.jpg">
							</span>
							<div class="g-cl-sszd">
								<p class="g-cl-zdname">WE战队</p>
								<p class="g-cl-yxname">英雄联盟</p>
							</div>
						</div>
						<div class="g-cl-bmrs">
							<span class="col42a">126</span>/300
						</div>
					</li>
				</ul>
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
				tap1:true,
				tap2:false
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
			tapswitch:function(event){
				var _this = $(event.target);
				var v = _this.attr("val");
				if(v==2){
					this.tap1 = false;
					this.tap2 = true;
				}
				else if(v==1){
					this.tap1 = true;
					this.tap2 = false;
				}
			}
		}
	}
</script>