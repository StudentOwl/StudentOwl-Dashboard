<template>
  <v-card class="px-6 py-6" elevation="5" color="secondary" rounded="xl">
    <h1 class="text-h5 white--text">Por días</h1>
    <line-chart
      v-if="loaded"
      :chart-data="datacollection"
      :height="200"
    ></line-chart>
  </v-card>
</template>


<script>
//import {getDataToolbyDate } from "../utils/dataLoader";
import LineChart from "./LineChart.vue";
export default {
  name: "PerDays",
  components: {
    LineChart,
  },
  props: {
    pordias: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    loaded: false,
    chartdata: null,

    //horas
    horas: [],
    //tiempo
    tiempototal: [],
    dias: [],

    datacollection: null,
  }),

  async mounted() {
    this.loaded = false;

    try {

      for (var i in this.pordias) {
        this.pordias.sort((a, b) => {
          if (a._id > b._id) {
            return 1;
          }
          if (a._id < b._id) {
            return -1;
          }
          return 0;
        });

        this.dias.push(this.pordias[i]._id);
        this.tiempototal.push(this.pordias[i].totalTime);
      }

      // console.log("horas", this.dias);
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
        labels: this.dias,

        options: {
          legend: {
            display: false,
          },
        },
        datasets: [
          {
            label: ["Minutos diarios"],
            data: this.tiempototal,
          },
        ],
      };
    },
  },
};
</script>

<style></style>
