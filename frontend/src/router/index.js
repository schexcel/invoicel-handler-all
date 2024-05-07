// srv/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title: "Főoldal"
      }
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('@/views/LoginView.vue'),
      meta:{
        title: "Bejelentkezés"
      }
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/views/RegisterView.vue'),
      meta:{
        title: "Regisztráció"
      }
    },
      //contact
    {
      path: '/contact',
      name: 'contact',
      component: ()=>import('@/views/ContactView.vue'),
      meta:{
        title: "Kapcsolat"
      }
    },
    //InvoiceListView
    {
      path: '/list',
      name: 'list',
      component: ()=>import('@/views/InvoiceListView.vue'),
      meta:{
        title: "Számlalista"
      }
    },
    //InvoiceDetailView
    {
      path: '/detail',
      name: 'detail',
      component: ()=>import('@/views/InvoiceDetailView.vue'),
      meta:{
        title: "SzámlalRészletek"
      }
    },
    //InvoiceFormView
    {
      path: '/letrehoz',
      name: 'letrehoz',
      component: ()=>import('@/views/InvoiceFormView.vue'),
      meta:{
        title: "Új Számla létrehozása"
      }
    },
    //TaxpayerFormView
    {
      path: '/adozo',
      name: 'adozo',
      component: ()=>import('@/views/TaxpayerFormView.vue'),
      meta:{
        title: "Új Partner létrehozása"
      }
    }
  ]
})
router.beforeEach((to,from,next)=>{
  document.title=`${to.meta.title} - VeeApp`;
  next();
})
export default router
