/// <reference types="cypress" />
// @ts-check
describe('Data API Endpoint', () => {
  it('returns statuses for each of the 14 supported TfL modes', () => {
    cy.log(`Fetching API data`)
    cy.request('api/data').then(response => {
      expect(response.body).to.have.length(14)
    })
  })

  it('has a status for the bakerloo line', () => {
    cy.log(`Fetching API data`)
    cy.request('api/data').then(response => {
      expect(response.body)
        .to.have.property('0')
        .to.have.property('lineStatuses')
        .to.have.length.gte(1)
    })
  })
})
