import React from 'react'
import {
} from './styles'

const Timer = props => {
  const {
    // Functions
    startTimer,

    // Values
    currentTime
  } = props

  return (
    <button onClick={startTimer}>{currentTime || 'start'}</button>
  )
}

export default Timer
