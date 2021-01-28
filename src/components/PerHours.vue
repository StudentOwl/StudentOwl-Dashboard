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
    componentId: {
      type: String,
      required: true,
    },
    dates: {
      type: Array,
      required: true,
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
    porhoras: [
      { _id: "17", totalTime: 780 },
      { _id: "00", totalTime: 9 },
      { _id: "16", totalTime: 3020 },
      { _id: "15", totalTime: 1986 },
      { _id: "22", totalTime: 380 },
      { _id: "23", totalTime: 788 },
    ],
    pordias: [
      { _id: "2021-01-27", totalTime: 9 },
      { _id: "2021-01-25", totalTime: 5786 },
      { _id: "2021-01-26", totalTime: 1168 },
    ],

    return: { datacollection: null },
  }),

  async mounted() {
    this.loaded = false;

    try {
      /* const resultado = await getDataToolbyDate(this.componentId, this.dates);
      this.chartdata = resultado.data;
      console.log("comparacion",resultado.data)
      for (var key in this.chartdata) {
         this.keys.push(key)
         this.values.push(this.chartdata[key])              
}
   console.log("keys",this.keys)
   console.log("values",this.values)
    */

      for (var i in this.porhoras) {
        this.porhoras.sort((a, b) => a._id - b._id);

        this.horas.push(this.porhoras[i]._id + ":00");
        this.tiempototal.push(this.porhoras[i].totalTime);
      }

      console.log("horas", this.horas);
      console.log("tiempo total", this.tiempototal);

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
