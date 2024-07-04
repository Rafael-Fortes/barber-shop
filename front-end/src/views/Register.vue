<template>
  <div class="register">
    <h1>Cadastrar</h1>
    <input id="email" type="email" placeholder="E-mail" label="E-mail" v-model="email" autocomplete="off" required>
    <br>
    <input id="password" type="password" placeholder="Senha" label="Senha" v-model="password" autocomplete="new-password" required>
    <br>
    <button @click="register">Cadastrar</button>
    <p>Já possui conta? <router-link to="/login">Login</router-link></p>
    </br>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user)
          alert("cadastrado")
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage)
        });
    },
  },
}

</script>

<style>
  .register {
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