<template>
  <top-nav></top-nav> 
  <div class="tech_msg">
    <div class="body_top_pic"><img src="../../static/images/body_top.png" width="100%"></div>
    <div class="tech_msg_text clearfix">
      <div class="tech_msg_left"><img src="../../static/images/person_pic.png" width="100%" height="100%"></div>
      <div class="tech_msg_right">
      <div class="begin_tech clearfix">
        <div class="begin_tech_left">
          <h2 style="font-size:16px">浙江省网娱大师•雪碧真英雄城市争霸赛</h2>
           <p class="sponsor">主办方：<span style="color:#f9a32a;">网娱大师</span></p>
          <div class="check_app">
            <input type="checkbox" id="show_app">
            <label for="show_app">在网娱大师App中展示</label>
          </div>
        </div>
        <div class="begin_tech_right">
          <router-view></router-view>
        </div>
      </div>
      <div class="begin_tech_msg">
        <ul class="begin_msg_list clearfix">
          <li class="clearfix">
            <div class="msg_list_left"><img src="../../static/images/msg_a.png"></div>
            <div class="msg_list_right">
              <p class="msg_list_name">竞技项目</p>
              <p>英雄联盟•全服</p>
            </div>
          </li>
          <li class="clearfix">
            <div class="msg_list_left"><img src="../../static/images/msg_b.png"></div>
            <div class="msg_list_right">
              <p class="msg_list_name">报名时间</p>
              <p>2016.06.06-2016.07.07</p>
            </div>
          </li>
          <li class="clearfix">
            <div class="msg_list_left"><img src="../../static/images/msg_c.png"></div>
            <div class="msg_list_right">
              <p class="msg_list_name">赛制</p>
              <p>32人赛事＋单败淘汰制</p>
            </div>
          </li>
        </ul>
      </div>
     </div>
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
            <li class="turn_num_li" v-for="turnnum in turnnums" @mouseover="turnSet">
              <div class="trunname_ed">
                <span class="turn_num_text">第{{turnnum}}轮</span>
                <span class="turn_input_settime" style="font-size:12px;">{{setBegin}}</span>
                <span class="turn_select_num" style="font-size:12px;"></span>
                <img class="turn_num_pic" @click="turnName" src="../../static/images/turn.png"></div>
              <div class="trunname_ing">
              <input class="turn_input" type="text">
              <a class="turn_confirm turn_frame" @click="turnConfirm">确定</a>
              <a class="turn_quit turn_frame">取消</a>
            </div>
            <ul class="turn_set_detail">
              <li><label for="set_begin" class="set_time_begin">设置时间</label>
                <input type="text" id="set_begin" v-model="setBegin">
              </li>
              <li><span>Best of</span>
                <select style="height:18px;text-indent:0px;" class="select_num">
                  <option selected>1</option>
                  <option>3</option>
                  <option>5</option>
                  <option>7</option>
                </select>
              </li>
            </ul>
            </li>
          </ul>
        </div>
        <div class="turn_btn">随机排列对阵选手顺序</div>
        <div class="tech_body">
            <div class="tech_container">
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
        <p style="margin:20px 0">比赛模式</p>
          <p>
            1. 决赛当天海选BO1（单场淘汰制），冠亚之争采用BO3（三局两胜）</br>
            2. 所有比赛均为5v5、房间模式、征召模式；</br>
            8支队伍进行BO1 决出4强    4支队伍进行BO1决出冠亚争夺战 
                败者组两只队伍BO1争夺季军   胜者队伍冠亚争夺战</br>
            </p>
            <p style="margin:20px 0">比赛规则：</p>
            <p>
            1.参赛选手须提前到达比赛现场报名抽签，迟到将视为自动弃权；</br> 
            2.参赛选手须在比赛服务器比赛，使用官方比赛服帐号</p>
      </li>
      <li style="float:right">
        <h2 class="footer_text_title">
          <a class="title_unit"></a>
          <span style="font-size:18px;color:#fff;">奖金设置</span>
        </h2>
        <p style="margin:20px 0">比赛模式</p>
          <p>
            1本次联赛奖品如下：</br>
            冠军4000元现金；亚军2000元现金；季军1000元现金以及其他神秘大奖等你来拿！本次获奖战队可以参加下半年的省级冠军争夺赛，更有机会代表吉林省参加全国范围的争霸赛。</p>
      </li>
    </ul>
  </div> 
</template>

<script>

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
        if(srcdiv != divdom){  
            srcdiv.innerHTML = divdom.innerHTML;  
            divdom.innerHTML=e.dataTransfer.getData("text/html");  
          } 
        
}

import topNav from '../components/topNav.vue'
  export default {
    data () {
    return {
    matchdata:'',
    parm:{},
    beginparm:{},
    turnnums:[],
    personnum:false,
    overhalf:true,
    setBegin:""
    }
  },
     ready: function(){
      var _this=this;
      // _this.parm.id=window.sessionStorage.getItem("eventid");
      _this.parm.id=102;
       _this.$http.get('event/info',_this.parm).then(function(response){
            console.log(response);
             _this.matchdata=response.data.object.groups;
             console.log(_this.matchdata);
            
             var turn=_this.matchdata[0].turn;
             // console.log(turn);
            var unitul_h=60;
            var unitul_w=200;
            var unitul_step=10;
            var unitul_all=unitul_h+unitul_step;
            var _content=$(".match_content");
            var listul;
            var listuls=listul='<ul class="match_list"></ul>';

            for(var i=0;i<turn;i++){
              _this.turnnums.push(i+1);
            }

            $(".turn_num_list").width(290*turn);
             _this.$nextTick(function () {
                 $('#set_begin').datetimepicker({
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

                listArry[turn-2].innerHTML='<li class="out_li">'+unitul+'</li>';
                for(var i=1;i<turn-1;i++){
                  listArry[turn-i-2].innerHTML=listArry[turn-i-1].innerHTML+listArry[turn-i-1].innerHTML;
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
                $(".tech_container").append('<canvas id="mycanvas" width='+_width+' height='+_height+'></canvas> ');

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

                // console.log(onelist);
                _content.prepend(listul);
                listArry=_content.find($(".match_list"));
                var _topsY=[];
                var _topdY=[];

                //生成非幂次方时第一列的矩形unit
                for(var i=0;i<onelist.length;i++){
                      if(onelist[i].seats[0].seatNumber){
                        var _one_list=listArry.eq(1).find(".unit_ul").eq(i).find(".recta_num")
                          _one_list.eq(0).text(onelist[i].seats[0].seatNumber);
                        if(onelist[i].seats[1].seatNumber){
                          _one_list.eq(1).text(onelist[i].seats[1].seatNumber);
                        }else{
                          var _top=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topsY.push(_top);
                          listArry.eq(0).append('<li class="out_li single_line"><ul class="unit_ul" style="width:200px;"><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta" style="margin-bottom:1px;"><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta__personname">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right"></span></li><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta"><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta__personname">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right"></span></li></ul><div class="edit_div"><div class="edit_score"></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></li>');
                        }   
                      }else{
                          var _top=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_top);
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><ul class="unit_ul" style="width:200px;"><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta" style="margin-bottom:1px;"><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta__personname">'+(onelist[i].groups[0].seats[0].target?onelist[i].groups[0].seats[0].target.name:"")+'</span><span class="recta_right"></span></li><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta"><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta__personname">'+(onelist[i].groups[0].seats[1].target?onelist[i].groups[0].seats[1].target.name:"")+'</span><span class="recta_right"></span></li></ul><div class="edit_div"><div class="edit_score"></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div><div class="out_li"><ul class="unit_ul" style="width:200px;"><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta" style="margin-bottom:1px;"><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta__personname">'+(onelist[i].groups[1].seats[0].target?onelist[i].groups[1].seats[0].target.name:"")+'</span><span class="recta_right"></span></li><li ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" class="recta"><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta__personname">'+(onelist[i].groups[1].seats[1].target?onelist[i].groups[1].seats[1].target.name:"")+'</span><span class="recta_right"></span></li></ul><div class="edit_div"><div class="edit_score"></div><ul class="float_edit"><li class="float_edit_edit"><img style="margin-top:11px;" src="../../static/images/edit.png"><p>编辑</p></li><li class="float_edit_check"><img style="margin-top:11px;" src="../../static/images/check.png"><p>查看</p></li><li class="float_edit_reset"><img style="margin-top:11px;" src="../../static/images/retech.png"><p>重赛</p></li></ul></div></div></div>');
                    }
                }
                // console.log(_topdY);

                $(".edit_score").mouseover(function(){
                    $(this).next(".float_edit").show();
                  });

                $(".edit_div").mouseleave(function(){
                    $(this).find(".float_edit").hide();
                })

                $(".float_edit_edit").on("click",function(){
                  console.log(111);
                })
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

       //          //根据矩形坐标第一列双unit画线
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

                 //获取turn2的数据
                 var onelist = []; 
                function getnum(arr){
                  for(var i=0;i<arr.length;i++){
                    if(arr[i].turn == 1){
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

                listArry.eq(0).empty();
                for(var i=0;i<onelist.length;i++){
                        listArry.eq(0).append('<ul class="unit_ul" style="width:200px;margin-bottom:10px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].seats[0].seatNumber+'</li><li class="recta">'+onelist[i].seats[1].seatNumber+'</li></ul>');  
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
          },function(response) {
              console.log(response);
          });
     },
     methods:{
      turnName: function(e){
        var _target=$(e.currentTarget);
        // _target.find(".trunname_ed").hide();
        // _target.find(".trunname_ing").show();
      },
      turnConfirm: function(e){
        var _target=$(e.currentTarget);
        var _text=_target.siblings(".turn_input").val();
        if(_text){
          console.log(11);
          _target.parent().hide();
          _target.parent().siblings(".trunname_ed").show();
          _target.parent().siblings(".trunname_ed").find(".turn_num_text").text(_text);
        }
      },
      turnSet:function(e){
        var _target=$(e.currentTarget);
        _target.find(".turn_set_detail").show();
      },
      // setHide:function(e){
      //   var _target=$(e.currentTarget);
      //   _target.find(".turn_set_detail").hide();
      // },
      // setBegin:function(){
      //   console.log(777);
      //   var _target=$(e.currentTarget);
      //   _val=_target.val();
      //   _text=_val.split(' ',1);
      //   _target.closest(".turn_num_li").find(".turn_input_settime").text(_text);
      // }

     },
       components: {
          topNav
         
  }
  }
</script>
<style>
.tech_body{
  padding:0 70px;
}
.tech_container{
  position: relative; 
}
.recta{
  width: 200px;
  height: 29.5px;
  background-color: #53585d;
  color: #fff;
  line-height: 30px;
}
.match_content{
  position: absolute;
  top:0;
  left:0;
}
.match_list{
  float: left;
  margin-right: 90px;
}
.tech_msg{
  width: 1200px;
  margin:20px auto;
}
.body_top_pic{
  width: 100%;
}
.tech_msg_text{
  height: 235px;
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
  width: 90%;
  margin: 20px auto 0;
}
.begin_msg_list li{
  float: left;
  width: 33%;
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
  width: 1200px;
  margin: 20px auto;
  background: rgba(52,57,63,0.9);
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
  background-color: #f9a32a;
  color: #fff;
  border-radius: 5px;
  margin: 0 70px 30px;
  text-align: center;
}
.tech_down_tip{
  width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 350px;
  padding-bottom: 50px;
  border-bottom: 1px solid #53585d;
  margin-top: -27px;
}
.tech_footer_text{
  font-size: 12px;
  position: absolute;
  left:0;
  top:75px;
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
    margin: 0 20px 20px;
    font-size: 16px;
    color: #fff;

}
.turn_num_list li{
  float: left;
  width: 288px;
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
  height: 27.5px;
  background-color: #838383;
  text-align: center;
  color: #000;
  font-size: 12px;
}
.recta_right{
  display: inline-block;
  width: 30px;
  height: 27.5px;
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
.edit_score{
  position: absolute;
  top:-60px;
  width:30px;
  height: 60px;
  left: 170px;
  background: url(../../static/images/edit.png) no-repeat 6px 22px #53585d;
  cursor: pointer;
}
.float_edit{
  position: absolute;
  width: 180px;
  height: 60px;
  top:-60px;
  left:200px;
  background-color: #000;
  opacity: 0.8;
  display: none;
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
}
.turn_set_detail{
  background-color: #16181d;
  height: 60px;
  font-size: 12px;
  /*display: none;*/
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
</style>
