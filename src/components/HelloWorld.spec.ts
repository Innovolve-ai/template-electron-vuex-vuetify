import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";
import Vue from "vue";
import Vuetify from "vuetify";
import i18n from "../i18n";
Vue.use(Vuetify);
describe("HelloWorld", () => {
  let vuetify = {};
  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("renders a message", () => {
    const msg = `$t{{components.helloworld.header}}`;
    mount(HelloWorld, {
      vuetify,
      i18n,
      mocks: { $t: key => key },
      propsData: {
        msg
      }
    });
    cy.get("h1").should("have.text", msg);
  });
});
