<template>
  <div class="login">
    <div class="login_box">
      <div class="box_title title">
        <h1 v-if="mode == 'login'">Connexion</h1>
        <h1 v-else>Inscription</h1>
      </div>
      <div class="box_no_account create">
        <p v-if="mode == 'login'">
          Tu n'as pas encore de compte ?
          <span class="create_account" @click="switchToCreateAccount()">Créer un compte</span>
        </p>
        <p v-else>
          Tu as déjà un compte ?
          <span class="create_account" @click="switchToLogin()">Se connecter</span>
        </p>
      </div>
      <form action="">
        <div class="mail">
          <input v-model="email" type="email" id="email" placeholder="Adresse mail" required />
        </div>
        <div class="username" v-if="mode == 'create'">
                <input v-model="prenom" type="text" id="prenom" placeholder="Prénom" required />
                <input v-model="nom" type="text" id="nom" placeholder="Nom" required />
        </div>
        <div class="password">
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Mot de passe"
            required
          />
        </div>
      </form>
      <div class="but_login" v-if="mode == 'login'">
        <button id="but_login">Se connecter</button>
      </div>
      <div @click="createAccount()" class="but_login" v-else>
        <button id="but_login">Créer mon compte</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: function(){ 
      return{
          mode:"login",
          email:"",
          prenom:"",
          nom:"",
          password:"",
      }
  },
  methods:{
      switchToCreateAccount: function(){
          this.mode = 'create'
      },
      switchToLogin: function(){
          this.mode = 'login'
      },
      createAccount: function(){
          this.$store.dispatch('createAccount', {
              email: this.email,
              prenom: this.prenom,
              nom: this.nom,
              password: this.password,
          })
      }
  }
};
</script>

<style scoped>
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #fefbec 0%, rgba(255, 253, 244, 0) 100%),
    rgba(226, 209, 195, 0.75);
}

.login_box {
  background: #fffdf4;
  border-radius: 37px;
  padding: 64px 86px;
}

.box_title {
  margin: 0;
}

.box_title h1 {
  margin-top: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 40px;
  color: #1c4a15;
}

.box_no_account p {
  margin-top: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
  color: #88826b;
}

.create_account{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.mail, .username, .password{
    height: 50px;
}

input {
    padding: 0 0 5px 6px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #83735b;
  background: none;
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  letter-spacing: 0.7px;
  color: #B5AF98;
}

::placeholder{
  font-family: 'Poppins',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 0.7px;
  color: #B5AF98;
}

.mail{
    margin-bottom: 30px;
}

#email{
    width: 100%;
}

.username{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
}

#prenom, #nom{
    width: 42%;
}

.password{
    margin-bottom: 20px;
}

#password{
    width: 100%;
}

#but_login{
    width: 100%;
    padding: 10px 0;
    background: #E9E3D1;
    border: none;
    border-radius: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: #1C4A15;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
}

.but_login{
    transition: all 0.3s ease;
}

.but_login:hover{
    transform: scale(1.03);
    
}




</style>
