import sc, {keyframes} from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

import { SubHeader } from 'components/common/styledComponents'

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

export const FlexStretch = sc.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const LoadIndicatorAligner = sc.div`
  background-color: ${gs.colours.white};
  padding: ${gs.spacing.normal};
  flex-position: start;
  border-radius: 50%;
  width: 125px;
  margin: auto;
  margin-top: calc(-62px - ${gs.spacing.normal});
`

export const LoadIndicator = sc.div`
  animation: ${pulse} 1s ease infinite;
  animation-fill-mode: both;
  animation-play-state: ${({status}) => !status.loading && 'paused'};
  transition: color ${gs.transitions.normal};
  color: ${({status}) => (
    status.loading ?
      gs.colours.grey : status.error ?
      gs.colours.error.default : gs.colours.success.default
  )};
`

export const LoadLabel = SubHeader.extend`
  transition: color ${gs.transitions.normal};
  color: ${({status}) => (
    status.loading ?
      gs.colours.grey : status.error ?
      gs.colours.error.default : gs.colours.success.default
  )};
`

export const LoadMessage = sc.p`
  flex-grow: 1;
  margin-bottom: ${gs.spacing.normal};
`
