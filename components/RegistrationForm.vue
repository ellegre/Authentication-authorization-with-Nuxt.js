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
        <input id="password" class="input" type="password" placeholder="******************">
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center mb-5">
        <input
          id="terms-and-privacy"
          name="terms-and-privacy"
          type="checkbox"
          class="rounded border-gray-300 text-indigo-500 focus:ring-indigo-500" />
        <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
        >I agree to the
        <a href="#" class="text-indigo-500">Terms</a>
        and
        <a href="#" class="text-indigo-500">Privacy Policy</a>
        </label>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Register
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2021 ellegre. All rights reserved.
    </p>
  </div>
</template>
