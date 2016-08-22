<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w mt90 f-re">
		<div class="g-q-hb" v-link="{ path: '/backend/backendMsg'}">
			<!-- <img src="../../static/images/dfposter.jpg" alt=""> -->
			<img v-bind:src="'http://img.wangyuhudong.com'+poster" alt="" v-if="poster">
			<div class="g-q-ptr">
				<i class="iconfont iconfont-xj">&#xe60a</i>
				<p>编辑、更改赛事海报</p>
			</div>
		</div>
		<div class="g-q-info">
			<div class="g-q-fbs" v-show="isstart">
				<button type="button" class="u-q-start">
					<i class="s-q-start"></i>
					开始赛事进程
				</button>
				<p class="g-q-remtime">距离开赛还有<span class="col42a">01</span>天&nbsp<span class="colfdb">•</span>&nbsp<span class="col42a">03:09</span></p>
				<a href="#" class="u-q-enter">我也要参与</a>
			</div>
			<p class="g-q-name">{{name}}</p>
			<div class="g-q-zbf">
				<i class="g-q-hp f-fl">
					<img src="../../static/images/head.png">
				</i>
				<span class="f-fl ml20">网娱官方赛事出品</span>
				<span class="col7a8 f-fl ml20" v-show="isfabu">2016-7-29 13:03发布</span>
			</div>
			<p class="g-q-jj col7a8">赛事还没有简介信息，<a href="#" v-link="{ path: '/backend/backendMsg'}">去完善</a><i v-link="{ path: '/backend/backendMsg'}"></i></p>
			<p class="col7a8 g-q-dz" v-show="changemodedz">地址&nbsp<span class="colfdb">•</span>&nbsp{{addreass}}{{detailAddreass}}</p>
			<ul class="g-q-tab clearfix">
				<li v-bind:class="{'g-q-tabon':tap1}" val="1" @click="tapswitch">对阵图预览</li>
				<li v-bind:class="{'g-q-tabon':tap2}" val="2" @click="tapswitch">赛事信息</li>
			</ul>
		</div>
		<div class="g-q-gofb">当前赛事<a v-link="{ path: '/backend/backendMsg'}">尚未发布</a>，前往管理赛事页面，完善赛事信息并<a v-link="{ path: '/backend/backendMsg'}">发布</a>，让更多用户看到你的赛事。</div>
		<div v-show="tap1">
			<!-- 在这个div放置对阵图哦 -->
			<div class="against_container">
			    <p class="against_title">
			     <a class="title_unit"></a>
			      <span class="against_title_text">对阵图</span>
			      <span class="against_title_tip">此对阵图为预览，可拖曳参赛选手来交换位置</span>
			    </p>
			    <div class="techpic_move">
			    	<div class="tech_main_body">
			        <div class="turn_num">
			          <ul class="turn_num_list clearfix">
			            <li class="turn_num_li" v-for="turnnum of turnnums">
			              <div class="turn_turnid" style="display:none">{{turnnum.modelturnid}}</div>
			              <div class="trunname_ed">
			                <div class="turn_num_text">{{turnnum.modelname}}</div>
			                <div class="turn_num_detail">
			                	<span class="turn_select_num" style="font-size:12px;">BO{{turnnum.modelbo}}</span>
			                	<span class="turn_input_settime" style="font-size:12px;margin:0 7px;">{{turnnum.modeltime?turnnum.modeltime.split(' ',1):"时间待定"}}</span>
			                </div>
			                </div>
			            </li>
			          </ul>
			        </div>
			        <div class="tech_body">
			            <div class="tech_container" style="margin-top:60px;">
			            <div class="match_content clearfix">
			            </div>   
			          </div>
			        </div>
			    </div>
			    </div>
			    
			  </div>
		</div>
		<div v-show="tap2">
			<div class="g-q-ssinfo">
				<div class="clearfix bb2a3">
					<div style="width: 223px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_xm.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">比赛项目</p>
							<p class="g-q-if-p2">{{itemName}}</p>
						</div>
					</div>
					<div style="width: 223px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_ms.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">赛事模式</p>
							<p class="g-q-if-p2">{{mode}}</p>
						</div>
					</div>
					<div style="width: 330px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_jd.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">赛事阶段</p>
							<p class="g-q-if-p2">{{type}}</p>
						</div>
					</div>
					<div style="width: 150px; margin-left: 40px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_sz.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">赛制</p>
							<p class="g-q-if-p2">{{regime}}</p>
						</div>
					</div>
				</div>
				<div class="clearfix pt20">
					<div style="width: 223px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_rs.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">最大参与人数</p>
							<p class="g-q-if-p2">{{maxNum}}人</p>
						</div>
					</div>
					<div style="width: 223px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_sj.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">比赛开始时间</p>
							<p class="g-q-if-p2">{{activityBegin}}</p>
						</div>
					</div>
					<div style="width: 330px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_bmsj.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">报名时间</p>
							<p class="g-q-if-p2">{{applyBegin}} - {{applyEnd}}</p>
						</div>
					</div>
					<div style="width: 150px; margin-left: 40px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_qdsj.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">签到时间</p>
							<p class="g-q-if-p2">{{needSignMinu}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="g-q-jx">
				<p class="g-q-jxp">赛事奖项</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;">还没有赛事奖项，<a v-link="{ path: '/backend/backendMsg'}">去完善</a><i v-link="{ path: '/backend/backendMsg'}"></i></p>
			</div>
			<div class="g-q-jx" style="margin-bottom:100px;">
				<p class="g-q-jxp">赛事规则</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;">还没有赛事规则，<a v-link="{ path: '/backend/backendMsg'}">去完善</a><i v-link="{ path: '/backend/backendMsg'}"></i></p>
			</div>
		</div>
		<div class="steps infosteps">
			<span class="line"></span>
			<ul>
				<li><i></i>填写基本信息</li>
				<li><i></i>设置参赛方式</li>
				<li><i></i>确认赛事时间</li>
				<li><i></i>设置采用赛制</li>
				<li class="current"><i></i>完善信息并发布</li>
			</ul>
			<a href="#">
				<div class="g-q-sssz" v-link="{ path: '/backend/backendMsg'}">
					<img src="../../static/images/sssz.png">
					赛事设置
				</div>
			</a>
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
				poster:'',
				name:'',
				itemName:'',
				mode:'',
				addreass:'',
				detailAddreass:'',
				type:'',
				regime:'',
				maxNum:'',
				activityBegin:'',
				applyBegin:'',
				applyEnd:'',
				needSignMinu:'',
				allowApply:'',
				formdata:{
					oetInfoId:'',
					oetRoundId:''
				},
				changemodedz:true,
				isstart:false,
				isfabu:false,
				tap1:true,
				tap2:false,
				matchdata:'',
				personnum:"",
    			overhalf:"",
    			turnnums:[],
    			roundStatus:'',
			}
		},
		components:{
			topHead,
	        sideBar,
	        slideBar,
	        createPop
		},
		ready:function(){
			var _this = this;
			_this.formdata.oetRoundId = window.sessionStorage.getItem("eventRoundId");
			_this.formdata.oetInfoId = window.sessionStorage.getItem("eventId");
			var newsobj = _this.formdata;
			var jsonInfo = JSON.stringify(newsobj);
			var parm = new Object();
			parm.jsonInfo = jsonInfo;
			_this.$http.get('event/openOetInfo',parm).then(function(response){
				console.log("成功");
				var code = response.data.code;
				if(code==1){
					_this.poster = response.data.object.event.poster;
					if(_this.poster=='' || _this.poster==null){
						_this.poster='/uploads/2016/08/16/5126a4fc3e854db098ae08b16d79b8d8.jpg';
					}
					_this.name = response.data.object.event.name;
					_this.itemName = response.data.object.event.itemName;
					_this.mode = response.data.object.event.mode;
					_this.addreass = response.data.object.round.addreass;
					_this.detailAddreass = response.data.object.round.detailAddreass;
					if(_this.mode==1){
						_this.mode='线上赛事';
						_this.changemodedz = false;
					}else if(_this.mode==2){
						_this.mode='线下模式';
					}else if(_this.mode==3){
						_this.mode='线上与线下结合模式';
					}
					_this.type = response.data.object.round.type;
					if(_this.type==1){
						_this.type='单阶段';
					}else if(_this.type==2){
						_this.type='双阶段';
					}
					_this.regime = response.data.object.round.regime;
					if(_this.regime==1){
						_this.regime = '单败淘汰制';
					}else if(_this.regime==2){
						_this.regime = '双败淘汰制';
					}else if(_this.regime==3){
						_this.regime = '小组循环制';
					}else if(_this.regime==4){
						_this.regime = '小组积分制';
					}
					_this.maxNum = response.data.object.round.maxNum;
					function add0(m){return m<10?'0'+m:m }
					function format(shijianchuo){
						//shijianchuo是整数，否则要parseInt转换
						var time = new Date(shijianchuo);
						var y = time.getFullYear();
						var m = time.getMonth()+1;
						var d = time.getDate();
						var h = time.getHours();
						var mm = time.getMinutes();
						var s = time.getSeconds();
						return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm);
					}
					_this.activityBegin = format(response.data.object.round.activityBegin);
					_this.applyBegin = format(response.data.object.round.applyBegin);
					_this.applyEnd = format(response.data.object.round.applyEnd);
					_this.needSignMinu = '开赛前'+response.data.object.event.needSignMinu+'分钟';
					_this.allowApply = response.data.object.round.allowApply;
					if(_this.allowApply==0){
						_this.needSignMinu = '不需要签到';
						_this.applyBegin='';
						_this.applyEnd='';
					}
				}
			}, function(response){
				console.log(22);
			})

       var parm={};
       parm.id=_this.formdata.oetInfoId;
       _this.$http.get('event/info',parm).then(function(response){
        console.log(response);
            _this.personnum=response.data.object.iscountm?true:false;
            _this.overhalf=response.data.object.iscountj1?true:false;
             _this.matchdata=response.data.object.groups;

             var turn=_this.matchdata[0].turn;
             var turnid=response.data.object.turns;
             
            var unitul_h=65;
            var unitul_w=200;
            var unitul_step=10;
            var unitul_all=unitul_h+unitul_step;
            var _content=$(".match_content");
            var listul;
            var listuls=listul='<ul class="match_list"></ul>';

            for(var i=0;i<turnid.length;i++){
              _this.turnnums.push({num:i+1,modeltime:turnid[i].matchTimestr,modelbo:turnid[i].matchType,modelname:turnid[i].name,modelturnid:turnid[i].id});
            }

            $(".turn_num_list").width(290*turn);
             _this.$nextTick(function () {
                 $('.set_begin').datetimepicker({
                          format:"Y-m-d H:i", 
                          timepicker:false,     
                          yearStart:2000,     
                          yearEnd:2050, 
                          minDate:new Date(),
                          step:30
                          });
                    $.datetimepicker.setLocale('ch');
              })
            
            
            if(!_this.personnum){
                if(_this.overhalf){
                  unitul_step=85;
                  unitul_all=unitul_h+unitul_step;
                }
                //dom生成矩形列表
                for(var i=0;i<turn-2;i++){
                   listuls+=listul;
                }
                _content.append(listuls);
                
                //dom生成矩形unit,并放入矩形列表
                var unitul='<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"><span class="recta_num"></span></li><li class="recta"><span class="recta_num"></span></li></ul><div class="add_options"></div>';
                var listArry=_content.find($(".match_list"));

                if(turn>1){
                   listArry[turn-2].innerHTML='<li class="out_li">'+unitul+'</li>';
                for(var i=1;i<turn-1;i++){
                  listArry[turn-i-2].innerHTML=listArry[turn-i-1].innerHTML+listArry[turn-i-1].innerHTML;
                }
              }else{
                listArry[0].innerHTML='<li class="out_li">'+unitul+'</li>';
              }
               
                
                 //按照索引处理列表层高
                $.each(listArry,function(i,e){
                  if(i!=0){
                    $(this).css('margin-top',unitul_all/2*(Math.pow(2,i)-1));
                  }
                })

                 //按照索引处理每列矩形unit间距
                var margin_bt=[];
                for(var i=0;i<turn-1;i++){
                  margin_bt[0]=unitul_step;
                  margin_bt[i+1]=2*margin_bt[i]+unitul_h;
                  listArry.eq(i).find(".out_li").css("margin-bottom",margin_bt[i]);
                }

                //生成canvas dom
                var _height=unitul_all*Math.pow(2,turn-2);
                var _width=(unitul_w+90)*turn;
                _content.width(_width);
                $('.techpic_move').height(_height);
                var _techcon=$(".tech_container");
                _techcon.height(_height+40);
                _techcon.append('<canvas id="mycanvas" width='+_width+' height='+_height+'></canvas> ');

                //获取turn2的数据
                 var onelist = [];
                function getnum(arr){
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].turn == 2){
                      onelist.push(arr[i]);
                    }else{
                        for(var key in arr[i]){
                            if(key=='groups' && arr[i].groups){
                              getnum(arr[i][key]);
                            }
                          }  
                      } 
                  }
                     
                }
            
                getnum(_this.matchdata);

                console.log(onelist);
                _content.prepend(listul);
                listArry=_content.find($(".match_list"));
                var _topsY=[];
                var _topdY=[];

                //生成非幂次方时第一列的矩形unit
                for(var i=0;i<onelist.length;i++){
                    var _one_ul=listArry.eq(1).find(".unit_ul").eq(i);
                    var _one_list=_one_ul.find(".recta_num");
                    var _one_list_li=_one_ul.find(".recta");

                      if(onelist[i].seats[0].seatNumber){
                        if(onelist[i].groups){
                              var _tops=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                              _topsY.push(_tops);
                              listArry.eq(0).append('<li class="out_li single_line"><div class="group_num">'+onelist[i].groups[0].groupNumber+'</div><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li data-seatid='+onelist[i].groups[0].seats[0].id+' class="recta" style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div></li>'); 
                        } 
                            
                      }else{
                          var _topd=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_topd);
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><div class="group_num">'+onelist[i].groups[0].groupNumber+'</div><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[0].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div></div><div class="out_li"><div class="group_num" style="top:90px;">'+onelist[i].groups[1].groupNumber+'</div><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[1].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[0].target?onelist[i].groups[1].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[1].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[1].target?onelist[i].groups[1].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div></div></div>');
                    }
                }
                // console.log(_topdY);

                //根据轮空的坐标确定第一列坐标
                var list_first=listArry.eq(0).find(".single_line");
                for(i=0;i<_topsY.length;i++){
                  list_first.eq(i).offset({'top':_topsY[i]+(unitul_h+10)/2});
                }

                if(_topdY.length!=0){
                  var list_double=listArry.eq(0).find(".double_line");
                  for(i=0;i<_topdY.length;i++){
                    list_double.eq(i).offset({'top':_topdY[i]-(unitul_h+10)/2});
                  }
                }


            
                 //根据矩形坐标画线
                var _xy=[];
                var coordinates=[];
                for(var i=1;i<turn-1;i++){
                  var unit_list=listArry.eq(i).find(".unit_ul");
                  var unit_length=unit_list.length;
                  
                  _xy.length=0;
                  for(var j=0;j<unit_length;j++){
                    coordinates=[unit_list.eq(j).position().left,unit_list.eq(j).position().top];
                          _xy.push(coordinates);
           
                  function drawline(id) {
                    
                    var canvas = document.getElementById(id);
                    if (canvas == null)
                        return false;
                    var context = canvas.getContext("2d");
                    context.strokeStyle = "rgb(247,162,58)";
                    context.moveTo(_xy[j][0]+unitul_w+5,_xy[j][1]+(unitul_h-20)/2);
                    context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]+(unitul_h-20)/2);
                    if(j%2==0){
                      context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]+unitul_h+(margin_bt[i-1]-20)/2);
                      context.lineTo(_xy[j][0]+unitul_w+5+20*2, _xy[j][1]+unitul_h+(margin_bt[i-1]-20)/2);
                    }else{
                      context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]-(margin_bt[i-1]+20)/2);
                      context.lineTo(_xy[j][0]+unitul_w+5+20*2, _xy[j][1]-(margin_bt[i-1]+20)/2);
                    }

                    context.stroke(); 
                  }
                    drawline("mycanvas"); 
                  }  
                }
                
                //根据矩形坐标第一列单unit画线
                var _xysingle=[];
                var single_coord=[];
                var single_arry=listArry.eq(0).find(".single_line");
                for(i=0;i<single_arry.length;i++){
                  single_coord=[single_arry.eq(i).position().left,single_arry.eq(i).position().top];
                  _xysingle.push(single_coord);

                  function firstline(id) {
                    
                    var canvas = document.getElementById(id);
                    if (canvas == null)
                        return false;
                    var context = canvas.getContext("2d");
                    context.strokeStyle = "rgb(247,162,58)";
                    context.moveTo(_xysingle[i][0]+unitul_w+5,_xysingle[i][1]+(unitul_h-20)/2);
                    context.lineTo(_xysingle[i][0]+unitul_w+5+20,_xysingle[i][1]+(unitul_h-20)/2);
                    context.lineTo(_xysingle[i][0]+unitul_w+5+20,_xysingle[i][1]-12.5);
                    context.lineTo(_xysingle[i][0]+unitul_w+5+20*2, _xysingle[i][1]-13);
                    context.stroke(); 
                  }
                    firstline("mycanvas"); 
                }

                //根据矩形坐标第一列双unit画线
                var _xydouble=[];
                var double_coord=[];
                var double_arry=listArry.eq(0).find(".double_line");
                for(i=0;i<double_arry.length;i++){
                  double_coord=[double_arry.eq(i).position().left,double_arry.eq(i).position().top];
                  _xydouble.push(double_coord);

                  function firstline(id) {
                    
                    var canvas = document.getElementById(id);
                    if (canvas == null)
                        return false;
                    var context = canvas.getContext("2d");
                    context.strokeStyle = "rgb(247,162,58)";
                    context.moveTo(_xydouble[i][0]+unitul_w+5,_xydouble[i][1]+(unitul_h-20)/2);
                    context.lineTo(_xydouble[i][0]+unitul_w+5+20,_xydouble[i][1]+(unitul_h-20)/2);
                    context.lineTo(_xydouble[i][0]+unitul_w+5+20,_xydouble[i][1]+(unitul_h-20)/2+unitul_h+10);
                    context.lineTo(_xydouble[i][0]+unitul_w+5,_xydouble[i][1]+(unitul_h-20)/2+unitul_h+10);
                    context.moveTo(_xydouble[i][0]+unitul_w+5+20,_xydouble[i][1]+unitul_h-5);
                    context.lineTo(_xydouble[i][0]+unitul_w+5+20*2,_xydouble[i][1]+unitul_h-5);
                    context.stroke(); 
                  }
                    firstline("mycanvas"); 
                }
             }else{
                for(var i=0;i<turn-1;i++){
                     listuls+=listul;
                  }
                  _content.append(listuls);

                  //dom生成矩形unit,并放入矩形列表
                  var unitul='<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"></li><li class="recta"></li></ul><div class="add_options"></div>';
                  var listArry=_content.find($(".match_list"));

                  listArry[turn-1].innerHTML='<li class="out_li">'+unitul+'</li>';
                  for(var i=1;i<turn;i++){
                    listArry[turn-1-i].innerHTML=listArry[turn-i].innerHTML+listArry[turn-i].innerHTML;
                  }

                    //按照索引处理列表层高
                $.each(listArry,function(i,e){
                  if(i!=0){
                    $(this).css('margin-top',unitul_all/2*(Math.pow(2,i)-1));
                  }
                })

                  //生成canvas dom
                  var _height=unitul_all*Math.pow(2,turn-1);
                  var _width=(unitul_w+90)*turn;
                  _content.width(_width);
                  // $(".tech_body").width(_width);
                  $(".tech_container").append('<canvas id="mycanvas" width='+_width+' height='+_height+'></canvas> ');

                 //按照索引处理每列矩形unit间距
                var margin_bt=[];
                for(var i=0;i<turn-1;i++){
                  margin_bt[0]=unitul_step;
                  margin_bt[i+1]=2*margin_bt[i]+unitul_h;
                  listArry.eq(i).find(".out_li").css("margin-bottom",margin_bt[i]);
                }

                          
                
                 //根据矩形坐标画线
                var _xy=[];
                var coordinates=[];
                 for(var i=0;i<turn-1;i++){
                  var unit_list=listArry.eq(i).find(".unit_ul");
                  var unit_length=unit_list.length;
                  
                  _xy.length=0;
                  for(var j=0;j<unit_length;j++){
                    coordinates=[unit_list.eq(j).position().left,unit_list.eq(j).position().top];
                          _xy.push(coordinates);

                  function drawline(id) {
                    
                    var canvas = document.getElementById(id);
                    if (canvas == null)
                        return false;
                    var context = canvas.getContext("2d");
                    context.strokeStyle = "rgb(247,162,58)";
                    context.moveTo(_xy[j][0]+unitul_w+5,_xy[j][1]+unitul_h/2-10);
                    context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]+unitul_h/2-10);
                    if(j%2==0){
                      context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]+unitul_h+margin_bt[i]/2-10);
                      context.lineTo(_xy[j][0]+unitul_w+5+20*2, _xy[j][1]+unitul_h+margin_bt[i]/2-10);
                    }else{
                      context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]-margin_bt[i]/2-10);
                      context.lineTo(_xy[j][0]+unitul_w+5+20*2, _xy[j][1]-margin_bt[i]/2-10);
                    }

                    context.stroke(); 
                  }
                    drawline("mycanvas"); 
                  }  
                }
             }

             //获取幂次方turn1的数据
             if(_this.personnum){
                 var listone = []; 
                function getnum1(arr){
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].turn == 1){
                      listone.push(arr[i]);
                    }else{
                        for(var key in arr[i]){
                            if(key=='groups' && arr[i].groups){
                              getnum1(arr[i][key]);
                            }
                          }  
                      } 
                  }
                     
                 }
                 getnum1(_this.matchdata);
                 console.log(listone);

                for(var i=0;i<listone.length;i++){
                	listArry.eq(0).find('.out_li').css('position','relative');
                  listArry.eq(0).find('.out_li').eq(i).html(newdom(i,listone)); 
                }  
             }

           //获取turn>1的数据
             var listtwo=[];
             var listthree=[];
             var listfour=[];
             var listfive=[];
             var list = [listtwo,listthree,listfour,listfive];
             var _html;

             function getnumall(arr,level){
              for(var i=0;i<arr.length;i++){
                if(arr[i].turn == level){
                  list[level-2].push(arr[i]);
                }else{
                    for(var key in arr[i]){
                        if(key=='groups' && arr[i].groups){
                          getnumall(arr[i][key],level);
                        }
                      }  
                  } 
              }
                 
            }
            //重新渲染turn2以及turn2之后的dom
            if(turn>1){
              for(var j=2;j<turn+1;j++){
                getnumall(_this.matchdata,j);
                for(var i=0;i<list[j-2].length;i++){
                  listArry.eq(j-1).find('.out_li').css('position','relative');
                  listArry.eq(j-1).find('.out_li').eq(i).html(newdom(i,list[j-2]));
                }
              }
            }

            function newdom(i,list){
                _html='<div class="group_num">'+list[i].groupNumber+'</div><ul class="unit_ul" data-groupid='+list[i].id+' style="width:200px;"><li class="recta" data-seatid='+list[i].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+list[i].seats[0].targetId+'><span class="recta_num">'+(list[i].seats[0].seatNumber?list[i].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(list[i].seats[0].target?list[i].seats[0].target.name:"")+'</span><span class="recta_right '+(list[i].seats[0].isWin?"add_winer":"")+'" '+(list[i].seats[1].target?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+list[i].seats[1].id+'><input name="target_id" type="hidden" value='+list[i].seats[1].targetId+'><span class="recta_num">'+(list[i].seats[1].seatNumber?list[i].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(list[i].seats[1].target?list[i].seats[1].target.name:"")+'</span><span class="recta_right '+(list[i].seats[1].isWin?"add_winer":"")+'" '+(list[i].seats[1].target?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatright:"")+'</span></li></ul><div class="add_options"></div>';

                return _html;
            }

            if(_this.matchdata.length == 2){
            	listArry.eq(turn-1).find('.out_li').css('margin-bottom','60px');
            	listArry.eq(turn-1).append('<li class="out_li"><ul class="unit_ul" data-groupid='+_this.matchdata[1].id+' style="width:200px;"><li class="recta" data-seatid='+_this.matchdata[1].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+_this.matchdata[1].seats[0].targetId+'><span class="recta_num">'+(_this.matchdata[1].seats[0].seatNumber?_this.matchdata[1].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(_this.matchdata[1].seats[0].target?_this.matchdata[1].seats[0].target.name:"")+'</span><span class="recta_right '+(_this.matchdata[1].seats[0].isWin?"add_winer":"")+'" '+(_this.matchdata[1].seats[1].target?"":"style='display: none'")+'>'+(_this.matchdata[1].scores?list[i].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+_this.matchdata[1].seats[1].id+'><input name="target_id" type="hidden" value='+_this.matchdata[1].seats[1].targetId+'><span class="recta_num">'+(_this.matchdata[1].seats[1].seatNumber?_this.matchdata[1].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(_this.matchdata[1].seats[1].target?_this.matchdata[1].seats[1].target.name:"")+'</span><span class="recta_right '+(_this.matchdata[1].seats[1].isWin?"add_winer":"")+'" '+(_this.matchdata[1].seats[1].target?"":"style='display: none'")+'>'+(_this.matchdata[1].scores?_this.matchdata[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div></li>')
            }

              window.allowDrop = function(e){
                  e = window.event || e;
                  e.preventDefault();
                        
                }
              var srcdiv = null;
              window.drag = function(e,divdom){
                  srcdiv=divdom;  
                  e.dataTransfer.setData("text/html",divdom.innerHTML); 
                      
              }
              window.drop = function(e,divdom){
                 e = window.event || e;
                 e.preventDefault();
                  var _seatid=$(divdom).parent('.recta').data("seatid");
                  var _targetid=$(srcdiv).parent('.recta').find('input[name=target_id]').val();
                  var parm={};
                  parm.seatId=_seatid;
                  parm.targetId=_targetid;
                  var _getdata=e.dataTransfer.getData("text/html");
                  _this.$http.get('event/round/groupSeat/change',parm).then(function(response){
                    if(response.data.code){
                        if(srcdiv != divdom){  
                          srcdiv.innerHTML = divdom.innerHTML;  
                          divdom.innerHTML=_getdata;  
                      }
                    }
                    
                  },function(response) {
                    console.log(22);
                  });
              }
            _this.$nextTick(function(){
              if(_this.roundStatus<6){
                  $('.edit_div').hide();
                  $('.recta_right').hide();
                }else{
                  $('.turn_btn').hide();
                  $('.against_title_tip').hide();
                  // $(".recta").attr('draggable',false);
                }

                if(_this.roundStatus<5){
                  $('.start_text').css('background-color','#999');
                }

                if(_this.roundStatus==7){
                  console.log(900);
                  $('.edit_div').hide();
                }

                var move=false,
				    left_=0,
				    top_=0;
				$('.tech_main_body').mousedown(function(e){
					console.log(777);
				    move=true;
				    left_=e.pageX-parseInt($('.tech_main_body').css("left"));
				    top_=e.pageY-parseInt($('.tech_main_body').css("top"));

				}).mouseup(function(){
				    move=false;
				});
				$(document).mousemove(function(e){
				    if(move){
				        var left_r=e.pageX-left_,
				            top_r=e.pageY-top_;
				            // console.log(e.pageX,left_,left_r)
				            $('.tech_main_body').css({"top":top_r,"left":left_r});
				    }
				});
            });
               
             //编辑查看悬浮框
              $(".edit_score").mouseover(function(){
                    $(this).next(".float_edit").show();
                  });

              $(".edit_div").mouseleave(function(){
                    $(this).find(".float_edit").hide();
                });
              $(".float_edit_edit").on("click",function(){
                  $(".m_edit").show();
                  $('.made_winer').removeClass("winer_active");
                  var $this=$(this);
                  var _parent=$this.closest(".out_li");
                  var personname_a=_parent.find('.recta_personname').eq(0).text();
                  var personname_b=_parent.find('.recta_personname').eq(1).text();
                  _this.seatida=_parent.find('input').eq(0).val();
                  _this.seatidb=_parent.find('input').eq(1).val();
                 
                  _this.personNamea=personname_a;
                  _this.personNameb=personname_b;
                  _this.groupid.groupId=_parent.find(".unit_ul").data("groupid");
                 
                   _this.$http.get('event/round/turn/getScores',_this.groupid).then(function(response){
                    if(response.data.code){
                      if(response.data.object.scores.length){
                        _this.scorelis=response.data.object.scores;
                        var _winer=response.data.object.winner;
                        if(_winer){
                          
                          if(_winer==_this.seatida){
                            $('.made_winer').eq(0).addClass("winer_active");
                          }else{
                            $('.made_winer').eq(1).addClass("winer_active");
                          }
                        }
                      }else{
                        var _index=$this.closest(".match_list").index();
                        var _lis=$('.turn_num_li').eq(_index).find(".turn_select_number").text();
                        _this.scorelis.length=0;
                        for(var i=0;i<_lis;i++){
                          _this.scorelis.push({best:i+1,seatleft:'',seatright:''});
                        }
                      }
                    }else{        
                        layer.msg(response.data.msg,{offset:"0px"});
                      }
                       
                      },function(response) {
                              console.log(22);
                          });
                })

              $(".float_edit_check").on("click",function(){
                  $(".m_check").show();
                   var $this=$(this);
                   var _alscore=$('.alread_score_dt');
                   _alscore.removeClass("compare_active");
                   $('.add_guan').remove();
                  var _parent=$this.closest(".out_li");
                  var personname_a=_parent.find('.recta_personname').eq(0).text();
                  var personname_b=_parent.find('.recta_personname').eq(1).text();
                  _this.seatida=_parent.find('input').eq(0).val();
                  _this.seatidb=_parent.find('input').eq(1).val();
                 
                  _this.personNamea=personname_a;
                  _this.personNameb=personname_b;
                  _this.groupid.groupId=_parent.find(".unit_ul").data("groupid");
                 
                   _this.$http.get('event/round/turn/getScores',_this.groupid).then(function(response){
                      if(response.data.code){
                       if(response.data.object.scores.length){
                        _this.scorelis=response.data.object.scores;
                        var _winer=response.data.object.winner;
                        var _compare=response.data.object.compare;
                        var _alscore=$('.alread_score_dt');
                        if(_compare){
                          var _comarr=_compare.split(":");
                          _alscore.eq(0).text(_comarr[0]);
                          _alscore.eq(1).text(_comarr[1]);
                        }
                        if(_winer){
                          if(_winer==_this.seatida){
                            _alscore.eq(0).addClass("compare_active");
                            _alscore.eq(0).closest('.edit_detail_li').append('<img class="add_guan" src="../../static/images/guan.png">');
                          }else{
                            _alscore.eq(1).addClass("compare_active");
                            _alscore.eq(1).closest('.edit_detail_li').append('<img class="add_guan" src="../../static/images/guan.png">');
                          }
                        }
                      }
                       }else{        
                        layer.msg(response.data.msg,{offset:"0px"});
                      }
                      },function(response) {
                              console.log(22);
                          });
                })

            $(".float_edit_reset").on("click",function(){
              var $this=$(this);
              var _parent=$this.closest(".out_li");
              var _groupid=_parent.find(".unit_ul").data("groupid");
              var parm={};
              parm.groupId=_groupid;
              _this.$http.get("event/group/resetResult",parm).then(function(response){
                if(response.data.code){
                  window.location.reload();
                }else{
                  layer.msg(response.data.msg,{offset:"0px"});
                  }
                },function(response) {
                  console.log(response);
              });

            })
             
             $(".made_winer").on('click',function(){
              $(".made_winer").removeClass("winer_active");
              $(this).addClass("winer_active");
             })
          },function(response) {
              console.log(response);
          });
		},
		methods:{
			tapswitch:function(event){
				var _this = $(event.target);
				var v = _this.attr("val");
				if(v==2){
					this.tap1 = false;
					this.tap2 = true;
				}
				else if(v==1){
					this.tap1 = true;
					this.tap2 = false;
				}
			}
		}
	}
</script>

