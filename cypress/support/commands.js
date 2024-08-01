
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('input[name="firstName"]').type('Laura')
    cy.get('input[name="lastName"]').type('Rosa')
    cy.get('#email').type('laurabeatriz.or@gmail.com')
    cy.get('textarea[name="open-text-area"]').type('teste')
    cy.contains('button','Enviar').click()
})