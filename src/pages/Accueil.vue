<template>
  <div class="page accueil">
    <h1>Bienvenue sur mon portfolio</h1>
    <p>
      Je suis une développeuse web passionnée par la création d'interfaces
      modernes et fonctionnelles.
    </p>
    <div class="flexbox">
      <div class="box">
        <h2>Compétences</h2>
        <router-link to="/Competences"><button>ici</button></router-link>
      </div>
      <div class="box">
        <h2>Projets</h2>
        <router-link to="/Realisations"><button>ici</button></router-link>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Accueil",
};
</script>