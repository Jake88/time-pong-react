import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'components/common/modal'

import { Circle } from 'styled-icons/fa-regular/Circle'
import { CheckCircle } from 'styled-icons/fa-regular/CheckCircle'
import { TimesCircle } from 'styled-icons/fa-regular/TimesCircle'

import Button, { ButtonPropTypes, buttonVarietyTypes, ButtonGroup } from 'components/common/button'

import {
  LoadIndicatorAligner,
  LoadIndicator,
  LoadLabel,
  LoadMessage,
  FlexStretch
} from './styles'

const Loader = (props) => {
  const {
    retry,
    apiReset,
    status,
    successMessage,
    successButton
  } = props

  return (
    <Modal>
      <LoadIndicatorAligner>
        <LoadIndicator status={status}>
          {status.loading ? <Circle /> : status.error ? <TimesCircle /> : <CheckCircle />}
        </LoadIndicator>
      </LoadIndicatorAligner>

      <LoadLabel status={status}>
        {status.loading ? `Doing stuff` : status.error ? `D'oh!` : `Poggers!`}
      </LoadLabel>

      <FlexStretch>
        {status.error && (
          <React.Fragment>
            <LoadMessage>{status.error}</LoadMessage>
            <ButtonGroup direction='vertical'>
              <Button
                id='loaderClose'
                variety={buttonVarietyTypes.SECONDARY}
                onClick={() => apiReset(status.originalAction.type)}
              >
                Close
              </Button>
              <Button
                id='loaderTryAgain'
                onClick={() => retry(status.originalAction)}
              >
                Try again
              </Button>
            </ButtonGroup>
          </React.Fragment>
        )}

        {status.success && (
          <React.Fragment>
            <LoadMessage>{successMessage}</LoadMessage>
            <Button
              {...successButton}
              onClick={() => {
                apiReset(status.originalAction.type)
                successButton.onClick()
              }}
            >
              {successButton.label}
            </Button>
          </React.Fragment>
        )}
      </FlexStretch>
    </Modal>
  )
}

Loader.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool
  }),
  successMessage: PropTypes.string,
  successButton: PropTypes.shape(
    Object.assign(
      { label: PropTypes.string.isRequired }, ButtonPropTypes
    )
  ).isRequired
}

export default Loader
