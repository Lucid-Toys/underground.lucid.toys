import styled from "@emotion/styled"

const StyledStatus = styled.div`
  font-variant-caps: all-small-caps;
  font-size: 0.875em;
  font-weight: 700;
  opacity: 0.75;
`

export default function Status({ children, severity }) {
  return <StyledStatus severity={severity}>{children}</StyledStatus>
}
