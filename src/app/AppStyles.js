import sc, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import * as gs from 'utils/constants/globalStyles'

export const TrendResetter = () => injectGlobal`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background-color: ${gs.colours.offWhite};
  }

  button {
    outline: none;
  }
`

export const TrendSetter = sc.div`
  font-size: ${gs.font.sizes.normal};
  font-family: ${gs.font.families.normal};
  padding-top: ${gs.specifics.stickyHeaderHeight};
`

export const Page = sc.section`
  text-align: center;
  padding: ${gs.spacing.large} ${gs.spacing.normal};
`