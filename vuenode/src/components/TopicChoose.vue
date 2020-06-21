<template>
  <el-form
    ref="topicChoose"
    :model="topicChoose"
  >
    <el-form-item label="题目">
      <el-input
        type="textarea"
        autocomplete="off"
        v-model="topicChoose.tpname"
        resize="none"
      ></el-input>
    </el-form-item>
    <el-form-item label="选项A">
      <el-input
        autocomplete="off"
        v-model="topicChoose.tpA"
      ></el-input>
    </el-form-item>
    <el-form-item label="选项B">
      <el-input
        autocomplete="off"
        v-model="topicChoose.tpB"
      ></el-input>
    </el-form-item>
    <el-form-item label="选项C">
      <el-input
        autocomplete="off"
        v-model="topicChoose.tpC"
      ></el-input>
    </el-form-item>
    <el-form-item label="选项D">
      <el-input
        autocomplete="off"
        v-model="topicChoose.tpD"
      ></el-input>
    </el-form-item>
    <el-form-item label="答案">
      <el-input
        type="textarea"
        resize="none"
        autocomplete="off"
        v-model="topicChoose.tpAnswer"
      ></el-input>
    </el-form-item>
    <el-form-item label="解析">
      <el-input
        type="textarea"
        resize="none"
        autocomplete="off"
        v-model="topicChoose.tpAnalysis"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      topicChoose: {
        tpid: 0,
        tpname: '',
        tpA: '',
        tpB: '',
        tpC: '',
        tpD: '',
        tpAnswer: '',
        tpAnalysis: ''
      }
    }
  }
}
</script>
