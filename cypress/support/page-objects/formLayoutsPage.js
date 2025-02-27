
export class FormLayoutsPage {

    submitInLineFormWithNameAndEmail(name, email) {
        cy.contains('nb-card', 'Inline form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[type="checkbox"]').click({ force: true })
            cy.wrap(form).submit()              // ---> this method only use for submit the Form(s)
        })
    }

    submitBasicFormWithEmailAndPassword(email, password) {
        cy.contains('nb-card', 'Basic form').find('form').then(form => {
            cy.wrap(form).find('[placeholder="Email"]').type(email)
            cy.wrap(form).find('[placeholder="Password"]').type(password)
            cy.wrap(form).find('[type="checkbox"]').click({ force: true })
            cy.wrap(form).submit()
        })
    }
}

export const onFormLayoutsPage = new FormLayoutsPage()