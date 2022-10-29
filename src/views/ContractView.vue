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
        <td> Abschließen</td>
      </tr>
      <tr>
        <td> Maus Ankauf</td>
        <td>1</td>
        <td>B2C</td>
        <td> <button>
      durchgeführt
    </button></td>
      </tr>
    </table>
    
  </main>
</template>


<style scoped>

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