<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

import { useProductsStore } from "@/stores/ProductsStore";



export default {
  setup() {
    const store = useCounterStore()
    const {logged_in, employee} = storeToRefs(store)
    const ProductsStore = useProductsStore();
    ProductsStore.fill();

    return {
      // you can return the whole store instance to use it in the template
      store, logged_in, employee
    }
  }
}
</script>

<template>
  <header>
    <div class="logo-banner">
      <h1>
        Computech - Shop
      </h1>
    </div>
    <div class="wrapper">
      <div class = left>
          <RouterLink to="/shop">Shop</RouterLink>
          <RouterLink v-if="employee" to="/employee">Aufträge</RouterLink>
          <RouterLink v-if="employee" to="/contract">Aktueller Auftrag</RouterLink>
          <RouterLink v-if="employee" to="/management/employee">Mitarbeitermanagement</RouterLink>
          
          <RouterLink to="/about">FAQ</RouterLink>

      </div>
      <div class = right>
          <RouterLink v-if="logged_in" to="/warenkorb">Warenkorb</RouterLink>
          <RouterLink v-if="logged_in" to="/account">My Account</RouterLink>
          <RouterLink v-else-if="!employee" to="/login">Login</RouterLink>
          <RouterLink v-if="!logged_in && !employee" to="/register">Register</RouterLink>
          <RouterLink v-else to="/" @click="store.logout">Logout</RouterLink>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

.wrapper {
  position: relative;
  background-color: #333;
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
