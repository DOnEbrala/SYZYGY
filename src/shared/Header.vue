<template>
    <header>
        <div class="container web-container justify-content-between align-items-center">
            <div class="row w-100 main-navigation">
                <div class="col-4">
                    <RouterLink to="/">
                        <img src="../assets/Images/header/Syzygy-logo.webp">
                    </RouterLink>
                </div>
                <div class="col-8 d-flex justify-content-end align-items-center gap-1 gap-sm-4">
                    <div class="main-navigation-buttons d-flex column-gap-3">
                        <RouterLink to="/views/Streaming">
                        <button class="btn btn-primary">Services</button>
                        </RouterLink>
                        <button class="btn btn-primary">About</button>
                        <button class="btn btn-primary">Log In</button>
                        <RouterLink to="/registration/Registration.vue">
                            <button class="btn btn-primary">Sign Up</button>
                        </RouterLink>

                    </div>
                </div>
            </div>

        </div>
    </header>
</template>
 <script setup>  

</script>
<style scope>
header {
    color: #ffff;
    background-color: #323232;
}
.main-navigation-buttons button{
    background-color: transparent;
    color: #ffff;
    border: none;
    font-size: 20px;
    border: 1px solid transparent;
}
.main-navigation-buttons button:hover{
    background-color: white;
    color: black;
    border-color: 1px solid #ffff;
}

.main-navigation-buttons .btn:active,
.main-navigation-buttons .btn:focus-visible{
    background-color:#323232;
    color: black;
    box-shadow: none;
    border: 1px solid #ffff;
}
</style>