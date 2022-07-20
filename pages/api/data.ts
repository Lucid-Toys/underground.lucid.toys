import { NextApiRequest, NextApiResponse } from 'next'
import tflFetcher from '../../utils/tflFetcher'

export default async (_request: NextApiRequest, result: NextApiResponse) => {
  result.json(await tflFetcher())
}
