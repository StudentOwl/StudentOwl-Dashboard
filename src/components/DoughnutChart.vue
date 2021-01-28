<script>
import { Doughnut, mixins } from "vue-chartjs";

const { reactiveProp } = mixins;

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: ["chart-data"],
  data () {
    return {
  
          chartOptions: {
          responsive:true,
          maintainAspectRatio: false,
            legend: {
            display: true,
             position: 'bottom'
              // position: 'right'
          },

            title: {
              text: 'Top 5 de herramientas',
              display:true,
             
            },
           
          },
    };
  },   
         // series: [44, 55, 13, 43, 22],
      
          
          
       
        
      
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
