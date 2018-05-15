import { connect } from "react-redux"
import { updateUser } from "../actions/user"
import { bindActionCreators } from "redux"

import Connection from "../components/Connection"

const mapStateToProps = state => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: bindActionCreators(updateUser, dispatch)
  }
}

const FinalConnection = connect(mapStateToProps, mapDispatchToProps)(Connection)

export default FinalConnection
