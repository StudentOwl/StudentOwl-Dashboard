<template>
  <div class="detail">
    <section class="pa-6">
      <!--Nombre del Estudiante-->
      <h2 class="text-h2">Andrés Fernando Jiménez López</h2>
      <!--Visualización de la tabla de detalles-->
      <table-details :details="detailsData"></table-details>
     
      <code v-if="detailsData">{{ detailsData }}</code>
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
        <chart-details :detailsCharts="detailsChart"></chart-details>
      </div>
    </section>
  </div>
</template>

<script>

  import CurveChart from "../components/CurveChart";
  import TableDetails from "../components/TableDetails";
  import { getPastWeek } from "../utils/dateutils";
  import { getLogsByComponentAndStudent } from "../utils/dataLoader";

  export default {
    name: "Detail",
    components: {
      TableDetails,
      CurveChart,

    },
    props: {
      componentId: {
        type: String,
        required: true
      }
    },
    data: () => ({
      detailsData: [],
      pingResul: "",
      dates: [
        getPastWeek(new Date())
          .toISOString()
          .substr(0, 10),
        new Date().toISOString().substr(0, 10)
      ]

    }),
    async created() {
      this.loadDetailsData();
    },
    methods: {
    loadDetailsData: async function() {
      const resultado = await getLogsByComponentAndStudent(this.componentId, this.studentId, this.dates);
      // this.pingResul = resultado.data;
      this.detailsData = resultado.data.data;
    },
    
    onDatesUpdate(newDates) {
      this.dates = newDates;
    }
  }
}
</script>