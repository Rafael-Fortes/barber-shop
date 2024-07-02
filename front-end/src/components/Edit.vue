<template>
  <v-container>
    <v-form @submit.prevent="update">
      <v-text-field
        v-model="appointment.clientName"
        label="Nome do Cliente"
        required
      ></v-text-field>
      <v-menu
        ref="dateMenu"
        v-model="dateMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="appointment.date"
            label="Data"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="appointment.date" no-title @input="dateMenu = false"></v-date-picker>
      </v-menu>
      <v-select
        v-model="appointment.time"
        :items="times"
        label="Hora"
        required
      ></v-select>
      <v-select
        v-model="appointment.barber"
        :items="barbers"
        label="Nome do Barbeiro"
        required
      ></v-select>
      <v-select
        v-model="appointment.haircutType"
        :items="haircutTypes"
        label="Tipo de Corte"
        required
      ></v-select>
      <v-btn type="submit">Salvar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  data() {
    return {
      appointment: {
        clientName: '',
        date: '',
        time: '',
        barber: '',
        haircutType: ''
      },
      dateMenu: false,
      barbers: ['Barbeiro 1', 'Barbeiro 2', 'Barbeiro 3'],
      haircutTypes: ['Corte 1', 'Corte 2', 'Corte 3'],
      times: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
    };
  },
  methods: {
    async update() {
      try {
        const db = firebase.firestore();
        await db.collection('agendamentos').doc(this.appointment.id).update(this.appointment);
        this.$router.push('/appointments');
      } catch (error) {
        console.error('Erro ao atualizar agendamento:', error.message);
      }
    }
  },
  created() {
    this.appointment = this.$route.params.appointment;
  }
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
