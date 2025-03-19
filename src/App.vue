<template>
  <div id="app">
    <nav>
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <router-link to="/">Accueil</router-link>
      <router-link to="/competences">Compétences</router-link>
      <router-link to="/realisations">Réalisations</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view />
    <footer>
      <p>&copy; 2025 Noémie-Dev Web. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

