export const formatTime = miliseconds => (miliseconds / 1000).toFixed(2)

export const trim = str => {
  if (!str) { return '' }
  if (typeof str !== 'string') {
    throw(`Expected string to trim, recieved ${typeof str} for ${str}`)
  }
  return str.replace(' ', '')
}