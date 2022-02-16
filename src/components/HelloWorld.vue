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
          {{ $t("components.helloworld.header") }}
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
          {{ $t("components.helloworld.header-2.text") }}
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
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          {{ $t("components.helloworld.header-3.text") }}
        </h2>

        <v-row justify="center">
          <a
            v-for="link in importantLinks"
            :key="link.text"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          {{ $t("components.helloworld.header-4.text") }}
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "HelloWorld",
  // created() {
  //   console.log(this.$i18n.locale);
  // },
  computed: {
    ecosystem() {
      return [
        {
          text: this.$t("components.helloworld.eco.link1"),
          href: "https://github.com/vuetifyjs/vuetify-loader"
        },
        {
          text: this.$t("components.helloworld.eco.link2"),
          href: "https://github.com/vuetifyjs/vuetify"
        },
        {
          text: this.$t("components.helloworld.eco.link3"),
          href: "https://github.com/vuetifyjs/awesome-vuetify"
        }
      ];
    },
    importantLinks() {
      return [
        {
          text: this.$t("components.helloworld.Important.link1"),
          href: "https://vuetifyjs.com"
        },
        {
          text: this.$t("components.helloworld.Important.link2"),
          href: "https://community.vuetifyjs.com"
        },
        {
          text: this.$t("components.helloworld.Important.link3"),
          href: "https://madewithvuejs.com/vuetify"
        },
        {
          text: this.$t("components.helloworld.Important.link4"),
          href: "https://twitter.com/vuetifyjs"
        },
        {
          text: this.$t("components.helloworld.Important.link5"),
          href: "https://medium.com/vuetify"
        }
      ];
    },
    whatsNext() {
      return [
        {
          text: this.$t("components.helloworld.whatsnext.link1"),
          href: "https://vuetifyjs.com/components/api-explorer"
        },
        {
          text: this.$t("components.helloworld.whatsnext.link2"),
          href: "https://vuetifyjs.com/getting-started/pre-made-layouts"
        },
        {
          text: this.$t("components.helloworld.whatsnext.link3"),
          href:
            "https://vuetifyjs.com/getting-started/frequently-asked-questions"
        }
      ];
    }
  }
});
</script>
