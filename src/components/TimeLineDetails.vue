<template>
  <v-timeline align-top dense>
    <v-timeline-item v-for="detail in detailsData" :key="detail._id">
      <v-card class="pa-3">
        <v-row class="pt-1">
          <v-col cols="12" md="3">
            <strong>{{ parseDate(detail.time) }}</strong>
          </v-col>
          <v-col cols="12" md="9">
            <strong>{{ detail.applicationName }}</strong>
            <p class="caption mb-0">
              {{ parseSecondToMinutes(detail.duration) }} min
            </p>
            <p class="caption mb-0">{{ detail.action }}</p>
          </v-col>
        </v-row>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import moment from "moment";
export default {
  name: "TimeLineDetails",
  props: {
    studentId: { default: () => [] },
    detailsData: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    parseDate: date => {
      return moment(date).format("YYYY/MM/DD HH:mm:ss");
    },
    parseSecondToMinutes: seconds => {
      var minute = Math.floor((seconds / 60) % 60);
      minute = minute < 10 ? "0" + minute : minute;
      var second = seconds % 60;
      second = second < 10 ? "0" + second : second;
      return minute + ":" + second;
    },
  },
};
</script>

<style></style>