import sc, { keyframes } from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

export const DarkOverlay = sc.div`
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity .3s linear, z-index .5s linear;
  transition: opacity .3s linear, z-index .5s linear;
  position: absolute;
  top: -2000px;
  left: -2000px;
  width: 5000px;
  height: 5000px;
  background-color: #333;
  z-index: -1;

  &.open {
    opacity: .5;
    filter: alpha(opacity=50);
    z-index: 4;
    -webkit-transition: opacity .5s linear;
    transition: opacity .5s linear;
  }
`

const Card = sc.div`
  position: absolute;
  height: 28.75em;
  width: 18.75em;
  left: 50%;
  top: 50%;
  margin-top: -14.375em;
  margin-left: -9.375em;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;
`

export const CardContainer = sc(Card)`
  -webkit-perspective: 1000px;
  perspective: 1000px;
  opacity: 0;
  -webkit-transform: translate3d(0, 10em, 0);
  transform: translate3d(0, 10em, 0);
  transition: transform .25s ease-in, opacity .25s ease-in;
  z-index: 4;

  &.open {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    transition: transform .25s ease-out, opacity .25s ease-out;
    opacity: 1;
  }
`

export const InnerWrapper = sc.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  left: 0;
  bottom: 0;
  border-radius: .7em;
  box-shadow: 0 0 3px var(--primary-text-color);
  -webkit-transition: .8s linear;
  transition: .8s linear;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: relative;
  -webkit-transform: ${({flipped}) => flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
  transform:  ${({flipped}) => flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
  background-color: blue;

  &.open {
    box-shadow: 0 0 13px var(--primary-text-color);
  }
`
