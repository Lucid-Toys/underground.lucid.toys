import { useEffect, useState } from 'react'

const useTime = (refreshCycle = 100): Date => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, refreshCycle)
    return (): void => clearInterval(id)
  }, [refreshCycle])

  return time
}

export default useTime
