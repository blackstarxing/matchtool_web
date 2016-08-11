// require('../static/css/main.css');
// require('../static/css/dark.min.css'); 
// require('../static/css/diyUpload.css'); 
// require('../static/css/froala_page.min.css');
// require('../static/css/jquery.datetimepicker.css');

import Vue from 'vue'
import matchtool from './matchtool.vue'
import quickmatch from './views/createquickmatch.vue'
import quickformat from './views/quickmatchformat.vue'
import createLeaguematch from './views/createLeaguematch.vue'
import landRegister from './views/landRegister.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

// Vue.http.options.root = '/api';
Vue.http.options.root = 'http://172.16.2.63:8088/';

Vue.http.options.emulateJSON = true;
var router = new VueRouter({
    hashbang: false
});

router.map({
    '/quickmatch': {
    	component: quickmatch,
    },
    '/createLeaguematch': {
        component: createLeaguematch,
    },
    '/quickformat': {
        component: quickformat,
    },
    '/landRegister': {
        component: landRegister,
    }
})
router.redirect({
  '*': '/landRegister'
})


router.start(matchtool, '#app')