<template>
  <top-head></top-head> 
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
          <p style="font-size:12px;">当一切都准备就绪后，您就可以:</p>
          <div class="start_btn">
            <img src="../../static/images/start.png" width="100%" height="100%">
            <p class="start_text">开始比赛</p>
          </div>
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
    <div class="turn_num">
      <ul class="turn_num_list clearfix">
        <li>第一轮<img class="turn_num_pic" src="../../static/images/turn.png"></li>
        <li>第二轮<img class="turn_num_pic" src="../../static/images/turn.png"></li>
        <li>半决赛<img class="turn_num_pic" src="../../static/images/turn.png"></li>
        <li>决赛<img class="turn_num_pic" src="../../static/images/turn.png"></li>
      </ul>
    </div>
    <div class="turn_btn">随机排列对阵选手顺序</div>
    <div style="padding:0 70px">
      <div class="tech_container">
      <div class="match_content clearfix">
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
import topHead from '../components/topHead.vue'
import topNav from '../components/topNav.vue'
  export default {
    data () {
    return {
      eventId:'',
      // personnum:true,
      // overhalf:false,
    }
  },
     ready: function(){
      var _this=this;
      _this.eventId=window.sessionStorage.getItem("eventid");
       _this.$http.get('event/round/groupSeat/random',_this.$data).then(function(response){
         console.log(response);
            // _this.matchdata=response.data;
            
            // var level=response.data[0].level;
            // var unitul_h=60;
            // var unitul_w=200;
            // var unitul_step=10;
            // var unitul_all=unitul_h+unitul_step;
            // var _content=$(".match_content");
            // var listul;
            // var listuls=listul='<ul class="match_list"></ul>';

            // if(!_this.personnum){
            //     if(_this.overhalf){
            //       unitul_step=80;
            //       unitul_all=unitul_h+unitul_step;
            //     }
            //     //dom生成矩形列表
            //     for(var i=0;i<level-1;i++){
            //        listuls+=listul;
            //     }
            //     _content.append(listuls);
                
            //     //dom生成矩形unit,并放入矩形列表
            //     var unitul='<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"></li><li class="recta"></li></ul>';
            //     var listArry=_content.find($(".match_list"));

            //     listArry[level-1].innerHTML='<li class="out_li">'+unitul+'</li>';
            //     for(var i=1;i<level;i++){
            //       listArry[level-1-i].innerHTML=listArry[level-i].innerHTML+listArry[level-i].innerHTML;
            //     }
                
            //     //按照索引处理列表层高
            //     $.each(listArry,function(i,e){
            //       if(i!=0){
            //         $(this).css('margin-top',unitul_all/2*(Math.pow(2,i)-1));
            //       }
            //     })

            //     //按照索引处理每列矩形unit间距
            //     var margin_bt=[];
            //     for(var i=0;i<level;i++){
            //       margin_bt[0]=unitul_step;
            //       margin_bt[i+1]=2*margin_bt[i]+unitul_h;
            //       listArry.eq(i).find(".out_li").css("margin-bottom",margin_bt[i]);
            //     }

            //     //生成canvas dom
            //     var _height=unitul_all*Math.pow(2,level-1);
            //     var _width=(unitul_w+90)*(level+1);
            //     _content.width(_width);
            //     $(".tech_container").append('<canvas id="mycanvas" width='+_width+' height='+_height+'></canvas> ');

            //     var onelist = [];

            //     //获取level1的数据
            //     function getnum(obj){
            //         if(obj['level'] == 1){
            //           onelist.push(obj);
            //         }else{
            //           for(var key in obj){
            //               if(key!=='level'){
            //                 getnum(obj[key]);
            //               }
            //             }   
            //           }  
            //     }
            //     getnum(_this.matchdata);

            //     console.log(onelist);
            //       _content.prepend(listul);
            //     listArry=_content.find($(".match_list"));
            //     var _topsY=[];
            //     var _topdY=[];
            //     //生成非幂次方时第一列的矩形unit
            //     for(var i=0;i<onelist.length;i++){
            //           if(!isNaN(onelist[i].a)){
            //             var _one_list=listArry.eq(1).find(".unit_ul").eq(i).find(".recta")
            //               _one_list.eq(0).text(onelist[i].a);
            //             if(!isNaN(onelist[i].b)){
            //               _one_list.eq(1).text(onelist[i].b);
            //             }else{
            //               var _top=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
            //               _topsY.push(_top);
            //               listArry.eq(0).append('<ul class="unit_ul single_line" style="width:200px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].b.a+'</li><li class="recta">'+onelist[i].b.b+'</li></ul>');
            //             }   
            //           }else{
            //               var _top=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
            //               _topdY.push(_top);
            //               listArry.eq(0).append('<div class="double_line"><ul class="unit_ul" style="width:200px;margin-bottom:10px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].a.a+'</li><li class="recta">'+onelist[i].a.b+'</li></ul><ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].b.a+'</li><li class="recta">'+onelist[i].b.b+'</li></ul></div>');
            //         }
            //     }
            //     console.log(_topdY);

            //     //根据轮空的坐标确定第一列坐标
            //     var list_first=listArry.eq(0).find(".single_line");
            //     for(i=0;i<_topsY.length;i++){
            //       list_first.eq(i).offset({'top':_topsY[i]+35});
            //     }

            //     if(_topdY.length!=0){
            //       var list_double=listArry.eq(0).find(".double_line");
            //       for(i=0;i<_topdY.length;i++){
            //         list_double.eq(i).offset({'top':_topdY[i]-35});
            //       }
            //     }

            //     //根据矩形坐标画线
            //     var _xy=[];
            //     var coordinates=[];
            //     for(var i=1;i<level;i++){
            //       var unit_list=listArry.eq(i).find(".unit_ul");
            //       var unit_length=unit_list.length;
                  
            //       _xy.length=0;
            //       for(var j=0;j<unit_length;j++){
            //         coordinates=[unit_list.eq(j).position().left,unit_list.eq(j).position().top];
            //               _xy.push(coordinates);
           
            //       function drawline(id) {
                    
            //         var canvas = document.getElementById(id);
            //         if (canvas == null)
            //             return false;
            //         var context = canvas.getContext("2d");
            //         context.strokeStyle = "rgb(247,162,58)";
            //         context.moveTo(_xy[j][0]+unitul_w+5,_xy[j][1]+unitul_h/2);
            //         context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]+unitul_h/2);
            //         if(j%2==0){
            //           context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]+unitul_h+margin_bt[i-1]/2);
            //           context.lineTo(_xy[j][0]+unitul_w+5+40*2, _xy[j][1]+unitul_h+margin_bt[i-1]/2);
            //         }else{
            //           context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]-margin_bt[i-1]/2);
            //           context.lineTo(_xy[j][0]+unitul_w+5+40*2, _xy[j][1]-margin_bt[i-1]/2);
            //         }

            //         context.stroke(); 
            //       }
            //         drawline("mycanvas"); 
            //       }  
            //     }
                
            //     //根据矩形坐标第一列单unit画线
            //     var _xysingle=[];
            //     var single_coord=[];
            //     var single_arry=listArry.eq(0).find(".single_line");
            //     for(i=0;i<single_arry.length;i++){
            //       single_coord=[single_arry.eq(i).position().left,single_arry.eq(i).position().top];
            //       _xysingle.push(single_coord);

            //       function firstline(id) {
                    
            //         var canvas = document.getElementById(id);
            //         if (canvas == null)
            //             return false;
            //         var context = canvas.getContext("2d");
            //         context.strokeStyle = "rgb(247,162,58)";
            //         context.moveTo(_xysingle[i][0]+unitul_w+5,_xysingle[i][1]+unitul_h/2);
            //         context.lineTo(_xysingle[i][0]+unitul_w+5+40,_xysingle[i][1]+unitul_h/2);
            //         context.lineTo(_xysingle[i][0]+unitul_w+5+40,_xysingle[i][1]-5);
            //         context.lineTo(_xysingle[i][0]+unitul_w+5+40*2, _xysingle[i][1]-5);
            //         context.stroke(); 
            //       }
            //         firstline("mycanvas"); 
            //     }

            //     //根据矩形坐标第一列双unit画线
            //     var _xydouble=[];
            //     var double_coord=[];
            //     var double_arry=listArry.eq(0).find(".double_line");
            //     for(i=0;i<double_arry.length;i++){
            //       double_coord=[double_arry.eq(i).position().left,double_arry.eq(i).position().top];
            //       _xydouble.push(double_coord);

            //       function firstline(id) {
                    
            //         var canvas = document.getElementById(id);
            //         if (canvas == null)
            //             return false;
            //         var context = canvas.getContext("2d");
            //         context.strokeStyle = "rgb(247,162,58)";
            //         context.moveTo(_xydouble[i][0]+unitul_w+5,_xydouble[i][1]+unitul_h/2);
            //         context.lineTo(_xydouble[i][0]+unitul_w+5+40,_xydouble[i][1]+unitul_h/2);
            //         context.lineTo(_xydouble[i][0]+unitul_w+5+40,_xydouble[i][1]+unitul_h/2+unitul_h+10);
            //         context.lineTo(_xydouble[i][0]+unitul_w+5,_xydouble[i][1]+unitul_h/2+unitul_h+10);
            //         context.moveTo(_xydouble[i][0]+unitul_w+5+40,_xydouble[i][1]+unitul_h+5);
            //         context.lineTo(_xydouble[i][0]+unitul_w+5+40*2,_xydouble[i][1]+unitul_h+5);
            //         context.stroke(); 
            //       }
            //         firstline("mycanvas"); 
            //     }
            // }else{
            //     for(var i=0;i<level;i++){
            //          listuls+=listul;
            //       }
            //       _content.append(listuls);

            //       //dom生成矩形unit,并放入矩形列表
            //       var unitul='<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"></li><li class="recta"></li></ul>';
            //       var listArry=_content.find($(".match_list"));

            //       listArry[level].innerHTML='<li class="out_li">'+unitul+'</li>';
            //       for(var i=1;i<level+1;i++){
            //         listArry[level-i].innerHTML=listArry[level-i+1].innerHTML+listArry[level-i+1].innerHTML;
            //       }

            //         //按照索引处理列表层高
            //     $.each(listArry,function(i,e){
            //       if(i!=0){
            //         $(this).css('margin-top',unitul_all/2*(Math.pow(2,i)-1));
            //       }
            //     })

            //       //生成canvas dom
            //       var _height=unitul_all*Math.pow(2,level);
            //       var _width=(unitul_w+90)*(level+1);
            //       _content.width(_width);
            //       $(".tech_container").append('<canvas id="mycanvas" width='+_width+' height='+_height+'></canvas> ');

            //     //按照索引处理每列矩形unit间距
            //     var margin_bt=[];
            //     for(var i=0;i<level;i++){
            //       margin_bt[0]=unitul_step;
            //       margin_bt[i+1]=2*margin_bt[i]+unitul_h;
            //       listArry.eq(i).find(".out_li").css("margin-bottom",margin_bt[i]);
            //     }

            //     var onelist = [];
            //     //获取level1的数据
            //     function getnum(obj){
            //         if(obj['level'] == 0){
            //           onelist.push(obj);
            //         }else{
            //           for(var key in obj){
            //               if(key!=='level'){
            //                 getnum(obj[key]);
            //               }
            //             }   
            //           }  
            //     }
            //     getnum(_this.matchdata);

            //     listArry.eq(0).empty();
            //     for(var i=0;i<onelist.length;i++){
            //             listArry.eq(0).append('<ul class="unit_ul" style="width:200px;margin-bottom:10px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].a+'</li><li class="recta">'+onelist[i].b+'</li></ul>');  
            //     }
                
            //     //根据矩形坐标画线
            //     var _xy=[];
            //     var coordinates=[];
            //      for(var i=0;i<level;i++){
            //       var unit_list=listArry.eq(i).find(".unit_ul");
            //       var unit_length=unit_list.length;
                  
            //       _xy.length=0;
            //       for(var j=0;j<unit_length;j++){
            //         coordinates=[unit_list.eq(j).position().left,unit_list.eq(j).position().top];
            //               _xy.push(coordinates);

            //       function drawline(id) {
                    
            //         var canvas = document.getElementById(id);
            //         if (canvas == null)
            //             return false;
            //         var context = canvas.getContext("2d");
            //         context.strokeStyle = "rgb(247,162,58)";
            //         context.moveTo(_xy[j][0]+unitul_w+5,_xy[j][1]+unitul_h/2);
            //         context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]+unitul_h/2);
            //         if(j%2==0){
            //           context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]+unitul_h+margin_bt[i]/2);
            //           context.lineTo(_xy[j][0]+unitul_w+5+40*2, _xy[j][1]+unitul_h+margin_bt[i]/2);
            //         }else{
            //           context.lineTo(_xy[j][0]+unitul_w+5+40, _xy[j][1]-margin_bt[i]/2);
            //           context.lineTo(_xy[j][0]+unitul_w+5+40*2, _xy[j][1]-margin_bt[i]/2);
            //         }

            //         context.stroke(); 
            //       }
            //         drawline("mycanvas"); 
            //       }  
            //     }
            // }  
         },function(response) {
             console.log(response);
         });
     },
       components: {
          topHead,
          topNav
         
  }
  }
</script>
<style>
.tech_container{
  position: relative;
}
.recta{
  width: 200px;
  height: 29.5px;
  background-color: #53585d;
  color: #fff;
  text-align: center;
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
  background:#53585d;
  position: relative;
}
.turn_num_pic{
    position: absolute;
    top:11px;
    right:15px;
}
</style>
