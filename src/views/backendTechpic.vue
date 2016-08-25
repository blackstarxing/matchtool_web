<template>
<backend-sidebar></backend-sidebar>
  <div class="g-bd g-w">
    <div class="techpic-option">
      <div href="" class="techpic-edit" @click="editTechpic">编辑对阵图</div>
      <div class="before_tech tech_right_staus not_checked" style="display:none">
              <p class="start_text" @click="beginTech"></p>
          </div>
      <div class="begining_tech" style="display:none">
        <div class="start_btn">
                <div class="tech_range">
                  <div class="tech_range_detail">
                    </div>
              <div class="tech_range_num"></div>
          </div>
        </div>
      </div>
      <div class="ending_tech tech_right_staus" style="display:none">
              <p class="start_text" @click="endTech">结束比赛</p>
          </div>
    </div>
    <div class="against_container">
      <div class="tech_main_body">
       <div class="turn_num">
            <ul class="turn_num_list clearfix">
              <li class="turn_num_li" v-for="turnnum of turnnums">
                <div class="turn_turnid" style="display:none">{{turnnum.modelturnid}}</div>
                <div class="trunname_ed">
                  <div class="turn_num_text">{{turnnum.modelname}}</div>
                  <div class="turn_num_detail">
                    <span class="turn_select_num" style="font-size:12px;">BO<i class="turn_bo_num">{{turnnum.modelbo}}</i></span>
                    <span class="turn_input_settime" style="font-size:12px;margin:0 7px;">{{turnnum.modeltime?turnnum.modeltime.split(' ',1):"时间待定"}}</span>
                  </div>
                  </div>
              </li>
            </ul>
          </div>
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
  <div class="m-mask m_turn">
    <div class="m-pop" style="width:590px;">
      <div class="wrap f-cb">
        <table>
          <tbody>
             <tr>
                <th>编辑轮次名称</th>
                <th>Best of</th>
                <th>本轮进行时间</th>
            </tr>
            <tr v-for="turn in turnnums" class="turn-info">
              <td class="turnid" style="display:none;">{{turn.modelturnid}}</td>
              <td><input type="text" class="u-c-ipt turnname" name="matchname" placeholder="请输入赛事名称" style="width:150px;" v-model="turn.modelname" required=""></td>
              <td>
                <input type="text" class="u-c-ipt f-fl turnbo" title="参赛人数" style="width: 100px;" required v-model="turn.modelbo" @input="numberChange">
                <div class="button_group">
                  <button class="plus" @click="plus"></button>
                  <button class="minus" @click="minus"></button>
                </div>
              </td>
              <td>
                <div class="g-c-timeipt">
                  <input type="text" class="u-c-ipt set_begin" placeholder="请选择本轮进行时间" style="width:200px;" v-model="turn.modeltime">
                  <label for="applyEnd" class="add-on"></label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="turn-btns">
          <a href="javascript:void(0);" class="u-btn techpic-btn close-techpic" style="color:#fff;" @click="closePop">放弃修改</a>
          <a href="javascript:void(0);" class="u-btn techpic-btn" @click="saveTurn">保存修改</a>
        </div>
      </div>      
    </div>
  </div>
  <div class="m-mask m_edit">
    <div class="m-pop" style="margin: 5px auto 0;">
      <div class="wrap">
        <h3 style="text-align: center;">编辑比分</h3>
        <a href="javascript:void(0);" class="u-btn-close" @click="closePop"></a>
        <ul class="edit_detail_top clearfix">
          <li class="edit_detail_left">
            <p>{{personNamea}}</p>
            <div class="edit_ring">{{personNamea.substr(0,1)}}</div>
            <div class="made_winer">胜<span style="display:none">{{seatida}}</span></div>
          </li>
          <li class="edit_detail_mid">
            <span class="edit_detail_vs">vs</span>
            <p class="choose_winer_title">选择胜者</p>
          </li>
          <li class="edit_detail_right">
            <p>{{personNameb}}</p>
            <div class="edit_ring">{{personNameb.substr(0,1)}}</div>
            <div class="made_winer">胜<span style="display:none">{{seatidb}}</span></div>
          </li>
        </ul>
        <div class="turn_edit_line" style="text-align: center;"><img src="../../static/images/turnline.png"></div>
        <ul class='edit_detail_bt'>
          <li style="margin-bottom:20px;" v-for="scoreli in scorelis">
            <input class="edit_detail_input" type="text" style="width:120px;" v-model="scoreli.seatleft">
            <span class="edit_btn_mid">:</span>
            <input class="edit_detail_input" type="text" style="width:120px;margin-right:5px;" v-model="scoreli.seatright">
            <img src="../../static/images/delete.png" @click="deleScoreli(scoreli)" v-if="!scoreli.seatleft || !scoreli.seatright">
          </li>
        </ul>
        <div class="add_edit_list" @click="addScorelist">＋添加一组</div>
        <a href="javascript:void(0);" class="u-btn add-member" @click="submitScore">提交比分</a>
      </div>      
    </div>
  </div>
  <div class="m-mask m_check">
    <div class="m-pop"style="margin: 75px auto 0;">
      <div class="wrap">
        <h3 style="text-align: center;">查看比分</h3>
        <a href="javascript:void(0);" class="u-btn-close" @click="closePop"></a>
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
import backendSidebar from '../components/backendSidebar.vue'
  export default {
    data () {
      return {
        matchdata:'',
        personnum:"",
        overhalf:"",
        turnnums:[],
        roundStatus:'',
        personNamea:'',
        personNameb:'',
        scorelis:[],
        groupid:{},
        seatida:{},
        seatidb:{},
      }

    },
    components:{
      backendSidebar
    },
    ready: function(){
      var _this=this;
      var beginparm={};
      var before_tech=$('.before_tech');
      var start_text=$('.start_text');
      var _eventid=window.sessionStorage.getItem("eventId");
      var _roundid=window.sessionStorage.getItem("eventRoundId");
      _this.nickName=window.sessionStorage.getItem("nickname");
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
        start_text.text("报名预热中");
      }else if(response.data.object.roundStatus==2){
        before_tech.show();
        start_text.text("报名进行中...");
      }else if(response.data.object.roundStatus==3){
        before_tech.show();
        start_text.text("签到进行中...");
      }else if(response.data.object.roundStatus==4){
        before_tech.show();
        start_text.text("报名已结束");
      }else if(response.data.object.roundStatus==5){
        before_tech.show();
        start_text.text("开始比赛");
      }else if(response.data.object.roundStatus==6){
        $('.begining_tech').show();
        var _rate=response.data.object.rate;
           $(".tech_range_detail").width(_rate*2);
           $(".tech_range_num").text(_rate+"%");
           if(_rate==100){
            $('.begining_tech').hide();
            $('.ending_tech').show();
           }
        
      }else if(response.data.object.roundStatus==7){
        // $('.ending_tech').show();
        
          }

      },function(response) {
              console.log(22);
          });
      $('.form_datetime').datetimepicker({
        format:"Y-m-d H:i",      
        yearStart:2000,     
        yearEnd:2050, 
        onShow:function(ct){
          this.setOptions({
                 minDate: true,
                 minTime: true
              })
        },
        step:10
      });
      $.datetimepicker.setLocale('ch');

      var parm={};
       parm.id=window.sessionStorage.getItem("eventId");
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
                  yearStart:2000,     
                  yearEnd:2050, 
                  onShow:function(ct){
                    this.setOptions({
                           minDate: true,
                           minTime: true
                        })
                  },
                  step:10
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
                          if(onelist[i].groups.length==2){
                           var _topd=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_topd);
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><div class="group_num">'+onelist[i].groups[0].groupNumber+'</div><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li class="recta" data-seatid='+onelist[i].groups[0].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div><div class="out_li"><div class="group_num" style="top:90px">'+onelist[i].groups[1].groupNumber+'</div><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[1].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[0].target?onelist[i].groups[1].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[1].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[1].target?onelist[i].groups[1].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[1].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div></div>');
                        }else if(onelist[i].groups.length==1){
                              
                              var _tops=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                              _topsY.push(_tops);
                              listArry.eq(0).append('<li class="out_li single_line"><div class="group_num">'+onelist[i].groups[0].groupNumber+'</div><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li data-seatid='+onelist[i].groups[0].seats[0].id+' class="recta" style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></li>');
                            
                          }
                        }
                        
                            
                      }else{
                          var _topd=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_topd);
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><div class="group_num">'+onelist[i].groups[0].groupNumber+'</div><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[0].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[0].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div><div class="out_li"><div class="group_num" style="top:90px">'+onelist[i].groups[1].groupNumber+'</div><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[1].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[0].target?onelist[i].groups[1].seats[0].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[1].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname" ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)">'+(onelist[i].groups[1].seats[1].target?onelist[i].groups[1].seats[1].target.name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'">'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="edit_score" '+(onelist[i].groups[1].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div></div>');
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
                _html='<div class="group_num">'+list[i].groupNumber+'</div><ul class="unit_ul" data-groupid='+list[i].id+' style="width:200px;"><li class="recta" data-seatid='+list[i].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+list[i].seats[0].targetId+'><span class="recta_num">'+(list[i].seats[0].seatNumber?list[i].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(list[i].seats[0].target?list[i].seats[0].target.name:"")+'</span><span class="recta_right '+(list[i].seats[0].isWin?"add_winer":"")+'" '+(list[i].seats[1].target?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+list[i].seats[1].id+'><input name="target_id" type="hidden" value='+list[i].seats[1].targetId+'><span class="recta_num">'+(list[i].seats[1].seatNumber?list[i].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(list[i].seats[1].target?list[i].seats[1].target.name:"")+'</span><span class="recta_right '+(list[i].seats[1].isWin?"add_winer":"")+'" '+(list[i].seats[1].target?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div" '+(list[i].seats[1].target?"":"style='display: none'")+'><div class="edit_score" '+(list[i].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div>';

                return _html;
            }

            if(_this.matchdata.length == 2){
              listArry.eq(turn-1).find('.out_li').css('margin-bottom','60px');
              listArry.eq(turn-1).append('<li class="out_li"><ul class="unit_ul" data-groupid='+_this.matchdata[1].id+' style="width:200px;"><li class="recta" data-seatid='+_this.matchdata[1].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+_this.matchdata[1].seats[0].targetId+'><span class="recta_num">'+(_this.matchdata[1].seats[0].seatNumber?_this.matchdata[1].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(_this.matchdata[1].seats[0].target?_this.matchdata[1].seats[0].target.name:"")+'</span><span class="recta_right '+(_this.matchdata[1].seats[0].isWin?"add_winer":"")+'" '+(_this.matchdata[1].seats[1].target?"":"style='display: none'")+'>'+(_this.matchdata[1].scores?_this.matchdata[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+_this.matchdata[1].seats[1].id+'><input name="target_id" type="hidden" value='+_this.matchdata[1].seats[1].targetId+'><span class="recta_num">'+(_this.matchdata[1].seats[1].seatNumber?_this.matchdata[1].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(_this.matchdata[1].seats[1].target?_this.matchdata[1].seats[1].target.name:"")+'</span><span class="recta_right '+(_this.matchdata[1].seats[1].isWin?"add_winer":"")+'" '+(_this.matchdata[1].seats[1].target?"":"style='display: none'")+'>'+(_this.matchdata[1].scores?_this.matchdata[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div" '+(_this.matchdata[1].seats[1].target?"":"style='display: none'")+'><div class="edit_score" '+(_this.matchdata[1].scores?"style='opacity: 0;'":"")+'></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:3px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_reset"><img style="margin-top:3px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></li>')
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
              console.log(_this.roundStatus);
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
                  var $lastlist=listArry.eq(turn-1);
                  var $recta=$lastlist.find('.recta');
                  var _imgone='<img class="tech_end_pic" src="../../static/images/numberone.png">';
                  var _imgtwo='<img class="tech_end_pic" src="../../static/images/numbertwo.png">';
                  var _imgthree='<img class="tech_end_pic" src="../../static/images/numberthree.png">';
                  var _imgfour='<img class="tech_end_pic" src="../../static/images/numberfour.png">';
                  if($recta.eq(0).hasClass('add_winer')){
                    $recta.eq(0).append(_imgone);
                    $recta.eq(1).append(_imgtwo);
                  }else{
                    $recta.eq(1).append(_imgone);
                    $recta.eq(0).append(_imgtwo);
                  }
                    
                   if(this.matchdata.length==2){
                    if($recta.eq(2).hasClass('add_winer')){
                      $recta.eq(2).append(_imgthree);
                      $recta.eq(3).append(_imgfour);
                    }else{
                      $recta.eq(3).append(_imgthree);
                      $recta.eq(2).append(_imgfour);
                    }
                  }
                }
                 
              

                var move=false,
                    left_=0,
                    top_=0;
                var _movebody=$('.tech_main_body');
                _movebody.mousedown(function(e){
                    move=true;
                    left_=e.pageX-parseInt(_movebody.css("left"));
                    top_=e.pageY-parseInt(_movebody.css("top"));

                }).mouseup(function(){
                    move=false;
                });
                $(document).mousemove(function(e){
                    if(move){
                        var left_r=e.pageX-left_,
                            top_r=e.pageY-top_;
                            // console.log(e.pageX,left_,left_r)
                            _movebody.css({"top":top_r,"left":left_r});
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
                  _this.seatida=_parent.find('.recta').eq(0).data('seatid');
                  _this.seatidb=_parent.find('.recta').eq(1).data('seatid');
                 
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
                        var _lis=$('.turn_num_li').eq(_index).find(".turn_bo_num").text();
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
      randomPic:function(){
        var parm={};
        parm.eventId=window.sessionStorage.getItem("eventId");
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
      editTechpic: function(e){
        e.preventDefault();
        $('.m_turn').show();
      },
      closePop: function(e){
        var _this=this;
        var parm={};
        parm.id=window.sessionStorage.getItem("eventId");
        _this.$http.get('event/info',parm).then(function(response){
          var turnid=response.data.object.turns;
          _this.turnnums=[];
          for(var i=0;i<turnid.length;i++){
            _this.turnnums.push({num:i+1,modeltime:turnid[i].matchTimestr,modelbo:turnid[i].matchType,modelname:turnid[i].name,modelturnid:turnid[i].id});
          }
        },function(response) {
            console.log(response);
        });
        $('.m-mask').hide();
      },
      beginTech:function(e){
          var _this=this;
          e.preventDefault();
          var parm={};
          parm.jsonInfo=JSON.stringify({oetInfoId:window.sessionStorage.getItem("eventId"),oetRoundId:window.sessionStorage.getItem("eventRoundId")});
          var nowTime = new Date().getTime();
          var clickTime = $(_this).attr("ctime");
          if( clickTime != 'undefined' && (nowTime - clickTime < 60000)){
              layer.msg("操作过于频繁，稍后再试");
              return false;
          }else{
            $(_this).attr("ctime",nowTime);
            _this.$http.get("event/start",parm).then(function(response){
              if(response.data.code){
                layer.msg('比赛已开始');
                window.location.reload();
                $('.before_tech').hide();
                $('.begining_tech').show();
                $(".tech_range_detail").width(0);
                $(".tech_range_num").text("0%");
              }else{
                layer.msg(response.data.msg);
              }
            },function(response) {
              console.log(response);

            });
          } 
      },
      saveTurn:function(e){
        e.preventDefault();
        var _this=this;
        var turns=$('.turn-info');
        var turnparm=[];
        var roundId=window.sessionStorage.getItem("eventRoundId");
        for(var i=0;i<turns.length;i++){
          turnparm.push({id:turns.eq(i).find('.turnid').text(),name:turns.eq(i).find('.turnname').val(),matchType:turns.eq(i).find('.turnbo').val(),matchTimeStr:turns.eq(i).find('.set_begin').val()});
        }
        var parmstr=JSON.stringify(turnparm);
        var parm={};
        parm.jsonArray=parmstr;
        _this.$http.get("event/turn/batchUpdate",parm).then(function(response){
          if(response.data.code){
                layer.msg(response.data.msg,{offset:"0px"});
                window.location.reload();
                }else{
                  layer.msg(response.data.msg,{offset:"0px"});
                }
          },function(response) {
            console.log(response);
        });
      },
      //参与人数控制
      numberChange: function(e){
        e.stopPropagation();
        var parent=$(e.currentTarget).parents('td');
        var num=parent.find('.turnbo').val();
        if(num<=1){
          num=1;
          parent.find('.turnbo').val(num);
          $('.minus').attr('disabled',true);
        }else{
          $('.minus').attr('disabled',false);
        }
      },
      plus: function(e){
        e.stopPropagation();
        var parent=$(e.currentTarget).parents('td');
        var num=parent.find('.turnbo').val();
        if(num==""){
          num=1;
        }
        num=parseInt(num)+1;
        parent.find('.turnbo').val(num);
        if(num>0){
          parent.find('.minus').attr('disabled',false);
        }
        if(num==512){
          parent.find('.plus').attr('disabled',true);
        }
      },
      minus: function(e){
        e.stopPropagation();
        var parent=$(e.currentTarget).parents('td');
        var num=parent.find('.turnbo').val();
        num=parseInt(num)-1;
        parent.find('.turnbo').val(num);
        if(num<=1){
          parent.find('.minus').attr('disabled',true);
        }else{
          parent.find('.minus').attr('disabled',false);
        }
        parent.find('.plus').attr('disabled',false);  
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
      endTech: function () {
        var _this=this;
          var endparm={};
          endparm.oetRoundId=window.sessionStorage.getItem("eventRoundId");
          var parmstr=JSON.stringify(endparm);
          var parm={};
          parm.jsonInfo=parmstr;
        _this.$http.get('event/finish',parm).then(function(response){
          if(response.data.code){
            $('.edit_div').hide();
            var $matchist=$('.match_list');
            var _length=$matchist.length;
            var $lastlist=$matchist.eq(_length-1);
            var $recta=$lastlist.find('.recta');
            var _imgone='<img class="tech_end_pic" src="../../static/images/numberone.png">';
            var _imgtwo='<img class="tech_end_pic" src="../../static/images/numbertwo.png">';
            var _imgthree='<img class="tech_end_pic" src="../../static/images/numberthree.png">';
            var _imgfour='<img class="tech_end_pic" src="../../static/images/numberfour.png">';
            if($recta.eq(0).hasClass('add_winer')){
              $recta.eq(0).append(_imgone);
              $recta.eq(1).append(_imgtwo);
            }else{
              $recta.eq(1).append(_imgone);
              $recta.eq(0).append(_imgtwo);
            }
              
             if(this.matchdata.length==2){
              if($recta.eq(2).hasClass('add_winer')){
                $recta.eq(2).append(_imgthree);
                $recta.eq(3).append(_imgfour);
              }else{
                $recta.eq(3).append(_imgthree);
                $recta.eq(2).append(_imgfour);
              }
            }
           
          }else{
            layer.msg(response.data.msg,{offset:"0px"});
          }
        },function(response) {
              console.log(response);
          });
      }
    }
  }
</script>
<style type="text/css">
  .techpic-option{
    padding-top: 50px;
  }
  .techpic-option a{
    display: inline-block;
    width: 200px;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    color:#fff;
    text-align: center;
    background: url(../../static/images/btn0.png) no-repeat;
    margin-right: 30px;
  }
  .techpic-option a.techpic-start{
    background: url(../../static/images/btn1.png) no-repeat;
    color:#1e1f24;
  }
  .techpic-option a.techpic-start [class^="icon-"]{
    color:#1e1f24;
    margin-right: 5px;
    vertical-align: -2px;
  }
  .m-pop table{
    width: 100%;
  }
  .m-pop th{
    background: #000;
    color:#7892a9;
    height: 40px;
    text-align: center;
    border-bottom:1px solid #2e2d3a;
  }
  .m-pop td,.m-pop th{
    padding-left:25px;
  }
  .m-pop td{
    padding-top: 10px;
  }
  .m-pop td input{
    margin:10px 0 0;
  }
  .m-pop td .button_group{
    margin-top:11px;
  }
  .m-pop .techpic-btn{
    float: left;
    margin:0 15px;
  }
  .m-pop .close-techpic{
    background: url(../../static/images/btn0.png) no-repeat;
  }
  .turn-info label.add-on{
    top:20px;
  }
  .turn-btns{
    width:460px;
    margin:30px auto 0;
  }
</style>
