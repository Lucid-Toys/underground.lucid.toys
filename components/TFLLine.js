import styled from "@emotion/styled"
import lineColors from "../utils/lineColors"
import Status from "./Status"

const ListItem = styled.li`
  background-color: ${props => props.lineColor};
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  border-top: 0.25em solid ${props => props.lineColor};
  color: var(--light);
  padding: 1em 5%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.severity < 10 ? "start" : "center")};
  flex: 1;
  line-height: 1;

  p {
    margin-top: 1.5em;
    max-width: 50em;
    line-height: 1.5;
  }
`

const LineName = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
`

export default function TFLLine({ status, lineID, lineName }) {
  const severity = status[0].statusSeverity

  return (
    <ListItem lineColor={lineColors[lineID]} severity={severity}>
      <LineName>
        {lineName}
        <Status severity={status[0].statusSeverity}>
          {status[0].statusSeverityDescription}
        </Status>
      </LineName>
      {severity < 10 ? <p>{status[0].reason}</p> : null}
    </ListItem>
  )
}
