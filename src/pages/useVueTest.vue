<template>
  <div class="container mx-auto mt-8">
    <p class="text-2xl font-bold mb-4">useVue</p>
    <p>{{ `mouse is ${x} : ${y}` }}</p>
    <p>dark: {{ isDark }}</p>
    <p>local: {{ store }}</p>
    <MouseChecker />
    <button @click="toggleDark">darker</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'
import { useMouse, useLocalStorage, useDark, useToggle } from '@vueuse/core'
import MouseChecker from '@/components/MouseChecker.vue'

export default defineComponent({
  name: 'UseVueTest',
  components: {
    MouseChecker,
  },
  setup() {
    const { x, y } = useMouse()
    const isDark = useDark()
    const toggleDark = useToggle(isDark)

    // is user prefers dark theme
    // const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    return { x, y, isDark, store, toggleDark }
  },
})
</script>

<style lang="scss" scoped></style>
