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
    students: {
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
        text: "ID",
        align: "start",
        sortable: true,
        value: "username"
      },
      { text: "Name", value: "name" },
      { text: "Last connection", value: "lastConn" },
      { text: "Last application", value: "lastApp" },
      { text: "Total time", value: "totalTime" }
    ],
    students: this.students
  })
};
</script>

<style></style>
