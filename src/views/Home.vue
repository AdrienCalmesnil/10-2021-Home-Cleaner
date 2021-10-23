<template>
  <div class="home_wrapper">
    <router-link to="/login">
      <h1>HomeCleaner</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* padding-left: 10%; */
  position: absolute;
  width: 100%;
  height: 100%;
}

a {
    padding-left: 10%;
  text-decoration: none;
}

h1 {
  margin: 0;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 144px;
  color: #1c4a15;
  text-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
}
</style>
