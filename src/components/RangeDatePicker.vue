<template>
  <v-date-picker v-model="dates" range no-title scrollable>
    <v-spacer></v-spacer>
    <v-btn text color="primary"> Cancel </v-btn>
    <v-btn text color="primary" @click="saveRange"> OK </v-btn>
  </v-date-picker>
</template>

<script>
import { getPastWeek } from "../utils/dateutils";
export default {
  name: "RangeDatePicker",
  props: {
    // dates: {
    //   type: Array,
    //   default: () => []
    // }
  },
  data: () => ({
    dates: [
      getPastWeek(new Date()).toISOString().substr(0, 10),
      new Date().toISOString().substr(0, 10),
    ],
  }),
  computed: {
    dateRangeText() {
      return "De " + this.dates.join(" a ");
    },
  },
  methods: {
    saveRange() {
      // this.$refs.menu.save(this.dates);
      this.$emit("changeRange", this.dates);
    },
  },
};
</script>

<style></style>
