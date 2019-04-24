import { connect } from 'react-redux'
// import { updateUserInformation } from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state, ownProps) => {
  return {
    userInformation: state.user
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(updateUserInformation(ownProps.userInformation))
//     }
//   }
// }

const HeaderCase = connect(
  mapStateToProps
)(Header)

export default HeaderCase