<template>
  <div class="register">
    <h1>Cadastrar</h1>
    <input id="email" type="email" placeholder="E-mail" label="E-mail" v-model="email" autocomplete="off" required>
    <br>
    <input id="password" type="password" placeholder="Senha" label="Senha" v-model="password" autocomplete="new-password" required>
    <br>
    <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
    <br>
    <button @click="register">Cadastrar</button>
<<<<<<< HEAD
    <p>Já possui conta? <router-link to="/login">Login</router-link></p>
    </br>
=======
    <p>Já possui conta? <router-link to="/login">Clique aqui para logar</router-link></p>
>>>>>>> 4bb4dffe897269c270558a981ab8d501b88fb9b3
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
      passwordError: '',
    }
  },
  methods: {
    register() {
      // Expressão regular para validar senha forte
      const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
      
      // Verifica se a senha atende aos critérios de força
      if (!strongPasswordRegex.test(this.password)) {
        this.passwordError = "Senha fraca! A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.";
        return;
      }
      
      // Limpa qualquer mensagem de erro anterior
      this.passwordError = '';

      // Se a senha é considerada forte, continua com o registro
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          console.log(user);
          alert("Usuário cadastrado com sucesso!");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.error(errorMessage);
          alert(errorMessage);
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

    .error-message {
    color: red;
    font-size: 12px;
    margin-top: 5px;
    display: block;
  }
</style>