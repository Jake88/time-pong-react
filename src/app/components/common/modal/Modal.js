import React from 'react'
import PropTypes from 'prop-types'
import {
  Overlay,
  ModalWrapper
} from './styles'

class Modal extends React.Component {
  componentWillMount() {
    document.body.style.overflowY = 'hidden'
  }

  componentWillUnmount() {
    document.body.style.overflowY = 'auto'
  }

  render() {
    const { height, width, children } = this.props

    return (
      <Overlay>
        <ModalWrapper height={height} width={width}>
          {children}
        </ModalWrapper>
      </Overlay>
    )
  }
}

Modal.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number
}

Modal.defaultProps = {
  height: 350,
  width: 250
}

export default Modal
