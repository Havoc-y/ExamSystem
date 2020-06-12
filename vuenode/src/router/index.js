import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Regist from '../views/Regist'
import ForgetPassword from '../views/ForgetPassword'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 根目录重定向到/login
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/forgetpassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
