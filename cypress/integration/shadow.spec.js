
describe("shadow dom", () => {

  it.only("access shadow dom", () => {
    cy.visit("https://www.htmlelements.com/demos/dropdownlist/shadow-dom/index.htm")

    cy.wait(3000);
    cy.get('[class="outlined smart-ui-component"]')
      .shadow()
      .find('[smart-id="actionButton"]')
      .click()
      .should('contain', 'Mobile')
    cy.percySnapshot('FormLayouts1');
    cy.percySnapshot('FormLayouts2', { widths: [768, 992, 1200] });

    // cy.contains('contain', 'Mobile').then(shadowRoot => {
    //   cy.percySnapshot('FormLayouts');
    //   cy.percySnapshot('FormLayouts', { widths: [768, 992, 1200] });
    // })

    // cy.visit("https://6vcl2f.csb.app")
    // cy.wait(500)
    // cy.get('#shadow-root')
    // .shadow()
    // .find('[data-testid="ArrowDropDownIcon"]')
    // // cy.get('#shadow-root').shadow().find('#root')

    // cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm")
    // // //cy.visit('https://radogado.github.io/shadow-dom-demo/')

    // cy.get('[class="smart-ui-component"]')
    //   .shadow()
    //   .find('[smart-id="container"]')
    //   .find('[smart-id="mainContainer"]')
    //   .find('[class="smart-element smart-menu-items-group smart-unselectable"]')
    // //   .find('.smart-menu-items-group[level="1"]')
    //   .find('[class="smart-menu-item-label-container"]')
    //   .find('[class="smart-menu-item-label-element"]')
    //   .contains('span', 'File') 
    //   .click({ force: true})
    //   .should('contain', 'File')
    //   // .find('.smart-menu-drop-down[level="2"]')
  });
});
