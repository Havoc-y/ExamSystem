<template>
  <el-container>
    <el-aside width="200px">
      <ul>
        <router-link
          v-for="(data,index) in itemlist"
          :class="{clickli:changeli==index}"
          :to="{name:data.link}"
          :key="index"
          @click.native="handleClickLi(index)"
          tag="li"
        >{{data.name}}</router-link>
      </ul>
    </el-aside>
    <el-main>
      <router-view ref="addtimu">
      </router-view>
      <el-button
        type="primary"
        @click="handleAddContinue()"
      >确认添加</el-button>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      itemlist: [
        {
          name: '选择题',
          link: 'topicchoose'
        },
        {
          name: '填空题',
          link: 'topictk'
        }
      ],
      changeli: 0,
      topicInfo: {}
    }
  },
  methods: {
    handleClickLi (index) {
      console.log(index)
      this.header = this.itemlist[index].name
      this.changeli = index
    },
    async handleAddContinue () {
      this.topicInfo = this.$refs.addtimu.topicChoose || this.$refs.addtimu.topicTk
      const allTP = await this.$http.get('/findTopicAllMaxId')
      this.topicInfo.topicid = allTP.data.total
      console.log(this.topicInfo)
      const { data: res } = await this.$http.put('/addTopic', this.topicInfo)
      if (res.meta.status === 200) {
        console.log(res)
        this.$message.success(res.meta.msg)
      }
      this.$refs.addtimu.topicChoose = {
        tpid: 0,
        tpname: '',
        tpA: '',
        tpB: '',
        tpC: '',
        tpD: '',
        tpAnswer: '',
        tpAnalysis: ''
      }
      this.$refs.addtimu.topicTk = {
        tpid: 0,
        tpname: '',
        tpAnswer: '',
        tpAnalysis: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  width: 200px;
  ul {
    height: 100%;
    text-align: center;
    li {
      height: 50px;
      line-height: 50px;
      transition: background-color 0.5s, color 0.3s, color 0.3s;
      -webkit-transition: background-color 0.5s, color 0.3s, color 0.3s;
      cursor: pointer;
    }
    li:hover {
      color: #e6a23c;
      background-color: rgba($color: #dcd3b2, $alpha: 0.8);
    }
  }
}
.el-main {
  padding: 0;
  margin: 0;
  .el-button {
    margin-left: 350px;
  }
}
.clickli {
  color: #e6a23c;
  background-color: rgba($color: #dcd3b2, $alpha: 0.8);
}
</style>
