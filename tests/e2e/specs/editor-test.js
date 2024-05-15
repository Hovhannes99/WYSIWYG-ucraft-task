// https://docs.cypress.io/api/table-of-contents

describe('Main page', () => {
  it('Visits main page',  () => {
    cy.visit('/')
    cy.contains('h1', 'Enter your opinion :)');
  })
  it('type to Bold',  () => {
    cy.get('#intro-text').type('{selectall}')
    cy.get('button[name="bold-btn"]').click()
    cy.get('#intro-text').type(' it is a bold')
  })
  it('type to Italic',  () => {
    cy.get('#intro-text ').type('{selectall}');
    cy.get('button[name="bold-btn"]').click()
    cy.get('button[name="italic-btn"]').click()
    cy.get('#intro-text ').type('it is a italic')
  })
  it('type to Underline',  () => {
    cy.get('#intro-text ').type('{selectall}');
    cy.get('button[name="italic-btn"]').click()
    cy.get('button[name="underline-btn"]').click()
    cy.get('#intro-text ').type('it is a underline')
  })
  it('type to Strikethrough',  () => {
    cy.get('#intro-text ').type('{selectall}');
    cy.get('button[name="underline-btn"]').click()
    cy.get('button[name="strike-btn"]').click()
    cy.get('#intro-text ').type('it is a strikethrough')
  })
  it('change font size',  () => {
    cy.get('button[name="strike-btn"]').click()
    cy.get('button[name="size-btn"]').click()
    cy.get('#intro-text ').type('{selectall}');
    cy.get('button[name="size-btn-H1"]').click()
    cy.get('button[name="size-btn"]').click()
    cy.get('button[name="size-btn-H2"]').click()
    cy.get('button[name="size-btn"]').click()
    cy.get('button[name="size-btn-H3"]').click()
    cy.get('button[name="size-btn"]').click()
    cy.get('button[name="size-btn-H4"]').click()
    cy.get('button[name="size-btn"]').click()
    cy.get('button[name="size-btn-H5"]').click()
    cy.get('button[name="size-btn"]').click()
    cy.get('button[name="size-btn-H6"]').click()
  })
  it('upload image',  () => {
    cy.get('button[name="open-upload-btn"]').click()
    cy.get('#image-uploader').click();
  })
})
