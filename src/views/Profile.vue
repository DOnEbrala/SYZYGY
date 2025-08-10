<template>
  <div class="container web-container py-4">
    <div class="profile-card glass-card">
      <div class="profile-header d-flex align-items-center">
        <div class="avatar" aria-hidden="true">{{ initials }}</div>
        <div class="ms-3">
          <h3 class="profile-name mb-0">{{ user.username || '—' }}</h3>
          <div class="profile-email">{{ user.email }}</div>
        </div>
      </div>

      <div class="profile-body mt-4">
        <div class="row g-3">
          <div class="col-md-6">
            <div class="info-tile">
              <div class="label">Artist Name</div>
              <div class="value">{{ user.artistName || '—' }}</div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="info-tile">
              <div class="label">DSP Profiles</div>
              <ul class="value mb-0 list-unstyled">
                <li v-if="!user.existingDspProfileLinks || user.existingDspProfileLinks.length === 0">—</li>
                <li v-for="(link, idx) in user.existingDspProfileLinks" :key="idx">
                  <a :href="normalizedLink(link)" target="_blank" rel="noopener noreferrer">{{ link }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="loading" class="loading-overlay"><div class="spinner-border text-light" role="status"></div></div>
</template>

<script setup>
import { onMounted, reactive, computed, ref } from 'vue'
import { getUserInfo } from '@/services/auth'

const user = reactive({ username: '', email: '', artistName: '', existingDspProfileLinks: [] })
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await getUserInfo()
    user.username = data?.username || ''
    user.email = data?.email || ''
    user.artistName = data?.artistName || ''
    user.existingDspProfileLinks = Array.isArray(data?.existingDspProfileLinks) ? data.existingDspProfileLinks : []
  } finally {
    loading.value = false
  }
})

const initials = computed(() => {
  const base = user.username || user.email || ''
  return base.slice(0, 2).toUpperCase()
})

function normalizedLink(link) {
  if (!link) return '#'
  if (/^https?:\/\//i.test(link)) return link
  return `https://${link}`
}
</script>

<style scoped>
.glass-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 18px;
  color: #fff;
}
.profile-header .avatar {
  width: 56px; height: 56px; border-radius: 50%;
  background: linear-gradient(135deg, #6366F1, #EC4899);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; color: #fff; letter-spacing: .5px;
}
.profile-name { font-weight: 800; }
.profile-email { color: rgba(255,255,255,0.85); font-size: .95rem; }
.info-tile { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 12px; height: 100%; }
.label { color: rgba(255,255,255,0.7); font-size: .9rem; margin-bottom: 4px; }
.value a { color: #fff; text-decoration: underline; text-underline-offset: 2px; }
.loading-overlay { position: fixed; inset: 0; display: grid; place-items: center; background: rgba(0,0,0,0.25); z-index: 1000; }
</style>


