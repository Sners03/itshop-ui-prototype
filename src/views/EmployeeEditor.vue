<template>
    <main>
      <div class="register">
        <p>Vorname</p>
        <input type="text" placeholder="Vorname">
        <p>Nachname</p>
        <input type="text" placeholder="Nachname">
        <p>Alias</p>
        <input type="text" placeholder="Username">
        <p>Email</p>
        <input type="text" placeholder="Email">
        <p>Adresse</p>
        <input type="text" placeholder="Adresse">
        <p>Passwort</p>
        <input type="password" placeholder="Passwort">
        <p>Telefon</p>
        <input type="text" placeholder="Telefonnummer">
        <p>Gehalt</p>
        <input type="text" placeholder="Gehalt">

        <label for="Bereich">Bereich wählen: </label>
        <select name="Bereich" id="Bereich">
            <option value="SALES_MANAGER">SALES_MANAGER</option>
            <option value="WAREHOUSE">WAREHOUSE</option>
            <option value="SERVICE">SERVICE</option>
            <option value="ACCOUNTANT">ACCOUNTANT</option>
            <option value="DISPATCH">DISPATCH</option>
            <option value="ADMIN">ADMIN</option>
        </select>

        <router-link to="/management/employee">
        <p>Speichern</p> </router-link>
      </div>
    </main>
  </template>
  
  <style scoped>
    .register {
      margin-left: 40%;
      margin-right: 40%;
      width: 20%;
      text-align: center;
    }
  </style>