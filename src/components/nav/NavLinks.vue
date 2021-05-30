<template>
  <div class="items-right">
    <router-link
      to="/about"
      class="rouded bg-blue-900 text-white bold align-middle"
      >About</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'navLinks',
})
</script>

<style scoped></style>
