import Vue from 'vue'
import matchtool from './matchtool.vue'
import techPic from './views/techPic.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = './src/data';
Vue.http.options.emulateJSON = true;
var router = new VueRouter({
	hashbang: false
});

router.map({
	'/techPic': {
        component: techPic
    }
    
})
router.redirect({
  '*': '/techPic'
})

router.start(matchtool, '#app')