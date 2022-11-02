<template>
    <main>
      <table>
        <tr>
          <td> Name</td>
          <td> id</td>
          <td> Abteilung</td>
          <td> Details</td>
        </tr>
        
        <tr>
          <td>Klaus Kinski</td>
          <td>001</td>
          <td>Service</td>
          <td> <button>
        Details
      </button></td>
        </tr>

        <tr>
          <td>Justus Jonas</td>
          <td>002</td>
          <td>Verkauf</td>
          <td> <button>
        Details
      </button></td>
        </tr>

        <tr>
          <td>Tutor Melchner</td>
          <td>003</td>
          <td>Lager</td>
          <td> <button>
        Details
      </button></td>
        </tr>

        <tr>
          <td>Bibi Bloxberg</td>
          <td>004</td>
          <td>Buchhaltung</td>
          <td> <button>
        Details
      </button></td>
        </tr>

        <tr>
          <td>James Bond</td>
          <td>007</td>
          <td>Geschäftsführung</td>
          <td> <button>
        Details
      </button></td>
        </tr>

      </table>
      <router-link to="/management/employee/new"><button>Neuer Mitarbeiter</button></router-link>
      
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