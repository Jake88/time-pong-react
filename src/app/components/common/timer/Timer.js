import React, { useState } from 'react'

import { TIMER, VOLUME } from 'utils/constants/defaultGameConfig'

import {
  TimerButton,
  Start,
  Hand
} from './styles'
import TimesUpSound from './sounds/times-up-tone.mp3'

/*
 TODO: Two new game changer cards that extend the time and reduce the time for x number fo rounds
 TODO: Split the card json into the sets
*/

const createTime = () => Math.random() * (TIMER.MAX - TIMER.MIN) + TIMER.MIN
const formatTime = time => time && (time / 1000).toFixed(2)

const TimesUp = new Audio(TimesUpSound)
TimesUp.volume = VOLUME

const TimerIcon = ({isRunning}) => {
  return isRunning ? (
    <React.Fragment>
      <Hand fast/>
      <Hand/>
    </React.Fragment>
  ) : (
    <Start/>
  )
}

const Timer = () => {
  const [isRunning, setRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(null)

  const setTime = () => {
    setCurrentTime(null)
    setRunning(true)

    const newTime = createTime()

    console.log(`Timer started: ${formatTime(newTime)} seconds`)
    setTimeout(() => {
      console.log('Timer stopped')
      setCurrentTime(newTime)
      setRunning(false)
      TimesUp.play()
    }, newTime)
  }

  return (
    <React.Fragment>
      <TimerButton isRunning={isRunning} onClick={setTime}>
        <TimerIcon isRunning={isRunning} />
      </TimerButton>

      <h4>{formatTime(currentTime)}</h4>
    </React.Fragment>
  )
}

export default Timer
