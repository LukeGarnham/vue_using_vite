<script setup>
defineProps({
  modelValue: String,
})

let emit = defineEmits(['update:modelValue'])

function onTabPress(e) {
  let t = e.target
  let val = t.value,
    start = t.selectionStart,
    end = t.selectionEnd

  t.value = val.substring(0, start) + '\t' + val.substring(end)

  t.selectionStart = t.selectionEnd = start + 1
}

function update(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <textarea @keydown.tab.prevent="onTabPress" v-text="modelValue" @keyup="update"></textarea>
</template>
