<template>
  <div class="background-image rounded-xl p-1 shadow-lg lg:w-1/2">
    <div class="forground flex flex-col p-4 rounded-xl">
      <div class="text-xl md:text-2xl font-bold">Castle Nathria</div>
      <div class="font-bold text-lg md:text-xl py-2">Heroic</div>
      <table class="table-fixed">
        <tr>
          <td>10/10H Full Clear</td>
          <td>200k</td>
        </tr>
        <tr>
          <td>Sire Denathrius (AotC) Only</td>
          <td>60k</td>
        </tr>
        <tr>
          <td>Funnel</td>
          <td>110k each</td>
        </tr>
        <tr>
          <td>Full Clear with 4 Funnels</td>
          <td>625k</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'castleNathria',
})
</script>

<style scoped>
.background-image {
  background-image: url('../../assets/cn_banner.jpg');
  color: #ffffff;
}
.forground {
  backdrop-filter: blur(4px);
}
tr {
  @apply text-sm md:text-lg;
}
</style>
