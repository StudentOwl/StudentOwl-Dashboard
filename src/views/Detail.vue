<template>
  <div class="detail">
    <section class="mt-10">
      <!--Nombre del Estudiante-->
      <!-- reemplazar this.student por el name y lastname -->
      <h2 class="text-h2">
        {{ this.student }} {{ this.student }}
      </h2>
      <!--Visualización de la tabla de detalles-->
    </section>
    <section class="mt-10">
      <h2 class="text-h2 mb-6">Timeline</h2>
      <v-card class="overflow-y-auto" max-height="80vh">
        <v-card-text>
          <v-container>
            <TimeLineDetails :detailsData="detailsData" />
          </v-container>
        </v-card-text>
      </v-card>
    </section>
  </div>
</template>
<script>
//import CurveChart from "../components/CurveChart.vue";
import TimeLineDetails from "../components/TimeLineDetails.vue";
import { getPastWeek } from "../utils/dateutils.js";

import { getNamesbyStudent } from "../utils/dataLoader";

export default {
  name: "Detail",
  components: {
    TimeLineDetails,
  },
  props: {
    student: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    detailsData: [],
    dates: [
      getPastWeek(new Date()).toISOString().substr(0, 10),
      new Date().toISOString().substr(0, 10),
    ],
  }),
  async created() {
    this.loadDetailsData();
  },
  methods: {
    loadDetailsData: async function () {
      const resultado = await getNamesbyStudent(
        /*
          this.name, this.lastname
          */
        this.student,
        this.dates,
        console.log(this.student)
      );
      this.detailsData = resultado.data.data;
    },
  },
};
</script>