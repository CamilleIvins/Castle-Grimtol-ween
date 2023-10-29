<template>
    <section class="container-fluid page">
        <section class="rounded">
            <img src="https://cdn1.epicgames.com/ue/product/Screenshot/bOti6pArJYU-1920x1080-fb6d0dfd6bc071c3e3f3bb5f6dae7b91.jpg?resize=1&w=1920"
                class="bg-banner px-0" alt="">
        </section>


        <section class="row justify-content-center">
            <div class="col-md-3 col-12 px-0">
                <h3 class="text-center text-light my-3">
                    The Royal Guard
                </h3>
                <img src="../assets/CGAssets/img/characters/RatKnight.png" class="portrait" alt="">

            </div>
        </section>
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
.bg-banner {
    object-fit: cover;
    object-position: center;
    max-height: 30dvh;
    width: 100%;

}

.portrait {
    border-radius: 50%;
}

.page {
    min-height: 100dvh;
}
</style>