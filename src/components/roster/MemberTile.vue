<template>
  <div class="tile">
    <img src="../../assets/wow.svg" />
    <div class="flex flex-col">
      <div class="text">{{ this.name }}</div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Class } from '../../types/types'

export default defineComponent({
  name: 'member-tile',
  props: {
    name: { type: String, required: true },
    class: { type: String, required: true },
  },
  data() {
    return { logo: '../../assets/wow.svg' }
  },
})
</script>

<style>
.tile {
  @apply flex w-1/4 bg-gray-800 rounded-lg mx-4 mb-4 h-32;
}
.text {
  @apply text-gray-50;
}
</style>
