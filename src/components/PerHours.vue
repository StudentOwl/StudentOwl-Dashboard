<template>
  <v-card class="px-6 py-6" elevation="5" color="secondary" rounded="xl">
    <h1 class="text-h5 white--text">Por horas</h1>
    <line-chart
      v-if="loaded"
      :chart-data="datacollection"
      :height="200"
    ></line-chart>
  </v-card>
</template>

<script>
import LineChart from "./LineChart.vue";
export default {
  name: "PerHours",
  components: {
    LineChart,
  },
  props: {
    porhoras: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    loaded: false,
    chartdata: null,

    keys: [],
    values: [],
    //horas
    horas: [],
    //tiempo
    tiempototal: [],
    arr: [],
    tiempo: [],
    datacollection: null,
  }),

  async mounted() {
    this.loaded = false;

    try {
      for (var i in this.porhoras) {
        this.porhoras.sort((a, b) => a._id - b._id);

        this.horas.push(this.porhoras[i]._id + ":00");
        this.tiempototal.push(this.porhoras[i].totalTime);
      }

      // console.log("horas", this.horas);
      // console.log("tiempo total", this.tiempototal);

      this.loaded = true;
    } catch (e) {
      console.error(e, "No se ejectuto bien el mountd");
    }
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.horas,

        datasets: [
          {
            label: ["Tiempo por Horas"],
            data: this.tiempototal,
            // display: false,
          },
        ],
      };
    },
  },
};
</script>

<style></style>
