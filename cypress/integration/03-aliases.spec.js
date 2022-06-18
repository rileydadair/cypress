/// <reference types="cypress" />

describe('Aliases', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');

    cy.get('[data-test="filter-items"]').as('filterInput');
    cy.get('[data-test="items"]').as('allItems');
    cy.get('[data-test="items-unpacked"]').as('unpackedItems');
    cy.get('[data-test="items-packed"]').as('packedItems');
  });

  it('should filter the items shown on the page', () => {
    cy.get('@filterInput').type('iPhone');

    cy.get('@allItems').should('contain.text', 'iPhone');
    cy.get('@allItems').should('not.contain.text', 'Hoodie');
  });

  it.only('should move items from one list to the other', () => {
    // cy.get('@unpackedItems').find('label').first().as('firstItem');
    // cy.get('@firstItem').invoke('text').as('itemText');
    // cy.get('@firstItem').click();
    // cy.get('@itemText').then((text) => {
    //   cy.get('@packedItems').contains(text);
    // });

    // OR
    cy.get('@unpackedItems').find('label').first().as('firstItem');
    cy.get('@firstItem')
      .invoke('text')
      .then((text) => {
        cy.get('@firstItem').click();
        cy.get('@packedItems').contains(text);
      });
  });
});
