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

    <!-- <template v-slot:item.lastDate="{ item }"
      >
      {{ parseDateToDate(item.lastDate) }}
      </template
    > -->

    <template v-slot:item.lastTime="{ item }"
      >
      {{ parseDateToTime(item.lastTime) }}
      </template
    >

    <template v-slot:item.actions="{ item }"
      ><v-btn icon color="secodary" :to="`${componentId}/detail/${item.username}`"
        ><v-icon>mdi-timeline-check-outline</v-icon></v-btn
      ></template
    >
  </v-data-table>
</template>

<script>
import moment from "moment";
import { format } from "date-fns";
// import formatRelative from "date-fns/formatRelative";

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
    componentId: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    headers: [
      { text: "Estudiante", value: "name" },
      { text: "Accion", value: "lastAction", sortable: false },
      // { text: "Fecha", value: "lastDate", sortable: true },
      { text: "Fecha", value: "lastTime", sortable: true },
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
      // return format(date, 'HH:mm:ss', {locale: 'es'});
      // console.log(formatRelative(date, new Date()));
      // return formatRelative(date, new Date(), {locale: 'es'});
      moment.locale('es');
      return moment(date).calendar();
    }
  }
};
</script>

<style></style>
