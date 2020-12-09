import React from 'react'
import moment from 'moment'
import {useDispatch, useSelector} from 'react-redux'
import {pauseTimer} from '../../store/actions'
import {saveToLocalStore} from '../../assets/js/helpers'

const PauseButton = ({id, interval}) => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.timersList)

  const pause = () => {
    dispatch(pauseTimer(id, moment()))
    saveToLocalStore(list)
    clearInterval(interval)
  }

  return (
    <span onClick={pause} className='material-icons'>
      pause_circle_outline
    </span>
  )
}

export default PauseButton
