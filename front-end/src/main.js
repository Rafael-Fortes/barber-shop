import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/app";

const firebaseConfig = {
  "apiKey": "AIzaSyCXCDuWwoUgogkMdxAuobJpVpzA7FSIrTE",
  "authDomain": "trab-final-progweb.firebaseapp.com",
  "projectId": "trab-final-progweb",
  "storageBucket": "trab-final-progweb.appspot.com",
  "messagingSenderId": "685164976692",
  "appId": "1:685164976692:web:f5ea302dfa53c998134861",
  "measurementId": "G-LXZ7LV0T2D"
};

firebase.initializeApp(firebaseConfig);
createApp(App).use(store).use(router).mount('#app')