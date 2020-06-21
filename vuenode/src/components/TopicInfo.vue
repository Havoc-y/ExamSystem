<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topicinfo: ''
    }
  },
  methods: {
    handleDelete () {
      console.log(this.$parent.data)
    }
  }
}
</script>
