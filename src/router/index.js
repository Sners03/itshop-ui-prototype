import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/LoginView.vue'
import WarenkorbView from '../views/WarenkorbView.vue'
import MyAccountView from '../views/MyAccountView.vue'
import KomplettsystemView from '../views/KomplettsystemView.vue'
import VerbrauchssystemView from '../views/VerbrauchssystemView.vue'
import ZubehoerView from '../views/ZubehoerView.vue'
import ProductView from "../views/ProductView.vue"
import EmployeeView from "../views/EmployeeView.vue"

import ContractView from "../views/ContractView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/shop/komplettsysteme',
      name: 'fullsystem',
      component: KomplettsystemView
    },
    {
      path: '/shop/verbrauchssystem',
      name: 'usesystem',
      component: VerbrauchssystemView
    },
    {
      path: '/shop/zubehoer',
      name: 'zubehoer',
      component: ZubehoerView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/warenkorb',
      name: 'warenkorb',
      component: WarenkorbView
    },
    {
      path: '/account',
      name: 'account',
      component: MyAccountView
    }
    ,
    {
      path: '/employee',
      name: 'employee',
      component: EmployeeView
    }
    ,
    {
      path: '/contract',
      name: 'contract',
      component: ContractView
    }
    ,
    {
      path: "/shop/:name",
      name: "product",
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ProductView,
    },
  ]
})

export default router
