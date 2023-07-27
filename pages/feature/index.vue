<template>
  <div class="featured-products">
    <h1>Featured</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <nuxt-link
          :to="{
            name: 'product-id',
            params: { id: product.id, slug: product.name.toLowerCase() }
          }"
        >{{ product.name }}</nuxt-link>
        <!-- THIS WOULD BE THE MODAL FOR THE PRODUCT -->
        <div v-if="activeModal === product.id">
          <div class="modal">
            {{ product.name }}
            <button @click="hideProductModal">X</button>
            <button @click="nextModal">Next</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import products from "../../static/products";

export default {
  data() {
    return {
      activeModal: null
    };
  },
  asyncData() {
    return {
      products
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log({to, from})
    if (to.name === "product-id") {
      console.log(to.name)
      this.displayProductModal(to);
    } else {
      next();
    }
  },
  methods: {
    displayProductModal(route) {
      this.activeModal = route.params.id;
      console.log(route.path)
      window.history.pushState({}, null, route.path);
    },
    hideProductModal() {
      this.activeModal = null;
      window.history.pushState({}, null, this.$route.path);
    },
    nextModal() {
      const productNext = products[Math.floor(Math.random() * 5) + 1]
      this.activeModal = productNext.id;
      const path = `/product/${productNext.id}`
      window.history.pushState({}, null, path);
    }
  }
};
</script>

<style scoped>
.featured-products {
  text-align: center;
}

.featured-products h1 {
  font-size: 36px;
  margin-bottom: 40px;
}

.featured-products li {
  margin-bottom: 30px;
}

.featured-products a {
  font-size: 24px;
}

.featured-products button {
  background-color: #ddd;
  padding: 2px 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
</style>
