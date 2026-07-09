describe("User Sign Up", () => {
  it("should allow user to sign up with valid data", () => {
    cy.visit("http://localhost:5173");

    cy.url().should("include", "/login");

    cy.contains("a", "Create an account").click();

    cy.url().should("include", "/register");

    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "John Doe")
      .type("Ali")
      .should("have.value", "Ali");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type(`ali${Date.now()}@example.com`);

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "************")
      .type("123456")
      .should("have.value", "123456");

    cy.contains("button", "Register").click();

    cy.wait(3000);

    cy.get("body").should("be.visible");
  });
});