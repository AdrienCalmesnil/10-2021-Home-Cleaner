<template>
  <div class="header">
    <div class="header_wrapper container">
      <ul>
        <div class="title">
          <li class="title_item" @click="goToHome()">HomeCleaner</li>
        </div>
        <div class="items">
          <li class="items_item" id="item_one" @click="goToServices()">
            Services
          </li>
          <li class="items_item" id="item_two">Contact</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    goToServices() {
      this.$router.push("/services");
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  height: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.header_wrapper ul {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%; /* poussé de la moitié de hauteur du référent */
  transform: translateY(-50%); /* tiré de la moitié de sa propre hauteur */
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header_wrapper ul li {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.7px;
  color: #1c4a15;
  cursor: pointer;
}

.title {
  margin-left: 150px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

.items {
  margin-right: 150px;
}

.items li {
  display: inline-block;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

.items #item_one {
  margin-right: 50px;
}
</style>
