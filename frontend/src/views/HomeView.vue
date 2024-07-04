<template>
  <div class="home-container">
    <div class="home-content">
      <h1>Barber Shop</h1>
      <button @click="goToLogin">Entrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0; /* Cor de fundo para visualização */
}

.home-content {
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.1); /* Bordas transparentes */
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo transparente */
}

h1 {
  margin-bottom: 20px;
  font-size: 36px; /* Tamanho do nome da aplicação */
}

button {
  width: 100%;
  padding: 15px;
  background-color: #00695c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
}

button:hover {
  background-color: #0056b3;
}
</style>