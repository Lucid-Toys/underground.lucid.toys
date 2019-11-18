import { useEffect, useState } from "react"

const useTime = (refreshCycle = 100) => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date())
    }, refreshCycle)
    return () => clearInterval(id)
  }, [])

  return time
}

export default useTime
