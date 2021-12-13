<template>
  <div>
    <Navbar />
    <div id="content" class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
@import "@/styles/app.scss";
</style>
