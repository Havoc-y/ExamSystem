<template>
  <div id="login">
    <div class="login_box content">
      <div class="login_title">
        <h1>用户登录</h1>
      </div>
      <el-form
        ref="loginRef"
        :model="userlist"
        :rules="rules"
      >
        <forminput
          inputlable="请输入用户名"
          inputicon="iconfont icon-yonghuming"
          inputrules="username"
          @loginevent="getUserName($event)"
        ></forminput>
        <forminput
          inputlable="请输入密码"
          inputicon="iconfont icon-mima3"
          inputrules="password"
          @loginevent="getPassword($event)"
        ></forminput>
      </el-form>
      <div class="button_foot">
        <div>
          <router-link to="/regist">>>新用户？请先注册</router-link>
        </div>
        <div class="login_button">
          <el-button
            type="warning"
            @click="loginForm()"
          >登录</el-button>
        </div>
        <div>
          <router-link to="/forgetpassword">>>忘记密码？</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import forminput from '../components/FormInput'
export default {
  data () {
    return {
      // 用户列表
      userlist: {
        username: '',
        password: ''
      },
      // 表单验证规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '长度在 6 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    // 输入框
    forminput: forminput
  },
  methods: {
    // 获取用户名
    getUserName (username) {
      this.userlist.username = username
    },
    // 获取用户密码
    getPassword (password) {
      this.userlist.password = password
    },
    // 登录按钮事件
    loginForm () {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('/login', this.userlist)
        if (res.meta.status === 200) {
          console.log(res)
          this.$message.success(res.meta.msg)
          window.sessionStorage.setItem('token', res.data.token)
          if (res.data.list.identify === 1) {
            this.$router.push('/teacher')
          } else {
            this.$router.push('/student')
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  height: 100%;
  .login_title {
    text-align: center;
    color: #e6a23c;
  }
  .button_foot {
    text-align: right;
    .el-button {
      width: 100%;
    }
  }
}
</style>
