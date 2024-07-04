<template>
  <div class="agendar">
    <h1>Agendar</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="clientName">Nome do cliente</label>
        <input
          type="text"
          id="clientName"
          v-model="form.clientName"
          required
        />
      </div>

      <div>
        <label for="datetime">Selecione uma data</label>
        <input
          type="datetime-local"
          id="datetime"
          v-model="form.datetime"
          required
        />
      </div>

      <div>
        <label for="service">Selecione um serviço</label>
        <select id="service" v-model="form.service" required>
          <option v-for="service in services" :key="service" :value="service">
            {{ service }}
          </option>
        </select>
      </div>

      <div>
        <label for="barber">Selecione um barbeiro</label>
        <select id="barber" v-model="form.barber" required>
          <option v-for="barber in barbers" :key="barber" :value="barber">
            {{ barber }}
          </option>
        </select>
      </div>

      <button @click="confirm()" type="submit">Confirmar Agendamento</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        clientName: '',
        datetime: '',
        service: '',
        barber: '',
      },
      times: ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'],
      services: ['Corte', 'Barba', 'Sobrancelha'],
      barbers: ['João', 'Pedro', 'Carlos'],
    };
  },
  methods: {
    confirm() {
      const data = this.form.datetime;
      const barbeiro = this.form.barber;

      axios.post('http://localhost:3000/api/agendamentos', {
        data: data,
        barbeiro: barbeiro
      })
      .then(response => {
        // Manipular a resposta da API
        console.log("aqui: ", response.data);
        this.$router.push('/listar')
        return response.data;
      })
      .catch(error => {
        // Manipular erros
        console.error('Erro:', error);
      });
    },
  },
};
</script>

<style scoped>
.agendar {
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

input,
select {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
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
  background-color: #004d40;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #00695c;
  font-family: 'Arial', sans-serif;
}

form {
  margin-top: 20px;
}
</style>
