<template>
  <div class="editar">
    <h1>Editar Agendamento</h1>
    <form @submit.prevent="atualizarAgendamento">
      <div>
        <label for="clientName">Nome do cliente</label>
        <input type="text" id="clientName" v-model="agendamento.clientName" required />
      </div>

      <div>
        <label for="datetime">Selecione uma data</label>
        <input type="datetime-local" id="datetime" v-model="agendamento.datetime" required />
      </div>

      <div>
        <label for="service">Selecione um serviço</label>
        <select id="service" v-model="agendamento.service" required>
          <option v-for="service in services" :key="service" :value="service">{{ service }}</option>
        </select>
      </div>

      <div>
        <label for="barber">Selecione um barbeiro</label>
        <select id="barber" v-model="agendamento.barber" required>
          <option v-for="barber in barbers" :key="barber" :value="barber">{{ barber }}</option>
        </select>
      </div>

      <button type="submit">Atualizar Agendamento</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  props: ['id'],
  data() {
    return {
      agendamento: {
        clientName: '',
        datetime: '',
        service: '',
        barber: '',
      },
      services: ['Corte', 'Barba', 'Corte e Barba', 'Sombrancelha'],
      barbers: ['João', 'Pedro', 'Carlos'],
    };
  },
  async created() {
    const doc = await firebase.firestore().collection('agendamentos').doc(this.id).get();
    if (doc.exists) {
      this.agendamento = doc.data();
    } else {
      alert('Agendamento não encontrado');
      this.$router.push({ name: 'List' });
    }
  },
  methods: {
    async atualizarAgendamento() {
      try {
        await firebase.firestore().collection('agendamentos').doc(this.id).update(this.agendamento);
        alert('Agendamento atualizado com sucesso');
        this.$router.push('/list');
      } catch (error) {
        console.error('Erro ao atualizar agendamento', error);
        alert('Erro ao atualizar agendamento');
      }
    }
  }
};
</script>

<style scoped>
.editar {
  width: 300px;
  margin: 100px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
