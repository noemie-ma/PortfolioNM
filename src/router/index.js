import { createRouter, createWebHistory } from "vue-router";
import Accueil from "../pages/Accueil.vue";
import Competences from "../pages/Competences.vue";
import Realisations from "../pages/Realisations.vue";
import Contact from "../pages/Contact.vue";

const routes = [
  { path: "/", name: "Accueil", component: Accueil },
  { path: "/competences", name: "Compétences", component: Competences },
  { path: "/realisations", name: "Réalisations", component: Realisations },
  { path: "/contact", name: "Contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
