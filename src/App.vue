<template>
  <div class="flex flex-col min-h-screen">
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
}
html {
  @apply text-gray-800 bg-gray-50 font-titillium text-lg;
}
h1 h2 h3 {
  @apply font-roboto;
}
</style>
