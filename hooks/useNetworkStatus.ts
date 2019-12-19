import { useEffect, useState } from 'react'

function getOnlineStatus(): boolean {
  return typeof navigator !== 'undefined' &&
    typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true
}

export default function useNetworkStatus(): boolean {
  const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus())

  const goOnline = (): void => setOnlineStatus(true)

  const goOffline = (): void => setOnlineStatus(false)

  useEffect(() => {
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)

    return (): void => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return onlineStatus
}
