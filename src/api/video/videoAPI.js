import axios from 'axios'

// 视频列表
const listVideos = () => axios.get('/api/video/listVideos').then(res => res.data)
// 视频详情
const detailVideo = id => axios.get(`/api/video/showVideo/${id}`).then(res => res.data)
// 视频投稿
const createVideo = form => axios.post('/api/video/createVideo', form).then(res => res.data)
//测试
const testC = () => axios.post('/test/c').then(res => res.data)
export {
  listVideos,
  detailVideo,
  createVideo,
  testC
}
