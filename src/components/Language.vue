<template>
  <v-container fluid>
    <v-row align="center">
      <div class="select" id="sec1">
        <v-select
          id="{ 'sec' }"
          class="select"
          @change="changeLanguage"
          :items="items"
          item-text="state"
          item-value="abbr"
          :label="$t('components.language.label')"
          data-cy="xyz"
        ></v-select>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import { getModule } from "vuex-module-decorators";
import Language from "../store/Modules/Language";
const langModule = getModule(Language);

export default {
  methods: {
    changeLanguage(val) {
      console.log(val);
      langModule.setLanguage(val);
      this.$i18n.locale = val;
      console.log(this.$i18n.locale);
      console.log(langModule);
    }
  },

  data: () => ({
    select: { state: "Florida", abbr: "FL" },
    items: [
      { state: "English", abbr: "en" },
      { state: "हिन्दी", abbr: "hn" },
      { state: "La France", abbr: "fr" }
    ]
  })
};
</script>
<style scoped>
.select {
  margin-top: 26px;
  padding-left: 350px;
}
</style>
