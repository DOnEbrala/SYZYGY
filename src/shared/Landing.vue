
<template>
  <div class="landing">
    <div class="container web-container">
      <!-- Hero -->
      <section class="hero d-flex justify-content-center flex-column align-items-center text-center fade-in">
        <h1 class="hero-title">
          Simplified Music Distribution
          <span class="line-break">For your needs</span>
        </h1>
        <p class="hero-subtitle">Upload your music easily and let us promote it</p>
        <div class="cta">
          <RouterLink :to="{ name: 'register' }">
            <button class="btn-cta">Get Started</button>
          </RouterLink>
        </div>
      </section>

      <!-- Platforms marquee + stats -->
      <section class="platforms-section fade-in" style="--delay:.05s">
        <div class="section-title">Available on 200+ Platforms</div>
        <div class="marquee">
          <div class="track">
            <img src="../assets/Images/platform-icons/deezer.svg" alt="Deezer" />
            <img src="../assets/Images/platform-icons/arrow.png" alt="Tidal" />
            <img src="../assets/Images/platform-icons/itunes (1).png" alt="iTunes" />
            <img src="../assets/Images/platform-icons/soundcloud.png" alt="SoundCloud" />
            <img src="../assets/Images/platform-icons/spotify.png" alt="Spotify" />
            <img src="../assets/Images/platform-icons/youtube-music-icon.svg" alt="YouTube Music" />

            <!-- duplicate for seamless loop -->
            <img src="../assets/Images/platform-icons/deezer.svg" alt="Deezer" />
            <img src="../assets/Images/platform-icons/arrow.png" alt="Tidal" />
            <img src="../assets/Images/platform-icons/itunes (1).png" alt="iTunes" />
            <img src="../assets/Images/platform-icons/soundcloud.png" alt="SoundCloud" />
            <img src="../assets/Images/platform-icons/spotify.png" alt="Spotify" />
            <img src="../assets/Images/platform-icons/youtube-music-icon.svg" alt="YouTube Music" />
          </div>
        </div>

        <div class="stats d-flex justify-content-between gap-4">
          <div class="stat glass">
            <div class="stat-value">X+</div>
            <div class="stat-label">Artists</div>
          </div>
          <div class="stat glass">
            <div class="stat-value">X+</div>
            <div class="stat-label">Streams</div>
          </div>
          <div class="stat glass">
            <div class="stat-value">X+</div>
            <div class="stat-label">Tracks</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default{
    name: "syzygylanding"
}
</script>
<style scoped>
.landing { position: relative; color: #fff; }
.landing::before,
.landing::after {
  content: "";
  position: absolute; inset: 0; z-index: -1;
}
.landing::before {
  background: radial-gradient(900px 500px at 10% 5%, rgba(99,102,241,0.16), transparent 60%),
              radial-gradient(800px 480px at 90% 20%, rgba(236,72,153,0.14), transparent 60%);
  filter: saturate(120%);
  animation: subtleShift 20s ease-in-out infinite alternate;
}
.landing::after {
  background-image: linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 48px 48px, 48px 48px; mix-blend-mode: overlay; opacity: .3;
}
@keyframes subtleShift { from { transform: translateY(0); } to { transform: translateY(-10px); } }

/* Hero */
.hero { padding: 160px 0 120px; }
.hero-title { font-size: clamp(2.2rem, 5vw, 4rem); font-weight: 800; line-height: 1.1; letter-spacing: .3px; }
.line-break { display: block; }
.hero-subtitle { margin-top: 14px; font-size: clamp(1.05rem, 2.2vw, 1.5rem); color: rgba(255,255,255,0.85); }
.cta { margin-top: 24px; }
.btn-cta {
  appearance: none; border: 0; color: #fff; font-weight: 800; font-size: 1.1rem;
  padding: 12px 22px; border-radius: 12px; cursor: pointer;
  background: linear-gradient(90deg, #6366F1, #EC4899);
  box-shadow: 0 10px 24px rgba(99,102,241,0.25), inset 0 0 0 1px rgba(255,255,255,0.15);
  transition: transform .15s ease, filter .2s ease, box-shadow .2s ease;
}
.btn-cta:hover { transform: translateY(-1px); filter: brightness(1.05); }

/* Platforms */
.platforms-section { margin: 120px 0 140px; display: flex; flex-direction: column; align-items: center; }
.section-title { font-size: clamp(1.3rem, 2.5vw, 2rem); font-weight: 800; margin-bottom: 18px; }
.marquee { width: min(100%, 760px); border: 2px solid rgba(255,255,255,0.9); border-radius: 52px; padding: 16px; overflow: hidden; mask-image: linear-gradient(90deg, transparent 0%, #000 8%, #000 92%, transparent 100%); }
.track { display: flex; align-items: center; gap: 40px; animation: scroll 26s linear infinite; }
.track img { height: 56px; width: auto; opacity: .95; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.25)); }
@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* Stats */
.stats { width: 100%; max-width: 900px; margin-top: 28px; }
.glass { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
.stat { flex: 1; text-align: center; padding: 18px 14px; }
.stat-value { font-size: clamp(1.8rem, 3.2vw, 2.4rem); font-weight: 800; }
.stat-label { color: rgba(255,255,255,0.85); font-weight: 600; }

/* Animations */
.fade-in { opacity: 0; animation: fadeInUp .7s ease forwards; animation-delay: var(--delay,0s); }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 768px) {
  .hero { padding: 120px 0 80px; }
  .platforms-section { margin: 80px 0 100px; }
  .stats { gap: 12px; }
}
</style>