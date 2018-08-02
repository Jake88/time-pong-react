import sc, { keyframes } from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

import { Circle } from 'styled-icons/fa-regular/Circle'


export const Title = sc.h1`
  font-size: ${gs.font.sizes.title};
  padding: ${gs.spacing.nil};
  padding-bottom: ${gs.spacing.large};
`

export const SubHeader = sc.h2`
  font-size: ${gs.font.sizes.large};
  padding: ${gs.spacing.nil};
  padding-bottom: ${gs.spacing.normal};
`

export const Aligner = sc.div`
  text-align: ${({aligned}) => aligned || 'left'}
`

export const AlteredText = sc.span`
  font-weight: ${({heavy}) => heavy ? gs.font.weights.heavy : 'inherit'};
  font-size: ${({big, small}) => big ? gs.font.sizes.large : small ? gs.font.sizes.small : 'inherit'};
`

export const Divider = sc.div`
  ${({text}) => text && `
    &:before {
      position: relative;
      top: -7px;
      margin: auto;
      background-color: ${gs.colours.white};
      padding: ${gs.spacing.nil} ${gs.spacing.small};
      color: ${gs.colours.darkGrey};
      content: '${text}';
      text-transform: uppercase;
    }
  `}

  position: relative;
  text-align: center;
  height: 2px;
  border: ${gs.borders.thin} ${gs.colours.lightGrey};
  border-radius: 50% / 100%;
  margin: ${gs.spacing.large};
`

export const ContentPanel = sc.section`
  border: ${gs.borders.thin} ${gs.colours.lightGrey};
  border-radius: ${gs.radius.large};
  margin: 0 auto;
  padding: ${gs.spacing.normal};
  background-color: ${gs.colours.white}
  max-width: 470px;
  text-align: left;
`

const pulse = keyframes`
  0% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
`

export const LoadIndicator = Circle.extend`
  height: ${({size}) => size || '100%'};
  width: ${({size}) => size || '100%'};
  animation: ${pulse} 1s ease infinite;
  animation-fill-mode: both;
  color: ${gs.colours.grey};
`
