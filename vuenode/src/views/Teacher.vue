<template>
  <el-container>
    <el-header>
      <div class="hdicon">
        <span class="icon"></span>
        <span
          class="icontitle"
          :v-model="userid"
        >{{userid}}老师</span>
      </div>
      <div class="hdtitle">
        <span :v-model="header">{{header}}</span>
      </div>
      <div class="hdedit">
        <el-button
          type="info"
          @click="handleButtonEdit()"
        >退出</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <ul>
          <router-link
            to="teacher/topicall"
            v-for="(data,index) in itemlist"
            :key="index"
            @click="handleClickLi(index)"
            tag="li"
          >{{data}}</router-link>
        </ul>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  mounted () {
    var userInfo = JSON.parse(sessionStorage.getItem('list'))
    this.userid = userInfo.username
  },
  data () {
    return {
      pathname: '',
      userid: '',
      header: '试题库',
      itemlist: ['试题库', '试题列表', '学生错题情况'],
      pathlist: ['topicall', 'topiclist', 'studentwrong']
    }
  },
  methods: {
    handleClickLi: function (index) {
      this.header = this.itemlist[index]
      this.path = this.pathlist[index]
    },
    handleButtonEdit: function () {
      window.sessionStorage.clear()
      this.$router.push('login')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  a {
    color: black;
    font-size: 15px;
  }
  .el-header {
    padding: 0;
    margin: 0;
    display: flex;
    line-height: 60px;
    background-color: rgba($color: #c7b370, $alpha: 0.5);
    div {
      display: inline-block;
    }
    .hdicon {
      height: 60px;
      width: 200px;
      display: flex;
      .icon {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 5px 10px 0 20px;
        background-color: cadetblue;
      }
      .icontitle {
        width: 100px;
      }
    }
    .hdtitle {
      margin: 0 auto;
    }
    .hdedit {
      margin-right: 20px;
    }
  }
  .el-aside {
    width: 200px;
    background-color: rgba($color: #dcd3b2, $alpha: 0.5);
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
  }
}
</style>
