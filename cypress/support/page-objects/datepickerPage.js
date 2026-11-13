
function selectDayFromCurrent(day) {
    let date = new Date()
    date.setDate((date.getDate() + day))
    let futureDay = date.getDate()
    let futureMonth = date.toLocaleString('en-US', { month: 'short' })
    let futureMonthLong = date.toLocaleString('en-US', { month: 'long' })
    let futureYear = date.getFullYear()
    let dateAssert = futureMonth + ' ' + futureDay + ', ' + futureYear

    cy.get('nb-card-header.calendar-navigation button').first().invoke('text').then(monthAndYear => {
        if (!monthAndYear.includes(futureMonthLong) || !monthAndYear.includes(futureYear)) {
            cy.get('button.next-month').click()
            selectDayFromCurrent(day)
        } else {
            cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
        }
    })
    return dateAssert
}

export class DatepickerPage {
    selectCommonDatepickerDateFromToday(dayFromToday) {
        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()

            let dateAssert = selectDayFromCurrent(dayFromToday)
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
            cy.wrap(input).should('have.value', dateAssert)
        })
    }

    selectDatepickerWithRangeFromToday(firstDay, secondDay) {
        cy.contains('nb-card', 'Datepicker With Range').find('input').then(input => {
            cy.wrap(input).click()
            let dateAssertFirst = selectDayFromCurrent(firstDay)
            let dateAssertSecond = selectDayFromCurrent(secondDay)

            const finalDate = dateAssertFirst + ' - ' + dateAssertSecond // page object lecture #33
            cy.wrap(input).invoke('prop', 'value').should('contain', finalDate)
            cy.wrap(input).should('have.value', finalDate)
        })
    }
}

export const onDatepickerPage = new DatepickerPage()
