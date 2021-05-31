<template>
  <div class="flex justify-center">
    <div class="flex flex-auto flex-col max-w-screen-xl text-left p-6">
      <h1 class="font-bold text-3xl pb-6">Sales</h1>
      <div class="text-lg pb-2">Sales are now open!</div>
      <h2 class="font-bold text-xl py-2">Sales Contact:</h2>
      <ul>
        <li><b>Discord:</b> Kenpewz#9386</li>
        <li><b>Bnet:</b> Kenfacto#1722</li>
      </ul>
      <div class="py-4 text-lg">
        We only accept gold on the server Moon Guard!
      </div>
      <div class="text-2xl font-bold py-4">Current Offerings</div>
      <CastleNathria />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CastleNathria from '../components/sales/CastleNathria.vue'

export default defineComponent({
  name: 'sales',
  components: { CastleNathria },
})
</script>

<style></style>
