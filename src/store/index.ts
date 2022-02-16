import Vue from "vue";
import Vuex from "vuex";
// import Language from "@/store/modules/Language";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== "production";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexLocal.plugin]
  // strict: debug,
}); // import Vue from "vue";
// import Vuex from "vuex";
// import VuexPersistence from 'vuex-persist'
// //import language from './Modules/Language'
// // const vuexLocal = new VuexPersistence({
// //   storage: window.localStorage
// // })
// // const vuexLocal = new VuexPersistence<RootState>({
// //   storage: window.localStorage
// // })

// Vue.use(Vuex);

// export default new Vuex.Store({
//   // state: {language:"en"},
//   // mutations: {},
//   // actions: {},
//   // modules: {},
//   state: {

//     language: 'en'

//   },
//   mutations: {
//     setLanguage(state,lang) {
//       // mutate state
//        state.language=lang
//     }
//   },
//   plugins: [new VuexPersistence().plugin]
// });
