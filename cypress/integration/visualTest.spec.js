describe('visual test', () => {

    it('test applitools 5', () => {
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    })
})