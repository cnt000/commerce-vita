<template>
  <div id="main-content">
    <h1 class="plp-title">Products</h1>
    <div v-if="products === null">Loading ...</div>
    <ul class="products-list">
      <li class="product" v-bind:key="product.id" v-for="product in products">
        <a
          @click.prevent="$refs.productDetails.openModal(product)"
          href="#"
          itemscope
          itemtype="https://schema.org/Product"
        >
          <product :product="product" />
        </a>
        <button
          class="add-to-cart"
          @click.prevent="$refs.addToCart.openBadge(product.title)"
        >
          Add To Cart
        </button>
      </li>
    </ul>
    <modal ref="productDetails"></modal>
    <badge ref="addToCart"></badge>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../Modal/Modal.vue";
import Badge from "../Badge/Badge.vue";
import products from "../../../data/products.json";
import Product from "../Product/Product.vue";
import { Products } from "../../types/Products";

export default defineComponent({
  name: "Plp",
  components: {
    Modal,
    Badge,
    Product,
  },
  data() {
    let products: Products = [];
    return { products };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      // here fetch call
      // const data = await fetch("https://fakestoreapi.com/products");
      // this.products = await data.json();
      this.products = products;
    },
  },
});
</script>

<style scoped lang="scss">
@import "../../scss/variables";
@import "../../scss/_add-to-cart";

#main-content {
  color: #164733;
}
.plp-title {
  color: #3c7d38;
}
.products-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.product {
  width: 50%;
  font-size: 0.9rem;
  margin-bottom: $double-gap;

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
    padding: $base-gap $double-gap;
    height: $double-gap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price {
    color: #0c5017;
    text-align: center;
    margin: $half-gap 0;
    font-weight: 700;
  }
  .category {
    margin: 0 auto $base-gap auto;
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
