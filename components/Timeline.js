import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const List = styled.ul`
  background-image: url("/images/congestion-chart.svg");
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  flex: 0 1 15rem;
  font-variant-numeric: tabular-nums;
  height: 100vh;
  justify-content: space-between;
  list-style-type: none;
  overflow: hidden;
  padding: 1rem;
`

const ListItem = styled.li`
  display: flex;
  flex: 1 1 1;
`

const secondsPulse = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const ClockListItem = styled.li`
  align-items: flex-start;
  background-color: rgba(26, 26, 26, 0.5);
  backdrop-filter: blur(15px);
  border-top: 1px solid;
  color: ${props =>
    props.congestion === 2
      ? "var(--danger)"
      : props.congestion === 1
      ? "var(--warning)"
      : "var(--foreground)"};
  display: flex;
  margin-left: -1.25em;
  padding: 0.5em;
  padding-left: 1.25em;
  position: absolute;
  top: ${props => props.progress}%;
  transition: 0.3s ease;
  width: 100%;
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

const SecondsSep = styled.span`
  animation: ${secondsPulse} 0.5s ease infinite alternate;
`

const getCongestion = hours => {
  if ((hours >= 8 && hours < 9) || (hours >= 17 && hours <= 18)) {
    return {
      congestion: 2,
      message: "Usually very busy",
    }
  }

  if (hours === 9 || hours === 19 || hours === 7 || hours === 16) {
    return {
      congestion: 1,
      message: "Usually quite busy",
    }
  }

  return {
    congestion: 0,
    message: "Usually not busy",
  }
}

function Clock(props) {
  const timer = useNewTimer(new Date())
  const interval = 1000 * 60 * 60 * 24
  const startOfDay = Math.floor(Date.now() / interval) * interval
  const elapsed = Math.abs(timer - startOfDay) / interval
  const hours = timer.getHours()
  const minutes = timer.getMinutes()

  const congestion = getCongestion(hours)

  return (
    <ClockListItem congestion={congestion.congestion} progress={elapsed * 100}>
      <p>
        <strong>
          {String(hours).padStart(2, "0")}
          <SecondsSep>:</SecondsSep>
          {String(minutes).padStart(2, "0")}
        </strong>
      </p>
      <p>{congestion.message}</p>
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
        <ListItem key={timestamp}>
          {timestamp}
          :00
        </ListItem>
      ))}
    </List>
  )
}
