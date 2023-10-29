<template>
    <section class="container-fluid">
        <section class="rounded">
            <img src="https://images.pixexid.com/an-antique-apothecary-cabinet-filled-with-jars-vials-and-strange-ingredients-cth6tyw6.jpeg"
                class="bg-banner px-0" alt="">
        </section>

        <h3 class="text-center text-light my-3">
            Choose from our exceptional healers
        </h3>
        <section class="row justify-content-around">
            <div class="col-md-3 col-12 px-0 rounded frosted-card">
                <img src="../assets/CGAssets/img/characters/GhostHealer.png" class="portrait" alt="">
                <div class="text-center text-light">
                    <h5>
                        Our Healer
                    </h5>
                    <p>Now a long-time resident of the city, this renowned healer traveled there for the kings bounty.
                        Fortunately for you, she
                        she is the most gentle of practitioners. Believe us when we tell you you wonnt feel a thing.</p>
                </div>

            </div>

            <div class="col-md-3 col-12 px-0 rounded frosted-card">
                <img src="../assets/CGAssets/img/characters/MummyMerchant.png" class="portrait" alt="">
                <div class="text-center text-light">
                    <h5>
                        Our Alchemist
                    </h5>
                    <p>Known by may names and faces, the Grimtol alchemist specializes in goods to rejuvenate the body and
                        mind.
                        Products sold prove the most restorative of serums. *No refund policy*</p>
                </div>

            </div>

            <div class="col-md-3 col-12 px-0 rounded frosted-card">
                <img src="../assets/CGAssets/img/characters/ZombieWizard.png" class="portrait" alt="">
                <div class="text-center text-light">
                    <h5>
                        Our Wizard
                    </h5>
                    <p>A seeker of knowledge, gathering the greatest minds the realm offered to the city, this healer
                        contributes to our most innovative cures, learn more of his research at the academy.
                    </p>
                </div>

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
    filter: grayscale(90%);
    filter: hue-rotate(70deg);
}

.portrait {
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
}

.frosted-card {
    backdrop-filter: blur(3px);
    background-color: rgba(145, 147, 150, 0.192);
    overflow-wrap: break-word;
}

.frosted-card:hover {
    backdrop-filter: blur(3px);
    background-color: rgba(218, 218, 218, 0.192);
    border: 0;
    box-shadow: 0 0 10px 2px rgb(218, 218, 218);
    transition: .35s ease;
}
</style>