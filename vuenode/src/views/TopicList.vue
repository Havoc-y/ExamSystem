<template>
  <div id="topicList">
    <div class="listButton">
      <el-button
        type="warning"
        @click="addTopic = true"
      >添加试卷</el-button>
      <el-dialog
        title="添加试卷"
        :visible.sync="addTopic"
      >
        <addtopic ref="TopicList"></addtopic>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="handleCancle()">取 消</el-button>
          <el-button
            type="primary"
            @click="handleAddTopic()"
          >确定添加</el-button>
        </div>
      </el-dialog>
      <el-dialog
        title="添加题目"
        :visible.sync="addtimu"
      >
        <addtimu ref="AddTimu"></addtimu>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button @click="addtimu = false">结束添加</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="listTable">
      <el-table
        :data="tableData"
        style="width: 80%"
      >
        <el-table-column
          prop="topicid"
          label="试卷id"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="topictype"
          label="试卷类型"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="topicname"
          label="试卷名"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="address"
          label="操作"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleFind(scope.$index, scope.row)"
            >查看</el-button>
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
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
import addtopic from '../components/AddTopic'
import addtimu from '../components/AddTimu'
import topicinfo from '../components/TopicInfo'
export default {
  created () { this.getPagename() },
  data () {
    return {
      // 试卷列表信息
      tableData: [],
      // 分页信息
      pageinfo: {
        pagenum: '1',
        total: 8
      },
      // 是否显示添加试卷提示框
      addTopic: false,
      // 是否显示添加题目提示框
      addtimu: false,
      // 获取试卷列表
      topicList: '',
      // 获取试卷名字
      topicinfoName: '',
      // 是否显示查看试卷信息提示框
      topicinfo: false,
      // 获取试卷中题目信息
      topicInfoTimu: ''
    }
  },
  methods: {
    // 监听页码改变
    handleCurrentChange (val) {
      this.pageinfo.pagenum = val
      this.getPagename()
    },
    // 处理分页页码
    async getPagename () {
      const topicList = await this.$http.get('/findTopicall', { params: { pagenum: this.pageinfo.pagenum } })
      this.tableData = topicList.data.list
      this.pageinfo.total = topicList.data.total
    },
    // 添加题目按钮
    async handleAddTopic () {
      this.topicList = this.$refs.TopicList.topicAllList
      this.addTopic = false
      this.addtimu = true
      const { data: res } = await this.$http.put('/createTopicAll', this.topicList)
      if (res.meta.status === 200) {
        console.log(res)
        this.$message.success(res.meta.msg)
      }
      this.$refs.TopicList.topicAllList = {
        topicid: 0,
        topicname: '',
        topictype: ''
      }
      this.getPagename()
    },
    // 取消按钮
    handleCancle () {
      this.addTopic = false
      this.$refs.TopicList.topicAllList = {
        topicid: 0,
        topicname: '',
        topictype: ''
      }
    },
    // 删除按钮
    async handleDelete (index, row) {
      console.log(row.topicid)
      const { data: result1 } = await this.$http.delete('/deleteTopicAllById', { data: { topicid: row.topicid } })
      const { data: result2 } = await this.$http.delete('/deleteTopic', { data: { topicid: row.topicid } })
      this.getPagename()
      if (result1.meta.status === 200 && result2.meta.status === 200) {
        this.$message.success(result1.meta.msg)
      }
      console.log(result1, result2)
    },
    // 处理查看按钮
    async handleFind (index, row) {
      this.topicinfoName = row.topicname
      this.topicinfo = true
      const result = await this.$http.get('/findTopicsByTopicid', { params: { topicid: row.topicid } })
      this.topicInfoTimu = result.data.list
      console.log(this.topicInfoTimu)
    }
  },
  components: {
    // 添加试卷组件
    addtopic: addtopic,
    // 添加题目组件
    addtimu: addtimu,
    // 查看试卷信息组件
    topicinfo: topicinfo
  }
}
</script>

<style lang="scss" scoped>
#topicList {
  margin-top: 20px;
  margin-left: 200px;
  .listTable {
    width: 90%;
    margin: 0 auto;
    .el-table {
      text-align: center;
    }
    .findTopic{
      width: 400px;
      margin: 0 auto;
      border: 1px solid orange;
      border-radius: 3px;
      margin-bottom: 5px;
    }
  }
  .listButton {
    margin-left: 5%;
    margin-bottom: 20px;
  }
  #pagination {
    margin-left: 32%;
  }
}
</style>
