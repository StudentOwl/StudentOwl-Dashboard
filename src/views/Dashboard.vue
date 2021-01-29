<template>
  <div class="home">
    <section class="mt-10">
      <h2 class="text-h2">Estudiantes</h2>
      <!-- TABLA principal en componente -->
      <table-students :students="mainTableData" :isLoading="isLoadingMainTableData" :componentId="componentId" ></table-students>
    </section>

    <v-divider></v-divider>
    
    <section class="mt-10">
      <h2 class="text-h2">Estadisticas</h2>

      <!-- Selector de fechas -->
      <range-date-picker @changeRange="onDatesUpdate" />

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
        <v-col  cols="12" md="6">
          <p class="text-h4">Tiempo de uso</p>
          <v-row>
            <v-col><per-days :componentId="componentId" :dates="dates"> </per-days></v-col>
            <v-col><per-hours :componentId="componentId" :dates="dates"></per-hours></v-col>
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
import RangeDatePicker from "../components/RangeDatePicker.vue";
import TableStudents from "../components/TableStudents.vue";
import PerDays from "../components/PerDays.vue";

import { getStudentByComponent, getLogsByComponent, getLastActivities } from "../utils/dataLoader";
import { getPastWeek, getTodayFinal } from "../utils/dateutils";
import{loadLogsTopFive}from "../utils/topFive";

export default {
  name: "Home",
  components: {
    TableStudents,
    CircularChart,
    PerHours,
    RangeDatePicker,
    PerDays,
  },
  props: {
    componentId: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    studentsData: [],
    loaded: false,
    pingResul: "",
    dates: [
      getPastWeek(new Date()).toISOString().substr(0, 10),
      getTodayFinal(new Date()).toISOString().substr(0, 10),
    ],
    logsData: [],
    mainTableData: [],
    isLoadingMainTableData: true,
    topFiveData: [],
  }),
  async created() {
    this.loadAllDataFromAPI();
    this.loadDataForTopFive();
  },
  methods: {
    loadAllDataFromAPI: async function(){
      const resEstudents = await getStudentByComponent(this.componentId);
      const resLogs = await getLogsByComponent(this.componentId, this.dates);

      this.studentsData = resEstudents.data.data;
      this.logsData = resLogs.data.data;

      this.processData()
    },
    processData: function() {
      this.mainTableData = getLastActivities(this.logsData, this.studentsData);
      this.isLoadingMainTableData = false;
    },

    loadDataForTopFive:async function () {
      this.loaded = false;
      const resultado = await loadLogsTopFive(this.componentId, this.dates);
      this.topFiveData = resultado;
      this.loaded = true;
      console.log("dash",this.topFiveData)
    },
    
    onDatesUpdate(newDates) {
      this.dates = newDates;
    },
  },
};
</script>
