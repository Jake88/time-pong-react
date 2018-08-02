import sc, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import * as gs from 'utils/constants/globalStyles'
import LoadingMessages from 'utils/constants/loadingMessages'

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
  padding-top: ${gs.lineHeights.withoutBorder};
`

export const Page = sc.section`
  text-align: center;
  padding: ${gs.spacing.large} ${gs.spacing.normal};
`

export const LoadAligner = sc.div`
  position: absolute;
  height: 100px;
  width: 200px;
  top: calc(50% - 50px);
  left: calc(50% - 100px);
  text-align: center;
  &:after {
    color: ${gs.colours.grey};
    content: '${LoadingMessages[Math.floor(Math.random() * LoadingMessages.length)]}';
    line-height: 40px;
  }
`
