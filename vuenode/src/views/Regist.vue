<template>
  <div class="regist content">
    <div class="regit_title">
      <h1>用户注册</h1>
    </div>
    <el-form label-width="80px">
      <forminput
        inputlable="请输入用户名"
        itemlable="用户名"
      ></forminput>
      <forminput
        inputlable="请输入密码"
        itemlable="密码"
      ></forminput>
      <el-form-item label="身份">
        <el-radio-group>
          <el-radio label="老师"></el-radio>
          <el-radio label="学生"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <div class="regist_button">
      <el-button
        type="warning"
        @click="loginForm()"
      >登录</el-button>
    </div>
  </div>
</template>

<script>
import forminput from '../components/FormInput'
export default {
  components: {
    forminput: forminput
  }
}
</script>

<style lang="scss" scoped>
.regist {
  .el-button{
    width: 100%;
  }
}
</style>
