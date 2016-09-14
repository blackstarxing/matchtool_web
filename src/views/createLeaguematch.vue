<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="backLast">
		<div class="g-z">
			<a href=""></a>创建联赛
		</div>
	</div>
	<div class="g-w">
		<div class="g-z">
			<p class="m-c-tit">填写联赛基本信息</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<p class="g-c-l">联赛名称</p>
					<input type="text" class="u-c-ipt" placeholder="请输入赛事名称" style="width:480px;" v-model="name">
					<p class="g-c-l mt40">联赛主办方</p>
					<div class="g-c-zbf">
						<input type="radio" id="personal" class="regular-radio" checked="checked" />
						<label for="personal"></label>
						<label for="personal" class="u-c-per">
							<span class="u-c-headimg">
								<img src="../../static/images/head.png">
							</span>
							<span class="f-fl">
								blackstar
							</span>
						</label>
					</div>
					<p class="g-c-l mt40">联赛比赛项目</p>
					<select class="u-c-slt">
						<option>选择一个竞技项目</option>
						<option>英雄联盟</option>
						<option>星际争霸</option>
						<option>炉石传说</option>
						<option>自由篮球</option>
					</select>
					<p class="g-c-l mt40">联赛模式</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="online" name="matchitem" class="regular-radio" checked="checked" value="1" v-model="mode"/>
							<label for="online"></label>
							<label for="online" class="u-c-per">		
								<span class="f-fl">
									纯线上赛事
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="offline" name="matchitem" class="regular-radio" value="2" v-model="mode"/>
							<label for="offline"></label>
							<label for="offline" class="u-c-per">		
								<span class="f-fl">
									纯线下赛事
								</span>
							</label>
						</div>
						<div class="f-fl h36">
							<input type="radio" id="unite" name="matchitem" class="regular-radio" value="3" v-model="mode"/>
							<label for="unite"></label>
							<label for="unite" class="u-c-per">		
								<span class="f-fl">
									线上与线下结合模式
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
			<div class="confirmBtn">
				<a href="" class="nextBtn" @click="nextStep"><i></i>确认，进入赛制设置</a>
			</div>
		</div>
		<div class="steps">
			<span class="line"></span>
			<ul>
				<li class="current"><i></i>填写基本信息</li>
				<li><i></i>生成联赛主页</li>
				<li><i></i>设置赛事体系</li>
				<li><i></i>完善信息并发布</li>
			</ul>
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
                <span>浙江网竞网络科技有限公司  |   浙ICP备14028335号-2   |   Copyright©2016 kaisaiba.com All Rights Reserved.</span>
            </div>
        </div>
	</div>
</template>
<script>
import topHead from '../components/topHead.vue'
import sideBar from '../components/sideBar.vue'
import slideBar from '../components/slideBar.vue'
import createPop from '../components/createPop.vue'
export default {
	data () {
  		return {
  			name:"",
  			sponsorId:"",
  			itemId:"",
  			mode:""
  		}
	},
  	ready:function(){
  		var _this=this;
  		
  	},
  	methods:{
  		nextStep:function(e){
  			e.preventDefault();
  			var _this=this;
  			var parm={};
	   		parm.jsonInfo=JSON.stringify();
  		}
  	},
  	components:{
        topHead,
        sideBar,
        slideBar,
        createPop
  	}
}
</script>