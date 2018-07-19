import sc from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

export const Panel = sc.section`
  border: ${gs.borders.thin} ${gs.colours.lightGrey};
  border-radius: ${gs.radius.large};
  margin: 0 auto;
  padding: ${gs.spacing.large};
  background-color: ${gs.colours.white}
  max-width: 470px;
  text-align: left;
`