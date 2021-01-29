<template>
  <div class="home">
    <section class="mt-10">
      <h2 class="text-h2">Estudiantes</h2>
      <!-- TABLA principal en componente -->
      <table-students
        :students="mainTableData"
        :isLoading="isLoadingMainTableData"
        :componentId="componentId"
      ></table-students>
    </section>

    <v-divider></v-divider>

    <section class="mt-10">
      <h2 class="text-h2">Estadisticas</h2>

      <!-- Selector de fechas -->
      <!-- <range-date-picker @changeRange="onDatesUpdate" /> -->

      <!-- GRAFICOS GENERALES en componente -->
      <v-row>
        <v-col cols="12" md="6">
          <p class="text-h4">Aplicaciones</p>
          <circular-chart
            v-if="loaded"
            :componentId="componentId"
            :dates="dates"
            :topFiveData="topFiveData"
          ></circular-chart>
        </v-col>
        <v-col cols="12" md="6">
          <p class="text-h4">Tiempo de uso</p>
          <v-row>
            <v-col
              ><per-days
                :componentId="componentId"
                :dates="dates"
                :pordias="porDias"
                v-if="loadDaysData"
              >
              </per-days
            ></v-col>
            <v-col
              ><per-hours
                :componentId="componentId"
                :dates="dates"
                :porhoras="porHoras"
                v-if="loadHourData"
              ></per-hours
            ></v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- <div class="d-flex justify-space-between mb-6">
      </div> -->
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CircularChart from "../components/CircularChart.vue";
import PerHours from "../components/PerHours.vue";
// import RangeDatePicker from "../components/RangeDatePicker.vue";
import TableStudents from "../components/TableStudents.vue";
import PerDays from "../components/PerDays.vue";

import {
  getStudentByComponent,
  getLogsByComponent,
  getLastActivities,
  getHourData,
  getDiaData,
} from "../utils/dataLoader";
// import { getPastWeek, getTodayFinal } from "../utils/dateutils";
import { loadLogsTopFive } from "../utils/topFive";

export default {
  name: "Home",
  components: {
    TableStudents,
    CircularChart,
    PerHours,
    // RangeDatePicker,
    PerDays,
  },
  props: {
    componentId: {
      type: String,
      required: true,
    },
    dates: {
      type: Array,
      default: () => [],
    }
  },
  data: () => ({
    studentsData: [],
    loaded: false,
    pingResul: "",
    // dates: [
    //   getPastWeek(new Date()).toISOString().substr(0, 10),
    //   getTodayFinal(new Date()).toISOString().substr(0, 10),
    // ],

    logsData: [],

    mainTableData: [],
    isLoadingMainTableData: true,

    topFiveData: [],

    porHoras: [],
    loadHourData: false,
    porDias: [],
    loadDaysData: false,
  }),
  async created() {
    this.loadAllDataFromAPI();
    setInterval(this.loadAllDataFromAPI, 1000 * 20);
  },
  methods: {
    loadAllDataFromAPI: async function () {
      const resEstudents = await getStudentByComponent(this.componentId);
      const resLogs = await getLogsByComponent(this.componentId, this.dates);

      this.studentsData = resEstudents.data.data;
      this.logsData = resLogs.data.data;

      this.processData();
      this.loadDataForTopFive();
      this.loadHourLogs();
      this.loadDaysLogs();
    },

    processData: function () {
      this.mainTableData = getLastActivities(this.logsData, this.studentsData);
      this.isLoadingMainTableData = false;
    },

    loadDataForTopFive: async function () {
      this.loaded = false;
      const resultado = await loadLogsTopFive(this.componentId, this.dates);
      this.topFiveData = resultado;
      this.loaded = true;
      // console.log("dash", this.topFiveData);
    },

    loadHourLogs: async function () {
      this.loadHourData = false;
      const resultado = await getHourData(this.componentId, this.dates);
      this.porHoras = resultado.data.data;
      this.loadHourData = true;
    },

    loadDaysLogs: async function () {
      this.loadDaysData = false;
      const resultado = await getDiaData(this.componentId, this.dates);
      this.porDias = resultado.data.data;
      this.loadDaysData = true;
    },

    // onDatesUpdate(newDates) {
    //   this.dates = newDates;
    // },
  },
};
</script>
