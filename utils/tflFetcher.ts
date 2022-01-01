import fetch from 'isomorphic-unfetch'
import { API_URL } from './constants'

interface UnusedKeys {
  $type?: string
  crowding?: {
    $type?: string
  }
  serviceTypes?: {
    [x: string]: unknown
  }
}

interface TfLDisruption extends UnusedKeys {
  category: string
  type: string
  categoryDescription: string
  summary: string
  additionalInfo: string
  created: string
  lastUpdate: string
}

interface TfLLineStatus extends UnusedKeys {
  id: number
  lineId: string
  statusSeverity: number
  statusSeverityDescription: string
  reason: string
  created: string
  disruption: TfLDisruption
}

export interface TfLAPIResponse extends UnusedKeys {
  id: string
  name: string
  modeName: 'tube' | 'dlr' | 'overground' | 'tflrail'
  disruptions: TfLDisruption[]
  created: string
  modified: string
  lineStatuses: TfLLineStatus[]
}

export default async function tflFetcher() {
  try {
    const response = await fetch(API_URL)
    const data = await response.json()
    /**
     * Sometimes, the TfL API will return identical severity reports in a
     * line. We want to remove any extraneous messages.
     */
    const sanitisedData = data.map((datum) => {
      const sanitisedLineStatuses = datum.lineStatuses
        .filter(
          (lineStatus, index, self) =>
            index === self.findIndex((t) => t.reason === lineStatus.reason)
        )
        /**
         * Statuses also often end up with the same ID, so we’ll replace them
         * here.
         */
        .map((status, index) => {
          return { ...status, id: index }
        })

      return {
        ...datum,
        lineStatuses: sanitisedLineStatuses,
      }
    })
    const data_1 = sanitisedData
    /**
     * Line severity status descriptions often begin with the name of the
     * line. This is somewhat redundant given that in our context, the
     * name of the line will always be visible; so we'll remove it from the
     * beginning so that important information about the line's status is
     * more visible on e.g. watch faces
     */
    const transformedData = data_1.map((datum_1) => {
      const transformedLineStatuses = datum_1.lineStatuses.map(
        (lineStatus_1) => {
          const lineName = datum_1.name.replace('&', 'and')
          const matchingRegex = new RegExp(`${lineName}( Line)?\: ?`)
          const transformedReason =
            lineStatus_1.reason?.replace(matchingRegex, '') ?? null
          const status = {
            ...lineStatus_1,
            reason: transformedReason,
          }

          /**
           * There are some verbose keys on the returned data; let's delete the
           * unused parts.
           */
          delete status.$type

          /**
           * Return the new reason for each line status
           */
          return status
        }
      )

      /**
       * Return the new array of line statuses
       */
      const line = {
        ...datum_1,
        lineStatuses: transformedLineStatuses,
      }

      /**
       * Similar to above, let's delete unused keys.
       */
      delete line.$type
      delete line.serviceTypes
      delete line.crowding.$type

      return line
    })
    const data_2 = transformedData
    /**
     * We want to sort the lines in two ways:
     * 1. By status severity
     * 2. Alphabetically
     */
    const sortedData = data_2
      .slice()
      .sort((a: TfLAPIResponse, b: TfLAPIResponse) => {
        return (
          a.lineStatuses[0].statusSeverity - b.lineStatuses[0].statusSeverity ||
          a.name.localeCompare(b.name)
        )
      })
    return sortedData
  } catch (error) {
    console.error(error)
  }
}
