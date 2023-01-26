describe("Social Media App: Authenticated user", () => {
    beforeEach(() => {
        cy.visit("http://127.0.0.1:5500/");
        cy.wait(500)
        cy.clearLocalStorage()

        cy.get("#registerForm")
            .find('.modal-footer button[data-auth="login"]').click();
            
        cy.wait(1000)   
        
    })

    it("user can login", () => {
        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").should("be.visible").type(`test.user.cypress@noroff.no`, {delay: 100});
        cy.get("#loginPassword").should("exist").type(`cypresstest{enter}`).should(() => {
            expect(localStorage.getItem("token")).to.not.be.null
        });

        cy.url().should('include', 'profile');
        cy.url().should('not.include', 'login');
        
    })


    it("user cannot submit login form with invalid credentials", () => {
        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").should("be.visible").type(`invalid@email.no`).then(($email) => {
            expect($email[0].validationMessage).to.not.be.empty

        cy.get("#loginPassword").should("exist").type(`passord{enter}`)

        });
    })
})