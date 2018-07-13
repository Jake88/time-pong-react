import sc from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

export const ContentPanel = sc.section`
  border: ${gs.borders.thin} ${gs.colours.lightGrey};
  border-radius: ${gs.radius.large};
  margin: 0 auto;
  padding: ${gs.spacing.large};
  background-color: ${gs.colours.white}
`

export const Title = sc.h1`
  font-size: ${gs.font.sizes.title};
  padding: ${gs.spacing.large} ${gs.spacing.nil};
`

export const SubHeader = sc.h2`
  font-size: ${gs.font.sizes.large};
  padding: ${gs.spacing.normal} ${gs.spacing.nil};
`

export const Button = sc.button`
  font-size: ${gs.font.sizes.normal};
  font-weight: ${gs.font.weights.normal};
  background-color: ${gs.colours.primary.default}
  color: ${gs.colours.white};
  padding: ${gs.spacing.normal} ${gs.spacing.large};
  border-radius: ${gs.radius.small};
  border: none;
  border-bottom: ${gs.borders.thin} ${gs.colours.darkGrey};
  transition: background-color ${gs.transitions.fast}, color ${gs.transitions.fast};
  cursor: pointer;
  
  &:hover,
  &:focus {
    color: ${gs.colours.secondary.lightest};
    border-bottom: ${gs.borders.thick} ${gs.colours.darkGrey};
    background-color: ${gs.colours.primary.darker};
    margin-top: -1px; // counter act the thick bottom border
  }
  
  &:active {
    border: 0;
    margin-top: 1px;
  }
`

export const Emph = sc.span`
  font-weight: ${gs.font.weights.heavy}
`
