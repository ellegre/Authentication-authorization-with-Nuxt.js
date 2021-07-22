<template>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input id="username"  class="input" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input id="password" class="input" type="password" placeholder="*************">
        <p class="text-red-500 text-xs italic">Please enter a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Login
        </button>
      </div>

    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2021 ellegre. All rights reserved.
    </p>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
// export default {
//   computed: mapState(['users'])

// }
// </script>
