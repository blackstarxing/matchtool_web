// require('../static/css/main.css');
// require('../static/css/dark.min.css'); 
// require('../static/css/diyUpload.css'); 
// require('../static/css/froala_page.min.css');
// require('../static/css/jquery.datetimepicker.css');

import Vue from 'vue'
import matchtool from './matchtool.vue'
import landingpage from './views/landingpage.vue'
import quickmatch from './views/createquickmatch.vue'
import quickformat from './views/quickmatchformat.vue'
import createLeaguematch from './views/createLeaguematch.vue'
import backend from './views/backend.vue'
import backendTechpic from './views/backendTechpic.vue'
import backendContestant from './views/backendContestant.vue'
import reset from './views/reset.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

// Vue.http.options.root = '/api';

Vue.http.options.emulateJSON = true;
var router = new VueRouter({
    hashbang: false
});

router.map({
    '/landingpage': {
        component: landingpage,
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
    },
    '/backendTechpic': {
        component: backendTechpic,
    },
    '/backendContestant': {
        component: backendContestant,
    },
    '/reset': {
        component: reset,
    }
})
router.redirect({
  '*': '/landingpage'
})


router.start(matchtool, '#app')