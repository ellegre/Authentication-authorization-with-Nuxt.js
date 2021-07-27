<template>
  <div>
    <h1 class="italic text-2xl mb-5">List of video</h1>
    <div v-for="video in videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.name}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contacts'
    }
  },
  async asyncData({$axios}) {
    const videos = await $axios.$get('/videos')
    return {videos}
  }

}
</script>

