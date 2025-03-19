<template>
  <div class="page-realisations">
    <h1>Réalisations</h1>
    <p>Voici quelques projets que j'ai réalisés :</p>
    <div class="projects">
      <div class="project" v-for="project in projects" :key="project.id">
        <h2>{{ project.title }}</h2>
        <img :src="project.image" :alt="project.title" />
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">Voir le projet</a>
      </div>
    </div>
    <p>
      Et pleins d'autres projets vous attendent sur ma page de repositories
      Github disponibles <br />
      en cliquant sur le logo ci-dessous !
    </p>
    <a href="https://github.com/noemie-ma?tab=repositories"
      ><img src="@/assets/github.png" alt="Logo Github"
    /></a>
  </div>
</template>

<script>
import reserviaImage from "@/assets/reservia.png";
import ohmyfoodImage from "@/assets/ohmyfood.png";
import laChouetteAgenceImage from "@/assets/lachouetteagence.png";

export default {
  name: "Realisations",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Reservia",
          description: "Plateforme de réservation de voyages",
          image: reserviaImage,
          link: "https://noemie-ma.github.io/Reservia/",
        },
        {
          id: 2,
          title: "Ohmyfood",
          description: "Site de réservation de restaurants",
          image: ohmyfoodImage,
          link: "https://noemie-ma.github.io/OhMyFood/",
        },
        {
          id: 3,
          title: "La Chouette Agence",
          description: "Agence de web design",
          image: laChouetteAgenceImage,
          link: "https://noemie-ma.github.io/La_Chouette_Agence/",
        },
      ],
    };
  },
};
</script>