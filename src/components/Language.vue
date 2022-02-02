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
export default {
  methods: {
    changeLanguage(val) {
      console.log(val);
      this.$i18n.locale = val;
      localStorage.setItem("language", val);
      console.log(this.$i18n);
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
