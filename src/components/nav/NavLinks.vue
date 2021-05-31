<template>
  <div class="flex flex-col sm:flex-row justify-center items-center flex-wrap">
    <router-link to="/" class="link">Home</router-link>
    <router-link to="/roster" class="link">Roster</router-link>
    <router-link to="/sales" class="link">Sales</router-link>
    <router-link to="/recruitment" class="link">Recruitment</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'navLinks',
})
</script>

<style scoped>
.link {
  @apply font-bold hover:text-gray-500 font-roboto text-xl select-none py-2 px-3;
}
</style>
