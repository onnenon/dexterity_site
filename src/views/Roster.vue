<template>
  <div class="flex justify-center">
    <div class="flex-auto max-w-screen-xl text-left p-6 jusify-left">
      <h1 class="sm:text-6xl text-4xl font-black font-roboto pb-6">Roster</h1>
      <div class="flex flex-col">
        <div class="header">Tanks</div>
        <div class="flex flex-row flex-wrap">
          <member-tile
            v-for="(tank, index) in roster.tanks"
            :name="tank.name"
            :class_="tank.class"
            :isOfficer="tank.isOfficer"
            :key="index"
          />
        </div>
      </div>
      <div class="header">Healers</div>
      <div class="flex flex-row flex-wrap">
        <member-tile
          v-for="(healer, index) in roster.healers"
          :name="healer.name"
          :class_="healer.class"
          :isOfficer="healer.isOfficer"
          :key="index"
        />
      </div>
      <div class="header">Melee</div>
      <div class="flex flex-row flex-wrap">
        <member-tile
          v-for="(mdps, index) in roster.melee"
          :name="mdps.name"
          :class_="mdps.class"
          :isOfficer="mdps.isOfficer"
          :key="index"
        />
      </div>
      <div class="header">Ranged</div>
      <div class="flex flex-row flex-wrap">
        <member-tile
          v-for="(rdps, index) in roster.ranged"
          :name="rdps.name"
          :class_="rdps.class"
          :isOfficer="rdps.isOfficer"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GuildRoster } from '../common/types'
import { Roster } from '../common/roster'
import MemberTile from '../components/roster/MemberTile.vue'

export default defineComponent({
  components: { MemberTile },
  name: 'roster',
  data(): { roster: GuildRoster } {
    return { roster: Roster }
  },
})
</script>

<style>
.header {
  @apply sm:text-4xl text-2xl font-black pb-4;
}
</style>
