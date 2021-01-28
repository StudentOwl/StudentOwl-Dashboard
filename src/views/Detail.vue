<template>
  <div class="detail">
    <section class="pa-6">
      <!--Nombre del Estudiante-->
      <!-- reemplazar this.student por el name y lastname -->
      <h2 class="text-h2">Name: {{ this.student }} LastName: {{ this.student }}</h2>
      <!--Visualización de la tabla de detalles-->
    </section>
    <section class="pa-6">
      <h2 class="text-h2">
        Estadísticas <br>
      </h2>
      <v-card class="overflow-y-auto" max-height="400">
        <v-card-text>
          <div v-for="n in 12" :key="n" class="mb-4">
            <v-container>
              <div>
                <v-timeline v-if="detailsData.length > 0 ">
                  <TimeLineDetails v-for="student in detailsData" :key="student.studentId" :studentId="student" />
                </v-timeline>
              </div>
            </v-container>
          </div>
        </v-card-text>
      </v-card>

    </section>
  </div>
</template>
<script>
  //import CurveChart from "../components/CurveChart.vue";
  import TimeLineDetails from "../components/TimeLineDetails.vue";
  import { getPastWeek } from "../utils/dateutils.js";

  import {
    getNamesbyStudent
  } from "../utils/dataLoader";

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
        getPastWeek(new Date())
          .toISOString()
          .substr(0, 10),
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
          this.student, this.dates,
          console.log(this.student)
        );
        this.detailsData = resultado.data.data;
      },
    },
  };
</script>