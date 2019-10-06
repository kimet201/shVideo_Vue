<template>
  <el-container>
    <el-aside>
    <Aside />
    </el-aside>
    <el-main>
      <div class="home">
        <h1>首页</h1>
        <img alt="Vue logo" src="../assets/logo.png" />

        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <button v-on:click="listVideos()">视频列表</button>
        <br />
        <button v-on:click="detailVideo()">视频详情</button>
        <br />
        {{videos}},
        <br />
        {{video}}
      </div>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "@/components/NavBar.vue";
import Aside from "@/components/Aside.vue";
import * as API from "@/api/video/videoAPI.js";

export default {
  name: "home",
  data() {
    return {
      videos: [],
      video: {}
    };
  },
  components: {
    HelloWorld,
    NavBar,
    Aside
  },
  methods: {
    listVideos: function() {
      console.log("调用了listVideos方法");
      API.listVideos().then(res => {
        this.videos = res.data;
      });
    },
    detailVideo: function() {
      console.log("调用了detailVideo方法");
      API.detailVideo(2).then(res => {
        this.video = res.data;
      });
    }
  }
};
</script>
