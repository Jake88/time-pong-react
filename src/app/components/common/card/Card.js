import React, { useState } from 'react'

import {
  DarkOverlay,
  CardContainer,
  InnerWrapper
} from './styles'

/*
 TODO: Two new game changer cards that extend the time and reduce the time for x number fo rounds
 TODO: Split the card json into the sets
*/

const Card = () => {
  const [isFlipped, setFlipped] = useState(false)

  return (
    <React.Fragment>
      <DarkOverlay className='open'/>

      <CardContainer className='open'>
        <InnerWrapper flipped={isFlipped}>
          jhglkjsdfsdf sdflksdmlk asdlkmasd ckmasd
        </InnerWrapper>
      </CardContainer>
    </React.Fragment>
  )
}

export default Card
