<template>
  <v-data-table
    :headers="headers"
    :items="detailsData"
    :items-per-page="3"
    class="elevation-1"
    :loading="true"
    loading-text="Loading... Please wait"
  ></v-data-table>
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
        value: "aplicationName"
      },
      { text: "Tiempo", value: "time" },
      { text: "Fecha", value: "date" }
    ],
    detailsData: []
  }),
  computed: {
    getDetailsData: () => {
      return this.details;
    }
  }
};
</script>

<style></style>
