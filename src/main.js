// require('../static/css/main.css');
// require('../static/css/dark.min.css'); 
// require('../static/css/diyUpload.css'); 
// require('../static/css/froala_page.min.css');
// require('../static/css/jquery.datetimepicker.css');

import Vue from 'vue'
import matchtool from './matchtool.vue'
import createLeaguematch from './views/createLeaguematch.vue'
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
    '/createLeaguematch': {
        component: createLeaguematch,
    },

    
})
router.redirect({
  '*': '/createLeaguematch'
})

router.start(matchtool, '#app')