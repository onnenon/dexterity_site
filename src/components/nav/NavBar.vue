<template>
  <div class="flex justify-center">
    <div class="flex flex-auto flex-row justify-between max-w-screen-xl p-6">
      <router-link to="/" class="link">Dexterity</router-link>
      <NavLinks />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLinks from './NavLinks.vue'
export default defineComponent({
  name: 'navBar',
  components: { NavLinks },
})
</script>

<style scoped>
.link {
  @apply font-bold;
}
</style>
