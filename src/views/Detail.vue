<template>
  <div class="detail">
    <section class="pa-6">
      <!--Nombre del Estudiante-->
      <h2 class="text-h2">Juan Gahona</h2>
      <!--Visualización de la tabla de detalles-->
      <table-details :details="detailsData"></table-details>
    </section>

    <section class="pa-6">
      <h2 class="text-h2">
        Estadisticas
      </h2>
      <div class="d-flex justify-space-between mb-6">
        <!--Visualización de gráfico de curvas-->
        <curve-chart></curve-chart>
      </div>
      <div class="d-flex justify-space-between mb-6">
        <!--Visualización de gráfico de curvas-->

        <code v-if="namesData">{{ namesData.name }}</code>
      </div>
    </section>
  </div>
</template>

<script>
import CurveChart from "../components/CurveChart.vue";
import TableDetails from "../components/TableDetails.vue";
import { getPastWeek } from "../utils/dateutils.js";

import {
  getLogsByComponentAndStudent,
  getNamesbyStudent,
} from "../utils/dataLoader";

export default {
  name: "Detail",
  components: {
    TableDetails,
    CurveChart,
  },
  props: {
    student: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    detailsData: [],
    namesData: [],
    pingResul: "",
    dates: [
      getPastWeek(new Date())
        .toISOString()
        .substr(0, 10),
      new Date().toISOString().substr(0, 10),
    ],
  }),
  async created() {
    this.loadDetailsData();
    this.loadNameStudent();
  },
  methods: {
    loadDetailsData: async function() {
      const resultado = await getLogsByComponentAndStudent(
        this.componentId,
        this.student,
        this.dates
      );
      // this.pingResul = resultado.data;
      this.detailsData = resultado.data.data;
    },

    loadNameStudent: async function() {
      const resultado = await getNamesbyStudent(this.student);
      // this.pingResul = resultado.data;
      this.namesData = resultado.data.data;
    },

    onDatesUpdate(newDates) {
      this.dates = newDates;
    },
  },
};
</script>
