<template>
  <section class="container-fluid">
    <section class="row">
      <div class="text-center px-0">
        <img src="../assets/CGAssets/img/lowerRuins.png" alt="Grimtol ruins" class="ruins">
        <div class="welcome sub-title text-light">
          Welcome
        </div>
        <div class="welcome sub-title text-light">
          to
        </div>

        <nav class="row justify-content-around gx-0">
          <div class="col-md-2 col-11 my-md-0 my-1 ">
            <router-link :to="{ path: '/castle' }">
              <div class="btn btn-outline-light" style="width: 100%;">
                Castle
              </div>
            </router-link>
          </div>

          <div class=" col-md-2 col-11 my-md-0 my-1 ">
            <router-link :to="{ path: '/museum' }">
              <div class="btn btn-outline-light" style="width: 100%;">
                Museum
              </div>
            </router-link>
          </div>

          <div class=" col-md-2 col-11 my-md-0 my-1 ">
            <router-link :to="{ path: '/apothecary' }">
              <div class="btn btn-outline-light" style="width: 100%;">
                Apothecary
              </div>
            </router-link>
          </div>

          <div class=" col-md-2 col-11 my-md-0 my-1 ">
            <router-link :to="{ path: '/guard' }">
              <div class="btn btn-outline-light" style="width: 100%;">
                Guard
              </div>
            </router-link>
          </div>

          <div class=" col-md-2 col-11 my-md-0 my-1 ">
            <router-link :to="{ path: '/academy' }">
              <div class="btn btn-outline-light" style="width: 100%;">
                Academy
              </div>
            </router-link>
          </div>

        </nav>
        <section class="">

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
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d79f414-d0b7-4696-83c5-6d0ca597f09e/d84t11d-282706c9-77f6-4d56-add7-f0f4a490479c.jpg/v1/fill/w_993,h_614,q_75,strp/dark_castle_by_emkun_d84t11d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE0IiwicGF0aCI6IlwvZlwvOWQ3OWY0MTQtZDBiNy00Njk2LTgzYzUtNmQwY2E1OTdmMDllXC9kODR0MTFkLTI4MjcwNmM5LTc3ZjYtNGQ1Ni1hZGQ3LWYwZjRhNDkwNDc5Yy5qcGciLCJ3aWR0aCI6Ijw9OTkzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vS0275QY0lRPCl2HFJIfRY3xaGS3QkwcMzCrG09RVTw"
                  alt="slide 1" class="for-carousel ">
              </div>

              <div class="carousel-item readability">
                <div>
                  <h5>
                    State of the Art Research
                  </h5>
                  <img
                    src="https://images.nightcafe.studio/jobs/vsfWRYS3n42T1x4aS14W/vsfWRYS3n42T1x4aS14W--1--hqptl.jpg?tr=w-1600,c-at_max"
                    alt="slide 2" class="for-carousel ">
                </div>
              </div>

              <div class="carousel-item readability">
                <div>
                  <h5>
                    Adventure Awaits!
                  </h5>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1444146085469-2a4ef5a7e5fb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="slide 3" class="for-carousel ">
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

        </section>
        <img src="../assets/CGAssets/img/castleGrimtolLogo.png" alt="" class="grimtol-welcome">
        <div class="text-light sub-title my-2">We eagerly await your arrival</div>


      </div>
    </section>
  </section>
</template>

<script>


export default {
  setup() {

    return {}
  }
}
</script>

<style scoped lang="scss">
.container-fluid {
  max-height: 125dvh;
  overflow-y: hidden;
}

.ruins {
  width: 100%;
  max-height: 55dvh;
  object-fit: cover;
  object-position: center;
  // position: absolute;
  right: 0;
}

.grimtol-welcome {
  max-height: 30dvh;
  position: relative;
  bottom: 105dvh;
}

.welcome {
  position: relative;
  top: -50dvh;

}

.for-carousel {
  object-fit: cover;
  object-position: center;
  width: 100%;
  max-height: 45dvh;
}

.creepy-carousel {
  position: relative;
  bottom: 0;
  // left: 30dvh;
}

.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

@media screen and (max-width: 768px) {
  .grimtol-welcome {
    max-height: 20dvh;
    bottom: 99dvh;
  }

  .sub-title {
    display: none;
  }

}

.sub-title {
  position: relative;
  bottom: 103dvh
}
</style>
