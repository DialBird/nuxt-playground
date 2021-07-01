<template>
  <div class="pt-12 px-12">
    <p class="text-3xl font-bold mb-4">Form Sample</p>
    <form action="post" @submit.prevent="onSubmit">
      <fieldset class="flex flex-col gap-2 w-96 mb-4">
        <label>name</label>
        <input
          v-model="form.name"
          type="text"
          class="rounded border-gray-500"
        />
      </fieldset>
      <button
        type="submit"
        class="px-4 py-2 bg-black hover:opacity-95 text-white rounded font-bold"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FormTest',
  setup() {
    const form = reactive({
      name: '',
    })

    const onSubmit = () => {
      console.log('fo', form)
    }

    return { form, onSubmit }
  },
})
</script>

<style lang="scss" scoped></style>
