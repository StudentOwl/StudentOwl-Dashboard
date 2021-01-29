<template>
  <v-app id="inspire">
    <v-navigation-drawer
      class="d-md-none"
      v-model="drawer"
      app
      color="white"
      temporary
      v-if="authenticated"
    >
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
      <v-container class="py-0 fill-height">
        <v-app-bar-nav-icon
          class="d-md-none"
          @click="drawer = !drawer"
          v-if="authenticated"
        ></v-app-bar-nav-icon>
        <div class="d-flex align-center">
          <v-toolbar-title>DASHBOARD</v-toolbar-title>
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
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col class="d-none d-md-block" md="3" v-if="authenticated">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-subheader>COMPONENTES</v-subheader>
                <v-list-item-group>
                  <v-list-item
                    v-for="component in components"
                    :key="component.code"
                    link
                    :to="`/dashboard/${component.code}`"
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ component.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>

                <v-divider class="my-2"></v-divider>

                <v-subheader>RANGO DE CONSULTA</v-subheader>
                <!-- Selector de fechas -->
                <range-date-picker @changeRange="onDatesUpdate" />
                <!-- <v-date-picker
                  v-model="dates"
                  range
                  no-title
                  full-width
                  elevation="3"
                >
                  <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="saveRange"> OK </v-btn>
                </v-date-picker> -->
              </v-list>
            </v-sheet>
          </v-col>

          <!-- Main Container -->
          <v-col cols="12" md="9">
            <router-view @onauthenticated="setAuthenticated" :dates="dates"></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import RangeDatePicker from "./components/RangeDatePicker.vue";
import { getPastWeek } from "./utils/dateutils";

export default {
  name: "App",

  components: {RangeDatePicker},

  data: () => ({
    drawer: null,
    components: [
      { name: "Gestión de proyectos", code: "GTPR01" },
      { name: "Ingenieria de requisitos", code: "IGRT01" },
      { name: "Gestión Productiva", code: "GSPR01" },
    ],
    authenticated: false,
    studentOwlAccount: {
      username: "mpabad",
      password: "12345",
    },
    dates: [
      getPastWeek(new Date()).toISOString().substr(0, 10),
      new Date().toISOString().substr(0, 10),
    ],
  }),
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "Login" });
    }
  },
  methods: {
    setAuthenticated: function (status) {
      // console.log(status);
      this.authenticated = status;
    },
    logout: function () {
      this.authenticated = false;
    },
    onDatesUpdate(newDates) {
      this.dates = newDates;
    },
  },
};
</script>
