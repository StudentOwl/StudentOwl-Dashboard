<template>
  <div class="detail">
    <section class="mt-10">
      <!--Nombre del Estudiante-->
      <!-- reemplazar this.student por el name y lastname -->
      <h2 class="text-h2">
        {{ studentData.lastname }} {{ studentData.name }}
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

import { getLogsByComponentAndStudent, getInfoStudent } from "../utils/dataLoader";

export default {
  name: "Detail",
  components: {
    TimeLineDetails,
  },
  props: {
    componentId: {
      type: String,
      required: true
    },
    student: {
      type: String,
      required: true,
    },
    dates: {
      type: Array,
      default: () => [],
    }
  },
  data: () => ({
    detailsData: [],
    studentData: {
      type: Object,
      default: () => {}
    }
  }),
  async created() {
    this.loadStudentInfo();
    this.loadDetailsData();
  },
  methods: {
    loadDetailsData: async function () {
      const resultado = await getLogsByComponentAndStudent(
        this.componentId,
        this.student,
        this.dates
      );
      if (resultado) {
        this.detailsData = resultado.data.data;
      } else {
        console.log("Problema");
      }
    },
    loadStudentInfo: async function () {
      const resultado = await getInfoStudent(this.student);

      if (resultado) {
        this.studentData = resultado.data.data;
      }
    }
  },
};
</script>