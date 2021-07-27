<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '',
      titleTemplate: `%s ${this.video.name} - Nuxt.js`
    }
  },
  async asyncData({$axios, params}) {
    const video = await $axios.$get(`/videos/${params.id}`)
    return { video }
  }
}
</script>
