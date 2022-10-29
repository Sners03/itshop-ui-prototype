<script>
import HelloWorld from '../components/HelloWorld.vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useCounterStore()

    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  }
}
</script>

<template>
  <main>
    <div class="login">
      <p>Username</p>
      <input type="text" placeholder="Username">
      <p>Passwort</p>
      <input type="text" placeholder="passwort">
      <router-link to="/shop">
      <p @click="store.login()">Login</p> </router-link>
      <router-link to="/shop">
      <p @click="store.employee_login()">Employee Login</p> </router-link>
    </div>
  </main>
</template>

<style>
  .login {
    margin-left: 40%;
    margin-right: 40%;
    width: 20%;
  }
</style>
