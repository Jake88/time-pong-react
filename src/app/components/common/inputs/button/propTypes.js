import PropTypes from 'prop-types'

export const varietyTypes = {
  LINK: 'link',
  BRAND: 'brand',
  SECONDARY: 'secondary',
  PRIMARY: 'primary'
}

export default {
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variety: PropTypes.oneOf(Object.values(varietyTypes)),
  icon: PropTypes.element,
  small: PropTypes.bool
}
