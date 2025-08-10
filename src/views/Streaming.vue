<template>

    <HeaderNavigation />

    <div class="web-container container">
        <div class="streaming-service d-flex flex-column">
            <div class="glass-card streaming-dashboard fade-in">
                <div class="streams-chart d-flex flex-column align-items-start w-100">
                    <div class="chart-bar mb-3 w-100">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <label class="chart-label">Spotify</label>
                            <span class="chart-meta">X Streams</span>
                        </div>
                        <div class="bar-container">
                            <div class="bar-fill spotify" style="--progress: 70%"></div>
                            <div class="bar-shine"></div>
                        </div>
                    </div>
                    <div class="chart-bar mb-3 w-100">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <label class="chart-label">Apple Music</label>
                            <span class="chart-meta">X Streams</span>
                        </div>
                        <div class="bar-container">
                            <div class="bar-fill apple" style="--progress: 50%"></div>
                            <div class="bar-shine"></div>
                        </div>
                    </div>
                    <div class="chart-bar mb-1 w-100">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <label class="chart-label">Youtube Music</label>
                            <span class="chart-meta">X Streams</span>
                        </div>
                        <div class="bar-container">
                            <div class="bar-fill youtube" style="--progress: 30%"></div>
                            <div class="bar-shine"></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Analytics card: left list, right area chart -->
            <div class="glass-card analytics-card fade-in" style="--delay: .02s">
                <div class="analytics-inner d-flex flex-row align-items-center justify-content-between">
                    <div class="analytics-list">
                        <div class="analytics-item"><span class="brand spotify">Spotify</span> <span class="analytics-meta">X Streams</span></div>
                        <div class="analytics-item"><span class="brand apple">Apple Music</span> <span class="analytics-meta">X Streams</span></div>
                        <div class="analytics-item"><span class="brand youtube">Youtube Music</span> <span class="analytics-meta">X Streams</span></div>
                    </div>
                    <div class="analytics-chart">
                        <svg :viewBox="`0 0 ${chartWidth} ${chartHeight}`" :width="chartWidth" :height="chartHeight" role="img" aria-label="Streams area chart">
                            <defs>
                                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="#F87171" stop-opacity="0.55"/>
                                    <stop offset="100%" stop-color="#F87171" stop-opacity="0"/>
                                </linearGradient>
                                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                    <stop offset="0%" stop-color="#F43F5E"/>
                                    <stop offset="100%" stop-color="#FB7185"/>
                                </linearGradient>
                                <clipPath id="clip-rect">
                                    <rect :width="chartWidth" :height="chartHeight" rx="10" ry="10"/>
                                </clipPath>
                            </defs>

                            <!-- grid lines -->
                            <g class="grid" clip-path="url(#clip-rect)">
                                <line v-for="y in 4" :key="`gy-${y}`" :x1="padding" :x2="chartWidth - padding" :y1="gridY(y)" :y2="gridY(y)" />
                            </g>

                            <!-- area fill -->
                            <path :d="areaPath" fill="url(#areaGradient)" class="area"/>
                            <!-- line path on top -->
                            <path :d="linePath" stroke="url(#lineGradient)" class="line"/>
                        </svg>
                    </div>
                </div>
            </div>
            <!-- Main upload section: flex row, cover art left, form right -->
            <div class="glass-card streaming-upload-main d-flex flex-row justify-content-center align-items-start w-100 mt-4 fade-in" style="--delay: .05s">
                <!-- Cover Art Upload Left -->
                <div class="cover-art-upload d-flex flex-column align-items-center me-5">
                    <div class="upload-hint text-center mb-2">PNG/JPG • max 200×200px</div>
                    <div class="cover-art-preview position-relative mb-2 hover-pop" @dragover.prevent @drop.prevent="onCoverDrop">
                        <template v-if="!coverArtUrl">
                            <button class="choose-photo-btn" @click="triggerCoverInput" type="button">Choose Photo</button>
                        </template>
                        <template v-else>
                            <img :src="coverArtUrl" alt="Cover Art" class="cover-art-img" />
                            <button class="choose-photo-btn choose-photo-btn-overlay" @click="triggerCoverInput" type="button">Change Photo</button>
                        </template>
                        <input ref="coverInput" type="file" accept="image/*" @change="onCoverArtChange" class="d-none" />
                    </div>
                </div>
                <!-- Form Inputs Right -->
                <div class="streaming-upload-inputs form-grid" style="flex: 1;">
                    <div class="form-cell">
                        <label class="form-label">Release Name</label>
                        <input type="text" class="form-control form-control-glass" id="ReleaseName" placeholder="Release Name">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Release Version</label>
                        <input type="text" class="form-control form-control-glass" placeholder="Release Version">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Primary artist</label>
                        <input type="text" class="form-control form-control-glass" placeholder="Primary artist">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Featuring artist</label>
                        <input type="text" class="form-control form-control-glass" placeholder="Featuring artist">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Contributors</label>
                        <input type="text" class="form-control form-control-glass" placeholder="Contributors">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Roles</label>
                        <input type="text" class="form-control form-control-glass" placeholder="Roles">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Genre</label>
                        <input type="text" class="form-control form-control-glass" placeholder="Genre">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Subgenre</label>
                        <input type="text" class="form-control form-control-glass" placeholder="Subgenre">
                    </div>
                    <div class="form-cell">
                        <label class="form-label">Type of Release</label>
                        <input type="text" class="form-control form-control-glass" placeholder="Type of Release">
                    </div>
                </div>
            </div>
            <!-- Track upload section -->
            <div class="glass-card track-uploading-button d-flex align-items-center mt-4 fade-in" style="--delay: .1s" @dragover.prevent @drop.prevent="onTrackDrop">
                <label class="me-3 mb-0">Track #1</label>
                <button class="choose-track-btn" @click="triggerTrackInput" type="button">Choose Track (MP3 / WAV)</button>
                <input ref="trackInput" type="file" accept="audio/mp3,audio/wav" class="d-none" @change="onTrackChange" />
                <span v-if="trackName" class="track-name ms-3">{{ trackName }}</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import HeaderNavigation from '@/shared/Header.vue';

const coverArtUrl = ref(null);
const coverInput = ref(null);
const trackInput = ref(null);
const trackName = ref('');

// Simple area chart data (12 points, e.g., last 12 months)
const chartWidth = 540;
const chartHeight = 160;
const padding = 20;
const dataPoints = ref([120, 240, 420, 360, 500, 280, 300, 260, 310, 270, 350, 410]);

const maxValue = () => Math.max(...dataPoints.value) * 1.15;

function mapX(index, total) {
    const usableWidth = chartWidth - padding * 2;
    return padding + (usableWidth * index) / (total - 1);
}

function mapY(value) {
    const usableHeight = chartHeight - padding * 2;
    const m = maxValue();
    return padding + usableHeight - (value / m) * usableHeight;
}

function buildPaths(values) {
    const total = values.length;
    const points = values.map((v, i) => [mapX(i, total), mapY(v)]);
    // Line path
    const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');
    // Area path (close to bottom)
    const area = `${line} L ${mapX(total - 1, total)} ${chartHeight - padding} L ${mapX(0, total)} ${chartHeight - padding} Z`;
    return { line, area };
}

const linePath = computed(() => buildPaths(dataPoints.value).line);
const areaPath = computed(() => buildPaths(dataPoints.value).area);
const yScaleStep = computed(() => (chartHeight - padding * 2) / 4);

function gridY(step) {
  return padding + yScaleStep.value * step;
}

function onCoverArtChange(e) {
    const file = e.target.files[0];
    if (file) {
        coverArtUrl.value = URL.createObjectURL(file);
    } else {
        coverArtUrl.value = null;
    }
}
function triggerCoverInput() {
    coverInput.value && coverInput.value.click();
}
function triggerTrackInput() {
    trackInput.value && trackInput.value.click();
}

function onCoverDrop(e) {
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        coverArtUrl.value = URL.createObjectURL(file);
    }
}

function onTrackChange(e) {
    const file = e.target.files && e.target.files[0];
    if (file) {
        trackName.value = file.name;
    }
}

function onTrackDrop(e) {
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (file && (file.type === 'audio/mp3' || file.type === 'audio/wav' || file.name.match(/\.(mp3|wav)$/i))) {
        trackName.value = file.name;
    }
}
</script>
<style scoped>
.streaming-service {
    position: relative;
    min-height: 100vh;
    padding: 16px 0 56px;
}

/* Animated gradient background with soft blobs */
.streaming-service::before,
.streaming-service::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
}

.streaming-service::before {
    background: radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.25), transparent 60%),
                radial-gradient(900px 500px at 90% 20%, rgba(236,72,153,0.20), transparent 60%),
                radial-gradient(800px 600px at 50% 90%, rgba(34,197,94,0.18), transparent 60%),
                linear-gradient(135deg, #0f0f1a 0%, #0b0b12 40%, #111827 100%);
    animation: gradientShift 18s ease-in-out infinite alternate;
}

.streaming-service::after {
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
    padding: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}

/* Analytics */
.analytics-card { margin-top: 16px; }
.analytics-inner { gap: 20px; }
.analytics-list { padding: 8px 12px; }
.analytics-item { color: #0b0b12; font-weight: 700; font-size: 2rem; line-height: 1.2; }
.analytics-item + .analytics-item { margin-top: 12px; }
.analytics-meta { color: rgba(0,0,0,0.7); font-weight: 600; margin-left: 6px; }

.analytics-chart { width: 100%; max-width: 560px; }
svg { display: block; width: 100%; height: auto; }
.grid line { stroke: rgba(255,255,255,0.15); stroke-width: 1; }
.line { fill: none; stroke-width: 2.5; filter: drop-shadow(0 1px 0 rgba(0,0,0,0.15)); stroke-linecap: round; }
.area { filter: drop-shadow(0 6px 12px rgba(244,63,94,0.25)); opacity: 0.95; }

@media (max-width: 992px) {
  .analytics-inner { flex-direction: column; align-items: flex-start; }
  .analytics-item { font-size: 1.5rem; }
}

/* Brand colors */
.brand { display: inline-block; padding-right: 4px; }
.brand.spotify { color: #1DB954; }
.brand.apple { color: #FA57C1; }
.brand.youtube { color: #FF0000; }

.fade-in {
    opacity: 0;
    animation: fadeInUp .6s ease forwards;
    animation-delay: var(--delay, 0s);
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Chart */
.chart-label { color: #fff; font-weight: 600; letter-spacing: .2px; }
.chart-meta { color: rgba(255,255,255,0.7); font-size: .9rem; }

.bar-container {
    position: relative;
    width: 100%;
    height: 14px;
    border-radius: 999px;
    background: rgba(255,255,255,0.08);
    overflow: hidden;
}
.bar-fill {
    height: 100%;
    width: var(--progress);
    border-radius: inherit;
    background: linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2)) padding-box,
                linear-gradient(90deg, #fff, #fff) border-box;
    position: relative;
    isolation: isolate;
    animation: progressPulse 2.4s ease-in-out infinite;
}
.bar-fill.spotify { background: linear-gradient(90deg, #1DB954, #32E28B); }
.bar-fill.apple { background: linear-gradient(90deg, #FA57C1, #FF9AD8); }
.bar-fill.youtube { background: linear-gradient(90deg, #FF0000, #FF6B6B); }

.bar-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
    transform: translateX(-100%);
    animation: shine 3s ease-in-out infinite;
}

@keyframes shine {
    0% { transform: translateX(-100%); }
    60% { transform: translateX(120%); }
    100% { transform: translateX(120%); }
}

@keyframes progressPulse {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.15); }
}
.cover-art-upload {
    min-width: 220px;
}
.upload-hint { color: rgba(255,255,255,0.85); font-size: .9rem; }
.cover-art-preview {
    width: 200px;
    height: 200px;
    background: rgba(255,255,255,0.08);
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px dashed rgba(255,255,255,0.35);
    overflow: hidden;
}
.cover-art-img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 16px;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}
.choose-photo-btn {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.6);
    color: #fff;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s, box-shadow .2s;
    outline: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}
.choose-photo-btn:hover {
    background: rgba(255,255,255,0.18);
    color: #fff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.28);
}
.choose-photo-btn-overlay {
    top: unset;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0,0,0,0.4);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.6);
}
.choose-track-btn {
    background: transparent;
    color: #fff;
    border: 1px solid rgba(255,255,255,0.7);
    border-radius: 56px;
    padding: 1rem 2rem;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.14);
    transition: box-shadow 0.3s, background 0.2s, color 0.2s, transform .15s ease;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
}
.choose-track-btn:hover {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.45),
      0 0 40px rgba(255, 255, 255, 0.10),
      0 0 60px rgba(255, 255, 255, 0.20);
    background: rgba(255,255,255,0.10);
    color: #fff;
    border: 1px solid rgba(255,255,255,0.9);
    transform: translateY(-1px);
}
.track-name { color: rgba(255,255,255,0.8); font-size: .95rem; }

/* Form grid & inputs */
.form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(220px, 1fr));
    gap: 16px;
}
@media (max-width: 992px) {
    .form-grid { grid-template-columns: 1fr; }
}
.form-cell { display: flex; flex-direction: column; }
.form-label { color: rgba(255,255,255,0.9); margin-bottom: 6px; }
.form-control-glass {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.22);
    color: #fff;
    border-radius: 10px;
    padding: 10px 12px;
    transition: border-color .2s, box-shadow .2s, background .2s;
}
.form-control-glass:focus {
    background: rgba(255,255,255,0.10);
    border-color: rgba(255,255,255,0.6);
    box-shadow: 0 0 0 4px rgba(255,255,255,0.08);
}
</style>