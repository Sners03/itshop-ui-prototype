<script>
import { useProductsStore } from "@/stores/ProductsStore";
import {useRoute} from "vue-router";
export default {
    setup() {
        const route = useRoute();
        const ProductsStore = useProductsStore();
        const name = route.params.name;
        console.log("product name:\n"+name)
        //const products = ProductsStore.products;
        const product = ProductsStore.getProductData(name);
        console.log("product data:");
        console.log(product)
        return {
            product
        }
    },
}
</script>


<template>
    <div> 
       <p>{{ $route.params.name}}</p> 
       <br/>
       <p> {{ product }} </p>
    </div>

</template>