<template>
  <div class="container mx-auto mt-8">
    <p class="text-2xl font-bold mb-4">useVue</p>
    <p>{{ `mouse is ${x} : ${y}` }}</p>
    <p>dark: {{ isDark }}</p>
    <p>local: {{ store }}</p>
    <MouseChecker />
    <button @click="toggleDark">darker</button>
    <div
      ref="el"
      class="elBox mb-4 resize overflow-auto border border-blue-200"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api'
import {
  useMouse,
  useLocalStorage,
  useDark,
  useToggle,
  useElementBounding,
} from '@vueuse/core'
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

    const el = ref(null)
    const { top, right, bottom, left, width, height } = useElementBounding(el)
    watch(width, (a) => console.log(a))
    console.log(top.value, right.value, width.value, height.value)

    // is user prefers dark theme
    // const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage('my-storage', {
      name: 'Apple',
      color: 'red',
    })

    return { x, y, isDark, store, toggleDark, el }
  },
})
</script>

<style lang="scss" scoped>
.elBox {
  width: 333px;
  height: 222px;
}
</style>
