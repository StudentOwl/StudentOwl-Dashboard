import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    keys: {
      type: Array,
      default: null,
      require: true
    },
    values: {
      type: Array,
      default: null,
      require: true
    }
  },
  mounted() {
    this.renderChart({
      labels: this.keys,
      datasets: [
        {
          data: this.values
        }
      ]
    });
  }
};
