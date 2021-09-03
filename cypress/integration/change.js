describe('adminDojobox', function () {
    it('Ubah Facilitator', function () {
        cy.login()
        cy.get(':nth-child(1) > .nav-link > span').click()
        cy.get(':nth-child(1) > .dt-center > .btn-group > .btn > .fas').click()
        cy.get('[href="facilitator/detail/1"]').click()
        cy.get('.btn-outline-primary').click()
        cy.wait(5000)
        cy.get('#user_subdistrict_id').select('Mlati')
        cy.wait(5000)
        cy.get('#edit').click()
    })
})