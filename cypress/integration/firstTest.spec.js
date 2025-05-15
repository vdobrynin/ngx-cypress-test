/// <reference types="cypress" />

const { property } = require("lodash")

describe('first test suite', () => {

    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by Tag Name
        cy.get('input')

        // by ID
        cy.get('#inputEmail1')              // # for id  

        // by Class Value
        cy.get('.input-full-width')         // . for class value

        // by Attribute Name
        cy.get('[fullwidth]')               // [name] for attribute  

        // by Attribute and Value
        cy.get('[placeholder="Email"]')     // [name + value] for attribute 

        // by Entire Class Value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by Two Attributes
        cy.get('[placeholder="Email"][fullwidth]')          // 2 attributes

        // by Tag Name and Attribute with value
        cy.get('input[placeholder="Email"]')                // tag + attribute w/value

        // by Tag Name, Attribute with Value, ID and Class Name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // by cypress test ID --> The Most Recommended 
        cy.get('[data-cy="imputEmail1"]')                   // typo by creator
    })

    it('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // Theory
        // get() - find elements on the page by locator globally
        // find() - find child elements by locator
        // contains() - find HTML text & by text & locator
        cy.contains('Sign in')                   // ---> cy. are looking for the first much of "Sign in"
        cy.contains('[status="warning"]', 'Sign in')       //--> to find 2nd locator of "Sign in"
        cy.contains('nb-card', 'Horizontal form').find('button')  //-->find 2nd locator of "Sign in"
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')
        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')//-->find input on the 2nd form for email
        cy.contains('nb-card', 'Horizontal form').get('button')

        //cypress chains & DOM
        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()   //--> if finish with action method (as click or type), next in new chain start with cy. 
    })

    // it.only('alias & then & wrap methods', () => {
    it('save subject of the command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        //--->                                 //---> CAN'T DO THINGS LIKE THIS below
        // const firstForm = cy.contains('nb-card', 'Using the Grid')
        // // const secondForm = cy.contains('nb-card', 'Basic form')
        // firstForm.find('[for="inputEmail1"]').should('contain', 'Email')
        // firstForm.find('[for="inputPassword2"]').should('contain', 'Password')
        // secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // secondForm.find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // // ---> 1st. cypress alias style --> correct one (use @ for alias)
        // cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        // cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

        // // ---> 2nd. cypress then() method --> correct two (use wrap method)
        cy.contains('nb-card', 'Using the Grid').then(usingTheGridForm => {
            cy.wrap(usingTheGridForm).find('[for="inputEmail1"]').should('contain', 'Email')
            cy.wrap(usingTheGridForm).find('[for="inputPassword2"]').should('contain', 'Password')
        })
    })

    it('extract text values (invoke command)', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // example 1 (regular assertion with 'should')
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.get('[for="exampleInputEmail1"]')
        //     .should('contain', 'Email address')

        //     // .should('have.class', 'label')                  // example for assertions 1 for #20
        //     // .should('have.text', 'Email address')           // example for assertions 2 for #20

        // example 2 ---> using then() (jquery method !!!)
        cy.get('[for="exampleInputEmail1"]').then(label => {   // label will represent object value
            const labelText = label.text()                      // assign jQuery method to the constant
            expect(labelText).to.equal('Email address')         // assertion expect in jQuery type syntax
            cy.wrap(labelText).should('contain', 'Email address') //--->or use 'cy.wrap' regular assertion

            //     // expect(labeText).to.have.class('label')            // example for assertions 3 for #20
            //     // expect(labelText).to.have.text('Email address')     // example for assertions 4 for #20
        })

        // example 3 ---> cypress method (invoke !!!)
        cy.get('[for="exampleInputEmail1"]').invoke('text').then(text => { //text object will represent text value
            expect(text).to.equal('Email address')
        })
        cy.get('[for="exampleInputEmail1"]').invoke('text').should('contain', 'Email address')
        cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')// using alias

        // example 4 (invoke with attributes with name (class or any))
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue => {
            expect(classValue).to.equal('label')
        })

        // example 5 invoke property with hidden properties (like value) 
        cy.get('#exampleInputEmail1').type('test@test.com')
        cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com') //invoke property & value
        cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'test@test.com') //invoke property & value
            .then(property => {
                expect(property).to.equal('test@test.com') // assertion with property
            })
    })

    it('checkboxes & radio buttons (assert property)', () => { //only for type radio or checkbox (check & uncheck methods) 
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(radioButtons => {
            cy.wrap(radioButtons).eq(0).check({ force: true })
                .should('be.checked')                   //for radio button visually hidden use 'force: true'
            cy.wrap(radioButtons).eq(1).check({ force: true }) //if we select 1st button
            cy.wrap(radioButtons).eq(0).should('not.be.checked') // then 2nd button should be uncheck
            cy.wrap(radioButtons).eq(2).should('be.disabled')
        })
    })

    it('check boxes', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()
        // cy.get('[type="checkbox"]').check({ force: true }) // will not work 
        // cy.get('[type="checkbox"]').uncheck({ force: true }) // will not work too

        cy.get('[type="checkbox"]').eq(0).click({ force: true }) // uncheck
        cy.get('[type="checkbox"]').eq(1).check({ force: true }) // check
        cy.get('[type="checkbox"]').eq(2).uncheck({ force: true }) // uncheck another one
    })

    it('web date pickers ( with hardcoded days, assert property)', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            cy.get('.day-cell').not('.bounding-month').contains('14').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'May 14, 2025') // assertion v.1
            cy.wrap(input).should('have.value', 'May 14, 2025')                     // assertion v.2 variation
        })
    })

    it('web datepicker (pick random days))', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        function selectDayFromCurrent(day) {
            let date = new Date()
            date.setDate((date.getDate() + day)) //--> this is hardcoded day
            // console.log(date)                  //--> to find date in DevTools
            // date.setDate((date.getDate() + day))
            let futureDay = date.getDate()                          // change date to the day
            let futureMonth = date.toLocaleDateString('en-US', { month: 'short' })
            let futureYear = date.getFullYear()
            // let dateToAssert = `Feb ${futureDay}, 2025`                 // change date to the day
            let dateToAssert = `${futureMonth} ${futureDay}, ${futureYear}` // re-write to be dynamic

            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then(dateAttribute => {
                if (!dateAttribute.includes(futureMonth) || !dateAttribute.includes(futureYear)) {
                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(day)
                }
                else {
                    cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()
                }
            })
            return dateToAssert
        }

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input => {
            cy.wrap(input).click()
            // cy.get('.day-cell').not('.bounding-month').contains(futureDay).click()   //--> this was hardcoded day
            const dateToAssert = selectDayFromCurrent(65)                         //--> calling function above to choose thy we want
            cy.wrap(input).invoke('prop', 'value').should('contain', dateToAssert)    // assertion v.1
            cy.wrap(input).should('have.value', dateToAssert)                     // assertion v.2 variation
        })
    })

    it('list & dropdowns', () => {
        cy.visit('/')

        // example 1
        cy.get('nav nb-select').click()
        cy.get('.options-list').contains('Dark').click()        // '.options-list' class name
        cy.get('nav nb-select').should('contain', 'Dark')       // assertion
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        // example 2
        cy.get('nav nb-select').then(dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each((listItem, index) => { // looping through 4 elements w/index
                const itemText = listItem.text().trim()
                // const colors = {   
                //     "Light": "rgb(255, 255, 255)",
                //     "Dark": "rgb(34, 43, 69)",
                //     "Cosmic": "rgb(50, 50, 89)",
                //     "Corporate": "rgb(255, 255, 255)"
                // }
                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                // cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                if (index < 3) {
                    cy.wrap(dropdown).click()       // open dropdown list
                }
            })
        })
    })

    it('web tables', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        // example 1 (get the row by text )
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('35')
            cy.wrap(tableRow).find('.nb-checkmark').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '35')
        })

        // example 2 (get row by index)
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then(tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('John')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Smith')
            cy.wrap(tableRow).find('.nb-checkmark').click()
        })

        cy.get('tbody tr').first().find('td').then(tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'John')
            cy.wrap(tableColumns).eq(3).should('contain', 'Smith')
        })

        // example 3 (get each row validation)
        const age = [20, 40, 30, 60, 45, 65, 200]
        cy.wrap(age).each(age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(300)                            //-->cypress too fast, need to wait (up to 0.5 sec)
            cy.get('tbody tr').each(tableRow => {
                if (age == 200 || age == 60 || age == 65) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })
    })

    it('popUps & toolTips', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        // example 1: Overlay Message
        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })

    it('dialog box', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        // // example 1 --> not preferable code cause code will never be executed !!!
        // cy.get('tbody tr').first().find('.nb-trash').click()
        // cy.on('window:confirm', (confirm) => {
        //     expect(confirm).to.equal('Are you sure you want to delete?')
        // })

        // example 2 --> it is much better approach to click to confirm message
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })

        // example 3 --> if we want to cancel in dialog box use that way
        cy.get('tbody tr').first().find('.nb-trash').click()
        cy.on('window:confirm', () => false)
    })
})  