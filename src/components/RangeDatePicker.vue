<template>
  <v-row>
    <v-col cols="12" sm="6" md="4" class="my-5">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="dates"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="dateRangeText"
            label="Seleccione el rango de consulta"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="dates" range no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">
            Cancel
          </v-btn>
          <v-btn text color="primary" @click="saveRange">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import { getPastWeek } from "../utils/dateutils";
export default {
  name: "RangeDatePicker",
  props: {},
  data: () => ({
    dates: [
      getPastWeek(new Date())
        .toISOString()
        .substr(0, 10),
      new Date().toISOString().substr(0, 10)
    ],
    menu: false
  }),
  computed: {
    dateRangeText() {
      return "De " + this.dates.join(" a ");
    }
  },
  methods: {
    saveRange() {
      this.$refs.menu.save(this.dates);
      this.$emit("changeRange", this.dates);
    }
  }
};
</script>

<style></style>
