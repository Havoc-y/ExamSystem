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
import TopicChoose from '../components/TopicChoose'
import TopicTk from '../components/TopicTk'

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
    redirect: '/teacher/topicall'
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: Teacher,
    children: [
      {
        path: '/teacher/topicall',
        name: 'topicall',
        component: TopicAll
      },
      {
        path: '/teacher/topiclist',
        redirect: '/teacher/topiclist/topicchoose'
      },
      {
        path: '/teacher/topiclist',
        name: 'topiclist',
        component: TopicList,
        children: [
          {
            path: '/teacher/topiclist/topicchoose',
            name: 'topicchoose',
            component: TopicChoose
          },
          {
            path: '/teacher/topiclist/topictk',
            name: 'topictk',
            component: TopicTk
          }
        ]
      },
      {
        path: '/teacher/studentwrong',
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
