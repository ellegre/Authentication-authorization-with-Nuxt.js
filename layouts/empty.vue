<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
    <h1 class="text-center font-bold sm:text-2xl">Welcome to My account</h1>
      <p class="text-center text-gray-500">
      No account?
      <nuxt-link to="/register" class="text-indigo-500 hover:text-indigo-700"> Register now</nuxt-link>
    </p>
    <LoginForm />
    <Nuxt />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
