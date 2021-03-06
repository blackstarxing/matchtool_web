// require('../static/css/match.css');
// require('../static/css/dark.min.css'); 
// require('../static/css/diyUpload.css'); 
// require('../static/css/froala_page.min.css');
// require('../static/css/jquery.datetimepicker.css');

import Vue from 'vue'
import matchtool from './matchtool.vue'
import index from './views/index.vue'
import landingpage from './views/landingpage.vue'
import matchlist from './views/matchlist.vue'
import quickmatch from './views/createquickmatch.vue'
import quickformat from './views/quickmatchformat.vue'
import createLeaguematch from './views/createLeaguematch.vue'
import backend from './views/backend.vue'
import backendMsg from './views/backendMsg.vue'
import backendTechpic from './views/backendTechpic.vue'
import backendContestant from './views/backendContestant.vue'
import backendTeam from './views/backendTeam.vue'
import reset from './views/reset.vue'
import landRegister from './views/loginPw/landRegister.vue'
import matchDetails from './views/matchDetails.vue'
import perSetting from './views/perSetting.vue'
import perSettingtab from './views/perSetting.vue'
import myMatch from './views/myMatch.vue'
import myMessage from './views/myMessage.vue'
import myclan from './views/clan/myclan.vue'
import clandetails from './views/clan/clandetails.vue'
import createclan from './views/clan/createclan.vue'
import claninvite from './views/clan/claninvite.vue'
import passWord from './views/loginPw/passWord.vue'
import matchshare from './views/matchshare.vue'
import clause from './views/clause.vue'
import about from './views/about.vue'
import contact from './views/contact.vue'
import lottery from './views/charity/lottery.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = '/api';
// Vue.http.options.root = '/oet';

Vue.http.options.emulateJSON = true;
var router = new VueRouter({
    hashbang: false
});

router.map({
    '/index': {
        component: index,
    },
    '/landingpage': {
        component: landingpage,
    },
    '/matchlist': {
        component: matchlist,
    },
    '/quickmatch': {
    	component: quickmatch,
    },
    '/createLeaguematch': {
        component: createLeaguematch,
    },
    '/quickformat': {
        component: quickformat,
    },
    '/backend': {
        component: backend,
        subRoutes: {
             '/': {
            component: backendMsg
          },
          '/backendMsg': {
            component: backendMsg
          },
          '/backendTechpic': {
            component: backendTechpic
          },
          '/backendContestant': {
            component: backendContestant
          },
          '/backendTeam': {
            component: backendTeam
          },
          '/reset': {
            component: reset
          }
        }
    },
    '/landRegister/:tabId': {   
        name: 'landRegister',
        component: landRegister,
    },
    '/matchDetails': {
        component: matchDetails
    },
    '/perSetting/:userId': {
        name: 'perSetting',
        component: perSetting
    },
    '/myMatch/:matchType': {
        name: 'myMatch',
        component: myMatch
    },
    '/myMessage/:messageType': {
        name: 'myMessage',
        component: myMessage
    },
    '/myclan': {
        component: myclan
    },
    '/clandetails': {
        component: clandetails
    },
    '/passWord': {
        component: passWord
    },
    '/createclan': {
        component: createclan
    },
    '/claninvite': {
        component: claninvite
    },
    '/matchshare/:eventId': {
        name: 'matchshare',
        component: matchshare
    },
    '/clause': {
        component: clause
    },
    '/about': {
        component: about
    },
    '/contact': {
        component: contact
    },
    '/lottery': {
        component: lottery
    }
})

router.redirect({
  '*': '/index'
})

router.start(matchtool, '#app')