import {ADD_TIMER, PAUSE_TIMER, REMOVE_TIMER, RESUME_TIMER} from './types'
import {getFromLocalStore} from '../assets/js/helpers'

const initialState = {
  timersList: getFromLocalStore() || []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TIMER: {
      const timersList = [action.payload, ...state.timersList]
      return {...state, timersList}
    }
    case REMOVE_TIMER: {
      const timersList = state.timersList.filter(
        timer => timer.id !== action.payload
      )
      return {...state, timersList}
    }
    case PAUSE_TIMER: {
      const timersList = state.timersList.map(item => {
        if (item.id === action.payload.id) {
          item.pauseTime = action.payload.date
        }
        return item
      })
      return {...state, timersList}
    }
    case RESUME_TIMER: {
      const timersList = state.timersList.map(item => {
        if (item.id === action.payload.id) {
          item.id = action.payload.time
          item.pauseTime = null
        }
        return item
      })
      return {...state, timersList}
    }
    default:
      return state
  }
}
