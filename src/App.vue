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

      <v-list dense nav>
        <v-list-item v-for="component in components" :key="component.code" link>
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{ component.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
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
      <v-btn text>
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
      { name: "GP", code: "GSPR01" }
    ]
  })
};
</script>
