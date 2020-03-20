import styled from '@emotion/styled'
import { ReactComponentElement } from 'react'

const Container = styled.header`
  border-bottom: 4px solid;
  color: var(--danger);
  padding: 1em;
  padding-left: 5vw;
  padding-right: 32px;
  font-weight: 500;

  a {
    color: inherit;
  }

  img {
    margin-right: 0.25em;
    display: inline-block;
    vertical-align: middle;
    margin-top: -0.35em;
  }
`

export default function(): ReactComponentElement<typeof Container> {
  return (
    <Container>
      <h1>Please Do Not Travel</h1>
      <p>
        Transport for London has advised against any travel that isn't
        absolutely necessary during the COVID-19 pandemic. Please refer to{' '}
        <a href="https://tfl.gov.uk/campaign/coronavirus-covid-?intcmp=62419">
          TfL’s guidance
        </a>{' '}
        for further information. Stay home, and stay safe.
      </p>
    </Container>
  )
}
