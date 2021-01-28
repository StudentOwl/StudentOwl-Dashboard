<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ["chartData"],
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
          position: "bottom",
          // position: 'right'
        },
        tooltips: {
          mode: 'y',
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
              display: false,
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        elements: {
          line: {
            borderColor: 'transparent',
            backgroundColor: '#283593'
          },
          point: {
            radius: 3,
            backgroundColor: 'transparent',
            borderColor: 'transparent'
          }
        }
      },
    };
  },

  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
