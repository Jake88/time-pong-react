import DefaultMessages from './defaultMessages'
import { trim } from 'utils/Utils'

export const validateRequired = currentValue => !trim(currentValue) && `Please fill in this field`

export const validateMediumPassword  = currentValue => {
  const pw = trim(currentValue)
  const re = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
  if (pw && !re.test(pw)) {
    return `Sorry, the web's dangerous and your password is weak`
  }
}
export const validateStrongPassword  = currentValue => {
  const pw = trim(currentValue)
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  if (pw && !validateMediumPassword(pw) && !re.test(pw)) {
    return `Could be stronger, but it's good enough`
  }
}

export const validateEmail  = currentValue => {
  const email = trim(currentValue)
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!re.test(String(email).toLowerCase())) {
    return `The email entered looks invalid`
  }
}

export const validateConfirmPassword  = (currentValue, allValues) => {
  if (currentValue !== allValues.password) {
    return `Password does not match`
  }
}
