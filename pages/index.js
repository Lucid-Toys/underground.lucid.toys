import useSWR from "swr"
import fetch from "unfetch"
import TFLLineStatusList from "../components/TFLLineStatusList"
import Timeline from "../components/Timeline"

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
    <React.Fragment>
      <TFLLineStatusList lineStatuses={lineStatuses} />
      <Timeline />
    </React.Fragment>
  )
}

export default Index
