<template>
  <v-card class="pa-2">
  <p align="center">Top 5 de herramientas</p>
    <line-chart
      v-if="loaded"
      :chart-data="datacollection"
      
    ></line-chart>
  </v-card>
</template>

<script>
//import { getDataToolbyDate } from "../utils/dataLoader";
import LineChart from "./DoughnutChart.vue";
export default {
  name: "CircularChart",
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
    topFiveData: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    loaded: false,
    chartdata: null,
    keys: [],
    values: [],
    return: { datacollection: null },
    
  }),
//probando
   mounted() {
    this.loaded = false;
    if(this.topFiveData)
    try {
      this.topFiveData.forEach(element => {
        this.keys.push(element.nameTools);
        this.values.push(element.duration);
      });
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
            label: "Top 5",
            backgroundColor: [
              "#4A148C",
              "#6A1B9A",
              "#7B1FA2",
              "#8E24AA",
              "#AB47BC",
            ],
            hoverBackgroundColor:[
              "#880E4F",
              "#AD1457",
              "#C2185B",
              "#D81B60",
              "#EC407A"
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
