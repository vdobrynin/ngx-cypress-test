/// <reference types="cypress" />

describe('JSON objects', () => {
  it('JSON objects', () => {
    cy.openHomePage()
    const simpleObject = { "key": "value", "key2": "value2" }
    const simpleArrayOfValues = ["one", "two", "three"]
    const arrayOfObjects = [{ "key": "value" }, { "key2": "value2" }, { "key3": "value3" }]
    const typesOfData = { "string": "this is a string", "number": 10 }
    const mix = {
      "FirstName": "Joe",
      "LastName": "Doe",
      "Age": 25,
      "Students": [
        {
          "firstName": "Sara",
          "lastName": "Connor"
        },
        {
          "firstName": "Bruce",
          "lastName": "Willis"
        }
      ]
    }

    console.log(simpleObject.key2)
    console.log(simpleObject["key"])
    console.log(simpleArrayOfValues[2])
    console.log(arrayOfObjects[2].key3)
    console.log(mix.Students[1].lastName)
    const lastNameOfSecondStudent = mix.Students[1].firstName
  })
})
