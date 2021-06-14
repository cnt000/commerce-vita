<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-if="products === null">Loading ...</div>
    <ul>
      <li v-bind:key="product.id" v-for="product in products">
        <a href="#">
          <img v-bind:src="product.image" alt="" />
          <h2>{{ product.title }}</h2>
          <div>{{ product.price }}</div>
          <!-- <div class="description">{{ product.description }}</div> -->
          <div class="category">{{ product.category }}</div>
          <button>Add To Cart</button>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Plp",
  props: {
    msg: String,
  },
  data() {
    return { products: null };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const data = await fetch("https://fakestoreapi.com/products");
      this.products = await data.json();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}
li {
  flex-basis: 50%;
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
  }

  img {
    margin: 0 auto;
    display: block;
    width: auto;
    height: 250px;
  }
}
.description {
  height: 100px;
}
button {
  width: 200px;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
