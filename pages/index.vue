<template>
  <div>
    <h1 class="text-5xl mb-5 font-bold">All videos</h1>
    <div v-for="video in videos" :key="video.name">
      {{ video.name }}
      <!-- <nuxt-link :to="`/videos/${video.id}`">{{ video.name}}</nuxt-link> -->
      <VideoItem :video="video" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VideoItem from '../components/VideoItem'
export default {

  async fetch({store}) {
    await store.dispatch('loadAllVideos')
  },
  computed: {
    ...mapState(['videos'])
  },
  components: {
     VideoItem
  }
}
</script>
