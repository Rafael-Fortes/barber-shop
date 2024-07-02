<template>
  <v-container>
    <v-form @submit.prevent="register">
      <v-text-field
        v-model="name"
        label="Nome"
        type="name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Senha"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit">Register</v-btn>
    </v-form>
    <v-btn @click="$router.push('/login')">Already have an account? Login</v-btn>
  </v-container>
</template>

<script>
import { auth } from '../firebase';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await auth.createUserWithEmailAndPassword(this.email, this.password);
        this.$router.push('/dashboard'); // Redirecionar para o painel após registro bem-sucedido
      } catch (error) {
        console.error('Erro de registro:', error.message);
      }
    }
  }
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
