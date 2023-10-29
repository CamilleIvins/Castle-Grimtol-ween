<template>
    <section class="row justify-content-center text-center text-light">
        <h1>
            Welcome to Grimtol Castle
        </h1>
        <p>
            Long live the King!
        </p>
    </section>
    <!-- vista picture background-->
    <section>
        <img src="../assets/CGAssets/img/grimtolTownWideLowContrast.png" alt="town vista" class="banner elevation-4">
    </section>
    <section>
        <div class="rounded king-img">

        </div>

        <div>
            <h3>
                OUR ILLUSTRIOUS KING
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, blanditiis nemo veniam magnam ad
                nesciunt repellat. Nam veniam, voluptates inventore debitis impedit voluptatum accusamus quo ad eaque vero,
                recusandae minima.
            </p>
        </div>
    </section>
    <div class="component">


    </div>
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

.king-img {
    background-image: url(/assets/CG_assets/img/characters/King.png);
    object-fit: cover;
    object-position: center;
}
</style>