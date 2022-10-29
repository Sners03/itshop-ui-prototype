<script setup>
import { RouterLink, RouterView } from "vue-router";
defineProps({
  product: {
    type: Object,
    required: true,
  },
  name: {
    type: String,
    required: true,
  }
});



//var link = "/" + product.name;
</script>

<template>
<router-link class="card" :to="{name: 'product', params: {name} }">
  <div class="link" :style="{'background-color': product.color}">
    {{product.name}}
  </div></router-link>
</template>

<style scoped>
.card {
    flex: 0 1 calc(25% - 1em);
  }
@media screen and (min-width: 40em) {
  .card {
    flex: 0 1 calc(50% - 1em);
  }
}
@media screen and (min-width: 60em){
  .card {
    flex: 0 1 calc(25% - 1em);
  }
}
  a {
    color: rgb(148, 208, 246);
    text-decoration: none;
    
  }
  .link {
    text-align: center;
    height: 10em;
    margin: 1rem .25em;
    background-color: rgb(110, 110, 110);
}
</style>
