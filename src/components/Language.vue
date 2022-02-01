<template>
  <v-container fluid>
    <v-row align="center">
      <div class="select">
        <v-select
          id="sec"
          class="select"
          @change="changeLanguage"
          :items="items"
          item-text="state"
          item-value="abbr"
          :label="$t('components.language.label')"
          data-cy='select-input'
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
    // items: [
    //   {
    //     label: "English",
    //     value: "en",
    //   },
    //   {
    //     label: "Hindi",
    //     value: "hn",
    //   },
    //   {
    //     label: "French",
    //     value: "fr",
    //   },
    // ],

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
