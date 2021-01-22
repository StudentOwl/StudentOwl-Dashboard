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
        <circular-chart></circular-chart>
        <curve-chart></curve-chart>
      </div>
    </section>

    <section class="pa-6">
      <code v-if="dates">{{ dates }}</code>
      <code v-if="logsData">{{ logsData }}</code>
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
export default {
  name: "Home",
  components: {
    TableStudents,
    CircularChart,
    CurveChart,
    RangeDatePicker
  },
  props: {
    componentId: {
      type: String,
      required: true
    }
  },
  data: () => ({
    studentsData: [],
    pingResul: "",
    dates: [
      getPastWeek(new Date())
        .toISOString()
        .substr(0, 10),
      new Date().toISOString().substr(0, 10)
    ],
    logsData: []
  }),
  async created() {
    this.loadStudentData();
    this.loadLogsData();
  },
  methods: {
    loadStudentData: async function() {
      const resultado = await getStudentByComponent(this.componentId);
      // this.pingResul = resultado.data;
      this.studentsData = resultado.data.data;
    },
    loadLogsData: async function() {
      const resultado = await getLogsByComponent(this.componentId, this.dates);
      this.logsData = resultado.data.data;
    },
    onDatesUpdate(newDates) {
      this.dates = newDates;
    }
  }
};
</script>
