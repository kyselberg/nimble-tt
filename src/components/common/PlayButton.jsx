import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import {resumeTimer} from '../../store/actions'
import {saveToLocalStore} from '../../assets/js/helpers'
import playCircleImg from '../../assets/imgs/play_circle_outline.svg'

const PlayButton = ({id, timer}) => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.timersList)

  const play = () => {
    dispatch(resumeTimer(id, moment().subtract(timer, 'ms')))
    saveToLocalStore(list)
  }

  return (
    <button onClick={play}>
      <img src={playCircleImg} alt='resume timer' />
    </button>
  )
}

export default PlayButton
