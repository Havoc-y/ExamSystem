<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-row>
        <el-col :span="6">
          <div class="grid-content bg-purple">1</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">3</div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">4</div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.el-header {
  background-color: aqua;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.el-col {
  div {
    width: 280px;
    height: 150px;
    background-color: aqua;
  }
}
</style>
