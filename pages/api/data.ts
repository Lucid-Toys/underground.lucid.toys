import { NextApiRequest, NextApiResponse } from 'next'
import tflFetcher from '../../utils/tflFetcher'

export default async (request: NextApiRequest, result: NextApiResponse) => {
  result.json(await tflFetcher())
}
