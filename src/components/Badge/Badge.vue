<template>
  <transition name="fade">
    <div class="badge" v-if="show" @click="closeBadge()">
      <div class="badge-backdrop" @click="closeBadge()" />
      <div class="badge-dialog">
        <div class="badge-body">
          <span class="product-title">{{ productTitle }}</span> added to cart
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: "Badge",
  data(): { show: boolean; productTitle: string } {
    return {
      show: false,
      productTitle: "",
    };
  },
  methods: {
    closeBadge(): void {
      this.show = false;
      document.querySelector("body")?.classList.remove("overflow-hidden");
    },
    openBadge(productTitle: string): void {
      this.productTitle = productTitle;
      this.show = true;
      document.querySelector("body")?.classList.add("overflow-hidden");
      setTimeout(() => {
        this.closeBadge();
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_badge.scss";

.product-title {
  color: #164733;
  font-weight: 700;
}
</style>
