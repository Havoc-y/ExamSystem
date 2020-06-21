import Vue from 'vue'
import axios from 'axios'

var http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

// 全局捕获错误信息
http.interceptors.response.use(res => {
  return res
}, err => {
  console.log(err.response.data.meta.msg)
  if (err.response.data.meta.msg) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.meta.msg
    })
  }
  return Promise.reject(err)
})

export default http
