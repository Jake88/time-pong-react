import sc, { keyframes } from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

export const CardBase = sc.div`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  top: 0;
  left: 0;

  z-index: 100;
  -webkit-transform: translate3d(0, 0, 0) rotateY(0deg);
  transform: translate3d(0, 0, 0) rotateY(0deg);
`
