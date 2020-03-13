import styled from '@emotion/styled'
import { NextApiRequest } from 'next'
import dynamic from 'next/dynamic'
import React, { ReactElement } from 'react'
import useSWR from 'swr'
import TFLLineStatusList from '../components/TFLLineStatusList'
import Timeline from '../components/Timeline'
import { BREAKPOINT } from '../utils/constants'
import fetcher from '../utils/fetcher'
import { TfLAPIResponse } from './api/data'

const NetworkIndicator = dynamic(
  () => import('../components/NetworkIndicator'),
  { ssr: false }
)

const AppContainer = styled.main`
  display: flex;
  flex: 1;

  @media (max-width: ${BREAKPOINT}) {
    flex-direction: column;
  }
`

const Index = ({ initialData }): ReactElement | string => {
  const { data } = useSWR('/api/data', fetcher, {
    refreshInterval: 3000,
    initialData,
  })

  return data ? (
    <>
      <NetworkIndicator />
      <AppContainer>
        <TFLLineStatusList lineStatuses={data} />
        <Timeline />
      </AppContainer>
    </>
  ) : (
    'Loading'
  )
}

export async function getServerSideProps(ctx: {
  process: { browser: boolean }
  req: NextApiRequest
}): Promise<{ props: { initialData: [TfLAPIResponse] } }> {
  const { process, req } = ctx
  const origin =
    process && process.browser
      ? window.location.origin
      : `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`
  const data = await fetcher(`${origin}/api/data`)
  return { props: { initialData: data } }
}

export default Index
