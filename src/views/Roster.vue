<template>
  <div class="flex justify-center">
    <div class="flex-auto max-w-screen-xl text-left p-6 jusify-left">
      <h1 class="text-6xl font-black font-roboto pb-6">Roster</h1>
      <div class="flex flex-col">
        <div class="header">Tanks</div>
        <div class="flex flex-row flex-wrap">
          <member-tile
            v-for="(tank, index) in this.tanks"
            :name="tank.name"
            :class="tank.class"
            :key="index"
          />
        </div>
      </div>
      <div class="header">Healers</div>
      <div class="header">Melee</div>
      <div class="header">Ranged</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Class, GuildRoster } from '../types/types'
import MemberTile from '../components/roster/MemberTile.vue'

export default defineComponent({
  components: { MemberTile },
  name: 'roster',
  data(): GuildRoster {
    return {
      tanks: [
        { name: 'Nolarya', class: Class.DRUID },
        { name: 'Damdifino', class: Class.DH },
        { name: 'Veserria', class: Class.MONK },
      ],
      healers: [],
      melee: [],
      ranged: [],
    }
  },
})
</script>

<style>
.header {
  @apply text-4xl font-black pb-4;
}
</style>
