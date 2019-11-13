import { css } from "@emotion/core"
import styled from "@emotion/styled"

const stylePartial = props =>
  props.severity < 10
    ? css`
        padding-left: 1em;
        background-image: url("/images/warning.svg");
        background-repeat: no-repeat;
        background-position: 0 65%;
      `
    : null

const StyledStatus = styled.div`
  font-size: 0.75em;
  font-weight: 600;
  opacity: 0.75;
  margin: 0.25em 0;
  ${stylePartial};
`

export default function Status({ children, severity }) {
  return <StyledStatus severity={severity}>{children}</StyledStatus>
}
