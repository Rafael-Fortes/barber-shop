<template>
  <v-container>
    <v-form @submit.prevent="scheduling">
      <v-text-field
        v-model="create.clientName"
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
            v-model="create.date"
            label="Data"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="create.date" no-title @input="dateMenu = false"></v-date-picker>
      </v-menu>
      <v-select
        v-model="create.time"
        :items="times"
        label="Hora"
        required
      ></v-select>
      <v-select
        v-model="create.barber"
        :items="barbers"
        label="Nome do Barbeiro"
        required
      ></v-select>
      <v-select
        v-model="create.haircutType"
        :items="haircutTypes"
        label="Tipo de Corte"
        required
      ></v-select>
      <v-btn type="submit">Confirmar</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/firestore';

export default {
  data() {
    return {
      create: {
        clientName: '',
        date: '',
        time: '',
        barber: '',
        haircutType: ''
      },
      dateMenu: false,
      barbers: ['Antonio', 'Bruno', 'Carlos'],
      haircutTypes: ['Corte', 'Barba', 'Sobrancelha', 'Corte + Barba', 'Corte + Sobrancelha'],
      times: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', "18:00"]
    };
  },
  methods: {
    async scheduling() {
      try {
        const db = firebase.firestore();
        const data = {
          client: this.create.clientName,
          date: this.create.date,
          time: this.create.time,
          barber: this.create.barber,
          haircutType: this.create.haircutType
        }
        await db.collection('agendamentos').add(data);
        this.$router.push('/appointments');
      } catch (error) {
        console.error('Erro ao salvar agendamento:', error.message);
      }
    }
  }
};
</script>

<style scoped>
/* Adicione seus estilos aqui */
</style>
