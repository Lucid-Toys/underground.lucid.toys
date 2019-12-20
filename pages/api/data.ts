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
      /**
       * Sometimes, the TfL API will return identical severity reports in a
       * line. We want to remove any extraneous messages.
       */

      const sanitisedData = data.map(datum => {
        const sanitisedLineStatuses = datum.lineStatuses.filter(
          (lineStatus, index, self) =>
            index === self.findIndex(t => t.reason === lineStatus.reason)
        )
        return {
          ...datum,
          lineStatuses: sanitisedLineStatuses,
        }
      })

      return sanitisedData
    })
    .then((data: TfLAPIResponse[]) => {
      /**
       * Line severity status descriptions often begin with the name of the
       * line. This is somewhat redundant given that in our context, the
       * name of the line will always be visible; so we'll remove it from the
       * beginning so that important information about the line's status is
       * more visible on e.g. watch faces
       */
      const transformedData = data.map(datum => {
        const transformedLineStatuses = datum.lineStatuses.map(lineStatus => {
          const lineName = datum.name.replace('&', 'and')
          const matchingRegex = new RegExp(`${lineName}( Line)?\: ?`)
          const transformedReason = lineStatus.reason?.replace(
            matchingRegex,
            ''
          )
          /**
           * Return the new reason for each line status
           */
          return {
            ...lineStatus,
            reason: transformedReason,
          }
        })

        /**
         * Return the new array of line statuses
         */
        return {
          ...datum,
          lineStatuses: transformedLineStatuses,
        }
      })

      /**
       * And finally return the transformed set of TfLAPIResponses
       */
      return transformedData
    })
    .then((data: TfLAPIResponse[]) => {
      /**
       * We want to sort the lines in two ways:
       * 1. By status severity
       * 2. Alphabetically
       */
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
