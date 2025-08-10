import { reactive } from 'vue'

export const authState = reactive({
  isAuthenticated: false,
  user: null,
  loading: false,
})

export function setAuthenticatedUser(user) {
  authState.user = user
  authState.isAuthenticated = !!user
}

export function clearAuthenticatedUser() {
  authState.user = null
  authState.isAuthenticated = false
}


