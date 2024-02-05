import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

type AuthStateStore = {
  accessToken: string | null
}

export const useAuthStore = defineStore('auth', () => {
  const { storageKey } = useAppConfig().auth
  const states = useLocalStorage<AuthStateStore>(storageKey, {
    accessToken: null,
  })

  return {
    ...states,

    isLoggedIn () {
      return !!states.value.accessToken
    },
  }
})
