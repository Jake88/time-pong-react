import sc, { injectGlobal } from 'styled-components'
import * as gs from 'utils/constants/globalStyles'

import { ContentPanel } from 'components/common/styledComponents'

export const Overlay = sc.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${gs.colours.fadedBlack} ;
  z-index: ${gs.layers.overlay};
  
  ${() => {
    injectGlobal`
      body {
        overflow: hidden;
        scroll: none;
      }
    `
  }}
`

export const ModalWrapper = ContentPanel.extend`
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  left: calc(50% - ${({width}) => width / 2}px);
  top: calc(50% - ${({height}) => height / 2}px);
  
  & > * {
    flex-grow: 1;
  } 
`
