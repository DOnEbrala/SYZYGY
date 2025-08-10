import axios from 'axios'

// Ensure cookies (auth) are sent/received when backend uses cookie-based auth
axios.defaults.withCredentials = true

const API_BASE = '/api'

export async function registerUser(payload) {
  // payload: { email, password, username, artistName, existingDspProfileLinks }
  const url = `${API_BASE}/users/register`
  const response = await axios.post(url, payload)
  return response.data
}

export async function loginUser(payload) {
  // payload: { email, password }
  const url = `${API_BASE}/users/login`
  const response = await axios.post(url, payload)
  return response.data
}

export async function getCurrentUser() {
  const url = `${API_BASE}/users/me`
  const response = await axios.get(url)
  return response.data
}

export async function getUserInfo() {
  const url = `${API_BASE}/users/userinfo`
  const response = await axios.get(url)
  return response.data
}

export async function logoutUser() {
  const url = `${API_BASE}/users/logout`
  const response = await axios.post(url, null)
  return response.data
}

export default {
  registerUser,
  loginUser,
  getCurrentUser,
  getUserInfo,
  logoutUser,
}


