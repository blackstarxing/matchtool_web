<template>
	<div class="g-w">
		<div class="g-z">
			<p class="m-c-tit">设置赛事采用赛制</p>
			<div class="m-c-w">
				<div class="m-c-info">
					<p class="g-c-l">赛事类型</p>
					<div class="g-c-zbf">
					    <div class="f-fl g-c-ms">
							<input type="radio" id="online" name="matchitem" class="regular-radio" checked="checked" value="" />
							<label for="online"></label>
							<label for="online" class="u-c-per">		
								<span class="f-fl">
									单阶段
								</span>
							</label>
						</div>
						<div class="f-fl g-c-ms">
							<input type="radio" id="offline" name="matchitem" class="regular-radio" value="" />
							<label for="offline"></label>
							<label for="offline" class="u-c-per">		
								<span class="f-fl">
									双阶段
								</span>
							</label>
						</div>
					</div>
					<p class="g-c-l mt40">采用赛制<span class="f-fr"><span class="g-help"></span>查看赛制帮助</span></p>
					<div class="clearfix">
						<div class="f-fl g-c-sz">
							<p class="g-c-szt">单败淘汰制</p>
							<div class="g-c-szm">
								<img src="../../static/images/danbai.png" class="mt16">
							</div>
						</div>
						<div class="f-fr g-c-sz">
							<p class="g-c-szt">双败淘汰制</p>
							<div class="g-c-szm">
								<img src="../../static/images/shuanbai.png" class="mt5">
							</div>
						</div>
					</div>
					<div class="g-c-szgz">
						<div class="g-tri-up">
							<div class="g-tri-iup"></div>
						</div>
						<div class="f-fl mr56 g-c-kz-sz">
							<input type="checkbox" id="dbsz" class="regular-checkboxs" name="" />
							<label for="dbsz"></label>
							<label for="dbsz" class="u-c-kz-sz">单败淘汰制</label>
						</div>
					</div>
					<div class="clearfix">
						<div class="f-fl g-c-sz">
							<p class="g-c-szt">小组循环制</p>
							<div class="g-c-szm">
								<img src="../../static/images/danbai.png" class="mt16">
							</div>
						</div>
						<div class="f-fr g-c-sz">
							<p class="g-c-szt">小组积分制</p>
							<div class="g-c-szm">
								<img src="../../static/images/shuanbai.png" class="mt5">
							</div>
						</div>
					</div>
				</div>
			</div>
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
