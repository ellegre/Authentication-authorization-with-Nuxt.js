<template>
  <div>
    <h1 class="italic text-2xl mb-5">List of video</h1>
    <div v-for="video in videos" :key="video.id">
      <nuxt-link :to="`/videos/${video.id}`">{{ video.name }}</nuxt-link>
    </div>
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
  }

}
</script>

<style>

</style>
