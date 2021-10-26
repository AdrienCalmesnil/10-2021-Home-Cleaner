<template>
  <div class="services">
    <Header></Header>
    <div class="services_wrapper">
      <div class="services_wrapper_box box">
        <div v-for="emp in listEmp" :key="emp.id">
          <div class="grid-template">
            <div class="box_left left">
              <img :src="require(`../../public/assets/images/${emp.img}`)" alt="" />
            </div>
            <div class="box_right right">
              <div class="contact">
                <p class="contact_name">{{emp.name}}</p>
                <div class="contact_button">
                  <button @click="goToContact(emp.id-1)">Contacter</button>
                </div>
              </div>
              <p class="dispo">Disponible : {{ emp.dispo }}</p>
              <p class="tarif">Tarif horaire : {{ emp.tarif }}€/heure</p>
            </div>
          </div>
        </div>

        <!--
        <div class="box_left left">
          <img src="../../public/assets/images/ginette.jpg" alt="" />
        </div>
        <div class="box_right right">
          <div class="contact">
            <p class="contact_name">Ginette Ménagère</p>
            <div class="contact_button">
              <button @click="goToContact()">Contacter</button>
            </div>
          </div>
          <p class="dispo">Disponible : {{ date.Ginette }}</p>
          <p class="tarif">Tarif horaire : {{ tarif.Ginette }}€/heure</p>
        </div>
        <div class="box_left left">
          <img src="../../public/assets/images/bernard.jpg" alt="" />
        </div>
        <div class="box_right right">
          <div class="contact">
            <p class="contact_name">Bernard Savon</p>
            <div class="contact_button">
              <button @click="goToContact()">Contacter</button>
            </div>
          </div>
          <p class="dispo">Disponible : {{ date.Bernard }}</p>
          <p class="tarif">Tarif horaire : {{ tarif.Bernard }}€/heure</p>
        </div>
        <div class="box_left left">
          <img src="../../public/assets/images/jean.jpg" alt="" />
        </div>
        <div class="box_right right">
          <div class="contact">
            <p class="contact_name">Jean Raenette</p>
            <div class="contact_button">
              <button @click="goToContact()">Contacter</button>
            </div>
          </div>
          <p class="dispo">Disponible : {{ date.Jean }}</p>
          <p class="tarif">Tarif horaire : {{ tarif.Jean }}€/heure</p>
        </div>
      -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import listEmp from "../../data.js";

export default {
  name: "services",
  components: {
    Header,
  },
  data() {
    return {
      listEmp: listEmp,
      date: {
        Ginette: "Lundi/Mardi",
        Bernard: "Samedi",
        Jean: "Jeudi/Vendredi/Dimanche",
        liste : listEmp
      },
      tarif: {
        Ginette: 10,
        Bernard: 50,
        Jean: 20,
      },
    };
  },
  methods: {
    goToContact(id) {
      this.$router.push("/contact/"+id);
    },
  },
};
</script>

<style scoped>
.services_wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.box {
  width: 80%;
  margin: 3% 10% 3% 10%;
  padding: 3% 5% 3% 5%;
  background: #fffdf4;
  /*display: grid;*/
  /*grid-template-columns: 30% 70%;*/
  border-radius: 30px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}
.grid-template{
  display: grid;
  grid-template-columns: 30% 70%;
}
.left {
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 2px solid #1c4a15;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 28px;
}

.right {
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 2px solid #1c4a15;
}

.right p {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #1c4a15;
}

.contact {
  display: grid;
  grid-template-columns: 50% 50%;
}

.contact_name {
  display: flex;
  justify-content: flex-start;
  padding-left: 10%;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #1c4a15;
}

.contact_button {
  display: flex;
  justify-content: flex-end;
}

.contact_button button {
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

.contact_button button:hover {
  transform: scale(1.03);
}

.dispo,
.tarif {
  display: flex;
  justify-content: flex-start;
  padding-left: 5%;
}
</style>
