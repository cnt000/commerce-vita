<template>
  <div class="image-container">
    <img loading="lazy" :src="product.image" alt="" itemprop="image" />
  </div>
  <span class="title" itemprop="name">{{ product.title }}</span>
  <span class="price" itemprop="price">€{{ product.price }}</span>
  <span class="description" itemprop="description"
    >€{{ product.description }}</span
  >
  <span class="category" itemprop="category">[{{ product.category }}]</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Product",
  props: ["product"],
});
</script>

<style scoped lang="scss">
@import "../../scss/_add-to-cart";

.product {
  width: 50%;
  font-size: 0.9rem;
  margin-bottom: 2rem;

  a,
  a:link,
  a:active,
  a:visited {
    color: #164733;
    display: block;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    justify-content: space-between;
  }
  a:hover {
    color: #247454;
  }
  .image-container {
    margin: 0 auto;
    width: 70%;
    position: relative;
    background: #e9f4e7;
    padding-top: calc(1500 / 1050 * 70%);
  }
  img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
  }
  .title {
    padding: 1rem 2rem;
    height: 2rem;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price {
    color: #0c5017;
    text-align: center;
    margin: 0.5rem 0;
    font-weight: 700;
  }
  .category {
    margin: 0 auto 1rem auto;
  }
  .description {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .product {
    width: 33%;
    font-size: 1.4rem;
    margin-bottom: 3rem;
    .title {
      height: 3.8rem;
    }
    .image-container {
      width: 60%;
      padding-top: calc(1500 / 1050 * 60%);
    }
  }
}

@media screen and (min-width: 1280px) {
  .product {
    width: 25%;
  }
}
</style>
