import { css, SerializedStyles } from '@emotion/core'
import styled from '@emotion/styled'
import warningIcon from './images/warning.svg'

const stylePartial = (props): SerializedStyles =>
  props.severity < 10
    ? css`
        padding-left: 1em;
        background-image: url(${warningIcon});
        background-repeat: no-repeat;
        background-position: 0 65%;
      `
    : css`
        display: inline-block;
        margin-left: 1em;
      `

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
