import { connect } from "react-redux"
import { createUser } from "../actions/user"
import { bindActionCreators } from "redux"
import { withRouter } from "react-router-dom"

import Connection from "../components/Connection"

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    pushUser: bindActionCreators(createUser, dispatch)
  }
}

const FinalConnection = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Connection)
)

export default FinalConnection
