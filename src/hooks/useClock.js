import { useState, useEffect } from 'react'

export default function useClock() {
  const [clock, setClock] = useState(() => getTimeStamp())

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(getTimeStamp())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return clock
}

function getTimeStamp() {
  return new Date().toLocaleString('en-GB').split(' ')[1]
}