import sc from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

export const ButtonGroup = sc.div`
  ${ ({direction}) => direction !== 'vertical' ? `
    & > button {
      margin-right: ${gs.spacing.small};
      &:last-child {
        margin-right: 0;
      }
    }
  ` : `
    & > button {
      width: 100%;
      margin-bottom: ${gs.spacing.small};
      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`

const Button = sc.button`
  transition: all ${gs.transitions.normal};
  font-size: ${({small}) => small ? gs.font.sizes.small : gs.font.sizes.normal};
  font-weight: ${gs.font.weights.normal};
  line-height: ${gs.lineHeights.withoutBorder};
  padding: ${gs.spacing.nil} ${gs.spacing.large};
  cursor: pointer;
  border-radius: ${gs.radius.small};
  border: none;
`

export const PrimaryButton = Button.extend`
  background-color: ${gs.colours.primary.default};
  color: ${gs.colours.white};

  &:hover,
  &:focus {
    color: ${gs.colours.secondary.default};
    box-shadow: 0 0 80px 0 ${gs.colours.primary.darker} inset;
  }
`


export const SecondaryButton = Button.extend`
  border: ${gs.borders.thick} ${gs.colours.primary.default};
  line-height: ${gs.lineHeights.withThickBorder};
  color: ${gs.colours.primary.default};
  background-color: ${gs.colours.white};

  &:hover,
  &:focus {
    box-shadow: 0 0 80px 0 ${gs.colours.primary.lightest} inset;
  }
`

export const LinkButton = Button.extend`
  text-decoration: underline;
  color: ${gs.colours.primary.default};
  background-color: transparent;
  padding: ${gs.spacing.nil} ${gs.spacing.small};

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${gs.colours.primary.darkest};
    text-decoration-color: ${gs.colours.secondary.darker};
  }
`

export const BrandButton = Button.extend`
  display: flex;
  width: 100%;
  background-color: ${({brand}) => brand ? brand.default : gs.colours.primary.default};
  color: ${gs.colours.white};
  transition: background-color ${gs.transitions.fast};
  padding: ${gs.spacing.nil} ${gs.spacing.small};
  align-items: center;
  margin-bottom: ${gs.spacing.small};
  position: relative;

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
