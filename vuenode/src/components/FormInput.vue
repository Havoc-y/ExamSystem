<template>
  <el-form-item
    :prop="inputrules"
    :label="itemlable"
  >
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
  props: ['inputlable', 'inputicon', 'inputrules', 'itemlable']
}
</script>
