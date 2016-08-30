<template>
	<top-head></top-head>
	<side-bar></side-bar>
	<slide-bar></slide-bar>
	<create-pop></create-pop>
	<div class="g-w mt90 f-re">
		<div class="setPoster g-q-hb" v-link="{ path: '/backend/backendMsg'}" v-if="isPublish==null || isPublish==0">
			<img v-bind:src="'http://img.wangyuhudong.com/'+formdata.poster" v-if="poster!=null">
			<div class="g-q-ptr">
				<span class="icon-uniE62B"></span>
				<p>编辑、更改赛事海报</p>
			</div>
		</div>
		<div class="setPoster g-q-hb" v-if="isPublish==1">
			<img v-bind:src="'http://img.wangyuhudong.com'+poster" v-if="poster!=null">
		</div>
		<div class="g-q-info">
			<div class="g-q-fbs" v-show ="isc">
				<button type="button" class="u-q-start" v-if="status==1" v-link="{ path: '/backend/backendTechpic'}">
					<i class="s-q-start"></i>
					开始赛事进程
				</button>
				<button type="button" class="u-q-start u-q-jinxz" v-if="status==2 && rate!=100" v-link="{ path: '/backend/backendTechpic'}">
					<div class="s-q-jds" style="width:{{rate}}%;"></div>
					<span class="u-q-start-jdt">{{rate}}%</span>
				</button>
				<button type="button" class="u-q-start u-q-jinxz" v-if="status==2 && rate==100" v-link="{ path: '/backend/backendTechpic'}">
					<i class="s-q-start"></i>
					结束赛事
				</button>
				<button type="button" class="u-q-start" v-if="status==3" disabled>
					已结束
				</button>
				<p class="g-q-remtime" id="txt" v-show="isc3">距离开赛还有<span class="col42a">01</span>天&nbsp<span class="colfdb">•</span>&nbsp<span class="col42a">03:09</span></p>
				<a href="#" class="u-q-enter" v-if="state==2" @click="joinMatch">我也要参与</a>
				<a href="#" class="u-q-enter" v-if="state==4" @click="qiandao">去签到</a>
			</div>
			<div class="g-q-fbs" v-show="isc2">
				<button type="button" class="u-q-start" style="background-color:#343b45;" v-if="state==1" disabled>
					<i class="s-q-start"></i>
					报名参赛
				</button>
				<button type="button" class="u-q-start" v-if="state==2" @click="joinMatch">
					<i class="s-q-start"></i>
					报名参赛
				</button>
				<button type="button" class="u-q-start" v-if="state==3" disabled>
					<i class="s-q-start"></i>
					已报名
				</button>
				<button type="button" class="u-q-start" v-if="state==4" @click="qiandao">
					<i class="s-q-start"></i>
					签到
				</button>
				<button type="button" class="u-q-start" v-if="state==5" disabled>
					<i class="s-q-start"></i>
					即将开始
				</button>
				<button type="button" class="u-q-start" v-if="state==6" disabled>
					<i class="s-q-start"></i>
					赛事准备开启
				</button>
				<button type="button" class="u-q-start u-q-jinxz" v-if="state==7" disabled>
					<div class="s-q-jds" style="width:{{rate}}%;"></div>
					<span class="u-q-start-jdt">{{rate}}%</span>
				</button>
				<button type="button" class="u-q-start" v-if="state==8" disabled>
					<i class="s-q-start"></i>
					已结束
				</button>
				<p class="g-q-remtime" id="txts" v-show="isc3">距离开赛还有<span class="col42a">01</span>天&nbsp<span class="colfdb">•</span>&nbsp<span class="col42a">03:09</span></p>
			</div>
			<p class="g-q-name">{{name}}</p>
			<div class="g-q-zbf f-re">
				<i class="g-q-hp f-fl">
					<img v-bind:src="'http://img.wangyuhudong.com/'+icon">
				</i>
				<span class="f-fl ml20">{{nickname}}</span>
				<span class="col7a8 f-fl ml20" v-if="isPublish==1">{{publishTime}}发布</span>
				<span v-if="isPublish==1" class="f-re qrcodehov" style="margin-left: 20px;"></span>
				<span class="u-cgl-tip" style="position: absolute; width:80px; height: 80px; left: 333px;">
					<i class="u-cjl-tipws">
						<i class="u-cjl-tipns"></i>
					</i>
					<div id="qrcode"></div>
				</span>
				
			</div>
			<p class="g-q-jj col7a8" v-if="brief==0 && (isPublish==null || isPublish==0)">赛事还没有简介信息，<a href="#" v-link="{ path: '/backend/backendMsg'}">去完善</a><i v-link="{ path: '/backend/backendMsg'}"></i></p>
			<p class="g-q-jj col7a8" v-if="brief==0 && isPublish==1">赛事还没有简介信息</p>
			<p class="g-q-jj col7a8" v-if="brief!=0" v-html="brief"></p>
			<p class="col7a8 g-q-dz" v-show="changemodedz">地址&nbsp<span class="colfdb">•</span>&nbsp{{addreass}}{{detailAddreass}}</p>
			<ul class="g-q-tab clearfix">
				<li v-bind:class="{'g-q-tabon':tap1}" val="1" @click="tapswitch">对阵图预览</li>
				<li v-bind:class="{'g-q-tabon':tap2}" val="2" @click="tapswitch">赛事信息</li>
			</ul>
		</div>
		<div class="g-q-gofb" v-if="isPublish==null || isPublish==0">当前赛事<a v-link="{ path: '/backend/backendMsg'}">尚未发布</a>，前往管理赛事页面，完善赛事信息并<a v-link="{ path: '/backend/backendMsg'}">发布</a>，让更多用户看到你的赛事。</div>
		<div v-show="tap1">
			<!-- 在这个div放置对阵图哦 -->
			<div class="against_container">
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
							<p class="g-q-if-p2 bxsjnull">{{applyBegin}} - {{applyEnd}}</p>
						</div>
					</div>
					<div style="width: 150px; margin-left: 40px;" class="g-q-if f-fl">
						<img src="../../static/images/icon_qdsj.png" class="f-ab">
						<div class="g-q-if-in">
							<p class="g-q-if-p1">签到时间</p>
							<p class="g-q-if-p2">{{needSignMinute}}</p>
						</div>
					</div>
				</div>
			</div>
			<div class="g-q-jx">
				<p class="g-q-jxp">赛事奖项</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;" v-if="prizeSetting==0 && (isPublish==null || isPublish==0)">还没有赛事奖项，<a v-link="{ path: '/backend/backendMsg'}">去完善</a><i v-link="{ path: '/backend/backendMsg'}"></i></p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;" v-if="prizeSetting==0 && isPublish==1">有点抠！竟然没有奖励！</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;" v-if="prizeSetting!=0" v-html="prizeSetting"></p>
			</div>
			<div class="g-q-jx" style="margin-bottom:100px;">
				<p class="g-q-jxp">赛事规则</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;" v-if="regimeRule==0 && (isPublish==null || isPublish==0)">还没有赛事规则，<a v-link="{ path: '/backend/backendMsg'}">去完善</a><i v-link="{ path: '/backend/backendMsg'}"></i></p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;" v-if="regimeRule==0 && isPublish==1">暂时还没有详细的赛事规则哦~</p>
				<p class="g-q-jj col7a8" style="margin-bottom: 0;" v-if="regimeRule!=0" v-html="regimeRule"></p>
			</div>
		</div>
		<div class="steps infosteps" v-if="isPublish==null || isPublish==0">
			<span class="line"></span>
			<ul>
				<li><i></i>填写基本信息</li>
				<li><i></i>设置参赛方式</li>
				<li><i></i>确认赛事时间</li>
				<li><i></i>设置采用赛制</li>
				<li class="current"><i></i>完善信息并发布</li>
			</ul>
			<a v-link="{ path: '/backend/backendMsg'}">
				<div class="g-q-sssz">
					<img src="../../static/images/sssz.png">
					赛事设置
				</div>
			</a>
		</div>
		<a v-link="{ path: '/backend/backendMsg'}" class="u-q-cjzsz" v-if="isCreater==1 && isPublish==1">
			<div class="g-q-sssz">
				<img src="../../static/images/sssz.png">
				赛事设置
			</div>
		</a>
	</div>
	<div class="m-mask m_check">
    <div class="m-pop"style="margin: 75px auto 0;">
      <div class="wrap">
        <h3 style="text-align: center;">查看比分</h3>
        <a href="javascript:void(0);" class="u-btn-close" @click="closePop"></a>
        <ul class="edit_detail_top clearfix">
          <li class="edit_detail_left edit_detail_li">
          	<p>{{personNamea}}</p>
            <div class="edit_ring check_ring">{{personNamea.substr(0,1)}}</div>
            <div class="alread_score"><span class="alread_score_dt"></span><span style="display:none">{{seatida}}</span></div>
          </li>
          <li class="edit_detail_mid">
            <span class="edit_detail_vs">vs</span>
          </li>
          <li class="edit_detail_right edit_detail_li">
          	<p>{{personNameb}}</p>
            <div class="edit_ring check_ring">{{personNameb.substr(0,1)}}</div>
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
  	<div class="m-bx-d">
  		<span class="icon-uniE609 u-bx-off" @click="closed"></span>
  		<div class="m-bx-w" v-if="queryRequired.nicknameRequired==1">
  			<p class="g-bx-p">游戏昵称</p>
  			<input type="text" class="u-c-ipt" name="nickname" placeholder="请输入游戏昵称" v-model="singlebm.nickname" style="width: 100%;" required>
  			<span class="colfdb f-tip f-bx-tip"></span>
  		</div>
  		<div class="m-bx-w" v-if="queryRequired.idcardRequired==1">
  			<p class="g-bx-p">身份证号</p>
  			<input type="text" class="u-c-ipt" name="idcard" maxlength="18" placeholder="请输入身份证号" style="width: 100%;" v-model="singlebm.idcard" required>
  			<span class="colfdb f-tip f-bx-tip"></span>
  		</div>	
  		<div class="m-bx-w" v-if="queryRequired.nameRequired==1">
  			<p class="g-bx-p">真实姓名</p>
  			<input type="text" class="u-c-ipt" name="truename" maxlength="6" placeholder="请输入真实姓名" style="width: 100%;" v-model="singlebm.realname" required>
  			<span class="colfdb f-tip f-bx-tip"></span>
  		</div>	
  		<div class="m-bx-w" v-if="queryRequired.telephoneRequired==1">
  			<p class="g-bx-p">手机号码</p>
  			<input type="text" class="u-c-ipt" name="telephone" maxlength="11" placeholder="请输入手机号码" style="width: 100%;" v-model="singlebm.telephone" required>
  			<span class="colfdb f-tip f-bx-tip"></span>
  		</div>
  		<div class="m-bx-w" v-if="queryRequired.qqRequired==1">
  			<p class="g-bx-p">QQ号码</p>
  			<input type="text" class="u-c-ipt" name="qqnum" maxlength="15" placeholder="请输入QQ号码" style="width: 100%;" v-model="singlebm.qq" required>
  			<span class="colfdb f-tip f-bx-tip"></span>
  		</div>
  		<div class="m-bx-w" v-if="queryRequired.otherRequired==1" style="margin-bottom: 0.5rem;">
  			<p class="g-bx-p">{{queryRequired.otherDescribe}}</p>
  			<input type="text" class="u-c-ipt" name="otherinfo" placeholder="请输入{{queryRequired.otherDescribe}}" v-model="singlebm.other" style="width: 100%;" required>
  			<span class="colfdb f-tip f-bx-tip"></span>
  		</div>
  		<button type="button" class="u-q-start u-bx-btn" @click="referApply"><i></i>提交信息</button>		
	</div>
	<div class="m-zdbx-d f-re zdbmone">
		<span class="icon-uniE609 u-bx-off" @click="closedzdone"></span>
		<p class="g-zdbx-p1"><span class="col42a">当前报名战队：</span>{{teamName}}</p>
		<p class="g-zdbx-p2">选出出战选手 ( <span class="colfdb">{{currentNum}}</span> / {{teamMemberNum}} )</p>
		<ul class="m-zdbx-ul">
			<li class="clearfix" v-for="clanmember in clanmembers">
				<div class="f-fl g-zdbx-lab">
					<input type="checkbox" id="clanmem{{clanmember.userId}}" icon="{{clanmember.icon}}" username="{{clanmember.nickname}}" roundId="{{formdata.oetRoundId}}" teamId="{{clanmember.teamId}}" userId="{{clanmember.userId}}" class="regular-checkboxs tm" @change="cherkchange"/>
					<label for="clanmem{{clanmember.userId}}"></label>
				</div>
				<label class="f-fl u-zdbx-ltx" for="clanmem{{clanmember.userId}}">
					<img v-bind:src="'http://img.wangyuhudong.com/'+clanmember.icon">
				</label>
				<label for="clanmem{{clanmember.userId}}" class="f-fl g-zdbx-dynm">{{clanmember.nickname}}</label>
			</li>
		</ul>
		<button type="button" id="masbaom" class="u-q-start u-zdbx-btn" v-if="queryRequired.nicknameRequired==0 && queryRequired.otherRequired==0" @click="nowApply" disabled>确认报名</button>	
		<button type="button" id="xiayibu" class="u-q-start u-zdbx-btn" v-if="queryRequired.nicknameRequired==1 || queryRequired.otherRequired==1" @click="zdnext" disabled>下一步</button>	
	</div>
	<div class="m-zdbx-d f-re zdbmtwo">
		<span class="icon-uniE609 u-bx-off" @click="closedzdtwo"></span>
		<p class="g-zdbx-p1"><span class="col42a">当前报名战队：</span>{{teamName}}</p>
		<p class="g-zdbx-p2">完善选手信息</p>
		<ul class="m-zdbx-ul clanreq">
			<li v-for="arr in cherkedMemArr">
				<div class="clearfix">
					<label class="f-fl u-zdbx-ltx">
						<img v-bind:src="'http://img.wangyuhudong.com/'+arr.icon">
					</label>
					<label for="gamenickname" class="f-fl g-zdbx-dynm">{{arr.username}}</label>
				</div>
				<div class="clearfix g-zdbx-wd" v-if="queryRequired.nicknameRequired==1">
					<label class="s-zdbx-lab">游戏昵称：</label>
					<input type="text" class="u-c-ipt" placeholder="请输入游戏昵称" v-model="arr.nickname" style="width: 180px;" required>
				</div>
				<div class="clearfix" v-if="queryRequired.otherRequired==1">
					<label class="s-zdbx-lab">{{queryRequired.otherDescribe}}：</label>
					<input type="text" class="u-c-ipt" placeholder="请输入{{queryRequired.otherDescribe}}" v-model="arr.other" style="width: 180px;" required>
				</div>
			</li>
		</ul>
		<div class="f-re">
			<button type="button" class="u-q-start u-zdbx-btn" @click="confirmation">确认报名</button>
			<span class="colfdb f-tip u-zdbx-tip">请填写所有队员的报名信息！</span>
			<button type="button" class="u-q-start u-zdbx-btn u-zdbx-syb" @click="goPrev">上一步</button>
		</div>
	</div>
</template>
<script type="text/javascript">
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
function timer(text,a,n,c) {
	
	var currentTime = new Date().getTime();

	var leftTime = a - (currentTime - n);

	var leftMillis = leftTime;

	var leftDay = Math.floor(leftTime / (1000 * 60 * 60 * 24));
	leftTime = leftTime - leftDay * (1000 * 60 * 60 * 24);

	var leftHour = Math.floor(leftTime / (1000 * 60 * 60));
	leftTime = leftTime - leftHour * (1000 * 60 * 60);

	var leftMinute = Math.floor(leftTime / (1000 * 60));
	leftTime = leftTime - leftMinute * (1000 * 60)

	var leftSecond = Math.round(leftTime / 1000);

	var leftStr = '';
	if(leftDay > 0) {
		leftStr += leftDay + '天';
	}
	if(leftHour > 0) {
		leftStr += leftHour + '小时';
	}
	if(leftMinute > 0) {
		leftStr += leftMinute + '分';
	}
	if(leftSecond > 0) {
		leftStr += leftSecond + '秒';
	}
	if(c==0){
		document.getElementById('txts').innerHTML = text + leftStr;
	}
	else if(c==1){
		document.getElementById('txt').innerHTML = text + leftStr;
	}
	
	if(leftMillis <= 0) {
		window.location.reload();
	}
}
import topHead from '../components/topHead.vue'
import sideBar from '../components/sideBar.vue'
import slideBar from '../components/slideBar.vue'
import createPop from '../components/createPop.vue'
	export default {
		data () {
			return{
				state:'',
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
				needSignMinute:'',
				allowApply:'',
				formdata:{
					oetInfoId:'',
					oetRoundId:''
				},
				changemodedz:true,
				isstart:false,
				tap1:true,
				tap2:false,
				matchdata:'',
				personnum:"",
    			overhalf:"",
    			turnnums:[],
    			roundStatus:'',
    			appliable:'',//当前是否可报名
    			isPublish:'',//是否发布
    			isCreater:'',//当前用户是否为赛事创建者
    			nickname:'',
    			icon:'',
    			publishTime:'',
    			brief:'',
    			prizeSetting:'',
    			regimeRule:'',
    			personNamea:'',
		        personNameb:'',
		        scorelis:[],
		        groupid:{},
		        seatida:{},
		        seatidb:{},
		        queryRequired:{
		        	idcardRequired:'',
		        	nameRequired:'',
		        	nicknameRequired:'',
		        	otherRequired:'',
		        	qqRequired:'',
		        	telephoneRequired:'',
		        	otherDescribe:''
		        },
		        singlebm:{
		        	idcard:'',
		        	qq:'',
		        	realname:'',
		        	telephone:'',
		        	roundId:'',
		        	other:'',
		        	nickname:''
		        },
		        clanmembers:'',
		        teamName:'',
		        teamMemberNum:'',
		        currentNum:0,
		        cherkedMemArr:'',
		        status:'',//创建者赛事状态视角
		        isc:false,
		        isc2:false,
		        rate:'',//进度条
		        isc3:false
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
			_this.singlebm.roundId = window.sessionStorage.getItem("eventRoundId");
			_this.formdata.oetInfoId = window.sessionStorage.getItem("eventId");
			//二维码生成
			jQuery(function(){
				jQuery('#qrcode').qrcode({
					render: "canvas",//设置渲染方式  
					width: 70,//设置宽度  
					height: 70,//设置高度 
					// text: "http://wy.kaisaiba.wangyuhudong.com/#/matchshare/36"
					text: "http://wy.kaisaiba.wangyuhudong.com/#/matchshare/"+_this.formdata.oetInfoId
				});
			})
			var parm={};
            parm.id=_this.formdata.oetInfoId;
			
       _this.$http.get('event/info',parm).then(function(response){
        	console.log(response);
        	_this.roundStatus = response.data.object.state;
			var code = response.data.code;
			if(code==1){
				_this.status = response.data.object.round.status;
				if(_this.status==2){
				 	_this.rate = response.data.object.rate;
				}
				_this.brief= response.data.object.event.brief;
				if(_this.brief=='' || _this.brief==null){
					_this.brief = 0;
				}
				_this.prizeSetting = response.data.object.event.prizeSetting;
				if(_this.prizeSetting=='' || _this.prizeSetting==null){
					_this.prizeSetting = 0;
				}
				_this.regimeRule = response.data.object.event.regimeRule;
				if(_this.regimeRule=='' || _this.regimeRule==null){
					_this.regimeRule = 0;
				}
				_this.publishTime = format(response.data.object.event.publishTime);
				_this.isCreater = response.data.object.isCreater;
				_this.icon = response.data.object.creater.icon;
				_this.nickname = response.data.object.creater.nickname;
				_this.isPublish = response.data.object.event.isPublish;
				_this.appliable = response.data.object.appliable;
				window.sessionStorage.setItem("applyType",response.data.object.round.applyType);
				_this.poster = response.data.object.event.poster;
				_this.name = response.data.object.event.name;
				_this.itemName = response.data.object.event.items.name;
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
				_this.activityBegin = format(response.data.object.round.activityBegin);
				_this.applyBegin = format(response.data.object.round.applyBegin);
				_this.applyEnd = format(response.data.object.round.applyEnd);
				_this.needSignMinute = '开赛前'+response.data.object.event.needSignMinute+'分钟';
				_this.allowApply = response.data.object.round.allowApply;
				if(_this.allowApply==0){
					_this.needSignMinute = '不需要签到';
					_this.applyBegin='';
					_this.applyEnd='';
					$('.bxsjnull').text('不可报名');
				}else{
					if(response.data.object.event.needSign == null || response.data.object.event.needSign==''){
						_this.needSignMinute = '不需要签到';
					}
				}
				if(_this.isCreater ==1 && _this.isPublish==1){
					_this.isc = true;
					var nowTime = response.data.object.nowTime;
					_this.state = response.data.object.state;
					var subTime = new Date().getTime() - nowTime;
					if(_this.state==1){
						_this.isc3 = true;
						var txt = '距离报名开始还有';
						timer(txt, response.data.object.round.applyBegin ,subTime, _this.isCreater) 
						var intervalNum = window.setInterval(function() {
							timer(txt, response.data.object.round.applyBegin ,subTime,_this.isCreater);
						}, 1000);
					}
					else if(_this.state==2){
						_this.isc3 = true;
						var txt = '距离报名结束还有';
						timer(txt, response.data.object.round.applyEnd ,subTime, _this.isCreater) 
						var intervalNum = window.setInterval(function() {
							timer(txt, response.data.object.round.applyEnd ,subTime,_this.isCreater);
						}, 1000);
					}else if(_this.state==3){
						_this.isc3 = true;
						var txt = '距离签到开始还有';
						timer(txt, response.data.object.signBeginTime ,subTime,_this.isCreater) 
						var intervalNum = window.setInterval(function() {
							timer(txt, response.data.object.signBeginTime ,subTime, _this.isCreater);
						}, 1000);
					}else if(_this.state==4 || _this.state==5){
						_this.isc3 = true;
						var txt = '距离赛事开始还有';
						timer(txt, response.data.object.round.activityBegin ,subTime,_this.isCreater) 
						var intervalNum = window.setInterval(function() {
							timer(txt, response.data.object.round.activityBegin ,subTime,_this.isCreater);
						}, 1000);
					}
				}else if(_this.isCreater ==0 && _this.isPublish==1){
						_this.isc2 = true;
						var nowTime = response.data.object.nowTime;
						_this.state = response.data.object.state;
						var subTime = new Date().getTime() - nowTime;
						if(_this.state==1){
							_this.isc3 = true;
							var txt = '距离报名开始还有';
							timer(txt, response.data.object.round.applyBegin ,subTime, _this.isCreater) 
							var intervalNum = window.setInterval(function() {
								timer(txt, response.data.object.round.applyBegin ,subTime,_this.isCreater);
							}, 1000);
						}
						else if(_this.state==2){
							_this.isc3 = true;
							var txt = '距离报名结束还有';
							timer(txt, response.data.object.round.applyEnd ,subTime, _this.isCreater) 
							var intervalNum = window.setInterval(function() {
								timer(txt, response.data.object.round.applyEnd ,subTime,_this.isCreater);
							}, 1000);
						}else if(_this.state==3){
							_this.isc3 = true;
							var txt = '距离签到开始还有';
							timer(txt, response.data.object.signBeginTime ,subTime,_this.isCreater) 
							var intervalNum = window.setInterval(function() {
								timer(txt, response.data.object.signBeginTime ,subTime, _this.isCreater);
							}, 1000);
						}else if(_this.state==4 || _this.state==5){
							_this.isc3 = true;
							var txt = '距离赛事开始还有';
							timer(txt, response.data.object.round.activityBegin ,subTime,_this.isCreater) 
							var intervalNum = window.setInterval(function() {
								timer(txt, response.data.object.round.activityBegin ,subTime,_this.isCreater);
							}, 1000);
						}else if(_this.state==6){
							_this.isc3 = true;
							$('#txts').html('等待赛事组织者开赛');
						}
				}
			}

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
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><div class="group_num">'+onelist[i].groups[0].groupNumber+'</div><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li class="recta" data-seatid='+onelist[i].groups[0].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[0].name?onelist[i].groups[0].seats[0].name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'" '+(onelist[i].groups[0].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[1].name?onelist[i].groups[0].seats[1].name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'" '+(onelist[i].groups[0].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">'+JSON.stringify(onelist[i].groups[0].detailedScores)+'</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></div><div class="out_li"><div class="group_num" style="top:90px">'+onelist[i].groups[1].groupNumber+'</div><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[1].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[1].seats[0].name?onelist[i].groups[1].seats[0].name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'" '+(onelist[i].groups[1].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[1].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[1].seats[1].name?onelist[i].groups[1].seats[1].name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'" '+(onelist[i].groups[1].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">'+JSON.stringify(onelist[i].groups[1].detailedScores)+'</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></div></div>');
                        }else if(onelist[i].groups.length==1){
                              
                              var _tops=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                              _topsY.push(_tops);
                              listArry.eq(0).append('<li class="out_li single_line"><div class="group_num">'+onelist[i].groups[0].groupNumber+'</div><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li data-seatid='+onelist[i].groups[0].seats[0].id+' class="recta" style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[0].name?onelist[i].groups[0].seats[0].name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'" '+(onelist[i].groups[0].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[1].name?onelist[i].groups[0].seats[1].name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'" '+(onelist[i].groups[0].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">'+JSON.stringify(onelist[i].groups[0].detailedScores)+'</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></li>');
                            
                          }
                        }
                        
                            
                      }else{
                          var _topd=listArry.eq(1).find(".unit_ul").eq(i).offset().top;
                          _topdY.push(_topd);
                          listArry.eq(0).append('<div class="double_line"><div class="out_li" style="margin-bottom:10px;"><div class="group_num">'+onelist[i].groups[0].groupNumber+'</div><ul class="unit_ul" data-groupid='+onelist[i].groups[0].id+' style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[0].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[0].name?onelist[i].groups[0].seats[0].name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[0].isWin?"add_winer":"")+'" '+(onelist[i].groups[0].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[0].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[0].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[0].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[0].seats[1].name?onelist[i].groups[0].seats[1].name:"")+'</span><span class="recta_right '+(onelist[i].groups[0].seats[1].isWin?"add_winer":"")+'" '+(onelist[i].groups[0].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[0].scores?onelist[i].groups[0].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">'+JSON.stringify(onelist[i].groups[0].detailedScores)+'</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></div><div class="out_li"><div class="group_num" style="top:90px">'+onelist[i].groups[1].groupNumber+'</div><ul data-groupid='+onelist[i].groups[1].id+' class="unit_ul" style="width:200px;"><li class="recta" style="margin-bottom:1px;" data-seatid='+onelist[i].groups[1].seats[0].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[0].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[0].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[1].seats[0].name?onelist[i].groups[1].seats[0].name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[0].isWin?"add_winer":"")+'" '+(onelist[i].groups[1].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+onelist[i].groups[1].seats[1].id+'><input name="target_id" type="hidden" value='+onelist[i].groups[1].seats[1].targetId+'><span class="recta_num">'+onelist[i].groups[1].seats[1].seatNumber+'</span><span class="recta_personname">'+(onelist[i].groups[1].seats[1].name?onelist[i].groups[1].seats[1].name:"")+'</span><span class="recta_right '+(onelist[i].groups[1].seats[1].isWin?"add_winer":"")+'" '+(onelist[i].groups[1].scores?"":"style='opacity: 0;'")+'>'+(onelist[i].groups[1].scores?onelist[i].groups[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">'+JSON.stringify(onelist[i].groups[1].detailedScores)+'</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></div></div>');
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
             var listsix=[];
             var listseven=[];
             var listeight=[];
             var listnight=[];
             var list = [listtwo,listthree,listfour,listfive,listsix,listseven,listeight,listnight];
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
                _html='<div class="group_num">'+list[i].groupNumber+'</div><ul class="unit_ul" data-groupid='+list[i].id+' style="width:200px;"><li class="recta" data-seatid='+list[i].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+list[i].seats[0].targetId+'><span class="recta_num">'+(list[i].seats[0].seatNumber?list[i].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(list[i].seats[0].name?list[i].seats[0].name:"")+'</span><span class="recta_right '+(list[i].seats[0].isWin?"add_winer":"")+'" '+(list[i].scores?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+list[i].seats[1].id+'><input name="target_id" type="hidden" value='+list[i].seats[1].targetId+'><span class="recta_num">'+(list[i].seats[1].seatNumber?list[i].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(list[i].seats[1].name?list[i].seats[1].name:"")+'</span><span class="recta_right '+(list[i].seats[1].isWin?"add_winer":"")+'" '+(list[i].scores?"":"style='display: none'")+'>'+(list[i].scores?list[i].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div" '+(list[i].seats[1].target?"":"style='display: none'")+'><div class="detail_scores">'+JSON.stringify(list[i].detailedScores)+'</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div>';

                return _html;
            }

            if(_this.matchdata.length == 2){
              listArry.eq(turn-1).find('.out_li').css('margin-bottom','60px');
              listArry.eq(turn-1).append('<li class="out_li"><ul class="unit_ul" data-groupid='+_this.matchdata[1].id+' style="width:200px;"><li class="recta" data-seatid='+_this.matchdata[1].seats[0].id+' style="margin-bottom:1px;"><input name="target_id" type="hidden" value='+_this.matchdata[1].seats[0].targetId+'><span class="recta_num">'+(_this.matchdata[1].seats[0].seatNumber?_this.matchdata[1].seats[0].seatNumber:"")+'</span><span class="recta_personname">'+(_this.matchdata[1].seats[0].name?_this.matchdata[1].seats[0].name:"")+'</span><span class="recta_right '+(_this.matchdata[1].seats[0].isWin?"add_winer":"")+'" '+(_this.matchdata[1].scores?"":"style='display: none'")+'>'+(_this.matchdata[1].scores?_this.matchdata[1].scores.seatleft:"")+'</span></li><li class="recta" data-seatid='+_this.matchdata[1].seats[1].id+'><input name="target_id" type="hidden" value='+_this.matchdata[1].seats[1].targetId+'><span class="recta_num">'+(_this.matchdata[1].seats[1].seatNumber?_this.matchdata[1].seats[1].seatNumber:'')+'</span><span class="recta_personname">'+(_this.matchdata[1].seats[1].name?_this.matchdata[1].seats[1].name:"")+'</span><span class="recta_right '+(_this.matchdata[1].seats[1].isWin?"add_winer":"")+'" '+(_this.matchdata[1].scores?"":"style='display: none'")+'>'+(_this.matchdata[1].scores?_this.matchdata[1].scores.seatright:"")+'</span></li></ul><div class="add_options"></div><div class="edit_div"><div class="detail_scores">'+JSON.stringify(_this.matchdata[1].detailedScores)+'</div><div class="edit_score" style="opacity: 0;"></div><ul class="scores_detail_list"></ul><ul class="float_check"><li class="float_edit_check"><img style="margin-top:5px;" src="../../static/images/detail.png"><p>详情</p></li></ul></div></li>')
            }

            _this.$nextTick(function(){
              if(_this.roundStatus<7){
                  $('.edit_div').hide();
                  $('.recta_right').hide();
                }else{
                  $('.turn_btn').hide();
                  $('.against_title_tip').hide();
                  $(".recta").attr('draggable',false);
                }

                if(_this.roundStatus<6){
                  $('.start_text').css('background-color','#999');
                }

                if(_this.roundStatus==8){
                  $('.edit_div').hide();
                  var $lastlist=listArry.eq(turn-1);
                  var $rectar=$lastlist.find('.recta_right');
                  var _imgone='<img class="tech_end_pic" src="../../static/images/numberone.png">';
                  var _imgtwo='<img class="tech_end_pic" src="../../static/images/numbertwo.png">';
                  var _imgthree='<img class="tech_end_pic" src="../../static/images/numberthree.png">';
                  var _imgfour='<img class="tech_end_pic" src="../../static/images/numberfour.png">';
                  if($rectar.eq(0).hasClass('add_winer')){
                    $rectar.eq(0).append(_imgone);
                    $rectar.eq(1).append(_imgtwo);
                  }else{
                    $rectar.eq(1).append(_imgone);
                    $rectar.eq(0).append(_imgtwo);
                  }
                    
                   if(this.matchdata.length==2){
                    if($rectar.eq(2).hasClass('add_winer')){
                      $rectar.eq(2).append(_imgthree);
                      $rectar.eq(3).append(_imgfour);
                    }else{
                      $rectar.eq(3).append(_imgthree);
                      $rectar.eq(2).append(_imgfour);
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
                            _movebody.css({"top":top_r,"left":left_r});
                            $(".group_num").css('left','-24px');
                    }
                });
            });
               
             //编辑查看悬浮框
              $(".edit_score").mouseover(function(){
              	console.log(11);
                    var $this=$(this);
                    $this.parent().find(".float_check").show();
                    var scores_arry=JSON.parse($this.prev('.detail_scores').text());
                    var $scores_ul=$this.next('.scores_detail_list');
                    var _length=scores_arry.length;
                    var $float_edit=$scores_ul.next('.float_check');
                    var _left=200+(25*_length);
                    
                    if(_length){
                      $scores_ul.empty();
                      $scores_ul.width(25*_length);
                      $scores_ul.show();
                      $float_edit.css("left",_left);
                      for(var i=0;i<scores_arry.length;i++){
                      $scores_ul.append('<li><p class="scores_detail_p '+(scores_arry[i].winner==1?"scores_large":"")+'">'+scores_arry[i].leftScore+'</p><p class="scores_detail_p '+(scores_arry[i].winner==2?"scores_large":"")+'">'+scores_arry[i].rightScore+'</p></li>');
                      }
                    }
                  });

              $(".edit_div").mouseleave(function(){
                    $(this).find(".float_check").hide();
                    $(this).find(".scores_detail_list").hide();
                });

              $(".float_edit_check").on("click",function(){
                  $(".m_check").show();
                   var $this=$(this);
                   var _alscore=$('.alread_score_dt');
                   _alscore.removeClass("compare_active");
                   $('.add_guan').remove();
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
             
          },function(response) {
              console.log(response);
          });
		},
		methods:{
			qiandao:function(event){
				var _this = this;
				event.preventDefault();
				layer.confirm('是否签到？',{
					btn: ['签到','取消'], //按钮
				  	move:false,
				  	closeBtn:0
				},function(){
					_this.$http.post('event/sign?roundId='+_this.formdata.oetRoundId+'&sign=1').then(function(response){
						var code = response.data.code;
						if(code==-1){
							layer.msg('请先登录',{offset:"0px"});
						}
						else if(code==0){
							layer.msg(response.data.msg,{offset:"0px"});
						}else if(code==1){
							layer.msg('签到成功',{offset:"0px"});
							window.location.reload();
						}
					}, function(response){
						console.log(22)
					})
				},function(){
					layer.closeAll();
				})
			},
			cherkchange:function(){
				var _this = this;
				var checkedNum = $('.tm:checked').length;
				_this.currentNum = checkedNum;
				if(_this.currentNum >= _this.teamMemberNum){
					$('.tm').not(':checked').attr('disabled',true);
				}else{
					$('.tm').attr('disabled',false);
				}
				if(_this.currentNum == _this.teamMemberNum){
					$('#xiayibu').attr('disabled', false);
					$('#masbaom').attr('disabled', false);
				}else{
					$('#xiayibu').attr('disabled', true);
					$('#masbaom').attr('disabled', true);
				}
			},
			referApply:function(e){
				var _this = this;
		    	e.preventDefault();
		    	function errorPlacement(mes,element){
		    		var errorTips=element.parents(".m-bx-w").find('.f-tip');
			    	if(mes!=""){
			    		errorTips.css("display","inline-block").html(mes);	
			    	}else{
			    		errorTips.css("display","none");	
			    	}
		    	}
		    	function formValidate(){
		    		var valid=true;
		    		$('.m-bx-d [required]').each(function(index, el) {
		    			var $this=$(this);
		    			var value=$this.val(),name=$this.attr('name');	
			    		var message="";
			    		if(name=="nickname"){
			    			if(value==""){
								valid=false;
					    		message="游戏昵称不能为空!";
							}
							errorPlacement(message,$this);
			    		}else if(name=="idcard"){
			    			if(value==""){
								valid=false;
					    		message="身份证号不能为空!";
							}else if(!/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(value)){
			    				valid=false;
					    		message="有效身份证格式不正确!";
			    			}
							errorPlacement(message,$this);
			    		}else if(name=="truename"){
			    			if(value==""){
								valid=false;
					    		message="真实姓名不能为空!";
							}
							errorPlacement(message,$this);
			    		}else if(name=="telephone"){
			    			if(value==""){
								valid=false;
					    		message="手机号码不能为空!";
							}else if(!/^1\d{10}$/.test(value)){
			    				valid=false;
					    		message="手机号码不规范!";
			    			}
							errorPlacement(message,$this);
			    		}else if(name=="qqnum"){
			    			if(value==""){
								valid=false;
					    		message="QQ号码不能为空!";
							}
							errorPlacement(message,$this);
			    		}else if(name=="otherinfo"){
			    			if(value==""){
								valid=false;
					    		message="其他不能为空!";
							}
							errorPlacement(message,$this);
			    		}
		    		});
		    		if(valid){
		    			return true;
		    		}
		    	}
		    	if(formValidate()){
		    		var obj={};
	   				obj.jsonInfo=JSON.stringify(_this.singlebm);
		    		_this.$http.post('event/round/group/member/saveMemInfo',obj).then(function(response){
		    			var code = response.data.code;
		            	if(code==-1){
		            		layer.msg('请先登录',{offset:"0px"});
		            	}else if(code==0){
		            		layer.msg(response.data.msg,{offset:"0px"});
		            	}else if(code==1){
		            		layer.msg('报名成功',{offset:"0px"});
		            		$('.m-bx-d').animate({right:"-3.2rem"},200);
		            		window.location.reload();
		            	}
		    		}, function(response){
		    			console.log(22)
		    		})
		    	}
			},
			goPrev:function(){
				$('.zdbmtwo').animate({right:"-3.2rem"},200);
				$('.zdbmone').animate({right:0},200);
			},
			closed:function(){
				$('.m-bx-d').animate({right:"-3.2rem"},200);
				$('.m-bx-d .f-tip').hide();
			},
			closedzdone:function(){
				$('.zdbmone').animate({right:"-3.2rem"},200);
			},
			closedzdtwo:function(){
				$('.zdbmtwo').animate({right:"-3.2rem"},200);
			},
			zdnext:function(){
				var _this = this;
				var arr = [];
				$('.tm:checked').each(function(){
					var teamid = $(this).attr('teamid');
					var userid = $(this).attr('userid');
					var roundid = $(this).attr('roundid');
					var username = $(this).attr('username');
					var icon = $(this).attr('icon');
					var obj = {};
					obj.teamId = teamid;
					obj.userId = userid;
					obj.roundId = roundid;
					obj.username = username;
					obj.nickname = '';
					obj.other ='';
					obj.icon = icon;
					arr.push(obj);
				})
				_this.cherkedMemArr = arr;
				$('.zdbmone').animate({right:"-3.2rem"},200);
				$('.zdbmtwo').animate({right:0},200);
			},
			nowApply:function(){
				var _this = this;
				var arr = [];
				$('.tm:checked').each(function(){
					var teamid = $(this).attr('teamid');
					var userid = $(this).attr('userid');
					var roundid = $(this).attr('roundid');
					var username = $(this).attr('username');
					var icon = $(this).attr('icon');
					var obj = {};
					obj.teamId = teamid;
					obj.userId = userid;
					obj.roundId = roundid;
					obj.username = username;
					obj.nickname = '';
					obj.other ='';
					obj.icon = icon;
					arr.push(obj);
				})
				_this.cherkedMemArr = arr;
				var arrobj = {};
				arrobj.members = JSON.stringify(_this.cherkedMemArr);
				_this.$http.post('event/round/group/member/addTeamMembers',arrobj).then(function(response){
					var code = response.data.code;
	            	if(code==-1){
	            		layer.msg('请先登录',{offset:"0px"});
	            	}else if(code==0){
	            		layer.msg(response.data.msg,{offset:"0px"});
	            	}else if(code==1){
	            		layer.msg('报名成功',{offset:"0px"});
	            		$('.zdbmone').animate({right:"-3.2rem"},200);
	            		window.location.reload();
	            	}
				}, function(response){
					console.log(22)
				})
			},
			confirmation:function(){
				var _this= this;
				var valid = true;
				$('.clanreq [required]').each(function(index, el) {
					if($(this).val()==''){
						valid = false;
						return false;
					}
				});
				if(valid){
					var arrobj = {};
					arrobj.members = JSON.stringify(_this.cherkedMemArr);
					_this.$http.post('event/round/group/member/addTeamMembers',arrobj).then(function(response){
						var code = response.data.code;
		            	if(code==-1){
		            		layer.msg('请先登录',{offset:"0px"});
		            	}else if(code==0){
		            		layer.msg(response.data.msg,{offset:"0px"});
		            	}else if(code==1){
		            		layer.msg('报名成功',{offset:"0px"});
		            		$('.zdbmtwo').animate({right:"-3.2rem"},200);
		            		window.location.reload();
		            	}
					}, function(response){
						console.log(22)
					})
				}else{
					$('.zdbmtwo .f-tip').show();
				}
			},
			joinMatch:function(event){
				var _this = this;
				event.preventDefault();
				var bmlx = window.sessionStorage.getItem("applyType");
				$('#xiayibu').attr('disabled', true);
				$('#masbaom').attr('disabled', true);
				_this.$http.get('isLogin').then(function(response){
					var cd = response.data.object.loginFlag;
					if(cd){
						if(bmlx==1){
							$('.m-bx-d').animate({right:"0px"},200);
							var eve={};
				   			eve.jsonInfo=JSON.stringify({oetInfoId:_this.formdata.oetInfoId});
							_this.$http.get('event/queryRequired',eve).then(function(response){
								_this.queryRequired.idcardRequired = response.data.object.idcardRequired;
								_this.queryRequired.nameRequired = response.data.object.nameRequired;
								_this.queryRequired.nicknameRequired = response.data.object.nicknameRequired;
								_this.queryRequired.otherRequired = response.data.object.otherRequired;
								_this.queryRequired.qqRequired = response.data.object.qqRequired;
								_this.queryRequired.telephoneRequired = response.data.object.telephoneRequired;
								_this.queryRequired.otherDescribe = response.data.object.otherDescribe;
				            }, function(response){
				            	console.log(22);
				            })
				            var eve2={};
				   			eve2.jsonInfo=JSON.stringify({roundId:_this.formdata.oetRoundId});
				            _this.$http.get('event/round/group/member/getMemInfo',eve2).then(function(response){
				            	var code = response.data.code;
				            	if(code==-1){
				            		layer.msg('请先登录',{offset:"0px"});
				            	}else if(code==0){
				            		layer.msg(response.data.msg,{offset:"0px"});
				            	}else if(code==1){
				            		_this.singlebm.idcard = response.data.object.idcard;
				            		_this.singlebm.qq = response.data.object.qq;
				            		_this.singlebm.realname = response.data.object.realname;
				            		_this.singlebm.telephone = response.data.object.telephone;
				            	}
				            }, function(response){
				            	console.log(22);
				            })
						}else if(bmlx==2){
							_this.$http.get('event/getEventTeamApplyInfo?roundId='+_this.formdata.oetRoundId).then(function(response){
								var code = response.data.code;
								_this.teamName = response.data.object.teamName;
								_this.teamMemberNum = response.data.object.teamMemberNum;
								if(code==-1){
									layer.msg('请先登录',{offset:"0px"});
								}else if(code==0){
				            		layer.msg(response.data.msg,{offset:"0px"});
				            	}else if(code==1){
				            		var appliable = response.data.object.appliable;
				            		if(appliable==-1){
				            			layer.msg('请先登录',{offset:"0px"});
				            		}else if(appliable==-2){
				            			layer.confirm('该赛事需要以'+_this.itemName+'战队形式报名参与，你当前还未处于'+_this.itemName+'类型战队中，你可以创建或加入'+_this.itemName+'战队来参与赛事',{
				            				btn:['知道了','去创建'],
											move:false,
									  		closeBtn:0
				            			},function(){
				            				layer.closeAll();
				            			},function(){
				            				_this.$route.router.go({path: '/myclan'});
				            			})
				            		}else if(appliable==-3){
				            			var appliableStr = response.data.object.appliableStr;
				            			layer.alert('该赛事需要以'+_this.itemName+'战队形式报名参与，你当前处于['+appliableStr+']战队中，你可以联系队长申请报名参赛', {
										  icon: 1,
										  skin: 'layer-ext-moon' //该皮肤由layer.seaning.com友情扩展。关于皮肤的扩展规则，去这里查阅
										});  
				            		}else if(appliable==-4){
				            			layer.msg('您已经报名过这项赛事',{offset:"0px"});
				            		}else if(appliable==1){
				            			var eve={};
							   			eve.jsonInfo=JSON.stringify({oetInfoId:_this.formdata.oetInfoId});
										_this.$http.get('event/queryRequired',eve).then(function(response){
											_this.queryRequired.idcardRequired = response.data.object.idcardRequired;
											_this.queryRequired.nameRequired = response.data.object.nameRequired;
											_this.queryRequired.nicknameRequired = response.data.object.nicknameRequired;
											_this.queryRequired.otherRequired = response.data.object.otherRequired;
											_this.queryRequired.qqRequired = response.data.object.qqRequired;
											_this.queryRequired.telephoneRequired = response.data.object.telephoneRequired;
											_this.queryRequired.otherDescribe = response.data.object.otherDescribe;
							            }, function(response){
							            	console.log(22);
							            })
				            			_this.clanmembers = response.data.object.members;
				            			$('.zdbmone').animate({right:0},200);
				            		}
				            	}
							}, function(response){
								console.log(22);
							})
						}
					}else{
						layer.msg('请先登录',{offset:"0px"});
					}
				}, function(response){
					console.log(22);
				})
			},
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
			closePop: function(e){
		        $('.m-mask').hide();
      		},
		}
	}
</script>
<style type="text/css">
    .u-cgl-tip{
    	display: none;
    }
	#qrcode{
	    position: absolute;
		top: 5px;
    	left: 5px;
	}
	.qrcodehov{
		float: left;
		width: 0.16rem;
		height: 0.12rem;
		background: url(../../static/images/wxicon.png) no-repeat center center;
	    margin-top: 0.13rem;
	}
	.qrcodehov:hover + .u-cgl-tip{
		display: block;
	}
</style>

