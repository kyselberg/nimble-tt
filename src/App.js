import React from 'react'
import './assets/scss/app.scss'
import InputField from './components/InputField'
import TrackerList from './components/TrackerList'

const App = () => {
  return (
    <div className='wrapper'>
      <h1>Tracker</h1>
      <div className='container'>
        <InputField />
        <TrackerList />
      </div>
    </div>
  )
}

export default App
