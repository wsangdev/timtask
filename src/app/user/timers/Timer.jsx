import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Timer() {
  const [time, setTime] = useState(0) // tiempo de avanze 
  const [isRun, setIsRun] = useState(false) 

  useEffect(() => {
    let interval = null;

    if(isRun) {
      interval = setInterval(() => {
        setTime(preTime => preTime + 1)
      }, 1000)
    } else if (!isRun && time !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isRun, time])

  const handleStartPause = () => {
    setIsRun(!isRun)
  }

  const formaTime = (second) => {
    const hours = Math.floor(second/3600);
    const minuts = Math.floor( (second % 3600) / 60);
    const secs = second % 60
    return `${String(hours).padStart(2, '0')}: ${String(minuts).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`
  }


  return (
    <div>
      <h1> Control Task </h1>
      <aside>{formaTime(time)}</aside>
      <button onClick={handleStartPause}>
        {isRun ? 'Pause' : 'Start'}
      </button>
    </div>
  )
}


