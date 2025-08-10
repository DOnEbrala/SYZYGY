<template>
  <header class="site-header">
    <div class="container web-container">
      <div class="row w-100 main-navigation align-items-center">
        <div class="col-6 col-md-4">
          <RouterLink to="/" class="brand d-inline-flex align-items-center text-decoration-none">
            <img class="brand-logo" src="../assets/Images/header/Syzygy-logo.webp" alt="Syzygy" />
          </RouterLink>
        </div>
        <div class="col-6 col-md-8 d-flex justify-content-end align-items-center">
          <nav class="nav-buttons d-flex align-items-center gap-2 gap-sm-3">
            <RouterLink :to="{ name: 'Streaming' }">
              <button class="nav-btn" type="button">Services</button>
            </RouterLink>
            <button class="nav-btn" type="button">About</button>
            <RouterLink :to="{ name: 'login' }">
              <button class="nav-btn" type="button">Log In</button>
            </RouterLink>
            <RouterLink :to="{ name: 'register' }">
              <button class="nav-cta" type="button">Sign Up</button>
            </RouterLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
 <script setup>  

</script>
<style scoped>
.site-header {
  position: sticky; top: 0; z-index: 50;
  background: rgba(13,13,19,0.55);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.brand-logo { height: 36px; width: auto; filter: drop-shadow(0 4px 10px rgba(0,0,0,0.25)); transition: transform .2s ease, filter .2s ease; }
.brand-name { color: #fff; font-weight: 800; letter-spacing: .5px; text-transform: uppercase; font-size: 1.05rem; }
.brand:hover .brand-logo { transform: translateY(-1px) scale(1.02); filter: drop-shadow(0 8px 18px rgba(0,0,0,0.35)); }

.nav-buttons .router-link-active .nav-btn { color: #fff; }
.nav-btn {
  background: transparent; color: rgba(255,255,255,0.9); border: 1px solid transparent;
  font-size: 1rem; padding: 8px 12px; border-radius: 10px; transition: background .2s, color .2s, border-color .2s;
}
.nav-btn:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.25); }
.nav-cta {
  background: linear-gradient(90deg, #6366F1, #EC4899); color: #fff; border: 0; font-weight: 800;
  font-size: 1rem; padding: 10px 14px; border-radius: 12px; box-shadow: 0 8px 16px rgba(99,102,241,0.25);
  transition: transform .15s ease, filter .2s ease;
}
.nav-cta:hover { transform: translateY(-1px); filter: brightness(1.05); }
</style>