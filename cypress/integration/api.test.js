/// <reference types="cypress" />
// @ts-check
describe('Data API Endpoint', () => {
  it('returns statuses for each of the 14 supported TfL modes', () => {
    cy.log(`Fetching API data`)
    cy.request('api/data').then(response => {
      expect(response.body).to.have.length(14)
    })
  })

  it('has the required properties for the iOS and web apps', () => {
    const properties = ['lineStatuses', 'name', 'id']
    cy.log(`Fetching API data`)
    cy.request('api/data').then(response => {
      expect(response.body)
        .to.have.property('0')
        .to.include.keys(...properties)
    })
  })

  it('has a status for the first returned line with the expected status keys', () => {
    const statusProperties = [
      'id',
      'statusSeverity',
      'statusSeverityDescription',
      'created',
    ]
    cy.log(`Fetching API data`)
    cy.request('api/data').then(response => {
      expect(response.body)
        .to.have.property('0')
        .to.have.property('lineStatuses')
        .to.have.length.gte(1)

      expect(response.body)
        .to.have.property('0')
        .to.have.property('lineStatuses')
        .to.have.property('0')
        .to.include.keys(...statusProperties)
    })
  })
})
