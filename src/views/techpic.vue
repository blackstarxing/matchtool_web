<template>
  <top-head></top-head> 
  <top-nav></top-nav> 
  <div class="tech_msg">
    <div class="body_top_pic"><img src="../../static/images/body_top.png" width="100%"></div>
    <div class="tech_msg_text clearfix">
      <div class="tech_msg_left"><img :src="techinfo.techinfoPic" width="100%" height="100%"></div>
      <div class="tech_msg_right">
      <div class="begin_tech clearfix">
        <div class="begin_tech_left">
          <h2 style="font-size:16px">{{techinfo.techinfoname}}</h2>
           <p class="sponsor">主办方：<span style="color:#f9a32a;">{{nickName}}</span></p>
          <div class="check_app">
            <input type="checkbox" id="show_app" v-model="checked" @change="isShowapp">
            <label for="show_app">在网娱大师App中展示</label>
            <label for="show_app" class="float_checkbox"><span class="check_gou" v-if="checked">√</span></label>
          </div>
        </div>
      <div class="begin_tech_right">
          <div class="before_tech tech_right_staus" style="display:none">
            <p style="font-size:12px;">当一切都准备就绪后，您就可以:</p>
            <div class="start_btn not_checked">
              <img src="../../static/images/start.png" width="100%" height="100%">
              <p class="start_text" @click="beginTech"></p>
            </div>
          </div>
          <div class="begining_tech tech_right_staus" style="display:none">
              <p style="font-size:12px;">编辑比分以推进赛事进程:</p>
              <div class="start_btn">
                <div class="tech_range">
                  <div class="tech_range_detail">
                    </div>
              <div class="tech_range_num"></div>
          </div>
        </div>
      </div>
      <div class="ending_tech tech_right_staus" style="display:none">
            <p style="font-size:12px;"></p>
            <div class="start_btn">
              <img src="../../static/images/start.png" width="100%" height="100%">
              <p class="start_text" @click="endTech">结束比赛</p>
            </div>
          </div>
          <ul class="end_tech tech_right_staus" style="display:none">
            <li>
              <img src="../../static/images/one.png">
        <span>冠军：</span>
        <span>{{champion}}</span>
      </li>
      <li>
        <img src="../../static/images/two.png">
        <span>亚军：</span>
        <span>{{second}}</span>
      </li>
      <!-- <li>
        <img src="../../static/images/three.png">
        <span>季军：</span>
        <span></span>
      </li>  -->   
    </ul>
        </div>
      </div>
      <div class="begin_tech_msg">
        <ul class="begin_msg_list clearfix">
          <li class="clearfix">
            <div class="msg_list_left"><img src="../../static/images/msg_a.png"></div>
            <div class="msg_list_right">
              <p class="msg_list_name">竞技项目</p>
              <p>{{techinfo.itemName}}•{{techinfo.ServerName}}</p>
            </div>
          </li>
          <li class="clearfix">
            <div class="msg_list_left"><img src="../../static/images/msg_b.png"></div>
            <div class="msg_list_right">
              <p class="msg_list_name">赛事时间:{{techinfo.techtime}}</p>
              <p class="msg_list_name">报名时间:{{techinfo.techinfobegin}}-{{techinfo.techinfoEnd}}</p>
              <p></p>
            </div>
          </li>
          <li class="clearfix">
            <div class="msg_list_left"><img src="../../static/images/msg_c.png"></div>
            <div class="msg_list_right">
              <p class="msg_list_name">赛制</p>
              <p>{{techinfo.techinfoNum}}人赛事＋单败淘汰制</p>
            </div>
          </li>
        </ul>
      </div>
     </div>
    </div>
    <div class="tech_intro">
      <h2>赛事简介</h2>
      <p class="tech_detail_intro"></p>
    </div>
  </div>
  <div class="against_container">
    <div class="tech_cup"><img src="../../static/images/cup.png"></div>
    <p class="against_title">
     <a class="title_unit"></a>
      <span class="against_title_text">对阵图</span>
      <span class="against_title_tip">此对阵图为预览，可拖曳参赛选手来交换位置</span>
    </p>
    <div class="tech_main_body">
        <div class="turn_num">
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
        </div>
        <div class="turn_btn" @click="randomPic">随机排列对阵选手顺序</div>
        <div class="tech_body">
            <div class="tech_container" style="margin-top:50px;">
            <div class="match_content clearfix">
            </div>   
          </div>
        </div>
    </div>
  </div>
  <div class="tech_down_tip">
    <img src="../../static/images/body_bt.png" width="100%">
    <ul class="tech_footer_text clearfix">
      <li style="float:left">
        <h2 class="footer_text_title">
          <a class="title_unit"></a>
          <span style="font-size:18px;color:#fff;">赛事规则</span>
        </h2>  
        <div class="footer_text_rules"></div> 
      </li>
      <li style="float:right">
        <h2 class="footer_text_title">
          <a class="title_unit"></a>
          <span style="font-size:18px;color:#fff;">奖金设置</span>
        </h2>
        <div class="footer_text_proud"></div> 
      </li>
    </ul>
  </div> 
  <div class="m-mask m_edit">
    <div class="m-pop"style="margin: 5px auto 0;">
      <div class="wrap">
        <h3>编辑比分</h3>
        <a href="javascript:void(0);" class="u-btn-close" @click="closeEdit"></a>
        <ul class="edit_detail_top clearfix">
          <li class="edit_detail_left">
            <div class="edit_ring">{{personNamea.substr(0,1)}}</div>
            <p style="margin:10px 0;">{{personNamea}}</p>
            <div class="made_winer"><span style="display:none">{{seatida}}</span></div>
          </li>
          <li class="edit_detail_mid">vs</li>
          <li class="edit_detail_right">
            <div class="edit_ring">{{personNameb.substr(0,1)}}</div>
            <p style="margin:10px 0;">{{personNameb}}</p>
            <div style="margin:0 auto;" class="made_winer"><span style="display:none">{{seatidb}}</span></div>
          </li>
        </ul>
        <div class="turn_edit_line" style="text-align: center;"><img src="../../static/images/turnline.png"></div>
        <ul class='edit_detail_bt'>
          <li style="margin-bottom:20px;" v-for="scoreli in scorelis">
            <input type="text" style="width:120px;" v-model="scoreli.seatleft">
            <span class="edit_btn_mid">:</span>
            <input type="text" style="width:120px;margin-right:5px;" v-model="scoreli.seatright">
            <img src="../../static/images/delli.png" @click="deleScoreli(scoreli)" v-if="!scoreli.seatleft || !scoreli.seatright">
          </li>
        </ul>
        <div class="add_edit_list" @click="addScorelist">＋添加一组</div>
        <a href="javascript:void(0);" class="u-btn add-member" @click="submitScore">提交比分</a>
      </div>      
    </div>
  </div>
  <div class="m-mask m_check">
    <div class="m-pop"style="margin: 5px auto 0;">
      <div class="wrap">
        <h3>查看比分</h3>
        <a href="javascript:void(0);" class="u-btn-close" @click="closeEdit"></a>
        <ul class="edit_detail_top clearfix">
          <li class="edit_detail_left edit_detail_li">
            <div class="edit_ring check_ring">{{personNamea.substr(0,1)}}</div>
            <p style="margin:10px 0;">{{personNamea}}</p>
            <div class="alread_score"><span class="alread_score_dt"></span><span style="display:none">{{seatida}}</span></div>
          </li>
          <li class="edit_detail_mid">vs</li>
          <li class="edit_detail_right edit_detail_li">
            <div class="edit_ring check_ring">{{personNameb.substr(0,1)}}</div>
            <p style="margin:10px 0;">{{personNameb}}</p>
            <div style="margin:0 auto;" class="alread_score"><span class="alread_score_dt"></span><span style="display:none">{{seatidb}}</span></div>
          </li>
        </ul>
        <div class="turn_edit_line" style="text-align: center;"><img src="../../static/images/turnline.png"></div>
        <table class='edit_detail_table'>
          <tbody>
            <tr v-for="scoreli in scorelis">
              <td>{{scoreli.seatleft}}</td>
              <td>{{scoreli.seatright}}</td>
            </tr>
          </tbody>
        </table>
      </div>      
    </div>
  </div>
</template>

<script>
// window.allowDrop = function(e){
//   e = window.event || e;
//   e.preventDefault();
        
// }
// var srcdiv = null;
// window.drag = function(e,divdom){
//           srcdiv=divdom;  
//           e.dataTransfer.setData("text/html",divdom.innerHTML); 
        
// }
// window.drop = function(e,divdom){
//        e = window.event || e;
//        e.preventDefault();
//         if(srcdiv != divdom){  
//             srcdiv.innerHTML = divdom.innerHTML;  
//             divdom.innerHTML=e.dataTransfer.getData("text/html");  
//           } 
        
// }

import topHead from '../components/topHead.vue'
import topNav from '../components/topNav.vue'
  export default {
    data () {
    return {
    matchdata:'',
    checked:'',
    techinfo:{techinfoname:'',techinfobegin:'',techinfoEnd:'',techinfoNum:'',
    techinfoPic:'',itemName:'',ServerName:'',techtime:''},
    turnnums:[],
    personnum:"",
    overhalf:"",
    setBegin:"",
    personNamea:'',
    personNameb:'',
    scorelis:[],
    groupid:{},
    seatida:{},
    seatidb:{},
    roundStatus:'',
    nickName:'',
    champion:'',
    second:'',
    }
  },
     ready: function(){
      var _this=this;
      var beginparm={};
      var before_tech=$('.before_tech');
      var _eventid=window.sessionStorage.getItem("eventid");
      var _roundid=window.sessionStorage.getItem("roundid");
      _this.nickName=window.sessionStorage.getItem("username");
      beginparm.oetInfoId=_eventid;
      beginparm.oetRoundId=_roundid;
      var parmstr=JSON.stringify(beginparm);
      var _parm={};
      _parm.jsonInfo=parmstr;
    _this.$http.get('event/getStatusByTime',_parm).then(function(response){
      _this.roundStatus=response.data.object.roundStatus;
      window.sessionStorage.setItem("roundStatus",_this.roundStatus);
      if(response.data.object.roundStatus==1){
        before_tech.show();
        $('.start_text').text("报名预热中");
      }else if(response.data.object.roundStatus==2){
        before_tech.show();
        $('.start_text').text("报名进行中...");
      }else if(response.data.object.roundStatus==3){
        before_tech.show();
        $('.start_text').text("签到进行中...");
      }else if(response.data.object.roundStatus==4){
        before_tech.show();
        $('.start_text').text("报名已结束");
      }else if(response.data.object.roundStatus==5){
        before_tech.show();
        $('.start_text').text("开始比赛");
      }else if(response.data.object.roundStatus==6){
        if(_this.checked){
          $("#show_app").attr('disabled','disabled');
        }
        $('.begining_tech').show();
        var _rate=response.data.object.rate;
           $(".tech_range_detail").width(_rate*2);
           $(".tech_range_num").text(_rate+"%");
           if(_rate==100){
            $('.begining_tech').hide();
            $('.ending_tech').show();
           }
        
      }else if(response.data.object.roundStatus==7){
         if(_this.checked){
          $("#show_app").attr('disabled','disabled');
        }
        $('.end_tech').show();
        _this.champion=response.data.object.firstName;
        _this.second=response.data.object.secondName;
        // this.$route.router.go({path: '/techPic/resultTech/'});
      }

      },function(response) {
              console.log(22);
          });

    _this.$http.get('event/openOetInfo',_parm).then(function(response){
      if(response.data.code){
        var _techinfo=response.data.object;
      _this.techinfo.techinfoname=_techinfo.event.name;
      _this.techinfo.techinfobegin=_techinfo.applyBegin;
      _this.techinfo.techinfoEnd=_techinfo.applyEnd;
      _this.techinfo.techinfoNum=_techinfo.round.maxNum;
      _this.techinfo.techinfoPic=_techinfo.event.poster?'http://img.wangyuhudong.com/'+_techinfo.event.poster:'';
      _this.techinfo.itemName=_techinfo.event.itemName;
      _this.techinfo.ServerName=_techinfo.event.itemServerName;
      _this.techinfo.techtime=_techinfo.activityBegin;
      _this.checked=_techinfo.event.isShow?true:false;

      $('.footer_text_rules').append(_techinfo.event.regimeRule);
      $('.footer_text_proud').append(_techinfo.event.prizeSetting);
      $(".tech_detail_intro").append(_techinfo.event.brief);
    }else{
      layer.msg(response.data.msg,{offset:"0px"});
    }
      },function(response) {
              console.log(response);
          });

    var parm={};
       parm.id=_eventid;
       _this.$http.get('event/info',parm).then(function(response){
        console.log(response);
            _this.personnum=response.data.object.iscountm?true:false;
            _this.overhalf=response.data.object.iscountj1?true:false;
             _this.matchdata=response.data.object.groups;

             var turn=_this.matchdata[0].turn;
             var turnid=response.data.object.turns;
             
            var unitul_h=60;
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
                  unitul_step=80;
                  unitul_all=unitul_h+unitul_step;
                }
                //dom生成矩形列表
                for(var i=0;i<turn-2;i++){
                   listuls+=listul;
                }
                _content.append(listuls);
                
                //dom生成矩形unit,并放入矩形列表
                var unitul='<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"><span class="recta_num"></span></li><li class="recta"><span class="recta_num"></span></li></ul>';
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
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta" style="margin-bottom:1px;"><input type="hidden" value='+onelist[i].groups[0].seats[0].id+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta"><input type="hidden" value='+onelist[i].groups[0].seats[1].id+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div><div class="out_li"><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta" style="margin-bottom:1px;"><input type="hidden" value='+onelist[i].groups[1].seats[0].id+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[1].seats[0].target?onelist[i].groups[1].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta"><input type="hidden" value='+onelist[i].groups[1].seats[1].id+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[1].seats[1].target?onelist[i].groups[1].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[1].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div></div>');
                        }else if(onelist[i].groups.length==1){
                              
                              var _tops=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                              _topsY.push(_tops);
                              listArry.eq(0).append('<li class="out_li single_line"><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta" style="margin-bottom:1px;"><input type="hidden" value='+onelist[i].groups[0].seats[0].id+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta"><input type="hidden" value='+onelist[i].groups[0].seats[1].id+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></li>');
                            
                          }
                        }
                        
                            
                      }else{
                          var _topd=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_topd);
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta" style="margin-bottom:1px;"><input type="hidden" value='+onelist[i].groups[0].seats[0].id+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta"><input type="hidden" value='+onelist[i].groups[0].seats[1].id+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div><div class="out_li"><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta" style="margin-bottom:1px;"><input type="hidden" value='+onelist[i].groups[1].seats[0].id+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[1].seats[0].target?onelist[i].groups[1].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta"><input type="hidden" value='+onelist[i].groups[1].seats[1].id+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[1].seats[1].target?onelist[i].groups[1].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[1].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div></div>');
                    }
                }

                for(var i=0;i<onelist.length;i++){
                  console.log(i);
                  console.log(onelist[i].id);
                  listArry.eq(1).find('.out_li').eq(i).html('<ul class="unit_ul" data-groupid='+onelist[i].id+' style="width:200px;"><li class="recta" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" style="margin-bottom:1px;"><input type="hidden" value='+onelist[i].seats[0].id+'><span class="recta_num">'+(onelist[i].seats[0].seatNumber?onelist[i].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(onelist[i].seats[0].target?onelist[i].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].seats[0].isWin?"add_winer":"")+'" '+(onelist[i].seats[1].target?"":"style='display: none'")+'>'+(onelist[i].scores?onelist[i].scores.seatleft:"")+'</span></li><li class="recta" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)"><input type="hidden" value='+onelist[i].seats[1].id+'><span class="recta_num">'+(onelist[i].seats[1].seatNumber?onelist[i].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(onelist[i].seats[1].target?onelist[i].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].seats[1].isWin?"add_winer":"")+'" '+(onelist[i].seats[1].target?"":"style='display: none'")+'>'+(onelist[i].scores?onelist[i].scores.seatright:"")+'</span></li></ul><div class="edit_div" '+(onelist[i].seats[1].target?"":"style='display: none'")+'><div class="edit_score" '+(onelist[i].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div>'); 
                }
                // console.log(_topdY);

                //根据轮空的坐标确定第一列坐标
                var list_first=listArry.eq(0).find(".single_line");
                for(i=0;i<_topsY.length;i++){
                  list_first.eq(i).offset({'top':_topsY[i]+35});
                }

                if(_topdY.length!=0){
                  var list_double=listArry.eq(0).find(".double_line");
                  for(i=0;i<_topdY.length;i++){
                    list_double.eq(i).offset({'top':_topdY[i]-35});
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
                    context.moveTo(_xy[j][0]+unitul_w+5,_xy[j][1]+unitul_h/2);
                    context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]+unitul_h/2);
                    if(j%2==0){
                      context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]+unitul_h+margin_bt[i-1]/2);
                      context.lineTo(_xy[j][0]+unitul_w+5+40*2, _xy[j][1]+unitul_h+margin_bt[i-1]/2);
                    }else{
                      context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]-margin_bt[i-1]/2);
                      context.lineTo(_xy[j][0]+unitul_w+5+40*2, _xy[j][1]-margin_bt[i-1]/2);
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
                    context.moveTo(_xysingle[i][0]+unitul_w+5,_xysingle[i][1]+unitul_h/2);
                    context.lineTo(_xysingle[i][0]+unitul_w+5+40,_xysingle[i][1]+unitul_h/2);
                    context.lineTo(_xysingle[i][0]+unitul_w+5+40,_xysingle[i][1]-5);
                    context.lineTo(_xysingle[i][0]+unitul_w+5+40*2, _xysingle[i][1]-5);
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
                    context.moveTo(_xydouble[i][0]+unitul_w+5,_xydouble[i][1]+unitul_h/2);
                    context.lineTo(_xydouble[i][0]+unitul_w+5+40,_xydouble[i][1]+unitul_h/2);
                    context.lineTo(_xydouble[i][0]+unitul_w+5+40,_xydouble[i][1]+unitul_h/2+unitul_h+10);
                    context.lineTo(_xydouble[i][0]+unitul_w+5,_xydouble[i][1]+unitul_h/2+unitul_h+10);
                    context.moveTo(_xydouble[i][0]+unitul_w+5+40,_xydouble[i][1]+unitul_h+5);
                    context.lineTo(_xydouble[i][0]+unitul_w+5+40*2,_xydouble[i][1]+unitul_h+5);
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
                  listArry.eq(0).find('.out_li').eq(i).html('<ul class="unit_ul" data-groupid='+listone[i].id+' style="width:200px;"><li class="recta" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" style="margin-bottom:1px;"><input type="hidden" value='+listone[i].seats[0].id+'><span class="recta_num">'+(listone[i].seats[0].seatNumber?listone[i].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(listone[i].seats[0].target?listone[i].seats[0].target.name:"")+'</span><span class="recta_right '+(listone[i].seats[0].isWin?"add_winer":"")+'">'+(listone[i].scores?listone[i].scores.seatleft:"")+'</span></li><li class="recta" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)"><input type="hidden" value='+listone[i].seats[1].id+'><span class="recta_num">'+(listone[i].seats[1].seatNumber?listone[i].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(listone[i].seats[1].target?listone[i].seats[1].target.name:"")+'</span><span class="recta_right '+(listone[i].seats[1].isWin?"add_winer":"")+'" '+(listone[i].seats[1].target?"":"style='display: none'")+'>'+(listone[i].scores?listone[i].scores.seatright:"")+'</span></li></ul><div class="edit_div"><div class="edit_score" '+(listone[i].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div>'); 
                }

                var listtwo=[];
                if(turn>1){
                  function getnum2(arr){
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].turn == 2){
                      listtwo.push(arr[i]);
                    }else{
                        for(var key in arr[i]){
                            if(key=='groups'){
                              getnum2(arr[i][key]);
                            }
                          }  
                      } 
                  }
                     
                }
                getnum2(_this.matchdata);
                for(var i=0;i<listtwo.length;i++){
                  listArry.eq(1).find('.out_li').eq(i).html(newdom(i,listtwo)); 
                }
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
                    context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]+unitul_h/2);
                    if(j%2==0){
                      context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]+unitul_h+margin_bt[i]/2);
                      context.lineTo(_xy[j][0]+unitul_w+5+40*2, _xy[j][1]+unitul_h+margin_bt[i]/2);
                    }else{
                      context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]-margin_bt[i]/2);
                      context.lineTo(_xy[j][0]+unitul_w+5+40*2, _xy[j][1]-margin_bt[i]/2);
                    }

                    context.stroke(); 
                  }
                    drawline("mycanvas"); 
                  }  
                }
             }

           
             var listthree=[];
             var listfour=[];
             var listfive=[];
             var _html;


               if(turn>2){
                  function getnum3(arr){
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].turn == 3){
                      listthree.push(arr[i]);
                    }else{
                        for(var key in arr[i]){
                            if(key=='groups'){
                              getnum3(arr[i][key]);
                            }
                          }  
                      } 
                  }
                     
                }
                getnum3(_this.matchdata);
                for(var i=0;i<listthree.length;i++){
                  listArry.eq(2).find('.out_li').eq(i).html(newdom(i,listthree));
                }

                }

                if(turn>3){
                  function getnum4(arr){
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].turn == 4){
                      listfour.push(arr[i]);
                    }else{
                        for(var key in arr[i]){
                            if(key=='groups'){
                              getnum4(arr[i][key]);
                            }
                          }  
                      } 
                  }
                     
                }
                getnum4(_this.matchdata);
                for(var i=0;i<listfour.length;i++){
                  listArry.eq(3).find('.out_li').eq(i).html(newdom(i,listfour));
                }
                }

              if(turn>4){
                  function getnum5(arr){
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].turn == 5){
                      listfive.push(arr[i]);
                    }else{
                        for(var key in arr[i]){
                            if(key=='groups'){
                              getnum5(arr[i][key]);
                            }
                          }  
                      } 
                  }
                     
                }
                getnum5(_this.matchdata);
                for(var i=0;i<listfive.length;i++){
                  listArry.eq(4).find('.out_li').eq(i).html(newdom(i,listfive));
                }
                }

            function newdom(i,list){
                _html='<ul class="unit_ul" data-groupid='+list[i].id+' style="width:200px;"><li class="recta" style="margin-bottom:1px;"><input type="hidden" value='+list[i].seats[0].id+'><span class="recta_num">'+(list[i].seats[0].seatNumber?list[i].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(list[i].seats[0].target?list[i].seats[0].target.name:"")+'</span><span class="recta_right '+(list[i].seats[0].isWin?"add_winer":"")+'" '+(list[i].seats[1].target?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatleft:"")+'</span></li><li class="recta"><input type="hidden" value='+list[i].seats[1].id+'><span class="recta_num">'+(list[i].seats[1].seatNumber?list[i].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(list[i].seats[1].target?list[i].seats[1].target.name:"")+'</span><span class="recta_right '+(list[i].seats[1].isWin?"add_winer":"")+'" '+(list[i].seats[1].target?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatright:"")+'</span></li></ul><div class="edit_div" '+(list[i].seats[1].target?"":"style='display: none'")+'><div class="edit_score" '+(list[i].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div>';

                return _html;
            }

            _this.$nextTick(function(){
              if(_this.roundStatus<6){
                console.log($('.edit_div'));
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
                          $('.made_winer').removeClass("winer_active");
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
      turnName: function(e){
        var _target=$(e.currentTarget);
        var _parent=_target.closest(".trunname_ed");
         _parent.hide();
         _parent.next(".trunname_ing").show();
         _parent.siblings(".turn_set_detail").show();
      },
      turnConfirm: function(e){
        var _this=this;
        var turnparm={};
        var _target=$(e.currentTarget);
        var _text=_target.siblings(".turn_input").val();
        var _parent=_target.closest(".turn_num_li");
          _parent.find('.trunname_ing').hide();
          _parent.find(".trunname_ed").show();
          _parent.find(".turn_num_text").text(_text);
          turnparm.id=_parent.find('.turn_turnid').text();
          turnparm.matchTime=_parent.find('.set_begin').val();
          turnparm.matchType=_parent.find('.turn_select_number').text();
          turnparm.name=_parent.find('.turn_num_text').text();
          var parmstr=JSON.stringify(turnparm);
          var parm={};
          parm.turnJson=parmstr;
          _this.$http.get("event/round/turn/saveTurn",parm).then(function(response){
            if(response.data.code){
                  _parent.find('.turn_set_detail').hide();
                  }else{
                    layer.msg(response.data.msg,{offset:"0px"});
                  }
            },function(response) {
              console.log(response);
          });
      },
      turnQuit:function(e){
        var _target=$(e.currentTarget);
        var _parent=_target.closest(".turn_num_li");
        _parent.find('.turn_set_detail').hide();
        _target.parent().hide();
        _target.parent().siblings(".trunname_ed").show();
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
      closeEdit:function(){
        $(".m-mask").hide();
      },
      addScorelist:function(){
        var _length=this.scorelis.length;
        this.scorelis.push({best:_length+1,seatleft:'',seatright:''});
      },
      deleScoreli:function(scoreli){
          this.scorelis.$remove(scoreli);
      },
      submitScore:function(){
        var _this=this;
        var scoreparm={};
        var scorep=[];
        for(var i=0;i<_this.scorelis.length;i++){
          if(_this.scorelis[i].seatleft){
            scorep.push(_this.scorelis[i]);
          }
        }
        scoreparm.groupid=_this.groupid.groupId;
        scoreparm.bs=scorep;

      var parmstr=JSON.stringify(scoreparm);
      var parm={};
      parm.scores=parmstr;
      console.log(parm);
      if($('.made_winer').hasClass('winer_active')){
        parm.seatId=$(".winer_active").find('span').text();
      }

    _this.$http.get('event/round/turn/saveScoreAndWin',parm).then(function(response){
      console.log(response);
        if(response.data.code){
          $(".m_edit").hide();
           window.location.reload();
        }else{
            layer.msg(response.data.msg,{offset:"0px"});
          }
      },function(response) {
              console.log(22);
          });
      },
      isShowapp:function(){
        var _this=this;
        var _eventid=window.sessionStorage.getItem("eventid");
        var ishowparm={};
        ishowparm.oetInfoId=_eventid;
        ishowparm.isShow=_this.checked?1:0;
        var parmstr=JSON.stringify(ishowparm);
        var parm={};
        parm.jsonInfo=parmstr;
        var _html=this.checked?'你确定要在app中显示吗？':'你确定要取消在app中显示吗？';
        layer.confirm(_html, {
            btn: ['确定','取消'], 
            move:false,
            closeBtn: 0
        }, function(){
           _this.$http.get('event/show',parm).then(function(response){
          if(response.data.code){
            layer.msg("设置成功",{offset:"0px"});
            }else{
              layer.msg(response.data.msg,{offset:"0px"});
            }
          },function(response) {
              console.log(22);
          });
        },function(){
          _this.checked=_this.checked?false:true;
        });
      },
      beginTech:function(){
          var _this=this;
          var beginparm={};
          beginparm.oetInfoId=window.sessionStorage.getItem("eventid");
          beginparm.oetRoundId=window.sessionStorage.getItem("roundid");
          var parmstr=JSON.stringify(beginparm);
          var parm={};
          parm.jsonInfo=parmstr;
        _this.$http.get('event/start',parm).then(function(response){
          if(response.data.code){
            window.location.reload();
            $('.before_tech').hide();
            $('.begining_tech').show();
            $(".tech_range_detail").width(0);
            $(".tech_range_num").text("0%");
          }else{
            layer.msg(response.data.msg,{offset:"0px"});
          }
        },function(response) {
              console.log(response);
          });
      },
      endTech:function(){
          var _this=this;
          var endparm={};
          endparm.oetRoundId=window.sessionStorage.getItem("roundid");
          var parmstr=JSON.stringify(endparm);
          var parm={};
          parm.jsonInfo=parmstr;
        _this.$http.get('event/finish',parm).then(function(response){
          if(response.data.code){
            $('.edit_div').hide();
            $('.ending_tech').hide();
            $('.end_tech').show();
            var beginparm={};
            var _eventid=window.sessionStorage.getItem("eventid");
            var _roundid=window.sessionStorage.getItem("roundid");
            beginparm.oetInfoId=_eventid;
            beginparm.oetRoundId=_roundid;
            var parmstr=JSON.stringify(beginparm);
            var _parm={};
            _parm.jsonInfo=parmstr;
          _this.$http.get('event/getStatusByTime',_parm).then(function(response){
              _this.champion=response.data.object.firstName;
              _this.second=response.data.object.secondName;

          },function(response) {
                    console.log(response);
                });
          }else{
            layer.msg(response.data.msg,{offset:"0px"});
          }
        },function(response) {
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
