<template>

    <HeaderNavigation />

    <div class="web-container container">
        <div class="streaming-service d-flex flex-column">
            <div class="streaming-dashboard">
                <div class="streams-chart d-flex flex-column align-items-start">
                    <div class="chart-bar mb-2">
                        <label>Spotify</label>
                        <div class="bar-container" style="background: #eee; width: 300px; height: 20px; border-radius: 10px; overflow: hidden;">
                            <div style="background: #1DB954; width: 70%; height: 100%;"></div>
                        </div>
                        <span class="ms-2">X Streams</span>
                    </div>
                    <div class="chart-bar mb-2">
                        <label>Apple Music</label>
                        <div class="bar-container" style="background: #eee; width: 300px; height: 20px; border-radius: 10px; overflow: hidden;">
                            <div style="background: #FA57C1; width: 50%; height: 100%;"></div>
                        </div>
                        <span class="ms-2">X Streams</span>
                    </div>
                    <div class="chart-bar mb-2">
                        <label>Youtube Music</label>
                        <div class="bar-container" style="background: #eee; width: 300px; height: 20px; border-radius: 10px; overflow: hidden;">
                            <div style="background: #FF0000; width: 30%; height: 100%;"></div>
                        </div>
                        <span class="ms-2">X Streams</span>
                    </div>
                </div>
            </div>
            <!-- Main upload section: flex row, cover art left, form right -->
            <div class="streaming-upload-main d-flex flex-row justify-content-center align-items-start w-100 mt-4">
                <!-- Cover Art Upload Left -->
                <div class="cover-art-upload d-flex flex-column align-items-center me-5">
                    <div class="cover-art-preview position-relative mb-2">
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
                <div class="streaming-upload-inputs d-flex flex-wrap align-items-start" style="flex: 1;">
                    <div class="mb-3">
                        <label class="form-label">Release Name</label>
                        <input type="text" class="form-control" id="ReleaseName" placeholder="Release Name">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Release Version</label>
                        <input type="text" class="form-control" placeholder="Release Version">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Primary artist</label>
                        <input type="text" class="form-control" placeholder="Primary artist">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Featuring artist</label>
                        <input type="text" class="form-control" placeholder="Featuring artist">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Contributors</label>
                        <input type="text" class="form-control" placeholder="Contributors">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Roles</label>
                        <input type="text" class="form-control" placeholder="Roles">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Genre</label>
                        <input type="text" class="form-control" placeholder="Genre">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Subgenre</label>
                        <input type="text" class="form-control" placeholder="Subgenre">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Type of Release</label>
                        <input type="text" class="form-control" placeholder="Type of Release">
                    </div>
                </div>
            </div>
            <!-- Track upload section -->
            <div class="track-uploading-button d-flex align-items-center mt-4">
                <label class="me-3 mb-0">Track #1</label>
                <button class="choose-track-btn" @click="triggerTrackInput" type="button">Choose Track (MP3 / WAV)</button>
                <input ref="trackInput" type="file" accept="audio/mp3,audio/wav" class="d-none" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import HeaderNavigation from '@/shared/Header.vue';

const coverArtUrl = ref(null);
const coverInput = ref(null);
const trackInput = ref(null);

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
</script>
<style scoped>
.cover-art-upload {
    min-width: 220px;
}
.cover-art-preview {
    width: 200px;
    height: 200px;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid #eee;
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
    background: transparent;
    border: 2px solid #222;
    color: #222;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    outline: none;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
}
.choose-photo-btn:hover {
    background: #222;
    color: #fff;
}
.choose-photo-btn-overlay {
    top: unset;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255,255,255,0.85);
    color: #222;
    border: 2px solid #222;
}
.choose-track-btn {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 56px;
    padding: 1rem 2rem;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    transition: box-shadow 0.3s, background 0.2s, color 0.2s;
    cursor: pointer;
    outline: none;
    margin-left: 10px;
}
.choose-track-btn:hover {
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.9),
      0 0 40px rgba(255, 255, 255, 0.1),
      0 0 60px rgba(255, 255, 255, 0.2);
    background: rgba(255,255,255,0.08);
    color: #fff;
    border: 2px solid #fff;
}
</style>