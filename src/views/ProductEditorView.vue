<script>

export default {
    setup() {
    },
}
</script>


<template>
    <div class="editor">
    <p>Produktname</p>
      <input type="text" placeholder="Produktname">

      <label for="kategorie">Kategorie wählen: </label>
      <select name="kategorie" id="kategorie">
        <option value="pc">pc</option>
        <option value="laptop">laptop</option>
        <option value="maus">Maus</option>
        <option value="Tastatur">Tastatur</option>
      </select>
      <p>Kategorie Hinzufügen</p>
      <input type="text" placeholder="Neue Kategorie">
      <button> Hinzufügen</button>

      <p>Preis</p>
      <input type="text" placeholder="Preis">
      <p>Bild</p>
      <input type="file" >
      <!-- verschiedene Attribute für Verschiedene Kategorien durch 'for each'  -->
      <label for="atribute">Attribute wählen: </label>
      <select name="attribute" id="atribute" multiple>
        <option value="pc">4 Kerne</option>
        <option value="laptop">6 Kerne</option>
        <option value="maus">8 Kerne</option>
        <option value="Tastatur">32 GB RAM</option>
      </select>
      <p>Attribute Hinzufügen</p>
      <input type="text" placeholder="Neuer Attribut">
      <button> Hinzufügen</button>
      
      <br />
      <p>Sichtbarkeit</p>
      <!-- Rounded switch, src: https://www.w3schools.com/howto/howto_css_switch.asp -->
        <label class="switch">
            <input type="checkbox">
            <span class="slider round"></span>
        </label>
      <br />
      <router-link to="/shop/mock0">Vorschau </router-link>
      <router-link to="/shop/mock0">Abschließen </router-link>
    </div>

</template>
<style scoped>
.editor {
    margin-left: 40%;
    margin-right: 40%;
    width: 20%;
    text-align: center;
  }

/* von hier abwärts src: https://www.w3schools.com/howto/howto_css_switch.asp
The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* von hier abwärts src: https://stackoverflow.com/a/19207528 */
</style>