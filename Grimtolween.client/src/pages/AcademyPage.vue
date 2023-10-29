<template>
    <section class="container-fluid page">

        <section class="container-fluid">
            <section class="rounded">
                <img src="https://i.pinimg.com/1200x/81/4e/73/814e738d69d0932fb126f96056755e52.jpg" class="bg-banner px-0"
                    alt="">
            </section>
        </section>

        <section class="row justify-content-center">
            <h2 class="text-center text-light my-3">
                Staying awhile? Consider enrolling in a day course
            </h2>
        </section>

        <section class="text-light my-5">
            <section class="row justify-content-center my-5">
                <div class="col-md-5 col-12">
                    <img class="school"
                        src="https://www.slate.com/content/dam/slate/blogs/atlas_obscura/2014/10/06/brains_in_jars_at_the_cushing_center_in_the_yale_medical_library/14703277455_81dfa375ef_k.jpg.CROP.promo-large2.jpg"
                        alt="">
                </div>

                <div class="col-md-5 col-12 text-end frosted-card">
                    <h3>
                        INTRO TO NEUROANATOMY
                    </h3>
                </div>
            </section>

            <section class="row justify-content-center my-5">
                <div class="col-md-5 col-12">
                    <img class="school" src="https://library.medicine.yale.edu/sites/default/files/thisone.png" alt="">
                </div>

                <div class="col-md-5 col-12 text-end frosted-card">
                    <h3>
                        ADVANCED NEUROANATOMY
                    </h3>
                </div>
            </section>

            <section class="row justify-content-center my-5">
                <div class="col-md-5 col-12">
                    <img class="school"
                        src="https://4.bp.blogspot.com/-N7fVlTaXl24/T3ZUY5aj1II/AAAAAAAAASk/XMehqxBvsR0/s1600/BrainCanning.jpg"
                        alt="">
                </div>

                <div class="col-md-5 col-12 text-end frosted-card">
                    <h3>
                        CANNING 101
                    </h3>
                </div>
            </section>
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
.page {
    min-height: 100dvh;
}

.school {
    object-fit: cover;
    object-position: center;
    max-height: 35dvh;
    width: 100%;
    border-radius: 10px;
}

.bg-banner {
    object-fit: cover;
    object-position: center;
    max-height: 30dvh;
    width: 100%;
    filter: grayscale(90%);
    filter: brightness(70%);
    filter: hue-rotate(270deg);
}
</style>