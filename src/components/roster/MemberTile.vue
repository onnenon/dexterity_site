<template>
  <div class="tile">
    <img src="../../assets/wow.svg" />
    <div>{{ this.name }}</div>
    <div>{{ this.class }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
  @apply flex w-1/4 bg-gray-800 rounded-lg mx-4 mb-4 h-40;
}
</style>
