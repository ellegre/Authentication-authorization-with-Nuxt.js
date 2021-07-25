<template>
  <div>
    <h1 class="italic text-2xl mb-5">List of video</h1>
    <div v-for="video in videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    try {
      const api = 'http://localhost:3000/videos'
      const videos = await axios.get(api).then((res) => {
        return res.data
      })
      return { videos }
    } catch (error) {
      return { error }
    }
  },
    data() {
    return {
      videos: []
    }
  }
}
</script>

