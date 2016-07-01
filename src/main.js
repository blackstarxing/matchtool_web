import Vue from 'vue'
import matchtool from './matchtool.vue'
import homepage from './views/homepage.vue'
import createEvent from './views/createEvent.vue'
import contestant from './views/contestant.vue'
import newslist from './views/news.vue'
import addnews from './views/addnews.vue'
import reset from './views/reset.vue'
<<<<<<< HEAD
import login from './views/login.vue'
=======
import techPic from './views/techPic.vue'
>>>>>>> 1c69586bef580f1be2d18659b8b32b1873a7d1d9
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
<<<<<<< HEAD
	'/homepage': {
=======
	'/techPic': {
        component: techPic
    },
    '/homepage': {
>>>>>>> 1c69586bef580f1be2d18659b8b32b1873a7d1d9
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
<<<<<<< HEAD
    },
    '/login': {
        component: login
    }
})
router.redirect({
  '*': 'homepage'
=======
    }
    
})
router.redirect({
  '*': '/homepage'
>>>>>>> 1c69586bef580f1be2d18659b8b32b1873a7d1d9
})

router.start(matchtool, '#app')