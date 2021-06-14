<template>
  <Header />
  <Plp msg="Our selection" />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import 'normalize.css';
import Header from "./components/Header/Header.vue";
import Plp from "./components/Plp/Plp.vue";
import Footer from "./components/Footer/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Plp,
    Footer,
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
}
</style>
