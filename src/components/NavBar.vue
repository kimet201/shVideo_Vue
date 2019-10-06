<template>
  
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
    >
    <el-row gutter="10px" type="flex" justify="start">
      <el-col span="12">
        <el-row>
          <el-col span="12">
            <el-menu-item index="/" class>首页</el-menu-item>
            <!-- 导航栏tab标签 -->
            <!-- <Tabs /> -->
          </el-col>
          <el-col span="12">
            <!-- 搜素框 -->
            <el-menu-item class="nav_item_search">
              <el-input placeholder="请输入内容" v-model="input">
                <i slot="suffix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-menu-item>
          </el-col>
        </el-row>
      </el-col>

      <el-col span="12">
        <el-row type="flex" justify="end">
          <el-col span="6">
            <el-menu-item index="4" class="nav_item_pading">
              <el-link type="primary">视频列表</el-link>
            </el-menu-item>
          </el-col>

          <el-col span="4">
            <!-- 下拉框 -->
            <el-submenu index="2" class="nav_item_pading">
              <template slot="title">下拉框</template>
              <el-menu-item index="2-1">
                <el-link type="primary">视频列表</el-link>
              </el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-col>
          <el-col span="4">
            <el-menu-item index="/upload" class="nav_item_pading"><span class="el-icon-upload2"></span>投稿</el-menu-item>
          </el-col>
        </el-row>
      </el-col>
      </el-row>
    </el-menu>
  
</template>

<script lang="ts">
import Tabs from "@/components/Tabs.vue";

export default {
  data() {
    return {
      input: ""
    };
  },
  components: {
    Tabs
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
