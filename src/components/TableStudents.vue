<template>
  <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    :loading=isLoading
    item-key="username"
    group-by="lastTime"
    class="elevation-1"
    loading-text="Cargando..."
    show-group-by
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
      { text: "Estudiante", value: "name" },
      { text: "Accion", value: "lastAction", sortable: false },
      { text: "Hora", value: "lastTime", sortable: true },
      { text: "Detalle", value: "actions", sortable: false }
    ],
  }),
  computed: {},
};
</script>

<style></style>
