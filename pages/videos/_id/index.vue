<template>
  <div>
    <h1>We are at the dynamic page {{ video.name }}</h1>
    <nuxt-link :to="`/videos/${video.id}/edit`">
      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">edit</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['video']
}
</script>

<style>

</style>
