<template>
  <el-container>
    <el-header>
      <div class="hdicon">
        <span class="icon"></span>
        <span class="icontitle">啊啊啊老师</span>
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
          <li
            v-for="(data,index) in itemlist"
            :key="index"
            @click="handleClickLi(index)"
          >
            {{data}}
          </li>
        </ul>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      header: '试题库',
      itemlist: ['试题库', '试题列表', '学生错题情况']
    }
  },
  methods: {
    handleClickLi: function (index) {
      this.header = this.itemlist[index]
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
        transition: background-color 0.5s;
        -webkit-transition: background-color 0.5s;
        cursor: pointer;
      }
      li:hover {
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
