<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from './TeamFooter.vue'
import Modal from '@/components/Modal.vue'
import { useTeamStore } from '@/stores/TeamStore.js'
import { ref } from 'vue'

let team = useTeamStore()

let showModal = ref(false)
team.fill()
</script>
<template>
  <TeamHeader @add="showModal = true"></TeamHeader>
  <div class="place-self-center flex flex-col gap-y-3">
    <TeamMembers></TeamMembers>
  </div>
  <TeamFooter></TeamFooter>

  <Modal :show="showModal" @close="showModal = false">
    <template #default>
      <p>Need to add a new member to your team?</p>
      <form class="mt-6">
        <div class="flex gap-1">
          <input type="email" placeholder="Email address..." class="flex-1" />
          <button>Add</button>
        </div>
      </form>
    </template>
  </Modal>
</template>
