<template>
  <body class="bg-img">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
    <footer class="bg-dark text-light">
      Made with 💖 by CodeWorks
    </footer>
  </body>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

.bg-img {
  // background-image: url(https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-image: url(https://images.unsplash.com/photo-1505635552518-3448ff116af3?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  object-fit: cover;
  object-position: center;
  background-attachment: fixed;
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
