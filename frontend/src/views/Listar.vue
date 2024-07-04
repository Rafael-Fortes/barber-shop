<template>
  <div class="listar">
    <h1>Histórico</h1>
    <table>
      <thead>
        <tr>
          <th>Data e Hora</th>
          <th>Nome do Cliente</th>
          <th>Serviço</th>
          <th>Barbeiro</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="agendamentos.length === 0">
          <td colspan="5">Nenhum agendamento encontrado.</td>
        </tr>
        <tr v-for="agendamento in agendamentos" :key="agendamento.id">
          <td>{{ agendamento.datetime }}</td>
          <td>{{ agendamento.clientName }}</td>
          <td>{{ agendamento.service }}</td>
          <td>{{ agendamento.barber }}</td>
          <td>
            <i class="fas fa-edit icon-edit" title="Editar" @click="editarAgendamento(agendamento)"></i>
            <i class="fas fa-trash-alt icon-delete" title="Cancelar" @click="excluirAgendamento(agendamento.id)"></i>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="button-container">
      <button @click="novoAgendamento">Novo agendamento</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';
import axios from 'axios';

export default {
  data() {
    return {
      agendamentos: [],
    };
  },

  async created() {
    await this.carregarAgendamentos();
  },

  methods: {
    editarAgendamento(agendamento) {
      this.$router.push({ name: 'Editar', params: { id: agendamento.id } });
    },

    excluirAgendamento(id) {
      axios.delete(`http://localhost:3000/api/agendamentos/${id}`)
        .then(response => {
          this.carregarAgendamentos(); // Recarrega os agendamentos após excluir
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    },

    async carregarAgendamentos() {
      try {
        const snapshot = await firebase.firestore().collection('agendamentos').get();
        this.agendamentos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch(error)  {
        alert('Erro ao carregar agendamentos: ' + error.message);
      }
    },

    novoAgendamento() {
      this.$router.push({ name: 'Agendar' });
    }
  }
};
</script>

<style scoped>
.listar {
  width: 50%;
  margin: 50px auto;
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

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  border: 1px solid #ccc;
  text-align: left;
  font-family: 'Arial', sans-serif;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

.icon-edit {
  margin-right: 15px;
}

.icon-delete {
  color: red;
}

.button-container {
  text-align: center;
  margin-top: 20px;
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