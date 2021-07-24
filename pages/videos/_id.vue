<template>
  <div>
    <nuxt-child v-bind:video="video" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          name: "Very first",
        },
        {
          id: 2,
          name: "Brilliant day",
        },
        {
          id: 3,
          name: "Sun in the water",
        }
      ]
    }
  },
  computed: {
    video() {
      return this.videos.find(v => v.id.toString() === this.$route.params.id.toString())
    }
  }
}
</script>

<style>

</style>
