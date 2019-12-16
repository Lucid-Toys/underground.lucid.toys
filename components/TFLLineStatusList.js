import styled from '@emotion/styled'
import TFLLine from './TFLLine'

const List = styled.ul`
  flex: 1 1 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: auto;
  justify-content: stretch;
  z-index: 2;
  order: 1;
`

const TFLLineStatusList = ({ lineStatuses }) => {
  return (
    <List>
      {lineStatuses.map(line => (
        <TFLLine
          key={line.id}
          lineID={line.id}
          lineName={line.name}
          status={line.lineStatuses}
        />
      ))}
    </List>
  )
}

export default TFLLineStatusList
