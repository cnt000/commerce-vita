<template>
  <header class="header">
    <a class="skip-nav screen-reader-text" href="#maincontent"
      >Skip to main content</a
    >
    <div class="screen-reader-text">Vitavi Logo</div>
    <img class="logo" alt="Vitavi logo" src="../../assets/logo-vitavi.svg" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
});
</script>

<style scoped lang="scss">
.header {
  /* padding-top: calc(110 / 375 * 100%); */
  position: relative;
  height: 120px;
}
.logo {
  max-width: 375px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.screen-reader-text {
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
}
</style>
