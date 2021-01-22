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
      { text: "Tiempo (Minutos)", value: "duration" },
      { text: "Fecha", value: "time" },
      { text: "Accion", value: "action" }
    ]
  }),
  computed: {}
};
</script>
};
<style></style>
