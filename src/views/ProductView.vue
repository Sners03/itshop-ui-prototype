<script>
import { useProductsStore } from "@/stores/ProductsStore";
import {useRoute} from "vue-router";
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

export default {
    setup() {
        const store = useCounterStore()
        const {logged_in, employee} = storeToRefs(store)

        const route = useRoute();
        const ProductsStore = useProductsStore();
        const name = route.params.name;
        console.log("product name:\n"+name)
        //const products = ProductsStore.products;
        const product = ProductsStore.getProductData(name);
        console.log("product data:");
        console.log(product)
        return {
            product, logged_in, employee
        }
    },
}
</script>


<template>
    <div class="site">    
    <div class="wrapp">
        <div class="image"> 
            <p>placeholder (img)</p>
        </div>
        <div class="content"> 
            <h1>Name</h1>
            <p>Kategorie</p>
            <p>Preis</p>
            <p>Anzahl</p>
            <input type="integer" name="Amount" id="amount">
            <router-link v-if="logged_in" to="/shop">In den Einkaufswagen </router-link>
            <router-link v-if="employee" to="/editor">Artikel Bearbeiten </router-link>
        </div>
    </div>
    <div class="additional">
        <h2>
            Beschreibung
        </h2>
        <h3>
            Attribute
        </h3>
        <ul>
            <li>
                Kerne: 8
            </li>
            <li>
                Wasserkühlung: nein
            </li>
            <li>
                Anschlüsse: 2x HDMI, 1x AUX, 4x USB, 1x LAN
            </li>
        </ul>
    </div>
</div>

</template>
<style scoped>
.image{
    width: 50vmin;
    height: 40vmin;
    background-color: blue;
}
.content {
    width: 50vmin;
}
.wrapp {
    display: flex;
}
.site{
    margin: 2%;
}
</style>