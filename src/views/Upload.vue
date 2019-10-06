<template>
  <el-container>
    <el-aside>
      <Aside />
    </el-aside>
    <el-main>
      <div class="upload">
        <h1>投稿</h1>
        <el-form
          ref="form"
          :model="form"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="视频标题" prop="video_title">
            <el-input v-model="form.video_title"></el-input>
          </el-form-item>
        
          <el-form-item label="视频简介" prop="video_info">
            <el-input type="textarea" v-model="form.video_info"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="uploadV(ruleForm)">确认投稿</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>

import Aside from "@/components/Aside.vue";
import * as API from "@/api/video/videoAPI.js";

export default {
  name: "upload",
  data() {
    return {
      form: {
        video_title: "",
        video_info: ""
      }
    }
  },
  components: {
    Aside
  },
  methods: {
    uploadV: function(){
        console.log("创建视频")
        API.createVideo(this.form).then((res=>{
          console.log(res)
        }))
    }
  }
};
</script>
