import React from 'react'
import {
  IngredientsList,
  Ingredient,
  MethodsList,
  Step
} from './styles'
import {
  Title,
  SubHeader,
  AlteredText
} from 'components/common/styledComponents'
import Button from 'components/common/inputs/button'
import { Circle } from 'styled-icons/fa-regular/Circle'
import { Suitcase } from 'styled-icons/fa-solid/Suitcase'
import { Beer } from 'styled-icons/fa-solid/Beer'

const Instructions = (props) => (
  <React.Fragment>
    <Title>
      How to play
    </Title>

    <SubHeader>
      What you'll need
    </SubHeader>
    <IngredientsList>
      <Ingredient>
        <Suitcase />
        <label>3+ plastic cups</label>
      </Ingredient>
      <Ingredient>
        <Circle />
        <label>3+ Ping Pong balls</label>
      </Ingredient>
      <Ingredient>
        <Beer />
        <label>Drinks!</label>
      </Ingredient>
    </IngredientsList>

    <SubHeader>
      Steps to play
    </SubHeader>
    <MethodsList>
      <Step>
        Randomly select a starting player. They take the ping pong ball and place the cup should on the table in front of them.
      </Step>
      <Step>
        Place this app in plain sight of everyone, ideally in the middle of the group.
      </Step>
      <Step>
        When the game starts, the starting player must bounce the ping pong ball on the table and into the cup.
      </Step>
      <Step>
        If the balls goes in on the <AlteredText heavy>first attempt</AlteredText>, that player may pass the cup to <AlteredText heavy>anyone</AlteredText> in the group.
      </Step>
      <Step>
        On any <AlteredText heavy>subsequent attempt</AlteredText>, the player <AlteredText heavy>must</AlteredText> pass the cup to the person to their left.
      </Step>
      <Step>
        When the timer stops, the player with the cup in their possession has lost and must follow the card instructions.
      </Step>
    </MethodsList>
    <Button>
      Let's Play
    </Button>
  </React.Fragment>
)

export default Instructions
