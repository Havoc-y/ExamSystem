<template>
  <div id="login">
    <div class="login_box">
      <div class="login_title">
        <h2>用户登录</h2>
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
      <div>
        <a href="">>>新用户？请先注册</a>
      </div>
      <div class="login_button">
        <el-button
          type="warning"
          @click="loginForm()"
        >登录</el-button>
      </div>
      <div>
        <a href="">>>忘记密码？</a>
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
        const result = await this.$http.get('/users/login', this.userlist)
        console.log(result)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  text-align: right;
  height: 100%;
  .login_title {
    text-align: center;
    color: #e6a23c;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: rgba($color: #fff, $alpha: 0.8);
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    box-sizing: border-box;
  }
  .el-button {
    width: 100%;
  }
}
</style>
