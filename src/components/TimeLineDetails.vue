<template>
  <v-timeline-item color=white >
    <template v-slot:icon>
      <v-icon large color="teal darken-2">
        mdi-email
      </v-icon>
    </template>
    <template v-slot:opposite>
      <span>{{timeExecution}}</span>
    </template>
    <v-card class="elevation-24" outlined shaped>
      <v-card-title class="headline">
        Aplicación Ejecutada: <br> {{ studentId.applicationName }}
      </v-card-title>
      <v-card-subtitle> <br>
        Tiempo total de ejecución: {{ durationSecondstoMinutes }} minutos
      </v-card-subtitle>
      <v-card-text>
        Acción realizada: {{ studentId.action }} 
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
  import moment from "moment";
  export default {
    name: "TimeLineDetails",
    props: {
      studentId:
        { default: () => [] },
    },
    computed: {
      timeExecution() {
        return moment(this.studentId.time).format("MM/DD/YYYY");
      },
      durationSecondstoMinutes() {
        var minute = Math.floor((this.studentId.duration / 60) % 60);
        minute = (minute < 10) ? '0' + minute : minute;
        var second = this.studentId.duration % 60;
        second = (second < 10) ? '0' + second : second;
        return minute + ':' + second;
      },
    },
  };
</script>

<style></style>