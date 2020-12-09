import {ADD_TIMER, PAUSE_TIMER, REMOVE_TIMER, RESUME_TIMER} from './types'

export function addTimer(timerObj) {
  return {type: ADD_TIMER, payload: timerObj}
}

export function removeTimer(id) {
  return {type: REMOVE_TIMER, payload: id}
}

export function pauseTimer(id, date) {
  return {type: PAUSE_TIMER, payload: {id, date}}
}

export function resumeTimer(id, time) {
  return {type: RESUME_TIMER, payload: {id, time}}
}
