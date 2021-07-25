<template>
  <div>
    <nuxt-child :video="video" />
  </div>
</template>

<script>
export default {
  // async asyncData ({ $axios, params }) {
  //   const response = await $axios.get(`/videos/${params.id}`)
  //   const video = response.data
  //   return {
  //     video
  //   }
  // },
  computed: {
    video() {
      return this.videos.find(v => v.id.toString() === this.$route.params.id.toString())
    }
  }
}
</script>

<style>

</style>
