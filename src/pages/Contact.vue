<template>
  <div class="page-contact">
    <h1>Contact</h1>
    <div class="zone-contact">
      <p>
        Vous avez une question, une suggestion ou une demande spécifique ?
        <br />
        N'hésitez pas à me contacter en remplissant le formulaire ci-dessous.
      </p>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Nom :</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div>
          <label for="email">Email :</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div>
          <label for="message">Message :</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    <div class="zone-qrcode">
      <p>
        Vous pouvez également me contacter via d'autres moyens <br />
        via mon Linktree en cliquant ou en scannant le QR Code ci-dessous.
      </p>
      <img src="@/assets/noemiehibiscus.png" alt="QR Code" />
    </div>
  </div>
</template>
  
<script>
export default {
  name: "Contact",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      showQRCode: false,
      qrCodeUrl: "@/assets/noemiehibiscus.png",
    };
  },
  methods: {
    submitForm() {
      // Gestion de l'envoi du formulaire
      console.log("Formulaire soumis :", this.form);
      alert("Merci pour votre message !");
      // Réinitialisation du formulaire
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>
