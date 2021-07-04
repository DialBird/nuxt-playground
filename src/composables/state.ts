import { ref, UnwrapRef, computed, ComputedRef } from '@nuxtjs/composition-api'

export const useState = <T>(
  initialState: T,
): [ComputedRef<UnwrapRef<T>>, (value: T) => void] => {
  const state = ref<T>(initialState)
  const setState = (value: T) => {
    state.value = value as UnwrapRef<T>
  }

  return [computed(() => state.value), setState]
}
