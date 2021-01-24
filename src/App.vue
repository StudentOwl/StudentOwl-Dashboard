<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app color="secondary">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Componentes </v-list-item-title>
          <v-list-item-subtitle> academicos </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item v-for="component in components" :key="component.code" link>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title
              ><v-btn text :to="`/dashboard/${component.code}`">{{
                component.name
              }}</v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark height="100">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/StudentOwlLogoRight-White.png"
          transition="scale-transition"
          width="250"
        />
        <v-toolbar-title>Dashboard</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon>mdi-home</v-icon>
        <span class="ml-2">Inicio</span>
      </v-btn>
      <v-btn text>
        <v-icon>mdi-information-outline</v-icon>
        <span class="ml-2">Acerca de</span>
      </v-btn>
      <v-btn
        text
        v-if="authenticated"
        to="/login"
        @click.native="logout"
        replace=""
      >
        <v-icon>mdi-logout</v-icon>
        <span class="ml-2">Logout</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: null,
    components: [
      { name: "Gestion de proyectos", code: "GTPR01" },
      { name: "Ingenieria de requisitos", code: "IGRT01" },
      { name: "Gestion Productiva", code: "GSPR01" },
    ],
    authenticated: false,
    studentOwlAccount: {
      username: "mpabad",
      password: "12345",
    },
    mounted() {
      if (!this.authenticated) {
        this.$router.replace({ name: "Login" });
      }
    },
    methods: {
      setAuthenticated: function (status) {
        console.log(status);
        this.authenticated = status;
      },
      logout: function () {
        this.authenticated = false;
      },
    },
  }),
};
</script>
