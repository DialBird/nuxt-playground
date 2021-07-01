<template>
  <div class="pt-12 px-12">
    <p class="text-3xl font-bold mb-4">Form Sample</p>
    <form action="post" @submit.prevent="onSubmit">
      <div class="flex flex-col gap-2 w-96 mb-4">
        <label class="text-md">Name</label>
        <input
          v-model="form.name"
          type="text"
          class="rounded border-gray-500"
        />
      </div>
      <div class="flex flex-col gap-2 w-96 mb-4">
        <label class="text-md">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="rounded border-gray-500"
          placeholder="Email"
        />
      </div>
      <fieldset class="flex flex-col gap-2 w-96 mb-4">
        <legend class="text-md">Gender</legend>
        <label v-for="gen in genders" :key="gen" class="inline-block">
          <input v-model="form.gender" type="radio" :value="gen" />
          {{ gen }}
        </label>
      </fieldset>
      <div class="flex flex-col gap-2 w-96 mb-4">
        <label class="text-md">Carrier</label>
        <select v-model="form.carrier">
          <option disabled value="">Nothing selected</option>
          <option v-for="c in carriers" :key="c.label" :value="c.value">
            {{ c.label }}
          </option>
        </select>
      </div>
      <fieldset class="flex flex-col gap-2 w-96 mb-4">
        <legend class="text-md">Hobby</legend>
        <label v-for="ho in hobbies" :key="ho.label">
          <input v-model="form.hobbies" type="checkbox" :value="ho.value" />
          {{ ho.label }}
        </label>
      </fieldset>
      <hr />
      <p class="mb-4">
        <input v-model="form.confirmed" type="checkbox" />
        is it OK?
      </p>
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
      gender: '',
      carrier: '',
      hobbies: [],
      confirmed: false,
    })

    const genders = ['male', 'femail', 'other']
    const carriers = [
      { label: 'Developer', value: 1 },
      { label: 'Designer', value: 2 },
      { label: 'Superman', value: 3 },
    ]
    const hobbies = [
      { label: 'sports', value: 1 },
      { label: 'game', value: 2 },
      { label: 'plant', value: 3 },
      { label: 'training', value: 4 },
      { label: 'fes', value: 5 },
      { label: 'travel', value: 6 },
    ]

    const onSubmit = () => {
      console.log('fo', form)
    }

    return { carriers, form, genders, hobbies, onSubmit }
  },
})
</script>

<style lang="scss" scoped></style>
