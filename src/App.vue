<template>
  <div id="app">
      <router-view />
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(180deg, #fefbec 0%, rgba(254, 251, 236, 0) 100%),
    rgba(226, 209, 195, 0.75);
    background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
