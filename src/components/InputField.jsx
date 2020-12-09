import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import moment from 'moment'
import {addTimer} from '../store/actions'
import {saveToLocalStore} from '../assets/js/helpers'
import playArrowImg from '../assets/imgs/play_button_arrow.svg'

const InputField = () => {
  const dispatch = useDispatch()
  const list = useSelector(state => state.timersList)
  const input = useRef(null)

  const addToList = event => {
    if (event.key && event.key !== 'Enter') return

    const newTimer = {
      title: input.current.value.trim() || moment().format('LL'),
      id: moment(),
      pauseTime: null
    }

    dispatch(addTimer(newTimer))

    saveToLocalStore([newTimer, ...list])
    input.current.value = ''
  }

  return (
    <div className='input-group'>
      <input
        onKeyPress={addToList}
        ref={input}
        placeholder='Enter tracker name'
        type='text'
      />
      <button onClick={addToList}>
        <img src={playArrowImg} alt='add button' />
      </button>
    </div>
  )
}

export default InputField
