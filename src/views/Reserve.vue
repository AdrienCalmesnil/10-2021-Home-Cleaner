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
      <div class="reserve_ville">
        <span>Code postal : 
          <input type="text" id="code_postal" required>
        </span>
        <span>Ville : 
          <input type="text" id="ville" required>
        </span>
      </div>
      <div class="button">
        <button @click="goToServices()">Confirmer</button>
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
  methods:{
    goToServices() {
      this.$router.push("/services");
    },
  }
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
  width: 50%;
}

.reserve_wrapper h1{
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: 0.7px;
  color: #1C4A15;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

.reserve_choice{
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
}

.reserve_adresse{
  margin-top: 10%;
}

#adresse{
  width: 30%;
}

.reserve_ville{
  margin-top: 6%;
  display: flex;
  justify-content: space-between;
}

.button{
  margin-top: 10%
}

.button button {
  cursor: pointer;
  padding: 20px 40px;
  background: #e9e3d1;
  border: none;
  border-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  color: #1c4a15;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}

.button button:hover {
  transform: scale(1.03);
}

input {
  padding: 0 0 0 6px; /*0 0 5px 6px*/ 
  outline: 0;
  border-width: 0 0 2px;
  border-color: #83735b;
  background: none;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.7px;
  color: #7a7663;
}

span, p{
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  color: #7a7663;
}



</style>
