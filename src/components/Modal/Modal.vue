<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal-backdrop" @click="closeModal()" />

      <div class="modal-dialog">
        <div class="modal-header">
          <button type="button" class="modal-close" @click="closeModal()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </svg>
          </button>
        </div>

        <div class="modal-body">
          <div class="product-container"
          itemscope itemtype="https://schema.org/Product">
            <div class="first-container">
              <div class="image-container">
                <img loading="lazy" :src="product.image" alt="" itemprop="image" />
              </div>
              <div class="modal-footer">
                <button
                  class="add-to-cart"
                  @click.prevent="$refs.addToCart.openBadge(product.title)"
                >
                  Add To Cart
                </button>
              </div>
            </div>
            <div class="info-container">
              <span class="title" itemprop="name">{{ product.title }}</span>
              <span class="price" itemprop="price">Price: €{{ product.price }}</span>
              <span class="description" itemprop="description">{{ product.description }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <badge ref="addToCart"></badge>
</template>

<script lang="ts">
import Badge from "../Badge/Badge.vue";
import { Product as IProduct } from "../../types";

export default {
  name: "Modal",
  components: {
    Badge,
  },
  data(): { show: boolean; product: IProduct } {
    return {
      show: false,
      product: {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
      },
    };
  },
  methods: {
    closeModal(): void {
      this.show = false;
      document.querySelector("body")?.classList.remove("overflow-hidden");
    },
    openModal(product: IProduct): void {
      this.product = product;
      this.show = true;
      document.querySelector("body")?.classList.add("overflow-hidden");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/_add-to-cart";

.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  .modal-backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  .modal-dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  .modal-close {
    width: 2rem;
    height: 2rem;
    border: none;
    margin: 0;
    padding: 0;
    overflow: visible;
    background: transparent;
    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;
    /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */
    line-height: normal;
    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable `input` types in iOS */
    -webkit-appearance: none;
  }
  .modal-header {
    padding: 1.5rem 1.5rem 0.8rem;
    display: flex;
    justify-content: flex-end;
  }
  .modal-body {
    padding: 0.8rem 1.5rem 0.8rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .modal-footer {
    padding: 0.8rem 1.5rem 1.5rem;
  }
}
.product-container {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  border-top: 1px solid #164733;
  .first-container {
    width: 100%;
  }
  .image-container {
    margin: 0 auto;
    position: relative;
    background: #e9f4e7;
    padding-top: calc(1500 / 1050 * 100%);
  }
  .info-container,
  .image-container {
    width: 100%;
  }
  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 1px solid #164733;
    border-bottom: 1px solid #164733;
  }
  .category,
  .title,
  .price,
  .description {
    width: 80%;
    padding: 1rem;
  }
  .category,
  .title,
  .price {
    border-bottom: 1px solid #164733;
  }
  .title,
  .price {
    font-weight: 700;
  }
  .description {
    line-height: 1.6;
    font-size: 0.9rem;
  }
}

img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (min-width: 768px) {
  .product-container {
    flex-direction: row;
    border-top: none;
    .first-container {
      width: 50%;
    }
    .image-container {
      margin: auto;
      position: relative;
      background: #e9f4e7;
      padding-top: calc(1500 / 1050 * 90%);
    }
    .info-container,
    .image-container {
      width: 90%;
    }
    .info-container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 90%;
    }
    .category,
    .title,
    .price,
    .description {
      padding-bottom: 0.4rem;
      margin: 1rem;
    }
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
</style>
