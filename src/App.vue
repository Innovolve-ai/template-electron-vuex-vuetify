<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <Language></Language>
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2"
          >{{ $t("components.language.appbar-end-text") }}
        </span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
      <!-- <Language></Language> -->
      <!-- <h1>{{ $t('hello') }}</h1>
    <h1>{{ $t('welcome',{name:"Suresh Ramani"}) }}</h1> -->
      <!-- <Language></Language> -->
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import Language from "./components/Language.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld,
    Language
  },

  data: () => ({
    //
  })
});
</script>
