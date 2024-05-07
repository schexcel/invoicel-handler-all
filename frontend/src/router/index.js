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
    }
  ]
})
router.beforeEach((to,from,next)=>{
  document.title=`${to.meta.title} - VeeApp`;
  next();
})
export default router
