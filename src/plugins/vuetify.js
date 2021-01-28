import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken3,
        secondary: colors.blue.lighten1,
        accent: colors.indigo.accent1,
      },
    },
  },
});
