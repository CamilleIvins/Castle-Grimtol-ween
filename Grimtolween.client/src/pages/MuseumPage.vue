<template>
    <div class="component text-center text-light">
        <h1>
            Welcome to the Obelisk
        </h1>
        <p>
            Check out some of our prize-winning sculptures
        </p>

        <section class="col-12 d-flex justify-content-center text-light creepy-carousel gx-0">
            <div id="grimtol-carousel" class="carousel slide col-md-8 col-12 mt-5" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#grimtol-carousel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#grimtol-carousel" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#grimtol-carousel" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-item readability active">
                    <div>
                        <h5>
                            Schedule a Castle Tour
                        </h5>
                    </div>
                    <img src="" alt="slide 1" class="for-carousel ">
                </div>

                <div class="carousel-item readability">
                    <div>
                        <h5>
                            State of the Art Research
                        </h5>
                        <img src="" alt="slide 2" class="for-carousel ">
                    </div>
                </div>

                <div class="carousel-item readability">
                    <div>
                        <h5>
                            Adventure Awaits!
                        </h5>
                    </div>
                    <img src="" alt="slide 3" class="for-carousel ">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#grimtol-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#grimtol-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </section>

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


<style lang="scss" scoped></style>