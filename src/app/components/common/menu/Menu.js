import React from 'react'
import ROUTES from 'utils/constants/routes'
import {
  MenuWrapper,
  MenuLink
} from './styles'

const Menu = props => {
  const {
    current,
    active,
    go
  } = props

  return (
    <MenuWrapper active={active}>
      <MenuLink
        id='link-how-to-play'
        current={current === ROUTES.INSTRUCTIONS}
        onClick={() => (go(ROUTES.INSTRUCTIONS))}>
        How to play
      </MenuLink>

      <MenuLink
        id='link-play'
        current={current === ROUTES.GAME}
        onClick={() =>(go(ROUTES.GAME))}>
        Play
      </MenuLink>

      <MenuLink
        id='link-cards'
        current={current === ROUTES.CARD_LIST}
        onClick={() =>(go(ROUTES.CARD_LIST))}>
        Cards
      </MenuLink>

      <MenuLink
        id='link-create'
        current={current === ROUTES.CARD_CREATOR}
        onClick={() =>(go(ROUTES.CARD_CREATOR))}>
        Create
      </MenuLink>
    </MenuWrapper>
  )
}

export default Menu
