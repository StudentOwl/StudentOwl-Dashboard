<template>
  <v-data-table
    :headers="headers"
    :items="students"
    :items-per-page="5"
    :loading=isLoading
    item-key="username"
    class="elevation-1"
    loading-text="Cargando..."
  >

    <template v-slot:item.lastDate="{ item }"
      >
      {{ parseDateToDate(item.lastDate) }}
      </template
    >

    <template v-slot:item.lastTime="{ item }"
      >
      {{ parseDateToTime(item.lastTime) }}
      </template
    >

    <template v-slot:item.actions="{ item }"
      ><v-btn icon color="secodary" :to="`detail/${item.username}`"
        ><v-icon>mdi-information-outline</v-icon></v-btn
      ></template
    >
  </v-data-table>
</template>

<script>
import { format } from "date-fns";

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
      { text: "Fecha", value: "lastDate", sortable: true },
      { text: "Hora", value: "lastTime", sortable: true },
      { text: "Detalle", value: "actions", sortable: false }
    ],
  }),
  computed: {},
  methods: {
    parseDateToDate: function(date) {
      if (date === '-') {
        return '-'
      }
      return format(date, 'yyyy-MM-dd');
    },
    parseDateToTime: function(date) {
      if (date === '-') {
        return '-'
      }
      return format(date, 'HH:mm:ss');
    }
  }
};
</script>

<style></style>
