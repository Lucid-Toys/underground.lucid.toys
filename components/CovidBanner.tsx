import styled from '@emotion/styled'

const Container = styled.header`
  color: var(--warning);
  padding: 1.5em;
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

export default function CovidBanner() {
  return (
    <Container>
      <h2>Wear a face covering</h2>
      <p>
        Transport for London now requires that riders wear a face covering for
        their entire journey. Please refer to{' '}
        <a href="https://tfl.gov.uk/campaign/face-coverings">TfL’s guidance</a>{' '}
        for further information. Wear a mask, protect others, and stay safe.
      </p>
    </Container>
  )
}
