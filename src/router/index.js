import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/homepage',
    children: [
      {
        path: 'homepage',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: '/information',
        name: 'Information',
        component: () => import('../views/Information.vue')
      },
      {
        path: '/maillist',
        name: 'MailList',
        component: () => import('../views/MailList.vue')
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('../views/Message.vue')
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('../views/Personal.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
