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
	                        <td>{{$index+1}}</td>
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
	                        		<a href="javascript:void(0);" class="u-btn-delete" title="删除" data-id="{{matchlist.eventId}}" @click="deleteEvent"></a>
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
	        _this.$http.get('/event/getEventRoundList',parm).then(function(response) {
	        	console.log(response);
	            _this.matchlists=response.data.object.pager;
	        },function(response) {
	            console.log(response);
	        });
  		},
  		methods:{
  			searchEvent:function(e){
  				var _this=this;
	   			var parmstr=JSON.stringify({eventName:_this.eventName,pageNumber:1});
	   			var parm={};
	   			parm.jsonInfo=parmstr;
		        _this.$http.get('/event/getEventRoundList',parm).then(function(response) {
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
		        _this.$http.get('/event/getEventRoundList',parm).then(function(response) {
		        	console.log(response);
		            _this.matchlists=response.data.object.pager;
		        },function(response) {
		            console.log(response);
		        });
  			},
  			deleteEvent:function(e){
  				var _this=this;
				var _target=$(e.currentTarget);
				var parmstr=JSON.stringify({oetInfoId:_target.attr("data-id")});
	   			var parm={};
	   			parm.jsonInfo=parmstr;
				_this.$http.get('/event/delete',parm).then(function(response) {
		        	console.log(response);
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