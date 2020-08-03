import styled from '@emotion/styled'
import lineColors from '../utils/lineColors'
import Status from './Status'

interface ListItemProps {
  severity: number
  lineColor: string
}

const ListItem = styled.li<ListItemProps>(
  (props) => `
  align-items: ${props.severity < 10 ? 'start' : 'center'};
  background-color: ${props.lineColor};
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  border-top: 0.25em solid ${props.lineColor};
  color: var(--light);
  padding: 0.75em;
  padding-left: 5vw;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  flex: 1 1 auto;
  line-height: 1;

  p {
    max-width: 40em;
    line-height: 1.5;
  }
`
)

const Box = styled.div(
  ({ width = 1 }: { width?: number }) => `
  display: flex;
  flex-direction: column;
  grid-column: span ${width};
`
)

const LineName = styled.h2(
  (props: { severity: number }) => `
  font-weight: 400;
  font-size: ${props.severity < 10 ? 1.25 : 1}rem;
`
)

export default function TFLLine({ status, lineID, lineName }) {
  const { statusSeverity, statusSeverityDescription, reason } = status[0]

  return (
    <ListItem lineColor={lineColors[lineID]} severity={statusSeverity}>
      <Box>
        <LineName severity={statusSeverity}>
          {lineName}
          <Status severity={statusSeverity}>{statusSeverityDescription}</Status>
        </LineName>
      </Box>
      {statusSeverity < 10 ? (
        <Box width={2}>
          <p>{reason}</p>
        </Box>
      ) : null}
    </ListItem>
  )
}
