<template>
  <ul>
    <li v-for="b in a" :key="b.id">{{ b.title }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, useContext } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MicroCMS',
  setup() {
    const { $axios, $config } = useContext()
    const a = ref([])

    const asyncData = async () => {
      const ip = await $axios.$get(
        'https://keisuke-sample.microcms.io/api/v1/news',
        {
          headers: { 'X-API-KEY': $config.microCmsApiKey },
          params: {
            limit: 2,
          },
        },
      )
      a.value = ip.contents
      // const data = await $microcms.get({
      //   endpoint: 'news',
      //   queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
      // })
      // a.value = data.contents
    }
    asyncData().then((res) => console.log(res))

    return { a }
  },
})
</script>

<style lang="scss" scoped></style>
