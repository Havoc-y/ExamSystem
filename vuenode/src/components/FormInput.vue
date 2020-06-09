<template>
  <el-form-item :prop="inputrules">
    <el-input
      :placeholder="inputlable"
      :prefix-icon="inputicon"
      @blur="sendInfo()"
      v-model="info"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      info: ''
    }
  },
  methods: {
    // 将input输入的数据传给Login中的form里的对象
    sendInfo () {
      this.$emit('loginevent', this.info)
    }
  },
  props: ['inputlable', 'inputicon', 'inputrules']
}
</script>
