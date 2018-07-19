import sc from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

const Button = sc.button`
  font-size: ${({small}) => small ? gs.font.sizes.small : gs.font.sizes.normal};
  font-weight: ${gs.font.weights.normal};
  padding: ${gs.spacing.normal} ${gs.spacing.large};
  cursor: pointer;
  border-radius: ${gs.radius.small};
  border: none;
  
  margin-right: ${gs.spacing.small};
  &:last-child {
    margin-right: 0;
  }
`

export const PrimaryButton = Button.extend`
  background-color: ${gs.colours.primary.default};
  color: ${gs.colours.white};
  transition: background-color ${gs.transitions.fast}, color ${gs.transitions.fast};
  
  &:hover,
  &:focus {
    color: ${gs.colours.secondary.lightest};
    background-color: ${gs.colours.primary.darker};
  }
  
  &:active {
    border: 0;
  }
`

export const LinkButton = Button.extend`
  text-decoration: underline;
  color: ${gs.colours.primary.default};
  background-color: transparent;
  transition: color ${gs.transitions.fast}, transform ${gs.transitions.fast};
  padding: ${gs.spacing.small} ${gs.spacing.small};
  
  &:hover,
  &:focus {
    color: ${gs.colours.secondary.darkest};
    transform: scale(1.1);
  }
`

export const BrandButton = Button.extend`
  display: flex;
  width: 100%;
  background-color: ${({brand}) => brand ? brand.default : gs.colours.primary.default};
  color: ${gs.colours.white};
  transition: background-color ${gs.transitions.fast};
  padding: ${gs.spacing.small} ${gs.spacing.small};
  align-items: center;
  margin-bottom: ${gs.spacing.small};
  position: relative;
  line-height: 34px;
  
  & > * {
    flex-grow: 1;
  }
  
  & svg {
    position: absolute;
    left: ${gs.spacing.small};
    height: 34px;
    width: 34px;
  }
  
  &:hover,
  &:focus {
    background-color: ${({brand}) => brand ? brand.highlight : gs.colours.primary.lighter};
  }
`