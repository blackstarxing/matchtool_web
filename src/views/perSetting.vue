<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="persetting">
		<h2 class="perset_title">个人中心</h2>
		<div class="perset_body">
			<div class="perset_head">
				<ul class="perset">
					<li v-for="item in tabList" v-text="item.name" :class="{ perset_active: item.isCur }" @click="setCur($index)"></li>
					<!-- <li class="perset_active">基本资料</li>
					<li>参赛资料</li>
					<li>组织者认证</li> -->
				</ul>
			</div>
			<div class="perset_content">
				<div class="perset_basicInfo" v-show="tabFlag == 0">
					<p class="idInfo">当前登录账号：<span class="curId">1233556666</span></p>
					<div class="basicInfo_form">
					<div class="form_item">
						<label for="" class="text_label">昵称 : </label>
						<input id="" type="text" class="nickname text_box">
					</div>	
					<div class="form_item">
						<label for="" class="text_label">性别 : </label>
						<div class="g-c-zbf perset_zbf">
							<div class="f-fl g-c-ms">
								<input type="radio" id="man" name="gender" class="regular-radio" checked="checked" value="1" v-model="formdata.mode"/>
								<label for="man" @click="slideup"></label>
								<label for="man" class="u-c-per" @click="slideup">		
									<span class="f-fl">
										男
									</span>
								</label>
							</div>
								<div class="f-fl g-c-ms">
									<input type="radio" id="woman" name="gender" class="regular-radio" value="2" v-model="formdata.mode"/>
									<label for="woman" @click="slidedown"></label>
									<label for="woman" class="u-c-per" @click="slidedown">		
										<span class="f-fl">
											女
										</span>
									</label>
								</div>
								<div class="f-fl h36">
									<input type="radio" id="secret" name="gender" class="regular-radio" value="3" v-model="formdata.mode"/>
									<label for="secret" @click="slidedown"></label>
									<label for="secret" class="u-c-per" @click="slidedown">		
										<span class="f-fl">
											保密
										</span>
									</label>
								</div>
							</div>
						</div>
					<div class="form_item region">
						<label for="" class="text_label">地区 : </label>
						<select class="u-c-slt perset_slt mr-20" name="provinces" id="" v-model="formdata.itemId" @change="getServerList" required>
							<option value="" selected>浙江省</option>
						</select>
						<select class="u-c-slt perset_slt" name="citys" id="" v-model="formdata.itemId" @change="getServerList" required>
							<option value="" selected>杭州市</option>
						</select>
					</div>
					<div class="form_item birthday">
						<label for="" class="text_label">生日 : </label>
						<select class="u-c-slt perset_slt" name="year" id="" v-model="formdata.itemId" @change="getServerList" required>
							<option value="" selected>2016</option>
						</select>
						<span>年</span>
						<select class="u-c-slt perset_slt" name="month" id="" v-model="formdata.itemId" @change="getServerList" required>
							<option value="" selected>12</option>
						</select>
						<span>月</span>
						<select class="u-c-slt perset_slt" name="day" id="" v-model="formdata.itemId" @change="getServerList" required>
							<option value="" selected>12</option>
						</select>
						<span class="mr-0">日</span>
					</div>
					<div class="form_item introduction">
						<label for="" class="text_label">个人介绍 : </label>
						<textarea class="introduction-text text_box" placeholder="150字以内"></textarea>
					</div>
					<div class="setImage">
						<img class="user_pic"/>
						<div class="pic_mask">
							<img class="pic_mask_icon">
							<p class="pic_mask_text"><span>设置头像</span></p>
						</div>
					</div>
				</div>
				</div>
			<div class="perset_competingInfo" v-show="tabFlag == 1">
				<p class="cptInfo_title">选手信息</p>
				<div class="cptInfo_content">
					<div class="cpt_item form_item">
						<label for="realName">真实姓名 ：</label>
						<input type="text" id="realName" class="text_box">
					</div>
					<div class="cpt_item form_item">
						<label for="validatePerId">有效身份证 ：</label>
						<input type="text" id="validatePerId" class="text_box">
					</div>
					<div class="cpt_item form_item">
						<label for="telephone">手机号 ：</label>
						<input type="text" id="telephone" class="text_box">
					</div>
					<div class="cpt_item form_item">
						<label for="qq">QQ ：</label>
						<input type="text" id="qq" class="text_box">
					</div>
					<div class="cpt_item form_item">
						<label for="weixin">微信号 ：</label>
						<input type="text" id="weixin" class="text_box">
					</div>
				</div>
			</div>
		</div>
		</div>
		<a href="javascript:;" class="saveBtn">保 存</a>
	</div>
</template>
<script type="text/javascript">
	import topHead from '../components/topHead.vue'
	import sideBar from '../components/sideBar.vue'
	import slideBar from '../components/slideBar.vue'
	import createPop from '../components/createPop.vue'	
	export default {
		data () {
			return {
				tabFlag: 0,
				tabList: [
					{ id: 0, name: '基本资料',isCur: true },
					{ id: 1, name: '参赛资料', isCur: false },
					{ id: 2, name: '组织者认证', isCur: false }
				]
			}
		},
		components: {
			topHead,
      sideBar,
      slideBar,
      createPop
		},
		ready: function () {
			
		},
		methods: {
			setCur: function (index) {
				this.tabList.map(function (v, i) {
					i == index ? v.isCur = true : v.isCur = false
				})
				this.tabFlag = index
			}
		}
	}
</script>
<style type="text/css">
	.persetting {
		width: 600px;
		margin: 60px auto;
		overflow: hidden;
	}
	.perset_title {
		margin-top: 40px;
		margin-bottom: 15px; 
		color: #fdb91a;
	}
	.perset_body {
		border: 6px solid #292f3b;
	}
	.perset {
		width: 100%;
		height: 55px;
		line-height: 55px;
		background: url(../../static/images/regtop.png);
	}
	.perset li {
		display: inline-block;
		width: 80px;
		height: 50px;
		font-size: 14px;
		color: #fff;
		text-align: center;
		margin: 0 18px 0 24px;
		cursor: pointer;	
	}
	.perset .perset_active {
		border-bottom: 4px solid #fdb91a;
		color: #fdb91a;
	}
	.perset_content {
		padding: 30px 34px;
	}
	.basicInfo_form {
		position: relative;
	}
	.idInfo {
		font-size: 12px;
		color: #42aa53;
	}
	.curId {
		color: #fdb91a;
	}
	.form_item {
		box-sizing: border-box;
		height: 36px;
		line-height: 36px;
		margin-top: 28px;
		font-size: 14px;
	}
	.form_item .text_label {
		font-weight: bold;
		color: #7a8387;
		vertical-align: top;	
		margin-right: 10px;
	}
	.form_item input {
		text-indent: 12px;
	}
	.form_item .nickname {
		width: 260px;
		height: 36px;
		box-sizing: border-box;
	}
	.form_item .text_box {
		background: #14181d;
		color: #f2f6f9;
		border: 1px solid #353d48;
	}
	.g-c-zbf.perset_zbf {
		display: inline-block;
	}
	.u-c-slt.perset_slt {
		width: 120px;
		background-position: 100px center;
	}
	.mr-20 {
		margin-right: 20px;
	}
	.birthday span {
		margin: 0 8px;
		font-size: 14px;
		color: #f2f6f9;
	}
	span.mr-0 {
		margin-right: 0;
	}
	.form_item.introduction {
		height: auto;
	}
	.form_item .introduction-text {
		width: 428px;
		height: 123px;
		font-size: 14px;
		box-sizing: border-box;
		padding: 10px 12px;
	}
	.setImage {
		position: absolute;
		top: 0;
		right: 10px;
		width: 148px;
		height: 148px;
		cursor: pointer;
	}
	.user_pic {
		position: absolute;
	}
	.pic_mask {
		position: relative;
		height: 100%;
		background: #fff;
		background-color: rgba(255, 255, 255, .5);
		filter: alpha(opacity=50); 
	}
	.pic_mask_text {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 30px;
		background: #000;
		color: #fff;
		text-align: center;
		font-size: 12px;
		line-height: 30px;
		background-color: rgba(0, 0, 0, .7);
		
		filter: alpha(opacity=70); 
	}
	/* 参赛信息 */
	.cptInfo_title {
		font-size: 14px;
		color: #b7c1c6;
	}
	.cpt_item {
		box-sizing: border-box;
		height: 36px;
		line-height: 36px;
		margin-top: 20px;
		font-size: 14px;
	}
	.cpt_item label {
		display: inline-block;
		width: 94px;
		font-size: 14px;
		font-weight: bold;
		color: #7a8387;
	}
	.cpt_item input {
		width: 260px;
		height: 36px;
	}
	.saveBtn {
		display: block;
		width: 200px;
		height: 48px;
		background: #fdb91a;
		color: #1e1f24;
		border-radius: 2px;
		text-align: center;
		line-height: 48px;
		font-size: 18px;
		margin: 50px auto 0 auto;
	}
</style>