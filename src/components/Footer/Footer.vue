<template>
  <footer class="footer">
    <a href="mailto:info@product.it ">info@product.it</a> |
    <a href="tel:+39025558885">(+39) 02 5558885</a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style scoped lang="scss">
@import "../../scss/_variables";

.footer {
  background-color: #3c7d38;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: $base-gap;
  font-weight: 700;

  a,
  a:link,
  a:visited,
  a:hover {
    color: #ffffff;
    margin: 0 0.4rem;
  }
}
</style>
