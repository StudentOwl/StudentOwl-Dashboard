<template>
  <v-card class="pa-2">

    <line-chart
      v-if="loaded"
      :chart-data="datacollection"
    >
    </line-chart>
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
 //arreglos para recibir proper
    keys: [],
    values: [],
    return: { datacollection: null },
    
  }),

   mounted() {
    this.loaded = false;
    //probando array
 console.log(this.topFiveData);
    try {
      //Recupero los datos del array  para mandar al diagrama
      this.topFiveData.forEach(element => {
        this.keys.push(element.nameTools);
        this.values.push(element.duration);
         this.loaded = true;
      });
     
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
         //colores grafico
            backgroundColor: [
              "#2196F3",
              "#4CAF50",
              "#FF9800",
              "#DD2C00",
              "#5E35B1",
            ],
            //Colres hover
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
