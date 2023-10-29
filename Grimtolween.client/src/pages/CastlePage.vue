<template>
    <section class="page">

        <section class="row justify-content-center text-center text-light">
            <h1>
                Welcome to Grimtol Castle
            </h1>
            <p>
                Long live the King!
            </p>
        </section>
        <!-- vista picture background-->
        <section class="row text-light">
            <img src="../assets/CGAssets/img/grimtolTownWideLowContrast.png" alt="town vista" class="banner elevation-4">

            <!-- <img src="../assets/CGAssets/img/characters/King.png" alt=""
            class="elevation2 col-md-6 col-12 order-md-1 order-0 king-img">

        <div class="col-md-6 col-12 order-md-1 order-0 pt-md-3 px-md-5">
            <h2>
                OUR ILLUSTRIOUS KING
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis nemo veniam magnam ad
                nesciunt repellat. Nam veniam, voluptates inventore debitis impedit voluptatum accusamus quo ad eaque vero,
                recusandae minima.
            </p>
        </div> -->
            <h3>Schedule a tour</h3>
            <section class="row justify-content-around">
                <div class="text-center my-3">
                    <h3>In order to accomodate a visit with the king, please let us know...</h3>
                </div>
                <div class="col-md-3 col-12">
                    <h5>
                        Do you know your blood type?
                    </h5>
                </div>

                <div class="col-md-3 col-12">
                    <h5>
                        Are you diabetic?
                    </h5>
                </div>

                <div class="col-md-3 col-12">
                    <h5>
                        Are you carrying any blood-borne diseases?
                    </h5>
                </div>
            </section>

        </section>
        <div class="component">


        </div>
    </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
.banner {
    width: 100%;
    max-height: 25dvh;
    object-fit: cover;
    object-position: center;
}

.page {
    min-height: 100dvh;
}

.king-img {
    // background-image: url('C:\Users\camil\CodeWorks\Hack-o-ween\Grimtolween\Grimtolween.client\src\assets\CGAssets\img\characters\King.png');
    object-fit: contain;
    object-position: center;
    max-height: 35dvh;
}

.frosted-card {
    backdrop-filter: blur(3px);
    background-color: rgba(145, 147, 150, 0.455);
    overflow-wrap: break-word;
}

.frosted-card:hover {
    backdrop-filter: blur(3px);
    background-color: rgba(218, 218, 218, 0.925);
    border: 0;
    box-shadow: 0 0 10px 2px rgb(218, 218, 218);
    transition: .35s ease;
}
</style>