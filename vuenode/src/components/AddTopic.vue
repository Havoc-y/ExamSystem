<template>
  <el-form :model="topicAllList">
    <el-form-item label="试卷名字">
      <el-input
        autocomplete="off"
        v-model="topicAllList.topicname"
      ></el-input>
    </el-form-item>
    <el-form-item label="试卷类型">
      <el-input
        autocomplete="off"
        v-model="topicAllList.topictype"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data () {
    return {
      topicAllList: {
        topicid: 0,
        topicname: '',
        topictype: ''
      }
    }
  }
}
</script>
