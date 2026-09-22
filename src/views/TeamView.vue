<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from './TeamFooter.vue'
import { useTeamStore } from '@/stores/TeamStore.js'
import AddMemberModal from '@/components/Teams/AddMemberModal.vue'

let team = useTeamStore()

team.fill()
</script>
<template>
  <TeamHeader></TeamHeader>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers></TeamMembers>
  </div>
  <TeamFooter></TeamFooter>

  <AddMemberModal></AddMemberModal>
</template>
