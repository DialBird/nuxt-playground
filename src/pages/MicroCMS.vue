<template>
  <p>oasdfa</p>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MicroCMS',
  setup() {
    const { $microcms } = useContext()

    const asyncData = async () => {
      const data = await $microcms.get({
        endpoint: 'news',
        queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
      })
      return data
    }
    asyncData().then((res) => console.log(res))
  },
})
</script>

<style lang="scss" scoped></style>
