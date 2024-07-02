<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="appointments"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="edit(item)">mdi-pencil</v-icon>
        <v-icon small @click="delete(item.id)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  data() {
    return {
      headers: [
        { text: 'Nome do Cliente', value: 'clientName' },
        { text: 'Data', value: 'date' },
        { text: 'Hora', value: 'time' },
        { text: 'Ações', value: 'actions', sortable: false }
      ],
      appointments: []
    };
  },
  methods: {
    async fetchAppointments() {
      const db = firebase.firestore();
      const snapshot = await db.collection('agendamentos').get();
      this.appointments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },
    edit(appointment) {
      // Redirecionar para a página de edição com os dados do agendamento
      this.$router.push({ name: 'Edit', params: { appointment } });
    },
    async delete(id) {
      const db = firebase.firestore();
      await db.collection('agendamentos').doc(id).delete();
      this.fetchAppointments();
    }
  },
  created() {
    this.fetchAppointments();
  }
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
