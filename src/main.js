import Vue from 'vue'
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
    
})
router.redirect({
  '*': ''
})

router.start(matchtool, '#app')