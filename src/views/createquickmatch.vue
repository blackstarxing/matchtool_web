<template>
	<div class="g-w">
		<div class="g-z">
			<p class="m-c-tit">完善赛事基本信息</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<p class="g-c-l">赛事名称</p>
					<input type="text" class="u-c-ipt" placeholder="请输入赛事名称" style="width:480px;">
					<p class="g-c-l mt40">主办方</p>
					<div class="g-c-zbf">
						<input type="radio" id="personal" class="regular-radio" checked="checked" />
						<label for="personal"></label>
						<label for="personal" class="u-c-per">
							<span class="u-c-headimg">
								<img src="../../static/images/me.jpg">
							</span>
							<span class="f-fl">
								未来老公
							</span>
						</label>
					</div>
					<p class="g-c-l mt40">比赛项目</p>
					<select class="u-c-slt">
						<option>选择一个竞技项目</option>
						<option>英雄联盟</option>
						<option>星际争霸</option>
						<option>炉石传说</option>
						<option>自由篮球</option>
					</select>
					<p class="g-c-l mt40">赛事模式</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="online" name="matchitem" class="regular-radio" checked="checked" value="" />
							<label for="online"></label>
							<label for="online" class="u-c-per">		
								<span class="f-fl">
									纯线上赛事
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="offline" name="matchitem" class="regular-radio" value="" />
							<label for="offline"></label>
							<label for="offline" class="u-c-per">		
								<span class="f-fl">
									纯线下赛事
								</span>
							</label>
						</div>
						<div class="f-fl h36">
							<input type="radio" id="unite" name="matchitem" class="regular-radio" value="" />
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
			<p class="m-c-tit">设置选手参赛方式</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data () {
			return{

			}
		},
		components:{

		},
		ready:function(){

		},
		methods:{

		}
	}
</script>