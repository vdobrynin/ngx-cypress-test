describe('visual tests', () => {

    beforeEach('open form layouts', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.contains('nb-card', 'Using the Grid').should('be.visible')
    })

    it('should test snapshot', () => {
        cy.percySnapshot('Form Layouts - Using the Grid')
        cy.percySnapshot('Form Layouts')
    })

    it('should test with Percy', () => {
        cy.percySnapshot('FormLayouts1')
        cy.percySnapshot('FormLayouts2', { widths: [768, 992, 1200] })
    })
})
