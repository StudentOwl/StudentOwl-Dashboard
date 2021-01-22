<template>
  <div class="container">
    Circle chart
    <line-chart
      v-if="loaded"
      :chart-data="datacollection"
      :height="450"
    ></line-chart>
  </div>
</template>

<script>
import { getDataToolbyDate } from "../utils/dataLoader";
import LineChart from "./DoughnutChart.js";
export default {
  name: "CircularChart",
  components: {
    LineChart
  },
  props: {
    componentId: {
      type: String,
      required: true
    },
    dates: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    loaded: false,
    chartdata: null,
    keys: [],
    values: [],
    return: { datacollection: null }
  }),

  async mounted() {
    this.loaded = false;
    try {
      const resultado = await getDataToolbyDate(this.componentId, this.dates);
      this.chartdata = resultado.data;
      for (var key in this.chartdata) {
        this.keys.push(key);
        this.values.push(this.chartdata[key]);
      }

      this.loaded = true;
    } catch (e) {
      console.error(e, "No se ejectuto bien el mountd");
    }
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: this.keys,
        datasets: [
          {
            label: this.keys,
            // backgroundColor: "#5eba2a",
            data: this.values
          }
        ]
      };
    }
  }
};
</script>

<style></style>
