// srv/router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import ContactView from "@/views/ContactView.vue";
import InvoiceListView from "@/views/InvoiceListView.vue";
import InvoiceDetailView from "@/views/InvoiceDetailView.vue";
import InvoiceFormView from "@/views/InvoiceFormView.vue";
import TaxpayerFormView from "@/views/TaxpayerFormView.vue";
import TestView from "@/views/TestView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      //home
    {
      name: 'home',
      path: '/',
      component: HomeView,
      meta:{  title: "Főoldal" }
    },
      //login
    {
      name: 'login',
      path: '/login',
      component: LoginView,
      meta:{  title: "Bejelentkezés" }
    },
      //register
    {
      name: 'register',
      path: '/register',
      component: RegisterView,
      meta:{  title: "Regisztráció" }
    },
      //contact
    {
      name: 'contact',
      path: '/contact',
      component: ContactView,
      meta:{  title: "Kapcsolat" }
    },
     //InvoiceListView
    {
      name: 'list',
      path: '/list',
      component: InvoiceListView,
      meta:{  title: "Számlalista" }
    },
    //InvoiceDetailView (itemview)
    {
      name: 'detail',
      path: '/detail',
      component: InvoiceDetailView,
      meta:{  title: "SzámlalRészletek" }
    },
    //InvoiceFormView
    {
      name: 'letrehoz',
      path: '/letrehoz',
      component: InvoiceFormView,
      meta:{  title: "Új Számla létrehozása" }
    },
    //TaxpayerFormView
    {
      name: 'adozo',
      path: '/adozo',
      component: TaxpayerFormView,
      meta:{  title: "Új Partner létrehozása" }
    },
    //Test
    {
      name: 'test',
      path: '/test',
      component: TestView,
      meta:{  title: "Tesztelés"}
    }
  ]
})
router.beforeEach((to,from,next)=>{
  document.title=`${to.meta.title} - VeeApp`;
  next();
})
export default router
