<template>

    <v-data-table
      :headers="headers"
      :items="details"
      :items-per-page="3"
      class="elevation-1"
      :loading="false"
      loading-text="Loading... Please wait"
    >
    
    </v-data-table>
    
  </template>
  
<script>
  export default {
    name: "TableDetails",
    props: {
      details: {
        type: Array,
        default: () => []
      },
      isLoading: {
        type: Boolean,
        default: true
      }
    },
    data: () => ({
      headers: [
        {
          text: "Aplicación",
          align: "start",
          sortable: true,
          value: "applicationName"
        },
        { text: "Tiempo", value: "duration" },
        { text: "Fecha", value: "time" }
      ],
      studentsName: [

        {
          text: "Nombre",
          align: "start",
          sortable: true,
          value: "name"
        },
        { text: "Apellido", value: "lastname" }
      ]

     }),
    computed: {
    }
  };
  </script>
  };
<style></style>

