import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Regist from '../views/Regist'
import ForgetPassword from '../views/ForgetPassword'
import Teacher from '../views/Teacher'
import Student from '../views/Student'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 根目录重定向到/login
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/regist',
    name: 'regist',
    component: Regist
  },
  {
    path: '/forgetpassword',
    name: 'forgetPassword',
    component: ForgetPassword
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: Teacher
  },
  {
    path: '/student',
    name: 'student',
    component: Student
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
