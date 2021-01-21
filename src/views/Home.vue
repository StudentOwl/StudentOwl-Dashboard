<template>
  <div class="home">
    <section class="pa-6">
      <h2 class="text-h2">Estudiantes</h2>
      <!-- TABLA principal en componente -->
      <table-students :students="studentsData"></table-students>
    </section>

    <section class="pa-6">
      <h2 class="text-h2">Estadisticas</h2>
      <!-- GRAFICOS GENERALES en componente -->
      <div class="d-flex justify-space-between mb-6">
        <circular-chart></circular-chart>
        <curve-chart></curve-chart>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import CircularChart from "../components/CircularChart.vue";
import CurveChart from "../components/CurveChart.vue";
import TableStudents from "../components/TableStudents.vue";

export default {
  name: "Home",
  components: {
    TableStudents,
    CircularChart,
    CurveChart
  },
  data: () => ({
    studentsData: [
      {
        username: "lfbermeo",
        name: "Luisa Fernanda Bermeo",
        lastConn: "At 3.PM",
        lastApp: "Edge",
        totalTime: 15465
      },
      {
        username: "jjgahona",
        name: "Juan Jose Gahona",
        lastConn: "At past day",
        lastApp: "Architect",
        totalTime: 1245
      }
    ]
  })
};
</script>
