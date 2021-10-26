<template>
  <div class="contact">
    <Header></Header>
    <div class="contact_wrapper">
      <div class="contact_wrapper_box">
        <div class="contact_wrapper_top top">
          <div class="top_left">
            <img :src="require(`../../public/assets/images/${listEmp[idElem].img}`)" alt="" />
          </div>

          <div class="top_right">
            <p class="name">{{ listEmp[idElem].name }}</p>
            <p class="age">{{listEmp[idElem].age }} ans</p>
            <p class="experience">
              {{ listEmp[idElem].experience }} d'expériences
            </p>
          </div>
        </div>
        <div class="contact_wrapper_bottom bottom">
          <div class="bottom_left">
            <p class="services">{{ listEmp[idElem].services }} services réalisés</p>
            <p class="clients">{{ listEmp[idElem].clients }} clients</p>
          </div>
          <div class="bottom_right">
            <p class="dispo">Disponible le : {{ listEmp[idElem].dispo }}</p>
            <p class="tarif">Tarif horaire : {{ listEmp[idElem].tarif }}€/heure</p>
          </div>
        </div>
        <footer>
          <div class="footer_left">
            <p class="note">Note : 4.5/5</p>
          </div>
          <div class="footer_right">
            <div class="contact_button" @click="goToReserve()">
              <button>Réserver</button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import listEmp from "../../data.js";

export default {
  name: "Contact",
  components: {
    Header,
  },
  data() {
    return {
      listEmp,
      idElem: this.$route.params.id,
    };
  },
  methods: {
    goToReserve() {
      this.$router.push("/reserve");
    },
  },
};
</script>

<style scoped>
.contact_wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.contact_wrapper_box {
  width: 80%;
}

.contact_wrapper_top {
  margin-top: 3%;
  display: grid;
  grid-template-columns: 40% 60%;
}

.top_left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20%;
}

img {
  width: 200px;
  height: 200px;
  border-radius: 28px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

.name,
.age,
.experience {
  display: flex;
  justify-content: flex-start;
}

p {
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 0.7px;
  color: #1c4a15;
}

.contact_wrapper_bottom {
  margin-top: 10%;
  display: grid;
  grid-template-columns: 50% 50%;
}

.bottom_left {
  border-right: 2px solid #1c4a15;
  padding-left: 16%;
}

.bottom_right {
  padding-left: 16%;
}

.services,
.clients,
.dispo,
.tarif,
.note {
  display: flex;
  justify-content: flex-start;
}

footer {
  margin-top: 3%;
  display: grid;
  grid-template-columns: 50% 50%;
}

.footer_left {
  padding-left: 16%;
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
</style>
