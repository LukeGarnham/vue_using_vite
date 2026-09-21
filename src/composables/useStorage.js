import { ref, watch } from 'vue'

export function useStorage(key, defaultVal = '') {
  let storedVal = read()

  let val = ref(storedVal)

  watch(val, write, { deep: true })

  write()

  function read() {
    return JSON.parse(localStorage.getItem(key)) ?? defaultVal
  }

  function write() {
    if (val.value === '') {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(val.value))
    }
  }

  return val
}
