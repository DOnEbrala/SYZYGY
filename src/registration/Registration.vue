<template>
    

    <div class="auth-page">
        <div class="container web-container d-flex align-items-center justify-content-center">
            <div class="auth-card glass-card fade-in">
                <div class="text-center mb-3">
                    <h2 class="auth-title mb-1">Create your account</h2>
                    <p class="auth-subtitle">Join and start distributing your music</p>
                </div>

                <form class="auth-grid" @submit.prevent="onSubmit">
                    <div class="form-cell">
                        <label class="form-label">Email</label>
                        <input v-model.trim="form.email" class="form-control form-control-glass" type="email" placeholder="you@example.com" required>
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Username</label>
                        <input v-model.trim="form.username" class="form-control form-control-glass" type="text" placeholder="Your username" required>
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Artist Name</label>
                        <input v-model.trim="form.artistName" class="form-control form-control-glass" type="text" placeholder="Artist name" required>
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Existing DSP Profile Links (comma separated)</label>
                        <input v-model.trim="existingLinksInput" class="form-control form-control-glass" type="text" placeholder="https://link1, https://link2">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Password</label>
                        <input v-model="form.password" class="form-control form-control-glass" type="password" placeholder="••••••••" required minlength="6">
                    </div>
                </form>

                <div class="auth-actions d-flex flex-column align-items-stretch">
                    <div v-if="errors.length" class="alert alert-danger" role="alert">
                        <ul class="mb-0 ps-3">
                            <li v-for="(err, idx) in errors" :key="idx">{{ err }}</li>
                        </ul>
                    </div>
                    <button class="btn-auth" type="button" @click="onSubmit" :disabled="submitting">{{ submitting ? 'Creating...' : 'Create Account' }}</button>
                    <div class="mt-3 text-center">
                        <span class="auth-meta">Already have an account?</span>
                        <router-link class="auth-link" :to="{ name: 'login' }">Log in</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.auth-page {
    position: relative;
    min-height: calc(100vh - 64px);
    padding: 32px 0 64px;
}
.auth-page::before,
.auth-page::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
}
.auth-page::before {
    background: radial-gradient(1000px 520px at 10% 10%, rgba(99,102,241,0.25), transparent 60%),
                radial-gradient(780px 460px at 92% 18%, rgba(236,72,153,0.20), transparent 60%),
                radial-gradient(700px 520px at 50% 90%, rgba(34,197,94,0.18), transparent 60%),
                linear-gradient(135deg, #0f0f1a 0%, #0b0b12 40%, #111827 100%);
    animation: gradientShift 18s ease-in-out infinite alternate;
}
.auth-page::after {
    background-image: linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px, 40px 40px;
    mix-blend-mode: overlay;
    opacity: 0.3;
    z-index: -1;
}

@keyframes gradientShift {
    0% { transform: translate3d(0,0,0) scale(1); filter: hue-rotate(0deg); }
    100% { transform: translate3d(0,-10px,0) scale(1.02); filter: hue-rotate(8deg); }
}

.glass-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}
.fade-in {
    opacity: 0;
    animation: fadeInUp .6s ease forwards;
}
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.auth-card { width: 100%; max-width: 560px; }
.auth-title { color: #fff; font-weight: 700; letter-spacing: .2px; }
.auth-subtitle { color: rgba(255,255,255,0.7); margin: 0; }

.auth-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 12px;
}
@media (max-width: 768px) {
    .auth-grid { grid-template-columns: 1fr; }
}
.form-cell { display: flex; flex-direction: column; }
.form-label { color: rgba(255,255,255,0.9); margin-bottom: 6px; font-weight: 500; }
.form-control-glass {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.22);
    color: #fff;
    border-radius: 10px;
    padding: 12px 12px;
    transition: border-color .2s, box-shadow .2s, background .2s;
}
.form-control-glass::placeholder { color: rgba(255,255,255,0.6); }
.form-control-glass:focus {
    background: rgba(255,255,255,0.10);
    border-color: rgba(255,255,255,0.6);
    box-shadow: 0 0 0 4px rgba(255,255,255,0.08);
}

.btn-auth {
    appearance: none;
    border: 0;
    background: linear-gradient(90deg, #6366F1, #EC4899);
    color: #fff;
    border-radius: 12px;
    padding: 12px 16px;
    font-size: 1.05rem;
    font-weight: 700;
    width: 100%;
    box-shadow: 0 10px 24px rgba(99,102,241,0.25);
    transition: transform .15s ease, box-shadow .2s ease, filter .2s ease;
}
.btn-auth:hover { transform: translateY(-1px); filter: brightness(1.05); }
.btn-auth:active { transform: translateY(0); }

.auth-actions { margin-top: 18px; }
.auth-meta { color: rgba(255,255,255,0.75); }
.auth-link { color: #fff; text-decoration: underline; text-underline-offset: 2px; }
</style>

<script setup>
import { reactive, ref, watch } from 'vue'
 
import { registerUser } from '@/services/auth'

const submitting = ref(false)
const form = reactive({
  email: '',
  password: '',
  username: '',
  artistName: '',
  existingDspProfileLinks: [],
})

// Bind a simple comma-separated input to the array in payload
const existingLinksInput = ref('')
const errors = ref([])
watch(existingLinksInput, (value) => {
  form.existingDspProfileLinks = value
    .split(',')
    .map(s => s.trim())
    .filter(s => s.length > 0)
})

async function onSubmit() {
  if (submitting.value) return
  submitting.value = true
  errors.value = []
  try {
    await registerUser({
      email: form.email,
      password: form.password,
      username: form.username,
      artistName: form.artistName,
      existingDspProfileLinks: form.existingDspProfileLinks,
    })
    // Simple redirect to login on success
    window.location.href = '/login'
  } catch (error) {
    const data = error?.response?.data
    if (Array.isArray(data)) {
      errors.value = data.map(d => d?.description || d?.code || 'Validation error')
    } else if (typeof data === 'object' && data !== null) {
      errors.value = [data.message || 'Registration failed']
    } else if (typeof data === 'string' && data.trim().length) {
      errors.value = [data]
    } else {
      errors.value = [error.message || 'Registration failed']
    }
  } finally {
    submitting.value = false
  }
}
</script>