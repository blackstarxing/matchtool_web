<template>
	<top-head></top-head> 
	<div class="g-doc">
		<div class="g-bd" style="margin-top:20px;">
			<div class="g-tp"></div>
			<div class="g-list">
				<h3>赛事列表</h3>
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
						<a href="#/createEvent" class="u-btn u-btn-add"><img src="../../static/images/plus.png" alt="">创建新赛事</a>
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
	                    <tr v-for='matchlist in matchlists.list'>
	                        <td>{{$index+1}}</td>
	                        <td>
	                        	<div class="s-n-img">
									<img v-bind:src="'http://img.wangyuhudong.com'+matchlist.poster">
								</div>
	                        </td>
	                        <td @click="linkTechpic"><a href="">{{matchlist.eventName}}</a></td>
	                        <td>网娱大师官方赛事组</td>
	                        <td>单阶段  单败制</td>
	                        <td>{{matchlist.num}}/{{matchlist.maxNum}}</td>
	                        <td>{{new Date(matchlist.createDate).Format("yyyy-MM-dd hh:mm:ss")}}</td>
	                        <td>
	                        	<div class="option">
	                        		<a href="javascript:void(0);" class="u-btn-delete" title="删除" data-id="{{matchlist.eventId}}" @click="deleteEvent"></a>
	                        	</div>
	                        </td>
	                        <td class="get_eventid" style="display:none">{{matchlist.eventId}}</td>
	                        <td class="get_roundid" style="display:none">{{matchlist.id}}</td>
	                        <td class="get_needsign" style="display:none">{{matchlist.needSign}}</td>
	                    </tr>
	                    </tbody>
	                </table>
	                <div class="m-page">
	                	<a href="" id="prev" @click="prevpage"></a>
	                	<div class="pagination"><span class="current">{{matchlists.pageNumber}}</span>/<span>{{matchlists.pages}}</span></div>
	                	<a href="" id="next" @click="nextpage"></a>
	                	<input type="text" id="pageto" @keyup="checkpage">
	                	<a href="" class="u-btn" @click="gopage">跳转</a>
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
	        	console.log(response);
	            _this.matchlists=response.data.object.pager;
	        },function(response) {
	            console.log(response);
	        });

	        // 日期格式化
	        Date.prototype.Format = function (fmt) { //author: meizz 
			    var o = {
			        "M+": this.getMonth() + 1, //月份 
			        "d+": this.getDate(), //日 
			        "h+": this.getHours(), //小时 
			        "m+": this.getMinutes(), //分 
			        "s+": this.getSeconds(), //秒 
			        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
			        "S": this.getMilliseconds() //毫秒 
			    };
			    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
			    for (var k in o)
			    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			    return fmt;
			}
  		},
  		methods:{
  			searchEvent:function(e){
  				var _this=this;
	   			var parmstr=JSON.stringify({eventName:_this.eventName,pageNumber:1});
	   			var parm={};
	   			parm.jsonInfo=parmstr;
		        _this.$http.get('event/getEventRoundList',parm).then(function(response) {
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
		        _this.$http.get('event/getEventRoundList',parm).then(function(response) {
		        	console.log(response);
		            _this.matchlists=response.data.object.pager;
		        },function(response) {
		            console.log(response);
		        });
  			},
  			// 删除赛事
  			deleteEvent:function(e){
  				var _this=this;
				var _target=$(e.currentTarget);
				var parmstr=JSON.stringify({oetInfoId:_target.attr("data-id")});
				layer.confirm('你确定要删除该项赛事吗？', {
				  	btn: ['确定','取消'], //按钮
				  	move:false
				}, function(){
				  	var parm={};
		   			parm.jsonInfo=parmstr;
					_this.$http.get('/event/delete',parm).then(function(response) {
			        	console.log(response.data);
			        	if(response.data.code==1){
			        		layer.msg("删除成功",{offset:"0px"});
			        		var reloadstr=JSON.stringify({eventName:this.eventName,eventRoundStatus:this.eventRoundStatus,pageNumber:this.matchlists.pageNumber});
				   			var reload={};
				   			reload.jsonInfo=reloadstr;
			    			this.$http.get("event/getEventRoundList",reload).then(function(response){
			    				this.matchlists=response.data.object.pager;
				    		}, function(response){
				    			console.log(response);
				    		})
			        	}			        	
			        },function(response) {
			            console.log(response);
			        });
				}, function(){
				  	
				});
  			},
  			linkTechpic:function(e){
  				e.preventDefault();
  				var _target=$(e.currentTarget);
  				var _eventid=_target.parent().find(".get_eventid").text();
  				var _roundid=_target.parent().find(".get_roundid").text();
  				var _needsign=_target.parent().find(".get_needsign").text();
  				window.sessionStorage.setItem("eventid",_eventid);
  				window.sessionStorage.setItem("roundid",_roundid);
  				window.sessionStorage.setItem("needsign",_needsign);
  				this.$route.router.go({path: '/techPic'})
  			},
  			// 翻页
  			prevpage:function(e){
  				e.preventDefault();
  				var currentpage = this.matchlists.pageNumber;
	    		if(currentpage>1){
	    			currentpage--;
	    			var parmstr=JSON.stringify({eventName:this.eventName,eventRoundStatus:this.eventRoundStatus,pageNumber:currentpage});
		   			var parm={};
		   			parm.jsonInfo=parmstr;
	    			this.$http.get("event/getEventRoundList",parm).then(function(response){
	    				this.matchlists=response.data.object.pager;
		    		}, function(response){
		    			console.log(response);
		    		})
	    		}
	    		else{
	    			layer.msg('没有上一页了',{offset:"0px"});
	    		}
  			},
  			nextpage:function(e){
  				e.preventDefault();
  				var currentpage = this.matchlists.pageNumber,
  					maxpage = this.matchlists.pages;
	    		if(currentpage<maxpage){
	    			currentpage++;
	    			var parmstr=JSON.stringify({eventName:this.eventName,eventRoundStatus:this.eventRoundStatus,pageNumber:currentpage});
		   			var parm={};
		   			parm.jsonInfo=parmstr;
	    			this.$http.get("event/getEventRoundList",parm).then(function(response){
	    				this.matchlists=response.data.object.pager;
		    		}, function(response){
		    			console.log(response);
		    		})
	    		}
	    		else{
	    			layer.msg('没有下一页了',{offset:"0px"});
	    		}
  			},
  			gopage:function(e){
  				e.preventDefault();
  				var pageNum=$('#pageto').val();
  				var parmstr=JSON.stringify({eventName:this.eventName,eventRoundStatus:this.eventRoundStatus,pageNumber:pageNum});
	   			var parm={};
	   			parm.jsonInfo=parmstr;
    			this.$http.get("event/getEventRoundList",parm).then(function(response){
    				this.matchlists=response.data.object.pager;
	    		}, function(response){
	    			console.log(response);
	    		})
  			},
  			checkpage:function(e){
  				var pages = this.matchlists.pages; 
		    	var num = $('#pageto').val();
		    	if(num==0 && num!=""){
		    		$('#pageto').val('1');
		    	}else if(num>pages){
		    		$('#pageto').val(pages);
		    	}
  			}
  		},
	  	components: {
       	  topHead
         
  }
  	}
</script>