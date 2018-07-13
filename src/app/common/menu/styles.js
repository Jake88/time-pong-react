import sc from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

export const MenuWrapper = sc.nav`
  overflow: hidden;
  height: ${({active}) => active ? gs.specifics.navHeight : 0};
  transition: height ${gs.transitions.fast} ease-out ;
  
  @media (min-width: ${gs.breakpoints.desktop}) {
    height: auto;
    position: absolute;
    left: 0;
    top: 0;
  }
`

export const MenuLink = sc.a`
  color: ${({current}) => current ? gs.colours.secondary.default : 'inherit'};
  display: block;
  border-bottom: ${gs.borders.thin} ${gs.colours.primary.darker};
  transition: background-color ${gs.transitions.fast}, transform ${gs.transitions.fast}, color ${gs.transitions.fast};
  cursor: pointer;
  transform: scale(1);
  
  &:hover,
  &:focus {
    color: ${gs.colours.secondary.lightest};
    background-color: ${gs.colours.primary.darker};
    transform: scale(1.1);
  }
    
  @media (min-width: ${gs.breakpoints.desktop}) {
    display: inline-block;
    border-bottom: none;
    border-right: ${gs.borders.thin} ${gs.colours.primary.darker};
    width: auto;
    padding: ${gs.spacing.nil} ${gs.spacing.large}
  }
`
