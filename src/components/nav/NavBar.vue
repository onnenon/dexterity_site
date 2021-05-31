<template>
  <div class="flex justify-center">
    <div
      class="
        flex flex-auto flex-row
        justify-between
        max-w-screen-xl
        p-6
        flex-wrap
      "
    >
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
  @apply font-black text-4xl bg-gray-800 p-3 text-gray-50 select-none;
}
</style>
