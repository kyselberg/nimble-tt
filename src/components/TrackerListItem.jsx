import React from 'react'
import TimerControl from './TimerControl'

const TrackerListItem = ({id, time, title, pauseTime}) => {
  const isActive = pauseTime ? null : 'isActive'
  return (
    <li className={isActive}>
      <p className='name'>{title}</p>
      <TimerControl id={id} time={time} pauseTime={pauseTime} />
    </li>
  )
}

export default TrackerListItem
