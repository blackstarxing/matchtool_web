<template>
 <top-nav></top-nav> 
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
	                    <tr v-for='member in memberlist.list'>
	                        <td>{{$index+1}}</td>
	                        <td>{{member.name}}</td>
	                        <td>{{member.telephone}}</td>
	                        <td>{{member.qq}}</td>
	                        <td>{{member.idcard}}</td>
	                        <td>
	                        <section class="signed">
								<div class="signbox">
									<input type="checkbox" checked="{{member.signed}}" @click="signStatus">
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
	                	<div class="pagination"><span class="current">{{memberlist.pageNumber}}</span>/<span>{{memberlist.pages}}</span></div>
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
			<div class="wrap">
				<h3>添加选手</h3>
				<a href="javascript:void(0);" class="u-btn-close" @click="closePop"></a>
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
	</div>
</template>
<script>
import topNav from '../components/topNav.vue'
  	export default {
       	data () {
    		return {
      			memberlist:""
    		}
  		},
   		ready: function () {
     		var roundId=window.sessionStorage.getItem("eventid");
     		var _this=this;
   			var parmstr=JSON.stringify({roundId:roundId,pageNumber:1});
   			var parm={};
   			parm.jsonInfo=parmstr;
	        _this.$http.post('http://192.168.30.248:8088/event/round/group/member/list',parm).then(function(response) {
	        	console.log(response);
	            _this.memberlist=response.data.object.pager;
	        },function(response) {
	            console.log(response);
	        });
  		},
  		methods: {
    		addplayer: function(e){
		        $('.m-mask').show();
		    },
		    closePop: function(e){
		        $('.m-mask').hide();
		    },
		    signStatus:function(e){
		    	alert(123);
		    }
	  	},
       components: {
          topNav
         
  }
  	}
</script>