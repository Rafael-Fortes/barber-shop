import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Dashboard from '../components/Dashboard.vue';
import Appointments from '../components/Appointments.vue';
import EditAppointment from '../components/EditAppointment.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/appointments', component: Appointments },
  { path: '/edit', component: EditAppointment, name: 'Edit' }
];

const router = new VueRouter({
  routes
});

export default router;
