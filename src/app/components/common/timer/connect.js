import { connect } from 'react-redux'
import {
  selectors,
  actions
} from 'services/timer'

export const mapStateToProps = state => {

  return {
    currentTime: selectors.getFormattedTime(state)
  }
}

export const mapDispatchToProps = dispatch => ({
  // drawCard: () => dispatch(actions.startTimer())
})

export default connect(mapStateToProps, mapDispatchToProps)
