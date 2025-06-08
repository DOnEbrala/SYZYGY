<template>

    <HeaderNavigation />

    <div class="web-container container">
        <div class="streaming-service d-flex flex-column">
            <div class="streaming-dashboard">
                <div class="spotify-streams">
                    Spotify X Streams
                </div>
                <div class="apple-music-streams">
                    Apple Music X Streams
                </div>
                <div class="youtube-music-streams">
                    Youtube Music X Streams
                </div>
            </div>
            <div class="streaming-upload-inputs d-flex justify-content-center align-items-center flex-wrap">
                <div class="logo-uploading"></div>
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
            <div class="track-uploading-button">
                <label>Track #1</label>
            </div>

        </div>
    </div>
</template>
<style></style>
<script setup>
import HeaderNavigation from '@/shared/Header.vue';
</script>