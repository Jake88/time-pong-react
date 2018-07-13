import sc from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

export const IngredientsList = sc.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: ${gs.spacing.large};
`

export const Ingredient = sc.li`
  flex-basis: 0;
  flex-grow: 1;
  margin-right: ${gs.spacing.normal};
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  
  text-align: center;
  
  // TODO: not sure about these styles...
  border: ${gs.borders.thin} ${gs.colours.grey};
  border-radius: ${gs.radius.large};
  background-color: ${gs.colours.white};
  padding: ${gs.spacing.small};
  
  // &:nth-child(2) {
  //   transform: scale(1.1); // TODO is this good? Does not scale well responsivley
  // }
  
  &:last-child {
    margin-right: ${gs.spacing.nil};
  }
  
  // TODO: Need to convert this into a component for icons??
  & svg {
    height: 50%;
    width: 50%;
    display: block;
    margin: auto;
  }
`

export const MethodsList = sc.ol`
  list-style: decimal;
`

export const Step = sc.li`
  margin-bottom: ${gs.spacing.normal};
`
