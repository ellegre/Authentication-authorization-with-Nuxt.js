<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  head() {
    return {
      title: '',
      titleTemplate: `%s ${this.video.name} - Nuxt.js`
    }
  },
  async asyncData({$axios, params, store}) {
    const video = await $axios.$get(`/videos/${params.id}`)
    store.commit('SET_CURRENT_VIDEO', video)
  },
  computed: {
   ...mapState({
      video: 'currentVideo'
    })
  }
}
</script>
