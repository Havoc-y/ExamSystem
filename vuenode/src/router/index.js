import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Regist from '../views/Regist'
import ForgetPassword from '../views/ForgetPassword'
import Teacher from '../views/Teacher'
import Student from '../views/Student'
import TopicAll from '../views/TopicAll'
import TopicList from '../views/TopicList'
import StudentWrong from '../views/StudentWrong'

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
    component: Teacher,
    children: [
      {
        path: '/topicall',
        name: 'topicall',
        component: TopicAll
      },
      {
        path: '/topiclist',
        name: 'topiclist',
        component: TopicList
      },
      {
        path: '/studentwrong',
        name: 'studentwrong',
        component: StudentWrong
      }
    ]
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
