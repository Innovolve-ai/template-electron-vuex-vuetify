<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ $t('components.helloworld.header') }}
        </h1>
        <p
          v-html="$t('components.helloworld.sub-header')"
          class="subheading font-weight-regular"
        ></p>
        <!-- <h3>{{ $t('hello') }}</h3>
    <h3>{{ $t('welcome',{name:"Suresh Ramani"}) }}</h3> -->
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          {{ $t('components.helloworld.header-2.text') }}
        </h2>
        <v-row justify="center"> </v-row>
        <v-row justify="center">
          <a
            v-for="next in whatsNext"
            :key="next.text"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ $t(next.text) }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          {{ $t('components.helloworld.header-3.text') }}
        </h2>

        <v-row justify="center">
          <a
            v-for="link in importantLinks"
            :key="link.text"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ $t(link.text) }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
           {{ $t('components.helloworld.header-4.text') }}
        </h2>

        <v-row justify="center">
          <a
            v-for="eco in ecosystem"
            :key="eco.text"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ $t(eco.text) }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
// import Language from '../components/Language.vue'

export default Vue.extend({
  name: "HelloWorld",
  // components: {

  //   Language
  // },

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
});
</script>
