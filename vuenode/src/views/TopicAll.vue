<template>
  <div id="topicall">
    <div id="topicalllist">
      <topic
        v-for="(data,index) in topiclist"
        :key="index"
      >
        <h2>试卷名:{{data.topicname}}</h2>
      </topic>
    </div>
    <div id="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="8"
        :page-size="8"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import topic from '../components/Topic'
export default {
  created () {
    this.getPagename()
  },
  data () {
    return {
      pagenum: 1,
      topiclist: ''
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.pagenum = val
      this.getPagename()
    },
    async getPagename () {
      const topicList = await this.$http.get('/topicall', { params: { pagenum: this.pagenum } })
      this.topiclist = topicList.data.list
    }
  },
  components: {
    topic: topic
  }
}
</script>

<style lang="scss" scoped>
#topicalllist {
  display: flex;
  flex-wrap: wrap;
  margin-left: 70px;
}
#pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
}
</style>
