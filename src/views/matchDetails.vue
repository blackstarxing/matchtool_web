<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w mt90 f-re">
		<div class="g-q-hb" v-link="{ path: '/backend'}">
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
			<p class="g-q-jj col7a8">赛事还没有简介信息，<a href="#" v-link="{ path: '/backend'}">去完善</a><i v-link="{ path: '/backend'}"></i></p>
			<p class="col7a8 g-q-dz" v-show="changemodedz">地址&nbsp<span class="colfdb">•</span>&nbsp{{addreass}}{{detailAddreass}}</p>
			<ul class="g-q-tab clearfix">
				<li v-bind:class="{'g-q-tabon':tap1}" val="1" @click="tapswitch">对阵图预览</li>
				<li v-bind:class="{'g-q-tabon':tap2}" val="2" @click="tapswitch">赛事信息</li>
			</ul>
		</div>
		<div class="g-q-gofb">当前赛事<a v-link="{ path: '/backend'}">尚未发布</a>，前往管理赛事页面，完善赛事信息并<a v-link="{ path: '/backend'}">发布</a>，让更多用户看到你的赛事。</div>
		<div v-show="tap1">
			<!-- 在这个div放置对阵图哦 -->
			<div class="against_container">
			    <p class="against_title">
			     <a class="title_unit"></a>
			      <span class="against_title_text">对阵图</span>
			      <span class="against_title_tip">此对阵图为预览，可拖曳参赛选手来交换位置</span>
			    </p>
			    <div class="tech_main_body">
			        <!-- <div class="turn_num">
			          <ul class="turn_num_list clearfix">
			            <li class="turn_num_li" v-for="turnnum of turnnums">
			              <span class="turn_turnid" style="display:none">{{turnnum.modelturnid}}</span>
			              <div class="trunname_ed">
			                <span class="turn_num_text">{{turnnum.modelname}}</span>
			                <span class="turn_input_settime" style="font-size:12px;margin:0 7px;">{{turnnum.modeltime?turnnum.modeltime.split(' ',1):" "}}</span>
			                <span class="turn_select_num" style="font-size:12px;color:#f9a32a;">BO<span class="turn_select_number">{{turnnum.modelbo}}</span></span>
			                <img class="turn_num_pic" @click="turnName" src="../../static/images/turn.png"></div>
			              <div class="trunname_ing">
			              <input class="turn_input" type="text" value={{turnnum.modelname}}>
			              <a class="turn_confirm turn_frame" @click="turnConfirm">确定</a>
			              <a class="turn_quit turn_frame" @click="turnQuit">取消</a>
			            </div>
			            <ul class="turn_set_detail">
			              <li><label for="set_begin" class="set_time_begin">设置时间</label>
			                <input type="text" id="set_begin" class="set_begin" v-model="turnnum.modeltime">
			              </li>
			              <li><span>Best of</span>
			                <select style="height:18px;text-indent:0px;" class="select_num" v-model="turnnum.modelbo">
			                  <option>1</option>
			                  <option>3</option>
			                  <option>5</option>
			                  <option>7</option>
			                </select>
			              </li>
			            </ul>
			            </li>
			          </ul>
			        </div> -->
			        <div class="turn_btn" @click="randomPic">随机排列对阵选手顺序</div>
			        <div class="tech_body">
			            <div class="tech_container" style="margin-top:60px;">
			            <div class="match_content clearfix">
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
				<p class="g-q-jj col7a8" style="margin-bottom: 0;">还没有赛事奖项，<a v-link="{ path: '/backend'}">去完善</a><i v-link="{ path: '/backend'}"></i></p>
			</div>
			<div class="g-q-jx" style="margin-bottom:100px;">
				<p class="g-q-jxp">赛事规则</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;">还没有赛事规则，<a v-link="{ path: '/backend'}">去完善</a><i v-link="{ path: '/backend'}"></i></p>
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
				<div class="g-q-sssz">
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
                            if(key=='groups'){
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
                          if(onelist[i].groups.length==2){
                           var _topd=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_topd);
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li class="recta" data-seatid='+onelist[i].groups[0].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:3px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div><div class="out_li"><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[1].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[0].target?onelist[i].groups[1].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[1].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[1].target?onelist[i].groups[1].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[1].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:3px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div></div>');
                        }else if(onelist[i].groups.length==1){
                              
                              var _tops=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                              _topsY.push(_tops);
                              listArry.eq(0).append('<li class="out_li single_line"><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li data-seatid='+onelist[i].groups[0].seats[0].id+' class="recta" style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:3px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></li>');
                            
                          }
                        }
                        
                            
                      }else{
                          var _topd=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_topd);
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[0].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:3px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div><div class="out_li"><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[1].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[0].target?onelist[i].groups[1].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[1].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[1].target?onelist[i].groups[1].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[1].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:3px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div></div>');
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
                  var unitul='<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"></li><li class="recta"></li></ul>';
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

                 //获取turn1的数据
                 var listone = []; 
                function getnum1(arr){
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].turn == 1){
                      listone.push(arr[i]);
                    }else{
                        for(var key in arr[i]){
                            if(key=='groups'){
                              getnum1(arr[i][key]);
                            }
                          }  
                      } 
                  }
                     
                 }
                 getnum1(_this.matchdata);
                 console.log(listone);

                for(var i=0;i<listone.length;i++){
                  listArry.eq(0).find('.out_li').eq(i).html(newdom(i,listone)); 
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
                    context.moveTo(_xy[j][0]+unitul_w+5,_xy[j][1]+unitul_h/2);
                    context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]+unitul_h/2);
                    if(j%2==0){
                      context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]+unitul_h+margin_bt[i]/2);
                      context.lineTo(_xy[j][0]+unitul_w+5+20*2, _xy[j][1]+unitul_h+margin_bt[i]/2);
                    }else{
                      context.lineTo(_xy[j][0]+unitul_w+5+20, _xy[j][1]-margin_bt[i]/2);
                      context.lineTo(_xy[j][0]+unitul_w+5+20*2, _xy[j][1]-margin_bt[i]/2);
                    }

                    context.stroke(); 
                  }
                    drawline("mycanvas"); 
                  }  
                }
             }

           //获取turn>1的数据
             var listtwo=[];
             var listthree=[];
             var listfour=[];
             var listfive=[];
             var list = [listtwo,listthree,listfour,listfive];
             var _html;

             function getnum(arr,level){
              for(var i=0;i<arr.length;i++){
                if(arr[i].turn == level){
                  list[level-2].push(arr[i]);
                }else{
                    for(var key in arr[i]){
                        if(key=='groups'){
                          getnum(arr[i][key],level);
                        }
                      }  
                  } 
              }
                 
            }

            //重新渲染turn2以及turn2之后的dom
            if(turn>1){
              for(var j=2;j<turn+1;j++){
                getnum(_this.matchdata,j);
                for(var i=0;i<list[j-2].length;i++){
                  listArry.eq(j-1).find('.out_li').eq(i).html(newdom(i,list[j-2]));
                }
              }
            }

            function newdom(i,list){
                _html='<ul class="unit_ul" data-groupid='+list[i].id+' style="width:200px;"><li class="recta" data-seatid='+list[i].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+list[i].seats[0].targetId+'><span class="recta_num">'+(list[i].seats[0].seatNumber?list[i].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(list[i].seats[0].target?list[i].seats[0].target.name:"")+'</span><span class="recta_right '+(list[i].seats[0].isWin?"add_winer":"")+'" '+(list[i].seats[1].target?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+list[i].seats[1].id+'><input name="target_id" type="hidden" value='+list[i].seats[1].targetId+'><span class="recta_num">'+(list[i].seats[1].seatNumber?list[i].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(list[i].seats[1].target?list[i].seats[1].target.name:"")+'</span><span class="recta_right '+(list[i].seats[1].isWin?"add_winer":"")+'" '+(list[i].seats[1].target?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div" '+(list[i].seats[1].target?"":"style='display: none'")+'><div class="edit_score" '+(list[i].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:3px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div>';

                return _html;
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
                  $(".recta").attr('draggable',false);
                }

                if(_this.roundStatus<5){
                  $('.start_text').css('background-color','#999');
                }

                if(_this.roundStatus==7){
                  console.log(900);
                  $('.edit_div').hide();
                }
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
			},
			randomPic:function(){
		        var parm={};
		        parm.eventId=window.sessionStorage.getItem("eventid");
		        this.$http.get("event/round/groupSeat/random",parm).then(function(response){
		          if(response.data.code){
		            window.location.reload();
		            }else{
		              layer.msg(response.data.msg,{offset:"0px"});
		              }
		            },function(response) {
		              console.log(response);
		          });
		      },
		}
	}
</script>
<style>
	/*－－－－－－－－－－－－－－－－－－－－－－－－对阵图－－－－－－－－－－－－－－－－－－－－－－－*/
.tech_footer{
	text-align: center;
	margin: 50px 0;
}
.end_tech{
    width: 300px;
  }
.end_tech li{
    margin-bottom: 10px;
  }
  .tech_top{
	width: 100%;
	height: 50px;
	background-color: #000;
	opacity: 0.8;
}
.tech_top_text{
	width: 1200px;
	height: 50px;
	margin: auto;
}
.tech_top_logo{
	float: left;
	cursor: pointer;
	height: 40px;
	margin-top: 5px;
}
.tech_top_person{
	float: right;
	line-height: 50px;
	color: #fff;
}
.logout{
	cursor:pointer;
}
.tech_nav{
	width: 100%;
	height: 90px;
	background-color: #2a2e32;
	opacity: 0.7;
}
.tech_nav_list{
	width:1200px;
	margin: 0 auto;
}
.tech_nav_list li{
	float: left;
	padding-right:120px;
	color: #fff;
	text-align: center;
	cursor: pointer;
}
.tect_nav_pic{
	margin: 20px auto 10px;
}
.icon_tool{
	font-size: 20px;
}
.tech_nav_list .tech_nav_action{
	color: #f9a32a;
}
.v-link-active{
	color: #f9a32a !important;
}
.tech_body{
  padding:0 70px;
}
.tech_container{
  position: relative; 
}
.recta{
  width: 200px;
  height: 22px;
  background-color: #36383f;
  color: #fff;
  line-height: 22px;
  position: relative;
}
.match_content{
  position: absolute;
  top:0;
  left:0;
}
.match_list{
  float: left;
  margin-right: 50px;
}
.tech_msg{
  width: 1200px;
  margin:20px auto;
}
.body_top_pic{
  width: 100%;
}
.tech_msg_text{
  height: 200px;
  background: rgba(52,57,63,0.9);
  padding: 40px 20px 0;
  margin-top: -14px;
}
.tech_msg_left{
  width: 325px;
  height: 160px;
  float: left;
}
.tech_msg_right{
  float: right;
  width: 815px;
  color: #fff;
}
.begin_tech{
  padding-bottom: 20px;
  border-bottom: 1px dashed #53585d;
}
.begin_tech_left{
  float: left;
}
.begin_tech_right{
  float: right;
}
.start_btn{
  width: 200px;
  height: 40px;
  position: relative;
  cursor: pointer;
  margin-top: 15px;
}
.start_text{
  position: absolute;
  width: 200px;
  height: 40px;
  left: 0;
  top: 0;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
}
.sponsor{
  font-size: 12px;
  margin: 20px 0 15px;
}
.check_app{
  font-size: 12px;
  position: relative;
}
.msg_list_left{
  float: left;
  margin-right: 15px;
}
.msg_list_right{
  float: left;
  font-size: 12px;
}
.begin_msg_list{
  margin: 20px auto 0;
}
.begin_msg_list li{
  float: left;
  margin-right: 30px;
}
.msg_list_name{
  margin-bottom: 5px;
}
.title_unit{
  display: inline-block;
  width: 7px;
  height: 20px;
  background-color: #f9a32a;
}
.against_container{
  width: 1024px;
  margin: 20px auto;
  background-color: #171a21;
  padding-top: 30px;
  position: relative;
}
.against_title{
  color: #fff;
  height: 25px;
  line-height: 25px;
  margin:0 0 30px 20px;
}
.against_title_text{
  font-size: 18px;
  margin-left: 5px;
}
.against_title_tip{
  font-size: 12px;
  color: #53585d;
}
.turn_btn{
  width: 220px;
  height: 35px;
  line-height: 30px;
  background:url(../../static/images/luck.png) no-repeat 10px 7px #f9a32a;
  color: #fff;
  border-radius: 5px;
  margin: 0 70px 30px;
  text-align: center;
  cursor: pointer;
}
.tech_down_tip{
  width: 1200px;
  margin: 0 auto;
  position: relative;
  padding-bottom: 50px;
  border-bottom: 1px solid #53585d;
  margin-top: -27px;
}
.tech_footer_text{
  width:1200px;
  font-size: 12px;
  position: absolute;
  left:0;
  top:75px;
  color: #fff;
}
.tech_footer_text li{
  float: left;
  width: 45%;
}
.tech_cup{
  opacity: 0.3;
  position: absolute;
  bottom:50px;
  left: 467px;
}
.turn_num_list{
    margin: 0 20px 20px 45px;
    font-size: 16px;
    color: #fff;

}
.turn_num_list li{
  float: left;
  width: 248px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  margin-right: 2px;
  position: relative;
  cursor: pointer;
}
.turn_num_pic{
    position: absolute;
    top:11px;
    right:15px;
}
.recta_num{
  display: inline-block;
  width: 30px;
  height: 22px;
  background-color: #6c6c6e;
  text-align: center;
  color: #000;
  font-size: 12px;
  position: absolute;
  top:0;
  left:0;
}
.recta_right{
  display: inline-block;
  width: 30px;
  height: 22px;
  background-color: #838383;
  text-align: center;
  color: #000;
  font-size: 12px;
  float: right;
}
.edit_div{
  position: relative;
  width: 0;
  height: 0;
}
/*.edit_score{
  position: absolute;
  top:-65px;
  width:30px;
  height: 45px;
  left: 170px;
  background: url(../../static/images/edit.png) no-repeat 6px 16px #53585d;
  cursor: pointer;
}*/
.float_edit{
  position: absolute;
  width: 180px;
  height: 45px;
  top:-65px;
  left:200px;
  background-color: #000;
  opacity: 0.8;
  display: none;
  z-index: 999;
}
.float_edit li{
  float: left;
  width: 33%;
  text-align: center;
  cursor: pointer;
}
.tech_main_body{
  overflow-x: scroll;
  overflow-y: hidden;
}
.turn_input{
  width: 140px;
  height: 25px;
  background-color: #27292d;
}
.turn_frame{
  display: inline-block;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  line-height: 30px;
  cursor: pointer;
  font-size: 12px;
}
.turn_confirm{
  background-color: #f9a32a;
  color: #fff;
}
.turn_quit{
  background-color: #dcdcdc;
  color: #000;
}
.trunname_ed{
  background:#53585d;
}
.trunname_ing{
  display: none;
  background-color: #81858a;
}
.turn_set_detail{
  background-color: #16181d;
  height: 60px;
  font-size: 12px;
  display: none;
}
.turn_set_detail li{
  height: 20px;
  margin: 5px 0;
  line-height: 20px;
  cursor: pointer;
}
.turn_set_detail li:hover{
  background-color: #7f5b2f;
}
.tech_range{
  width: 200px;
  height: 25px;
  background-color: #838383;
  border-radius: 3px;
}
.tech_range_detail{
  width:40px;
  height: 25px;
  border-radius: 3px;
  background-color: #f9a32a;
  float: left;
}
.tech_range_num{
  float: right;
  font-size: 12px;
  line-height: 25px;
}
#set_begin{
  opacity: 0;
  height:20px;
  width:288px
}
.set_time_begin{
  position: absolute;
  top:2px;
  left:100px;
  font-size: 12px;
}
.edit_ring{
  width: 120px;
  height: 120px;
  background-color: #181b1f;
  border-radius: 60px;
  text-align: center;
  line-height: 120px;
  font-size: 20px;
}
.edit_detail_top{
  margin: 10px 100px;
}
.edit_detail_top li{
  float: left;
  text-align: center;
  position: relative;
}
.edit_detail_mid{
  width: 50px;
  font-size: 20px;
}
.edit_detail_bt{
  margin: 10px 100px 10px;
  height: 130px;
  overflow-y: scroll;
}
.edit_btn_mid{
  display: inline-block;
  width: 20px;
  font-size: 18px;
  text-align: center;
}
.add_edit_list{
  color: #fe3507;
  font-size: 12px;
  margin: 0 100px;
  cursor: pointer;
}
.add_winer{
  background-color: #f9a32a;
}
.edit_detail_table{
  width: 300px;
  max-height: 200px;
  margin: 10px auto;
  text-align: center;
  background-color: #1c1d21;
  overflow-y:scroll;
}
.edit_detail_table td{
  border: 1px solid #404244;
  height: 40px;
}
.compare_active{
  color: #f9a32a;
}
.add_guan{
  position: absolute;
  top: 80px;
  right:10px;
}
.tech_intro{
  background: rgba(52,57,63,0.9);
  padding: 0 20px 30px;
  color: #fff;
  font-size: 12px;
}
.tech_intro h2{
  font-size: 18px;
}
.float_checkbox{
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #53585d;
  border-radius: 2px;
  position: absolute;
  top:0;
  left:0;
}
.check_gou{
  display: inline-block;
  width: 15px;
  height: 15px;
  text-align: center;
  color: #f9a32a;
}
#show_app{
  opacity: 0;
  z-index: 99999;
  width:15px;
  height: 15px;
}
.add_options{
	width: 200px;
	height: 20px;
	background-color: #1d1d1d;
	opacity: 0;
}
.recta:hover{
	background-color: rgb(236,146,38);
};
.recta_personname{
	display: inline-block;
	margin-left: 35px;
	width: 130px;
}
</style>
