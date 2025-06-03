
<template>

    <div class="container web-container">
        <div class="syzygy-landing-page-get-started d-flex justify-content-center flex-column align-items-center m-5">
            <div class="syzygy-landing-page__header">
                <label class="fw-bold ">Simplified Music Distribution For your needs</label>
            </div>
            <div class="syzygy-landing-page_button d-flex flex-column align-items-center gap-4">
                <span class="fw-bold fs-2">Upload your music easily and let us promote it </span>
                <button class="btn btn-primary fw-bold fs-5">Get Started</button>
            </div>
        </div>
                    <div class="syzygy-landing-page_progress py-4">
                <div class="syzygy-landing-page_available-platforms text-center d-flex flex-column justify-content-center align-items-center">
                    <label class="fs-3 fw-bold m-2">Available on 200+ Platforms</label>
                    <div class="syzygy_platform-logos d-flex justify-content-around py-2">
                        <img src="../assets/Images/platform-icons/deezer.svg">
                        <img src="../assets/Images/platform-icons/arrow.png">
                        <img src="../assets/Images/platform-icons/itunes (1).png">
                        <img src="../assets/Images/platform-icons/soundcloud.png">
                        <img src="../assets/Images/platform-icons/spotify.png">
                        <img src="../assets/Images/platform-icons/youtube-music-icon.svg">
                    </div>
                    <div class="syzygy_platform-statistics d-flex justify-content-between gap-5 mt-5 w-100 fs-2">
                        <div class="artists d-flex flex-column">
                            <span>X+</span>
                            Artists
                        </div>
                        <div class="streams d-flex flex-column">
                            <span>X+</span>
                            Streams
                        </div>
                        <div class="tracks d-flex flex-column">
                            <span>X+</span>
                            Tracks
                        </div>

                    </div>
                </div>
            </div>
    </div>

</template>

<script>
export default{
    name: "syzygylanding"
}
</script>
<style scoped>
.syzygy-landing-page-get-started{
    color: #fff;
}
.syzygy-landing-page__header{
    background-color: rgba(0, 0, 0, 0.5);
}
.syzygy-landing-page__header label{
    font-size: 65px;
    text-align: center;
}
.syzygy-landing-page_progress{
    padding-left: 50px;
    padding-right: 50px;
}
.syzygy-landing-page_progress .syzygy_platform-logos{
    border: 5px solid #ffffff;
    border-radius: 52px;
    width: 560px;
    min-width: 400px;
    height: 150px;
    overflow: hidden;
}
.syzygy_platform-logos img{
    max-height: 60px;
    max-width: 60px;
    cursor: pointer;

}
.syzygy-landing-page_available-platforms{
    color: #fff;
}

</style>