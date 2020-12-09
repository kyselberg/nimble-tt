import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeTimer} from '../../store/actions'
import {saveToLocalStore} from '../../assets/js/helpers'

const RemoveButton = ({id}) => {
  const dispatcher = useDispatch()
  const list = useSelector(state => state.timersList)

  const remove = () => {
    dispatcher(removeTimer(id))
    const newList = list.filter(el => el.id !== id)
    saveToLocalStore(newList)
  }

  return (
    <span onClick={remove} className='material-icons remove'>
      remove_circle_outline
    </span>
  )
}

export default RemoveButton
