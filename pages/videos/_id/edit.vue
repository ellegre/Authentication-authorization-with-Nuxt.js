<template>
  <div>
    <div class="font-bold">Editing {{ video.name }}</div>
    <nuxt-link :to="`/videos/${video.id}`">
      <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Go back</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['video'],
  head: {
    title: `Edit`
  }
}
</script>

<style>

</style>
