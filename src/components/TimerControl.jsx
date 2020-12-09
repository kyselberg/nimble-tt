import React, {useState, useEffect, useRef} from 'react'
import {calculateTime, sQnty} from '../assets/js/helpers'
import PlayButton from './common/PlayButton'
import PauseButton from './common/PauseButton'
import RemoveButton from './common/RemoveButton'

const TimerControl = ({id, time, pauseTime}) => {
  const [timer, setTimer] = useState(calculateTime(sQnty(time, pauseTime)))
  const interval = useRef(null)

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimer(calculateTime(sQnty(time, pauseTime)))
    }, 1000)

    return () => {
      clearInterval(interval.current)
    }
  }, [pauseTime, time])

  return (
    <>
      <p className='timer'>{timer}</p>
      {pauseTime ? (
        <PlayButton id={id} timer={timer} />
      ) : (
        <PauseButton id={id} interval={interval.current} />
      )}
      <RemoveButton id={id} />
    </>
  )
}

export default TimerControl
