import styled from '@emotion/styled'
import { ReactComponentElement } from 'react'
import { TfLAPIResponse } from '../utils/tflFetcher'
import TFLLine from './TFLLine'

interface Props {
  lineStatuses: [TfLAPIResponse]
}

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

const TFLLineStatusList = ({
  lineStatuses,
}: Props): ReactComponentElement<typeof List> => {
  return (
    <List>
      {lineStatuses.map((line) => (
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
