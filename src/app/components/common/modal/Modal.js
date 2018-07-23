import React from 'react'
import PropTypes from 'prop-types'
import {
  Overlay,
  ModalWrapper
} from './styles'

const Modal = (props) => {
  const { height, width } = props

  return (
    <Overlay>
      <ModalWrapper height={height} width={width}>
        {props.children}
      </ModalWrapper>
    </Overlay>
  )
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
