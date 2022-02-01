describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });
});
describe("My First Test", () => {
  it('finds the content "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
  });
});
describe("My First Test1", () => {
  it('finds the content "type"', () => {
    cy.visit(process.env.STATIC_URL);
    cy.contains("Vuetify");
    cy.get("#sec").click({ force: true });
    // cy.get('[data-cy=select-input]').select('optionValue') 
    cy.get('[data-cy=select-input]').should('have.property', 'items').each(($ele) => {
      if ($ele.text() == "English") {
          cy.wrap($ele).click()
      }
  })
    // cy.get('v-select__slot').should('have.text','Internationalization')
    // cy.get(".v-select").select("optionValue");
  });
});
