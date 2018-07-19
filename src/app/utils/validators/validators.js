import DefaultMessages from './defaultMessages'
import { trim } from 'utils/Utils'

export const validateRequired = currentValue => !trim(currentValue) && `Please fill in this field`

export const validatePassword  = currentValue => {
  if (currentValue && currentValue.length < 6) {
    return 'Please enter a password of at least 6 characters'
  }
}

export const validateEmail  = currentValue => {
  const email = trim(currentValue)
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(String(email).toLowerCase())) {
    return `The email entered looks invalid`
  }
}

export const validateConfirmPassword  = (currentValue, allValues) => {
  if (currentValue !== allValues.password) {
    return `Password does not match`
  }
}
