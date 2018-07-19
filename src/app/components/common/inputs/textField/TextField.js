import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  Text,
  Label,
  Error
} from './styles'

const TextField = props => {
  const { input, meta, label, placeholder, type } = props
  return (
    <FieldWrapper>
      <Label
        htmlFor={input.name}
        error={meta.touched && meta.error}
        active={meta.active}>{label}</Label>
      <Text
        {...input}
        id={input.name}
        placeholder={placeholder}
        type={type || 'text'}
        error={meta.touched && meta.error}
        active={meta.active}
      />

      <Error error={meta.touched && meta.error}>{meta.touched && (meta.error) || '\u00A0'}</Error>
    </FieldWrapper>
  )
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default TextField