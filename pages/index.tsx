import styled from '@emotion/styled'
import React, { ReactElement, useEffect, useState } from 'react'
import useSWR from 'swr'
import CovidBanner from '../components/CovidBanner'
import NetworkIndicator from '../components/NetworkIndicator'
import TFLLineStatusList from '../components/TFLLineStatusList'
import Timeline from '../components/Timeline'
import { BREAKPOINT } from '../utils/constants'
import fetcher from '../utils/fetcher'
import tflFetcher from '../utils/tflFetcher'

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

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return data ? (
    <>
      <NetworkIndicator stale={!mounted} />
      <CovidBanner />
      <AppContainer>
        <TFLLineStatusList lineStatuses={data} />
        <Timeline />
      </AppContainer>
    </>
  ) : (
    'Loading'
  )
}

export async function getStaticProps() {
  const data = await tflFetcher()
  return { props: { initialData: data }, revalidate: 1 }
}

export default Index
