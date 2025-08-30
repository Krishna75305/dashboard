// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../Login.vue'
import Landing from '../LandingPage.vue'
import Dashboard from '../Dashboard.vue'

// ✅ Define routes
const routes = [
  { path: '/', redirect: '/landing' },
  { path: '/login', component: Login },
  { path: '/landing', component: Landing },
  { 
    path: '/dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true }   // 👈 only for logged-in users
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("auth") === "true"

  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login")   // 👈 redirect to login if not logged in
  } else {
    next()
  }
})

export default router
