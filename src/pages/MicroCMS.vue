<template>
  <ul>
    <p>{{ $fetchState.pending }}</p>
    <p>{{ ok }}:{{ fm }}</p>
    <li v-for="b in a" :key="b.id">{{ b.title }}</li>
  </ul>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api'
import { useState } from '@/composables/state'

const sleep = (millisec) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisec)
  })
}

export default defineComponent({
  name: 'MicroCMS',
  setup() {
    const { $axios, $config } = useContext()
    const a = ref([])

    const [ok, setOk] = useState(false)
    const [num, setNum] = useState(12)
    const [fm, setFm] = useState({
      name: '',
      age: 12,
    })

    setTimeout(() => {
      setOk(true)
      setNum(100)
      const a = 'name'
      setFm({ ...fm.value, [a]: 'yatta' })
    }, 1000)

    console.log(fm.value.name)

    const { fetch } = useFetch(async () => {
      await sleep(0).then(async () => {
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
      })
    })
    fetch()

    return { a, ok, num, fm }
  },
})
</script>

<style lang="scss" scoped></style>
