import { Line } from 'vue-chartjs'
<template>
    <div class="small">

        <line-chart :chart-data="datacollection" :height="100"></line-chart>
    </div>
</template>

<script>
    import axios from "axios";
    import  Line  from 'vue-chartjs'

    //Extracción de datos a la gráfica desde la API
    export default {
        extends: Line,
        name: "ChartDetails",
        props: {
            detailsCharts: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                materias: null,
                tiempo: null
            };
        },
        mounted() {
            this.getMaterias();
            this.getTiempo();
            this.renderChart(this.detailsCharts)
        },
        methods: {
            getMaterias() {
                console.log("get");
                axios
                    .get('https://api-studentowl.herokuapp.com/api/v1.0/logs/all?component=AAAA00')
                    .then(response => {this.materias = response.data}).catch(e => console.log(e));
            },
            getTiempo() {
                axios
                    .get('https://api-studentowl.herokuapp.com/api/v1.0/logs/all?msStart=1234567890123')
                    .then(response => {this.tiempo = response.data}).catch(e => console.log(e));
            }
        }
};


</script>

<style lang="css">
.small {
max-width: 900px;
        /* max-height: 500px; */
margin: 50px auto;
}
</style>