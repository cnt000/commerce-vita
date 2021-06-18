<template>
  <transition name="fade">
    <div class="badge" v-if="show" @click="closeBadge()">
      <div class="badge__backdrop" @click="closeBadge()" />
      <div class="badge__dialog">
        <div class="badge__body">
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
.badge {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  &__backdrop {
    background-color: rgba(196, 196, 196, 0.1);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #bff0bf;
    position: relative;
    width: 375px;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 5px 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__body {
    padding: 0.8rem;
    font-size: 1.4rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.product-title {
  color: #164733;
  font-weight: 700;
}
</style>
