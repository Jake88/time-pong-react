import sc, { keyframes } from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

import { Remove } from 'styled-icons/material/Remove'
// import { Minus } from 'styled-icons/fa-solid/Minus'
// import { Play } from 'styled-icons/fa-solid/Play'
import { PlayArrow } from 'styled-icons/material/PlayArrow'

const spin = keyframes`
  0%  {-webkit-transform: rotate(0deg);transform: rotate(0deg);}
  100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}
`

export const TimerButton = sc.button`
  height: 9em;
  width: 9em;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin: 2em auto;
  background-color: #fff;
  border: 15px solid ${gs.colours.primary.default};
  color: ${gs.colours.primary.default};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  display: block;

  &:active {
    background-color: ${gs.colours.secondary.tinted};
  }
`

export const Start = sc(PlayArrow)`
  height: 50%;
  width: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
`

export const Hand = sc(Remove)`
  position: absolute;
  -webkit-transform-origin: right;
  -ms-transform-origin: right;
  transform-origin: right;
  height: 50%;
  width: 40%;
  left: 10%;
  top: 25%;
  -webkit-animation: ${spin} ${({fast}) => fast ? '2s' : '20s'} infinite linear;
  animation: ${spin} ${({fast}) => fast ? '2s' : '20s'} infinite linear;
`
