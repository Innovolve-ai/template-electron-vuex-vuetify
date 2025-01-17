import { createI18n } from "vue-i18n"
import en from "./locales/en.json"
import hn from "./locales/hn.json"
import { getModule } from "vuex-module-decorators"
import Language from "./store/Modules/Language"
const langModule = getModule(Language)

const messages = {
  en,
  hn,
}

const i18n = createI18n({
  locale: langModule.language || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages,
})

export default i18n
