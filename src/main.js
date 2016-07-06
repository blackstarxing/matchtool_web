import Vue from 'vue'
import matchtool from './matchtool.vue'
import homepage from './views/homepage.vue'
import createEvent from './views/createEvent.vue'
import contestant from './views/contestant.vue'
import newslist from './views/news.vue'
import addnews from './views/addnews.vue'
import reset from './views/reset.vue'
import techPic from './views/techPic.vue'
import login from './views/login.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);

<<<<<<< HEAD
// Vue.http.options.root = 'http://192.168.30.248:8088/';
=======

Vue.http.options.root = './src/data';

// Vue.http.options.root = 'http://192.168.30.248:8088/';

>>>>>>> 5cd67091cf621acb0ec32d2b17d24986deea21f7
Vue.http.options.emulateJSON = true;
var router = new VueRouter({
	hashbang: false
});

router.map({
	'/techPic': {
        component: techPic
    },
    '/homepage': {
        component: homepage
    },
    '/createEvent': {
        component: createEvent
    },
    '/contestant': {
        component: contestant
    },
    '/newslist': {
        component: newslist
    },
    '/addnews': {
        component: addnews
    },
    '/reset': {
        component: reset
    },
    '/login': {
        component: login
    }
    
})
router.redirect({
  '*': '/homepage'
})

router.start(matchtool, '#app')