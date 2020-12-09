import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import {resumeTimer} from '../../store/actions'
import {saveToLocalStore} from '../../assets/js/helpers'

const PlayButton = ({id, timer}) => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.timersList)

  const play = () => {
    dispatch(resumeTimer(id, moment().subtract(timer, 'ms')))
    saveToLocalStore(list)
  }

  return (
    <span onClick={play} className='material-icons'>
      play_circle_outline
    </span>
  )
}

export default PlayButton
