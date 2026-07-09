describe("User Sign Up", () => {
  it("should allow user to sign up with valid data", () => {
    cy.visit("http://localhost:5173");
    cy.wait(2000);
    cy.url().should("include", "/login");
    cy.wait(2000);
    cy.contains("a", "Create an account").click();
    cy.wait(2000);
    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Name")
      .type("Yayan")
      .should("have.value", "Yayan");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("ali@example.com")
      .should("have.value", "ali@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "●●●●●●●●●●●●●●")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Sign Up").click();

    cy.wait(5000);

    cy.url().should("include", "/");
  });
});