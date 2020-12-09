import React from 'react'
import moment from 'moment'
import {useDispatch, useSelector} from 'react-redux'
import {pauseTimer} from '../../store/actions'
import {saveToLocalStore} from '../../assets/js/helpers'
import pauseCircleImg from '../../assets/imgs/pause_circle_outline.svg'

const PauseButton = ({id, interval}) => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.timersList)

  const pause = () => {
    dispatch(pauseTimer(id, moment()))
    saveToLocalStore(list)
    clearInterval(interval)
  }

  return (
    <button onClick={pause}>
      <img src={pauseCircleImg} alt='pause timer' />
    </button>
  )
}

export default PauseButton
