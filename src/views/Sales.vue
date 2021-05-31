<template>
  <div class="flex justify-center">
    <div class="flex flex-auto flex-col max-w-screen-xl text-left p-6">
      <h1 class="font-black text-6xl pb-6 font-roboto">Sales</h1>
      <div class="text-lg pb-2">Sales are now open!</div>
      <h2 class="font-black text-2xl py-2 font-roboto">Contact</h2>
      <div class="flex flex-col justify-items-start">
        <div class="flex flex-col items-start">
          <div class="font-bold pr-2">Discord:</div>
          <CopyText text="Kenpewz#9386" />
        </div>
        <div class="flex flex-col items-start">
          <div class="font-bold pr-2">Bnet:</div>
          <CopyText text="Kenfacto#1722" />
        </div>
      </div>
      <div class="py-4 text-lg">
        We only accept gold on the server Moon Guard!
      </div>
      <div class="text-4xl font-black py-4 font-roboto">Current Offerings</div>
      <CastleNathria />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CastleNathria from '../components/sales/CastleNathria.vue'
import CopyText from '../components/CopyText.vue'

export default defineComponent({
  name: 'sales',
  components: { CastleNathria, CopyText },
})
</script>

<style></style>
