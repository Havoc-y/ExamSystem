<template>
  <div class="regist content">
    <div class="regit_title">
      <h1>用户注册</h1>
    </div>
    <el-form
      label-width="80px"
      ref="registRef"
      :model="registlist"
      :rules="rules"
    >
      <forminput
        inputlable="请输入用户名"
        itemlable="用户名"
        @loginevent="getUserName($event)"
        inputrules="username"
      ></forminput>
      <forminput
        inputlable="请输入密码"
        itemlable="密码"
        @loginevent="getPassword($event)"
        inputrules="password"
      ></forminput>
      <el-form-item label="身份">
        <el-radio-group v-model="registlist.identify">
          <el-radio :label=1>老师</el-radio>
          <el-radio :label=2>学生</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="regist_button">
      <el-button
        type="warning"
        @click="registForm()"
      >登录</el-button>
    </div>
  </div>
</template>

<script>
import forminput from '../components/FormInput'
export default {
  data () {
    return {
      registlist: {
        username: '',
        password: '',
        identify: ''
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
  methods: {
    getUserName: function (username) {
      this.registlist.username = username
    },
    getPassword: function (password) {
      this.registlist.password = password
    },
    registForm: function () {
      this.$refs.registRef.validate(async valid => {
        if (!valid) return
        const result = await this.$http.put('/regist', this.registlist)
        console.log(result)
      })
    }
  },
  components: {
    forminput: forminput
  }
}
</script>

<style lang="scss" scoped>
.regist {
  .el-button {
    width: 100%;
  }
}
</style>
