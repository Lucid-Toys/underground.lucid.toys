import styled from "@emotion/styled"
import lineColors from "../utils/lineColors"
import Status from "./Status"

const ListItem = styled.li`
  align-items: ${props => (props.severity < 10 ? "start" : "center")};
  background-color: ${props => props.lineColor};
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  border-top: 0.25em solid ${props => props.lineColor};
  color: var(--light);
  padding: 0.75em 5%;
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  line-height: 1;

  p {
    max-width: 40em;
    line-height: 1.5;
  }
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 20em;
`

const LineName = styled.h2`
  font-weight: 400;
  font-size: ${props => (props.severity < 10 ? 1.25 : 1)}rem;
`

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
        <Box>
          <p>{reason}</p>
        </Box>
      ) : null}
    </ListItem>
  )
}
