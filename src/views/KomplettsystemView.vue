<script>
import ProductCard from "@/components/ProductCard.vue";
import { useProductsStore } from "@/stores/ProductsStore";
import { storeToRefs } from 'pinia';

export default {
  components: {
    ProductCard
  },
  setup() {
    const ProductsStore = useProductsStore();
    const {products} = storeToRefs(ProductsStore);
return{
  products
}
}
}

</script>

<template>

    
  <p v-if="!products">Loading...</p>
  <div class="container" v-else>
    <ul>
      <ProductCard 
      v-for="product in products.product"
      :key = "product.id"
      :product = "product"
      :name = "product.name"
      />
    </ul>
  </div>
</template>

<style scoped>
.container ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
.wrapper {
  position: relative;
  background-color: rgb(91, 91, 91);
  overflow: hidden;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}
.logo-banner{
  display: block;
  position: relative;
  text-align: center;
  background-color: #333;
  color: aliceblue;
}
.wrapper a {
  float: left;
  text-align: center;
  padding: 18px 20px;
  text-decoration: none;
  font-size: 18px;
}

.right{
  float: right;
}


a.router-link-exact-active {
  color: rgb(0, 0, 0);
}

.wrapper a.router-link-exact-active:hover {
  background-color: transparent;
}

.wrapper a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

.wrapper a:first-of-type {
  border: 0;
}


</style>

