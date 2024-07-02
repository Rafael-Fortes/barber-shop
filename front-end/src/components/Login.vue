<template>
  <v-container>
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="email"
        label="Email"
        type="email"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        required
      ></v-text-field>
      <v-btn type="submit">Login</v-btn>
    </v-form>
    <v-btn @click="$router.push('/register')">Clique para se registrar</v-btn>
  </v-container>
</template>

<script>
import { auth } from '../firebase';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        await auth.signInWithEmailAndPassword(this.email, this.password);
        this.$router.push('/dashboard'); // Redirecionar para o painel após login bem-sucedido
      } catch (error) {
        console.error('Erro de login:', error.message);
      }
    }
  }
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
