import fetch from 'isomorphic-unfetch'
import { NextApiRequest, NextApiResponse } from 'next'
import { API_URL } from '../../utils/constants'

interface TfLDisruption {
  category: string
  type: string
  categoryDescription: string
  summary: string
  additionalInfo: string
  created: string
  lastUpdate: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

interface TfLLineStatus {
  $type: 'Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities'
  id: number
  lineId: string
  statusSeverity: number
  statusSeverityDescription: string
  reason: string
  created: string
  disruption: TfLDisruption
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

export interface TfLAPIResponse {
  $type: 'Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities'
  id: string
  name: string
  modeName: 'tube' | 'dlr' | 'overground' | 'tflrail'
  disruptions: TfLDisruption[]
  created: string
  modified: string
  lineStatuses: TfLLineStatus[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any
}

export default (request: NextApiRequest, result: NextApiResponse): void => {
  fetch(API_URL)
    .then(response => response.json())
    .then((data: TfLAPIResponse[]) => {
      const sortedData = data
        .slice()
        .sort((a: TfLAPIResponse, b: TfLAPIResponse) => {
          return (
            a.lineStatuses[0].statusSeverity -
              b.lineStatuses[0].statusSeverity || a.name.localeCompare(b.name)
          )
        })
      result.json(sortedData)
    })
    .catch(error => console.error(error))
}
