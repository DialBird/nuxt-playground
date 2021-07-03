<template>
  <div class="container mx-auto mt-8">
    <p class="text-2xl font-bold mb-4">useVue</p>
    <p>{{ `mouse is ${x} : ${y}` }}</p>
    <p>dark: {{ isDark }}</p>
    <p>local: {{ store }}</p>
    <MouseChecker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useMouse, usePreferredDark, useLocalStorage } from '@vueuse/core'
import MouseChecker from '@/components/MouseChecker.vue'

export default defineComponent({
  name: 'UseVueTest',
  components: {
    MouseChecker,
  },
  setup() {
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    return { x, y, isDark, store }
  },
})
</script>

<style lang="scss" scoped></style>
