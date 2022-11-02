<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main>
    <table>
      <tr>
        <td> Produkt</td>
        <td> Anzahl</td>
        <td> Preis</td>
      </tr>
      
      <tr>
        <td> Maus</td>
        <td> 5</td>
        <td> 10,00EUR</td>
      </tr>
      <tr>
        <td> GPU</td>
        <td> 2</td>
        <td> 3000,00EUR</td>
      </tr>
      <tr>
        <td> Monitor 4K OLED</td>
        <td> 3</td>
        <td> 2199,99EUR</td>
      </tr>
    </table>
    <label for="rabatt">Rabattcode wählen: </label>
      <select name="rabatt" id="rabatt">
        <option value="10prozent">10%</option>
        <option value="20prozent">20%</option>
        <option value="50Euro">50 €</option>
        <option value="100Euro">100 €</option>
      </select>
    <button>
      Kaufen
    </button>
  </main>
</template>

<style scoped>
tr:first-of-type  {
  background-color: rgb(192, 192, 192);
} 
table, tr, td {
  border: 1px solid;
}
table {
  margin-top: 1cm;
  width: 100%;
  border-collapse: collapse;
}
button {
  float: right;
  width: 3cm;
  height: 1cm;
}
</style>
