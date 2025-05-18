import { navigateTo } from "../support/page-objects/navigationPage"
import { onFormLayoutsPage } from "../support/page-objects/formLayoutsPage"
import { onDatepickerPage } from "../support/page-objects/datepickerPage"
import { onSmartTablePage } from "../support/page-objects/smartTablePage"

describe('Test with Page Object', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigation across the pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.smartTablePage()
        navigateTo.toasterPage()
        navigateTo.tooltipPage()
    })
    //                                               // if don't want to run 'chrome' or ['!firefox', '!edge']
    // it('should submit Inline & Basic form and select tomorrow date in the calendar', { browser: 'chrome' }, () => {
    it('should submit Inline & Basic form and select tomorrow date in the calendar', { browser: ['!firefox', '!edge'] }, () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInLineFormWithNameAndEmail('Artem', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')

        navigateTo.datepickerPage()
        onDatepickerPage.selectCommonDatepickerDateFromToday(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(7, 14)

        navigateTo.smartTablePage()
        onSmartTablePage.addNewRecordWithFirstAndLastName('Joe', 'Doe')
        onSmartTablePage.updateAgeByFirstName('John', '37')
        onSmartTablePage.deleteRowByIndex(1)
    })
})