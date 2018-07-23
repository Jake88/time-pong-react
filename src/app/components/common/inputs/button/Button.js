import React from 'react'
import propTypes, {varietyTypes} from './propTypes'
import {
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  BrandButton
} from './styles'

const Button = (props) => {
  const { variety } = props

  let ButtonType = PrimaryButton

  switch (variety) {
    case varietyTypes.LINK:
      ButtonType = LinkButton
      break
    case varietyTypes.BRAND:
      ButtonType = BrandButton
      break
    case varietyTypes.SECONDARY:
      ButtonType = SecondaryButton
      break
  }

  return (
    <ButtonType {...props}>
      {props.icon}
      <span>{props.children}</span>
    </ButtonType>
  )
}

Button.propTypes = propTypes

export default Button