import Vue from 'vue'
import Router from 'vue-router'
// Hиже поделючаем все наши компоненты
import Home from '@/components/Home.vue' /*@ - означает, что 
мы будем искать в папке src */
import Ad from '@/components/Ads/Ad.vue'
import AdList from '@/components/Ads/AdList.vue' //Импортируем следубщие компоненты
import NewAd from '@/components/Ads/NewAd.vue'
import Login from '@/components/Auth/Login.vue'
import Registration from '@/components/Auth/Registration.vue'
import Orders from '@/components/User/Orders.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
    },
    {
      path: '/ad/:id',
      name: 'ad',
      component: Ad,
    },
    {
      path: '/list',
      name: 'list',
      component: AdList,
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration,
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
    },
  ],
  //mode: 'history' // Это нужно, чтобы в браузере не отображался #
})
