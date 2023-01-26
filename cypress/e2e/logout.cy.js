describe("Social Media App: Authenticated user", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/");
        cy.wait(500)
        cy.clearLocalStorage()

        cy.get("#registerForm")
            .find('.modal-footer button[data-auth="login"]').click();
            
        cy.wait(1000)

        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").should("be.visible").type(`test.user.cypress@noroff.no`, {delay: 100});
        cy.get("#loginPassword").should("exist").type(`cypresstest{enter}`, {delay: 100});
        cy.wait(1000)
    })
        it("user can log out with the logout button", () => {
            cy.get("header button[data-auth='logout']").click({force: true}).should(() => {
                expect(localStorage.getItem("token")).to.be.null
            })
        });
    });