<template>
	<top-head></top-head> 
	 <top-nav></top-nav> 
	<div class="g-mgbg mh1200">
		<div class="g-mg-reset">
			<div class="g-tp"></div>
			<div class="m-d pb80" style="height:auto;">
				<p class="m-d-tit" style="padding-bottom:17px;">{{newslists.eventName}}</p>
				<div class="m-n-list">				
					<label>查找：</label>
					<span class="re">
						<input type="text" class="eventname u-n-slt" placeholder="请输入ID或标题进行查找" v-model="newsword">
						<button type="button" class="u-n-btn" @click="selectlist">查找</button>
					</span>
				</div>
				<div class="m-n-list">				
					<label>筛选：</label>
					<select class="w160 mr14" v-model="newstp">
						<option v-bind:value="''">全部类型</option>
						<option v-bind:value="1">普通资讯</option>
						<option v-bind:value="3">图集资讯</option>
						<option v-bind:value="4">视频资讯</option>
					</select>
					<select class="w160 mr14" v-model="newsstatus">
						<option v-bind:value="''">全部状态</option>
						<option v-bind:value="1">生效</option>
						<option v-bind:value="2">失效</option>
					</select>
					<div class="ib re">
					    <input type="text" placeholder="请选择时间" class="w200  form_datetime" v-model="begindate" readonly>
						<img src="../../static/images/datepicker.png" class="ab u-n-date">
					</div>
					&nbsp&nbsp—&nbsp&nbsp
					<div class="ib re">
					    <input type="text" placeholder="请选择时间" class="w200 form_datetime" v-model="enddate" readonly>
						<img src="../../static/images/datepicker.png" class="ab u-n-date">
					</div>
				</div>
				<button type="button" class="u-del-btn u-n-add" onclick="window.location.href='homepage#/addnews'"><img src="../../static/images/plus.png">添加资讯</button>
				<p class="s-n-th"> 
					<span style="width:100px;">ID</span>
					<span style="width:100px;">图片</span>
					<span style="width:250px;">标题</span>
					<span style="width:100px;">类型</span>
					<span style="width:200px;">创建时间</span>
					<span style="width:100px;">阅读数</span>
					<span style="width:110px;">创建人</span>
					<span style="width:90px;">状态</span>
					<span style="width:100px;">操作</span>
				</p>
				<ul class="s-n-ul clearfix">
					<li v-for="newslist in newslists.pager.list">
						<span style="width:100px;"><div class="s-n-div" infoid>{{newslist.id}}</div></span>
						<span style="width:100px;">
							<div class="s-n-img">
								<img src="http://img.wangyuhudong.com/{{newslist.icon}}">
							</div>
						</span>
						<span style="width:250px;">
							<div class="s-n-div">{{newslist.title}}</div>
						</span>
						<span style="width:100px;">
							<div class="s-n-div" newstype="{{newslist.type}}"></div>
						</span>
						<span style="width:200px;"><div class="s-n-div">{{newslist.createDate}}</div></span>
						<span style="width:100px;"><div class="s-n-div">{{newslist.readNum}}</div></span>
						<span style="width:110px;"><div class="s-n-div">{{newslist.creater}}</div></span>
						<span style="width:90px;">
							<div class="s-n-div" effective="{{newslist.effective}}"></div></span>
						<span style="width:100px;">
						<div class="s-n-ort">
							<button type="button" class="u-n-top" topstate="{{newslist.isTop}}" @click="gotop">已置顶</button>
							<div class="m-n-ort">
								<img src="../../static/images/write.png" title="编辑">
								<img src="../../static/images/news_del.png" title="删除" @click="infodel">
								<img src="../../static/images/delete.png" title="失效" @click="toggleeftv">
							</div>
						</div>
						</span>
					</li>
				</ul>
				<div class="m-page">
                	<button id="prev" type="button" @click="goprevpage"></button>
                	<div class="pagination"><span class="current">{{newslists.pager.pageNumber}}</span>/<span>{{newslists.pager.pages}}</span></div>
                	<button id="next" type="button" @click="gonextpage"></button>
                	<input type="text" value="{{newslists.pager.pageNumber}}" id="pageipt" @keyup="cherkpage">
                	<button type="button" class="u-btn" @click="pagejump">跳转</button>
                </div>
			</div>
			<div class="g-bt"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
import topHead from '../components/topHead.vue'
 import topNav from '../components/topNav.vue'
  export default {

    data () {
	    return {
	        newslists:'',
	        newsword:'',
	        newstp:'',
	        newsstatus:'',
	        begindate:'',
	        enddate:''
	    }
  	},
  	ready:function(){
  		var self = this;
  		console.log(self);
  		self.$http.get('event/information/list?eventId=1').then(function(response){
  			self.$set('newslists', response.data.object);
  			self.$nextTick(self._events.pagefill[0]);
  		}, function(data, status, request){
  			console.log('fail' + status + "," + request);
  		});
  		
  		$('.form_datetime').datetimepicker({
	        language:  "zh-CN",
	        minView: "month", //选择日期后，不会再跳转去选择时分秒 
	        format:"yyyy-mm-dd",
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			forceParse: 0,
	        showMeridian: 1,
	        pickerPosition:'bottom-left'
	    });
	    
  	},
    components: {
      topNav
         
    },
    events:{
    	pagefill:function(){
    		$('.s-n-ul li').each(function(){
  				var newstype =$(this).find('div[newstype]'),
  				    effective = $(this).find('div[effective]');
	  			var typenum = newstype.attr("newstype"),
  			    	effectiveval = effective.attr("effective");
	  			if(typenum==1){
	  				newstype.text("资讯");
	  			}
	  			else if(typenum==2){
	  				newstype.text("专题");
	  			}
	  			else if(typenum==3){
	  				newstype.text("图集");
	  			}
	  			else if(typenum==4){
	  				newstype.text("视频");
	  			}
	  			if(effectiveval==1){
	  				effective.text('生效');
	  			}
	  			else if(effectiveval==0){
					effective.text('失效');
	  			}
	  			});
	  			$('.s-n-ul li').each(function(index, el) {
		    		var topstate = $(this).find('.s-n-ort button').attr("topstate");
		    		var isvalid = $(this).find('div[effective]').attr('effective');
		    		if(isvalid==0){
		    			$(this).find('[title="失效"]').attr({"src":"../../static/images/news_ok.png","title":"生效"});
		    		}
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
			    			$(this).find('.s-n-ort button').addClass('u-n-notop').text('置顶');	
			    		}, function() {
			    			$(this).find('.s-n-ort').css({"display":"none"});
			    		});
		    		}
		    	});
    	}
    },
    methods:{
    	infodel:function(event){
    		var _this = $(event.target);
    		var infoid = _this.parents('li').find('[infoid]').text();
    		this.$http.get("event/information/delete?eventId=1&id="+infoid).then(function(response){
				var code = response.data.code;
				this.$nextTick(function(){
					if(code==-1){
						alert("请先登陆");
					}
    				else if(code==-2){
						alert("参数错误");
    				}
    				else{
    					$(this).parents('li').remove();
    				}
				})
			}, function(response){
				console.log(response);
			});
    	},
    	gotop:function(event){
    		var _this = $(event.target);
    		var infoid = _this.parents('li').find('[infoid]').text();
    		var topnum = _this.attr("topstate");
    		this.$http.get("event/information/top?eventId=1&id="+infoid+"&isTop="+topnum).then(function(response){
    			var code = response.data.code;
    			this.$nextTick(function(){
    				if(code==-1){
    					alert("请先登陆");
    				}
    				else if(code==-2){
    					alert("参数错误");
    				}
    				else if(code==-3){
    					alert("找不到资讯");
    				}
    				else{
    					console.log("已置顶");
    				}
    			})
    		}, function(response){
    			console.log(response);
    		});
    	},
    	selectlist:function(event){
    		var newsword = this.newsword,
    			newstp = this.newstp,
    			newsstatus = this.newsstatus,
    			begindate = this.begindate,
    			enddate = this.enddate;
    		this.$http.get("event/information/list?eventId=1&word="+newsword+"&type="+newstp+"&status="+newsstatus+"&beginDate="+begindate+"&endDate="+enddate).then(function(response){
    			this.$set('newslists', response.data.object);
    			this.$nextTick(this._events.pagefill[0]);
    		}, function(data, status, request){
    			console.log('fail' + status + "," + request);
    		});
    	},
    	pagejump:function(){
    		var newsword = this.newsword,
    			newstp = this.newstp,
    			newsstatus = this.newsstatus,
    			begindate = this.begindate,
    			enddate = this.enddate;
    		var indexpage = $('.m-page input').val();
    		this.$http.get("event/information/list?eventId=1&word="+newsword+"&type="+newstp+"&status="+newsstatus+"&beginDate="+begindate+"&endDate="+enddate+"&pageNumber="+indexpage).then(function(response){
    			this.$set('newslists', response.data.object);
    			this.$nextTick(this._events.pagefill[0]);
    		}, function(response){
    			console.log(response);
    		})
    	},
    	goprevpage:function(){
    		var newsword = this.newsword,
    			newstp = this.newstp,
    			newsstatus = this.newsstatus,
    			begindate = this.begindate,
    			enddate = this.enddate;
    		var indexpage = this.newslists.pager.pageNumber;
    		if(indexpage>1){
    			indexpage--;
    			this.$http.get("event/information/list?eventId=1&word="+newsword+"&type="+newstp+"&status="+newsstatus+"&beginDate="+begindate+"&endDate="+enddate+"&pageNumber="+indexpage).then(function(response){
    			this.$set('newslists', response.data.object);
    			this.$nextTick(this._events.pagefill[0]);
	    		}, function(response){
	    			console.log(response);
	    		})
    		}
    		else{
    			console.log("没有上一页了")
    		}
    	},
    	gonextpage:function(){
    		var newsword = this.newsword,
    			newstp = this.newstp,
    			newsstatus = this.newsstatus,
    			begindate = this.begindate,
    			enddate = this.enddate;
    		var indexpage = this.newslists.pager.pageNumber,
    			maxpage = this.newslists.pager.pages;
    		if(indexpage<maxpage){
    			indexpage++;
    			this.$http.get("event/information/list?eventId=1&word="+newsword+"&type="+newstp+"&status="+newsstatus+"&beginDate="+begindate+"&endDate="+enddate+"&pageNumber="+indexpage).then(function(response){
    			this.$set('newslists', response.data.object);
    			this.$nextTick(this._events.pagefill[0]);
	    		}, function(response){
	    			console.log(response);
	    		})
    		}
    		else{
    			console.log("没有下一页了")
    		}
    	},
    	cherkpage:function(){
    		var pg = this.newslists.pager.pages; 
	    	var n = $('#pageipt').val();
	    	if(n<1){
	    		$('#pageipt').val('1');
	    	}
	    	else if(n>pg){
	    		$('#pageipt').val(pg);
	    	}
    	},
    	toggleeftv:function(event){
    		var _this = $(event.target);
    		var effective = _this.parents('li').find('div[effective]').attr('effective');
    		var infoid = _this.parents('li').find('[infoid]').text();
    		this.$http.get("event/information/publish?eventId=1&id="+infoid+"&effective="+effective).then(function(response){
				var code = response.data.code;
				this.$nextTick(function(){
					if(code==-1){
						alert("请先登陆");
					}
    				else if(code==0){
						alert("操作失败");
    				}
    				else{
    					console.log("操作成功");
    				}
				})
			}, function(response){
				console.log(response);
			});
    	}
    },
  	  components: {
          topNav,
          topHead
         
  }
  }
</script>