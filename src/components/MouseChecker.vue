<template>
  <div ref="target" class="o-mouse-checker">
    <p>mousechecker: {{ `${x} : ${y}` }}</p>
    <p>inside mousechecker: {{ `${x2} : ${y2} : ${isOutside}` }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useMouse, useMouseInElement } from '@vueuse/core'

export default defineComponent({
  name: 'MouseChecker',
  setup() {
    const target = ref(null)
    const { x, y } = useMouse()
    const { elementX: x2, elementY: y2, isOutside } = useMouseInElement(target)

    return { x, y, x2, y2, isOutside, target }
  },
})
</script>

<style lang="scss" scoped>
.o-mouse-checker {
  border: 1px solid #333;
  width: 300px;
  height: 300px;
}
</style>
