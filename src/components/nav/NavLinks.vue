<template>
  <div class="flex items-center">
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
  @apply font-bold pl-4 hover:text-gray-500 font-roboto text-xl;
}
</style>
