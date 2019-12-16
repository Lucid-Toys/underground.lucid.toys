import styled from '@emotion/styled'
import dynamic from 'next/dynamic'
import React from 'react'
import useSWR from 'swr'
import TFLLineStatusList from '../components/TFLLineStatusList'
import Timeline from '../components/Timeline'
import fetcher from '../utils/fetcher'

const NetworkIndicator = dynamic(
  () => import('../components/NetworkIndicator'),
  { ssr: false }
)

const AppContainer = styled.main`
  display: flex;
  flex: 1;
`

const Index = ({ initialData }) => {
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

Index.getInitialProps = async ctx => {
  const { process, req } = ctx
  const origin =
    process && process.browser
      ? window.location.origin
      : `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`
  const data = await fetcher(`${origin}/api/data`)
  return { initialData: data }
}

export default Index
