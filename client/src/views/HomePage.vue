<script>
import axios from 'axios';
import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";

export default {
  data() {
    return {
    }
  },
  methods: {
    async kindeClient() {
      console.log(import.meta.env.VITE_KINDE_CLIENT_ID);
      const kinde = await createKindeClient({
        client_id: import.meta.env.VITE_KINDE_CLIENT_ID, // ganti client id menggunakan client id sendiri
        domain: "https://panmenu.kinde.com", // ganti dengan domai sendiri
        redirect_uri: 'http://localhost:5173', // ganti dengan redirect uri sendiri
        is_dangerously_use_local_storage: true,
        on_redirect_callback: (user, appState) => {
          console.log({ user, appState }); // berisi informasi user, jadi bisa dirender sesuai kebutuhan
          if (user) {
            // render the logged in view
          } else {
            // render the logged out view
          }
        }
      });

      return kinde;
    },
    async fetchData() {
      try {
        const kinde = await this.kindeClient()
        const token = await kinde.getToken(); // untuk ambil jwt token
        console.log(token);

        const response = await axios({
          url: 'http://localhost:3000/api',
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + token,
          }
        })

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    const kinde = await this.kindeClient()

    document.getElementById("login").addEventListener("click", async () => {
      await kinde.login();
    });

    document.getElementById("register").addEventListener("click", async () => {
      await kinde.register();
    });

    document.getElementById("logout").addEventListener("click", async () => {
      await kinde.logout();
    });
  }
}
</script>

<template>
  <div class="container h-screen mx-auto bg-gray-300">
    <div class="grid grid-cols-3 gap-8 p-4">

      <button class="bg-white p-4" id="login">Sign In</button>
      <button class="bg-white p-4" id="register">Register</button>
      <button class="bg-white p-4" id="logout">Sign Out</button>

      <button class="bg-white p-4" @click="fetchData">request to protected endpoint</button>

    </div>
  </div>
</template>


<style lang="scss" scoped></style>