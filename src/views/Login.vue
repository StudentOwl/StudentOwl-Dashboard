<template>
  <v-container class="d-flex pa-4 mt-16">
    <v-card class="mx-auto" max-width="500">
      <v-container class="pa-6">
        <v-row align="center" align-content="center">
          <v-col sm="12"
            ><v-img
              class="white--text align-end"
              src="../assets/StudentOwlLogoRight.png"
            ></v-img>
            <h2 class="subtitle-1 text-center text--secondary">
              Sistema de monitoreo
            </h2>
          </v-col>

          <v-col sm="12" class="px-16 py-8">
            <v-col sm="12"
              ><h1 class="text-h4 text-center">Inicio de sesion</h1></v-col
            >
            <v-col sm="12" class="mb-n6"
              ><v-text-field
                label="User"
                v-model="input.username"
              ></v-text-field
            ></v-col>

            <v-col sm="12"
              ><v-text-field
                label="Password"
                type="password"
                v-model="input.password"
              ></v-text-field
            ></v-col>
            <v-col sm="12" class="px-16">
              <v-btn color="secondary" outlined block @click="login()"
                >Sing In</v-btn
              >
            </v-col>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    input: {
      username: "",
      password: "",
    },
  }),
  methods: {
    login: function () {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == this.$parent.studentOwlAccount.username &&
          this.input.password == this.$parent.studentOwlAccount.password
        ) {
          this.$emit("onAuthenticated", true);
          this.$router.replace({ name: "Dashboard" });
        } else {
          console.log("El usuario y contrasenia son incorrectos");
        }
      } else {
        console.log("Es necesario llenar los campos");
      }
    },
  },
};
</script>

<style></style>
