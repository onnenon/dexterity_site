<template>
  <div
    class="
      flex flex-col
      min-h-screen
      text-gray-800
      dark:text-gray-50
      bg-gray-50
      dark:bg-gray-900
    "
  >
    <NavBar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/nav/NavBar.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: { NavBar, Footer },
})
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 350px;
}
html {
  @apply font-titillium text-lg;
}
h1 h2 h3 {
  @apply font-roboto;
}
</style>
