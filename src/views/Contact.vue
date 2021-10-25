<template>
  <div class="contact">
    <Header></Header>
    <div class="contact_wrapper">
      <div class="contact_wrapper_box">
        <div class="contact_wrapper_top top">
          <div class="top_left">
            <img src="../../public/assets/images/ginette.jpg" alt="" />
          </div>

          <div class="top_right">
            <p class="name">{{ menagere.name.Ginette }}</p>
            <p class="age">{{ menagere.age.Ginette }} ans</p>
            <p class="experience">
              {{ menagere.experience.Ginette }} d'expérience
            </p>
          </div>
        </div>
        <div class="contact_wrapper_bottom bottom">
          <div class="bottom_left">
            <p>{{ services.Ginette }} services réalisés</p>
            <p>{{ clients.Ginette }} clients</p>
          </div>
          <div class="bottom_right">
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Contact",
  components: {
    Header,
  },
  data() {
    return {
      menagere: {
        name: {
          Ginette: "Ginette Ménagère",
          Bernard: "Bernard Savon",
          Jean: "Jean Raenette",
        },
        age: {
          Ginette: 97,
          Bernard: 45,
          Jean: 22,
        },
        experience: {
          Ginette: 103,
          Bernard: 12,
          Jean: 3,
        },
      },
      services: {
        Ginette: 1090,
      },
      clients: {
        Ginette: 300,
      },
    };
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
  justify-content: center;
  align-items: center;
}

img {
  width: 200px;
  height: 200px;
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
}
</style>
