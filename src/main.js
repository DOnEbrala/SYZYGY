import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { authState } from './stores/auth'
import { getUserInfo } from './services/auth'

const app = createApp(App)

app.use(router)



app.mount('#app')

// Attempt to fetch current user on app start (if cookie-based auth is active)
getUserInfo().then(user => {
  authState.isAuthenticated = true
  authState.user = user
}).catch(() => {
  authState.isAuthenticated = false
  authState.user = null
})