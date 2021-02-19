<template>
  <v-app id="app">
    <Navbar></Navbar>
    <router-view class="views"></router-view>
    <Footer></Footer>
  </v-app>
</template>

<script>
const Navbar = () => import('./components/layout/Navbar')
const Footer = () => import('./components/layout/Footer')
export default {
  components: { Navbar, Footer }
}
</script>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .views {
    flex-grow: 1;
  }
</style>
