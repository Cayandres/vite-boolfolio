import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import Contacts from './pages/Contacts.vue'
import Error404 from './pages/Error404.vue'
import About from './pages/About.vue'
import Blog from './pages/Blog.vue'
import Detail from './pages/Detail.vue'





const router = createRouter({

  history: createWebHistory(),
  linkExactActiveClass: 'active',

  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contatti',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/chi-siamo',
      name: 'about',
      component: About
    },
    {
      path: '/Blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/dettaglio-progetto/:slug',
      name: 'detail',
      component: Detail
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]


})

export{ router }