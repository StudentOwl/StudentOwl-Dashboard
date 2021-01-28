<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['chartData'],
  data () {
    return {
  
          chartOptions: {
          responsive:true,
          maintainAspectRatio: false,
            legend: {
            display: false,
             position: 'bottom'
              // position: 'right'
          },

            title: {
             // text: 'Tiempo por Horas',
             // display:true,
             
            },scales: {
          yAxes: [
            {
              ticks: {
                
                beginAtZero: true
              },gridLines: {
                display: false
              },display:false

            }
          ],xAxes: [ {
              gridLines: {
                display: false
              }
            }]

        }

           
          },
    };
  },
 
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.chartOptions)
  }
}
</script>
