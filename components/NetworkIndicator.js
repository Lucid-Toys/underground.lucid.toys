import styled from "@emotion/styled"
import useNetworkStatus from "../hooks/useNetworkStatus"

const Container = styled.header`
  padding: 0.5em;
  padding-left: 5vw;
  font-size: 0.875rem;
  font-weight: 500;

  p {
    line-height: 1;
  }

  img {
    margin-right: 0.25em;
    display: inline-block;
    vertical-align: middle;
    margin-top: -0.35em;
  }
`

const OfflineContainer = styled(Container)`
  color: var(--dark);
  background-color: var(--warning);
`

const OnlineContainer = styled(Container)`
  color: var(--light);
  background-color: var(--interactive);
`

const Offline = () => (
  <OfflineContainer>
    <p>
      <img src="/images/offline.svg" />
      <strong>No internet connection.</strong> Service updates may no longer be
      accurate.
    </p>
  </OfflineContainer>
)

const Online = () => (
  <OnlineContainer>
    <p>
      <img src="/images/online.svg" /> Updating live
    </p>
  </OnlineContainer>
)
export default function NetworkIndicator() {
  const isOnline = useNetworkStatus()
  return isOnline ? <Online /> : <Offline />
}
