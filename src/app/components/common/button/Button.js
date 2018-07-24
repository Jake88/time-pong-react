import React from 'react'
import propTypes, {varietyTypes} from './propTypes'
import {
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  BrandButton
} from './styles'

const varietyMap = {
  [varietyTypes.LINK]: LinkButton,
  [varietyTypes.BRAND]: BrandButton,
  [varietyTypes.SECONDARY]: SecondaryButton,
  [varietyTypes.PRIMARY]: PrimaryButton
}

const Button = (props) => {
  const { variety } = props
  const ButtonType = varietyMap[variety] || PrimaryButton

  return (
    <ButtonType {...props}>
      {props.icon}
      <span>{props.children}</span>
    </ButtonType>
  )
}

Button.propTypes = propTypes

export default Button
