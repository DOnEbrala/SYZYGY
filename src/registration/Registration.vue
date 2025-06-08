<template>
    
    <HeaderNavigation />

    <div class="container web-container">
        <div class="registration-header text-center fs-1 my-5">
            <label>Registration</label>
        </div>
        <div class="registration-inputs d-flex align-items-center justify-content-center flex-column gap-4">
            <input class="form-control" placeholder="Email..">
            <input class="form-control" placeholder="Name">
            <input class="form-control" placeholder="Surname">
            <input class="form-control" placeholder="Artist Name">
            <input class="form-control" placeholder="Existing DSP Profile Link">
            <input class="form-control" placeholder="Password">
        </div>
    </div>
</template>
<style scoped>

.registration-inputs input{
    max-width: 350px;
    padding: 15px;
}
</style>
<script setup>
import HeaderNavigation from '@/shared/Header.vue';
</script>