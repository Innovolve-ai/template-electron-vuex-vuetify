import { mount } from "@cypress/vue";
import Language from "./Language.vue";
import Vue from "vue";

import Vuetify from "vuetify";

Vue.use(Vuetify);

describe("HelloWorld", () => {
  let vuetify = {};

  beforeEach(() => {
    vuetify = new Vuetify();
  });
  it("renders a message", () => {
    const msg = "Internationalization";
    mount(Language, {
      vuetify,
      mocks: { $t: key => key },
      propsData: {
        msg
      }
    });

    cy.get("label").should("have.text", msg);
  });
});
