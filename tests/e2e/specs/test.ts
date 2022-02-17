// https://docs.cypress.io/api/introduction/api.html
describe("Multilingual test cases", () => {
  it("Visits the app ", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Vuetify");
    cy.contains("h2", "What's Next");
    cy.get("[data-cy=xyz]").should("exist");
    cy.get(".v-select__slot")
      .click()
      .contains("Internationalization");
    cy.get(".v-list-item")
      .eq(1)
      .click();
    // cy.get('.v-list-item').first().click();
    cy.get("a")
      .contains("कलह समुदाय")
      .click();
    cy.contains("h1", "हैलो व्युटिफ़ाइ");
  });
});
