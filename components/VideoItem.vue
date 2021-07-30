<template>
  <div>
    {{ video.name }}
  </div>
    <!-- <nuxt-link :to="`/videos/${video.id}`"> -->

  <!-- </nuxt-link> -->
</template>
<script>
export default {
  props: ['video']
}
</script>
