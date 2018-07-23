import sc from 'styled-components'
import * as gs from 'utils/constants/globalStyles'
import { Bars } from 'styled-icons/fa-solid/Bars'
import { UserCog } from 'styled-icons/fa-solid/UserCog'
import { PrimaryButton } from 'components/common/inputs/button/styles'

export const Banner = sc.header`
  width: 100%;
  color: ${gs.colours.white}
  line-height: ${gs.specifics.stickyHeaderHeight};
  background-color: ${gs.colours.primary.default};
  box-shadow: 0 0 10px 0 ${gs.colours.black};
  position: fixed;
  top: 0;
  left: 0;
  text-align: center;
  z-index: ${gs.layers.important};
`

export const Logo = sc.h2`
  font-size: ${gs.font.sizes.large}
  font-weight: ${gs.font.weights.normal}
`

export const BurgerBars = sc(Bars).attrs({
  size: gs.font.sizes.normal
})``

export const UserIcon = sc(UserCog).attrs({
  size: gs.font.sizes.normal
})``

const MenuButton = PrimaryButton.extend`
  height: ${gs.specifics.stickyHeaderHeight};
  width: ${gs.specifics.stickyHeaderHeight};
  border-bottom: none;
  border-radius: 0;
  padding: 0;
  font-size: initial;
  
  &:hover,
  &:focus {
    border-bottom: none;
    margin-top: 0;
  }
  
  &:active {
    margin-top: 0;
  }
  
  @media (min-width: ${gs.breakpoints.desktop}) {
    display: none;
  }
`

export const BurgerButton = MenuButton.extend`
  position: absolute;
  border-right: ${gs.borders.thin} ${gs.colours.primary.darker};
  left: 0;
`
export const UserButton = MenuButton.extend`
  border-left: ${gs.borders.thin} ${gs.colours.primary.darker};
`

export const UserManagement = sc.div`
  position: absolute;
  right: 0;
`

export const Link = sc.a`
  font-size: ${gs.font.sizes.small};
  border-right: ${gs.borders.thin} ${gs.colours.white};
  padding: 0 ${gs.spacing.small};
  text-decoration: underline;
  cursor: pointer;
  transition: color ${gs.transitions.fast};
  
  &:last-child {
    padding-right: ${gs.spacing.normal};
    border-right: none;
  }
  
  &:hover,
  &:focus {
    color: ${gs.colours.secondary.default};
  }
`