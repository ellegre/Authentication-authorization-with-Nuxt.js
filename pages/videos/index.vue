<template>
  <div>
    <h1 class="italic text-2xl mb-5">List of video</h1>
    <div v-for="video in $store.state.videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.name}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Videos'
    }
  },
  async fetch({$axios, store}) {
    const videos = await $axios.$get('/videos')
    store.commit('SET_VIDEOS', videos)
  }

}
</script>

