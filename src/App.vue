<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/nav/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: { NavBar },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  @apply text-gray-800 bg-gray-50;
}
</style>
