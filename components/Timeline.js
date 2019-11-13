import styled from "@emotion/styled"

const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 0 0 10rem;
  font-size: 0.75em;
  font-variant-numeric: tabular-nums;
  justify-content: stretch;
  list-style-type: none;
  padding: 1rem;
`

const ListItem = styled.li`
  align-items: center;
  display: flex;
  flex: 1;
`

const ClockListItem = styled.li`
  align-items: flex-start;
  background-color: var(--background);
  border-top: 1px solid;
  box-shadow: 0.25em 2px 4px var(--background);
  color: ${props => (props.busy ? "var(--danger)" : "var(--foreground)")};
  display: flex;
  margin: -0.5em;
  margin-left: -1.25em;
  width: 90%;
  padding: 0.5em;
  padding-left: 1.25em;
  position: absolute;
  top: ${props => props.progress}%;
  transform: translateY(50%);
  transition: 0.3s ease;
  z-index: 1;

  p + p {
    margin-left: 0.75em;
  }

  ::after {
    content: "•";
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.25rem;
    margin-top: -0.725em;
    margin-right: -0.25em;
  }
`

function Clock(props) {
  const timer = useNewTimer(new Date())
  const interval = 1000 * 60 * 60 * 24
  const startOfDay = Math.floor(Date.now() / interval) * interval
  const elapsed = Math.abs(timer - startOfDay) / interval
  const hours = timer.getHours()
  let isBusy = false

  if ((hours >= 8 && hours < 11) || (hours >= 4 && hours < 7)) {
    isBusy = true
  }

  return (
    <ClockListItem busy={isBusy} progress={elapsed * 100}>
      <p>{timer.toLocaleTimeString(undefined, { timeStyle: "short" })}</p>
      <p>{isBusy ? "Usually very busy" : "Usually not very busy"}</p>
    </ClockListItem>
  )
}

function useNewTimer(currentDate) {
  const [date, setDate] = React.useState(currentDate)

  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 1000)
    return function cleanup() {
      clearInterval(timerID)
    }
  })

  function tick() {
    setDate(new Date())
  }

  return date
}

export default function Timeline() {
  const timestamps = Array(24)
    .fill(undefined)
    .map((_, i) => `${i}`.padStart(2, "0"))

  const currentTime = Date.now

  return (
    <List>
      <Clock />
      {timestamps.map(timestamp => (
        <ListItem>{timestamp}:00</ListItem>
      ))}
    </List>
  )
}
