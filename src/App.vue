<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>

export default {
  data: () => ({
    drawer: false,
    
  }),
  mounted(){
  }
};
</script>
<style>
@import "./assets/style.css";
@import "./assets/vendor/bootstrap/css/bootstrap.min.css";
@import "./assets/vendor/icofont/icofont.min.css";
@import "./assets/vendor/boxicons/css/boxicons.min.css";
@import "./assets/vendor/remixicon/remixicon.css";
@import "./assets/vendor/venobox/venobox.css";
@import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";

</style>