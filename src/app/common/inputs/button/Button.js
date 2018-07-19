import React from 'react'
import PropTypes from 'prop-types'
import {
  PrimaryButton,
  LinkButton,
  BrandButton
} from './styles'

const Button = (props) => {
  const { variety } = props

  let ButtonType = PrimaryButton

  switch (variety) {
    case 'link':
      ButtonType = LinkButton
      break
    case 'brand':
      ButtonType = BrandButton
      break
    case 'secondary':
      ButtonType = LinkButton
      break
  }

  return (
    <ButtonType {...props}>
      {props.icon}
      <span>{props.children}</span>
    </ButtonType>
  )
}

Button.propTypes = {
  icon: PropTypes.element
}

export default Button