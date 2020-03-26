describe("Test our inputs and submit our form", function() {
    this.beforeEach(function() {
      cy.visit("http://localhost:3003");
    });
    it("Add test to inputs and submit form", function() {
      cy.get("input[name='name']")
        .type("john")
        .should("have.value", "john");
      cy.get("input[name='email']")
        .type("email@email.com")
        .should("have.value", "email@email.com");
      cy.get("[type='password']")
        .type("nerdnerd")
        .should("have.value", "nerdnerd");
      cy.get("[type='checkbox']")
        .check()
        .should("be.checked");
    //   cy.get("buttonDisabled")
    //     .should("have.value", "false")
        cy.get("button").click();
    });
  });
  