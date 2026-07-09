describe("Dashboard Overview Page", () => {
  beforeEach(() => {
    // Membuka halaman login
    cy.visit("http://localhost:5173/login");
  });

  it("User berhasil mengakses halaman Dashboard (Overview)", () => {
    // Mengisi email
    cy.get('input[name="email"]').type("111202315269@mhs.dinus.ac.id");

    // Mengisi password
    cy.get('input[name="password"]').type("123456");

    // Klik tombol login
    cy.contains("Login").click();

    // Memastikan berhasil masuk ke dashboard
    cy.url().should("include", "/");

    // Memastikan komponen dashboard tampil
    cy.contains("Goals", { timeout: 10000 }).should("be.visible");
    cy.contains("Statistics").should("be.visible");
    cy.contains("Upcoming Bill").should("be.visible");
    cy.contains("Recent Transaction").should("be.visible");

    // Memastikan menu sidebar tampil
    cy.contains("Overview").should("be.visible");
    cy.contains("Balances").should("be.visible");
    cy.contains("Expenses").should("be.visible");
  });
});