import moment from 'moment'
import {timersList} from './constants'

export function saveToLocalStore(item) {
  localStorage.setItem(timersList, JSON.stringify(item))
}

export function getFromLocalStore() {
  return JSON.parse(localStorage.getItem(timersList))
}

export function calculateTime(s) {
  const ms = s % 1000
  s = (s - ms) / 1000
  const secs = s % 60
  s = (s - secs) / 60
  const mins = s % 60
  const hrs = (s - mins) / 60

  return pad(hrs) + ':' + pad(mins) + ':' + pad(secs)
}

function pad(n, z = 2) {
  return ('00' + n).slice(-z)
}

export function sQnty(time, pauseTime) {
  return pauseTime
    ? moment(pauseTime).diff(moment(time))
    : moment().diff(moment(time))
}
