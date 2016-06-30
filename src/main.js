import Vue from 'vue'
import matchtool from './matchtool.vue'
import homepage from './views/homepage.vue'
import createEvent from './views/createEvent.vue'
import contestant from './views/contestant.vue'
import newslist from './views/news.vue'
import addnews from './views/addnews.vue'
import reset from './views/reset.vue'
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
    }
})
router.redirect({
  '*': 'homepage'
})

router.start(matchtool, '#app')