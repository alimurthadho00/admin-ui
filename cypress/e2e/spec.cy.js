describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("https://admin-ui-sand.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.get("nav").should("exist");
    cy.get("header").should("exist");

    cy.wait(5000);
  });

  it("should not allow user to log in with invalid credentials", () => {
    cy.visit("https://admin-ui-sand.vercel.app/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .type("123")
      .should("have.value", "123");

    cy.get("button").contains("Login").click();

    cy.contains("Wrong Password").should("be.visible");
  });
});