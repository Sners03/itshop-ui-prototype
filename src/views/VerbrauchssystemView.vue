<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <header>
  </header>
</template>

<style scoped>

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
