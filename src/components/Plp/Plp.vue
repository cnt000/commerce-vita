<template>
  <div id="main-content">
    <h1 class="category">Products</h1>
    <div v-if="products === null">Loading ...</div>
    <ul class="products-list">
      <li class="product" v-bind:key="product.id" v-for="product in products">
        <a @click.prevent="$refs.productDetails.openModal(product)" href="#">
          <div class="image-container">
            <img loading="lazy" :src="product.image" alt="" />
          </div>
          <span class="title">{{ product.title }}</span>
          <span class="price">EUR {{ product.price }}</span>
          <span class="category">[{{ product.category }}]</span>
          <button class="add-to-cart">Add To Cart</button>
        </a>
      </li>
    </ul>

    <modal ref="productDetails"> </modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "../Modal/Modal.vue";
import products from "../../../data/products.json";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};
type Products = Product[];

export default defineComponent({
  name: "Plp",
  props: {
    msg: String,
  },
  components: {
    Modal,
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
.products-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
.product {
  width: 50%;
  font-size: 0.9rem;
  color: #164733;
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
  .image-container,
  .title {
    display: block;
    width: 70%;
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: auto;
  }
  .title {
    padding: 1rem 2rem;
    height: 2rem;
    text-align: left;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price {
    color: #000000;
    text-align: center;
    margin: 0.5rem 0;
    font-weight: 700;
  }
  .category {
    margin: 0 auto 1rem auto;
  }
}

.add-to-cart {
  width: 60%;
  height: 2rem;
  margin: 0 auto;
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
    }
  }
}

@media screen and (min-width: 1280px) {
  .product {
    width: 25%;
  }
}
</style>
