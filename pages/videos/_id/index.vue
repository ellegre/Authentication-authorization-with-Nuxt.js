<template>
  <div>
    <h1>We are at the dynamic page {{ video.name }}</h1>
    <nuxt-link :to="`/videos/${video.id}/edit`">
      <button>edit</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['video'],
  head: {
    title: `Watch`
  }
}
</script>

<style>

</style>
