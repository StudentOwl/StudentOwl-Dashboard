<template>
  <div class="container">
    CurveChart
    <line-chart v-if="loaded" :chart-data="datacollection" :height="400"></line-chart>
  </div>
</template>


<script>
import {getDataToolbyDate } from "../utils/dataLoader";
import LineChart from './CurveChart2.vue'
export default {

  name: "CircularChart",
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
    
    keys: [],
    values: [],
    //horas
    horas: [],
    //tiempo 
    tiempototal: [],
    arr: [],
   tiempo:[],
    porhoras: [
  { _id: '17', totalTime: 780 },
  { _id: '00', totalTime: 9 },
  { _id: '16', totalTime: 3020 },
  { _id: '15', totalTime: 1986 },
  { _id: '22', totalTime: 380 },
  { _id: '23', totalTime: 788 }
],
     pordias: [
  { _id: '2021-01-27', totalTime: 9 },
  { _id: '2021-01-25', totalTime: 5786 },
  { _id: '2021-01-26', totalTime: 1168 }
], 

    return: {datacollection: null}
  }),
    
    async mounted () {
    this.loaded = false
    
    

   this.tiempo =  this.porhoras.filter(function(e){
          console.log("pppppppppppppp",e._id)
          return e._id
    });
      console.log("si salgo",this.tiempo)

    try {

       const resultado = await getDataToolbyDate(this.componentId, this.dates);
      this.chartdata = resultado.data;
      console.log("comparacion",resultado.data)
      for (var key in this.chartdata) {
         this.keys.push(key)
         this.values.push(this.chartdata[key])              
}
   console.log("keys",this.keys)
   console.log("values",this.values)
    
     // let transf = JSON.stringify(this.porhoras,['_id']); 
     // console.log("tranformado", transf)
      

    //for (var hora in this.porhoras){
     
      // console.log("for de prueba",this.porhoras[hora])
       
       //   this.arr = this.porhoras[hora]
          
     
      
      //
     // this.horas.push(hora)
     // this.tiempototal.push(this.arr[hora])
  //  }
    for (var i in this.porhoras){
      this.horas.push(this.porhoras[i]._id+":00")
      this.tiempototal.push(this.porhoras[i].totalTime)
    }
   

    //console.log("arrrrrrr", Object.values(this.porhoras))
    
    console.log("horas",this.horas)
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
        labels: this.horas,
        datasets: [
          {
            label: this.horas,
            backgroundColor: '#FF0066',
            data: this.tiempototal
          },
        ]
      }
    }
   }
 
};
</script>

<style></style>
