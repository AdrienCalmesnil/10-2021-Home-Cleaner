<template>
  <div class="reserve">
    <div class="reserve_wrapper">
      <h1>Confirmation de réservation</h1>
      <div class="reserve_choice">
        <span>Choix du jour : 
          <select name="date" id="date" required>
            <option value="">--Choisissez un jour--</option>
            <option value="dispo1">{{ listEmp[idElem].dispo1 }}</option>
            <option value="dispo2">{{ listEmp[idElem].dispo2 }}</option>
          </select> </span>
        <span>Choix de l'horaire : 
          <select name="heure" id="heure" required>
            <option value="">--Choisissez un horaire--</option>
            <option value="matin">Matin</option>
            <option value="après-midi">Après-midi</option>
          </select>
        </span>
      </div>
      <div class="reserve_adresse">
        <p>Adresse client : 
          <input type="text" id="adresse" required>
        </p> 
      </div>
      <div class="reserve_city">
        <span>Code postal : 
          <input type="text" id="code_postal" required>
        </span>
        <span>Ville : 
          <input type="text" id="ville" required>
        </span>
      </div>
      <div class="button">
        <button>Confirmer</button>
      </div>
    </div>
  </div>
</template>

<script>
import listEmp from "../../data.js";

export default {
  name: "Reserve",
  data() {
    return {
      listEmp,
      idElem: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
.reserve{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reserve_wrapper{
  height: 80%;
  width: 80%;
}

.reserve_wrapper h1{
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: 0.7px;
  color: #1C4A15;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}



</style>
