import styled from "@emotion/styled"
import lineColors from "../utils/lineColors"

const ListItem = styled.li`
  background-color: ${props => props.color};
  font-size: ${props => (props.severity < 10 ? "1.5rem" : "1rem")};
  color: white;
  padding: 1em 5%;
  display: flex;
  flex-direction: column;
  justify-content: ${props => (props.severity < 10 ? "start" : "center")};
  flex: ${props => (props.severity < 10 ? 3 : 1)};
  line-height: 1;

  small {
    opacity: 0.8;
    font-variant-caps: all-small-caps;
    font-weight: 600;
  }
`
export default function TFLLine({ status, lineID, lineName }) {
  const severity = status[0].statusSeverity

  return (
    <ListItem color={lineColors[lineID]} severity={severity}>
      <p>{lineName}</p>
      <p>
        <small>{status[0].statusSeverityDescription}</small>
      </p>
    </ListItem>
  )
}
