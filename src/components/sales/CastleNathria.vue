<template>
  <div class="background-image p-4 rounded-lg shadow-lg flex flex-col">
    <div class="text-xl font-bold">Castle Nathria</div>
    <div class="font-bold py-2">Heroic</div>
    <table>
      <tr>
        <th></th>
        <th>Price</th>
      </tr>
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
</style>
