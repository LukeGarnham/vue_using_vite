<script setup>
import { useTeamStore } from '@/stores/TeamStore'
import AddMemberModal from './AddMemberModal.vue'

let team = useTeamStore()
</script>

<template>
  <header class="justify-between">
    <div>
      <AddMemberModal></AddMemberModal>
    </div>
    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        {{ team.name }} Team
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.spots }}
        </div>
      </h3>
    </div>
  </header>
</template>
