<template>
  <div class="home">
    <section class="pa-6">
      <h2 class="text-h2">Estudiantes</h2>
      <!-- TABLA principal en componente -->
      <table-students :students="mainTableData" :isLoading="isLoadingMainTableData" ></table-students>
    </section>

    <section class="pa-6">
      <h2 class="text-h2">Estadisticas</h2>

      <!-- Selector de fechas -->
      <range-date-picker @changeRange="onDatesUpdate" />

      <!-- GRAFICOS GENERALES en componente -->
      <div class="d-flex justify-space-between mb-6">
        <circular-chart
          :componentId="componentId"
          :dates="dates"
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

import { getStudentByComponent, getLogsByComponent, getLastActivities } from "../utils/dataLoader";
import { getPastWeek } from "../utils/dateutils";
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
    pingResul: "",
    dates: [
      getPastWeek(new Date()).toISOString().substr(0, 10),
      new Date().toISOString().substr(0, 10),
    ],
    logsData: [],
    mainTableData: [],
    isLoadingMainTableData: true,
  }),
  async created() {
    this.loadAllDataFromAPI();
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
    onDatesUpdate(newDates) {
      this.dates = newDates;
    },
  },
};
</script>
