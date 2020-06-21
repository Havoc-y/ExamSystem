<template>
  <div id="topicall">
    <div id="topicalllist">
      <topic
        v-for="(data,index) in topiclist"
        :key="index"
        @click.native="handlefind(index)"
      >
        <h2>{{data.topicname}}</h2>
      </topic>
      <el-dialog
        :title="topicinfoName"
        :visible.sync="topicinfo"
      >
        <topicinfo>
          <div
            v-for="data in topicInfoTimu"
            :key="data.tpid"
            class="findTopic"
          >
            <p>题目</p>
            <p>{{data.tpname}}</p>
            <p>选项</p>
            <p>A：{{data.tpA}},B：{{data.tpB}},C：{{data.tpC}},D：{{data.tpD}}</p>
            <p>答案</p>
            <p>{{data.tpAnswer}}</p>
            <p>解析</p>
            <p>{{data.tpAnalysis}}</p>
          </div>
        </topicinfo>
      </el-dialog>
    </div>
    <div id="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="pageinfo.total"
        :page-size="8"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import topic from '../components/Topic'
import topicinfo from '../components/TopicInfo'
export default {
  created () {
    this.getPagename()
  },
  data () {
    return {
      pageinfo: {
        pagenum: '1',
        total: 8
      },
      topiclist: '',
      topicinfo: false,
      topicInfoTimu: '',
      topicinfoName: ''
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.pageinfo.pagenum = val
      this.getPagename()
    },
    async getPagename () {
      const topicList = await this.$http.get('/findTopicall', { params: { pagenum: this.pageinfo.pagenum } })
      this.topiclist = topicList.data.list
      this.pageinfo.total = topicList.data.total
    },
    async handlefind (index) {
      const result = await this.$http.get('/findTopicsByTopicid', { params: { topicid: this.topiclist[index].topicid } })
      this.topicInfoTimu = result.data.list
      this.topicinfoName = this.topiclist[index].topicname
      this.topicinfo = true
      console.log(this.topicInfoTimu)
    }
  },
  components: {
    topic: topic,
    topicinfo: topicinfo
  }
}
</script>

<style lang="scss" scoped>
#topicall {
  margin-top: 100px;
}
#topicalllist {
  display: flex;
  flex-wrap: wrap;
  margin-left: 70px;
  h2 {
    line-height: 150px;
    font-size: 18px;
  }
  .findTopic {
    width: 400px;
    margin: 0 auto;
    border: 1px solid orange;
    border-radius: 3px;
    margin-bottom: 5px;
  }
}
#pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  margin-top: 15px;
}
</style>
