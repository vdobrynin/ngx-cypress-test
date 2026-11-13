
function selectGroupMenuItem(groupMenu) {
    cy.contains('a', groupMenu).then(menu => {
        if (menu.attr('aria-expanded') !== 'true') {
            cy.wrap(menu).click()
        }
    })
}

export class NavigationPage {
    formLayoutsPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Form Layouts').click({ force: true })
    }

    datepickerPage() {
        selectGroupMenuItem('Forms')
        cy.contains('Datepicker').click({ force: true })
    }

    toasterPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Toastr').click({ force: true })
    }

    smartTablePage() {
        selectGroupMenuItem('Tables & Data')
        cy.contains('Smart Table').click({ force: true })
    }

    tooltipPage() {
        selectGroupMenuItem('Modal & Overlays')
        cy.contains('Tooltip').click({ force: true })
    }
}

export const navigateTo = new NavigationPage()
