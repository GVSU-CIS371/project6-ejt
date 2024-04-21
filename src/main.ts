import { createApp } from "vue";
import { createPinia } from "pinia";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { fa } from "vuetify/iconsets/fa";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from "./router";
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBiuK-VuzCdaOKcVrq3CK8_3e4LANLjO6Y",

  authDomain: "cis371-project6-349bb.firebaseapp.com",

  projectId: "cis371-project6-349bb",

  storageBucket: "cis371-project6-349bb.appspot.com",

  messagingSenderId: "717397735132",

  appId: "1:717397735132:web:506e99d504f03ce4642619",

  measurementId: "G-2HHK1BPPD7",
};

const myapp: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(myapp)

const analytics = getAnalytics(myapp);

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi, fa },
  },

  components,
  directives,
});
const pinia = createPinia();
createApp(App).use(vuetify).use(pinia).use(router).mount("#app");
