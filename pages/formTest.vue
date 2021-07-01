<template>
  <div class="pt-12 px-12">
    <p class="text-3xl font-bold mb-4">Form Sample</p>
    <form action="post" @submit.prevent="onSubmit">
      <div class="flex flex-col gap-2 w-96 mb-4">
        <label>name</label>
        <input
          v-model="form.name"
          type="text"
          class="rounded border-gray-500"
        />
      </div>
      <div class="flex flex-col gap-2 w-96 mb-4">
        <label>email</label>
        <input
          v-model="form.email"
          type="email"
          class="rounded border-gray-500"
          placeholder="Email"
        />
      </div>
      <fieldset class="flex flex-col gap-2 w-96 mb-4">
        <legend>Gender</legend>
        <label v-for="gen in genders" :key="gen" class="inline-block">
          <input
            v-model="form.gender"
            type="radio"
            class="rounded border-gray-500"
            :value="gen"
          />
          {{ gen }}
        </label>
      </fieldset>
      <button
        type="submit"
        class="px-4 py-2 bg-black hover:opacity-95 text-white rounded font-bold"
      >
        Submit
      </button>
    </form>

    <p>result: {{ form }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'FormTest',
  setup() {
    const form = reactive({
      name: '',
      email: '',
      gender: 'male',
    })

    const genders = ['male', 'femail', 'other']

    const onSubmit = () => {
      console.log('fo', form)
    }

    return { form, genders, onSubmit }
  },
})
</script>

<style lang="scss" scoped></style>
