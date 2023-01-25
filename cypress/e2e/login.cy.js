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
        cy.get("#loginEmail").should("be.visible").type(`marte.moslet@noroff.no`, {delay: 100});
        cy.get("#loginPassword").should("exist").type(`passord1{enter}`, {delay: 100});

        cy.url().should('include', 'profile');
        cy.url().should('not.include', 'login');
        expect(localStorage.getItem("token")).to.not.be.null
    })


    it("user cannot submit login form with invalid credentials", () => {
        cy.get("#loginForm").should("be.visible");
        cy.get("#loginEmail").should("be.visible").type(`invalid@email.no`).then(($email) => {
            expect($email[0].validationMessage).to.not.be.empty

        cy.get("#loginPassword").should("exist").type(`passord{enter}`)

        });
    })
})