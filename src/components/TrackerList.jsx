import React from 'react'
import {useSelector} from 'react-redux'
import TrackerListItem from './TrackerListItem'

const TrackerList = () => {
  const list = useSelector(state => state.timersList)
  return (
    <ul>
      {list.map(item => (
        <TrackerListItem
          id={item.id}
          time={item.id}
          title={item.title}
          pauseTime={item.pauseTime}
          key={item.id}
        />
      ))}
    </ul>
  )
}

export default TrackerList
