import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login';
import Home from '@/pages/home/home'
import Commend from '@/pages/home/commend';
import Rank from '@/pages/home/rank';
import Singer from '@/pages/home/singer';
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:'home',
      component:Home,
      children: [  //这里就是二级路由的配置
        {
          path: '/',
          name: 'Commend',
          component: Commend
        },
        {
          path: '/home/commend',
          name: 'Commend',
          component: Commend
        },
        {
          path: '/home/rank',
          name: 'Rank',
          component: Rank
        },
        {
          path: '/home/singer',
          name: 'Singer',
          component: Singer
        }
      ]
    }
  ]
})
