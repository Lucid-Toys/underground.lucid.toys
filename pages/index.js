import styled from "@emotion/styled"
import useSWR from "swr"
import fetch from "unfetch"
import NetworkIndicator from "../components/NetworkIndicator"
import TFLLineStatusList from "../components/TFLLineStatusList"
import Timeline from "../components/Timeline"

const AppContainer = styled.main`
  display: flex;
  flex: 1;
`

const Index = () => {
  const { data, error } = useSWR(
    "https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status",
    url => fetch(url).then(_ => _.json()),
    { refreshInterval: 3000 },
    true
  )

  const lineStatuses = data
    ? data
        .sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
        .sort((a, b) => {
          switch (a.lineStatuses[0].statusSeverityDescription) {
            case "Good Service":
              return 1
            case "Severe Delays":
            default:
              return -1
          }
        })
    : []

  return (
    <>
      <NetworkIndicator />
      <AppContainer>
        <TFLLineStatusList lineStatuses={lineStatuses} />
        <Timeline />
      </AppContainer>
    </>
  )
}

export default Index
