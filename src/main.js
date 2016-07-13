import Vue from 'vue'
import matchtool from './matchtool.vue'
import homepage from './views/homepage.vue'
import createEvent from './views/createEvent.vue'
import editEvent from './views/editEvent.vue'
import contestant from './views/contestant.vue'
import newslist from './views/news.vue'
import addnews from './views/addnews.vue'
import reset from './views/reset.vue'
import techPic from './views/techPic.vue'
import beforeTech from './components/beforeTech.vue'
import beginingTech from './components/beginingTech.vue'
import login from './views/login.vue'
import newsEdit from './views/newsEdit.vue'
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
    '/techPic': {
        component: techPic,
        subRoutes: {
             '/': {
            component: beforeTech
          },
          '/beforeTech': {
            component: beforeTech
          },
          '/beginingTech': {
            component: beginingTech
          }
        }
    },
    '/homepage': {
        component: homepage
    },
    '/createEvent': {
        component: createEvent
    },
    '/editEvent': {
        component: editEvent
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
    },
    '/newsEdit': {
        component: newsEdit
    }
    
})
router.redirect({
  '*': '/login'
})

router.start(matchtool, '#app')