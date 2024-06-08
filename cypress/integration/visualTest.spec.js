describe('visual test', () => {

    it('should test snapshot', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            cy.wrap(firstForm).toMatchImageSnapshot()   // snapshot only testing area
            cy.document().toMatchImageSnapshot()        // for full page
        })
    })

    it.only('should test with Percy', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').then(firstForm => {
            cy.wait(5000)
            cy.percySnapshot('FormLayouts')
        })
    })
})