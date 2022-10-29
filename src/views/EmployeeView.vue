<script setup>
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <main>
    <table>
      <tr>
        <td> Auftrag</td>
        <td> id</td>
        <td> Kunde</td>
        <td> Annahme</td>
      </tr>
      
      <tr>
        <td> Maus Ankauf</td>
        <td>1</td>
        <td>B2C</td>
        <td> <button>
      Annehmen
    </button></td>
      </tr>
      <tr>
        <td> Tastatur kauf</td>
        <td> 2</td>
        <td>B2B</td>
        <td> <button>
      Annehmen
    </button></td>
      </tr>
      <tr>
        <td> Rechner kauf</td>
        <td> 3</td>
        <td>B2B</td>
        <td> <button>
      Annehmen
    </button></td>
      </tr>
    </table>
    
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