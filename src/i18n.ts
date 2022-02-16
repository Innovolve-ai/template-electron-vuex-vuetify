import Vue from "vue";
import VueI18n, { LocaleMessages } from "vue-i18n";
import { getModule } from "vuex-module-decorators";
import Language from "../src/store/Modules/Language";
const langModule = getModule(Language);

Vue.use(VueI18n);

function loadLocaleMessages(): LocaleMessages {
  const locales = require.context(
    "./locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages: LocaleMessages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: langModule.language || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages()
});
