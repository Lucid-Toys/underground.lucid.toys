import styled from '@emotion/styled'
import { ReactComponentElement } from 'react'
import useNetworkStatus from '../hooks/useNetworkStatus'
import lucidLogo from './images/lucid-icon.svg'
import offlineImage from './images/offline.svg'
import onlineImage from './images/online.svg'

const Container = styled.header`
  padding: 0.5em;
  padding-left: 5vw;
  padding-right: 32px;
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

const LucidLink = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 0.5em;
  background-color: rgba(0, 0, 0, 0.3);
`

const logger = (t) => {
  console.log(t)
  return true
}

const Offline = ({
  reason,
}: {
  reason: 'stale' | 'offline'
}): ReactComponentElement<typeof OfflineContainer> => (
  <OfflineContainer>
    <p>
      <img alt="Network offline icon" src={offlineImage} />
      {reason === 'offline' ? (
        <>
          <strong>No internet connection.</strong> Service updates may no longer
          be accurate.
        </>
      ) : (
        <>
          <strong>Showing stale data.</strong> This data was cached and may not
          be accurate.
        </>
      )}
    </p>
  </OfflineContainer>
)

const Online = (): ReactComponentElement<typeof OnlineContainer> => (
  <OnlineContainer>
    <p>
      <img alt="Network online icon" src={onlineImage} /> Updating live
    </p>
    <LucidLink href="https://lucid.toys" title="Lucid Toys">
      <img alt="Lucid Logo" src={lucidLogo} />
    </LucidLink>
  </OnlineContainer>
)
export default function NetworkIndicator({ stale }: { stale: boolean }) {
  const isOnline = useNetworkStatus()
  return isOnline && !stale ? (
    <Online />
  ) : (
    <Offline reason={stale ? 'stale' : 'offline'} />
  )
}
