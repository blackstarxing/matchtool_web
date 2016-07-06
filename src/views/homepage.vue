<template>
	<top-head></top-head> 
	<div class="g-doc">
		<div class="g-bd" style="margin-top:20px;">
			<div class="g-tp"></div>
			<div class="g-list">
				<h3>浙江省网娱大师-雪碧真英雄城市争霸赛</h3>
				<div class="m-n-list m-search f-cb">			
					<select class="mr20" v-model="eventRoundStatus" @change="eventStatus">
						<option value="" selected="">我的全部赛事</option>
						<option value="0">报名预热中</option>
						<option value="1">报名进行中</option>
						<option value="2">赛事进行中</option>
						<option value="3">赛事已结束</option>
					</select>
					<span class="mr14 search">
						<input type="text" class="eventname u-n-slt" placeholder="请输入赛事名称查找" style="width:400px;" v-model="eventName">
						<button type="button" class="u-search" @click="searchEvent">查找</button>
					</span>	
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
	                        <th>创建时间</th>
	                        <th width="135px;">操作</th>
	                        <th></th>
	                    </tr>
	                    <tr v-for='matchlist in matchlists.list' @click="linkTechpic">
	                        <td>1</td>
	                        <td>
	                        	<div class="s-n-img">
									<img src="../../static/images/bg.png">
								</div>
	                        </td>
	                        <td><a href="">{{matchlist.eventName}}</a></td>
	                        <td>网娱大师官方赛事组</td>
	                        <td>单阶段  单败制</td>
	                        <td>{{matchlist.num}}/{{matchlist.maxNum}}</td>
	                        <td>{{matchlist.createDate}}</td>
	                        <td>
	                        	<div class="option">
	                        		<a href="" class="u-btn-delete"></a>
	                        	</div>
	                        </td>
	                        <td class="get_eventid" style="display:none">{{matchlist.eventId}}</td>
	                    </tr>
	                    </tbody>
	                </table>
	                <div class="m-page">
	                	<a href="" id="prev"></a>
	                	<div class="pagination"><span class="current">{{matchlists.pageNumber}}</span>/<span>{{matchlists.pages}}</span></div>
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
import topHead from '../components/topHead.vue'
  	export default {
       	data () {
    		return {
    			matchlists:'',
    			roundlist:{pageNumber: 1},
    			eventName:'',
    			eventRoundStatus:''
    		}
  		},
   		ready: function () {
   			  var _this=this;
   			  var parmstr=JSON.stringify(this.roundlist);
   			  var parm={};
   			  parm.jsonInfo=parmstr;
	        _this.$http.get('event/getEventRoundList',parm).then(function(response) {
	            _this.matchlists=response.data.object.pager;
	        },function(response) {
	            console.log(response);
	        });

			// var selects=$('select');//获取select
			// for(var i=0;i<selects.length;i++){
			// 	createSelect(selects[i],i);
			// }
			// function createSelect(select_container,index){
			// 	//创建select容器，class为select_box，插入到select标签前
			// 	var tag_select=$('<div></div>');//div相当于select标签
			// 	tag_select.attr('class','select_box');
			// 	tag_select.insertBefore(select_container);
			// 	//显示框class为select_showbox,插入到创建的tag_select中
			// 	var select_showbox=$('<div></div>');//显示框
			// 	select_showbox.css('cursor','pointer').attr('class','select_showbox').appendTo(tag_select);
			// 	//创建option容器，class为select_option，插入到创建的tag_select中
			// 	var ul_option=$('<ul></ul>');//创建option列表
			// 	ul_option.attr('class','select_option');
			// 	ul_option.appendTo(tag_select);
			// 	createOptions(index,ul_option);//创建option
			// 	//点击显示框
			// 	tag_select.click(function(){
			// 		if(ul_option.is(":visible")){
			// 	        ul_option.hide();
			// 	        $(this).removeClass('focus');
			// 	    }else{
			// 	        ul_option.show();
			// 	        $(this).addClass('focus');
			// 	    }
			// 	});
			// 	var li_option=ul_option.find('li');
			// 	li_option.click(function(e){
			// 		if(e.target.className!='disabled hover'){
			// 			var value=$(this).text();
			// 			select_showbox.text(value);
			// 		}
					
			// 		ul_option.slideUp();
			// 	});
			// 	li_option.hover(function(){
			// 		$(this).addClass('hover').siblings().removeClass('hover');
			// 	},function(){
			// 		li_option.removeClass('hover');
			// 	});
			// }
			// function createOptions(index,ul_list){
			// 	//获取被选中的元素并将其值赋值到显示框中
			// 	var options=selects.eq(index).find('option'),
			// 		selected_option=options.filter(':selected'),
			// 		selected_index=selected_option.index(),
			// 		showbox=ul_list.prev();
			// 		showbox.text(selected_option.text());
			// 	//为每个option建立个li并赋值
			// 	for(var n=0;n<options.length;n++){
			// 		var tag_option=$('<li></li>'),//li相当于option
			// 			txt_option=options.eq(n).text();
			// 		if(options.eq(n).attr('disabled')){
			// 			tag_option.text(txt_option).addClass('disabled').appendTo(ul_list);
			// 		}else{
			// 			tag_option.text(txt_option).css('cursor','pointer').appendTo(ul_list);
			// 		}
			// 		//为被选中的元素添加class为selected
			// 		if(n==selected_index){
			// 			tag_option.attr('class','selected');
			// 		}
			// 	}
			// }

			// $('.m-form').click(function(e){
			// 	if(e.target.className!="select_showbox"){
			// 		$('.select_box').removeClass('focus');
			// 		$('.select_option').hide();
			// 	}	
			// 	if(e.target.className!="u-select change"){
			// 		$('.u-select').removeClass('change');
			// 		$('.organize_option').hide();
			// 	}		
			// })

  		},
  		methods:{
  			searchEvent:function(e){
  				var _this=this;
	   			var parmstr=JSON.stringify({eventName:_this.eventName,pageNumber:1});
	   			var parm={};
	   			parm.jsonInfo=parmstr;
		        _this.$http.get('http://192.168.30.69:8080/OET/event/getEventRoundList',parm).then(function(response) {
		        	console.log(response);
		            _this.matchlists=response.data.object.pager;
		            this.eventName="";
		        },function(response) {
		            console.log(response);
		        });
  			},
  			eventStatus:function(e){
  				var _this=this;
	   			var parmstr=JSON.stringify({eventRoundStatus:_this.eventRoundStatus,pageNumber:1});
	   			var parm={};
	   			parm.jsonInfo=parmstr;
		        _this.$http.get('http://192.168.30.69:8080/OET/event/getEventRoundList',parm).then(function(response) {
		        	console.log(response);
		            _this.matchlists=response.data.object.pager;
		        },function(response) {
		            console.log(response);
		        });
  			},
  			linkTechpic:function(e){
  				var _target=$(e.currentTarget);
  				var _eventid=_target.find(".get_eventid").text();
  				window.sessionStorage.setItem("eventid",_eventid);
  				this.$route.router.go({path: '/techPic'})
  			}
  		},
	  	components: {
       	  topHead
         
  }
  	}
</script>