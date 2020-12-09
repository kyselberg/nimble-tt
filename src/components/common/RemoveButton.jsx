import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeTimer} from '../../store/actions'
import {saveToLocalStore} from '../../assets/js/helpers'
import removeCircleImg from '../../assets/imgs/remove_circle_outline.svg'

const RemoveButton = ({id}) => {
  const dispatcher = useDispatch()
  const list = useSelector(state => state.timersList)

  const remove = () => {
    dispatcher(removeTimer(id))
    const newList = list.filter(el => el.id !== id)
    saveToLocalStore(newList)
  }

  return (
    <button onClick={remove}>
      <img src={removeCircleImg} alt='remove timer' />
    </button>
  )
}

export default RemoveButton
