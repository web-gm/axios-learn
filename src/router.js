import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/2-2',
      name:'axios请求方法',
      component:()=> import('./views/2-2.vue')
    },
    {
      path:'/2-3',
      name:'axios并发请求',
      component:()=> import('./views/2-3.vue')
    },
    {
      path:'/demoList',
      name:'联系人列表样例',
      component:()=> import('./views/DemoContact.vue')
    },
    {
      path:'/contactList',
      name:'联系人列表',
      component:()=> import('./views/ContactList.vue')
    }
  ]
})
