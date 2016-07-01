<template>
	<div class="g-doc">
<<<<<<< HEAD
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
=======
>>>>>>> 1c69586bef580f1be2d18659b8b32b1873a7d1d9
		<div class="g-bd" style="margin-top:20px;">
			<div class="g-tp"></div>
			<div class="g-list">
				<h3>浙江省网娱大师-雪碧真英雄城市争霸赛</h3>
				<div class="m-n-list m-search f-cb">		
					<span class="mr14 search">
						<input type="text" class="eventname u-n-slt" placeholder="请输入赛事名称查找" style="width:400px;">
						<button type="button" class="u-search">查找</button>
					</span>		
					<select class="w160">
						<option value="">我的全部赛事</option>
						<option value="">报名预热中</option>
						<option value="">报名进行中</option>
						<option value="">赛事进行中</option>
						<option value="">赛事已结束</option>
					</select>
				</div>
				<div class="m-operate f-cb">
					<div class="l-btn f-fl">
						<a href="homepage#/createEvent" class="u-btn u-btn-add"><img src="../../static/images/plus.png" alt="">创建新赛事</a>
					</div>					
				</div>
				<div class="m-tb">
					<table class="account_table">
	                    <tbody>
	                    <tr>
	                        <th>序号</th>
	                        <th>海报图</th>
	                        <th>赛事名称</th>
	                        <th>赛事主办方</th>
	                        <th>赛事类型</th>
	                        <th>参与人数</th>
	                        <th width="135px;">操作</th>
	                    </tr>
<<<<<<< HEAD
	                    <tr>
=======
	                    <tr  v-link="{ path: '/techPic'}">
>>>>>>> 1c69586bef580f1be2d18659b8b32b1873a7d1d9
	                        <td>1</td>
	                        <td>
	                        	<div class="s-n-img">
									<img src="../../static/images/bg.png">
								</div>
	                        </td>
	                        <td><a href="">萌新挑战赛之最强随机套牌大乱斗</a></td>
	                        <td>网娱大师官方赛事组</td>
	                        <td>单阶段  单败制</td>
	                        <td>54/256</td>
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
</template>

<script>

  	export default {
       	data () {
    		return {

    		}
  		},
   		ready: function () {

			var selects=$('select');//获取select
			for(var i=0;i<selects.length;i++){
				createSelect(selects[i],i);
			}
			function createSelect(select_container,index){
				//创建select容器，class为select_box，插入到select标签前
				var tag_select=$('<div></div>');//div相当于select标签
				tag_select.attr('class','select_box');
				tag_select.insertBefore(select_container);
				//显示框class为select_showbox,插入到创建的tag_select中
				var select_showbox=$('<div></div>');//显示框
				select_showbox.css('cursor','pointer').attr('class','select_showbox').appendTo(tag_select);
				//创建option容器，class为select_option，插入到创建的tag_select中
				var ul_option=$('<ul></ul>');//创建option列表
				ul_option.attr('class','select_option');
				ul_option.appendTo(tag_select);
				createOptions(index,ul_option);//创建option
				//点击显示框
				tag_select.click(function(){
					if(ul_option.is(":visible")){
				        ul_option.hide();
				        $(this).removeClass('focus');
				    }else{
				        ul_option.show();
				        $(this).addClass('focus');
				    }
				});
				var li_option=ul_option.find('li');
				li_option.click(function(e){
					if(e.target.className!='disabled hover'){
						var value=$(this).text();
						select_showbox.text(value);
					}
					
					ul_option.slideUp();
				});
				li_option.hover(function(){
					$(this).addClass('hover').siblings().removeClass('hover');
				},function(){
					li_option.removeClass('hover');
				});
			}
			function createOptions(index,ul_list){
				//获取被选中的元素并将其值赋值到显示框中
				var options=selects.eq(index).find('option'),
					selected_option=options.filter(':selected'),
					selected_index=selected_option.index(),
					showbox=ul_list.prev();
					showbox.text(selected_option.text());
				//为每个option建立个li并赋值
				for(var n=0;n<options.length;n++){
					var tag_option=$('<li></li>'),//li相当于option
						txt_option=options.eq(n).text();
					if(options.eq(n).attr('disabled')){
						tag_option.text(txt_option).addClass('disabled').appendTo(ul_list);
					}else{
						tag_option.text(txt_option).css('cursor','pointer').appendTo(ul_list);
					}
					//为被选中的元素添加class为selected
					if(n==selected_index){
						tag_option.attr('class','selected');
					}
				}
			}

			$('.m-form').click(function(e){
				if(e.target.className!="select_showbox"){
					$('.select_box').removeClass('focus');
					$('.select_option').hide();
				}	
				if(e.target.className!="u-select change"){
					$('.u-select').removeClass('change');
					$('.organize_option').hide();
				}		
			})

  		},
  		methods: {
    		
	  	}
  	}
</script>