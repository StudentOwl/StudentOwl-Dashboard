<template>
  <v-card class="pa-2">
    CircularChart
  
  <div>
   {{componentId}}
  <p>{{chartdata}}---------------588</p>
  </div>
  </v-card>
</template>

<script>
import {getDataToolbyDate } from "../utils/dataLoader";
//import ChartDoughnutBase from './DoughnutChart.vue'
export default {
  name: "CircularChart",
  components:{
    //ChartDoughnutBase
  },
  props: {
  componentId:{
    type:String,
    required:true
  },
  dates:{
    type:Array,
    required:true,
    
  }

  },
  data: () => ({
loaded: false,
    chartdata: null

  }),

    async mounted () {
    this.loaded = false
    try {
        const resultado = await getDataToolbyDate(this.componentId, this.dates);
      this.chartdata = resultado.data;

      this.loaded = true
    } catch (e) {
      console.error(e,"No se ejectuto bien el mountd")
    }
  }
  /* async created() {
 
    this.loadDataTools();
  },
  methods: {
   
    loadDataTools:async function(){
 const resultado = await getDataToolbyDate(this.componentId, this.dates);
      this.logsData = resultado.data.data;
    },
  }*/
};
</script>

<style></style>
