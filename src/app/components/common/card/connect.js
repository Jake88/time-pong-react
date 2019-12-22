import { connect } from 'react-redux'


export const mapStateToProps = state => {

  return {
  }
}

export const mapDispatchToProps = dispatch => ({
  // drawCard: () => dispatch(actions.startTimer())
})

export default connect(mapStateToProps, mapDispatchToProps)
