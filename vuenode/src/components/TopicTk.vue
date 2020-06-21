<template>
  <el-form :model="topicTk">
    <el-form-item label="题目">
      <el-input
        type="textarea"
        resize="none"
        autocomplete="off"
        v-model="topicTk.tpname"
      ></el-input>
    </el-form-item>
    <el-form-item label="答案">
      <el-input
        type="textarea"
        resize="none"
        autocomplete="off"
        v-model="topicTk.tpAnswer"
      ></el-input>
    </el-form-item>
    <el-form-item label="解析">
      <el-input
        type="textarea"
        resize="none"
        autocomplete="off"
        v-model="topicTk.tpAnalysis"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      topicTk: {
        tpid: 0,
        tpname: '',
        tpAnswer: '',
        tpAnalysis: ''
      }
    }
  }
}
</script>
