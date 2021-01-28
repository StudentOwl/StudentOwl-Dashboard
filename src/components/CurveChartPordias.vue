<template>
  <div class="container">
    <h1>GRÁFICA POR DIAS</h1>
    
    <line-chart v-if="loaded" :chart-data="datacollection" :height="200"></line-chart>
  </div>
</template>


<script>
//import {getDataToolbyDate } from "../utils/dataLoader";
import LineChart from './Diagrama_porDias.vue'
export default {

  name: "CurveChart",
  components: {
    LineChart
    
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
    chartdata: null,
    
    
    //horas
    horas: [],
    //tiempo 
    tiempototal: [],  
    dias:[],
    pordias: [
  { _id: '2021-01-27', totalTime: 9 },
  { _id: '2021-01-25', totalTime: 5786 },
  { _id: '2021-01-26', totalTime: 1168 }
], 

    return: {datacollection: null}
  }),
    
    async mounted () {
    this.loaded = false
  
    

   
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
     
    for (var i in this.pordias){
      this.pordias.sort((a, b) => a._id - b._id);

      this.dias.push(this.pordias[i]._id)
      this.tiempototal.push(this.pordias[i].totalTime)
    }
    
    
    console.log("horas",this.dias)
    console.log("tiempo total",this.tiempototal)
    
    
      this.loaded = true
    } catch (e) {
      console.error(e,"No se ejectuto bien el mountd")
    }this.fillData()
  },
   methods: {

    fillData ()
    {
      
      this.datacollection = {
        labels: this.dias,
      
        options: {
  legend: {
    display: false
  }
},
        datasets: [
          { 
            label:  ['Tiempo por Dias'],
            
           
            backgroundColor: '#23bc58',
            borderColor: '#0d4f24',
            pointColor: '#18cf60',
            pointBorderColor: '#185dcf',
            pointBackgroundColor: '#4c524e',  
            
            data: this.tiempototal
           
          },
        
          
        ]
      }
    }
   }
 
};
       
</script>

<style></style>
