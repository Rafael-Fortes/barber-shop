<template>
  <div class="login">
    <h1>Login</h1>
    <input id="email" type="email" placeholder="E-mail" label="E-mail" v-model="email" autocomplete="off" required>
    <br>
    <input id="password" type="password" placeholder="Senha" label="Senha" v-model="password" autocomplete="new-password" required>
    <br>
    <button @click="login">Entrar</button>
    <p>Ainda não possui conta? <router-link to="/register">Clique aqui</router-link></p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    }
  },
}

</script>
<style scoped>
  .login {
    width: 300px;
    margin: 100px auto;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: white;
  }

  h1 {
    margin-bottom: 20px;
    color: #00695c;
    font-family: 'Arial', sans-serif;
  }

  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #00695c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }

  button:hover {
    background-color: #004d40;
  }

  p {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #00201d;
    font-family: 'Arial', sans-serif;
  }

  a:hover {
    text-decoration: underline;
  }

  label {
    display: block;
    margin: 10px 0;
    color: black;
    font-family: 'Arial', sans-serif;
  }
</style>