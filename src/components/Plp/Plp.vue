<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-if="products === null">Loading ...</div>
    <ul>
      <li v-bind:key="product.id" v-for="product in products">
        <a href="#">
          <div class="imageContainer">
            <img v-bind:src="product.image" alt="" />
          </div>
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
h2 {
  width: 60%;
  margin: 0 auto;
  font-size: 0.5em;
}
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
  width: 50%;
  /* border: 1px dotted blue; */
  a {
    display: block;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    justify-content: space-between;
  }
  .imageContainer {
    width: 50%;
    height: 200px;
    margin: 0 auto;
  }
  img {
    margin: 0 auto;
    display: block;
    width: 50%;
    height: auto;
  }
}
.description {
  height: 100px;
}
button {
  width: 60%;
  height: 60px;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
