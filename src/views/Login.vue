<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="login_box">
        <div class="box_title title">
          <h1>Connexion</h1>
        </div>
        <div class="box_no_account create">
          <p>
            Tu n'as pas encore de compte ?
            <router-link to="/CreateAccount">Créer un compte</router-link>
          </p>
        </div>
        <form action="">
            <div class="mail">
                <input type="email" id="email" placeholder="Adresse mail" required>
            </div>
            <div class="username">
                <input type="text" id="prenom" placeholder="Prénom" required>
                <input type="text" id="nom" placeholder="Nom" required>
            </div>
            <div class="password">
                <input type="password" id="password" placeholder="Mot de passe" required>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>

</style>
