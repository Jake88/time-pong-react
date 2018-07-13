import tinycolor from 'tinycolor2'

const darken = (colour, percent = 10) => tinycolor.mix(colour, '#000', percent).toString()
const lighten = (colour, percent = 10) => tinycolor.mix(colour, '#fff', percent).toString()
const fade = (colour, fraction = 0.2) => tinycolor(colour).setAlpha(fraction).toString()
const createPalette = colour => ({
  darker: darken(colour),
  darkest: darken(colour, 50),
  lighter: lighten(colour),
  lightest: lighten(colour, 50),
  faded: fade(colour)
})

export const font = {
  weights: {
    normal: '400',
    heavy: '600'
  },
  sizes: {
    small: '12px',
    normal: '16px',
    large: '20px',
    title: '28px'
  },
  families: {
    normal: '"Montserrat", sans-serif'
  }
}

export const spacing = {
  nil: 0,
  small: '8px',
  normal: '16px',
  large: '20px'
}

const PRIMARY_COLOUR = '#550b60'
const SECONDARY_COLOUR = '#E4FF14'
export const colours = {
  primary: Object.assign({default: PRIMARY_COLOUR}, createPalette(PRIMARY_COLOUR)),
  secondary: Object.assign({default: SECONDARY_COLOUR}, createPalette(SECONDARY_COLOUR)),

  white: '#fff',
  offWhite: '#efefef',
  lightGrey: '#cecece',
  grey: '#999',
  darkGrey: '#666',
  black: '#222'
}

export const radius = {
  small: '4px',
  large: '8px'
}

export const borders = {
  thin: '1px solid',
  thick: '2px solid'
}

export const transitions = {
  slow: '0.8s',
  normal: '0.4s',
  fast: '0.2s',
}

export const specifics = {
  stickyHeaderHeight: '48px',
  navHeight: '196px'
}

export const breakpoints = {
  desktop: '1000px'
}