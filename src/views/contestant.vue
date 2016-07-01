<template>
	<div class="g-doc">
		<div class="g-hd">
			<div class="g-box f-cb">
				<div class="m-logo"><a href=""></a></div>
				<div class="m-login">欢迎，hoo言hoo语<a href="#" class="u-select">个人中心</a>|<a href="#" class="u-exit">退出</a></div>
			</div>
		</div>
		<div class="g-mg-tab">
			<ul class="clearfix">
				<li>
					<img src="../../static/images/mg_zl.png">
					<p>赛事总览</p>
				</li>
				<li>
					<img src="../../static/images/mg_xs.png">
					<p>参赛选手</p>
				</li>
				<li>
					<img src="../../static/images/mg_zx.png">
					<p>资讯管理</p>
				</li>
				<li>
					<img src="../../static/images/mg_sz.png">
					<p>设置</p>
				</li>
				<li>
					<img src="../../static/images/mg_del_on.png">
					<p class="on">重置/删除</p>
				</li>
			</ul>
		</div>
		<div class="g-bd" style="margin-top:20px;">
			<div class="g-tp"></div>
			<div class="g-list">
				<h3>浙江省网娱大师-雪碧真英雄城市争霸赛</h3>
				<div class="m-operate f-cb">
					<div class="l-btn f-fl">
						<a href="javascript:void(0);" class="u-btn u-btn-add" @click="addplayer"><img src="../../static/images/plus.png" alt="">添加选手</a>
						<a href="javascript:void(0);" class="u-btn u-btn-upset"></a>
					</div>					
					<div class="r-btn f-fr">
						<a href="">导入</a>
						<a href="">导出</a>
					</div>
				</div>
				<div class="m-tb">
					<table class="account_table">
	                    <tbody>
	                    <tr>
	                        <th>序号</th>
	                        <th>选手名称</th>
	                        <th>手机号码</th>
	                        <th>QQ</th>
	                        <th>身份证号码</th>
	                        <th>已签到</th>
	                        <th width="135px;">操作</th>
	                    </tr>
	                    <tr>
	                        <td>1</td>
	                        <td>h的二次方</td>
	                        <td>13606555698</td>
	                        <td>13606555</td>
	                        <td>331360198607073369</td>
	                        <td>
	                        <section class="signed">
								<div class="signbox">
									<input type="checkbox">
									<label></label>
								</div>
							</section>
							</td>
	                        <td>
	                        	<div class="option">
	                        		<a href="" class="u-btn-write"></a><a href="" class="u-btn-delete"></a>
	                        	</div>
	                        </td>
	                    </tr>
	                    </tbody>
	                </table>
	                <div class="m-page">
	                	<a href="" id="prev"></a>
	                	<div class="pagination"><span class="current">2</span>/<span>10</span></div>
	                	<a href="" id="next"></a>
	                	<input type="text">
	                	<a href="" class="u-btn">跳转</a>
	                </div>
				</div>
			</div>		
			<div class="g-bt"></div>
		</div>		
	</div>
	<div class="m-mask">
		<div class="m-pop">
			<h3>添加选手<a href="javascript:void(0);"" class="u-btn-close" @click="closePop"></a></h3>
			<div class="m-lst">				
				<label for="">选手名称：</label>
				<input type="text" class="eventname" placeholder="请输入参赛者名称">
			</div>
			<div class="m-lst">				
				<label for="">手机号码：</label>
				<input type="text" class="eventname" placeholder="请输入参赛者手机号码">
			</div>
			<div class="m-lst">				
				<label for="">QQ：</label>
				<input type="text" class="eventname" placeholder="请输入参赛者QQ号码">
			</div>
			<div class="m-lst">				
				<label for="">身份证：</label>
				<input type="text" class="eventname" placeholder="请输入参赛者身份证号码">
			</div>
			<a href="javascript:void(0);" class="u-btn">添加</a>
		</div>
	</div>
</template>
<script>
  	export default {
       	data () {
    		return {
      			
    		}
  		},
   		ready: function () {
     		
  		},
  		methods: {
    		addplayer: function(e){
		        $('.m-mask').show();
		    },
		    closePop: function(e){
		        $('.m-mask').hide();
		    }
	  	}
  	}
</script>