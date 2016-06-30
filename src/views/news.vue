<template>
	<div class="g-mgbg mh1200">
		<div class="g-hd">
			<div class="g-box f-cb">
				<div class="m-logo"><a href=""></a></div>
				<div class="m-login">欢迎，hoo言hoo语<a href="#" class="u-select">个人中心</a>|<a href="#" class="u-exit">退出</a></div>
			</div>
		</div>
		<div class="g-mg-tab">
			<ul class="clearfix">
				<li>
					<img src="../static/images/mg_zl.png">
					<p>赛事总览</p>
				</li>
				<li>
					<img src="../static/images/mg_xs.png">
					<p>参赛选手</p>
				</li>
				<li>
					<img src="../static/images/mg_zx_on.png">
					<p class="on">资讯管理</p>
				</li>
				<li>
					<img src="../static/images/mg_sz.png">
					<p>设置</p>
				</li>
				<li>
					<img src="../static/images/mg_del.png">
					<p>重置/删除</p>
				</li>
			</ul>
		</div>
		<div class="g-mg-reset">
			<div class="g-tp"></div>
			<div class="m-d pb80" style="height:auto;">
				<p class="m-d-tit" style="padding-bottom:17px;">浙江省网娱大师-雪碧真英雄城市争霸赛</p>
				<div class="m-n-list">				
					<label>查找：</label>
					<span class="re">
						<input type="text" class="eventname u-n-slt" placeholder="请输入ID或标题进行查找">
						<button type="button" class="u-n-btn">查找</button>
					</span>
				</div>
				<div class="m-n-list">				
					<label>筛选：</label>
					<select class="w160 mr14">
						<option value="">全部类型</option>
						<option value="">普通资讯</option>
						<option value="">图集资讯</option>
						<option value="">视频资讯</option>
					</select>
					<select class="w160 mr14">
						<option value="">全部状态</option>
						<option value="">生效</option>
						<option value="">失效</option>
						<option value="">删除</option>
					</select>
					<div class="ib re">
					    <input type="text" placeholder="请选择时间" class="w200  form_datetime" readonly>
						<img src="../static/images/datepicker.png" class="ab u-n-date">
					</div>
					&nbsp&nbsp—&nbsp&nbsp
					<div class="ib re">
					    <input type="text" placeholder="请选择时间" class="w200 form_datetime" readonly>
						<img src="../static/images/datepicker.png" class="ab u-n-date">
					</div>
				</div>
				<button type="button" class="u-del-btn u-n-add"><img src="../static/images/plus.png" alt="">添加资讯</button>
				<p class="s-n-th"> 
					<span style="width:100px;">ID</span>
					<span style="width:100px;">图片</span>
					<span style="width:250px;">标题</span>
					<span style="width:100px;">类型</span>
					<span style="width:200px;">创建时间</span>
					<span style="width:100px;">阅读数</span>
					<span style="width:100px;">创建人</span>
					<span style="width:100px;">状态</span>
					<span style="width:100px;">操作</span>
				</p>
				<ul class="s-n-ul clearfix">
					<li>
						<span style="width:100px;"><div class="s-n-div">12</div></span>
						<span style="width:100px;">
							<div class="s-n-img">
								<img src="../static/images/bg.png">
							</div>
						</span>
						<span style="width:250px;">
							<div class="s-n-div">LOL新技能GET-力压群雄必杀技LOL新技能GET-力压群雄必杀技</div>
						</span>
						<span style="width:100px;"><div class="s-n-div">普通资讯</div></span>
						<span style="width:200px;"><div class="s-n-div">2016.06.12 13:00</div></span>
						<span style="width:100px;"><div class="s-n-div">阅读数</div></span>
						<span style="width:100px;"><div class="s-n-div">菊花在骚动</div></span>
						<span style="width:100px;"><div class="s-n-div">状态</div></span>
						<span style="width:100px;">
							<div class="s-n-ort">
								<button type="button" class="u-n-top" topstate="1">已置顶</button>
								<div class="m-n-ort">
									<img src="../static/images/write.png" title="编辑">
									<img src="../static/images/news_del.png" title="删除">
									<img src="../static/images/news_ok.png" title="生效">
								</div>
							</div>
						</span>
					</li>
					<li>
						<span style="width:100px;"><div class="s-n-div">12</div></span>
						<span style="width:100px;">
							<div class="s-n-img">
								<img src="../static/images/bg.png">
							</div>
						</span>
						<span style="width:250px;">
							<div class="s-n-div">LOL新技能GET-力压群雄必杀技LOL新技能GET-力压群雄必杀技</div>
						</span>
						<span style="width:100px;"><div class="s-n-div">普通资讯</div></span>
						<span style="width:200px;"><div class="s-n-div">2016.06.12 13:00</div></span>
						<span style="width:100px;"><div class="s-n-div">阅读数</div></span>
						<span style="width:100px;"><div class="s-n-div">创建人</div></span>
						<span style="width:100px;"><div class="s-n-div">状态</div></span>
						<span style="width:100px;">
							<div class="s-n-ort">
								<button type="button" class="u-n-notop" topstate="0">置顶</button>
								<div class="m-n-ort">
									<img src="../static/images/write.png" title="编辑">
									<img src="../static/images/news_del.png" title="删除">
									<img src="../static/images/news_ok.png" title="生效">
								</div>
							</div>
						</span>
					</li>
				</ul>
				<div class="m-page">
                	<a href="" id="prev"></a>
                	<div class="pagination"><span class="current">2</span>/<span>10</span></div>
                	<a href="" id="next"></a>
                	<input type="text">
                	<a href="" class="u-btn">跳转</a>
                </div>
			</div>
			<div class="g-bt"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
 
  export default {
    data () {
      return {
        
      }
  	},
  	ready:function(){
  		$('.form_datetime').datetimepicker({
	        language:  "zh-CN",
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			forceParse: 0,
	        showMeridian: 1,
	        pickerPosition:'bottom-left'
	    });
		$('.form_date').datetimepicker({
	        language:  "zh-CN",
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0
	    });
		$('.form_time').datetimepicker({
	        language:  "zh-CN",
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 1,
			minView: 0,
			maxView: 1,
			forceParse: 0
	    });
	    $('.s-n-ul li').each(function(index, el) {
    		var topstate = $(this).find('.s-n-ort button').attr("topstate");
    		if(topstate==1){
    			$(this).find('.s-n-ort').css({"display":"table-cell"});
    			$(this).hover(function() {
    				$(this).find('.s-n-ort button').addClass('u-n-cctop').text('取消置顶');
    				$(this).find('.m-n-ort').show();
    			}, function() {
    				$(this).find('.s-n-ort button').removeClass('u-n-cctop').text('已置顶');
    				$(this).find('.m-n-ort').hide();
    			});
    		}
    		else if(topstate==0){
	    		$(this).hover(function() {
	    			$(this).find('.s-n-ort').css({"display":"table-cell"}).find('.m-n-ort').show();
	    		}, function() {
	    			$(this).find('.s-n-ort').css({"display":"none"});
	    		});
    		}
    	});
  	}
  }
</script>