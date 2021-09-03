describe('adminDojobox', function () {
    it('Lihat Facilitator', function () {
        cy.login()
        cy.get(':nth-child(1) > .nav-link > span').click()
        cy.get(':nth-child(1) > .dt-center > .btn-group > .btn > .fas').click()
        cy.get('[href="facilitator/detail/1"]').click()
        cy.wait(5000)
        cy.get('.justify-content-end > .btn-primary').click()
    })
})