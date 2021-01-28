<template>
  <div class="home">
    <section class="pa-6">
      <h2 class="text-h2">Estudiantes</h2>
      <!-- TABLA principal en componente -->
      <table-students :students="studentsData"></table-students>
    </section>

    <section class="pa-6">
      <h2 class="text-h2">Estadisticas</h2>

      <!-- Selector de fechas -->
      <range-date-picker @changeRange="onDatesUpdate" />

      <!-- GRAFICOS GENERALES en componente -->
      <div class="d-flex justify-space-between mb-6">
        <circular-chart
         v-if="loaded"
          :componentId="componentId"
          :dates="dates"
          :topFiveData="topFiveData"
        ></circular-chart>
        <curve-chart :componentId="componentId" :dates="dates"></curve-chart>
      </div>
    </section>




  </div>
</template>

<script>
// @ is an alias to /src
import CircularChart from "../components/CircularChart.vue";
import CurveChart from "../components/CurveChart.vue";
import RangeDatePicker from "../components/RangeDatePicker.vue";
import TableStudents from "../components/TableStudents.vue";

import { getStudentByComponent, getLogsByComponent } from "../utils/dataLoader";
import { getPastWeek } from "../utils/dateutils";
import{loadLogsTopFive}from "../utils/topFive"
export default {
  name: "Home",
  components: {
    TableStudents,
    CircularChart,
    CurveChart,
    RangeDatePicker,
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
      new Date().toISOString().substr(0, 10),
    ],
    logsData: [],
     topFiveData: [],
  }),
  async created() {
    this.loadStudentData();
    this.loadLogsData();
    this.loadDataForTopFive();
  },
  methods: {
    loadStudentData: async function () {
      const resultado = await getStudentByComponent(this.componentId);
      // this.pingResul = resultado.data;
      this.studentsData = resultado.data.data;
    },
    loadLogsData: async function () {
      const resultado = await getLogsByComponent(this.componentId, this.dates);
      this.logsData = resultado.data.data;
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
