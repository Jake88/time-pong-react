import React from 'react'
import PropTypes from 'prop-types'
import {
  Panel
} from './styles'

const ContentPanel = props => {
  const {
    children,
    status
  } = props

  return (
    <Panel>
      {status.loading && <h2>Loading, please wait.</h2>}
      {children}
      {status.error && <h2>{status.error.message}</h2>}
    </Panel>
  )
}

ContentPanel.propTypes = {
  status: PropTypes.shape({
    error: PropTypes.object,
    loading: PropTypes.bool
  })
}

export default ContentPanel
