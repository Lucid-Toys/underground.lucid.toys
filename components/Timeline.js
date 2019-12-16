import { keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import useTime from '../hooks/useTime'
import { BREAKPOINT } from '../utils/constants'
import congestionChart from './images/congestion-chart.svg'

const List = styled.ul`
  background-image: url(${congestionChart});
  background-position: right 0 center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  flex: 0 1 15rem;
  font-variant-numeric: tabular-nums;
  justify-content: space-between;
  list-style-type: none;
  min-height: 100%;
  order: 1;
  overflow: hidden;
  padding: 1rem;

  @media (max-width: ${BREAKPOINT}) {
    background-image: unset;
    flex: 1 0 100%;
    order: 0;
    padding: 0;
  }
`

const ListItem = styled.li`
  display: flex;
  flex: 1 1 1;

  ::before {
    content: '';
    position: absolute;
    left: -1rem;
    width: 0.5em;
    top: 50%;
    border-top: 1px solid;
    opacity: 0.5;
  }

  @media (max-width: ${BREAKPOINT}) {
    display: none;
  }
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
  background-color: rgba(26, 26, 26, 0.85);
  border-top: 2px solid;
  color: ${props =>
    props.congestion === 2
      ? 'var(--danger)'
      : props.congestion === 1
      ? 'var(--warning)'
      : 'var(--foreground)'};
  display: flex;
  flex-flow: row wrap;
  margin-left: -1em;
  padding: 0.5em;
  padding-left: 1em;
  position: absolute;
  top: ${props => props.progress}%;
  transition: 0.3s ease;
  transform: translate3d(0, calc(50% - 2px), 0);
  width: 100%;
  z-index: 1;

  time {
    margin-right: 0.75em;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    background-color: currentColor;
    border-radius: 100%;
    margin-top: -5px;
  }

  @media (max-width: ${BREAKPOINT}) {
    margin: unset;
    position: relative;
    top: unset;
    transform: unset;

    ::after {
      display: none;
    }
  }
`

const SecondsSep = styled.span`
  animation: ${secondsPulse} 0.5s ease infinite alternate;
`

const getCongestion = hours => {
  if ((hours >= 7 && hours < 10) || (hours >= 17 && hours <= 18)) {
    return {
      congestion: 2,
      message: 'Usually very busy',
    }
  }

  if (hours === 6 || hours === 10 || hours === 16 || hours === 19) {
    return {
      congestion: 1,
      message: 'Usually quite busy',
    }
  }

  return {
    congestion: 0,
    message: 'Usually not busy',
  }
}

function Clock(props) {
  const timer = useTime(1000)
  const interval = 1000 * 60 * 60 * 24
  const startOfDay = Math.floor(timer / interval) * interval
  const elapsed = Math.abs(timer - startOfDay) / interval
  const hours = timer.getHours()
  const minutes = timer.getMinutes()

  const congestion = getCongestion(hours)

  return (
    <ClockListItem congestion={congestion.congestion} progress={elapsed * 100}>
      <time>
        <strong>
          {String(hours).padStart(2, '0')}
          <SecondsSep>:</SecondsSep>
          {String(minutes).padStart(2, '0')}
        </strong>
      </time>
      <p>{congestion.message}</p>
    </ClockListItem>
  )
}

export default function Timeline() {
  const timestamps = Array(24)
    .fill(undefined)
    .map((_, i) => `${i}`.padStart(2, '0'))

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
