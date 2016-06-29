<template>
  <div class="tech_container">
    <div class="match_content clearfix">
    </div>   
</div>
</template>

<script>
  export default {
    data () {
    return {
      matchdata:'',
      personnum:true,
      overhalf:false,
    }
  },
     ready: function(){
      var _this=this;
      _this.$http.get('match.json').then(function(response){
            _this.matchdata=response.data;
            
            var level=response.data[0].level;
            var unitul_h=60;
            var unitul_w=200;
            var unitul_step=10;
            var unitul_all=unitul_h+unitul_step;
            var _content=$(".match_content");
            var listul;
            var listuls=listul='<ul class="match_list"></ul>';

            if(!_this.personnum){
                if(_this.overhalf){
                  unitul_step=80;
                  unitul_all=unitul_h+unitul_step;
                }
                //dom生成矩形列表
                for(var i=0;i<level-1;i++){
                   listuls+=listul;
                }
                _content.append(listuls);
                
                //dom生成矩形unit,并放入矩形列表
                var unitul='<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"></li><li class="recta"></li></ul>';
                var listArry=_content.find($(".match_list"));

                listArry[level-1].innerHTML='<li class="out_li">'+unitul+'</li>';
                for(var i=1;i<level;i++){
                  listArry[level-1-i].innerHTML=listArry[level-i].innerHTML+listArry[level-i].innerHTML;
                }
                
                //按照索引处理列表层高
                $.each(listArry,function(i,e){
                  if(i!=0){
                    $(this).css('margin-top',unitul_all/2*(Math.pow(2,i)-1));
                  }
                })

                //按照索引处理每列矩形unit间距
                var margin_bt=[];
                for(var i=0;i<level;i++){
                  margin_bt[0]=unitul_step;
                  margin_bt[i+1]=2*margin_bt[i]+unitul_h;
                  listArry.eq(i).find(".out_li").css("margin-bottom",margin_bt[i]);
                }

                //生成canvas dom
                var _height=unitul_all*Math.pow(2,level-1);
                var _width=(unitul_w+90)*(level+1);
                _content.width(_width);
                $(".tech_container").append('<canvas id="mycanvas" width='+_width+' height='+_height+'></canvas> ');

                var onelist = [];

                //获取level1的数据
                function getnum(obj){
                    if(obj['level'] == 1){
                      onelist.push(obj);
                    }else{
                      for(var key in obj){
                          if(key!=='level'){
                            getnum(obj[key]);
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
                      if(!isNaN(onelist[i].a)){
                        var _one_list=listArry.eq(1).find(".unit_ul").eq(i).find(".recta")
                          _one_list.eq(0).text(onelist[i].a);
                        if(!isNaN(onelist[i].b)){
                          _one_list.eq(1).text(onelist[i].b);
                        }else{
                          var _top=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topsY.push(_top);
                          listArry.eq(0).append('<ul class="unit_ul single_line" style="width:200px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].b.a+'</li><li class="recta">'+onelist[i].b.b+'</li></ul>');
                        }   
                      }else{
                          var _top=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_top);
                          listArry.eq(0).append('<div class="double_line"><ul class="unit_ul" style="width:200px;margin-bottom:10px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].a.a+'</li><li class="recta">'+onelist[i].a.b+'</li></ul><ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].b.a+'</li><li class="recta">'+onelist[i].b.b+'</li></ul></div>');
                    }
                }
                console.log(_topdY);

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
                for(var i=1;i<level;i++){
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
                for(var i=0;i<level;i++){
                     listuls+=listul;
                  }
                  _content.append(listuls);

                  //dom生成矩形unit,并放入矩形列表
                  var unitul='<ul class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;"></li><li class="recta"></li></ul>';
                  var listArry=_content.find($(".match_list"));

                  listArry[level].innerHTML='<li class="out_li">'+unitul+'</li>';
                  for(var i=1;i<level+1;i++){
                    listArry[level-i].innerHTML=listArry[level-i+1].innerHTML+listArry[level-i+1].innerHTML;
                  }

                    //按照索引处理列表层高
                $.each(listArry,function(i,e){
                  if(i!=0){
                    $(this).css('margin-top',unitul_all/2*(Math.pow(2,i)-1));
                  }
                })

                  //生成canvas dom
                  var _height=unitul_all*Math.pow(2,level);
                  var _width=(unitul_w+90)*(level+1);
                  _content.width(_width);
                  $(".tech_container").append('<canvas id="mycanvas" width='+_width+' height='+_height+'></canvas> ');

                //按照索引处理每列矩形unit间距
                var margin_bt=[];
                for(var i=0;i<level;i++){
                  margin_bt[0]=unitul_step;
                  margin_bt[i+1]=2*margin_bt[i]+unitul_h;
                  listArry.eq(i).find(".out_li").css("margin-bottom",margin_bt[i]);
                }

                var onelist = [];
                //获取level1的数据
                function getnum(obj){
                    if(obj['level'] == 0){
                      onelist.push(obj);
                    }else{
                      for(var key in obj){
                          if(key!=='level'){
                            getnum(obj[key]);
                          }
                        }   
                      }  
                }
                getnum(_this.matchdata);

                listArry.eq(0).empty();
                for(var i=0;i<onelist.length;i++){
                        listArry.eq(0).append('<ul class="unit_ul" style="width:200px;margin-bottom:10px;"><li class="recta" style="margin-bottom:1px;">'+onelist[i].a+'</li><li class="recta">'+onelist[i].b+'</li></ul>');  
                }
                
                //根据矩形坐标画线
                var _xy=[];
                var coordinates=[];
                 for(var i=0;i<level;i++){
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
</style>
