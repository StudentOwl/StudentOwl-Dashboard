<template>
  <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    class="elevation-1"
    :loading="false"
    loading-text="Loading... Please wait"
  >
    <template v-slot:item.actions="{ item }"
      ><v-btn icon color="secodary" :to="`detail/${item.username}`"
        ><v-icon>mdi-information-outline</v-icon></v-btn
      ></template
    >
  </v-data-table>
</template>

<script>
export default {
  name: "TableStudents",
  props: {
    students: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
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
      { text: "Lastname", value: "lastname" },
      { text: "Detail", value: "actions", sortable: false },
    ],
  }),
  computed: {},
};
</script>

<style></style>
