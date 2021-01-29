<template>
  <v-card class="px-10 py-6" elevation="5" color="secondary" rounded="xl">
    <p class="text-h4 white--text">Top 5</p>
    <doughnut-chart
      v-if="loaded"
      :chart-data="datacollection"
      :chartOptions="chartOptions"
    >
    </doughnut-chart>
  </v-card>
</template>

<script>
//import { getDataToolbyDate } from "../utils/dataLoader";
import DoughnutChart from "./DoughnutChart.vue";
export default {
  name: "CircularChart",
  components: {
    DoughnutChart,
  },
  props: {
    topFiveData: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    loaded: false,
    //arreglos para recibir proper
    keys: [],
    values: [],
    chartOptions: {
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: true,
        // position: 'bottom'
        position: "bottom",
        labels: {
          boxWidth: 14,
          fontSize: 14,
          fontColor: "#fff",
        },
      },
      elements: {
        arc: {
          borderColor: "transparent",
        },
      },
    },
    return: { datacollection: null },
  }),

  mounted() {
    this.loaded = false;
    //probando array
    // console.log(this.topFiveData);
    try {
      //Recupero los datos del array  para mandar al diagrama
      this.topFiveData.forEach(element => {
        this.keys.push(element.nameTools);
        this.values.push(element.duration);
        this.loaded = true;
      });
    } catch (e) {
      console.error(e, "No se ejecuto bien el mounted");
    }
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.keys,
        datasets: [
          {
            //colores grafico
            backgroundColor: [
              "#dceed1",
              "#aac0aa",
              "#736372",
              "#a18276",
              "#dec0f1",
            ],
            data: this.values,
          },
        ],
      };
    },
  },
};
</script>

<style></style>
