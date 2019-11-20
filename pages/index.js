import styled from "@emotion/styled"
import { useEffect } from "react"
import ReactGA from "react-ga"
import useSWR from "swr"
import NetworkIndicator from "../components/NetworkIndicator"
import TFLLineStatusList from "../components/TFLLineStatusList"
import Timeline from "../components/Timeline"
import fetcher from "../utils/fetcher"

ReactGA.initialize("UA-122108242-2")

const AppContainer = styled.main`
  display: flex;
  flex: 1;
`

const Index = ({ initialData }) => {
  const { data } = useSWR("/api/data", fetcher, {
    refreshInterval: 3000,
    initialData,
  })

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
    return () => null
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
    "Loading"
  )
}

Index.getInitialProps = async () => {
  const data = await fetcher("https://underground.lucid.toys/api/data")
  return { initialData: data }
}

export default Index
