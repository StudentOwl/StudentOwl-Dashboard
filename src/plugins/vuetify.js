import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";
import es from "vuetify/es5/locale/es";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { es },
    current: "es",
  },
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
