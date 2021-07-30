<template>
  <div class="z-40 bg-brand sm:bg-gray-100 top-0 left-0 w-full py-4 border-doble border-b-4 border-brand">
    <div class=" max-w-6xl mx-auto inset-x-0 px-10">
      <div class="flex flex-1 items-center justify-between ">
        <span class="text-white sm:text-gray-700 inline-block text-3xl">MyAccount</span>
        <div v-if="$auth.loggedIn">
          {{ $auth.user.email }}
          <button>Logout</button>
        </div>
        <div v-else>
          <nuxt-link to="/login">Login</nuxt-link>
          <nuxt-link to="/register">Register</nuxt-link>
          <div>
            {{currentUser.name}}
          </div>
          <button @click="logoutUser">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data () {
    return {
      showMenu: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    '$route' (to, from) {
      this.showMenu = false
    }
  },
  methods: {
    toggleShowMenu () {
      this.showMenu = !this.showMenu
    },
    logoutUser() {
      this.$store.dispatch('logoutUser')
    }
  }
}
</script>
