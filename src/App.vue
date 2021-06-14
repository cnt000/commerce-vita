<template>
  <Plp msg="Our selection" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Plp from "./components/Plp.vue";

export default defineComponent({
  name: "App",
  components: {
    Plp,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
