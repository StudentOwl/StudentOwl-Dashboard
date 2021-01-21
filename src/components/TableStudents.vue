<template>
  <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    class="elevation-1"
    :loading="isLoading"
    loading-text="Loading... Please wait"
  ></v-data-table>
</template>

<script>
export default {
  name: "TableStudents",
  props: {
    students: Array,
    isLoading: Boolean,
  },
  data: () => ({
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: true,
        value: "username",
      },
      { text: "Name", value: "name" },
      { text: "Last connection", value: "lastConn" },
      { text: "Last application", value: "lastApp" },
      { text: "Total time", value: "totalTime" },
    ],
    students: [
      {
        username: "lfbermeo",
        name: "Luisa Fernanda Bermeo",
        lastConn: "At 3.PM",
        lastApp: "Edge",
        totalTime: 15465,
      },
      {
        username: "jjgahona",
        name: "Juan Jose Gahona",
        lastConn: "At past day",
        lastApp: "Architect",
        totalTime: 1245,
      },
    ],
  }),
};
</script>

<style>
</style>