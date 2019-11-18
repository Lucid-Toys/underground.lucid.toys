import styled from "@emotion/styled"
import useSWR from "swr"
import NetworkIndicator from "../components/NetworkIndicator"
import TFLLineStatusList from "../components/TFLLineStatusList"
import Timeline from "../components/Timeline"
import fetcher from "../utils/fetcher"

const AppContainer = styled.main`
  display: flex;
  flex: 1;
`

const Index = ({ initialData }) => {
  const { data } = useSWR("/api/data", fetcher, {
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
    "Loading"
  )
}

Index.getInitialProps = async () => {
  const data = await fetcher("http://localhost:3000/api/data")
  return { initialData: data }
}

export default Index
