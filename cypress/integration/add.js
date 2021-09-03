describe('adminDojobox', function () {
    it('Tambah Facilitator', function () {
        cy.login()
        cy.get('.d-flex > .btn').click()
        cy.wait(5000)
        cy.get('input[type="file"]').attachFile('foto.jpeg')
        cy.get('#user_fullname').type('dona').should('have.value','dona')
        cy.get('#user_email').type('dona12345@gmail.com').should('have.value','dona12345@gmail.com')
        cy.get('#user_is_active').select('Aktif')
        cy.get('#user_password').type('admin').should('have.value','admin')
        cy.get('#user_province_id').select('JAWA BARAT')
        cy.get('#user_city_id').select('KOTA BANDUNG')
        cy.get('#user_subdistrict_id').select('Soreang')
        cy.get('#user_address').type('jl kosambi').should('have.value','jl kosambi')
        cy.get('.py-2',{force:true}).click()
        cy.get('#add').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-header > .close > span',{force:true}).click()
    })
})