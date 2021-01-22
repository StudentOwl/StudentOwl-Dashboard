<template>
  <div class="detail">
    <section class="pa-6">
      <!--Nombre del Estudiante-->
      <h2 class="text-h2">Andrés Fernando Jiménez López</h2>
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
    </section>
  </div>
</template>

<script>
import CurveChart from "../components/CurveChart";
import TableDetails from "../components/TableDetails";

export default {
  name: "Detail",
  components: {
    TableDetails,
    CurveChart
  },
  data: () => ({
    detailsData: [
      {
        aplicationName: "Google Chrome",
        time: "5 min, 20 s",
        date: "20/may/2020"
      },
      {
        aplicationName: "Microsoft Word",
        time: "15 min, 55 s",
        date: "30/ene/2020"
      },
      {
        aplicationName: "Enterprise",
        time: "30 min, 00 s",
        date: "02/abr/2020"
      }
    ],
    estudents: [
      {
        name: "Andrés Fernando Jiménez Lopez",
        code: "user"
      }
    ]
  })
};
</script>
