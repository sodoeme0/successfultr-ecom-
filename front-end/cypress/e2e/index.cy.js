describe('template spec', () => {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('should have 4 images in categoris', () => {
    cy.get('.categories .row').children().should('have.length', 4)
    
  })

  it('should Say New Arrivals', () => {
    cy.get('main > .headings-Home').should('exist');
    cy.get('main > .headings-Home').contains('New Arrivals');

  })

  it('footer should have 3 text columns', () => {
    cy.get('footer').find('div.footer-column').should('have.length', 3);
  })


  it('should Say Shop By Brands', () => {
    cy.get('.section-title').contains('Shop by Brands');

  })




})