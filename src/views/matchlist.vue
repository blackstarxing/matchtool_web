<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w" style="margin-top:90px;">
		<h3 class="matchTitle">全部赛事</h3>
		<div class="match-box">
			<div class="m-matchlist" v-for="match in matchlists.list" @click="linkDetail">
				<h3>{{match.eventName}}</h3>
				<div class="match-sponsor">
					<img v-bind:src="'http://img.wangyuhudong.com/'+match.icon">{{match.nickname}}
					<label class="noapply" v-if="match.state==1">查看详情</label>
					<label v-if="match.state==2">报名中</label>
					<label class="noapply" v-if="match.state==3">已报名</label>
					<label class="noapply" v-if="match.state==4">已报名</label>
					<label class="noapply" v-if="match.state==5">即将开赛</label>
					<label class="noapply" v-if="match.state==6">即将开赛</label>
					<label v-if="match.state==7">进行中</label>
					<label class="isover" v-if="match.state==8">已完结</label>
				</div>
				<div>
					<span class="icon-uniE610"></span><span class="match-info">{{match.gameName}}</span><span class="icon-uniE615"></span><span class="match-info">单阶段</span><span class="icon-uniE613"></span><span class="match-info">单败淘汰制</span><span class="icon-uniE612"></span><span class="match-info">{{match.maxNum}}</span><span class="icon-uniE60F"></span><span v-text="match.activityBegin | formatDate"></span>
				</div>
				<span class="get_eventid">{{match.eventId}}</span><span class="get_roundid">{{match.id}}</span><span class="get_isPublish">{{match.isPublish}}</span>
			</div>
			<div class="m-page" style="margin-top:100px;">
	        	<a href="" id="prev" @click="prevpage"></a>
	        	<div class="pagination"><span class="current">{{matchlists.pageNumber}}</span>/<span>{{matchlists.pages}}</span></div>
	        	<a href="" id="next" @click="nextpage"></a>
	        	<input type="text" class="u-c-ipt" id="pageto" @keyup="checkpage">
	        	<a href="" class="u-btn" @click="gopage">跳转</a>
	        </div>
		</div>
		
	</div>
	<div class="footer">
		<div class="foot">
            <div class="tel">
                <div class="telIcon">
                    <img src="../../static/images/telephone.png">
                    <span id="lx" v-link="{ path: '/contact'}">联系我们</span>
                </div>
            </div>
            <div class="letter">
                <div class="letterIcon">
                    <img src="../../static/images/letter.png">
                    <span>招贤纳士：hr-wangyu@miqtech.com
              </span>
                </div>
            </div>
            <div class="address">
                <div class="addressIcon">
                    <img src="../../static/images/address.png">
                    <span id="gy" v-link="{ path: '/about'}">关于我们</span>
                </div>
            </div>
            <div class="contactInformation">
                <span>浙ICP备14028335号-2   |   Copyright©2016 kaisaiba.com All Rights Reserved.</span>
            </div>
        </div>
	</div>
</template>
<script type="text/javascript">
import topHead from '../components/topHead.vue'
import sideBar from '../components/sideBar.vue'
import slideBar from '../components/slideBar.vue'
import createPop from '../components/createPop.vue'
	export default {
		data () {
			return{
				matchlists:""
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){
			var _this=this;
			var parm={};
			parm.jsonInfo=JSON.stringify({pageNumber:1});
	        _this.$http.get('event/getAllEventRoundList',parm).then(function(response) {
	        	if(response.data.code == 1){
	        		_this.matchlists=response.data.object.pager;
	        	}else{
	        		_this.$route.router.go({path: '/landingpage'}); 
	        	}
	        },function(response) {
	            console.log(response);
	        });

		},
		filters:{
			formatDate:function(value){
				var time = new Date(value);
				var year=time.getFullYear();  
				var month=time.getMonth()+1;     
				var date=time.getDate();     
				var hour=time.getHours();     
				var minute=time.getMinutes();     
				var second=time.getSeconds(); 
				if(hour==0){
					hour='00';
				}   
				if(minute==0){
					minute='00';
				}
				return year+"-"+month+"-"+date+"   "+hour+":"+minute;
			}
		},
		methods:{
			pageTo:function(page){
				var parm={};
				parm.jsonInfo=JSON.stringify({pageNumber:page});
    			this.$http.post("event/getAllEventRoundList",parm).then(function(response){
    				this.matchlists=response.data.object.pager;
	    		}, function(response){
	    			console.log(response);
	    		});
	    		$('#pageto').val('');
			},
			linkDetail:function(e){
				// e.preventDefault();
				var _target=$(e.currentTarget);
  				var _eventid=_target.find(".get_eventid").text();
  				var _roundid=_target.find(".get_roundid").text();
  				var _isPublish=_target.find(".get_isPublish").text();
  				window.sessionStorage.setItem("eventId",_eventid);
  				window.sessionStorage.setItem("eventRoundId",_roundid);
  				this.$route.router.go({path: '/matchDetails?eventId='+_eventid});
			},
			 // 翻页
  			prevpage:function(e){
  				e.preventDefault();
  				var currentpage = this.matchlists.pageNumber;
	    		if(currentpage>1){
	    			currentpage--;
	    			this.pageTo(currentpage);
	    		}
	    		else{
	    			layer.msg('没有上一页了');
	    		}
  			},
  			nextpage:function(e){
  				e.preventDefault();
  				var currentpage = this.matchlists.pageNumber,
  					maxpage = this.matchlists.pages;
	    		if(currentpage<maxpage){
	    			currentpage++;
	    			this.pageTo(currentpage);
	    		}
	    		else{
	    			layer.msg('没有下一页了');
	    		}
  			},
  			gopage:function(e){
  				e.preventDefault();
  				var pageNum=$('#pageto').val();
  				this.pageTo(pageNum);
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
		events:{
			
		}
	}
</script>