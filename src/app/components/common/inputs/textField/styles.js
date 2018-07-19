import sc from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

export const FieldWrapper = sc.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: ${gs.spacing.small};
`

export const Label = sc.label`
  margin-bottom: ${gs.spacing.small};
  color: ${({active, error}) => active ? gs.colours.primary.default : error ? gs.colours.error.default : 'inherit'};
  transform: translateX(${({active}) => active ? gs.spacing.small : gs.spacing.nil});
  transition: all ${gs.transitions.fast};
`

export const Text = sc.input`
  font-size: ${gs.font.sizes.normal};
  padding: ${gs.spacing.small};
  border-radius: ${gs.radius.small};
  border: ${gs.borders.thin} ${({error}) => error ? gs.colours.error.default : gs.colours.grey};
  background-color: ${({error}) => error ? gs.colours.error.tinted : 'inherit'};
  color: ${({error}) => error ? gs.colours.error.darker : 'inherit'};
  outline: none;
  transition: all ${gs.transitions.fast};
  
  &:focus {
    border: ${gs.borders.thin} ${gs.colours.primary.default};
    background-color: ${gs.colours.primary.tinted};
    color: ${gs.colours.primary.default};
  }
`

export const Error = sc.p`
  margin-top: ${gs.spacing.small};
  font-size: ${gs.font.sizes.small};
  color: ${gs.colours.error.default};
  max-height: ${({error}) => error ? gs.spacing.normal : gs.spacing.nil};
  transition: max-height ${gs.transitions.normal};
  overflow: hidden;
`